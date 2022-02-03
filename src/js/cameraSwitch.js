/*  CAMERASWITCH.JS */

/* buttons */
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

/* events */
btn1.addEventListener('click', ()=>{
    camera.position.set(39, 6, 11)
    controls.target.set(-25, 3, -23)
    controls.enabled = false
});

btn2.addEventListener('click', ()=>{
    camera.position.set(25, 10, -26)
    controls.target.set(5, 3, -10)
    controls.enabled = false
});

btn3.addEventListener('click', ()=>{
    camera.position.set(-14, 3, 31)
    controls.target.set(10, 3, -3)
    controls.enabled = false
});

btn4.addEventListener('click', ()=>{
    camera.position.set(-39, 3, 4)
    controls.target.set(0, 3, 0)
    controls.enabled = false
});

btn5.addEventListener('click', ()=>{
    camera.position.set(35, 35, -35)
    controls.target.set(0, 0, 0)
    controls.enabled = true
    controls.update()
});