/* TREE0.JS */

/* geometry */
const treeGeometry = [
    /* trunk */new THREE.CylinderGeometry(.5, .5, 8, 32),
    /* leaves0 */new THREE.CylinderGeometry(.75, 5, 4, 10),
    /* leaves1 */new THREE.CylinderGeometry(.1, 5, 4, 10),
    /* leaves2 */new THREE.IcosahedronGeometry(3)
]

/* materials */
const treeMaterials = [
    /* trunk */new THREE.MeshStandardMaterial({ color: 0x611d00 }),
    /* leaves0 */new THREE.MeshStandardMaterial({ color: 0x20bf6b })
]

/* elements for tree */
const treeElements = [
    /* trunk */new THREE.Mesh(treeGeometry[0], treeMaterials[0]),
    /* leaves0 */new THREE.Mesh(treeGeometry[1], treeMaterials[1]),
    /* leaves1 */new THREE.Mesh(treeGeometry[1], treeMaterials[1]),
    /* leaves2 */new THREE.Mesh(treeGeometry[1], treeMaterials[1]),
    /* leaves3 */new THREE.Mesh(treeGeometry[2], treeMaterials[1]),
    /* leaves4 */new THREE.Mesh(treeGeometry[3], treeMaterials[1])
]

/* shadows for tree elements */
treeElements.forEach(e => {
    e.receiveShadow = true
    e.castShadow = true
});

/* positions for tree elements */
treeElements[0].position.set(0, 0, 0)
treeElements[1].position.set(0, -.25, 0)
treeElements[2].position.set(0, 1.5, 0)
treeElements[3].position.set(0, 3, 0)
treeElements[4].position.set(0, 4.25, 0)
treeElements[5].position.set(0, 2.5, 0)

/* scale for tree elements */
treeElements[2].scale.set(.75, .75, .75)
treeElements[3].scale.set(.5, .5, .5)
treeElements[4].scale.set(.375, .5, .375)

/* group for tree elements */
const tree0Single = new THREE.Group()
const tree1Single = new THREE.Group()
tree0Single.add(treeElements[0], treeElements[1], treeElements[2], treeElements[3], treeElements[4])
tree1Single.add(treeElements[0], treeElements[5])

/* tree objects */
const tree0 = tree0Single.clone()
const tree1 = tree0Single.clone()
const tree2 = tree0Single.clone()
const tree3 = tree1Single.clone()
const tree4 = tree1Single.clone()
const tree5 = tree1Single.clone()
const tree6 = tree1Single.clone()
const tree7 = tree1Single.clone()
const tree8 = tree1Single.clone()
const tree9 = tree1Single.clone()

/* positions */
tree0.position.set(15, 4, 15)
tree1.position.set(-15, 4, 15)
tree2.position.set(-30, 4, 25)
tree3.position.set(15, 4, 25)
tree4.position.set(-25, 4, 15)
tree5.position.set(-20, 4, 22.5)
tree6.position.set(-12.5, 4, 25)
tree7.position.set(-17.5, 4, -12.5)
tree8.position.set(17.5, 4, -12.5)
tree9.position.set(-7.5, 4, -12.5)

/* rotation for tree leaves */
tree3.rotateY(Math.PI / Math.random() * 7 + 1)
tree4.rotateY(Math.PI / Math.random() * 7 + 1)
tree5.rotateY(Math.PI / Math.random() * 7 + 1)
tree6.rotateY(Math.PI / Math.random() * 7 + 1)
tree7.rotateY(Math.PI / Math.random() * 7 + 1)
tree8.rotateY(Math.PI / Math.random() * 7 + 1)
tree9.rotateY(Math.PI / Math.random() * 7 + 1)

/* adding to scene */
scene.add(
    tree0, tree1, tree2, 
    tree3, tree4, tree5, tree6, tree7, tree8, tree9
)