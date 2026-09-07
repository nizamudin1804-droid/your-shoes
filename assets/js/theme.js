
/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("pageLoader");

  setTimeout(function () {
    loader.classList.add("hide");
}, 2000);

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", function () {

    mobileNav.classList.toggle("open");

});


/* =========================
   HERO SLIDER
========================= */

const heroSlides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

const nextSlide = document.getElementById("nextSlide");
const prevSlide = document.getElementById("prevSlide");

let currentSlide = 0;


function showSlide(index) {

    heroSlides.forEach(function (slide) {
        slide.classList.remove("active-slide");
    });

    dots.forEach(function (dot) {
        dot.classList.remove("active-dot");
    });

    heroSlides[index].classList.add("active-slide");
    dots[index].classList.add("active-dot");

    currentSlide = index;
}


function nextHeroSlide() {

    currentSlide++;

    if (currentSlide >= heroSlides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}


function previousHeroSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = heroSlides.length - 1;
    }

    showSlide(currentSlide);
}


nextSlide.addEventListener("click", nextHeroSlide);
prevSlide.addEventListener("click", previousHeroSlide);


/* Hero auto slider */

setInterval(function () {
    nextHeroSlide();
}, 5000);


/* Hero dots */

dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {
        showSlide(index);
    });

});


/* =========================
   PRODUCT SLIDER
========================= */

const productSlider = document.getElementById("productSlider");
const productNext = document.getElementById("productNext");
const productPrev = document.getElementById("productPrev");


productNext.addEventListener("click", function () {

    productSlider.scrollBy({
        left: 400,
        behavior: "smooth"
    });

});


productPrev.addEventListener("click", function () {

    productSlider.scrollBy({
        left: -400,
        behavior: "smooth"
    });

});


/* =========================
   SCROLL ANIMATION
========================= */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});





