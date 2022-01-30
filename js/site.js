"use strict";
//GLOBAL.JS
/* create a scene, that will hold all our elements such as objects, cameras and lights. */
var scene = new THREE.Scene();
/* create a camera, which defines where we're looking at. */
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
/* position and point the camera to the center of the scene */
camera.position.set(35, 35, -35); // camera.position.set(15, 15, -15)
// camera.position.set(5, 5, 15)
/* create a render and set the size */
var renderer = new THREE.WebGLRenderer(); // renderer.setClearColor(new THREE.Color(0xdddddd));
renderer.setClearColor(new THREE.Color(0x222222));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
/* add OrbitControls */
var controls = new THREE.OrbitControls(camera, renderer.domElement);
/* add the output of the renderer to the html element */
document.getElementById("WebGL-output").appendChild(renderer.domElement);
/* day light */
var daySpotLight = new THREE.SpotLight(0xfdfbd3, .5);
daySpotLight.position.set(0, 100, 0);
daySpotLight.shadow.mapSize.width = 2048;
daySpotLight.shadow.mapSize.height = 2048;
daySpotLight.angle = Math.PI / 4;
daySpotLight.castShadow = true;
scene.add(daySpotLight);
var daySpotLightHelper = new THREE.SpotLightHelper(daySpotLight);
scene.add(daySpotLightHelper);
/* add ambient light for better effect */
var ambientLight = new THREE.AmbientLight(0x494949, .5);
scene.add(ambientLight);
/* night light */
var nightSpotLight = new THREE.SpotLight(0xa5b1c2, .25);
nightSpotLight.position.set(0, -100, 0);
nightSpotLight.shadow.mapSize.width = 2048;
nightSpotLight.shadow.mapSize.height = 2048;
nightSpotLight.angle = Math.PI / 4;
nightSpotLight.castShadow = true;
scene.add(nightSpotLight);
var nightSpotLightHelper = new THREE.SpotLightHelper(nightSpotLight);
scene.add(nightSpotLightHelper);
/* add ambient light for better effect */
// const nightAmbientLight = new THREE.AmbientLight(0x000000);
// scene.add(nightAmbientLight)
"use strict";
/* GROUPS.JS */
/* groups for objects */
var lanternSingle = new THREE.Group();
var trafficLightSingle = new THREE.Group();
var lampSingle = new THREE.Group();
var buildingSingle = new THREE.Group();
var buildingsGroup = new THREE.Group();
var tree0Single = new THREE.Group();
var tree1Single = new THREE.Group();
"use strict";
/* GRASS.JS */
var grassGeometry = new THREE.BoxGeometry(1, 0.1, 1);
var grassMaterial = new THREE.MeshStandardMaterial({
  color: 0x27ae60
});
var grassBase = new THREE.Mesh(grassGeometry, grassMaterial);
grassBase.receiveShadow = true;
var grassArray = new Array();
for (var i = 0; i < 5; i++) {
  grassArray[i] = grassBase.clone();
  if (i < 2) {
    grassArray[i].scale.set(25, 1, 20);
    grassArray[i].position.set(22.5, 0, 20);
    if (i % 2 != 0) grassArray[i].position.set(-22.5, 0, 20);
  } else {
    grassArray[i].scale.set(20, 1, 20);
    grassArray[i].position.set(i * -25 + 75, 0, -20);
  }
  scene.add(grassArray[i]);
}
"use strict";
/* SIDEWALK.JS */
/* base sidewalk object */
var sidewalkGeometry = new THREE.BoxGeometry(1, 0.1, 1);
var sidewalkMaterial = new THREE.MeshStandardMaterial({
  color: 0xf7f1e3
});
var sidewalkBase = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
sidewalkBase.receiveShadow = true;
/* Array for sidewalks */
var sidewalksArray = new Array();
for (var i = 0; i < 7; i++) {
  /* cloning base sidewalk */
  sidewalksArray[i] = sidewalkBase.clone();
  /* sidewalks close to houses */
  if (i < 4) {
    sidewalksArray[i].scale.set(20, 2, 5);
    sidewalksArray[i].rotateY(Math.PI / 2);
    if (i < 2) {
      sidewalksArray[i].position.set(7.5 * Math.pow(-1, i), .05, 20);
    } else {
      sidewalksArray[i].position.set(12.5 * Math.pow(-1, i), .05, -20);
    }
    /* main long sidewalk */
  } else if (i > 5) {
    sidewalksArray[i].scale.set(70, 2, 5);
    sidewalksArray[i].position.set(0, 0.05, -7.5);
    /* other main sidewalks */
  } else {
    sidewalksArray[i].scale.set(30, 2, 5);
    sidewalksArray[i].position.set(20 * Math.pow(-1, i), .05, 7.5);
  }
  /* adding all sidewalks to scene */
  scene.add(sidewalksArray[i]);
}
"use strict";
//STREET.JS
/* base street object */
var streetGeometry = new THREE.BoxGeometry(1, 0.1, 1);
var streetMaterial = new THREE.MeshStandardMaterial({
  color: 0x34495e
});
var streetBase = new THREE.Mesh(streetGeometry, streetMaterial);
streetBase.receiveShadow = true;
var streetsArray = new Array();
for (var i = 0; i < 2; i++) {
  streetsArray[i] = streetBase.clone();
  streetsArray[i].scale.set(70, 1, 10);
  if (i == 1) {
    streetsArray[i].scale.set(10, 1, 25);
    streetsArray[i].position.set(0, 0, 17.5);
  }
  scene.add(streetsArray[i]);
}
"use strict";
/* LAMP.JS */
var lampBaseGeometry = new THREE.CylinderGeometry(1, 1, 7, 32);
var lampBaseMaterial = new THREE.MeshStandardMaterial({
  color: 0x95a5a6
});
var lampMiddleMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  opacity: .5,
  transparent: true
});
var lampBase = new THREE.Mesh(lampBaseGeometry, lampBaseMaterial);
var lampMiddle = new THREE.Mesh(lampBaseGeometry, lampMiddleMaterial);
var lampUpper = new THREE.Mesh(lampBaseGeometry, lampBaseMaterial);
lampBase.position.set(0, 0, 0);
lampMiddle.scale.set(1, .2, 1);
lampMiddle.position.set(0, 4.2, 0);
lampUpper.scale.set(1, .1, 1);
lampUpper.position.set(0, 5.25, 0);
lampSingle.add(lampBase, lampMiddle, lampUpper);
var lampsArray = new Array();
for (var i = 0; i < 6; i++) {
  lampsArray[i] = lampSingle.clone();
  lampsArray[i].scale.set(.2, .2, .2);
  for (var j = 0; j < 3; j++) {
    lampsArray[i].children[j].castShadow = true;
    lampsArray[i].children[j].receiveShadow = true;
  }
  if (i < 3) lampsArray[i].position.set(12.5, .8, -15 - 5 * i);else lampsArray[i].position.set(-12.5, .8, -5 * i);
  scene.add(lampsArray[i]);
}
"use strict";
/* LANTERN.JS */
var lanternBottomGeometry = new THREE.CylinderGeometry(2, 5, 20, 32);
var lanternBaseGeometry = new THREE.CylinderGeometry(1.5, 1.5, 100, 32);
var lanternUpperGeometry = new THREE.BoxGeometry(7.5, 2, 12.5);
var lanternMaterial = new THREE.MeshStandardMaterial({
  color: 0x95a5a6
});
var lanternBottom = new THREE.Mesh(lanternBottomGeometry, lanternMaterial);
var lanternBase = new THREE.Mesh(lanternBaseGeometry, lanternMaterial);
var lanternUpper = new THREE.Mesh(lanternUpperGeometry, lanternMaterial);
lanternBottom.position.set(0, 1, 0);
lanternBase.position.set(0, 45, 0);
lanternUpper.position.set(0, 96, -5);
lanternUpper.rotateX(Math.PI / 10);
/* making light for lanterns */
var lanternBulb = new THREE.SpotLight(0xffffff, .85, 0, Math.PI / 4, 1, 1);
lanternBulb.castShadow = true;
var lanternLightGeometry = new THREE.BoxGeometry(4, 1, 9);
var lanternLightMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  opacity: .5
  /*do zmiany miedzy dniem a noca opacity: .5*/
  ,
  transparent: true
});
var lanternLight = new THREE.Mesh(lanternLightGeometry, lanternLightMaterial);
lanternLight.position.set(0, 95, -5);
lanternLight.rotateX(Math.PI / 10);
lanternSingle.add(lanternBottom, lanternBase, lanternUpper, lanternLight);
var lanternsArray = new Array();
var lanternsBulbsArray = new Array();
for (var i = 0; i < 8; i++) {
  lanternsArray[i] = lanternSingle.clone();
  lanternsArray[i].scale.set(.075, .075, .075);
  lanternsBulbsArray[i] = lanternBulb.clone();
  for (var j = 0; j < 3; j++) {
    lanternsArray[i].children[j].castShadow = true;
    lanternsArray[i].children[j].receiveShadow = true;
  }
  if (i < 6) {
    if (i % 2 == 0) {
      lanternsArray[i].position.set(30 - i * 10, .8, 7.5);
      lanternsBulbsArray[i].position.set(30 - i * 10, 8, 7.3);
      lanternsBulbsArray[i].target.position.set(30 - i * 10, 0, 2.3);
    } else {
      lanternsArray[i].position.set(30 - i * 10, .8, -7.5);
      lanternsArray[i].rotateY(Math.PI);
      lanternsBulbsArray[i].position.set(30 - i * 10, 8, -7.3);
      lanternsBulbsArray[i].target.position.set(30 - i * 10, 0, -2.3);
    }
    if (i > 2) {
      lanternsArray[i].translateX(10);
      lanternsBulbsArray[i].translateX(-10);
      lanternsBulbsArray[i].target.translateX(-10);
    }
    if (i == 4) {
      lanternsArray[i].position.set(-20, .8, 7.5);
    }
  } else if (i == 7) {
    lanternsArray[i].rotateY(Math.PI / 2);
    lanternsArray[i].position.set(7.5, .8, 25);
    lanternsBulbsArray[i].position.set(7.3, 8, 25);
    lanternsBulbsArray[i].target.position.set(2.3, 0, 25);
  } else {
    lanternsArray[i].rotateY(-Math.PI * Math.pow(-1, i) / 2);
    lanternsArray[i].position.set(-7.5, .8, 15);
    lanternsBulbsArray[i].position.set(-7.3, 8, 15);
    lanternsBulbsArray[i].target.position.set(-2.3, 0, 15);
  }
  scene.add(lanternsArray[i], lanternsBulbsArray[i], lanternsBulbsArray[i].target);
}
"use strict";
// TRAFFICLIGHT.JS
var trafficLightUpperGeometry = new THREE.CylinderGeometry(1.5, 1.5, 85, 32);
var trafficLightHeadGeometry1 = new THREE.CylinderGeometry(5, 5, 25, 32, 1, false, 0, 3.15);
var trafficLightHeadGeometry2 = new THREE.PlaneGeometry(10, 25);
var trafficLightCylinderGeometry = new THREE.CylinderGeometry(3, 3, 2, 32);
var trafficLightHeadMaterial = new THREE.MeshStandardMaterial({
  color: 0x34495e
});
var trafficLightRedMaterial = new THREE.MeshStandardMaterial({
  color: 0xff0000,
  transparent: true,
  opacity: .5
});
var trafficLightYellowMaterial = new THREE.MeshStandardMaterial({
  color: 0xffff00,
  transparent: true,
  opacity: .5
});
var trafficLightGreenMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
  transparent: true,
  opacity: .5
});
var trafficLightBottom = lanternBottom.clone();
var trafficLightBase = lanternBase.clone();
var trafficLightUpper = new THREE.Mesh(trafficLightUpperGeometry, lanternMaterial);
var trafficLightHead1 = new THREE.Mesh(trafficLightHeadGeometry1, trafficLightHeadMaterial);
var trafficLightHead2 = new THREE.Mesh(trafficLightHeadGeometry2, trafficLightHeadMaterial);
var trafficLightRed = new THREE.Mesh(trafficLightCylinderGeometry, trafficLightRedMaterial);
var trafficLightYellow = new THREE.Mesh(trafficLightCylinderGeometry, trafficLightYellowMaterial);
var trafficLightGreen = new THREE.Mesh(trafficLightCylinderGeometry, trafficLightGreenMaterial);
trafficLightBottom.position.set(0, 1, 0);
trafficLightBase.position.set(0, 45, 0);
trafficLightUpper.position.set(0, 95, -35);
trafficLightUpper.rotateX(Math.PI / 2);
trafficLightHead1.position.set(-4, 88, -60);
trafficLightHead2.position.set(-4, 88, -60);
trafficLightHead2.rotateY(-Math.PI / 2);
trafficLightSingle.add(trafficLightBottom, trafficLightBase, trafficLightUpper, trafficLightHead1, trafficLightHead2, trafficLightRed, trafficLightYellow, trafficLightGreen);
var trafficLightArray = new Array();
for (var i = 0; i < 3; i++) {
  var a = 0;
  trafficLightArray[i] = trafficLightSingle.clone();
  trafficLightArray[i].scale.set(.075, .075, .075);
  trafficLightArray[i].position.set(7.5 * Math.pow(-1, -i), .8, 7.5);
  trafficLightArray[i].rotateY(-Math.PI - Math.PI * i); // lanternsBulbsArray[i] = lanternBulb.clone();
  for (var j = 0; j < 8; j++) {
    if (j < 5) {
      trafficLightArray[i].children[j].castShadow = true;
      trafficLightArray[i].children[j].receiveShadow = true;
    } else {
      trafficLightArray[i].children[j].rotateZ(Math.PI / 2);
      trafficLightArray[i].children[j].position.set(-5, 96 - a * 8, -60);
      a++;
    }
  }
  if (i % 2 == 0) {
    trafficLightArray[i].position.set(7.5, .8, -7.5);
  }
  if (i == 2) {
    trafficLightArray[i].rotateY(-Math.PI / 2);
    trafficLightArray[i].translateX(-15);
  }
  scene.add(trafficLightArray[i]);
} // const trafficLightBulb = new THREE.SpotLight(0xff0000, 1, 0, Math.PI / 4, 1, 2, 1);
// trafficLightBulb.castShadow = true;
// trafficLightBulb.position.set(7.75, 8, -3)
// trafficLightBulb.target.position.set(7.8, 8, -3)
// scene.add(trafficLightBulb, trafficLightBulb.target)
// // const spotLightHelper = new THREE.SpotLightHelper(trafficLightBulb);
// // scene.add(spotLightHelper);
// trafficLightSingle.add(trafficLightRedCircle, trafficLightRedCircle2, trafficLightRedCylinder)
// // const trafficLightBulb = new THREE.SpotLight(0xff0000, 1, 0, Math.PI / 4, 1, 2, 1);
// // trafficLightBulb.castShadow = true;
// // trafficLightBulb.position.set(7.75, 8, -3)
// // trafficLightBulb.target.position.set(7.8, 8, -3)
// // // const spotLightHelper = new THREE.SpotLightHelper(trafficLightBulb);
// // // scene.add(spotLightHelper);
// // scene.add(trafficLightBulb, trafficLightBulb.target)
// trafficLightSingle.add(trafficLightYellowCircle, trafficLightYellowCircle2, trafficLightYellowCylinder)
/* const trafficLightsAArray = new Array();/* setting multiple traffic lights (positioning, rotating, scaling)*/
/* adding multiple traffic lights into group */
// trafficLightsAArray.forEach(element => {
// trafficLightsGroup.add(element);
// });
/* adding to scene all traffic lights */
"use strict";
/* TREE0.JS */
var woodGeometry = new THREE.CylinderGeometry(.5, .5, 8, 32);
var woodMaterial = new THREE.MeshStandardMaterial({
  color: 0x611d00
});
var woodBase = new THREE.Mesh(woodGeometry, woodMaterial);
var leavesGeometry0 = new THREE.CylinderGeometry(.75, 5, 4, 10);
var leavesGeometry1 = new THREE.CylinderGeometry(.1, 5, 4, 10);
var leavesMaterial0 = new THREE.MeshStandardMaterial({
  color: 0x20bf6b
});
var leavesBase0 = new THREE.Mesh(leavesGeometry0, leavesMaterial0);
var tree0Leaves0 = leavesBase0;
var tree0Leaves1 = tree0Leaves0.clone();
var tree0Leaves2 = tree0Leaves0.clone();
var tree0Leaves3 = tree0Leaves0.clone();
var tree0 = [woodBase, tree0Leaves0, tree0Leaves1, tree0Leaves2, tree0Leaves3];
tree0[1].position.set(0, -.25, 0);
tree0[2].scale.set(.75, .75, .75);
tree0[2].position.set(0, 1.5, 0);
tree0[3].scale.set(.5, .5, .5);
tree0[3].position.set(0, 3, 0);
tree0[4].geometry = leavesGeometry1;
tree0[4].scale.set(.375, .5, .375);
tree0[4].position.set(0, 4.25, 0);
tree0.forEach(function (element) {
  element.castShadow = true;
  element.receiveShadow = true;
  tree0Single.add(element);
});
var tree0Array = new Array();
for (var i = 0; i < 3; i++) {
  tree0Array[i] = tree0Single.clone();
  scene.add(tree0Array[i]);
}
tree0Array[0].position.set(15, 4, 15);
tree0Array[1].position.set(-15, 4, 15);
tree0Array[2].position.set(-30, 4, 25);
"use strict";
/* TREE1.JS */
var leavesGeometry2 = new THREE.IcosahedronGeometry(3);
var leavesBase1 = new THREE.Mesh(leavesGeometry2, leavesMaterial0);
var tree1Leaves0 = leavesBase1;
var tree1 = [woodBase, tree1Leaves0];
tree1Leaves0.position.set(0, 2.5, 0);
tree1.forEach(function (element) {
  element.castShadow = true;
  element.receiveShadow = true;
  tree1Single.add(element);
});
var tree1Array = new Array();
for (var i = 0; i < 7; i++) {
  tree1Array[i] = tree1Single.clone();
  tree1Array[i].children[1].rotateY(Math.PI / Math.random() * 7 + 1);
  scene.add(tree1Array[i]);
}
tree1Array[0].position.set(15, 4, 25);
tree1Array[1].position.set(-25, 4, 15);
tree1Array[2].position.set(-20, 4, 22.5);
tree1Array[3].position.set(-12.5, 4, 25);
tree1Array[4].position.set(-17.5, 4, -12.5);
tree1Array[5].position.set(17.5, 4, -12.5);
tree1Array[6].position.set(-7.5, 4, -12.5);
"use strict";
/* HOUSE.JS */
var wallGeometry0 = new THREE.BoxGeometry(10, 5, .25);
var wallGeometry1 = new THREE.BoxGeometry(3.5, 5, .25);
var wallGeometry2 = new THREE.BoxGeometry(3, 1.75, .25);
var floorGeometry = new THREE.BoxGeometry(9.5, .25, 9.5);
var windowGeometry = new THREE.BoxGeometry(3, 1.5, .05);
var roofGeometry = new THREE.BufferGeometry();
var vertices = new Float32Array([//FRONT
5.5, 2.5, 5.0, 0.0, 6.25, 5.0, -5.5, 2.5, 5.0, //RIGHT
5.5, 2.5, 5.0, 5.5, 2.5, -5.0, 0.0, 6.25, -5.0, //
5.5, 2.5, 5.0, 0.0, 6.25, -5.0, 0.0, 6.25, 5.0, //LEFT
-5.5, 2.5, 5.0, 0.0, 6.25, 5.0, 0.0, 6.25, -5.0, //
-5.5, 2.5, 5.0, 0.0, 6.25, -5.0, -5.5, 2.5, -5.0, //BACK
-5.5, 2.5, -5.0, 0.0, 6.25, -5.0, 5.5, 2.5, -5.0, //BOTTOM
-5.5, 2.5, 5.0, 5.5, 2.5, -5.0, 5.5, 2.5, 5.0, //
-5.5, 2.5, -5.0, 5.5, 2.5, -5.0, -5.5, 2.5, 5.0]);
roofGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
roofGeometry.computeVertexNormals();
var floorMaterial = new THREE.MeshStandardMaterial({
  color: 0xf7f1e3
});
var windowMaterial = new THREE.MeshStandardMaterial({
  color: 0x7ed6df,
  transparent: true,
  opacity: .3
});
var wallMaterials = [new THREE.MeshStandardMaterial({
  color: 0x686de0
}), new THREE.MeshStandardMaterial({
  color: 0xe58e26
}), new THREE.MeshStandardMaterial({
  color: 0x6d214f
}), new THREE.MeshStandardMaterial({
  color: 0x808e9b
})];
var roofMaterials = [new THREE.MeshStandardMaterial({
  color: 0xff4757
}), new THREE.MeshStandardMaterial({
  color: 0x0c2461
}), new THREE.MeshStandardMaterial({
  color: 0xf97f51
}), new THREE.MeshStandardMaterial({
  color: 0x3dc1d3
})];
var wall0 = new THREE.Mesh(wallGeometry0, wallMaterials[0]);
var wall1 = new THREE.Mesh(wallGeometry1, wallMaterials[0]);
var wall2 = wall1.clone();
var wall3 = new THREE.Mesh(wallGeometry2, wallMaterials[0]);
var wall4 = wall1.clone();
var wall5 = wall1.clone();
var wall6 = wall3.clone();
var wall7 = wall3.clone();
var wall8 = wall1.clone();
var wall9 = wall1.clone();
var wall10 = wall3.clone();
var wall11 = wall3.clone();
var floor0 = new THREE.Mesh(floorGeometry, floorMaterial);
var floor1 = floor0.clone();
var window0 = new THREE.Mesh(windowGeometry, windowMaterial);
var window1 = window0.clone();
var roof0 = new THREE.Mesh(roofGeometry, roofMaterials[0]);
wall0.position.set(0, 0, -4.875);
wall1.position.set(3, 0, 4.875);
wall2.position.set(-3, 0, 4.875);
wall3.position.set(0, 1.625, 4.875);
wall4.position.set(4.875, 0, 3.25);
wall5.position.set(4.875, 0, -3.25);
wall6.position.set(4.875, -1.625, 0);
wall7.position.set(4.875, 1.625, 0);
wall8.position.set(-4.875, 0, 3.25);
wall9.position.set(-4.875, 0, -3.25);
wall10.position.set(-4.875, -1.625, 0);
wall11.position.set(-4.875, 1.625, 0);
floor0.position.set(0, -2.375, 0);
floor1.position.set(0, 2.375, 0);
window0.position.set(4.875, 0, 0);
window1.position.set(-4.875, 0, 0);
buildingSingle.add(wall0, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, window0, window1, floor0, floor1, roof0);
var buildingArray = new Array();
for (var i = 0; i < 4; i++) {
  buildingArray[i] = buildingSingle.clone();
  buildingArray[i].position.set(-25 + 25 * i, 2.5, -20);
  if (i == 3) {
    buildingArray[i].position.set(25, 2.5, 20);
    buildingArray[i].rotateY(Math.PI);
  }
  for (var j = 0; j < 17; j++) {
    if (j > 3 && j < 15) buildingArray[i].children[j].rotateY(Math.PI / 2);
    buildingArray[i].children[j].castShadow = true;
    buildingArray[i].children[j].receiveShadow = true;
    if (j < 12) {
      buildingArray[i].children[j].material = wallMaterials[i];
    }
    if (j == 16) {
      buildingArray[i].children[j].material = roofMaterials[i];
    }
    if (j > 11 && j < 13) {
      buildingArray[i].children[j].castShadow = false;
      buildingArray[i].children[j].receiveShadow = false;
    }
  }
  scene.add(buildingArray[i]);
}
"use strict";
//RENDER.JS
/* render scene */
renderer.render(scene, camera);
/* animation settings */
function animate() {
  requestAnimationFrame(animate); // dobre/przetestowane wartosci
  daySpotLight.position.x = 100 * Math.sin(Date.now() / 4800);
  daySpotLight.position.y = 100 * Math.cos(Date.now() / 4800);
  nightSpotLight.position.x = -100 * Math.sin(Date.now() / 4800);
  nightSpotLight.position.y = -100 * Math.cos(Date.now() / 4800); //
  //te raczej tez
  if (daySpotLight.position.y < 70 && daySpotLight.position.x > 0) {
    daySpotLight.intensity -= .002;
    if (daySpotLight.intensity < .0009 || daySpotLight.position.y < -20) {
      daySpotLight.intensity = 0;
    }
    lanternsOn(daySpotLight.position.y);
  }
  if (daySpotLight.position.y > -20 && daySpotLight.position.x < 0) {
    daySpotLight.intensity += .002;
    if (daySpotLight.intensity > .499) {
      daySpotLight.intensity = .5;
    }
    lanternsOff(daySpotLight.position.y);
  }
  if (daySpotLight.position.y < -10) daySpotLight.intensity = 0;
  if (nightSpotLight.position.y < 70 && nightSpotLight.position.x > 0) {
    nightSpotLight.intensity -= .001;
    if (nightSpotLight.intensity < .0009 || nightSpotLight.position.y < -20) {
      nightSpotLight.intensity = 0;
    }
  }
  if (nightSpotLight.position.y > -20 && nightSpotLight.position.x < 0) {
    nightSpotLight.intensity += .001;
    if (nightSpotLight.intensity > .249) {
      nightSpotLight.intensity = .25;
    }
  }
  if (nightSpotLight.position.y < -10) nightSpotLight.intensity = 0; //
  // console.log(nightSpotLight.intensity)
  // console.log(daySpotLight.intensity)
  // console.log(daySpotLight.position.y)
  // console.log(daySpotLight.intensity)
  // console.log(dayAmbientLight.intensity)
  // console.log(daySpotLight.position.y)
  // console.log(daySpotLight.position.x)
  // console.log(nightSpotLight.position.x)
  // console.log(nightSpotLight.position.y)
  // if (daySpotLight.position.y < 75 && daySpotLight.position.y > -75) {
  // }
  // if (daySpotLight.intensity < 0) daySpotLight.intensity == 0
  // else if (daySpotLight.position.y > -30 && daySpotLight.position.x < -60) {
  //     if (daySpotLight.intensity > .05) daySpotLight.intensity == .05
  //     daySpotLight.intensity += .05
  // }
  // if (daySpotLight.intensity < .05) daySpotLight.intensity = 0
  // if (daySpotLight.intensity > .05) daySpotLight.intensity = .5
  // nightSpotLight.position.x = -100 * Math.sin(Date.now() / 9600)
  // nightSpotLight.position.y = -100 * Math.cos(Date.now() / 9600)
  // if (daySpotLight.position.y < 40) {
  //     if (daySpotLight.intensity > .01) {
  //         daySpotLight.intensity -= .005
  //         // dayAmbientLight.intensity -= .005
  //     }
  //     else {
  //         daySpotLight.intensity = 0
  //         // dayAmbientLight.intensity = 0
  //     }
  // }
  // else if (daySpotLight.position.y > -40) {
  //     if (daySpotLight.intensity > .74) {
  //         daySpotLight.intensity = .75
  //         // dayAmbientLight.intensity = .5
  //     }
  //     else {
  //         daySpotLight.intensity += .005
  //         // dayAmbientLight.intensity += .005
  //     }
  // }
  // if (nightSpotLight.position.y < 40) {
  //     if (nightSpotLight.intensity > .01) {
  //         nightSpotLight.intensity -= .0025
  //         nightAmbientLight.intensity -= .0025
  //     }
  //     else {
  //         nightSpotLight.intensity = 0
  //         nightAmbientLight.intensity = 0
  //     }
  // }
  // else if (nightSpotLight.position.y > -40) {
  //     if (nightSpotLight.intensity > .74) {
  //         nightSpotLight.intensity = .75
  //         nightAmbientLight.intensity = .5
  //     }
  //     else {
  //         nightSpotLight.intensity += .0025
  //         nightAmbientLight.intensity += .0025
  //     }
  // }
  // if (nightSpotLight.position.y > -10) {
  //     if (nightSpotLight.intensity > .74)
  //         nightSpotLight.intensity = .75
  //     else nightSpotLight.intensity += .025
  // }
  // else if (nightSpotLight.position.y < 10) {
  //     if (nightSpotLight.intensity > .01)
  //         nightSpotLight.intensity -= .025
  //     else nightSpotLight.intensity = 0
  // }
  // console.log(lanternsBulbsArray[0].children)
  controls.update();
  renderer.render(scene, camera);
}
function lanternsOff(y) {
  lanternsBulbsArray.forEach(function (e) {
    if (e.intensity <= .01225 || y > 10) e.intensity = 0;else e.intensity -= .01225;
  });
  lanternsArray.forEach(function (e) {
    if (e.children[3].material.opacity <= .1) e.children[3].material.opacity = .1;else e.children[3].material.opacity -= .00225; //if(f.material.opacity >= 1) f.material.opacity = 1
    //else f.material.opacity += .05;
  }); // lanternsArray.forEach(e => {
  //     e.children.forEach(f => {
  //         if(f.material.opacity <= .15) f.material.opacity = .1
  //         else f.material.opacity -= .05;
  //     });
  // });
}
function lanternsOn(y) {
  lanternsBulbsArray.forEach(function (e) {
    if (e.intensity >= .84 || y < -20) e.intensity = .85;else e.intensity += .01225;
  });
  lanternsArray.forEach(function (e) {
    if (e.children[3].material.opacity >= 1) e.children[3].material.opacity = 1;else e.children[3].material.opacity += .00225; //if(f.material.opacity >= 1) f.material.opacity = 1
    //else f.material.opacity += .05;
  }); // lanternsArray.forEach(e => {
  //     e.children.forEach(f => {
  //         if(f.material.opacity >= 1) f.material.opacity = 1
  //         else f.material.opacity += .05;
  //     });
  // });
}
animate();
//# sourceMappingURL=maps/site.js.map
