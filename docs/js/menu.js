const menuIcon = document.querySelector('.menu-icon'),
    navbar = document.querySelector('.navbar')    
menuIcon.addEventListener('click', () => {
    if (menuIcon.style.margin == '14px') {
        navbar.style.cssText = 'display: none;'
        menuIcon.style.margin = '15px';
    } else {
        navbar.style.cssText = 'display: flex;'
        menuIcon.style.margin = '14px';
    }
})