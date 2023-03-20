function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const spanText = document.querySelector('.color');

btnChangeColor.addEventListener('click', changeColor);

function changeColor() {
  let newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanText.textContent = newColor;
}