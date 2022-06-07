import{aa as e,aN as a,c as o,W as i,D as t,S as r,_ as l,aM as s,a as n,b2 as f}from"../vendor.js";class p{constructor(o){var{artifact:i,mergeConfig:t}=o;this.config=t(i.ply,{blending:e,depthTest:!1,file:i.slug,materials:["yellow"],positionOffset:.05,size:1,sizeAttenuation:0,scaleOffset:.01,opacity:"1.0",fallbackAlphaDivisor:3,computeVertexNormals:!1,vertexColors:!1}),this.model=new a}preload(e){var a=this;return o((function*(){var{preload:o}=e,{file:t,computeVertexNormals:r}=a.config;t.startsWith("/")||(t="".concat(i.STATIC_URL,"/ply/").concat(t,".ply")),t.endsWith(".ply")||(t+=".ply");var l=o.plyLoader;a.geo=yield o.promisifiedLoad({loader:l,file:t}),r&&a.geo.computeVertexNormals()}))()}beforeLoadModel(e){var{engine:a}=e,{blending:o,depthTest:p,materials:c,size:u,sizeAttenuation:d,positionOffset:m,scaleOffset:v,opacity:h,fallbackAlphaDivisor:g,vertexColors:y}=this.config;if(y){var x=new f({vertexColors:y,size:u,sizeAttenuation:d,opacity:h,transparent:"1.0"!==h}),S=new s(this.geo,x);this.model.add(S)}else{var z={fragmentShader:"precision highp float;\n#define GLSLIFY 1\nuniform vec3 uColor;uniform float uAlpha;void main(){vec4 col=vec4(uColor,uAlpha);gl_FragColor=col;}",vertexShader:"precision highp float;\n#define GLSLIFY 1\nuniform float uSize;void main(){gl_PointSize=uSize;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",depthTest:p,blending:o,uniforms:{uSize:{value:u*i.pxRatio,type:"f"},uColor:{value:new t(16711680),type:"f3"},uAlpha:{value:1,type:"f"}}},A=a.XR?1:g,C=new r(l(l({},z),{},{uniforms:l({},z.uniforms)})),w=new s(this.geo,C);c.forEach(((e,a)=>{var o=h;if(n.arr(e)){var[i,r=h]=e;o=r,e=i}o=(parseFloat(o)/A).toFixed(2).toString();var l=w.clone();l.material=l.material.clone(),l.material.uniforms.uColor.value=new t(e),l.material.uniforms.uAlpha.value=o;var s=1+a*v;l.scale.set(s,s,s),l.position.x=a*m,this.model.add(l)}))}}}export{p as default};
