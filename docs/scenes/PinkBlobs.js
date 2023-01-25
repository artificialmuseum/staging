import{ac as a,ab as e,$ as t,aa as i}from"../vendor.js";class s{constructor(a){var{artifact:e,mergeConfig:t}=a;this.artifact=e,this.config=t(e,{particleCount:15,maxSpawnDistance:5,maxSpawnWaitTime:20}),this.originalBlobs=[],this.activeBlobs=[],this.mixers=[],this.eventsToRemove=[]}afterLoadModel(e){var s=this,{engine:o}=e;this.engine=o;for(var r=o.model.getObjectByName("icePoop"),n=a.findByName(o.animations,"Anim_0"),c=function(){var a=r.clone(),e=a.children[0].children[0].material.clone();e.transparent=!0,a.traverse((a=>{a.isMesh&&(a.material=e)}));var o=new i(a),c=o.clipAction(n);c.clampWhenFinished=!0,a.userData.clip=c;var l=[o,"finished",()=>{o.animOver=!0}];t.on(...l),s.eventsToRemove.push(l),s.activeBlobs.push(a),s.engine.scene.add(a),s.mixers.push(o)},l=0;l<this.config.particleCount;l++)c();r.visible=!1}afterSpawnModel(){this.activeBlobs.forEach(((a,t)=>{var i=0===t?0:this.config.maxSpawnWaitTime;a.userData.clip.setLoop(e,1).startAt(Math.random()*i).play(),this.resetBlobStartPosition(a)}))}exit(){this.eventsToRemove.forEach((a=>{t.off(...a)}))}resetBlobStartPosition(a){var e=Math.random()>.5?1:-1,t=Math.random()*this.config.maxSpawnDistance*e,i=Math.random()>.5?1:-1,s=(1+Math.random()*this.config.maxSpawnDistance)*i;a.position.x=t,a.position.y=-.6,a.position.z=s,a.traverse((a=>{a.isMesh&&(a.material.opacity=1)}));var o=Math.floor(360*Math.random());a.rotation.set(0,o,0);var r=.03*Math.random()+.01;a.scale.set(r,r,r)}tick(a){for(var e=this,{delta:t}=a,i=function(){var a=e.mixers[s];a.update(t);var i=e.activeBlobs[s];if(a.animOver){var o=i.children[0].children[0];if(i.scale.y>.1&&o.material.opacity>0){var r=i.scale.x+1e-4,n=Math.max(1e-6,i.scale.y-1e-4),c=i.scale.z+1e-4;i.scale.set(r,n,c),o.material.opacity>0&&i.traverse((a=>{a.isMesh&&(a.material.opacity-=.001)}))}else o.material.opacity>0?i.traverse((a=>{a.isMesh&&(a.material.opacity-=.001)})):(i.position.z=1e3,setTimeout((()=>{a.animOver=!1,a._actions.forEach((a=>{a.reset()})),e.resetBlobStartPosition(i)}),10))}},s=0;s<this.mixers.length;s++)i()}}export{s as default};
