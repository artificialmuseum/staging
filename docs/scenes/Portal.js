class i{constructor(i){var{artifact:t,mergeConfig:s,preload:e}=i;this.config=s(t.portal,{in:"inside",out:"clipCube",door:"door",parent:"parent",doorPosition:{x:0,y:0,z:0},doorWidth:1.4,doorHeight:2,cubeSize:4.05,doorZOffset:.05}),this.doorXOffset=this.config.doorWidth/2,this.cubeOffset=this.config.cubeSize/2,this.doorZOffset=.1,this.rotation=1,this.walkedThroughDoor=!1;var{MathUtils:o,Vector3:a}=e.THREE;this.MathUtils=o,this.rotationNormal=new a(0,1,0)}afterLoadModel(i){var{engine:t}=i;this.camera=t.camera;var{model:s}=t;this.inside=s.getObjectByName(this.config.in),this.clipCube=s.getObjectByName(this.config.out),this.door=s.getObjectByName(this.config.door),this.parent=s.getObjectByName(this.config.parent)}tick(){var{x:i,y:t,z:s}=this.camera.position,{cubeSize:e,doorHeight:o}=this.config,{clipCube:a,door:h,inside:n,parent:r,doorXOffset:l,cubeOffset:d,doorZOffset:g}=this,c=t<o&&t>0,u=i<l&&i>-l,f=s<0&&s>-g&&u&&c,b=s<0&&s>-e&&i<d&&i>-d;s>0&&s<g&&u&&c?this.walkingIn=!0:b||(this.walkingIn=!1),f?this.walkingOut=!0:b&&(this.walkingOut=!1),s<0&&!this.walkingIn?r.quaternion.setFromAxisAngle(this.rotationNormal,this.MathUtils.degToRad(180)):s>0&&!this.walkingOut&&r.quaternion.setFromAxisAngle(this.rotationNormal,this.MathUtils.degToRad(0)),b?(this.walkingIn&&(this.hasJustEntered=!0,this.hasJustExited=!1,this.walkingIn=!1),this.hasJustEntered?(a.visible&&(a.visible=!1),h.visible&&(h.visible=!1)):n.visible&&(n.visible=!1),this.walkingOut=!!f):(this.walkingOut&&(this.hasJustEntered=!1,this.hasJustExited=!0,this.walkingOut=!1),this.hasJustExited&&(n.visible||(n.visible=!0),a.visible||(a.visible=!0),h.visible||(h.visible=!0)))}}export{i as default};
