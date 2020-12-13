(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin"],{

/***/ "./assets/admin/Admin.js":
/*!*******************************!*\
  !*** ./assets/admin/Admin.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.scss */ "./assets/admin/admin.scss");
/* harmony import */ var _admin_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_admin_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var umbrella_admin_Admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! umbrella_admin/Admin */ "./vendor/umbrella2/adminbundle/Resources/assets/Admin.js");
/* harmony import */ var _AjaxHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AjaxHandler */ "./assets/admin/AjaxHandler.js");




window.app.mount();
window.app.bind();

/***/ }),

/***/ "./assets/admin/AjaxHandler.js":
/*!*************************************!*\
  !*** ./assets/admin/AjaxHandler.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var umbrella_core_core_AjaxCallbackHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! umbrella_core/core/AjaxCallbackHandler */ "./vendor/umbrella2/corebundle/Resources/assets/core/AjaxCallbackHandler.js");








function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


app.useAjaxHandler('custom', new umbrella_core_core_AjaxCallbackHandler__WEBPACK_IMPORTED_MODULE_7__["default"](function (response) {
  var _iterator = _createForOfIteratorHelper(response),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var message = _step.value;

      if (message.action === 'say') {
        console.log(message.params['msg']);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}, function (requestObject, error, errorThrown) {}, function (complete) {}));

/***/ }),

/***/ "./assets/admin/admin.scss":
/*!*********************************!*\
  !*** ./assets/admin/admin.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./vendor/umbrella2/adminbundle/Resources/assets/Admin.js":
/*!****************************************************************!*\
  !*** ./vendor/umbrella2/adminbundle/Resources/assets/Admin.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var umbrella_core_vendor_vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! umbrella_core/vendor/_vendor */ "./vendor/umbrella2/corebundle/Resources/assets/vendor/_vendor.js");
/* harmony import */ var umbrella_core_jquery_plugins_jquery_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! umbrella_core/jquery-plugins/_jquery_plugins */ "./vendor/umbrella2/corebundle/Resources/assets/jquery-plugins/_jquery_plugins.js");
/* harmony import */ var umbrella_admin_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! umbrella_admin/components/Sidebar */ "./vendor/umbrella2/adminbundle/Resources/assets/components/Sidebar.js");
/* harmony import */ var umbrella_admin_components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! umbrella_admin/components/Layout */ "./vendor/umbrella2/adminbundle/Resources/assets/components/Layout.js");
/* harmony import */ var umbrella_admin_components_Notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! umbrella_admin/components/Notification */ "./vendor/umbrella2/adminbundle/Resources/assets/components/Notification.js");
/* harmony import */ var umbrella_core_components_DataTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! umbrella_core/components/DataTable */ "./vendor/umbrella2/corebundle/Resources/assets/components/DataTable.js");
/* harmony import */ var umbrella_core_components_Select2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! umbrella_core/components/Select2 */ "./vendor/umbrella2/corebundle/Resources/assets/components/Select2.js");
/* harmony import */ var umbrella_core_components_AsyncSelect2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! umbrella_core/components/AsyncSelect2 */ "./vendor/umbrella2/corebundle/Resources/assets/components/AsyncSelect2.js");
/* harmony import */ var umbrella_core_components_TagsInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! umbrella_core/components/TagsInput */ "./vendor/umbrella2/corebundle/Resources/assets/components/TagsInput.js");
/* harmony import */ var umbrella_core_components_DatePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! umbrella_core/components/DatePicker */ "./vendor/umbrella2/corebundle/Resources/assets/components/DatePicker.js");
/* harmony import */ var umbrella_core_components_DateTimePicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! umbrella_core/components/DateTimePicker */ "./vendor/umbrella2/corebundle/Resources/assets/components/DateTimePicker.js");
/* harmony import */ var umbrella_core_components_FileUpload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! umbrella_core/components/FileUpload */ "./vendor/umbrella2/corebundle/Resources/assets/components/FileUpload.js");
/* harmony import */ var umbrella_core_components_Collection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! umbrella_core/components/Collection */ "./vendor/umbrella2/corebundle/Resources/assets/components/Collection.js");
/* harmony import */ var umbrella_core_core_UmbrellaApp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! umbrella_core/core/UmbrellaApp */ "./vendor/umbrella2/corebundle/Resources/assets/core/UmbrellaApp.js");
/* harmony import */ var umbrella_core_core_AjaxJsResponseHandler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! umbrella_core/core/AjaxJsResponseHandler */ "./vendor/umbrella2/corebundle/Resources/assets/core/AjaxJsResponseHandler.js");

 // components











 // Default jquery plugin options

$.fn.dataTable.ext.errMode = 'throw';
$.toast.options.position = 'bottom-right'; // App



var app = new umbrella_core_core_UmbrellaApp__WEBPACK_IMPORTED_MODULE_13__["default"]();
window.app = app;
app.use('[data-mount=Sidebar]', umbrella_admin_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"]);
app.use('[data-mount=Layout]', umbrella_admin_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"]);
app.use('[data-mount=DataTable]', umbrella_core_components_DataTable__WEBPACK_IMPORTED_MODULE_5__["default"]);
app.use('[data-mount=Notification]', umbrella_admin_components_Notification__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.use('.js-select2', umbrella_core_components_Select2__WEBPACK_IMPORTED_MODULE_6__["default"]);
app.use('.js-async-select2', umbrella_core_components_AsyncSelect2__WEBPACK_IMPORTED_MODULE_7__["default"]);
app.use('.js-tag', umbrella_core_components_TagsInput__WEBPACK_IMPORTED_MODULE_8__["default"]);
app.use('.js-datepicker', umbrella_core_components_DatePicker__WEBPACK_IMPORTED_MODULE_9__["default"]);
app.use('.js-datetimepicker', umbrella_core_components_DateTimePicker__WEBPACK_IMPORTED_MODULE_10__["default"]);
app.use('.js-umbrella-fileupload', umbrella_core_components_FileUpload__WEBPACK_IMPORTED_MODULE_11__["default"]);
app.use('.js-umbrella-collection', umbrella_core_components_Collection__WEBPACK_IMPORTED_MODULE_12__["default"]);
app.useAjaxHandler('default', new umbrella_core_core_AjaxJsResponseHandler__WEBPACK_IMPORTED_MODULE_14__["default"]());

/***/ }),

/***/ "./vendor/umbrella2/adminbundle/Resources/assets/components/Layout.js":
/*!****************************************************************************!*\
  !*** ./vendor/umbrella2/adminbundle/Resources/assets/components/Layout.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! umbrella_core/core/Component */ "./vendor/umbrella2/corebundle/Resources/assets/core/Component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Layout = /*#__PURE__*/function (_Component) {
  _inherits(Layout, _Component);

  var _super = _createSuper(Layout);

  function Layout($view) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _super.call(this, $view);
    _this.$window = $(window);

    _this.init();

    return _this;
  }

  _createClass(Layout, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.$window.on('resize', function (e) {
        e.preventDefault();

        _this2.adjustLayout();
      });
      this.adjustLayout();
    }
  }, {
    key: "adjustLayout",
    value: function adjustLayout() {
      // in case of small size, add class enlarge to have minimal menu
      if (this.$window.width() >= 767 && this.$window.width() <= 1028) {
        this.activateCondensedSidebar();
      } else {
        this.desactivateCondensedSidebar();
      }
    }
  }, {
    key: "activateCondensedSidebar",
    value: function activateCondensedSidebar() {
      this.$view.attr('data-leftbar-compact-mode', 'condensed');
    }
  }, {
    key: "desactivateCondensedSidebar",
    value: function desactivateCondensedSidebar() {
      this.$view.attr('data-leftbar-compact-mode', false);
    }
  }]);

  return Layout;
}(umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./vendor/umbrella2/adminbundle/Resources/assets/components/Notification.js":
/*!**********************************************************************************!*\
  !*** ./vendor/umbrella2/adminbundle/Resources/assets/components/Notification.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Notification; });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! umbrella_core/core/Component */ "./vendor/umbrella2/corebundle/Resources/assets/core/Component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }










function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Notification = /*#__PURE__*/function (_Component) {
  _inherits(Notification, _Component);

  var _super = _createSuper(Notification);

  // 10s
  function Notification($view) {
    var _this;

    _classCallCheck(this, Notification);

    _this = _super.call(this, $view);
    _this.refreshUrl = $view.data('refresh-url');
    _this.refreshXhr = null;

    _this._bind();

    return _this;
  }

  _createClass(Notification, [{
    key: "_bind",
    value: function _bind() {
      var _this2 = this;

      this.$view.on('shown.bs.dropdown', function () {
        _this2._refresh(true);
      });
      this.$view.on('click', '[data-href]', function (e) {
        window.location.href = $(e.currentTarget).data('href');
      });
    }
    /**
     * Refresh Notifications
     */

  }, {
    key: "_refresh",
    value: function _refresh() {
      var _this3 = this;

      var poll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.refreshXhr) {
        this.refreshXhr.abort();
      }

      if (this._isOpen()) {
        $.get(this.refreshUrl, function (notifications) {
          _this3._renderList(notifications);

          if (poll) {
            setTimeout(function () {
              _this3._refresh();
            }, Notification.poll);
          }
        });
      }
    }
    /**
     * Render list of notifications
     */

  }, {
    key: "_renderList",
    value: function _renderList(notifications) {
      var $list = this.$view.find('.js-notificarion-list .simplebar-content');
      $list.html('');
      console.log($list[0]);

      var _iterator = _createForOfIteratorHelper(notifications),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var notification = _step.value;

          var tpl = this._getTemplate(notification);

          if (tpl) {
            $list.append(mustache.render(tpl, notification));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (notifications.length === 0) {
        $list.append(mustache.render($('#notification-empty-tpl').html()));
      }
    }
  }, {
    key: "_isOpen",
    value: function _isOpen() {
      return this.$view.find('.dropdown-menu').hasClass('show');
    }
  }, {
    key: "_getTemplate",
    value: function _getTemplate(notification) {
      var tplId = "#notification-fw-".concat(notification.state, "-tpl");

      if ($(tplId).length) {
        return $(tplId).html();
      } else {
        console.warn('No template found with id ' + tplId);
        return false;
      }
    }
  }]);

  return Notification;
}(umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_8__["default"]);

Notification.poll = 10000;


/***/ }),

/***/ "./vendor/umbrella2/adminbundle/Resources/assets/components/Sidebar.js":
/*!*****************************************************************************!*\
  !*** ./vendor/umbrella2/adminbundle/Resources/assets/components/Sidebar.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! umbrella_core/core/Component */ "./vendor/umbrella2/corebundle/Resources/assets/core/Component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Sidebar = /*#__PURE__*/function (_Component) {
  _inherits(Sidebar, _Component);

  var _super = _createSuper(Sidebar);

  function Sidebar($view) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _super.call(this, $view);

    _this.init();

    return _this;
  }

  _createClass(Sidebar, [{
    key: "init",
    value: function init() {
      this.$view.metisMenu();
      $(document).on('click', '.button-menu-mobile', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-enable');
      });
    }
  }]);

  return Sidebar;
}(umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/components/AsyncSelect2.js":
/*!*********************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/components/AsyncSelect2.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AsyncSelect2; });
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.now */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var umbrella_core_utils_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! umbrella_core/utils/Utils */ "./vendor/umbrella2/corebundle/Resources/assets/utils/Utils.js");
/* harmony import */ var umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! umbrella_core/core/Component */ "./vendor/umbrella2/corebundle/Resources/assets/core/Component.js");









function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var AsyncSelect2 = /*#__PURE__*/function (_Component) {
  _inherits(AsyncSelect2, _Component);

  var _super = _createSuper(AsyncSelect2);

  function AsyncSelect2($view) {
    var _this;

    _classCallCheck(this, AsyncSelect2);

    _this = _super.call(this, $view);

    if ($.select2) {
      console.error("Can't use AsyncSelect2, select2 plugin not loaded");
      return _possibleConstructorReturn(_this);
    }

    _this.init();

    return _this;
  }

  _createClass(AsyncSelect2, [{
    key: "configureOptions",
    value: function configureOptions() {
      var _this2 = this;

      var data_options = this.$view.data('options');
      this.options = data_options ? JSON.parse(umbrella_core_utils_Utils__WEBPACK_IMPORTED_MODULE_8__["default"].decode_html(data_options)) : {};
      this.s2_options = this.options['select2'] ? this.options['select2'] : {};
      var request;
      var scroll = this.options['scroll'] || false;
      var prefix = Date.now();
      var cache = [];
      this.s2_options['ajax'] = {
        url: this.options['ajax_url'] || null,
        delay: this.options['ajax_delay'] || 250,
        transport: function transport(params, success, failure) {
          // is caching enabled?
          if (_this2.options['ajax_cache']) {
            // try to make the key unique to make it less likely for a page+q to match a real query
            var key = prefix + ' page:' + (params.data.page || 1) + ' ' + params.data.q;
            var cacheTimeout = _this2.options['ajax_cache_timeout']; // no cache entry for 'term' or the cache has timed out?

            if (typeof cache[key] === 'undefined' || cacheTimeout && Date.now() >= cache[key].time) {
              return $.ajax(params).fail(failure).done(function (data) {
                cache[key] = {
                  data: data,
                  time: cacheTimeout ? Date.now() + cacheTimeout : null
                };
                success(data);
              });
            } else {
              // return cached data with no ajax request
              success(cache[key].data);
            }
          } else {
            // no caching enabled. just do the ajax request
            if (request) {
              request.abort();
            }

            request = $.ajax(params).fail(failure).done(success).always(function () {
              request = undefined;
            });
            return request;
          }
        },
        data: function data(params) {
          var ret = {
            'q': params.term,
            'field_name': _this2.options['name']
          }; // only send the 'page' parameter if scrolling is enabled

          if (scroll) {
            ret['page'] = params.page || 1;
          }

          return ret;
        },
        processResults: function processResults(data, params) {
          var results,
              more = false,
              response = {};
          params.page = params.page || 1;

          if ($.isArray(data)) {
            results = data;
          } else if (_typeof(data) === 'object') {
            // assume remote result was proper object
            results = data.results;
            more = data.more;
          } else {
            // failsafe
            results = [];
          }

          if (scroll) {
            response.pagination = {
              more: more
            };
          }

          response.results = results;
          return response;
        }
      };

      if (this.options['render_html']) {
        this.s2_options['escapeMarkup'] = function (text) {
          return text;
        };

        this.s2_options['templateResult'] = function (option) {
          return option.html ? option.html : option.text;
        };

        this.s2_options['templateSelection'] = function (option) {
          return option.text;
        };
      } else {
        // templating ?
        var mustacheTemplate = null;

        if (this.options['template_selector']) {
          var $template = $(this.options['template_selector']);

          if ($template.length === 0) {
            console.error("No template found with selector " + this.options['template_selector']);
          } else {
            mustacheTemplate = $template.html();
          }
        }

        if (this.options['template_html']) {
          mustacheTemplate = this.options['template_html'];
        }

        if (mustacheTemplate) {
          this.s2_options['templateResult'] = function (state) {
            if (!state.id) {
              return state.text;
            }

            return $('<span>' + mustache.render(mustacheTemplate, state) + '</span>');
          };
        }
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.configureOptions();
      this.$view.select2(this.s2_options);
      this.$view.show();
    }
  }]);

  return AsyncSelect2;
}(umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/components/Collection.js":
/*!*******************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/components/Collection.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Collection; });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! dragula */ "./node_modules/dragula/dragula.js");
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dragula__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! umbrella_core/core/Component */ "./vendor/umbrella2/corebundle/Resources/assets/core/Component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }













function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Collection = /*#__PURE__*/function (_Component) {
  _inherits(Collection, _Component);

  var _super = _createSuper(Collection);

  function Collection($view) {
    var _this;

    _classCallCheck(this, Collection);

    _this = _super.call(this, $view);
    _this.prototype = _this.$view.data('prototype');
    _this.prototype_name = _this.$view.data('prototype-name');
    _this.index = _this.$view.data('index');
    _this.maxLength = _this.$view.data('maxLength');

    _this.toggleAdd();

    _this.bind();

    return _this;
  }

  _createClass(Collection, [{
    key: "bind",
    value: function bind() {
      var _this2 = this;

      // bind add row
      this.$view.on('click', '.js-add-row', function (e) {
        e.preventDefault();
        _this2.index += 1;
        var regexp = new RegExp(_this2.prototype_name, "g");
        var $newRow = $(_this2.prototype.replace(regexp, _this2.index));

        _this2.$view.data('index', _this2.index);

        _this2.$view.find('tbody').first().append($newRow); // bind row


        app.mount($newRow);

        _this2.toggleAdd();

        _this2.$view.trigger('form:row:add', [$newRow]);
      }); // bind delete row

      this.$view.on('click', '.js-del-row', function (e) {
        e.preventDefault();
        $(e.currentTarget).closest('tr').remove();

        _this2.toggleAdd();

        _this2.$view.trigger('form:row:del');
      }); // before submit => refresh input row order

      this.$view.closest('form[data-mount="Form"]').on('submit', function () {
        var order = 0;

        _this2.$view.find('.js-order').each(function (i, e) {
          $(e).val(order);
          order++;
        });
      }); // sorting

      if (this.$view.data('sortable')) {
        dragula__WEBPACK_IMPORTED_MODULE_11___default()({
          containers: [this.$view.find('tbody')[0]],
          moves: function moves(el, source, handle, sibling) {
            return handle.classList.contains('js-sort-handle') || handle.parentNode.classList.contains('js-sort-handle');
          },
          mirrorContainer: this.$view.find('tbody')[0]
        });
      }
    }
  }, {
    key: "count",
    value: function count() {
      return this.$view.find('tbody tr').length;
    }
  }, {
    key: "toggleAdd",
    value: function toggleAdd() {
      if (this.maxLength > 0) {
        this.$view.find('.js-add-row').toggleClass('d-none', this.count() >= this.maxLength);
      }
    }
  }]);

  return Collection;
}(umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_12__["default"]);



/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/components/DataTable.js":
/*!******************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/components/DataTable.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataTable; });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Toolbar */ "./vendor/umbrella2/corebundle/Resources/assets/components/Toolbar.js");
/* harmony import */ var umbrella_core_utils_AjaxUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! umbrella_core/utils/AjaxUtils */ "./vendor/umbrella2/corebundle/Resources/assets/utils/AjaxUtils.js");
/* harmony import */ var umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! umbrella_core/core/Component */ "./vendor/umbrella2/corebundle/Resources/assets/core/Component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }













function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * Custom event :
 * draw:before
 * draw:done
 */

