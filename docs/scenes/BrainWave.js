import{c as e,ay as t,aV as a,aW as i,aB as s,a as n,ai as r,aX as o,ad as u,aY as h,aS as l,M as d,aZ as p,aO as m,a_ as c,a$ as v,D as g,a9 as b,W as w}from"../vendor.js";import S from"../materials/WireframeMaterial.js";class f{constructor(e){var{artifact:t}=e;this.artifact=t;var{radiusSegments:a=5,tube1Radius:i=.4,tube2Radius:s=.37,growSteps:n=1,edgeRemoval:r=!1,positionScaleFactor:o=1,tubeScale:u=.1,tube1Rotation:h=90,tube2Rotation:l=2*-Math.PI,audioThreshold:d=.02,fps:p=60,maximalSplineLength:m=5e3}=t;this.radiusSegments=a,this.tube1Radius=i*o,this.tube2Radius=s*o,this.growSteps=n,this.positionScaleFactor=o,this.audioThreshold=d,this.tubeScale=u,this.tube1Rotation=h,this.tube2Rotation=l,this.edgeRemoval=r,this.currentDrawRangeMin=0,this.direction=1,this.msBetweenSplineExpansions=1e3/p,this.maximalSplineLength=m,this.audioDistanceMaxMeters=8}preload(){var t=this;return e((function*(){t.data=yield t.loadData(),t.buffer=yield t.loadAudio(),t.matcapTexture=yield t.loadMatCap()}))()}loadMatCap(){var e="".concat(w.STATIC_URL,"/textures/matcap/grey-white-light.jpg");return new Promise((a=>{(new t).load(e,(e=>a(e)))}))}loadData(){var t=this;return e((function*(){var{artifact:e}=t,a=e.data?e.data:e.slug,i="".concat(w.STATIC_URL,"/data/").concat(a,".js"),{data:s}=yield import(i);return s}))()}beforeLoadModel(e){var{engine:t,preload:s}=e,{camera:n,modelSpawned:r,renderer:o,scene:u,listener:h,XR:l}=t;this.listener=h,this.XR=l,this.scene=u,this.modelSpawned=r,this.engine=t,this.model=s.assets.gltf.scene,this.camera=n,n.far=1e3,n.updateProjectionMatrix(),this.renderer=o,o.toneMapping=a,o.outputEncoding=i,this.createCubes(),this.create3dSplines(),this.addAudio()}afterSpawnModel(){this.audioTarget1.play(),this.audioTarget2.play()}loadAudio(){var t=this;return e((function*(){var{artifact:e}=t,a=new s,i=n.str(e.audio)?e.audio:e.slug,r="".concat(w.MEDIA_URL,"/audio/").concat(i,".mp3");return new Promise((e=>{a.load(r,(t=>{e(t)}))}))}))()}addAudio(){var t=this;return e((function*(){var{camera:e,model:a,parent1:i,parent2:s}=t,n=new r;e.add(n);var u=i.position,h=new o(n);h.name="audiotarget_1",h.position.set(u.x,u.y,u.z),h.setBuffer(t.buffer),h.setLoop(!0),h.setVolume(0);var l=s.position,d=new o(n);d.name="audiotarget_2",d.position.set(l.x,l.y,l.z),d.setBuffer(t.buffer),d.setLoop(!0),d.setVolume(0),d.offset=.1,a.add(h),a.add(d),t.audioTarget1=h,t.audioTarget2=d}))()}createCubes(){var e=this.positionScaleFactor,t=1.1*e,a=new u(t,t,t),i=new h({matcap:this.matcapTexture});this.cubeGroup=new l,this.cubeGroup.position.set(0,0,0);for(var s=0;s<5;s++)for(var n=0;n<28;n++){var r=new d(a,i);r.name="Cube_".concat(s,"_").concat(n),r.rotateY(2*Math.PI/28*n),r.position.x=e*Math.sin(2*Math.PI/28*n)*Math.sqrt(28),r.position.z=e*Math.cos(2*Math.PI/28*n)*Math.sqrt(28),r.position.y=e*s*1.2+.5*t+.01,this.cubeGroup.add(r)}this.model.add(this.cubeGroup),this.collisionMaxDistance=t/2}create3dSplines(){var{artifact:e,radiusSegments:t,tube1Radius:a,tube2Radius:i,tube1Rotation:s,tube2Rotation:n,tubeScale:r,positionScaleFactor:o}=this,u=o*r;this.points=[{x:0,y:0,z:0},...this.data.map((e=>{var[t,a,i]=e;return{x:t*u,y:a*u,z:i*u}}))];var h=2*this.points.length;this.spline=new p(this.points,!1,"catmullrom"),this.parent1=new m,this.parent1.position.set(0,7*o,0),this.parent2=new m,this.parent2.position.set(0,5*o,0),this.tube1Geometry=new c(this.spline,h,a,t,!1).toNonIndexed(),this.tube1Geometry.rotateY(s),this.tube1Geometry.setDrawRange(0,this.maximalSplineLength),this.tube2Geometry=new c(this.spline,h,i,t,!1).toNonIndexed(),this.tube2Geometry.rotateY(n),this.tube2Geometry.setDrawRange(0,this.maximalSplineLength);var{spline1RemoveEdges:l=!0,spline2RemoveEdges:w=!0}=e;v(this.tube1Geometry,l),v(this.tube2Geometry,w);var{spline1Uniforms:f={time:{value:0},fill:{value:new g(14138052)},stroke:{value:new g(16711680)},noiseA:{value:!1},noiseB:{value:!0},dualStroke:{value:!1},seeThrough:{value:!0},insideAltColor:{value:!1},thickness:{value:.1},secondThickness:{value:.05},dashEnabled:{value:!1},dashRepeats:{value:1},dashOverlap:{value:!1},dashLength:{value:.7},dashAnimate:{value:!1},squeeze:{value:!0},squeezeMin:{value:.28},squeezeMax:{value:1}}}=e;this.spline1material=new S({artifact:{uniforms:f,side:b,transparent:!0}});var{spline2Uniforms:y={time:{value:0},fill:{value:new g(12802834)},stroke:{value:new g(16711680)},noiseA:{value:!1},noiseB:{value:!0},dualStroke:{value:!1},seeThrough:{value:!0},insideAltColor:{value:!1},thickness:{value:.1},secondThickness:{value:.05},dashEnabled:{value:!1},dashRepeats:{value:1},dashOverlap:{value:!1},dashLength:{value:.7},dashAnimate:{value:!1},squeeze:{value:!0},squeezeMin:{value:.28},squeezeMax:{value:1}}}=e;this.spline2material=new S({artifact:{uniforms:y,side:b,transparent:!0}});var x=new d(this.tube1Geometry,this.spline1material);x.name="tube_1";var M=new d(this.tube2Geometry,this.spline2material);M.name="tube_2",this.parent1.add(x),this.parent2.add(M),this.model.add(this.parent1),this.model.add(this.parent2)}removeCubeIfTouchedBySpline(e){this.cubeGroup.traverse((t=>{t.isMesh&&t.visible&&e.forEach((e=>{t.position.distanceToSquared(e)<this.collisionMaxDistance&&(t.visible=!1)}))}))}exit(){var e,t;this.tube1Geometry.setDrawRange(0,this.maximalSplineLength),this.tube2Geometry.setDrawRange(0,this.maximalSplineLength),null!==(e=this.audioTarget1)&&void 0!==e&&e.isPlaying&&this.audioTarget1.stop(),null!==(t=this.audioTarget2)&&void 0!==t&&t.isPlaying&&this.audioTarget2.stop(),this.cubeGroup.traverse((e=>{e.visible=!0}))}tick(e){var{timestamp:t}=e;this.engine.modelSpawned&&(this.lastTimeStamp||(this.lastTimeStamp=this.msBetweenSplineExpansions+1),t-this.lastTimeStamp>=this.msBetweenSplineExpansions&&(this.lastTimeStamp=t,this.expandSpline()))}expandSpline(){var e=this.growSteps*this.radiusSegments*3*this.direction;this.currentDrawRangeMin+=e,this.tube1Geometry.setDrawRange(this.currentDrawRangeMin,this.maximalSplineLength),this.tube2Geometry.setDrawRange(this.currentDrawRangeMin,this.maximalSplineLength);for(var t=[],a=this.tube1Geometry.getAttribute("position").array,i=this.tube2Geometry.getAttribute("position").array,s=3*this.currentDrawRangeMin,n=3*(this.maximalSplineLength+this.currentDrawRangeMin),r=s;r<n;r+=3){var o={x:a[r],y:a[r+1]+this.parent1.position.y,z:a[r+2]};o.y>=0&&t.push(o);var u={x:i[r],y:i[r+1]+this.parent2.position.y,z:i[r+2]};u.y>=0&&t.push(u)}var h=t[t.length-2],l=t[t.length-1];this.repositionAudioTarget(this.audioTarget1,h),this.repositionAudioTarget(this.audioTarget2,l),this.removeCubeIfTouchedBySpline(t)}repositionAudioTarget(e,t){if(t&&e){var a=this.camera.position.distanceToSquared(t),i=e.getVolume(),s=Math.max(.1,Math.min(1,this.audioDistanceMaxMeters/a));Math.abs(i-s)>this.audioThreshold&&e.setVolume(s.toFixed(2))}}}export{f as default};
