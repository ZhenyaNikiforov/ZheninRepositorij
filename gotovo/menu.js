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

/***/ 654:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imag/gl.png";

/***/ }),

/***/ 95:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imag/head.png";

/***/ }),

/***/ 108:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imag/menu.png";

/***/ }),

/***/ 284:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imag/play.png";

/***/ }),

/***/ 951:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imag/red.png";

/***/ }),

/***/ 975:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imag/sec.png";

/***/ }),

/***/ 542:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imag/sec2.png";

/***/ }),

/***/ 262:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imag/sec3.png";

/***/ }),

/***/ 596:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imag/sec4.png";

/***/ }),

/***/ 880:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imag/sky.png";

/***/ }),

/***/ 129:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imag/vector.png";

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
;// CONCATENATED MODULE: ./iskhodnik/htmlFiles/index.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(95), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(108), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(951), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(975), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(596), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(262), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(542), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(880), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(654), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(284), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(129), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = getUrl_default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = getUrl_default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = getUrl_default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = getUrl_default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = getUrl_default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = getUrl_default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = getUrl_default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = getUrl_default()(___HTML_LOADER_IMPORT_10___);
var code = "<!DOCTYPE html> <html lang=\"ru\"> <head> <meta charset=\"UTF-8\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/> <title>GlavStranicsa</title> </head> <body> <header> <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"NaDoske\"> <a href=\"index.html\" class=\"logotype\"> <span class=\"text_logotype\"> /. </span> </a> <div class=\"container_teksta_golovyi\"> <h1 class=\"zagolov_1_golova\">Amazing Dude.</h1> <h2 class=\"zagolov_2_golova\">Amazing Life.</h2> <p class=\"abzacs_1_golova\">Welcome to the personal site of <span class=\"john\">John Doe</span>.</p> <p class=\"abzacs_2_golova\">A professional skier and a musician.</p> </div> <button class=\"btn_menu\" id=\"knopka_menu\"> <span class=\"icon_menu\" id=\"ikonka\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"menu\"> </span> <span class=\"container_zakryit_menu ne_viden_container_zakryit_menu\" id=\"krestik\"> <span class=\"zakryit_menu\"> + </span> </span> <span class=\"text_menu\"> MENU </span> </button> <nav class=\"list_menu ne_vidno_menu\" id=\"menu\"> <ul class=\"podlist_menu\"> <li><a href=\"index.html\">Glavnaya</a></li> <li><a href=\"tovaryi.html\">Tovaryi</a></li> <li><a href=\"uslugi.html\">Uslugi</a></li> <li><a href=\"kontaktyi.html\">Kontaktyi</a></li> </ul> </nav> </header> <main> <section class=\"razdelRedHunter\"> <div class=\"containerIconRedHunter\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"KrasnyiLyizhnik\"> </div> <div class=\"containerTextRedHunter\"> <div class=\"obertZagolAbzRedHun\"> <h2 class=\"zagolovRedHunter\">SED FAUCIBUS QUIS</h2> <p class=\"abzRedHunter\"> Fusce bibendum luctus massa, ut tincidunt lectus tincidunt in. Nulla tristique ipsum vitae lacus ullamcorper, at dictum nunc scelerisque. </p> </div> </div> </section> <section class=\"razdelGallery\"> <div><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"KanDoroga\"></div> <div><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"NaLyizhax\"></div> <div><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Botinok\"></div> <div><img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Goryi\"></div> </section> <section class=\"razdelLyizhi\"> <div class=\"lyizhi_text\"> <h2 class=\"lyizhi_zagolov\">INSTAGRAM</h2> <p class=\"lyizhi_abz\"> Etiam lacus dolor, tincidunt vitae nisi in, vulputate placerat odio. Pellentesque iaculis. </p> <button class=\"lyizhi_btn\">VIEW ON INSTAGRAM</button> </div> <div class=\"lyizhi_icon\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Lyizhi_Palki_Botinki\"> </div> <div class=\"lyizhi_zero\"></div> </section> <section class=\"razdelZatyilok\"> <div class=\"zatyilok_zero\"></div> <div class=\"zatyilok_kontent\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"zatyilok\"> <section class=\"zatyilok_text\"> <h2 class=\"zagol_zatyil_2\">SELF-EFFACING RAGE</h2> <h3 class=\"zagol_zatyil_3\">FT. FASCINATING COLLISION</h3> <ul class=\"zatyilok_abzacs\"> <li>Director: James G. Rohrer</li> <li>Production Company: Sycamore</li> <li>Producer: Laura S. Carlton</li> <li>Executive Producer: Jack M. Heckart</li> </ul> <button class=\"zatyilok_button\"> CLICK TO PLAY <span class=\"icon_button\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"play\"> </span> </button> </section> </div> </section> <section class=\"razdelKontaktyi\"> <div class=\"kontaktyi_1\"> <h2 class=\"zagolov_kontaktyi_1\"> SPOTIFY </h2> <p class=\"abzacs_kontaktyi_1\"> Follow me, stream and add my songs to your Spotify playlist. </p> <button class=\"btn_kontaktyi_1\"> FOLLOW ON SPOTIFY </button> </div> <div class=\"kontaktyi_2\"> <h2 class=\"zagolov_kontaktyi_2\"> ITUNES </h2> <p class=\"abzacs_kontaktyi_2\"> Buy and download my songs from iTunes. </p> <button class=\"btn_kontaktyi_2\"> BUY FROM ITUNES </button> </div> </section> </main> <footer> <section class=\"column_left\"> <h2 class=\"zagolov_column_left\">AMAZING DUDE</h2> <h2 class=\"zagolov_column_left_2\">AMAZING LIFE</h2> <p class=\"abzacs_column_left\"> Mauris ornare lobortis arcu, at sodales dolor finibus nec. In convallis risus ligula, bibendum sagittis ante cursus vitae. Donec ornare, dui nec sagittis imperdiet, nunc eros dignissim augue, ut aliquam nibh felis sit amet leo. Vivamus eu tincidunt tellus. Vestibulum quis condimentum lectus, nec aliquet lectus. Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque. Phasellus in scelerisque elit, eu ultricies mauris. </p> <span class=\"bottom_column_left\"> Ⓒ2015. all rights reserved. </span> </section> <section class=\"column_middle\"> <h2 class=\"zagolov_column_middle\"> CONTACT ME </h2> <p class=\"abzacs_column_middle_1\"> 1242 Crestview Terrace Artesia Wells, TX 78001 </p> <p class=\"abzacs_column_middle_2\"> Phone: 830-676-7974 Email: halo@sitename.com </p> <h2 class=\"zagolov_column_middle_2\"> FOLLOW ME ON </h2> <ul class=\"list_column_middle\"> <li class=\"elem_list_col_mid_1\"><a href=\"#\">FACEBOOK</a></li> <li class=\"elem_list_col_mid_2\"><a href=\"#\">TWITTER</a></li> <li class=\"elem_list_col_mid_3\"><a href=\"#\">INSTAGRAM</a></li> <li class=\"elem_list_col_mid_4\"><a href=\"#\">SPOTIFY</a></li> </ul> </section> <section class=\"column_right\"> <h2 class=\"zagolov_1_column_right\">SUBSCRIBE</h2> <p class=\"abzacs_column_right\"> Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque. </p> <form class=\"btn_column_right\"> <input type=\"email\" placeholder=\"ENTER YOUR EMAIL ADDRESS\" class=\"pole_btn_col_r\"> <button class=\"icon_btn_right_column\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"icon\"> </button> </form> <h2 class=\"zagolov_2_column_right\">SPONSOR</h2> <div class=\"logotype_section_right_column\"> <span class=\"logo_column_right\">LOGO</span> <span class=\"logo_column_right\">LOGO</span> <span class=\"logo_column_right\">LOGO</span> </div> </section> </footer> </body> </html>";
// Exports
/* harmony default export */ const htmlFiles = ((/* unused pure expression or super */ null && (code)));
;// CONCATENATED MODULE: ./iskhodnik/htmlFiles/kontaktyi.html
// Imports

