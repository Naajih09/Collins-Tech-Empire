// Wait until page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // === SMOOTH SCROLL ===
  const btnGetStarted = document.getElementById("btnGetStarted");
  const btnViewProjects = document.getElementById("btnViewProjects");

  if (btnGetStarted) {
    btnGetStarted.addEventListener("click", function () {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
  }

  if (btnViewProjects) {
    btnViewProjects.addEventListener("click", function () {
      window.location.href = "projects.html";
    });
  }

  // === BACK BUTTON (Projects Page) ===
  const backBtn = document.getElementById("btnBackHome");
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      window.location.href = "index.html#home";
    });
  }

  // === PROJECTS FILTER ===
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".projects-grid .card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");

      projectCards.forEach((card) => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // === CONTACT FORM VALIDATION ===
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let isValid = true;

      // Clear old errors
      document.querySelectorAll(".error-message").forEach((el) => (el.style.display = "none"));

      // Name
      const name = document.getElementById("name");
      if (name.value.trim() === "") {
        setError(name, "Full name is required");
        isValid = false;
      }

      // Email
      const email = document.getElementById("email");
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
      if (!email.value.match(emailPattern)) {
        setError(email, "Enter a valid email address");
        isValid = false;
      }

      // Phone
      const phone = document.getElementById("phone");
      const phonePattern = /^[0-9]{7,15}$/;
      if (!phone.value.match(phonePattern)) {
        setError(phone, "Enter a valid phone number (7–15 digits)");
        isValid = false;
      }

      // Message
      const message = document.getElementById("message");
      if (message.value.trim().length < 10) {
        setError(message, "Message must be at least 10 characters long");
        isValid = false;
      }

      // If valid → submit to FormSubmit (redirects via _next)
      if (isValid) {
        form.submit(); // ✅ no alert, direct submission
      }
    });

    function setError(input, message) {
      const error = input.parentElement.querySelector(".error-message");
      if (error) {
        error.textContent = message;
        error.style.display = "block";
      } else {
        alert(message); // fallback if no .error-message span
      }
    }
  }
  // === HAMBURGER MENU ===
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}
    });
