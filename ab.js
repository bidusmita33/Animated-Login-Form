function validateForm() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    let isValid = true;

    if (username.value.trim() === "") {
        usernameError.style.opacity = "1";
        isValid = false;
    } else {
        usernameError.style.opacity = "0";
    }

    if (password.value.trim() === "") {
        passwordError.style.opacity = "1";
        isValid = false;
    } else {
        passwordError.style.opacity = "0";
    }

    return isValid;
}
