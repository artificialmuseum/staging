import{a7 as e}from"../vendor.js";class a{constructor(e){var{artifact:a}=e,{skyName:s="sky"}=a;this.skyName=s}init(a){var{engine:s,preload:t}=a,{XR:i}=s;this.skybox=t.assets.skybox,t.assets.gltf.scene.getObjectByName("grid").material.wireframe=!0;var r=t.assets.gltf.scene.getObjectByName(this.skyName);i?(r.material.map=t.assets.skybox,r.material.side=e,r.receiveShadow=!1,r.castShadow=!1,r.material.map.needsUpdate=!0,r.material.needsUpdate=!0):(r.visible=!1,t.assets.gltf.scene.getObjectByName("clip").visible=!1)}}export{a as default};
