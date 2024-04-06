document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();
  
    // Basic email validation
    if (!isValidEmail(email)) {
    document.getElementById("message").innerText = "Please enter a valid email address.";
    return;
    }
  
    // If email is valid, submit the form (you might submit the form data to your server here)
    document.getElementById("message").innerText = "Subscribing...";
    setTimeout(function() {
      document.getElementById("message").innerText = "Thank you for subscribing!";
      emailInput.value = ""; // Clear the email input
    }, 2000); 
  });
  
  // Function to validate email address
  function isValidEmail(email) {
    // Very basic email validation for demonstration purposes
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  