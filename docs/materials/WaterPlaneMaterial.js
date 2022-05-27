import{S as e,_ as t,a8 as a,c as r,W as n,ae as i}from"../vendor.js";class u extends e{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t({uBaseTexture:{type:"t",value:null},uBaseSpeed:{type:"f",value:.5},uNoiseTexture:{type:"t",value:null},uNoiseScale:{type:"f",value:.2},uAlpha:{type:"f",value:.5},uTime:{type:"f",value:1},uRepeat:{type:"f",value:10}},e.uniforms),{side:n=a,transparent:i=!0,textureId:u=1}=e;super(t({uniforms:r,side:n,transparent:i,vertexShader:"\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n",fragmentShader:"\nuniform sampler2D uBaseTexture;\nuniform float uBaseSpeed;\nuniform sampler2D uNoiseTexture;\nuniform float uNoiseScale;\nuniform float uAlpha;\nuniform float uTime;\nuniform float uRepeat;\n\nvarying vec2 vUv;\n\nvoid main()  {\n  vec2 newUv = vUv * uRepeat;\n\tvec2 uvTimeShift = newUv + vec2(-0.7, 1.5) * uTime * uBaseSpeed;\n\tvec4 noiseGeneratorTimeShift = texture2D(uNoiseTexture, uvTimeShift);\n\tvec2 uvNoiseTimeShift = newUv + uNoiseScale * vec2(noiseGeneratorTimeShift.r, noiseGeneratorTimeShift.b);\n\tvec4 baseColor = texture2D(uBaseTexture, uvNoiseTimeShift);\n\n\tbaseColor.a = uAlpha;\n\tgl_FragColor = baseColor;\n}\n"},e)),this.textureId=u}preload(e){var t=this;return r((function*(){var{textureId:a}=t,[r,u]=yield Promise.all([e.promisifiedLoad({loader:e.textureLoader,file:"".concat(n.STATIC_URL,"/textures/waterplane/water_").concat(a,".jpg")}),e.promisifiedLoad({loader:e.textureLoader,file:"".concat(n.STATIC_URL,"/textures/waterplane/cloud_").concat(a,".png")})]);r.wrapT=r.wrapS=i,u.wrapT=u.wrapS=i,t.uniforms.uBaseTexture.value=r,t.uniforms.uNoiseTexture.value=u}))()}tick(e){this.uniforms.uTime.value+=e}}export{u as WaterPlaneMaterial};