var DataTable = /*#__PURE__*/function (_Component) {
  _inherits(DataTable, _Component);

  var _super = _createSuper(DataTable);

  function DataTable($view) {
    var _this;

    _classCallCheck(this, DataTable);

    _this = _super.call(this, $view);
    _this.$table = _this.$view.find('table');
    _this.table = null;
    _this.$toolbar = _this.$view.find('toolbar');
    _this.toolbar = null;
    _this.options = $view.data('options') || {};

    _this.init();

    _this.bind();

    _this.timer = null;

    _this.startAutoReload(_this.options['poll_interval']);

    return _this;
  }

  _createClass(DataTable, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.configureOptions();
      this.toolbar = new _Toolbar__WEBPACK_IMPORTED_MODULE_11__["default"](this.$toolbar, {
        'submitOnChange': true,
        'onSubmit': function onSubmit(e, toolbar) {
          e.preventDefault();

          _this2.reload();
        }
      });
      this.table = this.$table.DataTable(this.options);
    }
  }, {
    key: "bind",
    value: function bind() {
      var _this3 = this;

      // toolbar => handle some toolbar action
      this.$toolbar.on('click', '[data-extra-data]', function (e) {
        var $e = $(e.currentTarget);
        var extraDataTag = $e.data('extra-data'); // avoid default action

        e.preventDefault();
        var data = [];

        if (extraDataTag === 'dt_filter') {
          data = _this3.getTableData();
        } else if (extraDataTag === 'dt_selection') {
          data = _this3.getSelectedData();
        } // do ajax call and send extra params


        if ($e.data('xhr')) {
          umbrella_core_utils_AjaxUtils__WEBPACK_IMPORTED_MODULE_12__["default"].handleLink($e, {
            data: data
          });
        } else if ($e.attr('href')) {
          window.location.href = $e.attr('href') + '?' + $.param(data);
        }
      }); // row toggle

      this.$table.on('change', '.js-toggle-widget input[type=checkbox]', function (e) {
        var $e = $(e.currentTarget);

        if ($e.is(':checked')) {
          umbrella_core_utils_AjaxUtils__WEBPACK_IMPORTED_MODULE_12__["default"].get({
            url: $e.data('yes-url')
          });
        } else {
          umbrella_core_utils_AjaxUtils__WEBPACK_IMPORTED_MODULE_12__["default"].get({
            url: $e.data('no-url')
          });
        }
      }); // row re-order

      if (this.options['rowReorder']) {
        this.table.on('row-reorder', function (e, diff, edit) {
          var changeSet = [];

          for (var i = 0, ien = diff.length; i < ien; i++) {
            var id = _this3.table.row(diff[i].node).id();

            changeSet.push({
              'id': id,
              'old_sequence': $(diff[i].oldData).data('sequence'),
              'new_sequence': $(diff[i].newData).data('sequence')
            });
          }

          var ajax_url = _this3.options['rowReorder']['url'];

          if (ajax_url) {
            umbrella_core_utils_AjaxUtils__WEBPACK_IMPORTED_MODULE_12__["default"].get({
              url: ajax_url,
              data: {
                'change_set': changeSet
              }
            });
          }
        });
      } // row select


      this.table.on('click', 'thead .js-action-select', function (e) {
        e.preventDefault();
        var $target = $(e.currentTarget);

        var $checkboxes = _this3.$table.find('tbody tr td.js-select input[type=checkbox]');

        $checkboxes.prop('checked', $target.data('filter') === 'all');
        $checkboxes.trigger('change');
      });
      this.table.on('change', 'tbody tr td.js-select input[type=checkbox]', function (e) {
        var $target = $(e.currentTarget);
        var $tr = $target.closest('tr');

        if ($target.prop('checked')) {
          $tr.addClass('selected');
        } else {
          $tr.removeClass('selected');
        }
      }); // default error handler

      this.table.on('error.dt', function (e, settings, techNote, message) {
        var html = '<tr>';
        html += '<td class="text-danger text-center" colspan="100%">';
        html += '<i class="mdi mdi-alert-circle-outline" aria-hidden="true"></i> Impossible de charger les données';
        html += '</td>';
        html += '</tr>';

        _this3.$view.find('tbody').html(html);

        _this3.stopAutoReload();
      });
    }
  }, {
    key: "configureOptions",
    value: function configureOptions() {
      var _this4 = this;

      this.options['ajax']['data'] = function (d) {
        // avoid sending unused params
        delete d['columns'];
        delete d['search'];
        return _objectSpread(_objectSpread(_objectSpread({}, d), _this4.options['ajax_data']), _this4.toolbar.getData());
      };

      this.options['preDrawCallback'] = function (settings) {
        _this4.$view.trigger('draw:before');
      };

      this.options['drawCallback'] = function (settings) {
        _this4.$view.trigger('draw:done'); // tooltip


        _this4.$view.find('[data-toggle="tooltip"]').tooltip(); // treegrid


        if (_this4.options['tree']) {
          _this4.$table.treegrid({
            'treeColumn': _this4.options['tree_column'],
            'initialState': _this4.options['tree_state']
          });
        } // popover


        _this4.$table.find('[data-toggle=popover]').popover({
          container: _this4.$table,
          html: true
        });
      };
    }
  }, {
    key: "reload",
    value: function reload() {
      var paging = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.$table.DataTable().draw(paging);
    }
  }, {
    key: "displaySpinner",
    value: function displaySpinner() {
      this.$table.find('tbody').html(this.$table.find('tbody').data('spinner'));
    }
  }, {
    key: "getSelectedData",
    value: function getSelectedData() {
      var ids = [];
      this.$table.find('tbody tr.selected[data-id]').each(function (e, elt) {
        ids.push($(elt).data('id'));
      });
      return {
        'ids': ids
      };
    }
  }, {
    key: "getTableData",
    value: function getTableData() {
      return this.table.ajax.params();
    }
  }, {
    key: "startAutoReload",
    value: function startAutoReload(pollInterval) {
      this.pollInterval = pollInterval;

      if (this.pollInterval > 0) {
        this.__autoReload();
      }
    }
  }, {
    key: "stopAutoReload",
    value: function stopAutoReload() {
      this.pollInterval = null;

      if (this.timer) {
        clearTimeout(this.timer);
      }
    }
  }, {
    key: "__autoReload",
    value: function __autoReload() {
      var _this5 = this;

      if (this.pollInterval > 0) {
        this.timer = setTimeout(function () {
          _this5.reload(false);

          _this5.__autoReload();
        }, this.pollInterval * 1000);
      }
    }
  }]);

  return DataTable;
}(umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_13__["default"]);



/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/components/DatePicker.js":
/*!*******************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/components/DatePicker.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DatePicker; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! umbrella_core/core/Component */ "./vendor/umbrella2/corebundle/Resources/assets/core/Component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var DatePicker = /*#__PURE__*/function (_Component) {
  _inherits(DatePicker, _Component);

  var _super = _createSuper(DatePicker);

  function DatePicker($view) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _super.call(this, $view);

    if ($.datepicker) {
      console.error("Can't use AsyncSelect2, datepicker plugin not loaded");
      return _possibleConstructorReturn(_this);
    }

    _this.options = {
      format: _this.$view.data('format') ? _this.$view.data('format') : null,
      language: 'fr',
      autoclose: true
    };

    _this.init();

    return _this;
  }

  _createClass(DatePicker, [{
    key: "init",
    value: function init() {
      this.$view.datepicker(this.options);
    }
  }]);

  return DatePicker;
}(umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/components/DateTimePicker.js":
/*!***********************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/components/DateTimePicker.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateTimePicker; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! umbrella_core/core/Component */ "./vendor/umbrella2/corebundle/Resources/assets/core/Component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var DateTimePicker = /*#__PURE__*/function (_Component) {
  _inherits(DateTimePicker, _Component);

  var _super = _createSuper(DateTimePicker);

  function DateTimePicker($view) {
    var _this;

    _classCallCheck(this, DateTimePicker);

    _this = _super.call(this, $view);

    if ($.datetimepicker) {
      console.error("Can't use AsyncSelect2, datetimepicker plugin not loaded");
      return _possibleConstructorReturn(_this);
    }

    _this.options = {
      format: _this.$view.data('format') ? _this.$view.data('format') : null,
      locale: 'fr',
      sideBySide: true,
      keepOpen: true,
      // inline: true,
      // debug: true,
      toolbarPlacement: 'bottom',
      showClear: _this.$view.data('show-clear') ? _this.$view.data('show-clear') : false,
      icons: {
        time: 'mdi mdi-clock-outline',
        date: 'mdi mdi-calendar',
        up: ' mdi mdi-chevron-up',
        down: ' mdi mdi-chevron-down',
        previous: 'content-prev',
        next: 'content-next',
        today: 'mdi mdi-check',
        clear: 'mdi mdi-close',
        close: 'mdi mdi-close'
      }
    };

    if (_this.$view.data('min-date')) {
      _this.options.minDate = _this.$view.data('min-date');
    }

    if (_this.$view.data('max-date')) {
      _this.options.maxDate = _this.$view.data('max-date');
    }

    _this.init();

    return _this;
  }

  _createClass(DateTimePicker, [{
    key: "init",
    value: function init() {
      this.$view.datetimepicker(this.options);
    }
  }]);

  return DateTimePicker;
}(umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/components/FileUpload.js":
/*!*******************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/components/FileUpload.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileUpload; });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var umbrella_core_utils_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! umbrella_core/utils/Utils */ "./vendor/umbrella2/corebundle/Resources/assets/utils/Utils.js");
/* harmony import */ var umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! umbrella_core/core/Component */ "./vendor/umbrella2/corebundle/Resources/assets/core/Component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }











function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var FileUpload = /*#__PURE__*/function (_Component) {
  _inherits(FileUpload, _Component);

  var _super = _createSuper(FileUpload);

  function FileUpload($view) {
    var _this;

    _classCallCheck(this, FileUpload);

    _this = _super.call(this, $view);
    _this.$inputFile = _this.$view.find('input.js-umbrella-file');
    _this.$inputEntity = _this.$view.find('input.js-umbrella-entity');
    _this.$inputTxt = _this.$view.find('input.js-umbrella-text');
    _this.$inputDelete = _this.$view.find('input.js-umbrella-delete');
    _this.$removeBtn = _this.$view.find('.js-umbrella-remove');
    _this.$downloadBtn = _this.$view.find('.js-umbrella-download');
    _this.$browseBtn = _this.$view.find('.js-umbrella-browse');

    _this.init();

    _this.bind();

    return _this;
  }

  _createClass(FileUpload, [{
    key: "init",
    value: function init() {
      if (this.$inputEntity.val()) {
        this.$removeBtn.removeClass('d-none');
      } else {
        this.$removeBtn.addClass('d-none');
      }
    }
  }, {
    key: "bind",
    value: function bind() {
      var _this2 = this;

      this.$browseBtn.on('click', function () {
        _this2.$inputFile.click();
      });
      this.$inputFile.on('change', function () {
        _this2.refresh();
      });
      this.$removeBtn.on('click', function () {
        _this2.clear();
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.$inputFile.replaceWith(this.$inputFile.val('').clone(true));
      this.$inputFile = this.$view.find('input[type="file"]');
      this.$inputDelete.prop('checked', true);
      this.$downloadBtn.addClass('d-none');
      this.refresh();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var files = this.$inputFile[0].files;

      if (files.length > 0) {
        var file = files[0];
        this.$inputTxt.val(file.name + ' (' + umbrella_core_utils_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].bytes_to_size(file.size) + ')');
        this.$removeBtn.removeClass('d-none');
      } else {
        this.$inputTxt.val('');
        this.$removeBtn.addClass('d-none');
      }
    }
  }]);

  return FileUpload;
}(umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_10__["default"]);



/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/components/Select2.js":
/*!****************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/components/Select2.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Select2; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var umbrella_core_utils_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! umbrella_core/utils/Utils */ "./vendor/umbrella2/corebundle/Resources/assets/utils/Utils.js");
/* harmony import */ var umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! umbrella_core/core/Component */ "./vendor/umbrella2/corebundle/Resources/assets/core/Component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Select2 = /*#__PURE__*/function (_Component) {
  _inherits(Select2, _Component);

  var _super = _createSuper(Select2);

  function Select2($view) {
    var _this;

    _classCallCheck(this, Select2);

    _this = _super.call(this, $view);

    if ($.select2) {
      console.error("Can't use Select2, select2 plugin not loaded");
      return _possibleConstructorReturn(_this);
    }

    _this.init();

    return _this;
  }

  _createClass(Select2, [{
    key: "configureOptions",
    value: function configureOptions() {
      var data_options = this.$view.data('options');
      this.options = data_options ? JSON.parse(umbrella_core_utils_Utils__WEBPACK_IMPORTED_MODULE_6__["default"].decode_html(data_options)) : {};
      this.s2_options = this.options['select2'] ? this.options['select2'] : {}; // templating

      var mustacheTemplate = null;

      if (this.options['template_selector']) {
        var $template = $(this.options['template_selector']);

        if ($template.length === 0) {
          console.error("No template found with selector " + this.options['template_selector']);
        } else {
          mustacheTemplate = $template.html();
        }
      }

      if (this.options['template_html']) {
        mustacheTemplate = this.options['template_html'];
      }

      if (mustacheTemplate) {
        this.s2_options['templateResult'] = function (state) {
          if (!state.id) {
            return state.text;
          }

          var data = state; // add data retrieve from vanilla option element

          if (state.element) {
            var exposedData = $(state.element).data('json') || {};
            data = _objectSpread(_objectSpread({}, exposedData), data);
          }

          return $('<span>' + mustache.render(mustacheTemplate, data) + '</span>');
        };
      } // ajax loading


      if (this.options['ajax_url']) {
        this.s2_options['ajax'] = {
          url: this.options['ajax_url'],
          dataType: 'json',
          delay: 250,
          data: function data(params) {
            return {
              q: params.term,
              page: params.page
            };
          },
          processResults: function processResults(data, params) {
            var more = data.more || false;
            return {
              results: data.items,
              pagination: {
                more: more
              }
            };
          },
          cache: true
        };
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.$view.select2('open');
    }
  }, {
    key: "init",
    value: function init() {
      this.configureOptions();
      this.$view.select2(this.s2_options);
      this.$view.show();
    }
  }]);

  return Select2;
}(umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_7__["default"]);



/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/components/TagsInput.js":
/*!******************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/components/TagsInput.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TagsInput; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! umbrella_core/core/Component */ "./vendor/umbrella2/corebundle/Resources/assets/core/Component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var TagsInput = /*#__PURE__*/function (_Component) {
  _inherits(TagsInput, _Component);

  var _super = _createSuper(TagsInput);

  function TagsInput($view) {
    var _this;

    _classCallCheck(this, TagsInput);

    _this = _super.call(this, $view);

    if ($.tagsinput) {
      console.error("Can't use TagsInput, tagsinput plugin not loaded");
      return _possibleConstructorReturn(_this);
    }

    _this.$view.tagsinput();

    return _this;
  }

  return TagsInput;
}(umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/components/Toolbar.js":
/*!****************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/components/Toolbar.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Custom event :
 * tb:submit
 */
var Toolbar = /*#__PURE__*/function () {
  function Toolbar($view) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Toolbar);

    this.$view = $view;
    this.$form = this.$view.find('.js-toolbar-form');
    this.options = options;
    this.init();
    this.bind();
  }

  _createClass(Toolbar, [{
    key: "init",
    value: function init() {
      var defaultOptions = {
        submitOnChange: false,
        onSubmit: function onSubmit(e, toolbar) {}
      };
      this.options = _objectSpread(_objectSpread({}, defaultOptions), this.options);
    }
  }, {
    key: "bind",
    value: function bind() {
      var _this = this;

      if (this.options['submitOnChange'] === true) {
        // reload on change
        this.$view.on('change', 'select, input[type=checkbox], input[type=radio], .js-datepicker', function () {
          _this.$view.trigger('submit');
        });
        var timer = null;
        this.$view.on('keyup', 'input[type=text], input[type=search]', function (e) {
          clearTimeout(timer);
          timer = setTimeout(function () {
            _this.$view.trigger('submit');
          }, 200);
        });
      }

      this.$view.on('submit', function (e) {
        _this.options['onSubmit'](e, _this);
      });
    }
  }, {
    key: "submit",
    value: function submit() {
      if (this.$form) {
        this.$form.trigger('submit');
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.$form.length ? this.$form.serializeFormToJson() : [];
    }
  }]);

  return Toolbar;
}();



/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/core/AjaxCallbackHandler.js":
/*!**********************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/core/AjaxCallbackHandler.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AjaxCallbackHandler; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var umbrella_core_core_AjaxHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! umbrella_core/core/AjaxHandler */ "./vendor/umbrella2/corebundle/Resources/assets/core/AjaxHandler.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var AjaxCallbackHandler = /*#__PURE__*/function (_AjaxHandler) {
  _inherits(AjaxCallbackHandler, _AjaxHandler);

  var _super = _createSuper(AjaxCallbackHandler);

  function AjaxCallbackHandler(success) {
    var _this;

    var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var complete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    _classCallCheck(this, AjaxCallbackHandler);

    _this = _super.call(this);
    _this._success = success;
    _this._error = error;
    _this._complete = complete;
    return _this;
  }

  _createClass(AjaxCallbackHandler, [{
    key: "success",
    value: function success(response) {
      this._success(response);
    }
  }, {
    key: "error",
    value: function error(requestObject, _error, errorThrown) {
      this._error(requestObject, _error, errorThrown);
    }
  }, {
    key: "complete",
    value: function complete() {
      this._complete();
    }
  }]);

  return AjaxCallbackHandler;
}(umbrella_core_core_AjaxHandler__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/core/AjaxHandler.js":
/*!**************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/core/AjaxHandler.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AjaxHandler; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AjaxHandler = /*#__PURE__*/function () {
  function AjaxHandler() {
    _classCallCheck(this, AjaxHandler);
  }

  _createClass(AjaxHandler, [{
    key: "success",
    value: function success(response) {}
  }, {
    key: "error",
    value: function error(requestObject, _error, errorThrown) {}
  }, {
    key: "complete",
    value: function complete() {}
  }]);

  return AjaxHandler;
}();



/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/core/AjaxJsResponseHandler.js":
/*!************************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/core/AjaxJsResponseHandler.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AjaxJsResponseHandler; });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var umbrella_core_core_AjaxHandler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! umbrella_core/core/AjaxHandler */ "./vendor/umbrella2/corebundle/Resources/assets/core/AjaxHandler.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var AjaxJsResponseHandler = /*#__PURE__*/function (_AjaxHandler) {
  _inherits(AjaxJsResponseHandler, _AjaxHandler);

  var _super = _createSuper(AjaxJsResponseHandler);

  function AjaxJsResponseHandler() {
    _classCallCheck(this, AjaxJsResponseHandler);

    return _super.apply(this, arguments);
  }

  _createClass(AjaxJsResponseHandler, [{
    key: "success",
    value: function success(response) {
      if (Array.isArray(response)) {
        var _iterator = _createForOfIteratorHelper(response),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var message = _step.value;
            this.doAction(message);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        console.error('JsResponseHandler : invalid response, expected json array.');
      }
    }
  }, {
    key: "error",
    value: function error(requestObject, _error, errorThrown) {
      if (requestObject.status === 401) {
        $.toast({
          icon: 'warning',
          text: "Vous n'etes plus connecté. Veuillez rafraichir la page pour vous authentifier"
        });
      } else {
        $.toast({
          icon: 'error',
          text: "Une erreur est survenue"
        });
      }
    }
  }, {
    key: "doAction",
    value: function doAction(message) {
      var action = AjaxJsResponseHandler.actions[message.action];

      if (!action) {
        console.error('AjaxHandler : invalid action ' + message.action);
      } else {
        action(message.params);
      }
    }
  }]);

  return AjaxJsResponseHandler;
}(umbrella_core_core_AjaxHandler__WEBPACK_IMPORTED_MODULE_12__["default"]);

AjaxJsResponseHandler.actions = {
  execute_js: function execute_js(params) {
    eval(params.value);
  },
  reload: function reload(params) {
    window.location.href = window.location.href.split('#')[0];
  },
  redirect: function redirect(params) {
    window.location = params.value;
  },
  toast: function toast(params) {
    $.toast(params);
  },
  open_modal: function open_modal(params) {
    var $modal = $(params.value);
    var $opened_modal = $('.js-umbrella-modal.show');

    if ($opened_modal.length) {
      $opened_modal.html($modal.find('.modal-dialog'));
      app.mount($opened_modal);
    } else {
      // HACK : bs 4 modal doesn't execute script
      $modal.on('shown.bs.modal', function (e) {
        app.mount($(e.target));
        var $scripts = $(e.target).find('script');
        $.each($scripts, function (i, s) {
          eval($(s).html());
        });
      });
      $modal.on('hidden.bs.modal', function (e) {
        $(e.target).data('bs.modal', null);
        $(e.target).remove();
      });
      $modal.modal('show');
    }
  },
  close_modal: function close_modal(params) {
    var $opened_modal = $('.js-umbrella-modal.show');

    if ($opened_modal.length) {
      $opened_modal.modal('hide');
    }
  },
  reload_table: function reload_table(params) {
    var selector = '';

    if (params.ids && params.ids.length > 0) {
      selector = params.ids.map(function (id) {
        return '#' + id;
      }).join(', ');
    } else {
      selector = '[data-mount=DataTable]';
    }

    AjaxJsResponseHandler.actions.component_call(selector, 'reload');
  },
  component_call: function component_call(selector, method) {
    var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    var _iterator2 = _createForOfIteratorHelper(app.getComponents(selector)),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var component = _step2.value;
        component[method].apply(component, _toConsumableArray(args));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  },
  update: function update(params) {
    var $view = $(params.selector);
    $view.html(params.value);
    app.mount($view);
  },
  remove: function remove(params) {
    $(params.selector).remove();
  }
};


