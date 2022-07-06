/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./iskhodnik/menu.js":
/*!***************************!*\
  !*** ./iskhodnik/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _htmlFiles_index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlFiles/index.html */ \"./iskhodnik/htmlFiles/index.html\");\n/* harmony import */ var _htmlFiles_kontaktyi_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlFiles/kontaktyi.html */ \"./iskhodnik/htmlFiles/kontaktyi.html\");\n/* harmony import */ var _htmlFiles_tovaryi_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./htmlFiles/tovaryi.html */ \"./iskhodnik/htmlFiles/tovaryi.html\");\n/* harmony import */ var _htmlFiles_uslugi_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./htmlFiles/uslugi.html */ \"./iskhodnik/htmlFiles/uslugi.html\");\n/* harmony import */ var _lessDir_container_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lessDir/container.less */ \"./iskhodnik/lessDir/container.less\");\nlet knopka_menu;\r\nlet samo_menu;\r\nlet ikonka_menu;\r\nlet krestik_menu;\r\n\r\nknopka_menu = document.getElementById('knopka_menu');\r\nsamo_menu = document.getElementById('menu');\r\nikonka_menu = document.getElementById('ikonka');\r\nkrestik_menu = document.getElementById('krestik');\r\n\r\nfunction otkryit_zakryit () {\r\n    ikonka_menu.classList.toggle('ne_vidna_iconka_menu');\r\n    krestik_menu.classList.toggle('ne_viden_container_zakryit_menu');\r\n    samo_menu.classList.toggle('ne_vidno_menu');\r\n}\r\n\r\nknopka_menu.addEventListener('click', otkryit_zakryit);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://ForWebPack/./iskhodnik/menu.js?");

/***/ }),

