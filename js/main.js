const lights = document.querySelectorAll('.light');
let currentLightIndex = 0;

function changeLightColor() {
    
    lights[0].style.background = "rgba(255, 0, 0, .4)";
    lights[1].style.background = "rgba(255, 255, 0, .4)";
    lights[2].style.background = "rgba(0, 255, 0, .4)";
    
    const currentLight = lights[currentLightIndex];

    if (currentLightIndex === 0) {
        currentLight.style.background = "red";
        currentLightIndex = 1;
        setTimeout(changeLightColor, 10000);
    } else if (currentLightIndex === 1) {
        currentLight.style.background = "yellow";
        currentLightIndex = 2;
        setTimeout(changeLightColor, 2000);
    } else if (currentLightIndex === 2) {
        currentLight.style.background = "rgb(0, 255, 0)";
        currentLightIndex = 0;
        setTimeout(changeLightColor, 15000);
    }
}

changeLightColor();
