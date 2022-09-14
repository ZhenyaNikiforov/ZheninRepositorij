class Gamburger {
    constructor(btn, menu, open){
        this.button= btn;
        this.table= menu;
        this.opClass= open;
        this.button.addEventListener('click', this.openClose.bind(null, this.table, this.opClass));
    }
    openClose(a, b){
        a.classList.toggle(b);
    }
}

const elementMenu= document.querySelectorAll('.header__navigation')[0];
const openClass= 'header__navigation_visible';

function render(nameSelectors){
    const arrayButtons= document.querySelectorAll(nameSelectors);
    arrayButtons.forEach((elemArray)=> new Gamburger(elemArray, elementMenu, openClass));
}

render('.header__btn-menu');

import html from './pages/index.pug';
import htm from './pages/kontaktyi.pug';
import ht from './pages/tovaryi.pug';
import h from './pages/uslugi.pug';

import less from './styles/connect.less';