import{am as e,S as t,a6 as a,aM as r,aT as i,aU as l,an as p}from"../vendor.js";import{v as s,f as n}from"../FakeMirrorVertex.js";class o{constructor(e){var{artifact:t,mergeConfig:a}=e;this.shaderConfig=a(t,{filterSize:"1.0",minDepth:"0.1",maxDepth:"5.0",depthThresholdFilter:"0.9",scale:"2.0",ptSize:"1.0",depthScale:"0.1",pixelDepth:"1.0",ifx:.00125,ify:.00125,itx:-.4,ity:-.6,ptSize:"1.0",textures:{}})}afterLoadModel(t){var{engine:a,preload:r}=t,{model:i}=a,{textures:l}=r.assets,p=Object.entries(l);if(null!=p&&p.length){var s=new e;s.name="textureGroup";var{target:n}=a.artifact.textures;p.forEach(((e,t)=>{var[a,r]=e,l=i.getObjectByName("".concat(n,"_").concat(t+1)),p=this.createPoints(r,l);s.add(p)})),i.add(s)}}createPoints(o,h){var d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1.0",{image:f}=o,{width:v,height:c}=f,u=new e;u.position.copy(h.position),u.rotation.copy(h.rotation),u.scale.copy(h.scale);for(var{ifx:x=.00125,ify:y=.00125,itx:m=-.4,ity:S=-.6,filterSize:g,minDepth:w,maxDepth:D,depthScale:z,depthThresholdFilter:F,scale:j,ptSize:A,pixelDepth:C}=this.shaderConfig,T={texImg:{type:"t",value:o},texSize:{type:"i2",value:[v,c]},iK:{type:"f4",value:[x,y,m,S]},alpha:{type:"f",value:d},filterSize:{type:"f",value:g},minDepth:{type:"f",value:w},maxDepth:{type:"f",value:D},depthThresholdFilter:{type:"f",value:F},scale:{type:"f",value:j},ptSize:{type:"f",value:(A*window.devicePixelRatio).toFixed(1).toString()},pixelDepth:{type:"f",value:C},depthScale:{type:"f",value:z}},b=new t({uniforms:T,side:a,transparent:!0,vertexShader:s,fragmentShader:n}),I=v/2*c,M=new Uint32Array(I),P=new Float32Array(I),U=0;U<I;U++)M[U]=U,P[U]=U;var O=new r;O.setAttribute("vertexIdx",new i(P,1)),O.setIndex(new l(new Uint32Array(M),1));var k=new p(O,b);return k.frustumCulled=!1,u.add(k),u}}export{o as default};
