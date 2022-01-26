import{$ as e,N as t,O as i,P as a,c as o,Q as n,a as r,R as s,S as l,V as d,X as c,Y as h,Z as u,a0 as m,a1 as v,a2 as p,a3 as g,a4 as f,a5 as w,W as b,a6 as y,a7 as x,a8 as S,a9 as k,aa as _,ab as T,ac as C,ad as E,ae as B,af as P,ag as R,ah as F,ai as A,aj as L,ak as I,al as W,am as D,an as H,ao as X,ap as z,aq as O,ar as j,as as U,at as V,au as N,av as q,aw as Y,ax as K,ay as G,az as Z,aA as $,aB as J,aC as Q,w as ee,aD as te,aE as ie,aF as ae,aG as oe,aH as ne,aI as re,J as se,aJ as le}from"./vendor.js";class de{constructor(o){var{scene:n,sceneInstance:r,renderer:s,endSession:l}=o;this.endSession=l,this.engine=o,this.gui=e("#".concat(t)),this.hitSearch=e("#hud-searching-hittest"),this.swipeToRemove=e("#hud-swipe-to-remove"),this.XR=o.XR,this.XR&&(this.menu=e("#hud-menu"),this.subMenu=e("#hud-menu-sub"),this.menuVisible=!1,this.menuToggle=e("#hud-menu-toggle"),e.on(this.menuToggle,"click",this.onToggleMenu.bind(this)),e.on("#hud-menu-reposition","click",this.onRepositionButtonClick.bind(this)),this.recordVideoButton=e("#hud-menu-record-video"),e.on(this.recordVideoButton,"click",this.onRecordButtonClick.bind(this))),this.scene=n,this.renderer=s,this.sceneInstance=r,e.on("#".concat(i),"click",this.onExitButtonClick.bind(this)),a(this),this.animToggler=e("#toggle-animation-button")}setCamera(t){this.cameraAccess=t,t?e.show(this.recordVideoButton):e.hide(this.recordVideoButton)}showAnimToggler(t){this.animToggler&&(this.animToggler.classList.remove("play"),e.show(this.animToggler),this.animTogglerInit||(this.animTogglerInit=!0,this.eventListener=()=>{this.animToggler.classList.toggle("play"),t()},e.on(this.animToggler,"click",this.eventListener)))}hideAnimToggler(){e.hide(this.animToggler)}onToggleMenu(){var{subMenu:e}=this;e.classList.toggle("visible")}onRepositionButtonClick(){this.engine.unspawnModel()}onRecordButtonClick(){return o((function*(){}))()}addSession(e){this.session=e}show(){e.show(this.gui)}hide(){e.hide(this.gui)}onExitButtonClick(){var t=this;return o((function*(){if(t.session)try{yield t.session.end()}catch(e){t.hide()}else yield t.endSession();e.off(t.animToggler,"click",t.eventListener),t.sceneInstance&&t.sceneInstance.exit&&t.sceneInstance.exit(t),n()}))()}showHitSearch(){e.show(this.hitSearch)}hideHitSearch(){e.hide(this.hitSearch)}showElement(t){t.shown||(e.show(t),t.shown=!0)}hideElement(t){t.shown&&(e.hide(t),t.shown=!1)}}var ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e&&e.dispose&&r.fn(e.dispose)&&e.dispose()},he=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(r.arr(t)&&t.forEach((t=>e(t))),"Audio"===t.type&&t.isPlaying&&t.stop(),ce(t.geometry),t.material){var i=r.arr(t.material)?t.material:[t.material];i.forEach((e=>{Object.values(e).forEach(ce),ce(e)}))}t.children.length&&t.children.forEach(e),!t.isScene&&t.dispose&&r.fn(t.dispose)&&t.dispose(),t.parent&&t.parent.remove(t)};class ue extends s{constructor(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;super(e),this.type="Reflector",this.XR=i.XR,this.skybox=i.skybox,this.shadowPlane=i.shadowPlane;var a=this,{textureHeight:o=512,textureWidth:n=512,clipBias:r=0,fragmentShader:s=ve,vertexShader:b=me}=t,y=void 0!==t.color?new l(t.color):new l(8355711),x=new d,S=new c,k=new c,_=new c,T=new h,C=new c(0,0,-1),E=new u,B=new c,M=new c,P=new u,R=new h,F=new m,A=new g(n,o,{minFilter:v,magFilter:v,format:p});f.isPowerOfTwo(n)&&f.isPowerOfTwo(o)||(A.texture.generateMipmaps=!1);var L={tDiffuse:{value:A.texture},color:{value:y},textureMatrix:{value:R}},I=new w({uniforms:L,fragmentShader:s,vertexShader:b});this.material=I,this.onBeforeRender=(e,t,i)=>{var o;if(k.setFromMatrixPosition(a.matrixWorld),_.setFromMatrixPosition(i.matrixWorld),T.extractRotation(a.matrixWorld),S.set(0,0,1),S.applyMatrix4(T),B.subVectors(k,_),!(B.dot(S)>0)){B.reflect(S).negate(),B.add(k),T.extractRotation(i.matrixWorld),C.set(0,0,-1),C.applyMatrix4(T),C.add(_),M.subVectors(k,C),M.reflect(S).negate(),M.add(k),F.position.copy(B),F.up.set(0,1,0),F.up.applyMatrix4(T),F.up.reflect(S),F.lookAt(M),F.far=i.far,F.updateMatrixWorld(),F.projectionMatrix.copy(i.projectionMatrix),R.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),R.multiply(F.projectionMatrix),R.multiply(F.matrixWorldInverse),R.multiply(a.matrixWorld),x.setFromNormalAndCoplanarPoint(S,k),x.applyMatrix4(F.matrixWorldInverse),E.set(x.normal.x,x.normal.y,x.normal.z,x.constant);var n=F.projectionMatrix;P.x=(Math.sign(E.x)+n.elements[8])/n.elements[0],P.y=(Math.sign(E.y)+n.elements[9])/n.elements[5],P.z=-1,P.w=(1+n.elements[10])/n.elements[14],E.multiplyScalar(2/E.dot(P)),n.elements[2]=E.x,n.elements[6]=E.y,n.elements[10]=E.z+1-r,n.elements[14]=E.w,A.texture.encoding=e.outputEncoding,a.visible=!1;var s=e.getRenderTarget(),l=e.xr.enabled,d=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(A),e.state.buffers.depth.setMask(!0),!1===e.autoClear&&e.clear(),this.XR&&this.skybox&&(this.skybox.visible=!0);var c=!1;null!==(o=this.shadowPlane)&&void 0!==o&&o.visible&&(this.shadowPlane.visible=!1,c=!0),e.render(t,F),e.xr.enabled=l,e.shadowMap.autoUpdate=d,e.setRenderTarget(s),this.XR&&this.skybox&&(this.skybox.visible=!1),c&&(this.shadowPlane.visible=!0);var h=i.viewport;void 0!==h&&e.state.viewport(h),a.visible=!0}},this.getRenderTarget=()=>A}}ue.prototype.isReflector=!0;var me="uniform mat4 textureMatrix;varying vec4 vUv;#include <common>#include <logdepthbuf_pars_vertex>void main() {vUv = textureMatrix * vec4( position, 1.0 );gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );#include <logdepthbuf_vertex>}",ve="uniform vec3 color;uniform sampler2D tDiffuse;varying vec4 vUv;#include <logdepthbuf_pars_fragment>float blendOverlay( float base, float blend ) {return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );}vec3 blendOverlay( vec3 base, vec3 blend ) {return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );}void main() {#include <logdepthbuf_fragment>vec4 base = texture2DProj( tDiffuse, vUv );gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );}";class pe extends w{constructor(e,t){super({depthTest:!1});var{range:i=.5,mult:a=7,chromaKey:o=54322}=e,n={range:(parseFloat(i).toFixed(2)/1).toString(),mult:(parseFloat(a).toFixed(2)/1).toString(),chromaKey:new l(o)};t.minFilter=v,t.magFilter=v,this.setValues({transparent:!0,uniforms:{tex:{type:"t",value:t},chromaKey:{type:"c",value:n.chromaKey}},vertexShader:"#define GLSLIFY 1\nvarying vec2 vUv;void main(){vUv=uv;vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;}",fragmentShader:"#define GLSLIFY 1\nuniform sampler2D tex;uniform vec3 chromaKey;uniform float mult;varying vec2 vUv;void main(){vec3 tColor=texture2D(tex,vUv).rgb;float a=(length(tColor-chromaKey)-${options.range})*${options.mult};gl_FragColor=vec4(tColor,a);}"})}}var ge=b.APP_DB.SCENE_TYPES;class fe{constructor(e){var{artifact:t,preload:i,XR:a}=e;this.XR=a,this.artifact=t,this.preload=i;var{type:o=ge.Hit}=t;this.type=o,this.clock=new y,this.scene=new x,this.onResize=this.onResize.bind(this),this.render=this.render.bind(this),this.initFallbackSession=this.initFallbackSession.bind(this),this.toggleAnimations=this.toggleAnimations.bind(this),this.endSession=this.endSession.bind(this)}init(t){var i=this;return o((function*(){var{artifact:a,preload:n,scene:r,type:s,XR:l}=i;t&&(i.sceneInstance=t);var d=b.innerWidth/b.innerHeight;i.camera=new m(S.fov,d,S.near,S.far),i.camera.updateProjectionMatrix(),r.add(i.camera);var c=new k({antialias:!0,alpha:!0});if(i.renderer=c,c.setPixelRatio(b.devicePixelRatio),c.domElement.id=_,c.physicallyCorrectLights=!0,c.outputEncoding=T,c.toneMappingExposure=1,!1!==a.shadow&&(c.shadowMap.enabled=!0,c.shadowMap.type=C),i.addAudio(),i.addSkybox(),a.hideLight||i.addLights(),i.videoElement=n.assets.videoElement,null!=t&&t.init&&(yield t.init({engine:i,preload:n})),i.loadModel(),i.addVideoTrigger(),c.setSize(b.innerWidth,b.innerHeight),e.append(c.domElement,"#".concat(E)),i.hud=new de(i),l)try{var h=c.xr.getController(0);if(i.controller=h,!1!==a.shadow&&i.addShadowPlane(),!i.isHittestScene())throw new Error("Unknown scene type ".concat(s));s!==ge.Float&&i.spawnReticle(),e.on(h,"select",(()=>{if(!i.justUnspawned){i.spawnModel(!1),a.clickable?i.hud.showAnimToggler(i.toggleAnimations):i.hud.hideAnimToggler()}})),a.clickable||i.hud.hideAnimToggler(),r.add(h),i.initScene=o((function*(){var t;return e.hide("#Locator"),t=yield b.NAV.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test","dom-overlay"],domOverlay:{root:e("#hud")}}),e.on(t,"end",(()=>{i.endSession()})),i.hud.addSession(t),i.refSpace=yield t.requestReferenceSpace("viewer"),i.renderer.xr.enabled=!0,i.renderer.xr.setReferenceSpaceType("local"),yield i.renderer.xr.setSession(t),t.initFallbackSession=i.initFallbackSession.bind(i),t}))}catch(e){i.initScene=i.initFallbackSession}else i.initScene=i.initFallbackSession;return e.on(b,"resize",i.onResize),i.onResize(),c.setAnimationLoop(i.render),i}))()}onResize(){var{innerWidth:e,innerHeight:t}=b;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}addLights(){var e=new B(P.directionalColor,P.directionalIntensity);e.position.set(...P.directionalPosition),e.castShadow=!0,!1!==this.artifact.shadow&&(e.shadow.mapSize.width=512,e.shadow.mapSize.height=512,e.shadow.camera.near=1,e.shadow.camera.far=50),this.directionalLight=e,this.scene.add(e),this.ambientLight=new R(P.ambientColor,P.ambientIntensity),this.scene.add(this.ambientLight)}addShadowPlane(){var e=new F(200,200,32,32),t=new A;t.opacity=L;var i=new s(e,t);i.receiveShadow=!0,i.lookAt(0,100,0),i.position.set(0,0,0),this.shadowPlane=i}spawnReticle(){var e=new I(.15,.2,32).rotateX(-M.PI/2),t=new W;this.reticle=new s(e,t),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,this.scene.add(this.reticle)}glow(){var{glow:e}=this.artifact;e&&this.model.traverse((t=>{if(D(t.name,"glow")){var i=r.bool(e)?238:e,a=new W({color:i,side:H,blending:X,transparent:!0});t.material=a}}))}nosort(){this.artifact.nosort&&(this.renderer.sortObjects=!1)}clip(){var{model:e,artifact:{clip:t,clipSide:i}}=this;e&&t&&this.model.traverse((e=>{if(D(e.name,"clip")){var t=new W({color:"green",colorWrite:!1});e.material=t,e.castShadow=!1,e.receiveShadow=!1}}))}mirror(){var{mirrors:e}=this.artifact;if(e&&e.length){var t=b.devicePixelRatio,i=b.innerWidth*t,a=b.innerHeight*t;this.mirrors=e.map((e=>{var t,{clipBias:o=.003,color:n=7829367,type:r,params:s=[4,32],rotation:l={},position:d={}}=e,c=APP_DB.MESH_TYPES;t=r===c.CIRCLE?new z(...s):r===c.RING?new I(...s):r===c.BOX?new O(...s):r===c.SPHERE?new j(...s):new F(...s);var h=new ue(t,{clipBias:o,textureWidth:i,textureHeight:a,color:n},this),{x:u,y:m,z:v}=l;u&&h.rotateX(u),m&&h.rotateY(m),v&&h.rotateZ(v);var{x:p,y:g,z:f}=d;return p&&h.position.setX(p),g&&h.position.setY(g),f&&h.position.setZ(f),this.model.add(h),h}))}}addSkybox(){var e=this;return o((function*(){var{artifact:t,preload:i,renderer:a,scene:o,XR:n}=e,{light:l}=t,d=te,c=null==t?void 0:t.skySphere;r.arr(c)&&c.length&&(d=c);var h=new j(...d);!1!==t.scaleSky&&h.scale(-1,1,1);var u=i.assets.skybox,m=new U(a);m.compileEquirectangularShader();var v=m.fromEquirectangular(u).texture;m.dispose();var p=new W({map:u}),g=new s(h,p);g.visible=!n,o.add(g),!1!==l&&(o.environment=v),e.skybox=g}))()}addAudio(){if(!this.artifact.audio)return!1;this.listener=new V,this.camera.add(this.listener)}addVideoTrigger(){this.artifact.triggerVideo&&this.model.traverse((e=>{this.videoTrigger||["videotarget","videotrigger"].some((t=>D(e.name,t)))&&(this.videoTrigger=e,this.videoTrigger.visible=!1)}))}startMedia(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this.isMediaPlaying){var{actions:t=[],artifact:i,preload:a}=this,{audioElement:o,videoElement:n}=a.assets;o&&!i.triggerAudio&&(e&&(o.currentTime=0),o.play()),n&&!i.triggerVideo&&(e&&(n.currentTime=0),n.play()),t.forEach((e=>e.play())),this.isMediaPlaying=!0}}stopMedia(){var{audioElement:e,videoElement:t,actions:i=[]}=this;e&&e.pause(),t&&t.pause(),i&&i.length&&i.forEach((e=>e.stop())),this.isMediaPlaying=!1}toggleAnimations(){this.actions.forEach((e=>e.paused=!e.paused))}initFallbackSession(){this.XR=!1,b.B.classList.add(N);var{camera:e,artifact:t,model:i,renderer:a}=this,o=new q(e,a.domElement);this.controller=o,this.skybox.visible=!0,Object.entries(Y).forEach((e=>{var[t,i]=e;o[t]=i}));var{cam:n={},orbit:s={},clickable:l}=t;r.num(s.min)&&(o.minDistance=s.min),r.num(s.max)&&(o.maxDistance=s.max),r.num(n.maxPolar)&&(o.maxPolarAngle=Math.PI/n.maxPolar),l?this.hud.showAnimToggler(this.toggleAnimations):this.hud.hideAnimToggler();var{cam:d={}}=t,h=ie,{x:u=h.x,y:m=h.y,z:v=h.z}=d;e.position.set(u,m,v);var{lookat:p={}}=t,{x:g=0,y:f=0,z:w=0}=p;if(o.target=new c(g,f,w),i){var{x:y,y:x,z:S}=i.scale,{scale:k}=t;k&&i.scale.set(y*k,x*k,S*k)}o.update();this.spawnModel(!0),a.domElement.focus()}loadModel(){var e,{artifact:t,preload:i,sceneInstance:a={}}=this;if(null!=a&&a.model)this.model=a.model;else if(i.assets.gltf){var{gltf:o}=i.assets;this.model=o.scene,this.animations=o.animations}this.model&&(this.model.traverse((i=>{if(a.parentName&&D(i.name,a.parentName)&&a.child&&(e=i),i.isMesh){var{frustumCulled:o,transparent:n,castShadow:r,receiveShadow:s}=t;!1===o&&(i.frustumCulled=!1),!1===n&&(i.material.transparent=!1),D(i.name,"noshadow")||(i.castShadow=!1!==r,i.receiveShadow=!1!==s),i.material.map&&(i.material.map.anisotropy=16,i.material.map.encoding=T),i.material.emissiveMap&&(i.material.emissiveMap.encoding=T),(i.material.map||i.material.emissiveMap)&&(i.material.needsUpdate=!0)}else if(i.isLight){var{castShadow:l,shadowBias:d=.01,lightIntensity:c=.01,shadowCam:h={}}=t;if(i.intensity=i.intensity*c,!1!==t.shadow){i.castShadow=!1!==l,i.shadow.bias=d;var{near:u=.1,far:m=30}=h;i.shadow.camera.near=u,i.shadow.camera.far=m}}})),e&&e.add(a.child));if(this.actions=[],this.animations&&this.animations.length){this.mixer=new K(this.model);var{loop:n,clickable:r}=t;this.animations.forEach((e=>{var t=this.mixer.clipAction(e);!1===n&&(t.clampWhenFinished=!0,t.loop=G),r&&(t.paused=!0),this.actions.push(t)}))}if(this.videoElement&&this.model){var s=this.model.getObjectByName("videotarget");if(s){var l=new Z(this.videoElement),{flipVideo:d,chromaKey:c}=t;!1!==d&&(l.flipY=!1),s.material.map=l,c&&(s.material=new pe(t.chromaKey,l))}}this.glow(),this.clip(),this.nosort(),this.mirror()}spawnModel(e){var{camera:t,controller:i,model:a,reticle:o,scene:n,shadowPlane:r,type:s,XR:l,sceneInstance:d={}}=this;if(!l||e)return a&&(this.applyPositionAndRotation(),n.add(a)),this.modelSpawned=!0,d.spawnModel&&d.spawnModel({engine:this}),void this.startMedia();if(this.isHittestScene()){if(!this.modelSpawned&&this.lastHit){o.updateMatrixWorld(),a.position.setFromMatrixPosition(o.matrixWorld),a.updateMatrixWorld();var c=t.position,h=a.position,u=c.x-h.x,m=c.z-h.z,v=Math.atan2(u,m);a.rotation.y=v,r&&(r.position.setFromMatrixPosition(o.matrixWorld),n.add(r)),n.add(a),null!=d&&d.spawnModel&&d.spawnModel({engine:this}),o.visible=!1,this.modelSpawned=!0,this.startMedia()}this.applyPositionAndRotation()}else if(s===ge.Float){var p=a.clone();p.position.set(0,0,-1).applyMatrix4(i.matrixWorld),this.applyPositionAndRotation(),n.add(p),this.startMedia()}}unspawnModel(){var e;this.modelSpawned&&(this.scene.remove(this.model),this.modelSpawned=!1,this.isAnimationRunning=!1,this.stopMedia(),null!==(e=this.sceneInstance)&&void 0!==e&&e.exit&&this.sceneInstance.exit({engine:this}),this.justUnspawned=!0,setTimeout((()=>{this.justUnspawned=!1}),200))}applyPositionAndRotation(){var{artifact:e,model:t}=this,{pos:i={},rot:a={}}=e;t&&(i.x&&(t.position.x+=i.x),i.y&&(t.position.y+=i.y),i.z&&(t.position.z+=i.z),a.x&&t.rotateX($(a.x)),a.y&&t.rotateY($(a.y)),a.z&&t.rotateZ($(a.z)))}endSession(){var t=this;return o((function*(){var i;t.hud.hide(),t.renderer.setAnimationLoop(null),e("#".concat(E)).classList.remove("visible"),null!==(i=t.sceneInstance)&&void 0!==i&&i.exit&&t.sceneInstance.exit({engine:t}),t.scene&&he(t.scene),e.remove("#".concat(J)),e.remove("#".concat(Q));var a=e("#".concat(_));if(a){var o=a.parentNode;o.id===E?e.remove(a):e.remove(o)}b.B.classList.remove(N),e(".start-experience-button").forEach((e=>{e.removeAttribute("disabled")})),ee&&b.location.reload()}))()}isHittestScene(){return![ge.Float].includes(this.type)}render(e,t){var i=this;return o((function*(){var a;i.renderHittest(t),i.mixer&&i.mixer.update(i.clock.getDelta()),i.renderVideoTrigger(),null!==(a=i.sceneInstance)&&void 0!==a&&a.render?i.sceneInstance.render(e,t,{engine:i}):i.renderer.render(i.scene,i.camera),i.recorder&&i.recorder.render(e,t)}))()}renderVideoTrigger(){if(this.modelSpawned&&this.artifact.triggerVideo&&this.videoTrigger){var{triggerVideoDistance:e=1.1,triggerAudio:t}=this.artifact,i=e*e,a=this.videoTrigger.position.clone();a.add(this.videoTrigger.parent.position),this.camera.position.distanceToSquared(a)<=i?this.videoElement.paused&&(this.videoElement.play(),this.videoTrigger.visible=!0,t&&this.audioElement&&this.audioElement.play()):this.videoElement.paused||(this.videoElement.pause(),this.videoTrigger.visible=!1,t&&this.audioElement&&this.audioElement.pause())}}renderHittest(t){var i=this;return o((function*(){if(t&&i.XR){var a=i.renderer.xr.getSession();i.hitTestSourceRequested||(i.hitTestSource=yield a.requestHitTestSource({space:i.refSpace}),e.on(a,"end",(()=>{i.hitTestSourceRequested=!1,i.hitTestSource=null})),i.hitTestSourceRequested=!0);var o=t.getHitTestResults(i.hitTestSource);if(o.length){if(i.lastHit=o[0],!i.modelSpawned){i.reticle.visible=!0;var n=i.renderer.xr.getReferenceSpace();i.reticle.matrix.fromArray(i.lastHit.getPose(n).transform.matrix)}i.hud.hideHitSearch()}else i.reticle.visible=!1,i.modelSpawned||i.hud.showHitSearch(),i.lastHit=void 0}}))()}}class we{constructor(t){var{artifact:i,root:a,THREE:o}=t;this.artifact=i,this.root=a,o&&(this.THREE=o);var{android:n,chrome:r}=se;this.isAndroidChrome=n&&r,this._warningContainer=e("#timeout-warning"),this._header=e("#timeout-warning-header"),this._headerDone=e("#timeout-warning-header-done"),this._preloadInfo=e("#timeout-warning-info"),this._cancelButton=e("#timeout-warning-cancel"),this._confirmButton=e("#timeout-warning-confirm"),this._tooFarContainer=e("#toofar-warning"),this._tooFarPreviewButton=e("#toofar-warning-load-preview-button"),this._tooFarDistanceInfo=e("#toofar-warning-distance"),this._tooFarCancelButton=e("#toofar-warning-cancel-button"),this._tooFarAbortButton=e("#toofar-warning-abort-button"),this._webglDisabledContainer=e("#timeout-warning-webgl-disabled"),this._webglDisabledOkButton=e("#timeout-warning-webgl-disabled-ok-button"),this.confirmButtonClickHandler=this.confirmButtonClickHandler.bind(this),e.on(this._confirmButton,"click",this.confirmButtonClickHandler),this.onTooFarCancelButtonClick=this.onTooFarCancelButtonClick.bind(this),this.onTooFarPreviewButtonClick=this.onTooFarPreviewButtonClick.bind(this),this.onWebglDisabledOkButtonClick=this.onWebglDisabledOkButtonClick.bind(this),this.textureLoader=new ae,this.gltfLoader=new oe,this.promises={audioElement:this.loadAudio(),gltf:this.loadGltf(),scene:this.loadScene(),skybox:this.loadSkybox(),videoElement:this.loadVideo()},this.startEngine=this.startEngine.bind(this)}init(){var t=arguments,i=this;return o((function*(){var a=t.length>0&&void 0!==t[0]?t[0]:{},{map:o,XR:n}=a;i._isWorking=!0,i._isCancelled=!1,i._session=!1,i.map=o,i.XR=n,e.on(i._cancelButton,"click",(()=>{i._isCancelled=!0,i.finished()})),e.show([i._warningContainer,i._header]),i.timeout=b.setTimeout(i.showTimeoutWarning,ne)}))()}loadScene(){var t=this;return o((function*(){var{artifact:i}=t,a=APP_DB.SCENE_TYPES,{type:o=a.Hit}=i;if([a.Float,a.Hit].includes(o))return!1;var n=Object.entries(a).find((e=>{var[t,i]=e;return i===o})),s="".concat(t.root,"/CustomScene.js");if(r.arr(n)){var l=n[0];s="./scenes/".concat(l,".js")}var{default:d}=yield import(s),c=new d({artifact:i,preload:t,$:e,W:b,is:r});return c.preload&&(yield c.preload({artifact:i,preload:t})),c}))()}loadSkybox(){var e=this;return o((function*(){var{city:t,sky:i,slug:a}=e.artifact,o=i||a,n=b.SUPPORTS.WEBP?"webp":"jpg",r=o;return o.startsWith("/")||(r=[b.STATIC_URL,"skybox",t,o].filter((e=>e)).join("/")),r.endsWith(".".concat(n))||(r+=".".concat(n)),yield e.promisifiedLoad({loader:e.textureLoader,file:r})}))()}loadVideo(){var t=this;return o((function*(){var{slug:i,video:a}=t.artifact;if(!a)return!1;var o=!0===a?i:a,n=e.create("video",{id:Q,loop:!0,playsinline:!0,preload:"auto",crossorigin:"anonymous"});t.videoElement=n;var r=o.startsWith("/")?o:"/video/".concat(o,"/").concat(o),s="".concat(b.MEDIA_URL).concat(r);["webm","mp4"].forEach((t=>{e.create("source",{src:"".concat(s,".").concat(t,"?v=").concat(re),type:"video/".concat(t),parent:n})})),e.append(n);var{videoWidth:l}=n;if(l>0)return n;var d="canplaythrough";return le&&(d="loadedmetadata"),new Promise((t=>{e.on(n,d,(e=>t(e.target)))}))}))()}loadAudio(){var t=this;return o((function*(){var{slug:i,audio:a}=t.artifact;if(!a)return!1;e.remove("#".concat(J));var o=e.create("audio",{id:J,loop:!0,crossorigin:"anonymous"});t.audioElement=o;var n=r.str(a)&&a.startsWith("/")?a:"/audio/".concat(i),s="".concat(b.MEDIA_URL).concat(n);["ogg","mp4","mp3"].forEach((t=>{e.create("source",{src:"".concat(s,".").concat(t,"?v=").concat(re),type:"audio/".concat(t),parent:o})})),e.append(o);var{duration:l}=o;if(r.num(l)&&l>0)return o;var d="canplaythrough";return le&&(d="loadedmetadata"),new Promise((t=>{e.on(o,d,(e=>t(e.target)))}))}))()}loadGltf(){var e=this;return o((function*(){var{artifact:t,XR:i}=e;if(!1!==t.glb){var{file:a,version:o=1}=t,n=i?"&xr=1":"",r="".concat(b.GLB_URL,"/").concat(a,".glb?v=").concat(o).concat(n);return yield e.promisifiedLoad({loader:e.gltfLoader,file:r})}}))()}promisifiedLoad(e){var{loader:t,file:i}=e;return new Promise(((e,a)=>{t.load(i,(t=>{e(t)}),(e=>{e.lengthComputable&&(Math.ceil(e.loaded/e.total*100),"/".concat(e.total))}),(e=>{this.setError(e,"Error loading artifact.",5e3),console.error("error loading artifact",e),a(e)}))}))}startEngine(){var t=this;return o((function*(){var{artifact:i,XR:a}=t,n=yield Promise.all(Object.entries(t.promises).map(function(){var e=o((function*(e){var[t,i]=e;return[t,yield i]}));return function(t){return e.apply(this,arguments)}}()));t.assets=Object.fromEntries(n);var r=new fe({artifact:i,preload:t,XR:a}),s=yield r.init(t.assets.scene);if(!s)throw new Error("Session undefined.");e.hide(t._header),e.hide(t._preloadInfo),e.show(t._headerDone),t._session=s,t._timeoutShown&&t.isAndroidChrome?e.prop(t._confirmButton,{disabled:!1}):t._isCancelled||(yield t.finishLoad())}))()}showTimeoutWarning(){e.show(this._preloadInfo),this.isAndroidChrome&&(e.show(this._confirmButton),this._confirmButton.setAttribute("disabled",!0),this._timeoutShown=!0)}confirmButtonClickHandler(){var t=this;return o((function*(){t._session?(e.off(t._confirmButton,"click",t.confirmButtonClickHandler),yield t.finishLoad(),t.finished()):console.error("confirmButtonClickHandler: session not defined",t)}))()}finishLoad(){var t=this;return o((function*(){if(t._session){var{hud:i,initFallbackSession:a,initScene:o}=t._session;try{yield o(),i.show(),e.show("#".concat(E)),t.finished()}catch(o){"InvalidStateError"===o.name||"NotSupportedError"===o.name?(yield a(),i.show(),e.show("#".concat(E)),t.finished()):"SecurityError"===o.name?(e.show(t._confirmButton),e.prop(t._confirmButton,{disabled:!1})):(console.error("Unexpected Preload.finishLoad error"),console.error(o))}}}))()}setError(e,t){console.warn(e,t),b.clearTimeout(this.timeout),this.finished()}showTooFarNotification(t){var{distance:i,artifact:a,map:o}=t,n="meter",r=i;r>=1e3?(n="kilometer",r>=2e3&&(n+="s"),r=Math.round(r/1e3)):r>=2&&(n+="s"),this.artifact=a,this.map=o,this.XR=!1,this._tooFarDistanceInfo.innerText="This artifact is ".concat(r," ").concat(n," away."),e.show(this._tooFarContainer),e.on(this._tooFarPreviewButton,"click",this.onTooFarPreviewButtonClick),e.on(this._tooFarCancelButton,"click",this.onTooFarCancelButtonClick),e.on(this._tooFarAbortButton,"click",this.onTooFarCancelButtonClick)}onTooFarCancelButtonClick(){e.off(this._tooFarPreviewButton,"click",this.onTooFarPreviewButtonClick),this._isCancelled=!0,e.hide(this._tooFarContainer),this.finished()}onTooFarPreviewButtonClick(){var t=this;return o((function*(){e.off(t._tooFarPreviewButton,"click",t.onTooFarPreviewButtonClick),e.off(t._tooFarCancelButton,"click",t.onTooFarCancelButtonClick),e.off(t._tooFarAbortButton,"click",t.onTooFarCancelButtonClick),e.hide(t._tooFarContainer);var{artifact:i,map:a,XR:o}=t;yield t.init({artifact:i,map:a,XR:o}),yield t.startEngine()}))()}showWebglDisabledNotification(){e.show(this._webglDisabledContainer),e.hide([this._header,this._headerDone,this._preloadInfo,this._cancelButton,this._confirmButton]),e.on(this._webglDisabledOkButton,"click",this.onWebglDisabledOkButtonClick)}onWebglDisabledOkButtonClick(){e.off(this._webglDisabledOkButton,"click",this.onWebglDisabledOkButtonClick),this._isCancelled=!0,e.hide(this._webglDisabledContainer),this.finished()}finished(){this._isWorking=!1,this._timeoutShown=!1,e(".start-experience-button").forEach((e=>{e.removeAttribute("disabled")})),e.hide([this._warningContainer,this._confirmButton,this._preloadInfo,this._headerDone]),e.prop(this._confirmButton,{disabled:!0}),e.show(this._header),b.clearTimeout(this.timeout)}}export{we as Preload};
