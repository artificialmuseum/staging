import{E as e,b5 as t,c as i}from"./vendor.js";class r{constructor(i){var{clickables:r,engine:a}=i;this.clickables=r,this.clickNodes=r.map((e=>e.node)),this.engine=a,this.rotationMatrix=new e,this.raycaster=new t,this.click=this.click.bind(this),this.select=this.select.bind(this)}click(e){var{clickables:t,clickNodes:i}=this;if(!0===t)this.handle();else{var{raycaster:r}=this,{camera:a,renderer:s}=this.engine,n=e.clientX/s.domElement.clientWidth*2-1,c=-e.clientY/s.domElement.clientHeight*2+1;r.setFromCamera({x:n,y:c},a);var l=r.intersectObjects(i,!0);this.handle(l)}}select(){var e=this;return i((function*(){var{clickables:t,clickNodes:i}=e;if(!0===t)yield e.handle();else{var{raycaster:r,rotationMatrix:a}=e,{controller:s}=e.engine;a.extractRotation(s.matrixWorld),r.ray.origin.setFromMatrixPosition(s.matrixWorld),r.ray.direction.set(0,0,-1).applyMatrix4(a);var n=r.intersectObjects(i,!0);yield e.handle(n)}}))()}handle(){var e=arguments,t=this;return i((function*(){var i=(e.length>0&&void 0!==e[0]?e[0]:[]).map((e=>[e.object.name,e])),r=Object.fromEntries(i),a=Object.values(r);return yield t.engine.onTouch(a),a}))()}}export{r as Controls};
