import{c as t,W as r,n as a,$ as o,_ as i,T as e,w as n}from"./vendor.js";import{Preload as c}from"./Preload.js";import"./ChromaKeyMaterial.js";var l=function(){var l=t((function*(l){var{file:s,root:f}=l;r.SUPPORTS=yield a();var{XR:d}=r.SUPPORTS;r.SUPPORTS.WEBP=!1,r.SUPPORTS.WEBM=!1;var R=o("#show-artifact"),{default:m}=yield import("".concat(f,"/").concat(s)),p=i(i({},m),{},{city:""});o.on(R,"click",(r=>{var{artifact:a,map:i,root:n,XR:l=!1}=r;return t((function*(){var t=new c({artifact:a,root:n,THREE:e}),r=o("#show-artifact");r.disabled=!0;try{t._isWorking||(yield t.init({artifact:a,map:i,THREE:e,XR:l}),yield t.startEngine({artifact:a,map:i,THREE:e,XR:l}),r.disabled=!1)}catch(r){r.toString().toLowerCase().includes("error creating webgl context")?t.showWebglDisabledNotification():console.error("onButtonClick: preload.init failed",r)}}))})({artifact:p,root:f,XR:d})),n&&o("a").forEach((t=>{t.removeAttribute("target")}))}));return function(t){return l.apply(this,arguments)}}();export{l as sandbox};
