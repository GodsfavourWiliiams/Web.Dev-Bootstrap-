const gap = 16;
const navMenu = document.querySelector("#navMenu");
const Slider = document.querySelector(".slider");
const Btns = document.querySelectorAll(".btn");
const slideImgs = document.querySelectorAll(".img");


navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});




let index = 1;
let imgWidth = slideImgs[index].clientWidth;

window.addEventListener('resize', () => {
    imgWidth = slideImgs[index].clientWidth;
})

function slide() {
    Slider.style.transition = 'transform .5s ease-in-out';
    Slider.style.transform = 'translateX(' + (-imgWidth * index) + 'px)';
}

function btnClick() {
    if (this.id === 'prev') {
        index--;
    } else {
        index++;
    }
    this.disabled = true
    slide();
}

Slider.addEventListener('transitionend', () => {

    if (slideImgs[index].id === 'first') {
        Slider.style.transition = 'none';
        index = slideImgs.length - 1;
        Slider.style.transform = 'translateX(' + (-imgWidth * index) + 'px)';
    } else if (slideImgs[index].id === 'last') {
        Slider.style.transition = 'none';
        index = 1;
        Slider.style.transform = 'translateX(' + (-imgWidth * index) + 'px)';
    }
    Btns[0].disabled = false
    Btns[1].disabled = false
})

Btns.forEach(btn => btn.addEventListener('click', btnClick));


var width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));

function clicked() {
    // var randoms = randomArray[]
    contentOne.innerHTML = randomArray[0]
    contentTwo.innerHTML = randomArray[2]
}

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