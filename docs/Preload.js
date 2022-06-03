import{$ as e,y as t,A as a,B as i,c as n,C as o,M as r,D as s,P as l,V as d,E as c,F as h,G as m,L as u,R as p,H as v,I as f,S as g,W as w,J as b,K as y,N as x,O as S,Q as k,U as A,X as E,Y as P,Z as T,a0 as C,a1 as _,a2 as B,a3 as R,a4 as F,a5 as O,a6 as j,a7 as L,a8 as W,a as I,a9 as D,aa as H,ab as z,ac as U,ad as X,ae as V,af as q,ag as N,ah as Y,ai as G,aj as K,ak as Z,al as J,am as Q,_ as $,an as ee,ao as te,ap as ae,aq as ie,ar as ne,w as oe,as as re,at as se,au as le,av as de,aw as ce,ax as he,ay as me,az as ue,aA as pe,aB as ve,aC as fe,aD as ge,aE as we,aF as be,v as ye}from"./vendor.js";import{ChromaKeyMaterial as xe}from"./materials/ChromaKeyMaterial.js";class Se{constructor(n){var{scene:o,sceneInstance:r,renderer:s,endSession:l}=n;this.endSession=l,this.engine=n,this.gui=e("#".concat(t)),this.hitSearch=e("#hud-searching-hittest"),this.scene=o,this.renderer=s,this.sceneInstance=r,e.on("#".concat(a),"click",this.onExitButtonClick.bind(this)),i(this),this.animToggler=e("#toggle-animation-button")}setCamera(t){this.cameraAccess=t,t?e.show(this.recordVideoButton):e.hide(this.recordVideoButton)}showAnimToggler(t){this.animToggler&&(this.animToggler.classList.remove("play"),e.show(this.animToggler),this.animTogglerInit||(this.animTogglerInit=!0,this.eventListener=()=>{this.animToggler.classList.toggle("play"),t()},e.on(this.animToggler,"click",this.eventListener)))}hideAnimToggler(){e.hide(this.animToggler)}addSession(e){this.session=e}show(){e.show(this.gui)}hide(){e.hide(this.gui)}onExitButtonClick(){var t=this;return n((function*(){if(t.session)try{yield t.session.end()}catch(e){t.hide()}else yield t.endSession();e.off(t.animToggler,"click",t.eventListener),t.sceneInstance&&t.sceneInstance.exit&&t.sceneInstance.exit(t),o()}))()}showHitSearch(){e.show(this.hitSearch)}hideHitSearch(){e.hide(this.hitSearch)}showElement(t){t.shown||(e.show(t),t.shown=!0)}hideElement(t){t.shown&&(e.hide(t),t.shown=!1)}}class ke extends r{constructor(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;super(e),this.type="Reflector",this.XR=a.XR,this.skybox=a.skybox,this.shadowPlane=a.shadowPlane;var i=this,{textureHeight:n=512,textureWidth:o=512,clipBias:r=0,fragmentShader:w=Ee,vertexShader:b=Ae}=t,y=void 0!==t.color?new s(t.color):new s(8355711),x=new l,S=new d,k=new d,A=new d,E=new c,P=new d(0,0,-1),M=new h,T=new d,C=new d,_=new h,B=new c,R=new m,F=new v(o,n,{minFilter:u,magFilter:u,format:p});f.isPowerOfTwo(o)&&f.isPowerOfTwo(n)||(F.texture.generateMipmaps=!1);var O={tDiffuse:{value:F.texture},color:{value:y},textureMatrix:{value:B}},j=new g({uniforms:O,fragmentShader:w,vertexShader:b});this.material=j,this.onBeforeRender=(e,t,a)=>{var n;if(k.setFromMatrixPosition(i.matrixWorld),A.setFromMatrixPosition(a.matrixWorld),E.extractRotation(i.matrixWorld),S.set(0,0,1),S.applyMatrix4(E),T.subVectors(k,A),!(T.dot(S)>0)){T.reflect(S).negate(),T.add(k),E.extractRotation(a.matrixWorld),P.set(0,0,-1),P.applyMatrix4(E),P.add(A),C.subVectors(k,P),C.reflect(S).negate(),C.add(k),R.position.copy(T),R.up.set(0,1,0),R.up.applyMatrix4(E),R.up.reflect(S),R.lookAt(C),R.far=a.far,R.updateMatrixWorld(),R.projectionMatrix.copy(a.projectionMatrix),B.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),B.multiply(R.projectionMatrix),B.multiply(R.matrixWorldInverse),B.multiply(i.matrixWorld),x.setFromNormalAndCoplanarPoint(S,k),x.applyMatrix4(R.matrixWorldInverse),M.set(x.normal.x,x.normal.y,x.normal.z,x.constant);var o=R.projectionMatrix;_.x=(Math.sign(M.x)+o.elements[8])/o.elements[0],_.y=(Math.sign(M.y)+o.elements[9])/o.elements[5],_.z=-1,_.w=(1+o.elements[10])/o.elements[14],M.multiplyScalar(2/M.dot(_)),o.elements[2]=M.x,o.elements[6]=M.y,o.elements[10]=M.z+1-r,o.elements[14]=M.w,F.texture.encoding=e.outputEncoding,i.visible=!1;var s=e.getRenderTarget(),l=e.xr.enabled,d=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(F),e.state.buffers.depth.setMask(!0),!1===e.autoClear&&e.clear(),this.XR&&this.skybox&&(this.skybox.visible=!0);var c=!1;null!==(n=this.shadowPlane)&&void 0!==n&&n.visible&&(this.shadowPlane.visible=!1,c=!0),e.render(t,R),e.xr.enabled=l,e.shadowMap.autoUpdate=d,e.setRenderTarget(s),this.XR&&this.skybox&&(this.skybox.visible=!1),c&&(this.shadowPlane.visible=!0);var h=a.viewport;void 0!==h&&e.state.viewport(h),i.visible=!0}},this.getRenderTarget=()=>F}}ke.prototype.isReflector=!0;var Ae="\nuniform mat4 textureMatrix;\nvarying vec4 vUv;\n\n#include <common>\n#include <logdepthbuf_pars_vertex>\n\nvoid main() {\n  vUv = textureMatrix * vec4( position, 1.0 );\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n  #include <logdepthbuf_vertex>\n}",Ee="\nuniform vec3 color;\nuniform sampler2D tDiffuse;\nvarying vec4 vUv;\n\n#include <logdepthbuf_pars_fragment>\n\nfloat blendOverlay( float base, float blend ) {\n  return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );\n}\n\nvec3 blendOverlay( vec3 base, vec3 blend ) {\n  return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );\n}\n\nvoid main() {\n  #include <logdepthbuf_fragment>\n\n  vec4 base = texture2DProj( tDiffuse, vUv );\n  gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );\n}\n",Pe=["audio","target"],Me=w.APP_DB.SCENE_TYPES;class Te{constructor(e){var{artifact:t,preload:a,XR:i}=e;this.XR=i,this.artifact=t,this.preload=a;var{type:n=Me.Hit}=t;this.type=n,this.clock=new b,this.scene=new y,this.customMaterials=[],this.spatialAudioObjects=[],this.lookAtCameraObjects=[],this.animateObjects=[],this.audioAnalysers=[],this.audioRamps={},this.onResize=this.onResize.bind(this),this.render=this.render.bind(this),this.initFallbackSession=this.initFallbackSession.bind(this),this.toggleAnimations=this.toggleAnimations.bind(this),this.endSession=this.endSession.bind(this)}init(t){var a=this;return n((function*(){var{artifact:i,preload:o,scene:r,type:s,XR:l}=a;t&&(a.sceneInstance=t);var{fov:d,near:c,far:h}=x(i.cam,S),u=w.innerWidth/w.innerHeight;a.camera=new m(d,u,c,h),a.camera.updateProjectionMatrix(),r.add(a.camera);var p=new k({antialias:!0,alpha:!0});a.renderer=p,p.setPixelRatio(w.devicePixelRatio),p.domElement.id=A,p.physicallyCorrectLights=!0,p.outputEncoding=E,p.toneMappingExposure=1;var{audio:v,customMaterials:f,hideLight:g,ocean:b,particles:y,shadow:M,spatialAudio:C,triggerVideo:_,underwater:B}=i;if(!1!==M&&(p.shadowMap.enabled=!0,p.shadowMap.type=P),(v||C)&&a.addAudio(),a.addSkybox(),g||a.addLights(),a.videoElement=o.assets.videoElement,null!=t&&t.init&&(yield t.init({engine:a,preload:o})),null!=t&&t.beforeLoadModel&&t.beforeLoadModel({engine:a,preload:o}),a.loadModel(),null!=t&&t.afterLoadModel&&t.afterLoadModel({engine:a,preload:o}),f&&(yield a.addCustomMaterials()),_&&a.addVideoTrigger(),B&&(yield a.underwaterPlane()),b&&(yield a.oceanPlane()),y){var{Particles:R}=yield import("./Particles.js");a.particles=new R(a),yield a.particles.init()}if(p.setSize(w.innerWidth,w.innerHeight),e.append(p.domElement,"#".concat(T)),a.hud=new Se(a),l)try{var F=p.xr.getController(0);a.controller=F;var{clickable:O,shadow:j,shadowPlane:L}=i;if(!1!==j&&!1!==L&&a.addShadowPlane(),!a.isHittestScene())throw new Error("Unknown scene type ".concat(s));s!==Me.Float&&a.spawnReticle(),e.on(F,"select",(()=>{if(!a.justUnspawned){a.spawnModel(!1),O?a.hud.showAnimToggler(a.toggleAnimations):a.hud.hideAnimToggler()}})),O||a.hud.hideAnimToggler(),r.add(F),a.initScene=n((function*(){var t;return e.hide("#Locator"),t=yield w.NAV.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test","dom-overlay"],domOverlay:{root:e("#hud")}}),e.on(t,"end",(()=>{a.endSession()})),a.hud.addSession(t),a.refSpace=yield t.requestReferenceSpace("viewer"),a.renderer.xr.enabled=!0,a.renderer.xr.setReferenceSpaceType("local"),yield a.renderer.xr.setSession(t),t.initFallbackSession=a.initFallbackSession.bind(a),t}))}catch(e){a.initScene=a.initFallbackSession}else a.initScene=a.initFallbackSession;return yield a.addClickables(),e.on(w,"resize",a.onResize),a.onResize(),p.setAnimationLoop(a.render),a}))()}onResize(){var{innerWidth:e,innerHeight:t}=w;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}addLights(){var{directionalLightPosition:e=_.directionalPosition}=this.artifact,t=new C(_.directionalColor,_.directionalIntensity);t.position.set(...e),t.castShadow=!0,!1!==this.artifact.shadow&&(t.shadow.bias=-1e-4,t.shadow.mapSize.width=512,t.shadow.mapSize.height=512,t.shadow.camera.near=.1,t.shadow.camera.far=300),this.directionalLight=t,this.scene.add(t),this.ambientLight=new B(_.ambientColor,_.ambientIntensity),this.scene.add(this.ambientLight)}addCustomMaterials(){var e=this;return n((function*(){var{artifact:t}=e,{customMaterials:a}=t;yield Promise.all(a.map(function(){var a=n((function*(a){var i=e.model.getObjectByName(a.target);if(i){var{default:n}=yield import("./materials/".concat(a.name,".js"));i.material=new n({artifact:t,config:a,engine:e}),e.customMaterials.push({config:a,material:i.material})}}));return function(e){return a.apply(this,arguments)}}()))}))()}addShadowPlane(){var e=new R(150,150,64,64),t=new F;t.opacity=O;var a=new r(e,t);a.receiveShadow=!0,a.lookAt(0,100,0),a.position.set(0,0,0),this.shadowPlane=a}spawnReticle(){var e=new j(.15,.2,32).rotateX(-M.PI/2),t=new L;this.reticle=new r(e,t),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,this.scene.add(this.reticle)}glow(){var{glow:e}=this.artifact;e&&this.model.traverse((t=>{if(W(t.name,"glow")){var a=I.bool(e)?238:e,i=new L({color:a,side:D,blending:H,transparent:!0});t.material=i}}))}addClickables(){var t=this;return n((function*(){var{artifact:a,model:i}=t,{clickables:n=[]}=a;if(n&&n.length){var o=[];if(i.traverse((e=>{z({node:e,search:n})&&o.push(e)})),o.length){var{Controls:r}=yield import("./Controls.js");t.controls=new r({clickables:o,engine:t}),t.controller?e.on(t.controller,"select",t.controls.select,!1):e.on(t.renderer.domElement,"mousedown",t.controls.click,!1)}}}))()}nosort(){this.renderer.sortObjects=!1}clip(){var{model:e,artifact:{clip:t,clipSide:a}}=this;e&&t&&this.model.traverse((e=>{if(W(e.name,"clip")){var t=D;"back"===a?t=re:"front"===a&&(t=se),e.material=new L({color:"green",colorWrite:!1,side:t}),e.castShadow=!1,e.receiveShadow=!1,e.renderOrder=1}else e.renderOrder=2}))}mirror(){var{mirrors:e}=this.artifact;if(e&&e.length){var t=w.devicePixelRatio,a=w.innerWidth*t,i=w.innerHeight*t;this.mirrors=e.map((e=>{var t,{clipBias:n=.003,color:o=7829367,type:r,params:s=[4,32],rotation:l={},position:d={}}=e,c=APP_DB.MESH_TYPES;t=r===c.CIRCLE?new U(...s):r===c.RING?new j(...s):r===c.BOX?new X(...s):r===c.SPHERE?new V(...s):new R(...s);var h=new ke(t,{clipBias:n,textureWidth:a,textureHeight:i,color:o},this),{x:m,y:u,z:p}=l;m&&h.rotateX(m),u&&h.rotateY(u),p&&h.rotateZ(p);var{x:v,y:f,z:g}=d;return v&&h.position.setX(v),f&&h.position.setY(f),g&&h.position.setZ(g),this.model.add(h),h}))}}analyseAudio(){var{audioElement:e,audioElements:t=[]}=this.preload.assets;(e||null!=t&&t.length)&&[e,...t].filter((e=>e)).forEach((e=>{var t=new AudioContext,a=t.createMediaElementSource(e),i=t.createAnalyser();i.fftSize=this.artifact.fftSize||32,a.connect(i),a.connect(t.destination);var n=new Uint8Array(i.frequencyBinCount);i.getByteFrequencyData(n),this.audioAnalysers.push({name:e.id,analyser:i,array:n})}))}underwaterPlane(){var e=this;return n((function*(){var{UnderwaterPlane:t}=yield import("./UnderwaterPlane.js");e.cameraPlane=new t,yield e.cameraPlane.preload(e)}))()}oceanPlane(){var e=this;return n((function*(){var{name:t="ocean",normals:a="oceannormals1"}=e.artifact.ocean,{Water:i}=yield import("./vendor.js").then((function(e){return e.bc})),n=e.model.getObjectByName(t),o=yield e.preload.promisifiedLoad({loader:e.preload.textureLoader,file:"https://static.artificialmuseum.com/textures/ocean/".concat(a,".jpg")});o.wrapS=o.wrapT=q,e.ocean=new i(n.geometry,{textureWidth:512,textureHeight:512,waterNormals:o,sunDirection:new d,sunColor:16777215,waterColor:1048575,distortionScale:3.7,fog:!1}),e.ocean.position.copy(n.position),e.ocean.rotation.copy(n.rotation),e.model.add(e.ocean),n.visible=!1}))()}addSkybox(){var e=this;return n((function*(){var{artifact:t,preload:a,renderer:i,scene:n,XR:o}=e,s=le,l=null==t?void 0:t.skySphere;I.arr(l)&&l.length&&(s=l);var d=new V(...s);!1!==t.scaleSky&&d.scale(-1,1,1);var c=a.assets.skybox,h=new N(i);h.compileEquirectangularShader();var m=h.fromEquirectangular(c).texture;h.dispose();var u=new L({map:c}),p=new r(d,u);p.visible=!o,n.add(p),!1===t.light||t.hideEnvironment||(n.environment=m),e.skybox=p}))()}addAudio(){this.listener=new Y,this.camera.add(this.listener)}addVideoTrigger(){this.model.traverse((e=>{this.videoTrigger||["videotarget","videotrigger"].some((t=>W(e.name,t)))&&(this.videoTrigger=e,this.videoTrigger.visible=!1)}))}startMedia(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this.isMediaPlaying){var{actions:t=[],artifact:a,preload:i}=this,{audioElement:n,videoElement:o,audioElements:r=[]}=i.assets;a.triggerAudio||(n&&(e&&(n.currentTime=0),n.play()),null!=r&&r.length&&r.forEach((t=>{t.autoplay&&(e&&(t.currentTime=0),t.play())}))),o&&!a.triggerVideo&&(e&&(o.currentTime=0),o.play()),t.forEach((e=>e.play())),this.isMediaPlaying=!0}}stopMedia(){var{audioElement:e,videoElement:t,actions:a=[],audioElements:i=[]}=this;e&&e.pause(),t&&t.pause(),a&&a.length&&a.forEach((e=>e.stop())),i.forEach((e=>e.pause())),this.isMediaPlaying=!1}toggleAnimations(){this.actions.forEach((e=>e.paused=!e.paused))}initFallbackSession(){this.XR=!1,w.B.classList.add(G);var{camera:e,artifact:t,model:a,renderer:i}=this,n=new K(e,i.domElement);this.controller=n,this.skybox.visible=!0,Object.entries(Z).forEach((e=>{var[t,a]=e;n[t]=a}));var{cam:o={},orbit:r={},clickable:s}=t;I.num(r.min)&&(n.minDistance=r.min),I.num(r.max)&&(n.maxDistance=r.max),I.num(o.maxPolar)&&(n.maxPolarAngle=f.degToRad(o.maxPolar)),I.num(o.minPolar)&&(n.minPolarAngle=f.degToRad(o.minPolar)),s?this.hud.showAnimToggler(this.toggleAnimations):this.hud.hideAnimToggler();var{cam:l={}}=t,c=de,{x:h=c.x,y:m=c.y,z:u=c.z}=l;e.position.set(h,m,u);var{lookat:p={}}=t,{x:v=0,y:g=0,z:b=0}=p;if(n.target=new d(v,g,b),a){var{x:y,y:x,z:S}=a.scale,{scale:k}=t;k&&a.scale.set(y*k,x*k,S*k)}n.update();this.spawnModel(!0),i.domElement.focus()}loadModel(){var e,t,a,i,{artifact:n,preload:o,sceneInstance:r={}}=this;(null!=r&&r.model?this.model=r.model:null!==(e=o.assets.gltf)&&void 0!==e&&e.scene&&(this.model=o.assets.gltf.scene),null!=r&&r.animations?this.animations=r.animations:null!==(t=o.assets.gltf)&&void 0!==t&&t.animations&&(this.animations=o.assets.gltf.animations),this.model)&&(this.model.traverse((e=>{var t;if(r.parentName&&W(e.name,r.parentName)&&r.child&&(i=e),e.isMesh){var{frustumCulled:a,transparent:o,castShadow:s,receiveShadow:l}=n;!1===a&&(e.frustumCulled=!1),!1===o&&(e.material.transparent=!1),W(e.name,"noshadow")||(e.castShadow=!1!==s,e.receiveShadow=!1!==l),e.material.map&&(e.material.map.anisotropy=16,e.material.map.encoding=E),e.material.emissiveMap&&(e.material.emissiveMap.encoding=E),(e.material.map||e.material.emissiveMap)&&(e.material.needsUpdate=!0)}else if(e.isLight){var{castShadow:d,shadowBias:c=-1e-4,lightIntensity:h=.01,shadow:m,shadowCam:u={}}=n;if(e.intensity=e.intensity*h,!1!==m){e.castShadow=!1!==d,e.shadow.bias=c;var{near:p=.1,far:v=300}=u;e.shadow.camera.near=p,e.shadow.camera.far=v}}null!==(t=n.lookAtCameraObjects)&&void 0!==t&&t.length&&z({node:e,search:n.lookAtCameraObjects})&&(I.num(this.lookAtAlpha)||(this.lookAtAlpha=0),this.lookAtCameraObjects.push(e)),n.animateObjects&&n.animateObjects.forEach((t=>{var{name:a,animation:i}=t;W(e.name,a)&&this.animateObjects.push({node:e,animation:i,isAnimating:!1})})),n.audioElements&&n.audioElements.forEach((t=>{var{audio:a,target:i}=t,n=J(t,Pe);if(W(e.name,i)){var o=this.preload.assets.audioElements.find((e=>e.id==="#".concat(Q,"-").concat(a)));this.spatialAudioObjects.push($($({},n),{},{node:e,audio:o}))}}))})),i&&i.add(r.child));if(this.actions=[],null!==(a=this.animations)&&void 0!==a&&a.length){this.mixer=new ee(this.model);var{animations:s={}}=n,{loop:l,startOnTouch:d,clampWhenFinished:c=!0,autoplay:h=!0}=s;this.animations.forEach((e=>{var t=this.mixer.clipAction(e);!1===l&&(t.clampWhenFinished=c,t.loop=te),!d&&h||(t.paused=!0),this.actions.push(t)}))}if(this.videoElement&&this.model){var m=[];this.model.traverse((e=>{W(e.name,"videotarget")&&m.push(e)})),m.length&&m.forEach((e=>{var t=new ae(this.videoElement),{flipVideo:a,chromaKey:i}=n;!1!==a&&(t.flipY=!1),e.material.map=t,i&&(e.material=new xe(n.chromaKey,t))}))}this.glow(),this.clip(),this.artifact.nosort&&this.nosort(),this.mirror(),this.artifact.analyseAudio&&this.analyseAudio()}spawnModel(e){var{artifact:t,camera:a,controller:i,model:n,reticle:o,scene:r,shadowPlane:s,type:l,XR:d,sceneInstance:c={}}=this,{showSkybox:h}=t;if(!d||e)return n&&(this.applyPositionAndRotation(),r.add(n)),this.modelSpawned=!0,null!=c&&c.spawnModel&&c.spawnModel({engine:this}),null!=c&&c.afterSpawnModel&&c.afterSpawnModel({engine:this}),void this.startMedia();if(this.isHittestScene()){if(!this.modelSpawned&&this.lastHit){o.updateMatrixWorld(),n.position.setFromMatrixPosition(o.matrixWorld),n.updateMatrixWorld();var m=a.position,u=n.position,p=m.x-u.x,v=m.z-u.z,f=Math.atan2(p,v);n.rotation.y=f,s&&(s.position.setFromMatrixPosition(o.matrixWorld),r.add(s)),r.add(n),o.visible=!1,this.modelSpawned=!0,null!=c&&c.spawnModel&&c.spawnModel({engine:this}),null!=c&&c.afterSpawnModel&&c.afterSpawnModel({engine:this}),this.startMedia()}this.applyPositionAndRotation()}else if(l===Me.Float){var g=n.clone();g.position.set(0,0,-1).applyMatrix4(i.matrixWorld),this.applyPositionAndRotation(),r.add(g),this.startMedia()}h&&(this.skybox.visible=!0)}unspawnModel(){var e;this.modelSpawned&&(this.scene.remove(this.model),this.modelSpawned=!1,this.isAnimationRunning=!1,this.stopMedia(),null!==(e=this.sceneInstance)&&void 0!==e&&e.exit&&this.sceneInstance.exit({engine:this}),this.justUnspawned=!0,setTimeout((()=>{this.justUnspawned=!1}),200))}applyPositionAndRotation(){var{artifact:e,model:t}=this;if(t){var{pos:a={},rot:i={}}=e;a.x&&(t.position.x+=a.x),a.y&&(t.position.y+=a.y),a.z&&(t.position.z+=a.z);var n=f.degToRad;i.x&&t.rotateX(n(i.x)),i.y&&t.rotateY(n(i.y)),i.z&&t.rotateZ(n(i.z))}}endSession(){var t=this;return n((function*(){var a;t.hud.hide(),t.renderer.setAnimationLoop(null),e("#".concat(T)).classList.remove("visible"),null!==(a=t.sceneInstance)&&void 0!==a&&a.exit&&t.sceneInstance.exit({engine:t}),t.scene&&ie(t.scene),e.remove(".".concat(ne));var i=e("#".concat(A));if(i){var n=i.parentNode;n.id===T?e.remove(i):e.remove(n)}w.B.classList.remove(G),e(".start-experience-button").forEach((e=>{e.removeAttribute("disabled")})),oe&&w.location.reload()}))()}isHittestScene(){return![Me.Float].includes(this.type)}render(e,t){var a=this;return n((function*(){var i,n,o,r,s,l,d=a.clock.getDelta();a.renderHittest(t),a.mixer&&a.mixer.update(d),a.modelSpawned&&a.artifact.triggerVideo&&a.videoTrigger&&a.renderVideoTrigger(),null!==(i=a.sceneInstance)&&void 0!==i&&i.tick&&a.sceneInstance.tick({delta:d,engine:a,timestamp:e,frame:t}),null!==(n=a.spatialAudioObjects)&&void 0!==n&&n.length&&a.renderSpatialAudio(),null!==(o=a.audioAnalysers)&&void 0!==o&&o.length&&a.renderAnalyseAudio(),null!==(r=a.lookAtCameraObjects)&&void 0!==r&&r.length&&a.renderLookAtCamera(d),null!==(s=a.animateObjects)&&void 0!==s&&s.length&&a.renderAnimateObjects({delta:d,timestamp:e}),a.cameraPlane&&a.renderUnderwater(d),a.ocean&&a.renderOcean(d),a.particles&&a.particles.update(d),a.customMaterials&&a.customMaterials.forEach((e=>{var{config:t,material:a}=e;if(a.uniforms.uTime){var{speed:i=1}=t;a.uniforms.uTime.value+=d*i}})),null!==(l=a.sceneInstance)&&void 0!==l&&l.render?a.sceneInstance.render({delta:d,engine:a,timestamp:e,frame:t}):a.renderer.render(a.scene,a.camera)}))()}renderLookAtCamera(e){var{camera:t,lookAtCameraObjects:a=[]}=this;a.forEach((a=>{var i=new d(0,0,a.position.distanceTo(t.position));a.localToWorld(i);var n=i.clone(),o=this.artifact.lookAtSpeed||.001;this.lookAtAlpha+=e*o,n.distanceToSquared(t.position)>.5&&(n.lerp(t.position,Math.min(1,this.lookAtAlpha)),a.lookAt(n))}))}renderAnimateObjects(e){var{delta:t,timestamp:a}=e;this.animateObjects.forEach(((e,i)=>{var{node:n,animation:o}=e,{type:r,delay:s={},axis:l={}}=o,{x:d=0,y:c=0,z:h=0}=l,{max:m=10,min:u=2}=s;if("rotate"===r)if(e.isAnimating){e.value+=f.degToRad(t*e.speed*e.direction);var p=e.value*d,v=e.value*c,g=e.value*h;n.rotation.set(p,v,g),Math.abs(e.goal)<=Math.abs(e.value)&&(e.isAnimating=!1,e.nextAnimation=a+Math.random()*(1e3*m)+1e3*u)}else if(e.nextAnimation||(e.value=0,e.nextAnimation=a+Math.random()*(1e3*m)+1e3*u),a>=e.nextAnimation){var{speed:w={},value:b={}}=o,{max:y=2,min:x=1}=w,{max:S=0,min:k=0}=b;e.isAnimating=!0,e.speed=Math.random()*y+x,e.direction=Math.random()>.5?1:-1,e.goal=f.degToRad((Math.random()*S+k)*e.direction)}}))}renderVideoTrigger(){var{triggerVideoDistance:e=1.1,triggerAudio:t,triggerVideo:a=!0}=this.artifact,i=e*e,n=this.videoTrigger.position.clone();n.add(this.videoTrigger.parent.position),this.camera.position.distanceToSquared(n)<=i?(a&&this.videoElement&&this.videoElement.paused&&(this.videoElement.play(),this.videoTrigger.visible=!0),t&&this.audioElement&&this.audioElement.paused&&this.audioElement.play()):(!this.videoElement.paused&&a&&(this.videoElement.pause(),this.videoTrigger.visible=!1),t&&this.audioElement&&!this.audioElement.paused&&this.audioElement.pause())}renderHittest(t){var a=this;return n((function*(){if(t&&a.XR){var i=a.renderer.xr.getSession();a.hitTestSourceRequested||(a.hitTestSource=yield i.requestHitTestSource({space:a.refSpace}),e.on(i,"end",(()=>{a.hitTestSourceRequested=!1,a.hitTestSource=null})),a.hitTestSourceRequested=!0);var n=t.getHitTestResults(a.hitTestSource);if(n.length){if(a.lastHit=n[0],!a.modelSpawned){a.reticle.visible=!0;var o=a.renderer.xr.getReferenceSpace();a.reticle.matrix.fromArray(a.lastHit.getPose(o).transform.matrix)}a.hud.hideHitSearch()}else a.reticle.visible=!1,a.modelSpawned||a.hud.showHitSearch(),a.lastHit=void 0}}))()}renderAnalyseAudio(){var e,{audioAnalyserAnimation:t}=this.artifact,a=this.audioAnalysers.map((e=>{var{name:t,analyser:a,array:i}=e;a.getByteFrequencyData(i);var n=i.reduce(((e,t)=>e+t))/i.length;return this.audioRamps[t]={array:i,average:n},{array:i,average:n}})),i=0;if(a.map((e=>{i+=e.average})),I.fn(null===(e=this.sceneInstance)||void 0===e?void 0:e.renderAudioAnalyser)&&this.sceneInstance.renderAudioAnalyser(i,this),t){var n=this.actions.find((e=>e._clip.name===t));n.weight=i/255,n.time=n._clip.duration}}renderSpatialAudio(){this.spatialAudioObjects.forEach((e=>{var{node:t,distance:a,audio:i}=e,n=this.camera.position.distanceTo(t.position);if(n>a.max)i.paused||i.pause(),i.volume=0;else{i.paused&&i.play();var o=Math.max(0,Math.min(1,1-n/a.max+a.min/a.max));Math.abs(i.volume-o)>.02&&(i.volume=o)}}))}renderUnderwater(e){this.cameraPlane.tick(e)}renderOcean(e){var{animationSpeed:t=1}=this.artifact.ocean;this.ocean.material.uniforms.time.value+=e*t*.1}}class Ce{constructor(t){var{artifact:a,root:i,THREE:n}=t;this.artifact=a,this.root=i,n&&(this.THREE=n);var{android:o,chrome:r}=ye;this.isAndroidChrome=o&&r,this._warningContainer=e("#timeout-warning"),this._header=e("#timeout-warning-header"),this._headerDone=e("#timeout-warning-header-done"),this._preloadInfo=e("#timeout-warning-info"),this._cancelButton=e("#timeout-warning-cancel"),this._confirmButton=e("#timeout-warning-confirm"),this._tooFarContainer=e("#toofar-warning"),this._tooFarPreviewButton=e("#toofar-warning-load-preview-button"),this._tooFarDistanceInfo=e("#toofar-warning-distance"),this._tooFarCancelButton=e("#toofar-warning-cancel-button"),this._tooFarAbortButton=e("#toofar-warning-abort-button"),this._webglDisabledContainer=e("#timeout-warning-webgl-disabled"),this._webglDisabledOkButton=e("#timeout-warning-webgl-disabled-ok-button"),this.confirmButtonClickHandler=this.confirmButtonClickHandler.bind(this),e.on(this._confirmButton,"click",this.confirmButtonClickHandler),this.onTooFarCancelButtonClick=this.onTooFarCancelButtonClick.bind(this),this.onTooFarPreviewButtonClick=this.onTooFarPreviewButtonClick.bind(this),this.onWebglDisabledOkButtonClick=this.onWebglDisabledOkButtonClick.bind(this),this.textureLoader=new ce,this.gltfLoader=new he,this.plyLoader=new me,this.audioLoader=new ue,this.audioElements=[],this.collectPreloadPromises(),this.startEngine=this.startEngine.bind(this)}collectPreloadPromises(){var e={skybox:this.loadSkybox()},{audio:t,glb:a,audioElements:i,images:n,type:o,video:r}=this.artifact;i&&(e.audioElements=this.loadAudioElements()),t&&(e.audioElement=this.loadAudio()),pe(o)||(e.scene=this.loadScene()),!1!==a&&(e.gltf=this.loadGltf()),n&&(e.images=this.loadImages()),r&&(e.videoElement=this.loadVideo()),this.promises=e}init(){var t=arguments,a=this;return n((function*(){var i=t.length>0&&void 0!==t[0]?t[0]:{},{map:n,XR:o}=i;a._isWorking=!0,a._isCancelled=!1,a._session=!1,a.map=n,a.XR=o,e.on(a._cancelButton,"click",(()=>{a._isCancelled=!0,a.finished()})),e.show([a._warningContainer,a._header]),a.timeout=w.setTimeout(a.showTimeoutWarning,ve)}))()}loadScene(){var t=this;return n((function*(){var{artifact:a}=t,i=APP_DB.SCENE_TYPES,{type:n=i.Hit}=a,o=Object.entries(i).find((e=>{var[t,a]=e;return a===n})),r="".concat(t.root,"/CustomScene.js");if(I.arr(o)){var s=o[0];r="./scenes/".concat(s,".js")}var{default:l}=yield import(r),d=new l({artifact:a,mergeConfig:x,preload:t,$:e,W:w,is:I});return I.fn(null==d?void 0:d.preload)&&(yield d.preload({artifact:a,preload:t})),d}))()}loadSkybox(){var e=this;return n((function*(){var{city:t,sky:a,slug:i}=e.artifact,n=a||i,o="jpg";w.SUPPORTS.WEBP&&(o="webp");var r=n;return n.startsWith("/")||(r=[w.STATIC_URL,"skybox",t,n].filter((e=>e)).join("/")),r.endsWith(".".concat(o))||(r+=".".concat(o)),yield e.promisifiedLoad({loader:e.textureLoader,file:r})}))()}loadVideo(){var t=this;return n((function*(){var{slug:a,video:i}=t.artifact,n=!0===i?a:i,o=e.create("video",{id:fe,class:ne,loop:!0,playsinline:!0,preload:"auto",crossorigin:"anonymous"});t.videoElement=o;var r=["webm","mp4"],s=I.str(n)?n:a;s.startsWith("/")||(s.endsWith(".mp4")?(r=["mp4"],s=s.slice(0,-4)):s="/video/".concat(s,"/").concat(s)),s.endsWith(".mp4")&&(r=["mp4"],s=s.slice(0,-4));var l="".concat(w.MEDIA_URL).concat(s);r.forEach((t=>{e.create("source",{src:"".concat(l,".").concat(t,"?v=").concat(ge),type:"video/".concat(t),parent:o})})),e.append(o);var{videoWidth:d}=o;if(d>0)return o;var c="canplaythrough";return we&&(c="loadedmetadata"),new Promise((t=>{e.on(o,c,(e=>{we?setTimeout((()=>{t(e.target)}),be):t(e.target)}))}))}))()}loadAudio(){var t=this;return n((function*(){var{slug:a,audio:i}=t.artifact;e.remove("#".concat(Q));var n=e.create("audio",{id:Q,class:ne,loop:!0,crossorigin:"anonymous"});t.audioElement=n;var o=I.str(i)?i:a;o.startsWith("/")||(o="/audio/".concat(o));var r=["ogg","mp4","mp3"];o.endsWith(".mp3")&&(r=["mp3"],o=o.slice(0,-4));var s="".concat(w.MEDIA_URL).concat(o);r.forEach((t=>{e.create("source",{src:"".concat(s,".").concat(t,"?v=").concat(ge),type:"audio/".concat(t),parent:n})})),e.append(n);var{duration:l}=n;if(I.num(l)&&l>0)return n;var d="canplaythrough";return we&&(d="loadedmetadata"),new Promise((t=>{e.on(n,d,(e=>t(e.target)))}))}))()}loadAudioElements(){var t=this;return n((function*(){var{audioElements:a,slug:i}=t.artifact,o=Object.values(a).map((e=>e.audio||i));return w.SUPPORTS.A_MP4||w.SUPPORTS.A_OGG,yield Promise.all(o.map(function(){var a=n((function*(a){var i="#".concat(Q,"-").concat(a);e.remove(i);var n=e.create("audio",{class:ne,id:i,loop:!0,crossorigin:"anonymous"});t.audioElements.push(n);var o="/audio/".concat(a),r=["ogg","mp4","mp3"];o.endsWith(".mp3")&&(r=["mp3"],o=o.slice(0,-4));var s="".concat(w.MEDIA_URL).concat(o);r.forEach((t=>{e.create("source",{src:"".concat(s,".").concat(t,"?v=").concat(ge),type:"audio/".concat(t),parent:n})})),e.append(n);var{duration:l}=n;if(I.num(l)&&l>0)return n;var d="canplaythrough";return we&&(d="loadedmetadata"),new Promise((t=>{e.on(n,d,(e=>t(e.target)))}))}));return function(e){return a.apply(this,arguments)}}()))}))()}loadImages(){var e=this;return n((function*(){var{images:t=[],imageDir:a=""}=e.artifact,i="jpg";w.SUPPORTS.WEBP&&(i="webp"),a&&!a.endsWith("/")&&(a="".concat(a,"/"));var o=yield Promise.all(t.map(function(){var t=n((function*(t){var n=t;return a&&(n="".concat(a,"/").concat(n)),t.startsWith("/")||(n="https://static.artificialmuseum.com/textures/".concat(n)),t.endsWith(".jpg")||(n="".concat(n,".").concat(i)),[t,yield e.promisifiedLoad({loader:e.textureLoader,file:n})]}));return function(e){return t.apply(this,arguments)}}()));return Object.fromEntries(o)}))()}loadGltf(){var e=this;return n((function*(){var{artifact:t,XR:a}=e,{file:i,version:n=1}=t,o=a?"&xr=1":"",r="".concat(w.GLB_URL,"/").concat(i,".glb?v=").concat(n).concat(o);return yield e.promisifiedLoad({loader:e.gltfLoader,file:r})}))()}promisifiedLoad(e){var{loader:t,file:a}=e;return new Promise(((e,i)=>{t.load(a,(t=>{e(t)}),(e=>{e.lengthComputable&&(Math.ceil(e.loaded/e.total*100),"/".concat(e.total))}),(e=>{this.setError(e,"Error loading artifact.",5e3),i(e)}))}))}startEngine(){var t=this;return n((function*(){var{artifact:a,XR:i}=t,o=Object.entries(t.promises).map(function(){var e=n((function*(e){var[t,a]=e;return[t,yield a]}));return function(t){return e.apply(this,arguments)}}()),r=yield Promise.all(o);t.assets=Object.fromEntries(r);var s=new Te({artifact:a,preload:t,XR:i}),l=yield s.init(t.assets.scene);if(!l)throw new Error("Session undefined.");e.hide(t._header),e.hide(t._preloadInfo),e.show(t._headerDone),t._session=l,t._timeoutShown&&t.isAndroidChrome?e.prop(t._confirmButton,{disabled:!1}):t._isCancelled||(yield t.finishLoad())}))()}showTimeoutWarning(){e.show(this._preloadInfo),this.isAndroidChrome&&(e.show(this._confirmButton),this._confirmButton.setAttribute("disabled",!0),this._timeoutShown=!0)}confirmButtonClickHandler(){var t=this;return n((function*(){t._session&&(e.off(t._confirmButton,"click",t.confirmButtonClickHandler),yield t.finishLoad(),t.finished())}))()}finishLoad(){var t=this;return n((function*(){if(t._session){var{hud:a,initFallbackSession:i,initScene:n}=t._session;try{yield n(),a.show(),e.show("#".concat(T)),t.finished()}catch(n){"InvalidStateError"===n.name||"NotSupportedError"===n.name?(yield i(),a.show(),e.show("#".concat(T)),t.finished()):"SecurityError"===n.name&&(e.show(t._confirmButton),e.prop(t._confirmButton,{disabled:!1}))}}}))()}setError(e,t){w.clearTimeout(this.timeout),this.finished()}showTooFarNotification(t){var{distance:a,artifact:i,map:n}=t,o="meter",r=a;r>=1e3?(o="kilometer",r>=2e3&&(o+="s"),r=Math.round(r/1e3)):r>=2&&(o+="s"),this.artifact=i,this.map=n,this.XR=!1,this._tooFarDistanceInfo.innerText="This artifact is ".concat(r," ").concat(o," away."),e.show(this._tooFarContainer),e.on(this._tooFarPreviewButton,"click",this.onTooFarPreviewButtonClick),e.on(this._tooFarCancelButton,"click",this.onTooFarCancelButtonClick),e.on(this._tooFarAbortButton,"click",this.onTooFarCancelButtonClick)}onTooFarCancelButtonClick(){e.off(this._tooFarPreviewButton,"click",this.onTooFarPreviewButtonClick),this._isCancelled=!0,e.hide(this._tooFarContainer),this.finished()}onTooFarPreviewButtonClick(){var t=this;return n((function*(){e.off(t._tooFarPreviewButton,"click",t.onTooFarPreviewButtonClick),e.off(t._tooFarCancelButton,"click",t.onTooFarCancelButtonClick),e.off(t._tooFarAbortButton,"click",t.onTooFarCancelButtonClick),e.hide(t._tooFarContainer);var{artifact:a,map:i,XR:n}=t;yield t.init({artifact:a,map:i,XR:n}),yield t.startEngine()}))()}showWebglDisabledNotification(){e.show(this._webglDisabledContainer),e.hide([this._header,this._headerDone,this._preloadInfo,this._cancelButton,this._confirmButton]),e.on(this._webglDisabledOkButton,"click",this.onWebglDisabledOkButtonClick)}onWebglDisabledOkButtonClick(){e.off(this._webglDisabledOkButton,"click",this.onWebglDisabledOkButtonClick),this._isCancelled=!0,e.hide(this._webglDisabledContainer),this.finished()}finished(){this._isWorking=!1,this._timeoutShown=!1,e(".start-experience-button").forEach((e=>{e.removeAttribute("disabled")})),e.hide([this._warningContainer,this._confirmButton,this._preloadInfo,this._headerDone]),e.prop(this._confirmButton,{disabled:!0}),e.show(this._header),w.clearTimeout(this.timeout)}}export{Ce as Preload};
