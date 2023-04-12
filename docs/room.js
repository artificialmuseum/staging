import{c as i,W as t,s as a,$ as o,w as r}from"./vendor.js";import{Preload as e}from"./Preload.js";import{S as n}from"./SCENE_TYPES.js";var s={slug:"artificialroom",name:"Artificial Room",file:"artificialroom",version:9,lat:48.21,lng:16.3812,type:n.ArtificialRoom,artists:["litto"],published:!1,distance:-1,frustumCulled:!1,location:"psk",city:"vienna",sky:"psk-kassenhalle",clickables:["cyborg_gameover_clicktarget","cyborg_replay_clicktarget"],fonts:["droid_sans_regular"],examples:["TextGeometry","Record3D"],animations:{noLoopAnimations:["clippDoor_opens","landing","location","shapekeys"],pausedAnimations:["clippDoor_opens","landing","location","shapekeys"]},clip:!0,cam:{y:1.8,z:7},lookat:{y:1.5},description:"\nA room.\n  "},c=function(){var n=i((function*(){window.APP_DB={SCENE_TYPES:{ArtificialRoom:23},MESH_TYPES:{PLANE:1,CIRCLE:2,RING:3,BOX:4,CUBE:4,SPHERE:5}},window.MAP_URL="https://map{s}.artificialmuseum.com",window.GLB_URL="https://glb.artificialmuseum.com",window.STATIC_URL="https://static.artificialmuseum.com",window.MEDIA_URL="https://media.artificialmuseum.com",window.ROOT_URL="https://artificialmuseum.com",t.SUPPORTS=yield a();var{XR:n}=t.SUPPORTS,c=o("#show-artifact");o.on(c,"click",(t=>{var{artifact:a,map:r,XR:n=!1}=t;return i((function*(){var i=new e({artifact:a}),t=o("#show-artifact");t.disabled=!0;try{i._isWorking||(yield i.init({artifact:a,map:r,XR:n}),yield i.startEngine({artifact:a,map:r,XR:n}),t.disabled=!1)}catch(t){t.toString().toLowerCase().includes("error creating webgl context")?i.showWebglDisabledNotification():console.error("onButtonClick: preload.init failed",t)}}))})({artifact:s,XR:n})),r&&o("a").forEach((i=>{i.removeAttribute("target")}))}));return function(){return n.apply(this,arguments)}}();c();
