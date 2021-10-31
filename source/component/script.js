const navMenu = document.querySelector("#navMenu");
const Btns = document.querySelectorAll(".btn");
const myUp = document.getElementById("modal");
// const myIn = document.getElementById("modalsignin");
// const modal = document.getElementById("myModal");
const body = document.getElementById("body");
const title = document.getElementById("form-title");
const span = document.getElementsByClassName("blah")[0];
const form = document.getElementById('form');

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
// myUp.addEventListener("click", () => {
//     modal.style.display = "block";
//     body.style.overflow = "hidden"
//     title.textContent = "Sign up";
//     // Btns.value = "Sign up";
// });
// myIn.addEventListener("click", () => {
//     modal.style.display = "block";
//     body.style.overflow = "hidden";
//     title.textContent = "Sign in";
//     // Btns.textContent = "Login";
// });
// When the user clicks on <span> (x), close the modal

span.addEventListener("click", () => {
    modal.style.display = "none";
    body.style.overflow = "visible"
});
// showError when inputs is empty or zero


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "visible"

    }
};

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    body.style.overflow = "hidden"
});
/*===== MENU SHOW =====*/

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
            body.style.overflow = "visible"

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