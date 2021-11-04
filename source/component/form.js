const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const Loginform = document.getElementById('Loginform');
const Loginemail = document.getElementById('Loginemail');
const Loginpassword = document.getElementById('Loginpassword');


form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});
Loginform.addEventListener('submit', e => {
    e.preventDefault();
    checkLoginInputs();
});

function checkLoginInputs() {
    const LoginemailValue = Loginemail.value.trim();
    const LoginpasswordValue = Loginpassword.value.trim();

    if (LoginemailValue === '') {
        setErrorFor(Loginemail, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(Loginemail, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (LoginpasswordValue === '') {
        setErrorFor(Loginpassword, 'Password cannot be blank');
    } else if (passwordValue.length < 8) {
        setErrorFor(Loginpassword, 'Password Must have Min 8 Characters');
    } else {
        setSuccessFor(Loginpassword);
    }
}

function checkInputs() {
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Password Must have Min 8 Characters');
    } else {
        setSuccessFor(password);
    }


    if (password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    } else {
        setSuccessFor(password2);

    }
}
var showPassword = document.getElementById("showPassword");
var hidePassword = document.getElementById("hidePassword");
var showPasswordTwo = document.getElementById("showPassword2");
var hidePasswordTwo = document.getElementById("hidePassword2");
const showLoginPassword = document.getElementById("showLoginPassword");
const hideLoginPassword = document.getElementById("hideLoginPassword");

hideLoginPassword.addEventListener("click", () => {
    const x = document.getElementById("Loginpassword");
    if (x.type == "password") {
        x.type = "text";
        showLoginPassword.style.display = "block";
        hideLoginPassword.style.display = "none";
    } else {
        x.type =
            "password"

    }
});
showLoginPassword.addEventListener("click", () => {
    showLoginPassword.style.display = "none";
    hideLoginPassword.style.display = "block";
});

hidePassword.addEventListener("click", () => {
    var x = document.getElementById("password");
    if (x.type == "password") {
        x.type = "text";
        showPassword.style.display = "block";
        hidePassword.style.display = "none";
    } else {
        x.type =
            "password"

    }
});
showPassword.addEventListener("click", () => {
    showPassword.style.display = "none";
    hidePassword.style.display = "block";
});
hidePasswordTwo.addEventListener("click", () => {
    var x = document.getElementById("password2");
    if (x.type == "password") {
        x.type = "text";
        showPasswordTwo.style.display = "block";
        hidePasswordTwo.style.display = "none";
    } else {
        x.type =
            "password"

    }
});
showPasswordTwo.addEventListener("click", () => {
    showPasswordTwo.style.display = "none";
    hidePasswordTwo.style.display = "block";
});

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}