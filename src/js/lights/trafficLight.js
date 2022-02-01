// TRAFFICLIGHT.JS

/* geometry */
const trafficLightGeometry = [
    /* bottom */new THREE.CylinderGeometry(2, 5, 20, 32),
    /* base */new THREE.CylinderGeometry(1.5, 1.5, 100, 32),
    /* upper */new THREE.CylinderGeometry(1.5, 1.5, 85, 32),
    /* head1 */new THREE.CylinderGeometry(5, 5, 25, 32, 1, false, 0, 3.15),
    /* head2 */new THREE.PlaneGeometry(10, 25),
    /* light */new THREE.CylinderGeometry(3, 3, 2, 32)
]

/* material */
const trafficLightMaterials = [
    /* base */new THREE.MeshStandardMaterial({ color: 0x95a5a6 }),
    /* head */new THREE.MeshStandardMaterial({ color: 0x34495e }),
    /* lightRed */new THREE.MeshStandardMaterial({ color: 0xff0000, transparent: true, opacity: .9 }),
    /* lightYellow */new THREE.MeshStandardMaterial({ color: 0xffff00, transparent: true, opacity: .9 }),
    /* lightGreen */new THREE.MeshStandardMaterial({ color: 0x00ff00, transparent: true, opacity: .9 }),
]

const trafficLightElements = [
    /* bottom */new THREE.Mesh(trafficLightGeometry[0], trafficLightMaterials[0]),
    /* base */new THREE.Mesh(trafficLightGeometry[1], trafficLightMaterials[0]),
    /* upper */new THREE.Mesh(trafficLightGeometry[2], trafficLightMaterials[0]),
    /* head1 */new THREE.Mesh(trafficLightGeometry[3], trafficLightMaterials[1]),
    /* head2 */new THREE.Mesh(trafficLightGeometry[4], trafficLightMaterials[1]),
    /* lightRed */new THREE.Mesh(trafficLightGeometry[5], trafficLightMaterials[2]),
    /* lightYellow */new THREE.Mesh(trafficLightGeometry[5], trafficLightMaterials[3]),
    /* lightGreen */new THREE.Mesh(trafficLightGeometry[5], trafficLightMaterials[4]),
]

/* shawows for trafficLight elements */
trafficLightElements.forEach(e => {
    e.castShadow = true
    e.receiveShadow = true
});

/* positions for lantern elements */
trafficLightElements[0].position.set(0, 1, 0)
trafficLightElements[1].position.set(0, 45, 0)
trafficLightElements[2].position.set(0, 95, 35)
trafficLightElements[3].position.set(4, 88, 60)
trafficLightElements[4].position.set(4, 88, 60)
trafficLightElements[5].position.set(5, 96, 60)
trafficLightElements[6].position.set(5, 88, 60)
trafficLightElements[7].position.set(5, 80, 60)

/* rotations for lantern elements */
trafficLightElements[2].rotateX(Math.PI / 2)
trafficLightElements[3].rotateY(Math.PI)
trafficLightElements[4].rotateY(Math.PI / 2)
trafficLightElements[5].rotateZ(Math.PI / 2)
trafficLightElements[6].rotateZ(Math.PI / 2)
trafficLightElements[7].rotateZ(Math.PI / 2)

/* group for lantern elements */
const trafficLightSingle = new THREE.Group()
trafficLightSingle.add(trafficLightElements[0], trafficLightElements[1], trafficLightElements[2], trafficLightElements[3], trafficLightElements[4], trafficLightElements[5], trafficLightElements[6], trafficLightElements[7])

/* scale for group */
trafficLightSingle.scale.set(.075, .075, .075)

/* trafficLight objects */
const trafficLight0 = trafficLightSingle.clone()
const trafficLight1 = trafficLightSingle.clone()
const trafficLight2 = trafficLightSingle.clone()

/* positions */
trafficLight0.position.set(7.5, .8, -7.5)
trafficLight1.position.set(-7.5, .8, 7.5)
trafficLight2.position.set(7.5, .8, 7.5)

/* rotations */
trafficLight1.rotateY(Math.PI)
trafficLight2.rotateY(-Math.PI / 2)

/* adding to scene */
scene.add(trafficLight0, trafficLight1, trafficLight2)


// const trafficLightUpperGeometry = new THREE.CylinderGeometry(1.5, 1.5, 85, 32);
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
