 document.addEventListener("DOMContentLoaded", function () {
    // Get references to the form and success message containers
    var signupForm = document.getElementById("signupForm");
    var successMessage = document.getElementById("successMessage");
    var emailInput = signupForm.querySelector("input");

    // Get the form button
    var subscribeButton = signupForm.querySelector("button");
    var errorMessage = document.getElementById("error-message");

    // Add a click event listener to the form button
    subscribeButton.addEventListener("click", function (event) {
      event.preventDefault();

      // Check if the email is valid (simple validation for demonstration)
      var isValidEmail = validateEmail(emailInput.value);

      if (!isValidEmail) {
        // Show the error message and change the input style
        errorMessage.style.display = "block";
        emailInput.style.borderColor = "red";
        emailInput.style.backgroundColor = "rgb(255, 168, 168)";
      } else {
        // Hide the error message and reset the input style
        errorMessage.style.display = "none";
        emailInput.style.borderColor = ""; // Reset to default style
        // Continue with the form submission or other actions
        // For demonstration, let's proceed to show the success message
        signupForm.style.display = "none";
        successMessage.style.display = "grid";
      }
    });

    var dismissButton = successMessage.querySelector("button");
    dismissButton.addEventListener("click", function () {
      successMessage.style.display = "none";
      signupForm.style.display = "flex";
    });

    // Simple email validation function
    function validateEmail(email) {
      var emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    }
  });