var kontaktyi_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(95), __webpack_require__.b);
var kontaktyi_HTML_LOADER_IMPORT_1_ = new URL(/* asset import */ __webpack_require__(108), __webpack_require__.b);
var kontaktyi_HTML_LOADER_IMPORT_2_ = new URL(/* asset import */ __webpack_require__(129), __webpack_require__.b);
// Module
var kontaktyi_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(kontaktyi_HTML_LOADER_IMPORT_0_);
var kontaktyi_HTML_LOADER_REPLACEMENT_1_ = getUrl_default()(kontaktyi_HTML_LOADER_IMPORT_1_);
var kontaktyi_HTML_LOADER_REPLACEMENT_2_ = getUrl_default()(kontaktyi_HTML_LOADER_IMPORT_2_);
var kontaktyi_code = "<!DOCTYPE html> <html lang=\"ru\"> <head> <meta charset=\"UTF-8\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/> <title>Stranicsa_kontaktov</title> </head> <body> <header> <img src=\"" + kontaktyi_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"NaDoske\"> <a href=\"index.html\" class=\"logotype\"> <span class=\"text_logotype\"> /. </span> </a> <div class=\"container_teksta_golovyi\"> <h1 class=\"zagolov_1_golova\">Amazing Dude.</h1> <h2 class=\"zagolov_2_golova\">Amazing Life.</h2> <p class=\"abzacs_1_golova\">Welcome to the personal site of <span class=\"john\">John Doe</span>.</p> <p class=\"abzacs_2_golova\">A professional skier and a musician.</p> </div> <button class=\"btn_menu\" id=\"knopka_menu\"> <span class=\"icon_menu\" id=\"ikonka\"> <img src=\"" + kontaktyi_HTML_LOADER_REPLACEMENT_1_ + "\" alt=\"menu\"> </span> <span class=\"container_zakryit_menu ne_viden_container_zakryit_menu\" id=\"krestik\"> <span class=\"zakryit_menu\"> + </span> </span> <span class=\"text_menu\"> MENU </span> </button> <nav class=\"list_menu ne_vidno_menu\" id=\"menu\"> <ul class=\"podlist_menu\"> <li><a href=\"index.html\">Glavnaya</a></li> <li><a href=\"tovaryi.html\">Tovaryi</a></li> <li><a href=\"uslugi.html\">Uslugi</a></li> <li><a href=\"kontaktyi.html\">Kontaktyi</a></li> </ul> </nav> </header> <nav class=\"container_hlebnyikh_kroshek\"> <ul class=\"hlebnyie_kroshki\"> <li class=\"hlebnaya_kroshka\" id=\"pervaya_kroshka\"><a href=\"index.html\" class=\"ssyilka_hlebnoj_kroshki\">Na glavnujy</a></li> <li class=\"hlebnaya_kroshka\"><a href=\"kontaktyi.html\" class=\"ssyilka_hlebnoj_kroshki\">Kontaktyi</a></li> </ul> </nav> <main> <section class=\"informaciya_o_nas\"> telefon: 8-9xx-xx-xxx-xx <br> adres gorodskoj: RF, Moskva, Chistoprudnyij Bulvar, dom xxx <br> e-mail: xxxx@mail.ru <br> </section> </main> <footer> <section class=\"column_left\"> <h2 class=\"zagolov_column_left\">AMAZING DUDE</h2> <h2 class=\"zagolov_column_left_2\">AMAZING LIFE</h2> <p class=\"abzacs_column_left\"> Mauris ornare lobortis arcu, at sodales dolor finibus nec. In convallis risus ligula, bibendum sagittis ante cursus vitae. Donec ornare, dui nec sagittis imperdiet, nunc eros dignissim augue, ut aliquam nibh felis sit amet leo. Vivamus eu tincidunt tellus. Vestibulum quis condimentum lectus, nec aliquet lectus. Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque. Phasellus in scelerisque elit, eu ultricies mauris. </p> <span class=\"bottom_column_left\"> Ⓒ2015. all rights reserved. </span> </section> <section class=\"column_middle\"> <h2 class=\"zagolov_column_middle\"> CONTACT ME </h2> <p class=\"abzacs_column_middle_1\"> 1242 Crestview Terrace Artesia Wells, TX 78001 </p> <p class=\"abzacs_column_middle_2\"> Phone: 830-676-7974 Email: halo@sitename.com </p> <h2 class=\"zagolov_column_middle_2\"> FOLLOW ME ON </h2> <ul class=\"list_column_middle\"> <li class=\"elem_list_col_mid_1\"><a href=\"#\">FACEBOOK</a></li> <li class=\"elem_list_col_mid_2\"><a href=\"#\">TWITTER</a></li> <li class=\"elem_list_col_mid_3\"><a href=\"#\">INSTAGRAM</a></li> <li class=\"elem_list_col_mid_4\"><a href=\"#\">SPOTIFY</a></li> </ul> </section> <section class=\"column_right\"> <h2 class=\"zagolov_1_column_right\">SUBSCRIBE</h2> <p class=\"abzacs_column_right\"> Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque. </p> <form class=\"btn_column_right\"> <input type=\"email\" placeholder=\"ENTER YOUR EMAIL ADDRESS\" class=\"pole_btn_col_r\"> <button class=\"icon_btn_right_column\"> <img src=\"" + kontaktyi_HTML_LOADER_REPLACEMENT_2_ + "\" alt=\"icon\"> </button> </form> <h2 class=\"zagolov_2_column_right\">SPONSOR</h2> <div class=\"logotype_section_right_column\"> <span class=\"logo_column_right\">LOGO</span> <span class=\"logo_column_right\">LOGO</span> <span class=\"logo_column_right\">LOGO</span> </div> </section> </footer> </body> </html>";
// Exports
/* harmony default export */ const kontaktyi = ((/* unused pure expression or super */ null && (kontaktyi_code)));
;// CONCATENATED MODULE: ./iskhodnik/htmlFiles/tovaryi.html
// Imports

