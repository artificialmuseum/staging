import{S as e,aj as a,D as t}from"../vendor.js";class i extends e{constructor(e){var i=a(e.config,{resolution:{x:512,y:512},startTime:0});super({transparent:!0,side:t,uniforms:{uTime:{value:i.startTime,type:"f"},uRes:{value:i.resolution,type:"f2"}},fragmentShader:"#ifdef GL_ES\nprecision mediump float;\n#define GLSLIFY 1\n#endif\nuniform float uTime;uniform vec2 uRes;\n#define iterations (14)\n#define formuparam (0.53)\n#define uTime (cos(uTime * 0.2))\n#define volsteps (18)\n#define stepsize (0.2)\n#define zoom (0.8)\n#define tile (0.85)\n#define speed (0.00001)\n#define brightness (0.00045)\n#define darkmatter (0.4)\n#define distfading (0.76)\n#define saturation (0.8)\nvoid main(void){vec2 uv=gl_FragCoord.xy/uRes.xy;uv.y*=uRes.y/uRes.x;vec3 dir=vec3(uv*zoom,tan(0.3)*1000.0);float a2=speed+0.5;float a1=0.0;mat2 rot1=mat2(cos(a1),tan(a1),-sin(a1),cos(a1));mat2 rot2=rot1;dir.xz*=rot1;dir.xy*=rot2;vec3 from=vec3(0.0,0.0,0.0);from+=vec3((tan(0.15),0.152-2.0));from.xz*=rot1;from.xy*=rot2;float s=0.4;float fade=0.2;vec3 v=vec3(0.8);for(int r=0;r<volsteps;r++){vec3 p=from+s*dir*0.5;p=abs(vec3(tile)-mod(p,vec3(tile*2.0)));float pa=0.0;float a=0.0;for(int i=0;i<iterations;i++){p=abs(p)/dot(p,p)-formuparam*(abs(sin(uTime/5.0))+0.6);a+=abs(length(p)-pa);pa=length(p);}float dm=max(0.0,darkmatter-a*a*tan(0.001));a*=a*a*2.0;if(r>3){fade*=1.0-dm;}v+=fade;v+=vec3(s*s,s*s*s,s*s*s*s)*a*brightness*fade;fade*=distfading/1.2;s+=stepsize;}v=mix(vec3(length(v)),v,saturation);gl_FragColor=vec4(v*0.01,2.0);}"})}}export{i as default};
