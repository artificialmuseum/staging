import{c as i,W as e,s as t,$ as a,w as n}from"./vendor.js";import{Preload as o}from"./Preload.js";import{S as r}from"./SCENE_TYPES.js";var s={slug:"rinsideout",name:["Reterritorialized Spaces:","Inside OUT"],file:"exhibition/insideout",version:1,lat:48.22646,lng:16.337,type:r.PlyExhibition,artists:["litto"],published:!1,distance:-1,location:"psk",city:"vienna",sky:"white",fog:{color:16119285,near:5,far:20},shadowPlane:!1,clickables:["click*"],audioElements:[{audio:"rlandestelle1"},{audio:"rsemmelweisklinik"},{audio:"rmessehalle"}],animations:{autoplay:!1},ply:{size:.01,sizeAttenuation:.01,files:["rlandestelle1","rsemmelweisklinik","rmessehalle"],opacity:"0.999"},cam:{y:1.8,z:7},lookat:{y:1.5},description:"\nA room in a gallery.\n  "},l={slug:"cyberneticorganism030100106",name:["Cybernetic Organism","0301001#06"],file:"exhibition/cyberneticorganism030100106",version:1,lat:48.22638,lng:16.33722,artists:["hideosnes"],type:r.PlyExhibition,published:!1,distance:-1,location:"galeriefreweinkazakbaev",city:"vienna",sky:"white",shadowPlane:!1,fog:{color:16119285,near:5,far:20},ply:{size:.01,sizeAttenuation:.01,file:"cyberneticorganism030100106",opacity:"0.999"},cam:{y:1.8,z:7},lookat:{y:1.5},description:"\nA room in a gallery.\n  "};(function(){var r=i((function*(){window.APP_DB={SCENE_TYPES:{PlyExhibition:25},MESH_TYPES:{PLANE:1,CIRCLE:2,RING:3,BOX:4,CUBE:4,SPHERE:5}},window.MAP_URL="https://map{s}.artificialmuseum.com",window.GLB_URL="https://glb.artificialmuseum.com",window.STATIC_URL="https://static.artificialmuseum.com",window.MEDIA_URL="https://media.artificialmuseum.com",window.ROOT_URL="https://artificialmuseum.com",e.SUPPORTS=yield t();var{XR:r}=e.SUPPORTS;a.on(".show-artifact","click",function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){var t=i((function*(i){var t=s;i.target.id.includes("hideo")&&(t=l);var n=new o({artifact:t}),r=a(".show-artifact");r.forEach((i=>i.disabled=!0));try{n._isWorking||(yield n.init({artifact:t,XR:e}),yield n.startEngine({artifact:t,XR:e}),r.forEach((i=>i.disabled=!1)))}catch(i){i.toString().toLowerCase().includes("error creating webgl context")?n.showWebglDisabledNotification():console.error("onButtonClick: preload.init failed",i)}}));return function(i){return t.apply(this,arguments)}}()}(r)),n&&a("a").forEach((i=>{i.removeAttribute("target")}))}));return function(){return r.apply(this,arguments)}})()();
