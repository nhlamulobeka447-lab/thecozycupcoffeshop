// Wait until the whole page has loaded before running this code
document.addEventListener("DOMContentLoaded", function () {

  // Grab the form and the error message box by their id
  const form = document.getElementById("contactForm");
  const errorBox = document.getElementById("formError");

  // Run this function every time the form is submitted
  form.addEventListener("submit", function (event) {

    // Read what the user typed, trim() removes accidental extra spaces
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let errorMessage = "";

    // Check each field, one rule at a time
    if (name === "") {
      errorMessage = "Please enter your name.";
    } else if (email === "") {
      errorMessage = "Please enter your email.";
    } else if (!email.includes("@")) {
      errorMessage = "Please enter a valid email address.";
    } else if (message === "") {
      errorMessage = "Please enter a message.";
    }

    if (errorMessage !== "") {
      // Stop the form from submitting and show the error instead
      event.preventDefault();
      errorBox.textContent = errorMessage;
    } else {
      // No errors — clear any old message
      errorBox.textContent = "";
    }
  });

});
// Menu filter buttons
document.addEventListener("DOMContentLoaded", function () {

  const filterButtons = document.querySelectorAll(".filter-btn");
  const menuSections = document.querySelectorAll(".menu-category");

  // Only run this if the page actually has filter buttons (e.g. services.html)
  if (filterButtons.length === 0) return;

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {

      const selectedCategory = button.getAttribute("data-filter");

      // Loop through every menu section and decide show/hide
      menuSections.forEach(function (section) {
        if (selectedCategory === "all" || section.getAttribute("data-category") === selectedCategory) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });

      // Highlight the active button, remove highlight from the rest
      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      button.classList.add("active");
    });
  });

});
// Image slider on homepage
document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".slide");

  if (slides.length === 0) return; // only run on pages that have a slider

  let currentSlide = 0;

  function showSlide(index) {
    // Remove "active" from every slide
    slides.forEach(function (slide) {
      slide.classList.remove("active");
    });
    // Add "active" only to the one we want shown
    slides[index].classList.add("active");
  }

  function nextSlide() {
    // % loops back to 0 after reaching the last slide
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Automatically move to the next slide every 4 seconds
  setInterval(nextSlide, 4000);

});