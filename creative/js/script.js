 var hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeIt = document.querySelector('.menu__close'),
    closeMenu = document.querySelector('.menu__list');

hamburger.addEventListener ('click', () => {
        menu.classList.add('active');
        hamburger.classList.add('deactive');
});
    
closeIt.addEventListener ('click', () => {
        menu.classList.remove('active');
        hamburger.classList.remove('deactive');
});

closeMenu.addEventListener ('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('deactive');
});