/***/ "./iskhodnik/htmlFiles/index.html":
/*!****************************************!*\
  !*** ./iskhodnik/htmlFiles/index.html ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/head.png */ \"./iskhodnik/images/head.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/menu.png */ \"./iskhodnik/images/menu.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/red.png */ \"./iskhodnik/images/red.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/sec.png */ \"./iskhodnik/images/sec.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/sec4.png */ \"./iskhodnik/images/sec4.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/sec3.png */ \"./iskhodnik/images/sec3.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/sec2.png */ \"./iskhodnik/images/sec2.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/sky.png */ \"./iskhodnik/images/sky.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../images/gl.png */ \"./iskhodnik/images/gl.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../images/play.png */ \"./iskhodnik/images/play.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../images/vector.png */ \"./iskhodnik/images/vector.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"ru\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width,initial-scale=1.0\\\" />\\r\\n    <title>GlavStranicsa</title>\\r\\n</head>\\r\\n<body>\\r\\n    <header>\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"NaDoske\\\">\\r\\n        <a href=\\\"index.html\\\" class=\\\"logotype\\\">\\r\\n            <span class=\\\"text_logotype\\\">\\r\\n                /.\\r\\n            </span>\\r\\n        </a>\\r\\n        <div class=\\\"container_teksta_golovyi\\\">\\r\\n            <h1 class=\\\"zagolov_1_golova\\\">Amazing Dude.</h1>\\r\\n            <h2 class=\\\"zagolov_2_golova\\\">Amazing Life.</h2>\\r\\n            <p class=\\\"abzacs_1_golova\\\">Welcome to the personal site of <span class=\\\"john\\\">John Doe</span>.</p>\\r\\n            <p class=\\\"abzacs_2_golova\\\">A professional skier and a musician.</p>\\r\\n        </div>\\r\\n        <button class=\\\"btn_menu\\\" id=\\\"knopka_menu\\\">\\r\\n            <span class=\\\"icon_menu\\\" id=\\\"ikonka\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"menu\\\">\\r\\n            </span>\\r\\n            <span class=\\\"container_zakryit_menu ne_viden_container_zakryit_menu\\\" id=\\\"krestik\\\">\\r\\n                <span class=\\\"zakryit_menu\\\">\\r\\n                    +\\r\\n                </span>\\r\\n            </span>\\r\\n            <span class=\\\"text_menu\\\">\\r\\n                MENU\\r\\n            </span>\\r\\n        </button>\\r\\n        <nav class=\\\"list_menu ne_vidno_menu\\\" id=\\\"menu\\\">\\r\\n           <ul class=\\\"podlist_menu\\\">\\r\\n             <li><a href=\\\"index.html\\\">Glavnaya</a></li>\\r\\n            <li><a href=\\\"tovaryi.html\\\">Tovaryi</a></li>\\r\\n            <li><a href=\\\"uslugi.html\\\">Uslugi</a></li>\\r\\n            <li><a href=\\\"kontaktyi.html\\\">Kontaktyi</a></li>  \\r\\n           </ul>\\r\\n        </nav>\\r\\n    </header>\\r\\n    <main>\\r\\n       <section class=\\\"razdelRedHunter\\\">\\r\\n            <div class=\\\"containerIconRedHunter\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"KrasnyiLyizhnik\\\">\\r\\n            </div>\\r\\n            <div class=\\\"containerTextRedHunter\\\">\\r\\n                <h2 class=\\\"zagolovRedHunter\\\">SED FAUCIBUS QUIS</h2>\\r\\n                <p class=\\\"abzRedHunter\\\">\\r\\n                    Fusce bibendum luctus massa, \\r\\n                    ut tincidunt lectus tincidunt in. \\r\\n                    Nulla tristique ipsum vitae lacus \\r\\n                    ullamcorper, at dictum nunc \\r\\n                    scelerisque.\\r\\n                </p>\\r\\n            </div>\\r\\n        </section>\\r\\n        <section class=\\\"razdelGallery\\\">\\r\\n            <div><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"KanDoroga\\\"></div>\\r\\n            <div><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"NaLyizhax\\\"></div>\\r\\n            <div><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"Botinok\\\"></div>\\r\\n            <div><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"Goryi\\\"></div>\\r\\n        </section>\\r\\n        <section class=\\\"razdelLyizhi\\\">\\r\\n            <div class=\\\"lyizhi_text\\\">\\r\\n                <h2 class=\\\"lyizhi_zagolov\\\">INSTAGRAM</h2>\\r\\n                <p class=\\\"lyizhi_abz\\\">\\r\\n                    Etiam lacus dolor, tincidunt vitae \\r\\n                    nisi in, vulputate placerat odio.\\r\\n                    Pellentesque iaculis.\\r\\n                </p>\\r\\n                <button class=\\\"lyizhi_btn\\\">VIEW ON INSTAGRAM</button>\\r\\n            </div>\\r\\n            <div class=\\\"lyizhi_icon\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"Lyizhi_Palki_Botinki\\\">\\r\\n            </div>\\r\\n            <div class=\\\"lyizhi_zero\\\"></div>\\r\\n        </section>\\r\\n        <section class=\\\"razdelZatyilok\\\">\\r\\n            <div class=\\\"zatyilok_zero\\\"></div>\\r\\n            <div class=\\\"zatyilok_kontent\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"zatyilok\\\">\\r\\n                <section class=\\\"zatyilok_text\\\">\\r\\n                    <h2 class=\\\"zagol_zatyil_2\\\">SELF-EFFACING RAGE</h2>\\r\\n                    <h3 class=\\\"zagol_zatyil_3\\\">FT. FASCINATING COLLISION</h3>\\r\\n                    <ul class=\\\"zatyilok_abzacs\\\">\\r\\n                       <li>Director: James G. Rohrer</li>\\r\\n                       <li>Production Company: Sycamore</li>\\r\\n                       <li>Producer: Laura S. Carlton</li>\\r\\n                       <li>Executive Producer: Jack M. Heckart</li>\\r\\n                    </ul>\\r\\n                    <button class=\\\"zatyilok_button\\\">\\r\\n                        CLICK TO PLAY\\r\\n                        <span class=\\\"icon_button\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"play\\\">\\r\\n                        </span>\\r\\n                    </button>\\r\\n                </section>\\r\\n            </div>\\r\\n        </section>\\r\\n        <section class=\\\"razdelKontaktyi\\\">\\r\\n            <div class=\\\"kontaktyi_1\\\">\\r\\n                <h2 class=\\\"zagolov_kontaktyi_1\\\">\\r\\n                    SPOTIFY\\r\\n                </h2>\\r\\n                <p class=\\\"abzacs_kontaktyi_1\\\">\\r\\n                    Follow me, stream and add my songs to your Spotify playlist.\\r\\n                </p>\\r\\n                <button class=\\\"btn_kontaktyi_1\\\">\\r\\n                    FOLLOW ON SPOTIFY\\r\\n                </button>\\r\\n            </div>\\r\\n            <div class=\\\"kontaktyi_2\\\">\\r\\n                <h2 class=\\\"zagolov_kontaktyi_2\\\">\\r\\n                    ITUNES\\r\\n                </h2>\\r\\n                <p class=\\\"abzacs_kontaktyi_2\\\">\\r\\n                    Buy and download my songs from iTunes.\\r\\n                </p>\\r\\n                <button class=\\\"btn_kontaktyi_2\\\">\\r\\n                    BUY FROM ITUNES\\r\\n                </button>\\r\\n            </div>\\r\\n        </section>\\r\\n    </main>\\r\\n    <footer>\\r\\n        <section class=\\\"column_left\\\">\\r\\n            <h2 class=\\\"zagolov_column_left\\\">AMAZING DUDE</h2>\\r\\n            <h2 class=\\\"zagolov_column_left_2\\\">AMAZING LIFE</h2>\\r\\n            <p class=\\\"abzacs_column_left\\\">\\r\\n                Mauris ornare lobortis arcu, at sodales dolor finibus nec. In convallis risus ligula, bibendum sagittis ante cursus vitae. Donec ornare, dui nec sagittis imperdiet, nunc eros dignissim augue, ut aliquam nibh felis sit amet leo. Vivamus eu tincidunt tellus. Vestibulum quis condimentum lectus, nec aliquet lectus. Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque. Phasellus in scelerisque elit, eu ultricies mauris.\\r\\n            </p>\\r\\n            <span class=\\\"bottom_column_left\\\">\\r\\n                Ⓒ2015. all rights reserved.\\r\\n            </span>\\r\\n        </section>\\r\\n        <section class=\\\"column_middle\\\">\\r\\n            <h2 class=\\\"zagolov_column_middle\\\">\\r\\n                CONTACT ME\\r\\n            </h2>\\r\\n            <p class=\\\"abzacs_column_middle_1\\\">\\r\\n                1242 Crestview Terrace\\r\\n                Artesia Wells, TX 78001\\r\\n            </p>\\r\\n            <p class=\\\"abzacs_column_middle_2\\\">\\r\\n                Phone: 830-676-7974\\r\\n                Email: halo@sitename.com\\r\\n            </p>\\r\\n            <h2 class=\\\"zagolov_column_middle_2\\\">\\r\\n                FOLLOW ME ON\\r\\n            </h2>\\r\\n            <ul class=\\\"list_column_middle\\\">\\r\\n                <li class=\\\"elem_list_col_mid_1\\\"><a href=\\\"#\\\">FACEBOOK</a></li>\\r\\n                <li class=\\\"elem_list_col_mid_2\\\"><a href=\\\"#\\\">TWITTER</a></li>\\r\\n                <li class=\\\"elem_list_col_mid_3\\\"><a href=\\\"#\\\">INSTAGRAM</a></li>\\r\\n                <li class=\\\"elem_list_col_mid_4\\\"><a href=\\\"#\\\">SPOTIFY</a></li>\\r\\n            </ul>\\r\\n        </section>\\r\\n        <section class=\\\"column_right\\\">\\r\\n            <h2 class=\\\"zagolov_1_column_right\\\">SUBSCRIBE</h2>\\r\\n            <p class=\\\"abzacs_column_right\\\">\\r\\n                Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque.\\r\\n            </p>\\r\\n            <form class=\\\"btn_column_right\\\">\\r\\n                <input type=\\\"email\\\" placeholder=\\\"ENTER YOUR EMAIL ADDRESS\\\" class=\\\"pole_btn_col_r\\\">\\r\\n                <button class=\\\"icon_btn_right_column\\\">\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" alt=\\\"icon\\\">\\r\\n                </button>\\r\\n            </form>\\r\\n            <h2 class=\\\"zagolov_2_column_right\\\">SPONSOR</h2>\\r\\n            <div class=\\\"logotype_section_right_column\\\">\\r\\n                <span class=\\\"logo_column_right\\\">LOGO</span>\\r\\n                <span class=\\\"logo_column_right\\\">LOGO</span>\\r\\n                <span class=\\\"logo_column_right\\\">LOGO</span>\\r\\n            </div>\\r\\n        </section>\\r\\n    </footer>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://ForWebPack/./iskhodnik/htmlFiles/index.html?");

