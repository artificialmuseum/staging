import{$ as e,aA as t,aB as i,aC as a,c as n,aD as r,W as o,aE as s,aF as l,am as d,aG as c,aH as h,aI as u,aJ as m,aK as p,aL as f,aM as v,aN as g,aO as w,aP as b,a7 as y,a as T,v as S,aQ as E,aR as C,x,aS as k,C as j,_ as P,ad as _,D as A,A as O,aT as L,w as R,aU as B,a3 as F,G as I,aV as W,aW as D,ai as H,a5 as N,aX as U,I as X,aY as z,ag as V,af as G,ae as q,a6 as Y,V as K,aZ as Z,a_ as Q,F as $,a$ as J,b0 as ee,Q as te,b1 as ie,b2 as ae,a4 as ne,b3 as re,b4 as oe,b5 as se,b6 as le,b7 as de,b8 as ce,b9 as he,r as ue,ba as me}from"./vendor.js";class pe{constructor(n){var{scene:r,sceneInstance:o,renderer:s,endSession:l}=n;this.endSession=l,this.engine=n,this.gui=e("#".concat(t)),this.hitSearch=e("#hud-searching-hittest"),this.scene=r,this.renderer=s,this.sceneInstance=o,e.on("#".concat(i),"click",this.onExitButtonClick.bind(this)),a(this),this.animToggler=e("#toggle-animation-button")}setCamera(t){this.cameraAccess=t,t?e.show(this.recordVideoButton):e.hide(this.recordVideoButton)}showAnimToggler(t){this.animToggler&&(this.animToggler.classList.remove("play"),e.show(this.animToggler),this.animTogglerInit||(this.animTogglerInit=!0,this.eventListener=()=>{this.animToggler.classList.toggle("play"),t()},e.on(this.animToggler,"click",this.eventListener)))}hideAnimToggler(){e.hide(this.animToggler)}show(){e.show(this.gui)}hide(){e.hide(this.gui)}onExitButtonClick(){var t=this;return n((function*(){t.engine.endSession(),e.off(t.animToggler,"click",t.eventListener),r()}))()}showHitSearch(){e.show(this.hitSearch)}hideHitSearch(){e.hide(this.hitSearch)}showElement(t){t.shown||(e.show(t),t.shown=!0)}hideElement(t){t.shown&&(e.hide(t),t.shown=!1)}}var fe=o.APP_DB.SCENE_TYPES;class ve{constructor(e){var{artifact:t,preload:i,XR:a}=e;this.XR=a,this.artifact=t,this.preload=i;var{type:n=fe.Hit}=t;this.type=n,this.clock=new s,this.scene=new l,this.customMaterials=[],this.spatialObjects=[],this.lookAtCameraObjects=[],this.animateObjects=[],this.audioAnalysers=[],this.audioAnalyserEmissionConfigs=[],this.circlingLights=[],this.customObjects=[],this.videoTargets=[],this.audioRamps={},this.animationListeners=[],this.materialFadeAnimations=[],this.eventsToRemove=[],this.renderSteps=[],this.unspawnObjects=[],this.onResize=this.onResize.bind(this),this.render=this.render.bind(this),this.initFallbackSession=this.initFallbackSession.bind(this),this.toggleAnimations=this.toggleAnimations.bind(this),this.endSession=this.endSession.bind(this)}init(t){var i=this;return n((function*(){var a,{artifact:r,preload:s,scene:l,type:g,XR:w}=i;t&&(i.sceneInstance=t);var{fov:b,near:y,far:T}=d(r.cam,c),S=o.innerWidth/o.innerHeight;i.camera=new h(b,S,y,T),i.camera.updateProjectionMatrix(),l.add(i.camera);var E=new u({antialias:!0,alpha:!0});i.renderer=E,E.setPixelRatio(o.devicePixelRatio),E.setSize(o.innerWidth,o.innerHeight),E.domElement.id=m,E.useLegacyLights=!1,E.outputEncoding=p,E.toneMappingExposure=.5;var{audio:C,circlingLights:x,clickables:k,customMaterials:j,customObjects:P,fog:_,fogexp2:A,hideLight:O,ocean:M,particles:L,shadow:R,spatialAudio:B,triggerVideo:F,underwater:I,wireframes:W,renderTargets:D}=r;!1!==R&&(E.shadowMap.enabled=!0,E.shadowMap.type=f),i.hud=new pe(i);var H=null===(a=i.artifact.animateObjects)||void 0===a?void 0:a.some((e=>e.sound));if((C||B||H)&&i.addAudio(),i.addSkybox(),O||i.addLights(),(_||A)&&i.addFog(),i.videoElement=s.assets.videoElement,null!=t&&t.init&&(console.warn("`CustomScene.init` is deprecated","and will be removed in a future version. use `CustomScene.beforeLoadModel` instead."),yield t.init({engine:i,preload:s})),null!=t&&t.beforeLoadModel&&t.beforeLoadModel({engine:i,preload:s}),yield i.loadModel(),null!=t&&t.afterLoadModel&&t.afterLoadModel({engine:i,preload:s}),D&&i.addRenderTargets(),null!=x&&x.length){var{CirclingLights:N}=yield import("./vendor.js").then((function(e){return e.bd})),U=new N(i);i.renderSteps.push(U.render.bind(U))}if(j){var{addCustomMaterials:X,renderCustomMaterials:z}=yield import("./vendor.js").then((function(e){return e.be}));yield X(i),i.renderSteps.push(z)}if(P&&(yield i.addCustomObjects()),W&&W.forEach((e=>{var t=i.model.getObjectByName(e.target);t&&t.material&&(t.material.wireframe=!0,e.transparent&&(t.material.transparent=!0,t.material.opacity=e.opacity))})),F){var{addVideoTrigger:V,renderVideoTrigger:G}=yield import("./vendor.js").then((function(e){return e.bf}));V(i),i.renderSteps.push(G)}if(I&&(yield i.underwaterPlane()),M){var{OceanPlane:q}=yield import("./vendor.js").then((function(e){return e.bg})),Y=new q(i);yield Y.init(i),i.renderSteps.push(Y.render)}if(L){var{Particles:K}=yield import("./vendor.js").then((function(e){return e.bh}));i.particles=new K(i),yield i.particles.init()}if(E.setSize(o.innerWidth,o.innerHeight),e.append(E.domElement,"#".concat(v)),w)try{var Z=E.xr.getController(0);i.controller=Z;var{clickable:Q,shadow:$,shadowPlane:J}=r;if(!1!==$&&!1!==J&&i.addShadowPlane(),!i.isHittestScene())throw new Error("Unknown scene type ".concat(g));g!==fe.Float&&i.spawnReticle(),e.on(Z,"select",(()=>{if(!i.justUnspawned){i.spawnModel(!1),Q?i.hud.showAnimToggler(i.toggleAnimations):i.hud.hideAnimToggler()}})),Q||i.hud.hideAnimToggler(),l.add(Z),i.initScene=n((function*(){e.hide("#Locator");var t=yield o.NAV.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test","dom-overlay"],domOverlay:{root:e("#hud")}});return e.on(t,"end",(()=>{i.endSession()})),i.refSpace=yield t.requestReferenceSpace("viewer"),i.renderer.xr.enabled=!0,i.renderer.xr.setReferenceSpaceType("local"),yield i.renderer.xr.setSession(t),t.initFallbackSession=i.initFallbackSession.bind(i),i.session=t,t}))}catch(e){i.initScene=i.initFallbackSession}else i.initScene=i.initFallbackSession;return null!=k&&k.length&&(yield i.addClickables()),e.on(o,"resize",i.onResize),i.onResize(),E.setAnimationLoop(i.render),i}))()}onResize(){var{innerWidth:e,innerHeight:t}=o;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}addRenderTargets(){var{renderTargets:e}=this.artifact;this.renderTargets=[],e.forEach((e=>{var t=d(e,{height:512,width:512,options:{depthBuffer:!1,stencilBuffer:!1},off:[]}),i=[];t.off.length&&t.off.forEach((e=>{var t=this.model.getObjectByName(e);t&&i.push(t)})),this.renderTargets.push({height:t.height,width:t.width,off:i,object:new g(t.width,t.height,t.options)})}))}addLights(){var{directionalLightPosition:e=b.directionalPosition}=this.artifact,t=new w(b.directionalColor,b.directionalIntensity);t.position.set(...e),t.castShadow=!0,!1!==this.artifact.shadow&&(t.shadow.bias=-1e-4,t.shadow.mapSize.width=512,t.shadow.mapSize.height=512,t.shadow.camera.near=.1,t.shadow.camera.far=300),this.directionalLight=t,this.scene.add(t),this.ambientLight=new y(b.ambientColor,b.ambientIntensity),this.scene.add(this.ambientLight)}addCustomObjects(){var{artifact:e}=this,{customObjects:t}=e;t.forEach((e=>{var{config:t,object:i}=e,a=this.model.getObjectByName(t.target);a&&(i.child?a.add(i.child):i.model&&(a.parent.add(i.model),a.parent.remove(a)),this.customObjects.push({config:t,object:i}),T.fn(i.init)&&i.init({engine:this}))}))}addShadowPlane(){var e=new S(150,150,64,64),t=new E;t.opacity=C;var i=new x(e,t);i.receiveShadow=!0,i.lookAt(0,100,0),i.position.set(0,.01,0),this.shadowPlane=i}spawnReticle(){var e=new k(.15,.2,32).rotateX(-M.PI/2),t=new j;this.reticle=new x(e,t),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,this.scene.add(this.reticle)}onAnimationLoop(e,t){var i=e.action._clip.name;t.forEach((e=>{if(!this.materialFadeAnimations.includes((e=>e.action._clip.name===i))){var t=this.findEventTargets(e);this.materialFadeAnimations.push(P(P({},e),{},{targets:t}))}}))}onAnimationFinished(e,t){var i=e.action._clip.name;t.forEach((e=>{if(!this.materialFadeAnimations.includes((e=>e.action._clip.name===i))){var t=this.findEventTargets(e);this.materialFadeAnimations.push(P(P({},e),{},{targets:t}))}}))}glow(){var{glow:e}=this.artifact;this.model.traverse((t=>{if(_(t.name,"glow")){var i=T.bool(e)?238:e,a=new j({color:i,side:A,blending:O,transparent:!0});t.material=a}}))}addClickables(){var t=this;return n((function*(){var{artifact:i,controller:a,model:n,preload:r,renderer:o,XR:s}=t,{clickables:l=[]}=i,d=[];if(!0===l?d.push(n):l.length&&n.traverse((e=>{l.forEach((t=>{if(T.str(t)&&(t={target:t}),L({node:e,search:t.target})){var i;t.node=e,t.hide&&(e.material.transparent=!0,e.material.opacity=0);var a=!0===t.audio?e.name:t.audio;null!==(i=r.assets.audioElements)&&void 0!==i&&i.length&&(t.player=r.assets.audioElements.find((e=>e.dataset.name===a))),d.includes(t)||d.push(t)}}))})),d.length){var{Controls:c}=yield import("./Controls.js");t.controls=new c({clickables:d,engine:t}),s?e.on(a,"select",t.controls.select,!1):e.on(o.domElement,"mousedown",t.controls.click,!1)}}))()}onTouch(t){var i=this;return n((function*(){var a;null!==(a=i.sceneInstance)&&void 0!==a&&a.onTouch&&(yield i.sceneInstance.onTouch(t)),t.forEach(((t,a)=>{if(!(a+1>i.artifact.maxTouches)){var{emission:n,emissionIntensity:r=.2,link:o,player:s}=t;if(o&&(R?window.location.href=o:window.open(o,"_hacked")),s&&(s.loop?s.paused?s.play():(s.currentTime=0,s.pause()):(s.currentTime=0,s.play())),n){var l=t.node.name.split("_")[0],d=i.model.getObjectByName(l);if(!d)return void console.warn("node not found",l);("Group"===d.type?d.children:[d]).forEach((i=>{if(i){if(i.userData.origEmissive||(i.userData.origEmissive=i.material.emissive),i.userData.origEmissiveIntensity||(i.userData.origEmissiveIntensity=i.material.emissiveIntensity),s||console.warn("player not found",t.node.name),s)if(B.same(i.material.emissive,i.userData.origEmissive)){var a=new F(1,1,1);T.bool(n)?i.material.color&&(a=i.material.color):T.arr(n)&&(a=new F(...n)),i.material.emissive=a,i.material.emissiveIntensity=r,s.loop||e.on(s,"ended",(()=>{i.material.emissive=i.userData.origEmissive,i.material.emissiveIntensity=i.userData.origEmissiveIntensity}))}else s.loop&&(i.material.emissive=i.userData.origEmissive,i.material.emissiveIntensity=i.userData.origEmissiveIntensity)}else console.warn("node not found",l)}))}}}))}))()}nosort(){this.renderer.sortObjects=!1}clip(){var{model:e,artifact:t}=this,{clipSide:i,clipInFallback:a}=t;e.traverse((e=>{if(_(e.name,"clip"))if(this.XR||!1!==a){var t=A;"back"===i?t=D:"front"===i&&(t=$),e.material=new j({color:"green",colorWrite:!1,side:t}),e.castShadow=!1,e.receiveShadow=!1,e.renderOrder=1}else e.visible=!1;else e.renderOrder=2}))}underwaterPlane(){var e=this;return n((function*(){var{UnderwaterPlane:t}=yield import("./vendor.js").then((function(e){return e.bi}));e.cameraPlane=new t,yield e.cameraPlane.preload(e)}))()}addSkybox(){var e=this;return n((function*(){var{artifact:t,preload:i,renderer:a,scene:n,XR:r}=e,o=J,s=null==t?void 0:t.skySphere;T.arr(s)&&s.length&&(o=s);var l=new I(...o),d=i.assets.skybox,c=new W(a);c.compileEquirectangularShader();var h=c.fromEquirectangular(d).texture;c.dispose();var u=new j({map:d,side:D}),m=new x(l,u);m.rotation.y=H.degToRad(180),m.visible=!r,n.add(m),!1===t.light||t.hideEnvironment||(n.environment=h),e.skybox=m}))()}addAudio(){this.listener=new N,this.camera.add(this.listener)}addFog(){var{artifact:e,scene:t}=this,{fog:i,fogexp2:a}=e;if(i){var{color:n,near:r,far:o}=i;t.fog=new U(n,r,o)}if(a){var{color:s,density:l}=a;t.fog=new X(s,l)}}startMedia(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this.isMediaPlaying){var{actions:t=[],artifact:i,preload:a}=this,{audioElement:n,videoElement:r,audioElements:o=[]}=a.assets;i.triggerAudio||(n&&(e&&(n.currentTime=0),n.play()),null!=o&&o.length&&o.forEach((t=>{t.autoplay&&(e&&(t.currentTime=0),t.play())}))),r&&!i.triggerVideo&&(e&&(r.currentTime=0),r.play()),t.forEach((e=>e.play())),this.isMediaPlaying=!0}}stopMedia(){var{audioElement:e,preload:t,videoElement:i,actions:a=[],audioElements:n=[]}=this;e&&e.pause(),i&&i.pause(),t.hls&&t.hls.destroy(),a&&a.length&&a.forEach((e=>e.stop())),n.forEach((e=>e.pause())),this.isMediaPlaying=!1}toggleAnimations(){this.actions.forEach((e=>e.paused=!e.paused))}initFallbackSession(){var e=this;return n((function*(){var t;e.XR=!1,o.B.classList.add(z);var{camera:i,artifact:a,model:n,renderer:r}=e,{clickable:s}=a,{Controller:l}=e.preload.assets;e.controller=new l(i,r.domElement,a),e.controller.unspawn&&e.unspawnObjects.push(e.controller),e.skybox.visible=!0,s?e.hud.showAnimToggler(e.toggleAnimations):e.hud.hideAnimToggler();var{cam:d={}}=a,c=ee,{x:h=c.x,y:u=c.y,z:m=c.z}=d;if(i.position.set(h,u,m),n){var{x:p,y:f,z:v}=n.scale,{scale:g}=a;g&&n.scale.set(p*g,f*g,v*g)}null===(t=e.controller)||void 0===t||t.update();e.spawnModel(!0),r.domElement.focus()}))()}loadModel(){var t=this;return n((function*(){var i,a,r,{artifact:o,preload:s,sceneInstance:l={}}=t,{spatialObjects:d=[],audioElements:c=[]}=o;if(t.spatials=[...d,...c],null!=l&&l.model?t.model=l.model:null!==(i=s.assets.gltf)&&void 0!==i&&i.scene&&(t.model=s.assets.gltf.scene),o.ply){var{addPly:h}=yield import("./vendor.js").then((function(e){return e.bj}));h(t)}if(null!=l&&l.animations?t.animations=l.animations:null!==(a=s.assets.gltf)&&void 0!==a&&a.animations&&(t.animations=s.assets.gltf.animations),t.actions=[],null!==(r=t.animations)&&void 0!==r&&r.length){var u;t.mixer=new V(t.model);var{animations:m={}}=o,{loop:f,startOnTouch:v,clampWhenFinished:g=!0,autoplay:w=!0,noLoopAnimations:b=[],pausedAnimations:y=[]}=m;if(t.animations.forEach((e=>{var i=t.mixer.clipAction(e),a=y.includes(e.name),n=v||!w||a;(!1===f||b.includes(e.name))&&(i.clampWhenFinished=g,i.loop=G),n&&(i.paused=!0),t.actions.push(i)})),null!==(u=t.artifact.events)&&void 0!==u&&u.animation){var{events:T}=t.artifact,{times:S=[],loop:E=[],finished:C=[]}=null==T?void 0:T.animation;if(E.length){var x=[t.mixer,"loop",e=>t.onAnimationLoop(e,E)];e.on(...x),x.targets=t.findEventTargets(E),t.eventsToRemove.push(x)}if(C.length){var k=[t.mixer,"finished",e=>t.onAnimationFinished(e,C)];e.on(...k),k.targets=t.findEventTargets(C),t.eventsToRemove.push(k)}if(S.length){var{times:j}=t.artifact.events.animation;j.length&&j.forEach((e=>{var{action:i,once:a=!1,targets:n}=e,r=q.findByName(t.animations,i),o=t.findEventTargets(e);t.animationListeners.push(P(P({},e),{},{once:a,action:r,targets:o}))}))}}}if(t.model){var A,O,M={};if(t.model.traverse((e=>{if(l.parentName&&l.child&&_(e.name,l.parentName)&&(O=e),t.customObjects.forEach((t=>{var{object:i}=t;i.parentName&&i.child&&_(e.name,i.parentName)&&(M[i.name]=e)})),e.isMesh){var{frustumCulled:i,transparent:a,castShadow:n,receiveShadow:r,noShadowObjects:s=[],noShadowCastObjects:d=[],noShadowReceiveObjects:c=[]}=o;!1===i&&(e.frustumCulled=!1),!1===a&&(e.material.transparent=!1),_(e.name,"noshadow")||s.includes(e.name)||(_(e.name,"noshadowcast")||d.includes(e.name)||(e.castShadow=!1!==n),_(e.name,"noshadowreceive")||c.includes(e.name)||(e.receiveShadow=!1!==r)),_(e.name,"videotarget")&&t.videoTargets.push(e),e.material.map&&(e.material.map.anisotropy=16,e.material.map.encoding=p),e.material.emissiveMap&&(e.material.emissiveMap.encoding=p),(e.material.map||e.material.emissiveMap)&&(e.material.needsUpdate=!0)}var h=[];o.animateObjects&&o.animateObjects.forEach((i=>{if(_(e.name,i.name)){var a=q.findByName(t.animations,e.name);if(i.sound){!0===i.sound&&(i.sound={name:t.artifact.slug}),i.sound.name||(i.sound.name=t.artifact.slug);var n=t.preload.assets.animateObjects[i.sound.name];if(n){var r=new Y(t.listener);r.setBuffer(n);var{loopSound:o=!0}=i;if(r.setLoop(o),i.audio=r,i.sound.distance){var s=!1!==i.sound.yDistanceTest;h.push({buffer:r,distance:i.sound.distance,distanceTarget:e.name,target:e.name,yDistanceTest:s})}}else console.error("animateObjects: Sound not found in preload.assets",i)}t.animateObjects.push(P(P({},i),{},{action:a,node:e}))}})),t.spatials=[...t.spatials,...h]})),t.spatials.length){var{SpatialObjects:L}=yield import("./vendor.js").then((function(e){return e.bk})),R=new L(t);t.renderSteps.push(R.render.bind(R))}if(null!==(A=o.lookAtCameraObjects)&&void 0!==A&&A.length){var{LookAtCamera:B}=yield import("./vendor.js").then((function(e){return e.bl})),F=new B(t);t.renderSteps.push(F.render.bind(F))}if(O&&O.add(l.child),t.customObjects.forEach((e=>{var{object:i}=e;i.child?M[i.name].add(i.child):i.model&&t.model.add(i.model)})),t.videoElement&&t.videoTargets.length){var{flipVideo:I,chromaKey:W}=o,D=new K(t.videoElement);!1!==I&&(D.flipY=!1);var H=W?yield import("./materials/ChromaKeyMaterial.js"):void 0;yield Promise.all(t.videoTargets.map(function(){var e=n((function*(e){W?e.material=new H(W,D):e.material.map=D}));return function(t){return e.apply(this,arguments)}}()))}}var{clip:N,glow:U,mirrors:X,nosort:z,clones:Z}=t.artifact;if(U&&t.glow(),t.model&&N&&t.clip(),z&&t.nosort(),null!=X&&X.length){var{mirror:Q}=yield import("./vendor.js").then((function(e){return e.bm}));Q(t)}if(t.artifact.analyseAudio){var{AnalyseAudio:$}=yield import("./vendor.js").then((function(e){return e.bn})),J=new $(t);t.renderSteps.push(J.render)}if(t.model)if(Z){var{Clones:ee}=yield import("./vendor.js").then((function(e){return e.bo}));t.clones=new ee(t),t.renderSteps.push(t.clones.render.bind(t.clones))}else t.model.position.set(5e3,5e3,5e3),t.scene.add(t.model)}))()}findEventTargets(e){var t=[];return this.model.traverse((i=>{L({node:i,search:e.targets})&&(i.material&&(t.includes(i.material)||t.push(i.material)))})),t}spawnModel(e){var t,{artifact:i,camera:a,controller:n,model:r,reticle:o,scene:s,sceneInstance:l={},shadowPlane:d,type:c,XR:h}=this,{showSkybox:u,floatSpawnAtZeroY:m=!1}=i;if(this.applyPositionAndRotation(),!h||e)r&&(this.clones||r.position.set(0,0,0)),this.modelSpawned=!0;else if(this.isHittestScene()){if(!this.modelSpawned&&this.lastHit){o.updateMatrixWorld(),r.position.setFromMatrixPosition(o.matrixWorld),r.updateMatrixWorld();var p=a.position,f=r.position,v=p.x-f.x,g=p.z-f.z,w=Math.atan2(v,g);r.rotation.y=w,d&&(d.position.setFromMatrixPosition(o.matrixWorld),s.add(d)),this.clones||(r.visible=!0),o.visible=!1,this.modelSpawned=!0}}else if(c===fe.Float){var b=r.clone();b.position.set(0,0,-1).applyMatrix4(n.matrixWorld),m&&(b.position.y=0),s.add(b)}if(null!=l&&l.spawnModel&&(console.warn("W_DEPRECATED: sceneInstance.spawnModel is deprecated. Please use sceneInstance.afterSpawnModel instead."),l.spawnModel({engine:this})),null!=l&&l.afterSpawnModel&&l.afterSpawnModel({engine:this}),this.startMedia(),u&&(this.skybox.visible=!0),null!==(t=this.preload.gui)&&void 0!==t&&t.afterSpawnModel){var{afterSpawnModel:y}=this.preload.gui;y.style.visibility="visible",y.style.opacity=1,setTimeout((()=>{var e;T.fn(null===(e=y.parentNode)||void 0===e?void 0:e.removeChild)&&y.parentNode.removeChild(y)}),8e3)}}unspawnModel(){var t;this.modelSpawned&&(this.scene.remove(this.model),this.modelSpawned=!1,this.isAnimationRunning=!1,this.stopMedia(),this.exitSceneInstance(),this.justUnspawned=!0,null!==(t=this.eventsToRemove)&&void 0!==t&&t.length&&this.eventsToRemove.forEach((t=>{e.off(...t)})),this.unspawnObjects.forEach((e=>{null==e||e.unspawn(this)})),setTimeout((()=>{this.justUnspawned=!1}),200))}exitSceneInstance(){var e;this.customObjects.forEach((e=>{var{object:t}=e;T.fn(t.exit)&&t.exit({engine:this})})),this.customMaterials.forEach((e=>{var{material:t}=e;T.fn(t.exit)&&t.exit({engine:this})})),this.animateObjects.forEach((e=>{var t;null===(t=e.audio)||void 0===t||t.stop()})),null!==(e=this.sceneInstance)&&void 0!==e&&e.exit&&this.sceneInstance.exit({engine:this})}applyPositionAndRotation(){var{artifact:e,model:t}=this;if(t){var{pos:i={},rot:a={}}=e;i.x&&(t.position.x+=i.x),i.y&&(t.position.y+=i.y),i.z&&(t.position.z+=i.z);var n=H.degToRad;a.x&&t.rotateX(n(a.x)),a.y&&t.rotateY(n(a.y)),a.z&&t.rotateZ(n(a.z))}}endSession(){var t,i;null===(t=this.session)||void 0===t||t.end(),this.hud.hide(),this.renderer.setAnimationLoop(null),e("#".concat(v)).classList.remove("visible"),this.exitSceneInstance(),this.scene&&Z(this.scene),e.remove(".".concat(Q)),null!==(i=this.preload)&&void 0!==i&&i.hls&&(this.preload.hls.destroy(),e.remove(this.preload.hlsScript));var a=e("#".concat(m));if(a){var n=a.parentNode;n.id===v?e.remove(a):e.remove(n)}o.B.classList.remove(z),e(".start-experience-button").forEach((e=>{e.removeAttribute("disabled")})),R&&o.location.reload()}isHittestScene(){return![fe.Float].includes(this.type)}render(e,t){var i=this;return n((function*(){var a,n,r,o,s,l=i.clock.getDelta();i.renderHittest(t),i.mixer&&i.mixer.update(l);var d={delta:l,timestamp:e,engine:i,frame:t};i.modelSpawned&&i.renderSteps.forEach((e=>{e(d)})),null!==(a=i.sceneInstance)&&void 0!==a&&a.tick&&i.sceneInstance.tick(d),null!==(n=i.artifact.ply)&&void 0!==n&&n.animated&&i.renderPlyMorphTargetInfluences(d),null!==(r=i.animateObjects)&&void 0!==r&&r.length&&i.renderAnimateObjects(d),i.cameraPlane&&i.renderUnderwater(d),null!==(o=i.animationListeners)&&void 0!==o&&o.length&&i.renderAnimationTimeEvent(d),i.materialFadeAnimations.length&&i.renderMaterialAnimTick(d),i.particles&&i.particles.update(d),i.customObjects.length&&i.renderCustomObjects(d),null!==(s=i.sceneInstance)&&void 0!==s&&s.render?i.sceneInstance.render(d):i.renderer.render(i.scene,i.camera),i.controller&&(i.controller.update&&i.controller.update(l),i.controller.render&&i.controller.render(l))}))()}renderRenderTargets(e){var{renderTargets:t}=this;t.forEach((e=>{console.log({renderTarget:e}),e.off.length&&e.off.forEach((e=>{e.visible=!1})),this.renderer.setRenderTarget(e.object),this.renderer.render(scene,camera),this.renderer.setRenderTarget(null),e.off.length&&e.off.forEach((e=>{e.visible=!0}))}))}renderPlyMorphTargetInfluences(e){var{delta:t,timestamp:i}=e;this.nextMorphTargetStep||(this.nextMorphTargetStep=i+this.morphTargetInfluenceConfig.delay);var a=this.animatedPoints,n=a.morphTargetInfluences.length-1,r=t*this.morphTargetInfluenceConfig.speed;a.morphTargetInfluences=a.morphTargetInfluences.map(((e,t)=>{if(t===this.morphTargetTargetIndex){var a=Math.min(e+r,1);return a>=1&&i>this.nextMorphTargetStep&&(this.nextMorphTargetStep=i+this.morphTargetInfluenceConfig.delay,this.hasRun=!this.hasRun,this.hasRun||(this.morphTargetTargetIndex+=1,this.morphTargetTargetIndex>n&&(this.morphTargetTargetIndex=0))),a}return Math.max(e-r,0)}))}renderCustomObjects(e){this.customObjects.forEach((t=>{var{object:i}=t;T.fn(i.tick)&&i.tick(e)}))}renderAnimateObjects(e){var{timestamp:t}=e;this.animateObjects.forEach((e=>{var{action:i,audio:a,speed:n,minSpeed:r=0,maxDelay:o=2,minDelay:s=1}=e;if(i&&i.paused&&(e.nextAnimation||(e.nextAnimation=t+Math.random()*(1e3*o)+1e3*s),a.isPlaying&&a.stop(),e.nextAnimation<=t)){e.nextAnimation=!1;var l=Math.random()>.5?1:-1,d=Math.max(r,Math.random()*n)*l;i.timeScale=d,i.paused=!1,i.play(),a&&!a.isPlaying&&a.play()}}))}renderHittest(t){var i=this;return n((function*(){if(t&&i.XR){var a=i.renderer.xr.getSession();i.hitTestSourceRequested||(i.hitTestSource=yield a.requestHitTestSource({space:i.refSpace}),e.on(a,"end",(()=>{i.hitTestSourceRequested=!1,i.hitTestSource=null})),i.hitTestSourceRequested=!0);var n=t.getHitTestResults(i.hitTestSource);if(n.length){if(i.lastHit=n[0],!i.modelSpawned){i.reticle.visible=!0;var r=i.renderer.xr.getReferenceSpace();i.reticle.matrix.fromArray(i.lastHit.getPose(r).transform.matrix)}i.hud.hideHitSearch()}else i.reticle.visible=!1,i.modelSpawned||i.hud.showHitSearch(),i.lastHit=void 0}}))()}renderAnimationTimeEvent(){this.animationListeners.forEach((e=>{var{time:t,action:i,once:a}=e,{time:n}=i;!e.hasTriggered&&n>=t?(e.hasTriggered=!0,this.materialFadeAnimations.push(e)):n<=t&&(a||(e.hasTriggered=!1))}))}renderMaterialAnimTick(e){var{delta:t}=e;this.materialFadeAnimations.forEach(((e,i)=>{if(e){var{targets:a=[],speed:n=1,to:r=0,props:o}=e;a.forEach((e=>{var a=T.arr(o)?o:[o],s=!0;a.map((i=>{var a=e[i]+n*t;n<0?a<=r?a=r:s=!1:n>0&&(a>=r?a=r:s=!1),e[i]=a})),s&&this.materialFadeAnimations.splice(i,1)}))}}))}renderUnderwater(e){var{delta:t}=e;this.cameraPlane.tick(t)}}class ge{constructor(t){var{artifact:i,root:a,THREE:n}=t;this.artifact=i,this.root=a,n&&(this.THREE=n);var{android:r,chrome:o}=ue;this.isAndroidChrome=r&&o,this._warningContainer=e("#timeout-warning"),this._header=e("#timeout-warning-header"),this._headerDone=e("#timeout-warning-header-done"),this._preloadInfo=e("#timeout-warning-info"),this._cancelButton=e("#timeout-warning-cancel"),this._confirmButton=e("#timeout-warning-confirm"),this._tooFarContainer=e("#toofar-warning"),this._tooFarPreviewButton=e("#toofar-warning-load-preview-button"),this._tooFarDistanceInfo=e("#toofar-warning-distance"),this._tooFarCancelButton=e("#toofar-warning-cancel-button"),this._tooFarAbortButton=e("#toofar-warning-abort-button"),this._webglDisabledContainer=e("#timeout-warning-webgl-disabled"),this._webglDisabledOkButton=e("#timeout-warning-webgl-disabled-ok-button"),this.confirmButtonClickHandler=this.confirmButtonClickHandler.bind(this),e.on(this._confirmButton,"click",this.confirmButtonClickHandler),this.onTooFarCancelButtonClick=this.onTooFarCancelButtonClick.bind(this),this.onTooFarPreviewButtonClick=this.onTooFarPreviewButtonClick.bind(this),this.onWebglDisabledOkButtonClick=this.onWebglDisabledOkButtonClick.bind(this),this.textureLoader=new te,this.gltfLoader=new ie,this.plyLoader=new ae,this.audioLoader=new ne,this.fontLoader=new re,this.audioElements=[],this.collectPreloadPromises(),this.startEngine=this.startEngine.bind(this),this.onVideoCanPlayThrough=this.onVideoCanPlayThrough.bind(this)}collectPreloadPromises(){var{animateObjects:e,audio:t,audioElements:i,customMaterials:a,customObjects:n,examples:r,fonts:o,glb:s,gui:l,ply:d,textures:c,type:h,video:u}=this.artifact,m={};if(m.skybox=this.loadSkybox(),i&&(m.audioElements=this.loadAudioElements()),t&&(m.audioElement=this.loadAudio()),oe(h,APP_DB.SCENE_TYPES)||(m.scene=this.loadScene()),!1!==s&&(m.gltf=this.loadGltf()),d&&(m.ply=this.loadPly()),c&&(m.textures=this.loadTextures()),u){var{slug:p,video:f}=this.artifact;m.videoElement=this.loadVideo({slug:p,video:f})}o&&(m.fonts=this.loadFonts()),r&&(m.examples=this.loadExamples()),l&&this.loadGui(),a&&(m.customMaterials=this.loadCustomMaterials()),n&&(m.customObjects=this.loadCustomObjects()),e&&(m.animateObjects=this.loadAnimateObjects()),this.XR||(m.Controller=this.loadController()),this.promises=m}init(){var t=arguments,i=this;return n((function*(){var a=t.length>0&&void 0!==t[0]?t[0]:{},{map:n,XR:r}=a;i._isWorking=!0,i._isCancelled=!1,i._session=!1,i.map=n,i.XR=r,e.on(i._cancelButton,"click",(()=>{i._isCancelled=!0,i.finished()})),e.show([i._warningContainer,i._header]),i.timeout=o.setTimeout(i.showTimeoutWarning,se)}))()}loadScene(){var t=this;return n((function*(){var{artifact:i}=t,a=APP_DB.SCENE_TYPES,{type:n=a.Hit}=i,r=Object.entries(a).find((e=>{var[t,i]=e;return i===n})),s="".concat(t.root,"/CustomScene.js");if(T.arr(r)){var l=r[0];s="./scenes/".concat(l,".js")}var{default:c}=yield import(s),h=new c({artifact:i,mergeConfig:d,preload:t,$:e,W:o,is:T});return T.fn(null==h?void 0:h.preload)?yield h.preload({artifact:i,preload:t}):T.fn(null==h?void 0:h.load)&&(yield h.load({artifact:i,preload:t})),h}))()}loadSkybox(){var e=this;return n((function*(){var{city:t,sky:i,slug:a}=e.artifact,n=i||a,r="jpg";o.SUPPORTS.WEBP&&(r="webp");var s=n;return n.startsWith("/")||(s=[o.STATIC_URL,"skybox",t,n].filter((e=>e)).join("/")),s.endsWith(".".concat(r))||(s+=".".concat(r)),yield e.promisifiedLoad({loader:e.textureLoader,file:s})}))()}loadFonts(){var e=this;return n((function*(){var{fonts:t}=e.artifact,i={};return yield Promise.all(t.map(function(){var t=n((function*(t){var a="https://static.artificialmuseum.com/font/json/".concat(t,".typeface.json");i[t]=yield e.promisifiedLoad({loader:e.fontLoader,file:a})}));return function(e){return t.apply(this,arguments)}}())),i}))()}loadAnimateObjects(){var e=this;return n((function*(){var{animateObjects:t,slug:i}=e.artifact,a={},r=e.audioLoader;return yield Promise.all(t.map(function(){var t=n((function*(t){if(t.sound){var{sound:n={}}=t;if(!0===n&&(n={name:i}),n.name||(n.name=i),!a[n.name]){var s=".mp3";o.SUPPORTS.A_MP4?s=".mp4":o.SUPPORTS.A_OGG&&(s=".ogg");var l="https://media.artificialmuseum.com/audio/".concat(n.name).concat(s);a[n.name]=yield e.promisifiedLoad({loader:r,file:l})}}}));return function(e){return t.apply(this,arguments)}}())),a}))()}loadExamples(){var e=this;return n((function*(){var{examples:t}=e.artifact,i=[];(t.TextGeometry||null!=t&&t.includes("TextGeometry"))&&i.push(["TextGeometry",import("./vendor.js").then((function(e){return e.bp}))]),(t.Record3D||null!=t&&t.includes("Record3D"))&&i.push(["Record3D",import("./vendor.js").then((function(e){return e.bq}))]),(t.WS||null!=t&&t.includes("WS"))&&i.push(["WS",import("./WS.js")]);var a=yield Promise.all(i.map(function(){var e=n((function*(e){var[t,i]=e,a=yield i,n=a[t]?a[t]:a.default;return n||console.error("E_MODULE_NOT_FOUND","module ".concat(t," could not be imported from examples, got:"),i),[t,n]}));return function(t){return e.apply(this,arguments)}}()));return Object.fromEntries(a)}))()}loadCustomMaterials(){var e=this;return n((function*(){var{artifact:t}=e,{customMaterials:i}=t;return Promise.all(i.map(function(){var i=n((function*(i){var{default:a}=yield import("./materials/".concat(i.name,".js")),n=new a({artifact:t,config:i,preload:e});return T.fn(n.preload)&&(yield n.preload()),{config:i,material:n}}));return function(e){return i.apply(this,arguments)}}()))}))()}loadCustomObjects(){var e=this;return n((function*(){var{artifact:t}=e,{customObjects:i}=t;return Promise.all(i.map(function(){var i=n((function*(i){var{default:a}=yield import("./objects/".concat(i.name,".js")),n=new a({artifact:t,config:i,preload:e});return T.fn(n.preload)&&(yield n.preload()),n}));return function(e){return i.apply(this,arguments)}}()))}))()}loadVideo(t){var i=this;return n((function*(){var{dir:a,slug:n,video:r,id:s=me}=t,l=!0===r?n:r,d=e.create("video",{id:s,class:Q,loop:!0,playsinline:!0,preload:"auto",crossorigin:"anonymous"});i.videoElement=d;var c=["webm","mp4"],h=T.str(l)?l:n,u=h.endsWith("m3u8")||h.startsWith("blob:")||i.artifact.hlsVideo;if(u){if(""!==d.canPlayType("application/vnd.apple.mpegurl"))return d.src=h,e.append(d),d;var m=e.create("script",{src:"".concat(o.ROOT_URL,"/hls.js"),parent:o.B});return i.hlsScript=m,new Promise((t=>{e.on(m,"load",(()=>{Hls.isSupported()&&(i.hls=new o.Hls,i.hls.loadSource(h),e.append(d),i.hls.attachMedia(d),i.hls.once(Hls.Events.FRAG_LOADED,(()=>{t(d)})))}))}))}if(h.startsWith("/")||h.startsWith("http")||(h.endsWith(".mp4")?(c=["mp4"],h=h.slice(0,-4)):h.endsWith(".webm")?(c=["webm"],h=h.slice(0,-5)):h=a?"/video/".concat(a,"/").concat(h):"/video/".concat(h,"/").concat(h)),h.endsWith(".mp4")?(c=["mp4"],h=h.slice(0,-4)):h.endsWith(".webm")&&(c=["webm"],h=h.slice(0,-5)),h.startsWith("http")||(h="".concat(o.MEDIA_URL).concat(h)),c.forEach((t=>{e.create("source",{src:"".concat(h,".").concat(t,"?v=").concat(le),type:"video/".concat(t),parent:d})})),e.append(d),!u){var{videoWidth:p}=d;if(p>0)return d;var f="canplaythrough";return de&&(f="loadedmetadata"),new Promise((t=>{e.on(d,f,(e=>i.onVideoCanPlayThrough({e:e,resolve:t})))}))}}))()}onVideoCanPlayThrough(e){var{e:t,resolve:i}=e;de?setTimeout((()=>{i(t.target)}),ce):i(t.target)}loadAudio(){var t=this;return n((function*(){var{slug:i,audio:a}=t.artifact;e.remove("#".concat(he));var n=e.create("audio",{class:Q,crossorigin:"anonymous",id:he,loop:!0,preload:"auto"});t.audioElement=n;var r=T.str(a)?a:i;r.startsWith("/")||(r="/audio/".concat(r));var s=["ogg","mp4","mp3"];r.endsWith(".mp3")&&(s=["mp3"],r=r.slice(0,-4));var l="".concat(o.MEDIA_URL).concat(r);s.forEach((t=>{e.create("source",{src:"".concat(l,".").concat(t,"?v=").concat(le),type:"audio/".concat(t),parent:n})})),e.append(n);var{duration:d}=n;if(T.num(d)&&d>0)return n;var c="canplaythrough";return de&&(c="loadedmetadata"),new Promise((t=>{e.on(n,c,(e=>t(e.target)))}))}))()}loadAudioElements(){var t=this;return n((function*(){var{audioElements:i,slug:a}=t.artifact;return yield Promise.all(i.map(function(){var i=n((function*(i,r){var s=i.audio||a,l="".concat(he,"-").concat(r);e.remove("#".concat(l));var d=e.create("audio",{class:Q,crossorigin:"anonymous","data-name":s,preload:"auto",id:l});!1!==i.loop&&(d.loop="true"),t.audioElements.push(d);var c="/audio/".concat(s),h=["mp4","ogg","mp3"];c.endsWith(".mp3")&&(h=["mp3"],c=c.slice(0,-4));var u="".concat(o.MEDIA_URL).concat(c);h.forEach((t=>{e.create("source",{src:"".concat(u,".").concat(t,"?v=").concat(le),type:"audio/".concat(t),parent:d})})),e.append(d);var{duration:m}=d;if(T.num(m)&&m>0)return d;var p="canplaythrough";return de&&(p="loadedmetadata"),new Promise((t=>{e.on(d,p,function(){var e=n((function*(e){de&&(yield new Promise((e=>setTimeout(e,3e3)))),t(e.target)}));return function(t){return e.apply(this,arguments)}}())}))}));return function(e,t){return i.apply(this,arguments)}}()))}))()}loadTextures(){var e=this;return n((function*(){var{textures:t={}}=e.artifact,{dir:i,names:a}=t,n="jpg";o.SUPPORTS.WEBP&&(n="webp"),i&&!i.endsWith("/")&&(i="".concat(i,"/"));var r={};return a.forEach((t=>{var a=t;i.startsWith("/")||(a="https://static.artificialmuseum.com/textures/".concat(i,"/").concat(t)),a.endsWith(".jpg")||(a="".concat(a,".").concat(n));var o=e.promisifiedLoad({loader:e.textureLoader,file:a});r[slugged]=o})),r}))()}loadController(){var e=this;return n((function*(){if(e.artifact.pointerLockControls){var{ArmPointerLockControls:t}=yield import("./controls/ArmPointerLockControls.js");return t}var{ArmOrbitControls:i}=yield import("./controls/ArmOrbitControls.js");return i}))()}loadGltf(){var e=this;return n((function*(){var{artifact:t,XR:i}=e,{file:a,version:n=1}=t,r=i?"&xr=1":"",s=a.startsWith("http")?a:"".concat(o.GLB_URL,"/").concat(a,".glb?v=").concat(n).concat(r);return yield e.promisifiedLoad({loader:e.gltfLoader,file:s})}))()}loadPly(){var e=this;return n((function*(){var t,{artifact:i,XR:a}=e,{file:r,ply:s={},version:l=1}=i,d=a?"&xr=1":"",c=s.files;if(c&&!T.arr(c)&&(c=[c]),null!==(t=c)&&void 0!==t&&t.length)return yield Promise.all(c.map(function(){var t=n((function*(t,i){if(t)return t=t.startsWith("/")?"".concat(t,".ply?v=").concat(l).concat(d):"".concat(o.STATIC_URL,"/ply/").concat(t,".ply?v=").concat(l).concat(d),yield e.promisifiedLoad({loader:e.plyLoader,file:t});console.log("empty file",c,t,i)}));return function(e,i){return t.apply(this,arguments)}}()));var h=r;s.file&&(h=s.file);var u="?v=".concat(l).concat(d),m=h.endsWith(".ply")?h:"".concat(h,".ply");return h.startsWith("/")||(m="".concat(o.STATIC_URL,"/ply/").concat(h,".ply")),m+=u,yield e.promisifiedLoad({loader:e.plyLoader,file:m})}))()}loadGui(){var{title:t,button:i,body:a}=this.artifact.gui.afterSpawnModel,n=[];t&&n.push(e.create("h3",{innerText:t})),a&&n.push(e.create("div",{innerText:a})),n.length&&(i&&n.push(e.create("button",{id:"afterSpawnModelButton",class:"styled margin inverse",innerText:i,on:{click:e=>{var t=e.target.parentNode;t.parentNode.removeChild(t)}}})),this.gui={afterSpawnModel:e.create("div",{class:"w hudgui",children:n,parent:"#hud"})})}promisifiedLoad(e){var{loader:t,file:i}=e;return new Promise(((e,a)=>{t.load(i,(t=>{e(t)}),(e=>{e.lengthComputable&&(Math.ceil(e.loaded/e.total*100),"".concat(e.loaded,"/").concat(e.total))}),(e=>{this.setError(e,"Error loading artifact.",5e3),a(e)}))}))}startEngine(){var t=this;return n((function*(){var{artifact:i,XR:a}=t,r=Object.entries(t.promises).map(function(){var e=n((function*(e){var[t,i]=e;return[t,yield i]}));return function(t){return e.apply(this,arguments)}}()),o=yield Promise.all(r);t.assets=Object.fromEntries(o);var s=new ve({artifact:i,preload:t,XR:a}),l=yield s.init(t.assets.scene);if(!l)throw new Error("Session undefined.");e.hide(t._header),e.hide(t._preloadInfo),e.show(t._headerDone),t._session=l,t._timeoutShown&&t.isAndroidChrome?e.prop(t._confirmButton,{disabled:!1}):t._isCancelled||(yield t.finishLoad())}))()}showTimeoutWarning(){e.show(this._preloadInfo),this.isAndroidChrome&&(e.show(this._confirmButton),this._confirmButton.setAttribute("disabled",!0),this._timeoutShown=!0)}confirmButtonClickHandler(){var t=this;return n((function*(){t._session?(e.off(t._confirmButton,"click",t.confirmButtonClickHandler),yield t.finishLoad(),t.finished()):console.error("confirmButtonClickHandler: session not defined",t)}))()}finishLoad(){var t=this;return n((function*(){if(t._session){var{hud:i,initFallbackSession:a,initScene:n}=t._session;try{yield n(),i.show(),e.show("#".concat(v)),t.finished()}catch(n){"InvalidStateError"===n.name||"NotSupportedError"===n.name?(yield a(),i.show(),e.show("#".concat(v)),t.finished()):"SecurityError"===n.name?(e.show(t._confirmButton),e.prop(t._confirmButton,{disabled:!1})):(console.error("Unexpected Preload.finishLoad error"),console.error(n))}}}))()}setError(e,t){console.warn(e,t),o.clearTimeout(this.timeout),this.finished()}showTooFarNotification(t){var{distance:i,artifact:a,map:n}=t,r="meter",o=i;o>=1e3?(r="kilometer",o>=2e3&&(r+="s"),o=Math.round(o/1e3)):o>=2&&(r+="s"),this.artifact=a,this.map=n,this.XR=!1,this._tooFarDistanceInfo.innerText="This artifact is ".concat(o," ").concat(r," away."),e.show(this._tooFarContainer),e.on(this._tooFarPreviewButton,"click",this.onTooFarPreviewButtonClick),e.on(this._tooFarCancelButton,"click",this.onTooFarCancelButtonClick),e.on(this._tooFarAbortButton,"click",this.onTooFarCancelButtonClick)}onTooFarCancelButtonClick(){e.off(this._tooFarPreviewButton,"click",this.onTooFarPreviewButtonClick),this._isCancelled=!0,e.hide(this._tooFarContainer),this.finished()}onTooFarPreviewButtonClick(){var t=this;return n((function*(){e.off(t._tooFarPreviewButton,"click",t.onTooFarPreviewButtonClick),e.off(t._tooFarCancelButton,"click",t.onTooFarCancelButtonClick),e.off(t._tooFarAbortButton,"click",t.onTooFarCancelButtonClick),e.hide(t._tooFarContainer);var{artifact:i,map:a,XR:n}=t;yield t.init({artifact:i,map:a,XR:n}),yield t.startEngine()}))()}showWebglDisabledNotification(){e.show(this._webglDisabledContainer),e.hide([this._header,this._headerDone,this._preloadInfo,this._cancelButton,this._confirmButton]),e.on(this._webglDisabledOkButton,"click",this.onWebglDisabledOkButtonClick)}onWebglDisabledOkButtonClick(){e.off(this._webglDisabledOkButton,"click",this.onWebglDisabledOkButtonClick),this._isCancelled=!0,e.hide(this._webglDisabledContainer),this.finished()}finished(){this._isWorking=!1,this._timeoutShown=!1,e(".start-experience-button").forEach((e=>{e.removeAttribute("disabled")})),e.hide([this._warningContainer,this._confirmButton,this._preloadInfo,this._headerDone]),e.prop(this._confirmButton,{disabled:!0}),e.show(this._header),o.clearTimeout(this.timeout)}}export{ge as Preload};
