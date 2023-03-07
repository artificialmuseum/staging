import{aa as e,c as t,$ as i,_ as o,aj as a,x as r}from"../vendor.js";class n{constructor(t){var{artifact:i,mergeConfig:o,preload:a}=t;this.artifact=i,this.preloader=a,this.config=o(i,{apiHost:"api.artificialmuseum.com",font:{size:.2,height:.02,curveSegments:4,bevelThickness:.01,bevelSize:.01,bevelEnabled:!0}}),this.hasVoted=!1,this.parentPos=new e}preload(){var e=this;return t((function*(){var[t,i]=yield Promise.all([e.preloader.loadVideo({dir:"artificialroom",video:"gameover",id:"artificialroom-gVideo"}),e.preloader.loadVideo({dir:"artificialroom",video:"replay",id:"artificialroom-rVideo"})]);e.gVideo=t,e.rVideo=i}))()}exit(){i.remove([this.gVideo,this.rVideo,this.gButton,this.rButton])}afterLoadModel(e){var{engine:t,preload:a}=e;this.engine=t,this.parent=t.model,this.gChar=t.model.getObjectByName("cyborg_gameover"),this.rChar=t.model.getObjectByName("cyborg_replay");var{Record3D:r}=a.assets.examples;t.model.getObjectByName("interface_01").castShadow=!1,t.model.getObjectByName("result").visible=!1;var n=o(o({},this.artifact),{},{scale:"3.0"});this.r3DG=new r({artifact:n,engine:t,preload:a,videoElement:this.gVideo}),t.model.getObjectByName("cyborg_gameover").getObjectByName("parent_gameover").add(this.r3DG.model);var s=o(o({},this.artifact),{},{scale:"1.5"});if(this.r3DR=new r({artifact:s,engine:t,preload:a,videoElement:this.rVideo}),t.model.getObjectByName("cyborg_replay").getObjectByName("parent_replay").add(this.r3DR.model),this.gVideo.play(),this.rVideo.play(),!this.engine.XR){var c={fontSize:"1.1em",fontWeight:"bold",backgroundColor:"#fafafa",color:"#0c0c0c",padding:"0.5em",position:"fixed",bottom:"10px",width:"auto"};this.gButton=i.create("button",{id:"gameover",style:o(o({},c),{},{right:"51%",left:"auto"}),innerText:"GAMEOVER",on:{click:()=>this.sendVote(0)},parent:this.engine.hud.gui}),this.rButton=i.create("button",{id:"replay",style:o(o({},c),{},{left:"51%"}),innerText:"REPLAY",on:{click:()=>this.sendVote(1)},parent:this.engine.hud.gui})}var l=["clipping_door","clipping","sphere","moon","end_replay"];this.gameOverAssets=l.map((e=>this.engine.model.getObjectByName(e))),this.gameOverAssets.forEach(((e,t)=>{e?(e.userData.originalPosition={x:e.position.x,y:e.position.y,z:e.position.z},e.position.set(5e3,5e3,5e3)):console.warn("ArtificialRoom: missing gameOverAsset",l[t])}))}onTouch(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.engine.XR&&e.length&&e.forEach((e=>{"cyborg_gameover_clicktarget"===e.target?this.sendVote(0):"cyborg_replay_clicktarget"===e.target&&this.sendVote(1)}))}sendVote(e){var i=this;return t((function*(){i.isVoting||(i.isVoting=!0,(yield window.fetch("https://".concat(i.config.apiHost,"/v1/vote?").concat(e))).ok&&(i.gButton&&(i.gButton.style.display="none"),i.rButton&&(i.rButton.style.display="none"),i.afterVote(e)))}))()}afterVote(e){var n=this;return t((function*(){var t;if(n.hasVoted=!0,n.isVoting=!1,n.vote=e,0===e?(t="replay",n.r3DR.model.visible=!1):1===e&&(t="gameover",n.r3DG.model.visible=!1),t){n.engine.actions.forEach((e=>{e._clip.name==="active_".concat(t)&&(e.paused=!0)}));var s=n.engine.model.getObjectByName("voting_replay");s&&(s.visible=!1);var c=n.engine.model.getObjectByName("voting_gameover");c&&(c.visible=!1)}var l=n.artifact.fonts[0],{assets:d}=n.preloader,g=d.fonts[l],{TextGeometry:m}=d.examples,p=yield fetch("https://".concat(n.config.apiHost,"/v1/result/?verbose=1")),h=yield p.json(),v=[new a({color:0,flatShading:!0}),new a({color:0})],f=new m("".concat(h.gp,"%"),o(o({},n.config.font),{},{font:g}));f.computeBoundingBox();var u=new r(f,v);u.geometry.center(),u.position.set(-1,1.8,0);var y=new m("".concat(h.rp,"%"),o(o({},n.config.font),{},{font:g}));y.computeBoundingBox();var b=new r(y,v);b.geometry.center(),b.position.set(1,1.8,0),n.engine.model.add(u),n.engine.model.add(b);var V=i.create("img",{src:"https://static.artificialmuseum.com/button/artificialroom/thanksforvoting.jpg",style:{top:"calc(50vh - 70px)",left:"calc(50vw - 150px)",width:"300px",height:"140px",margin:"0 auto",position:"fixed"},parent:n.engine.hud.gui});setTimeout((()=>{i.remove(V),n.gameOverAssets.forEach((e=>{var{x:t,y:i,z:o}=e.userData.originalPosition;e.position.set(t,i,o)})),n.engine.actions.find((e=>"clippDoor_opens"===e._clip.name)).paused=!1;var e=n.engine.actions.find((e=>"landing"===e._clip.name));setInterval((()=>{e.paused=!1}),3e3)}),2e3)}))()}}export{n as default};