/***/ }),

/***/ "./iskhodnik/htmlFiles/kontaktyi.html":
/*!********************************************!*\
  !*** ./iskhodnik/htmlFiles/kontaktyi.html ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/head.png */ \"./iskhodnik/images/head.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/menu.png */ \"./iskhodnik/images/menu.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/vector.png */ \"./iskhodnik/images/vector.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"ru\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width,initial-scale=1.0\\\" />\\r\\n    <title>Stranicsa_kontaktov</title>\\r\\n</head>\\r\\n<body>\\r\\n    <header>\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"NaDoske\\\">\\r\\n        <a href=\\\"index.html\\\" class=\\\"logotype\\\">\\r\\n            <span class=\\\"text_logotype\\\">\\r\\n                /.\\r\\n            </span>\\r\\n        </a>\\r\\n        <div class=\\\"container_teksta_golovyi\\\">\\r\\n            <h1 class=\\\"zagolov_1_golova\\\">Amazing Dude.</h1>\\r\\n            <h2 class=\\\"zagolov_2_golova\\\">Amazing Life.</h2>\\r\\n            <p class=\\\"abzacs_1_golova\\\">Welcome to the personal site of <span class=\\\"john\\\">John Doe</span>.</p>\\r\\n            <p class=\\\"abzacs_2_golova\\\">A professional skier and a musician.</p>\\r\\n        </div>\\r\\n        <button class=\\\"btn_menu\\\" id=\\\"knopka_menu\\\">\\r\\n            <span class=\\\"icon_menu\\\" id=\\\"ikonka\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"menu\\\">\\r\\n            </span>\\r\\n            <span class=\\\"container_zakryit_menu ne_viden_container_zakryit_menu\\\" id=\\\"krestik\\\">\\r\\n                <span class=\\\"zakryit_menu\\\">\\r\\n                    +\\r\\n                </span>\\r\\n            </span>\\r\\n            <span class=\\\"text_menu\\\">\\r\\n                MENU\\r\\n            </span>\\r\\n        </button>\\r\\n        <nav class=\\\"list_menu ne_vidno_menu\\\" id=\\\"menu\\\">\\r\\n           <ul class=\\\"podlist_menu\\\">\\r\\n              <li><a href=\\\"index.html\\\">Glavnaya</a></li>\\r\\n            <li><a href=\\\"tovaryi.html\\\">Tovaryi</a></li>\\r\\n            <li><a href=\\\"uslugi.html\\\">Uslugi</a></li>\\r\\n            <li><a href=\\\"kontaktyi.html\\\">Kontaktyi</a></li> \\r\\n           </ul>\\r\\n        </nav>\\r\\n    </header>\\r\\n    <nav class=\\\"container_hlebnyikh_kroshek\\\">\\r\\n       <ul class=\\\"hlebnyie_kroshki\\\">\\r\\n           <li class=\\\"hlebnaya_kroshka\\\" id=\\\"pervaya_kroshka\\\"><a href=\\\"index.html\\\" class=\\\"ssyilka_hlebnoj_kroshki\\\">Na glavnujy</a></li>\\r\\n           <li class=\\\"hlebnaya_kroshka\\\"><a href=\\\"kontaktyi.html\\\" class=\\\"ssyilka_hlebnoj_kroshki\\\">Kontaktyi</a></li>\\r\\n       </ul> \\r\\n    </nav>\\r\\n    <main>\\r\\n        <section class=\\\"informaciya_o_nas\\\">\\r\\n            telefon: 8-9xx-xx-xxx-xx <br>\\r\\n            adres gorodskoj: RF, Moskva, Chistoprudnyij Bulvar, dom xxx <br>\\r\\n            e-mail: xxxx@mail.ru <br>\\r\\n        </section>\\r\\n    </main>\\r\\n    <footer>\\r\\n        <section class=\\\"column_left\\\">\\r\\n            <h2 class=\\\"zagolov_column_left\\\">AMAZING DUDE</h2>\\r\\n            <h2 class=\\\"zagolov_column_left_2\\\">AMAZING LIFE</h2>\\r\\n            <p class=\\\"abzacs_column_left\\\">\\r\\n                Mauris ornare lobortis arcu, at sodales dolor finibus nec. In convallis risus ligula, bibendum sagittis ante cursus vitae. Donec ornare, dui nec sagittis imperdiet, nunc eros dignissim augue, ut aliquam nibh felis sit amet leo. Vivamus eu tincidunt tellus. Vestibulum quis condimentum lectus, nec aliquet lectus. Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque. Phasellus in scelerisque elit, eu ultricies mauris.\\r\\n            </p>\\r\\n            <span class=\\\"bottom_column_left\\\">\\r\\n                Ⓒ2015. all rights reserved.\\r\\n            </span>\\r\\n        </section>\\r\\n        <section class=\\\"column_middle\\\">\\r\\n            <h2 class=\\\"zagolov_column_middle\\\">\\r\\n                CONTACT ME\\r\\n            </h2>\\r\\n            <p class=\\\"abzacs_column_middle_1\\\">\\r\\n                1242 Crestview Terrace\\r\\n                Artesia Wells, TX 78001\\r\\n            </p>\\r\\n            <p class=\\\"abzacs_column_middle_2\\\">\\r\\n                Phone: 830-676-7974\\r\\n                Email: halo@sitename.com\\r\\n            </p>\\r\\n            <h2 class=\\\"zagolov_column_middle_2\\\">\\r\\n                FOLLOW ME ON\\r\\n            </h2>\\r\\n            <ul class=\\\"list_column_middle\\\">\\r\\n                <li class=\\\"elem_list_col_mid_1\\\"><a href=\\\"#\\\">FACEBOOK</a></li>\\r\\n                <li class=\\\"elem_list_col_mid_2\\\"><a href=\\\"#\\\">TWITTER</a></li>\\r\\n                <li class=\\\"elem_list_col_mid_3\\\"><a href=\\\"#\\\">INSTAGRAM</a></li>\\r\\n                <li class=\\\"elem_list_col_mid_4\\\"><a href=\\\"#\\\">SPOTIFY</a></li>\\r\\n            </ul>\\r\\n        </section>\\r\\n        <section class=\\\"column_right\\\">\\r\\n            <h2 class=\\\"zagolov_1_column_right\\\">SUBSCRIBE</h2>\\r\\n            <p class=\\\"abzacs_column_right\\\">\\r\\n                Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque.\\r\\n            </p>\\r\\n            <form class=\\\"btn_column_right\\\">\\r\\n                <input type=\\\"email\\\" placeholder=\\\"ENTER YOUR EMAIL ADDRESS\\\" class=\\\"pole_btn_col_r\\\">\\r\\n                <button class=\\\"icon_btn_right_column\\\">\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"icon\\\">\\r\\n                </button>\\r\\n            </form>\\r\\n            <h2 class=\\\"zagolov_2_column_right\\\">SPONSOR</h2>\\r\\n            <div class=\\\"logotype_section_right_column\\\">\\r\\n                <span class=\\\"logo_column_right\\\">LOGO</span>\\r\\n                <span class=\\\"logo_column_right\\\">LOGO</span>\\r\\n                <span class=\\\"logo_column_right\\\">LOGO</span>\\r\\n            </div>\\r\\n        </section>\\r\\n    </footer>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://ForWebPack/./iskhodnik/htmlFiles/kontaktyi.html?");

