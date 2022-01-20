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

document.getElementById('contact-button').addEventListener('click', function () {
    alert('Document will be coming soon.')
})

document.getElementById('loadMoreButton').addEventListener('click', function () {
    alert('Document will be coming soon.')
})

document.getElementById('formSubmitButton').addEventListener('click', function () {
    alert('Document will be coming soon.')
})

document.getElementById('contactNowButton').addEventListener('click', function () {
    alert('Document will be coming soon.')
})
