/* LANTERN.JS */

const lanternBottomGeometry = new THREE.CylinderGeometry(2, 5, 20, 32);
const lanternBaseGeometry = new THREE.CylinderGeometry(1.5, 1.5, 100, 32);
const lanternUpperGeometry = new THREE.BoxGeometry(7.5, 2, 12.5);
const lanternMaterial = new THREE.MeshStandardMaterial({ color: 0x95a5a6 });
const lanternBottom = new THREE.Mesh(lanternBottomGeometry, lanternMaterial);
const lanternBase = new THREE.Mesh(lanternBaseGeometry, lanternMaterial);
const lanternUpper = new THREE.Mesh(lanternUpperGeometry, lanternMaterial);

lanternBottom.position.set(0, 1, 0)
lanternBase.position.set(0, 45, 0)
lanternUpper.position.set(0, 96, -5)
lanternUpper.rotateX(Math.PI / 10)

/* making light for lanterns */
const lanternBulb = new THREE.SpotLight(0xffffff, .85, 0, Math.PI / 4, 1, 1);
lanternBulb.castShadow = true;

const lanternLightGeometry = new THREE.BoxGeometry(4, 1, 9);
const lanternLightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: .5 /*do zmiany miedzy dniem a noca opacity: .5*/, transparent: true });
const lanternLight = new THREE.Mesh(lanternLightGeometry, lanternLightMaterial);
lanternLight.position.set(0, 95, -5)
lanternLight.rotateX(Math.PI / 10)

lanternSingle.add(lanternBottom, lanternBase, lanternUpper, lanternLight);

const lanternsArray = new Array();
const lanternsBulbsArray = new Array();

for (let i = 0; i < 8; i++) {
    lanternsArray[i] = lanternSingle.clone();
    lanternsArray[i].scale.set(.075, .075, .075)
    lanternsBulbsArray[i] = lanternBulb.clone();
    for (let j = 0; j < 3; j++) {
        lanternsArray[i].children[j].castShadow = true
        lanternsArray[i].children[j].receiveShadow = true
    }
    if (i < 6) {
        if (i % 2 == 0) {
            lanternsArray[i].position.set(30 - i * 10, .8, 7.5)
            lanternsBulbsArray[i].position.set(30 - i * 10, 8, 7.3)
            lanternsBulbsArray[i].target.position.set(30 - i * 10, 0, 2.3)
        } else {
            lanternsArray[i].position.set(30 - i * 10, .8, -7.5)
            lanternsArray[i].rotateY(Math.PI);
            lanternsBulbsArray[i].position.set(30 - i * 10, 8, -7.3)
            lanternsBulbsArray[i].target.position.set(30 - i * 10, 0, -2.3)
        }
        if (i > 2){
            lanternsArray[i].translateX(10)
            lanternsBulbsArray[i].translateX(-10)            
            lanternsBulbsArray[i].target.translateX(-10)            
        }
        if (i == 4) {
            lanternsArray[i].position.set(-20, .8, 7.5)
        }
    } else if (i == 7){
        lanternsArray[i].rotateY(Math.PI/2);
        lanternsArray[i].position.set(7.5, .8, 25)
        lanternsBulbsArray[i].position.set(7.3, 8, 25)
        lanternsBulbsArray[i].target.position.set(2.3, 0, 25)
    } else {
        lanternsArray[i].rotateY(-Math.PI * Math.pow(-1, i) / 2);
        lanternsArray[i].position.set(-7.5, .8, 15)
        lanternsBulbsArray[i].position.set(-7.3, 8, 15)
        lanternsBulbsArray[i].target.position.set(-2.3, 0, 15)
    }
    scene.add(lanternsArray[i], lanternsBulbsArray[i], lanternsBulbsArray[i].target)
}