import{c as e,aO as r,aL as t,aU as a,b2 as s,b3 as i,X as n,W as o}from"../vendor.js";class l{constructor(e){var{artifact:r}=e,t=[{mat:{color:16711680},pos:[0,0,0]}],{file:a=r.slug}=r,{fps:s=12,layers:i=t,reverse:n=!1}=r.latk;this.file=a;this.frameMsInterval=1e3/s,this.layers=i,this.reverse=n,this.longestLayer=-1,this.currentFrame=0}init(s){var i=this;return e((function*(){var{engine:e,preload:n}=s;n.assets.gltf?i.model=n.assets.gltf.scene:(i.model=new r,i.model.position.set(0,0,0)),i.renderer=e.renderer,i.camera=e.camera,i.scene=e.scene,i.buffer=new t,i.lineGroup=new a,i.model.add(i.lineGroup),i.layers.forEach((e=>{var r=i.createLayer(e);i.lineGroup.add(r)}))}))()}createLayer(e){var{mat:r,pos:t}=e,a=new s(r),o=new i(this.buffer,a);return o.frustumCulled=!1,t&&o.position.add(new n(...t)),o}preload(){var r=this;return e((function*(){var{latk:e}=yield import("".concat(o.STATIC_URL,"/latk/").concat(r.file,".js"));e.forEach((e=>{e.layers.forEach((e=>{e.frames.length>r.longestLayer&&(r.longestLayer=e.frames.length),e.frames.forEach((e=>{e.strokes.forEach((e=>{var t=e.points.map((e=>r.point2Vec(e)));e.points=t}))}))}))})),r.latk=e}))()}point2Vec(e){return e=Array.isArray(e)?e:e.co,this.reverse&&(e=e.reverse()),new n(...e)}render(e){this.updateLatk(e),this.renderer.render(this.scene,this.camera)}updateLatk(e){var{latk:r}=this;if(r&&r.length&&(!this.lastTick||this.lastTick+this.frameMsInterval<=e)){var t=[];r.forEach((e=>{var{layers:r}=e;r.forEach((e=>{var{frames:r={}}=e,{strokes:a=[]}=r[this.currentFrame];a.forEach((e=>{var r=this.drawStroke(e);t.push(...r)}))}))})),this.buffer.setFromPoints(t),this.currentFrame+=1,this.lastTick=e,this.lineGroup.traverse((e=>{e.geometry=this.buffer}));var a=this.longestLayer-1;this.currentFrame>a&&(this.currentFrame=0)}}drawStroke(e){for(var r=[],t=0;t<e.points.length-1;t++)r.push(e.points[t]),r.push(e.points[t+1]);return r}}export{l as default};
