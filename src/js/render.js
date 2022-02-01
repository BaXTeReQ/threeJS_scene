//RENDER.JS

/* render scene */
renderer.render(scene, camera);

/* animation settings */
function animate() {
    requestAnimationFrame(animate);

    // dobre/przetestowane wartosci
    // daySpotLight.position.x = 100 * Math.sin(Date.now() / 4800)
    // daySpotLight.position.y = 100 * Math.cos(Date.now() / 4800)

    // nightSpotLight.position.x = -100 * Math.sin(Date.now() / 4800)
    // nightSpotLight.position.y = -100 * Math.cos(Date.now() / 4800)
    //

    //te raczej tez
    // if (daySpotLight.position.y < 70 && daySpotLight.position.x > 0) {
    //     daySpotLight.intensity -= .002
    //     if (daySpotLight.intensity < .0009 || daySpotLight.position.y < -20) {
    //         daySpotLight.intensity = 0
    //     }
    //     // lanternsOn(daySpotLight.position.y);
    // }
    // if (daySpotLight.position.y > -20 && daySpotLight.position.x < 0) {
    //     daySpotLight.intensity += .002
    //     if (daySpotLight.intensity > .499) {
    //         daySpotLight.intensity = .5
    //     }
    //     // lanternsOff(daySpotLight.position.y);
    // }
    // if (daySpotLight.position.y < -10)
    //     daySpotLight.intensity = 0     
    
    // if (nightSpotLight.position.y < 70 && nightSpotLight.position.x > 0) {
    //     nightSpotLight.intensity -= .001
    //     if (nightSpotLight.intensity < .0009 || nightSpotLight.position.y < -20) {
    //         nightSpotLight.intensity = 0
    //     }
    // }
    // if (nightSpotLight.position.y > -20 && nightSpotLight.position.x < 0) {
    //     nightSpotLight.intensity += .001
    //     if (nightSpotLight.intensity > .249) {
    //         nightSpotLight.intensity = .25
    //     }
    // }
    // if (nightSpotLight.position.y < -10)
    //     nightSpotLight.intensity = 0    
    //
    
        
        
        
    // console.log(nightSpotLight.intensity)
        // console.log(daySpotLight.intensity)
        // console.log(daySpotLight.position.y)
    
        // console.log(daySpotLight.intensity)
    
        // console.log(dayAmbientLight.intensity)
        // console.log(daySpotLight.position.y)
        // console.log(daySpotLight.position.x)
    
        // console.log(nightSpotLight.position.x)
        // console.log(nightSpotLight.position.y)


    

    // if (daySpotLight.position.y < 75 && daySpotLight.position.y > -75) {

    // }
    // if (daySpotLight.intensity < 0) daySpotLight.intensity == 0
    // else if (daySpotLight.position.y > -30 && daySpotLight.position.x < -60) {
    //     if (daySpotLight.intensity > .05) daySpotLight.intensity == .05
    //     daySpotLight.intensity += .05
    // }
    // if (daySpotLight.intensity < .05) daySpotLight.intensity = 0
    // if (daySpotLight.intensity > .05) daySpotLight.intensity = .5



    // nightSpotLight.position.x = -100 * Math.sin(Date.now() / 9600)
    // nightSpotLight.position.y = -100 * Math.cos(Date.now() / 9600)






    // if (daySpotLight.position.y < 40) {
    //     if (daySpotLight.intensity > .01) {
    //         daySpotLight.intensity -= .005
    //         // dayAmbientLight.intensity -= .005
    //     }
    //     else {
    //         daySpotLight.intensity = 0
    //         // dayAmbientLight.intensity = 0
    //     }
    // }
    // else if (daySpotLight.position.y > -40) {
    //     if (daySpotLight.intensity > .74) {
    //         daySpotLight.intensity = .75
    //         // dayAmbientLight.intensity = .5
    //     }
    //     else {
    //         daySpotLight.intensity += .005
    //         // dayAmbientLight.intensity += .005
    //     }
    // }

    // if (nightSpotLight.position.y < 40) {
    //     if (nightSpotLight.intensity > .01) {
    //         nightSpotLight.intensity -= .0025
    //         nightAmbientLight.intensity -= .0025
    //     }
    //     else {
    //         nightSpotLight.intensity = 0
    //         nightAmbientLight.intensity = 0
    //     }
    // }
    // else if (nightSpotLight.position.y > -40) {
    //     if (nightSpotLight.intensity > .74) {
    //         nightSpotLight.intensity = .75
    //         nightAmbientLight.intensity = .5
    //     }
    //     else {
    //         nightSpotLight.intensity += .0025
    //         nightAmbientLight.intensity += .0025
    //     }
    // }

    // if (nightSpotLight.position.y > -10) {
    //     if (nightSpotLight.intensity > .74)
    //         nightSpotLight.intensity = .75
    //     else nightSpotLight.intensity += .025
    // }
    // else if (nightSpotLight.position.y < 10) {
    //     if (nightSpotLight.intensity > .01)
    //         nightSpotLight.intensity -= .025
    //     else nightSpotLight.intensity = 0
    // }

    // console.log(lanternsBulbsArray[0].children)

    controls.update();
    renderer.render(scene, camera);
}

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