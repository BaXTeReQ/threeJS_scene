//STREET.JS

/* textures */
const roadTextures = [
    textureLoader.load('../ProjektGrafika/textures/road1.png'),
    textureLoader.load('../ProjektGrafika/textures/road2.png')
]

/* geometry */
const streetGeometry = new THREE.BoxGeometry(1, 0.1, 1);

/* materials */
const streetMaterials = [
    new THREE.MeshStandardMaterial({color: 0xffffff, map: roadTextures[0], side: THREE.DoubleSide}),
    new THREE.MeshStandardMaterial({color: 0xffffff, map: roadTextures[1], side: THREE.DoubleSide})
]

/* objects */
const streetBase1 = new THREE.Mesh(streetGeometry, streetMaterials[0]);
const streetBase2 = new THREE.Mesh(streetGeometry, streetMaterials[1]);

/* shadows */
streetBase1.receiveShadow = true;
streetBase2.receiveShadow = true;

/* street objects */
const street0 = streetBase1.clone()
const street1 = streetBase2.clone()

/* positions */
street0.position.set(0, 0, 17.5)
street1.position.set(0, 0, 0)

/* scales */
street0.scale.set(10, 1, 25)
street1.scale.set(10, 1, 70)

/* rotation */
street1.rotateY(Math.PI / 2)

/* adding to scene */
scene.add(street0, street1)