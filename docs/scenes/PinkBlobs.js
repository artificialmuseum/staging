import{a$ as a,al as t,ak as i}from"../vendor.js";class e{constructor(a){var{artifact:t,mergeConfig:i}=a;this.artifact=t,this.config=i(t,{particleCount:15,maxSpawnDistance:5,maxSpawnWaitTime:20}),this.originalBlobs=[],this.activeBlobs=[],this.mixers=[]}afterLoadModel(t){var e=this,{engine:s}=t;this.engine=s;for(var r=s.model.getObjectByName("icePoop"),o=a.findByName(s.animations,"Anim_0"),n=function(a){var t=r.clone(),s=t.children[0].children[0].material.clone();s.transparent=!0,t.traverse((a=>{a.isMesh&&(a.material=s)}));var n=new i(t),c=n.clipAction(o);c.clampWhenFinished=!0,t.userData.clip=c,n.addEventListener("finished",(()=>{n.animOver=!0})),e.activeBlobs.push(t),e.engine.scene.add(t),e.mixers.push(n)},c=0;c<this.config.particleCount;c++)n();r.visible=!1}afterSpawnModel(){this.activeBlobs.forEach(((a,i)=>{var e=0===i?0:this.config.maxSpawnWaitTime;a.userData.clip.setLoop(t,1).startAt(Math.random()*e).play(),this.resetBlobStartPosition(a)}))}resetBlobStartPosition(a){var t=Math.random()>.5?1:-1,i=Math.random()*this.config.maxSpawnDistance*t,e=Math.random()>.5?1:-1,s=(1+Math.random()*this.config.maxSpawnDistance)*e;a.position.x=i,a.position.y=-.6,a.position.z=s,a.traverse((a=>{a.isMesh&&(a.material.opacity=1)}));var r=Math.floor(360*Math.random());a.rotation.set(0,r,0);var o=.03*Math.random()+.01;a.scale.set(o,o,o)}tick(a){for(var t=this,{delta:i}=a,e=function(a){var e=t.mixers[a];e.update(i);var s=t.activeBlobs[a];if(e.animOver){var r=s.children[0].children[0];if(s.scale.y>.1&&r.material.opacity>0){var o=s.scale.x+1e-4,n=Math.max(1e-6,s.scale.y-1e-4),c=s.scale.z+1e-4;s.scale.set(o,n,c),r.material.opacity>0&&s.traverse((a=>{a.isMesh&&(a.material.opacity-=.001)}))}else r.material.opacity>0?s.traverse((a=>{a.isMesh&&(a.material.opacity-=.001)})):(s.position.z=1e3,setTimeout((()=>{e.animOver=!1,e._actions.forEach((a=>{a.reset()})),t.resetBlobStartPosition(s)}),10))}},s=0;s<this.mixers.length;s++)e(s)}}export{e as default};
