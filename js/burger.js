const burgerMenu = document.querySelector('.burger-menu')
const navMenu = document.querySelector('.menu')
const burgerItems = document.querySelectorAll('.burger')

burgerMenu.addEventListener('click', () => {
    if (!burgerMenu.classList.contains('active')){
        burgerMenu.classList.add('active')
        navMenu.style.transform = 'translateX(0)'
        burgerItems[0].style.transform = 'rotate(-45deg) translateY(18.5px)'
        burgerItems[2].style.transform = 'rotate(45deg) translateY(-18.5px)'
        burgerItems[1].style.opacity = '0'
    } else {
        burgerMenu.classList.remove('active')
        navMenu.style.transform = ''
        burgerItems[0].style.transform = ''
        burgerItems[2].style.transform = ''
        burgerItems[1].style.opacity = ''
    }
})