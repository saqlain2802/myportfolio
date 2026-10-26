const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuBtn.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
  });
}

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("#navMenu a");

window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) {
      current = section.id;
    }
  });

  links.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", event => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const form = document.getElementById("contact-form");
const formNote = document.getElementById("formNote");

if (form) {
  form.addEventListener("submit", () => {
    const button = form.querySelector("button");
    if (button) button.innerHTML = "SENDING... <span>↗</span>";
    if (formNote) formNote.textContent = "Sending your message...";
  });
}