var tovaryi_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(95), __webpack_require__.b);
var tovaryi_HTML_LOADER_IMPORT_1_ = new URL(/* asset import */ __webpack_require__(108), __webpack_require__.b);
var tovaryi_HTML_LOADER_IMPORT_2_ = new URL(/* asset import */ __webpack_require__(880), __webpack_require__.b);
var tovaryi_HTML_LOADER_IMPORT_3_ = new URL(/* asset import */ __webpack_require__(129), __webpack_require__.b);
// Module
var tovaryi_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(tovaryi_HTML_LOADER_IMPORT_0_);
var tovaryi_HTML_LOADER_REPLACEMENT_1_ = getUrl_default()(tovaryi_HTML_LOADER_IMPORT_1_);
var tovaryi_HTML_LOADER_REPLACEMENT_2_ = getUrl_default()(tovaryi_HTML_LOADER_IMPORT_2_);
var tovaryi_HTML_LOADER_REPLACEMENT_3_ = getUrl_default()(tovaryi_HTML_LOADER_IMPORT_3_);
var tovaryi_code = "<!DOCTYPE html> <html lang=\"ru\"> <head> <meta charset=\"UTF-8\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/> <title>Nashi_tovaryi</title> </head> <body> <header> <img src=\"" + tovaryi_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"NaDoske\"> <a href=\"index.html\" class=\"logotype\"> <span class=\"text_logotype\"> /. </span> </a> <div class=\"container_teksta_golovyi\"> <h1 class=\"zagolov_1_golova\">Amazing Dude.</h1> <h2 class=\"zagolov_2_golova\">Amazing Life.</h2> <p class=\"abzacs_1_golova\">Welcome to the personal site of <span class=\"john\">John Doe</span>.</p> <p class=\"abzacs_2_golova\">A professional skier and a musician.</p> </div> <button class=\"btn_menu\" id=\"knopka_menu\"> <span class=\"icon_menu\" id=\"ikonka\"> <img src=\"" + tovaryi_HTML_LOADER_REPLACEMENT_1_ + "\" alt=\"menu\"> </span> <span class=\"container_zakryit_menu ne_viden_container_zakryit_menu\" id=\"krestik\"> <span class=\"zakryit_menu\"> + </span> </span> <span class=\"text_menu\"> MENU </span> </button> <nav class=\"list_menu ne_vidno_menu\" id=\"menu\"> <ul class=\"podlist_menu\"> <li><a href=\"index.html\">Glavnaya</a></li> <li><a href=\"tovaryi.html\">Tovaryi</a></li> <li><a href=\"uslugi.html\">Uslugi</a></li> <li><a href=\"kontaktyi.html\">Kontaktyi</a></li> </ul> </nav> </header> <nav class=\"container_hlebnyikh_kroshek\"> <ul class=\"hlebnyie_kroshki\"> <li class=\"hlebnaya_kroshka\" id=\"pervaya_kroshka\"><a href=\"index.html\" class=\"ssyilka_hlebnoj_kroshki\">Na glavnujy</a></li> <li class=\"hlebnaya_kroshka\"><a href=\"tovaryi.html\" class=\"ssyilka_hlebnoj_kroshki\">Tovaryi</a></li> </ul> </nav> <main> <section class=\"razdelLyizhi\"> <div class=\"lyizhi_text\"> <h2 class=\"lyizhi_zagolov\">INSTAGRAM</h2> <p class=\"lyizhi_abz\"> Etiam lacus dolor, tincidunt vitae nisi in, vulputate placerat odio. Pellentesque iaculis. </p> <button class=\"lyizhi_btn\">VIEW ON INSTAGRAM</button> </div> <div class=\"lyizhi_icon\"> <img src=\"" + tovaryi_HTML_LOADER_REPLACEMENT_2_ + "\" alt=\"Lyizhi_Palki_Botinki\"> </div> <div class=\"lyizhi_zero\"></div> </section> </main> <footer> <section class=\"column_left\"> <h2 class=\"zagolov_column_left\">AMAZING DUDE</h2> <h2 class=\"zagolov_column_left_2\">AMAZING LIFE</h2> <p class=\"abzacs_column_left\"> Mauris ornare lobortis arcu, at sodales dolor finibus nec. In convallis risus ligula, bibendum sagittis ante cursus vitae. Donec ornare, dui nec sagittis imperdiet, nunc eros dignissim augue, ut aliquam nibh felis sit amet leo. Vivamus eu tincidunt tellus. Vestibulum quis condimentum lectus, nec aliquet lectus. Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque. Phasellus in scelerisque elit, eu ultricies mauris. </p> <span class=\"bottom_column_left\"> Ⓒ2015. all rights reserved. </span> </section> <section class=\"column_middle\"> <h2 class=\"zagolov_column_middle\"> CONTACT ME </h2> <p class=\"abzacs_column_middle_1\"> 1242 Crestview Terrace Artesia Wells, TX 78001 </p> <p class=\"abzacs_column_middle_2\"> Phone: 830-676-7974 Email: halo@sitename.com </p> <h2 class=\"zagolov_column_middle_2\"> FOLLOW ME ON </h2> <ul class=\"list_column_middle\"> <li class=\"elem_list_col_mid_1\"><a href=\"#\">FACEBOOK</a></li> <li class=\"elem_list_col_mid_2\"><a href=\"#\">TWITTER</a></li> <li class=\"elem_list_col_mid_3\"><a href=\"#\">INSTAGRAM</a></li> <li class=\"elem_list_col_mid_4\"><a href=\"#\">SPOTIFY</a></li> </ul> </section> <section class=\"column_right\"> <h2 class=\"zagolov_1_column_right\">SUBSCRIBE</h2> <p class=\"abzacs_column_right\"> Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque. </p> <form class=\"btn_column_right\"> <input type=\"email\" placeholder=\"ENTER YOUR EMAIL ADDRESS\" class=\"pole_btn_col_r\"> <button class=\"icon_btn_right_column\"> <img src=\"" + tovaryi_HTML_LOADER_REPLACEMENT_3_ + "\" alt=\"icon\"> </button> </form> <h2 class=\"zagolov_2_column_right\">SPONSOR</h2> <div class=\"logotype_section_right_column\"> <span class=\"logo_column_right\">LOGO</span> <span class=\"logo_column_right\">LOGO</span> <span class=\"logo_column_right\">LOGO</span> </div> </section> </footer> </body> </html>";
// Exports
/* harmony default export */ const tovaryi = ((/* unused pure expression or super */ null && (tovaryi_code)));
;// CONCATENATED MODULE: ./iskhodnik/htmlFiles/uslugi.html
// Imports

