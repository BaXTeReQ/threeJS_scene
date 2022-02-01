/* HOUSE.JS */

/* textures */
const houseTextures = [
    textureLoader.load('../ProjektGrafika/textures/wallTexture1.png'),
    textureLoader.load('../ProjektGrafika/textures/wallTexture2.png'),
    textureLoader.load('../ProjektGrafika/textures/wallTexture3.png'),
    textureLoader.load('../ProjektGrafika/textures/wallTexture4.png')
]

/* geometries */
const houseGeometry = new THREE.BoxGeometry(10, 5, 10);

const roofGeometry = new THREE.BufferGeometry();
const roofVertices = new Float32Array([
    //FRONT
    5.5, 2.5, 5.0,
    0.0, 6.25, 5.0,
    -5.5, 2.5, 5.0,
    //RIGHT
    5.5, 2.5, 5.0,
    5.5, 2.5, -5.0,
    0.0, 6.25, -5.0,
    //
    5.5, 2.5, 5.0,
    0.0, 6.25, -5.0,
    0.0, 6.25, 5.0,
    //LEFT
    -5.5, 2.5, 5.0,
    0.0, 6.25, 5.0,
    0.0, 6.25, -5.0,
    //
    -5.5, 2.5, 5.0,
    0.0, 6.25, -5.0,
    -5.5, 2.5, -5.0,
    //BACK
    -5.5, 2.5, -5.0,
    0.0, 6.25, -5.0,
    5.5, 2.5, -5.0,
    //BOTTOM
    -5.5, 2.5, 5.0,
    5.5, 2.5, -5.0,
    5.5, 2.5, 5.0,
    //
    -5.5, 2.5, -5.0,
    5.5, 2.5, -5.0,
    -5.5, 2.5, 5.0,
]);
roofGeometry.setAttribute('position', new THREE.BufferAttribute(roofVertices, 3));
roofGeometry.computeVertexNormals()

/* materials */
const houseMaterials = [
    new THREE.MeshStandardMaterial({map : houseTextures[0], color: 0xffffff, side: THREE.DoubleSide}),
    new THREE.MeshStandardMaterial({map : houseTextures[1], color: 0xffffff, side: THREE.DoubleSide}),
    new THREE.MeshStandardMaterial({map : houseTextures[2], color: 0xffffff, side: THREE.DoubleSide}),
    new THREE.MeshStandardMaterial({map : houseTextures[3], color: 0xffffff, side: THREE.DoubleSide})
]

const roofMaterials = [
    new THREE.MeshStandardMaterial({ color: 0xff4757 }),
    new THREE.MeshStandardMaterial({ color: 0x0c2461 }),
    new THREE.MeshStandardMaterial({ color: 0xf97f51 }),
    new THREE.MeshStandardMaterial({ color: 0x3dc1d3 })
]

/* base objects */
const houseBase = [
    new THREE.Mesh(houseGeometry, houseMaterials[0]),
    new THREE.Mesh(houseGeometry, houseMaterials[1]),
    new THREE.Mesh(houseGeometry, houseMaterials[2]),
    new THREE.Mesh(houseGeometry, houseMaterials[3])
]

const roofBase = [
    new THREE.Mesh(roofGeometry, roofMaterials[0]),
    new THREE.Mesh(roofGeometry, roofMaterials[1]),
    new THREE.Mesh(roofGeometry, roofMaterials[2]),
    new THREE.Mesh(roofGeometry, roofMaterials[3]),
]

/* shadows */
houseBase.forEach(e => {
    e.castShadow = true
    e.receiveShadow = true
});

roofBase.forEach(e => {
    e.castShadow = true
    e.receiveShadow = true
});

/* groups */
const house0 = new THREE.Group()
const house1 = new THREE.Group()
const house2 = new THREE.Group()
const house3 = new THREE.Group()

house0.add(houseBase[0], roofBase[0])
house1.add(houseBase[1], roofBase[1])
house2.add(houseBase[2], roofBase[2])
house3.add(houseBase[3], roofBase[3])

/* positions */
house0.position.set(-25, 2.5, -20)
house1.position.set(0, 2.5, -20)
house2.position.set(25, 2.5, -20)
house3.position.set(25, 2.5, 20)

/* adding to scene */
scene.add(house0, house1, house2, house3)