let buttonMenu;
let navMenu;

buttonMenu = document.getElementById('btn');
navMenu = document.getElementById('menu');

function openClose () {
    navMenu.classList.toggle('header__navigation_visible');
}

buttonMenu.addEventListener('click', openClose);

import html from './htmlFiles/index.html';
import htm from './htmlFiles/kontaktyi.html';
import ht from './htmlFiles/tovaryi.html';
import h from './htmlFiles/uslugi.html';

import less from './lessDir/container.less';