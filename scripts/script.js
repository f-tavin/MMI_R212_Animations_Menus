const logo_gauche = document.querySelector('header>img:first-of-type');
const menu = document.querySelector('menu');

logo_gauche.addEventListener('click', ()=> {
    menu.classList.toggle('menu-reversed');
});


const logo_droite = document.querySelector('header>img:last-of-type');

logo_droite.addEventListener('click', ()=> {
    logo_droite.src='logos/UB_old.jpg';
});
