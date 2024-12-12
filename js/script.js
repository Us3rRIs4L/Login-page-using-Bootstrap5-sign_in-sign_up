/**
 * Toggles the visibility of the password field.
 * 
 * @param {string} inputId - The ID of the input field to toggle.
 * @param {HTMLElement} iconElement - The icon element to update based on the state.
 */
function togglePassword(inputId, iconElement) {
    const input = document.getElementById(inputId);
    const iconImg = iconElement.querySelector('i');

    if (input.type === "password") {
        input.type = "text";
        iconImg.classList.remove('bi-eye-slash-fill');
        iconImg.classList.add('bi-eye-fill');
        iconImg.setAttribute('data-toggle', 'visible');
    } else {
        input.type = "password";
        iconImg.classList.remove('bi-eye-fill');
        iconImg.classList.add('bi-eye-slash-fill');
        iconImg.setAttribute('data-toggle', 'hidden');
    }
}

/**
 * Validates email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - Whether email is valid
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Validates password strength
 * @param {string} password - Password to validate
 * @returns {boolean} - Whether password meets basic strength requirements
 */
function validatePassword(password) {
    // At least 8 characters, one uppercase, one lowercase, one number
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(password);
}

// Sign-in form validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('exampleInputEmail1');
    const passwordInput = document.getElementById('exampleInputPassword1');
    
    if (!validateEmail(emailInput.value)) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (!validatePassword(passwordInput.value)) {
        alert('Password must be at least 8 characters long and include uppercase, lowercase, and number');
        return;
    }
    
    // If validation passes, you would typically send to backend
    alert('Form submission would proceed');
});

// Similar validation for sign-up form
document.querySelector('#signUpModal form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('signUpEmail');
    const passwordInput = document.getElementById('signUpPassword');
    const confirmPasswordInput = document.getElementById('signUpConfirmPassword');
    
    if (!validateEmail(emailInput.value)) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (!validatePassword(passwordInput.value)) {
        alert('Password must be at least 8 characters long and include uppercase, lowercase, and number');
        return;
    }
    
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert('Passwords do not match');
        return;
    }
    
    // If validation passes, you would typically send to backend
    alert('Sign-up form submission would proceed');
});
