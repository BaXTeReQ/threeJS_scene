//GLOBAL.JS

/* create a scene, that will hold all our elements such as objects, cameras and lights. */
const scene = new THREE.Scene();

/* create a camera, which defines where we're looking at. */
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

/* position and point the camera to the center of the scene */
camera.position.set(35, 35, -35);
// camera.position.set(15, 15, -15)
// camera.position.set(5, 5, 15)

/* create a render and set the size */
const renderer = new THREE.WebGLRenderer();

// renderer.setClearColor(new THREE.Color(0xdddddd));
renderer.setClearColor(new THREE.Color(0x222222));
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

/* add OrbitControls */
const controls = new THREE.OrbitControls(camera, renderer.domElement);

/* add the output of the renderer to the html element */
document.getElementById("WebGL-output").appendChild(renderer.domElement);

/* texture loader */
const textureLoader = new THREE.TextureLoader();

/* day light */
const daySpotLight = new THREE.SpotLight(0xfdfbd3, .5)
daySpotLight.position.set(0, 100, 0);
daySpotLight.shadow.mapSize.width = 2048;
daySpotLight.shadow.mapSize.height = 2048;
daySpotLight.angle = Math.PI / 4;
daySpotLight.castShadow = true;
scene.add(daySpotLight);

/* day light helper */
// const daySpotLightHelper = new THREE.SpotLightHelper(daySpotLight);
// scene.add(daySpotLightHelper)

/* add ambient light for better effect */
const ambientLight = new THREE.AmbientLight(0x494949, .5);
scene.add(ambientLight);

/* night light */
const nightSpotLight = new THREE.SpotLight(0xa5b1c2, .25)
nightSpotLight.position.set(0, -100, 0);
nightSpotLight.shadow.mapSize.width = 2048;
nightSpotLight.shadow.mapSize.height = 2048;
nightSpotLight.angle = Math.PI / 4;
nightSpotLight.castShadow = true;
scene.add(nightSpotLight);

/* night light helper */
// const nightSpotLightHelper = new THREE.SpotLightHelper(nightSpotLight);
// scene.add(nightSpotLightHelper)