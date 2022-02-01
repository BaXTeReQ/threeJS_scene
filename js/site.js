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
/* texture loader */
var textureLoader = new THREE.TextureLoader();
/* day light */
var daySpotLight = new THREE.SpotLight(0xfdfbd3, .5);
daySpotLight.position.set(0, 100, 0);
daySpotLight.shadow.mapSize.width = 2048;
daySpotLight.shadow.mapSize.height = 2048;
daySpotLight.angle = Math.PI / 4;
daySpotLight.castShadow = true;
scene.add(daySpotLight);
/* day light helper */
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
/* night light helper */
var nightSpotLightHelper = new THREE.SpotLightHelper(nightSpotLight);
scene.add(nightSpotLightHelper);
/* GROUPS.JS */
/* groups for objects */
// const lanternSingle = new THREE.Group();
// const trafficLightSingle = new THREE.Group();
// const lampSingle = new THREE.Group();
// const buildingSingle = new THREE.Group();
// const buildingsGroup = new THREE.Group();
// const tree0Single = new THREE.Group();
// const tree1Single = new THREE.Group();
"use strict";
"use strict";
/* GRASS.JS */
/* geometry */
var grassGeometry = new THREE.BoxGeometry(1, 0.1, 1);
/* material */
var grassMaterial = new THREE.MeshStandardMaterial({
  color: 0x27ae60
});
/* base obejct */
var grassBase = new THREE.Mesh(grassGeometry, grassMaterial);
/* shadows */
grassBase.receiveShadow = true;
/* grass objects */
var grass0 = grassBase.clone();
var grass1 = grassBase.clone();
var grass2 = grassBase.clone();
var grass3 = grassBase.clone();
var grass4 = grassBase.clone();
/* positions */
grass0.position.set(22.5, 0, 20);
grass1.position.set(-22.5, 0, 20);
grass2.position.set(25, 0, -20);
grass3.position.set(0, 0, -20);
grass4.position.set(-25, 0, -20);
/* scales */
grass0.scale.set(25, 1, 20);
grass1.scale.set(25, 1, 20);
grass2.scale.set(20, 1, 20);
grass3.scale.set(20, 1, 20);
grass4.scale.set(20, 1, 20);
/* adding to scene */
scene.add(grass0, grass1, grass2, grass3, grass4);
"use strict";
/* post.JS */
/* geometry */
var postGeometry = new THREE.CylinderGeometry(1, 1, 7, 32);
/* materials */
var postMaterials = [new THREE.MeshStandardMaterial({
  color: 0x95a5a6
}), new THREE.MeshStandardMaterial({
  color: 0xffffff,
  opacity: .5,
  transparent: true
})];
/* elements for post */
var postElements = [new THREE.Mesh(postGeometry, postMaterials[0]), new THREE.Mesh(postGeometry, postMaterials[1]), new THREE.Mesh(postGeometry, postMaterials[0])];
/* positions for post elements */
postElements[0].position.set(0, 0, 0);
postElements[1].position.set(0, 4.2, 0);
postElements[2].position.set(0, 5.25, 0);
/* scales for post elements */
postElements[1].scale.set(1, .2, 1);
postElements[2].scale.set(1, .1, 1);
/* shadows for post elements */
postElements.forEach(function (e) {
  e.receiveShadow = true;
  e.castShadow = true;
});
/* group for post elements */
var postSingle = new THREE.Group();
postSingle.add(postElements[0], postElements[1], postElements[2]);
/* scale for group */
postSingle.scale.set(.2, .2, .2);
/* post objects */
var post0 = postSingle.clone();
var post1 = postSingle.clone();
var post2 = postSingle.clone();
var post3 = postSingle.clone();
var post4 = postSingle.clone();
var post5 = postSingle.clone();
/* positions for objects */
post0.position.set(12.5, .8, -15);
post1.position.set(12.5, .8, -20);
post2.position.set(12.5, .8, -25);
post3.position.set(-12.5, .8, -15);
post4.position.set(-12.5, .8, -20);
post5.position.set(-12.5, .8, -25);
/* adding to scene */
scene.add(post0, post1, post2, post3, post4, post5);
"use strict";
/* SIDEWALK.JS */
/* geometry */
var sidewalkGeometry = new THREE.BoxGeometry(1, 0.1, 1);
/* material */
var sidewalkMaterial = new THREE.MeshStandardMaterial({
  color: 0xf7f1e3
});
/* base obejct */
var sidewalkBase = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
/* shadows */
sidewalkBase.receiveShadow = true; // sidewalkBase.receiveShadow = true;
/* sidewalks objects */
var sidewalk0 = sidewalkBase.clone();
var sidewalk1 = sidewalkBase.clone();
var sidewalk2 = sidewalkBase.clone();
var sidewalk3 = sidewalkBase.clone();
var sidewalk4 = sidewalkBase.clone();
var sidewalk5 = sidewalkBase.clone();
var sidewalk6 = sidewalkBase.clone();
/* positions */
sidewalk0.position.set(12.5, .05, -20);
sidewalk1.position.set(-12.5, .05, -20);
sidewalk2.position.set(7.5, .05, 20);
sidewalk3.position.set(-7.5, .05, 20);
sidewalk4.position.set(0, .05, -7.5);
sidewalk5.position.set(20, .05, 7.5);
sidewalk6.position.set(-20, .05, 7.5);
/* scales */
sidewalk0.scale.set(5, 2, 20);
sidewalk1.scale.set(5, 2, 20);
sidewalk2.scale.set(5, 2, 20);
sidewalk3.scale.set(5, 2, 20);
sidewalk4.scale.set(70, 2, 5);
sidewalk5.scale.set(30, 2, 5);
sidewalk6.scale.set(30, 2, 5);
/* adding to scene */
scene.add(sidewalk0, sidewalk1, sidewalk2, sidewalk3, sidewalk4, sidewalk5, sidewalk6);
"use strict";
//STREET.JS
/* textures */
var roadTextures = [textureLoader.load('../ProjektGrafika/textures/road1.png'), textureLoader.load('../ProjektGrafika/textures/road2.png')];
/* geometry */
var streetGeometry = new THREE.BoxGeometry(1, 0.1, 1);
/* materials */
var streetMaterials = [new THREE.MeshStandardMaterial({
  color: 0xffffff,
  map: roadTextures[0],
  side: THREE.DoubleSide
}), new THREE.MeshStandardMaterial({
  color: 0xffffff,
  map: roadTextures[1],
  side: THREE.DoubleSide
})];
/* objects */
var streetBase1 = new THREE.Mesh(streetGeometry, streetMaterials[0]);
var streetBase2 = new THREE.Mesh(streetGeometry, streetMaterials[1]);
/* shadows */
streetBase1.receiveShadow = true;
streetBase2.receiveShadow = true;
/* street objects */
var street0 = streetBase1.clone();
var street1 = streetBase2.clone();
/* positions */
street0.position.set(0, 0, 17.5);
street1.position.set(0, 0, 0);
/* scales */
street0.scale.set(10, 1, 25);
street1.scale.set(10, 1, 70);
/* rotation */
street1.rotateY(Math.PI / 2);
/* adding to scene */
scene.add(street0, street1);
"use strict";
// /* LANTERN.JS */
/* geometry */
var lanternGeometry = [
/* bottom */
new THREE.CylinderGeometry(2, 5, 20, 32),
/* base */
new THREE.CylinderGeometry(1.5, 1.5, 100, 32),
/* upper */
new THREE.BoxGeometry(7.5, 2, 12.5),
/* light */
new THREE.BoxGeometry(4, 1, 9)];
/* material */
var lanternMaterials = [
/* base */
new THREE.MeshStandardMaterial({
  color: 0x95a5a6
}),
/* light */
new THREE.MeshBasicMaterial({
  color: 0xffffff,
  opacity: .9
  /*do zmiany miedzy dniem a noca opacity: .1*/
  ,
  transparent: true
})];
/* elements for lantern */
var lanternElements = [
/* bottom */
new THREE.Mesh(lanternGeometry[0], lanternMaterials[0]),
/* base */
new THREE.Mesh(lanternGeometry[1], lanternMaterials[0]),
/* upper */
new THREE.Mesh(lanternGeometry[2], lanternMaterials[0]),
/* light */
new THREE.Mesh(lanternGeometry[3], lanternMaterials[1])];
/* positions for lantern elements */
lanternElements[0].position.set(0, 1, 0);
lanternElements[1].position.set(0, 45, 0);
lanternElements[2].position.set(0, 96, -5);
lanternElements[3].position.set(0, 95, -6);
/* rotation for lantern element */
lanternElements[2].rotateX(Math.PI / 10);
lanternElements[3].rotateX(Math.PI / 10);
/* shadows for elements */
lanternElements.forEach(function (e) {
  e.castShadow = true;
  e.receiveShadow = true;
});
/* light for lanterns */
var lanternLight = new THREE.SpotLight(0xffffff, .75, 0, Math.PI / 5, 1, 1);
/* shadow casting for light */
lanternLight.castShadow = true;
/* group for lantern elements */
var lanternSingle = new THREE.Group();
lanternSingle.add(lanternElements[0], lanternElements[1], lanternElements[2], lanternElements[3]);
/* scale for group */
lanternSingle.scale.set(.075, .075, .075);
/* lantern objects */
var lantern0 = lanternSingle.clone();
var lantern1 = lanternSingle.clone();
var lantern2 = lanternSingle.clone();
var lantern3 = lanternSingle.clone();
var lantern4 = lanternSingle.clone();
var lantern5 = lanternSingle.clone();
var lantern6 = lanternSingle.clone();
var lantern7 = lanternSingle.clone();
/* lights for lanterns */
var lanternLight0 = lanternLight.clone();
var lanternLight1 = lanternLight.clone();
var lanternLight2 = lanternLight.clone();
var lanternLight3 = lanternLight.clone();
var lanternLight4 = lanternLight.clone();
var lanternLight5 = lanternLight.clone();
var lanternLight6 = lanternLight.clone();
var lanternLight7 = lanternLight.clone();
/* positions */
lantern0.position.set(30, .8, -7.5);
lantern1.position.set(10, .8, -7.5);
lantern2.position.set(-20, .8, -7.5);
lantern3.position.set(20, .8, 7.5);
lantern4.position.set(-10, .8, 7.5);
lantern5.position.set(-30, .8, 7.5);
lantern6.position.set(-7.5, .8, 15);
lantern7.position.set(7.5, .8, 25);
lanternLight0.position.set(30, 8, -7.3);
lanternLight1.position.set(10, 8, -7.3);
lanternLight2.position.set(-20, 8, -7.3);
lanternLight3.position.set(20, 8, 7.3);
lanternLight4.position.set(-10, 8, 7.3);
lanternLight5.position.set(-30, 8, 7.3);
lanternLight6.position.set(-7.3, 8, 15);
lanternLight7.position.set(7.3, 8, 25);
lanternLight0.target.position.set(30, 2, -2.5);
lanternLight1.target.position.set(10, 2, -2.5);
lanternLight2.target.position.set(-20, 2, -2.5);
lanternLight3.target.position.set(20, 2, 2.5);
lanternLight4.target.position.set(-10, 2, 2.5);
lanternLight5.target.position.set(-30, 2, 2.5);
lanternLight6.target.position.set(-2.5, 2, 15);
lanternLight7.target.position.set(2.5, 2, 25);
/* rotations */
lantern0.rotateY(Math.PI);
lantern1.rotateY(Math.PI);
lantern2.rotateY(Math.PI);
lantern6.rotateY(-Math.PI / 2);
lantern7.rotateY(Math.PI / 2);
/* adding to scene */
scene.add(lantern0, lantern1, lantern2, lantern3, lantern4, lantern5, lantern6, lantern7, lanternLight0, lanternLight1, lanternLight2, lanternLight3, lanternLight4, lanternLight5, lanternLight6, lanternLight7, lanternLight0.target, lanternLight1.target, lanternLight2.target, lanternLight3.target, lanternLight4.target, lanternLight5.target, lanternLight6.target, lanternLight7.target);
"use strict";
// TRAFFICLIGHT.JS
/* geometry */
var trafficLightGeometry = [
/* bottom */
new THREE.CylinderGeometry(2, 5, 20, 32),
/* base */
new THREE.CylinderGeometry(1.5, 1.5, 100, 32),
/* upper */
new THREE.CylinderGeometry(1.5, 1.5, 85, 32),
/* head1 */
new THREE.CylinderGeometry(5, 5, 25, 32, 1, false, 0, 3.15),
/* head2 */
new THREE.PlaneGeometry(10, 25),
/* light */
new THREE.CylinderGeometry(3, 3, 2, 32)];
/* material */
var trafficLightMaterials = [
/* base */
new THREE.MeshStandardMaterial({
  color: 0x95a5a6
}),
/* head */
new THREE.MeshStandardMaterial({
  color: 0x34495e
}),
/* lightRed */
new THREE.MeshStandardMaterial({
  color: 0xff0000,
  transparent: true,
  opacity: .9
}),
/* lightYellow */
new THREE.MeshStandardMaterial({
  color: 0xffff00,
  transparent: true,
  opacity: .9
}),
/* lightGreen */
new THREE.MeshStandardMaterial({
  color: 0x00ff00,
  transparent: true,
  opacity: .9
})];
var trafficLightElements = [
/* bottom */
new THREE.Mesh(trafficLightGeometry[0], trafficLightMaterials[0]),
/* base */
new THREE.Mesh(trafficLightGeometry[1], trafficLightMaterials[0]),
/* upper */
new THREE.Mesh(trafficLightGeometry[2], trafficLightMaterials[0]),
/* head1 */
new THREE.Mesh(trafficLightGeometry[3], trafficLightMaterials[1]),
/* head2 */
new THREE.Mesh(trafficLightGeometry[4], trafficLightMaterials[1]),
/* lightRed */
new THREE.Mesh(trafficLightGeometry[5], trafficLightMaterials[2]),
/* lightYellow */
new THREE.Mesh(trafficLightGeometry[5], trafficLightMaterials[3]),
/* lightGreen */
new THREE.Mesh(trafficLightGeometry[5], trafficLightMaterials[4])];
/* shawows for trafficLight elements */
trafficLightElements.forEach(function (e) {
  e.castShadow = true;
  e.receiveShadow = true;
});
/* positions for lantern elements */
trafficLightElements[0].position.set(0, 1, 0);
trafficLightElements[1].position.set(0, 45, 0);
trafficLightElements[2].position.set(0, 95, 35);
trafficLightElements[3].position.set(4, 88, 60);
trafficLightElements[4].position.set(4, 88, 60);
trafficLightElements[5].position.set(5, 96, 60);
trafficLightElements[6].position.set(5, 88, 60);
trafficLightElements[7].position.set(5, 80, 60);
/* rotations for lantern elements */
trafficLightElements[2].rotateX(Math.PI / 2);
trafficLightElements[3].rotateY(Math.PI);
trafficLightElements[4].rotateY(Math.PI / 2);
trafficLightElements[5].rotateZ(Math.PI / 2);
trafficLightElements[6].rotateZ(Math.PI / 2);
trafficLightElements[7].rotateZ(Math.PI / 2);
/* group for lantern elements */
var trafficLightSingle = new THREE.Group();
trafficLightSingle.add(trafficLightElements[0], trafficLightElements[1], trafficLightElements[2], trafficLightElements[3], trafficLightElements[4], trafficLightElements[5], trafficLightElements[6], trafficLightElements[7]);
/* scale for group */
trafficLightSingle.scale.set(.075, .075, .075);
/* trafficLight objects */
var trafficLight0 = trafficLightSingle.clone();
var trafficLight1 = trafficLightSingle.clone();
var trafficLight2 = trafficLightSingle.clone();
/* positions */
trafficLight0.position.set(7.5, .8, -7.5);
trafficLight1.position.set(-7.5, .8, 7.5);
trafficLight2.position.set(7.5, .8, 7.5);
/* rotations */
trafficLight1.rotateY(Math.PI);
trafficLight2.rotateY(-Math.PI / 2);
/* adding to scene */
scene.add(trafficLight0, trafficLight1, trafficLight2); // const trafficLightUpperGeometry = new THREE.CylinderGeometry(1.5, 1.5, 85, 32);
// const trafficLightHeadGeometry1 = new THREE.CylinderGeometry(5, 5, 25, 32, 1, false, 0, 3.15);
// const trafficLightHeadGeometry2 = new THREE.PlaneGeometry(10, 25);
// const trafficLightCylinderGeometry = new THREE.CylinderGeometry(3, 3, 2, 32);
// const trafficLightHeadMaterial = new THREE.MeshStandardMaterial({ color: 0x34495e });
// const trafficLightRedMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000, transparent: true, opacity: .5 });
// const trafficLightYellowMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00, transparent: true, opacity: .5 });
// const trafficLightGreenMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00, transparent: true, opacity: .5 });
// const trafficLightBottom = lanternBottom.clone();
// const trafficLightBase = lanternBase.clone();
// const trafficLightUpper = new THREE.Mesh(trafficLightUpperGeometry, lanternMaterial)
// const trafficLightHead1 = new THREE.Mesh(trafficLightHeadGeometry1, trafficLightHeadMaterial);
// const trafficLightHead2 = new THREE.Mesh(trafficLightHeadGeometry2, trafficLightHeadMaterial);
// const trafficLightRed = new THREE.Mesh(trafficLightCylinderGeometry, trafficLightRedMaterial)
// const trafficLightYellow = new THREE.Mesh(trafficLightCylinderGeometry, trafficLightYellowMaterial)
// const trafficLightGreen = new THREE.Mesh(trafficLightCylinderGeometry, trafficLightGreenMaterial)
// trafficLightBottom.position.set(0, 1, 0);
// trafficLightBase.position.set(0, 45, 0)
// trafficLightUpper.position.set(0, 95, -35)
// trafficLightUpper.rotateX(Math.PI / 2)
// trafficLightHead1.position.set(-4, 88, -60);
// trafficLightHead2.position.set(-4, 88, -60);
// trafficLightHead2.rotateY(-Math.PI / 2)
// trafficLightSingle.add(
//     trafficLightBottom, trafficLightBase, trafficLightUpper,
//     trafficLightHead1, trafficLightHead2,
//     trafficLightRed, trafficLightYellow, trafficLightGreen
// )
// const trafficLightArray = new Array();
// for (let i = 0; i < 3; i++) {
//     let a = 0
//     trafficLightArray[i] = trafficLightSingle.clone();
//     trafficLightArray[i].scale.set(.075, .075, .075)
//     trafficLightArray[i].position.set(7.5 * Math.pow(-1, -i), .8, 7.5)
//     trafficLightArray[i].rotateY(-Math.PI - Math.PI * i)
//     // lanternsBulbsArray[i] = lanternBulb.clone();
//     for (let j = 0; j < 8; j++) {
//         if (j < 5) {
//             trafficLightArray[i].children[j].castShadow = true
//             trafficLightArray[i].children[j].receiveShadow = true
//         } else {
//             trafficLightArray[i].children[j].rotateZ(Math.PI / 2)
//             trafficLightArray[i].children[j].position.set(-5, 96 - a * 8, -60)
//             a++
//         }
//     }
//     if (i % 2 == 0) {
//         trafficLightArray[i].position.set(7.5, .8, -7.5)
//     }
//     if (i == 2) {
//         trafficLightArray[i].rotateY(-Math.PI / 2)
//         trafficLightArray[i].translateX(-15)
//     }
//     scene.add(trafficLightArray[i])
// }
// // const trafficLightBulb = new THREE.SpotLight(0xff0000, 1, 0, Math.PI / 4, 1, 2, 1);
// // trafficLightBulb.castShadow = true;
// // trafficLightBulb.position.set(7.75, 8, -3)
// // trafficLightBulb.target.position.set(7.8, 8, -3)
// // scene.add(trafficLightBulb, trafficLightBulb.target)
// // // const spotLightHelper = new THREE.SpotLightHelper(trafficLightBulb);
// // // scene.add(spotLightHelper);
// // trafficLightSingle.add(trafficLightRedCircle, trafficLightRedCircle2, trafficLightRedCylinder)
// // // const trafficLightBulb = new THREE.SpotLight(0xff0000, 1, 0, Math.PI / 4, 1, 2, 1);
// // // trafficLightBulb.castShadow = true;
// // // trafficLightBulb.position.set(7.75, 8, -3)
// // // trafficLightBulb.target.position.set(7.8, 8, -3)
// // // // const spotLightHelper = new THREE.SpotLightHelper(trafficLightBulb);
// // // // scene.add(spotLightHelper);
// // // scene.add(trafficLightBulb, trafficLightBulb.target)
// // trafficLightSingle.add(trafficLightYellowCircle, trafficLightYellowCircle2, trafficLightYellowCylinder)
// /* const trafficLightsAArray = new Array();
// /* setting multiple traffic lights (positioning, rotating, scaling)
// */
// /* adding multiple traffic lights into group */
// // trafficLightsAArray.forEach(element => {
// // trafficLightsGroup.add(element);
// // });
// /* adding to scene all traffic lights */
"use strict";
/* TREE0.JS */
/* geometry */
var treeGeometry = [
/* trunk */
new THREE.CylinderGeometry(.5, .5, 8, 32),
/* leaves0 */
new THREE.CylinderGeometry(.75, 5, 4, 10),
/* leaves1 */
new THREE.CylinderGeometry(.1, 5, 4, 10),
/* leaves2 */
new THREE.IcosahedronGeometry(3)];
/* materials */
var treeMaterials = [
/* trunk */
new THREE.MeshStandardMaterial({
  color: 0x611d00
}),
/* leaves0 */
new THREE.MeshStandardMaterial({
  color: 0x20bf6b
})];
/* elements for tree */
var treeElements = [
/* trunk */
new THREE.Mesh(treeGeometry[0], treeMaterials[0]),
/* leaves0 */
new THREE.Mesh(treeGeometry[1], treeMaterials[1]),
/* leaves1 */
new THREE.Mesh(treeGeometry[1], treeMaterials[1]),
/* leaves2 */
new THREE.Mesh(treeGeometry[1], treeMaterials[1]),
/* leaves3 */
new THREE.Mesh(treeGeometry[2], treeMaterials[1]),
/* leaves4 */
new THREE.Mesh(treeGeometry[3], treeMaterials[1])];
/* shadows for tree elements */
treeElements.forEach(function (e) {
  e.receiveShadow = true;
  e.castShadow = true;
});
/* positions for tree elements */
treeElements[0].position.set(0, 0, 0);
treeElements[1].position.set(0, -.25, 0);
treeElements[2].position.set(0, 1.5, 0);
treeElements[3].position.set(0, 3, 0);
treeElements[4].position.set(0, 4.25, 0);
treeElements[5].position.set(0, 2.5, 0);
/* scale for tree elements */
treeElements[2].scale.set(.75, .75, .75);
treeElements[3].scale.set(.5, .5, .5);
treeElements[4].scale.set(.375, .5, .375);
/* group for tree elements */
var tree0Single = new THREE.Group();
var tree1Single = new THREE.Group();
tree0Single.add(treeElements[0], treeElements[1], treeElements[2], treeElements[3], treeElements[4]);
tree1Single.add(treeElements[0], treeElements[5]);
/* tree objects */
var tree0 = tree0Single.clone();
var tree1 = tree0Single.clone();
var tree2 = tree0Single.clone();
var tree3 = tree1Single.clone();
var tree4 = tree1Single.clone();
var tree5 = tree1Single.clone();
var tree6 = tree1Single.clone();
var tree7 = tree1Single.clone();
var tree8 = tree1Single.clone();
var tree9 = tree1Single.clone();
/* positions */
tree0.position.set(15, 4, 15);
tree1.position.set(-15, 4, 15);
tree2.position.set(-30, 4, 25);
tree3.position.set(15, 4, 25);
tree4.position.set(-25, 4, 15);
tree5.position.set(-20, 4, 22.5);
tree6.position.set(-12.5, 4, 25);
tree7.position.set(-17.5, 4, -12.5);
tree8.position.set(17.5, 4, -12.5);
tree9.position.set(-7.5, 4, -12.5);
/* rotation for tree leaves */
tree3.rotateY(Math.PI / Math.random() * 7 + 1);
tree4.rotateY(Math.PI / Math.random() * 7 + 1);
tree5.rotateY(Math.PI / Math.random() * 7 + 1);
tree6.rotateY(Math.PI / Math.random() * 7 + 1);
tree7.rotateY(Math.PI / Math.random() * 7 + 1);
tree8.rotateY(Math.PI / Math.random() * 7 + 1);
tree9.rotateY(Math.PI / Math.random() * 7 + 1);
/* adding to scene */
scene.add(tree0, tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8, tree9);
"use strict";
/* HOUSE.JS */
/* textures */
var houseTextures = [textureLoader.load('../ProjektGrafika/textures/wallTexture1.png'), textureLoader.load('../ProjektGrafika/textures/wallTexture2.png'), textureLoader.load('../ProjektGrafika/textures/wallTexture3.png'), textureLoader.load('../ProjektGrafika/textures/wallTexture4.png')];
/* geometries */
var houseGeometry = new THREE.BoxGeometry(10, 5, 10);
var roofGeometry = new THREE.BufferGeometry();
var roofVertices = new Float32Array([//FRONT
5.5, 2.5, 5.0, 0.0, 6.25, 5.0, -5.5, 2.5, 5.0, //RIGHT
5.5, 2.5, 5.0, 5.5, 2.5, -5.0, 0.0, 6.25, -5.0, //
5.5, 2.5, 5.0, 0.0, 6.25, -5.0, 0.0, 6.25, 5.0, //LEFT
-5.5, 2.5, 5.0, 0.0, 6.25, 5.0, 0.0, 6.25, -5.0, //
-5.5, 2.5, 5.0, 0.0, 6.25, -5.0, -5.5, 2.5, -5.0, //BACK
-5.5, 2.5, -5.0, 0.0, 6.25, -5.0, 5.5, 2.5, -5.0, //BOTTOM
-5.5, 2.5, 5.0, 5.5, 2.5, -5.0, 5.5, 2.5, 5.0, //
-5.5, 2.5, -5.0, 5.5, 2.5, -5.0, -5.5, 2.5, 5.0]);
roofGeometry.setAttribute('position', new THREE.BufferAttribute(roofVertices, 3));
roofGeometry.computeVertexNormals();
/* materials */
var houseMaterials = [new THREE.MeshStandardMaterial({
  map: houseTextures[0],
  color: 0xffffff,
  side: THREE.DoubleSide
}), new THREE.MeshStandardMaterial({
  map: houseTextures[1],
  color: 0xffffff,
  side: THREE.DoubleSide
}), new THREE.MeshStandardMaterial({
  map: houseTextures[2],
  color: 0xffffff,
  side: THREE.DoubleSide
}), new THREE.MeshStandardMaterial({
  map: houseTextures[3],
  color: 0xffffff,
  side: THREE.DoubleSide
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
/* base objects */
var houseBase = [new THREE.Mesh(houseGeometry, houseMaterials[0]), new THREE.Mesh(houseGeometry, houseMaterials[1]), new THREE.Mesh(houseGeometry, houseMaterials[2]), new THREE.Mesh(houseGeometry, houseMaterials[3])];
var roofBase = [new THREE.Mesh(roofGeometry, roofMaterials[0]), new THREE.Mesh(roofGeometry, roofMaterials[1]), new THREE.Mesh(roofGeometry, roofMaterials[2]), new THREE.Mesh(roofGeometry, roofMaterials[3])];
/* shadows */
houseBase.forEach(function (e) {
  e.castShadow = true;
  e.receiveShadow = true;
});
roofBase.forEach(function (e) {
  e.castShadow = true;
  e.receiveShadow = true;
});
/* groups */
var house0 = new THREE.Group();
var house1 = new THREE.Group();
var house2 = new THREE.Group();
var house3 = new THREE.Group();
house0.add(houseBase[0], roofBase[0]);
house1.add(houseBase[1], roofBase[1]);
house2.add(houseBase[2], roofBase[2]);
house3.add(houseBase[3], roofBase[3]);
/* positions */
house0.position.set(-25, 2.5, -20);
house1.position.set(0, 2.5, -20);
house2.position.set(25, 2.5, -20);
house3.position.set(25, 2.5, 20);
/* adding to scene */
scene.add(house0, house1, house2, house3);
"use strict";
//RENDER.JS
/* render scene */
renderer.render(scene, camera);
/* animation settings */
function animate() {
  requestAnimationFrame(animate); // dobre/przetestowane wartosci
  // daySpotLight.position.x = 100 * Math.sin(Date.now() / 4800)
  // daySpotLight.position.y = 100 * Math.cos(Date.now() / 4800)
  // nightSpotLight.position.x = -100 * Math.sin(Date.now() / 4800)
  // nightSpotLight.position.y = -100 * Math.cos(Date.now() / 4800)
  //
  //te raczej tez
  // if (daySpotLight.position.y < 70 && daySpotLight.position.x > 0) {
  //     daySpotLight.intensity -= .002
  //     if (daySpotLight.intensity < .0009 || daySpotLight.position.y < -20) {
  //         daySpotLight.intensity = 0
  //     }
  //     // lanternsOn(daySpotLight.position.y);
  // }
  // if (daySpotLight.position.y > -20 && daySpotLight.position.x < 0) {
  //     daySpotLight.intensity += .002
  //     if (daySpotLight.intensity > .499) {
  //         daySpotLight.intensity = .5
  //     }
  //     // lanternsOff(daySpotLight.position.y);
  // }
  // if (daySpotLight.position.y < -10)
  //     daySpotLight.intensity = 0     
  // if (nightSpotLight.position.y < 70 && nightSpotLight.position.x > 0) {
  //     nightSpotLight.intensity -= .001
  //     if (nightSpotLight.intensity < .0009 || nightSpotLight.position.y < -20) {
  //         nightSpotLight.intensity = 0
  //     }
  // }
  // if (nightSpotLight.position.y > -20 && nightSpotLight.position.x < 0) {
  //     nightSpotLight.intensity += .001
  //     if (nightSpotLight.intensity > .249) {
  //         nightSpotLight.intensity = .25
  //     }
  // }
  // if (nightSpotLight.position.y < -10)
  //     nightSpotLight.intensity = 0    
  //
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
