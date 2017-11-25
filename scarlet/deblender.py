from __future__ import print_function, division
import numpy as np
from functools import partial

import proxmin
from proxmin.nmf import Steps_AS
from . import transformations
from . import operators

import logging
logger = logging.getLogger("scarlet")

class Source(object):
    def __init__(self, x, y, img, psf=None, constraints=None, sed=None, morph=None, fix_sed=False, fix_morph=False, shift_center=0.2, prox_sed=None, prox_morph=None):

        # set up coordinates and images sizes
        self.x = x
        self.y = y
        self.B, Ny, Nx = img.shape # NOTE: Ny,Nx property as they may change
        # TODO: make cutout of img and weights (with odd pixel number!)
        self.bb = (slice(0, self.B), slice(0, Ny), slice(0, Nx))

        # set sed and morph (either from argument or img)
        self._set_sed(img, sed)
        self._set_morph(img, morph)

        # set up psf and translations matrices
        if psf is None:
            self.P = None
        else:
            self.P = self._adapt_PSF(psf)
        self.shift_center = shift_center
        self._translate_psf()

        # set constraints: first projection-style
        self.constraints = constraints
        self._set_sed_prox(prox_sed, fix_sed)
        self._set_morph_prox(prox_morph, fix_morph)
        # ... then ADMM-style constraints (proxs and L matrices)
        self._set_constraints()

    def __len__(self):
        return self.sed.shape[0]

    @property
    def K(self):
        return self.__len__()

    @property
    def shape(self):
        return tuple([s.stop-s.start for s in self.bb])

    @property
    def Nx(self):
        return self.bb[2].stop - self.bb[2].start

    @property
    def Ny(self):
        return self.bb[1].stop - self.bb[1].start

    @property
    def image(self):
        morph_shape = (self.K,) + self.shape[1:]
        return self.morph.reshape(morph_shape) # this *should* be a view

    def get_model(self, combine=True, Gamma=None):
        if Gamma is None:
            Gamma = self.Gamma
        # model for all components of this source
        if hasattr(Gamma, 'shape'): # single matrix: one for all bands
            model = np.empty((self.K, self.B, self.Ny*self.Nx))
            for k in range(self.K):
                model[k] = np.outer(self.sed[k], Gamma.dot(self.morph[k]))
        else:
            model = np.zeros((self.K, self.B, self.Ny*self.Nx))
            for k in range(self.K):
                for b in range(self.B):
                    model[k,b] += self.sed[k,b] * Gamma[b].dot(self.morph[k])

        # reshape the image into a 2D array
        model = model.reshape(self.K, self.B, self.Ny, self.Nx)
        if combine:
            model = model.sum(axis=0)
        return model

    def get_shifted_model(self, model=None):
        if model is None:
            model = self.get_model(combine=True)
        diff_img = [self.get_model(combine=True, Gamma=self.dGamma_x), self.get_model(combine=True, Gamma=self.dGamma_y)]
        diff_img[0] = (model-diff_img[0])/self.shift_center
        diff_img[1] = (model-diff_img[1])/self.shift_center
        return diff_img

    def get_morph_error(self, weights):
        B, Ny, Nx = self.shape
        w = weights[self.bb].reshape(B, Ny*Nx)
        # compute direct error propagation assuming only this source SED(s)
        # and the pixel covariances: Sigma_morph = diag((A^T Sigma^-1 A)^-1)
        # CAVEAT: If done on the entire A matrix, degeneracies in the linear
        # solution arise and substantially amplify the error estimate:
        # A = self.sed.T
        # return np.sqrt(np.diagonal(np.linalg.inv(np.dot(np.multiply(self.w.T[:,None,:], A.T), A)), axis1=1, axis2=2))
        # Instead, estimate noise for each component separately:
        # simple multiplication for diagonal pixel covariance matrix
        return [np.dot(a.T, np.multiply(w, a[:,None]))**-0.5 for a in self.sed]

    def get_sed_error(self, weights):
        B, Ny, Nx = self.shape
        w = weights[self.bb].reshape(B, Ny*Nx)
        # See explanation in get_morph_error
        return [np.dot(s,np.multiply(w.T, s[None,:].T))**-0.5 for s in self.morph]

    def _set_sed(self, img, sed):
        if sed is None:
            # init A from SED of the peak pixels
            self.sed = np.empty((1, self.B))
            self.sed[0] = img[:,int(self.y),int(self.x)]
            # ensure proper normalization
            self.sed[0] = proxmin.operators.prox_unity_plus(self.sed[0], 0)
        else:
            # to allow multi-component sources, need to have KxB array
            if len(sed.shape) != 2:
                self.sed = sed.reshape((1,len(sed)))
            else:
                self.sed = sed.copy()

    def _set_sed_prox(self, prox_sed, fix_sed):
        if hasattr(fix_sed, '__iter__') and len(fix_sed) == self.K:
            self.fix_sed = fix_sed
        else:
            self.fix_sed = [fix_sed] * self.K

        if prox_sed is None:
            self.prox_sed = [proxmin.operators.prox_unity_plus] * self.K
        else:
            if hasattr(prox_sed, '__iter__') and len(prox_sed) == self.K:
                self.prox_sed = prox_sed
            else:
                self.prox_sed = [prox_sed] * self.K

    def _set_morph(self, img, morph):
        if morph is None:
            # TODO: init from the cutout values (ignoring blending)
            _, Ny, Nx = self.shape
            cx, cy = int(Nx/2), int(Ny/2)
            self.morph = np.zeros((1, Ny*Nx))
            tiny = 1e-10
            flux = np.abs(img[:,cy,cx].mean()) + tiny
            self.morph[0,cy*Nx+cx] = flux
        else:
            # to allow multi-component sources, need to have K x Nx*Ny array
            if len(morph.shape) == 3: # images for each component
                self.morph = morph.reshape((morph.shape[0], -1))
            elif len(morph.shape) == 2:
                if morph.shape[0] == self.K: # vectors for each component
                    self.morph = morph.copy()
                else: # morph image for one component
                    self.morph = morph.flatten().reshape((1, -1))
            elif len(morph.shape) == 1: # vector for one component
                self.morph = morph.reshape((1, -1))
            else:
                raise NotImplementedError("Shape of morph not understood: %r" % morph.shape)

    def _set_morph_prox(self, prox_morph, fix_morph):
        if hasattr(fix_morph, '__iter__') and len(fix_morph) == self.K:
            self.fix_morph = fix_morph
        else:
            self.fix_morph = [fix_morph] * self.K

        if prox_morph is None:
            if self.constraints is None or ("l0" not in self.constraints.keys() and "l1" not in self.constraints.keys()):
                self.prox_morph = [proxmin.operators.prox_plus] * self.K
            else:
                # L0 has preference
                if "l0" in self.constraints.keys():
                    if "l1" in self.constraints.keys():
                        logger.warn("l1 penalty ignored in favor of l0 penalty")
                    self.prox_morph = [partial(proxmin.operators.prox_hard, thresh=self.constraints['l0'])] * self.K
                else:
                    self.prox_morph = [partial(proxmin.operators.prox_soft_plus, thresh=self.constraints['l1'])] * self.K
        else:
            if hasattr(prox_morph, '__iter__') and len(prox_morph) == self.K:
                self.prox_morph = prox_morph
            else:
                self.prox_morph = [prox_morph] * self.K

    def _translate_psf(self):
        """Build the operators to perform a translation
        """
        Tx, Ty = transformations.getTranslationOps((self.Ny, self.Nx), self.x, self.y)
        self.Gamma = transformations.getGammaOp(Tx, Ty, self.B, self.P)

        # for centroid shift: compute shifted Gammas
        if self.shift_center:
            # TODO: optimize dxy to be comparable to likely shift
            # TODO: Alternative: Grid of shifted PSF to interpolate at any given ddx/ddy
            dxy = self.shift_center
            Tx_, Ty_ = transformations.getTranslationOps((self.Ny, self.Nx), self.x, self.y, dxy, dxy)
            # get the shifted image in x/y by adjusting only the Tx/Ty
            self.dGamma_x = transformations.getGammaOp(Tx_, Ty, self.B, self.P)
            self.dGamma_y = transformations.getGammaOp(Tx, Ty_, self.B, self.P)

    def _adapt_PSF(self, psf):
        # Simpler for likelihood gradients if psf = const across B
        if hasattr(psf, 'shape'): # single matrix
            return transformations.getPSFOp(psf, self.shape[1:])

        P = []
        for b in range(self.B):
            P.append(transformations.getPSFOp(psf[b], self.shape[1:]))
        return P

    def _set_constraints(self):
        self.proxs_g = [None, []] # no constraints on A matrix
        self.Ls = [None, []]
        if self.constraints is None:
            self.proxs_g[1] = None
            self.Ls[1] = None
            return

        shape = self.shape[1:]
        for c in self.constraints.keys():
            if c == "M":
                # positive gradients
                self.Ls[1].append(transformations.getRadialMonotonicOp(shape, useNearest=self.constraints[c]))
                self.proxs_g[1].append(proxmin.operators.prox_plus)
            elif c == "S":
                # zero deviation of mirrored pixels
                self.Ls[1].append(transformations.getSymmetryOp(shape))
                self.proxs_g[1].append(proxmin.operators.prox_zero)
            elif c == "c":
                useNearest = self.constraints.get("M", False)
                G = transformations.getRadialMonotonicOp(shape, useNearest=useNearest).toarray()
                self.proxs_g[1].append(partial(operators.prox_cone, G=G))
                self.Ls[1].append(None)
            elif (c == "X" or c == "x"): # X gradient
                cx = int(self.Nx)
                self.Ls[1].append(proxmin.transformations.get_gradient_x(shape, cx))
                if c == "X": # all positive
                    self.proxs_g[1].append(proxmin.operators.prox_plus)
                else: # l1 norm for TV_x
                    self.proxs_g[1].append(partial(proxmin.operators.prox_soft, thresh=self.constraints[c]))
            elif (c == "Y" or c == "y"): # Y gradient
                cy = int(self.Ny)
                self.Ls[1].append(proxmin.transformations.get_gradient_y(shape, cy))
                if c == "Y": # all positive
                    self.proxs_g[1].append(proxmin.operators.prox_plus)
                else: # l1 norm for TV_x
                    self.proxs_g[1].append(partial(proxmin.operators.prox_soft, thresh=self.constraints[c]))


