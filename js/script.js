/**
 * Toggles the visibility of the password field.
 * 
 * @param {string} inputId - The ID of the input field to toggle.
 * @param {HTMLElement} iconElement - The icon element to update based on the state.
 */
function togglePassword(inputId, iconElement) {
    const input = document.getElementById(inputId);
    const iconImg = iconElement.querySelector('img');

    if (input.type === "password") {
        input.type = "text";
        iconImg.src = "icons/eye.png";
        iconImg.setAttribute('data-toggle', 'eye');
    } else {
        input.type = "password";
        iconImg.src = "icons/hidden.png";
        iconImg.setAttribute('data-toggle', 'hidden');
    }
}
