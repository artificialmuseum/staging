import{E as e,b5 as t,c as i}from"./vendor.js";class r{constructor(i){var{clickables:r,engine:a}=i;this.clickables=r,this.engine=a,this.rotationMatrix=new e,this.raycaster=new t,this.click=this.click.bind(this),this.select=this.select.bind(this)}click(e){var{clickables:t}=this;if(!0===t)this.handle();else{var{raycaster:i}=this,{camera:r,renderer:a}=this.engine,n=e.clientX/a.domElement.clientWidth*2-1,s=-e.clientY/a.domElement.clientHeight*2+1;i.setFromCamera({x:n,y:s},r);var c=i.intersectObjects(t,!0);this.handle(c)}}select(){var e=this;return i((function*(){var{clickables:t}=e;if(!0===t)yield e.handle();else{var{raycaster:i,rotationMatrix:r}=e,{controller:a}=e.engine;r.extractRotation(a.matrixWorld),i.ray.origin.setFromMatrixPosition(a.matrixWorld),i.ray.direction.set(0,0,-1).applyMatrix4(r);var n=i.intersectObjects(t,!0);yield e.handle(n)}}))()}handle(){var e=arguments,t=this;return i((function*(){var i=new Set(e.length>0&&void 0!==e[0]?e[0]:[]),r=Array.from(i);return yield t.engine.onTouch(r),r}))()}}export{r as Controls};
