const navMenu = document.querySelector("#navMenu");
const Btns = document.querySelectorAll(".btn");
const my = document.getElementById("modal");
const modal = document.getElementById("myModal");
const body = document.getElementById("body");
const span = document.getElementsByClassName("blah")[0];
// When the user clicks the button, open the modal 
my.addEventListener("click", () => {
    modal.style.display = "block";
    body.style.overflow = "hidden"

});
// When the user clicks on <span> (x), close the modal

span.addEventListener("click", () => {
    modal.style.display = "none";
    body.style.overflow = "visible"
});


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        // body.style.overflow = "visible"

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

// Get the modal