// Smooth scroll for buttons
document.getElementById("btnGetStarted").addEventListener("click", function() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("btnViewProjects").addEventListener("click", function() {
  alert("Redirecting to all projects page...");
  // Example: window.location.href = "projects.html";
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Phone number check (only digits, min 7 digits)
  const phonePattern = /^[0-9]{7,15}$/;
  if (!phone.match(phonePattern)) {
    alert("Please enter a valid phone number (7–15 digits).");
    return;
  }

  alert("✅ Thank you " + name + "! Your message has been sent.");
  document.getElementById("contactForm").reset();
});
// Projects Page - Back button
const backBtn = document.getElementById("btnBackHome");
if (backBtn) {
  backBtn.addEventListener("click", function() {
    window.location.href = "index.html#home";
  });
// === PROJECTS FILTER ===
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".projects-grid .card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");

    projectCards.forEach(card => {
      if (category === "all" || card.getAttribute("data-category") === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop form from submitting immediately
    let isValid = true;

    // Clear old errors
    document.querySelectorAll(".error-message").forEach(el => el.style.display = "none");

    // Name
    const name = document.getElementById("name");
    if (name.value.trim() === "") {
      setError(name, "Full name is required");
      isValid = false;
    }

    // Email
    const email = document.getElementById("email");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      setError(email, "Enter a valid email address");
      isValid = false;
    }

    // Phone
    const phone = document.getElementById("phone");
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phone.value.match(phonePattern)) {
      setError(phone, "Enter a valid phone number (10–15 digits)");
      isValid = false;
    }

    // Message
    const message = document.getElementById("message");
    if (message.value.trim().length < 10) {
      setError(message, "Message must be at least 10 characters long");
      isValid = false;
    }

    // If valid
    if (isValid) {
      alert("✅ Message sent successfully!");
      form.reset();
    }
  });

  function setError(input, message) {
    const error = input.parentElement.querySelector(".error-message");
    error.textContent = message;
    error.style.display = "block";
  }
});