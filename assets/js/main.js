/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 400 });
sr.reveal(".about__text", { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", {});
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 600 });

/*SCROLL WORK*/
sr.reveal(".work__img", { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal(".contact__input", { interval: 200 });

/*Contact submit */
/* Getting the HTML element IDs and assigning them to new variables */
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const submitButton = document.getElementById("submit-btn");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate the form fields
    //if the validateform is true send alert form submitted successfully and reset the text
    if (validateForm()) {
      // If the form is valid, you can send the data to the server using AJAX or Fetch API
      // Example: sendFormDataToServer();
      // After sending data, you can display a success message or reset the form
      alert("Form submitted successfully!");
      contactForm.reset(); // Reset the form
    }
  });
  //if the validateform is Checking if name, email, or message fields are empty.if they are return false(please fill out all fields) else return true
  function validateForm() {
    // Add your validation logic here
    // Example validation: Ensure all fields are filled out
    if (
      nameInput.value.trim() === "" ||
      emailInput.value.trim() === "" ||
      messageInput.value.trim() === ""
    ) {
      alert("Please fill out all fields.");
      return false; // Form is not valid
    }

    return true; // Form is valid
  }
});
