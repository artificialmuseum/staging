import{au as e,aN as a,aR as s,a9 as t,a3 as i,M as n,aQ as d}from"../vendor.js";class o{beforeLoadModel(o){var{engine:l}=o,{videoElement:m}=l,{plane:p={}}=l.artifact,{width:r=3,height:c=1.66,widthSegments:h=50,heightSegments:w=32,displacementScale:g=1,position:v={x:0,y:1.5,z:-.5}}=p,{x:f=0,y:S=1.5,z:x=-.5}=v,M=new e(m);M.minFilter=a;var u=new s({map:M,displacementMap:M,displacementScale:g,side:t}),y=new i(r,c,h,w),z=new n(y,u);z.position.set(f,S,x);var b=new d;b.add(z),this.model=b}}export{o as default};
