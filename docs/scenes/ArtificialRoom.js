import{c as e,$ as i,aa as t,_ as o,ad as a,x as n}from"../vendor.js";class r{constructor(e){var{artifact:i,mergeConfig:t,preload:o}=e;this.artifact=i,this.preloader=o,this.config=t(i,{apiHost:"api.artificialmuseum.com",font:{size:.2,height:.02,curveSegments:4,bevelThickness:.01,bevelSize:.01,bevelEnabled:!0},artificialroom:{names:{clipDoor:"clipping_door",gameoverCyborg:"cyborg_gameover",gameoverParent:"parent_gameover",replayCyborg:"cyborg_replay",replayParent:"parent_replay",result:"result",assets:["clipping_door","clipping","sphere","moon","end_replay"],landingAnimation:"longLanding_LivingCity",earthOutside:"earthOutside"}}}),this.hasVoted=!1}preload(){var i=this;return e((function*(){var[e,t]=yield Promise.all([i.preloader.loadVideo({dir:"artificialroom",video:"gameover",id:"artificialroom-gVideo"}),i.preloader.loadVideo({dir:"artificialroom",video:"replay",id:"artificialroom-rVideo"})]);i.gVideo=e,i.rVideo=t}))()}exit(){i.remove([this.gVideo,this.rVideo,this.gButton,this.rButton])}afterLoadModel(e){var{engine:a,preload:n}=e;this.engine=a,this.shipAction=this.engine.actions.find((e=>e._clip.name===this.config.artificialroom.names.landingAnimation)),this.shipAction.paused=!0,this.shipAction.time=0,this.shipAction.loop=t,this.shipAction.clampWhenFinished=!0,this.parent=a.model,this.gChar=a.model.getObjectByName(this.config.artificialroom.names.gameoverCyborg),this.rChar=a.model.getObjectByName(this.config.artificialroom.names.replayCyborg);var{Record3D:r}=n.assets,s=a.model.getObjectByName(this.config.artificialroom.names.result);s?s.visible=!1:console.warn("result not found",this.config.artificialroom.names.result);var c=o(o({},this.artifact),{},{scale:"3.0"});this.r3DG=new r({artifact:c,engine:a,preload:n,videoElement:this.gVideo}),this.gChar.getObjectByName(this.config.artificialroom.names.gameoverParent).add(this.r3DG.model);var l=o(o({},this.artifact),{},{scale:"1.5"});if(this.r3DR=new r({artifact:l,engine:a,preload:n,videoElement:this.rVideo}),this.rChar.getObjectByName(this.config.artificialroom.names.replayParent).add(this.r3DR.model),this.gVideo.play(),this.rVideo.play(),!this.engine.XR){var g={fontSize:"1.1em",fontWeight:"bold",backgroundColor:"#fafafa",color:"#0c0c0c",padding:"0.5em",position:"fixed",bottom:"10px",width:"auto"};this.gButton=i.create("button",{id:"gameover",style:o(o({},g),{},{right:"51%",left:"auto"}),innerText:"GAMEOVER",on:{click:()=>this.sendVote(0)},parent:this.engine.hud.gui}),this.rButton=i.create("button",{id:"replay",style:o(o({},g),{},{left:"51%"}),innerText:"REPLAY",on:{click:()=>this.sendVote(1)},parent:this.engine.hud.gui})}this.gameOverAssets=this.config.artificialroom.names.assets.map((e=>this.engine.model.getObjectByName(e))),this.gameOverAssets.forEach(((e,i)=>{e?(e.userData.originalPosition={x:e.position.x,y:e.position.y,z:e.position.z},e.position.set(5e3,5e3,5e3)):console.warn("ArtificialRoom: missing gameOverAsset",this.config.artificialroom.names.assets[i])}))}onTouch(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.engine.XR&&e.length&&e.forEach((e=>{"cyborg_gameover_clicktarget"===e.target?this.sendVote(0):"cyborg_replay_clicktarget"===e.target&&this.sendVote(1)}))}sendVote(i){var t=this;return e((function*(){t.isVoting||(t.isVoting=!0,(yield window.fetch("https://".concat(t.config.apiHost,"/v1/vote?").concat(i))).ok&&t.afterVote(i))}))()}afterVote(t){var r=this;return e((function*(){var e;if(r.hasVoted=!0,r.isVoting=!1,r.vote=t,r.gButton&&(r.gButton.style.display="none"),r.rButton&&(r.rButton.style.display="none"),0===t?(e="replay",r.r3DG.model.visible=!1):1===t&&(e="gameover",r.r3DR.model.visible=!1),e){r.engine.actions.forEach((i=>{var t="active_".concat(e);i._clip.name===t&&i.stop()}));var s=r.engine.model.getObjectByName("voting_replay");s&&(s.visible=!1);var c=r.engine.model.getObjectByName("voting_gameover");c&&(c.visible=!1)}var l=r.artifact.fonts[0],{assets:g}=r.preloader,d=g.fonts[l],{TextGeometry:m}=g.examples,h=yield fetch("https://".concat(r.config.apiHost,"/v1/result/?verbose=1")),p=yield h.json(),f=[new a({color:16777215,flatShading:!0}),new a({color:16777215})],v=new m("".concat(p.gp,"%"),o(o({},r.config.font),{},{font:d}));v.computeBoundingBox();var u=new n(v,f);u.geometry.center(),u.position.set(-1.5,1.8,0);var y=new m("".concat(p.rp,"%"),o(o({},r.config.font),{},{font:d}));y.computeBoundingBox();var b=new n(y,f);b.geometry.center(),b.position.set(1.5,1.8,0);var V=r.engine.model.getObjectByName(r.config.artificialroom.names.earthOutside);V?(V.add(u),V.add(b)):(r.engine.model.add(u),r.engine.model.add(b));var B=i.create("img",{src:"https://static.artificialmuseum.com/button/artificialroom/thanksforvoting.jpg",style:{top:"calc(50vh - 70px)",left:"calc(50vw - 150px)",width:"300px",height:"140px",margin:"0 auto",position:"fixed"},parent:r.engine.hud.gui});setTimeout((()=>{i.remove(B),r.gameOverAssets.forEach((e=>{var{x:i,y:t,z:o}=e.userData.originalPosition;e.position.set(i,t,o)})),r.engine.actions.find((e=>"KeyAction"===e._clip.name)).paused=!1,setTimeout((()=>{r.shipAction.paused=!1}),3e3)}),2e3)}))()}}export{r as default};
