import{V as e,M as a,D as s,e as o,d as t,f as d,F as n,O as i}from"../vendor.js";class l{beforeLoadModel(l){var{preload:r}=l,{gltf:m,videoElement:p}=r.assets,{scene:w}=m,c=[0,1.2,0],f=new e(p),b=new a({map:f,side:s}),v=new o(.698,30,30),g=new t(v,b);g.position.set(...c),w.getObjectByName("bubble_reflect").position.set(...c);var j=new o(.699,30,30),u=new d({color:0,side:n}),M=new t(j,u);M.name="clip",M.material=u,M.position.set(...c);var O=new i;O.add(M),O.add(g),O.add(w),this.model=O}}export{l as default};
