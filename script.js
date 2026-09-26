/* =========================
   TYPING ANIMATION
========================= */

const typingText = document.querySelector("#typing");

const words = [
    "Full Stack Developer",
    "Web Developer",
    "Java Programmer",
    "Python Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}

typeEffect();


/* =========================
   MOBILE MENU
========================= */

const menuIcon = document.querySelector("#menu-icon");
const navMenu = document.querySelector("#nav-menu");

if (menuIcon && navMenu) {

    menuIcon.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });


    /* Close menu after clicking a link */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

        });

    });
}


/* =========================
   DARK / LIGHT MODE
========================= */

const themeToggle =
    document.querySelector("#theme-toggle");

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (
            document.body.classList.contains("light-mode")
        ) {

            themeToggle.textContent = "☀️";

        } else {

            themeToggle.textContent = "🌙";

        }

    });

}


/* =========================
   NAVIGATION
========================= */

const navLinks =
    document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log(
            "You clicked: " + link.textContent
        );

    });

});


/* =========================
   VIEW MY WORK BUTTON
========================= */

const workButton =
    document.querySelector(".primary-btn");

if (workButton) {

    workButton.addEventListener("click", function (event) {

        event.preventDefault();

        const projects =
            document.querySelector("#projects");

        if (projects) {

            projects.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}