import{S as e,L as t,_ as r,C as o,a6 as a}from"../vendor.js";var i=e=>(parseFloat(e).toFixed(2)/1).toFixed(1).toString();class n extends e{constructor(e,n){var v=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{range:l=.5,mult:m=7,chromaKey:s=54322,chromaKeyDepthTest:u=!0}=e;super({depthTest:u}),n.minFilter=t,n.magFilter=t,this.setValues(r(r({side:a},v),{},{transparent:!0,uniforms:{tex:{type:"t",value:n},chromaKey:{type:"c",value:new o(s)},range:{type:"f",value:i(l)},mult:{type:"f",value:i(m)}},vertexShader:"#define GLSLIFY 1\nvarying vec2 vUv;void main(){vUv=uv;vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;}",fragmentShader:"#define GLSLIFY 1\nuniform sampler2D tex;uniform vec3 chromaKey;uniform float mult;uniform float range;varying vec2 vUv;void main(){vec3 tColor=texture2D(tex,vUv).rgb;float a=(length(tColor-chromaKey)-range)*mult;gl_FragColor=vec4(tColor,a);}"}))}}export{n as ChromaKeyMaterial};
