// navigation
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('header-toggle'),
    closeMenu = document.getElementById('header-close');

toggleMenu.addEventListener('click', function () {
    navMenu.classList.toggle('show')
})
closeMenu.addEventListener('click', function () {
    navMenu.classList.remove('show')
})