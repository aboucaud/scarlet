from functools import partial

import numpy as np
from proxmin.operators import prox_plus, prox_hard, prox_soft

from . import interpolation
from . import operator
from . import measurement
from .bbox import trim
from .cache import Cache

def positive_sed(component):
    """Make the SED non-negative
    """
    if component._sed.fixed:
        return component

    prox_plus(component._sed, component._sed.step)
    return component


def positive_morph(component):
    """Make the morphology non-negative
    """
    if component._morph.fixed:
        return component

    prox_plus(component._morph, component._morph.step)
    return component


def positive(component):
    """Make both the SED and morpholgy non-negative
    """
    positive_sed(component)
    positive_morph(component)
    return component


def normalized(component, type='morph_max'):
    """Normalize SED or morphology

    In order to break degeneracies, either the SED or
    morphology should have some form of normalization.
    For consistency this should normally be the same for
    all components in a blend.

    For `type='sed'` the sed matrix is normalized to
    sum to unity.

    For `type='morph'` the morphology matrix is normalized
    to sum to unity.

    For `type='morph_max'` the morphology matrix is
    normalized so that its maximum value is one.
    """
    if component._sed.fixed or component._morph.fixed:
        return component

    t = type.lower()
    if t == 'sed':
        norm = component._sed.sum()
        component._sed[:] = component._sed / norm
        component._morph[:] = component._morph * norm
    elif t == 'morph':
        norm = component._morph.sum()
        component._sed[:] = component._sed * norm
        component._morph[:] = component._morph / norm
    elif t == 'morph_max':
        norm = component._morph.max()
        component._sed[:] = component._sed * norm
        component._morph[:] = component._morph / norm
    else:
        raise ValueError("Unrecognized normalization '{0}'".format(type))
    return component


def sparse_l0(component, thresh):
    """L0 norm (sparsity) on morphology
    """
    if component._morph.fixed:
        return component

    prox_hard(component._morph, component._morph.step, thresh)
    return component


def sparse_l1(component, thresh):
    """L1 norm (sparsity) on morphology
    """
    if component._morph.fixed:
        return component

    prox_soft(component._morph, component._morph.step, thresh)
    return component


def threshold(component):
    """Set a cutoff threshold for pixels below the noise

    Use the log histogram of pixel values to determine when the
    source is fitting noise. This function works well to prevent
    faint sources from growing large footprints but for large
    diffuse galaxies with a wide range of pixel values this
    does not work as well.

    The region that contains flux above the threshold is contained
    in `component.bboxes["thresh"]`.
    """
    thresh, _bins = measurement.threshold(component.morph)
    component.morph[component.morph < thresh] = 0
    bbox = trim(component.morph)
    if not hasattr(component, "bboxes"):
        component.bboxes = {}
    component.bboxes["thresh"] = bbox
    return component


def monotonic(component, pixel_center, use_nearest=False, thresh=0, exact=False, bbox=None):
    """Make morphology monotonically decrease from the center

    Parameters
    ----------
    exact: `bool`
        Whether to use the (very slow) exact monotonicity proximal operator
        (`exact` is `True`) or a projection operator to the monotonic space.

    See `~scarlet.operator.prox_monotonic`
    for a description of the other parameters.
    """
    if component._morph.fixed:
        return component

    if bbox is not None:
        # Only apply monotonicity to the pixels inside the bounding box
        morph = component._morph[bbox.slices]
        shape = morph.shape
        if shape[0] <= 1 or shape[1] <= 1:
            return component
        center = pixel_center[0]-bbox.bottom, pixel_center[1]-bbox.left
    else:
        morph = component._morph
        shape = component.shape[-2:]
        center = pixel_center
    morph = morph.copy()

    prox_name = "update.monotonic"
    key = (shape, center, use_nearest, thresh, exact)
    # The creation of this operator is expensive,
    # so load it from memory if possible.
    try:
        prox = Cache.check(prox_name, key)
    except KeyError:
        if not exact:
            prox = operator.prox_strict_monotonic(shape, use_nearest=use_nearest,
                                                  thresh=thresh, center=center)
        else:
            # Exact monotonicy still needs to be tested and implmented with v0.5.
            raise NotImplementedError("Exact monotonicity is not currently supported")
            # cone method for monotonicity: exact but VERY slow
            G = operator.getRadialMonotonicOp(shape, useNearest=use_nearest).L.toarray()
            prox = partial(operator.prox_cone, G=G)
        Cache.set(prox_name, key, prox)

    step_size = component._morph.step
    prox(morph, step_size)
    if bbox is not None:
        component._morph[:] = np.zeros(component._morph.shape, dtype=component._morph.dtype)
        component._morph[bbox.slices] = morph
    else:
        component._morph[:] = morph
    return component


def translation(component, direction=1, kernel=interpolation.lanczos, padding=3):
    """Shift the morphology by a given amount
    """
    if component._morph.fixed:
        return component

    dy, dx = component.shift
    dy *= direction
    dx *= direction
    _kernel, _, _ = interpolation.get_separable_kernel(dy, dx, kernel=kernel)
    component._morph[:] = interpolation.fft_resample(component._morph, dy, dx)
    return component


def symmetric(component, pixel_center, algorithm="kspace", bbox=None, fill=None, strength=.5):
    """Make the source symmetric about its center

    See `~scarlet.operator.prox_uncentered_symmetry`
    for a description of the parameters.
    """
    if bbox is not None:
        # Only apply monotonicity to the pixels inside the bounding box
        morph = component._morph[bbox.slices]
        shape = morph.shape
        if shape[0] <= 1 or shape[1] <= 1:
            return component
        center = pixel_center[0]-bbox.bottom, pixel_center[1]-bbox.left
    else:
        morph = component._morph
        shape = component.shape[-2:]
        center = pixel_center

    step_size = component._morph.step
    try:
        shift = component.shift
    except AttributeError:
        shift = None
    operator.prox_uncentered_symmetry(morph, step_size, center, algorithm, fill, shift, strength)
    if bbox is not None:
        component._morph[:] = np.zeros(component._morph.shape, dtype=component._morph.dtype)
        component._morph[bbox.slices] = morph
    else:
        component._morph[:] = morph
    return component
