import{ay as e,aL as a,aP as s,a6 as t,a0 as i,M as n,aO as d}from"../vendor.js";class o{beforeLoadModel(o){var{engine:l}=o,{videoElement:m}=l,{plane:p={}}=l.artifact,{width:r=3,height:c=1.66,widthSegments:h=50,heightSegments:w=32,displacementScale:g=1,position:v={x:0,y:1.5,z:-.5}}=p,{x:f=0,y:S=1.5,z:x=-.5}=v,y=new e(m);y.minFilter=a;var M=new s({map:y,displacementMap:y,displacementScale:g,side:t}),z=new i(r,c,h,w),L=new n(z,M);L.position.set(f,S,x);var b=new d;b.add(L),this.model=b}}export{o as default};
