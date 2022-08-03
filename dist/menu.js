/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 91:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 89:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imag/gl.png";

/***/ }),

/***/ 301:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imag/red.png";

/***/ }),

/***/ 891:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imag/sec.png";

/***/ }),

/***/ 708:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imag/sec2.png";

/***/ }),

/***/ 32:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imag/sec3.png";

/***/ }),

/***/ 520:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imag/sec4.png";

/***/ }),

/***/ 551:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imag/sky.png";

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
/******/ 			179: 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(91);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./src/pages/index.pug
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(301), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(891), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(520), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(32), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(708), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(551), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(89), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = getUrl_default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = getUrl_default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = getUrl_default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = getUrl_default()(___HTML_LOADER_IMPORT_6___);
var code = "<!DOCTYPE html><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>GlavStranicsa</title></head><header><div class=\"header__content\"><div class=\"header__row-navigation\"><a class=\"header__logotype\" href=\"index.html\">/.</a><button class=\"header__btn-menu\" id=\"btn\"><div class=\"header__btn-menu-gamburger\"><span class=\"header__gamburger-item-middle\"></span></div>MENU</button><nav class=\"header__navigation\" id=\"menu\"><ul><li><a href=\"index.html\">MAIN</a></li><li><a href=\"kontaktyi.html\">Kontaktyi</a></li><li><a href=\"tovaryi.html\">Tovaryi</a></li><li><a href=\"uslugi.html\">Uslugi</a></li></ul></nav></div><h1 class=\"header__caption-level-1\">Amazing Dude. Amazing Life.</h1><p class=\"header__paragraph-1\">Welcome to personal site of <span class=\"header__john\">John Doe</span>.</p><p class=\"header__paragraph-2\">A professional skier and musician.</p></div></header><main><section class=\"razdelRedHunter\"><div class=\"containerIconRedHunter\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"KrasnyiLyizhnik\"></div><div class=\"containerTextRedHunter\"><div class=\"obertZagolAbzRedHun\"><h2 class=\"zagolovRedHunter\">SED FAUCIBUS QUIS</h2><p class=\"abzRedHunter\">Fusce bibendum luctus massa, ut tincidunt lectus tincidunt in. Nulla tristique ipsum vitae lacus ullamcorper at dictum nunc scelerisque.</p></div></div></section><section class=\"razdelGallery\"><div><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"KanDoroga\"></div><div><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"NaLyizhax\"></div><div><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Botinok\"></div><div><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Goryi\"></div></section><section class=\"razdelLyizhi\"><div class=\"lyizhi_text\"><h2 class=\"lyizhi_zagolov\">INSTAGRAM</h2><p class=\"lyizhi_abz\">Etiam lacus dolor, tincidunt vitae nisi in, vulputate placerat odio. Pellentesque iaculis.</p><button class=\"lyizhi_btn\">VIEW ON INSTAGRAM VIEW ON FACEBOOK</button></div><div class=\"lyizhi_icon\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Lyizhi_Palki_Botinki\"></div><div class=\"lyizhi_zero\"></div></section><section class=\"razdelZatyilok\"><div class=\"zatyilok_zero\"></div><div class=\"zatyilok_kontent\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"zatyilok\"><section class=\"zatyilok_text\"><h2 class=\"zagol_zatyil_2\">SELF-EFFACING RAGE</h2><h3 class=\"zagol_zatyil_3\">FT. FASCINATING COLLISION</h3><ul class=\"zatyilok_abzacs\"><li>Director: James G. Rohrer</li><li>Production Company: Sycamore</li><li>Producer: Laura S. Carlton</li><li>Executive Producer: Jack M. Heckart</li></ul><button class=\"zatyilok_button\">CLICK TO PLAY</button></section></div></section><section class=\"razdelKontaktyi\"><div class=\"kontaktyi_1\"><h2 class=\"zagolov_kontaktyi_1\">SPOTIFY</h2><p class=\"abzacs_kontaktyi_1\">Follow me, stream and add my songs to your Spotify playlist.</p><button class=\"btn_kontaktyi_1\">FOLLOW ON SPOTIFY INRI INRI ABRA KADABRA INRI INRI</button></div><div class=\"kontaktyi_2\"><h2 class=\"zagolov_kontaktyi_2\">ITUNES</h2><p class=\"abzacs_kontaktyi_2\">Buy and download my songs from iTunes.</p><button class=\"btn_kontaktyi_2\">BUY FROM ITUNES SATOR AREPO TENET OPERA ROTAS</button></div></section></main><footer><section class=\"column_left\"><h2 class=\"zagolov_column_left\">AMAZING DUDE</h2><h2 class=\"zagolov_column_left_2\">AMAZING LIFE</h2><p class=\"abzacs_column_left\">Mauris ornare lobortis arcu, at sodales dolor finibus nec. In convallis risus ligula, bibendum sagittis ante cursus vitae. Donec ornare, dui nec sagittis imperdiet, nunc eros dignissim augue, ut aliquam nibh felis sit amet leo. Vivamus eu tincidunt tellus. Vestibulum quis condimentum lectus, nec aliquet lectus. Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque. Phasellus in scelerisque elit, eu ultricies mauris.</p><span class=\"bottom_column_left\">&#x24B8;2015. all rights reserved.</span></section><section class=\"column_middle\"><h2 class=\"zagolov_column_middle\">CONTACT ME</h2><p class=\"abzacs_column_middle_1\">1242 Crestview Terrace Artesia Wells, TX 78001</p><p class=\"abzacs_column_middle_2\">Phone: 830-676-7974 Email: halo@sitename.com</p><h2 class=\"zagolov_column_middle_2\">FOLLOW ME ON</h2><ul class=\"list_column_middle\"><li class=\"elem_list_col_mid_1\"><a href=\"#\">FACEBOOK</a></li><li class=\"elem_list_col_mid_2\"><a href=\"#\">TWITTER</a></li><li class=\"elem_list_col_mid_3\"><a href=\"#\">INSTAGRAM</a></li><li class=\"elem_list_col_mid_4\"><a href=\"#\">SPOTIFY</a></li></ul></section><section class=\"column_right\"><h2 class=\"zagolov_1_column_right\">SUBSCRIBE</h2><p class=\"abzacs_column_right\">Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque.</p><form class=\"btn_column_right\"><input class=\"pole_btn_col_r\" type=\"email\" placeholder=\"ENTER YOUR EMAIL ADDRESS\"><button class=\"icon_btn_right_column\"></button></form><h2 class=\"zagolov_2_column_right\">SPONSOR</h2><div class=\"logotype_section_right_column\"> <span class=\"logo_column_right\">LOGO</span> <span class=\"logo_column_right\">LOGO</span> <span class=\"logo_column_right\">LOGO</span> <span class=\"logo_column_right\">/.</span></div></section></footer>";
// Exports
/* harmony default export */ const pages = ((/* unused pure expression or super */ null && (code)));
;// CONCATENATED MODULE: ./src/pages/tovaryi.pug
// Imports

