const CSSline = document.querySelector('#CSSline');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const body = document.querySelector("#gradient");

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  CSSline.innerText = body.style.background;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

setGradient();