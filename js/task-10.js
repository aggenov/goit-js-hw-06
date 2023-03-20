function getRandomHexColor() {                      // генерация случайного цвета
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputValue = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');

let amount;

inputValue.addEventListener('input', isInputValue); // определение числа элементов 
btnCreate.addEventListener('click', createBoxes);   // добавление элементов
btnDestroy.addEventListener('click', destroyBoxes); // очистка

function isInputValue(event) {
  amount = Number(event.currentTarget.value);
  return;
}

function createBoxes() {
     let newElement = [];                           //массив новых элементов размером  = amount
  for (let i = 0; i < amount; i+=1){
    const divEl = document.createElement('div');    //каждый из элементов
    const sizeEl = 30 + 10 * i;                     //размер элемента
    divEl.style.width = `${sizeEl}px`;
    divEl.style.height = `${sizeEl}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    newElement.push(divEl);
  }
  box.append(...newElement);                        //добавление массива элементов в div
}

function destroyBoxes() {
  box.innerHTML = "";
  inputValue.value = "";
}