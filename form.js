

const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const fnameInput = document.getElementById("fname");
const phoneInput = document.getElementById("phno");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    // Validate inputs
    const isValid = validateInputs();
  
    // If all inputs are valid, submit the form
    if (isValid) {
        const formData = {
            name: nameInput.value,
            fname: fnameInput.value,
            phno: phoneInput.value,
            email: emailInput.value,
            mobile:mobileInput.value,
            password: passwordInput.value,
        };
        console.log(formData);
        form.submit(); // submit the form if all inputs are valid
    }
});

function validateInputs() {
    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === "") {
        setError(nameInput, "Name is required");
        isValid = false;
    } else {
        setSuccess(nameInput);
    }

    // Validate father's name
    if (fnameInput.value.trim() === "") {
        setError(fnameInput, "Father's name is required");
        isValid = false;
    } else {
        setSuccess(fnameInput);
    }

    // Validate phone number
    if (phoneInput.value.trim() === "") {
        setError(phoneInput, "Phone number is required");
        isValid = false;
    } else if (!isValidPhoneNumber(phoneInput.value)) {
        setError(phoneInput, "Phone number is not valid");
        isValid = false;
    } else {
        setSuccess(phoneInput);
    }

    // Validate email
    if (emailInput.value.trim() === "") {
        setError(emailInput, "Email is required");
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        setError(emailInput, "Email is not valid");
        isValid = false;
    } else {
        setSuccess(emailInput);
    }

    // Validate password
    if (passwordInput.value.trim() === "") {
        setError(passwordInput, "Password is required");
        isValid = false;
    } else {
        setSuccess(passwordInput);
    }

    // Validate confirm password
    // ...

    return isValid;
}

function setError(inputControl, errorMessage) {
    const inputGroup = inputControl.parentElement;
    const error = inputGroup.querySelector(".error-message");
    error.innerText = errorMessage;
    inputGroup.classList.add("error");
    inputGroup.classList.remove("success");
}

function setSuccess(inputControl) {
    const inputGroup = inputControl.parentElement;
    inputGroup.classList.add("success");
    inputGroup.classList.remove("error");
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}
