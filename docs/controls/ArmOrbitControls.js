import{an as e,a5 as t,ao as n,ap as o,aq as a,ar as i,as as s,at as r,a as c,ac as l}from"../vendor.js";const m={type:"change"},p={type:"start"},u={type:"end"};class h extends e{constructor(e,r){super(),this.object=e,this.domElement=r,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new t,this.minDistance=0,this.maxDistance=Infinity,this.minZoom=0,this.maxZoom=Infinity,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-Infinity,this.maxAzimuthAngle=Infinity,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:n.ROTATE,MIDDLE:n.DOLLY,RIGHT:n.PAN},this.touches={ONE:o.ROTATE,TWO:o.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return b.phi},this.getAzimuthalAngle=function(){return b.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",J),this._domElementKeyEvents=e},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",J),this._domElementKeyEvents=null},this.saveState=function(){c.target0.copy(c.target),c.position0.copy(c.object.position),c.zoom0=c.object.zoom},this.reset=function(){c.target.copy(c.target0),c.object.position.copy(c.position0),c.object.zoom=c.zoom0,c.object.updateProjectionMatrix(),c.dispatchEvent(m),c.update(),h=l.NONE},this.update=function(){const n=new t,o=(new a).setFromUnitVectors(e.up,new t(0,1,0)),i=o.clone().invert(),s=new t,r=new a,p=2*Math.PI;return function(){const e=c.object.position;n.copy(e).sub(c.target),n.applyQuaternion(o),b.setFromVector3(n),c.autoRotate&&h===l.NONE&&I(2*Math.PI/60/60*c.autoRotateSpeed),c.enableDamping?(b.theta+=f.theta*c.dampingFactor,b.phi+=f.phi*c.dampingFactor):(b.theta+=f.theta,b.phi+=f.phi);let t=c.minAzimuthAngle,a=c.maxAzimuthAngle;return isFinite(t)&&isFinite(a)&&(t<-Math.PI?t+=p:t>Math.PI&&(t-=p),a<-Math.PI?a+=p:a>Math.PI&&(a-=p),b.theta=t<=a?Math.max(t,Math.min(a,b.theta)):b.theta>(t+a)/2?Math.max(t,b.theta):Math.min(a,b.theta)),b.phi=Math.max(c.minPolarAngle,Math.min(c.maxPolarAngle,b.phi)),b.makeSafe(),b.radius*=E,b.radius=Math.max(c.minDistance,Math.min(c.maxDistance,b.radius)),!0===c.enableDamping?c.target.addScaledVector(g,c.dampingFactor):c.target.add(g),n.setFromSpherical(b),n.applyQuaternion(i),e.copy(c.target).add(n),c.object.lookAt(c.target),!0===c.enableDamping?(f.theta*=1-c.dampingFactor,f.phi*=1-c.dampingFactor,g.multiplyScalar(1-c.dampingFactor)):(f.set(0,0,0),g.set(0,0,0)),E=1,!!(y||s.distanceToSquared(c.object.position)>d||8*(1-r.dot(c.object.quaternion))>d)&&(c.dispatchEvent(m),s.copy(c.object.position),r.copy(c.object.quaternion),y=!1,!0)}}(),this.dispose=function(){c.domElement.removeEventListener("contextmenu",$),c.domElement.removeEventListener("pointerdown",G),c.domElement.removeEventListener("pointercancel",W),c.domElement.removeEventListener("wheel",Q),c.domElement.removeEventListener("pointermove",q),c.domElement.removeEventListener("pointerup",B),null!==c._domElementKeyEvents&&(c._domElementKeyEvents.removeEventListener("keydown",J),c._domElementKeyEvents=null)};const c=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let h=l.NONE;const d=1e-6,b=new i,f=new i;let E=1;const g=new t;let y=!1;const P=new s,O=new s,T=new s,v=new s,A=new s,L=new s,w=new s,N=new s,j=new s,x=[],M={};function k(){return Math.pow(.95,c.zoomSpeed)}function I(e){f.theta-=e}function R(e){f.phi-=e}const Y=function(){const e=new t;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),g.add(e)}}(),S=function(){const e=new t;return function(t,n){!0===c.screenSpacePanning?e.setFromMatrixColumn(n,1):(e.setFromMatrixColumn(n,0),e.crossVectors(c.object.up,e)),e.multiplyScalar(t),g.add(e)}}(),D=function(){const e=new t;return function(t,n){const o=c.domElement;if(c.object.isPerspectiveCamera){const a=c.object.position;e.copy(a).sub(c.target);let i=e.length();i*=Math.tan(c.object.fov/2*Math.PI/180),Y(2*t*i/o.clientHeight,c.object.matrix),S(2*n*i/o.clientHeight,c.object.matrix)}else c.object.isOrthographicCamera?(Y(t*(c.object.right-c.object.left)/c.object.zoom/o.clientWidth,c.object.matrix),S(n*(c.object.top-c.object.bottom)/c.object.zoom/o.clientHeight,c.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),c.enablePan=!1)}}();function _(e){c.object.isPerspectiveCamera?E/=e:c.object.isOrthographicCamera?(c.object.zoom=Math.max(c.minZoom,Math.min(c.maxZoom,c.object.zoom*e)),c.object.updateProjectionMatrix(),y=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),c.enableZoom=!1)}function H(e){c.object.isPerspectiveCamera?E*=e:c.object.isOrthographicCamera?(c.object.zoom=Math.max(c.minZoom,Math.min(c.maxZoom,c.object.zoom/e)),c.object.updateProjectionMatrix(),y=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),c.enableZoom=!1)}function K(e){P.set(e.clientX,e.clientY)}function C(e){v.set(e.clientX,e.clientY)}function z(){if(1===x.length)P.set(x[0].pageX,x[0].pageY);else{const e=.5*(x[0].pageX+x[1].pageX),t=.5*(x[0].pageY+x[1].pageY);P.set(e,t)}}function X(){if(1===x.length)v.set(x[0].pageX,x[0].pageY);else{const e=.5*(x[0].pageX+x[1].pageX),t=.5*(x[0].pageY+x[1].pageY);v.set(e,t)}}function Z(){const e=x[0].pageX-x[1].pageX,t=x[0].pageY-x[1].pageY,n=Math.sqrt(e*e+t*t);w.set(0,n)}function F(e){if(1==x.length)O.set(e.pageX,e.pageY);else{const t=ne(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);O.set(n,o)}T.subVectors(O,P).multiplyScalar(c.rotateSpeed);const t=c.domElement;I(2*Math.PI*T.x/t.clientHeight),R(2*Math.PI*T.y/t.clientHeight),P.copy(O)}function U(e){if(1===x.length)A.set(e.pageX,e.pageY);else{const t=ne(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);A.set(n,o)}L.subVectors(A,v).multiplyScalar(c.panSpeed),D(L.x,L.y),v.copy(A)}function V(e){const t=ne(e),n=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(n*n+o*o);N.set(0,a),j.set(0,Math.pow(N.y/w.y,c.zoomSpeed)),_(j.y),w.copy(N)}function G(e){!1!==c.enabled&&(0===x.length&&(c.domElement.setPointerCapture(e.pointerId),c.domElement.addEventListener("pointermove",q),c.domElement.addEventListener("pointerup",B)),function(e){x.push(e)}(e),"touch"===e.pointerType?function(e){switch(te(e),x.length){case 1:switch(c.touches.ONE){case o.ROTATE:if(!1===c.enableRotate)return;z(),h=l.TOUCH_ROTATE;break;case o.PAN:if(!1===c.enablePan)return;X(),h=l.TOUCH_PAN;break;default:h=l.NONE}break;case 2:switch(c.touches.TWO){case o.DOLLY_PAN:if(!1===c.enableZoom&&!1===c.enablePan)return;c.enableZoom&&Z(),c.enablePan&&X(),h=l.TOUCH_DOLLY_PAN;break;case o.DOLLY_ROTATE:if(!1===c.enableZoom&&!1===c.enableRotate)return;c.enableZoom&&Z(),c.enableRotate&&z(),h=l.TOUCH_DOLLY_ROTATE;break;default:h=l.NONE}break;default:h=l.NONE}h!==l.NONE&&c.dispatchEvent(p)}(e):function(e){let t;switch(e.button){case 0:t=c.mouseButtons.LEFT;break;case 1:t=c.mouseButtons.MIDDLE;break;case 2:t=c.mouseButtons.RIGHT;break;default:t=-1}switch(t){case n.DOLLY:if(!1===c.enableZoom)return;!function(e){w.set(e.clientX,e.clientY)}(e),h=l.DOLLY;break;case n.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===c.enablePan)return;C(e),h=l.PAN}else{if(!1===c.enableRotate)return;K(e),h=l.ROTATE}break;case n.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===c.enableRotate)return;K(e),h=l.ROTATE}else{if(!1===c.enablePan)return;C(e),h=l.PAN}break;default:h=l.NONE}h!==l.NONE&&c.dispatchEvent(p)}(e))}function q(e){!1!==c.enabled&&("touch"===e.pointerType?function(e){switch(te(e),h){case l.TOUCH_ROTATE:if(!1===c.enableRotate)return;F(e),c.update();break;case l.TOUCH_PAN:if(!1===c.enablePan)return;U(e),c.update();break;case l.TOUCH_DOLLY_PAN:if(!1===c.enableZoom&&!1===c.enablePan)return;!function(e){c.enableZoom&&V(e),c.enablePan&&U(e)}(e),c.update();break;case l.TOUCH_DOLLY_ROTATE:if(!1===c.enableZoom&&!1===c.enableRotate)return;!function(e){c.enableZoom&&V(e),c.enableRotate&&F(e)}(e),c.update();break;default:h=l.NONE}}(e):function(e){switch(h){case l.ROTATE:if(!1===c.enableRotate)return;!function(e){O.set(e.clientX,e.clientY),T.subVectors(O,P).multiplyScalar(c.rotateSpeed);const t=c.domElement;I(2*Math.PI*T.x/t.clientHeight),R(2*Math.PI*T.y/t.clientHeight),P.copy(O),c.update()}(e);break;case l.DOLLY:if(!1===c.enableZoom)return;!function(e){N.set(e.clientX,e.clientY),j.subVectors(N,w),j.y>0?_(k()):j.y<0&&H(k()),w.copy(N),c.update()}(e);break;case l.PAN:if(!1===c.enablePan)return;!function(e){A.set(e.clientX,e.clientY),L.subVectors(A,v).multiplyScalar(c.panSpeed),D(L.x,L.y),v.copy(A),c.update()}(e)}}(e))}function B(e){ee(e),0===x.length&&(c.domElement.releasePointerCapture(e.pointerId),c.domElement.removeEventListener("pointermove",q),c.domElement.removeEventListener("pointerup",B)),c.dispatchEvent(u),h=l.NONE}function W(e){ee(e)}function Q(e){!1!==c.enabled&&!1!==c.enableZoom&&h===l.NONE&&(e.preventDefault(),c.dispatchEvent(p),function(e){e.deltaY<0?H(k()):e.deltaY>0&&_(k()),c.update()}(e),c.dispatchEvent(u))}function J(e){!1!==c.enabled&&!1!==c.enablePan&&function(e){let t=!1;switch(e.code){case c.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?R(2*Math.PI*c.rotateSpeed/c.domElement.clientHeight):D(0,c.keyPanSpeed),t=!0;break;case c.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?R(-2*Math.PI*c.rotateSpeed/c.domElement.clientHeight):D(0,-c.keyPanSpeed),t=!0;break;case c.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?I(2*Math.PI*c.rotateSpeed/c.domElement.clientHeight):D(c.keyPanSpeed,0),t=!0;break;case c.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?I(-2*Math.PI*c.rotateSpeed/c.domElement.clientHeight):D(-c.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),c.update())}(e)}function $(e){!1!==c.enabled&&e.preventDefault()}function ee(e){delete M[e.pointerId];for(let t=0;t<x.length;t++)if(x[t].pointerId==e.pointerId)return void x.splice(t,1)}function te(e){let t=M[e.pointerId];void 0===t&&(t=new s,M[e.pointerId]=t),t.set(e.pageX,e.pageY)}function ne(e){const t=e.pointerId===x[0].pointerId?x[1]:x[0];return M[t.pointerId]}c.domElement.addEventListener("contextmenu",$),c.domElement.addEventListener("pointerdown",G),c.domElement.addEventListener("pointercancel",W),c.domElement.addEventListener("wheel",Q,{passive:!1}),this.update()}}class d extends h{constructor(e,n,o){var{cam:a={},lookat:i={},orbit:s={}}=o;super(e,n),Object.entries(r).forEach((e=>{var[t,n]=e;this[t]=n})),c.num(s.min)&&(this.minDistance=s.min),c.num(s.max)&&(this.maxDistance=s.max),c.num(a.maxPolar)&&(this.maxPolarAngle=l.degToRad(a.maxPolar)),c.num(a.minPolar)&&(this.minPolarAngle=l.degToRad(a.minPolar));var{x:m=0,y:p=0,z:u=0}=i,h=new t(m,p,u);this.target=h}}export{d as ArmOrbitControls};
