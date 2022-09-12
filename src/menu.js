class Gamburger {
    constructor(btn, menu, open){
        this.button= btn;
        this.table= menu;
        this.opClass= open;
        this.button.addEventListener('click', this.OpCl.bind(null, this.table, this.opClass));
    }
    OpCl(a, b){
        a.classList.toggle(b);
    }
}

const elementMenu= document.getElementsByClassName('header__navigation')[0];
const openClass= 'header__navigation_visible';

function gumbs(nameObject){
    const objectButtons= document.getElementsByClassName(nameObject);
    const arrayButtons= Array.from(objectButtons);
    arrayButtons.forEach(function(elemArray){new Gamburger(elemArray, elementMenu, openClass)});
}

gumbs('header__btn-menu');

import html from './pages/index.pug';
import htm from './pages/kontaktyi.pug';
import ht from './pages/tovaryi.pug';
import h from './pages/uslugi.pug';

import less from './styles/connect.less';