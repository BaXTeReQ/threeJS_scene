//STREET.JS

/* base street object */
const streetGeometry = new THREE.BoxGeometry(1, 0.1, 1);
const streetMaterial = new THREE.MeshStandardMaterial({ color: 0x34495e });
const streetBase = new THREE.Mesh(streetGeometry, streetMaterial);
streetBase.receiveShadow = true;

const streetsArray = new Array();

for (let i = 0; i < 2; i++) {
    streetsArray[i] = streetBase.clone();
    streetsArray[i].scale.set(70, 1, 10)
    if (i == 1) {
        streetsArray[i].scale.set(10, 1, 25)
        streetsArray[i].position.set(0, 0, 17.5)
    }
    scene.add(streetsArray[i])
}