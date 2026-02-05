const form = document.getElementById("registrationForm");

// Shows an error message under the form field
function setError(id, message) {
  document.getElementById(id).innerText = message;
}

// Clears out previous error messages. I used setError instead of alert so the error message would show under the form field per rubric
function clearErrors() {
  setError("firstNameError", "");
  setError("lastNameError", "");
  setError("emailError", "");
  setError("passwordError", "");
  setError("confirmPasswordError", "");
  setError("ageError", "");
  setError("phoneNumberError", "");
}

// Validate Email
function validateEmail(email) {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
  return emailPattern.test(email);
}

// Validate Password
function validatePassword(password) {
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordPattern.test(password);
}

// Validate Phone Number
function validatePhone(phone) {
  const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
  return phonePattern.test(phone);
}

// Validate Age (must be 18 or older)
function validateAge(age) {
  return age >= 18;
}

// This checks the form when the user hits the submit button
form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearErrors();

  let isValid = true;

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const ageValue = document.getElementById("age").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();

  // Below are all the error messages the user will get if inputs are incorrect or do not match the requirements

  if (firstName.length < 2) {
    setError("firstNameError", "First name must be at least 2 characters.");
    isValid = false;
  }

  if (lastName.length < 2) {
    setError("lastNameError", "Last name must be at least 2 characters.");
    isValid = false;
  }

  if (!email || !validateEmail(email)) {
    setError("emailError", "Please enter a valid email address.");
    isValid = false;
  }

  if (!password) {
    setError("passwordError", "Password is required.");
    isValid = false;
  } else if (!validatePassword(password)) {
    setError(
      "passwordError",
      "Password must be at least 8 characters and include one uppercase letter and one number."
    );
    isValid = false;
  }

  if (!confirmPassword) {
    setError("confirmPasswordError", "Confirm password is required.");
    isValid = false;
  } else if (confirmPassword !== password) {
    setError("confirmPasswordError", "Passwords do not match.");
    isValid = false;
  }

  if (ageValue !== "" && !validateAge(ageValue)) {
    setError("ageError", "You must be 18 or older to register.");
    isValid = false;
  }

  if (phoneNumber !== "" && !validatePhone(phoneNumber)) {
    setError("phoneNumberError", "Phone number must match XXX-XXX-XXXX.");
    isValid = false;
  }

  if (isValid) {
    const jsonData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };

    if (ageValue !== "") {
      jsonData.age = Number(ageValue);
    }

    if (phoneNumber !== "") {
      jsonData.phoneNumber = phoneNumber;
    }

    // If all requirements are met, the form is validated and all data that was collected can be viewed in the browser console
    console.log(jsonData);
    alert("Form validated successfully. Check the console for the JSON output.");

    // Clears the form after submission
    form.reset();

    // Clears the errors, if any, that were on the form
    clearErrors();
  }
});
