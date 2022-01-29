// TRAFFICLIGHT.JS

const trafficLightUpperGeometry = new THREE.CylinderGeometry(1.5, 1.5, 85, 32);
const trafficLightHeadGeometry1 = new THREE.CylinderGeometry(5, 5, 25, 32, 1, false, 0, 3.15);
const trafficLightHeadGeometry2 = new THREE.PlaneGeometry(10, 25);
const trafficLightCylinderGeometry = new THREE.CylinderGeometry(3, 3, 2, 32);

const trafficLightHeadMaterial = new THREE.MeshStandardMaterial({ color: 0x34495e });
const trafficLightRedMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000, transparent: true, opacity: .5 });
const trafficLightYellowMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00, transparent: true, opacity: .5 });
const trafficLightGreenMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00, transparent: true, opacity: .5 });

const trafficLightBottom = lanternBottom.clone();
const trafficLightBase = lanternBase.clone();
const trafficLightUpper = new THREE.Mesh(trafficLightUpperGeometry, lanternMaterial)
const trafficLightHead1 = new THREE.Mesh(trafficLightHeadGeometry1, trafficLightHeadMaterial);
const trafficLightHead2 = new THREE.Mesh(trafficLightHeadGeometry2, trafficLightHeadMaterial);
const trafficLightRed = new THREE.Mesh(trafficLightCylinderGeometry, trafficLightRedMaterial)
const trafficLightYellow = new THREE.Mesh(trafficLightCylinderGeometry, trafficLightYellowMaterial)
const trafficLightGreen = new THREE.Mesh(trafficLightCylinderGeometry, trafficLightGreenMaterial)

trafficLightBottom.position.set(0, 1, 0);
trafficLightBase.position.set(0, 45, 0)
trafficLightUpper.position.set(0, 95, -35)
trafficLightUpper.rotateX(Math.PI / 2)
trafficLightHead1.position.set(-4, 88, -60);
trafficLightHead2.position.set(-4, 88, -60);
trafficLightHead2.rotateY(-Math.PI / 2)

trafficLightSingle.add(
    trafficLightBottom, trafficLightBase, trafficLightUpper,
    trafficLightHead1, trafficLightHead2,
    trafficLightRed, trafficLightYellow, trafficLightGreen
)

const trafficLightArray = new Array();

for (let i = 0; i < 3; i++) {
    let a = 0
    trafficLightArray[i] = trafficLightSingle.clone();
    trafficLightArray[i].scale.set(.075, .075, .075)
    trafficLightArray[i].position.set(7.5 * Math.pow(-1, -i), .8, 7.5)
    trafficLightArray[i].rotateY(-Math.PI - Math.PI * i)
    // lanternsBulbsArray[i] = lanternBulb.clone();
    for (let j = 0; j < 8; j++) {
        if (j < 5) {
            trafficLightArray[i].children[j].castShadow = true
            trafficLightArray[i].children[j].receiveShadow = true
        } else {
            trafficLightArray[i].children[j].rotateZ(Math.PI / 2)
            trafficLightArray[i].children[j].position.set(-5, 96 - a * 8, -60)
            a++
        }
    }
    if (i % 2 == 0) {
        trafficLightArray[i].position.set(7.5, .8, -7.5)
    }
    if (i == 2) {
        trafficLightArray[i].rotateY(-Math.PI / 2)
        trafficLightArray[i].translateX(-15)
    }
    scene.add(trafficLightArray[i])
}

// const trafficLightBulb = new THREE.SpotLight(0xff0000, 1, 0, Math.PI / 4, 1, 2, 1);
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

/* const trafficLightsAArray = new Array();

/* setting multiple traffic lights (positioning, rotating, scaling)
*/

/* adding multiple traffic lights into group */
// trafficLightsAArray.forEach(element => {
// trafficLightsGroup.add(element);
// });

/* adding to scene all traffic lights */
