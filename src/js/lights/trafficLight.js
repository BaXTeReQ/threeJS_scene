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
    /* lightRed */new THREE.MeshBasicMaterial({ color: 0xd63031, transparent: true, opacity: .7 }),
    /* lightYellow */new THREE.MeshBasicMaterial({ color: 0xf1c40f, transparent: true, opacity: .7 }),
    /* lightGreen */new THREE.MeshBasicMaterial({ color: 0x00b894, transparent: true, opacity: .7 })
]

const trafficLightElements = [
    /* bottom */new THREE.Mesh(trafficLightGeometry[0], trafficLightMaterials[0]),
    /* base */new THREE.Mesh(trafficLightGeometry[1], trafficLightMaterials[0]),
    /* upper */new THREE.Mesh(trafficLightGeometry[2], trafficLightMaterials[0]),
    /* head1 */new THREE.Mesh(trafficLightGeometry[3], trafficLightMaterials[1]),
    /* head2 */new THREE.Mesh(trafficLightGeometry[4], trafficLightMaterials[1]),
    /* lightRed */new THREE.Mesh(trafficLightGeometry[5], trafficLightMaterials[2]),
    /* lightYellow */new THREE.Mesh(trafficLightGeometry[5], trafficLightMaterials[3]),
    /* lightGreen */new THREE.Mesh(trafficLightGeometry[5], trafficLightMaterials[4])
]

/* shawows for trafficLight elements */
trafficLightElements.forEach(e => {
    e.castShadow = true
    e.receiveShadow = true
});

/* array for lights */
const RedLights = [
    new THREE.SpotLight(0xd63031, .9, 25, Math.PI / 3, 1, 1),
    new THREE.SpotLight(0xd63031, .9, 25, Math.PI / 3, 1, 1),
    new THREE.SpotLight(0xd63031, 0, 25, Math.PI / 3, 1, 1)
]

const YellowLights = [
    new THREE.SpotLight(0xf1c40f, 0, 25, Math.PI / 3, 1, 1),
    new THREE.SpotLight(0xf1c40f, 0, 25, Math.PI / 3, 1, 1),
    new THREE.SpotLight(0xf1c40f, 0, 25, Math.PI / 3, 1, 1),
]

const GreenLights = [
    new THREE.SpotLight(0x00b894, 0, 25, Math.PI / 3, 1, 1),
    new THREE.SpotLight(0x00b894, 0, 25, Math.PI / 3, 1, 1),
    new THREE.SpotLight(0x00b894, .9, 25, Math.PI / 3, 1, 1)
]

/* switching functions */
function redLightOn(x) {
    RedLights[x].intensity = .9
}

function redLightOff(x) {
    RedLights[x].intensity = 0
}

function yellowLightOn(x) {
    YellowLights[x].intensity = .9
}

function yellowLightOff(x) {
    YellowLights[x].intensity = 0
}

function greenLightOn(x) {
    GreenLights[x].intensity = .9
}

function greenLightOff(x) {
    GreenLights[x].intensity = 0
}

const onSequence = [
    redLightOn,
    yellowLightOn,
    greenLightOn,
]

const offFunction = x => {
    redLightOff(x)
    yellowLightOff(x)
    greenLightOff(x)
}

let sequenceIndex = 0
let sequenceIndex1 = 2
let direction = -1

setInterval(() => {
    offFunction(0)
    offFunction(1)
    offFunction(2)
    onSequence[sequenceIndex](0)
    onSequence[sequenceIndex](1)
    onSequence[sequenceIndex1](2)
    if (sequenceIndex === onSequence.length - 1 || sequenceIndex === 0) direction = -direction
    sequenceIndex = sequenceIndex + direction
    sequenceIndex1 = sequenceIndex1 - direction
}, 2500);

/* positions for lantern elements */
trafficLightElements[0].position.set(0, 1, 0)
trafficLightElements[1].position.set(0, 45, 0)
trafficLightElements[2].position.set(0, 95, 35)
trafficLightElements[3].position.set(4, 88, 60)
trafficLightElements[4].position.set(4, 88, 60)
trafficLightElements[5].position.set(5, 96, 60)
trafficLightElements[6].position.set(5, 88, 60)
trafficLightElements[7].position.set(5, 80, 60)

RedLights[0].position.set(8, 8, -3)
RedLights[1].position.set(-8, 8, 3)
RedLights[2].position.set(3, 8, 8)

YellowLights[0].position.set(8, 7.4, -3)
YellowLights[1].position.set(-8, 7.4, 3)
YellowLights[2].position.set(3, 7.4, 8)

GreenLights[0].position.set(8, 6.8, -3)
GreenLights[1].position.set(-8, 6.8, 3)
GreenLights[2].position.set(3, 6.8, 8)

RedLights[0].target.position.set(30, 0, -3)
RedLights[1].target.position.set(-30, 0, 3)
RedLights[2].target.position.set(3, 0, 30)

YellowLights[0].target.position.set(30, 0, -3)
YellowLights[1].target.position.set(-30, 0, 3)
YellowLights[2].target.position.set(3, 0, 30)

GreenLights[0].target.position.set(30, 0, -3)
GreenLights[1].target.position.set(-30, 0, 3)
GreenLights[2].target.position.set(3, 0, 30)

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
scene.add(
    trafficLight0, trafficLight1, trafficLight2,

    RedLights[0], RedLights[0].target,
    RedLights[1], RedLights[1].target,
    RedLights[2], RedLights[2].target,

    YellowLights[0], YellowLights[0].target,
    YellowLights[1], YellowLights[1].target,
    YellowLights[2], YellowLights[2].target,

    GreenLights[0], GreenLights[0].target,
    GreenLights[1], GreenLights[1].target,
    GreenLights[2], GreenLights[2].target
)