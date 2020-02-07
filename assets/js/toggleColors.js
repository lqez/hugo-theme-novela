document.getElementById("themeColorButton").addEventListener("click", toggleColors);

let bodyElement = document.getElementsByTagName("BODY")[0];
let moonOrSun = document.getElementById("moonOrSun");
let sunRays = document.getElementById("sunRays");
let moonMask = document.getElementById("moonMask");
let variables = [
    'primary',
    'secondary',
    'grey',
    'background-color',
    'accent',
    'hover',
    'gradient',
    'articleText',
    'track',
    'progress',
    'card',
    'error',
    'success',
    'errorBackground',
    'horizontalRule',
    'inputBackground',
    'tooltip',
];

initAnimation();

function initAnimation(){
    if (localStorage.getItem("isLight") === 'true'){
        moonMask.style.top = "-8px";
        moonMask.style.right = "-5px";
        moonOrSun.style.transform = "scale(1)"
        sunRays.style.transform = "scale(0.1)"
    }
    else{
        moonMask.style.top = "-25px";
        moonMask.style.right = "-15px";
        moonOrSun.style.transform = "scale(0.5)"
        sunRays.style.transform = "scale(0.6)"
    }
}

function toggleColors(){
    if (localStorage.getItem("isLight") === 'true'){
        makeDark();

        moonMask.classList.add("mask-to-sun-animation");
        moonOrSun.classList.add("to-sun-animation");
        sunRays.classList.add("expand-rays");

        setTimeout(function(){
            sunRays.classList.remove("expand-rays");
        }, 500);
        setTimeout(function(){
            moonMask.classList.remove("mask-to-sun-animation");
            moonOrSun.classList.remove("to-sun-animation");
            initAnimation();
        }, 400);

        localStorage.setItem("isLight", 'false');
    }
    else{
        makeLight();

        moonMask.classList.add("mask-to-moon-animation");
        moonOrSun.classList.add("to-moon-animation");
        sunRays.classList.add("contract-rays");


        setTimeout(function(){
            sunRays.classList.remove("contract-rays");
        }, 500);
        setTimeout(function(){
            moonMask.classList.remove("mask-to-moon-animation");
            moonOrSun.classList.remove("to-moon-animation");
            sunRays.classList.remove("contract-rays");
            initAnimation();
        }, 400);

        localStorage.setItem("isLight", 'true');
    }
}

function makeDark(){
    variables.forEach(key => {
      bodyElement.style.setProperty('--' + key, 'var(--dark-' + key + ')');
    });
}

function makeLight(){
    variables.forEach(key => {
      bodyElement.style.setProperty('--' + key, '');
    });
}
