const gap = 16;

const carousel = document.getElementById("carousel"),
    content = document.getElementById("content"),
    next = document.getElementById("myToggle"),
    prev = document.getElementById("prev");
var randomArray = ["Lorem ipsum dolor sit,", "Amet consectetur adipisicing elit", "Iste, vitae", "lets practice some code"];
var contentOne = document.getElementById("content-one");
var contentTwo = document.getElementById("content-two");

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

function clicked() {
    // var randoms = randomArray[]
    contentOne.innerHTML = randomArray[0]
    contentTwo.innerHTML = randomArray[2]
}