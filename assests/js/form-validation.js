// Form validation
function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;
    
    // Check if all fields are filled
    if (name == "" || email == "" || message == "") {
        alert("Please fill in all fields");
        return false;
    }
    
    // Validate email format
    if (!email.includes('@') || !email.includes('.')) {
        alert("Please enter a valid email address");
        return false;
    }
    
    // Show success modal
    document.getElementById('successModal').style.display = 'block';
    return false;
}

// Close modal when X is clicked
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('successModal').style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('successModal')) {
        document.getElementById('successModal').style.display = 'none';
    }
});