var uslugi_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(95), __webpack_require__.b);
var uslugi_HTML_LOADER_IMPORT_1_ = new URL(/* asset import */ __webpack_require__(108), __webpack_require__.b);
var uslugi_HTML_LOADER_IMPORT_2_ = new URL(/* asset import */ __webpack_require__(654), __webpack_require__.b);
var uslugi_HTML_LOADER_IMPORT_3_ = new URL(/* asset import */ __webpack_require__(284), __webpack_require__.b);
var uslugi_HTML_LOADER_IMPORT_4_ = new URL(/* asset import */ __webpack_require__(129), __webpack_require__.b);
// Module
var uslugi_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(uslugi_HTML_LOADER_IMPORT_0_);
var uslugi_HTML_LOADER_REPLACEMENT_1_ = getUrl_default()(uslugi_HTML_LOADER_IMPORT_1_);
var uslugi_HTML_LOADER_REPLACEMENT_2_ = getUrl_default()(uslugi_HTML_LOADER_IMPORT_2_);
var uslugi_HTML_LOADER_REPLACEMENT_3_ = getUrl_default()(uslugi_HTML_LOADER_IMPORT_3_);
var uslugi_HTML_LOADER_REPLACEMENT_4_ = getUrl_default()(uslugi_HTML_LOADER_IMPORT_4_);
var uslugi_code = "<!DOCTYPE html> <html lang=\"ru\"> <head> <meta charset=\"UTF-8\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/> <title>Nashi_uslugi</title> </head> <body> <header> <img src=\"" + uslugi_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"NaDoske\"> <a href=\"index.html\" class=\"logotype\"> <span class=\"text_logotype\"> /. </span> </a> <div class=\"container_teksta_golovyi\"> <h1 class=\"zagolov_1_golova\">Amazing Dude.</h1> <h2 class=\"zagolov_2_golova\">Amazing Life.</h2> <p class=\"abzacs_1_golova\">Welcome to the personal site of <span class=\"john\">John Doe</span>.</p> <p class=\"abzacs_2_golova\">A professional skier and a musician.</p> </div> <button class=\"btn_menu\" id=\"knopka_menu\"> <span class=\"icon_menu\" id=\"ikonka\"> <img src=\"" + uslugi_HTML_LOADER_REPLACEMENT_1_ + "\" alt=\"menu\"> </span> <span class=\"container_zakryit_menu ne_viden_container_zakryit_menu\" id=\"krestik\"> <span class=\"zakryit_menu\"> + </span> </span> <span class=\"text_menu\"> MENU </span> </button> <nav class=\"list_menu ne_vidno_menu\" id=\"menu\"> <ul class=\"podlist_menu\"> <li><a href=\"index.html\">Glavnaya</a></li> <li><a href=\"tovaryi.html\">Tovaryi</a></li> <li><a href=\"uslugi.html\">Uslugi</a></li> <li><a href=\"kontaktyi.html\">Kontaktyi</a></li> </ul> </nav> </header> <nav class=\"container_hlebnyikh_kroshek\"> <ul class=\"hlebnyie_kroshki\"> <li class=\"hlebnaya_kroshka\" id=\"pervaya_kroshka\"><a href=\"index.html\" class=\"ssyilka_hlebnoj_kroshki\">Na glavnujy</a></li> <li class=\"hlebnaya_kroshka\"><a href=\"uslugi.html\" class=\"ssyilka_hlebnoj_kroshki\">Uslugi</a></li> </ul> </nav> <main> <section class=\"razdelZatyilok\"> <div class=\"zatyilok_zero\"></div> <div class=\"zatyilok_kontent\"> <img src=\"" + uslugi_HTML_LOADER_REPLACEMENT_2_ + "\" alt=\"zatyilok\"> <div class=\"zatyilok_text\"> <h2 class=\"zagol_zatyil_2\">SELF-EFFACING RAGE</h2> <h3 class=\"zagol_zatyil_3\">FT. FASCINATING COLLISION</h3> <ul class=\"zatyilok_abzacs\"> <li>Director: James G. Rohrer</li> <li>Production Company: Sycamore</li> <li>Producer: Laura S. Carlton</li> <li>Executive Producer: Jack M. Heckart</li> </ul> <button class=\"zatyilok_button\"> CLICK TO PLAY <span class=\"icon_button\"> <img src=\"" + uslugi_HTML_LOADER_REPLACEMENT_3_ + "\" alt=\"play\"> </span> </button> </div> </div> </section> </main> <footer> <section class=\"column_left\"> <h2 class=\"zagolov_column_left\">AMAZING DUDE</h2> <h2 class=\"zagolov_column_left_2\">AMAZING LIFE</h2> <p class=\"abzacs_column_left\"> Mauris ornare lobortis arcu, at sodales dolor finibus nec. In convallis risus ligula, bibendum sagittis ante cursus vitae. Donec ornare, dui nec sagittis imperdiet, nunc eros dignissim augue, ut aliquam nibh felis sit amet leo. Vivamus eu tincidunt tellus. Vestibulum quis condimentum lectus, nec aliquet lectus. Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque. Phasellus in scelerisque elit, eu ultricies mauris. </p> <span class=\"bottom_column_left\"> Ⓒ2015. all rights reserved. </span> </section> <section class=\"column_middle\"> <h2 class=\"zagolov_column_middle\"> CONTACT ME </h2> <p class=\"abzacs_column_middle_1\"> 1242 Crestview Terrace Artesia Wells, TX 78001 </p> <p class=\"abzacs_column_middle_2\"> Phone: 830-676-7974 Email: halo@sitename.com </p> <h2 class=\"zagolov_column_middle_2\"> FOLLOW ME ON </h2> <ul class=\"list_column_middle\"> <li class=\"elem_list_col_mid_1\"><a href=\"#\">FACEBOOK</a></li> <li class=\"elem_list_col_mid_2\"><a href=\"#\">TWITTER</a></li> <li class=\"elem_list_col_mid_3\"><a href=\"#\">INSTAGRAM</a></li> <li class=\"elem_list_col_mid_4\"><a href=\"#\">SPOTIFY</a></li> </ul> </section> <section class=\"column_right\"> <h2 class=\"zagolov_1_column_right\">SUBSCRIBE</h2> <p class=\"abzacs_column_right\"> Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Vestibulum viverra commodo nunc eu pellentesque. </p> <form class=\"btn_column_right\"> <input type=\"email\" placeholder=\"ENTER YOUR EMAIL ADDRESS\" class=\"pole_btn_col_r\"> <button class=\"icon_btn_right_column\"> <img src=\"" + uslugi_HTML_LOADER_REPLACEMENT_4_ + "\" alt=\"icon\"> </button> </form> <h2 class=\"zagolov_2_column_right\">SPONSOR</h2> <div class=\"logotype_section_right_column\"> <span class=\"logo_column_right\">LOGO</span> <span class=\"logo_column_right\">LOGO</span> <span class=\"logo_column_right\">LOGO</span> </div> </section> </footer> </body> </html>";
// Exports
/* harmony default export */ const uslugi = ((/* unused pure expression or super */ null && (uslugi_code)));
;// CONCATENATED MODULE: ./iskhodnik/menu.js
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







})();

/******/ })()
;