var tovaryi_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(551), __webpack_require__.b);
// Module
var tovaryi_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(tovaryi_HTML_LOADER_IMPORT_0_);
var tovaryi_code = "<!DOCTYPE html><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>Nashi_tovaryi</title></head><header><div class=\"header__content\"><div class=\"header__row-navigation\"><a class=\"header__logotype\" href=\"index.html\">/.</a><button class=\"header__btn-menu\" id=\"btn\"><div class=\"header__btn-menu-gamburger\"><span class=\"header__gamburger-item-middle\"></span></div>MENU</button><nav class=\"header__navigation\" id=\"menu\"><ul><li><a href=\"index.html\">MAIN</a></li><li><a href=\"kontaktyi.html\">Kontaktyi</a></li><li><a href=\"tovaryi.html\">Tovaryi</a></li><li><a href=\"uslugi.html\">Uslugi</a></li></ul></nav></div><h1 class=\"header__caption-level-1\">Amazing Dude. Amazing Life.</h1><p class=\"header__paragraph-1\">Welcome to personal site of <span class=\"header__john\">John Doe</span>.</p><p class=\"header__paragraph-2\">A professional skier and musician.</p></div></header><nav class=\"container_hlebnyikh_kroshek\"><ul class=\"hlebnyie_kroshki\"><li class=\"hlebnaya_kroshka\" id=\"pervaya_kroshka\"><a class=\"ssyilka_hlebnoj_kroshki\" href=\"index.html\">Na glavnujy</a></li><li class=\"hlebnaya_kroshka\"><a class=\"ssyilka_hlebnoj_kroshki\" href=\"tovaryi.html\">Tovaryi</a></li></ul></nav><main><section class=\"razdelLyizhi\"><div class=\"lyizhi_text\"><h2 class=\"lyizhi_zagolov\">INSTAGRAM</h2><p class=\"lyizhi_abz\">Etiam lacus dolor, tincidunt vitae nisi in, vulputate placerat odio. Pellentesque iaculis.</p><button class=\"lyizhi_btn\">VIEW ON INSTAGRAM</button></div><div class=\"lyizhi_icon\"><img src=\"" + tovaryi_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"Lyizhi_Palki_Botinki\"></div><div class=\"lyizhi_zero\"></div></section></main><footer><section class=\"column_left\"><h2 class=\"zagolov_column_left\">AMAZING DUDE</h2><h2 class=\"zagolov_column_left_2\">AMAZING LIFE</h2><p class=\"abzacs_column_left\">Mauris ornare lobortis arcu, at sodales dolor finibus nec. In convallis risus ligula, bibendum sagittis ante cursus vitae. Donec ornare, dui nec sagittis imperdiet, nunc eros dignissim augue, ut aliquam nibh felis sit amet leo. Vivamus eu tincidunt tellus. Vestibulum quis condimentum lectus, nec aliquet lectus. Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque. Phasellus in scelerisque elit, eu ultricies mauris.</p><span class=\"bottom_column_left\">&#x24B8;2015. all rights reserved.</span></section><section class=\"column_middle\"><h2 class=\"zagolov_column_middle\">CONTACT ME</h2><p class=\"abzacs_column_middle_1\">1242 Crestview Terrace Artesia Wells, TX 78001</p><p class=\"abzacs_column_middle_2\">Phone: 830-676-7974 Email: halo@sitename.com</p><h2 class=\"zagolov_column_middle_2\">FOLLOW ME ON</h2><ul class=\"list_column_middle\"><li class=\"elem_list_col_mid_1\"><a href=\"#\">FACEBOOK</a></li><li class=\"elem_list_col_mid_2\"><a href=\"#\">TWITTER</a></li><li class=\"elem_list_col_mid_3\"><a href=\"#\">INSTAGRAM</a></li><li class=\"elem_list_col_mid_4\"><a href=\"#\">SPOTIFY</a></li></ul></section><section class=\"column_right\"><h2 class=\"zagolov_1_column_right\">SUBSCRIBE</h2><p class=\"abzacs_column_right\">Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque.</p><form class=\"btn_column_right\"><input class=\"pole_btn_col_r\" type=\"email\" placeholder=\"ENTER YOUR EMAIL ADDRESS\"><button class=\"icon_btn_right_column\"></button></form><h2 class=\"zagolov_2_column_right\">SPONSOR</h2><div class=\"logotype_section_right_column\"> <span class=\"logo_column_right\">LOGO</span> <span class=\"logo_column_right\">LOGO</span> <span class=\"logo_column_right\">LOGO</span> <span class=\"logo_column_right\">/.</span></div></section></footer>";
// Exports
/* harmony default export */ const tovaryi = ((/* unused pure expression or super */ null && (tovaryi_code)));
;// CONCATENATED MODULE: ./src/pages/uslugi.pug
// Imports

