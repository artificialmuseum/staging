"use strict";function c(a,b){if(null==a)return{};var c,e,f=d(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(e=0;e<g.length;e++)c=g[e],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(f[c]=a[c])}return f}function d(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function e(a){return k(a)||j(a)||r(a)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function j(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function k(a){if(Array.isArray(a))return s(a)}function l(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function m(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?l(Object(b),!0).forEach(function(c){n(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):l(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function n(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function o(a,b){return u(a)||t(a,b)||r(a,b)||q()}function q(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(a,b){if(a){if("string"==typeof a)return s(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?s(a,b):void 0}}function s(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function t(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function u(a){if(Array.isArray(a))return a}function v(a){"@babel/helpers - typeof";return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},v(a)}var w=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2)]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=u(a.children[h]),c,d));return a.node=f},q=function(a){return null==a?null:a.key},r=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,s=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,s))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==s[A]&&o(c,A,n[A],s[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(v[x]);)r(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(v[z]);)r(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(v[x]=u(v[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(r(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(r(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?r(c,k&&k.node,null,v[x],f,g):(r(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},s=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},t=function(a){return"object"===v(a)?a:x(a)},u=function(b,c){return b.type===a?((!c||!c.lazy||s(c.lazy,b.lazy))&&((c=t(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(t(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=r(e.parentNode,e,h,h=t(d(b)),l)};o(a.init)}}}(),x=w.h,h=w.app,y=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===v(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return x(a,{},b);return x(a,b,d)}},z=y("a"),a=y("b"),b=y("br"),A=y("circle"),B=y("div"),C=y("footer"),D=y("g"),g=y("h1"),E=y("h2"),F=y("h3"),G=y("h4"),H=y("h5"),I=y("header"),J=y("i"),i=y("iframe"),K=y("img"),L=y("input"),M=y("li"),N=y("link"),O=y("main"),P=y("meta"),Q=y("nav"),R=y("p"),p=y("path"),S=y("script"),T=y("section"),U=y("span"),V=y("svg"),W=y("title"),X=y("ul"),Y=y("view"),Z={description:"THESYSTEM - August \u2013 Oktober 2020 - Yppenplatz 5, 1160 Wien",image:"https://thesystem.at/thesystem_preview_image.jpg",nospy:{show:!1},pageClass:"light",pages:{"/yppenplatz5/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/yppenplatz5/",title:"THESYSTEM",url:"/yppenplatz5/"},$={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},_=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[F(b?ja({to:b},i):i),h.map(function(c){var d=o(c,2),e=d[0],f=d[1];return f.map(function(c){return aa(m(m(m({},a),c.state),{},{name:c.name,link:b,day:e}))})})]},aa=function(a){return B([G([a.day,"-",a.month,"-",a.year," - ",ja({to:a.name},a.title)]),R(a.description)])},ba=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),B([E(c?ja({to:b},d):d),Object.entries(e[d]).map(function(c){var d=o(c,2),e=d[0],f=d[1];return _(m(m({},a),{},{month:e,days:f,link:b}))})])},ca=function(a){var b=a.img,c=a.description,d=a.exhibitionImages,f=void 0===d?[]:d,g=a.video,h=void 0!==g&&g,i=a.title,j=a.presents,k=a.photographer,l=void 0!==k&&k,m=a.id,n=void 0===m?"":m;return B({class:"ExhibitionWrapper",id:n},[B({class:"Dots"},[ta(),va(b)]),B({class:"sections"},[E(i),ua(j),T({class:"description"},c)]),f.length&&B({class:"imageWrapper"},[].concat(e(f.map(function(a){return ia(a)})),[h&&Da(h)])),l&&B({class:"photographer"},B(["Photos",h&&" / Video",": ",l]))])},da=function(){return ca({title:["fluesterkonus",b(),"inter.aktion"],id:"fluesterkonus",img:{src:"/yppenplatz5/thesystem-mariakoller-fluesterkonus.jpg",height:1200,width:800},exhibitionImages:[{src:"/yppenplatz5/exhibitions/fluesterkonus/thesystem-choramalik-fluesterkonus-01.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/fluesterkonus/thesystem-choramalik-fluesterkonus-02.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/fluesterkonus/thesystem-choramalik-fluesterkonus-03.jpg",height:1600,width:1200}],presents:{artists:"chora malik",collective:{text:"Setzkasten Wien",to:"https://setzkastenwien.at/"},date:["Performance","19.09.2020"]},description:["reflexionen isolierter stimmen einer sch\xF6nen neuen welt",b()," ganz nah",R({class:"subcredits",title:"Supported by Kultur Ottakring"},[ia("/social/ottakring-kultur.jpg"),ia("/social/ottakring-wappen.jpg")])],photographer:"TheSystemCollective"})},ea=function(a,b){return C({class:"Footer"},[F("Commissioned by:"),ja({title:"commissioned by k\xF6r",to:"https://koer.or.at"},[ia({class:"koer",alt:"k\xF6r",src:"https://static.thesystem.at/support/koer.svg",width:"255",height:"100"}),ia({class:"koer",alt:"wien kultur",src:"https://static.thesystem.at/support/wien-kultur.svg",width:"242",height:"100"})]),F("Support:"),ja({to:"https://usus.wien"},ia({title:"yppshop provided by usus.wien",src:"https://thesystem.at/yppenplatz5/social/usus.png",width:"80",height:"35"})),ja({to:"https://magic.github.io"},ia({title:"made with a few bits of magic",src:"https://thesystem.at/yppenplatz5/social/magic.png",width:"40",height:"35"})),b])},fa=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],d=a.logo,e=a.menu,f=a.logotext,g=c(a,["logo","menu","logotext"]);return d||e||f?I({class:"Header"},[(d||f)&&ka({root:g.root,theme:g.theme,img:d,text:f}),e&&ma({state:g,items:e}),b]):void 0},ga=function(){return ca({title:"HeartBreakHotel",id:"heartbreakhotel",img:{src:"/yppenplatz5/thesystem-dagmarrohm-heartbreakhotel.jpg",height:1020,width:1013},exhibitionImages:[{src:"/yppenplatz5/exhibitions/heartbreakhotel/thesystem-dagmarrohm-heartbreakhotel-01.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/heartbreakhotel/thesystem-dagmarrohm-heartbreakhotel-02.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/heartbreakhotel/thesystem-dagmarrohm-heartbreakhotel-03.jpg",height:900,width:1200}],presents:{artists:{text:"Dagmar Rohm",to:"http://www.dagmarrohm.at/"},collective:"Dachsbau",date:["Exhibition","14.08. \u2013 17.08.2020"]},description:["Series framing my work for de-colonialism. ","Colour is no available fund for distinguishing anything. ","What is prefered tells a story about the individual person and nothing else. ","Looking after historical perspectives is looking for unfairness. ","This work examines the beginning of Rock\u2018n Roll, which came out of the rhythm of Black music. ","It\u2018s Elvis, who won a \u201Egame\u201C, because he had the right colour of skin. ","The hidden winner could have been the black people, who still are persecuted by lot\u2018s of whites"," thinking, they\u2018ve got to fight a war, full of hostility."],video:"qwLkYQc8Pn0",photographer:"Walter Roschnik"})},ha=function(){return ca({title:"Fake Mirror",id:"fake-mirror",img:{src:"/yppenplatz5/thesystem-litto-thebody.jpg",height:900,width:1200},exhibitionImages:[{src:"/yppenplatz5/exhibitions/hrlitto/thesystem-mslitto-hrlitto-01.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/hrlitto/thesystem-mslitto-hrlitto-02.jpg",height:1600,width:1200},{src:"/yppenplatz5/exhibitions/hrlitto/thesystem-mslitto-hrlitto-03.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/hrlitto/thesystem-mslitto-hrlitto-04.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/hrlitto/thesystem-mslitto-hrlitto-05.jpg",height:1600,width:1200}],presents:{artists:[R(ja({text:"Ms. Litto",to:"https://litto.work"})),R("presents"),R(ja({to:"https://www.instagram.com/hr.litto/",text:"Hr. Litto"}))],collective:"Villa Schapira",date:["Performance","11.08.2020"]},description:["An AI, sourced from a drawing, tells us what it learned"," about material properties of the human body."],video:"Dy36d_cNQq4",photographer:"Sebastian Kreuzer & Marija Nujic"})},ia=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="",a.loading=a.loading||"lazy")),K(a)},ja=function(a){var b=a.to,d=a.action,e=void 0===d?Ga.go:d,f=c(a,["to","action"]),g=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],h=f.href,i=f.text,j=f.nofollow,k=f.noreferrer,l=c(f,["href","text","nofollow","noreferrer"]);b=b||h||"",l.href=b;var m="/"===b[0]||"#"===b[0];return m?l.onclick=[e,Fa.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),z(l,[i,g])},ka=function(a){var b=a.img,d=a.text,e=c(a,["img","text"]);return ja({to:e.root,class:"Logo"},[b&&ia(b),d&&U(d)])},la=function(){return ca({title:"Max Mustermann",id:"maxmustermann",img:{src:"/yppenplatz5/thesystem-noemikiss-maxmustermann.jpg",height:1200,width:842},presents:{artists:{text:"No\xE9mi Kiss",to:"http://www.noemikiss.at/"},collective:"Villa Schapira",date:["Exhibition","09.09. \u2013 13.09.2020"]},exhibitionImages:[{src:"/yppenplatz5/exhibitions/maxmustermann/thesystem-noemikiss-maxmustermann-01.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/maxmustermann/thesystem-noemikiss-maxmustermann-02.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/maxmustermann/thesystem-noemikiss-maxmustermann-03.jpg",height:900,width:1200}],description:["\"Ez a vil\xE1g olyan vil\xE1g, sokat ig\xE9r, keveset \xE1d\u2026\u201C"," (\"Was f\xFCr eine Welt ist diese Welt, die viel verspricht und wenig h\xE4lt\u2026\u201C)",b(),b()," Erf\xFCllen, sich bew\xE4hren, durchhalten aber auch sich durchsetzen, n\xFCtzlich, t\xFCchtig, brauchbar, f\xE4hig und bef\xE4higt sein:"," Das ist unsere t\xE4gliche Besch\xE4ftigung. Immer bestehen und nicht versagen zu d\xFCrfen macht m\xFCde."," Im Zwang uns den \xE4u\xDFeren Erwartungen anzupassen hoffen wir darauf, dass es uns besser geht. Wir wollen uns  besser f\xFChlen."," Die Vielfalt um uns herum ist vielversprechend und suggeriert die M\xF6glichkeit der freien Wahl. Doch gibt es \xFCberhaupt diese freie Wahl?"," Die Spezialisten der Macht weisen uns mit ihren Empfehlungen im Labyrinth der \"freien Wahl\" eine einzige Variante als Richtung vor."," Aus deren Angaben und Anleitungen entstehen dann die Richtlinien, Vorschriften, Instruktionen und Verordnungen."],photographer:"TheSystemCollective"})},ma=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,f=a.state,g=f.url,h=f.hash,i=f.root;return h&&!g.endsWith(h)&&(g+="#".concat(h)),Q({className:c},X(e.map(function(a){return na(m(m({},a),{},{url:g,root:i,collapse:void 0===d||d}))})))},na=function(a){var b=a.text,d=a.items,e=void 0===d?[]:d,f=a.url,g=a.root,h=a.parentTo,i=void 0===h?void 0:h,j=a.collapse,k=c(a,["text","items","url","root","parentTo","collapse"]),l={class:{}},n=k.to;g&&n.startsWith("/")&&(n=n.substr(1));var o=k.to[0];i&&("-"===o||"#"===o)&&(n=i+n);var p=n.startsWith(g);g&&("/"===o||"-"===o||"#"===o)&&!p&&(n=g+n),k.to=n.replace(/\/\//g,"/"),k.to===f&&(l["class"].active=!0);var q=[],r=f.startsWith(k.to)||!j;return r&&e.length&&(q=X(e.map(function(a){return na(m({parentTo:k.to,url:f,root:g,collapse:j},a))}))),M(l,[k.to?oa(k,b):U(k,b),q])},oa=function(a,b){return ja(a,b)},pa=function(){return ca({title:["WILLKOMMEN IN DER",b(),"METZGEREI MOPS!"],id:"metzgereimops",img:{src:"/yppenplatz5/thesystem-zirkusmops-familiemops.jpg",height:640,width:718},exhibitionImages:[{src:"/yppenplatz5/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-01.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-02.jpg",height:1600,width:1200},{src:"/yppenplatz5/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-03.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-04.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-05.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-06.jpg",height:1600,width:1200},{src:"/yppenplatz5/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-07.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/metzgereimops/thesystem-zirkusmops-metzgereimops-08.jpg",height:1600,width:1200}],photographer:"TheSystemCollective",presents:{artists:"Familie Mops",collective:{text:"Zirkus Mops",to:"http://www.mysoundofmusic.at/"},date:["Exhibition","22.09. \u2013 14.10.2020"]},description:["Unser Traditionshaus produziert feinste Fleisch und Wurstwaren nach eigenen Familienrezepten."," Wir verarbeiten ausschlie\xDFlich Fleisch von seltenen Wildtierarten."," Ob saftigen Beinschinken, gut durchzogenes T-Bone Steak oder feinsten Filetspitz \u2013"," genie\xDFen Sie exklusive Gaumenfreuden bis zum letzten Bissen."," Eine besondere Spezialit\xE4t des Hauses ist unsere ber\xFChmte Lemurenwurst,"," die schon Erzherzog Franz Joseph Karl I. Kaiser von \xD6sterreich zu sch\xE4tzen wusste."," Nur f\xFCr kurze Zeit am Yppenplatz 5."]})},qa=function(a){var b=a.nospy,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Notice":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.buttonText,l=void 0===k?"Awesome!":k;return f?B({class:"NoSpy"},[B({class:"Container"},[h&&F(h),j&&R(j),L({onclick:Ga.nospy.toggle,value:l,type:"button"})])]):B({class:"NoSpy"},V({class:"icon",onclick:Ga.nospy.toggle,width:"25",height:"25",viewBox:"0 0 512 512"},[D([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),A({cx:"192",cy:"128",r:"32"}),A({cx:"128",cy:"256",r:"32"}),A({cx:"288",cy:"384",r:"32"}),A({cx:"272",cy:"272",r:"16"}),A({cx:"400",cy:"336",r:"16"}),A({cx:"176",cy:"368",r:"16"})])]))},ra=function(a,b){var c=a.page,d=a.state,e={id:"Magic",class:d.pageClass};return O(e,B({class:{Wrapper:!0}},[fa(d),B({class:"Page",id:"page"},c(d)),ea(d),b]))},sa=function(){return B({class:"Phase1"},B([B({class:"address"},[E("Phase.1: Source"),R("Yppenplatz 5"),R("1160 Wien"),R("11.08. - 14.10.2020")]),ia({src:"/yppenplatz5/auslage.jpg",height:"709",width:"1200"})]))},ta=function(){return B({class:"Polkadot"})},ua=function(a){a.artists&&!Array.isArray(a.artists)&&(a.artists=[a.artists]);var b=a.artists,c=void 0===b?[]:b,d=a.collective,e=a.date,f=a.type;return T({class:"presents"},[0<c.length&&F(c.map(function(b){return b.to?ja(b):b})),d&&G(d.to?ja(d):d),f&&R(f),e&&Array.isArray(e)?e.map(function(a){return R(a)}):R(e)])},va=function(a){return ia(m({class:"PreviewImage"},a))},wa=function(){return ca({title:"System, Struktur & DeFragmentierung",id:"system-struktur-defragmentierung",img:{src:"/yppenplatz5/thesystem-sandkasten-syndikat.jpg",height:1380,width:1080},exhibitionImages:[{src:"/yppenplatz5/exhibitions/sandkasten/thesystem-sandkastensyndikat-01.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/sandkasten/thesystem-sandkastensyndikat-02.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/sandkasten/thesystem-sandkastensyndikat-03.jpg",height:1600,width:1200},{src:"/yppenplatz5/exhibitions/sandkasten/thesystem-sandkastensyndikat-04.jpg",height:1600,width:1200},{src:"/yppenplatz5/exhibitions/sandkasten/thesystem-sandkastensyndikat-05.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/sandkasten/thesystem-sandkastensyndikat-06.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/sandkasten/thesystem-sandkastensyndikat-07.jpg",height:900,width:1200}],presents:{artists:[R("System // "),R("Markus Liszt"),R("Struktur // "),R(ja({text:"Miss Bubblebliss aka Stephanie Krawinkler",to:"http://missbubblebliss.at"})),R("DeFragmentierung\xA0// "),R(ja({text:"elet aka. Je.Jesch",to:"https://elet.cc/"}))],collective:{text:"Sandkasten Syndikat",to:"https://www.facebook.com/sandkastensyndikat/"},date:["Exhibition","26.08. \u2013 30.08.2020"]},description:[R(["Konstruktion, Scan, Reflektion, Verortung und Zerlegung"," von K\xF6rpern und Objekten im Raum"," an analogen und digitalen Schnittstellen."]),R("Zahlenrhythmik mit Seife gespiegelt und in Licht zerlegt.\xA0")],video:"eERg-H03cvY",photographer:"Sandkasten Syndikat & TheSystemCollective"})},xa=function(){return ca({title:"SETZKASTEN X TheSystem",id:"setzkasten",img:{src:"/yppenplatz5/thesystem_setzkastenwien.jpg",height:1e3,width:667},exhibitionImages:[{src:"/yppenplatz5/exhibitions/setzkasten/thesystem-setzkasten-01.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/setzkasten/thesystem-setzkasten-02.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/setzkasten/thesystem-setzkasten-03.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/setzkasten/thesystem-setzkasten-04.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/setzkasten/thesystem-setzkasten-05.jpg",height:1600,width:1200},{src:"/yppenplatz5/exhibitions/setzkasten/thesystem-setzkasten-06.jpg",height:1600,width:1200}],presents:{artists:[R("Stefan Voglsinger"),R("TURBO SUPER, 2061 / Installation"),b(),R("Patrick K.-H. & bestbefore/Andreas Karaoulanis"),R("EuLowGui, 2020 |  Video Screening"),b(),R("Guillermo Tellechea | Projektion"),b(),R("chora malik | Performance")],collective:{text:"Setzkasten Wien",to:"https://setzkastenwien.at/"},date:["Performances","14.09. \u2013 19.9.2020"]},description:["\xDCber die Woche verteilt bespielen K\xFCnstlerInnen aus dem Umfeld des Setzkasten"," Wien die Auslage am Yppenplatz 5 mit immersiven Performances, Videoarbeiten"," und Skulpturen. TheSystem wird zum wachsenden Labor und ist transformierende"," Installation und performativer Arbeitsraum zugleich."],photographer:"TheSystemCollective"})},ya=function(a){var c=a.subTitle;return g({class:"Slogan"},[R(["THE",b(),"SYSTEM"]),R(c)])},za=function(){return ca({title:"Systeme & Menschen",id:"systeme-und-menschen",img:{src:"/yppenplatz5/thesystem-stizz-systemeundmenschen.jpg",height:1200,width:900},exhibitionImages:[{src:"/yppenplatz5/exhibitions/systemeundmenschen/thesystem-stizz-systemeundmenschen-01.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/systemeundmenschen/thesystem-stizz-systemeundmenschen-02.jpg",height:675,width:1200},{src:"/yppenplatz5/exhibitions/systemeundmenschen/thesystem-stizz-systemeundmenschen-03.jpg",height:900,width:1200}],presents:{artists:{text:"Stefan St\xFCrzer",to:"https://absturz.info"},collective:"Villa Schapira",date:["Exhibition","1.09. \u2013 7.09.2020"]},description:["Wir leben in einer Zeit in der Menschen"," viel zu oft f\xFCr die Erhaltung von Systemen arbeiten."," Systeme die von Menschen erfunden wurden!"," Systeme sollten eigentlich f\xFCr die Menschen existieren und nicht umgekehrt."," Eine philosophische Auseinandersetzung."],video:"grRgMJi3htE",photographer:"TheSystemCollective"})},Aa=function(){return ca({title:"TheSystem: garden",id:"thegarden",img:{src:"/yppenplatz5/thesystem-thegarden.jpg",height:676,width:1200},exhibitionImages:[{src:"/yppenplatz5/exhibitions/thegarden/thesystem-thegarden-01.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/thegarden/thesystem-thegarden-02.jpg",height:676,width:1200}],presents:{artists:[R(ja({text:"WARBLAYDR",to:"https://soundcloud.com/ibisum/tracks"})),R(U(" & ")),R(ja({text:"meks",to:"https://soundcloud.com/user-945933947"}))],collective:"Villa Schapira",date:["Performance","11.08.2020"]},description:["cultivating heritage computing for the kids of the future. ",ja({text:"live recordings on soundcloud",to:"https://soundcloud.com/ibisum/tracks"})],photographer:"Sebastian Kreuzer"})},Ba=function(){return ca({title:"The Wound",id:"thewound",img:{src:"/yppenplatz5/thesystem-selinanowak-thewound.jpg",height:1200,width:1600},exhibitionImages:[{src:"/yppenplatz5/exhibitions/thewound/thesystem-selinanowak-thewound-01.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/thewound/thesystem-selinanowak-thewound-02.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/thewound/thesystem-selinanowak-thewound-03.jpg",height:800,width:1200},{src:"/yppenplatz5/exhibitions/thewound/thesystem-selinanowak-thewound-04.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/thewound/thesystem-selinanowak-thewound-05.jpg",height:800,width:1200},{src:"/yppenplatz5/exhibitions/thewound/thesystem-selinanowak-thewound-06.jpg",height:800,width:1200}],presents:{artists:"Selina Nowak",collective:{text:"Zirkus Mops",to:"http://www.mysoundofmusic.at/"},type:"Installation",date:"19.08. \u2013 23.08.2020"},description:[R("A wormhole into the future"),R("An echo in the empty space"),R("A shrine to meditate over what's left"),R("After the anthropocene")],video:"OviYhQ_Lo2Y",photographer:"Nikolai Haller & TheSystemCollective"})},Ca=function(){return B({class:"VideoContainer"},[Da({src:"d-cfixGDwNQ"})])},Da=function(a,b){"object"!==v(a)&&(a={src:a}),a.src||"string"!=typeof b||(a.src=b);var d=a,e=d.src,f=d.width,g=d.height,h=d["class"],j=void 0===h?"VideoEmbed":h,k=d.style,l=d.host,n=c(d,["src","width","height","class","style","host"]);if(e){j.includes("VideoEmbed")||(j="VideoEmbed ".concat(j)),parseInt(e)===parseInt(e)?e="https://player.vimeo.com/video/".concat(e):!e.startsWith("http")&&(e="https://www.youtube-nocookie.com/embed/".concat(e)),g&&(k=k||{},k.height=g),f&&(k=k||{},k.width=f);var o={class:j};return k&&(o.style=k),B(o,i(m(m({frameborder:0,allow:"encrypted-media",allowfullscreen:""},n),{},{src:e})))}},Ea=function(){return ca({title:"\"Work\"",id:"work",img:{src:"/yppenplatz5/thesystem-zirkusmops-work.jpg",height:1200,width:1028},presents:{artists:[[R(ja({text:"Marco Otoya",to:"https://culturaespiral.com/marco-otoya/"}))],[R(ja({text:"Adam\xA0Lebesm\xFChlbacher",to:"http://www.mysoundofmusic.at/"}))],[R(ja({text:"Sebastian Schmid",to:"https://zirkusabnormal.at/"}))]],collective:"Villa Schapira",date:["Exhibition","3.09. \u2013 7.09.2020"]},exhibitionImages:[{src:"/yppenplatz5/exhibitions/work/thesystem-zirkusmops-work-01.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/work/thesystem-zirkusmops-work-02.jpg",height:679,width:1200},{src:"/yppenplatz5/exhibitions/work/thesystem-zirkusmops-work-03.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/work/thesystem-zirkusmops-work-04.jpg",height:1600,width:1200},{src:"/yppenplatz5/exhibitions/work/thesystem-zirkusmops-work-05.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/work/thesystem-zirkusmops-work-06.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/work/thesystem-zirkusmops-work-07.jpg",height:900,width:1200},{src:"/yppenplatz5/exhibitions/work/thesystem-zirkusmops-work-08.jpg",height:1600,width:1200}],description:["Die Routine, die sich wiederholt, die Monotonie, die im Leben und in der Arbeit ","Automatismus generiert, die aber notwendig in unserem Leben ist. Wie kann uns die ","Angst vor einem Risiko und vor einer \xC4nderung paralysieren? Kann die Routine uns in ","ein M\xF6belst\xFCck verwandeln? Ist die Routine etwas positives oder nicht, oder aber ","k\xF6nnten wir die Routine \xE4ndern oder transformieren? Oder besser nicht?",b(),b(),R("Musik: Nyman: Double Concerto For Saxophone & Cello - Mvt.5"),R("John Harle, Julian Lloyd Webber, Michael Nyman: Philharmonia Orchestra")],video:"tzPXBR5AYJs",photographer:"Kris Kalika & TheSystemCollective"})},Fa={preventDefault:function preventDefault(a){return a.preventDefault(),a}},Ga={go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=o(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return h&&(window.location.hash=h),a;var i=window,j=i.scrollY,k=a.pages&&a.pages[f]&&a.pages[f].title;if(k&&(document.title=a.title=k),f===a.url)window.location.hash=h;else if(!h){var l=document.getElementsByTagName("html"),n=o(l,1),p=n[0],q=p.style.scrollBehavior;p.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"smooth"}),p.style.scrollBehavior=q}return window.history.pushState({url:f,hash:h,scrollY:j},a.title,c),m(m({},a),{},{url:f,hash:h,prev:a.url})},nospy:{toggle:function toggle(a){return a.nospy.show=!a.nospy.show,m({},a)}},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f,behavior:"smooth"}),m(m({},a),{},{url:d,hash:e})}},Ha={"/yppenplatz5/":function yppenplatz5(b){return[B({class:"PageHeader"},[Ca(b),ya({subTitle:"Collective"})]),B({class:"manifest"},[R([J("TheSystemCollective")," is a syndicate of independent"," artists, makers, programmers, engineers, philosophers, activists, and scientists,"," collectively using art and technology to transform our world."," We believe in a literal definition of \"open source\","," and convert public spaces into a museum, ready for artists to freely position their art."]),R("Our method is an intermixture of universes, physical, virtual and imaginary."),R(J("We don't need space, time is irrelevant, objects stay as useful as the user.")),R(["TheSystem is a time space continuum made ",a("manifest"),", using technology to make gps-anchored art accessible to everyone, both at home and abroad."]),R(["Involved collectives:"," Dachsbau, Sandkasten Syndikat, Setzkasten Wien, Zirkus Mops, Villa Schapira."])]),sa(),B({class:"month-title"},"Exhibitions"),pa(),xa(),da(),la(),Ea(),za(),wa(),Ba(),ga(),ha(),Aa(),B({class:"manifest"},[F("Phase.1 - Manifestation in physical space"),R(["In August and September of 2020,"," Phase.1 of \"TheSystem\" manifested itself on the Yppenplatz in Vienna, Austria."]),R(["20 artists, representing 5 collectives"," (Sandkasten Syndikat, Villa Schapira, Zirkus Mops, Setzkasten, Dachsbau)"," performed and/or exhibited in those two months."]),R("The artists showed paintings, multimedia installations, sculptures, and audio-visual concepts."),F("Phase.2 - Manifestation in the virtual world / Artificial Museum"),R(["The second part of \"TheSystem\" is the connection between physical, digital, and imaginary worlds,"," transforming the analog art exhibited in Phase.1 into digital experiences."]),R(["These \"augmented\" artworks will form the foundation of an Artificial Museum,"," allowing artists to bridge the chasm between their art and the evolving digitized world around them."]),R(["The Artificial Museum is connected to the real world through a web-based augmented reality application - ",ja({to:"https://thesystem.at",text:"TheSystem.at"})]),H([R(["Concept and Organisation: ",ja({text:"Litto / Daniela Weiss",to:"https://litto.work"})]),R(["Development: ",ja({text:"Jascha Ehrenreich",to:"https://jaeh.at"})])])])]},"/yppenplatz5/404/":function yppenplatz5404(){return B("404 - not found.")}};h({init:m(m({},Z),{},{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:function subscriptions(){return[[$.listenPopState,Ga.pop]]},view:function(a){var b=Ha[a.url]?a.url:"/404/",c=Ha[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.url=b,ra({page:c,state:a},qa(a))},node:document.getElementById("Magic")});