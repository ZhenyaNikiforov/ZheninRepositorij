let buttonMenu;
let navMenu;

buttonMenu = document.getElementById('btn');
navMenu = document.getElementById('menu');

function openClose () {
    navMenu.classList.toggle('header__navigation_visible');
}

buttonMenu.addEventListener('click', openClose);

import html from './htmlFiles/index.pug';
import htm from './htmlFiles/kontaktyi.pug';
import ht from './htmlFiles/tovaryi.pug';
import h from './htmlFiles/uslugi.pug';

import less from './lessDir/container.less';