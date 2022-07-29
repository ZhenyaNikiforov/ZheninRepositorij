let buttonMenu;
let navMenu;

buttonMenu = document.getElementById('btn');
navMenu = document.getElementById('menu');

function openClose () {
    navMenu.classList.toggle('header__navigation_visible');
}

buttonMenu.addEventListener('click', openClose);

import html from './pages/index.pug';
import htm from './pages/kontaktyi.pug';
import ht from './pages/tovaryi.pug';
import h from './pages/uslugi.pug';

import less from './lessDir/container.less';