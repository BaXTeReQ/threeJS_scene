/* SIDEWALK.JS */

/* geometry */
const sidewalkGeometry = new THREE.BoxGeometry(1, 0.1, 1);

/* material */
const sidewalkMaterial = new THREE.MeshStandardMaterial({ color: 0xf7f1e3 });

/* base obejct */
const sidewalkBase = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);

/* shadows */
sidewalkBase.receiveShadow = true;
// sidewalkBase.receiveShadow = true;

/* sidewalks objects */
const sidewalk0 = sidewalkBase.clone()
const sidewalk1 = sidewalkBase.clone()
const sidewalk2 = sidewalkBase.clone()
const sidewalk3 = sidewalkBase.clone()
const sidewalk4 = sidewalkBase.clone()
const sidewalk5 = sidewalkBase.clone()
const sidewalk6 = sidewalkBase.clone()

/* positions */
sidewalk0.position.set(12.5, .05, -20)
sidewalk1.position.set(-12.5, .05, -20)
sidewalk2.position.set(7.5, .05, 20)
sidewalk3.position.set(-7.5, .05, 20)
sidewalk4.position.set(0, .05, -7.5)
sidewalk5.position.set(20, .05, 7.5)
sidewalk6.position.set(-20, .05, 7.5)

/* scales */
sidewalk0.scale.set(5, 2, 20)
sidewalk1.scale.set(5, 2, 20)
sidewalk2.scale.set(5, 2, 20)
sidewalk3.scale.set(5, 2, 20)
sidewalk4.scale.set(70, 2, 5)
sidewalk5.scale.set(30, 2, 5)
sidewalk6.scale.set(30, 2, 5)

/* adding to scene */
scene.add(sidewalk0, sidewalk1, sidewalk2, sidewalk3, sidewalk4, sidewalk5, sidewalk6)