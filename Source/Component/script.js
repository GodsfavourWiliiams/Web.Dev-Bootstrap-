var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

TweenMax.from(".juice", 1, {
    delay: 2,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
});
TweenMax.from(".logo", 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
});




const gap = 16;

const carousel = document.getElementById("carousel"),
    content = document.getElementById("content"),
    next = document.getElementById("myToggle"),
    prev = document.getElementById("prev");

next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
        prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "none";
    }
});
prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
        prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "flex";
    }
});

var width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));