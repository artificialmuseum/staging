import{an as e,aF as a,aK as s,a8 as t,a2 as i,M as n,aJ as d}from"../vendor.js";class o{beforeLoadModel(o){var{engine:l}=o,{videoElement:m}=l,{plane:p={}}=l.artifact,{width:r=3,height:c=1.66,widthSegments:h=50,heightSegments:w=32,displacementScale:g=1,position:v={x:0,y:1.5,z:-.5}}=p,{x:f=0,y:S=1.5,z:x=-.5}=v,M=new e(m);M.minFilter=a;var y=new s({map:M,displacementMap:M,displacementScale:g,side:t}),z=new i(r,c,h,w),F=new n(z,y);F.position.set(f,S,x);var b=new d;b.add(F),this.model=b}}export{o as default};
