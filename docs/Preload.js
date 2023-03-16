import{$ as e,aA as t,aB as a,aC as i,c as n,aD as r,W as o,aE as s,aF as l,am as d,aG as c,aH as h,aI as u,aJ as m,aK as p,aL as f,aM as v,aN as g,aO as w,aP as b,a7 as y,a as T,v as S,aQ as E,aR as C,x as k,J as x,aS as P,C as j,_ as A,ad as _,D as L,A as O,aT as R,w as B,aU as F,a3 as I,G as W,aV as D,aW as H,ai as U,a5 as N,aX as X,I as z,aY as V,ag as G,af as q,ae as Y,a6 as K,V as Z,aZ as J,a_ as Q,F as $,a$ as ee,b0 as te,Q as ae,b1 as ie,b2 as ne,a4 as re,b3 as oe,b4 as se,b5 as le,b6 as de,b7 as ce,b8 as he,r as ue,b9 as me,ba as pe}from"./vendor.js";class fe{constructor(n){var{scene:r,sceneInstance:o,renderer:s,endSession:l}=n;this.endSession=l,this.engine=n,this.gui=e("#".concat(t)),this.hitSearch=e("#hud-searching-hittest"),this.scene=r,this.renderer=s,this.sceneInstance=o,e.on("#".concat(a),"click",this.onExitButtonClick.bind(this)),i(this),this.animToggler=e("#toggle-animation-button")}setCamera(t){this.cameraAccess=t,t?e.show(this.recordVideoButton):e.hide(this.recordVideoButton)}showAnimToggler(t){this.animToggler&&(this.animToggler.classList.remove("play"),e.show(this.animToggler),this.animTogglerInit||(this.animTogglerInit=!0,this.eventListener=()=>{this.animToggler.classList.toggle("play"),t()},e.on(this.animToggler,"click",this.eventListener)))}hideAnimToggler(){e.hide(this.animToggler)}show(){e.show(this.gui)}hide(){e.hide(this.gui)}onExitButtonClick(){var t=this;return n((function*(){t.engine.endSession(),e.off(t.animToggler,"click",t.eventListener),r()}))()}showHitSearch(){e.show(this.hitSearch)}hideHitSearch(){e.hide(this.hitSearch)}showElement(t){t.shown||(e.show(t),t.shown=!0)}hideElement(t){t.shown&&(e.hide(t),t.shown=!1)}}var ve=o.APP_DB.SCENE_TYPES;class ge{constructor(e){var{artifact:t,preload:a,XR:i}=e;this.XR=i,this.artifact=t,this.preload=a;var{type:n=ve.Hit}=t;this.type=n,this.clock=new s,this.scene=new l,this.customMaterials=[],this.spatialObjects=[],this.lookAtCameraObjects=[],this.animateObjects=[],this.audioAnalysers=[],this.audioAnalyserEmissionConfigs=[],this.circlingLights=[],this.customObjects=[],this.videoTargets=[],this.audioRamps={},this.animationListeners=[],this.materialFadeAnimations=[],this.eventsToRemove=[],this.renderSteps=[],this.unspawnObjects=[],this.onResize=this.onResize.bind(this),this.render=this.render.bind(this),this.initFallbackSession=this.initFallbackSession.bind(this),this.toggleAnimations=this.toggleAnimations.bind(this),this.endSession=this.endSession.bind(this)}init(t){var a=this;return n((function*(){var i,{artifact:r,preload:s,scene:l,type:g,XR:w}=a;t&&(a.sceneInstance=t);var{fov:b,near:y,far:T}=d(r.cam,c),S=o.innerWidth/o.innerHeight;a.camera=new h(b,S,y,T),a.camera.updateProjectionMatrix(),l.add(a.camera);var E=new u({antialias:!0,alpha:!0});a.renderer=E,E.setPixelRatio(o.devicePixelRatio),E.setSize(o.innerWidth,o.innerHeight),E.domElement.id=m,E.useLegacyLights=!1,E.outputEncoding=p,E.toneMappingExposure=.5;var{audio:C,circlingLights:k,clickables:x,customMaterials:P,customObjects:j,fog:A,fogexp2:_,hideLight:L,ocean:O,particles:M,shadow:R,spatialAudio:B,triggerVideo:F,underwater:I,wireframes:W,renderTargets:D,portal:H}=r;!1!==R&&(E.shadowMap.enabled=!0,E.shadowMap.type=f),a.hud=new fe(a);var U=null===(i=a.artifact.animateObjects)||void 0===i?void 0:i.some((e=>e.sound));if((C||B||U)&&a.addAudio(),a.addSkybox(),L||a.addLights(),(A||_)&&a.addFog(),a.videoElement=s.assets.videoElement,null!=t&&t.init&&(console.warn("`CustomScene.init` is deprecated","and will be removed in a future version. use `CustomScene.beforeLoadModel` instead."),yield t.init({engine:a,preload:s})),null!=t&&t.beforeLoadModel&&t.beforeLoadModel({engine:a,preload:s}),yield a.loadModel(),null!=t&&t.afterLoadModel&&t.afterLoadModel({engine:a,preload:s}),H&&a.addPortal(),D&&a.addRenderTargets(),null!=k&&k.length){var{CirclingLights:N}=yield import("./vendor.js").then((function(e){return e.bd})),X=new N(a);a.renderSteps.push(X.render.bind(X))}if(P){var{addCustomMaterials:z,renderCustomMaterials:V}=yield import("./vendor.js").then((function(e){return e.be}));yield z(a),a.renderSteps.push(V)}if(j&&(yield a.addCustomObjects()),W&&W.forEach((e=>{var t=a.model.getObjectByName(e.target);t&&t.material&&(t.material.wireframe=!0,e.transparent&&(t.material.transparent=!0,t.material.opacity=e.opacity))})),F){var{addVideoTrigger:G,renderVideoTrigger:q}=yield import("./vendor.js").then((function(e){return e.bf}));G(a),a.renderSteps.push(q)}if(I&&(yield a.underwaterPlane()),O){var{OceanPlane:Y}=yield import("./vendor.js").then((function(e){return e.bg})),K=new Y(a);yield K.init(a),a.renderSteps.push(K.render)}if(M){var{Particles:Z}=yield import("./vendor.js").then((function(e){return e.bh}));a.particles=new Z(a),yield a.particles.init()}if(E.setSize(o.innerWidth,o.innerHeight),e.append(E.domElement,"#".concat(v)),w)try{var J=E.xr.getController(0);a.controller=J;var{clickable:Q,shadow:$,shadowPlane:ee}=r;if(!1!==$&&!1!==ee&&a.addShadowPlane(),!a.isHittestScene())throw new Error("Unknown scene type ".concat(g));g!==ve.Float&&a.spawnReticle(),e.on(J,"select",(()=>{if(!a.justUnspawned){a.spawnModel(!1),Q?a.hud.showAnimToggler(a.toggleAnimations):a.hud.hideAnimToggler()}})),Q||a.hud.hideAnimToggler(),l.add(J),a.initScene=n((function*(){e.hide("#Locator");var t=yield o.NAV.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test","dom-overlay"],domOverlay:{root:e("#hud")}});return e.on(t,"end",(()=>{a.endSession()})),a.refSpace=yield t.requestReferenceSpace("viewer"),a.renderer.xr.enabled=!0,a.renderer.xr.setReferenceSpaceType("local"),yield a.renderer.xr.setSession(t),t.initFallbackSession=a.initFallbackSession.bind(a),a.session=t,t}))}catch(e){a.initScene=a.initFallbackSession}else a.initScene=a.initFallbackSession;return null!=x&&x.length&&(yield a.addClickables()),e.on(o,"resize",a.onResize),a.onResize(),E.setAnimationLoop(a.render),a}))()}onResize(){var{innerWidth:e,innerHeight:t}=o;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}addRenderTargets(){var{renderTargets:e}=this.artifact;this.renderTargets=[],e.forEach((e=>{var t=d(e,{height:512,width:512,options:{depthBuffer:!1,stencilBuffer:!1},off:[]}),a=[];t.off.length&&t.off.forEach((e=>{var t=this.model.getObjectByName(e);t&&a.push(t)})),this.renderTargets.push({height:t.height,width:t.width,off:a,object:new g(t.width,t.height,t.options)})}))}addLights(){var{directionalLightPosition:e=b.directionalPosition}=this.artifact,t=new w(b.directionalColor,b.directionalIntensity);t.position.set(...e),t.castShadow=!0,!1!==this.artifact.shadow&&(t.shadow.bias=-1e-4,t.shadow.mapSize.width=512,t.shadow.mapSize.height=512,t.shadow.camera.near=.1,t.shadow.camera.far=300),this.directionalLight=t,this.scene.add(t),this.ambientLight=new y(b.ambientColor,b.ambientIntensity),this.scene.add(this.ambientLight)}addCustomObjects(){var{artifact:e}=this,{customObjects:t}=e;t.forEach((e=>{var{config:t,object:a}=e,i=this.model.getObjectByName(t.target);i&&(a.child?i.add(a.child):a.model&&(i.parent.add(a.model),i.parent.remove(i)),this.customObjects.push({config:t,object:a}),T.fn(a.init)&&a.init({engine:this}))}))}addShadowPlane(){var e=new S(150,150,64,64),t=new E;t.opacity=C;var a=new k(e,t);a.receiveShadow=!0,a.lookAt(0,100,0),a.position.set(0,.01,0),this.shadowPlane=a}addPortal(){var{preload:e}=this,{scene:t,Portal:a}=e.assets.portal;this.model||(this.model=new x),this.model.add(t);var i=new a({engine:this,mergeConfig:d});this.renderSteps.push(i.render)}spawnReticle(){var e=new P(.15,.2,32).rotateX(-M.PI/2),t=new j;this.reticle=new k(e,t),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,this.scene.add(this.reticle)}onAnimationLoop(e,t){var a=e.action._clip.name;t.forEach((e=>{if(!this.materialFadeAnimations.includes((e=>e.action._clip.name===a))){var t=this.findEventTargets(e);this.materialFadeAnimations.push(A(A({},e),{},{targets:t}))}}))}onAnimationFinished(e,t){var a=e.action._clip.name;t.forEach((e=>{if(!this.materialFadeAnimations.includes((e=>e.action._clip.name===a))){var t=this.findEventTargets(e);this.materialFadeAnimations.push(A(A({},e),{},{targets:t}))}}))}glow(){var{glow:e}=this.artifact;this.model.traverse((t=>{if(_(t.name,"glow")){var a=T.bool(e)?238:e,i=new j({color:a,side:L,blending:O,transparent:!0});t.material=i}}))}addClickables(){var t=this;return n((function*(){var{artifact:a,controller:i,model:n,preload:r,renderer:o,XR:s}=t,{clickables:l=[]}=a,d=[];if(!0===l?d.push(n):l.length&&n.traverse((e=>{l.forEach((t=>{if(T.str(t)&&(t={target:t}),R({node:e,search:t.target})){var a;t.node=e,t.hide&&(e.material.transparent=!0,e.material.opacity=0);var i=!0===t.audio?e.name:t.audio;null!==(a=r.assets.audioElements)&&void 0!==a&&a.length&&(t.player=r.assets.audioElements.find((e=>e.dataset.name===i))),d.includes(t)||d.push(t)}}))})),d.length){var{Controls:c}=yield import("./Controls.js");t.controls=new c({clickables:d,engine:t}),s?e.on(i,"select",t.controls.select,!1):e.on(o.domElement,"mousedown",t.controls.click,!1)}}))()}onTouch(t){var a=this;return n((function*(){var i;null!==(i=a.sceneInstance)&&void 0!==i&&i.onTouch&&(yield a.sceneInstance.onTouch(t)),t.forEach(((t,i)=>{if(!(i+1>a.artifact.maxTouches)){var{emission:n,emissionIntensity:r=.2,link:o,player:s}=t;if(o&&(B?window.location.href=o:window.open(o,"_hacked")),s&&(s.loop?s.paused?s.play():(s.currentTime=0,s.pause()):(s.currentTime=0,s.play())),n){var l=t.node.name.split("_")[0],d=a.model.getObjectByName(l);if(!d)return void console.warn("node not found",l);("Group"===d.type?d.children:[d]).forEach((a=>{if(a){if(a.userData.origEmissive||(a.userData.origEmissive=a.material.emissive),a.userData.origEmissiveIntensity||(a.userData.origEmissiveIntensity=a.material.emissiveIntensity),s||console.warn("player not found",t.node.name),s)if(F.same(a.material.emissive,a.userData.origEmissive)){var i=new I(1,1,1);T.bool(n)?a.material.color&&(i=a.material.color):T.arr(n)&&(i=new I(...n)),a.material.emissive=i,a.material.emissiveIntensity=r,s.loop||e.on(s,"ended",(()=>{a.material.emissive=a.userData.origEmissive,a.material.emissiveIntensity=a.userData.origEmissiveIntensity}))}else s.loop&&(a.material.emissive=a.userData.origEmissive,a.material.emissiveIntensity=a.userData.origEmissiveIntensity)}else console.warn("node not found",l)}))}}}))}))()}nosort(){this.renderer.sortObjects=!1}clip(){var{artifact:e,model:t}=this,{clipSide:a,clipInFallback:i}=e;t.traverse((e=>{if(_(e.name,"clip"))if(this.XR||!1!==i){var t=L;"back"===a?t=H:"front"===a&&(t=$),e.material=new j({color:"green",colorWrite:!1,side:t}),e.castShadow=!1,e.receiveShadow=!1,e.renderOrder=1}else e.visible=!1;else e.renderOrder=2}))}underwaterPlane(){var e=this;return n((function*(){var{UnderwaterPlane:t}=yield import("./vendor.js").then((function(e){return e.bi}));e.cameraPlane=new t,yield e.cameraPlane.preload(e)}))()}addSkybox(){var e=this;return n((function*(){var{artifact:t,preload:a,renderer:i,scene:n,XR:r}=e,o=ee,s=null==t?void 0:t.skySphere;T.arr(s)&&s.length&&(o=s);var l=new W(...o),d=a.assets.skybox,c=new D(i);c.compileEquirectangularShader();var h=c.fromEquirectangular(d).texture;c.dispose();var u=new j({map:d,side:H}),m=new k(l,u);m.rotation.y=U.degToRad(180),m.visible=!r,n.add(m),!1===t.light||t.hideEnvironment||(n.environment=h),e.skybox=m}))()}addAudio(){this.listener=new N,this.camera.add(this.listener)}addFog(){var{artifact:e,scene:t}=this,{fog:a,fogexp2:i}=e;if(a){var{color:n,near:r,far:o}=a;t.fog=new X(n,r,o)}if(i){var{color:s,density:l}=i;t.fog=new z(s,l)}}startMedia(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this.isMediaPlaying){var{actions:t=[],artifact:a,preload:i}=this,{audioElement:n,videoElement:r,audioElements:o=[]}=i.assets;a.triggerAudio||(n&&(e&&(n.currentTime=0),n.play()),null!=o&&o.length&&o.forEach((t=>{t.autoplay&&(e&&(t.currentTime=0),t.play())}))),r&&!a.triggerVideo&&(e&&(r.currentTime=0),r.play()),t.forEach((e=>e.play())),this.isMediaPlaying=!0}}stopMedia(){var{audioElement:e,preload:t,videoElement:a,actions:i=[],audioElements:n=[]}=this;e&&e.pause(),a&&a.pause(),t.hls&&t.hls.destroy(),i&&i.length&&i.forEach((e=>e.stop())),n.forEach((e=>e.pause())),this.isMediaPlaying=!1}toggleAnimations(){this.actions.forEach((e=>e.paused=!e.paused))}initFallbackSession(){var e=this;return n((function*(){var t;e.XR=!1,o.B.classList.add(V);var{camera:a,artifact:i,model:n,renderer:r}=e,{clickable:s}=i,{Controller:l}=e.preload.assets;e.controller=new l(a,r.domElement,i),e.controller.unspawn&&e.unspawnObjects.push(e.controller),e.skybox.visible=!0,s?e.hud.showAnimToggler(e.toggleAnimations):e.hud.hideAnimToggler();var{cam:d={}}=i,c=te,{x:h=c.x,y:u=c.y,z:m=c.z}=d;if(a.position.set(h,u,m),n){var{x:p,y:f,z:v}=n.scale,{scale:g}=i;g&&n.scale.set(p*g,f*g,v*g)}null===(t=e.controller)||void 0===t||t.update();e.spawnModel(!0),r.domElement.focus()}))()}loadModel(){var t=this;return n((function*(){var a,i,n,r,{artifact:o,preload:s,sceneInstance:l={}}=t,{spatialObjects:d=[],audioElements:c=[]}=o;if(t.spatials=[...d,...c],null!=l&&l.model&&(r=r||new x).add(l.model),null!==(a=s.assets.gltf)&&void 0!==a&&a.scene&&(r=r||new x).add(s.assets.gltf.scene),t.model?t.model.add(r):r&&(t.model=r),o.ply&&s.assets.addPly(t),t.animations=t.animations||[],null!=l&&l.animations?t.animations=[...t.animations,...l.animations]:null!==(i=s.assets.gltf)&&void 0!==i&&i.animations&&(t.animations=[...t.animations,...s.assets.gltf.animations]),t.actions=[],null!==(n=t.animations)&&void 0!==n&&n.length){var h;t.mixer=new G(t.model);var{animations:u={}}=o,{loop:m,startOnTouch:f,clampWhenFinished:v=!0,autoplay:g=!0,noLoopAnimations:w=[],pausedAnimations:b=[]}=u;if(t.animations.forEach((e=>{var a=t.mixer.clipAction(e),i=b.includes(e.name),n=f||!g||i;(!1===m||w.includes(e.name))&&(a.clampWhenFinished=v,a.loop=q),n&&(a.paused=!0),t.actions.push(a)})),null!==(h=t.artifact.events)&&void 0!==h&&h.animation){var{events:y}=t.artifact,{times:T=[],loop:S=[],finished:E=[]}=null==y?void 0:y.animation;if(S.length){var C=[t.mixer,"loop",e=>t.onAnimationLoop(e,S)];e.on(...C),C.targets=t.findEventTargets(S),t.eventsToRemove.push(C)}if(E.length){var k=[t.mixer,"finished",e=>t.onAnimationFinished(e,E)];e.on(...k),k.targets=t.findEventTargets(E),t.eventsToRemove.push(k)}if(T.length){var{times:P}=t.artifact.events.animation;P.length&&P.forEach((e=>{var{action:a,once:i=!1,targets:n}=e,r=Y.findByName(t.animations,a),o=t.findEventTargets(e);t.animationListeners.push(A(A({},e),{},{once:i,action:r,targets:o}))}))}}}if(t.model){var j,L,O={};if(t.model.traverse((e=>{if(l.parentName&&l.child&&_(e.name,l.parentName)&&(L=e),t.customObjects.forEach((t=>{var{object:a}=t;a.parentName&&a.child&&_(e.name,a.parentName)&&(O[a.name]=e)})),e.isMesh){var{frustumCulled:a,transparent:i,castShadow:n,receiveShadow:r,noShadowObjects:s=[],noShadowCastObjects:d=[],noShadowReceiveObjects:c=[]}=o;!1===a&&(e.frustumCulled=!1),!1===i&&(e.material.transparent=!1),_(e.name,"noshadow")||s.includes(e.name)||(_(e.name,"noshadowcast")||d.includes(e.name)||(e.castShadow=!1!==n),_(e.name,"noshadowreceive")||c.includes(e.name)||(e.receiveShadow=!1!==r)),_(e.name,"videotarget")&&t.videoTargets.push(e),e.material.map&&(e.material.map.anisotropy=16,e.material.map.encoding=p),e.material.emissiveMap&&(e.material.emissiveMap.encoding=p),(e.material.map||e.material.emissiveMap)&&(e.material.needsUpdate=!0)}var h=[];o.animateObjects&&o.animateObjects.forEach((a=>{if(_(e.name,a.name)){var i=Y.findByName(t.animations,e.name);if(a.sound){!0===a.sound&&(a.sound={name:t.artifact.slug}),a.sound.name||(a.sound.name=t.artifact.slug);var n=t.preload.assets.animateObjects[a.sound.name];if(n){var r=new K(t.listener);r.setBuffer(n);var{loopSound:o=!0}=a;if(r.setLoop(o),a.audio=r,a.sound.distance){var s=!1!==a.sound.yDistanceTest;h.push({buffer:r,distance:a.sound.distance,distanceTarget:e.name,target:e.name,yDistanceTest:s})}}else console.error("animateObjects: Sound not found in preload.assets",a)}t.animateObjects.push(A(A({},a),{},{action:i,node:e}))}})),t.spatials=[...t.spatials,...h]})),t.spatials.length){var{SpatialObjects:M}=yield import("./vendor.js").then((function(e){return e.bj})),R=new M(t);t.renderSteps.push(R.render.bind(R))}if(null!==(j=o.lookAtCameraObjects)&&void 0!==j&&j.length){var B=new s.assets.LookAtCamera(t);t.renderSteps.push(B.render.bind(B))}if(L&&L.add(l.child),t.customObjects.forEach((e=>{var{object:a}=e;a.child?O[a.name].add(a.child):a.model&&t.model.add(a.model)})),t.videoElement&&t.videoTargets.length){var{flipVideo:F,chromaKey:I}=o,W=new Z(t.videoElement);!1!==F&&(W.flipY=!1);var D=I?yield import("./materials/ChromaKeyMaterial.js"):void 0;t.videoTargets.forEach((e=>{I?e.material=new D(I,W):e.material.map=W}))}}var{clip:H,glow:U,mirrors:N,nosort:X,clones:z}=t.artifact;if(U&&t.glow(),t.model&&H&&t.clip(),X&&t.nosort(),null!=N&&N.length){var{mirror:V}=yield import("./vendor.js").then((function(e){return e.bk}));V(t)}if(t.artifact.analyseAudio){var{AnalyseAudio:J}=yield import("./vendor.js").then((function(e){return e.bl})),Q=new J(t);t.renderSteps.push(Q.render)}if(t.model)if(z){var{Clones:$}=yield import("./vendor.js").then((function(e){return e.bm}));t.clones=new $(t),t.renderSteps.push(t.clones.render.bind(t.clones))}else t.model.position.set(5e3,5e3,5e3),t.scene.add(t.model)}))()}findEventTargets(e){var t=[];return this.model.traverse((a=>{R({node:a,search:e.targets})&&(a.material&&(t.includes(a.material)||t.push(a.material)))})),t}spawnModel(e){var t,{artifact:a,camera:i,controller:n,model:r,reticle:o,scene:s,sceneInstance:l={},shadowPlane:d,type:c,XR:h}=this,{showSkybox:u,floatSpawnAtZeroY:m=!1}=a;if(!h||e)r&&(this.clones||r.position.set(0,0,0)),this.modelSpawned=!0;else if(this.isHittestScene()){if(!this.modelSpawned&&this.lastHit){o.updateMatrixWorld(),r.position.setFromMatrixPosition(o.matrixWorld),r.updateMatrixWorld();var p=i.position,f=r.position,v=p.x-f.x,g=p.z-f.z,w=Math.atan2(v,g);r.rotation.y=w,d&&(d.position.setFromMatrixPosition(o.matrixWorld),s.add(d)),this.clones||(r.visible=!0),o.visible=!1,this.modelSpawned=!0}}else if(c===ve.Float){var b=r.clone();b.position.set(0,0,-1).applyMatrix4(n.matrixWorld),m&&(b.position.y=0),s.add(b)}if(this.applyPositionAndRotation(),null!=l&&l.spawnModel&&(console.warn("W_DEPRECATED: sceneInstance.spawnModel is deprecated. Please use sceneInstance.afterSpawnModel instead."),l.spawnModel({engine:this})),null!=l&&l.afterSpawnModel&&l.afterSpawnModel({engine:this}),this.startMedia(),u&&(this.skybox.visible=!0),null!==(t=this.preload.gui)&&void 0!==t&&t.afterSpawnModel){var{afterSpawnModel:y}=this.preload.gui;y.style.visibility="visible",y.style.opacity=1,setTimeout((()=>{var e;T.fn(null===(e=y.parentNode)||void 0===e?void 0:e.removeChild)&&y.parentNode.removeChild(y)}),8e3)}}unspawnModel(){var t;this.modelSpawned&&(this.scene.remove(this.model),this.modelSpawned=!1,this.isAnimationRunning=!1,this.stopMedia(),this.exitSceneInstance(),this.justUnspawned=!0,null!==(t=this.eventsToRemove)&&void 0!==t&&t.length&&this.eventsToRemove.forEach((t=>{e.off(...t)})),this.unspawnObjects.forEach((e=>{null==e||e.unspawn(this)})),setTimeout((()=>{this.justUnspawned=!1}),200))}exitSceneInstance(){var e;this.customObjects.forEach((e=>{var{object:t}=e;T.fn(t.exit)&&t.exit({engine:this})})),this.customMaterials.forEach((e=>{var{material:t}=e;T.fn(t.exit)&&t.exit({engine:this})})),this.animateObjects.forEach((e=>{var t;null===(t=e.audio)||void 0===t||t.stop()})),null!==(e=this.sceneInstance)&&void 0!==e&&e.exit&&this.sceneInstance.exit({engine:this})}applyPositionAndRotation(){var{artifact:e,model:t}=this;if(t){var{pos:a={},rot:i={}}=e;a.x&&(t.position.x+=a.x),a.y&&(t.position.y+=a.y),a.z&&(t.position.z+=a.z);var n=U.degToRad;i.x&&t.rotateX(n(i.x)),i.y&&t.rotateY(n(i.y)),i.z&&t.rotateZ(n(i.z))}}endSession(){var t,a;null===(t=this.session)||void 0===t||t.end(),this.hud.hide(),this.renderer.setAnimationLoop(null),e("#".concat(v)).classList.remove("visible"),this.exitSceneInstance(),this.scene&&J(this.scene),e.remove(".".concat(Q)),null!==(a=this.preload)&&void 0!==a&&a.hls&&(this.preload.hls.destroy(),e.remove(this.preload.hlsScript));var i=e("#".concat(m));if(i){var n=i.parentNode;n.id===v?e.remove(i):e.remove(n)}o.B.classList.remove(V),e(".start-experience-button").forEach((e=>{e.removeAttribute("disabled")})),B&&o.location.reload()}isHittestScene(){return![ve.Float].includes(this.type)}render(e,t){var a=this;return n((function*(){var i,n,r,o,s,l=a.clock.getDelta();a.renderHittest(t),a.mixer&&a.mixer.update(l);var d={delta:l,timestamp:e,engine:a,frame:t};a.modelSpawned&&a.renderSteps.forEach((e=>{e(d)})),null!==(i=a.sceneInstance)&&void 0!==i&&i.tick&&a.sceneInstance.tick(d),null!==(n=a.artifact.ply)&&void 0!==n&&n.animated&&a.renderPlyMorphTargetInfluences(d),null!==(r=a.animateObjects)&&void 0!==r&&r.length&&a.renderAnimateObjects(d),a.cameraPlane&&a.renderUnderwater(d),null!==(o=a.animationListeners)&&void 0!==o&&o.length&&a.renderAnimationTimeEvent(d),a.materialFadeAnimations.length&&a.renderMaterialAnimTick(d),a.particles&&a.particles.update(d),a.customObjects.length&&a.renderCustomObjects(d),null!==(s=a.sceneInstance)&&void 0!==s&&s.render?a.sceneInstance.render(d):a.renderer.render(a.scene,a.camera),a.controller&&(a.controller.update&&a.controller.update(l),a.controller.render&&a.controller.render(l))}))()}renderRenderTargets(e){var{renderTargets:t}=this;t.forEach((e=>{console.log({renderTarget:e}),e.off.length&&e.off.forEach((e=>{e.visible=!1})),this.renderer.setRenderTarget(e.object),this.renderer.render(scene,camera),this.renderer.setRenderTarget(null),e.off.length&&e.off.forEach((e=>{e.visible=!0}))}))}renderPlyMorphTargetInfluences(e){var{delta:t,timestamp:a}=e;this.nextMorphTargetStep||(this.nextMorphTargetStep=a+this.morphTargetInfluenceConfig.delay);var i=this.animatedPoints,n=i.morphTargetInfluences.length-1,r=t*this.morphTargetInfluenceConfig.speed;i.morphTargetInfluences=i.morphTargetInfluences.map(((e,t)=>{if(t===this.morphTargetTargetIndex){var i=Math.min(e+r,1);return i>=1&&a>this.nextMorphTargetStep&&(this.nextMorphTargetStep=a+this.morphTargetInfluenceConfig.delay,this.hasRun=!this.hasRun,this.hasRun||(this.morphTargetTargetIndex+=1,this.morphTargetTargetIndex>n&&(this.morphTargetTargetIndex=0))),i}return Math.max(e-r,0)}))}renderCustomObjects(e){this.customObjects.forEach((t=>{var{object:a}=t;T.fn(a.tick)&&a.tick(e)}))}renderAnimateObjects(e){var{timestamp:t}=e;this.animateObjects.forEach((e=>{var{action:a,audio:i,speed:n,minSpeed:r=0,maxDelay:o=2,minDelay:s=1}=e;if(a&&a.paused&&(e.nextAnimation||(e.nextAnimation=t+Math.random()*(1e3*o)+1e3*s),i.isPlaying&&i.stop(),e.nextAnimation<=t)){e.nextAnimation=!1;var l=Math.random()>.5?1:-1,d=Math.max(r,Math.random()*n)*l;a.timeScale=d,a.paused=!1,a.play(),i&&!i.isPlaying&&i.play()}}))}renderHittest(t){var a=this;return n((function*(){if(t&&a.XR){var i=a.renderer.xr.getSession();a.hitTestSourceRequested||(a.hitTestSource=yield i.requestHitTestSource({space:a.refSpace}),e.on(i,"end",(()=>{a.hitTestSourceRequested=!1,a.hitTestSource=null})),a.hitTestSourceRequested=!0);var n=t.getHitTestResults(a.hitTestSource);if(n.length){if(a.lastHit=n[0],!a.modelSpawned){a.reticle.visible=!0;var r=a.renderer.xr.getReferenceSpace();a.reticle.matrix.fromArray(a.lastHit.getPose(r).transform.matrix)}a.hud.hideHitSearch()}else a.reticle.visible=!1,a.modelSpawned||a.hud.showHitSearch(),a.lastHit=void 0}}))()}renderAnimationTimeEvent(){this.animationListeners.forEach((e=>{var{time:t,action:a,once:i}=e,{time:n}=a;!e.hasTriggered&&n>=t?(e.hasTriggered=!0,this.materialFadeAnimations.push(e)):n<=t&&(i||(e.hasTriggered=!1))}))}renderMaterialAnimTick(e){var{delta:t}=e;this.materialFadeAnimations.forEach(((e,a)=>{if(e){var{targets:i=[],speed:n=1,to:r=0,props:o}=e;i.forEach((e=>{var i=T.arr(o)?o:[o],s=!0;i.map((a=>{var i=e[a]+n*t;n<0?i<=r?i=r:s=!1:n>0&&(i>=r?i=r:s=!1),e[a]=i})),s&&this.materialFadeAnimations.splice(a,1)}))}}))}renderUnderwater(e){var{delta:t}=e;this.cameraPlane.tick(t)}}class we{constructor(t){var{artifact:a,root:i,THREE:n}=t;this.artifact=a,this.root=i,n&&(this.THREE=n);var{android:r,chrome:o}=ue;this.isAndroidChrome=r&&o,this._warningContainer=e("#timeout-warning"),this._header=e("#timeout-warning-header"),this._headerDone=e("#timeout-warning-header-done"),this._preloadInfo=e("#timeout-warning-info"),this._cancelButton=e("#timeout-warning-cancel"),this._confirmButton=e("#timeout-warning-confirm"),this._tooFarContainer=e("#toofar-warning"),this._tooFarPreviewButton=e("#toofar-warning-load-preview-button"),this._tooFarDistanceInfo=e("#toofar-warning-distance"),this._tooFarCancelButton=e("#toofar-warning-cancel-button"),this._tooFarAbortButton=e("#toofar-warning-abort-button"),this._webglDisabledContainer=e("#timeout-warning-webgl-disabled"),this._webglDisabledOkButton=e("#timeout-warning-webgl-disabled-ok-button"),this.confirmButtonClickHandler=this.confirmButtonClickHandler.bind(this),e.on(this._confirmButton,"click",this.confirmButtonClickHandler),this.onTooFarCancelButtonClick=this.onTooFarCancelButtonClick.bind(this),this.onTooFarPreviewButtonClick=this.onTooFarPreviewButtonClick.bind(this),this.onWebglDisabledOkButtonClick=this.onWebglDisabledOkButtonClick.bind(this),this.textureLoader=new ae,this.gltfLoader=new ie,this.plyLoader=new ne,this.audioLoader=new re,this.fontLoader=new oe,this.audioElements=[],this.collectPreloadPromises(),this.startEngine=this.startEngine.bind(this),this.onVideoCanPlayThrough=this.onVideoCanPlayThrough.bind(this)}collectPreloadPromises(){var{animateObjects:e,audio:t,audioElements:a,customMaterials:i,customObjects:n,examples:r,fonts:o,glb:s,gui:l,ply:d,textures:c,type:h,video:u,lookAtCameraObjects:m,portal:p}=this.artifact,f={};if(f.skybox=this.loadSkybox(),a&&(f.audioElements=this.loadAudioElements()),t&&(f.audioElement=this.loadAudio()),se(h,APP_DB.SCENE_TYPES)||(f.scene=this.loadScene()),!1!==s&&(f.gltf=this.loadGltf()),d&&(f.ply=this.loadPly(),f.addPly=this.loadAddPly()),c&&(f.textures=this.loadTextures()),p&&(f.portal=this.loadPortal()),u){var{slug:v,video:g}=this.artifact;f.videoElement=this.loadVideo({slug:v,video:g})}null!=m&&m.length&&(f.LookAtCamera=this.loadLookAtCamera()),o&&(f.fonts=this.loadFonts()),r&&(f.examples=this.loadExamples()),l&&this.loadGui(),i&&(f.customMaterials=this.loadCustomMaterials()),n&&(f.customObjects=this.loadCustomObjects()),e&&(f.animateObjects=this.loadAnimateObjects()),this.XR||(f.Controller=this.loadController()),this.promises=f}init(){var t=arguments,a=this;return n((function*(){var i=t.length>0&&void 0!==t[0]?t[0]:{},{map:n,XR:r}=i;a._isWorking=!0,a._isCancelled=!1,a._session=!1,a.map=n,a.XR=r,e.on(a._cancelButton,"click",(()=>{a._isCancelled=!0,a.finished()})),e.show([a._warningContainer,a._header]),a.timeout=o.setTimeout(a.showTimeoutWarning,le)}))()}loadScene(){var t=this;return n((function*(){var{artifact:a}=t,i=APP_DB.SCENE_TYPES,{type:n=i.Hit}=a,r=Object.entries(i).find((e=>{var[t,a]=e;return a===n})),s="".concat(t.root,"/CustomScene.js");if(T.arr(r)){var l=r[0];s="./scenes/".concat(l,".js")}var{default:c}=yield import(s),h=new c({artifact:a,mergeConfig:d,preload:t,$:e,W:o,is:T});return T.fn(null==h?void 0:h.preload)?yield h.preload({artifact:a,preload:t}):T.fn(null==h?void 0:h.load)&&(yield h.load({artifact:a,preload:t})),h}))()}loadAddPly(){return n((function*(){var{addPly:e}=yield import("./vendor.js").then((function(e){return e.bn}));return e}))()}loadLookAtCamera(){return n((function*(){var{LookAtCamera:e}=yield import("./vendor.js").then((function(e){return e.bo}));return e}))()}loadSkybox(){var e=this;return n((function*(){var{city:t,sky:a,slug:i}=e.artifact,n=a||i,r=n;if(!r.startsWith("http")){var s="jpg";o.SUPPORTS.WEBP&&(s="webp"),n.startsWith("/")||n.startsWith("http")||(r=[o.STATIC_URL,"skybox",t,n].filter((e=>e)).join("/")),r.endsWith(".".concat(s))||(r+=".".concat(s))}return yield e.promisifiedLoad({loader:e.textureLoader,file:r})}))()}loadFonts(){var e=this;return n((function*(){var{fonts:t}=e.artifact,a={};return yield Promise.all(t.map(function(){var t=n((function*(t){var i="https://static.artificialmuseum.com/font/json/".concat(t,".typeface.json");a[t]=yield e.promisifiedLoad({loader:e.fontLoader,file:i})}));return function(e){return t.apply(this,arguments)}}())),a}))()}loadAnimateObjects(){var e=this;return n((function*(){var{animateObjects:t,slug:a}=e.artifact,i={},r=e.audioLoader;return yield Promise.all(t.map(function(){var t=n((function*(t){if(t.sound){var{sound:n={}}=t;if(!0===n&&(n={name:a}),n.name||(n.name=a),!i[n.name]){var s=".mp3";o.SUPPORTS.A_MP4?s=".mp4":o.SUPPORTS.A_OGG&&(s=".ogg");var l="https://media.artificialmuseum.com/audio/".concat(n.name).concat(s);i[n.name]=yield e.promisifiedLoad({loader:r,file:l})}}}));return function(e){return t.apply(this,arguments)}}())),i}))()}loadExamples(){var e=this;return n((function*(){var{examples:t}=e.artifact,a=[];(t.TextGeometry||null!=t&&t.includes("TextGeometry"))&&a.push(["TextGeometry",import("./vendor.js").then((function(e){return e.bp}))]),(t.Record3D||null!=t&&t.includes("Record3D"))&&a.push(["Record3D",import("./vendor.js").then((function(e){return e.bq}))]),(t.WS||null!=t&&t.includes("WS"))&&a.push(["WS",import("./WS.js")]);var i=yield Promise.all(a.map(function(){var e=n((function*(e){var[t,a]=e,i=yield a,n=i[t]?i[t]:i.default;return n||console.error("E_MODULE_NOT_FOUND","module ".concat(t," could not be imported from examples, got:"),a),[t,n]}));return function(t){return e.apply(this,arguments)}}()));return Object.fromEntries(i)}))()}loadCustomMaterials(){var e=this;return n((function*(){var{artifact:t}=e,{customMaterials:a}=t;return Promise.all(a.map(function(){var a=n((function*(a){var{default:i}=yield import("./materials/".concat(a.name,".js")),n=new i({artifact:t,config:a,preload:e});return T.fn(n.preload)&&(yield n.preload()),{config:a,material:n}}));return function(e){return a.apply(this,arguments)}}()))}))()}loadCustomObjects(){var e=this;return n((function*(){var{artifact:t}=e,{customObjects:a}=t;return Promise.all(a.map(function(){var a=n((function*(a){var{default:i}=yield import("./objects/".concat(a.name,".js")),n=new i({artifact:t,config:a,preload:e});return T.fn(n.preload)&&(yield n.preload()),n}));return function(e){return a.apply(this,arguments)}}()))}))()}loadPortal(){var e=this;return n((function*(){var{file:t=1}=e.artifact.portal;!T.int(t)&&t.startsWith("http")||(t="".concat(o.GLB_URL,"/portals/portal").concat(T.int(t)?"-".concat(t):"",".glb"));var[a,{Portal:i}]=yield Promise.all([e.promisifiedLoad({loader:e.gltfLoader,file:t}),yield import("./vendor.js").then((function(e){return e.br}))]);return A(A({},a),{},{Portal:i})}))()}loadVideo(t){var a=this;return n((function*(){var{dir:i,slug:n,video:r,id:s=me}=t,l=!0===r?n:r,d=e.create("video",{id:s,class:Q,loop:!0,playsinline:!0,preload:"auto",crossorigin:"anonymous"});a.videoElement=d;var c=["webm","mp4"],h=T.str(l)?l:n,[u,m=""]=h.split("?"),p=u.endsWith("m3u8")||u.startsWith("blob:")||a.artifact.hlsVideo;if(p){if(""!==d.canPlayType("application/vnd.apple.mpegurl"))return d.src=u,e.append(d),d;var f=e.create("script",{src:"".concat(o.ROOT_URL,"/hls.js"),parent:o.B});return a.hlsScript=f,new Promise((t=>{e.on(f,"load",(()=>{Hls.isSupported()&&(a.hls=new o.Hls,a.hls.loadSource(u),e.append(d),a.hls.attachMedia(d),a.hls.once(Hls.Events.FRAG_LOADED,(()=>{t(d)})))}))}))}if(u.startsWith("/")||u.startsWith("http")||(u.endsWith(".mp4")?(c=["mp4"],u=u.slice(0,-4)):u.endsWith(".webm")?(c=["webm"],u=u.slice(0,-5)):u=i?"/video/".concat(i,"/").concat(u):"/video/".concat(u,"/").concat(u)),u.endsWith(".mp4")?(c=["mp4"],u=u.slice(0,-4)):u.endsWith(".webm")&&(c=["webm"],u=u.slice(0,-5)),u.startsWith("http")||(u="".concat(o.MEDIA_URL).concat(u)),m||(m="v=".concat(pe)),c.forEach((t=>{e.create("source",{src:"".concat(u,".").concat(t,"?").concat(m),type:"video/".concat(t),parent:d})})),e.append(d),!p){var{videoWidth:v}=d;if(v>0)return d;var g="canplaythrough";return de&&(g="loadedmetadata"),new Promise((t=>{e.on(d,g,(e=>a.onVideoCanPlayThrough({e:e,resolve:t})))}))}}))()}onVideoCanPlayThrough(e){var{e:t,resolve:a}=e;de?setTimeout((()=>{a(t.target)}),ce):a(t.target)}loadAudio(){var t=this;return n((function*(){var{slug:a,audio:i}=t.artifact;e.remove("#".concat(he));var n=e.create("audio",{class:Q,crossorigin:"anonymous",id:he,loop:!0,preload:"auto"});t.audioElement=n;var r=T.str(i)?i:a,[s,l]=r.split("?");s.startsWith("/")||(s="/audio/".concat(s));var d=["ogg","mp4","mp3"];s.endsWith(".mp3")&&(d=["mp3"],s=s.slice(0,-4));var c=s.startsWith("http")?s:"".concat(o.MEDIA_URL).concat(s);l||(l="v=".concat(pe)),d.forEach((t=>{e.create("source",{src:"".concat(c,".").concat(t,"?").concat(l),type:"audio/".concat(t),parent:n})})),e.append(n);var{duration:h}=n;if(T.num(h)&&h>0)return n;var u="canplaythrough";return de&&(u="loadedmetadata"),new Promise((t=>{e.on(n,u,(e=>t(e.target)))}))}))()}loadAudioElements(){var t=this;return n((function*(){var{audioElements:a,slug:i}=t.artifact;return yield Promise.all(a.map(function(){var a=n((function*(a,r){var s=a.audio||i,l="".concat(he,"-").concat(r);e.remove("#".concat(l));var d=e.create("audio",{class:Q,crossorigin:"anonymous","data-name":s,preload:"auto",id:l});!1!==a.loop&&(d.loop="true"),t.audioElements.push(d);var c="/audio/".concat(s),h=["mp4","ogg","mp3"];c.endsWith(".mp3")&&(h=["mp3"],c=c.slice(0,-4));var u="".concat(o.MEDIA_URL).concat(c);request||(request="v=".concat(pe)),h.forEach((t=>{e.create("source",{src:"".concat(u,".").concat(t,"?").concat(request),type:"audio/".concat(t),parent:d})})),e.append(d);var{duration:m}=d;if(T.num(m)&&m>0)return d;var p="canplaythrough";return de&&(p="loadedmetadata"),new Promise((t=>{e.on(d,p,function(){var e=n((function*(e){de&&(yield new Promise((e=>setTimeout(e,3e3)))),t(e.target)}));return function(t){return e.apply(this,arguments)}}())}))}));return function(e,t){return a.apply(this,arguments)}}()))}))()}loadTextures(){var e=this;return n((function*(){var{textures:t={}}=e.artifact,{dir:a,names:i}=t,n="jpg";o.SUPPORTS.WEBP&&(n="webp"),a&&!a.endsWith("/")&&(a="".concat(a,"/"));var r={};return i.forEach((t=>{var i=t;a.startsWith("/")||(i="https://static.artificialmuseum.com/textures/".concat(a,"/").concat(t)),i.endsWith(".jpg")||(i="".concat(i,".").concat(n));var o=e.promisifiedLoad({loader:e.textureLoader,file:i});r[slugged]=o})),r}))()}loadController(){var e=this;return n((function*(){if(e.artifact.pointerLockControls){var{ArmPointerLockControls:t}=yield import("./controls/ArmPointerLockControls.js");return t}var{ArmOrbitControls:a}=yield import("./controls/ArmOrbitControls.js");return a}))()}loadGltf(){var e=this;return n((function*(){var{artifact:t,XR:a}=e,{file:i,version:n=1}=t,r=a?"&xr=1":"",s=i.startsWith("http")?i:"".concat(o.GLB_URL,"/").concat(i,".glb?v=").concat(n).concat(r);return yield e.promisifiedLoad({loader:e.gltfLoader,file:s})}))()}loadPly(){var e=this;return n((function*(){var t,{artifact:a,XR:i}=e,{file:r,ply:s={},version:l=1}=a,d=i?"&xr=1":"",c=s.files;if(c&&!T.arr(c)&&(c=[c]),null!==(t=c)&&void 0!==t&&t.length)return yield Promise.all(c.map(function(){var t=n((function*(t,a){if(t)return t=t.startsWith("/")?"".concat(t,".ply?v=").concat(l).concat(d):"".concat(o.STATIC_URL,"/ply/").concat(t,".ply?v=").concat(l).concat(d),yield e.promisifiedLoad({loader:e.plyLoader,file:t});console.log("empty file",c,t,a)}));return function(e,a){return t.apply(this,arguments)}}()));var h=r;s.file&&(h=s.file);var u="?v=".concat(l).concat(d),m=h.endsWith(".ply")?h:"".concat(h,".ply");return h.startsWith("/")||(m="".concat(o.STATIC_URL,"/ply/").concat(h,".ply")),m+=u,yield e.promisifiedLoad({loader:e.plyLoader,file:m})}))()}loadGui(){var{title:t,button:a,body:i}=this.artifact.gui.afterSpawnModel,n=[];t&&n.push(e.create("h3",{innerText:t})),i&&n.push(e.create("div",{innerText:i})),n.length&&(a&&n.push(e.create("button",{id:"afterSpawnModelButton",class:"styled margin inverse",innerText:a,on:{click:e=>{var t=e.target.parentNode;t.parentNode.removeChild(t)}}})),this.gui={afterSpawnModel:e.create("div",{class:"w hudgui",children:n,parent:"#hud"})})}promisifiedLoad(e){var{loader:t,file:a}=e;return new Promise(((e,i)=>{t.load(a,(t=>{e(t)}),(e=>{e.lengthComputable&&(Math.ceil(e.loaded/e.total*100),"".concat(e.loaded,"/").concat(e.total))}),(e=>{this.setError(e,"Error loading artifact.",5e3),i(e)}))}))}startEngine(){var t=this;return n((function*(){var{artifact:a,XR:i}=t,r=Object.entries(t.promises).map(function(){var e=n((function*(e){var[t,a]=e;return[t,yield a]}));return function(t){return e.apply(this,arguments)}}()),o=yield Promise.all(r);t.assets=Object.fromEntries(o);var s=new ge({artifact:a,preload:t,XR:i}),l=yield s.init(t.assets.scene);if(!l)throw new Error("Session undefined.");e.hide(t._header),e.hide(t._preloadInfo),e.show(t._headerDone),t._session=l,t._timeoutShown&&t.isAndroidChrome?e.prop(t._confirmButton,{disabled:!1}):t._isCancelled||(yield t.finishLoad())}))()}showTimeoutWarning(){e.show(this._preloadInfo),this.isAndroidChrome&&(e.show(this._confirmButton),this._confirmButton.setAttribute("disabled",!0),this._timeoutShown=!0)}confirmButtonClickHandler(){var t=this;return n((function*(){t._session?(e.off(t._confirmButton,"click",t.confirmButtonClickHandler),yield t.finishLoad(),t.finished()):console.error("confirmButtonClickHandler: session not defined",t)}))()}finishLoad(){var t=this;return n((function*(){if(t._session){var{hud:a,initFallbackSession:i,initScene:n}=t._session;try{yield n(),a.show(),e.show("#".concat(v)),t.finished()}catch(n){"InvalidStateError"===n.name||"NotSupportedError"===n.name?(yield i(),a.show(),e.show("#".concat(v)),t.finished()):"SecurityError"===n.name?(e.show(t._confirmButton),e.prop(t._confirmButton,{disabled:!1})):(console.error("Unexpected Preload.finishLoad error"),console.error(n))}}}))()}setError(e,t){console.warn(e,t),o.clearTimeout(this.timeout),this.finished()}showTooFarNotification(t){var{distance:a,artifact:i,map:n}=t,r="meter",o=a;o>=1e3?(r="kilometer",o>=2e3&&(r+="s"),o=Math.round(o/1e3)):o>=2&&(r+="s"),this.artifact=i,this.map=n,this.XR=!1,this._tooFarDistanceInfo.innerText="This artifact is ".concat(o," ").concat(r," away."),e.show(this._tooFarContainer),e.on(this._tooFarPreviewButton,"click",this.onTooFarPreviewButtonClick),e.on(this._tooFarCancelButton,"click",this.onTooFarCancelButtonClick),e.on(this._tooFarAbortButton,"click",this.onTooFarCancelButtonClick)}onTooFarCancelButtonClick(){e.off(this._tooFarPreviewButton,"click",this.onTooFarPreviewButtonClick),this._isCancelled=!0,e.hide(this._tooFarContainer),this.finished()}onTooFarPreviewButtonClick(){var t=this;return n((function*(){e.off(t._tooFarPreviewButton,"click",t.onTooFarPreviewButtonClick),e.off(t._tooFarCancelButton,"click",t.onTooFarCancelButtonClick),e.off(t._tooFarAbortButton,"click",t.onTooFarCancelButtonClick),e.hide(t._tooFarContainer);var{artifact:a,map:i,XR:n}=t;yield t.init({artifact:a,map:i,XR:n}),yield t.startEngine()}))()}showWebglDisabledNotification(){e.show(this._webglDisabledContainer),e.hide([this._header,this._headerDone,this._preloadInfo,this._cancelButton,this._confirmButton]),e.on(this._webglDisabledOkButton,"click",this.onWebglDisabledOkButtonClick)}onWebglDisabledOkButtonClick(){e.off(this._webglDisabledOkButton,"click",this.onWebglDisabledOkButtonClick),this._isCancelled=!0,e.hide(this._webglDisabledContainer),this.finished()}finished(){this._isWorking=!1,this._timeoutShown=!1,e(".start-experience-button").forEach((e=>{e.removeAttribute("disabled")})),e.hide([this._warningContainer,this._confirmButton,this._preloadInfo,this._headerDone]),e.prop(this._confirmButton,{disabled:!0}),e.show(this._header),o.clearTimeout(this.timeout)}}export{we as Preload};
