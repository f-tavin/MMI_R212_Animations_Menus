const logo_gauche = document.querySelector('header>img:first-of-type');
const menu = document.querySelector('menu');

logo_gauche.addEventListener('click', ()=> {
    menu.classList.toggle('menu-reversed');
});
