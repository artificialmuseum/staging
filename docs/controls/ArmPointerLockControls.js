import{au as e,a5 as t,an as o,aj as i,ae as n,$ as s}from"../vendor.js";const r=new e(0,0,0,"YXZ"),a=new t,h={type:"change"},c={type:"lock"},l={type:"unlock"},m=Math.PI/2;class d extends o{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=p.bind(this),this._onPointerlockChange=k.bind(this),this._onPointerlockError=u.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){const t=this.camera;a.setFromMatrixColumn(t.matrix,0),a.crossVectors(t.up,a),t.position.addScaledVector(a,e)}moveRight(e){const t=this.camera;a.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(a,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function p(e){if(!1===this.isLocked)return;const t=e.movementX||e.mozMovementX||e.webkitMovementX||0,o=e.movementY||e.mozMovementY||e.webkitMovementY||0,i=this.camera;r.setFromQuaternion(i.quaternion),r.y-=.002*t*this.pointerSpeed,r.x-=.002*o*this.pointerSpeed,r.x=Math.max(m-this.maxPolarAngle,Math.min(m-this.minPolarAngle,r.x)),i.quaternion.setFromEuler(r),this.dispatchEvent(h)}function k(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(c),this.isLocked=!0):(this.dispatchEvent(l),this.isLocked=!1)}function u(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class y extends d{constructor(e,o,r,a){super(e,o);var{lookat:h={},pointerLockControls:c,floorTargets:l=[]}=r;this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onLock=this.onLock.bind(this),this.onUnlock=this.onUnlock.bind(this),this.keyboard={},this.config=i(c,{speed:2,defaultCameraHeight:1.7,fallSpeed:1,gravity:9.8,jumpSpeed:5,jumpHeight:1.5,infographic:"pointerlockcontrols_explainer"}),this.currentCameraHeight=this.config.defaultCameraHeight,this.currentJumpSpeed=0,this.currentFallSpeed=this.config.fallSpeed;var m=i(c,{minPolarAngle:0,maxPolarAngle:Math.PI,pointerSpeed:1});Object.entries(m).forEach((e=>{var[t,o]=e;this[t]=o})),this.targets=[],l.length&&(this.targets=l.map((e=>a.model.getObjectByName(e))).filter((e=>e)),this.targets.length&&(this.floorRay=new n,this.rayOrigin=new t,this.rayDirection=new t(0,-1,0)));var{x:d=0,y:p=0,z:k=0}=h,u=new t(d,p,k);e.lookAt(u),this.lockMenuPanel=s.create("div",{parent:document.body,style:{position:"fixed",left:0,top:0,fontSize:"2em",zIndex:10500,height:"100%",width:"100%"},children:[s.create("button",{style:{color:"#000",height:"100%",width:"100%"},children:[s.create("img",{src:"https://static.artificialmuseum.com/controls/".concat(this.config.infographic,".png"),style:{backgroundColor:"#333333e0"}})],on:{click:()=>this.lock()}})]}),s.on(this,"lock",this.onLock),s.on(this,"unlock",this.onUnlock),s.on(document,"keydown",this.onKeyDown,!1),s.on(document,"keyup",this.onKeyUp,!1)}onLock(){this.lockMenuPanel.style.display="none"}onUnlock(){this.lockMenuPanel.style.display="block"}onKeyDown(e){var{code:t,repeat:o}=e;o||("KeyW"!==t&&"ArrowUp"!==t||(this.keyboard.w=!0),"KeyA"!==t&&"ArrowLeft"!==t||(this.keyboard.a=!0),"KeyS"!==t&&"ArrowDown"!==t||(this.keyboard.s=!0),"KeyD"!==t&&"ArrowRight"!==t||(this.keyboard.d=!0),"Space"===t&&(this.keyboard.space=!0))}onKeyUp(e){var{code:t}=e;"KeyW"!==t&&"ArrowUp"!==t||(this.keyboard.w=!1),"KeyA"!==t&&"ArrowLeft"!==t||(this.keyboard.a=!1),"KeyS"!==t&&"ArrowDown"!==t||(this.keyboard.s=!1),"KeyD"!==t&&"ArrowRight"!==t||(this.keyboard.d=!1),"Space"===t&&(this.keyboard.space=!1)}unspawn(){s.remove(this.lockMenuPanel),s.off(this,"lock",this.onLock),s.off(this,"unlock",this.onUnlock),s.off(document,"keydown",this.onKeyDown,!1),s.off(document,"keyup",this.onKeyUp,!1)}updateRayCaster(e){this.floorRay.set(this.camera.position,this.rayDirection);var t=this.floorRay.intersectObjects(this.targets).filter((e=>e.object.visible)),o=0;t.length?t.forEach((e=>{var t=e.point.y;o=t+this.currentCameraHeight})):o=this.currentCameraHeight,this.targetY=o}moveUpDown(e){var{targetY:t}=this;this.camera.position.y!==t&&(this.camera.position.y=t)}update(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.targets.length&&this.updateRayCaster(e),this.keyboard){var{speed:t}=this.config;this.keyboard.w&&this.moveForward(t*e),this.keyboard.a&&this.moveRight(-t*e),this.keyboard.s&&this.moveForward(-t*e),this.keyboard.d&&this.moveRight(t*e),this.config.jumpSpeed&&this.keyboard.space&&(this.keyboard.space=!1,this.isJumping=!0,this.currentJumpSpeed=this.config.jumpSpeed)}this.moveUpDown(e)}}export{y as ArmPointerLockControls};
