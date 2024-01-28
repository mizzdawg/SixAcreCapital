let scrollElements;
let fadeElements;

window.addEventListener(
    "DOMContentLoaded",
    (event) => {
        scrollElements = document.querySelectorAll('.scroll-animate');

        createObserver();
    },
    false
);

function createObserver() {
    let observer;

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: .18
    };

    observer = new IntersectionObserver(handleIntersect, options);
    scrollElements.forEach((el) => {
        observer.observe(el);
    })
}

function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-up');
        }
    });
}



const menuBtns = document.querySelectorAll('.menu-btn');
const mobileMenu = document.querySelector('.nav-mobile-menu-container');

menuBtns.forEach(btn => btn.addEventListener('click', toggleMenu))

function toggleMenu() {
    mobileMenu.classList.toggle('display-mobile');
    mobileMenu.classList.toggle('hide-mobile');
}



// Portfolio Slideshow JS
let slideIndex = 0;
const slides = document.querySelector(".slideshow-container").children;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

handleClick(0);

prevBtn.addEventListener("click", () => {
    handleClick(-1);
});

nextBtn.addEventListener("click", () => {
    handleClick(1);
});

function handleClick(n) {
    slideIndex += n;
    if (slideIndex > slides.length - 1) { slideIndex = 0 };
    if (slideIndex < 0) { slideIndex = slides.length - 1 };
    console.log(slides.length);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}


