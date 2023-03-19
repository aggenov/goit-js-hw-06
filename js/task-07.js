const inputFontSize = document.querySelector("#font-size-control");
const spanElem = document.querySelector("#text");

spanElem.style.fontSize = `${inputFontSize.value}px`;

inputFontSize.addEventListener('input', changeFontSize);

function changeFontSize (event) {
    spanElem.style.fontSize = `${event.currentTarget.value}px`;
};