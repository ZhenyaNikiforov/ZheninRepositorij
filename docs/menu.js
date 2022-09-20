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
var code = "<!DOCTYPE html><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>GlavStranicsa</title></head><header class=\"header\"><div class=\"header__row-navigation\"><a class=\"header__logotype\" href=\"index.html\">/.</a><button class=\"header__btn-menu\"><div class=\"header__btn-menu-gamburger\"><span class=\"header__gamburger-item-middle\"></span></div>MENU</button><nav class=\"header__navigation\"><ul class=\"header__menu-list\"><li class=\"header__menu-item\"><a class=\"header__menu-referens\" href=\"index.html\">MAIN</a></li><li class=\"header__menu-item\"><a class=\"header__menu-referens\" href=\"kontaktyi.html\">Kontaktyi</a></li><li class=\"header__menu-item\"><a class=\"header__menu-referens\" href=\"tovaryi.html\">Tovaryi</a></li><li class=\"header__menu-item\"><a class=\"header__menu-referens\" href=\"uslugi.html\">Uslugi</a></li></ul></nav></div><div class=\"header__wrapper-caption\"><h1 class=\"header__caption\">Amazing Dude. Amazing Life.</h1></div><p class=\"header__paragraph-top\">Welcome to personal site of <span class=\"header__john\">John Doe</span>.</p><p class=\"header__paragraph-bottom\">A professional skier and musician.</p></header><main><section class=\"razdelRedHunter\"><div class=\"containerIconRedHunter\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"RedSkier\"></div><div class=\"containerTextRedHunter\"><div class=\"obertZagolAbzRedHun\"><h2 class=\"zagolovRedHunter\">SED FAUCIBUS QUIS</h2><p class=\"abzRedHunter\">Fusce bibendum luctus massa, ut tincidunt lectus tincidunt in. Nulla tristique ipsum vitae lacus ullamcorper at dictum nunc scelerisque.</p></div></div></section><section class=\"razdelGallery\"><div><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"KanDoroga\"></div><div><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"NaLyizhax\"></div><div><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Botinok\"></div><div><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Goryi\"></div></section><section class=\"razdelLyizhi\"><div class=\"lyizhi_text\"><div class=\"card card_skis\"><h2 class=\"card__first-caption\">INSTAGRAM</h2><h2 class=\"card__second-caption\"></h2><p class=\"card__paragraph\">Etiam lacus dolor, tincidunt vitae nisi in, vulputate placerat odio. Pellentesque iaculis.</p><ul class=\"card__list\"></ul><div class=\"card__button-wrapper\"><a class=\"button button_color_white\" href=\"#\">VIEV ON INSTAGRAM</a></div><div class=\"card__copyring\"></div></div></div><div class=\"lyizhi_icon\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Lyizhi_Palki_Botinki\"></div><div class=\"lyizhi_zero\"></div></section><section class=\"razdelZatyilok\"><div class=\"zatyilok_zero\"></div><div class=\"zatyilok_kontent\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"zatyilok\"><section class=\"zatyilok_text\"><div class=\"card card_backOfHead\"><h2 class=\"card__first-caption\">SELF-EFFACING RAGE</h2><h2 class=\"card__second-caption\">FT. FASCINATING COLLISION</h2><p class=\"card__paragraph\"></p><ul class=\"card__list\"><li class=\"card__list-item\">Director: James G. Rohrer</li><li class=\"card__list-item\">Production Company: Sycamore</li><li class=\"card__list-item\">Producer: Laura S. Carlton</li><li class=\"card__list-item\">Executive Producer: Jack M. Heckart</li></ul><div class=\"card__button-wrapper\"><a class=\"button button_color_green button_icon\" href=\"#\">CLICK TO PLAY</a></div><div class=\"card__copyring\"></div></div></section></div></section><section class=\"razdelKontaktyi\"><div class=\"kontaktyi_1\"><div class=\"card card_contacts-left\"><h2 class=\"card__first-caption\">SPOTIFY</h2><h2 class=\"card__second-caption\"></h2><p class=\"card__paragraph\">Follow me, stream and add my songs to your Spotify playlist.</p><ul class=\"card__list\"></ul><div class=\"card__button-wrapper\"><a class=\"button button_color_white\" href=\"#\">FOLLOW ON SPOTIFY</a></div><div class=\"card__copyring\"></div></div></div><div class=\"kontaktyi_2\"><div class=\"card card_contacts-right\"><h2 class=\"card__first-caption\">ITUNES</h2><h2 class=\"card__second-caption\"></h2><p class=\"card__paragraph\">Buy and download my songs from iTunes.</p><ul class=\"card__list\"></ul><div class=\"card__button-wrapper\"><a class=\"button button_color_white\" href=\"#\">BUY FROM ITUNES</a></div><div class=\"card__copyring\"></div></div></div></section></main><footer class=\"footer\"><section class=\"footer__column-left\"><div class=\"card card_column\"><h2 class=\"card__first-caption\">AMAZING DUDE</h2><h2 class=\"card__second-caption\">AMAZING LIFE</h2><p class=\"card__paragraph\">Mauris ornare lobortis arcu, at sodales dolor finibus nec. In convallis risus ligula, bibendum sagittis ante cursus vitae. Donec ornare, dui nec sagittis imperdiet, nunc eros dignissim augue, ut aliquam nibh felis sit amet leo. Vivamus eu tincidunt tellus. Vestibulum quis condimentum lectus, nec aliquet lectus. Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque. Phasellus in scelerisque elit, eu ultricies mauris.</p><ul class=\"card__list\"></ul><div class=\"card__button-wrapper\"></div><div class=\"card__copyring\">&amp;#x24B8;2015. all rights reserved.</div></div></section><section class=\"footer__column-middle\"><h2 class=\"footer__middle-first-caption\">CONTACT ME</h2><p class=\"footer__middle-first-paragraph\">1242 Crestview Terrace Artesia Wells, TX 78001</p><p class=\"footer__middle-second-paragraph\">Phone: 830-676-7974 Email: halo@sitename.com</p><h2 class=\"footer__middle-second-caption\">FOLLOW ME ON</h2><ul class=\"footer__middle-list\"><li class=\"footer__middle-list-item\"><a class=\"footer__middle-list-item-reference\" href=\"#\">FACEBOOK</a></li><li class=\"footer__middle-list-item\"><a class=\"footer__middle-list-item-reference\" href=\"#\">TWITTER</a></li><li class=\"footer__middle-list-item\"><a class=\"footer__middle-list-item-reference\" href=\"#\">INSTAGRAM</a></li><li class=\"footer__middle-list-item\"><a class=\"footer__middle-list-item-reference\" href=\"#\">SPOTIFY</a></li></ul></section><section class=\"footer__column-right\"><h2 class=\"footer__right-first-caption\">SUBSCRIBE</h2><p class=\"footer__right-first-paragraph\">Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque.</p><form class=\"footer__right-form\"><input class=\"footer__right-input-email\" type=\"email\" placeholder=\"ENTER YOUR EMAIL ADDRESS\"><button class=\"footer__right-button-email\"></button></form><h2 class=\"footer__right-second-caption\">SPONSOR</h2><div class=\"footer__right-row-logotype\"> <span class=\"footer__right-logotype-item\">LOGO</span> <span class=\"footer__right-logotype-item\">LOGO</span> <span class=\"footer__right-logotype-item\">LOGO</span> <span class=\"footer__right-logotype-item\">/.</span></div></section></footer>";
// Exports
/* harmony default export */ const pages = ((/* unused pure expression or super */ null && (code)));
;// CONCATENATED MODULE: ./src/pages/tovaryi.pug
// Imports

