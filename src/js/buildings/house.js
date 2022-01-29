/* HOUSE.JS */

const wallGeometry0 = new THREE.BoxGeometry(10, 5, .25);
const wallGeometry1 = new THREE.BoxGeometry(3.5, 5, .25);
const wallGeometry2 = new THREE.BoxGeometry(3, 1.75, .25);
const floorGeometry = new THREE.BoxGeometry(9.5, .25, 9.5);
const windowGeometry = new THREE.BoxGeometry(3, 1.5, .05);

const roofGeometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
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
roofGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
roofGeometry.computeVertexNormals()

const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xf7f1e3 });
const windowMaterial = new THREE.MeshStandardMaterial({ color: 0x7ed6df, transparent: true, opacity: .3 });
const wallMaterials = [
    new THREE.MeshStandardMaterial({ color: 0x686de0 }),
    new THREE.MeshStandardMaterial({ color: 0xe58e26 }),
    new THREE.MeshStandardMaterial({ color: 0x6d214f }),
    new THREE.MeshStandardMaterial({ color: 0x808e9b })
]

const roofMaterials = [
    new THREE.MeshStandardMaterial({ color: 0xff4757 }),
    new THREE.MeshStandardMaterial({ color: 0x0c2461 }),
    new THREE.MeshStandardMaterial({ color: 0xf97f51 }),
    new THREE.MeshStandardMaterial({ color: 0x3dc1d3 })
]

const wall0 = new THREE.Mesh(wallGeometry0, wallMaterials[0]);
const wall1 = new THREE.Mesh(wallGeometry1, wallMaterials[0]);
const wall2 = wall1.clone();
const wall3 = new THREE.Mesh(wallGeometry2, wallMaterials[0])
const wall4 = wall1.clone()
const wall5 = wall1.clone()
const wall6 = wall3.clone()
const wall7 = wall3.clone()
const wall8 = wall1.clone()
const wall9 = wall1.clone()
const wall10 = wall3.clone()
const wall11 = wall3.clone()

const floor0 = new THREE.Mesh(floorGeometry, floorMaterial);
const floor1 = floor0.clone();

const window0 = new THREE.Mesh(windowGeometry, windowMaterial);
const window1 = window0.clone();

const roof0 = new THREE.Mesh(roofGeometry, roofMaterials[0]);


wall0.position.set(0, 0, -4.875);
wall1.position.set(3, 0, 4.875);
wall2.position.set(-3, 0, 4.875);
wall3.position.set(0, 1.625, 4.875);
wall4.position.set(4.875, 0, 3.25);
wall5.position.set(4.875, 0, -3.25);
wall6.position.set(4.875, -1.625, 0);
wall7.position.set(4.875, 1.625, 0);
wall8.position.set(-4.875, 0, 3.25);
wall9.position.set(-4.875, 0, -3.25);
wall10.position.set(-4.875, -1.625, 0);
wall11.position.set(-4.875, 1.625, 0);

floor0.position.set(0, -2.375, 0);
floor1.position.set(0, 2.375, 0);

window0.position.set(4.875, 0, 0);
window1.position.set(-4.875, 0, 0);

buildingSingle.add(
    wall0, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11,
    window0, window1,
    floor0, floor1,
    roof0
)

const buildingArray = new Array();

for (let i = 0; i < 4; i++) {
    buildingArray[i] = buildingSingle.clone();
    buildingArray[i].position.set(-25 + 25 * i, 2.5, -20)
    if (i == 3) {
        buildingArray[i].position.set(25, 2.5, 20)
        buildingArray[i].rotateY(Math.PI)
    }
    for (let j = 0; j < 17; j++) {
        if (j > 3 && j < 15)
            buildingArray[i].children[j].rotateY(Math.PI / 2)
        buildingArray[i].children[j].castShadow = true
        buildingArray[i].children[j].receiveShadow = true
        if (j < 12) {
            buildingArray[i].children[j].material = wallMaterials[i];
        }
        if (j == 16) {
            buildingArray[i].children[j].material = roofMaterials[i];
        }

        if (j > 11 && j < 13) {
            buildingArray[i].children[j].castShadow = false
            buildingArray[i].children[j].receiveShadow = false
        }
    }
    scene.add(buildingArray[i])
}