/***/ }),

/***/ "./iskhodnik/htmlFiles/tovaryi.html":
/*!******************************************!*\
  !*** ./iskhodnik/htmlFiles/tovaryi.html ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/head.png */ \"./iskhodnik/images/head.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/menu.png */ \"./iskhodnik/images/menu.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/sky.png */ \"./iskhodnik/images/sky.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/vector.png */ \"./iskhodnik/images/vector.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"ru\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width,initial-scale=1.0\\\" />\\r\\n    <title>Nashi_tovaryi</title>\\r\\n</head>\\r\\n<body>\\r\\n    <header>\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"NaDoske\\\">\\r\\n        <a href=\\\"index.html\\\" class=\\\"logotype\\\">\\r\\n            <span class=\\\"text_logotype\\\">\\r\\n                /.\\r\\n            </span>\\r\\n        </a>\\r\\n        <div class=\\\"container_teksta_golovyi\\\">\\r\\n            <h1 class=\\\"zagolov_1_golova\\\">Amazing Dude.</h1>\\r\\n            <h2 class=\\\"zagolov_2_golova\\\">Amazing Life.</h2>\\r\\n            <p class=\\\"abzacs_1_golova\\\">Welcome to the personal site of <span class=\\\"john\\\">John Doe</span>.</p>\\r\\n            <p class=\\\"abzacs_2_golova\\\">A professional skier and a musician.</p>\\r\\n        </div>\\r\\n        <button class=\\\"btn_menu\\\" id=\\\"knopka_menu\\\">\\r\\n            <span class=\\\"icon_menu\\\" id=\\\"ikonka\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"menu\\\">\\r\\n            </span>\\r\\n            <span class=\\\"container_zakryit_menu ne_viden_container_zakryit_menu\\\" id=\\\"krestik\\\">\\r\\n                <span class=\\\"zakryit_menu\\\">\\r\\n                    +\\r\\n                </span>\\r\\n            </span>\\r\\n            <span class=\\\"text_menu\\\">\\r\\n                MENU\\r\\n            </span>\\r\\n        </button>\\r\\n        <nav class=\\\"list_menu ne_vidno_menu\\\" id=\\\"menu\\\">\\r\\n           <ul class=\\\"podlist_menu\\\">\\r\\n               <li><a href=\\\"index.html\\\">Glavnaya</a></li>\\r\\n            <li><a href=\\\"tovaryi.html\\\">Tovaryi</a></li>\\r\\n            <li><a href=\\\"uslugi.html\\\">Uslugi</a></li>\\r\\n            <li><a href=\\\"kontaktyi.html\\\">Kontaktyi</a></li>\\r\\n           </ul>\\r\\n        </nav>\\r\\n    </header>\\r\\n    <nav class=\\\"container_hlebnyikh_kroshek\\\">\\r\\n       <ul class=\\\"hlebnyie_kroshki\\\">\\r\\n           <li class=\\\"hlebnaya_kroshka\\\" id=\\\"pervaya_kroshka\\\"><a href=\\\"index.html\\\" class=\\\"ssyilka_hlebnoj_kroshki\\\">Na glavnujy</a></li>\\r\\n           <li class=\\\"hlebnaya_kroshka\\\"><a href=\\\"tovaryi.html\\\" class=\\\"ssyilka_hlebnoj_kroshki\\\">Tovaryi</a></li>\\r\\n       </ul> \\r\\n    </nav>\\r\\n    <main>\\r\\n       <section class=\\\"razdelLyizhi\\\">\\r\\n            <div class=\\\"lyizhi_text\\\">\\r\\n                <h2 class=\\\"lyizhi_zagolov\\\">INSTAGRAM</h2>\\r\\n                <p class=\\\"lyizhi_abz\\\">\\r\\n                    Etiam lacus dolor, tincidunt vitae \\r\\n                    nisi in, vulputate placerat odio.\\r\\n                    Pellentesque iaculis.\\r\\n                </p>\\r\\n                <button class=\\\"lyizhi_btn\\\">VIEW ON INSTAGRAM</button>\\r\\n            </div>\\r\\n            <div class=\\\"lyizhi_icon\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"Lyizhi_Palki_Botinki\\\">\\r\\n            </div>\\r\\n            <div class=\\\"lyizhi_zero\\\"></div>\\r\\n        </section> \\r\\n    </main>\\r\\n    <footer>\\r\\n        <section class=\\\"column_left\\\">\\r\\n            <h2 class=\\\"zagolov_column_left\\\">AMAZING DUDE</h2>\\r\\n            <h2 class=\\\"zagolov_column_left_2\\\">AMAZING LIFE</h2>\\r\\n            <p class=\\\"abzacs_column_left\\\">\\r\\n                Mauris ornare lobortis arcu, at sodales dolor finibus nec. In convallis risus ligula, bibendum sagittis ante cursus vitae. Donec ornare, dui nec sagittis imperdiet, nunc eros dignissim augue, ut aliquam nibh felis sit amet leo. Vivamus eu tincidunt tellus. Vestibulum quis condimentum lectus, nec aliquet lectus. Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque. Phasellus in scelerisque elit, eu ultricies mauris.\\r\\n            </p>\\r\\n            <span class=\\\"bottom_column_left\\\">\\r\\n                Ⓒ2015. all rights reserved.\\r\\n            </span>\\r\\n        </section>\\r\\n        <section class=\\\"column_middle\\\">\\r\\n            <h2 class=\\\"zagolov_column_middle\\\">\\r\\n                CONTACT ME\\r\\n            </h2>\\r\\n            <p class=\\\"abzacs_column_middle_1\\\">\\r\\n                1242 Crestview Terrace\\r\\n                Artesia Wells, TX 78001\\r\\n            </p>\\r\\n            <p class=\\\"abzacs_column_middle_2\\\">\\r\\n                Phone: 830-676-7974\\r\\n                Email: halo@sitename.com\\r\\n            </p>\\r\\n            <h2 class=\\\"zagolov_column_middle_2\\\">\\r\\n                FOLLOW ME ON\\r\\n            </h2>\\r\\n            <ul class=\\\"list_column_middle\\\">\\r\\n                <li class=\\\"elem_list_col_mid_1\\\"><a href=\\\"#\\\">FACEBOOK</a></li>\\r\\n                <li class=\\\"elem_list_col_mid_2\\\"><a href=\\\"#\\\">TWITTER</a></li>\\r\\n                <li class=\\\"elem_list_col_mid_3\\\"><a href=\\\"#\\\">INSTAGRAM</a></li>\\r\\n                <li class=\\\"elem_list_col_mid_4\\\"><a href=\\\"#\\\">SPOTIFY</a></li>\\r\\n            </ul>\\r\\n        </section>\\r\\n        <section class=\\\"column_right\\\">\\r\\n            <h2 class=\\\"zagolov_1_column_right\\\">SUBSCRIBE</h2>\\r\\n            <p class=\\\"abzacs_column_right\\\">\\r\\n                Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque.\\r\\n            </p>\\r\\n            <form class=\\\"btn_column_right\\\">\\r\\n                <input type=\\\"email\\\" placeholder=\\\"ENTER YOUR EMAIL ADDRESS\\\" class=\\\"pole_btn_col_r\\\">\\r\\n                <button class=\\\"icon_btn_right_column\\\">\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"icon\\\">\\r\\n                </button>\\r\\n            </form>\\r\\n            <h2 class=\\\"zagolov_2_column_right\\\">SPONSOR</h2>\\r\\n            <div class=\\\"logotype_section_right_column\\\">\\r\\n                <span class=\\\"logo_column_right\\\">LOGO</span>\\r\\n                <span class=\\\"logo_column_right\\\">LOGO</span>\\r\\n                <span class=\\\"logo_column_right\\\">LOGO</span>\\r\\n            </div>\\r\\n        </section>\\r\\n    </footer>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://ForWebPack/./iskhodnik/htmlFiles/tovaryi.html?");

