import{D as e,aZ as t}from"./vendor.js";class i{constructor(i){var{clickables:n,engine:s}=i;this.clickables=n,this.engine=s,this.rotationMatrix=new e,this.raycaster=new t,this.click=this.click.bind(this),this.select=this.select.bind(this)}click(e){var{clickables:t,raycaster:i}=this,{camera:n,renderer:s}=this.engine,r=e.clientX/s.domElement.clientWidth*2-1,a=-e.clientY/s.domElement.clientHeight*2+1;i.setFromCamera({x:r,y:a},n);var c=i.intersectObjects(t,!0);this.handle(c)}select(){var{clickables:e,raycaster:t,rotationMatrix:i}=this,{controller:n}=this.engine;i.extractRotation(n.matrixWorld),t.ray.origin.setFromMatrixPosition(n.matrixWorld),t.ray.direction.set(0,0,-1).applyMatrix4(clickRotationMatrix);var s=t.intersectObjects(e,!0);this.handle(s)}handle(e){var t,i,n=[];return e.forEach((e=>{var{object:t}=e;t.name&&!n.includes(t.name)&&n.push(t.name)})),null!==(t=this.engine.sceneInstance)&&void 0!==t&&t.handleInersects&&console.error("E_DEPRECATED","CustomScene.handleIntersects is deprecated, use onTouch instead"),null!==(i=this.engine.sceneInstance)&&void 0!==i&&i.onTouch?this.engine.sceneInstance.onTouch(n):n}}export{i as Controls};
