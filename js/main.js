const bars = document.querySelector('.nav__bars')
const navItems = document.querySelector('.nav__items')

const showNav = function() {
    navItems.classList.toggle('show')
}


bars.addEventListener('click', showNav)