/***/ }),

/***/ "./iskhodnik/htmlFiles/uslugi.html":
/*!*****************************************!*\
  !*** ./iskhodnik/htmlFiles/uslugi.html ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/head.png */ \"./iskhodnik/images/head.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/menu.png */ \"./iskhodnik/images/menu.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/gl.png */ \"./iskhodnik/images/gl.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/play.png */ \"./iskhodnik/images/play.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/vector.png */ \"./iskhodnik/images/vector.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"ru\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width,initial-scale=1.0\\\" />\\r\\n    <title>Nashi_uslugi</title>\\r\\n</head>\\r\\n<body>\\r\\n    <header>\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"NaDoske\\\">\\r\\n        <a href=\\\"index.html\\\" class=\\\"logotype\\\">\\r\\n            <span class=\\\"text_logotype\\\">\\r\\n                /.\\r\\n            </span>\\r\\n        </a>\\r\\n        <div class=\\\"container_teksta_golovyi\\\">\\r\\n            <h1 class=\\\"zagolov_1_golova\\\">Amazing Dude.</h1>\\r\\n            <h2 class=\\\"zagolov_2_golova\\\">Amazing Life.</h2>\\r\\n            <p class=\\\"abzacs_1_golova\\\">Welcome to the personal site of <span class=\\\"john\\\">John Doe</span>.</p>\\r\\n            <p class=\\\"abzacs_2_golova\\\">A professional skier and a musician.</p>\\r\\n        </div>\\r\\n        <button class=\\\"btn_menu\\\" id=\\\"knopka_menu\\\">\\r\\n            <span class=\\\"icon_menu\\\" id=\\\"ikonka\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"menu\\\">\\r\\n            </span>\\r\\n            <span class=\\\"container_zakryit_menu ne_viden_container_zakryit_menu\\\" id=\\\"krestik\\\">\\r\\n                <span class=\\\"zakryit_menu\\\">\\r\\n                    +\\r\\n                </span>\\r\\n            </span>\\r\\n            <span class=\\\"text_menu\\\">\\r\\n                MENU\\r\\n            </span>\\r\\n        </button>\\r\\n        <nav class=\\\"list_menu ne_vidno_menu\\\" id=\\\"menu\\\">\\r\\n           <ul class=\\\"podlist_menu\\\">\\r\\n               <li><a href=\\\"index.html\\\">Glavnaya</a></li>\\r\\n            <li><a href=\\\"tovaryi.html\\\">Tovaryi</a></li>\\r\\n            <li><a href=\\\"uslugi.html\\\">Uslugi</a></li>\\r\\n            <li><a href=\\\"kontaktyi.html\\\">Kontaktyi</a></li>\\r\\n           </ul> \\r\\n        </nav>\\r\\n    </header>\\r\\n    <nav class=\\\"container_hlebnyikh_kroshek\\\">\\r\\n       <ul class=\\\"hlebnyie_kroshki\\\">\\r\\n           <li class=\\\"hlebnaya_kroshka\\\" id=\\\"pervaya_kroshka\\\"><a href=\\\"index.html\\\" class=\\\"ssyilka_hlebnoj_kroshki\\\">Na glavnujy</a></li>\\r\\n           <li class=\\\"hlebnaya_kroshka\\\"><a href=\\\"uslugi.html\\\" class=\\\"ssyilka_hlebnoj_kroshki\\\">Uslugi</a></li>\\r\\n       </ul> \\r\\n    </nav>\\r\\n    <main>\\r\\n       <section class=\\\"razdelZatyilok\\\">\\r\\n            <div class=\\\"zatyilok_zero\\\"></div>\\r\\n            <div class=\\\"zatyilok_kontent\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"zatyilok\\\">\\r\\n                <div class=\\\"zatyilok_text\\\">\\r\\n                    <h2 class=\\\"zagol_zatyil_2\\\">SELF-EFFACING RAGE</h2>\\r\\n                    <h3 class=\\\"zagol_zatyil_3\\\">FT. FASCINATING COLLISION</h3>\\r\\n                    <ul class=\\\"zatyilok_abzacs\\\">\\r\\n                       <li>Director: James G. Rohrer</li>\\r\\n                       <li>Production Company: Sycamore</li>\\r\\n                       <li>Producer: Laura S. Carlton</li>\\r\\n                       <li>Executive Producer: Jack M. Heckart</li>\\r\\n                    </ul>\\r\\n                    <button class=\\\"zatyilok_button\\\">\\r\\n                        CLICK TO PLAY\\r\\n                        <span class=\\\"icon_button\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"play\\\">\\r\\n                        </span>\\r\\n                    </button>\\r\\n                </div>\\r\\n            </div>\\r\\n        </section> \\r\\n    </main>\\r\\n    <footer>\\r\\n        <section class=\\\"column_left\\\">\\r\\n            <h2 class=\\\"zagolov_column_left\\\">AMAZING DUDE</h2>\\r\\n            <h2 class=\\\"zagolov_column_left_2\\\">AMAZING LIFE</h2>\\r\\n            <p class=\\\"abzacs_column_left\\\">\\r\\n                Mauris ornare lobortis arcu, at sodales dolor finibus nec. In convallis risus ligula, bibendum sagittis ante cursus vitae. Donec ornare, dui nec sagittis imperdiet, nunc eros dignissim augue, ut aliquam nibh felis sit amet leo. Vivamus eu tincidunt tellus. Vestibulum quis condimentum lectus, nec aliquet lectus. Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque. Phasellus in scelerisque elit, eu ultricies mauris.\\r\\n            </p>\\r\\n            <span class=\\\"bottom_column_left\\\">\\r\\n                Ⓒ2015. all rights reserved.\\r\\n            </span>\\r\\n        </section>\\r\\n        <section class=\\\"column_middle\\\">\\r\\n            <h2 class=\\\"zagolov_column_middle\\\">\\r\\n                CONTACT ME\\r\\n            </h2>\\r\\n            <p class=\\\"abzacs_column_middle_1\\\">\\r\\n                1242 Crestview Terrace\\r\\n                Artesia Wells, TX 78001\\r\\n            </p>\\r\\n            <p class=\\\"abzacs_column_middle_2\\\">\\r\\n                Phone: 830-676-7974\\r\\n                Email: halo@sitename.com\\r\\n            </p>\\r\\n            <h2 class=\\\"zagolov_column_middle_2\\\">\\r\\n                FOLLOW ME ON\\r\\n            </h2>\\r\\n            <ul class=\\\"list_column_middle\\\">\\r\\n                <li class=\\\"elem_list_col_mid_1\\\"><a href=\\\"#\\\">FACEBOOK</a></li>\\r\\n                <li class=\\\"elem_list_col_mid_2\\\"><a href=\\\"#\\\">TWITTER</a></li>\\r\\n                <li class=\\\"elem_list_col_mid_3\\\"><a href=\\\"#\\\">INSTAGRAM</a></li>\\r\\n                <li class=\\\"elem_list_col_mid_4\\\"><a href=\\\"#\\\">SPOTIFY</a></li>\\r\\n            </ul>\\r\\n        </section>\\r\\n        <section class=\\\"column_right\\\">\\r\\n            <h2 class=\\\"zagolov_1_column_right\\\">SUBSCRIBE</h2>\\r\\n            <p class=\\\"abzacs_column_right\\\">\\r\\n                Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque.\\r\\n            </p>\\r\\n            <form class=\\\"btn_column_right\\\">\\r\\n                <input type=\\\"email\\\" placeholder=\\\"ENTER YOUR EMAIL ADDRESS\\\" class=\\\"pole_btn_col_r\\\">\\r\\n                <button class=\\\"icon_btn_right_column\\\">\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"icon\\\">\\r\\n                </button>\\r\\n            </form>\\r\\n            <h2 class=\\\"zagolov_2_column_right\\\">SPONSOR</h2>\\r\\n            <div class=\\\"logotype_section_right_column\\\">\\r\\n                <span class=\\\"logo_column_right\\\">LOGO</span>\\r\\n                <span class=\\\"logo_column_right\\\">LOGO</span>\\r\\n                <span class=\\\"logo_column_right\\\">LOGO</span>\\r\\n            </div>\\r\\n        </section>\\r\\n    </footer>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://ForWebPack/./iskhodnik/htmlFiles/uslugi.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://ForWebPack/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./iskhodnik/lessDir/container.less":
