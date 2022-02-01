//RENDER.JS

/* render scene */
renderer.render(scene, camera);

/* animations */
function animate() {
    requestAnimationFrame(animate);

    // dobre/przetestowane wartosci
    daySpotLight.position.x = 100 * Math.sin(Date.now() / 4800)
    daySpotLight.position.y = 100 * Math.cos(Date.now() / 4800)

    nightSpotLight.position.x = -100 * Math.sin(Date.now() / 4800)
    nightSpotLight.position.y = -100 * Math.cos(Date.now() / 4800)
    //

    console.log(nightSpotLight.position.y)
    console.log(nightSpotLight.intensity)



    //te raczej tez
    if (daySpotLight.position.y < 50 && daySpotLight.position.x > 0) {
        daySpotLight.intensity -= .0035
        if (daySpotLight.intensity < .0009 || daySpotLight.position.y < 0) {
            daySpotLight.intensity = 0
        }        
        // lanternsOn(daySpotLight.position.y);
    }   
    if (daySpotLight.position.y > 0 && daySpotLight.position.x < 0) {
        daySpotLight.intensity += .0035
        if (daySpotLight.intensity > .449) {
            daySpotLight.intensity = .5
        }
        // lanternsOn(daySpotLight.position.y);
    }        
    if (nightSpotLight.position.y < 50 && nightSpotLight.position.x > 0) {
        nightSpotLight.intensity -= .0035
        if (nightSpotLight.intensity < .0009 || nightSpotLight.position.y < 0) {
            nightSpotLight.intensity = 0
        }        
        // lanternsOn(daySpotLight.position.y);
    }   
    if (nightSpotLight.position.y > 0 && nightSpotLight.position.x < 0) {
        nightSpotLight.intensity += .0035
        if (nightSpotLight.intensity > .449) {
            nightSpotLight.intensity = .5
        }
        // lanternsOn(daySpotLight.position.y);
    }    
        
    controls.update();
    renderer.render(scene, camera);
}

/* lanterns on day */
function lanternsOff(y){
    lanternsBulbsArray.forEach(e => {
        if(e.intensity <= .01225 || y > 10) e.intensity = 0
        else e.intensity -= .01225;
    });
    lanternsArray.forEach(e => {
        if(e.children[3].material.opacity <= .1) e.children[3].material.opacity = .1;
        else e.children[3].material.opacity -= .00225;
        //if(f.material.opacity >= 1) f.material.opacity = 1
        //else f.material.opacity += .05;
    });
    // lanternsArray.forEach(e => {
    //     e.children.forEach(f => {
    //         if(f.material.opacity <= .15) f.material.opacity = .1
    //         else f.material.opacity -= .05;
    //     });
    // });
}

/* lanterns on night */
function lanternsOn(y){
    lanternsBulbsArray.forEach(e => {
        if(e.intensity >= .84 || y < -20) e.intensity = .85
        else e.intensity += .01225;
    });
    lanternsArray.forEach(e => {
        if(e.children[3].material.opacity >= 1) e.children[3].material.opacity = 1;
        else e.children[3].material.opacity += .00225;
        //if(f.material.opacity >= 1) f.material.opacity = 1
        //else f.material.opacity += .05;
    });
    // lanternsArray.forEach(e => {
    //     e.children.forEach(f => {
    //         if(f.material.opacity >= 1) f.material.opacity = 1
    //         else f.material.opacity += .05;
    //     });
    // });
}

animate();