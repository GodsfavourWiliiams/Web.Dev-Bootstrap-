const navMenu = document.querySelector("#navMenu");
const Btns = document.querySelectorAll(".btn");
const myUp = document.getElementById("modal");
const myIn = document.getElementById("modalsignin");
const modal = document.getElementById("myModal");
const body = document.getElementById("body");
const title = document.getElementById("form-title");
const span = document.getElementsByClassName("blah")[0];
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

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

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});
// When the user clicks the button, open the modal 
myUp.addEventListener("click", () => {
    modal.style.display = "block";
    body.style.overflow = "hidden"
    title.textContent = "Sign up";
    // Btns.value = "Sign up";
});
myIn.addEventListener("click", () => {
    modal.style.display = "block";
    body.style.overflow = "hidden";
    title.textContent = "Sign in";
    // Btns.textContent = "Login";
});
// When the user clicks on <span> (x), close the modal

span.addEventListener("click", () => {
    modal.style.display = "none";
    body.style.overflow = "visible"
});
// showError when inputs is empty or zero

//Submit button function
function submit() {
    modal.style.display = "none";
    // check: if all input is empty show alert

}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "visible"

    }
};

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
/*===== MENU SHOW =====*/

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')


        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('actives'));
    this.classList.add('actives');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')

}
navLink.forEach(n => n.addEventListener('click', linkAction));

// function validateForm() {
//     var x = document.forms.value;
//     if (x == null || x == "") {
//         const enu = document.getElementById('enu');
//         enu.classList.add('shows');
//         // disapear the message after 3 sec
//         setTimeout(function disApear() {
//             enu.classList.remove("shows");
//         }, 2000);
//         const enuu = document.getElementById('enuu');
//         enuu.classList.add('shows');
//         setTimeout(function disApear() {
//             enuu.classList.remove("shows");
//         }, 2000);
//         // disapear the message after 3 sec
//         const enuuu = document.getElementById('enuuu');
//         enuuu.classList.add('shows');
//         setTimeout(function disApear() {
//             enuuu.classList.remove("shows");
//         }, 2000);

//         const enuuuu = document.getElementById('enuuuu');
//         enuuuu.classList.add('shows');
//         // disapear the message after 3 sec
//         setTimeout(function disApear() {
//             enuuuu.classList.remove("shows");
//         }, 2000);
//         return false;
//     } else {}
// };
// Get the modal