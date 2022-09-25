import {boundMethod} from 'autobind-decorator';
class Gamburger {
    constructor(item){
        this.rowNav= item;
        this.btn= this.render('.header__btn-menu');
        this.list= this.render('.header__navigation');
        this.btn.addEventListener('click', this.handleClick);
    }
    render(className){
        return this.rowNav.querySelector(className);
    }
    @boundMethod
    handleClick(){
        this.list.classList.toggle('header__navigation_visible');
    }
}

function render(nameSelectors){
    const arrayRows= document.querySelectorAll(nameSelectors);
    arrayRows.forEach((elemArray)=> new Gamburger(elemArray));
}

render('.header__row-navigation');

import html from './pages/index.pug';
import htm from './pages/kontaktyi.pug';
import ht from './pages/tovaryi.pug';
import h from './pages/uslugi.pug';

import less from './styles/connect.less';