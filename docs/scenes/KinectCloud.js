import{c as n,ao as o,aG as a,aH as e,aI as t,S as i,a9 as r,aJ as l,aK as p}from"../vendor.js";class s{constructor(n){var{artifact:o}=n;this.alpha=o.alpha}beforeLoadModel(s){var v=this;return n((function*(){var{preload:n}=s,{videoElement:f}=n.assets,c=new o(f);c.minFilter=a;for(var h=800,m=new e,d=new Float32Array(144e4),g=0,u=0;g<d.length;g+=3,u++)d[g]=u%h,d[g+1]=Math.floor(u/h);m.setAttribute("position",new t(d,3));var w=new i({uniforms:{map:{value:c},width:{value:h},height:{value:600},nearClipping:{value:2},farClipping:{value:5},pointSize:{value:3},zOffset:{value:0}},vertexShader:"\nuniform sampler2D map;\n\nuniform float width;\nuniform float height;\nuniform float nearClipping, farClipping;\n\nuniform float pointSize;\nuniform float zOffset;\n\nvarying vec2 vUv;\n\nconst float XtoZ = 1.11146;\nconst float YtoZ = 0.83359;\n\nvoid main() {\n  vUv = vec2(position.x / width, position.y / height);\n\n  vec4 color = texture2D( map, vUv );\n  float depth = (color.r + color.g + color.b) / 3.0;\n\n  float z = (1.0 - depth) * (farClipping - nearClipping) + nearClipping;\n\n  vec4 pos = vec4(\n    (position.x / width - 0.5) * z * XtoZ * 2.0,\n    (position.y / height - 0.5) * z * YtoZ * 2.0,\n    - z + zOffset,\n    1.0);\n\n  gl_PointSize = pointSize;\n  gl_Position = projectionMatrix * modelViewMatrix * pos;\n}\n",fragmentShader:"\nuniform sampler2D map;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 color = texture2D(map, vUv);\n  gl_FragColor = vec4(color.r, color.g, color.b, 1);\n}\n"});v.alpha&&(w.blending=r,w.depthTest=!1,w.depthWrite=!1,w.transparent=!0);var z=new l(m,w);z.position.set(0,.5,0);var x=new p;x.add(z),v.model=x}))()}}export{s as default};
