// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// Close menu when a nav link is clicked (on mobile)
const links = navLinks.querySelectorAll("a");
links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});

// Contact form submission
const contactForm = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new URLSearchParams(new FormData(contactForm));
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data.toString(),
    })
      .then(function () {
        contactForm.style.display = "none";
        formSuccess.style.display = "block";
      })
      .catch(function () {
        contactForm.submit();
      });
  });
}

// Fade-up scroll animation using IntersectionObserver
const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate once, then stop watching
      }
    });
  },
  { threshold: 0.12 },
);

fadeElements.forEach(function (el) {
  observer.observe(el);
});
