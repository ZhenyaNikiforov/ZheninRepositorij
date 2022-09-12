class Gamburger {
    constructor(btn, menu, open){
        this.button= btn;
        this.table= menu;
        this.opClass= open;
    }
    OpCl(a, b){
        console.log(a);
        console.log(b);
        a.classList.toggle(b);
    }
    press(){
        this.button.addEventListener('click', this.OpCl.bind(null, this.table, this.opClass));
    }
}

const elementButton= document.getElementsByClassName('header__btn-menu')[0];
const elementMenu= document.getElementsByClassName('header__navigation')[0];
const openClass= 'header__navigation_visible'
console.log(elementButton, elementMenu, openClass);

const gamb= new Gamburger(elementButton, elementMenu, openClass);
gamb.press();

/*function start(x, y, z){
    new Gamburger(x, y, z);
}
start(elementButton, elementMenu, openClass);*/

import html from './pages/index.pug';
import htm from './pages/kontaktyi.pug';
import ht from './pages/tovaryi.pug';
import h from './pages/uslugi.pug';

import less from './styles/connect.less';