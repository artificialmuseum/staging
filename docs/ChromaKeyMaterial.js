import{S as e,C as a,L as t,_ as r,a7 as o}from"./vendor.js";class i extends e{constructor(e,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};super({depthTest:!1});var{range:v=.5,mult:l=7,chromaKey:m=54322}=e,s={range:parseFloat(v).toFixed(2)/1,mult:parseFloat(l).toFixed(2)/1,chromaKey:new a(m)};i.minFilter=t,i.magFilter=t,this.setValues(r(r({side:o},n),{},{transparent:!0,uniforms:{tex:{type:"t",value:i},chromaKey:{type:"c",value:s.chromaKey},range:{type:"f",value:s.range},mult:{type:"f",value:s.mult}},vertexShader:"#define GLSLIFY 1\nvarying vec2 vUv;void main(){vUv=uv;vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;}",fragmentShader:"#define GLSLIFY 1\nuniform sampler2D tex;uniform vec3 chromaKey;uniform float mult;uniform float range;varying vec2 vUv;void main(){vec3 tColor=texture2D(tex,vUv).rgb;float a=(length(tColor-chromaKey)-range)*mult;gl_FragColor=vec4(tColor,a);}"}))}}export{i as C};
