//RENDER.JS

/* render scene */
renderer.render(scene, camera);

/* animations */
function animate() {
    requestAnimationFrame(animate);

    /* moving day and night lights */
    daySpotLight.position.x = 100 * Math.sin(Date.now() / 4800)
    daySpotLight.position.y = 100 * Math.cos(Date.now() / 4800)

    nightSpotLight.position.x = -100 * Math.sin(Date.now() / 4800)
    nightSpotLight.position.y = -100 * Math.cos(Date.now() / 4800)

    /* changing background color during a day */
    const color = Math.floor(((Math.cos(Date.now() / 4800) + 1) / 2 * 255))
    renderer.setClearColor(new THREE.Color(`rgb(${color}, ${color}, ${color})`))

    /* changing lights intensity */
    if (daySpotLight.position.y < 50 && daySpotLight.position.x > 0) {
        daySpotLight.intensity -= .0035
        if (daySpotLight.intensity < .0009 || daySpotLight.position.y < 0) {
            daySpotLight.intensity = 0
        }
    }
    if (daySpotLight.position.y > 0 && daySpotLight.position.x < 0) {
        daySpotLight.intensity += .0035
        if (daySpotLight.intensity > .449) {
            daySpotLight.intensity = .5
        }
    }

    if (nightSpotLight.position.y < 50 && nightSpotLight.position.x > 0) {
        nightSpotLight.intensity -= .00175
        if (nightSpotLight.intensity < .0009 || nightSpotLight.position.y < 0) {
            nightSpotLight.intensity = 0
        }
    }
    if (nightSpotLight.position.y > 0 && nightSpotLight.position.x < 0) {
        nightSpotLight.intensity += .00175
        if (nightSpotLight.intensity > .249) {
            nightSpotLight.intensity = .25
        }
    }

    /* animation for lanterns */
    lanternLightsArray.forEach(e => {
        if (daySpotLight.position.y > 20 && daySpotLight.position.x < 0)
            e.intensity -= .025
        if (e.intensity <= 0 || daySpotLight.position.y >= 40)
            e.intensity = 0
        if (daySpotLight.position.y < 20 && daySpotLight.position.x > 0)
            e.intensity += .025
        if (e.intensity >= .8 || daySpotLight.position.y <= 0)
            e.intensity = .8
    });
    lanternArray.forEach(e => {
        if (daySpotLight.position.y > 20 && daySpotLight.position.x < 0)
            e.children[3].material.opacity -= .02225
        if (e.children[3].material.opacity <= .1 || daySpotLight.position.y >= 30)
            e.children[3].material.opacity = .1
        if (daySpotLight.position.y < 20 && daySpotLight.position.x > 0)
            e.children[3].material.opacity += .02225
        if (e.children[3].material.opacity >= .9 || daySpotLight.position.y <= 10)
            e.children[3].material.opacity = .9
    });


    controls.update();
    renderer.render(scene, camera);
}

animate();