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