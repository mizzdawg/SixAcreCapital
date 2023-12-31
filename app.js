let scrollElements;

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
        threshold: .1
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