class Blend(object):
    """The blended scene as interpreted by the deblender.
    """
    def __init__(self, sources):
        assert len(sources)
        self._register_sources(sources)

        # TODO: Blend then collects all e_rel and e_abs from each source
        # ... and remove it from deblend()

        # list of all proxs_g and Ls: first A, then S
        self.proxs_g = [source.proxs_g[0] for source in self.sources] + [source.proxs_g[1] for source in self.sources]
        self.Ls = [source.Ls[0] for source in self.sources] + [source.Ls[1] for source in self.sources]    # for S

    def _register_sources(self, sources):
        self.sources = sources # do not copy!
        self.M = len(self.sources)
        self.K =  sum([source.K for source in self.sources])
        self.psf_per_band = not hasattr(sources[0].Gamma, 'shape')

        # lookup of source/component tuple given component number k
        self._source_of = []
        self.update_centers = False
        for m in range(self.M):
            self.update_centers |= bool(self.sources[m].shift_center)
            for l in range(self.sources[m].K):
                self._source_of.append((m,l))

    def source_of(self, k):
        return self._source_of[k]

    def component_of(self, m, l):
        # search for k that has this (m,l), inverse of source_of
        for k in range(self.K):
            if self._source_of[k] == (m,l):
                return k
        raise IndexError

    def __len__(self):
        """Number of distinct sources"""
        return self.M

    def set_data(self, img, psfs=None, weights=None, update_order=None, slack=0.9):
        self.it = 0
        self.center_min_dist = 1e-3
        self.center_wait = 10
        self.center_skip = 10
        if update_order is None:
            self.update_order = range(2)
        else:
            self.update_order = update_order
        self.img_shape = img.shape
        B, Ny, Nx = self.img_shape
        self._img = img.reshape(B,-1)
        self._set_weights(weights)
        WAmax = np.max(self._weights[1])
        WSmax = np.max(self._weights[2])
        self._stepAS = Steps_AS(WAmax=WAmax, WSmax=WSmax, slack=slack, update_order=self.update_order)
        self.step_AS = [None] * 2

    def _set_weights(self, weights):
        if weights is None:
            self._weights = [1,1,1]
        else:
            assert self.img_shape == weights.shape
            B, Ny, Nx = self.img_shape
            self._weights = [weights.reshape(B,-1), None, None] # [W, WA, WS]

            # for S update: normalize the per-pixel variation
            # i.e. in every pixel: utilize the bands with large weights
            # CAVEAT: need to filter out pixels that are saturated in every band
            norm_pixel = np.median(weights, axis=0)
            mask = norm_pixel > 0
            self._weights[2] = weights.copy()
            self._weights[2][:,mask] /= norm_pixel[mask]
            self._weights[2] = self._weights[2].reshape(B,-1)

            # reverse is true for A update: for each band, use the pixels that
            # have the largest weights
            norm_band = np.median(weights, axis=(1,2))
            # CAVEAT: some regions may have one band missing completely
            mask = norm_band > 0
            self._weights[1] = weights.copy()
            self._weights[1][mask] /= norm_band[mask,None,None]
            # CAVEAT: mask all pixels in which at least one band has W=0
            # these are likely saturated and their colors have large weights
            # but are incorrect due to missing bands
            mask = ~np.all(weights>0, axis=0)
            # and mask all bands for that pixel:
            # when estimating A do not use (partially) saturated pixels
            self._weights[1][:,mask] = 0
            self._weights[1] = self._weights[1].reshape(B,-1)

    def prox_f(self, X, step, Xs=None, j=None):

        # which update to do now
        AorS = j//self.K
        k = j%self.K
        B, Ny, Nx = self.img_shape

        # computing likelihood gradients for S and A:
        # build model only once per iteration
        if k == 0:
            if AorS == self.update_order[0]:
                models =  self.get_model(combine=False) # model each each source over image
                self._model = np.sum(models, axis=0).reshape(B,-1)

                # update positions?
                # CAVEAT: Need valid self._model for the next step
                if self.update_centers:
                    if self.it >= self.center_wait and self.it % self.center_skip == 0:
                        self._update_positions(models)
                self.it += 1
            # compute weighted residuals
            self._diff = self._weights[AorS + 1]*(self._model-self._img)

        # A update
        if AorS == 0:
            m,l = self.source_of(k)
            if not self.sources[m].fix_sed[l]:
                # gradient of likelihood wrt A
                if not self.psf_per_band:
                    grad = self._diff.dot(self.sources[m].Gamma.dot(self.sources[m].morph[l]))
                else:
                    grad = np.empty_like(X)
                    for b in range(B):
                        grad[b] = self._diff[b].dot(self.sources[m].Gamma[b].dot(self.sources[m].morph[l]))

                # apply per component prox projection and save in source
                self.sources[m].sed[l] =  self.sources[m].prox_sed[l](X - step*grad, step)
            return self.sources[m].sed[l]

        # S update
        elif AorS == 1:
            m,l = self.source_of(k)
            if not self.sources[m].fix_morph[l]:
                # gradient of likelihood wrt S
                grad = np.zeros_like(X)
                if not self.psf_per_band:
                    for b in range(B):
                        grad += self.sources[m].sed[l,b]*self.sources[m].Gamma.T.dot(self._diff[b])
                else:
                    for b in range(B):
                        grad += self.sources[m].sed[l,b]*self.sources[m].Gamma[b].T.dot(self._diff[b])

                # apply per component prox projection and save in source
                self.sources[m].morph[l] = self.sources[m].prox_morph[l](X - step*grad, step)
            return self.sources[m].morph[l]
        else:
            raise ValueError("Expected index j in [0,%d]" % (2*self.K))

    def _update_positions(self, models):
        # residuals weighted with full/original weight matrix
        y = (self._weights[0]*(self._model-self._img)).flatten()
        for k in range(self.K):
            if self.sources[k].shift_center:
                diff_x,diff_y = self.sources[k].get_shifted_model(model=models[k])
                # least squares for the shifts given the model residuals
                MT = np.vstack([diff_x.flatten(), diff_y.flatten()])
                if not hasattr(self._weights[0],'shape'): # no/flat weights
                    ddx,ddy = np.dot(np.dot(np.linalg.inv(np.dot(MT, MT.T)), MT), y)
                else:
                    ddx,ddy = np.dot(np.dot(np.linalg.inv(np.dot(MT, MT.T*self._weights[0].flatten()[:,None])), MT), y)
                if ddx**2 + ddy**2 > self.center_min_dist**2:
                    self.sources[k].x -= ddx
                    self.sources[k].y -= ddy
                    self.sources[k]._translate_psf()
                    logger.info("Source %d shifted by (%.3f/%.3f) to (%.3f/%.3f)" % (k, -ddx, -ddy, self.sources[k].x, self.sources[k].y))

    def steps_f(self, j, Xs):
        # which update to do now
        AorS = j//self.K
        k = j%self.K

        # computing likelihood gradients for S and A: only once per iteration
        # TODO: stepAS does change over several iterations, but we compute A,S
        # each time
        if AorS == self.update_order[0] and k==0:
            # build temporary A,S matrices
            B, Ny, Nx = self.img_shape
            A, S = np.empty((B,self.K)), np.empty((self.K,Nx*Ny))
            for k_ in range(self.K):
                m,l = self._source_of[k_]
                A[:,k_] = self.sources[m].sed[l]
                # TODO: This will be more complicated with source boxes!
                S[k_,:] = self.sources[m].morph[l].flatten()

            self.step_AS[0] = self._stepAS(0, [A, S])
            self.step_AS[1] = self._stepAS(1, [A, S])
        return self.step_AS[AorS]

    def get_model(self, m=None, combine=True):
        """Compute the current model for the entire image
        """
        _model_img = np.zeros(self.img_shape)
        if m is None:
            # needs to have source components combined
            model = [source.get_model(combine=True) for source in self.sources]
            if combine:
                for m in range(self.M):
                    _model_img[self.sources[m].bb] += model[m]
                model_img = _model_img
            else:
                model_img = [_model_img.copy() for m in range(self.M)]
                for m in range(self.M):
                    model_img[m][self.sources[m].bb] = model[m]
        else:
            model = self.source[m].get_model(combine=combine)
            if len(model.shape) == 4: # several components in model
                model_img = [_model_img.copy() for k in range(model.shape[0])]
                for k in range(model.shape[0]):
                    model_img[k][self.sources[m].bb] = model[k]
            else:
                _model_img[self.sources[m].bb] = model
                model_img = _model_img
        return model_img



