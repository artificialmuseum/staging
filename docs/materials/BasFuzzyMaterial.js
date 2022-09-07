import{V as e,b7 as r,M as t,b8 as a,F as n,b9 as o,aP as s}from"../vendor.js";var i=new e(0,1,0),u=new e,m=new r;class l extends t{constructor(e){super(e);var r=20,o=.1,s=.5,l=1,c=1,f=2,d=.2,v=1.5,g=2,h=4,b=e.positions,p=new a(o,r,4,16,!0);p.translate(0,.5*r,0);var x=new BAS.PrefabBufferGeometry(p,b.length);this.totalDuration=l+s,x.createAttribute("anim",2,((e,r)=>{var t=b[r];e[0]=n.mapLinear(t.y,4,-4,0,s)*n.randFloat(.9,1),e[1]=l})),x.createAttribute("bounce",2,(e=>{e[0]=n.randFloat(c,f),e[1]=n.randFloat(d,d)})),x.createAttribute("startPosition",3,((e,r)=>{b[r].toArray(e)})),x.createAttribute("rMin",4,((e,r)=>{u.copy(b[r]),u.x+=n.randFloatSpread(v),u.y+=n.randFloatSpread(v),u.z+=n.randFloatSpread(v),u.normalize(),m.setFromUnitVectors(i,u),m.toArray(e)})),x.createAttribute("rMax",4,((e,r)=>{u.copy(b[r]),u.x+=n.randFloatSpread(v),u.y-=n.randFloat(g,h),u.z+=n.randFloatSpread(v),u.normalize(),m.setFromUnitVectors(i,u),m.toArray(e)}));var y=new BAS.StandardAnimationMaterial({flatShading:!0,uniformValues:{metalness:.5,roughness:1},uniforms:{time:{type:"f",value:numberToUniformFloat(0)},hairLength:{type:"f",value:numberToUniformFloat(r)}},vertexParameters:"\n      uniform float time;\n      uniform float hairLength;\n\n      attribute vec2 anim;\n      attribute vec2 bounce;\n\n      attribute vec3 startPosition;\n\n      attribute vec4 rMin;\n      attribute vec4 rMax;\n    ",varyingParameters:"\n      varying float vProgress;\n      varying float vY;\n    ",vertexFunctions:[BAS.ShaderChunk.ease_back_out,BAS.ShaderChunk.ease_elastic_out,BAS.ShaderChunk.ease_expo_out,BAS.ShaderChunk.quaternion_rotation],vertexPosition:"\n      float progress = clamp(time - anim.x, 0.0, anim.y) / anim.y;\n\n      float bounceProgress = easeElasticOut(progress, bounce.x, bounce.y);\n      // float bounceProgress = easeBackOut(progress, bounce.x * 2.0);\n      float growProgress = easeExpoOut(progress);\n      float frc = position.y / hairLength;\n\n      vY = frc;\n      vProgress = growProgress;\n\n      transformed.xz *= growProgress;\n\n      // doesn't work with fuzz + overshoot ease, but mey give better results\n      // vec4 r = mix(rMin, rMax, frc * bounceProgress);\n      // transformed = rotateVector(r, transformed);\n\n      // other method\n      vec3 pMin = rotateVector(rMin, transformed);\n      vec3 pMax = rotateVector(rMax, transformed);\n      transformed = mix(pMin, pMax, frc * bounceProgress);\n\n      transformed += startPosition;\n    ",fragmentInit:"\n      if (vProgress == 0.0 || vY > vProgress) discard;\n    "});t.call(this,x,y)}animate(){return TweenMax.to(this,2,{time:this.totalDuration,ease:Power0.easeOut,repeat:-1,repeatDelay:1})}getTime(){return this.material.uniforms.time.value}setTime(e){this.material.uniforms.time.value=numberToUniformFloat(e)}setColor(e){this.material.uniforms.diffuse.value.set(e)}}class c{constructor(e){}init(e){var{engine:r}=e,a=new o(3,1,128,128),n=new s({roughness:1}),i=new t(a,n),u=new l({positions:model.vertices,normals:model.normals});u.animate(),this.model=i,r.add(u)}}export{c as default};
