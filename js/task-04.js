const counter = {
    value: 0,

    decrement() {
        this.value -= 1;
    },

    increment() {
        this.value += 1;
    },
}

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

//  Styles for button & Value
counterValue.style.fontSize = "40px";
incrementBtn.style.padding = "10px";
incrementBtn.style.margin = "10px";
decrementBtn.style.margin = "10px";


decrementBtn.addEventListener('click', () => {
    counter.decrement();
    counterValue.textContent = counter.value;
});

incrementBtn.addEventListener('click',  () => {
    counter.increment();
    counterValue.textContent = counter.value;
});

