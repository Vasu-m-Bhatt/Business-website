// ==============================
// GLOBAL UTILITIES
// ==============================

// shortcut selector
function $(id) {
  return document.getElementById(id);
}

// show error message
function showError(elementId, message) {
  const el = $(elementId);
  if (el) {
    el.innerText = message;
    el.style.display = "block";
  }
}

// clear error message
function clearError(elementId) {
  const el = $(elementId);
  if (el) {
    el.innerText = "";
    el.style.display = "none";
  }
}

// ==============================
// ACTIVE NAVIGATION LINK
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

// ==============================
// CONTACT FORM VALIDATION
// ==============================

function validateForm(event) {
  event.preventDefault();

  let isValid = true;

  const name = $("name");
  const email = $("email");
  const message = $("message");

  // clear previous errors
  clearError("nameError");
  clearError("emailError");
  clearError("messageError");

  // name validation
  if (!name.value.trim()) {
    showError("nameError", "Name is required");
    isValid = false;
  }

  // email validation
  if (!email.value.trim()) {
    showError("emailError", "Email is required");
    isValid = false;
  } else if (!email.value.includes("@")) {
    showError("emailError", "Enter a valid email address");
    isValid = false;
  }

  // message validation
  if (!message.value.trim()) {
    showError("messageError", "Message cannot be empty");
    isValid = false;
  }

  // success
  if (isValid) {
    alert("Form submitted successfully!");
    event.target.reset();
  }
}

// ==============================
// SIMPLE INTERACTION (BUTTON EFFECT)
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.addEventListener("mouseover", () => {
      btn.style.opacity = "0.9";
    });

    btn.addEventListener("mouseout", () => {
      btn.style.opacity = "1";
    });
  });
});

// ==============================
// DEBUG (can remove later)
// ==============================

console.log("script.js loaded successfully");
