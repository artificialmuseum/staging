import{E as t,y as i,C as s,x as h}from"../vendor.js";class a{constructor(t){var{artifact:i}=t,{lightDistance:s=.45,yOffset:h=1.45,showLights:a=i.showLights}=i;this.lightDistance=s,this.yOffset=h,this.showLights=a}afterLoadModel(t){var{engine:i}=t,{model:s}=i;this.pointLight=this.createLight(16733525),s.add(this.pointLight),this.pointLight2=this.createLight(11184895),s.add(this.pointLight2)}createLight(a){var e=new t(a,1,1);if(e.castShadow=!0,e.shadow.camera.near=.1,e.shadow.camera.far=5,this.showLights){var o=new i(.005,6,6),n=new s({color:a}),r=new h(o,n);e.add(r)}return e}tick(t){var{timestamp:i}=t,s=this.lightDistance,h=5e-4*i,a=Math.sin(h)*s,e=Math.sin(1.1*h)*s+this.yOffset,o=Math.sin(1.2*h)*s;this.pointLight.position.set(a,e,o);var n=h+1e4,r=M.sin(n)*s,g=M.sin(1.1*n)*s+this.yOffset,c=M.sin(1.2*n)*s;this.pointLight2.position.set(r,g,c)}}export{a as default};