def deblend(img, sources, weights=None, psf=None, sky=None, max_iter=200, e_rel=1e-2, traceback=False):

    if sky is None:
        Y = img
    else:
        Y = img-sky

    # config parameters for bSDMM and Blend
    slack = 0.9
    steps_g = None
    steps_g_update = 'steps_f'
    update_order=[1,0] # S then A

    # construct Blender from sources and define objective function
    blend = Blend(sources)
    blend.set_data(Y, weights=weights, update_order=update_order, slack=slack)
    prox_f = blend.prox_f
    steps_f = blend.steps_f
    proxs_g = blend.proxs_g
    Ls = blend.Ls

    # collect all SEDs and morphologies, plus associated errors
    XA = []
    XS = []
#    e_absA = []
#    e_absS = []
    for k in range(blend.K):
        m,l = blend.source_of(k)
        XA.append(blend.sources[m].sed[l])
        XS.append(blend.sources[m].morph[l])
#        e_absA.append(blend.sources[m].sed_std * e_rel)
#        e_absS.append(blend.sources[m].morph_std * e_rel)
    X = XA + XS

    # update_order for bSDMM is over *all* components
    if update_order[0] == 0:
        update_order = range(2*blend.K)
    else:
        update_order = range(blend.K,2*blend.K) + range(blend.K)

    # TODO: if e_abs is set here, it cannot be changed iteratively, which
    # makes the error limits sensitive to the source Initialization.
    # That's mostly OK for the morphology (which needs the SED the be OK),
    # but sed errors *really* improve over time as the models grow out and
    # cover more pixels
    # Alternative: make e_abs a member of Blend
    #e_abs = e_absA + e_absS
    e_abs = 1e-3

    # run bSDMM on all SEDs and morphologies
    res = proxmin.algorithms.bsdmm(X, prox_f, steps_f, proxs_g, steps_g=steps_g, Ls=Ls, update_order=update_order, steps_g_update=steps_g_update, max_iter=max_iter, e_rel=e_rel, e_abs=e_abs, accelerated=True, traceback=traceback)

    if not traceback:
        return blend
    else:
        _, tr = res
        return blend, tr