/*!******************************************!*\
  !*** ./iskhodnik/lessDir/container.less ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ForWebPack/./iskhodnik/lessDir/container.less?");

/***/ }),

/***/ "./iskhodnik/images/gl.png":
/*!*********************************!*\
  !*** ./iskhodnik/images/gl.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imag/gl.png\";\n\n//# sourceURL=webpack://ForWebPack/./iskhodnik/images/gl.png?");

/***/ }),

/***/ "./iskhodnik/images/head.png":
/*!***********************************!*\
  !*** ./iskhodnik/images/head.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imag/head.png\";\n\n//# sourceURL=webpack://ForWebPack/./iskhodnik/images/head.png?");

/***/ }),

/***/ "./iskhodnik/images/menu.png":
/*!***********************************!*\
  !*** ./iskhodnik/images/menu.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imag/menu.png\";\n\n//# sourceURL=webpack://ForWebPack/./iskhodnik/images/menu.png?");

/***/ }),

/***/ "./iskhodnik/images/play.png":
/*!***********************************!*\
  !*** ./iskhodnik/images/play.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imag/play.png\";\n\n//# sourceURL=webpack://ForWebPack/./iskhodnik/images/play.png?");

/***/ }),

/***/ "./iskhodnik/images/red.png":
/*!**********************************!*\
  !*** ./iskhodnik/images/red.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imag/red.png\";\n\n//# sourceURL=webpack://ForWebPack/./iskhodnik/images/red.png?");

/***/ }),

