Search.setIndex({docnames:["0-quickstart","1-concepts","api/scarlet","api/scarlet.bbox","api/scarlet.blend","api/scarlet.cache","api/scarlet.component","api/scarlet.constraint","api/scarlet.display","api/scarlet.fft","api/scarlet.frame","api/scarlet.initialization","api/scarlet.interpolation","api/scarlet.measure","api/scarlet.model","api/scarlet.morphology","api/scarlet.observation","api/scarlet.operator","api/scarlet.parameter","api/scarlet.prior","api/scarlet.psf","api/scarlet.renderer","api/scarlet.source","api/scarlet.spectrum","api/scarlet.wavelet","changes","index","install","regression","tutorials","tutorials/display","tutorials/multiresolution","tutorials/point_source","tutorials/wavelet_model"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,nbsphinx:3,sphinx:56},filenames:["0-quickstart.ipynb","1-concepts.ipynb","api/scarlet.rst","api/scarlet.bbox.rst","api/scarlet.blend.rst","api/scarlet.cache.rst","api/scarlet.component.rst","api/scarlet.constraint.rst","api/scarlet.display.rst","api/scarlet.fft.rst","api/scarlet.frame.rst","api/scarlet.initialization.rst","api/scarlet.interpolation.rst","api/scarlet.measure.rst","api/scarlet.model.rst","api/scarlet.morphology.rst","api/scarlet.observation.rst","api/scarlet.operator.rst","api/scarlet.parameter.rst","api/scarlet.prior.rst","api/scarlet.psf.rst","api/scarlet.renderer.rst","api/scarlet.source.rst","api/scarlet.spectrum.rst","api/scarlet.wavelet.rst","changes.rst","index.rst","install.rst","regression.rst","tutorials.rst","tutorials/display.ipynb","tutorials/multiresolution.ipynb","tutorials/point_source.ipynb","tutorials/wavelet_model.ipynb"],objects:{"scarlet.cache":{Cache:[5,1,1,""]},"scarlet.cache.Cache":{check:[5,2,1,""],set:[5,2,1,""]},"scarlet.constraint":{CenterOnConstraint:[7,1,1,""],Constraint:[7,1,1,""],ConstraintChain:[7,1,1,""],L0Constraint:[7,1,1,""],L1Constraint:[7,1,1,""],MonotonicityConstraint:[7,1,1,""],NormalizationConstraint:[7,1,1,""],PositivityConstraint:[7,1,1,""],SymmetryConstraint:[7,1,1,""],ThresholdConstraint:[7,1,1,""]},"scarlet.constraint.ThresholdConstraint":{threshold:[7,2,1,""]},"scarlet.fft":{Fourier:[9,1,1,""],convolve:[9,3,1,""],match_psf:[9,3,1,""],shift:[9,3,1,""]},"scarlet.fft.Fourier":{fft:[9,2,1,""],from_fft:[9,2,1,""],image:[9,2,1,""],shape:[9,2,1,""]},"scarlet.frame":{Frame:[10,1,1,""]},"scarlet.frame.Frame":{C:[10,2,1,""],Nx:[10,2,1,""],Ny:[10,2,1,""],bbox:[10,2,1,""],convert_pixel_to:[10,2,1,""],from_observations:[10,2,1,""],get_pixel:[10,2,1,""],get_sky_coord:[10,2,1,""],psf:[10,2,1,""],shape:[10,2,1,""]},"scarlet.interpolation":{apply_2D_trapezoid_rule:[12,3,1,""],bilinear:[12,3,1,""],catmull_rom:[12,3,1,""],common_projections:[12,3,1,""],cubic_spline:[12,3,1,""],get_affine:[12,3,1,""],get_angles:[12,3,1,""],get_common_padding:[12,3,1,""],get_filter_bounds:[12,3,1,""],get_filter_coords:[12,3,1,""],get_pixel_size:[12,3,1,""],get_projection_slices:[12,3,1,""],get_psf_size:[12,3,1,""],get_separable_kernel:[12,3,1,""],interpolate_observation:[12,3,1,""],lanczos:[12,3,1,""],mitchel_netravali:[12,3,1,""],mk_shifter:[12,3,1,""],project_image:[12,3,1,""],quintic_spline:[12,3,1,""],sinc2D:[12,3,1,""],sinc_interp:[12,3,1,""],sinc_interp_inplace:[12,3,1,""],subsample_function:[12,3,1,""]},"scarlet.model":{Model:[14,1,1,""],UpdateException:[14,4,1,""]},"scarlet.model.Model":{check_parameters:[14,2,1,""],children:[14,2,1,""],get_model:[14,2,1,""],get_models_of_children:[14,2,1,""],get_parameter:[14,2,1,""],parameters:[14,2,1,""],update:[14,2,1,""]},"scarlet.operator":{diagonalizeArray:[17,3,1,""],diagonalsToSparse:[17,3,1,""],find_Q:[17,3,1,""],find_relevant_dim:[17,3,1,""],getOffsets:[17,3,1,""],getRadialMonotonicWeights:[17,3,1,""],proj:[17,3,1,""],proj_dist:[17,3,1,""],project_disk_sed:[17,3,1,""],project_disk_sed_mean:[17,3,1,""],prox_cone:[17,3,1,""],prox_kspace_symmetry:[17,3,1,""],prox_sdss_symmetry:[17,3,1,""],prox_soft_symmetry:[17,3,1,""],prox_uncentered_symmetry:[17,3,1,""],prox_weighted_monotonic:[17,3,1,""],proximal_disk_sed:[17,3,1,""],sort_by_radius:[17,3,1,""],uncentered_operator:[17,3,1,""],use_relevant_dim:[17,3,1,""]},"scarlet.parameter":{Parameter:[18,1,1,""],relative_step:[18,3,1,""]},"scarlet.parameter.Parameter":{is_finite:[18,2,1,""]},"scarlet.prior":{Prior:[19,1,1,""]},"scarlet.prior.Prior":{grad:[19,2,1,""]},"scarlet.psf":{FunctionPSF:[20,1,1,""],GaussianPSF:[20,1,1,""],ImagePSF:[20,1,1,""],MoffatPSF:[20,1,1,""],PSF:[20,1,1,""],normalize:[20,3,1,""]},"scarlet.psf.FunctionPSF":{expand_dims:[20,2,1,""]},"scarlet.psf.GaussianPSF":{get_model:[20,2,1,""]},"scarlet.psf.ImagePSF":{get_model:[20,2,1,""]},"scarlet.psf.MoffatPSF":{get_model:[20,2,1,""]},"scarlet.psf.PSF":{get_model:[20,2,1,""],prepare_param:[20,2,1,""]},"scarlet.wavelet":{InputError:[24,4,1,""],Starlet:[24,1,1,""],get_starlet_shape:[24,3,1,""],iuwt:[24,3,1,""],mad_wavelet:[24,3,1,""],mk_starlet:[24,3,1,""]},"scarlet.wavelet.Starlet":{coefficients:[24,2,1,""],direct_transform:[24,2,1,""],filter:[24,2,1,""],image:[24,2,1,""],norm:[24,2,1,""],scales:[24,2,1,""],shape:[24,2,1,""],transform:[24,2,1,""]},scarlet:{cache:[5,0,0,"-"],constraint:[7,0,0,"-"],fft:[9,0,0,"-"],frame:[10,0,0,"-"],interpolation:[12,0,0,"-"],model:[14,0,0,"-"],operator:[17,0,0,"-"],parameter:[18,0,0,"-"],prior:[19,0,0,"-"],psf:[20,0,0,"-"],wavelet:[24,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:exception"},terms:{"00683385":0,"01279404":1,"01422727":1,"015044047532164796":1,"02035177":1,"027118815493023137":1,"02782697011630998":1,"03339863":1,"05397656":0,"0568967":0,"05929413054496282":1,"06668474":1,"0x7f269ecc7a90":1,"0x7f269f4db8b0":1,"0x7f26a45fe280":1,"100":[0,28,30],"11418213":0,"118813":32,"12028":31,"1291":1,"1306":1,"131":33,"132":33,"133":33,"1359":1,"1386":1,"139":0,"13s":31,"14172363":0,"16199838":0,"167":0,"180753":33,"18399065":0,"19976005":30,"19987995":30,"1min":33,"1st":12,"200":[32,33],"2004":30,"2011":1,"2014":1,"2015":18,"2018":[1,18],"2019":1,"21313027":0,"21397917":1,"21573725":1,"216":0,"22146014":0,"2224104597472498":1,"22819056":0,"24424821045":33,"2624846":0,"263":0,"284":1,"28860925":0,"290":1,"2nd":12,"2x2":12,"2xm":12,"2xn":12,"30034993":0,"30530":0,"31270":0,"320":0,"346":0,"35205007775":32,"36850120729":31,"369":0,"37950636":0,"38079386":0,"387":0,"3min":31,"40011998":30,"41348267":0,"41741162":0,"42192922":1,"43077825":1,"4418":1,"44557912":0,"4494":1,"45672858":1,"46790913":1,"520":0,"5215815":0,"58960342":1,"59139969":0,"59988002":30,"59s":31,"6002401":30,"61026001":0,"64154205":0,"647":0,"66745705":0,"6722313":0,"67936066":1,"685721964197":0,"69799805":0,"7026115":0,"72689315":0,"74843418":1,"76902234":1,"78394048":0,"79095238":0,"82984195":0,"83001445":0,"84907222":1,"85283971":1,"86802229":1,"89712297":1,"8xn":17,"91217191":0,"925075272906":0,"94549561":0,"95521605":1,"9813":28,"99244574":0,"9924668":0,"abstract":[14,19,20],"break":[25,26],"byte":[18,31],"case":[0,1,17,25,26,27,30,33],"class":[0,1,5,7,9,10,12,14,17,18,19,20,24,25,26,31,33],"default":[0,1,25,26,27,30,31,33],"final":[1,31],"float":[1,12,17,18,20,24],"function":[0,1,7,12,17,20,25,26,30,33],"import":[0,1,25,26,30,31,32,33],"int":[7,9,10,12,17,24,33],"long":1,"new":[0,9,12,17,30,33],"return":[1,9,10,12,14,17,20,24,25,26,30,31,33],"short":1,"static":[5,9,10],"super":1,"switch":30,"throw":17,"true":[0,1,9,20,24,30,31,32,33],"try":0,"while":[1,12,17,25,26,30,32,33],Axes:9,But:[0,1,33],For:[0,1,7,17,30,31],Into:1,Not:20,One:[25,26],RMS:31,That:[0,1,25,26,31],The:[0,1,7,9,10,12,14,17,18,24,25,26,27,30,31,32,33],Their:1,Then:27,There:1,These:[0,1],Use:[7,12,32],Uses:[7,17],Using:[1,17],WCS:[0,1,10,12,31,33],With:[0,1,31,33],__call__:1,__class__:[0,1],__dict__:1,__init__:1,__iter__:1,__name__:[0,1],_build:27,_imag:24,abc:[14,19],abl:1,about:[0,1,7,12,18,28,32],abov:[0,1,7,27,30],abs:33,absolut:[1,7,24,33],acceler:[25,26],accept:[0,1,25,26,27],access:[1,14,25,26],accord:7,account:0,accur:[0,17],accuraci:28,across:[1,10,32],act:[7,17],activ:1,actual:0,adam:1,adaprox:[1,25,26],adapt:[1,25,26],add:[0,1,30],add_box:[0,31,32,33],add_mark:[0,30],add_subplot:0,added:[1,25,26],adding:7,addit:[0,1,9,32],additon:1,adjust:[1,14,29],advantag:[1,33],advis:[12,17],affect:31,after:[17,18,32],afterward:31,against:[1,17],algorithm:[1,17,24,25,26,27],align:[1,17],all:[0,1,5,7,10,14,17,18,24,25,26,28,30,31,32,33],allow:[0,1,7,17,25,26,27,30],alon:27,along:[9,25,26],alpha:20,alpha_i:1,alpha_j:1,alreadi:[0,27],also:[0,1,28,30,31],altern:[1,7,31],alwai:[17,25,26],ambigu:1,amount:[1,12,17],amplitud:[0,1,31,32],analysi:1,analyt:1,angl:[1,12,17],ani:[0,1,9,10,25,26,30,31,33],annot:30,anoth:[0,1],ansatz:1,anywher:[25,26],api:[0,1],appear:[1,17,30],append:[0,31,32,33],appli:[12,17,24,25,26],apply_2d_trapezoid_rul:12,apply_filt:12,apply_trapezoid_rul:12,approach:0,appropri:[17,32],approxim:[0,12,25,26],arbitrari:[25,26],arcsinh:30,area:12,argument:[1,10,12,25,26],aris:1,arithmeticerror:14,around:[12,17,30,33],arr:17,arrai:[1,9,10,12,14,17,18,20,24,31,33],arrang:0,artifact:9,asinh:[30,32],asinhmap:[0,30,31,32,33],aspect:[0,1],assess:30,associ:33,assum:[0,1,12,25,26,30],assumpt:[1,33],astrometr:1,astronom:26,astrophys:1,astropi:[0,1,10,25,26,27,30,31,33],attach:[25,26],attempt:[0,27,32],attribut:[1,9,10,14,18,20,24],autograd:[25,26,27],autom:33,automat:27,avail:[0,1,27],averag:[1,17],avoid:[1,17],awai:[17,25,26],axes:[9,25,26,33],axi:[1,18,30,31,33],azimuth:1,back:[0,17],background:[1,30,31,32,33],band:[0,1,12,17,20,25,26,30,31,32,33],bare:0,base:[0,1,5,7,9,10,12,14,17,18,19,20,24,25,26],basic:1,bbox:[2,7,10,26],becaus:[0,1,17,25,26,30,31,33],been:[1,9,25,26,33],befor:[0,9,12,27,33],beforehand:1,behavior:[1,25,26],being:[1,17],below:[1,7,24,31],best:[0,25,26],beta:[20,30],better:[1,17,25,26,31,32],between:[0,1,12,17,31],bg_hsc:31,bg_hst:31,bg_rm:[25,26,31,33],bg_rms_hsc:33,bilinear:[12,25,26],binari:[25,26],bit:[17,32],bkg:[31,33],black:30,blend:[0,2,25,26,28,29,33],blend_:0,blendflag:[25,26],bloat:0,blue:[0,1,32,33],bluer:17,blur:0,bookkeep:[25,26],bool:[9,18,20,33],both:[0,1,17,25,26,31,32],bottom:12,bound:[1,12,20,25,26,31],boundingbox:[25,26],box:[0,1,10,12,17,20,25,26,31],boxsiz:20,boyd:1,bright:[30,33],bring:[1,30],broad:[1,30],broadband:1,buffer:18,bug:31,build:[1,17,25,26,33],build_ext:27,built:0,bulg:17,bulge_s:17,bxnyxnx:12,byteswap:31,cach:[2,24,26],calcul:[9,12,17,25,26,27,31],call:[0,1,9,25,26,33],cam:31,can:[0,1,5,9,12,17,20,24,25,26,30,31,32,33],cannot:[0,1,17],captur:1,carri:30,catalog:[0,29,30,31,32],catalog_hst:31,cataog:33,catmull_rom:12,caus:[25,26],celesti:30,cell:30,center:[0,1,7,12,17,20,25,26,30,32,33],centeronconstraint:7,central:[1,12,17,24,33],centroid:[0,25,26],chain:7,chang:[0,1],channel:[0,1,10,25,26,30,31,32,33],channel_map:30,channels_hsc:31,channels_hst:31,channels_to_rgb:30,characterist:10,check:[5,14,18,33],check_paramet:14,children:[14,20],choic:[30,33],choos:[0,1],chose:33,chosen:[5,30],circular:20,clang:27,clarifi:[25,26],clariti:0,cleanli:30,clearli:0,clone:27,close:[0,1,30],closer:[1,17],closest:[1,7],cmap:[0,31,32,33],coars:24,code:[0,25,26,27,33],coeffici:[24,31,33],collect:[0,1,25,26,28,33],color:[0,1,17,25,26,30,31,32,33],colorbar:[1,33],colormap:[0,31,32,33],colour:33,column:[12,17],com:27,combett:1,combin:[0,1,25,26,27,30,33],combinedcompon:1,combinedextendedsourc:[25,26],come:1,command:[0,27],commandlinetool:27,commit:[25,26],common:[1,10,12],common_project:12,compact:[0,33],compactextendedsourc:[0,1],compar:[0,17,30,31],comparison:[0,28],compat:1,compil:27,complain:1,complet:[1,17,25,26],complex:[1,5,9,33],complic:[1,25,26],compoent:0,compon:[0,2,7,12,17,25,26,29,30],componentlist:[25,26],componenttre:[25,26],compris:31,comput:[0,1,12,19,24,31],concaten:1,concept:[0,7,26],conda:27,cone:17,config:[25,26],configur:14,confin:[25,26],confirm:32,confus:[25,26],connect:1,consequ:7,consist:[0,25,26,30],constant:[25,26],constrain:[0,1,7,17,25,26],constraint:[0,2,18,25,26,33],constraintchain:[1,7],construct:[0,1,10,17],consum:18,contain:[1,7,9,10,12,17,25,26,28,31],content:[1,5],continu:28,contrast:1,conveni:[0,1,30],convent:[0,5],converg:[0,1,17,33],convert:[10,17,30,31,32],convert_pixel_to:10,convex:7,convinc:32,convolut:[0,1,9,12,24,25,26],convolv:[9,24],coord:[10,12,17],coord_hr:12,coord_lr:12,coord_target:10,coordin:[0,1,10,12,17,31],copi:27,core:[0,20,26,32],corner:12,correct:[1,25,26,32],correct_psf:1,correctli:[25,26],correl:1,correspond:24,cos:1,cosmo:28,cost:1,could:[0,1,17],counter:[1,18],cover:[1,10],coverag:[0,10,31],cpu:[0,31,32,33],creat:[1,9,12,17,20,24,25,26,29],criterion:7,critic:[0,30],crowd:32,ctype:18,cube:[1,12,24,25,26,30,32,33],cubecompon:1,cubic:[12,25,26],cubic_splin:12,cubix:12,curiou:[1,28,32],current:[1,25,26,27,28],custom:[0,1,17,25,26],cut_hsc1:31,cut_hst1:31,cutoff:[7,25,26],data:[1,10,17,18,25,26,28,29,30,32],data_hr:33,data_hsc:31,data_hst:31,data_lr:33,dataset:28,deal:0,debend:[25,26],deblend:[1,25,26],dec:0,decid:[1,31],declar:[1,33],decomposit:[24,33],deconvolv:10,decreas:[0,1,7],deep:28,deeper:[1,32],def:[1,31,33],defin:[1,12,17,20,25,26,29,30,31],degener:1,degeneraci:[1,25,26],degrad:0,degre:[1,28],demand:1,demonstr:[1,30,32],denois:24,depend:27,deploy:27,deprec:[25,26,27],depth:[0,1],deriv:[1,25,26],descent:1,describ:[0,1,12,17],descript:[0,1,7,12,30],desir:[0,1,9,24],detail:[1,12,17,18],detect:[0,29,31],detect_imag:[31,33],determin:[0,1,7,25,26,30],develop:28,deviat:[1,20,24],diag:17,diagon:17,diagonalizearrai:17,diagonalstospars:17,dict:12,dictionari:9,didx:17,differ:[0,1,9,12,17,25,26,28,31,32,33],differenti:[1,7],difficulti:28,diffus:7,dimens:[0,9,12,17,18],dimension:[17,25,26],dirac:24,direct:[1,10,12,18,24,31,33],direct_transform:24,directli:0,directori:27,disapoint:24,discard:17,discontinu:17,discuss:1,disk:17,disk_s:17,displai:[2,25,26,29],distanc:17,distinguish:1,distribut:[1,18,19],diverg:[25,26],dnx:12,dny:12,doabl:1,doc:[25,26],docstr:27,document:[0,1],doe:[1,7,12,17,25,26,27,31],doesn:[25,26],domain:12,domin:0,don:[0,1,27,31,32,33],done:[0,25,26,31,33],download:27,draw:0,drop:[25,26],dtype:[10,12,17,18],due:[25,26],dump:0,dure:[1,17,18,27,32],e_rel:[0,1,31,32,33],each:[0,1,9,10,12,17,18,24,25,26,28,30,31,33],earli:[0,33],earlier:1,easier:[1,25,26],easiest:27,easili:[0,1],edg:[12,25,26],effect:[1,17],eigen:27,either:[1,9],element:[0,1,10,14,17,18,25,26],elif:0,els:[0,31,32,33],emphasi:1,empir:31,emploi:1,employ:1,enabl:[0,1],encod:[1,7,19],end:[0,12,30,33],endian:31,enforc:[1,17],enough:[0,1,32],ensembl:33,ensur:[1,7,17,28],enter:1,entir:[0,1,25,26,33],enumer:[0,1,30,33],epoch:26,equal:[1,30],err:[31,33],error:[1,18,24,27],especi:[1,32],estim:[1,12,18,32,33],eta:20,etc:[0,1,5],euclidean:1,evalu:[12,17,20],even:[0,1,9,30],eventu:1,everi:[0,1,7,20,30],everyth:[0,17],exact:17,exact_lipschitz:[25,26],exactli:0,exampl:[0,1,9,17,31,33],except:[14,17,24],exclud:18,execut:1,exist:[25,26],expand_dim:20,expect:[0,1,7,12,17,31,33],expens:1,explain:1,explan:24,exploit:1,express:24,extend:[0,1,32,33],extendedsourc:[0,1,17,25,26,31,32,33],extent:1,extra:[9,27],extract:[12,31,33],f814w:31,fact:[1,17],factor:[1,12,18,25,26],factorizedcompon:[1,25,26],factorizedmodel:1,fail:0,faint:[7,30],fake:28,fall:0,fallback:0,fals:[0,1,12,18,20,25,26,31],familli:33,far:1,fast:[1,9,25,26],faster:[25,26],feasibl:7,featur:[0,1,30,33],few:1,fft:[2,12,24,25,26],fft_shape:9,field:32,fig:[0,30],figsiz:[0,30,31,33],figur:[0,30,33],file:[0,27],fill:17,fill_valu:1,filter:[0,1,12,24,25,26,29,32,33],filter_curv:[25,26],filter_valu:12,find:[1,7,17],find_q:17,find_relevant_dim:17,finit:[14,18,33],first:[0,18,24,30,31,32,33],fit:[1,7,25,26,29],fitsfixedwarn:33,fitter:[0,1],fix:[1,18,20],fix_morph:[25,26],fix_pixel_cent:[25,26],fix_s:[25,26],flag:18,flat:[1,7,17,18],flexibl:[1,33],float32:10,float64:[12,17],floor:12,fluent:0,flux:[1,7,17,25,26,30,31],flux_at_edg:[25,26],fold:24,folder:27,follow:7,fonction:24,fontsiz:33,footprint:[7,25,26],forbidden:1,forc:[17,25,26],form:[1,20],format:[0,1,17,30],forward:14,found:27,fourier:[9,12,17,24,25,26],frac:[1,30],fraction:[1,12,17,25,26],frame:[2,12,17,20,25,26,29,30],frame_wc:12,free:1,freedom:[0,1],frobeniu:1,from:[0,1,7,9,10,12,14,17,18,20,24,25,26,27,28,30,31,32,33],from_fft:9,from_observ:[10,31],frome:31,full:[1,20,27,29,30,31],fulli:[0,33],func:17,functioncompon:[25,26],functionpsf:20,functool:1,fundament:1,further:[1,25,26],futur:33,gaia:32,galaxi:[1,7,17,31,32,33],gaussian:[0,1,20],gaussianpsf:[0,20,31,32,33],gener:[0,1,9,10,12,17,33],get:[0,1,10,12,14,17,20,24,25,27,31],get_affin:12,get_angl:12,get_common_pad:12,get_filter_bound:12,get_filter_coord:12,get_flux:[25,26],get_model:[0,14,20,25,26,32,33],get_models_of_children:[14,20],get_paramet:[14,20],get_pixel:[1,10],get_pixel_s:12,get_pixel_spectrum:1,get_projection_slic:12,get_psf_siz:12,get_separable_kernel:12,get_sky_coord:[10,31],get_starlet_shap:24,getoffset:17,getradialmonotonicweight:17,getsourc:1,gist_stern:33,git:[25,26,27],github:27,give:30,given:[0,7,9,12,17,24,33],globalrm:[31,33],goal:1,goe:[30,33],going:[0,33],gone:[25,26],good:[0,1,17,30],grad:[1,19],gradient:[1,7,17,18,19,25,26,27],grai:31,greatest:1,grid:[12,25,26,31],grism:1,ground:0,grow:7,guess:[1,29,32],guid:[1,26],guidelin:1,h_imag:12,h_target:12,half:1,hand:[28,31],handl:[25,26],happili:0,hard:1,has:[0,1,9,25,26,27,31,33],hasattr:[0,1],hashabl:10,have:[0,1,7,12,14,17,18,24,25,26,27,30,31,32,33],header:[0,27,31],height:10,held:[1,18],help:[1,25,26,33],here:[0,1,30,33],hierarch:[25,26],high:[12,25,26,31,33],higher:[0,24,25,26,31],highest:[10,17],highli:1,hing:1,histogram:7,hold:[0,1,5,18,27,31],home:27,homogen:1,host:1,how:[0,1,7,9,31,32,33],howev:[0,1,17,30],hr_imag:[31,33],hsc:[1,17,28,31],hsc_cosmos_35:[0,1,30],hst:31,hst_hdu:31,html:27,http:27,hubbl:31,human:30,hyper:[1,17,31],hyperplan:17,hyperspectr:[0,1,30],ibb:12,ident:0,identifi:[10,18,25,26],idx:32,imag:[1,9,12,17,18,20,24,25,26,30,31,32,33],image_fft:9,image_shap:9,imagepsf:[0,20,30,31,32,33],imaginari:[17,18],img1:12,img2:12,img:[12,31],img_rgb:[0,30,32,33],img_to_channel:[25,26],img_to_rgb:[0,30,32,33],impact:30,implement:[0,12,20,25,26,30],impli:1,implicitli:[1,30],imposs:1,improp:1,improv:[0,1,25,26],imshow:[0,1,30,32,33],incant:33,includ:[1,14,20,25,26,28,30],incorpor:10,incorrect:1,incorrectli:1,independ:[0,1],index:[10,17,20,27,32],indic:17,individu:[0,1,25,26,30,31,33],inevit:1,infer:1,inferno:[0,32],inform:[0,1,9,12,18,25,26,33],inherit:[25,26],init:[1,32],init_all_sourc:0,initi:[1,2,17,25,26,29,32],initialis:31,inject:28,inlin:[0,1,30,31,32,33],input:[1,12,24,25,26,30],inputerror:24,insert:[1,12],insid:[12,17],insight:1,inspect:[0,1,25,26,30,33],instal:[25,26],instanc:[0,1,9,25,26,31],instead:[0,1,25,26,27],instruct:0,instrument:[1,26,31],integr:[0,12,20,27],intens:[1,30],interact:[1,17,18,26,28],interest:[1,28],interfac:[1,25,26],intern:[0,1,14,17,25,26],interp:[12,31,33],interp_imag:12,interpol:[0,2,25,26,31,32,33],interpolate_observ:[12,31],interrupt:14,intersect:[1,10,31],intial:1,introduc:[1,25,26],introduct:[0,25,26],invers:[1,24,33],invert:24,involv:[25,26],irfft:9,irregular:33,is_finit:18,is_star:32,isn:12,isol:[0,30],issu:[1,25,26],it_:0,items:18,iter:[0,1,17,18,24,25,26,31,32,33],its:[0,1,7,9,10,17,20,24,25,26,30,33],itself:[1,30],iuwt:24,ixslic:12,iyslic:12,jupyt:30,just:[0,1,25,26,30],kale:18,keep:[17,25,26],kei:[1,5,30],kept:17,kernel:[0,9,12,25,26],keyword:[12,25,26],kingma:18,know:[0,1,32],knowledg:1,kspace:17,kumar:18,kwarg:[12,14,17],l0constraint:7,l1constraint:7,l_2:1,label:[0,1],lanczo:[12,25,26],larg:[1,7,31],larger:[0,12,17,25,26],largest:0,last:[0,1],later:[17,32],latter:[0,1],law:20,layer:1,layout:18,lead:[1,17,33],least:[0,1],leav:17,left:[1,12,30],len:[0,31,33],length:[17,18],leq:1,less:[17,30,31,32],let:[0,30,31,33],level:[17,24,31,32,33],leverag:[0,1,33],libc:27,librari:[0,1,26,27],libstdc:27,lies:1,like:[0,1,12,17,18,25,26],likelihood:[0,1,19,25,26,27,33],line:1,linear:[0,12,30,33],linearmap:30,link:1,lipschitz:[25,26],list:[0,1,7,10,14,20,25,26,31],live:0,load:[1,26,27,29,30,32],local:[1,27,31],locat:[0,1,10,12,17,30,32],log2:24,log:[1,7,19],logarithm:1,logic:[25,26,30,32],logl:[0,31,32,33],logl_:0,longer:[25,26],longest:30,look:[0,30,31,33],lookup:5,loss:7,lost:0,low:[12,31,33],lower:[0,1,12,25,26,31,32],lowresobserv:[25,26,31],lpha:20,lsbg:33,lsbg_rgb:33,lsst:[0,25,26,30],lstdc:27,lupton:[1,30],lupton_rgb:30,lust:17,lvl:[24,31,33],m_k:1,machineri:[0,33],macos_sdk_headers_for_macos_10:27,mad:24,mad_wavelet:[24,33],made:[0,17],magnitud:1,mai:[0,1,27,28,30,32],main:1,mainli:12,major:17,make:[0,1,7,9,17,25,26,27,30,31,33],make_lupton_rgb:30,make_oper:[25,26],makecatalog:[31,33],mani:[1,17],manifold:1,manual:33,map:[0,1,25,26,30,31,32],mark:33,markers:33,mask:[1,17],masked_arrai:1,match:[0,1,9,10,25,26,30,31,32,33],match_psf:9,mathbb:1,mathemat:[0,1,7],mathsf:1,matplotlib:[0,1,27,30,31,32,33],matric:[17,33],matrix:[1,17,25,26],matter:31,max:[1,31,32],max_compon:0,maxim:[1,18],maximum:[0,1,33],mayb:0,mean:[1,17,18,33],measur:[2,12,25,26,30],mechan:1,median:24,melchior:1,member:[25,26],memori:[18,25,26],mention:[1,33],messag:24,met:1,meta:1,metadata:[0,1,25,26],method:[0,1,5,7,9,10,12,14,18,19,20,24,25,26,30,31,33],metric:[1,28],mew:32,might:[0,9,17,25,26,30,33],mimic:30,min:[30,32],min_gradi:[7,17],min_snr:0,min_step:1,minim:[0,1],minimum:[0,1,17,18,27,30,31,32,33],minor:1,minu:1,mitchel_netravali:12,mixtur:1,mk_shifter:12,mk_starlet:24,mode:1,model:[1,2,7,10,12,17,20,25,26,28,29],model_:[0,32],model_affin:12,model_fram:[0,1,30,31,32,33],model_frame_:0,model_psf:[0,10,31,32,33],model_rgb:[0,33],model_wc:[10,12],modul:[1,18,25,26,30],modular:[25,26],moffat:20,moffatpsf:20,moment:18,monoton:[0,7,17,25,26,33],monotonicityconstraint:[1,7],monotonicti:17,more:[0,1,17,25,26,30,31,32,33],morph:[7,25,26],morpholog:[0,1,2,7,12,17,25,26,33],most:[0,1,25,26,27,33],mostli:28,move:27,much:[1,17,31],multi:[0,1,25,26,29],multiband:[0,30,31],multicomponentsourc:[25,26],multiextendedsourc:[0,1],multipl:[0,1,9,25,26],must:[0,1,12,27],n_i:1,name:[1,5,10,17,18,20,25,26,31],narrow:1,nate:17,nativ:[1,31],navig:27,nbsphinx:27,nbyte:18,ndarrai:[12,18,24,33],ndim:18,ndimension:[25,26],nearest:[1,12,17],necessari:[1,12,31],necessarili:1,need:[0,1,7,12,14,17,18,25,26,27,30,31,32,33],neg:[1,30],neighbor:[1,12,17],neighbor_weight:[1,7,17],new_sourc:[0,32,33],newbyteord:31,newer:27,next:31,niter:24,nois:[0,1,7,24,30,31,32,33],noise_rm:1,non:[0,1,7,14],none:[0,1,7,9,10,12,14,17,18,20,24,30,31,32,33],norm:[0,1,24,30,31,32,33],norm_hsc:31,norm_hst:31,normal:[0,20,25,26,30],normalis:[31,33],normalizationconstraint:[1,7],notat:0,note:[0,12,30,31,32],notebook:[27,30],notic:[0,30],now:[0,17,25,26,31,33],np1:31,np2:31,npz:[0,30,32],number:[0,1,9,10,12,18,24,25,26,31],numer:9,numpi:[0,1,10,12,17,18,24,27,30,31,32,33],numpydoc:27,nxn:17,nyxnx:12,object:[0,1,5,7,9,10,12,18,24,25,26,30,32,33],obs:[1,31],obs_hdu:31,obs_hr:31,obs_hsc:31,obs_hst:31,obs_id:10,obs_lr:31,observ:[2,10,12,17,25,26,29,30],occur:24,ochr:1,odd:[9,12,24,25,26],off:[17,30,32],offer:1,offset:[17,20],often:[0,1,7,17,30],old:[25,26],onc:1,one:[0,1,17,18,24,25,26,33],ones:[0,1,31,32],ones_lik:[32,33],onli:[1,7,12,14,17,18,31,33],onto:[1,5,7,10,17,30],opaqu:17,open:[0,1,26,30,31,33],oper:[1,2,5,7,25,26,30],oppos:[0,25,26],optim:[1,14,17,18,19,20,25,26,27],optimim:1,optimimz:[14,20],option:[0,1,20,25,26,27,30,31],order:[0,7,9,12,17,30,31],ordin:14,ordinari:1,organ:1,origin:[0,17,31,32,33],other:[0,1,7,17,18,24,31],otherwis:[0,1,30,33],our:[0,1,31,32,33],out:[1,30],outsid:[1,14,17],over:[0,1,12,18,20,33],overal:[1,32],overcomplet:33,overhaul:[25,26],overlap:[0,1],overview:26,overwrit:[25,26],own:1,packag:[0,1,7,25,26,27,31,33],pad:[9,12,17,24,25,26],pad_shap:12,page:27,pair:[0,1],panel:0,paramet:[2,7,9,10,12,14,17,20,24,25,26,30,33],parameter:1,parametr:[0,1],paremet:12,parikh:1,parramet:19,part:[0,17,18],partial:1,particularli:33,partner:17,pass:[12,17,25,26,30],patch:[17,25,26,28],path:[14,27],pattern:0,peak:[1,17,25,26,32],peigen:27,penalti:[1,7,17],per:[0,1],percept:30,perfect:1,perfectli:17,perform:[0,1,12,17,20,24,25,26,28,32,33],peril:1,pesquet:1,phisic:12,photometri:32,photutil:0,physic:[1,12],pick:[1,32],pickl:[0,1,25,26,30,33],pictur:33,piec:1,pip:27,pixel:[0,1,7,10,12,17,20,24,25,26,31,32,33],pixel_hst:31,pkg:27,pkl:33,place:[0,12,25,26],plane:17,plot:[0,25,26,28,30,32,33],plt:[0,1,30,31,32,33],pmelchior:27,pnorm:32,point:[0,1,7,18,25,26,29],pointsourc:[0,1,25,26,32],pointsourcemorpholog:[1,25,26],poorli:32,popul:1,popular:1,portion:[1,17,31],posit:[0,12,17,25,26],positivityconstraint:[1,7],possibl:1,postag:1,poster:0,posteriori:1,potenti:[7,25,26,32],power:20,practic:[1,32],pre:0,precis:[1,12],precomput:31,prefer:[1,25,26],prepare_param:20,present:[14,30],preserv:[0,30],prevent:[1,7,9],previou:17,previous:33,prgb:32,primari:1,principl:31,print:[0,1,30,31,32,33],prior:[2,18,25,26,27,32],probabl:[1,17,27],problem:[1,17],proce:[1,30],procedur:[12,33],process:[1,33],product:12,profil:33,profound:1,proj:17,proj_dist:17,project:[1,7,12,17,25,26],project_disk_s:17,project_disk_sed_mean:17,project_imag:12,prone:1,proper:32,properli:[1,25,26],properti:[1,7,9,10,14,18,24,33],propto:1,prototyp:1,provid:[0,1,14,20,25,26,30,31],prox_con:17,prox_kspace_symmetri:17,prox_monoton:[7,17],prox_sdss_symmetri:17,prox_soft_symmetri:17,prox_uncentered_symmetri:[7,17],prox_weighted_monoton:17,proxim:[1,5,7,25,26,27],proximal_disk_s:17,proxmim:7,proxmin:[1,7,25,26,27],psf1:9,psf2:9,psf:[0,1,2,9,10,12,25,26,30,31,32,33],psf_hsc:31,psf_hst:31,psf_unmatched_sim:32,pure:1,purpos:1,push:5,pybind11:27,pyplot:[0,1,30,31,32,33],pyramid:0,python:[1,18,25,26,27],quadrat:1,qualiti:30,question:1,quick:[1,26,30,32],quickli:[0,17],quickstart:1,quintic_splin:12,quit:32,ra_dec:31,rac:20,radial:[0,1,17],radian:12,radiu:12,rais:[14,24],ran:[0,31,32,33],random:0,randomli:28,randomsourc:0,rang:[0,7,30,31,33],raycast:17,reach:1,read:0,reader:1,real:[9,12,17,18,24,25,26,33],realiz:[0,14,20],reason:[0,1,27,30],rebuild:0,recalcul:[25,26],receiv:27,recent:[0,32],recip:1,recommend:[0,1],reconstruct:[1,33],record:17,recov:[0,33],recreat:0,rectangular:[1,25,26],red:[0,32,33],redder:[0,17],reddest:30,reddi:18,reduc:[1,17,30],refer:[0,1,5,7,10,17],refit:0,regard:[1,33],regardless:17,regener:9,region:[1,7,17,25,26,30],regress:26,rel:[0,1,25,26,27],relative_step:[1,18],releas:[25,26],relev:17,reload:[25,26],remain:[17,32],remaind:1,remov:[25,26],renam:[25,26],render:[0,1,2,25,26,30,32,33],reopen:0,repeat:[1,7],replac:[0,25,26],report:[0,32],repositori:27,repres:[0,1,10,17,33],represent:[0,1,9,25,26],reproject:[25,26],requir:[1,9,12,17,24,25,26,27],res:33,res_rgb:33,resampl:[25,26,31],rescal:31,research:28,reshap:[1,31],residu:[0,28,32,33],residual_rgb:0,resiz:[25,26],resolut:[0,1,10,12,25,26,29,33],resourc:1,respect:[1,31],rest:[0,17],restrict:1,restructur:[25,26],result:[1,9,12,17,20,26,29,31,33],retain:1,return_fouri:9,reus:24,revis:32,rfft:9,rgb:[0,25,26,30,32],right:[0,1,12,30],rightarrow:1,rigor:17,ring:32,rms:31,robert:1,robust:[0,1,32],rotat:12,roughli:[17,31],row:[12,17],rule:12,run:[0,25,26,27,31,33],sahp:33,same:[0,9,12,17,24,25,26,30,31,32,33],sampl:[0,12,30,32,33],satisfi:[1,7],save:[25,26],sca:[0,1,30],scale:[0,1,12,24,30,31,32,33],scarlet:[0,1,2,25,28,30,31,32,33],scenc:32,scene:[1,25,26,29],scheme:[0,17],scienc:[0,1],scientist:24,scipi:[17,27],script:27,sdss:[1,17],second:[1,18],section:28,sed:[1,17,25,26],see:[0,1,7,12,17,18,25,26,30,32,33],seed:24,seek:[0,1],seem:33,seen:[0,1],select:[17,25,26,27,28],self:[1,24],sens:[1,17,33],sensit:1,sep:[0,31,33],separ:[0,1,12,25,26,30,32],sequenti:1,serial:0,sersic:[1,25,26],session:1,set:[0,1,5,7,10,12,14,17,18,24,25,26,30,31,33],set_specta:0,set_spectra:0,set_spectra_to_match:[0,31],set_titl:[0,30],setup:[0,27,31,33],sever:[0,1,27],sextractor:33,shape:[0,1,9,10,12,17,18,24,25,26,31,32,33],shapelet:[24,33],sharp:12,shift:[0,1,9,12,17,20,25,26],shite:17,shortest:30,should:[0,1,17,25,26,27,31],show:[0,1,25,26,30,31,32,33],show_likelihood:[0,31,32,33],show_model:[0,31],show_observ:[0,30,31,32,33],show_psf:[0,31],show_rend:[0,30,31,32,33],show_residu:[0,30,31,32,33],show_scen:[0,25,26,30,31,32,33],show_sourc:[0,25,26,30,31,32,33],show_spectrum:31,shown:30,side:24,sigma3:12,sigma:[0,12,20,31,32,33],signal:[0,1],signatur:[1,7,18],silent:0,similar:[0,1,17,25,26],similarli:1,simpl:[0,1],simplest:1,simpli:0,simplifi:[18,25,26],simul:[31,32],simultan:1,sinc2d:12,sinc:[0,9,12,31,32],sinc_interp:12,sinc_interp_inplac:12,singl:[0,1,17,28,30,31],singleextendedsourc:[0,1],singular:[25,26],sinh:[0,30,33],situat:[30,32],size:[12,17,18,20,25,26,30,31,33],skip:0,sky:[0,1,10],sky_coord:[0,1,10,31],slice:[12,17,25,26,33],slightli:0,slow:1,small:[1,17,25,26],smaller:[0,7,25,26],smallest:[1,10],smax:[25,26],smooth:1,snr:1,soft:17,soften:[1,30],softwar:30,solut:[1,7,17,19],solver:0,some:[0,1,17,18,25,26,27],someth:0,sorri:24,sort:17,sort_by_radiu:17,soup:1,sourc:[2,5,7,9,10,12,14,17,18,19,20,24,25,26,28,29,30],sources_:0,soution:17,space:[1,9,10,17,24,25,26,30,31],span:12,spars:17,sparsiti:1,spatial:[0,1,9,10],special:1,specif:[1,30],specifi:[0,1,17,25,26,31,33],spectra:[0,1,30],spectral:[0,1,10,31],spectroscop:1,spectrum:[0,1,2,25,26],speed:[25,26],sphere:1,sphinx:27,spike:1,spiral:[1,33],spline:[12,25,26],split:0,spread:1,sprime:31,src:[0,1,32,33],stabil:1,stack:[0,25,26,30,31],stamp:1,standard:[1,20],star:[0,1,32],starlet:[24,26,29,31],starlet_blend:33,starlet_sourc:33,starlet_thresh:33,starletsourc:33,start:[1,12,18,30],state:14,statist:[1,18],std:[1,18],stdlc:27,stellar:[1,32],stem:0,step:[0,7,17,18,25,26,30],still:1,store:[1,9,14,25,26,32],str:33,stralet:24,strength:[7,17],stretch:[0,30,31,32,33],strict:17,stride:18,string:[17,18],strip:[9,25,26],strong:1,stronger:17,strongli:[25,26],structur:0,struggl:33,style:27,sub:[1,14,17,25,26],subclass:[1,25,26],subdivid:12,submanifold:1,subordin:14,subpixel:20,subplot:[30,33],subregion:17,subsampl:12,subsample_funct:12,subset:[25,26],subspac:1,substanti:1,subtract:[1,29,30],subvers:[25,26],subvolum:1,successfulli:1,sudo:27,suffici:1,suggest:32,suitabl:[1,10],sum:[1,7,30,31,33],sum_:1,sum_j:1,summat:31,superior:33,superposit:0,support:[25,26],supress:9,suptitl:33,sure:[30,33],surfac:[1,33],surject:1,swap:31,sweep:0,symmetr:[1,7,17,20],symmetri:[9,17,25,26,33],symmetryconstraint:7,sys:[0,31,32,33],system:[27,32],tabulatedspectrum:1,take:[1,17,25,26,30,33],taken:[1,28],target:[10,12,17,25,26,27],tbd:10,telescop:[1,31],tell:9,tensor:12,term:[0,1],test:[1,17,25,26],test_resampl:31,text:[0,33],textrm:30,tfrac:1,than:[0,1,7,9,12,17,24,25,26,30,31,33],thei:[0,1,7,25,26,27],them:[0,1,10,17,25,26,28,30,31,32],theoret:1,therefor:1,thereof:20,thi:[0,1,7,9,10,12,14,17,24,25,26,27,28,30,31,32,33],thing:[25,26],think:[0,1],those:[0,1,17,33],though:[25,26],thought:1,three:[0,1,30,32,33],thresh:[0,7,17,31],threshold:[7,24],thresholdconstraint:7,through:[1,33],thu:[1,25,26,30],tidal:33,tighten:0,tightli:1,time:[0,1,9,18,30,31,32,33],tini:7,titl:33,too:[1,33],top:[0,1,12],total:[0,18,31,32,33],toward:17,track:[25,26,28],tradit:1,tranform:33,transform:[0,1,5,9,10,17,24,25,26,31,33],transit:1,translat:0,transpar:1,transpos:18,trapezoid:12,travers:18,travi:[25,26],tree:33,trim:[12,25,26],trivial:0,trou:24,truncat:[25,26],tupl:[1,9,10,12,14,17,18,20,24],turn:1,tutori:[0,25,26,30],twice:30,two:[0,1,12,17,25,26,30,31,32],type:[0,1,7,18,27,28,32,33],typic:1,uncentered_oper:[17,25,26],unchang:17,under:[1,19],undersampl:1,uniform:0,union:10,uniqu:[1,30,32],unit:[0,1,20,24],uniti:20,unless:1,unlik:[17,31],unnam:18,updat:[1,14,17,25,26],updateexcept:14,use:[0,1,5,7,9,10,12,17,24,25,26,27,30,31,32,33],use_fft:[25,26],use_relevant_dim:17,used:[1,9,12,17,18,24,25,26,27,30,31,33],useful:[1,12,27,30,31],user:[0,17,25,26,31,32,33],uses:[0,1,10,17,25,26],using:[0,1,17,25,26,27,30],usual:[0,1,31,32,33],util:[0,17],valid:[1,7,19],valu:[1,7,12,17,18,25,26,30,32],vanish:17,vari:[17,28],varianc:[0,1,30,31],vector:[1,17],veri:[0,1,32],version:[1,17,25,26,27],vhat:[1,18],vicin:1,view:29,visibl:0,visual:[25,26,30,31],voxel:1,w_j:1,wai:[0,1,17,27,30,32],wall:[0,31,32,33],want:[0,1,17,27,30,32],warn:[24,25,26,27,33],wave:[31,33],wave_detect:[31,33],wave_filt:12,wavelegth:1,wavelength:[17,30],wavelet:[2,26,31,33],wcs:[0,1,10,12,25,26,31,33],wcs_hsc:31,wcs_hst:31,wdeprec:27,weigh:1,weight:[0,1,17,25,26,29,31,32,33],well:[0,1,7,27,28,32],were:[1,25,26],what:[0,1,31,32,33],whatev:[25,26],when:[7,9,14,17,18,24,25,26,27],where:[1,7,12,17,18,30,33],whether:[1,9,18,20],whic:12,which:[0,1,10,12,17,20,24,25,26,27,30,31,32,33],white:30,whose:12,why:1,wide:[1,7,30],wider:1,width:[1,10,17,20],window:12,wise:1,within:[1,17],without:[0,1,30,33],word:29,work:[0,7,17,27,33],world:[1,10],worth:32,would:[0,25,26,32],wound:1,write:1,wrong:[25,26],x_end:12,x_i:1,x_j:1,x_start:12,x_window:12,xcode:27,xslice:12,y_end:12,y_start:12,y_window:12,yield:[1,7,17],you:[0,1,27,30,32],your:[1,27,30,32],yslice:12,yx0:12,zero:[7,12,17,24],zip:31},titles:["Quick Start Guide","Core Concepts","API Documentation","scarlet.bbox","scarlet.blend","scarlet.cache","scarlet.component","scarlet.constraint","scarlet.display","scarlet.fft","scarlet.frame","scarlet.initialization","scarlet.interpolation","scarlet.measure","scarlet.model","scarlet.morphology","scarlet.observation","scarlet.operator","scarlet.parameter","scarlet.prior","scarlet.psf","scarlet.renderer","scarlet.source","scarlet.spectrum","scarlet.wavelet","1.1 (2020-07-14)","<em>scarlet</em> Documentation","Installation","Regression Testing","Tutorials","Displaying Scenes","Multi-Resolution Tutorial","Point Source Tutorial","Starlet Tutorial"],titleterms:{"2019":[25,26],"2020":[25,26],"new":[25,26],For:27,Use:0,addit:[25,26],adjust:30,api:[2,25,26],bbox:3,blend:[1,4,31,32],bug:[25,26],build:27,cach:5,catalog:33,chain:1,chang:[25,26],compon:[1,6,33],concept:1,constraint:[1,7],core:1,creat:[0,31,32,33],cube:0,data:[0,31,33],defin:[0,32,33],detect:33,develop:27,displai:[0,8,30,31,32,33],doc:27,document:[2,26],featur:[25,26],fft:9,filter:30,fit:[0,31,32,33],fix:[25,26],flux:0,frame:[0,1,10,31,32,33],full:[0,33],gener:[25,26],get:26,guess:31,guid:0,imag:0,implement:1,initi:[0,11,31,33],instal:27,interact:0,interpol:12,load:[0,31,33],log:26,measur:[0,13],model:[0,14,30,31,32,33],monoton:1,morpholog:15,multi:31,normal:1,note:1,observ:[0,1,16,31,32,33],onli:27,oper:17,other:[25,26],overview:1,paramet:[1,18],point:32,posit:1,prior:[1,19],psf:20,quick:0,regress:28,render:21,resolut:31,result:[0,32],save:0,scarlet:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27],scene:[0,30,33],size:1,sourc:[0,1,22,31,32,33],spectrum:23,starlet:33,start:[0,26],step:1,subtract:33,symmetri:1,test:28,tutori:[29,31,32,33],updat:31,user:27,view:[0,31,33],wavelet:24,weight:30,word:33}})