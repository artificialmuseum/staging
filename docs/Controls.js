import{D as e,b3 as t}from"./vendor.js";class i{constructor(i){var{clickables:s,engine:n}=i;this.clickables=s,this.engine=n,this.rotationMatrix=new e,this.raycaster=new t,this.click=this.click.bind(this),this.select=this.select.bind(this)}click(e){var{clickables:t}=this;if(!0===t)this.handle();else{var{raycaster:i}=this,{camera:s,renderer:n}=this.engine,r=e.clientX/n.domElement.clientWidth*2-1,a=-e.clientY/n.domElement.clientHeight*2+1;i.setFromCamera({x:r,y:a},s);var c=i.intersectObjects(t,!0);this.handle(c)}}select(){var{clickables:e}=this;if(!0===e)this.handle();else{var{raycaster:t,rotationMatrix:i}=this,{controller:s}=this.engine;i.extractRotation(s.matrixWorld),t.ray.origin.setFromMatrixPosition(s.matrixWorld),t.ray.direction.set(0,0,-1).applyMatrix4(i);var n=t.intersectObjects(e,!0);this.handle(n)}}handle(){var e,t=new Set(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]),i=Array.from(t);if(null===(e=this.engine.sceneInstance)||void 0===e||!e.onTouch)return i;this.engine.sceneInstance.onTouch(i)}}export{i as Controls};