var tovaryi_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(551), __webpack_require__.b);
// Module
var tovaryi_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(tovaryi_HTML_LOADER_IMPORT_0_);
var tovaryi_code = "<!DOCTYPE html><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>GlavStranicsa</title></head><header class=\"header\"><div class=\"header__row-navigation\"><a class=\"header__logotype\" href=\"index.html\">/.</a><button class=\"header__btn-menu\"><div class=\"header__btn-menu-gamburger\"><span class=\"header__gamburger-item-middle\"></span></div>MENU</button><nav class=\"header__navigation\"><ul class=\"header__menu-list\"><li class=\"header__menu-item\"><a class=\"header__menu-referens\" href=\"index.html\">MAIN</a></li><li class=\"header__menu-item\"><a class=\"header__menu-referens\" href=\"kontaktyi.html\">Kontaktyi</a></li><li class=\"header__menu-item\"><a class=\"header__menu-referens\" href=\"tovaryi.html\">Tovaryi</a></li><li class=\"header__menu-item\"><a class=\"header__menu-referens\" href=\"uslugi.html\">Uslugi</a></li></ul></nav></div><div class=\"header__wrapper-caption\"><h1 class=\"header__caption\">Amazing Dude. Amazing Life.</h1></div><p class=\"header__paragraph-top\">Welcome to personal site of <span class=\"header__john\">John Doe</span>.</p><p class=\"header__paragraph-bottom\">A professional skier and musician.</p></header><nav class=\"container_hlebnyikh_kroshek\"><ul class=\"hlebnyie_kroshki\"><li class=\"hlebnaya_kroshka\" id=\"pervaya_kroshka\"><a class=\"ssyilka_hlebnoj_kroshki\" href=\"index.html\">Na glavnujy</a></li><li class=\"hlebnaya_kroshka\" id=\"\"><a class=\"ssyilka_hlebnoj_kroshki\" href=\"tovaryi.html\">Tovaryi</a></li></ul></nav><main><section class=\"razdelLyizhi\"><div class=\"lyizhi_text\"><div class=\"card card_skis\"><h2 class=\"card__first-caption\">INSTAGRAM</h2><h2 class=\"card__second-caption\"></h2><p class=\"card__paragraph\">Etiam lacus dolor, tincidunt vitae nisi in, vulputate placerat odio. Pellentesque iaculis.</p><ul class=\"card__list\"></ul><div class=\"card__button-wrapper\"><a class=\"button button_color_white\" href=\"#\">VIEV ON INSTAGRAM</a></div><div class=\"card__copyring\"></div></div></div><div class=\"lyizhi_icon\"><img src=\"" + tovaryi_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"Lyizhi_Palki_Botinki\"></div><div class=\"lyizhi_zero\"></div></section></main><footer class=\"footer\"><section class=\"footer__column-left\"><div class=\"card card_column\"><h2 class=\"card__first-caption\">AMAZING DUDE</h2><h2 class=\"card__second-caption\">AMAZING LIFE</h2><p class=\"card__paragraph\">Mauris ornare lobortis arcu, at sodales dolor finibus nec. In convallis risus ligula, bibendum sagittis ante cursus vitae. Donec ornare, dui nec sagittis imperdiet, nunc eros dignissim augue, ut aliquam nibh felis sit amet leo. Vivamus eu tincidunt tellus. Vestibulum quis condimentum lectus, nec aliquet lectus. Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque. Phasellus in scelerisque elit, eu ultricies mauris.</p><ul class=\"card__list\"></ul><div class=\"card__button-wrapper\"></div><div class=\"card__copyring\">&amp;#x24B8;2015. all rights reserved.</div></div></section><section class=\"footer__column-middle\"><h2 class=\"footer__middle-first-caption\">CONTACT ME</h2><p class=\"footer__middle-first-paragraph\">1242 Crestview Terrace Artesia Wells, TX 78001</p><p class=\"footer__middle-second-paragraph\">Phone: 830-676-7974 Email: halo@sitename.com</p><h2 class=\"footer__middle-second-caption\">FOLLOW ME ON</h2><ul class=\"footer__middle-list\"><li class=\"footer__middle-list-item\"><a class=\"footer__middle-list-item-reference\" href=\"#\">FACEBOOK</a></li><li class=\"footer__middle-list-item\"><a class=\"footer__middle-list-item-reference\" href=\"#\">TWITTER</a></li><li class=\"footer__middle-list-item\"><a class=\"footer__middle-list-item-reference\" href=\"#\">INSTAGRAM</a></li><li class=\"footer__middle-list-item\"><a class=\"footer__middle-list-item-reference\" href=\"#\">SPOTIFY</a></li></ul></section><section class=\"footer__column-right\"><h2 class=\"footer__right-first-caption\">SUBSCRIBE</h2><p class=\"footer__right-first-paragraph\">Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque.</p><form class=\"footer__right-form\"><input class=\"footer__right-input-email\" type=\"email\" placeholder=\"ENTER YOUR EMAIL ADDRESS\"><button class=\"footer__right-button-email\"></button></form><h2 class=\"footer__right-second-caption\">SPONSOR</h2><div class=\"footer__right-row-logotype\"> <span class=\"footer__right-logotype-item\">LOGO</span> <span class=\"footer__right-logotype-item\">LOGO</span> <span class=\"footer__right-logotype-item\">LOGO</span> <span class=\"footer__right-logotype-item\">/.</span></div></section></footer>";
// Exports
/* harmony default export */ const tovaryi = ((/* unused pure expression or super */ null && (tovaryi_code)));
;// CONCATENATED MODULE: ./src/pages/uslugi.pug
// Imports

