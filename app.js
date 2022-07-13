// Disable pasting on the form

const email = document.getElementById("email")
const password = document.getElementById("password")

window.onload = () => {
    email.onpaste = e => e.preventDefault();
    password.onpaste = e => e.preventDefault();
   }