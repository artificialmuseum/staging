import{as as e,aQ as a,a9 as s,ae as o,M as t,a7 as d,aw as n,aP as i}from"../vendor.js";class l{beforeLoadModel(l){var{preload:r}=l,{gltf:w,videoElement:m}=r.assets,{scene:p}=w,c=[0,1.2,0],b=new e(m),f=new a({map:b,side:s}),v=new o(.698,30,30),g=new t(v,f);g.position.set(...c),p.getObjectByName("bubble_reflect").position.set(...c);var j=new o(.699,30,30),u=new d({color:0,side:n}),M=new t(j,u);M.name="clip",M.material=u,M.position.set(...c);var h=new i;h.add(M),h.add(g),h.add(p),this.model=h}}export{l as default};
