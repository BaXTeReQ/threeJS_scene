/* TREE0.JS */

const woodGeometry = new THREE.CylinderGeometry(.5, .5, 8, 32);
const woodMaterial = new THREE.MeshStandardMaterial({ color: 0x611d00 });
const woodBase = new THREE.Mesh(woodGeometry, woodMaterial);

const leavesGeometry0 = new THREE.CylinderGeometry(.75, 5, 4, 10);
const leavesGeometry1 = new THREE.CylinderGeometry(.1, 5, 4, 10);
const leavesMaterial0 = new THREE.MeshStandardMaterial({ color: 0x20bf6b });
const leavesBase0 = new THREE.Mesh(leavesGeometry0, leavesMaterial0);

const tree0Leaves0 = leavesBase0
const tree0Leaves1 = tree0Leaves0.clone()
const tree0Leaves2 = tree0Leaves0.clone()
const tree0Leaves3 = tree0Leaves0.clone()

const tree0 = [
    woodBase, tree0Leaves0, tree0Leaves1, tree0Leaves2, tree0Leaves3
]

tree0[1].position.set(0, -.25, 0);

tree0[2].scale.set(.75, .75, .75);
tree0[2].position.set(0, 1.5, 0);

tree0[3].scale.set(.5, .5, .5);
tree0[3].position.set(0, 3, 0);

tree0[4].geometry = leavesGeometry1;
tree0[4].scale.set(.375, .5, .375);
tree0[4].position.set(0, 4.25, 0);

tree0.forEach(element => {
    element.castShadow = true
    element.receiveShadow = true
    tree0Single.add(element)
});

const tree0Array = new Array()

for (let i = 0; i < 3; i++) {
    tree0Array[i] = tree0Single.clone()

    scene.add(tree0Array[i])
}

tree0Array[0].position.set(15, 4, 15)
tree0Array[1].position.set(-15, 4, 15)
tree0Array[2].position.set(-30, 4, 25)