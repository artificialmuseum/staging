import{aj as e,aB as a,ak as t,a1 as i,M as n,aF as s}from"../vendor.js";class o{init(o){var{engine:r}=o,{artifact:d,videoElement:h}=r,{plane:m={}}=d,{width:w=1.66,height:l=3,widthSegments:g=32,heightSegments:p=50,position:v={x:0,y:1.5,z:-.5}}=m,{x:f=0,y:x=1.5,z:c=-.5}=v,j=new e(h);j.minFilter=a;var y=new t(d,j),z=new i(w,l,g,p),F=new n(z,y);F.position.set(f,x,c);var S=new s;S.add(F),this.model=S}}export{o as default};
