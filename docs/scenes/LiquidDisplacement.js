import{x as e,ai as a,S as r,D as i}from"../vendor.js";class t{constructor(a){var{artifact:r}=a,{morph:i={}}=r,{startValue:t=0,maxFrequency:o=2,minFrequency:n=-1,frequencySpeed:s=.03,cameraDistanceModifier:c=!1,scale:l=.5,morphName:m="morph"}=i;this.frequencyVector=new e(t,t,t),this.maxFrequency=o,this.minFrequency=n,this.frequencySpeed=s,this.cameraDistanceModifier=c,this.scale=l,this.morphName=m,this.frequencyDir=1}beforeLoadModel(e){var{engine:t,preload:o}=e;this.engine=t;var{camera:n}=t,s=o.assets.gltf.scene,c=n.position.distanceToSquared(s.position)*this.cameraDistanceModifier;this.materials=[],s.traverse((e=>{if(a(e.name,this.morphName)){var{material:t}=e;e.material=new r({side:i,fragmentShader:"#define GLSLIFY 1\nvarying vec2 vUv;varying float noise;uniform sampler2D uColorTex;uniform sampler2D uNormalTex;uniform float cameraDistance;varying float vElevation;void main(void){vec4 textureColor=texture2D(uColorTex,vUv);gl_FragColor=vec4(textureColor.rgb,1.0);}",vertexShader:"#define GLSLIFY 1\nvarying vec2 vUv;uniform sampler2D uColorTex;uniform sampler2D uNormalTex;uniform float scale;uniform float cameraDistance;varying float vRandom;varying float vElevation;uniform vec3 uFrequency;attribute float aRandom;\n#include <morphtarget_pars_vertex>\nvoid main(){\n#include <begin_vertex>\n#include <morphtarget_vertex>\nvUv=uv;vec4 modelPosition=modelMatrix*vec4(transformed,1.0);float elevation=sin(normal.x*uFrequency.x);elevation+=sin(normal.y*uFrequency.y);elevation+=sin(normal.z*uFrequency.z);elevation*=0.1;modelPosition.x+=normal.x*elevation*scale/cameraDistance;modelPosition.y+=normal.y*elevation*scale/cameraDistance;modelPosition.z+=normal.z*elevation*scale/cameraDistance;vec4 projectedPosition=projectionMatrix*viewMatrix*modelPosition;gl_Position=projectedPosition;vElevation=elevation;}",uniforms:{uNormalTex:{type:"t",value:t.map},uFrequency:{type:"f3",value:this.frequencyVector},uColorTex:{type:"t",value:t.map},scale:{type:"f",value:this.scale},cameraDistance:{type:"f",value:c}}}),e.material.morphTargets=!0,this.materials.push(e.material)}}))}tick(){var{camera:e}=this.engine;this.frequencyVector.x>=this.maxFrequency?this.frequencyDir=-1:this.frequencyVector.x<=this.minFrequency&&(this.frequencyDir=1);var a=this.frequencySpeed*this.frequencyDir,r=1;this.cameraDistanceModifier&&(r=e.position.distanceToSquared(this.model.position)*this.cameraDistanceModifier),this.materials.forEach((e=>{e.uniforms.uFrequency.value=this.frequencyVector.addScalar(a),e.uniforms.cameraDistance.value=r}))}}export{t as default};
