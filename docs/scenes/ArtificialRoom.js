import{c as t,$ as e}from"../vendor.js";class i{constructor(t){var{artifact:e,mergeConfig:i,preload:a}=t;this.artifact=e,this.preloader=a,this.config=i(e,{apiHost:"api.artificialmuseum.com"}),this.hasVoted=!1}afterLoadModel(t){var{engine:e,preload:i}=t;this.engine=e,this.preload=i,this.gChar=e.model.getObjectByName("cyborg_gameover"),this.rChar=e.model.getObjectByName("cyborg_replay"),this.bunny=e.model.getObjectByName("bunny"),this.bunny.visible=!1,e.model.getObjectByName("result").visible=!1}afterVote(i){var a=this;return t((function*(){if(a.hasVoted=!0,a.vote=i,0===a.vote){a.engine.actions.find((t=>"clippDoor_opens"===t._clip.name)).paused=!1;var t=a.engine.actions.find((t=>"landing"===t._clip.name));t.paused=!1}else if(1===a.vote){a.bunny.visible=!0;var n=a.engine.actions.find((t=>"location"===t._clip.name));n.paused=!1;var o=a.engine.actions.find((t=>"shapekeys"===t._clip.name));o.paused=!1}var s=e.create("img",{src:"https://static.artificialmuseum.com/button/artificialroom/thanksforvoting.jpg",top:"calc(50% - 200px)",left:"calc(50% - 188px)",position:"fixed",parent:a.engine.hud.gui});setTimeout((()=>{e.remove(s)}),5e3)}))()}distanceMatch(i){var a,n=this,{distance:o,config:s,node:c}=i,{min:r=0,max:d}=s.distance;if(o<=d&&o>=r){if(!this.trackedNode){this.trackedNode=c;var[h]=c.name.split("_");this.voteButton&&e.remove(this.voteButton),this.trackedAction=this.engine.actions.find((t=>t._clip.name==="active_".concat(h))),this.trackedAction.paused=!1,this.hasVoted||(this.voteButton=e.create("button",{id:h,style:{position:"fixed",left:0,bottom:"5px",width:"100%"},on:{click:(a=t((function*(t){var e="gameover"===n.voteButton.id?0:1;yield window.fetch("https://".concat(n.config.apiHost,"/v1/vote?").concat(e))})),function(t){return a.apply(this,arguments)})},parent:this.engine.hud.gui}),e.create("img",{src:"https://static.artificialmuseum.com/button/artificialroom/btn_".concat(h,".png"),parent:this.voteButton,style:{position:"relative",margin:"0 auto",maxWidth:"50%",minWidth:"300px"}}))}}else this.trackedNode&&c.name===this.trackedNode.name&&(this.trackedNode=null,e.remove(this.voteButton),this.voteButton=null,this.trackedAction&&(this.trackedAction.paused=!0,this.trackedAction=null))}tick(){this.engine.modelSpawned}}export{i as default};
