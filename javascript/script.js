document.addEventListener("DOMContentLoaded", function () {

  /* CONTACT FORM VALIDATION */
  const form = document.getElementById("contactForm");
  const errorBox = document.getElementById("formError");

  if (form) {
    form.addEventListener("submit", function (event) {

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      let errorMessage = "";

      if (name === "") errorMessage = "Please enter your name.";
      else if (email === "") errorMessage = "Please enter your email.";
      else if (!email.includes("@")) errorMessage = "Please enter a valid email.";
      else if (message === "") errorMessage = "Please enter a message.";

      if (errorMessage !== "") {
        event.preventDefault();
        errorBox.textContent = errorMessage;
      } else {
        errorBox.textContent = "";
      }
    });
  }

  /* FILTER SYSTEM */
  const filterButtons = document.querySelectorAll(".filter-btn");
  const menuSections = document.querySelectorAll(".menu-category");

  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener("click", function () {

        const selected = button.getAttribute("data-filter");

        menuSections.forEach(section => {
          if (selected === "all" || section.dataset.category === selected) {
            section.style.display = "block";
          } else {
            section.style.display = "none";
          }
        });

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
      });
    });
  }

  /* SLIDER */
  const slides = document.querySelectorAll(".slide");

  if (slides.length > 0) {
    let current = 0;

    setInterval(() => {
      slides.forEach(s => s.classList.remove("active"));
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 4000);
  }

});
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 120);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 0.8s ease-in-out";

  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 50);
});
document.addEventListener("DOMContentLoaded", function () {

  const inquiryForm = document.getElementById("inquiryForm");
  const inquiryError = document.getElementById("inqError");

  if (!inquiryForm) return;

  inquiryForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("inqName").value.trim();
    const email = document.getElementById("inqEmail").value.trim();
    const type = document.getElementById("inqType").value;
    const message = document.getElementById("inqMessage").value.trim();

    let error = "";

    if (name === "") {
      error = "Please enter your name.";
    } else if (email === "") {
      error = "Please enter your email.";
    } else if (!email.includes("@")) {
      error = "Enter a valid email address.";
    } else if (type === "") {
      error = "Please select inquiry type.";
    } else if (message === "") {
      error = "Please write your message.";
    }

    if (error !== "") {
      inquiryError.textContent = error;
    } else {
      inquiryError.textContent = "";
      alert("Inquiry submitted successfully! We will respond soon.");
      inquiryForm.reset();
    }
  });

});