var uslugi_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(89), __webpack_require__.b);
// Module
var uslugi_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(uslugi_HTML_LOADER_IMPORT_0_);
var uslugi_code = "<!DOCTYPE html><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>GlavStranicsa</title></head><header class=\"header\"><div class=\"header__row-navigation\"><a class=\"header__logotype\" href=\"index.html\">/.</a><button class=\"header__btn-menu\"><div class=\"header__btn-menu-gamburger\"><span class=\"header__gamburger-item-middle\"></span></div>MENU</button><nav class=\"header__navigation\"><ul class=\"header__menu-list\"><li class=\"header__menu-item\"><a class=\"header__menu-referens\" href=\"index.html\">MAIN</a></li><li class=\"header__menu-item\"><a class=\"header__menu-referens\" href=\"kontaktyi.html\">Kontaktyi</a></li><li class=\"header__menu-item\"><a class=\"header__menu-referens\" href=\"tovaryi.html\">Tovaryi</a></li><li class=\"header__menu-item\"><a class=\"header__menu-referens\" href=\"uslugi.html\">Uslugi</a></li></ul></nav></div><div class=\"header__wrapper-caption\"><h1 class=\"header__caption\">Amazing Dude. Amazing Life.</h1></div><p class=\"header__paragraph-top\">Welcome to personal site of <span class=\"header__john\">John Doe</span>.</p><p class=\"header__paragraph-bottom\">A professional skier and musician.</p></header><nav class=\"container_hlebnyikh_kroshek\"><ul class=\"hlebnyie_kroshki\"><li class=\"hlebnaya_kroshka\" id=\"pervaya_kroshka\"><a class=\"ssyilka_hlebnoj_kroshki\" href=\"index.html\">Na glavnujy</a></li><li class=\"hlebnaya_kroshka\" id=\"\"><a class=\"ssyilka_hlebnoj_kroshki\" href=\"uslugi.html\">Uslugi</a></li></ul></nav><main><section class=\"razdelZatyilok\"><div class=\"zatyilok_zero\"></div><div class=\"zatyilok_kontent\"><img src=\"" + uslugi_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"zatyilok\"><section class=\"zatyilok_text\"><div class=\"card card_backOfHead\"><h2 class=\"card__first-caption\">SELF-EFFACING RAGE</h2><h2 class=\"card__second-caption\">FT. FASCINATING COLLISION</h2><p class=\"card__paragraph\"></p><ul class=\"card__list\"><li class=\"card__list-item\">Director: James G. Rohrer</li><li class=\"card__list-item\">Production Company: Sycamore</li><li class=\"card__list-item\">Producer: Laura S. Carlton</li><li class=\"card__list-item\">Executive Producer: Jack M. Heckart</li></ul><div class=\"card__button-wrapper\"><a class=\"button button_color_green button_icon\" href=\"#\">CLICK TO PLAY</a></div><div class=\"card__copyring\"></div></div></section></div></section></main><footer class=\"footer\"><section class=\"footer__column-left\"><div class=\"card card_column\"><h2 class=\"card__first-caption\">AMAZING DUDE</h2><h2 class=\"card__second-caption\">AMAZING LIFE</h2><p class=\"card__paragraph\">Mauris ornare lobortis arcu, at sodales dolor finibus nec. In convallis risus ligula, bibendum sagittis ante cursus vitae. Donec ornare, dui nec sagittis imperdiet, nunc eros dignissim augue, ut aliquam nibh felis sit amet leo. Vivamus eu tincidunt tellus. Vestibulum quis condimentum lectus, nec aliquet lectus. Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque. Phasellus in scelerisque elit, eu ultricies mauris.</p><ul class=\"card__list\"></ul><div class=\"card__button-wrapper\"></div><div class=\"card__copyring\">&amp;#x24B8;2015. all rights reserved.</div></div></section><section class=\"footer__column-middle\"><h2 class=\"footer__middle-first-caption\">CONTACT ME</h2><p class=\"footer__middle-first-paragraph\">1242 Crestview Terrace Artesia Wells, TX 78001</p><p class=\"footer__middle-second-paragraph\">Phone: 830-676-7974 Email: halo@sitename.com</p><h2 class=\"footer__middle-second-caption\">FOLLOW ME ON</h2><ul class=\"footer__middle-list\"><li class=\"footer__middle-list-item\"><a class=\"footer__middle-list-item-reference\" href=\"#\">FACEBOOK</a></li><li class=\"footer__middle-list-item\"><a class=\"footer__middle-list-item-reference\" href=\"#\">TWITTER</a></li><li class=\"footer__middle-list-item\"><a class=\"footer__middle-list-item-reference\" href=\"#\">INSTAGRAM</a></li><li class=\"footer__middle-list-item\"><a class=\"footer__middle-list-item-reference\" href=\"#\">SPOTIFY</a></li></ul></section><section class=\"footer__column-right\"><h2 class=\"footer__right-first-caption\">SUBSCRIBE</h2><p class=\"footer__right-first-paragraph\">Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque.</p><form class=\"footer__right-form\"><input class=\"footer__right-input-email\" type=\"email\" placeholder=\"ENTER YOUR EMAIL ADDRESS\"><button class=\"footer__right-button-email\"></button></form><h2 class=\"footer__right-second-caption\">SPONSOR</h2><div class=\"footer__right-row-logotype\"> <span class=\"footer__right-logotype-item\">LOGO</span> <span class=\"footer__right-logotype-item\">LOGO</span> <span class=\"footer__right-logotype-item\">LOGO</span> <span class=\"footer__right-logotype-item\">/.</span></div></section></footer>";
// Exports
/* harmony default export */ const uslugi = ((/* unused pure expression or super */ null && (uslugi_code)));
;// CONCATENATED MODULE: ./src/menu.js
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







})();

/******/ })()
;