/***/ "./iskhodnik/images/sec.png":
/*!**********************************!*\
  !*** ./iskhodnik/images/sec.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imag/sec.png\";\n\n//# sourceURL=webpack://ForWebPack/./iskhodnik/images/sec.png?");

/***/ }),

/***/ "./iskhodnik/images/sec2.png":
/*!***********************************!*\
  !*** ./iskhodnik/images/sec2.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imag/sec2.png\";\n\n//# sourceURL=webpack://ForWebPack/./iskhodnik/images/sec2.png?");

/***/ }),

/***/ "./iskhodnik/images/sec3.png":
/*!***********************************!*\
  !*** ./iskhodnik/images/sec3.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imag/sec3.png\";\n\n//# sourceURL=webpack://ForWebPack/./iskhodnik/images/sec3.png?");

/***/ }),

/***/ "./iskhodnik/images/sec4.png":
/*!***********************************!*\
  !*** ./iskhodnik/images/sec4.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imag/sec4.png\";\n\n//# sourceURL=webpack://ForWebPack/./iskhodnik/images/sec4.png?");

/***/ }),

/***/ "./iskhodnik/images/sky.png":
/*!**********************************!*\
  !*** ./iskhodnik/images/sky.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imag/sky.png\";\n\n//# sourceURL=webpack://ForWebPack/./iskhodnik/images/sky.png?");

/***/ }),

/***/ "./iskhodnik/images/vector.png":
/*!*************************************!*\
  !*** ./iskhodnik/images/vector.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imag/vector.png\";\n\n//# sourceURL=webpack://ForWebPack/./iskhodnik/images/vector.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./iskhodnik/menu.js");
/******/ 	
/******/ })()
;