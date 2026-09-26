/* ================= MOBILE MENU ================= */

const menuIcon = document.querySelector("#menu-icon");
const navMenu = document.querySelector("#nav-menu");

if (menuIcon) {

    menuIcon.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

}


/* ================= CLOSE MOBILE MENU ================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* ================= TYPING EFFECT ================= */

const heroTitle = document.querySelector(".small-red");

const titles = [
    "FULL STACK DEVELOPER",
    "JAVA DEVELOPER",
    "PYTHON DEVELOPER",
    "WEB DEVELOPER"
];

let titleIndex = 0;

setInterval(function () {

    titleIndex++;

    if (titleIndex >= titles.length) {
        titleIndex = 0;
    }

    if (heroTitle) {
        heroTitle.textContent = titles[titleIndex];
    }

}, 2500);


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .capability-grid > div"
);

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    observer.observe(element);

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(function (link) {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + current) {

            link.style.color = "#ff1e2d";

        }

    });

});


/* ================= CONTACT FORM ================= */

/*
   Formspree endpoint is kept in index.html.
   The form will submit directly to Formspree.
*/

const contactForm = document.querySelector("#contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function () {

        const button = contactForm.querySelector("button");

        if (button) {

            button.textContent = "SENDING...";

        }

    });

}