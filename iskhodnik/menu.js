let knopka_menu;
let samo_menu;
let ikonka_menu;
let krestik_menu;

knopka_menu = document.getElementById('knopka_menu');
samo_menu = document.getElementById('menu');
ikonka_menu = document.getElementById('ikonka');
krestik_menu = document.getElementById('krestik');

function otkryit_zakryit () {
    ikonka_menu.classList.toggle('ne_vidna_iconka_menu');
    krestik_menu.classList.toggle('ne_viden_container_zakryit_menu');
    samo_menu.classList.toggle('ne_vidno_menu');
}

knopka_menu.addEventListener('click', otkryit_zakryit);

import html from './inindex.html';
import htm from './kontaktyi.html';
import ht from './tovaryi.html';
import h from './uslugi.html';

/*import gl from './images/gl.png';
import head from './images/head.png';
import ikonka3 from './images/ikonka3.png';
import ikonkaf from './images/ikonkafejsbuka.png';
import ikonkai from './images/ikonkainternet.png';
import ikonkat from './images/ikonkatwittera.png';
import menu from './images/menu.png';
import play from './images/play.png';
import red from './images/red.png';
import sec from './images/sec.png';
import sec2 from './images/sec2.png';
import sec3 from './images/sec3.png';
import sec4 from './images/sec4.png';
import sky from './images/sky.png';
import vector from './images/vector.png';*/

import less from './lessDir/container.less';