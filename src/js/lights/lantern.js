// /* LANTERN.JS */

/* geometry */
const lanternGeometry = [
    /* bottom */new THREE.CylinderGeometry(2, 5, 20, 32),
    /* base */new THREE.CylinderGeometry(1.5, 1.5, 100, 32),
    /* upper */new THREE.BoxGeometry(7.5, 2, 12.5),
    /* light */new THREE.BoxGeometry(4, 1, 9)
]

/* material */
const lanternMaterials = [
    /* base */new THREE.MeshStandardMaterial({ color: 0x95a5a6 }),
    /* light */new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: .9 /*do zmiany miedzy dniem a noca opacity: .1*/, transparent: true })
]

/* elements for lantern */
const lanternElements = [
    /* bottom */new THREE.Mesh(lanternGeometry[0], lanternMaterials[0]),
    /* base */new THREE.Mesh(lanternGeometry[1], lanternMaterials[0]),
    /* upper */new THREE.Mesh(lanternGeometry[2], lanternMaterials[0]),
    /* light */new THREE.Mesh(lanternGeometry[3], lanternMaterials[1])
]

/* positions for lantern elements */
lanternElements[0].position.set(0, 1, 0)
lanternElements[1].position.set(0, 45, 0)
lanternElements[2].position.set(0, 96, -5)
lanternElements[3].position.set(0, 95, -6)

/* rotation for lantern element */
lanternElements[2].rotateX(Math.PI / 10)
lanternElements[3].rotateX(Math.PI / 10)

/* shadows for elements */
lanternElements.forEach(e => {
    e.castShadow = true
    e.receiveShadow = true
});

/* light for lanterns */
const lanternLight = new THREE.SpotLight(0xffffff, .75, 0, Math.PI / 5, 1, 1);

/* shadow casting for light */
lanternLight.castShadow = true;

/* group for lantern elements */
const lanternSingle = new THREE.Group()
lanternSingle.add(lanternElements[0], lanternElements[1], lanternElements[2], lanternElements[3]);

/* scale for group */
lanternSingle.scale.set(.075, .075, .075)

/* lantern objects */
const lantern0 = lanternSingle.clone()
const lantern1 = lanternSingle.clone()
const lantern2 = lanternSingle.clone()
const lantern3 = lanternSingle.clone()
const lantern4 = lanternSingle.clone()
const lantern5 = lanternSingle.clone()
const lantern6 = lanternSingle.clone()
const lantern7 = lanternSingle.clone()

/* lights for lanterns */
const lanternLight0 = lanternLight.clone()
const lanternLight1 = lanternLight.clone()
const lanternLight2 = lanternLight.clone()
const lanternLight3 = lanternLight.clone()
const lanternLight4 = lanternLight.clone()
const lanternLight5 = lanternLight.clone()
const lanternLight6 = lanternLight.clone()
const lanternLight7 = lanternLight.clone()

/* positions */
lantern0.position.set(30, .8, -7.5)
lantern1.position.set(10, .8, -7.5)
lantern2.position.set(-20, .8, -7.5)
lantern3.position.set(20, .8, 7.5)
lantern4.position.set(-10, .8, 7.5)
lantern5.position.set(-30, .8, 7.5)
lantern6.position.set(-7.5, .8, 15)
lantern7.position.set(7.5, .8, 25)

lanternLight0.position.set(30, 8, -7.3)
lanternLight1.position.set(10, 8, -7.3)
lanternLight2.position.set(-20, 8, -7.3)
lanternLight3.position.set(20, 8, 7.3)
lanternLight4.position.set(-10, 8, 7.3)
lanternLight5.position.set(-30, 8, 7.3)
lanternLight6.position.set(-7.3, 8, 15)
lanternLight7.position.set(7.3, 8, 25)

lanternLight0.target.position.set(30, 2, -2.5)
lanternLight1.target.position.set(10, 2, -2.5)
lanternLight2.target.position.set(-20, 2, -2.5)
lanternLight3.target.position.set(20, 2, 2.5)
lanternLight4.target.position.set(-10, 2, 2.5)
lanternLight5.target.position.set(-30, 2, 2.5)
lanternLight6.target.position.set(-2.5, 2, 15)
lanternLight7.target.position.set(2.5, 2, 25)

/* rotations */
lantern0.rotateY(Math.PI)
lantern1.rotateY(Math.PI)
lantern2.rotateY(Math.PI)
lantern6.rotateY(-Math.PI / 2)
lantern7.rotateY(Math.PI / 2)

/* adding to scene */
scene.add(
    lantern0, lantern1, lantern2, lantern3, lantern4, lantern5, lantern6, lantern7, 
    lanternLight0, lanternLight1, lanternLight2, lanternLight3, lanternLight4, lanternLight5, lanternLight6, lanternLight7,
    lanternLight0.target, lanternLight1.target, lanternLight2.target, lanternLight3.target, lanternLight4.target, lanternLight5.target, lanternLight6.target, lanternLight7.target 
)