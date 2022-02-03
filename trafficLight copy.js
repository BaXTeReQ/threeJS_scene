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
    /* lightRed */new THREE.MeshStandardMaterial({ color: 0xd63031, transparent: true, opacity: .9 }),
    /* lightYellow */new THREE.MeshStandardMaterial({ color: 0xf1c40f, transparent: true, opacity: .9 }),
    /* lightGreen */new THREE.MeshStandardMaterial({ color: 0x00b894, transparent: true, opacity: .9 }),
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
trafficLightSingle.add(
    trafficLightElements[0], trafficLightElements[1], trafficLightElements[2],
    trafficLightElements[3], trafficLightElements[4], trafficLightElements[5],
    trafficLightElements[6], trafficLightElements[7]
)

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