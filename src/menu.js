class Gamburger {
    constructor(item){
        this.rowNav= item;
        this.btn= this.render(this.rowNav, 1);
        this.list= this.render(this.rowNav, 2);
        this.btn.addEventListener('click', this.handleClick.bind(null, this.list, 'header__navigation_visible'));
    }
    render(a, b){
        return a.childNodes[b];
    }
    
    handleClick(a, b){
        a.classList.toggle(b);
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