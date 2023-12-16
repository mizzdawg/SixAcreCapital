const menuBtns = document.querySelectorAll('.menu-btn');
const mobileMenu = document.querySelector('.nav-mobile-menu-container');

menuBtns.forEach(btn => btn.addEventListener('click', toggleMenu))

function toggleMenu() {
    mobileMenu.classList.toggle('display-mobile');
    mobileMenu.classList.toggle('hide-mobile');
}