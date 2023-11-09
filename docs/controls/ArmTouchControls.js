import{bc as t,bd as e,be as i,am as s,$ as o,aj as a,a5 as n,ae as h,bf as r,as as d,bg as l,bh as u,au as c,bi as v}from"../vendor.js";import{RotationPad as m}from"./RotationPad.js";import{MovementPad as p}from"./MovementPad.js";import"./utils.js";var M=new WeakMap,f=new WeakMap,w=new WeakMap,g=new WeakMap,y=new WeakMap,b=new WeakMap,k=new WeakMap,P=new WeakMap,x=new WeakMap,D=new WeakMap,Y=new WeakMap,B=new WeakMap,W=new WeakMap,C=new WeakMap,R=new WeakMap,S=new WeakMap,E=new WeakSet,j=new WeakSet,K=new WeakSet;class O{constructor(u,c,v,O){t(this,K),t(this,j),t(this,E),e(this,"rotationPad",void 0),e(this,"movementPad",void 0),e(this,"container",void 0),e(this,"config",void 0),e(this,"fpsBody",void 0),e(this,"mouse",void 0),e(this,"enabled",!0),i(this,M,{writable:!0,value:void 0}),i(this,f,{writable:!0,value:void 0}),i(this,w,{writable:!0,value:void 0}),i(this,g,{writable:!0,value:void 0}),i(this,y,{writable:!0,value:void 0}),i(this,b,{writable:!0,value:!1}),i(this,k,{writable:!0,value:!1}),i(this,P,{writable:!0,value:!1}),i(this,x,{writable:!0,value:!1}),i(this,D,{writable:!0,value:!1}),i(this,Y,{writable:!0,value:!1}),i(this,B,{writable:!0,value:!1}),i(this,W,{writable:!0,value:!1}),i(this,C,{writable:!0,value:!1}),i(this,R,{writable:!0,value:1}),i(this,S,{writable:!0,value:1}),this.container=c.parentNode.parentNode,this.canvas=c,this.camera=O.camera,s&&(o.on(document,"gesturestart",this.gestureChange),o.on(document,"gesturechange",this.gestureChange),o.on(document,"gestureend",this.gestureEnd)),this.config=a(v.touchControls,{delta:.75,moveSpeed:.03,rotationSpeed:.003,maxPitch:0,hitTest:!1,hitTestDistance:40}),this.camConfig=a(v.cam,{x:0,y:1.7,z:5});var U=a(v,{floorTargets:[]});U.floorTargets.length&&(this.targets=U.floorTargets.map((t=>O.model.getObjectByName(t))).filter((t=>t)),this.targets.length&&(this.currentCameraHeight=1.7,this.rayOrigin=new n,this.rayDirection=new n(0,-1,0),this.floorRay=new h)),r(this,f,[]),r(this,w,[]),r(this,y,this.config.maxPitch*Math.PI/180),r(this,g,new n(0,0,0)),this.mouse=new d,this.fpsBody=O.camera,this.rotationPad=new m(this),this.movementPad=new p(this),this.onYawPitch=this.onYawPitch.bind(this),this.onMovementPadMove=this.onMovementPadMove.bind(this),this.onStopMove=this.onStopMove.bind(this),this.onContextMenu=this.onContextMenu.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),o.on(this.rotationPad.padElement,"YawPitch",this.onYawPitch),o.on(this.movementPad.padElement,"move",this.onMovementPadMove),o.on(this.movementPad.padElement,"stopMove",this.onStopMove),o.on(this.container,"contextmenu",this.onContextMenu),o.on(this.container,"mousedown",this.onMouseDown),o.on(this.container,"mouseup",this.onMouseUp),o.on(document,"keydown",this.onKeyDown),o.on(document,"keyup",this.onKeyUp),o.on(document,"mousemove",this.onMouseMove),o.on(document,"mouseout",this.onMouseOut),l(this,E,T).call(this)}onMovementPadMove(t){r(this,R,Math.abs(t.detail.deltaY)),r(this,S,Math.abs(t.detail.deltaX)),t.detail.deltaY==t.detail.middle?(r(this,R,1),r(this,k,r(this,P,!1))):t.detail.deltaY>t.detail.middle?(r(this,k,!0),r(this,P,!1)):t.detail.deltaY<t.detail.middle&&(r(this,k,!1),r(this,P,!0)),t.detail.deltaX==t.detail.middle?(r(this,S,1),r(this,D,r(this,x,!1))):t.detail.deltaX<t.detail.middle?(r(this,D,!0),r(this,x,!1)):t.detail.deltaX>t.detail.middle&&(r(this,D,!1),r(this,x,!0))}onYawPitch(t){var e=l(this,j,U).call(this,t.detail.deltaX,t.detail.deltaY);this.setRotation(e.rx,e.ry)}onStopMove(t){r(this,R,r(this,S,1)),r(this,k,r(this,P,r(this,x,r(this,D,!1))))}onContextMenu(t){t.preventDefault()}gestureChange(t){t.preventDefault(),document.body.style.zoom=.99}gestureEnd(t){t.preventDefault(),document.body.style.zoom=1}unspawn(){o.off(this.rotationPad.padElement,"YawPitch",this.onYawPitch),o.off(this.movementPad.padElement,"move",this.onMovementPadMove),o.off(this.movementPad.padElement,"stopMove",this.onStopMove),s&&(o.off(document,"gesturestart",this.gestureChange),o.off(document,"gesturechange",this.gestureChange),o.off(document,"gestureend",this.gestureEnd)),o.off(this.container,"contextmenu",this.onContextMenu),o.off(this.container,"mousedown",this.onMouseDown),o.off(this.container,"mouseup",this.onMouseUp),o.off(document,"keydown",this.onKeyDown),o.off(document,"keyup",this.onKeyUp),o.off(document,"mousemove",this.onMouseMove),o.off(document,"mouseout",this.onMouseOut),o.remove(this.movementPad.padElement),o.remove(this.rotationPad.padElement)}onMouseDown(t){this.enabled&&2===t.button&&(r(this,b,!0),t.preventDefault(),t.stopPropagation())}onMouseUp(t){this.enabled&&2===t.button&&r(this,b,!1)}onMouseMove(t){if(this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-t.clientY/window.innerHeight*2+1,this.enabled&&u(this,b)){var e=t.movementX||0,i=t.movementY||0,s=l(this,j,U).call(this,-1*e,-1*i);this.setRotation(s.rx,s.ry)}}onMouseOut(t){r(this,b,!1)}onKeyDown(t){if(this.enabled)switch(t.keyCode){case 38:case 87:r(this,k,!0);break;case 37:case 65:r(this,x,!0);break;case 40:case 83:r(this,P,!0);break;case 39:case 68:r(this,D,!0)}}onKeyUp(t){switch(t.keyCode){case 38:case 87:r(this,k,!1);break;case 37:case 65:r(this,x,!1);break;case 40:case 83:r(this,P,!1);break;case 39:case 68:r(this,D,!1)}}updateRayCaster(t){this.floorRay.set(this.camera.position,this.rayDirection);var e=this.floorRay.intersectObjects(this.targets).filter((t=>t.object.visible)),i=0;e.length?e.forEach((t=>{var e=t.point.y;i=e+this.currentCameraHeight})):i=this.currentCameraHeight,this.targetY=i}update(){this.config.hitTest&&this.hitTest(),u(this,g).x+=-1*u(this,g).x*this.config.delta,u(this,g).z+=-1*u(this,g).z*this.config.delta,u(this,k)&&!u(this,Y)&&(u(this,g).z-=u(this,R)*this.config.moveSpeed*this.config.delta),u(this,P)&&!u(this,B)&&(u(this,g).z+=u(this,R)*this.config.moveSpeed*this.config.delta),u(this,x)&&!u(this,W)&&(u(this,g).x-=u(this,S)*this.config.moveSpeed*this.config.delta),u(this,D)&&!u(this,C)&&(u(this,g).x+=u(this,S)*this.config.moveSpeed*this.config.delta),this.floorRay&&(this.updateRayCaster(),this.fpsBody.position.y=this.targetY),this.fpsBody.translateX(u(this,g).x),this.fpsBody.translateZ(u(this,g).z)}hitTest(){this.unlockAllDirections(),r(this,w,[]);for(var t=this.getDirection2(new n(0,0,0)).clone(),e=0;e<4;e++){var i=t.clone();i.applyMatrix4(u(this,f)[e]);var s=new h(this.fpsBody.position,i).intersectObject(u(this,M),!0);s.length>0&&s[0].distance<this.config.hitTestDistance&&(l(this,K,X).call(this,e),u(this,w).push(s[0]))}return u(this,w)}getDirection2(t){var e=new n(0,0,-1),i=new c(0,0,0,"YXZ"),s=this.fpsBody.rotation.x,o=this.fpsBody.rotation.y;return i.set(s,o,0),t.copy(e).applyEuler(i),t}getDirection(){var t=0,e=0,i=new n(0,0,-1),s=new c(0,0,0,"YXZ");return null!=self&&(t=this.fpsBody.rotation.x,e=this.fpsBody.rotation.y),o=>(s.set(t,e,0),o.copy(i).applyEuler(s),o)}isMoveLeft(){return u(this,x)}isMoveRight(){return u(this,D)}isMoveForward(){return u(this,k)}isMoveBackward(){return u(this,P)}lockMoveForward(t){r(this,Y,t)}lockMoveBackward(t){r(this,B,t)}lockMoveLeft(t){r(this,W,t)}lockMoveRight(t){r(this,C,t)}unlockAllDirections(){this.lockMoveForward(!1),this.lockMoveBackward(!1),this.lockMoveLeft(!1),this.lockMoveRight(!1)}addToScene(t){r(this,M,t),u(this,M).add(this.fpsBody)}setPosition(t,e,i){this.fpsBody.position.set(t,e,i)}stopMouseMoving(){r(this,b,!1)}setRotation(t,e){null!==t&&(this.fpsBody.rotation.x=t),null!==e&&(this.fpsBody.rotation.y=e)}getHitObjects(){return u(this,w)}}function T(){var t=new v;t.makeRotationY(0),u(this,f).push(t);var e=new v;e.makeRotationY(180*Math.PI/180),u(this,f).push(e);var i=new v;i.makeRotationY(90*Math.PI/180),u(this,f).push(i);var s=new v;s.makeRotationY(270*Math.PI/180),u(this,f).push(s)}function U(t,e,i){var s=i||this.config.rotationSpeed,o=this.fpsBody.rotation.y-t*s,a=this.fpsBody.rotation.x-e*s;return{rx:a=Math.max(-u(this,y),Math.min(u(this,y),a)),ry:o}}function X(t){0==t?this.lockMoveForward(!0):1==t?this.lockMoveBackward(!0):2==t?this.lockMoveLeft(!0):3==t&&this.lockMoveRight(!0)}export{O as ArmTouchControls};
