// View My Work button
const button = document.querySelector(".home-buttons button");

button.addEventListener("click", function () {
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });
});


// Navigation links
const links = document.querySelectorAll("nav a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("You clicked: " + link.textContent);
    });
});


// Contact Form
const form = document.querySelector("#contact-form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your message has been received. 🚀");

    form.reset();
});