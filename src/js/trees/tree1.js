/* TREE1.JS */

const leavesGeometry2 = new THREE.IcosahedronGeometry(3);
const leavesBase1 = new THREE.Mesh(leavesGeometry2, leavesMaterial0);

const tree1Leaves0 = leavesBase1

const tree1 = [
    woodBase, tree1Leaves0
]

tree1Leaves0.position.set(0, 2.5, 0)

tree1.forEach(element => {
    element.castShadow = true
    element.receiveShadow = true
    tree1Single.add(element)
});

const tree1Array = new Array()

for (let i = 0; i < 7; i++) {
    tree1Array[i] = tree1Single.clone()

    tree1Array[i].children[1].rotateY(Math.PI / Math.random() * 7 + 1)

    scene.add(tree1Array[i])
}

tree1Array[0].position.set(15, 4, 25)
tree1Array[1].position.set(-25, 4, 15)
tree1Array[2].position.set(-20, 4, 22.5)
tree1Array[3].position.set(-12.5, 4, 25)
tree1Array[4].position.set(-17.5, 4, -12.5)
tree1Array[5].position.set(17.5, 4, -12.5)
tree1Array[6].position.set(-7.5, 4, -12.5)