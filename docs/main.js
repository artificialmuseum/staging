import{I as t,$ as e,F as i,_ as a,i as o,a as s,o as n,z as r,p as c,m as l,b as h,W as d,c as p,d as _,g as m,e as u,s as v,f as g,l as f,w,h as y,j as k,t as C,k as L,n as b,M as T,U as S,q as x,C as P,D as N,r as z,L as B,u as O,v as E,x as R,y as V,A as I,B as A,E as M,G as U,H as Z,J as F,K as j}from"./vendor.js";var X=t.extend({options:{html:!1,detail:"",className:"leaflet-marker-icon"},createIcon(){var{iconUrl:t,className:i}=this.options;return e.create("img",{className:"leaflet-marker-icon ".concat(i),src:t})},createShadow:()=>null}),D=t=>{var{map:i,artifact:a,XR:o=!1}=t;return p((function*(){var{Preload:t}=yield import("./Preload.js"),n=new t({artifact:a,root:d.ROOT_URL});e(".start-experience-button").forEach((t=>t.disabled=!0));var{locator:r}=i,c=-1;if(o)if(s.num(r.lat)&&s.num(r.lng))c=Math.floor(_(r,a));else try{var l=yield r.start(),{lat:h,lng:p}=l.latlng;c=Math.floor(_({lat:h,lng:p},a))}catch(t){c=1e3}var u=s.num(a.distance)?a.distance:m;if(s.num(r.accuracy)&&r.accuracy<200&&(u+=r.accuracy),a.featured||c<=u||!o)try{n._isWorking||(yield n.init({artifact:a,map:i,XR:o}),yield n.startEngine({artifact:a,map:i,XR:o}))}catch(t){t.toString().toLowerCase().includes("error creating webgl context")?n.showWebglDisabledNotification():console.error("onObjectClick preload.init failed",t)}else n.showTooFarNotification({distance:c,artifact:a,map:i,XR:o})}))},q=t=>{var{map:r,XR:p}=t,_=new i,m=new i,{artists:w=[],locations:y=[]}=d.APP_DB;return y.forEach((t=>{var{description:i,lat:y,lng:k,name:C,slug:L,logo:b,zoom:T=f,zIndexOffset:S}=t,x=d.APP_DB.artifacts.filter((t=>t.location===L)),P=x.length,N="";x.some((t=>t.featured))&&(N="featured");var z=b||"".concat(d.STATIC_URL,"/").concat(o.location.iconUrl(P)),B=new X(a(a({},o.location),{},{iconUrl:z,className:N})),O=e.create("div"),E=s.arr(C)&&C.map((t=>e.create("p",{innerText:t}))),R=s.str(C)&&C;e.create("h3",{children:E,innerText:R,parent:O});var V=e.create("div",{className:"description",parent:O}),I=i;"string"==typeof i?I=[I]:Array.isArray(i)||(I=!1),I&&I.forEach((t=>e.create("p",{innerText:t,parent:V}))),e.create("p",{className:"details",innerText:n(P),parent:O});var A={map:r,lat:y,lng:k,zoom:T,detail:L};e.create("button",{props:{type:"button"},innerText:g,className:"btn-".concat(C.replace(/ /gim,"-")," styled margin"),parent:O,on:{click:h(A)}});var M=c().setContent(O),U=l([y,k],{icon:B,title:C,zIndexOffset:S});U.bindPopup(M),U.slug=L,U.on("click",h(a(a({},A),{},{zoom:void 0}))),U.addTo(_),(t=>{var{artifacts:i,artifactLayer:n,map:r,XR:p}=t;i.forEach((t=>{var{artists:i,artists3d:_,exhibition:m,featured:g,lat:f,lng:w,name:y,slug:k,sound:C,zoom:L}=t,b="";m&&(b+=m),g&&(b+=" featured");var T=new X(a(a({},o.artifact),{},{iconUrl:"".concat(d.STATIC_URL,"/").concat(o.artifact.iconUrl),className:b})),S=e.create("div"),x=s.arr(y)&&y.map((t=>e.create("p",{innerText:t}))),P=s.str(y)&&y;if(e.create("h3",{children:x,innerText:P,parent:S}),i){var N=e.create("div",{parent:S});i.forEach((t=>{e.create("h4",{className:"artist",innerText:t,parent:N})}))}var z="".concat(d.STATIC_URL,"/object/").concat(t.preview||t.slug),B=e.create("source",{srcset:"".concat(z,".webp"),type:"image/webp"}),O=e.create("img",{loading:"lazy",src:"".concat(z,".jpg"),role:"presentation"});if(e.create("picture",{parent:S,children:[B,O],role:"presentation"}),_){var E=_.filter((t=>i.some((e=>e!==t))));if(E.length){var R=e.create("div",{className:"artists3d-container"});e.create("h4",{innerText:u,parent:R}),E.map((t=>e.create("p",{innerText:t,className:"artist 3d",parent:R}))).length&&e.append(R,S)}}if(C&&C!==i){var V=e.create("div",{className:"sound-container"});e.create("h4",{innerText:v,parent:V}),C.map((t=>e.create("p",{innerText:t,className:"artist 3d",parent:V}))).length&&e.append(V,S)}e.create("button",{className:"start-experience-button styled margin",innerText:"SHOW 3D EXPERIENCE",parent:S,on:{click:D({artifact:a({file:k},t),map:r,XR:p})}});var I=s.arr(y)?y.join(" "):y,A=l([f,w],{icon:T,title:I}),M=c({},A).setContent(S);A.bindPopup(M),A.addTo(n),A.slug=k,A.on("click",h({map:r,lat:f,lng:w,zoom:L,detail:k,popup:k}))}))})({artists:w,artifacts:x,artifactLayer:m,map:r,XR:p})})),{locationLayer:_,artifactLayer:m}},W=(t,i,a)=>{var o=t._controlCorners,s="leaflet-",n=t._controlContainer,r=s+i+" "+s+a;o[i+a]=e.create("div",{className:r,parent:n})},G=t=>{var{area:p,locator:_,XR:m}=t,u=a(a({maxBoundsViscosity:1,zoomSnap:1,zoomControl:!1,tap:w},p),{},{center:[p.lat,p.lng]}),v=y(L,u);(W(v,"top","center"),W(v,"bottom","center"),W(v,"center","left"),W(v,"center","right"),u.maxZoom!==u.minZoom)&&k.zoom({position:"bottomleft",zoomInText:'<img src="'.concat(d.STATIC_URL,'/button/plus.svg">'),zoomOutText:'<img src="'.concat(d.STATIC_URL,'/button/minus.svg">')}).addTo(v);v.attributionControl.setPrefix("");var g="".concat(d.MAP_URL,"/");if(p.region&&(g+="".concat(p.region,"/")),p.country&&(g+="".concat(p.country,"/")),p.slug&&(g+="".concat(p.slug,"/")),g="".concat(g,"{z}/{x}/{y}.png"),C(g,{attribution:b,subdomains:"123"}).addTo(v),k.scale({position:"topright"}).addTo(v),_.addTo(v),v.locator=_,"world"===p.slug){var f=(t=>{var{map:p}=t,_=new i,{cities:m}=d.APP_DB;return m.forEach((t=>{if(t.artifactCount&&!(t.artifactCount<=0)){var{description:i,lat:m,lng:u,name:v,slug:g,zIndexOffset:f}=t,w="".concat(d.STATIC_URL,"/map/marker/city.svg"),y=new X(a(a({},o.city),{},{iconUrl:w})),k=e.create("div"),C=s.arr(v)&&v.map((t=>e.create("p",{innerText:t}))),L=s.str(v)&&v;e.create("h3",{children:C,innerText:L,parent:k});var b=e.create("div",{className:"description",parent:k}),T=i;"string"==typeof i?T=[T]:Array.isArray(i)||(T=!1),T&&T.forEach((t=>e.create("p",{innerText:t,parent:b}))),e.create("p",{className:"details",innerText:n(t.artifactCount,"in this city."),parent:k}),e.create("a",{href:"/".concat(t.slug,"/"),class:"button styled margin",innerText:r,className:"btn-".concat(g," styled margin"),parent:k});var S=c().setContent(k),x=l([m,u],{icon:y,title:v,zIndexOffset:f});x.bindPopup(S),x.slug=g,x.on("click",h({map:p,lat:m,lng:u,zoom:p.getZoom()})),x.addTo(_)}})),_})({map:v});v.addLayer(f)}else{var{locationLayer:T,artifactLayer:S}=q({map:v,XR:m});v.addLayer(T),v.locationLayer=T,v.artifactLayer=S}return"ResizeObserver"in d&&new d.ResizeObserver((()=>v.invalidateSize())).observe(v._container),v},H=T.extend({initialize(t,e){S.setOptions(this,e),this._latlng=t,this.createIcon()},createIcon(){var t=this.options,e="";t.color&&(e+="stroke:"+t.color+";"),t.weight&&(e+="stroke-width:"+t.weight+";"),t.fillColor&&(e+="fill:"+t.fillColor+";"),t.fillOpacity&&(e+="fill-opacity:"+t.fillOpacity+";"),t.opacity&&(e+="opacity:"+t.opacity+";");var i=this._getIconSVG(t,e);this._locationIcon=x({className:i.className,html:i.svg,iconSize:[i.w,i.h]}),this.setIcon(this._locationIcon)},_getIconSVG(t,e){var i=t.radius,a=i+t.weight,o=2*a;return{className:"leaflet-control-locate-location",svg:'\n<svg width="'.concat(o,'" height="').concat(o,'" viewBox="-').concat(a," -").concat(a," ").concat(o," ").concat(o,'">\n  <circle r="').concat(i,'" style="').concat(e,'" />\n  <circle r="').concat(i,'" style="').concat(e,"; left: ").concat(a,"px; top: ").concat(a,'px;" />\n</svg>\n'),w:o,h:o}},setStyle(t){S.setOptions(this,t),this.createIcon()}}),J=P.extend({options:{position:"bottomleft",layer:void 0,setView:"untilPan",initialZoomLevel:16,getLocationBounds:t=>t.bounds,clickBehavior:{inView:"stop",outOfView:"setView",inViewNotFollowing:"inView"},returnToPrevBounds:!1,drawCircle:!0,drawMarker:!0,markerClass:H,circleStyle:{className:"leaflet-control-locate-circle",color:"#07fff5",fillColor:"#07fff5",fillOpacity:.1,weight:0},markerStyle:{className:"leaflet-control-locate-marker",color:"#07fff5",fillColor:"#07fff5",fillOpacity:1,weight:3,opacity:1,radius:9},followCircleStyle:{},followMarkerStyle:{},icon:"fa",iconLoading:"fa",circlePadding:[0,0],metric:!0,createButtonCallback(t,e){var i=N.create("a","",t);i.title=e.strings.title,i.role="button",i.href="#";var a=N.create("img","",i);return a.src="".concat(d.STATIC_URL,"/button/location.svg"),a.alt="",a.role="presentation",{link:i,icon:a}},onLocationError(){e.show("#locationError")},onLocationOutsideMapBounds(t){t.stop(),e.show("#locationOutsideBounds")},strings:{title:"Show me where I am",metersUnit:"meters",feetUnit:"feet",popup:"You are within {distance} {unit} from this point"},locateOptions:{maxZoom:Infinity,watch:!0,setView:!1,timeout:5e3}},initialize(t){for(var e in t)s.obj(this.options[e])?z(this.options[e],t[e]):this.options[e]=t[e];this._onLocationError=this._onLocationError.bind(this),this._onLocationFound=this._onLocationFound.bind(this),this.options.followMarkerStyle=z({},this.options.markerStyle,this.options.followMarkerStyle),this.options.followCircleStyle=z({},this.options.circleStyle,this.options.followCircleStyle)},onAdd(t){var e=N.create("div","leaflet-control-locate leaflet-bar leaflet-control");this._container=e,this._map=t,this._layer=this.options.layer||new B,this._layer.addTo(t),this._event=void 0,this._prevBounds=null;var i=this.options.createButtonCallback(e,this.options);return this._link=i.link,this._icon=i.icon,O.on(this._link,"click",O.stopPropagation).on(this._link,"click",O.preventDefault).on(this._link,"click",this._onClick,this).on(this._link,"dblclick",O.stopPropagation),this._resetVariables(),this._map.on("unload",this._unload,this),e},_onClick(){this._justClicked=!0;var t=this._isFollowing();if(this._userPanned=!1,this._userZoomed=!1,this._active&&!this._event)this.stop();else if(this._active&&void 0!==this._event){var e=this.options.clickBehavior,i=e.outOfView;switch(this._map.getBounds().contains(this._event.latlng)&&(i=t?e.inView:e.inViewNotFollowing),e[i]&&(i=e[i]),i){case"setView":this.setView();break;case"stop":this.stop(),this.options.returnToPrevBounds&&this._map.fitBounds.bind(this._map)(this._prevBounds)}}else this.options.returnToPrevBounds&&(this._prevBounds=this._map.getBounds()),this.start();this._updateContainerStyle()},start(){var t=this._activate();return this._event&&(this._drawMarker(this._map),this.options.setView&&this.setView()),this._updateContainerStyle(),t},stop(){this._deactivate(),this._cleanClasses(),this._resetVariables(),this._removeMarker()},stopFollowing(){this._userPanned=!0,this._updateContainerStyle(),this._drawMarker()},get position(){return this._marker?this._marker.getLatLng():[0,0]},_activate(){return new Promise(((t,e)=>{var i;this._active?t(this._event):(d.NAV.geolocation.getCurrentPosition((e=>this._onLocationFound(e,t)),(i=>this._onLocationError(i,t,e)),null===(i=this.options)||void 0===i?void 0:i.locateOptions),this._active=!0,this._map.on("dragstart",this._onDrag,this),this._map.on("zoomstart",this._onZoom,this),this._map.on("zoomend",this._onZoomEnd,this))}))},_deactivate(){this._map.stopLocate(),this._active=!1,this._map.off("dragstart",this._onDrag,this),this._map.off("zoomstart",this._onZoom,this),this._map.off("zoomend",this._onZoomEnd,this)},setView(){this._drawMarker(),this._isOutsideMapBounds()?(this._event=void 0,this.options.onLocationOutsideMapBounds(this)):this._justClicked&&!1!==this.options.initialZoomLevel?this._map.setView.bind(this._map)([this._event.latlng.lat,this._event.latlng.lng],this.options.initialZoomLevel):(this._ignoreEvent=!0,S.requestAnimFrame((()=>{this._ignoreEvent=!1}),this))},_drawMarker(){void 0===this._event.accuracy&&(this._event.accuracy=0);var t=this._event.accuracy,e=this._event.latlng;if(this.options.drawCircle&&t<100){var i=this._isFollowing()?this.options.followCircleStyle:this.options.circleStyle;this._circle?this._circle.setLatLng(e).setRadius(t).setStyle(i):this._circle=E(e,t,i).addTo(this._layer)}if(this.options.drawMarker){var a=this._isFollowing()?this.options.followMarkerStyle:this.options.markerStyle;this._marker?(this._marker.setLatLng(e),this._marker.setStyle&&this._marker.setStyle(a)):this._marker=new this.options.markerClass(e,a).addTo(this._layer)}},_removeMarker(){this._layer.clearLayers(),this._marker=void 0,this._circle=void 0},_unload(){this.stop(),this._map.off("unload",this._unload,this)},_onLocationError(t,e,i){3===t.code&&this.options.locateOptions.watch||(this.stop(),this.options.onLocationError(t,this),i(this))},findClosest(t){if(t.latlng){var{lat:i,lng:a}=t.latlng,{cities:o}=d.APP_DB;if(o){var s=R({lat:i,lng:a},o),n=_({lat:i,lng:a},s),r=d.store.getItem("popups",[]),c=d.location.pathname.startsWith("/".concat(s.slug,"/"));return n<V&&!c?(r.includes("inCity")||e.show("#inCity"),d.store.setItem("nearestCity",s.slug),s):void 0}}},_onLocationFound(t,e){var{latitude:i,longitude:a,accuracy:o}=t.coords;t.latlng={lat:i,lng:a},t.accuracy=o,this._active&&this.findClosest(t),this._event&&this._event.latlng.lat===i&&this._event.latlng.lng===a&&this._event.accuracy===o?e(t):this._active&&(this._event=t,this._drawMarker(),this._updateContainerStyle(),this._justClicked=!1,e(t))},_onDrag(){this._event&&!this._ignoreEvent&&(this._userPanned=!0,this._updateContainerStyle(),this._drawMarker())},_onZoom(){this._event&&!this._ignoreEvent&&(this._userZoomed=!0,this._updateContainerStyle(),this._drawMarker())},_onZoomEnd(){this._event&&!this._ignoreEvent&&this._marker&&!this._map.getBounds().pad(-.3).contains(this._marker.getLatLng())&&(this._userPanned=!0,this._updateContainerStyle(),this._drawMarker())},_isFollowing(){return!!this._active&&("always"===this.options.setView||("untilPan"===this.options.setView?!this._userPanned:"untilPanOrZoom"===this.options.setView?!this._userPanned&&!this._userZoomed:void 0))},_isOutsideMapBounds(){return void 0!==this._event&&(this._map.options.maxBounds&&!this._map.options.maxBounds.contains(this._event.latlng))},_updateContainerStyle(){this._container&&(this._active&&!this._event?this._setClasses("requesting"):this._isFollowing()?this._setClasses("following"):this._active?this._setClasses("active"):this._cleanClasses())},_setClasses(t){"requesting"===t?(this._container.classList.remove("active","following"),this._container.classList.add("requesting")):"active"===t?(this._container.classList.remove("requesting","following"),this._container.classList.add("active")):"following"===t&&(this._container.classList.remove("requesting"),this._container.classList.add("active","follwing"))},_cleanClasses(){this._container.classList.remove("requesting","active","following")},_resetVariables(){this._active=!1,this._justClicked=!1,this._userPanned=!1,this._userZoomed=!1}}),{webxrviewer:K,ios:Y,android:Q}=F;(function(){var t=p((function*(){(console.log("ios",Y,"android",Q,"navigator",navigator),Y||Q)&&(!1 in navigator&&new(yield import("./webxr-polyfill.js")));d.SUPPORTS=yield I();var{XR:t}=d.SUPPORTS;window.location.pathname.replace(/\//gim,"");var i,{city:o,world:s}=d.APP_DB;o?i=o:s?i=s:window.location.replace("/");var{lat:n=i.lat,lng:r=i.lng,zoom:c}=A(i),l=a(a({},i),{},{lat:n,lng:r,zoom:c}),h=new J(j),p=G({area:l,locator:h,XR:t});if(M(p),U(),Z(),K&&e("a").forEach((t=>{t.removeAttribute("target")})),"permissions"in d.NAV){var _=yield d.NAV.permissions.query({name:"geolocation"});_&&"granted"===_.state&&h.start()}}));return function(){return t.apply(this,arguments)}})()();
