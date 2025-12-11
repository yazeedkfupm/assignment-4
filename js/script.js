// Theme toggle with persistence and icons
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");

const savedTheme = window.localStorage.getItem("theme");

// Function to update icons
const updateIcons = (isDark) => {
  if (isDark) {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  }
}

if (savedTheme === "dark") {
  body.setAttribute("data-theme", "dark");
  body.classList.remove("light-theme");
  body.classList.add("dark-theme");
  updateIcons(true);
} else {
  updateIcons(false);
}

themeToggle?.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme", !isDark);

  if (isDark) {
    body.setAttribute("data-theme", "dark");
  } else {
    body.removeAttribute("data-theme");
  }

  updateIcons(isDark);
  window.localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Scroll Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-section').forEach(section => {
  observer.observe(section);
});

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close nav on link click (mobile)
navLinks?.addEventListener("click", (e) => {
  if (e.target.tagName === "A" && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// Project filters
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    projectCards.forEach((card) => {
      const category = card.dataset.category;
      if (filter === "all" || filter === category) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Contact form validation (client-side only)
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;
    formStatus.textContent = "";

    const fields = ["name", "email", "message"];
    fields.forEach((id) => {
      const input = document.getElementById(id);
      const error = input.nextElementSibling;
      error.textContent = "";

      if (!input.value.trim()) {
        error.textContent = "This field is required.";
        isValid = false;
      } else if (id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        error.textContent = "Please enter a valid email address.";
        isValid = false;
      }
    });

    if (!isValid) return;

    // Simulate success (no backend)
    formStatus.textContent = "Thank you! Your message has been submitted.";
    contactForm.reset();
  });
}

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
