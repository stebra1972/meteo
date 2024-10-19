
function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    if (password !== confirmPassword) {
        alert('Le psasword non corrispondono');
        return false;
    }
    return true;
}