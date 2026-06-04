document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get element by IDs
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');


    // Get error elements
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');


    let isValid = true

    // validate username

    if (username.value.trim() === '') {
        usernameError.textContent = 'Username is required';
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    //validate email
    const emailRegExpression = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.value.trim() === '') {
        emailError.textContent = 'Enter your email';
        isValid = false;
    } else if (!emailRegExpression.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false
    } else {
        emailError.textContent = '';
    }


    // validate password
    if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else if (password.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 Characters long';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }


    // red border is error elements fail
    if (username.value.trim() === '') {
        username.style.border = '1px solid red';
    } else {
        username.style.border = '';
    }

    if (email.value.trim() === '' || (!emailRegExpression.test(email.value.trim()))) {
        email.style.border = '1px solid red';
    } else {
        email.style.border = '';
    }

    if (password.value.trim() === '' || (password.value.length < 8)) {
        password.style.border = '1px solid red';
    } else {
        password.style.border = '';
    }



    // 3: Timing Events

    // Resend Verification 
    const resendBttn = document.getElementById('resendVerification');

    if (isValid) {
        alert('Form submitted!');

        resendBttn.disabled = true;

        let countdown = 10;

        const timer = setInterval(function () {
            countdown--;
            resendBttn.textContent = `Resend Verification (${countdown}s)`;
        }, 1000);

        // Invoke countdown cycle
        setTimeout(function () {
            clearInterval(timer);
            resendBttn.disabled = false;
            resendBttn.textContent = 'Resend Verification';
        }, 10000);

    } else { alert('Please fix errors') };


});