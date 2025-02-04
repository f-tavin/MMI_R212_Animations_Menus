const logo_gauche = document.querySelector('header>img:first-of-type');
const menu = document.querySelector('menu');

logo_gauche.addEventListener('click', ()=> {
    menu.classList.toggle('menu-reversed');
});


const logo_droite = document.querySelector('header>img:last-of-type');

logo_droite.addEventListener('click', ()=> {
    logo_droite.src='logos/UB_old.jpg';
});


/*  TOP MENU  */

const entrees_menu = document.querySelectorAll('menu>li');

entrees_menu.forEach((entree) => {
    entree.addEventListener('mouseover', (e) => {
        entree.firstChild.nextSibling.classList.add('menu-active');
    });
    entree.addEventListener('mouseout', (e) => {
        entree.firstChild.nextSibling.classList.remove('menu-active');
    });
});
