import{V as e,a8 as a,S as i,a9 as r}from"../vendor.js";class t{constructor(a){var{artifact:i}=a,{morph:r={}}=i,{startValue:t=0,maxFrequency:n=10,minFrequency:o=0,frequencySpeed:s=.003,cameraDistanceModifier:c=.1,scale:l=.1,morphName:m="face"}=r;this.frequencyVector=new e(t,t,t),this.maxFrequency=n,this.minFrequency=o,this.frequencySpeed=s,this.cameraDistanceModifier=c,this.scale=l,this.morphName=m,this.frequencyDir=1}beforeLoadModel(e){var{engine:t,preload:n}=e;this.engine=t;var{camera:o}=t;this.model=n.assets.gltf.scene,this.animations=n.assets.gltf.animations;var s=o.position.distanceToSquared(this.model.position)*this.cameraDistanceModifier;this.materials=[],this.model.traverse((e=>{if(a(e.name,this.morphName)){var{material:t}=e;e.material=new i({side:r,fragmentShader:"#define GLSLIFY 1\nuniform sampler2D uColorTex;uniform float cameraDistance;varying vec2 vUv;varying float vElevation;\n#ifdef USE_ALPHAMAP\ndiffuseColor.a*=texture2D(alphaMap,vUv).g;\n#endif\nvoid main(void){vec4 textureColor=texture2D(uColorTex,vUv);textureColor.rgb*=vElevation*(2.0/cameraDistance)+0.2;gl_FragColor=vec4(textureColor.rgb,1.0);}",vertexShader:"#define GLSLIFY 1\nuniform float scale;uniform float cameraDistance;uniform vec3 uFrequency;varying vec2 vUv;varying float vRandom;varying float vElevation;attribute float aRandom;\n#include <morphtarget_pars_vertex>\nvoid main(){\n#include <begin_vertex>\n#include <morphtarget_vertex>\nvec4 modelPosition=modelMatrix*vec4(transformed,1.0);float elevation=sin(normal.x*uFrequency.x);elevation-=sin(normal.y*uFrequency.y);elevation+=sin(normal.z/uFrequency.z);elevation*=0.2;modelPosition.x+=normal.x*elevation*scale/cameraDistance;modelPosition.y+=normal.y*elevation*scale/cameraDistance;modelPosition.z+=normal.z*elevation*scale/cameraDistance;vec4 projectedPosition=projectionMatrix*viewMatrix*modelPosition;gl_Position=projectedPosition;vUv=uv;vElevation=elevation;}",uniforms:{uNormalTex:{type:"t",value:t.map},uFrequency:{type:"f3",value:this.frequencyVector},uColorTex:{type:"t",value:t.map},scale:{type:"f",value:this.scale},cameraDistance:{type:"f",value:s}}}),e.material.morphTargets=!0,this.materials.push(e.material)}}))}tick(){var{camera:e}=this.engine;this.frequencyVector.x>=this.maxFrequency?this.frequencyDir=-1:this.frequencyVector.x<=this.minFrequency&&(this.frequencyDir=1);var a=this.frequencySpeed*this.frequencyDir,i=1;if(this.cameraDistanceModifier){var r=e.position,t=this.model.position;i=r.distanceToSquared(t)*this.cameraDistanceModifier}this.materials.forEach((e=>{e.uniforms.uFrequency.value=this.frequencyVector.addScalar(a),e.uniforms.cameraDistance.value=i}))}}export{t as default};
