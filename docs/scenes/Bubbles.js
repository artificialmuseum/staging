import{at as e,aR as a,a9 as s,af as o,M as t,a7 as d,ax as n,aQ as i}from"../vendor.js";class l{beforeLoadModel(l){var{preload:r}=l,{gltf:m,videoElement:p}=r.assets,{scene:w}=m,c=[0,1.2,0],f=new e(p),b=new a({map:f,side:s}),v=new o(.698,30,30),g=new t(v,b);g.position.set(...c),w.getObjectByName("bubble_reflect").position.set(...c);var j=new o(.699,30,30),u=new d({color:0,side:n}),x=new t(j,u);x.name="clip",x.material=u,x.position.set(...c);var M=new i;M.add(x),M.add(g),M.add(w),this.model=M}}export{l as default};
