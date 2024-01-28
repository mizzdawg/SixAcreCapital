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
// let slideIndex = 0;
// const slides = document.querySelector(".slideshow-container").children;
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");

// handleClick(0);

// prevBtn.addEventListener("click", () => {
//     handleClick(-1);
// });

// nextBtn.addEventListener("click", () => {
//     handleClick(1);
// });

// function handleClick(n) {
//     slideIndex += n;
//     if (slideIndex > slides.length - 1) { slideIndex = 0 };
//     if (slideIndex < 0) { slideIndex = slides.length - 1 };
//     console.log(slides.length);
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex].style.display = "block";
// }

let slideIndexes = [0, 0, 0];
const slideShows = document.querySelectorAll(".slideshow-container");
const prevBtns = document.querySelectorAll(".prev");
const nextBtns = document.querySelectorAll(".next");

slideShows.forEach((show, i) => {
    let slides = show.children;
    for (j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
    }
    slides[0].style.display = "block";
})

prevBtns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
        handleClick(-1, i);
    });
})

nextBtns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
        handleClick(1, i);
    })
})

function handleClick(n, i) {
    let slides = slideShows[i].children;
    slideIndexes[i] += n;
    if (slideIndexes[i] > slides.length - 1) { slideIndexes[i] = 0 };
    if (slideIndexes[i] < 0) { slideIndexes[i] = slides.length - 1 };
    for (j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
    }
    let slide = slideIndexes[i];
    slides[slide].style.display = "block";
}


