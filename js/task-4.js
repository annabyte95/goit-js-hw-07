const formElem = document.querySelector(".login-form");

formElem.addEventListener("submit", event => {
event.preventDefault();

const email = event.currentTarget.elements.email.value.trim();
const password = event.currentTarget.elements.password.value.trim();

if(email === "" || password === "") {
    alert('All form fields must be filled in');
    return;
}

const formData = {
    email,
    password,
};

console.log(formData);

event.currentTarget.reset();
} );