/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/core/Bind.js":
/*!*******************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/core/Bind.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bind; });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var umbrella_core_utils_AjaxUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! umbrella_core/utils/AjaxUtils */ "./vendor/umbrella2/corebundle/Resources/assets/utils/AjaxUtils.js");



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Bind = /*#__PURE__*/function () {
  function Bind($view) {
    var newDom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    _classCallCheck(this, Bind);

    this.$view = $view;
    this.bindTooltip();
    this.bindToast();
    this.bindPopover();

    if (!newDom) {
      this.bindForm();
      this.bindLink();
    }
  }

  _createClass(Bind, [{
    key: "bindTooltip",
    value: function bindTooltip() {
      if ($.tooltip) {
        this.$view.find('[data-toggle="tooltip"]').tooltip({
          container: this.$view
        });
      }
    }
  }, {
    key: "bindToast",
    value: function bindToast() {
      if ($.toast) {
        this.$view.find('[data-toggle="toast"]').each(function (i, e) {
          $.toast($(e).data('options'));
        });
      }
    }
  }, {
    key: "bindPopover",
    value: function bindPopover() {
      if ($.popover) {
        this.$view.find('[data-toggle="popover"]').popover({
          container: this.$view
        });
      }
    } // if you don't want your form was bind : use class no-bind

  }, {
    key: "bindForm",
    value: function bindForm() {
      this.$view.on('click', '[data-xhr]:not(form):not(.no-bind)', function (e) {
        e.preventDefault();
        umbrella_core_utils_AjaxUtils__WEBPACK_IMPORTED_MODULE_2__["default"].handleLink($(e.currentTarget));
      });
    } // if you don't want your link was bind : use class no-bind

  }, {
    key: "bindLink",
    value: function bindLink() {
      this.$view.on('submit', 'form[data-xhr]:not(.no-bind)', function (e) {
        e.preventDefault();
        umbrella_core_utils_AjaxUtils__WEBPACK_IMPORTED_MODULE_2__["default"].handleForm($(e.currentTarget));
      });
    }
  }]);

  return Bind;
}();



/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/core/Component.js":
/*!************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/core/Component.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function Component($view) {
  _classCallCheck(this, Component);

  this.$view = $view;
};



/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/core/UmbrellaApp.js":
/*!**************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/core/UmbrellaApp.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UmbrellaApp; });
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! umbrella_core/core/Component */ "./vendor/umbrella2/corebundle/Resources/assets/core/Component.js");
/* harmony import */ var umbrella_core_core_Bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! umbrella_core/core/Bind */ "./vendor/umbrella2/corebundle/Resources/assets/core/Bind.js");
/* harmony import */ var umbrella_core_core_AjaxHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! umbrella_core/core/AjaxHandler */ "./vendor/umbrella2/corebundle/Resources/assets/core/AjaxHandler.js");




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var UmbrellaApp = /*#__PURE__*/function () {
  function UmbrellaApp() {
    _classCallCheck(this, UmbrellaApp);

    this.componentRegistry = {};
    this.ajaxHandlerRegistry = {};
  } // *** Components *** //


  _createClass(UmbrellaApp, [{
    key: "mount",
    value: function mount() {
      var _this = this;

      var $container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var _loop = function _loop(selector) {
        var componentClass = _this.componentRegistry[selector];
        var $e = $container ? $container.find(selector) : $(selector);
        $e.each(function () {
          var $view = $(this);

          if (!$view.data('component')) {
            $view.data('component', new componentClass($view));
          }
        });
      };

      for (var selector in this.componentRegistry) {
        _loop(selector);
      }
    }
  }, {
    key: "use",
    value: function use(selector, componentClass) {
      if (!(componentClass.prototype instanceof umbrella_core_core_Component__WEBPACK_IMPORTED_MODULE_3__["default"])) {
        console.error("Can't use component ".concat(componentClass.prototype.constructor.name, ", he must extends Component class"));
        return;
      }

      this.componentRegistry[selector] = componentClass;
    }
  }, {
    key: "getComponents",
    value: function getComponents(selector) {
      var components = [];
      $(selector).each(function (i, e) {
        var $e = $(e); // components

        if ($e.data('component')) {
          components.push($e.data('component'));
        }
      });
      return components;
    } // *** Ajax handlers *** //

  }, {
    key: "useAjaxHandler",
    value: function useAjaxHandler(handlerName, handler) {
      if (!(handler instanceof umbrella_core_core_AjaxHandler__WEBPACK_IMPORTED_MODULE_5__["default"])) {
        console.error("Can't use handler ".concat(handler.constructor.name, ", he must extends AjaxHandler class"));
        return;
      }

      this.ajaxHandlerRegistry[handlerName] = handler;
    }
  }, {
    key: "getAjaxHandler",
    value: function getAjaxHandler() {
      var handlerName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!handlerName) {
        handlerName = 'default';
      }

      if (!(handlerName in this.ajaxHandlerRegistry)) {
        throw "No ajax handler registered with name ".concat(handlerName);
      }

      return this.ajaxHandlerRegistry[handlerName];
    } // *** Bind *** //

  }, {
    key: "bind",
    value: function bind() {
      new umbrella_core_core_Bind__WEBPACK_IMPORTED_MODULE_4__["default"]($('body'), false);
    }
  }, {
    key: "bindNewDom",
    value: function bindNewDom($e) {
      new umbrella_core_core_Bind__WEBPACK_IMPORTED_MODULE_4__["default"]($e, true);
    }
  }]);

  return UmbrellaApp;
}();



/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/jquery-plugins/SerializeFormToFormData.js":
/*!************************************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/jquery-plugins/SerializeFormToFormData.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

/**
 * @see https://stackoverflow.com/questions/5392344/sending-multipart-formdata-with-jquery-ajax
 */
(function ($) {
  $.fn.serializeFormToFormData = function () {
    var $obj = $(this);
    /* ADD FILE TO PARAM AJAX */

    var formData = new FormData();
    $.each($obj.find("input[type='file']"), function (i, tag) {
      $.each($(tag)[0].files, function (i, file) {
        formData.append(tag.name, file);
      });
    });
    var params = $obj.serializeArray();
    $.each(params, function (i, val) {
      formData.append(val.name, val.value);
    });
    return formData;
  };
})(jQuery);

/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/jquery-plugins/SerializeFormToJson.js":
/*!********************************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/jquery-plugins/SerializeFormToJson.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.string.fixed */ "./node_modules/core-js/modules/es.string.fixed.js");

/**
 * @see https://stackoverflow.com/questions/1184624/convert-form-data-to-javascript-object-with-jquery
 */
(function ($) {
  $.fn.serializeFormToJson = function (options) {
    var self = this,
        json = {},
        push_counters = {},
        patterns = {
      "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
      "key": /[a-zA-Z0-9_]+|(?=\[\])/g,
      "push": /^$/,
      "fixed": /^\d+$/,
      "named": /^[a-zA-Z0-9_]+$/
    };
    var opts = $.extend({}, $.fn.serializeFormToJson.defaults, options);

    this.build = function (base, key, value) {
      base[key] = value;
      return base;
    };

    this.push_counter = function (key) {
      if (push_counters[key] === undefined) {
        push_counters[key] = 0;
      }

      return push_counters[key]++;
    };

    $.each($(this).serializeArray(), function () {
      // skip invalid keys
      if (!patterns.validate.test(this.name)) {
        return;
      }

      if (!opts.empty && $.trim(this.value) == '') {
        return;
      }

      var k,
          keys = this.name.match(patterns.key),
          merge = this.value,
          reverse_key = this.name;

      while ((k = keys.pop()) !== undefined) {
        // adjust reverse_key
        reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), ''); // push

        if (k.match(patterns.push)) {
          merge = self.build([], self.push_counter(reverse_key), merge);
        } // fixed
        else if (k.match(patterns.fixed)) {
            merge = self.build([], k, merge);
          } // named
          else if (k.match(patterns.named)) {
              merge = self.build({}, k, merge);
            }
      }

      json = $.extend(true, json, merge);
    });
    return json;
  };

  $.fn.serializeFormToJson.defaults = {
    empty: true
  };
})(jQuery);

/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/jquery-plugins/_jquery_plugins.js":
/*!****************************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/jquery-plugins/_jquery_plugins.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SerializeFormToFormData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SerializeFormToFormData */ "./vendor/umbrella2/corebundle/Resources/assets/jquery-plugins/SerializeFormToFormData.js");
/* harmony import */ var _SerializeFormToFormData__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SerializeFormToFormData__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SerializeFormToJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SerializeFormToJson */ "./vendor/umbrella2/corebundle/Resources/assets/jquery-plugins/SerializeFormToJson.js");
/* harmony import */ var _SerializeFormToJson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SerializeFormToJson__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/plugins/ConfirmModal.js":
/*!******************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/plugins/ConfirmModal.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfirmModal; });
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ConfirmModal = /*#__PURE__*/function () {
  function ConfirmModal() {
    _classCallCheck(this, ConfirmModal);
  }

  _createClass(ConfirmModal, null, [{
    key: "show",
    value: function show() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var defaultOptions = {
        text: '',
        cancel_text: 'Annuler',
        confirm_text: 'Confirmer',
        confirm: function confirm() {}
      };
      options = _objectSpread(_objectSpread({}, defaultOptions), options);
      ConfirmModal.hide();
      var html = ConfirmModal.template.replace('__text__', options['text']);
      html = html.replace('__cancel__', options['cancel_text']);
      html = html.replace('__confirm__', options['confirm_text']);
      ConfirmModal.$modal = $(html);
      ConfirmModal.$modal.on('keypress', function (e) {
        if (e.which === 13) {
          options['confirm']();
          ConfirmModal.hide();
        }
      });
      ConfirmModal.$modal.on('click', '.btn-confirm', function (e) {
        options['confirm']();
        ConfirmModal.hide();
      });
      ConfirmModal.$modal.on('hidden.bs.modal', function () {
        return ConfirmModal.remove();
      });
      ConfirmModal.$modal.modal('show');
    }
  }, {
    key: "hide",
    value: function hide() {
      if (ConfirmModal.$modal) {
        ConfirmModal.$modal.modal('hide');
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      $('#confirm-modal').remove();
    }
  }]);

  return ConfirmModal;
}();

ConfirmModal.template = '<div class="modal confirm-modal fade" tabindex="-1" id="confirm-modal">' + '<div class="modal-dialog modal-dialog-centered" role="document">' + '<div class="modal-content">' + '<div class="modal-body">__text__</div>' + '<div class="modal-footer">' + '<button type="button" class="btn btn-outline-light btn-cancel" data-dismiss="modal">__cancel__</button>' + '<button type="button" class="btn btn-outline-light btn-confirm">__confirm__</button></div></div></div></div>';
ConfirmModal.$modal = null;


/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/plugins/Spinner.js":
/*!*************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/plugins/Spinner.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spinner; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Spinner = /*#__PURE__*/function () {
  function Spinner() {
    _classCallCheck(this, Spinner);
  }

  _createClass(Spinner, null, [{
    key: "show",
    value: function show() {
      Spinner.hide();
      $('body').after(Spinner.template);
    }
  }, {
    key: "hide",
    value: function hide() {
      var $spinner = $('#spinner');

      if ($spinner.length) {
        $spinner.remove();
      }
    }
  }]);

  return Spinner;
}();

Spinner.template = '<div id="spinner">' + '<div class="bouncing-loader-wrapper">' + '<div class="bouncing-loader">' + '<div></div>' + '<div></div>' + '<div></div>' + '</div>' + '</div>' + '</div>';


/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/utils/AjaxUtils.js":
/*!*************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/utils/AjaxUtils.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AjaxUtils; });
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var umbrella_core_plugins_ConfirmModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! umbrella_core/plugins/ConfirmModal */ "./vendor/umbrella2/corebundle/Resources/assets/plugins/ConfirmModal.js");
/* harmony import */ var umbrella_core_plugins_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! umbrella_core/plugins/Spinner */ "./vendor/umbrella2/corebundle/Resources/assets/plugins/Spinner.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var AjaxUtils = /*#__PURE__*/function () {
  function AjaxUtils() {
    _classCallCheck(this, AjaxUtils);
  }

  _createClass(AjaxUtils, null, [{
    key: "handleLink",
    value: function handleLink($view) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      options = _objectSpread(_objectSpread({}, {
        url: $view.data('xhr'),
        xhr_id: $view.data('xhr-id') || null,
        confirm: $view.data('confirm') || false,
        spinner: $view.data('spinner') || false,
        method: $view.data('method') || 'get'
      }), options);
      var handler = app.getAjaxHandler($view.data('handler') || null);
      this.request(options, handler);
    }
  }, {
    key: "handleForm",
    value: function handleForm($view) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      options = _objectSpread(_objectSpread({}, {
        url: $view.data('xhr'),
        xhr_id: $view.data('xhr-id') || null,
        confirm: $view.data('confirm') || false,
        spinner: $view.data('spinner') || false,
        method: $view.attr('method') || 'post',
        data: $view.serializeFormToFormData()
      }), options);
      var handler = app.getAjaxHandler($view.data('handler') || null);
      this.request(options, handler);
    }
  }, {
    key: "request",
    value: function request() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (handler === null) {
        handler = app.getAjaxHandler();
      }

      if ('xhr_id' in options && options['xhr_id']) {
        if (AjaxUtils.xhrPendingRegistryIds.includes(options['xhr_id'])) {
          console.warn("Request prevented : request with id ".concat(options['xhr_id'], " is pending."));
          return;
        } else {
          AjaxUtils.xhrPendingRegistryIds.push(options['xhr_id']);
        }
      }

      if ('data' in options && options['data'] instanceof FormData) {
        options['contentType'] = false;
        options['processData'] = false;
      }

      if ('spinner' in options && false !== options['spinner']) {
        umbrella_core_plugins_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"].show({
          text: options['spinner']
        });
      }

      options['success'] = function (response) {
        handler.success(response);
      };

      options['error'] = function (requestObject, error, errorThrown) {
        handler.error(requestObject, error, errorThrown);
      };

      options['complete'] = function () {
        if ('xhr_id' in options && options['xhr_id']) {
          AjaxUtils.xhrPendingRegistryIds = $.grep(AjaxUtils.xhrPendingRegistryIds, function (id) {
            return id !== options['xhr_id'];
          });
        }

        umbrella_core_plugins_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"].hide();
        handler.complete();
      };

      if ('confirm' in options && false !== options['confirm']) {
        umbrella_core_plugins_ConfirmModal__WEBPACK_IMPORTED_MODULE_3__["default"].show({
          'text': options['confirm'],
          'confirm': function confirm() {
            return $.ajax(options);
          }
        });
      } else {
        return $.ajax(options);
      }
    }
  }, {
    key: "get",
    value: function get() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      options['method'] = 'get';
      return AjaxUtils.request(options, handler);
    }
  }, {
    key: "post",
    value: function post() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      options['method'] = 'post';
      return AjaxUtils.request(options, handler);
    }
  }]);

  return AjaxUtils;
}();

AjaxUtils.xhrPendingRegistryIds = [];


/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/utils/Utils.js":
/*!*********************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/utils/Utils.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utils; });
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "bytes_to_size",
    value: function bytes_to_size(bytes) {
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes == 0) return '0';
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }
  }, {
    key: "decode_html",
    value: function decode_html(html) {
      var txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    }
  }]);

  return Utils;
}();



/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/vendor/_global.js":
/*!************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/vendor/_global.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_1__);
// jquery

window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a; // mustache


window.mustache = mustache__WEBPACK_IMPORTED_MODULE_1___default.a;
mustache__WEBPACK_IMPORTED_MODULE_1___default.a.tags = ['[[', ']]'];

/***/ }),

/***/ "./vendor/umbrella2/corebundle/Resources/assets/vendor/_vendor.js":
/*!************************************************************************!*\
  !*** ./vendor/umbrella2/corebundle/Resources/assets/vendor/_vendor.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_global */ "./vendor/umbrella2/corebundle/Resources/assets/vendor/_global.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var datatables_net_rowreorder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net-rowreorder */ "./node_modules/datatables.net-rowreorder/js/dataTables.rowReorder.js");
/* harmony import */ var datatables_net_rowreorder__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(datatables_net_rowreorder__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net_fixedheader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net-fixedheader */ "./node_modules/datatables.net-fixedheader/js/dataTables.fixedHeader.js");
/* harmony import */ var datatables_net_fixedheader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net_fixedheader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var select2_dist_js_select2_full__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! select2/dist/js/select2.full */ "./node_modules/select2/dist/js/select2.full.js");
/* harmony import */ var select2_dist_js_select2_full__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(select2_dist_js_select2_full__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var select2_dist_js_i18n_fr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! select2/dist/js/i18n/fr */ "./node_modules/select2/dist/js/i18n/fr.js");
/* harmony import */ var select2_dist_js_i18n_fr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(select2_dist_js_i18n_fr__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap_tagsinput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap-tagsinput */ "./node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.js");
/* harmony import */ var bootstrap_tagsinput__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_tagsinput__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap-datepicker */ "./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js");
/* harmony import */ var bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bootstrap_datepicker_js_locales_bootstrap_datepicker_fr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap-datepicker/js/locales/bootstrap-datepicker.fr */ "./node_modules/bootstrap-datepicker/js/locales/bootstrap-datepicker.fr.js");
/* harmony import */ var bootstrap_datepicker_js_locales_bootstrap_datepicker_fr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_datepicker_js_locales_bootstrap_datepicker_fr__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var eonasdan_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! eonasdan-bootstrap-datetimepicker */ "./node_modules/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js");
/* harmony import */ var eonasdan_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(eonasdan_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var metismenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! metismenu */ "./node_modules/metismenu/dist/metisMenu.js");
/* harmony import */ var metismenu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(metismenu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! simplebar */ "./node_modules/simplebar/dist/simplebar.esm.js");
/* harmony import */ var jquery_toast_plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery-toast-plugin */ "./node_modules/jquery-toast-plugin/dist/jquery.toast.min.js");
/* harmony import */ var jquery_toast_plugin__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery_toast_plugin__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var jquery_treegrid_js_jquery_treegrid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jquery-treegrid/js/jquery.treegrid */ "./node_modules/jquery-treegrid/js/jquery.treegrid.js");
/* harmony import */ var jquery_treegrid_js_jquery_treegrid__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jquery_treegrid_js_jquery_treegrid__WEBPACK_IMPORTED_MODULE_15__);
// import globals in separated files else global scope will not works
 // bootstrap

 // datatables




 // select2


 // tags input

 // date picker


 // datetime picker

 // metismenu (sidebar

 // scrollbar

 // toastr jquery

 // tree grid jquery



