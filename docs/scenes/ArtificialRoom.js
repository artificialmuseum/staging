import{c as e,$ as t}from"../vendor.js";class i{constructor(e){var{artifact:t,mergeConfig:i,preload:n}=e;this.artifact=t,this.preloader=n,this.config=i(t,{apiHost:"localhost:2351"}),this.hasVoted=!1}afterLoadModel(e){var{engine:t,preload:i}=e;this.engine=t,this.preload=i,this.gChar=t.model.getObjectByName("cyborg_gameover"),this.rChar=t.model.getObjectByName("cyborg_replay"),this.bunny=t.model.getObjectByName("bunny"),this.bunny.visible=!1}afterVote(t){var i=this;return e((function*(){if(i.hasVoted=!0,i.vote=t,0===i.vote){i.engine.actions.find((e=>"clippDoor_opens"===e._clip.name)).paused=!1;var e=i.engine.actions.find((e=>"landing"===e._clip.name));e.paused=!1}else if(1===i.vote){i.bunny.visible=!0;var n=i.engine.actions.find((e=>"location"===e._clip.name));n.paused=!1;var a=i.engine.actions.find((e=>"shapekeys"===e._clip.name));a.paused=!1}}))()}distanceMatch(e){var{distance:i,config:n,node:a}=e,{min:o=0,max:s}=n.distance;if(i<=s&&i>=o){if(!this.trackedNode){this.trackedNode=a;var[c]=a.name.split("_");this.voteButton&&t.remove(this.voteButton),this.trackedAction=this.engine.actions.find((e=>e._clip.name==="active_".concat(c))),this.trackedAction.paused=!1,this.hasVoted||(this.voteButton=t.create("button",{id:c,on:{click:e=>{var i="gameover"===e.target.id?0:1;t.create("img",{src:"http://".concat(this.config.apiHost,"/v1/vote?").concat(i),parent:document.body,on:{error:e=>{t.remove(e.target),t.remove(this.voteButton),this.afterVote(i)}}})}},innerText:"Vote for ".concat(a.name.split("_")[0]),parent:this.engine.hud.gui}))}}else this.trackedNode&&a.name===this.trackedNode.name&&(this.trackedNode=null,t.remove(this.voteButton),this.voteButton=null,this.trackedAction&&(this.trackedAction.paused=!0,this.trackedAction=null))}tick(){this.engine.modelSpawned}}export{i as default};
