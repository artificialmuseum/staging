import{C as e,Y as t,O as r,y as a,x as s,a5 as o,Q as i,U as n,a6 as h}from"../vendor.js";class d{constructor(e){var{artifact:t}=e,{sphereCount:r=1e3,blackMolCount:a=100,whiteMolCount:s=100,parentCount:o=10,spawnCircleYOffset:i=.5,spawnCircleHeight:n=15,sphereScaleFactor:h=.1,spawnCircleDistance:d=2,spawnCircleWidth:p=5,upMolSpawnY:l=-7,molYSpeedMod:c=.02,upMolTargetPos:M=2.2}=t;this.sphereCount=r,this.whiteMolCount=s,this.blackMolCount=a,this.parentCount=o,this.spawnCircleYOffset=i,this.spawnCircleHeight=n,this.sphereScaleFactor=h,this.spawnCircleDistance=d,this.spawnCircleWidth=p,this.upMolSpawnY=l,this.molYSpeedMod=c,this.upMolTargetPos=M,this.spawnCircleParents=[],this.upCircleParents=[],this.parentVelocities=[],this.rotators=[],this.upMols=[]}beforeLoadModel(a){var s=this,{preload:o}=a;this.sphereMaterials=[new e({color:new t(0)}),new e({color:new t(16777215)})];var i=[15134221,3210255,12860729,16777173,16712446,8230640,15603985,458740,16340742,4709478,3543287,15689147];i.forEach((r=>{var a=new e({color:new t(r)});this.sphereMaterials.push(a)}));for(var n=function(r){i.forEach((a=>{var o=new e({color:new t(a),transparent:!0,opacity:r+.2+.2});s.sphereMaterials.push(o)}))},h=0;h<5;h++)n(h);this.scene=o.assets.gltf.scene,this.portal=this.scene.getObjectByName("portal"),this.portal.renderOrder=1;for(var{blackMolCount:d,parentCount:p,sphereCount:l,upMolSpawnY:c,whiteMolCount:M}=this,w=this.portal.position,C=0;C<p;C++){var m=new r;this.spawnCircleParents.push(m),m.position.set(w.x,0,w.z),m.renderOrder=1,this.scene.add(m);var u=m.clone();u.position.set(w.x,c,w.z),this.upCircleParents.push(u),u.renderOrder=1,this.scene.add(u);var v=.002*Math.random()+.001;this.parentVelocities.push(v)}for(var f=0;f<l;f++){var P=this.createSphere(),{x:g,y:O,z:x}=this.getRandomCirclePosition();P.position.set(g,O,x);var S=f%this.spawnCircleParents.length;this.spawnCircleParents[S].add(P)}for(var Y=0;Y<M;Y++){var y=this.createWhiteMol(),{x:z,y:k,z:H}=this.getRandomCirclePosition();y.position.set(z,k,H);var R=Y%this.spawnCircleParents.length;this.spawnCircleParents[R].add(y)}for(var U=0;U<d;U++){var E=this.createBlackMol(),{x:W,y:b,z:B}=this.getRandomCirclePosition();E.position.set(W,b,B);var V=U%this.spawnCircleParents.length;this.spawnCircleParents[V].add(E)}for(var D=0;D<l/5;D++){var F=this.createSphere(),I=D%this.upCircleParents.length;this.upCircleParents[I].add(F),this.addUpMol(F)}for(var T=0;T<d/7;T++){var j=this.createBlackMol(),A=T%this.upCircleParents.length;this.upCircleParents[A].add(j),this.addUpMol(j)}for(var L=0;L<M/7;L++){var N=this.createWhiteMol(2),Q=L%this.upCircleParents.length;this.upCircleParents[Q].add(N),this.addUpMol(N)}}getRandomCirclePosition(){var{spawnCircleDistance:e,spawnCircleWidth:t,spawnCircleHeight:r,spawnCircleYOffset:a}=this,s=Math.random()*t+e,o=360*Math.random(),i=s*Math.cos(o),n=s*Math.sin(o);return{x:i,y:Math.random()*(r/2)+a,z:n}}createSphere(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.random()*this.sphereScaleFactor+.05,t=new a(e,32,16),r=Math.floor(30*Math.random()-.001),o=this.sphereMaterials[r],i=new s(t,o);return i.renderOrder=1,i}createBlackMol(){var h=new e({color:new t(0)}),d=new r;d.renderOrder=1;var p=new a(.5,64,64),l=new s(p,h),c=.1*Math.random()+.05;l.scale.set(c,c,c),l.renderOrder=1,d.add(l);for(var M=l.position,w=Math.round(5*Math.random()),C=0;C<=w;C++){var m=.7*(Math.random()-.5),u=.7*(Math.random()-.5),v=.7*(Math.random()-.5),f=new o(M.x+m,M.y+u,M.z+v),P=new s(p,h);P.renderOrder=1,P.position.set(f.x,f.y,f.z);var g=.1*Math.random()+.05;P.scale.set(g,g,g);var O=new i([M,f]),x=new n(O,2,.005,4),S=new s(x,h);S.renderOrder=1,d.add(S),d.add(P)}return this.addRotator(d),d}createWhiteMol(){var h=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,d=new e({color:new t(16777215)}),p=new a(.3,64,64),l=new r;l.renderOrder=1;var c=new s(p,d),M=.1*Math.random()+.05;c.scale.set(M,M,M),c.renderOrder=1,l.add(c);for(var w=Math.ceil(Math.random()*h),C=c.position,m=0;m<w;m++){var u=.5*(Math.random()-.5),v=.3*Math.random()+.1,f=.5*(Math.random()-.5),P=new o(C.x+u,C.y+v,C.z+f),g=new s(p,d);g.renderOrder=1,g.position.set(P.x,P.y,P.z);var O=.1*Math.random()+.05;g.scale.set(O,O,O);var x=new i([C,P]),S=new n(x,2,.005,4),Y=new s(S,d);Y.renderOrder=1,l.add(Y),l.add(g),C=P}l.position.set(3*Math.random(),3*Math.random(),3*Math.random());var y=360*Math.random()*(Math.PI/180),z=360*Math.random()*(Math.PI/180),k=360*Math.random()*(Math.PI/180);return l.rotation.set(y,z,k),this.addRotator(l),l}addRotator(e){this.rotators.push({mesh:e,speed:.01*Math.random(),axis:new o(Math.random(),Math.random(),Math.random())})}addUpMol(e){var{upMolTargetPos:t}=this,r={mesh:e,speed:Math.random()*this.molYSpeedMod,target:new o(Math.random()*t-t/2,this.spawnCircleHeight,Math.random()*t-t/2)};this.upMols.push(r)}repositionUpMol(e){var t=e.parent.position;e.position.set(t.x,t.y,0)}tick(){this.spawnCircleParents.forEach(((e,t)=>{e.rotateY(this.parentVelocities[t])})),this.upCircleParents.forEach(((e,t)=>{e.rotateY(5*this.parentVelocities[t])})),this.rotators.forEach((e=>{e.mesh.rotateOnAxis(e.axis,e.speed)})),this.upMols.forEach((e=>{var{mesh:t,speed:r,target:a}=e;if(t.position.y<this.spawnCircleHeight){var s=t.position.y+r,i=this.spawnCircleHeight-this.upMolSpawnY-(this.spawnCircleHeight-s),{x:n,z:d}=h(new o(0,this.upMolSpawnY,0),a,i);t.position.set(n,s,d)}else this.repositionUpMol(t),e.speed=Math.random()*this.molYSpeedMod}))}}export{d as default};
