/* SIDEWALK.JS */

/* base sidewalk object */
const sidewalkGeometry = new THREE.BoxGeometry(1, 0.1, 1);
const sidewalkMaterial = new THREE.MeshStandardMaterial({ color: 0xf7f1e3 });
const sidewalkBase = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
sidewalkBase.receiveShadow = true;

/* Array for sidewalks */
const sidewalksArray = new Array();

for (let i = 0; i < 7; i++) {
    /* cloning base sidewalk */
    sidewalksArray[i] = sidewalkBase.clone();
    /* sidewalks close to houses */
    if (i < 4) {
        sidewalksArray[i].scale.set(20, 2, 5)
        sidewalksArray[i].rotateY(Math.PI / 2)
        if (i < 2) {
            sidewalksArray[i].position.set(7.5 * Math.pow(-1, i), .05, 20)
        } else {
            sidewalksArray[i].position.set(12.5 * Math.pow(-1, i), .05, -20)
        }
        /* main long sidewalk */
    } else if (i > 5) {
        sidewalksArray[i].scale.set(70, 2, 5)
        sidewalksArray[i].position.set(0, 0.05, -7.5)
        /* other main sidewalks */
    } else {
        sidewalksArray[i].scale.set(30, 2, 5)
        sidewalksArray[i].position.set(20 * Math.pow(-1, i), .05, 7.5)
    }
    /* adding all sidewalks to scene */
    scene.add(sidewalksArray[i])
}