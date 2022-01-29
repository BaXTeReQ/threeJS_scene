/* GRASS.JS */

const grassGeometry = new THREE.BoxGeometry(1, 0.1, 1);
const grassMaterial = new THREE.MeshStandardMaterial({ color: 0x27ae60 });
const grassBase = new THREE.Mesh(grassGeometry, grassMaterial);
grassBase.receiveShadow = true;

const grassArray = new Array();

for (let i = 0; i < 5; i++) {
    grassArray[i] = grassBase.clone();
    if (i < 2) {
        grassArray[i].scale.set(25, 1, 20)
        grassArray[i].position.set(22.5, 0, 20)
        if (i % 2 != 0)
            grassArray[i].position.set(-22.5, 0, 20)
    }
    else {
        grassArray[i].scale.set(20, 1, 20)
        grassArray[i].position.set(i * -25 + 75, 0, -20)
    }
    scene.add(grassArray[i])
}