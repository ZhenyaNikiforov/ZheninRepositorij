class Gamburger {
    constructor(nameClassButton,){
        this.buttonMenu= document.getElementsByClassName(nameClassButton);
    }

    button(baseClass, openClass){
        this.buttonMenu[0].addEventListener('click', function(){document.getElementsByClassName(baseClass)[0].classList.toggle(openClass)});
    }
}
const firstGambur= new Gamburger('header__btn-menu');
firstGambur.button('header__navigation', 'header__navigation_visible');

/*let buttonMenu;
let navMenu;
console.log('navMenu'); //tolko na vremya

buttonMenu = document.getElementsByClassName('header__btn-menu');
navMenu = document.getElementsByClassName('header__navigation');

function openClose () {
    navMenu[0].classList.toggle('header__navigation_visible');
}

buttonMenu[0].addEventListener('click', openClose);*/

import html from './pages/index.pug';
import htm from './pages/kontaktyi.pug';
import ht from './pages/tovaryi.pug';
import h from './pages/uslugi.pug';

import less from './styles/connect.less';

/*--Создать класс бургера, этот класс должен получать в конструктор элемент, и реализовывать метод переключения меню (элемент бургера)
-- Сделать функцию рендера, которая находит все элементы, на которых этот класс должен инициализироваться. Разместить в этом же файле. 
Файл с классом должен быть отдельный.
Имя класса такое же, как имя файла--*/