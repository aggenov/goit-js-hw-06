const form = document.querySelector(".login-form")

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }
    // console.dir(event.currentTarget.elements.email.name);
    // console.log(event.currentTarget.elements.email.value);
  console.log(`${email.name}: ${email.value}, ${password.name}: ${password.value}`);
  event.currentTarget.reset();
}