import{aj as t}from"./vendor.js";class n{constructor(n){this.config=t(n,{host:"127.0.0.1",port:8888,protocol:"ws",scene:void 0}),this.ws=void 0,this.tryConnectWaitTimeBase=500,this.tryConnectWaittime=500,this.tryConnect=this.tryConnect.bind(this),this.tryConnect()}tryConnect(){var{host:t,port:n,protocol:o,scene:s}=this.config;if(!this.ws)try{var e="".concat(o,"://").concat(t,":").concat(n);this.ws=new WebSocket(e),s.onOpen&&(this.ws.onopen=function(){return s.onOpen(...arguments)}),s.onMessage&&(this.ws.onmessage=function(){return s.onMessage(...arguments)}),s.onClose&&(this.ws.onclose=function(){return s.onClose(...arguments)})}catch(t){this.ws=void 0,console.error("Error connecting to websocket server:",t,"retrying in","".concat(this.tryConnectWaittime,"ms")),setTimeout(this.tryConnect,this.tryConnectWaittime),this.tryConnectWaittime+=this.tryConnectWaitTimeBase}}send(t){var n;null==this||null===(n=this.ws)||void 0===n||n.send(t)}close(){var t;null==this||null===(t=this.ws)||void 0===t||t.close()}}export{n as WS};
