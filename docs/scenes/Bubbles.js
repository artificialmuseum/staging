import{aq as e,aO as a,a9 as s,ae as o,M as t,a7 as d,au as n,aN as i}from"../vendor.js";class l{beforeLoadModel(l){var{preload:r}=l,{gltf:m,videoElement:p}=r.assets,{scene:w}=m,c=[0,1.2,0],b=new e(p),f=new a({map:b,side:s}),v=new o(.698,30,30),u=new t(v,f);u.position.set(...c),w.getObjectByName("bubble_reflect").position.set(...c);var g=new o(.699,30,30),j=new d({color:0,side:n}),M=new t(g,j);M.name="clip",M.material=j,M.position.set(...c);var N=new i;N.add(M),N.add(u),N.add(w),this.model=N}}export{l as default};
