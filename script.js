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


// Contact Form - Formspree
const form = document.querySelector("#contact-form");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const submitButton = form.querySelector("button");

    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            alert("Message sent successfully! 🚀📩");
            form.reset();
        } else {
            alert("Message could not be sent. Please try again.");
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    }

    submitButton.textContent = "Send Message";
    submitButton.disabled = false;
});
// Typing Animation
const typingText = document.querySelector("#typing");

const words = [
    "Web Developer",
    "Java Programmer",
    "Python Developer",
    "Full Stack Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();
// Mobile Menu
const menuIcon = document.querySelector("#menu-icon");
const navMenu = document.querySelector("#nav-menu");

menuIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});
// Dark / Light Mode
const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});
