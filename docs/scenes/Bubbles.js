import{aj as e,aE as a,a7 as s,ab as t,M as n,a5 as i,aq as o,aD as d}from"../vendor.js";class l{init(l){var{preload:r}=l,{gltf:m,videoElement:p}=r.assets,{scene:w}=m,c=[0,1.2,0],b=new e(p),v=new a({map:b,side:s}),f=new t(.698,30,30),j=new n(f,v);j.position.set(...c),w.getObjectByName("bubble_reflect").position.set(...c);var g=new t(.699,30,30),u=new i({color:0,side:o}),E=new n(g,u);E.name="clip",E.material=u,E.position.set(...c);var h=new d;h.add(E),h.add(j),h.add(w),this.model=h}}export{l as default};