var uslugi_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(89), __webpack_require__.b);
// Module
var uslugi_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(uslugi_HTML_LOADER_IMPORT_0_);
var uslugi_code = "<!DOCTYPE html><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>Nashi_uslugi</title></head><header><div class=\"header__content\"><div class=\"header__row-navigation\"><a class=\"header__logotype\" href=\"index.html\">/.</a><button class=\"header__btn-menu\" id=\"btn\"><div class=\"header__btn-menu-gamburger\"><span class=\"header__gamburger-item-middle\"></span></div>MENU</button><nav class=\"header__navigation\" id=\"menu\"><ul><li><a href=\"index.html\">MAIN</a></li><li><a href=\"kontaktyi.html\">Kontaktyi</a></li><li><a href=\"tovaryi.html\">Tovaryi</a></li><li><a href=\"uslugi.html\">Uslugi</a></li></ul></nav></div><h1 class=\"header__caption-level-1\">Amazing Dude. Amazing Life.</h1><p class=\"header__paragraph-1\">Welcome to personal site of <span class=\"header__john\">John Doe</span>.</p><p class=\"header__paragraph-2\">A professional skier and musician.</p></div></header><nav class=\"container_hlebnyikh_kroshek\"><ul class=\"hlebnyie_kroshki\"><li class=\"hlebnaya_kroshka\" id=\"pervaya_kroshka\"><a class=\"ssyilka_hlebnoj_kroshki\" href=\"index.html\">Na glavnujy</a></li><li class=\"hlebnaya_kroshka\"><a class=\"ssyilka_hlebnoj_kroshki\" href=\"uslugi.html\">Uslugi</a></li></ul></nav><main><section class=\"razdelZatyilok\"><div class=\"zatyilok_zero\"></div><div class=\"zatyilok_kontent\"><img src=\"" + uslugi_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"zatyilok\"><section class=\"zatyilok_text\"><h2 class=\"zagol_zatyil_2\">SELF-EFFACING RAGE</h2><h3 class=\"zagol_zatyil_3\">FT. FASCINATING COLLISION</h3><ul class=\"zatyilok_abzacs\"><li>Director: James G. Rohrer</li><li>Production Company: Sycamore</li><li>Producer: Laura S. Carlton</li><li>Executive Producer: Jack M. Heckart</li></ul><button class=\"zatyilok_button\">CLICK TO PLAY</button></section></div></section></main><footer><section class=\"column_left\"><h2 class=\"zagolov_column_left\">AMAZING DUDE</h2><h2 class=\"zagolov_column_left_2\">AMAZING LIFE</h2><p class=\"abzacs_column_left\">Mauris ornare lobortis arcu, at sodales dolor finibus nec. In convallis risus ligula, bibendum sagittis ante cursus vitae. Donec ornare, dui nec sagittis imperdiet, nunc eros dignissim augue, ut aliquam nibh felis sit amet leo. Vivamus eu tincidunt tellus. Vestibulum quis condimentum lectus, nec aliquet lectus. Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque. Phasellus in scelerisque elit, eu ultricies mauris.</p><span class=\"bottom_column_left\">&#x24B8;2015. all rights reserved.</span></section><section class=\"column_middle\"><h2 class=\"zagolov_column_middle\">CONTACT ME</h2><p class=\"abzacs_column_middle_1\">1242 Crestview Terrace Artesia Wells, TX 78001</p><p class=\"abzacs_column_middle_2\">Phone: 830-676-7974 Email: halo@sitename.com</p><h2 class=\"zagolov_column_middle_2\">FOLLOW ME ON</h2><ul class=\"list_column_middle\"><li class=\"elem_list_col_mid_1\"><a href=\"#\">FACEBOOK</a></li><li class=\"elem_list_col_mid_2\"><a href=\"#\">TWITTER</a></li><li class=\"elem_list_col_mid_3\"><a href=\"#\">INSTAGRAM</a></li><li class=\"elem_list_col_mid_4\"><a href=\"#\">SPOTIFY</a></li></ul></section><section class=\"column_right\"><h2 class=\"zagolov_1_column_right\">SUBSCRIBE</h2><p class=\"abzacs_column_right\">Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque.</p><form class=\"btn_column_right\"><input class=\"pole_btn_col_r\" type=\"email\" placeholder=\"ENTER YOUR EMAIL ADDRESS\"><button class=\"icon_btn_right_column\"></button></form><h2 class=\"zagolov_2_column_right\">SPONSOR</h2><div class=\"logotype_section_right_column\"> <span class=\"logo_column_right\">LOGO</span> <span class=\"logo_column_right\">LOGO</span> <span class=\"logo_column_right\">LOGO</span> <span class=\"logo_column_right\">/.</span></div></section></footer>";
// Exports
/* harmony default export */ const uslugi = ((/* unused pure expression or super */ null && (uslugi_code)));
;// CONCATENATED MODULE: ./src/menu.js
let buttonMenu;
let navMenu;

buttonMenu = document.getElementById('btn');
navMenu = document.getElementById('menu');

function openClose () {
    navMenu.classList.toggle('header__navigation_visible');
}

buttonMenu.addEventListener('click', openClose);







})();

/******/ })()
;