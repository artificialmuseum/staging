import{aq as e}from"../vendor.js";class a{constructor(e){var{artifact:a}=e,{skyName:s="sky"}=a;this.skyName=s}init(a){var{engine:s,preload:t}=a,{XR:i}=s,r=t.assets.gltf.scene.getObjectByName("grid");r.material.wireframe=!0,r.castShadow=!1;var c=t.assets.gltf.scene.getObjectByName(this.skyName);c.visible=!1,t.assets.gltf.scene.getObjectByName("terrain").castShadow=!1;var l=t.assets.gltf.scene.getObjectByName("clip");i?(l.castShadow=!1,l.receiveShadow=!1,c.material.map=t.assets.skybox,c.material.side=e,c.receiveShadow=!1,c.castShadow=!1):(c.visible=!1,l.visible=!1)}}export{a as default};
