let buttonMenu;
let navMenu;

buttonMenu = document.getElementsByClassName('header__btn-menu');
navMenu = document.getElementsByClassName('header__navigation');

function openClose () {
    navMenu[0].classList.toggle('header__navigation_visible');
}

buttonMenu[0].addEventListener('click', openClose);

import html from './pages/index.pug';
import htm from './pages/kontaktyi.pug';
import ht from './pages/tovaryi.pug';
import h from './pages/uslugi.pug';

import less from './styles/connect.less';