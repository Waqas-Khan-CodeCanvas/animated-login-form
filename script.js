// Selecting necessary DOM elements
const formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form-container"),
    formCloseBtn = document.querySelector(".form_close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHideBtn = document.querySelectorAll(".pw_hide");

// Open login form when login button is clicked
formOpenBtn.addEventListener("click", () => home.classList.add("show"));

// Close login form when close button is clicked
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

// Toggle password visibility for password inputs
pwShowHideBtn.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input"); // Get corresponding password input
        if (getPwInput.type === "password") {
            getPwInput.type = "text"; // Change to text to show password
            icon.classList.replace("fa-eye-slash", "fa-eye"); // Change icon
        } else {
            getPwInput.type = "password"; // Hide password
            icon.classList.replace("fa-eye", "fa-eye-slash"); // Change icon back
        }
    });
});

// Show signup form and hide login form when signup link is clicked
signupBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor action
    formContainer.classList.add("active"); // Show signup form
});

// Show login form and hide signup form when login link is clicked
loginBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor action
    formContainer.classList.remove("active"); // Show login form
});