/***/ })

},[["./assets/admin/Admin.js","runtime","vendors~admin"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4vQWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL0FqYXhIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi9hZG1pbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2FkbWluYnVuZGxlL1Jlc291cmNlcy9hc3NldHMvQWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3VtYnJlbGxhMi9hZG1pbmJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3ZlbmRvci91bWJyZWxsYTIvYWRtaW5idW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2FkbWluYnVuZGxlL1Jlc291cmNlcy9hc3NldHMvY29tcG9uZW50cy9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci91bWJyZWxsYTIvY29yZWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL2NvbXBvbmVudHMvQXN5bmNTZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci91bWJyZWxsYTIvY29yZWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL2NvbXBvbmVudHMvQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9jb21wb25lbnRzL0RhdGFUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9jb21wb25lbnRzL0RhdGVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3VtYnJlbGxhMi9jb3JlYnVuZGxlL1Jlc291cmNlcy9hc3NldHMvY29tcG9uZW50cy9EYXRlVGltZVBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9jb21wb25lbnRzL0ZpbGVVcGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3VtYnJlbGxhMi9jb3JlYnVuZGxlL1Jlc291cmNlcy9hc3NldHMvY29tcG9uZW50cy9TZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci91bWJyZWxsYTIvY29yZWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL2NvbXBvbmVudHMvVGFnc0lucHV0LmpzIiwid2VicGFjazovLy8uL3ZlbmRvci91bWJyZWxsYTIvY29yZWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL2NvbXBvbmVudHMvVG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9jb3JlL0FqYXhDYWxsYmFja0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3VtYnJlbGxhMi9jb3JlYnVuZGxlL1Jlc291cmNlcy9hc3NldHMvY29yZS9BamF4SGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9jb3JlL0FqYXhKc1Jlc3BvbnNlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9jb3JlL0JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3VtYnJlbGxhMi9jb3JlYnVuZGxlL1Jlc291cmNlcy9hc3NldHMvY29yZS9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3VtYnJlbGxhMi9jb3JlYnVuZGxlL1Jlc291cmNlcy9hc3NldHMvY29yZS9VbWJyZWxsYUFwcC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9qcXVlcnktcGx1Z2lucy9TZXJpYWxpemVGb3JtVG9Gb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9qcXVlcnktcGx1Z2lucy9TZXJpYWxpemVGb3JtVG9Kc29uLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci91bWJyZWxsYTIvY29yZWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL2pxdWVyeS1wbHVnaW5zL19qcXVlcnlfcGx1Z2lucy5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9wbHVnaW5zL0NvbmZpcm1Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9wbHVnaW5zL1NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3VtYnJlbGxhMi9jb3JlYnVuZGxlL1Jlc291cmNlcy9hc3NldHMvdXRpbHMvQWpheFV0aWxzLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci91bWJyZWxsYTIvY29yZWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL3V0aWxzL1V0aWxzLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci91bWJyZWxsYTIvY29yZWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci91bWJyZWxsYTIvY29yZWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9fdmVuZG9yLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFwcCIsIm1vdW50IiwiYmluZCIsInVzZUFqYXhIYW5kbGVyIiwiQWpheENhbGxiYWNrSGFuZGxlciIsInJlc3BvbnNlIiwibWVzc2FnZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwYXJhbXMiLCJyZXF1ZXN0T2JqZWN0IiwiZXJyb3IiLCJlcnJvclRocm93biIsImNvbXBsZXRlIiwiJCIsImZuIiwiZGF0YVRhYmxlIiwiZXh0IiwiZXJyTW9kZSIsInRvYXN0Iiwib3B0aW9ucyIsInBvc2l0aW9uIiwiVW1icmVsbGFBcHAiLCJ1c2UiLCJTaWRlYmFyIiwiTGF5b3V0IiwiRGF0YVRhYmxlIiwiTm90aWZpY2F0aW9uIiwiU2VsZWN0MiIsIkFzeW5jU2VsZWN0MiIsIlRhZ3NJbnB1dCIsIkRhdGVQaWNrZXIiLCJEYXRlVGltZVBpY2tlciIsIkZpbGVVcGxvYWQiLCJDb2xsZWN0aW9uIiwiSnNSZXNwb25zZUhhbmRsZXIiLCIkdmlldyIsIiR3aW5kb3ciLCJpbml0Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGp1c3RMYXlvdXQiLCJ3aWR0aCIsImFjdGl2YXRlQ29uZGVuc2VkU2lkZWJhciIsImRlc2FjdGl2YXRlQ29uZGVuc2VkU2lkZWJhciIsImF0dHIiLCJDb21wb25lbnQiLCJyZWZyZXNoVXJsIiwiZGF0YSIsInJlZnJlc2hYaHIiLCJfYmluZCIsIl9yZWZyZXNoIiwibG9jYXRpb24iLCJocmVmIiwiY3VycmVudFRhcmdldCIsInBvbGwiLCJhYm9ydCIsIl9pc09wZW4iLCJnZXQiLCJub3RpZmljYXRpb25zIiwiX3JlbmRlckxpc3QiLCJzZXRUaW1lb3V0IiwiJGxpc3QiLCJmaW5kIiwiaHRtbCIsIm5vdGlmaWNhdGlvbiIsInRwbCIsIl9nZXRUZW1wbGF0ZSIsImFwcGVuZCIsIm11c3RhY2hlIiwicmVuZGVyIiwibGVuZ3RoIiwiaGFzQ2xhc3MiLCJ0cGxJZCIsInN0YXRlIiwid2FybiIsIm1ldGlzTWVudSIsImRvY3VtZW50IiwidG9nZ2xlQ2xhc3MiLCJzZWxlY3QyIiwiZGF0YV9vcHRpb25zIiwiSlNPTiIsInBhcnNlIiwiVXRpbHMiLCJkZWNvZGVfaHRtbCIsInMyX29wdGlvbnMiLCJyZXF1ZXN0Iiwic2Nyb2xsIiwicHJlZml4IiwiRGF0ZSIsIm5vdyIsImNhY2hlIiwidXJsIiwiZGVsYXkiLCJ0cmFuc3BvcnQiLCJzdWNjZXNzIiwiZmFpbHVyZSIsImtleSIsInBhZ2UiLCJxIiwiY2FjaGVUaW1lb3V0IiwidGltZSIsImFqYXgiLCJmYWlsIiwiZG9uZSIsImFsd2F5cyIsInVuZGVmaW5lZCIsInJldCIsInRlcm0iLCJwcm9jZXNzUmVzdWx0cyIsInJlc3VsdHMiLCJtb3JlIiwiaXNBcnJheSIsInBhZ2luYXRpb24iLCJ0ZXh0Iiwib3B0aW9uIiwibXVzdGFjaGVUZW1wbGF0ZSIsIiR0ZW1wbGF0ZSIsImlkIiwiY29uZmlndXJlT3B0aW9ucyIsInNob3ciLCJwcm90b3R5cGUiLCJwcm90b3R5cGVfbmFtZSIsImluZGV4IiwibWF4TGVuZ3RoIiwidG9nZ2xlQWRkIiwicmVnZXhwIiwiUmVnRXhwIiwiJG5ld1JvdyIsInJlcGxhY2UiLCJmaXJzdCIsInRyaWdnZXIiLCJjbG9zZXN0IiwicmVtb3ZlIiwib3JkZXIiLCJlYWNoIiwiaSIsInZhbCIsImRyYWd1bGEiLCJjb250YWluZXJzIiwibW92ZXMiLCJlbCIsInNvdXJjZSIsImhhbmRsZSIsInNpYmxpbmciLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJtaXJyb3JDb250YWluZXIiLCJjb3VudCIsIiR0YWJsZSIsInRhYmxlIiwiJHRvb2xiYXIiLCJ0b29sYmFyIiwidGltZXIiLCJzdGFydEF1dG9SZWxvYWQiLCJUb29sYmFyIiwicmVsb2FkIiwiJGUiLCJleHRyYURhdGFUYWciLCJnZXRUYWJsZURhdGEiLCJnZXRTZWxlY3RlZERhdGEiLCJBamF4VXRpbHMiLCJoYW5kbGVMaW5rIiwicGFyYW0iLCJpcyIsImRpZmYiLCJlZGl0IiwiY2hhbmdlU2V0IiwiaWVuIiwicm93Iiwibm9kZSIsInB1c2giLCJvbGREYXRhIiwibmV3RGF0YSIsImFqYXhfdXJsIiwiJHRhcmdldCIsIiRjaGVja2JveGVzIiwicHJvcCIsIiR0ciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzZXR0aW5ncyIsInRlY2hOb3RlIiwic3RvcEF1dG9SZWxvYWQiLCJkIiwiZ2V0RGF0YSIsInRvb2x0aXAiLCJ0cmVlZ3JpZCIsInBvcG92ZXIiLCJjb250YWluZXIiLCJwYWdpbmciLCJkcmF3IiwiaWRzIiwiZWx0IiwicG9sbEludGVydmFsIiwiX19hdXRvUmVsb2FkIiwiY2xlYXJUaW1lb3V0IiwiZGF0ZXBpY2tlciIsImZvcm1hdCIsImxhbmd1YWdlIiwiYXV0b2Nsb3NlIiwiZGF0ZXRpbWVwaWNrZXIiLCJsb2NhbGUiLCJzaWRlQnlTaWRlIiwia2VlcE9wZW4iLCJ0b29sYmFyUGxhY2VtZW50Iiwic2hvd0NsZWFyIiwiaWNvbnMiLCJkYXRlIiwidXAiLCJkb3duIiwicHJldmlvdXMiLCJuZXh0IiwidG9kYXkiLCJjbGVhciIsImNsb3NlIiwibWluRGF0ZSIsIm1heERhdGUiLCIkaW5wdXRGaWxlIiwiJGlucHV0RW50aXR5IiwiJGlucHV0VHh0IiwiJGlucHV0RGVsZXRlIiwiJHJlbW92ZUJ0biIsIiRkb3dubG9hZEJ0biIsIiRicm93c2VCdG4iLCJjbGljayIsInJlZnJlc2giLCJyZXBsYWNlV2l0aCIsImNsb25lIiwiZmlsZXMiLCJmaWxlIiwibmFtZSIsImJ5dGVzX3RvX3NpemUiLCJzaXplIiwiZWxlbWVudCIsImV4cG9zZWREYXRhIiwiZGF0YVR5cGUiLCJpdGVtcyIsInRhZ3NpbnB1dCIsIiRmb3JtIiwiZGVmYXVsdE9wdGlvbnMiLCJzdWJtaXRPbkNoYW5nZSIsIm9uU3VibWl0Iiwic2VyaWFsaXplRm9ybVRvSnNvbiIsIl9zdWNjZXNzIiwiX2Vycm9yIiwiX2NvbXBsZXRlIiwiQWpheEhhbmRsZXIiLCJBamF4SnNSZXNwb25zZUhhbmRsZXIiLCJBcnJheSIsImRvQWN0aW9uIiwic3RhdHVzIiwiaWNvbiIsImFjdGlvbnMiLCJleGVjdXRlX2pzIiwiZXZhbCIsInZhbHVlIiwic3BsaXQiLCJyZWRpcmVjdCIsIm9wZW5fbW9kYWwiLCIkbW9kYWwiLCIkb3BlbmVkX21vZGFsIiwidGFyZ2V0IiwiJHNjcmlwdHMiLCJzIiwibW9kYWwiLCJjbG9zZV9tb2RhbCIsInJlbG9hZF90YWJsZSIsInNlbGVjdG9yIiwibWFwIiwiam9pbiIsImNvbXBvbmVudF9jYWxsIiwibWV0aG9kIiwiYXJncyIsImdldENvbXBvbmVudHMiLCJjb21wb25lbnQiLCJ1cGRhdGUiLCJCaW5kIiwibmV3RG9tIiwiYmluZFRvb2x0aXAiLCJiaW5kVG9hc3QiLCJiaW5kUG9wb3ZlciIsImJpbmRGb3JtIiwiYmluZExpbmsiLCJoYW5kbGVGb3JtIiwiY29tcG9uZW50UmVnaXN0cnkiLCJhamF4SGFuZGxlclJlZ2lzdHJ5IiwiJGNvbnRhaW5lciIsImNvbXBvbmVudENsYXNzIiwiY29uc3RydWN0b3IiLCJjb21wb25lbnRzIiwiaGFuZGxlck5hbWUiLCJoYW5kbGVyIiwic2VyaWFsaXplRm9ybVRvRm9ybURhdGEiLCIkb2JqIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInRhZyIsInNlcmlhbGl6ZUFycmF5IiwialF1ZXJ5Iiwic2VsZiIsImpzb24iLCJwdXNoX2NvdW50ZXJzIiwicGF0dGVybnMiLCJvcHRzIiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCJidWlsZCIsImJhc2UiLCJwdXNoX2NvdW50ZXIiLCJ2YWxpZGF0ZSIsInRlc3QiLCJlbXB0eSIsInRyaW0iLCJrIiwia2V5cyIsIm1hdGNoIiwibWVyZ2UiLCJyZXZlcnNlX2tleSIsInBvcCIsImZpeGVkIiwibmFtZWQiLCJDb25maXJtTW9kYWwiLCJjYW5jZWxfdGV4dCIsImNvbmZpcm1fdGV4dCIsImNvbmZpcm0iLCJoaWRlIiwidGVtcGxhdGUiLCJ3aGljaCIsIlNwaW5uZXIiLCJhZnRlciIsIiRzcGlubmVyIiwieGhyX2lkIiwic3Bpbm5lciIsImdldEFqYXhIYW5kbGVyIiwieGhyUGVuZGluZ1JlZ2lzdHJ5SWRzIiwiaW5jbHVkZXMiLCJncmVwIiwiYnl0ZXMiLCJzaXplcyIsInBhcnNlSW50IiwiTWF0aCIsImZsb29yIiwicm91bmQiLCJwb3ciLCJ0eHQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidGFncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUFBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxLQUFYO0FBQ0FGLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXRSxJQUFYLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBRUFGLEdBQUcsQ0FBQ0csY0FBSixDQUFtQixRQUFuQixFQUE2QixJQUFJQyw4RUFBSixDQUN6QixVQUFDQyxRQUFELEVBQWM7QUFBQSw2Q0FDWUEsUUFEWjtBQUFBOztBQUFBO0FBQ1Ysd0RBQWdDO0FBQUEsVUFBckJDLE9BQXFCOztBQUM1QixVQUFJQSxPQUFPLENBQUNDLE1BQVIsS0FBbUIsS0FBdkIsRUFBOEI7QUFDMUJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFPLENBQUNJLE1BQVIsQ0FBZSxLQUFmLENBQVo7QUFDSDtBQUNKO0FBTFM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1iLENBUHdCLEVBUXpCLFVBQUNDLGFBQUQsRUFBZ0JDLEtBQWhCLEVBQXVCQyxXQUF2QixFQUF1QyxDQUFFLENBUmhCLEVBU3pCLFVBQUNDLFFBQUQsRUFBYyxDQUFFLENBVFMsQ0FBN0IsRTs7Ozs7Ozs7Ozs7QUNGQSx1Qzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUE3RDtBQUNIOzs7Z0NBRWtCeEUsSSxFQUFNO0FBQ3JCLFVBQUkwUixHQUFHLEdBQUc3USxRQUFRLENBQUM4USxhQUFULENBQXVCLFVBQXZCLENBQVY7QUFDQUQsU0FBRyxDQUFDRSxTQUFKLEdBQWdCNVIsSUFBaEI7QUFDQSxhQUFPMFIsR0FBRyxDQUFDekYsS0FBWDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBcFEsTUFBTSxDQUFDK1MsTUFBUCxHQUFnQkEsNkNBQWhCO0FBQ0EvUyxNQUFNLENBQUNnQixDQUFQLEdBQVcrUiw2Q0FBWCxDLENBRUE7O0FBQ0E7QUFDQS9TLE1BQU0sQ0FBQ3dFLFFBQVAsR0FBa0JBLCtDQUFsQjtBQUNBQSwrQ0FBUSxDQUFDd1IsSUFBVCxHQUFnQixDQUFFLElBQUYsRUFBUSxJQUFSLENBQWhCLEM7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7Q0FHQTs7QUFDQTtBQUVBO0FBQ0E7Q0FHQTs7QUFDQTtDQUdBOztDQUdBOztBQUNBO0NBR0E7O0NBR0E7O0NBR0E7O0NBR0E7O0NBR0EiLCJmaWxlIjoiYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYWRtaW4uc2Nzcyc7XG5pbXBvcnQgJ3VtYnJlbGxhX2FkbWluL0FkbWluJztcblxuaW1wb3J0ICcuL0FqYXhIYW5kbGVyJztcblxud2luZG93LmFwcC5tb3VudCgpO1xud2luZG93LmFwcC5iaW5kKCk7IiwiaW1wb3J0IEFqYXhDYWxsYmFja0hhbmRsZXIgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29yZS9BamF4Q2FsbGJhY2tIYW5kbGVyXCI7XG5cbmFwcC51c2VBamF4SGFuZGxlcignY3VzdG9tJywgbmV3IEFqYXhDYWxsYmFja0hhbmRsZXIoXG4gICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgbWVzc2FnZSBvZiByZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc2F5Jykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UucGFyYW1zWydtc2cnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIChyZXF1ZXN0T2JqZWN0LCBlcnJvciwgZXJyb3JUaHJvd24pID0+IHt9LFxuICAgIChjb21wbGV0ZSkgPT4ge30sXG4pKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi1iZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4tYmQuanNcIixcblx0XCIuL2JuLWJkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi1iZC5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taW4uanNcIixcblx0XCIuL2VuLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLXNnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1zZy5qc1wiLFxuXHRcIi4vZW4tc2cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtbXhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLW14LmpzXCIsXG5cdFwiLi9lcy1teC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtbXguanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpbC5qc1wiLFxuXHRcIi4vZmlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWRldmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tZGV2YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWRldmEuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL29jLWxuY1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvb2MtbG5jLmpzXCIsXG5cdFwiLi9vYy1sbmMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RrLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1tb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtbW8uanNcIixcblx0XCIuL3poLW1vLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImltcG9ydCAndW1icmVsbGFfY29yZS92ZW5kb3IvX3ZlbmRvcic7XG5pbXBvcnQgJ3VtYnJlbGxhX2NvcmUvanF1ZXJ5LXBsdWdpbnMvX2pxdWVyeV9wbHVnaW5zJztcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcInVtYnJlbGxhX2FkbWluL2NvbXBvbmVudHMvU2lkZWJhclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwidW1icmVsbGFfYWRtaW4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSBcInVtYnJlbGxhX2FkbWluL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uXCI7XG5cbmltcG9ydCBEYXRhVGFibGUgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29tcG9uZW50cy9EYXRhVGFibGVcIjtcbmltcG9ydCBTZWxlY3QyIGZyb20gXCJ1bWJyZWxsYV9jb3JlL2NvbXBvbmVudHMvU2VsZWN0MlwiO1xuaW1wb3J0IEFzeW5jU2VsZWN0MiBmcm9tIFwidW1icmVsbGFfY29yZS9jb21wb25lbnRzL0FzeW5jU2VsZWN0MlwiO1xuaW1wb3J0IFRhZ3NJbnB1dCBmcm9tIFwidW1icmVsbGFfY29yZS9jb21wb25lbnRzL1RhZ3NJbnB1dFwiO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29tcG9uZW50cy9EYXRlUGlja2VyXCI7XG5pbXBvcnQgRGF0ZVRpbWVQaWNrZXIgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29tcG9uZW50cy9EYXRlVGltZVBpY2tlclwiO1xuaW1wb3J0IEZpbGVVcGxvYWQgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29tcG9uZW50cy9GaWxlVXBsb2FkXCI7XG5pbXBvcnQgQ29sbGVjdGlvbiBmcm9tIFwidW1icmVsbGFfY29yZS9jb21wb25lbnRzL0NvbGxlY3Rpb25cIjtcblxuLy8gRGVmYXVsdCBqcXVlcnkgcGx1Z2luIG9wdGlvbnNcbiQuZm4uZGF0YVRhYmxlLmV4dC5lcnJNb2RlID0gJ3Rocm93JztcbiQudG9hc3Qub3B0aW9ucy5wb3NpdGlvbiA9ICdib3R0b20tcmlnaHQnO1xuXG4vLyBBcHBcbmltcG9ydCBVbWJyZWxsYUFwcCBmcm9tIFwidW1icmVsbGFfY29yZS9jb3JlL1VtYnJlbGxhQXBwXCI7XG5pbXBvcnQgSnNSZXNwb25zZUhhbmRsZXIgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29yZS9BamF4SnNSZXNwb25zZUhhbmRsZXJcIjtcblxuY29uc3QgYXBwID0gbmV3IFVtYnJlbGxhQXBwKCk7XG53aW5kb3cuYXBwID0gYXBwO1xuXG5hcHAudXNlKCdbZGF0YS1tb3VudD1TaWRlYmFyXScsIFNpZGViYXIpO1xuYXBwLnVzZSgnW2RhdGEtbW91bnQ9TGF5b3V0XScsIExheW91dCk7XG5hcHAudXNlKCdbZGF0YS1tb3VudD1EYXRhVGFibGVdJywgRGF0YVRhYmxlKTtcbmFwcC51c2UoJ1tkYXRhLW1vdW50PU5vdGlmaWNhdGlvbl0nLCBOb3RpZmljYXRpb24pO1xuXG5hcHAudXNlKCcuanMtc2VsZWN0MicsIFNlbGVjdDIpO1xuYXBwLnVzZSgnLmpzLWFzeW5jLXNlbGVjdDInLCBBc3luY1NlbGVjdDIpO1xuYXBwLnVzZSgnLmpzLXRhZycsIFRhZ3NJbnB1dCk7XG5hcHAudXNlKCcuanMtZGF0ZXBpY2tlcicsIERhdGVQaWNrZXIpO1xuYXBwLnVzZSgnLmpzLWRhdGV0aW1lcGlja2VyJywgRGF0ZVRpbWVQaWNrZXIpO1xuYXBwLnVzZSgnLmpzLXVtYnJlbGxhLWZpbGV1cGxvYWQnLCBGaWxlVXBsb2FkKTtcbmFwcC51c2UoJy5qcy11bWJyZWxsYS1jb2xsZWN0aW9uJywgQ29sbGVjdGlvbik7XG5cbmFwcC51c2VBamF4SGFuZGxlcignZGVmYXVsdCcsIG5ldyBKc1Jlc3BvbnNlSGFuZGxlcigpKTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJ1bWJyZWxsYV9jb3JlL2NvcmUvQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcigkdmlldykge1xuICAgICAgICBzdXBlcigkdmlldyk7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICQod2luZG93KTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy4kd2luZG93Lm9uKCdyZXNpemUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5hZGp1c3RMYXlvdXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGp1c3RMYXlvdXQoKTtcbiAgICB9XG5cbiAgICBhZGp1c3RMYXlvdXQoKSB7XG4gICAgICAgIC8vIGluIGNhc2Ugb2Ygc21hbGwgc2l6ZSwgYWRkIGNsYXNzIGVubGFyZ2UgdG8gaGF2ZSBtaW5pbWFsIG1lbnVcbiAgICAgICAgaWYgKHRoaXMuJHdpbmRvdy53aWR0aCgpID49IDc2NyAmJiB0aGlzLiR3aW5kb3cud2lkdGgoKSA8PSAxMDI4KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlQ29uZGVuc2VkU2lkZWJhcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXNhY3RpdmF0ZUNvbmRlbnNlZFNpZGViYXIoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhY3RpdmF0ZUNvbmRlbnNlZFNpZGViYXIoKSB7XG4gICAgICAgIHRoaXMuJHZpZXcuYXR0cignZGF0YS1sZWZ0YmFyLWNvbXBhY3QtbW9kZScsICdjb25kZW5zZWQnKTtcbiAgICB9XG5cbiAgICBkZXNhY3RpdmF0ZUNvbmRlbnNlZFNpZGViYXIoKSB7XG4gICAgICAgIHRoaXMuJHZpZXcuYXR0cignZGF0YS1sZWZ0YmFyLWNvbXBhY3QtbW9kZScsIGZhbHNlKTtcbiAgICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwidW1icmVsbGFfY29yZS9jb3JlL0NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpZmljYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGljIHBvbGwgPSAxMDAwMDsgLy8gMTBzXG5cbiAgICBjb25zdHJ1Y3Rvcigkdmlldykge1xuICAgICAgICBzdXBlcigkdmlldyk7XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoVXJsID0gJHZpZXcuZGF0YSgncmVmcmVzaC11cmwnKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoWGhyID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9iaW5kKCk7XG4gICAgfVxuXG4gICAgX2JpbmQoKSB7XG4gICAgICAgIHRoaXMuJHZpZXcub24oJ3Nob3duLmJzLmRyb3Bkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcmVmcmVzaCh0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kdmlldy5vbignY2xpY2snLCAnW2RhdGEtaHJlZl0nLCAoZSkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAkKGUuY3VycmVudFRhcmdldCkuZGF0YSgnaHJlZicpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoIE5vdGlmaWNhdGlvbnNcbiAgICAgKi9cbiAgICBfcmVmcmVzaChwb2xsID0gdHJ1ZSkge1xuICAgICAgICBpZiAodGhpcy5yZWZyZXNoWGhyKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hYaHIuYWJvcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9pc09wZW4oKSkge1xuICAgICAgICAgICAgJC5nZXQodGhpcy5yZWZyZXNoVXJsLCAobm90aWZpY2F0aW9ucykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlckxpc3Qobm90aWZpY2F0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHBvbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWZyZXNoKClcbiAgICAgICAgICAgICAgICAgICAgfSwgTm90aWZpY2F0aW9uLnBvbGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGxpc3Qgb2Ygbm90aWZpY2F0aW9uc1xuICAgICAqL1xuICAgIF9yZW5kZXJMaXN0KG5vdGlmaWNhdGlvbnMpIHtcbiAgICAgICAgY29uc3QgJGxpc3QgPSB0aGlzLiR2aWV3LmZpbmQoJy5qcy1ub3RpZmljYXJpb24tbGlzdCAuc2ltcGxlYmFyLWNvbnRlbnQnKTtcbiAgICAgICAgJGxpc3QuaHRtbCgnJyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJGxpc3RbMF0pO1xuXG4gICAgICAgIGZvciAobGV0IG5vdGlmaWNhdGlvbiBvZiBub3RpZmljYXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCB0cGwgPSB0aGlzLl9nZXRUZW1wbGF0ZShub3RpZmljYXRpb24pO1xuICAgICAgICAgICAgaWYgKHRwbCkge1xuICAgICAgICAgICAgICAgICRsaXN0LmFwcGVuZChtdXN0YWNoZS5yZW5kZXIodHBsLCBub3RpZmljYXRpb24pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub3RpZmljYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgJGxpc3QuYXBwZW5kKG11c3RhY2hlLnJlbmRlcigkKCcjbm90aWZpY2F0aW9uLWVtcHR5LXRwbCcpLmh0bWwoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2lzT3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZpZXcuZmluZCgnLmRyb3Bkb3duLW1lbnUnKS5oYXNDbGFzcygnc2hvdycpO1xuICAgIH1cblxuICAgIF9nZXRUZW1wbGF0ZShub3RpZmljYXRpb24pIHtcbiAgICAgICAgY29uc3QgdHBsSWQgPSBgI25vdGlmaWNhdGlvbi1mdy0ke25vdGlmaWNhdGlvbi5zdGF0ZX0tdHBsYDtcbiAgICAgICAgaWYgKCQodHBsSWQpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICQodHBsSWQpLmh0bWwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTm8gdGVtcGxhdGUgZm91bmQgd2l0aCBpZCAnICsgdHBsSWQpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwidW1icmVsbGFfY29yZS9jb3JlL0NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcigkdmlldykge1xuICAgICAgICBzdXBlcigkdmlldyk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuJHZpZXcubWV0aXNNZW51KCk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnV0dG9uLW1lbnUtbW9iaWxlJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnc2lkZWJhci1lbmFibGUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCBVdGlscyBmcm9tIFwidW1icmVsbGFfY29yZS91dGlscy9VdGlsc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwidW1icmVsbGFfY29yZS9jb3JlL0NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3luY1NlbGVjdDIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoJHZpZXcpIHtcbiAgICAgICAgc3VwZXIoJHZpZXcpO1xuXG4gICAgICAgIGlmICgkLnNlbGVjdDIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCB1c2UgQXN5bmNTZWxlY3QyLCBzZWxlY3QyIHBsdWdpbiBub3QgbG9hZGVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgY29uZmlndXJlT3B0aW9ucygpIHtcbiAgICAgICAgbGV0IGRhdGFfb3B0aW9ucyA9IHRoaXMuJHZpZXcuZGF0YSgnb3B0aW9ucycpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IGRhdGFfb3B0aW9ucyA/IEpTT04ucGFyc2UoVXRpbHMuZGVjb2RlX2h0bWwoZGF0YV9vcHRpb25zKSkgOiB7fTtcbiAgICAgICAgdGhpcy5zMl9vcHRpb25zID0gdGhpcy5vcHRpb25zWydzZWxlY3QyJ10gPyB0aGlzLm9wdGlvbnNbJ3NlbGVjdDInXSA6IHt9O1xuXG4gICAgICAgIGxldCByZXF1ZXN0O1xuICAgICAgICBsZXQgc2Nyb2xsID0gdGhpcy5vcHRpb25zWydzY3JvbGwnXSB8fCBmYWxzZTtcbiAgICAgICAgbGV0IHByZWZpeCA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBjYWNoZSA9IFtdO1xuXG4gICAgICAgIHRoaXMuczJfb3B0aW9uc1snYWpheCddID0ge1xuICAgICAgICAgICAgdXJsOiB0aGlzLm9wdGlvbnNbJ2FqYXhfdXJsJ10gfHwgbnVsbCxcbiAgICAgICAgICAgIGRlbGF5OiB0aGlzLm9wdGlvbnNbJ2FqYXhfZGVsYXknXSB8fCAyNTAsXG4gICAgICAgICAgICB0cmFuc3BvcnQ6IChwYXJhbXMsIHN1Y2Nlc3MsIGZhaWx1cmUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBpcyBjYWNoaW5nIGVuYWJsZWQ/XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uc1snYWpheF9jYWNoZSddKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRyeSB0byBtYWtlIHRoZSBrZXkgdW5pcXVlIHRvIG1ha2UgaXQgbGVzcyBsaWtlbHkgZm9yIGEgcGFnZStxIHRvIG1hdGNoIGEgcmVhbCBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gcHJlZml4ICsgJyBwYWdlOicgKyAocGFyYW1zLmRhdGEucGFnZSB8fCAxKSArICcgJyArIHBhcmFtcy5kYXRhLnE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWNoZVRpbWVvdXQgPSB0aGlzLm9wdGlvbnNbJ2FqYXhfY2FjaGVfdGltZW91dCddO1xuICAgICAgICAgICAgICAgICAgICAvLyBubyBjYWNoZSBlbnRyeSBmb3IgJ3Rlcm0nIG9yIHRoZSBjYWNoZSBoYXMgdGltZWQgb3V0P1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhY2hlW2tleV0gPT09ICd1bmRlZmluZWQnIHx8IChjYWNoZVRpbWVvdXQgJiYgRGF0ZS5ub3coKSA+PSBjYWNoZVtrZXldLnRpbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC5hamF4KHBhcmFtcykuZmFpbChmYWlsdXJlKS5kb25lKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVba2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogY2FjaGVUaW1lb3V0ID8gRGF0ZS5ub3coKSArIGNhY2hlVGltZW91dCA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBjYWNoZWQgZGF0YSB3aXRoIG5vIGFqYXggcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhjYWNoZVtrZXldLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gY2FjaGluZyBlbmFibGVkLiBqdXN0IGRvIHRoZSBhamF4IHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0ID0gJC5hamF4KHBhcmFtcykuZmFpbChmYWlsdXJlKS5kb25lKHN1Y2Nlc3MpLmFsd2F5cygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YTogKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXQgPSB7XG4gICAgICAgICAgICAgICAgICAgICdxJzogcGFyYW1zLnRlcm0sXG4gICAgICAgICAgICAgICAgICAgICdmaWVsZF9uYW1lJzogdGhpcy5vcHRpb25zWyduYW1lJ11cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gb25seSBzZW5kIHRoZSAncGFnZScgcGFyYW1ldGVyIGlmIHNjcm9sbGluZyBpcyBlbmFibGVkXG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICAgICAgICAgICAgICByZXRbJ3BhZ2UnXSA9IHBhcmFtcy5wYWdlIHx8IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9jZXNzUmVzdWx0czogKGRhdGEsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHRzLCBtb3JlID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0ge307XG4gICAgICAgICAgICAgICAgcGFyYW1zLnBhZ2UgPSBwYXJhbXMucGFnZSB8fCAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKCQuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0gZGF0YTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyBhc3N1bWUgcmVtb3RlIHJlc3VsdCB3YXMgcHJvcGVyIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0gZGF0YS5yZXN1bHRzO1xuICAgICAgICAgICAgICAgICAgICBtb3JlID0gZGF0YS5tb3JlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhaWxzYWZlXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnBhZ2luYXRpb24gPSB7bW9yZTogbW9yZX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnJlc3VsdHMgPSByZXN1bHRzO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9uc1sncmVuZGVyX2h0bWwnXSkge1xuICAgICAgICAgICAgdGhpcy5zMl9vcHRpb25zWydlc2NhcGVNYXJrdXAnXSA9ICh0ZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5zMl9vcHRpb25zWyd0ZW1wbGF0ZVJlc3VsdCddID0gKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24uaHRtbCA/IG9wdGlvbi5odG1sIDogb3B0aW9uLnRleHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5zMl9vcHRpb25zWyd0ZW1wbGF0ZVNlbGVjdGlvbiddID0gKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24udGV4dDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0ZW1wbGF0aW5nID9cbiAgICAgICAgICAgIGxldCBtdXN0YWNoZVRlbXBsYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uc1sndGVtcGxhdGVfc2VsZWN0b3InXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0ZW1wbGF0ZSA9ICQodGhpcy5vcHRpb25zWyd0ZW1wbGF0ZV9zZWxlY3RvciddKTtcbiAgICAgICAgICAgICAgICBpZiAoJHRlbXBsYXRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gdGVtcGxhdGUgZm91bmQgd2l0aCBzZWxlY3RvciBcIiArIHRoaXMub3B0aW9uc1sndGVtcGxhdGVfc2VsZWN0b3InXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbXVzdGFjaGVUZW1wbGF0ZSA9ICR0ZW1wbGF0ZS5odG1sKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zWyd0ZW1wbGF0ZV9odG1sJ10pIHtcbiAgICAgICAgICAgICAgICBtdXN0YWNoZVRlbXBsYXRlID0gdGhpcy5vcHRpb25zWyd0ZW1wbGF0ZV9odG1sJ107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtdXN0YWNoZVRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zMl9vcHRpb25zWyd0ZW1wbGF0ZVJlc3VsdCddID0gKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RhdGUuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS50ZXh0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoJzxzcGFuPicgKyBtdXN0YWNoZS5yZW5kZXIobXVzdGFjaGVUZW1wbGF0ZSwgc3RhdGUpICsgJzwvc3Bhbj4nKTtcblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyZU9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy4kdmlldy5zZWxlY3QyKHRoaXMuczJfb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuJHZpZXcuc2hvdygpO1xuICAgIH1cbn0iLCJpbXBvcnQgZHJhZ3VsYSBmcm9tICdkcmFndWxhJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29yZS9Db21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcigkdmlldykge1xuICAgICAgICBzdXBlcigkdmlldyk7XG5cbiAgICAgICAgdGhpcy5wcm90b3R5cGUgPSB0aGlzLiR2aWV3LmRhdGEoJ3Byb3RvdHlwZScpO1xuICAgICAgICB0aGlzLnByb3RvdHlwZV9uYW1lID0gdGhpcy4kdmlldy5kYXRhKCdwcm90b3R5cGUtbmFtZScpO1xuICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy4kdmlldy5kYXRhKCdpbmRleCcpO1xuICAgICAgICB0aGlzLm1heExlbmd0aCA9IHRoaXMuJHZpZXcuZGF0YSgnbWF4TGVuZ3RoJyk7XG5cbiAgICAgICAgdGhpcy50b2dnbGVBZGQoKTtcbiAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgfVxuXG4gICAgYmluZCgpIHtcbiAgICAgICAgLy8gYmluZCBhZGQgcm93XG4gICAgICAgIHRoaXMuJHZpZXcub24oJ2NsaWNrJywgJy5qcy1hZGQtcm93JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gMTtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAodGhpcy5wcm90b3R5cGVfbmFtZSwgXCJnXCIpO1xuICAgICAgICAgICAgY29uc3QgJG5ld1JvdyA9ICQodGhpcy5wcm90b3R5cGUucmVwbGFjZShyZWdleHAsIHRoaXMuaW5kZXgpKTtcblxuICAgICAgICAgICAgdGhpcy4kdmlldy5kYXRhKCdpbmRleCcsIHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy4kdmlldy5maW5kKCd0Ym9keScpLmZpcnN0KCkuYXBwZW5kKCRuZXdSb3cpO1xuXG4gICAgICAgICAgICAvLyBiaW5kIHJvd1xuICAgICAgICAgICAgYXBwLm1vdW50KCRuZXdSb3cpO1xuXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUFkZCgpO1xuICAgICAgICAgICAgdGhpcy4kdmlldy50cmlnZ2VyKCdmb3JtOnJvdzphZGQnLCBbJG5ld1Jvd10pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBiaW5kIGRlbGV0ZSByb3dcbiAgICAgICAgdGhpcy4kdmlldy5vbignY2xpY2snLCAnLmpzLWRlbC1yb3cnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKGUuY3VycmVudFRhcmdldCkuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQWRkKCk7XG5cbiAgICAgICAgICAgIHRoaXMuJHZpZXcudHJpZ2dlcignZm9ybTpyb3c6ZGVsJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGJlZm9yZSBzdWJtaXQgPT4gcmVmcmVzaCBpbnB1dCByb3cgb3JkZXJcbiAgICAgICAgdGhpcy4kdmlldy5jbG9zZXN0KCdmb3JtW2RhdGEtbW91bnQ9XCJGb3JtXCJdJykub24oJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBvcmRlciA9IDA7XG4gICAgICAgICAgICB0aGlzLiR2aWV3LmZpbmQoJy5qcy1vcmRlcicpLmVhY2goKGksIGUpID0+IHtcbiAgICAgICAgICAgICAgICAkKGUpLnZhbChvcmRlcik7XG4gICAgICAgICAgICAgICAgb3JkZXIrKztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzb3J0aW5nXG4gICAgICAgIGlmICh0aGlzLiR2aWV3LmRhdGEoJ3NvcnRhYmxlJykpIHtcbiAgICAgICAgICAgIGRyYWd1bGEoe1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lcnM6IFt0aGlzLiR2aWV3LmZpbmQoJ3Rib2R5JylbMF1dLFxuICAgICAgICAgICAgICAgIG1vdmVzOiBmdW5jdGlvbiAoZWwsIHNvdXJjZSwgaGFuZGxlLCBzaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1zb3J0LWhhbmRsZScpIHx8IGhhbmRsZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnanMtc29ydC1oYW5kbGUnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1pcnJvckNvbnRhaW5lcjogdGhpcy4kdmlldy5maW5kKCd0Ym9keScpWzBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdmlldy5maW5kKCd0Ym9keSB0cicpLmxlbmd0aDtcbiAgICB9XG5cbiAgICB0b2dnbGVBZGQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1heExlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuJHZpZXcuZmluZCgnLmpzLWFkZC1yb3cnKS50b2dnbGVDbGFzcygnZC1ub25lJywgdGhpcy5jb3VudCgpID49IHRoaXMubWF4TGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBUb29sYmFyIGZyb20gXCIuL1Rvb2xiYXJcIjtcbmltcG9ydCBBamF4VXRpbHMgZnJvbSBcInVtYnJlbGxhX2NvcmUvdXRpbHMvQWpheFV0aWxzXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCJ1bWJyZWxsYV9jb3JlL2NvcmUvQ29tcG9uZW50XCI7XG5cbi8qKlxuICogQ3VzdG9tIGV2ZW50IDpcbiAqIGRyYXc6YmVmb3JlXG4gKiBkcmF3OmRvbmVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVRhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCR2aWV3KSB7XG4gICAgICAgIHN1cGVyKCR2aWV3KTtcblxuICAgICAgICB0aGlzLiR0YWJsZSA9IHRoaXMuJHZpZXcuZmluZCgndGFibGUnKTtcbiAgICAgICAgdGhpcy50YWJsZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy4kdG9vbGJhciA9IHRoaXMuJHZpZXcuZmluZCgndG9vbGJhcicpO1xuICAgICAgICB0aGlzLnRvb2xiYXIgPSBudWxsO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICR2aWV3LmRhdGEoJ29wdGlvbnMnKSB8fCB7fTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5iaW5kKCk7XG5cbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhcnRBdXRvUmVsb2FkKHRoaXMub3B0aW9uc1sncG9sbF9pbnRlcnZhbCddKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyZU9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy50b29sYmFyID0gbmV3IFRvb2xiYXIodGhpcy4kdG9vbGJhciwge1xuICAgICAgICAgICAgJ3N1Ym1pdE9uQ2hhbmdlJzogdHJ1ZSxcbiAgICAgICAgICAgICdvblN1Ym1pdCc6IChlLCB0b29sYmFyKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVsb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhYmxlID0gdGhpcy4kdGFibGUuRGF0YVRhYmxlKHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgYmluZCgpIHtcbiAgICAgICAgLy8gdG9vbGJhciA9PiBoYW5kbGUgc29tZSB0b29sYmFyIGFjdGlvblxuICAgICAgICB0aGlzLiR0b29sYmFyLm9uKCdjbGljaycsICdbZGF0YS1leHRyYS1kYXRhXScsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgJGUgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBleHRyYURhdGFUYWcgPSAkZS5kYXRhKCdleHRyYS1kYXRhJyk7XG5cbiAgICAgICAgICAgIC8vIGF2b2lkIGRlZmF1bHQgYWN0aW9uXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0gW107XG4gICAgICAgICAgICBpZiAoZXh0cmFEYXRhVGFnID09PSAnZHRfZmlsdGVyJykge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLmdldFRhYmxlRGF0YSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGV4dHJhRGF0YVRhZyA9PT0gJ2R0X3NlbGVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5nZXRTZWxlY3RlZERhdGEoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZG8gYWpheCBjYWxsIGFuZCBzZW5kIGV4dHJhIHBhcmFtc1xuICAgICAgICAgICAgaWYgKCRlLmRhdGEoJ3hocicpKSB7XG4gICAgICAgICAgICAgICAgQWpheFV0aWxzLmhhbmRsZUxpbmsoJGUsIHtkYXRhOiBkYXRhfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCRlLmF0dHIoJ2hyZWYnKSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJGUuYXR0cignaHJlZicpICsgJz8nICsgJC5wYXJhbShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcm93IHRvZ2dsZVxuICAgICAgICB0aGlzLiR0YWJsZS5vbignY2hhbmdlJywgJy5qcy10b2dnbGUtd2lkZ2V0IGlucHV0W3R5cGU9Y2hlY2tib3hdJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgaWYgKCRlLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgQWpheFV0aWxzLmdldCh7dXJsOiAkZS5kYXRhKCd5ZXMtdXJsJyl9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQWpheFV0aWxzLmdldCh7dXJsOiAkZS5kYXRhKCduby11cmwnKX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyByb3cgcmUtb3JkZXJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uc1sncm93UmVvcmRlciddKSB7XG4gICAgICAgICAgICB0aGlzLnRhYmxlLm9uKCdyb3ctcmVvcmRlcicsIChlLCBkaWZmLCBlZGl0KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNoYW5nZVNldCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBpZW4gPSBkaWZmLmxlbmd0aDsgaSA8IGllbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IHRoaXMudGFibGUucm93KGRpZmZbaV0ubm9kZSkuaWQoKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlU2V0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAnb2xkX3NlcXVlbmNlJzogJChkaWZmW2ldLm9sZERhdGEpLmRhdGEoJ3NlcXVlbmNlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAnbmV3X3NlcXVlbmNlJzogJChkaWZmW2ldLm5ld0RhdGEpLmRhdGEoJ3NlcXVlbmNlJylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGFqYXhfdXJsID0gdGhpcy5vcHRpb25zWydyb3dSZW9yZGVyJ11bJ3VybCddO1xuICAgICAgICAgICAgICAgIGlmIChhamF4X3VybCkge1xuICAgICAgICAgICAgICAgICAgICBBamF4VXRpbHMuZ2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYWpheF91cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoYW5nZV9zZXQnOiBjaGFuZ2VTZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByb3cgc2VsZWN0XG4gICAgICAgIHRoaXMudGFibGUub24oJ2NsaWNrJywgJ3RoZWFkIC5qcy1hY3Rpb24tc2VsZWN0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgbGV0ICRjaGVja2JveGVzID0gdGhpcy4kdGFibGUuZmluZCgndGJvZHkgdHIgdGQuanMtc2VsZWN0IGlucHV0W3R5cGU9Y2hlY2tib3hdJyk7XG4gICAgICAgICAgICAkY2hlY2tib3hlcy5wcm9wKCdjaGVja2VkJywgJHRhcmdldC5kYXRhKCdmaWx0ZXInKSA9PT0gJ2FsbCcpO1xuICAgICAgICAgICAgJGNoZWNrYm94ZXMudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGFibGUub24oJ2NoYW5nZScsICd0Ym9keSB0ciB0ZC5qcy1zZWxlY3QgaW5wdXRbdHlwZT1jaGVja2JveF0nLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBsZXQgJHRyID0gJHRhcmdldC5jbG9zZXN0KCd0cicpO1xuICAgICAgICAgICAgaWYgKCR0YXJnZXQucHJvcCgnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgJHRyLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkdHIucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGRlZmF1bHQgZXJyb3IgaGFuZGxlclxuICAgICAgICB0aGlzLnRhYmxlLm9uKCdlcnJvci5kdCcsIChlLCBzZXR0aW5ncywgdGVjaE5vdGUsIG1lc3NhZ2UpID0+IHtcblxuICAgICAgICAgICAgbGV0IGh0bWwgPSAnPHRyPic7XG4gICAgICAgICAgICBodG1sICs9ICc8dGQgY2xhc3M9XCJ0ZXh0LWRhbmdlciB0ZXh0LWNlbnRlclwiIGNvbHNwYW49XCIxMDAlXCI+JztcbiAgICAgICAgICAgIGh0bWwgKz0gJzxpIGNsYXNzPVwibWRpIG1kaS1hbGVydC1jaXJjbGUtb3V0bGluZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gSW1wb3NzaWJsZSBkZSBjaGFyZ2VyIGxlcyBkb25uw6llcyc7XG4gICAgICAgICAgICBodG1sICs9ICc8L3RkPic7XG4gICAgICAgICAgICBodG1sICs9ICc8L3RyPic7XG5cbiAgICAgICAgICAgIHRoaXMuJHZpZXcuZmluZCgndGJvZHknKS5odG1sKGh0bWwpO1xuICAgICAgICAgICAgdGhpcy5zdG9wQXV0b1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25maWd1cmVPcHRpb25zKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnNbJ2FqYXgnXVsnZGF0YSddID0gKGQpID0+IHtcbiAgICAgICAgICAgIC8vIGF2b2lkIHNlbmRpbmcgdW51c2VkIHBhcmFtc1xuICAgICAgICAgICAgZGVsZXRlIGRbJ2NvbHVtbnMnXTtcbiAgICAgICAgICAgIGRlbGV0ZSBkWydzZWFyY2gnXTtcbiAgICAgICAgICAgIHJldHVybiB7Li4uZCwgLi4udGhpcy5vcHRpb25zWydhamF4X2RhdGEnXSwgLi4udGhpcy50b29sYmFyLmdldERhdGEoKX07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub3B0aW9uc1sncHJlRHJhd0NhbGxiYWNrJ10gPSAoc2V0dGluZ3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHZpZXcudHJpZ2dlcignZHJhdzpiZWZvcmUnKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vcHRpb25zWydkcmF3Q2FsbGJhY2snXSA9IChzZXR0aW5ncykgPT4ge1xuICAgICAgICAgICAgdGhpcy4kdmlldy50cmlnZ2VyKCdkcmF3OmRvbmUnKTtcblxuICAgICAgICAgICAgLy8gdG9vbHRpcFxuICAgICAgICAgICAgdGhpcy4kdmlldy5maW5kKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuXG4gICAgICAgICAgICAvLyB0cmVlZ3JpZFxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uc1sndHJlZSddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kdGFibGUudHJlZWdyaWQoe1xuICAgICAgICAgICAgICAgICAgICAndHJlZUNvbHVtbic6IHRoaXMub3B0aW9uc1sndHJlZV9jb2x1bW4nXSxcbiAgICAgICAgICAgICAgICAgICAgJ2luaXRpYWxTdGF0ZSc6IHRoaXMub3B0aW9uc1sndHJlZV9zdGF0ZSddXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHBvcG92ZXJcbiAgICAgICAgICAgIHRoaXMuJHRhYmxlLmZpbmQoJ1tkYXRhLXRvZ2dsZT1wb3BvdmVyXScpLnBvcG92ZXIoe1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kdGFibGUsXG4gICAgICAgICAgICAgICAgaHRtbDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVsb2FkKHBhZ2luZyA9IHRydWUpIHtcbiAgICAgICAgdGhpcy4kdGFibGUuRGF0YVRhYmxlKCkuZHJhdyhwYWdpbmcpO1xuICAgIH1cblxuICAgIGRpc3BsYXlTcGlubmVyKCkge1xuICAgICAgICB0aGlzLiR0YWJsZS5maW5kKCd0Ym9keScpLmh0bWwodGhpcy4kdGFibGUuZmluZCgndGJvZHknKS5kYXRhKCdzcGlubmVyJykpO1xuICAgIH1cblxuICAgIGdldFNlbGVjdGVkRGF0YSgpIHtcbiAgICAgICAgbGV0IGlkcyA9IFtdO1xuICAgICAgICB0aGlzLiR0YWJsZS5maW5kKCd0Ym9keSB0ci5zZWxlY3RlZFtkYXRhLWlkXScpLmVhY2goKGUsIGVsdCkgPT4ge1xuICAgICAgICAgICAgaWRzLnB1c2goJChlbHQpLmRhdGEoJ2lkJykpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHsnaWRzJzogaWRzfTtcbiAgICB9XG5cbiAgICBnZXRUYWJsZURhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlLmFqYXgucGFyYW1zKCk7XG4gICAgfVxuXG4gICAgc3RhcnRBdXRvUmVsb2FkKHBvbGxJbnRlcnZhbCkge1xuICAgICAgICB0aGlzLnBvbGxJbnRlcnZhbCA9IHBvbGxJbnRlcnZhbDtcbiAgICAgICAgaWYgKHRoaXMucG9sbEludGVydmFsID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fX2F1dG9SZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0b3BBdXRvUmVsb2FkKCkge1xuICAgICAgICB0aGlzLnBvbGxJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfX2F1dG9SZWxvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvbGxJbnRlcnZhbCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2F1dG9SZWxvYWQoKTtcbiAgICAgICAgICAgIH0sIHRoaXMucG9sbEludGVydmFsICogMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJ1bWJyZWxsYV9jb3JlL2NvcmUvQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoJHZpZXcpIHtcbiAgICAgICAgc3VwZXIoJHZpZXcpO1xuXG4gICAgICAgIGlmICgkLmRhdGVwaWNrZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCB1c2UgQXN5bmNTZWxlY3QyLCBkYXRlcGlja2VyIHBsdWdpbiBub3QgbG9hZGVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgZm9ybWF0OiB0aGlzLiR2aWV3LmRhdGEoJ2Zvcm1hdCcpID8gdGhpcy4kdmlldy5kYXRhKCdmb3JtYXQnKSA6IG51bGwsXG4gICAgICAgICAgICBsYW5ndWFnZTogJ2ZyJyxcbiAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLiR2aWV3LmRhdGVwaWNrZXIodGhpcy5vcHRpb25zKTtcbiAgICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwidW1icmVsbGFfY29yZS9jb3JlL0NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlVGltZVBpY2tlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcigkdmlldykge1xuICAgICAgICBzdXBlcigkdmlldyk7XG5cbiAgICAgICAgaWYgKCQuZGF0ZXRpbWVwaWNrZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCB1c2UgQXN5bmNTZWxlY3QyLCBkYXRldGltZXBpY2tlciBwbHVnaW4gbm90IGxvYWRlZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGZvcm1hdDogdGhpcy4kdmlldy5kYXRhKCdmb3JtYXQnKSA/IHRoaXMuJHZpZXcuZGF0YSgnZm9ybWF0JykgOiBudWxsLFxuICAgICAgICAgICAgbG9jYWxlOiAnZnInLFxuICAgICAgICAgICAgc2lkZUJ5U2lkZTogdHJ1ZSxcbiAgICAgICAgICAgIGtlZXBPcGVuOiB0cnVlLFxuICAgICAgICAgICAgLy8gaW5saW5lOiB0cnVlLFxuICAgICAgICAgICAgLy8gZGVidWc6IHRydWUsXG4gICAgICAgICAgICB0b29sYmFyUGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICAgIHNob3dDbGVhcjogdGhpcy4kdmlldy5kYXRhKCdzaG93LWNsZWFyJykgPyB0aGlzLiR2aWV3LmRhdGEoJ3Nob3ctY2xlYXInKSA6IGZhbHNlLFxuICAgICAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgICAgICB0aW1lOiAnbWRpIG1kaS1jbG9jay1vdXRsaW5lJyxcbiAgICAgICAgICAgICAgICBkYXRlOiAnbWRpIG1kaS1jYWxlbmRhcicsXG4gICAgICAgICAgICAgICAgdXA6ICcgbWRpIG1kaS1jaGV2cm9uLXVwJyxcbiAgICAgICAgICAgICAgICBkb3duOiAnIG1kaSBtZGktY2hldnJvbi1kb3duJyxcbiAgICAgICAgICAgICAgICBwcmV2aW91czogJ2NvbnRlbnQtcHJldicsXG4gICAgICAgICAgICAgICAgbmV4dDogJ2NvbnRlbnQtbmV4dCcsXG4gICAgICAgICAgICAgICAgdG9kYXk6ICdtZGkgbWRpLWNoZWNrJyxcbiAgICAgICAgICAgICAgICBjbGVhcjogJ21kaSBtZGktY2xvc2UnLFxuICAgICAgICAgICAgICAgIGNsb3NlOiAnbWRpIG1kaS1jbG9zZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy4kdmlldy5kYXRhKCdtaW4tZGF0ZScpKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubWluRGF0ZSA9IHRoaXMuJHZpZXcuZGF0YSgnbWluLWRhdGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiR2aWV3LmRhdGEoJ21heC1kYXRlJykpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXhEYXRlID0gdGhpcy4kdmlldy5kYXRhKCdtYXgtZGF0ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy4kdmlldy5kYXRldGltZXBpY2tlcih0aGlzLm9wdGlvbnMpO1xuICAgIH1cbn1cbiIsImltcG9ydCBVdGlscyBmcm9tIFwidW1icmVsbGFfY29yZS91dGlscy9VdGlsc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwidW1icmVsbGFfY29yZS9jb3JlL0NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlVXBsb2FkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCR2aWV3KSB7XG4gICAgICAgIHN1cGVyKCR2aWV3KTtcblxuICAgICAgICB0aGlzLiRpbnB1dEZpbGUgPSB0aGlzLiR2aWV3LmZpbmQoJ2lucHV0LmpzLXVtYnJlbGxhLWZpbGUnKTtcbiAgICAgICAgdGhpcy4kaW5wdXRFbnRpdHkgPSB0aGlzLiR2aWV3LmZpbmQoJ2lucHV0LmpzLXVtYnJlbGxhLWVudGl0eScpO1xuICAgICAgICB0aGlzLiRpbnB1dFR4dCA9IHRoaXMuJHZpZXcuZmluZCgnaW5wdXQuanMtdW1icmVsbGEtdGV4dCcpO1xuICAgICAgICB0aGlzLiRpbnB1dERlbGV0ZSA9IHRoaXMuJHZpZXcuZmluZCgnaW5wdXQuanMtdW1icmVsbGEtZGVsZXRlJyk7XG5cbiAgICAgICAgdGhpcy4kcmVtb3ZlQnRuID0gdGhpcy4kdmlldy5maW5kKCcuanMtdW1icmVsbGEtcmVtb3ZlJyk7XG4gICAgICAgIHRoaXMuJGRvd25sb2FkQnRuID0gdGhpcy4kdmlldy5maW5kKCcuanMtdW1icmVsbGEtZG93bmxvYWQnKTtcbiAgICAgICAgdGhpcy4kYnJvd3NlQnRuID0gdGhpcy4kdmlldy5maW5kKCcuanMtdW1icmVsbGEtYnJvd3NlJyk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuJGlucHV0RW50aXR5LnZhbCgpKSB7XG4gICAgICAgICAgICB0aGlzLiRyZW1vdmVCdG4ucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kcmVtb3ZlQnRuLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmQoKSB7XG4gICAgICAgIHRoaXMuJGJyb3dzZUJ0bi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgIHRoaXMuJGlucHV0RmlsZS5jbGljaygpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRpbnB1dEZpbGUub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRyZW1vdmVCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLiRpbnB1dEZpbGUucmVwbGFjZVdpdGgodGhpcy4kaW5wdXRGaWxlLnZhbCgnJykuY2xvbmUodHJ1ZSkpO1xuICAgICAgICB0aGlzLiRpbnB1dEZpbGUgPSB0aGlzLiR2aWV3LmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJyk7XG4gICAgICAgIHRoaXMuJGlucHV0RGVsZXRlLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgdGhpcy4kZG93bmxvYWRCdG4uYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICByZWZyZXNoKCkge1xuICAgICAgICBsZXQgZmlsZXMgPSB0aGlzLiRpbnB1dEZpbGVbMF0uZmlsZXM7XG4gICAgICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgZmlsZSA9IGZpbGVzWzBdO1xuICAgICAgICAgICAgdGhpcy4kaW5wdXRUeHQudmFsKGZpbGUubmFtZSArICcgKCcgKyBVdGlscy5ieXRlc190b19zaXplKGZpbGUuc2l6ZSkgKyAnKScpO1xuICAgICAgICAgICAgdGhpcy4kcmVtb3ZlQnRuLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGlucHV0VHh0LnZhbCgnJyk7XG4gICAgICAgICAgICB0aGlzLiRyZW1vdmVCdG4uYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IFV0aWxzIGZyb20gXCJ1bWJyZWxsYV9jb3JlL3V0aWxzL1V0aWxzXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCJ1bWJyZWxsYV9jb3JlL2NvcmUvQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdDIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoJHZpZXcpIHtcbiAgICAgICAgc3VwZXIoJHZpZXcpO1xuXG4gICAgICAgIGlmICgkLnNlbGVjdDIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCB1c2UgU2VsZWN0Miwgc2VsZWN0MiBwbHVnaW4gbm90IGxvYWRlZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGNvbmZpZ3VyZU9wdGlvbnMoKSB7XG4gICAgICAgIGxldCBkYXRhX29wdGlvbnMgPSB0aGlzLiR2aWV3LmRhdGEoJ29wdGlvbnMnKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBkYXRhX29wdGlvbnMgPyBKU09OLnBhcnNlKFV0aWxzLmRlY29kZV9odG1sKGRhdGFfb3B0aW9ucykpIDoge307XG4gICAgICAgIHRoaXMuczJfb3B0aW9ucyA9IHRoaXMub3B0aW9uc1snc2VsZWN0MiddID8gdGhpcy5vcHRpb25zWydzZWxlY3QyJ10gOiB7fTtcblxuICAgICAgICAvLyB0ZW1wbGF0aW5nXG4gICAgICAgIGxldCBtdXN0YWNoZVRlbXBsYXRlID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zWyd0ZW1wbGF0ZV9zZWxlY3RvciddKSB7XG4gICAgICAgICAgICBjb25zdCAkdGVtcGxhdGUgPSAkKHRoaXMub3B0aW9uc1sndGVtcGxhdGVfc2VsZWN0b3InXSk7XG4gICAgICAgICAgICBpZiAoJHRlbXBsYXRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyB0ZW1wbGF0ZSBmb3VuZCB3aXRoIHNlbGVjdG9yIFwiICsgdGhpcy5vcHRpb25zWyd0ZW1wbGF0ZV9zZWxlY3RvciddKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbXVzdGFjaGVUZW1wbGF0ZSA9ICR0ZW1wbGF0ZS5odG1sKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zWyd0ZW1wbGF0ZV9odG1sJ10pIHtcbiAgICAgICAgICAgIG11c3RhY2hlVGVtcGxhdGUgPSB0aGlzLm9wdGlvbnNbJ3RlbXBsYXRlX2h0bWwnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtdXN0YWNoZVRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnMyX29wdGlvbnNbJ3RlbXBsYXRlUmVzdWx0J10gPSAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXRlLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS50ZXh0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gc3RhdGU7XG5cbiAgICAgICAgICAgICAgICAvLyBhZGQgZGF0YSByZXRyaWV2ZSBmcm9tIHZhbmlsbGEgb3B0aW9uIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBvc2VkRGF0YSA9ICQoc3RhdGUuZWxlbWVudCkuZGF0YSgnanNvbicpIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gey4uLmV4cG9zZWREYXRhLC4uLmRhdGF9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuICQoJzxzcGFuPicgKyBtdXN0YWNoZS5yZW5kZXIobXVzdGFjaGVUZW1wbGF0ZSwgZGF0YSkgKyAnPC9zcGFuPicpO1xuXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWpheCBsb2FkaW5nXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ2FqYXhfdXJsJ10pIHtcbiAgICAgICAgICAgIHRoaXMuczJfb3B0aW9uc1snYWpheCddID0ge1xuICAgICAgICAgICAgICAgIHVybDogdGhpcy5vcHRpb25zWydhamF4X3VybCddLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICAgICAgZGVsYXk6IDI1MCxcbiAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7cTogcGFyYW1zLnRlcm0sIHBhZ2U6IHBhcmFtcy5wYWdlfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1Jlc3VsdHM6IGZ1bmN0aW9uIChkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vcmUgPSBkYXRhLm1vcmUgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBkYXRhLml0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmU6IG1vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2FjaGU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuJHZpZXcuc2VsZWN0Mignb3BlbicpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJlT3B0aW9ucygpO1xuICAgICAgICB0aGlzLiR2aWV3LnNlbGVjdDIodGhpcy5zMl9vcHRpb25zKTtcbiAgICAgICAgdGhpcy4kdmlldy5zaG93KCk7XG4gICAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29yZS9Db21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFnc0lucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcigkdmlldykge1xuICAgICAgICBzdXBlcigkdmlldyk7XG5cbiAgICAgICAgaWYgKCQudGFnc2lucHV0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgdXNlIFRhZ3NJbnB1dCwgdGFnc2lucHV0IHBsdWdpbiBub3QgbG9hZGVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJHZpZXcudGFnc2lucHV0KCk7XG4gICAgfVxufVxuIiwiXG4vKipcbiAqIEN1c3RvbSBldmVudCA6XG4gKiB0YjpzdWJtaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbGJhciB7XG5cbiAgICBjb25zdHJ1Y3Rvcigkdmlldywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLiR2aWV3ID0gJHZpZXc7XG4gICAgICAgIHRoaXMuJGZvcm0gPSB0aGlzLiR2aWV3LmZpbmQoJy5qcy10b29sYmFyLWZvcm0nKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgc3VibWl0T25DaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgb25TdWJtaXQ6IChlLCB0b29sYmFyKSA9PiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4udGhpcy5vcHRpb25zfTtcbiAgICB9XG5cbiAgICBiaW5kKCkge1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ3N1Ym1pdE9uQ2hhbmdlJ10gPT09IHRydWUpIHsgLy8gcmVsb2FkIG9uIGNoYW5nZVxuICAgICAgICAgICAgdGhpcy4kdmlldy5vbignY2hhbmdlJywgJ3NlbGVjdCwgaW5wdXRbdHlwZT1jaGVja2JveF0sIGlucHV0W3R5cGU9cmFkaW9dLCAuanMtZGF0ZXBpY2tlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiR2aWV3LnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCB0aW1lciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLiR2aWV3Lm9uKCdrZXl1cCcsICdpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXNlYXJjaF0nLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kdmlldy50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiR2aWV3Lm9uKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zWydvblN1Ym1pdCddKGUsIHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLiRmb3JtKSB7XG4gICAgICAgICAgICB0aGlzLiRmb3JtLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGZvcm0ubGVuZ3RoXG4gICAgICAgICAgICA/IHRoaXMuJGZvcm0uc2VyaWFsaXplRm9ybVRvSnNvbigpXG4gICAgICAgICAgICA6IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgQWpheEhhbmRsZXIgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29yZS9BamF4SGFuZGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4Q2FsbGJhY2tIYW5kbGVyIGV4dGVuZHMgQWpheEhhbmRsZXJ7XG5cbiAgICBjb25zdHJ1Y3RvcihzdWNjZXNzLCBlcnJvciA9ICgpID0+IHt9LCBjb21wbGV0ZSA9ICgpID0+IHt9KSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fc3VjY2VzcyA9IHN1Y2Nlc3M7XG4gICAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlID0gY29tcGxldGU7XG4gICAgfVxuXG4gICAgc3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICB0aGlzLl9zdWNjZXNzKHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBlcnJvcihyZXF1ZXN0T2JqZWN0LCBlcnJvciwgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgdGhpcy5fZXJyb3IocmVxdWVzdE9iamVjdCwgZXJyb3IsIGVycm9yVGhyb3duKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4SGFuZGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBzdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgfVxuXG4gICAgZXJyb3IocmVxdWVzdE9iamVjdCwgZXJyb3IsIGVycm9yVGhyb3duKSB7XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgfVxuXG59IiwiaW1wb3J0IEFqYXhIYW5kbGVyIGZyb20gXCJ1bWJyZWxsYV9jb3JlL2NvcmUvQWpheEhhbmRsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheEpzUmVzcG9uc2VIYW5kbGVyIGV4dGVuZHMgQWpheEhhbmRsZXIge1xuXG4gICAgc3RhdGljIGFjdGlvbnMgPSB7XG5cbiAgICAgICAgZXhlY3V0ZV9qcyhwYXJhbXMpIHtcbiAgICAgICAgICAgIGV2YWwocGFyYW1zLnZhbHVlKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWxvYWQocGFyYW1zKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF07XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVkaXJlY3QocGFyYW1zKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBwYXJhbXMudmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9hc3QocGFyYW1zKSB7XG4gICAgICAgICAgICAkLnRvYXN0KHBhcmFtcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb3Blbl9tb2RhbChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxldCAkbW9kYWwgPSAkKHBhcmFtcy52YWx1ZSk7XG4gICAgICAgICAgICBsZXQgJG9wZW5lZF9tb2RhbCA9ICQoJy5qcy11bWJyZWxsYS1tb2RhbC5zaG93Jyk7XG5cbiAgICAgICAgICAgIGlmICgkb3BlbmVkX21vZGFsLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICRvcGVuZWRfbW9kYWwuaHRtbCgkbW9kYWwuZmluZCgnLm1vZGFsLWRpYWxvZycpKTtcbiAgICAgICAgICAgICAgICBhcHAubW91bnQoJG9wZW5lZF9tb2RhbCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvLyBIQUNLIDogYnMgNCBtb2RhbCBkb2Vzbid0IGV4ZWN1dGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgJG1vZGFsLm9uKCdzaG93bi5icy5tb2RhbCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFwcC5tb3VudCgkKGUudGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRzY3JpcHRzID0gJChlLnRhcmdldCkuZmluZCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICAgICAgICAgICQuZWFjaCgkc2NyaXB0cywgKGksIHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgZXZhbCgkKHMpLmh0bWwoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICRtb2RhbC5vbignaGlkZGVuLmJzLm1vZGFsJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJChlLnRhcmdldCkuZGF0YSgnYnMubW9kYWwnLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgJChlLnRhcmdldCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkbW9kYWwubW9kYWwoJ3Nob3cnKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNsb3NlX21vZGFsKHBhcmFtcykge1xuICAgICAgICAgICAgbGV0ICRvcGVuZWRfbW9kYWwgPSAkKCcuanMtdW1icmVsbGEtbW9kYWwuc2hvdycpO1xuICAgICAgICAgICAgaWYgKCRvcGVuZWRfbW9kYWwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJG9wZW5lZF9tb2RhbC5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlbG9hZF90YWJsZShwYXJhbXMpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RvciA9ICcnO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5pZHMgJiYgcGFyYW1zLmlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBwYXJhbXMuaWRzLm1hcCgoaWQpID0+ICcjJyArIGlkKS5qb2luKCcsICcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvciA9ICdbZGF0YS1tb3VudD1EYXRhVGFibGVdJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEFqYXhKc1Jlc3BvbnNlSGFuZGxlci5hY3Rpb25zLmNvbXBvbmVudF9jYWxsKHNlbGVjdG9yLCAncmVsb2FkJyk7XG4gICAgICAgIH0sXG5cblxuICAgICAgICBjb21wb25lbnRfY2FsbChzZWxlY3RvciwgbWV0aG9kLCBhcmdzID0gW10pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbXBvbmVudCBvZiBhcHAuZ2V0Q29tcG9uZW50cyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRbbWV0aG9kXSguLi5hcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGUocGFyYW1zKSB7XG4gICAgICAgICAgICBjb25zdCAkdmlldyA9ICQocGFyYW1zLnNlbGVjdG9yKTtcbiAgICAgICAgICAgICR2aWV3Lmh0bWwocGFyYW1zLnZhbHVlKTtcbiAgICAgICAgICAgIGFwcC5tb3VudCgkdmlldyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlKHBhcmFtcykge1xuICAgICAgICAgICAgJChwYXJhbXMuc2VsZWN0b3IpLnJlbW92ZSgpO1xuICAgICAgICB9LFxuXG4gICAgfTtcblxuICAgIHN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzcG9uc2UpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1lc3NhZ2Ugb2YgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvQWN0aW9uKG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSnNSZXNwb25zZUhhbmRsZXIgOiBpbnZhbGlkIHJlc3BvbnNlLCBleHBlY3RlZCBqc29uIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3IocmVxdWVzdE9iamVjdCwgZXJyb3IsIGVycm9yVGhyb3duKVxuICAgIHtcbiAgICAgICAgaWYgKHJlcXVlc3RPYmplY3Quc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICQudG9hc3Qoe1xuICAgICAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdXMgbidldGVzIHBsdXMgY29ubmVjdMOpLiBWZXVpbGxleiByYWZyYWljaGlyIGxhIHBhZ2UgcG91ciB2b3VzIGF1dGhlbnRpZmllclwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQudG9hc3Qoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGV4dDogXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvQWN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gQWpheEpzUmVzcG9uc2VIYW5kbGVyLmFjdGlvbnNbbWVzc2FnZS5hY3Rpb25dO1xuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQWpheEhhbmRsZXIgOiBpbnZhbGlkIGFjdGlvbiAnICsgbWVzc2FnZS5hY3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aW9uKG1lc3NhZ2UucGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBBamF4VXRpbHMgZnJvbSBcInVtYnJlbGxhX2NvcmUvdXRpbHMvQWpheFV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpbmQge1xuXG4gICAgY29uc3RydWN0b3IoJHZpZXcsIG5ld0RvbSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy4kdmlldyA9ICR2aWV3O1xuXG4gICAgICAgIHRoaXMuYmluZFRvb2x0aXAoKTtcbiAgICAgICAgdGhpcy5iaW5kVG9hc3QoKTtcbiAgICAgICAgdGhpcy5iaW5kUG9wb3ZlcigpO1xuXG4gICAgICAgIGlmICghbmV3RG9tKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmRGb3JtKCk7XG4gICAgICAgICAgICB0aGlzLmJpbmRMaW5rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kVG9vbHRpcCgpIHtcbiAgICAgICAgaWYgKCQudG9vbHRpcCkge1xuICAgICAgICAgICAgdGhpcy4kdmlldy5maW5kKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCh7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiR2aWV3XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRUb2FzdCgpIHtcbiAgICAgICAgaWYgKCQudG9hc3QpIHtcbiAgICAgICAgICAgIHRoaXMuJHZpZXcuZmluZCgnW2RhdGEtdG9nZ2xlPVwidG9hc3RcIl0nKS5lYWNoKChpLCBlKSA9PiB7XG4gICAgICAgICAgICAgICAgJC50b2FzdCgkKGUpLmRhdGEoJ29wdGlvbnMnKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZFBvcG92ZXIoKSB7XG4gICAgICAgIGlmICgkLnBvcG92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuJHZpZXcuZmluZCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoe1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kdmlld1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB5b3UgZG9uJ3Qgd2FudCB5b3VyIGZvcm0gd2FzIGJpbmQgOiB1c2UgY2xhc3Mgbm8tYmluZFxuICAgIGJpbmRGb3JtKCkge1xuICAgICAgICB0aGlzLiR2aWV3Lm9uKCdjbGljaycsICdbZGF0YS14aHJdOm5vdChmb3JtKTpub3QoLm5vLWJpbmQpJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIEFqYXhVdGlscy5oYW5kbGVMaW5rKCQoZS5jdXJyZW50VGFyZ2V0KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGlmIHlvdSBkb24ndCB3YW50IHlvdXIgbGluayB3YXMgYmluZCA6IHVzZSBjbGFzcyBuby1iaW5kXG4gICAgYmluZExpbmsoKSB7XG4gICAgICAgIHRoaXMuJHZpZXcub24oJ3N1Ym1pdCcsICdmb3JtW2RhdGEteGhyXTpub3QoLm5vLWJpbmQpJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIEFqYXhVdGlscy5oYW5kbGVGb3JtKCQoZS5jdXJyZW50VGFyZ2V0KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoJHZpZXcpIHtcbiAgICAgICAgdGhpcy4kdmlldyA9ICR2aWV3O1xuICAgIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJ1bWJyZWxsYV9jb3JlL2NvcmUvQ29tcG9uZW50XCI7XG5pbXBvcnQgQmluZCBmcm9tIFwidW1icmVsbGFfY29yZS9jb3JlL0JpbmRcIjtcbmltcG9ydCBBamF4SGFuZGxlciBmcm9tIFwidW1icmVsbGFfY29yZS9jb3JlL0FqYXhIYW5kbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVtYnJlbGxhQXBwIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5ID0ge307XG4gICAgICAgIHRoaXMuYWpheEhhbmRsZXJSZWdpc3RyeSA9IHt9O1xuICAgIH1cblxuICAgIC8vICoqKiBDb21wb25lbnRzICoqKiAvL1xuXG4gICAgbW91bnQoJGNvbnRhaW5lciA9IG51bGwpIHtcbiAgICAgICAgZm9yIChsZXQgc2VsZWN0b3IgaW4gdGhpcy5jb21wb25lbnRSZWdpc3RyeSkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q2xhc3MgPSB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5W3NlbGVjdG9yXTtcblxuICAgICAgICAgICAgY29uc3QgJGUgPSAkY29udGFpbmVyID8gJGNvbnRhaW5lci5maW5kKHNlbGVjdG9yKSA6ICQoc2VsZWN0b3IpO1xuICAgICAgICAgICAgJGUuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHZpZXcgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmICghJHZpZXcuZGF0YSgnY29tcG9uZW50JykpIHtcbiAgICAgICAgICAgICAgICAgICAgJHZpZXcuZGF0YSgnY29tcG9uZW50JywgbmV3IGNvbXBvbmVudENsYXNzKCR2aWV3KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2Uoc2VsZWN0b3IsIGNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgIGlmICghKGNvbXBvbmVudENsYXNzLnByb3RvdHlwZSBpbnN0YW5jZW9mIENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYENhbid0IHVzZSBjb21wb25lbnQgJHtjb21wb25lbnRDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZX0sIGhlIG11c3QgZXh0ZW5kcyBDb21wb25lbnQgY2xhc3NgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnlbc2VsZWN0b3JdID0gY29tcG9uZW50Q2xhc3M7XG4gICAgfVxuXG4gICAgZ2V0Q29tcG9uZW50cyhzZWxlY3Rvcikge1xuICAgICAgICBsZXQgY29tcG9uZW50cyA9IFtdO1xuXG4gICAgICAgICQoc2VsZWN0b3IpLmVhY2goKGksIGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlID0gJChlKTtcblxuICAgICAgICAgICAgLy8gY29tcG9uZW50c1xuICAgICAgICAgICAgaWYgKCRlLmRhdGEoJ2NvbXBvbmVudCcpKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKCRlLmRhdGEoJ2NvbXBvbmVudCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cblxuICAgIC8vICoqKiBBamF4IGhhbmRsZXJzICoqKiAvL1xuXG4gICAgdXNlQWpheEhhbmRsZXIoaGFuZGxlck5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKCEoaGFuZGxlciBpbnN0YW5jZW9mIEFqYXhIYW5kbGVyKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQ2FuJ3QgdXNlIGhhbmRsZXIgJHtoYW5kbGVyLmNvbnN0cnVjdG9yLm5hbWV9LCBoZSBtdXN0IGV4dGVuZHMgQWpheEhhbmRsZXIgY2xhc3NgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWpheEhhbmRsZXJSZWdpc3RyeVtoYW5kbGVyTmFtZV0gPSBoYW5kbGVyO1xuICAgIH1cblxuICAgIGdldEFqYXhIYW5kbGVyKGhhbmRsZXJOYW1lID0gbnVsbCkge1xuICAgICAgICBpZiAoIWhhbmRsZXJOYW1lKSB7XG4gICAgICAgICAgICBoYW5kbGVyTmFtZSA9ICdkZWZhdWx0JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKGhhbmRsZXJOYW1lIGluIHRoaXMuYWpheEhhbmRsZXJSZWdpc3RyeSkpIHtcbiAgICAgICAgICAgIHRocm93IGBObyBhamF4IGhhbmRsZXIgcmVnaXN0ZXJlZCB3aXRoIG5hbWUgJHtoYW5kbGVyTmFtZX1gO1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIHJldHVybiB0aGlzLmFqYXhIYW5kbGVyUmVnaXN0cnlbaGFuZGxlck5hbWVdO1xuICAgIH1cblxuICAgIC8vICoqKiBCaW5kICoqKiAvL1xuXG4gICAgYmluZCgpIHtcbiAgICAgICAgbmV3IEJpbmQoJCgnYm9keScpLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgYmluZE5ld0RvbSgkZSkge1xuICAgICAgICBuZXcgQmluZCgkZSwgdHJ1ZSk7XG4gICAgfVxufSIsIi8qKlxuICogQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MzkyMzQ0L3NlbmRpbmctbXVsdGlwYXJ0LWZvcm1kYXRhLXdpdGgtanF1ZXJ5LWFqYXhcbiAqL1xuKGZ1bmN0aW9uKCQpIHtcbiAgICAkLmZuLnNlcmlhbGl6ZUZvcm1Ub0Zvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciAkb2JqID0gJCh0aGlzKTtcbiAgICAgICAgLyogQUREIEZJTEUgVE8gUEFSQU0gQUpBWCAqL1xuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgJC5lYWNoKCRvYmouZmluZChcImlucHV0W3R5cGU9J2ZpbGUnXVwiKSwgZnVuY3Rpb24oaSwgdGFnKSB7XG4gICAgICAgICAgICAkLmVhY2goJCh0YWcpWzBdLmZpbGVzLCBmdW5jdGlvbihpLCBmaWxlKSB7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHRhZy5uYW1lLCBmaWxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHBhcmFtcyA9ICRvYmouc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgJC5lYWNoKHBhcmFtcywgZnVuY3Rpb24gKGksIHZhbCkge1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHZhbC5uYW1lLCB2YWwudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH07XG59KShqUXVlcnkpOyIsIi8qKlxuICogQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTg0NjI0L2NvbnZlcnQtZm9ybS1kYXRhLXRvLWphdmFzY3JpcHQtb2JqZWN0LXdpdGgtanF1ZXJ5XG4gKi9cbihmdW5jdGlvbigkKXtcbiAgICAkLmZuLnNlcmlhbGl6ZUZvcm1Ub0pzb24gPSBmdW5jdGlvbihvcHRpb25zKXtcblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBqc29uID0ge30sXG4gICAgICAgICAgICBwdXNoX2NvdW50ZXJzID0ge30sXG4gICAgICAgICAgICBwYXR0ZXJucyA9IHtcbiAgICAgICAgICAgICAgICBcInZhbGlkYXRlXCI6IC9eW2EtekEtWl1bYS16QS1aMC05X10qKD86XFxbKD86XFxkKnxbYS16QS1aMC05X10rKVxcXSkqJC8sXG4gICAgICAgICAgICAgICAgXCJrZXlcIjogICAgICAvW2EtekEtWjAtOV9dK3woPz1cXFtcXF0pL2csXG4gICAgICAgICAgICAgICAgXCJwdXNoXCI6ICAgICAvXiQvLFxuICAgICAgICAgICAgICAgIFwiZml4ZWRcIjogICAgL15cXGQrJC8sXG4gICAgICAgICAgICAgICAgXCJuYW1lZFwiOiAgICAvXlthLXpBLVowLTlfXSskL1xuICAgICAgICAgICAgfTtcblxuICAgICAgICB2YXIgb3B0cyA9ICQuZXh0ZW5kKCB7fSwgJC5mbi5zZXJpYWxpemVGb3JtVG9Kc29uLmRlZmF1bHRzLCBvcHRpb25zICk7XG5cblxuICAgICAgICB0aGlzLmJ1aWxkID0gZnVuY3Rpb24oYmFzZSwga2V5LCB2YWx1ZSl7XG4gICAgICAgICAgICBiYXNlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBiYXNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucHVzaF9jb3VudGVyID0gZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgICAgIGlmKHB1c2hfY291bnRlcnNba2V5XSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBwdXNoX2NvdW50ZXJzW2tleV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHB1c2hfY291bnRlcnNba2V5XSsrO1xuICAgICAgICB9O1xuXG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIC8vIHNraXAgaW52YWxpZCBrZXlzXG4gICAgICAgICAgICBpZighcGF0dGVybnMudmFsaWRhdGUudGVzdCh0aGlzLm5hbWUpKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghb3B0cy5lbXB0eSAmJiAkLnRyaW0odGhpcy52YWx1ZSkgPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBrLFxuICAgICAgICAgICAgICAgIGtleXMgPSB0aGlzLm5hbWUubWF0Y2gocGF0dGVybnMua2V5KSxcbiAgICAgICAgICAgICAgICBtZXJnZSA9IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgcmV2ZXJzZV9rZXkgPSB0aGlzLm5hbWU7XG5cbiAgICAgICAgICAgIHdoaWxlKChrID0ga2V5cy5wb3AoKSkgIT09IHVuZGVmaW5lZCl7XG5cbiAgICAgICAgICAgICAgICAvLyBhZGp1c3QgcmV2ZXJzZV9rZXlcbiAgICAgICAgICAgICAgICByZXZlcnNlX2tleSA9IHJldmVyc2Vfa2V5LnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxbXCIgKyBrICsgXCJcXFxcXSRcIiksICcnKTtcblxuICAgICAgICAgICAgICAgIC8vIHB1c2hcbiAgICAgICAgICAgICAgICBpZihrLm1hdGNoKHBhdHRlcm5zLnB1c2gpKXtcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2UgPSBzZWxmLmJ1aWxkKFtdLCBzZWxmLnB1c2hfY291bnRlcihyZXZlcnNlX2tleSksIG1lcmdlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBmaXhlZFxuICAgICAgICAgICAgICAgIGVsc2UgaWYoay5tYXRjaChwYXR0ZXJucy5maXhlZCkpe1xuICAgICAgICAgICAgICAgICAgICBtZXJnZSA9IHNlbGYuYnVpbGQoW10sIGssIG1lcmdlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBuYW1lZFxuICAgICAgICAgICAgICAgIGVsc2UgaWYoay5tYXRjaChwYXR0ZXJucy5uYW1lZCkpe1xuICAgICAgICAgICAgICAgICAgICBtZXJnZSA9IHNlbGYuYnVpbGQoe30sIGssIG1lcmdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGpzb24gPSAkLmV4dGVuZCh0cnVlLCBqc29uLCBtZXJnZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH07XG5cbiAgICAkLmZuLnNlcmlhbGl6ZUZvcm1Ub0pzb24uZGVmYXVsdHMgPSB7XG4gICAgICAgIGVtcHR5OiB0cnVlLFxuICAgIH07XG59KShqUXVlcnkpOyIsImltcG9ydCAnLi9TZXJpYWxpemVGb3JtVG9Gb3JtRGF0YSc7XG5pbXBvcnQgJy4vU2VyaWFsaXplRm9ybVRvSnNvbic7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlybU1vZGFsIHtcblxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9ICc8ZGl2IGNsYXNzPVwibW9kYWwgY29uZmlybS1tb2RhbCBmYWRlXCIgdGFiaW5kZXg9XCItMVwiIGlkPVwiY29uZmlybS1tb2RhbFwiPicgK1xuICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIiByb2xlPVwiZG9jdW1lbnRcIj4nICtcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+JyArXG4gICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPl9fdGV4dF9fPC9kaXY+JyArXG4gICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+JyArXG4gICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tY2FuY2VsXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5fX2NhbmNlbF9fPC9idXR0b24+JyArXG4gICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tY29uZmlybVwiPl9fY29uZmlybV9fPC9idXR0b24+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+JztcblxuICAgIHN0YXRpYyAkbW9kYWwgPSBudWxsO1xuXG4gICAgc3RhdGljIHNob3cob3B0aW9ucyA9IHt9KSB7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIGNhbmNlbF90ZXh0OiAnQW5udWxlcicsXG4gICAgICAgICAgICBjb25maXJtX3RleHQ6ICdDb25maXJtZXInLFxuICAgICAgICAgICAgY29uZmlybTogKCkgPT4ge31cbiAgICAgICAgfTtcblxuICAgICAgICBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zfTtcblxuICAgICAgICBDb25maXJtTW9kYWwuaGlkZSgpO1xuXG4gICAgICAgIGxldCBodG1sID0gQ29uZmlybU1vZGFsLnRlbXBsYXRlLnJlcGxhY2UoJ19fdGV4dF9fJywgb3B0aW9uc1sndGV4dCddKTtcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgnX19jYW5jZWxfXycsIG9wdGlvbnNbJ2NhbmNlbF90ZXh0J10pO1xuICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKCdfX2NvbmZpcm1fXycsIG9wdGlvbnNbJ2NvbmZpcm1fdGV4dCddKTtcblxuICAgICAgICBDb25maXJtTW9kYWwuJG1vZGFsID0gJChodG1sKTtcblxuICAgICAgICBDb25maXJtTW9kYWwuJG1vZGFsLm9uKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zWydjb25maXJtJ10oKTtcbiAgICAgICAgICAgICAgICBDb25maXJtTW9kYWwuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgQ29uZmlybU1vZGFsLiRtb2RhbC5vbignY2xpY2snLCAnLmJ0bi1jb25maXJtJywgKGUpID0+IHtcbiAgICAgICAgICAgIG9wdGlvbnNbJ2NvbmZpcm0nXSgpO1xuICAgICAgICAgICAgQ29uZmlybU1vZGFsLmhpZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgQ29uZmlybU1vZGFsLiRtb2RhbC5vbignaGlkZGVuLmJzLm1vZGFsJywgKCkgPT4gQ29uZmlybU1vZGFsLnJlbW92ZSgpKTtcblxuICAgICAgICBDb25maXJtTW9kYWwuJG1vZGFsLm1vZGFsKCdzaG93Jyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhpZGUoKSB7XG4gICAgICAgIGlmIChDb25maXJtTW9kYWwuJG1vZGFsKSB7XG4gICAgICAgICAgICBDb25maXJtTW9kYWwuJG1vZGFsLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlKCkge1xuICAgICAgICAkKCcjY29uZmlybS1tb2RhbCcpLnJlbW92ZSgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaW5uZXIge1xuXG4gICAgc3RhdGljIHRlbXBsYXRlID0gJzxkaXYgaWQ9XCJzcGlubmVyXCI+JyArXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiYm91bmNpbmctbG9hZGVyLXdyYXBwZXJcIj4nICtcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJib3VuY2luZy1sb2FkZXJcIj4nICtcbiAgICAgICAgJzxkaXY+PC9kaXY+JyArXG4gICAgICAgICc8ZGl2PjwvZGl2PicgK1xuICAgICAgICAnPGRpdj48L2Rpdj4nICtcbiAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICc8L2Rpdj4nO1xuXG5cbiAgICBzdGF0aWMgc2hvdygpIHtcbiAgICAgICAgU3Bpbm5lci5oaWRlKCk7XG4gICAgICAgICQoJ2JvZHknKS5hZnRlcihTcGlubmVyLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaGlkZSgpIHtcbiAgICAgICAgY29uc3QgJHNwaW5uZXIgPSAkKCcjc3Bpbm5lcicpO1xuICAgICAgICBpZiAoJHNwaW5uZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAkc3Bpbm5lci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb25maXJtTW9kYWwgZnJvbSBcInVtYnJlbGxhX2NvcmUvcGx1Z2lucy9Db25maXJtTW9kYWxcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCJ1bWJyZWxsYV9jb3JlL3BsdWdpbnMvU3Bpbm5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4VXRpbHMge1xuXG4gICAgc3RhdGljIHhoclBlbmRpbmdSZWdpc3RyeUlkcyA9IFtdO1xuXG4gICAgc3RhdGljIGhhbmRsZUxpbmsoJHZpZXcsIG9wdGlvbnMgPSBbXSkge1xuICAgICAgICBvcHRpb25zID0gey4uLntcbiAgICAgICAgICAgIHVybDogJHZpZXcuZGF0YSgneGhyJyksXG4gICAgICAgICAgICB4aHJfaWQ6ICR2aWV3LmRhdGEoJ3hoci1pZCcpIHx8IG51bGwsXG4gICAgICAgICAgICBjb25maXJtOiAkdmlldy5kYXRhKCdjb25maXJtJykgfHwgZmFsc2UsXG4gICAgICAgICAgICBzcGlubmVyOiAkdmlldy5kYXRhKCdzcGlubmVyJykgfHwgZmFsc2UsXG4gICAgICAgICAgICBtZXRob2Q6ICR2aWV3LmRhdGEoJ21ldGhvZCcpIHx8ICdnZXQnXG4gICAgICAgIH0sLi4ub3B0aW9uc307XG5cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGFwcC5nZXRBamF4SGFuZGxlcigkdmlldy5kYXRhKCdoYW5kbGVyJykgfHwgbnVsbCk7XG4gICAgICAgIHRoaXMucmVxdWVzdChvcHRpb25zLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaGFuZGxlRm9ybSgkdmlldywgb3B0aW9ucyA9IFtdKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7Li4ue1xuICAgICAgICAgICAgdXJsOiAkdmlldy5kYXRhKCd4aHInKSxcbiAgICAgICAgICAgIHhocl9pZDogJHZpZXcuZGF0YSgneGhyLWlkJykgfHwgbnVsbCxcbiAgICAgICAgICAgIGNvbmZpcm06ICR2aWV3LmRhdGEoJ2NvbmZpcm0nKSB8fCBmYWxzZSxcbiAgICAgICAgICAgIHNwaW5uZXI6ICR2aWV3LmRhdGEoJ3NwaW5uZXInKSB8fCBmYWxzZSxcbiAgICAgICAgICAgIG1ldGhvZDogJHZpZXcuYXR0cignbWV0aG9kJykgfHwgJ3Bvc3QnLFxuICAgICAgICAgICAgZGF0YTogJHZpZXcuc2VyaWFsaXplRm9ybVRvRm9ybURhdGEoKSxcbiAgICAgICAgfSwuLi5vcHRpb25zfTtcblxuICAgICAgICBjb25zdCBoYW5kbGVyID0gYXBwLmdldEFqYXhIYW5kbGVyKCR2aWV3LmRhdGEoJ2hhbmRsZXInKSB8fCBudWxsKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZXF1ZXN0KG9wdGlvbnMgPSB7fSwgaGFuZGxlciA9IG51bGwpIHtcbiAgICAgICAgaWYgKGhhbmRsZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGhhbmRsZXIgPSBhcHAuZ2V0QWpheEhhbmRsZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgneGhyX2lkJyBpbiBvcHRpb25zICYmIG9wdGlvbnNbJ3hocl9pZCddKSB7XG4gICAgICAgICAgICBpZiAoQWpheFV0aWxzLnhoclBlbmRpbmdSZWdpc3RyeUlkcy5pbmNsdWRlcyhvcHRpb25zWyd4aHJfaWQnXSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlcXVlc3QgcHJldmVudGVkIDogcmVxdWVzdCB3aXRoIGlkICR7b3B0aW9uc1sneGhyX2lkJ119IGlzIHBlbmRpbmcuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBBamF4VXRpbHMueGhyUGVuZGluZ1JlZ2lzdHJ5SWRzLnB1c2gob3B0aW9uc1sneGhyX2lkJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdkYXRhJyBpbiBvcHRpb25zICYmIG9wdGlvbnNbJ2RhdGEnXSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBvcHRpb25zWydjb250ZW50VHlwZSddID0gZmFsc2U7XG4gICAgICAgICAgICBvcHRpb25zWydwcm9jZXNzRGF0YSddID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ3NwaW5uZXInIGluIG9wdGlvbnMgJiYgZmFsc2UgIT09IG9wdGlvbnNbJ3NwaW5uZXInXSkge1xuICAgICAgICAgICAgU3Bpbm5lci5zaG93KHt0ZXh0OiBvcHRpb25zWydzcGlubmVyJ119KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnNbJ3N1Y2Nlc3MnXSA9IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlci5zdWNjZXNzKHJlc3BvbnNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgb3B0aW9uc1snZXJyb3InXSA9IChyZXF1ZXN0T2JqZWN0LCBlcnJvciwgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgIGhhbmRsZXIuZXJyb3IocmVxdWVzdE9iamVjdCwgZXJyb3IsIGVycm9yVGhyb3duKTtcbiAgICAgICAgfTtcbiAgICAgICAgb3B0aW9uc1snY29tcGxldGUnXSA9ICgpID0+IHtcblxuICAgICAgICAgICAgaWYgKCd4aHJfaWQnIGluIG9wdGlvbnMgJiYgb3B0aW9uc1sneGhyX2lkJ10pIHtcbiAgICAgICAgICAgICAgICBBamF4VXRpbHMueGhyUGVuZGluZ1JlZ2lzdHJ5SWRzID0gJC5ncmVwKEFqYXhVdGlscy54aHJQZW5kaW5nUmVnaXN0cnlJZHMsIChpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWQgIT09IG9wdGlvbnNbJ3hocl9pZCddO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBTcGlubmVyLmhpZGUoKTtcbiAgICAgICAgICAgIGhhbmRsZXIuY29tcGxldGUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoJ2NvbmZpcm0nIGluIG9wdGlvbnMgJiYgZmFsc2UgIT09IG9wdGlvbnNbJ2NvbmZpcm0nXSkge1xuICAgICAgICAgICAgQ29uZmlybU1vZGFsLnNob3coe1xuICAgICAgICAgICAgICAgICd0ZXh0Jzogb3B0aW9uc1snY29uZmlybSddLFxuICAgICAgICAgICAgICAgICdjb25maXJtJzogKCkgPT4gJC5hamF4KG9wdGlvbnMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAkLmFqYXgob3B0aW9ucyk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgc3RhdGljIGdldChvcHRpb25zID0ge30sIGhhbmRsZXIgPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnNbJ21ldGhvZCddID0gJ2dldCc7XG4gICAgICAgIHJldHVybiBBamF4VXRpbHMucmVxdWVzdChvcHRpb25zLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcG9zdChvcHRpb25zID0ge30sIGhhbmRsZXIgPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnNbJ21ldGhvZCddID0gJ3Bvc3QnO1xuICAgICAgICByZXR1cm4gQWpheFV0aWxzLnJlcXVlc3Qob3B0aW9ucywgaGFuZGxlcik7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcblxuICAgIHN0YXRpYyBieXRlc190b19zaXplKGJ5dGVzKSB7XG4gICAgICAgIGxldCBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInXTtcbiAgICAgICAgaWYgKGJ5dGVzID09IDApIHJldHVybiAnMCc7XG4gICAgICAgIGxldCBpID0gcGFyc2VJbnQoTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZygxMDI0KSkpO1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChieXRlcyAvIE1hdGgucG93KDEwMjQsIGkpLCAyKSArICcgJyArIHNpemVzW2ldO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWNvZGVfaHRtbChodG1sKSB7XG4gICAgICAgIGxldCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIHR4dC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gdHh0LnZhbHVlO1xuICAgIH1cbn0iLCIvLyBqcXVlcnlcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5J1xud2luZG93LmpRdWVyeSA9IGpRdWVyeTtcbndpbmRvdy4kID0galF1ZXJ5O1xuXG4vLyBtdXN0YWNoZVxuaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcbndpbmRvdy5tdXN0YWNoZSA9IG11c3RhY2hlO1xubXVzdGFjaGUudGFncyA9IFsgJ1tbJywgJ11dJyBdOyIsIi8vIGltcG9ydCBnbG9iYWxzIGluIHNlcGFyYXRlZCBmaWxlcyBlbHNlIGdsb2JhbCBzY29wZSB3aWxsIG5vdCB3b3Jrc1xuaW1wb3J0IFwiLi9fZ2xvYmFsXCI7XG5cbi8vIGJvb3RzdHJhcFxuaW1wb3J0ICdib290c3RyYXAnO1xuXG4vLyBkYXRhdGFibGVzXG5pbXBvcnQgJ2RhdGF0YWJsZXMubmV0JztcblxuaW1wb3J0ICdkYXRhdGFibGVzLm5ldC1iczQnO1xuaW1wb3J0ICdkYXRhdGFibGVzLm5ldC1yb3dyZW9yZGVyJztcbmltcG9ydCAnZGF0YXRhYmxlcy5uZXQtZml4ZWRoZWFkZXInO1xuXG4vLyBzZWxlY3QyXG5pbXBvcnQgJ3NlbGVjdDIvZGlzdC9qcy9zZWxlY3QyLmZ1bGwnO1xuaW1wb3J0ICdzZWxlY3QyL2Rpc3QvanMvaTE4bi9mcic7XG5cbi8vIHRhZ3MgaW5wdXRcbmltcG9ydCAnYm9vdHN0cmFwLXRhZ3NpbnB1dCc7XG5cbi8vIGRhdGUgcGlja2VyXG5pbXBvcnQgJ2Jvb3RzdHJhcC1kYXRlcGlja2VyJztcbmltcG9ydCAnYm9vdHN0cmFwLWRhdGVwaWNrZXIvanMvbG9jYWxlcy9ib290c3RyYXAtZGF0ZXBpY2tlci5mcic7XG5cbi8vIGRhdGV0aW1lIHBpY2tlclxuaW1wb3J0ICdlb25hc2Rhbi1ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXInO1xuXG4vLyBtZXRpc21lbnUgKHNpZGViYXJcbmltcG9ydCAnbWV0aXNtZW51JztcblxuLy8gc2Nyb2xsYmFyXG5pbXBvcnQgJ3NpbXBsZWJhcic7XG5cbi8vIHRvYXN0ciBqcXVlcnlcbmltcG9ydCAnanF1ZXJ5LXRvYXN0LXBsdWdpbic7XG5cbi8vIHRyZWUgZ3JpZCBqcXVlcnlcbmltcG9ydCAnanF1ZXJ5LXRyZWVncmlkL2pzL2pxdWVyeS50cmVlZ3JpZCc7XG4iXSwic291cmNlUm9vdCI6IiJ9