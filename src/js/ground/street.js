//STREET.JS

const roadTexture1 = textureLoader.load('../ProjektGrafika/textures/road1.png');
const roadTexture2 = textureLoader.load('../ProjektGrafika/textures/road2.png');

/* base street object */
const streetGeometry = new THREE.BoxGeometry(1, 0.1, 1);
const streetMaterial1 = new THREE.MeshStandardMaterial({ /* color: 0x34495e */color: 0xffffff, map: roadTexture1, side: THREE.DoubleSide});
const streetMaterial2 = new THREE.MeshStandardMaterial({ /* color: 0x34495e */color: 0xffffff, map: roadTexture2, side: THREE.DoubleSide});
const streetBase1 = new THREE.Mesh(streetGeometry, streetMaterial1);
const streetBase2 = new THREE.Mesh(streetGeometry, streetMaterial2);
streetBase1.receiveShadow = true;


const streetsArray = new Array();

streetsArray[0] = streetBase1.clone();
streetsArray[0].position.set(0, 0, 17.5);
streetsArray[0].scale.set(10, 1, 25);

streetsArray[1] = streetBase2.clone();
streetsArray[1].position.set(0, 0, 0);
streetsArray[1].scale.set(10, 1, 70);
streetsArray[1].rotateY(Math.PI/2)



scene.add(streetsArray[0], streetsArray[1])

// streetsArray[0] = streetBase.clone();


// for (let i = 0; i < 2; i++) {
//     streetsArray[i] = streetBase.clone();
//     streetsArray[i].scale.set(70, 1, 10)
//     if (i == 1) {
//         streetsArray[i].scale.set(10, 1, 25)
//         streetsArray[i].position.set(0, 0, 17.5)
//     }
//     scene.add(streetsArray[i])
// }