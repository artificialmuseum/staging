import{ak as e,L as t,aI as i,aJ as r,aK as a,S as o,a7 as s,aC as n,aL as h,aM as l,aE as d}from"../vendor.js";class c{constructor(e){var{artifact:t,$:i,W:r}=e;this.W=r,this.$=i;var{filterSize:a="1",minDepth:o="0.1",maxDepth:s="5.0",depthThresholdFilter:n="0.9",scale:h="7.0",ptSize:l=1,pixelDepth:d="2.0",permanentSeconds:c=[],useBone:p=!1,parentName:v="parent",playbackRate:f=1,loopVideo:u=!0,continueVideoSound:m=!1,useFog:x=!1,addFog:g=1e-4,fogColor:S=16448250,rotation:y={},videoAlpha:z=1,permanentAlpha:P=.1,hideModelsOnVideoEnded:D=[],addReflector:I=!1}=t;this.shaderConfig={filterSize:a,minDepth:o,maxDepth:s,depthThresholdFilter:n,scale:h,ptSize:(l*window.devicePixelRatio).toFixed(1).toString(),pixelDepth:d},this.permanentSeconds=c,this.currentSecondId=0,this.useBone=p,this.parentName=v,this.useFog=x,this.addFog=g,this.fogColor=S,this.loopVideo=u,this.continueVideoSound=m,this.hideModelsOnVideoEnded=D,this.addReflector=I,this.videoAlpha=z,this.permanentAlpha=P,this.rotation=y,this.playbackRate=f,this.hideCharacter=this.hideCharacter.bind(this)}init(a){var{engine:o,preload:s}=a;this.engine=o,this.preload=s;var{videoElement:n}=s.assets,{videoWidth:h,videoHeight:l}=n;if(n){n.playbackRate=this.playbackRate,this.modelsToHide=[],(this.hideModelsOnVideoEnded.length||!1===this.loopVideo)&&(this.$.on(n,"seeked",this.hideCharacter),this.hideModelsOnVideoEnded.forEach((e=>{var t=s.assets.gltf.scene.getObjectByName(e);t.material.transparent=!0,this.modelsToHide.push(t)})));var d=new e(n,{minFilter:t});this.pointCopies=[],this.canvases=[],this.permanentSeconds.forEach(((e,r)=>{var a=this.$.create("canvas",{height:l,width:h,style:{position:"fixed",left:"100vw"},parent:this.W.B});this.canvases.push(a);var s=new i(a,{minFilter:t}),n=this.createPoints(s,this.permanentAlpha);n.visible=!1,this.pointCopies.push(n),o.scene.add(n)}));var c=this.createPoints(d,this.videoAlpha),p=this.rotation;p.x&&c.rotateX(p.x),p.y&&c.rotateY(p.y),p.z&&c.rotateZ(p.z),this.useBone?this.child=c:this.model=c,this.useFog&&(this.fog=new r(this.fogColor,.005),this.engine.scene.fog=this.fog)}else console.error("videoElement not defined",{engine:o,preload:s})}hideCharacter(){this.hasTriggeredOnce?this.fadeOutModel=!0:this.hasTriggeredOnce=!0}createPoints(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1.0",{artifact:i={}}=this.engine,{videoElement:r}=this.preload,{videoWidth:c,videoHeight:p}=r,v=new a,{ifx:f=.00125,ify:u=.00125,itx:m=-.4,ity:x=-.6}=i,{filterSize:g,minDepth:S,maxDepth:y,depthThresholdFilter:z,scale:P,ptSize:D,pixelDepth:I}=this.shaderConfig,w=new o({uniforms:{texImg:{type:"t",value:e},texSize:{type:"i2",value:[c,p]},iK:{type:"f4",value:[f,u,m,x]},alpha:{type:"f",value:t},filterSize:{type:"f",value:g},minDepth:{type:"f",value:S},maxDepth:{type:"f",value:y},depthThresholdFilter:{type:"f",value:z},scale:{type:"f",value:P},ptSize:{type:"f",value:D},pixelDepth:{type:"f",value:I}},side:s,transparent:!0,vertexShader:"#define GLSLIFY 1\nattribute float vertexIdx;varying float vVertexIdx;varying vec2 vPtPos;uniform ivec2 texSize;uniform sampler2D texImg;uniform vec4 iK;uniform float scale;uniform float minDepth;uniform float maxDepth;uniform float pixelDepth;uniform int filterSize;uniform float ptSize;uniform float depthThresholdFilter;float rgb2hue(vec3 c){vec4 K=vec4(0.0,-1.0/3.0,2.0/3.0,-1.0);vec4 p=mix(vec4(c.bg,K.wz),vec4(c.gb,K.xy),step(c.b,c.g));vec4 q=mix(vec4(p.xyw,c.r),vec4(c.r,p.yzx),step(p.x,c.r));float d=q.x-min(q.w,q.y);float e=1.0e-10;return abs(q.z+(q.w-q.y)/(6.0*d+e));}float getPixelDepth(ivec2 pixel){vec2 lookupPt=(vec2(pixel)+vec2(0.5))/vec2(texSize);float hue=rgb2hue(texture2D(texImg,lookupPt).rgb);float pixelDepth=pixelDepth*hue;return pixelDepth;}bool shouldDiscard(ivec2 currPixel){float centerPixelDepth=getPixelDepth(currPixel);for(int i=-filterSize;i<=filterSize;i++){for(int j=-filterSize;j<=filterSize;j++){if(i==0&&j==0){continue;}float currDepth=getPixelDepth(currPixel+ivec2(j,i));if(currDepth<minDepth||currDepth>=maxDepth||abs(centerPixelDepth-currDepth)>depthThresholdFilter){return true;}}}return false;}void main(){ivec2 frameSize=ivec2(texSize.x/2,texSize.y);int vertIdx=int(vertexIdx);int actualNumPts=frameSize.x*frameSize.y;if(vertIdx>=actualNumPts){gl_Position=vec4(0.0);return;}int ptY=vertIdx/int(frameSize.x);int ptX=vertIdx-ptY*int(frameSize.x);ivec2 pt=ivec2(ptX,ptY);if(shouldDiscard(pt)){gl_Position=vec4(0.0);return;}float currDepth=getPixelDepth(pt);vec3 ptPos=scale*vec3((iK.x*float(ptX)+iK.z)*currDepth,(iK.y*float(ptY)+iK.w)*currDepth,-currDepth);vec4 mvPos=modelViewMatrix*vec4(ptPos,1.0);gl_Position=projectionMatrix*mvPos;vPtPos=vec2(float(ptX),float(ptY));vVertexIdx=vertexIdx;gl_PointSize=ptSize;}",fragmentShader:"#define GLSLIFY 1\nvarying float vVertexIdx;varying vec2 vPtPos;uniform ivec2 texSize;uniform sampler2D texImg;uniform float alpha;void main(){vec2 frameSizeF=vec2(texSize.x/2,texSize.y);ivec2 frameSize=ivec2(frameSizeF);int vertIdx=int(vVertexIdx);int actualNumPts=frameSize.x*frameSize.y;if(vertIdx>=actualNumPts){discard;}vec2 lookupPt=(vec2(vPtPos.x+frameSizeF.x,vPtPos.y)+vec2(0.5))/vec2(texSize);vec3 currColor=texture2D(texImg,lookupPt).rgb;gl_FragColor=vec4(currColor,alpha);}"}),F=c/2*p,b=new Uint32Array(F),C=new Float32Array(F),V=0;V<F;V++)b[V]=V,C[V]=V;var E=new n;E.setAttribute("vertexIdx",new h(C,1)),E.setIndex(new l(new Uint32Array(b),1));var T=new d(E,w);return T.frustumCulled=!1,v.add(T),v}exit(){this.$.remove(this.canvasImgs)}renderCopies(e){new Promise((t=>{var{videoElement:i}=e,{videoHeight:r,videoWidth:a}=i;if(this.waitForSecond){if(i.currentTime>this.waitForSecond){this.canvases[this.currentSecondId].getContext("2d").drawImage(i,0,0,a,r);var o=this.pointCopies[this.currentSecondId];o.visible=!0,this.child.matrixWorld.decompose(o.position,o.rotation,o.scale),this.currentSecondId++,this.waitForSecond=this.permanentSeconds[this.currentSecondId]}}else this.waitForSecond=this.permanentSeconds[this.currentSecondId];t()}))}render(e,t,i){var{engine:r}=i,{camera:a,renderer:o,scene:s}=r;if(this.currentSecondId<this.permanentSeconds.length&&this.renderCopies(r),this.fog&&this.addFog&&(this.fog.density+=this.addFog),this.fadeOutModel&&!this.hasFaded){this.modelsToHide.forEach((e=>{e.material.opacity>0?e.material.opacity-=.05:e.visible&&(e.visible=!1)}));var n=this.model||this.child;if(n&&n.visible){var h,l,d,c=null==n?void 0:n.children[0];(null==c||null===(h=c.material)||void 0===h||null===(l=h.uniforms)||void 0===l||null===(d=l.alpha)||void 0===d?void 0:d.value)>0?c.material.uniforms.alpha.value-=.05:n.visible&&(n.visible=!1,this.continuePlayingNonLoopedVideo&&this.preload.videoElement.pause())}}o.render(s,a)}}export{c as default};
