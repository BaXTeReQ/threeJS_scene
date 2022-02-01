/* post.JS */

/* geometry */
const postGeometry = new THREE.CylinderGeometry(1, 1, 7, 32);

/* materials */
const postMaterials = [
    new THREE.MeshStandardMaterial({ color: 0x95a5a6 }),
    new THREE.MeshStandardMaterial({ color: 0xffffff, opacity: .5, transparent: true })
]

/* elements for post */
const postElements = [
    new THREE.Mesh(postGeometry, postMaterials[0]),
    new THREE.Mesh(postGeometry, postMaterials[1]),
    new THREE.Mesh(postGeometry, postMaterials[0])
]

/* positions for post elements */
postElements[0].position.set(0, 0, 0);
postElements[1].position.set(0, 4.2, 0)
postElements[2].position.set(0, 5.25, 0)

/* scales for post elements */
postElements[1].scale.set(1, .2, 1)
postElements[2].scale.set(1, .1, 1)

/* shadows for post elements */
postElements.forEach(e => {
    e.receiveShadow = true
    e.castShadow = true
});

/* group for post elements */
const postSingle = new THREE.Group()
postSingle.add(postElements[0], postElements[1], postElements[2])

/* scale for group */
postSingle.scale.set(.2, .2, .2)

/* post objects */
const post0 = postSingle.clone()
const post1 = postSingle.clone()
const post2 = postSingle.clone()
const post3 = postSingle.clone()
const post4 = postSingle.clone()
const post5 = postSingle.clone()

/* positions for objects */
post0.position.set(12.5, .8, -15)
post1.position.set(12.5, .8, -20)
post2.position.set(12.5, .8, -25)
post3.position.set(-12.5, .8, -15)
post4.position.set(-12.5, .8, -20)
post5.position.set(-12.5, .8, -25)

/* adding to scene */
scene.add(post0, post1, post2, post3, post4, post5)