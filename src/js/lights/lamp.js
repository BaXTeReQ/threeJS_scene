/* LAMP.JS */

const lampBaseGeometry = new THREE.CylinderGeometry(1, 1, 7, 32);
const lampBaseMaterial = new THREE.MeshStandardMaterial({ color: 0x95a5a6 });
const lampMiddleMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, opacity: .5, transparent: true });
const lampBase = new THREE.Mesh(lampBaseGeometry, lampBaseMaterial);
const lampMiddle = new THREE.Mesh(lampBaseGeometry, lampMiddleMaterial)
const lampUpper = new THREE.Mesh(lampBaseGeometry, lampBaseMaterial)

lampBase.position.set(0, 0, 0);

lampMiddle.scale.set(1, .2, 1)
lampMiddle.position.set(0, 4.2, 0)

lampUpper.scale.set(1, .1, 1)
lampUpper.position.set(0, 5.25, 0)

lampSingle.add(lampBase, lampMiddle, lampUpper)

const lampsArray = new Array();

for (let i = 0; i < 6; i++) {
    lampsArray[i] = lampSingle.clone()
    lampsArray[i].scale.set(.2, .2, .2)
    for (let j = 0; j < 3; j++) {
        lampsArray[i].children[j].castShadow = true
        lampsArray[i].children[j].receiveShadow = true
    }
    if (i < 3) lampsArray[i].position.set(12.5, .8, -15 - (5 * i))
    else lampsArray[i].position.set(-12.5, .8, -5 * i)
    scene.add(lampsArray[i])
}