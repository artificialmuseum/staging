import{aM as e,aJ as r,aQ as s,a_ as t,a$ as a,V as i,c as o,W as n}from"../vendor.js";class h{constructor(e){var{artifact:r}=e,s=[{mat:{color:16711680},pos:[0,0,0]}],{file:t=r.slug}=r,{fps:a=12,layers:i=s,reverse:o=!1}=r.latk;this.file=t;this.frameMsInterval=1e3/a,this.layers=i,this.reverse=o,this.longestLayer=-1,this.currentFrame=0}beforeLoadModel(t){var{engine:a,preload:i}=t;i.assets.gltf?this.model=i.assets.gltf.scene:(this.model=new e,this.model.position.set(0,0,0)),this.renderer=a.renderer,this.camera=a.camera,this.scene=a.scene,this.buffer=new r,this.lineGroup=new s,this.model.add(this.lineGroup),this.layers.forEach((e=>{var r=this.createLayer(e);this.lineGroup.add(r)}))}createLayer(e){var{mat:r,pos:s}=e,o=new t(r),n=new a(this.buffer,o);return n.frustumCulled=!1,s&&n.position.add(new i(...s)),n}preload(){var e=this;return o((function*(){var{latk:r}=yield import("".concat(n.STATIC_URL,"/latk/").concat(e.file,".js"));r.forEach((r=>{r.layers.forEach((r=>{r.frames.length>e.longestLayer&&(e.longestLayer=r.frames.length),r.frames.forEach((r=>{r.strokes.forEach((r=>{var s=r.points.map((r=>e.point2Vec(r)));r.points=s}))}))}))})),e.latk=r}))()}point2Vec(e){return e=Array.isArray(e)?e:e.co,this.reverse&&(e=e.reverse()),new i(...e)}tick(e){var{timestamp:r}=e,{latk:s}=this;if(s&&s.length&&(!this.lastTick||this.lastTick+this.frameMsInterval<=r)){var t=[];s.forEach((e=>{var{layers:r}=e;r.forEach((e=>{var{frames:r={}}=e,{strokes:s=[]}=r[this.currentFrame];s.forEach((e=>{var r=this.drawStroke(e);t.push(...r)}))}))})),this.buffer.setFromPoints(t),this.currentFrame+=1,this.lastTick=r,this.lineGroup.traverse((e=>{e.geometry=this.buffer}));var a=this.longestLayer-1;this.currentFrame>a&&(this.currentFrame=0)}}drawStroke(e){for(var r=[],s=0;s<e.points.length-1;s++)r.push(e.points[s]),r.push(e.points[s+1]);return r}}export{h as default};
