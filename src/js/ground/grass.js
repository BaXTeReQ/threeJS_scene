/* GRASS.JS */

/* geometry */
const grassGeometry = new THREE.BoxGeometry(1, 0.1, 1);

/* material */
const grassMaterial = new THREE.MeshStandardMaterial({ color: 0x27ae60 });

/* base obejct */
const grassBase = new THREE.Mesh(grassGeometry, grassMaterial);

/* shadows */
grassBase.receiveShadow = true;

/* grass objects */
const grass0 = grassBase.clone()
const grass1 = grassBase.clone()
const grass2 = grassBase.clone()
const grass3 = grassBase.clone()
const grass4 = grassBase.clone()

/* positions */
grass0.position.set(22.5, 0, 20)
grass1.position.set(-22.5, 0, 20)
grass2.position.set(25, 0, -20)
grass3.position.set(0, 0, -20)
grass4.position.set(-25, 0, -20)

/* scales */
grass0.scale.set(25, 1, 20)
grass1.scale.set(25, 1, 20)
grass2.scale.set(20, 1, 20)
grass3.scale.set(20, 1, 20)
grass4.scale.set(20, 1, 20)

/* adding to scene */
scene.add(grass0, grass1, grass2, grass3, grass4)