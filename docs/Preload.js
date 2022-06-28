import{$ as e,y as t,A as a,B as i,c as n,C as o,M as r,D as s,P as l,V as d,E as c,F as h,G as m,L as u,R as p,H as f,I as v,S as g,W as w,J as b,K as y,N as x,O as S,Q as k,U as E,X as A,Y as C,Z as T,a0 as P,a1 as _,a2 as j,a as O,a3 as B,a4 as R,a5 as L,a6 as F,a7 as W,a8 as I,a9 as D,aa as H,ab as z,w as U,ac as X,ad as N,ae as V,af as q,ag as G,ah as Y,ai as K,aj as Z,ak as J,al as Q,am as $,an as ee,_ as te,ao as ae,ap as ie,aq as ne,ar as oe,as as re,at as se,au as le,av as de,aw as ce,ax as he,ay as me,az as ue,aA as pe,aB as fe,aC as ve,aD as ge,aE as we,aF as be,aG as ye,aH as xe,v as Se,aI as ke}from"./vendor.js";import{ChromaKeyMaterial as Ee}from"./materials/ChromaKeyMaterial.js";class Ae{constructor(n){var{scene:o,sceneInstance:r,renderer:s,endSession:l}=n;this.endSession=l,this.engine=n,this.gui=e("#".concat(t)),this.hitSearch=e("#hud-searching-hittest"),this.scene=o,this.renderer=s,this.sceneInstance=r,e.on("#".concat(a),"click",this.onExitButtonClick.bind(this)),i(this),this.animToggler=e("#toggle-animation-button")}setCamera(t){this.cameraAccess=t,t?e.show(this.recordVideoButton):e.hide(this.recordVideoButton)}showAnimToggler(t){this.animToggler&&(this.animToggler.classList.remove("play"),e.show(this.animToggler),this.animTogglerInit||(this.animTogglerInit=!0,this.eventListener=()=>{this.animToggler.classList.toggle("play"),t()},e.on(this.animToggler,"click",this.eventListener)))}hideAnimToggler(){e.hide(this.animToggler)}addSession(e){this.session=e}show(){e.show(this.gui)}hide(){e.hide(this.gui)}onExitButtonClick(){var t=this;return n((function*(){if(t.session)try{yield t.session.end()}catch(e){t.hide()}else yield t.endSession();e.off(t.animToggler,"click",t.eventListener),t.sceneInstance&&t.sceneInstance.exit&&t.sceneInstance.exit(t),o()}))()}showHitSearch(){e.show(this.hitSearch)}hideHitSearch(){e.hide(this.hitSearch)}showElement(t){t.shown||(e.show(t),t.shown=!0)}hideElement(t){t.shown&&(e.hide(t),t.shown=!1)}}class Ce extends r{constructor(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;super(e),this.type="Reflector",this.XR=a.XR,this.skybox=a.skybox,this.shadowPlane=a.shadowPlane;var i=this,{textureHeight:n=512,textureWidth:o=512,clipBias:r=0,fragmentShader:w=Te,vertexShader:b=Me}=t,y=void 0!==t.color?new s(t.color):new s(8355711),x=new l,S=new d,k=new d,E=new d,A=new c,C=new d(0,0,-1),M=new h,T=new d,P=new d,_=new h,j=new c,O=new m,B=new f(o,n,{minFilter:u,magFilter:u,format:p});v.isPowerOfTwo(o)&&v.isPowerOfTwo(n)||(B.texture.generateMipmaps=!1);var R={tDiffuse:{value:B.texture},color:{value:y},textureMatrix:{value:j}},L=new g({uniforms:R,fragmentShader:w,vertexShader:b});this.material=L,this.onBeforeRender=(e,t,a)=>{var n;if(k.setFromMatrixPosition(i.matrixWorld),E.setFromMatrixPosition(a.matrixWorld),A.extractRotation(i.matrixWorld),S.set(0,0,1),S.applyMatrix4(A),T.subVectors(k,E),!(T.dot(S)>0)){T.reflect(S).negate(),T.add(k),A.extractRotation(a.matrixWorld),C.set(0,0,-1),C.applyMatrix4(A),C.add(E),P.subVectors(k,C),P.reflect(S).negate(),P.add(k),O.position.copy(T),O.up.set(0,1,0),O.up.applyMatrix4(A),O.up.reflect(S),O.lookAt(P),O.far=a.far,O.updateMatrixWorld(),O.projectionMatrix.copy(a.projectionMatrix),j.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),j.multiply(O.projectionMatrix),j.multiply(O.matrixWorldInverse),j.multiply(i.matrixWorld),x.setFromNormalAndCoplanarPoint(S,k),x.applyMatrix4(O.matrixWorldInverse),M.set(x.normal.x,x.normal.y,x.normal.z,x.constant);var o=O.projectionMatrix;_.x=(Math.sign(M.x)+o.elements[8])/o.elements[0],_.y=(Math.sign(M.y)+o.elements[9])/o.elements[5],_.z=-1,_.w=(1+o.elements[10])/o.elements[14],M.multiplyScalar(2/M.dot(_)),o.elements[2]=M.x,o.elements[6]=M.y,o.elements[10]=M.z+1-r,o.elements[14]=M.w,B.texture.encoding=e.outputEncoding,i.visible=!1;var s=e.getRenderTarget(),l=e.xr.enabled,d=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(B),e.state.buffers.depth.setMask(!0),!1===e.autoClear&&e.clear(),this.XR&&this.skybox&&(this.skybox.visible=!0);var c=!1;null!==(n=this.shadowPlane)&&void 0!==n&&n.visible&&(this.shadowPlane.visible=!1,c=!0),e.render(t,O),e.xr.enabled=l,e.shadowMap.autoUpdate=d,e.setRenderTarget(s),this.XR&&this.skybox&&(this.skybox.visible=!1),c&&(this.shadowPlane.visible=!0);var h=a.viewport;void 0!==h&&e.state.viewport(h),i.visible=!0}},this.getRenderTarget=()=>B}}Ce.prototype.isReflector=!0;var Me="\nuniform mat4 textureMatrix;\nvarying vec4 vUv;\n\n#include <common>\n#include <logdepthbuf_pars_vertex>\n\nvoid main() {\n  vUv = textureMatrix * vec4( position, 1.0 );\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n  #include <logdepthbuf_vertex>\n}",Te="\nuniform vec3 color;\nuniform sampler2D tDiffuse;\nvarying vec4 vUv;\n\n#include <logdepthbuf_pars_fragment>\n\nfloat blendOverlay( float base, float blend ) {\n  return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );\n}\n\nvec3 blendOverlay( vec3 base, vec3 blend ) {\n  return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );\n}\n\nvoid main() {\n  #include <logdepthbuf_fragment>\n\n  vec4 base = texture2DProj( tDiffuse, vUv );\n  gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );\n}\n",Pe=["audio","action","target","distanceTarget"],_e=w.APP_DB.SCENE_TYPES;class je{constructor(e){var{artifact:t,preload:a,XR:i}=e;this.XR=i,this.artifact=t,this.preload=a;var{type:n=_e.Hit}=t;this.type=n,this.clock=new b,this.scene=new y,this.customMaterials=[],this.spatialObjects=[],this.spatialAnimations=[],this.lookAtCameraObjects=[],this.animateObjects=[],this.audioAnalysers=[],this.circlingLights=[],this.customObjects=[],this.audioRamps={},this.onResize=this.onResize.bind(this),this.render=this.render.bind(this),this.initFallbackSession=this.initFallbackSession.bind(this),this.toggleAnimations=this.toggleAnimations.bind(this),this.endSession=this.endSession.bind(this)}init(t){var a=this;return n((function*(){var{artifact:i,preload:o,scene:r,type:s,XR:l}=a;t&&(a.sceneInstance=t);var{fov:d,near:c,far:h}=x(i.cam,S),u=w.innerWidth/w.innerHeight;a.camera=new m(d,u,c,h),a.camera.updateProjectionMatrix(),r.add(a.camera);var p=new k({antialias:!0,alpha:!0});a.renderer=p,p.setPixelRatio(w.devicePixelRatio),p.domElement.id=E,p.physicallyCorrectLights=!0,p.outputEncoding=A,p.toneMappingExposure=1;var{audio:f,circlingLights:v,customMaterials:g,wireframes:b,customObjects:y,hideLight:M,ocean:P,particles:_,shadow:j,spatialAudio:O,triggerVideo:B,underwater:R}=i;if(!1!==j&&(p.shadowMap.enabled=!0,p.shadowMap.type=C),(f||O)&&a.addAudio(),a.addSkybox(),M||a.addLights(),a.videoElement=o.assets.videoElement,null!=t&&t.init&&(yield t.init({engine:a,preload:o})),null!=t&&t.beforeLoadModel&&t.beforeLoadModel({engine:a,preload:o}),a.loadModel(),null!=t&&t.afterLoadModel&&t.afterLoadModel({engine:a,preload:o}),null!=v&&v.length&&a.addCirclingLights(),g&&(yield a.addCustomMaterials()),y&&(yield a.addCustomObjects()),b&&b.forEach((e=>{var t=a.model.getObjectByName(e.target);t&&t.material&&(t.material.wireframe=!0,e.transparent&&(t.material.transparent=!0,t.material.opacity=e.opacity))})),B&&a.addVideoTrigger(),R&&(yield a.underwaterPlane()),P&&(yield a.oceanPlane()),_){var{Particles:L}=yield import("./Particles.js");a.particles=new L(a),yield a.particles.init()}if(p.setSize(w.innerWidth,w.innerHeight),e.append(p.domElement,"#".concat(T)),a.hud=new Ae(a),l)try{var F=p.xr.getController(0);a.controller=F;var{clickable:W,shadow:I,shadowPlane:D}=i;if(!1!==I&&!1!==D&&a.addShadowPlane(),!a.isHittestScene())throw new Error("Unknown scene type ".concat(s));s!==_e.Float&&a.spawnReticle(),e.on(F,"select",(()=>{if(!a.justUnspawned){a.spawnModel(!1),W?a.hud.showAnimToggler(a.toggleAnimations):a.hud.hideAnimToggler()}})),W||a.hud.hideAnimToggler(),r.add(F),a.initScene=n((function*(){var t;return e.hide("#Locator"),t=yield w.NAV.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test","dom-overlay"],domOverlay:{root:e("#hud")}}),e.on(t,"end",(()=>{a.endSession()})),a.hud.addSession(t),a.refSpace=yield t.requestReferenceSpace("viewer"),a.renderer.xr.enabled=!0,a.renderer.xr.setReferenceSpaceType("local"),yield a.renderer.xr.setSession(t),t.initFallbackSession=a.initFallbackSession.bind(a),t}))}catch(e){a.initScene=a.initFallbackSession}else a.initScene=a.initFallbackSession;return yield a.addClickables(),e.on(w,"resize",a.onResize),a.onResize(),p.setAnimationLoop(a.render),a}))()}onResize(){var{innerWidth:e,innerHeight:t}=w;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}addLights(){var{directionalLightPosition:e=_.directionalPosition}=this.artifact,t=new P(_.directionalColor,_.directionalIntensity);t.position.set(...e),t.castShadow=!0,!1!==this.artifact.shadow&&(t.shadow.bias=-1e-4,t.shadow.mapSize.width=512,t.shadow.mapSize.height=512,t.shadow.camera.near=.1,t.shadow.camera.far=300),this.directionalLight=t,this.scene.add(t),this.ambientLight=new j(_.ambientColor,_.ambientIntensity),this.scene.add(this.ambientLight)}addCustomMaterials(){var{preload:e}=this,{customMaterials:t=[]}=e.assets;t.forEach((e=>{var{config:t,material:a}=e,i=this.model.getObjectByName(t.target);i&&(i.material=a,O.fn(a.init)&&a.init({engine:this}),this.customMaterials.push({config:t,material:a}))}))}addCustomObjects(){var{artifact:e}=this,{customObjects:t}=e;t.forEach((e=>{var{config:t,object:a}=e,i=this.model.getObjectByName(t.target);i&&(a.child?i.add(a.child):a.model&&(i.parent.add(a.model),i.parent.remove(i)),this.customObjects.push({config:t,object:a}),O.fn(a.init)&&a.init({engine:this}))}))}addShadowPlane(){var e=new B(150,150,64,64),t=new R;t.opacity=L;var a=new r(e,t);a.receiveShadow=!0,a.lookAt(0,100,0),a.position.set(0,0,0),this.shadowPlane=a}spawnReticle(){var e=new F(.15,.2,32).rotateX(-M.PI/2),t=new W;this.reticle=new r(e,t),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,this.scene.add(this.reticle)}glow(){var{glow:e}=this.artifact;this.model.traverse((t=>{if(I(t.name,"glow")){var a=O.bool(e)?238:e,i=new W({color:a,side:D,blending:H,transparent:!0});t.material=i}}))}addClickables(){var t=this;return n((function*(){var{artifact:a,model:i}=t,{clickables:n=[]}=a;if(n&&n.length){var o=[];if(i.traverse((e=>{z({node:e,search:n})&&o.push(e)})),o.length){var{Controls:r}=yield import("./Controls.js");t.controls=new r({clickables:o,engine:t}),t.controller?e.on(t.controller,"select",t.controls.select,!1):e.on(t.renderer.domElement,"mousedown",t.controls.click,!1)}}}))()}onTouch(e){var t=this;return n((function*(){var a;null!==(a=t.sceneInstance)&&void 0!==a&&a.onTouch&&(yield t.sceneInstance.onTouch(e)),t.artifact.clickableLinks&&e.forEach((e=>{var a=t.artifact.clickableLinks[e.object.name];a&&(U?window.location.href=a:window.open(a,"_hacked"))}))}))()}nosort(){this.renderer.sortObjects=!1}clip(){var{model:e,artifact:{clipSide:t}}=this;e.traverse((e=>{if(I(e.name,"clip")){var a=D;"back"===t?a=le:"front"===t&&(a=de),e.material=new W({color:"green",colorWrite:!1,side:a}),e.castShadow=!1,e.receiveShadow=!1,e.renderOrder=1}else e.renderOrder=2}))}mirror(){var{mirrors:e}=this.artifact,t=w.devicePixelRatio,a=w.innerWidth*t,i=w.innerHeight*t;this.mirrors=e.map((e=>{var t,{clipBias:n=.003,color:o=7829367,type:r,params:s=[4,32],rotation:l={},position:d={}}=e,c=APP_DB.MESH_TYPES;t=r===c.CIRCLE?new X(...s):r===c.RING?new F(...s):r===c.BOX?new N(...s):r===c.SPHERE?new V(...s):new B(...s);var h=new Ce(t,{clipBias:n,textureWidth:a,textureHeight:i,color:o},this),{x:m,y:u,z:p}=l;m&&h.rotateX(m),u&&h.rotateY(u),p&&h.rotateZ(p);var{x:f,y:v,z:g}=d;return f&&h.position.setX(f),v&&h.position.setY(v),g&&h.position.setZ(g),this.model.add(h),h}))}addCirclingLights(){this.artifact.circlingLights.forEach((e=>{var{color:t=16711680,intensity:a=1,dim:i=0,decay:n=2,shadows:o=!1,show:s=!1}=e,l=new q(t,a,i,n);if(o&&(l.castShadow=!0,l.shadow.camera.near=.1,l.shadow.camera.far=5),s){var d=new V(.005,6,6),c=new W({color:t}),h=new r(d,c);l.add(h)}this.circlingLights.push({light:l,config:e}),this.model.add(l)}))}analyseAudio(){var{audioElement:e,audioElements:t=[]}=this.preload.assets;(e||null!=t&&t.length)&&[e,...t].filter((e=>e)).forEach((e=>{var t=new AudioContext,a=t.createMediaElementSource(e),i=t.createAnalyser();i.fftSize=this.artifact.fftSize||32,a.connect(i),a.connect(t.destination);var n=new Uint8Array(i.frequencyBinCount);i.getByteFrequencyData(n),this.audioAnalysers.push({name:e.id,analyser:i,array:n})}))}underwaterPlane(){var e=this;return n((function*(){var{UnderwaterPlane:t}=yield import("./UnderwaterPlane.js");e.cameraPlane=new t,yield e.cameraPlane.preload(e)}))()}oceanPlane(){var e=this;return n((function*(){var{name:t="ocean",normals:a="oceannormals1"}=e.artifact.ocean,{Water:i}=yield import("./vendor.js").then((function(e){return e.bc})),n=e.model.getObjectByName(t),o=yield e.preload.promisifiedLoad({loader:e.preload.textureLoader,file:"https://static.artificialmuseum.com/textures/ocean/".concat(a,".jpg")});o.wrapS=o.wrapT=G,e.ocean=new i(n.geometry,{textureWidth:512,textureHeight:512,waterNormals:o,sunDirection:new d,sunColor:16777215,waterColor:1048575,distortionScale:3.7,fog:!1}),e.ocean.position.copy(n.position),e.ocean.rotation.copy(n.rotation),e.model.add(e.ocean),n.visible=!1}))()}addSkybox(){var e=this;return n((function*(){var{artifact:t,preload:a,renderer:i,scene:n,XR:o}=e,s=ce,l=null==t?void 0:t.skySphere;O.arr(l)&&l.length&&(s=l);var d=new V(...s);!1!==t.scaleSky&&d.scale(-1,1,1);var c=a.assets.skybox,h=new Y(i);h.compileEquirectangularShader();var m=h.fromEquirectangular(c).texture;h.dispose();var u=new W({map:c}),p=new r(d,u);p.visible=!o,n.add(p),!1===t.light||t.hideEnvironment||(n.environment=m),e.skybox=p}))()}addAudio(){this.listener=new K,this.camera.add(this.listener)}addVideoTrigger(){this.model.traverse((e=>{this.videoTrigger||["videotarget","videotrigger"].some((t=>I(e.name,t)))&&(this.videoTrigger=e,this.videoTrigger.visible=!1)}))}startMedia(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this.isMediaPlaying){var{actions:t=[],artifact:a,preload:i}=this,{audioElement:n,videoElement:o,audioElements:r=[]}=i.assets;a.triggerAudio||(n&&(e&&(n.currentTime=0),n.play()),null!=r&&r.length&&r.forEach((t=>{t.autoplay&&(e&&(t.currentTime=0),t.play())}))),o&&!a.triggerVideo&&(e&&(o.currentTime=0),o.play()),t.forEach((e=>e.play())),this.isMediaPlaying=!0}}stopMedia(){var{audioElement:e,videoElement:t,actions:a=[],audioElements:i=[]}=this;e&&e.pause(),t&&t.pause(),a&&a.length&&a.forEach((e=>e.stop())),i.forEach((e=>e.pause())),this.isMediaPlaying=!1}toggleAnimations(){this.actions.forEach((e=>e.paused=!e.paused))}initFallbackSession(){this.XR=!1,w.B.classList.add(Z);var{camera:e,artifact:t,model:a,renderer:i}=this,n=new J(e,i.domElement);this.controller=n,this.skybox.visible=!0,Object.entries(Q).forEach((e=>{var[t,a]=e;n[t]=a}));var{cam:o={},orbit:r={},clickable:s}=t;O.num(r.min)&&(n.minDistance=r.min),O.num(r.max)&&(n.maxDistance=r.max),O.num(o.maxPolar)&&(n.maxPolarAngle=v.degToRad(o.maxPolar)),O.num(o.minPolar)&&(n.minPolarAngle=v.degToRad(o.minPolar)),s?this.hud.showAnimToggler(this.toggleAnimations):this.hud.hideAnimToggler();var{cam:l={}}=t,c=he,{x:h=c.x,y:m=c.y,z:u=c.z}=l;e.position.set(h,m,u);var{lookat:p={}}=t,{x:f=0,y:g=0,z:b=0}=p;if(n.target=new d(f,g,b),a){var{x:y,y:x,z:S}=a.scale,{scale:k}=t;k&&a.scale.set(y*k,x*k,S*k)}n.update();this.spawnModel(!0),i.domElement.focus()}loadModel(){var e,t,a,{artifact:i,preload:n,sceneInstance:o={}}=this;if(null!=o&&o.model?this.model=o.model:null!==(e=n.assets.gltf)&&void 0!==e&&e.scene&&(this.model=n.assets.gltf.scene),null!=o&&o.animations?this.animations=o.animations:null!==(t=n.assets.gltf)&&void 0!==t&&t.animations&&(this.animations=n.assets.gltf.animations),this.actions=[],null!==(a=this.animations)&&void 0!==a&&a.length){this.mixer=new $(this.model);var{animations:r={}}=i,{loop:s,startOnTouch:l,clampWhenFinished:d=!0,autoplay:c=!0,noLoopAnimations:h=[],pausedAnimations:m=[]}=r;this.animations.forEach((e=>{var t=this.mixer.clipAction(e),a=this.spatialAnimations.find((e=>e._clip.name===t.name)),i=m.includes(e.name),n=l||!c||a||i;(!1===s||h.includes(e.name))&&(t.clampWhenFinished=d,t.loop=ee),n&&(t.paused=!0),this.actions.push(t)}))}if(this.model){var u,p={};if(this.model.traverse((e=>{var t;if(o.parentName&&o.child&&I(e.name,o.parentName)&&(u=e),this.customObjects.forEach((t=>{var{object:a}=t;a.parentName&&a.child&&I(e.name,a.parentName)&&(p[a.name]=e)})),e.isMesh){var{frustumCulled:a,transparent:n,castShadow:r,receiveShadow:s}=i;!1===a&&(e.frustumCulled=!1),!1===n&&(e.material.transparent=!1),I(e.name,"noshadow")||(e.castShadow=!1!==r,e.receiveShadow=!1!==s),e.material.map&&(e.material.map.anisotropy=16,e.material.map.encoding=A),e.material.emissiveMap&&(e.material.emissiveMap.encoding=A),(e.material.map||e.material.emissiveMap)&&(e.material.needsUpdate=!0)}null!==(t=i.lookAtCameraObjects)&&void 0!==t&&t.length&&z({node:e,search:i.lookAtCameraObjects})&&(O.num(this.lookAtAlpha)||(this.lookAtAlpha=0),this.lookAtCameraObjects.push(e)),i.animateObjects&&i.animateObjects.forEach((t=>{if(I(e.name,t.name)){var a=this.actions.find((t=>t._clip.name===e.name));this.animateObjects.push(te(te({},t),{},{action:a,node:e}))}}));var{spatialObjects:l=[],audioElements:d=[]}=i,c=[...l,...d];c.length&&c.forEach((t=>{var{audio:a,action:i,target:n,distanceTarget:o}=t,r=ae(t,Pe);if(z({node:e,search:n})){var s=te(te({},r),{},{node:e});o&&(s.distanceTarget=this.model.getObjectByName(o)),a&&(s.audio=this.preload.assets.audioElements.find((e=>e.id==="#".concat(ie,"-").concat(a)))),i&&(s.action=this.actions.find((e=>e._clip.name===i)),s.off||this.spatialAnimations.push(s.action)),this.spatialObjects.push(s)}}))})),u&&u.add(o.child),this.customObjects.forEach((e=>{var{object:t}=e;t.child?p[t.name].add(t.child):t.model&&this.model.add(t.model)})),this.videoElement){var f=[];this.model.traverse((e=>{I(e.name,"videotarget")&&f.push(e)})),f.length&&f.forEach((e=>{var t=new ne(this.videoElement),{flipVideo:a,chromaKey:n}=i;!1!==a&&(t.flipY=!1),e.material.map=t,n&&(e.material=new Ee(i.chromaKey,t))}))}}var{clip:v,glow:g,mirrors:w,nosort:b}=this.artifact;g&&this.glow(),this.model&&v&&this.clip(),b&&this.nosort(),null!=w&&w.length&&this.mirror(),this.artifact.analyseAudio&&this.analyseAudio(),this.model&&(this.model.position.set(5e3,5e3,5e3),this.scene.add(this.model))}spawnModel(e){var{artifact:t,camera:a,controller:i,model:n,reticle:o,scene:r,shadowPlane:s,type:l,XR:d,sceneInstance:c={}}=this,{showSkybox:h}=t;if(!d||e)return n&&(this.applyPositionAndRotation(),n.position.set(0,0,0)),this.modelSpawned=!0,null!=c&&c.spawnModel&&c.spawnModel({engine:this}),null!=c&&c.afterSpawnModel&&c.afterSpawnModel({engine:this}),void this.startMedia();if(this.isHittestScene()){if(!this.modelSpawned&&this.lastHit){o.updateMatrixWorld(),n.position.setFromMatrixPosition(o.matrixWorld),n.updateMatrixWorld();var m=a.position,u=n.position,p=m.x-u.x,f=m.z-u.z,v=Math.atan2(p,f);n.rotation.y=v,s&&(s.position.setFromMatrixPosition(o.matrixWorld),r.add(s)),n.visible=!0,o.visible=!1,this.modelSpawned=!0,null!=c&&c.spawnModel&&c.spawnModel({engine:this}),null!=c&&c.afterSpawnModel&&c.afterSpawnModel({engine:this}),this.startMedia()}this.applyPositionAndRotation()}else if(l===_e.Float){var g=n.clone();g.position.set(0,0,-1).applyMatrix4(i.matrixWorld),this.applyPositionAndRotation(),r.add(g),this.startMedia()}h&&(this.skybox.visible=!0)}unspawnModel(){this.modelSpawned&&(this.scene.remove(this.model),this.modelSpawned=!1,this.isAnimationRunning=!1,this.stopMedia(),this.exitSceneInstance(),this.justUnspawned=!0,setTimeout((()=>{this.justUnspawned=!1}),200))}exitSceneInstance(){var e;this.customObjects.forEach((e=>{var{object:t}=e;O.fn(t.exit)&&t.exit({engine:this})})),this.customMaterials.forEach((e=>{var{material:t}=e;O.fn(t.exit)&&t.exit({engine:this})})),null!==(e=this.sceneInstance)&&void 0!==e&&e.exit&&this.sceneInstance.exit({engine:this})}applyPositionAndRotation(){var{artifact:e,model:t}=this;if(t){var{pos:a={},rot:i={}}=e;a.x&&(t.position.x+=a.x),a.y&&(t.position.y+=a.y),a.z&&(t.position.z+=a.z);var n=v.degToRad;i.x&&t.rotateX(n(i.x)),i.y&&t.rotateY(n(i.y)),i.z&&t.rotateZ(n(i.z))}}endSession(){var t=this;return n((function*(){t.hud.hide(),t.renderer.setAnimationLoop(null),e("#".concat(T)).classList.remove("visible"),t.exitSceneInstance(),t.scene&&oe(t.scene),e.remove(".".concat(re));var a=e("#".concat(E));if(a){var i=a.parentNode;i.id===T?e.remove(a):e.remove(i)}w.B.classList.remove(Z),e(".start-experience-button").forEach((e=>{e.removeAttribute("disabled")})),U&&w.location.reload()}))()}isHittestScene(){return![_e.Float].includes(this.type)}render(e,t){var a=this;return n((function*(){var i,n,o,r,s,l,d,c=a.clock.getDelta();a.renderHittest(t),a.mixer&&a.mixer.update(c),a.modelSpawned&&a.artifact.triggerVideo&&a.videoTrigger&&a.renderVideoTrigger(),null!==(i=a.sceneInstance)&&void 0!==i&&i.tick&&a.sceneInstance.tick({delta:c,engine:a,timestamp:e,frame:t}),null!==(n=a.spatialObjects)&&void 0!==n&&n.length&&a.modelSpawned&&a.renderSpatial(),null!==(o=a.audioAnalysers)&&void 0!==o&&o.length&&a.renderAnalyseAudio(),null!==(r=a.circlingLights)&&void 0!==r&&r.length&&a.renderCirclingLights(e),null!==(s=a.lookAtCameraObjects)&&void 0!==s&&s.length&&a.renderLookAtCamera(c),null!==(l=a.animateObjects)&&void 0!==l&&l.length&&a.renderAnimateObjects({delta:c,timestamp:e}),a.cameraPlane&&a.renderUnderwater(c),a.ocean&&a.renderOcean(c),a.particles&&a.particles.update(c),a.customMaterials.length&&a.renderCustomMaterials({delta:c,frame:t,timestamp:e}),a.customObjects.length&&a.renderCustomObjects({delta:c,frame:t,timestamp:e}),null!==(d=a.sceneInstance)&&void 0!==d&&d.render?a.sceneInstance.render({delta:c,frame:t,timestamp:e}):a.renderer.render(a.scene,a.camera)}))()}renderCustomMaterials(e){var{delta:t,frame:a,timestamp:i}=e;this.customMaterials.forEach((e=>{var{config:n,material:o}=e;if(o.uniforms.uTime){var{speed:r=1}=n;o.uniforms.uTime.value+=t*r}O.fn(o.tick)&&o.tick({delta:t,frame:a,timestamp:i})}))}renderCustomObjects(e){var{delta:t,frame:a,timestamp:i}=e;this.customObjects.forEach((e=>{var{object:n}=e;O.fn(n.tick)&&n.tick({delta:t,frame:a,timestamp:i})}))}renderLookAtCamera(e){var{camera:t,lookAtCameraObjects:a=[]}=this;a.forEach((a=>{var i=new d(0,0,a.position.distanceTo(t.position));a.localToWorld(i);var n=i.clone(),o=this.artifact.lookAtSpeed||.001;this.lookAtAlpha+=e*o,n.distanceToSquared(t.position)>.5&&(n.lerp(t.position,Math.min(1,this.lookAtAlpha)),a.lookAt(n))}))}renderAnimateObjects(e){var{timestamp:t}=e;this.animateObjects.forEach((e=>{var{action:a,speed:i,minSpeed:n=0,maxDelay:o=2,minDelay:r=1}=e;if(a&&a.paused&&(e.nextAnimation||(e.nextAnimation=t+Math.random()*(1e3*o)+1e3*r),e.nextAnimation<=t)){e.nextAnimation=!1;var s=Math.random()>.5?1:-1,l=Math.max(n,Math.random()*i)*s;a.timeScale=l,a.paused=!1,a.play()}}))}renderVideoTrigger(){var{triggerVideoDistance:e=1.1,triggerAudio:t,triggerVideo:a=!0}=this.artifact,i=e*e,n=this.videoTrigger.position.clone();n.add(this.videoTrigger.parent.position),this.camera.position.distanceToSquared(n)<=i?(a&&this.videoElement&&this.videoElement.paused&&(this.videoElement.play(),this.videoTrigger.visible=!0),t&&this.audioElement&&this.audioElement.paused&&this.audioElement.play()):(!this.videoElement.paused&&a&&(this.videoElement.pause(),this.videoTrigger.visible=!1),t&&this.audioElement&&!this.audioElement.paused&&this.audioElement.pause())}renderHittest(t){var a=this;return n((function*(){if(t&&a.XR){var i=a.renderer.xr.getSession();a.hitTestSourceRequested||(a.hitTestSource=yield i.requestHitTestSource({space:a.refSpace}),e.on(i,"end",(()=>{a.hitTestSourceRequested=!1,a.hitTestSource=null})),a.hitTestSourceRequested=!0);var n=t.getHitTestResults(a.hitTestSource);if(n.length){if(a.lastHit=n[0],!a.modelSpawned){a.reticle.visible=!0;var o=a.renderer.xr.getReferenceSpace();a.reticle.matrix.fromArray(a.lastHit.getPose(o).transform.matrix)}a.hud.hideHitSearch()}else a.reticle.visible=!1,a.modelSpawned||a.hud.showHitSearch(),a.lastHit=void 0}}))()}renderAnalyseAudio(){var e,{audioAnalyserAnimation:t,audioAnalyserLights:a}=this.artifact,i=this.audioAnalysers.map((e=>{var{name:t,analyser:a,array:i}=e;a.getByteFrequencyData(i);var n=i.reduce(((e,t)=>e+t))/i.length;return this.audioRamps[t]={array:i,average:n},{array:i,average:n}})),n=0;if(i.map((e=>{n+=e.average})),O.fn(null===(e=this.sceneInstance)||void 0===e?void 0:e.renderAudioAnalyser)&&this.sceneInstance.renderAudioAnalyser(n,this),t){var o=this.actions.find((e=>e._clip.name===t));o.weight=Math.min(1,n/220),o.time=o._clip.duration}if(a){var r=x(artifact,{lightIntensity:1,levelMultiplier:2}),s=r.lightIntensity*(n/255*r.levelMultiplier),{ambientLight:l}=this;l.intensity=s}}renderCirclingLights(e){var t=5e-4*e;this.circlingLights.forEach(((e,a)=>{var{light:i,config:n}=e,{lightDistance:o=1,timeOffset:r=20,offset:{x:s=0,y:l=0,z:d=0}={}}=n;t+=1e3*r;var c=Math.sin(t)*o+s,h=Math.sin(1.1*t)*o+l,m=Math.sin(1.2*t)*o+d;i.position.set(c,h,m)}))}renderSpatial(){this.spatialObjects.forEach((e=>{var{node:t,distance:a,distanceTarget:i,action:n,audio:o,off:r,fn:s,yDistanceTest:l=!0}=e,c=i||t,h=new d;c.getWorldPosition(h);var m=l?h.y:this.camera.position.y,u=new d(h.x,m,h.z),p=this.camera.position.distanceTo(u);if(O.num(a)&&se("distance"),o){var f=Math.max(0,Math.min(1,1-p/a.max+a.min/a.max));Math.abs(o.volume-f)>.02&&(o.volume=f)}n&&(p<=a.max?r?n.paused||(n.paused=!0):n.paused&&(n.paused=!1):r?n.paused&&(n.paused=!1):n.paused||(n.paused=!0)),s&&O.fn(this.sceneInstance[s])&&this.sceneInstance[s]({node:t,config:{distance:a},distance:p})}))}renderUnderwater(e){this.cameraPlane.tick(e)}renderOcean(e){var{animationSpeed:t=1}=this.artifact.ocean;this.ocean.material.uniforms.time.value+=e*t*.1}}class Oe{constructor(t){var{artifact:a,root:i,THREE:n}=t;this.artifact=a,this.root=i,n&&(this.THREE=n);var{android:o,chrome:r}=Se;this.isAndroidChrome=o&&r,this._warningContainer=e("#timeout-warning"),this._header=e("#timeout-warning-header"),this._headerDone=e("#timeout-warning-header-done"),this._preloadInfo=e("#timeout-warning-info"),this._cancelButton=e("#timeout-warning-cancel"),this._confirmButton=e("#timeout-warning-confirm"),this._tooFarContainer=e("#toofar-warning"),this._tooFarPreviewButton=e("#toofar-warning-load-preview-button"),this._tooFarDistanceInfo=e("#toofar-warning-distance"),this._tooFarCancelButton=e("#toofar-warning-cancel-button"),this._tooFarAbortButton=e("#toofar-warning-abort-button"),this._webglDisabledContainer=e("#timeout-warning-webgl-disabled"),this._webglDisabledOkButton=e("#timeout-warning-webgl-disabled-ok-button"),this.confirmButtonClickHandler=this.confirmButtonClickHandler.bind(this),e.on(this._confirmButton,"click",this.confirmButtonClickHandler),this.onTooFarCancelButtonClick=this.onTooFarCancelButtonClick.bind(this),this.onTooFarPreviewButtonClick=this.onTooFarPreviewButtonClick.bind(this),this.onWebglDisabledOkButtonClick=this.onWebglDisabledOkButtonClick.bind(this),this.textureLoader=new me,this.gltfLoader=new ue,this.plyLoader=new pe,this.audioLoader=new fe,this.fontLoader=new ve,this.audioElements=[],this.collectPreloadPromises(),this.startEngine=this.startEngine.bind(this)}collectPreloadPromises(){var e={skybox:this.loadSkybox()},{audio:t,audioElements:a,examples:i,fonts:n,glb:o,textures:r,type:s,video:l,customMaterials:d,customObjects:c}=this.artifact;if(a&&(e.audioElements=this.loadAudioElements()),t&&(e.audioElement=this.loadAudio()),ge(s)||(e.scene=this.loadScene()),!1!==o&&(e.gltf=this.loadGltf()),r&&(e.textures=this.loadTextures()),l){var{slug:h,video:m}=this.artifact;e.videoElement=this.loadVideo({slug:h,video:m})}n&&(e.fonts=this.loadFonts()),i&&(e.examples=this.loadExamples()),d&&(e.customMaterials=this.loadCustomMaterials()),c&&(e.customObjects=this.loadCustomObjects()),this.promises=e}init(){var t=arguments,a=this;return n((function*(){var i=t.length>0&&void 0!==t[0]?t[0]:{},{map:n,XR:o}=i;a._isWorking=!0,a._isCancelled=!1,a._session=!1,a.map=n,a.XR=o,e.on(a._cancelButton,"click",(()=>{a._isCancelled=!0,a.finished()})),e.show([a._warningContainer,a._header]),a.timeout=w.setTimeout(a.showTimeoutWarning,we)}))()}loadScene(){var t=this;return n((function*(){var{artifact:a}=t,i=APP_DB.SCENE_TYPES,{type:n=i.Hit}=a,o=Object.entries(i).find((e=>{var[t,a]=e;return a===n})),r="".concat(t.root,"/CustomScene.js");if(O.arr(o)){var s=o[0];r="./scenes/".concat(s,".js")}var{default:l}=yield import(r),d=new l({artifact:a,mergeConfig:x,preload:t,$:e,W:w,is:O});return O.fn(null==d?void 0:d.preload)&&(yield d.preload({artifact:a,preload:t})),d}))()}loadSkybox(){var e=this;return n((function*(){var{city:t,sky:a,slug:i}=e.artifact,n=a||i,o="jpg";w.SUPPORTS.WEBP&&(o="webp");var r=n;return n.startsWith("/")||(r=[w.STATIC_URL,"skybox",t,n].filter((e=>e)).join("/")),r.endsWith(".".concat(o))||(r+=".".concat(o)),yield e.promisifiedLoad({loader:e.textureLoader,file:r})}))()}loadFonts(){var e=this;return n((function*(){var{fonts:t}=e.artifact,a={};return yield Promise.all(t.map(function(){var t=n((function*(t){var i="https://static.artificialmuseum.com/font/json/".concat(t,".typeface.json");a[t]=yield e.promisifiedLoad({loader:e.fontLoader,file:i})}));return function(e){return t.apply(this,arguments)}}())),a}))()}loadExamples(){var e=this;return n((function*(){var{examples:t}=e.artifact,a={};if(t.TextGeometry){var{TextGeometry:i}=yield import("./vendor.js").then((function(e){return e.bd}));a.TextGeometry=i}return a}))()}loadCustomMaterials(){var e=this;return n((function*(){var{artifact:t}=e,{customMaterials:a}=t;return Promise.all(a.map(function(){var a=n((function*(a){var{default:i}=yield import("./materials/".concat(a.name,".js")),n=new i({artifact:t,config:a,preload:e});return O.fn(n.preload)&&(yield n.preload()),{config:a,material:n}}));return function(e){return a.apply(this,arguments)}}()))}))()}loadCustomObjects(){var e=this;return n((function*(){var{artifact:t}=e,{customObjects:a}=t;return Promise.all(a.map(function(){var a=n((function*(a){var{default:i}=yield import("./objects/".concat(a.name,".js")),n=new i({artifact:t,config:a,preload:e});return O.fn(n.preload)&&(yield n.preload()),n}));return function(e){return a.apply(this,arguments)}}()))}))()}loadVideo(t){var a=this;return n((function*(){var{dir:i,slug:n,video:o,id:r=ke}=t,s=!0===o?n:o,l=e.create("video",{id:r,class:re,loop:!0,playsinline:!0,preload:"auto",crossorigin:"anonymous"});a.videoElement=l;var d=["webm","mp4"],c=O.str(s)?s:n;c.startsWith("/")||(c.endsWith(".mp4")?(d=["mp4"],c=c.slice(0,-4)):c=i?"/video/".concat(i,"/").concat(c):"/video/".concat(c,"/").concat(c)),c.endsWith(".mp4")&&(d=["mp4"],c=c.slice(0,-4));var h="".concat(w.MEDIA_URL).concat(c);d.forEach((t=>{e.create("source",{src:"".concat(h,".").concat(t,"?v=").concat(be),type:"video/".concat(t),parent:l})})),e.append(l);var{videoWidth:m}=l;if(m>0)return l;var u="canplaythrough";return ye&&(u="loadedmetadata"),new Promise((t=>{e.on(l,u,(e=>{ye?setTimeout((()=>{t(e.target)}),xe):t(e.target)}))}))}))()}loadAudio(){var t=this;return n((function*(){var{slug:a,audio:i}=t.artifact;e.remove("#".concat(ie));var n=e.create("audio",{id:ie,class:re,loop:!0,crossorigin:"anonymous"});t.audioElement=n;var o=O.str(i)?i:a;o.startsWith("/")||(o="/audio/".concat(o));var r=["ogg","mp4","mp3"];o.endsWith(".mp3")&&(r=["mp3"],o=o.slice(0,-4));var s="".concat(w.MEDIA_URL).concat(o);r.forEach((t=>{e.create("source",{src:"".concat(s,".").concat(t,"?v=").concat(be),type:"audio/".concat(t),parent:n})})),e.append(n);var{duration:l}=n;if(O.num(l)&&l>0)return n;var d="canplaythrough";return ye&&(d="loadedmetadata"),new Promise((t=>{e.on(n,d,(e=>t(e.target)))}))}))()}loadAudioElements(){var t=this;return n((function*(){var{audioElements:a,slug:i}=t.artifact,o=Object.values(a).map((e=>e.audio||i));return w.SUPPORTS.A_MP4||w.SUPPORTS.A_OGG,yield Promise.all(o.map(function(){var a=n((function*(a){var i="#".concat(ie,"-").concat(a);e.remove(i);var n=e.create("audio",{class:re,id:i,loop:!0,crossorigin:"anonymous"});t.audioElements.push(n);var o="/audio/".concat(a),r=["ogg","mp4","mp3"];o.endsWith(".mp3")&&(r=["mp3"],o=o.slice(0,-4));var s="".concat(w.MEDIA_URL).concat(o);r.forEach((t=>{e.create("source",{src:"".concat(s,".").concat(t,"?v=").concat(be),type:"audio/".concat(t),parent:n})})),e.append(n);var{duration:l}=n;if(O.num(l)&&l>0)return n;var d="canplaythrough";return ye&&(d="loadedmetadata"),new Promise((t=>{e.on(n,d,(e=>t(e.target)))}))}));return function(e){return a.apply(this,arguments)}}()))}))()}loadTextures(){var e=this;return n((function*(){var{textures:t={}}=e.artifact,{dir:a,names:i}=t,n="jpg";w.SUPPORTS.WEBP&&(n="webp"),a&&!a.endsWith("/")&&(a="".concat(a,"/"));var o={};return i.forEach((t=>{var i=t;a.startsWith("/")||(i="https://static.artificialmuseum.com/textures/".concat(a,"/").concat(t)),i.endsWith(".jpg")||(i="".concat(i,".").concat(n));var r=e.promisifiedLoad({loader:e.textureLoader,file:i});o[slugged]=r})),o}))()}loadGltf(){var e=this;return n((function*(){var{artifact:t,XR:a}=e,{file:i,version:n=1}=t,o=a?"&xr=1":"",r="".concat(w.GLB_URL,"/").concat(i,".glb?v=").concat(n).concat(o);return yield e.promisifiedLoad({loader:e.gltfLoader,file:r})}))()}promisifiedLoad(e){var{loader:t,file:a}=e;return new Promise(((e,i)=>{t.load(a,(t=>{e(t)}),(e=>{e.lengthComputable&&(Math.ceil(e.loaded/e.total*100),"".concat(e.loaded,"/").concat(e.total))}),(e=>{this.setError(e,"Error loading artifact.",5e3),i(e)}))}))}startEngine(){var t=this;return n((function*(){var{artifact:a,XR:i}=t,o=Object.entries(t.promises).map(function(){var e=n((function*(e){var[t,a]=e;return[t,yield a]}));return function(t){return e.apply(this,arguments)}}()),r=yield Promise.all(o);t.assets=Object.fromEntries(r);var s=new je({artifact:a,preload:t,XR:i}),l=yield s.init(t.assets.scene);if(!l)throw new Error("Session undefined.");e.hide(t._header),e.hide(t._preloadInfo),e.show(t._headerDone),t._session=l,t._timeoutShown&&t.isAndroidChrome?e.prop(t._confirmButton,{disabled:!1}):t._isCancelled||(yield t.finishLoad())}))()}showTimeoutWarning(){e.show(this._preloadInfo),this.isAndroidChrome&&(e.show(this._confirmButton),this._confirmButton.setAttribute("disabled",!0),this._timeoutShown=!0)}confirmButtonClickHandler(){var t=this;return n((function*(){t._session&&(e.off(t._confirmButton,"click",t.confirmButtonClickHandler),yield t.finishLoad(),t.finished())}))()}finishLoad(){var t=this;return n((function*(){if(t._session){var{hud:a,initFallbackSession:i,initScene:n}=t._session;try{yield n(),a.show(),e.show("#".concat(T)),t.finished()}catch(n){"InvalidStateError"===n.name||"NotSupportedError"===n.name?(yield i(),a.show(),e.show("#".concat(T)),t.finished()):"SecurityError"===n.name&&(e.show(t._confirmButton),e.prop(t._confirmButton,{disabled:!1}))}}}))()}setError(e,t){w.clearTimeout(this.timeout),this.finished()}showTooFarNotification(t){var{distance:a,artifact:i,map:n}=t,o="meter",r=a;r>=1e3?(o="kilometer",r>=2e3&&(o+="s"),r=Math.round(r/1e3)):r>=2&&(o+="s"),this.artifact=i,this.map=n,this.XR=!1,this._tooFarDistanceInfo.innerText="This artifact is ".concat(r," ").concat(o," away."),e.show(this._tooFarContainer),e.on(this._tooFarPreviewButton,"click",this.onTooFarPreviewButtonClick),e.on(this._tooFarCancelButton,"click",this.onTooFarCancelButtonClick),e.on(this._tooFarAbortButton,"click",this.onTooFarCancelButtonClick)}onTooFarCancelButtonClick(){e.off(this._tooFarPreviewButton,"click",this.onTooFarPreviewButtonClick),this._isCancelled=!0,e.hide(this._tooFarContainer),this.finished()}onTooFarPreviewButtonClick(){var t=this;return n((function*(){e.off(t._tooFarPreviewButton,"click",t.onTooFarPreviewButtonClick),e.off(t._tooFarCancelButton,"click",t.onTooFarCancelButtonClick),e.off(t._tooFarAbortButton,"click",t.onTooFarCancelButtonClick),e.hide(t._tooFarContainer);var{artifact:a,map:i,XR:n}=t;yield t.init({artifact:a,map:i,XR:n}),yield t.startEngine()}))()}showWebglDisabledNotification(){e.show(this._webglDisabledContainer),e.hide([this._header,this._headerDone,this._preloadInfo,this._cancelButton,this._confirmButton]),e.on(this._webglDisabledOkButton,"click",this.onWebglDisabledOkButtonClick)}onWebglDisabledOkButtonClick(){e.off(this._webglDisabledOkButton,"click",this.onWebglDisabledOkButtonClick),this._isCancelled=!0,e.hide(this._webglDisabledContainer),this.finished()}finished(){this._isWorking=!1,this._timeoutShown=!1,e(".start-experience-button").forEach((e=>{e.removeAttribute("disabled")})),e.hide([this._warningContainer,this._confirmButton,this._preloadInfo,this._headerDone]),e.prop(this._confirmButton,{disabled:!0}),e.show(this._header),w.clearTimeout(this.timeout)}}export{Oe as Preload};
