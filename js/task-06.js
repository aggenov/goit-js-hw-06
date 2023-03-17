const inputText = document.querySelector("#validation-input");

inputText.addEventListener("blur", onInputText);

function onInputText(event) {
    console.log(event.currentTarget.value.length);
    console.log(Number(inputText.dataset.length));

    if (event.currentTarget.value.length === Number(inputText.dataset.length)) {
        console.log("ClassList: valid",event.classList);
        inputText.classList.add("valid");
        inputText.classList.remove("invalid");
    }
    else {
        console.log("ClassList: invalid",event.classList);
        inputText.classList.add("invalid");
        inputText.classList.remove("valid");
    }
}
