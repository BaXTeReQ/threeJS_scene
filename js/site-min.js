"use strict";var scene=new THREE.Scene,camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.1,1e3);camera.position.set(35,35,-35);var renderer=new THREE.WebGLRenderer;renderer.setClearColor(new THREE.Color(2236962)),renderer.setSize(window.innerWidth,window.innerHeight),renderer.shadowMap.enabled=!0,renderer.shadowMap.type=THREE.PCFSoftShadowMap;var controls=new THREE.OrbitControls(camera,renderer.domElement);document.getElementById("WebGL-output").appendChild(renderer.domElement);var textureLoader=new THREE.TextureLoader,daySpotLight=new THREE.SpotLight(16645075,.5);daySpotLight.position.set(0,100,0),daySpotLight.shadow.mapSize.width=2048,daySpotLight.shadow.mapSize.height=2048,daySpotLight.angle=Math.PI/4,daySpotLight.castShadow=!0,scene.add(daySpotLight);var ambientLight=new THREE.AmbientLight(4802889,.5);scene.add(ambientLight);var nightSpotLight=new THREE.SpotLight(10858946,.25);nightSpotLight.position.set(0,-100,0),nightSpotLight.shadow.mapSize.width=2048,nightSpotLight.shadow.mapSize.height=2048,nightSpotLight.angle=Math.PI/4,nightSpotLight.castShadow=!0,scene.add(nightSpotLight),window.addEventListener("resize",function(){camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,window.innerHeight),renderer.render(scene,camera)},!1);var grassGeometry=new THREE.BoxGeometry(1,.1,1),grassMaterial=new THREE.MeshStandardMaterial({color:2600544}),grassBase=new THREE.Mesh(grassGeometry,grassMaterial);grassBase.receiveShadow=!0;var grass0=grassBase.clone(),grass1=grassBase.clone(),grass2=grassBase.clone(),grass3=grassBase.clone(),grass4=grassBase.clone();grass0.position.set(22.5,0,20),grass1.position.set(-22.5,0,20),grass2.position.set(25,0,-20),grass3.position.set(0,0,-20),grass4.position.set(-25,0,-20),grass0.scale.set(25,1,20),grass1.scale.set(25,1,20),grass2.scale.set(20,1,20),grass3.scale.set(20,1,20),grass4.scale.set(20,1,20),scene.add(grass0,grass1,grass2,grass3,grass4);var postGeometry=new THREE.CylinderGeometry(1,1,7,32),postMaterials=[new THREE.MeshStandardMaterial({color:9807270}),new THREE.MeshStandardMaterial({color:16777215,opacity:.5,transparent:!0})],postElements=[new THREE.Mesh(postGeometry,postMaterials[0]),new THREE.Mesh(postGeometry,postMaterials[1]),new THREE.Mesh(postGeometry,postMaterials[0])];postElements[0].position.set(0,0,0),postElements[1].position.set(0,4.2,0),postElements[2].position.set(0,5.25,0),postElements[1].scale.set(1,.2,1),postElements[2].scale.set(1,.1,1),postElements.forEach(function(e){e.receiveShadow=!0,e.castShadow=!0});var postSingle=new THREE.Group;postSingle.add(postElements[0],postElements[1],postElements[2]),postSingle.scale.set(.2,.2,.2);var post0=postSingle.clone(),post1=postSingle.clone(),post2=postSingle.clone(),post3=postSingle.clone(),post4=postSingle.clone(),post5=postSingle.clone();post0.position.set(12.5,.8,-15),post1.position.set(12.5,.8,-20),post2.position.set(12.5,.8,-25),post3.position.set(-12.5,.8,-15),post4.position.set(-12.5,.8,-20),post5.position.set(-12.5,.8,-25),scene.add(post0,post1,post2,post3,post4,post5);var sidewalkGeometry=new THREE.BoxGeometry(1,.1,1),sidewalkMaterial=new THREE.MeshStandardMaterial({color:16249315}),sidewalkBase=new THREE.Mesh(sidewalkGeometry,sidewalkMaterial);sidewalkBase.receiveShadow=!0;var sidewalk0=sidewalkBase.clone(),sidewalk1=sidewalkBase.clone(),sidewalk2=sidewalkBase.clone(),sidewalk3=sidewalkBase.clone(),sidewalk4=sidewalkBase.clone(),sidewalk5=sidewalkBase.clone(),sidewalk6=sidewalkBase.clone();sidewalk0.position.set(12.5,.05,-20),sidewalk1.position.set(-12.5,.05,-20),sidewalk2.position.set(7.5,.05,20),sidewalk3.position.set(-7.5,.05,20),sidewalk4.position.set(0,.05,-7.5),sidewalk5.position.set(20,.05,7.5),sidewalk6.position.set(-20,.05,7.5),sidewalk0.scale.set(5,2,20),sidewalk1.scale.set(5,2,20),sidewalk2.scale.set(5,2,20),sidewalk3.scale.set(5,2,20),sidewalk4.scale.set(70,2,5),sidewalk5.scale.set(30,2,5),sidewalk6.scale.set(30,2,5),scene.add(sidewalk0,sidewalk1,sidewalk2,sidewalk3,sidewalk4,sidewalk5,sidewalk6);var roadTextures=[textureLoader.load("../ProjektGrafika/textures/road1.png"),textureLoader.load("../ProjektGrafika/textures/road2.png")],streetGeometry=new THREE.BoxGeometry(1,.1,1),streetMaterials=[new THREE.MeshStandardMaterial({color:16777215,map:roadTextures[0],side:THREE.DoubleSide}),new THREE.MeshStandardMaterial({color:16777215,map:roadTextures[1],side:THREE.DoubleSide})],streetBase1=new THREE.Mesh(streetGeometry,streetMaterials[0]),streetBase2=new THREE.Mesh(streetGeometry,streetMaterials[1]);streetBase1.receiveShadow=!0,streetBase2.receiveShadow=!0;var street0=streetBase1.clone(),street1=streetBase2.clone();street0.position.set(0,0,17.5),street1.position.set(0,0,0),street0.scale.set(10,1,25),street1.scale.set(10,1,70),street1.rotateY(Math.PI/2),scene.add(street0,street1);var lanternGeometry=[new THREE.CylinderGeometry(2,5,20,32),new THREE.CylinderGeometry(1.5,1.5,100,32),new THREE.BoxGeometry(7.5,2,12.5),new THREE.BoxGeometry(4,1,9)],lanternMaterials=[new THREE.MeshStandardMaterial({color:9807270}),new THREE.MeshBasicMaterial({color:16777215,opacity:.9,transparent:!0})],lanternElements=[new THREE.Mesh(lanternGeometry[0],lanternMaterials[0]),new THREE.Mesh(lanternGeometry[1],lanternMaterials[0]),new THREE.Mesh(lanternGeometry[2],lanternMaterials[0]),new THREE.Mesh(lanternGeometry[3],lanternMaterials[1])];lanternElements[0].position.set(0,1,0),lanternElements[1].position.set(0,45,0),lanternElements[2].position.set(0,96,-5),lanternElements[3].position.set(0,95,-6),lanternElements[2].rotateX(Math.PI/10),lanternElements[3].rotateX(Math.PI/10),lanternElements.forEach(function(e){e.castShadow=!0,e.receiveShadow=!0});var lanternLight=new THREE.SpotLight(16777215,.8,0,Math.PI/5,1,1);lanternLight.castShadow=!0;var lanternSingle=new THREE.Group;lanternSingle.add(lanternElements[0],lanternElements[1],lanternElements[2],lanternElements[3]),lanternSingle.scale.set(.075,.075,.075);var lantern0=lanternSingle.clone(),lantern1=lanternSingle.clone(),lantern2=lanternSingle.clone(),lantern3=lanternSingle.clone(),lantern4=lanternSingle.clone(),lantern5=lanternSingle.clone(),lantern6=lanternSingle.clone(),lantern7=lanternSingle.clone(),lanternLight0=lanternLight.clone(),lanternLight1=lanternLight.clone(),lanternLight2=lanternLight.clone(),lanternLight3=lanternLight.clone(),lanternLight4=lanternLight.clone(),lanternLight5=lanternLight.clone(),lanternLight6=lanternLight.clone(),lanternLight7=lanternLight.clone();lantern0.position.set(30,.8,-7.5),lantern1.position.set(10,.8,-7.5),lantern2.position.set(-20,.8,-7.5),lantern3.position.set(20,.8,7.5),lantern4.position.set(-10,.8,7.5),lantern5.position.set(-30,.8,7.5),lantern6.position.set(-7.5,.8,15),lantern7.position.set(7.5,.8,25),lanternLight0.position.set(30,8,-7.3),lanternLight1.position.set(10,8,-7.3),lanternLight2.position.set(-20,8,-7.3),lanternLight3.position.set(20,8,7.3),lanternLight4.position.set(-10,8,7.3),lanternLight5.position.set(-30,8,7.3),lanternLight6.position.set(-7.3,8,15),lanternLight7.position.set(7.3,8,25),lanternLight0.target.position.set(30,2,-2.5),lanternLight1.target.position.set(10,2,-2.5),lanternLight2.target.position.set(-20,2,-2.5),lanternLight3.target.position.set(20,2,2.5),lanternLight4.target.position.set(-10,2,2.5),lanternLight5.target.position.set(-30,2,2.5),lanternLight6.target.position.set(-2.5,2,15),lanternLight7.target.position.set(2.5,2,25),lantern0.rotateY(Math.PI),lantern1.rotateY(Math.PI),lantern2.rotateY(Math.PI),lantern6.rotateY(-Math.PI/2),lantern7.rotateY(Math.PI/2);var lanternLightsArray=[lanternLight0,lanternLight1,lanternLight2,lanternLight3,lanternLight4,lanternLight5,lanternLight6,lanternLight7],lanternArray=[lantern0,lantern1,lantern2,lantern3,lantern4,lantern5,lantern6,lantern7];scene.add(lantern0,lantern1,lantern2,lantern3,lantern4,lantern5,lantern6,lantern7,lanternLight0,lanternLight1,lanternLight2,lanternLight3,lanternLight4,lanternLight5,lanternLight6,lanternLight7,lanternLight0.target,lanternLight1.target,lanternLight2.target,lanternLight3.target,lanternLight4.target,lanternLight5.target,lanternLight6.target,lanternLight7.target);var trafficLightGeometry=[new THREE.CylinderGeometry(2,5,20,32),new THREE.CylinderGeometry(1.5,1.5,100,32),new THREE.CylinderGeometry(1.5,1.5,85,32),new THREE.CylinderGeometry(5,5,25,32,1,!1,0,3.15),new THREE.PlaneGeometry(10,25),new THREE.CylinderGeometry(3,3,2,32)],trafficLightMaterials=[new THREE.MeshStandardMaterial({color:9807270}),new THREE.MeshStandardMaterial({color:3426654}),new THREE.MeshStandardMaterial({color:16711680,transparent:!0,opacity:.9}),new THREE.MeshStandardMaterial({color:16776960,transparent:!0,opacity:.9}),new THREE.MeshStandardMaterial({color:65280,transparent:!0,opacity:.9})],trafficLightElements=[new THREE.Mesh(trafficLightGeometry[0],trafficLightMaterials[0]),new THREE.Mesh(trafficLightGeometry[1],trafficLightMaterials[0]),new THREE.Mesh(trafficLightGeometry[2],trafficLightMaterials[0]),new THREE.Mesh(trafficLightGeometry[3],trafficLightMaterials[1]),new THREE.Mesh(trafficLightGeometry[4],trafficLightMaterials[1]),new THREE.Mesh(trafficLightGeometry[5],trafficLightMaterials[2]),new THREE.Mesh(trafficLightGeometry[5],trafficLightMaterials[3]),new THREE.Mesh(trafficLightGeometry[5],trafficLightMaterials[4])];trafficLightElements.forEach(function(e){e.castShadow=!0,e.receiveShadow=!0}),trafficLightElements[0].position.set(0,1,0),trafficLightElements[1].position.set(0,45,0),trafficLightElements[2].position.set(0,95,35),trafficLightElements[3].position.set(4,88,60),trafficLightElements[4].position.set(4,88,60),trafficLightElements[5].position.set(5,96,60),trafficLightElements[6].position.set(5,88,60),trafficLightElements[7].position.set(5,80,60),trafficLightElements[2].rotateX(Math.PI/2),trafficLightElements[3].rotateY(Math.PI),trafficLightElements[4].rotateY(Math.PI/2),trafficLightElements[5].rotateZ(Math.PI/2),trafficLightElements[6].rotateZ(Math.PI/2),trafficLightElements[7].rotateZ(Math.PI/2);var trafficLightSingle=new THREE.Group;trafficLightSingle.add(trafficLightElements[0],trafficLightElements[1],trafficLightElements[2],trafficLightElements[3],trafficLightElements[4],trafficLightElements[5],trafficLightElements[6],trafficLightElements[7]),trafficLightSingle.scale.set(.075,.075,.075);var trafficLight0=trafficLightSingle.clone(),trafficLight1=trafficLightSingle.clone(),trafficLight2=trafficLightSingle.clone();trafficLight0.position.set(7.5,.8,-7.5),trafficLight1.position.set(-7.5,.8,7.5),trafficLight2.position.set(7.5,.8,7.5),trafficLight1.rotateY(Math.PI),trafficLight2.rotateY(-Math.PI/2),scene.add(trafficLight0,trafficLight1,trafficLight2);var treeGeometry=[new THREE.CylinderGeometry(.5,.5,8,32),new THREE.CylinderGeometry(.75,5,4,10),new THREE.CylinderGeometry(.1,5,4,10),new THREE.IcosahedronGeometry(3)],treeMaterials=[new THREE.MeshStandardMaterial({color:6364416}),new THREE.MeshStandardMaterial({color:2146155})],treeElements=[new THREE.Mesh(treeGeometry[0],treeMaterials[0]),new THREE.Mesh(treeGeometry[1],treeMaterials[1]),new THREE.Mesh(treeGeometry[1],treeMaterials[1]),new THREE.Mesh(treeGeometry[1],treeMaterials[1]),new THREE.Mesh(treeGeometry[2],treeMaterials[1]),new THREE.Mesh(treeGeometry[3],treeMaterials[1])];treeElements.forEach(function(e){e.receiveShadow=!0,e.castShadow=!0}),treeElements[0].position.set(0,0,0),treeElements[1].position.set(0,-.25,0),treeElements[2].position.set(0,1.5,0),treeElements[3].position.set(0,3,0),treeElements[4].position.set(0,4.25,0),treeElements[5].position.set(0,2.5,0),treeElements[2].scale.set(.75,.75,.75),treeElements[3].scale.set(.5,.5,.5),treeElements[4].scale.set(.375,.5,.375);var tree0Single=new THREE.Group,tree1Single=new THREE.Group;tree0Single.add(treeElements[0],treeElements[1],treeElements[2],treeElements[3],treeElements[4]),tree1Single.add(treeElements[0],treeElements[5]);var tree0=tree0Single.clone(),tree1=tree0Single.clone(),tree2=tree0Single.clone(),tree3=tree1Single.clone(),tree4=tree1Single.clone(),tree5=tree1Single.clone(),tree6=tree1Single.clone(),tree7=tree1Single.clone(),tree8=tree1Single.clone(),tree9=tree1Single.clone();tree0.position.set(15,4,15),tree1.position.set(-15,4,15),tree2.position.set(-30,4,25),tree3.position.set(15,4,25),tree4.position.set(-25,4,15),tree5.position.set(-20,4,22.5),tree6.position.set(-12.5,4,25),tree7.position.set(-17.5,4,-12.5),tree8.position.set(17.5,4,-12.5),tree9.position.set(-7.5,4,-12.5),tree3.rotateY(Math.PI/Math.random()*7+1),tree4.rotateY(Math.PI/Math.random()*7+1),tree5.rotateY(Math.PI/Math.random()*7+1),tree6.rotateY(Math.PI/Math.random()*7+1),tree7.rotateY(Math.PI/Math.random()*7+1),tree8.rotateY(Math.PI/Math.random()*7+1),tree9.rotateY(Math.PI/Math.random()*7+1),scene.add(tree0,tree1,tree2,tree3,tree4,tree5,tree6,tree7,tree8,tree9);var houseTextures=[textureLoader.load("../ProjektGrafika/textures/wallTexture1.png"),textureLoader.load("../ProjektGrafika/textures/wallTexture2.png"),textureLoader.load("../ProjektGrafika/textures/wallTexture3.png"),textureLoader.load("../ProjektGrafika/textures/wallTexture4.png")],houseGeometry=new THREE.BoxGeometry(10,5,10),roofGeometry=new THREE.BufferGeometry,roofVertices=new Float32Array([5.5,2.5,5,0,6.25,5,-5.5,2.5,5,5.5,2.5,5,5.5,2.5,-5,0,6.25,-5,5.5,2.5,5,0,6.25,-5,0,6.25,5,-5.5,2.5,5,0,6.25,5,0,6.25,-5,-5.5,2.5,5,0,6.25,-5,-5.5,2.5,-5,-5.5,2.5,-5,0,6.25,-5,5.5,2.5,-5,-5.5,2.5,5,5.5,2.5,-5,5.5,2.5,5,-5.5,2.5,-5,5.5,2.5,-5,-5.5,2.5,5]);roofGeometry.setAttribute("position",new THREE.BufferAttribute(roofVertices,3)),roofGeometry.computeVertexNormals();var houseMaterials=[new THREE.MeshStandardMaterial({map:houseTextures[0],color:16777215,side:THREE.DoubleSide}),new THREE.MeshStandardMaterial({map:houseTextures[1],color:16777215,side:THREE.DoubleSide}),new THREE.MeshStandardMaterial({map:houseTextures[2],color:16777215,side:THREE.DoubleSide}),new THREE.MeshStandardMaterial({map:houseTextures[3],color:16777215,side:THREE.DoubleSide})],roofMaterials=[new THREE.MeshStandardMaterial({color:16729943}),new THREE.MeshStandardMaterial({color:795745}),new THREE.MeshStandardMaterial({color:16351057}),new THREE.MeshStandardMaterial({color:4047315})],houseBase=[new THREE.Mesh(houseGeometry,houseMaterials[0]),new THREE.Mesh(houseGeometry,houseMaterials[1]),new THREE.Mesh(houseGeometry,houseMaterials[2]),new THREE.Mesh(houseGeometry,houseMaterials[3])],roofBase=[new THREE.Mesh(roofGeometry,roofMaterials[0]),new THREE.Mesh(roofGeometry,roofMaterials[1]),new THREE.Mesh(roofGeometry,roofMaterials[2]),new THREE.Mesh(roofGeometry,roofMaterials[3])];houseBase.forEach(function(e){e.castShadow=!0,e.receiveShadow=!0}),roofBase.forEach(function(e){e.castShadow=!0,e.receiveShadow=!0});var house0=new THREE.Group,house1=new THREE.Group,house2=new THREE.Group,house3=new THREE.Group;house0.add(houseBase[0],roofBase[0]),house1.add(houseBase[1],roofBase[1]),house2.add(houseBase[2],roofBase[2]),house3.add(houseBase[3],roofBase[3]),house0.position.set(-25,2.5,-20),house1.position.set(0,2.5,-20),house2.position.set(25,2.5,-20),house3.position.set(25,2.5,20),scene.add(house0,house1,house2,house3);var btn1=document.getElementById("btn1"),btn2=document.getElementById("btn2"),btn3=document.getElementById("btn3"),btn4=document.getElementById("btn4"),btn5=document.getElementById("btn5");function animate(){requestAnimationFrame(animate),daySpotLight.position.x=100*Math.sin(Date.now()/4800),daySpotLight.position.y=100*Math.cos(Date.now()/4800),nightSpotLight.position.x=-100*Math.sin(Date.now()/4800),nightSpotLight.position.y=-100*Math.cos(Date.now()/4800),daySpotLight.position.y<50&&daySpotLight.position.x>0&&(daySpotLight.intensity-=.0035,(daySpotLight.intensity<9e-4||daySpotLight.position.y<0)&&(daySpotLight.intensity=0)),daySpotLight.position.y>0&&daySpotLight.position.x<0&&(daySpotLight.intensity+=.0035,daySpotLight.intensity>.449&&(daySpotLight.intensity=.5)),nightSpotLight.position.y<50&&nightSpotLight.position.x>0&&(nightSpotLight.intensity-=.00175,(nightSpotLight.intensity<9e-4||nightSpotLight.position.y<0)&&(nightSpotLight.intensity=0)),nightSpotLight.position.y>0&&nightSpotLight.position.x<0&&(nightSpotLight.intensity+=.00175,nightSpotLight.intensity>.249&&(nightSpotLight.intensity=.25)),lanternLightsArray.forEach(function(e){daySpotLight.position.y>20&&daySpotLight.position.x<0&&(e.intensity-=.025),(e.intensity<=0||daySpotLight.position.y>=40)&&(e.intensity=0),daySpotLight.position.y<20&&daySpotLight.position.x>0&&(e.intensity+=.025),(e.intensity>=.8||daySpotLight.position.y<=0)&&(e.intensity=.8)}),lanternArray.forEach(function(e){daySpotLight.position.y>20&&daySpotLight.position.x<0&&(e.children[3].material.opacity-=.02225),(e.children[3].material.opacity<=.1||daySpotLight.position.y>=30)&&(e.children[3].material.opacity=.1),daySpotLight.position.y<20&&daySpotLight.position.x>0&&(e.children[3].material.opacity+=.02225),(e.children[3].material.opacity>=.9||daySpotLight.position.y<=10)&&(e.children[3].material.opacity=.9)}),controls.update(),renderer.render(scene,camera)}btn1.addEventListener("click",function(){camera.position.set(39,6,11),controls.target.set(-25,3,-23)}),btn2.addEventListener("click",function(){camera.position.set(25,10,-26),controls.target.set(5,3,-10)}),btn3.addEventListener("click",function(){camera.position.set(-14,3,31),controls.target.set(10,3,-3)}),btn4.addEventListener("click",function(){camera.position.set(-39,3,4),controls.target.set(0,3,0)}),btn5.addEventListener("click",function(){camera.position.set(35,35,-35),controls.target.set(0,0,0)}),renderer.render(scene,camera),animate();