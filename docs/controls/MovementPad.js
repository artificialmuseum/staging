import{bd as t}from"../vendor.js";import{getOffset as e}from"./utils.js";class i{constructor(e){t(this,"container",void 0),t(this,"padElement",void 0),t(this,"region",void 0),t(this,"handle",void 0),t(this,"eventRepeatTimeout",void 0),t(this,"regionData",{}),t(this,"handleData",{}),t(this,"mouseDown",!1),t(this,"mouseStopped",!1),this.container=e.container,this.padElement=document.createElement("div"),this.padElement.classList.add("movement-pad"),this.region=document.createElement("div"),this.region.classList.add("region"),this.handle=document.createElement("div"),this.handle.classList.add("handle"),this.region.appendChild(this.handle),this.padElement.append(this.region),this.container.append(this.padElement);var i=e.canvas;this.alignAndConfigPad(i),window.addEventListener("resize",(()=>{this.alignAndConfigPad(i)})),this.region.addEventListener("mousedown",(t=>{this.mouseDown=!0,this.handle.style.opacity=1,this.update(t.pageX,t.pageY)})),document.addEventListener("mouseup",(()=>{this.mouseDown=!1,this.resetHandlePosition()})),document.addEventListener("mousemove",(t=>{this.mouseDown&&this.update(t.pageX,t.pageY)})),this.region.addEventListener("touchstart",(t=>{this.mouseDown=!0,this.handle.style.opacity=1,this.currentTouchId=t.targetTouches[0].identifier,this.update(t.targetTouches[0].pageX,t.targetTouches[0].pageY)}));var a=t=>{t.changedTouches[0].identifier===this.currentTouchId&&(this.mouseDown=!1,this.resetHandlePosition(),this.currentTouchId=-1)};document.addEventListener("touchend",a),document.addEventListener("touchcancel",a),document.addEventListener("touchmove",(t=>{if(this.mouseDown){var e;for(var i of t.touches)i.identifier===this.currentTouchId&&(e=i);e&&this.update(e.pageX,e.pageY)}})),this.resetHandlePosition()}alignAndConfigPad(t){this.regionData.width=this.region.offsetWidth,this.regionData.height=this.region.offsetHeight,this.regionData.position={top:this.region.offsetTop,left:this.region.offsetLeft},this.regionData.offset=e(this.region),this.regionData.radius=this.regionData.width/2,this.regionData.centerX=this.regionData.position.left+this.regionData.radius,this.regionData.centerY=this.regionData.position.top+this.regionData.radius,this.handleData.width=this.handle.offsetWidth,this.handleData.height=this.handle.offsetHeight,this.handleData.radius=this.handleData.width/2,this.regionData.radius=this.regionData.width/2-this.handleData.radius}update(t,e){var i=t-this.regionData.offset.left,a=e-this.regionData.offset.top;if(Math.pow(this.regionData.centerX-i,2)+Math.pow(this.regionData.centerY-a,2)>Math.pow(this.regionData.radius,2)){var s=Math.atan2(a-this.regionData.centerY,i-this.regionData.centerX);i=Math.cos(s)*this.regionData.radius+this.regionData.centerX,a=Math.sin(s)*this.regionData.radius+this.regionData.centerY}a=Math.round(10*a)/10,i=Math.round(10*i)/10,this.handle.style.top=a-this.handleData.radius+"px",this.handle.style.left=i-this.handleData.radius+"px";var n=this.regionData.centerX-parseInt(i),h=this.regionData.centerY-parseInt(a);n=4*(n- -this.regionData.radius)/(this.regionData.radius- -this.regionData.radius)-2,h=4*(h- -this.regionData.radius)/(this.regionData.radius- -this.regionData.radius)-2,n=Math.round(10*n)/10,h=Math.round(10*h)/10,this.sendEvent(n,h,0)}sendEvent(t,e,i){if(this.eventRepeatTimeout&&clearTimeout(this.eventRepeatTimeout),this.mouseDown){this.eventRepeatTimeout=setTimeout((()=>{this.sendEvent(t,e,i)}),5);var a=new CustomEvent("move",{bubbles:!1,detail:{deltaX:t,deltaY:e,middle:i}});this.padElement.dispatchEvent(a)}else{var s=new Event("stopMove",{bubbles:!1});this.padElement.dispatchEvent(s)}}resetHandlePosition(){this.handle.style.top=this.regionData.centerY-this.handleData.radius+"px",this.handle.style.left=this.regionData.centerX-this.handleData.radius+"px",this.handle.style.opacity=.1}}export{i as MovementPad};
