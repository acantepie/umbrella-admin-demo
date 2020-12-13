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
    _this.$inputFile = _this.$view.find('input.js-file');
    _this.$inputEntity = _this.$view.find('input.js-entity');
    _this.$inputTxt = _this.$view.find('input.js-text');
    _this.$inputDelete = _this.$view.find('input.js-delete');
    _this.$removeBtn = _this.$view.find('.js-remove');
    _this.$downloadBtn = _this.$view.find('.js-download');
    _this.$browseBtn = _this.$view.find('.js-browse');

    _this.init();

    _this.bind();

    return _this;
  }

  _createClass(FileUpload, [{
    key: "init",
    value: function init() {
      if (this.$view.data('initialized')) {
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
        this.$inputTxt.val(file.name + ' - ' + umbrella_core_utils_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].bytes_to_size(file.size));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4vQWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL0FqYXhIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi9hZG1pbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2FkbWluYnVuZGxlL1Jlc291cmNlcy9hc3NldHMvQWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3VtYnJlbGxhMi9hZG1pbmJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3ZlbmRvci91bWJyZWxsYTIvYWRtaW5idW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2FkbWluYnVuZGxlL1Jlc291cmNlcy9hc3NldHMvY29tcG9uZW50cy9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci91bWJyZWxsYTIvY29yZWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL2NvbXBvbmVudHMvQXN5bmNTZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci91bWJyZWxsYTIvY29yZWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL2NvbXBvbmVudHMvQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9jb21wb25lbnRzL0RhdGFUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9jb21wb25lbnRzL0RhdGVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3VtYnJlbGxhMi9jb3JlYnVuZGxlL1Jlc291cmNlcy9hc3NldHMvY29tcG9uZW50cy9EYXRlVGltZVBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9jb21wb25lbnRzL0ZpbGVVcGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3VtYnJlbGxhMi9jb3JlYnVuZGxlL1Jlc291cmNlcy9hc3NldHMvY29tcG9uZW50cy9TZWxlY3QyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci91bWJyZWxsYTIvY29yZWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL2NvbXBvbmVudHMvVGFnc0lucHV0LmpzIiwid2VicGFjazovLy8uL3ZlbmRvci91bWJyZWxsYTIvY29yZWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL2NvbXBvbmVudHMvVG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9jb3JlL0FqYXhDYWxsYmFja0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3VtYnJlbGxhMi9jb3JlYnVuZGxlL1Jlc291cmNlcy9hc3NldHMvY29yZS9BamF4SGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9jb3JlL0FqYXhKc1Jlc3BvbnNlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9jb3JlL0JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3VtYnJlbGxhMi9jb3JlYnVuZGxlL1Jlc291cmNlcy9hc3NldHMvY29yZS9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3VtYnJlbGxhMi9jb3JlYnVuZGxlL1Jlc291cmNlcy9hc3NldHMvY29yZS9VbWJyZWxsYUFwcC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9qcXVlcnktcGx1Z2lucy9TZXJpYWxpemVGb3JtVG9Gb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9qcXVlcnktcGx1Z2lucy9TZXJpYWxpemVGb3JtVG9Kc29uLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci91bWJyZWxsYTIvY29yZWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL2pxdWVyeS1wbHVnaW5zL19qcXVlcnlfcGx1Z2lucy5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9wbHVnaW5zL0NvbmZpcm1Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvdW1icmVsbGEyL2NvcmVidW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9wbHVnaW5zL1NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3VtYnJlbGxhMi9jb3JlYnVuZGxlL1Jlc291cmNlcy9hc3NldHMvdXRpbHMvQWpheFV0aWxzLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci91bWJyZWxsYTIvY29yZWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL3V0aWxzL1V0aWxzLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci91bWJyZWxsYTIvY29yZWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci91bWJyZWxsYTIvY29yZWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9fdmVuZG9yLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFwcCIsIm1vdW50IiwiYmluZCIsInVzZUFqYXhIYW5kbGVyIiwiQWpheENhbGxiYWNrSGFuZGxlciIsInJlc3BvbnNlIiwibWVzc2FnZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwYXJhbXMiLCJyZXF1ZXN0T2JqZWN0IiwiZXJyb3IiLCJlcnJvclRocm93biIsImNvbXBsZXRlIiwiJCIsImZuIiwiZGF0YVRhYmxlIiwiZXh0IiwiZXJyTW9kZSIsInRvYXN0Iiwib3B0aW9ucyIsInBvc2l0aW9uIiwiVW1icmVsbGFBcHAiLCJ1c2UiLCJTaWRlYmFyIiwiTGF5b3V0IiwiRGF0YVRhYmxlIiwiTm90aWZpY2F0aW9uIiwiU2VsZWN0MiIsIkFzeW5jU2VsZWN0MiIsIlRhZ3NJbnB1dCIsIkRhdGVQaWNrZXIiLCJEYXRlVGltZVBpY2tlciIsIkZpbGVVcGxvYWQiLCJDb2xsZWN0aW9uIiwiSnNSZXNwb25zZUhhbmRsZXIiLCIkdmlldyIsIiR3aW5kb3ciLCJpbml0Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGp1c3RMYXlvdXQiLCJ3aWR0aCIsImFjdGl2YXRlQ29uZGVuc2VkU2lkZWJhciIsImRlc2FjdGl2YXRlQ29uZGVuc2VkU2lkZWJhciIsImF0dHIiLCJDb21wb25lbnQiLCJyZWZyZXNoVXJsIiwiZGF0YSIsInJlZnJlc2hYaHIiLCJfYmluZCIsIl9yZWZyZXNoIiwibG9jYXRpb24iLCJocmVmIiwiY3VycmVudFRhcmdldCIsInBvbGwiLCJhYm9ydCIsIl9pc09wZW4iLCJnZXQiLCJub3RpZmljYXRpb25zIiwiX3JlbmRlckxpc3QiLCJzZXRUaW1lb3V0IiwiJGxpc3QiLCJmaW5kIiwiaHRtbCIsIm5vdGlmaWNhdGlvbiIsInRwbCIsIl9nZXRUZW1wbGF0ZSIsImFwcGVuZCIsIm11c3RhY2hlIiwicmVuZGVyIiwibGVuZ3RoIiwiaGFzQ2xhc3MiLCJ0cGxJZCIsInN0YXRlIiwid2FybiIsIm1ldGlzTWVudSIsImRvY3VtZW50IiwidG9nZ2xlQ2xhc3MiLCJzZWxlY3QyIiwiZGF0YV9vcHRpb25zIiwiSlNPTiIsInBhcnNlIiwiVXRpbHMiLCJkZWNvZGVfaHRtbCIsInMyX29wdGlvbnMiLCJyZXF1ZXN0Iiwic2Nyb2xsIiwicHJlZml4IiwiRGF0ZSIsIm5vdyIsImNhY2hlIiwidXJsIiwiZGVsYXkiLCJ0cmFuc3BvcnQiLCJzdWNjZXNzIiwiZmFpbHVyZSIsImtleSIsInBhZ2UiLCJxIiwiY2FjaGVUaW1lb3V0IiwidGltZSIsImFqYXgiLCJmYWlsIiwiZG9uZSIsImFsd2F5cyIsInVuZGVmaW5lZCIsInJldCIsInRlcm0iLCJwcm9jZXNzUmVzdWx0cyIsInJlc3VsdHMiLCJtb3JlIiwiaXNBcnJheSIsInBhZ2luYXRpb24iLCJ0ZXh0Iiwib3B0aW9uIiwibXVzdGFjaGVUZW1wbGF0ZSIsIiR0ZW1wbGF0ZSIsImlkIiwiY29uZmlndXJlT3B0aW9ucyIsInNob3ciLCJwcm90b3R5cGUiLCJwcm90b3R5cGVfbmFtZSIsImluZGV4IiwibWF4TGVuZ3RoIiwidG9nZ2xlQWRkIiwicmVnZXhwIiwiUmVnRXhwIiwiJG5ld1JvdyIsInJlcGxhY2UiLCJmaXJzdCIsInRyaWdnZXIiLCJjbG9zZXN0IiwicmVtb3ZlIiwib3JkZXIiLCJlYWNoIiwiaSIsInZhbCIsImRyYWd1bGEiLCJjb250YWluZXJzIiwibW92ZXMiLCJlbCIsInNvdXJjZSIsImhhbmRsZSIsInNpYmxpbmciLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJtaXJyb3JDb250YWluZXIiLCJjb3VudCIsIiR0YWJsZSIsInRhYmxlIiwiJHRvb2xiYXIiLCJ0b29sYmFyIiwidGltZXIiLCJzdGFydEF1dG9SZWxvYWQiLCJUb29sYmFyIiwicmVsb2FkIiwiJGUiLCJleHRyYURhdGFUYWciLCJnZXRUYWJsZURhdGEiLCJnZXRTZWxlY3RlZERhdGEiLCJBamF4VXRpbHMiLCJoYW5kbGVMaW5rIiwicGFyYW0iLCJpcyIsImRpZmYiLCJlZGl0IiwiY2hhbmdlU2V0IiwiaWVuIiwicm93Iiwibm9kZSIsInB1c2giLCJvbGREYXRhIiwibmV3RGF0YSIsImFqYXhfdXJsIiwiJHRhcmdldCIsIiRjaGVja2JveGVzIiwicHJvcCIsIiR0ciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzZXR0aW5ncyIsInRlY2hOb3RlIiwic3RvcEF1dG9SZWxvYWQiLCJkIiwiZ2V0RGF0YSIsInRvb2x0aXAiLCJ0cmVlZ3JpZCIsInBvcG92ZXIiLCJjb250YWluZXIiLCJwYWdpbmciLCJkcmF3IiwiaWRzIiwiZWx0IiwicG9sbEludGVydmFsIiwiX19hdXRvUmVsb2FkIiwiY2xlYXJUaW1lb3V0IiwiZGF0ZXBpY2tlciIsImZvcm1hdCIsImxhbmd1YWdlIiwiYXV0b2Nsb3NlIiwiZGF0ZXRpbWVwaWNrZXIiLCJsb2NhbGUiLCJzaWRlQnlTaWRlIiwia2VlcE9wZW4iLCJ0b29sYmFyUGxhY2VtZW50Iiwic2hvd0NsZWFyIiwiaWNvbnMiLCJkYXRlIiwidXAiLCJkb3duIiwicHJldmlvdXMiLCJuZXh0IiwidG9kYXkiLCJjbGVhciIsImNsb3NlIiwibWluRGF0ZSIsIm1heERhdGUiLCIkaW5wdXRGaWxlIiwiJGlucHV0RW50aXR5IiwiJGlucHV0VHh0IiwiJGlucHV0RGVsZXRlIiwiJHJlbW92ZUJ0biIsIiRkb3dubG9hZEJ0biIsIiRicm93c2VCdG4iLCJjbGljayIsInJlZnJlc2giLCJyZXBsYWNlV2l0aCIsImNsb25lIiwiZmlsZXMiLCJmaWxlIiwibmFtZSIsImJ5dGVzX3RvX3NpemUiLCJzaXplIiwiZWxlbWVudCIsImV4cG9zZWREYXRhIiwiZGF0YVR5cGUiLCJpdGVtcyIsInRhZ3NpbnB1dCIsIiRmb3JtIiwiZGVmYXVsdE9wdGlvbnMiLCJzdWJtaXRPbkNoYW5nZSIsIm9uU3VibWl0Iiwic2VyaWFsaXplRm9ybVRvSnNvbiIsIl9zdWNjZXNzIiwiX2Vycm9yIiwiX2NvbXBsZXRlIiwiQWpheEhhbmRsZXIiLCJBamF4SnNSZXNwb25zZUhhbmRsZXIiLCJBcnJheSIsImRvQWN0aW9uIiwic3RhdHVzIiwiaWNvbiIsImFjdGlvbnMiLCJleGVjdXRlX2pzIiwiZXZhbCIsInZhbHVlIiwic3BsaXQiLCJyZWRpcmVjdCIsIm9wZW5fbW9kYWwiLCIkbW9kYWwiLCIkb3BlbmVkX21vZGFsIiwidGFyZ2V0IiwiJHNjcmlwdHMiLCJzIiwibW9kYWwiLCJjbG9zZV9tb2RhbCIsInJlbG9hZF90YWJsZSIsInNlbGVjdG9yIiwibWFwIiwiam9pbiIsImNvbXBvbmVudF9jYWxsIiwibWV0aG9kIiwiYXJncyIsImdldENvbXBvbmVudHMiLCJjb21wb25lbnQiLCJ1cGRhdGUiLCJCaW5kIiwibmV3RG9tIiwiYmluZFRvb2x0aXAiLCJiaW5kVG9hc3QiLCJiaW5kUG9wb3ZlciIsImJpbmRGb3JtIiwiYmluZExpbmsiLCJoYW5kbGVGb3JtIiwiY29tcG9uZW50UmVnaXN0cnkiLCJhamF4SGFuZGxlclJlZ2lzdHJ5IiwiJGNvbnRhaW5lciIsImNvbXBvbmVudENsYXNzIiwiY29uc3RydWN0b3IiLCJjb21wb25lbnRzIiwiaGFuZGxlck5hbWUiLCJoYW5kbGVyIiwic2VyaWFsaXplRm9ybVRvRm9ybURhdGEiLCIkb2JqIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInRhZyIsInNlcmlhbGl6ZUFycmF5IiwialF1ZXJ5Iiwic2VsZiIsImpzb24iLCJwdXNoX2NvdW50ZXJzIiwicGF0dGVybnMiLCJvcHRzIiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCJidWlsZCIsImJhc2UiLCJwdXNoX2NvdW50ZXIiLCJ2YWxpZGF0ZSIsInRlc3QiLCJlbXB0eSIsInRyaW0iLCJrIiwia2V5cyIsIm1hdGNoIiwibWVyZ2UiLCJyZXZlcnNlX2tleSIsInBvcCIsImZpeGVkIiwibmFtZWQiLCJDb25maXJtTW9kYWwiLCJjYW5jZWxfdGV4dCIsImNvbmZpcm1fdGV4dCIsImNvbmZpcm0iLCJoaWRlIiwidGVtcGxhdGUiLCJ3aGljaCIsIlNwaW5uZXIiLCJhZnRlciIsIiRzcGlubmVyIiwieGhyX2lkIiwic3Bpbm5lciIsImdldEFqYXhIYW5kbGVyIiwieGhyUGVuZGluZ1JlZ2lzdHJ5SWRzIiwiaW5jbHVkZXMiLCJncmVwIiwiYnl0ZXMiLCJzaXplcyIsInBhcnNlSW50IiwiTWF0aCIsImZsb29yIiwicm91bmQiLCJwb3ciLCJ0eHQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidGFncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUFBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxLQUFYO0FBQ0FGLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXRSxJQUFYLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBRUFGLEdBQUcsQ0FBQ0csY0FBSixDQUFtQixRQUFuQixFQUE2QixJQUFJQyw4RUFBSixDQUN6QixVQUFDQyxRQUFELEVBQWM7QUFBQSw2Q0FDWUEsUUFEWjtBQUFBOztBQUFBO0FBQ1Ysd0RBQWdDO0FBQUEsVUFBckJDLE9BQXFCOztBQUM1QixVQUFJQSxPQUFPLENBQUNDLE1BQVIsS0FBbUIsS0FBdkIsRUFBOEI7QUFDMUJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFPLENBQUNJLE1BQVIsQ0FBZSxLQUFmLENBQVo7QUFDSDtBQUNKO0FBTFM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1iLENBUHdCLEVBUXpCLFVBQUNDLGFBQUQsRUFBZ0JDLEtBQWhCLEVBQXVCQyxXQUF2QixFQUF1QyxDQUFFLENBUmhCLEVBU3pCLFVBQUNDLFFBQUQsRUFBYyxDQUFFLENBVFMsQ0FBN0IsRTs7Ozs7Ozs7Ozs7QUNGQSx1Qzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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SDs7O2dDQUVrQnhFLEksRUFBTTtBQUNyQixVQUFJMFIsR0FBRyxHQUFHN1EsUUFBUSxDQUFDOFEsYUFBVCxDQUF1QixVQUF2QixDQUFWO0FBQ0FELFNBQUcsQ0FBQ0UsU0FBSixHQUFnQjVSLElBQWhCO0FBQ0EsYUFBTzBSLEdBQUcsQ0FBQ3pGLEtBQVg7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQXBRLE1BQU0sQ0FBQytTLE1BQVAsR0FBZ0JBLDZDQUFoQjtBQUNBL1MsTUFBTSxDQUFDZ0IsQ0FBUCxHQUFXK1IsNkNBQVgsQyxDQUVBOztBQUNBO0FBQ0EvUyxNQUFNLENBQUN3RSxRQUFQLEdBQWtCQSwrQ0FBbEI7QUFDQUEsK0NBQVEsQ0FBQ3dSLElBQVQsR0FBZ0IsQ0FBRSxJQUFGLEVBQVEsSUFBUixDQUFoQixDOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0NBR0E7O0FBQ0E7QUFFQTtBQUNBO0NBR0E7O0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQTtDQUdBOztDQUdBOztDQUdBOztDQUdBOztDQUdBIiwiZmlsZSI6ImFkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2FkbWluLnNjc3MnO1xuaW1wb3J0ICd1bWJyZWxsYV9hZG1pbi9BZG1pbic7XG5cbmltcG9ydCAnLi9BamF4SGFuZGxlcic7XG5cbndpbmRvdy5hcHAubW91bnQoKTtcbndpbmRvdy5hcHAuYmluZCgpOyIsImltcG9ydCBBamF4Q2FsbGJhY2tIYW5kbGVyIGZyb20gXCJ1bWJyZWxsYV9jb3JlL2NvcmUvQWpheENhbGxiYWNrSGFuZGxlclwiO1xuXG5hcHAudXNlQWpheEhhbmRsZXIoJ2N1c3RvbScsIG5ldyBBamF4Q2FsbGJhY2tIYW5kbGVyKFxuICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IG1lc3NhZ2Ugb2YgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3NheScpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlLnBhcmFtc1snbXNnJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAocmVxdWVzdE9iamVjdCwgZXJyb3IsIGVycm9yVGhyb3duKSA9PiB7fSxcbiAgICAoY29tcGxldGUpID0+IHt9LFxuKSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4tYmRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLWJkLmpzXCIsXG5cdFwiLi9ibi1iZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4tYmQuanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taW4uanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1zZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VuLXNnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1zZy5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLW14XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1teC5qc1wiLFxuXHRcIi4vZXMtbXguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLW14LmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZpbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1kZXZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWRldmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9vYy1sbmNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vb2MtbG5jLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtbW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC1tby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtbW8uanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJpbXBvcnQgJ3VtYnJlbGxhX2NvcmUvdmVuZG9yL192ZW5kb3InO1xuaW1wb3J0ICd1bWJyZWxsYV9jb3JlL2pxdWVyeS1wbHVnaW5zL19qcXVlcnlfcGx1Z2lucyc7XG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCBTaWRlYmFyIGZyb20gXCJ1bWJyZWxsYV9hZG1pbi9jb21wb25lbnRzL1NpZGViYXJcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcInVtYnJlbGxhX2FkbWluL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gXCJ1bWJyZWxsYV9hZG1pbi9jb21wb25lbnRzL05vdGlmaWNhdGlvblwiO1xuXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gXCJ1bWJyZWxsYV9jb3JlL2NvbXBvbmVudHMvRGF0YVRhYmxlXCI7XG5pbXBvcnQgU2VsZWN0MiBmcm9tIFwidW1icmVsbGFfY29yZS9jb21wb25lbnRzL1NlbGVjdDJcIjtcbmltcG9ydCBBc3luY1NlbGVjdDIgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29tcG9uZW50cy9Bc3luY1NlbGVjdDJcIjtcbmltcG9ydCBUYWdzSW5wdXQgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29tcG9uZW50cy9UYWdzSW5wdXRcIjtcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJ1bWJyZWxsYV9jb3JlL2NvbXBvbmVudHMvRGF0ZVBpY2tlclwiO1xuaW1wb3J0IERhdGVUaW1lUGlja2VyIGZyb20gXCJ1bWJyZWxsYV9jb3JlL2NvbXBvbmVudHMvRGF0ZVRpbWVQaWNrZXJcIjtcbmltcG9ydCBGaWxlVXBsb2FkIGZyb20gXCJ1bWJyZWxsYV9jb3JlL2NvbXBvbmVudHMvRmlsZVVwbG9hZFwiO1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSBcInVtYnJlbGxhX2NvcmUvY29tcG9uZW50cy9Db2xsZWN0aW9uXCI7XG5cbi8vIERlZmF1bHQganF1ZXJ5IHBsdWdpbiBvcHRpb25zXG4kLmZuLmRhdGFUYWJsZS5leHQuZXJyTW9kZSA9ICd0aHJvdyc7XG4kLnRvYXN0Lm9wdGlvbnMucG9zaXRpb24gPSAnYm90dG9tLXJpZ2h0JztcblxuLy8gQXBwXG5pbXBvcnQgVW1icmVsbGFBcHAgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29yZS9VbWJyZWxsYUFwcFwiO1xuaW1wb3J0IEpzUmVzcG9uc2VIYW5kbGVyIGZyb20gXCJ1bWJyZWxsYV9jb3JlL2NvcmUvQWpheEpzUmVzcG9uc2VIYW5kbGVyXCI7XG5cbmNvbnN0IGFwcCA9IG5ldyBVbWJyZWxsYUFwcCgpO1xud2luZG93LmFwcCA9IGFwcDtcblxuYXBwLnVzZSgnW2RhdGEtbW91bnQ9U2lkZWJhcl0nLCBTaWRlYmFyKTtcbmFwcC51c2UoJ1tkYXRhLW1vdW50PUxheW91dF0nLCBMYXlvdXQpO1xuYXBwLnVzZSgnW2RhdGEtbW91bnQ9RGF0YVRhYmxlXScsIERhdGFUYWJsZSk7XG5hcHAudXNlKCdbZGF0YS1tb3VudD1Ob3RpZmljYXRpb25dJywgTm90aWZpY2F0aW9uKTtcblxuYXBwLnVzZSgnLmpzLXNlbGVjdDInLCBTZWxlY3QyKTtcbmFwcC51c2UoJy5qcy1hc3luYy1zZWxlY3QyJywgQXN5bmNTZWxlY3QyKTtcbmFwcC51c2UoJy5qcy10YWcnLCBUYWdzSW5wdXQpO1xuYXBwLnVzZSgnLmpzLWRhdGVwaWNrZXInLCBEYXRlUGlja2VyKTtcbmFwcC51c2UoJy5qcy1kYXRldGltZXBpY2tlcicsIERhdGVUaW1lUGlja2VyKTtcbmFwcC51c2UoJy5qcy11bWJyZWxsYS1maWxldXBsb2FkJywgRmlsZVVwbG9hZCk7XG5hcHAudXNlKCcuanMtdW1icmVsbGEtY29sbGVjdGlvbicsIENvbGxlY3Rpb24pO1xuXG5hcHAudXNlQWpheEhhbmRsZXIoJ2RlZmF1bHQnLCBuZXcgSnNSZXNwb25zZUhhbmRsZXIoKSk7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwidW1icmVsbGFfY29yZS9jb3JlL0NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoJHZpZXcpIHtcbiAgICAgICAgc3VwZXIoJHZpZXcpO1xuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkKHdpbmRvdyk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuJHdpbmRvdy5vbigncmVzaXplJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuYWRqdXN0TGF5b3V0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRqdXN0TGF5b3V0KCk7XG4gICAgfVxuXG4gICAgYWRqdXN0TGF5b3V0KCkge1xuICAgICAgICAvLyBpbiBjYXNlIG9mIHNtYWxsIHNpemUsIGFkZCBjbGFzcyBlbmxhcmdlIHRvIGhhdmUgbWluaW1hbCBtZW51XG4gICAgICAgIGlmICh0aGlzLiR3aW5kb3cud2lkdGgoKSA+PSA3NjcgJiYgdGhpcy4kd2luZG93LndpZHRoKCkgPD0gMTAyOCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZUNvbmRlbnNlZFNpZGViYXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVzYWN0aXZhdGVDb25kZW5zZWRTaWRlYmFyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYWN0aXZhdGVDb25kZW5zZWRTaWRlYmFyKCkge1xuICAgICAgICB0aGlzLiR2aWV3LmF0dHIoJ2RhdGEtbGVmdGJhci1jb21wYWN0LW1vZGUnLCAnY29uZGVuc2VkJyk7XG4gICAgfVxuXG4gICAgZGVzYWN0aXZhdGVDb25kZW5zZWRTaWRlYmFyKCkge1xuICAgICAgICB0aGlzLiR2aWV3LmF0dHIoJ2RhdGEtbGVmdGJhci1jb21wYWN0LW1vZGUnLCBmYWxzZSk7XG4gICAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29yZS9Db21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWZpY2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBwb2xsID0gMTAwMDA7IC8vIDEwc1xuXG4gICAgY29uc3RydWN0b3IoJHZpZXcpIHtcbiAgICAgICAgc3VwZXIoJHZpZXcpO1xuXG4gICAgICAgIHRoaXMucmVmcmVzaFVybCA9ICR2aWV3LmRhdGEoJ3JlZnJlc2gtdXJsJyk7XG4gICAgICAgIHRoaXMucmVmcmVzaFhociA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fYmluZCgpO1xuICAgIH1cblxuICAgIF9iaW5kKCkge1xuICAgICAgICB0aGlzLiR2aWV3Lm9uKCdzaG93bi5icy5kcm9wZG93bicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlZnJlc2godHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHZpZXcub24oJ2NsaWNrJywgJ1tkYXRhLWhyZWZdJywgKGUpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJChlLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2hyZWYnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVmcmVzaCBOb3RpZmljYXRpb25zXG4gICAgICovXG4gICAgX3JlZnJlc2gocG9sbCA9IHRydWUpIHtcbiAgICAgICAgaWYgKHRoaXMucmVmcmVzaFhocikge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoWGhyLmFib3J0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5faXNPcGVuKCkpIHtcbiAgICAgICAgICAgICQuZ2V0KHRoaXMucmVmcmVzaFVybCwgKG5vdGlmaWNhdGlvbnMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJMaXN0KG5vdGlmaWNhdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChwb2xsKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVmcmVzaCgpXG4gICAgICAgICAgICAgICAgICAgIH0sIE5vdGlmaWNhdGlvbi5wb2xsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBsaXN0IG9mIG5vdGlmaWNhdGlvbnNcbiAgICAgKi9cbiAgICBfcmVuZGVyTGlzdChub3RpZmljYXRpb25zKSB7XG4gICAgICAgIGNvbnN0ICRsaXN0ID0gdGhpcy4kdmlldy5maW5kKCcuanMtbm90aWZpY2FyaW9uLWxpc3QgLnNpbXBsZWJhci1jb250ZW50Jyk7XG4gICAgICAgICRsaXN0Lmh0bWwoJycpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCRsaXN0WzBdKTtcblxuICAgICAgICBmb3IgKGxldCBub3RpZmljYXRpb24gb2Ygbm90aWZpY2F0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgdHBsID0gdGhpcy5fZ2V0VGVtcGxhdGUobm90aWZpY2F0aW9uKTtcbiAgICAgICAgICAgIGlmICh0cGwpIHtcbiAgICAgICAgICAgICAgICAkbGlzdC5hcHBlbmQobXVzdGFjaGUucmVuZGVyKHRwbCwgbm90aWZpY2F0aW9uKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICRsaXN0LmFwcGVuZChtdXN0YWNoZS5yZW5kZXIoJCgnI25vdGlmaWNhdGlvbi1lbXB0eS10cGwnKS5odG1sKCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9pc09wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2aWV3LmZpbmQoJy5kcm9wZG93bi1tZW51JykuaGFzQ2xhc3MoJ3Nob3cnKTtcbiAgICB9XG5cbiAgICBfZ2V0VGVtcGxhdGUobm90aWZpY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IHRwbElkID0gYCNub3RpZmljYXRpb24tZnctJHtub3RpZmljYXRpb24uc3RhdGV9LXRwbGA7XG4gICAgICAgIGlmICgkKHRwbElkKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAkKHRwbElkKS5odG1sKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIHRlbXBsYXRlIGZvdW5kIHdpdGggaWQgJyArIHRwbElkKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29yZS9Db21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZWJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoJHZpZXcpIHtcbiAgICAgICAgc3VwZXIoJHZpZXcpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLiR2aWV3Lm1ldGlzTWVudSgpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ1dHRvbi1tZW51LW1vYmlsZScsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3NpZGViYXItZW5hYmxlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgVXRpbHMgZnJvbSBcInVtYnJlbGxhX2NvcmUvdXRpbHMvVXRpbHNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29yZS9Db21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXN5bmNTZWxlY3QyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCR2aWV3KSB7XG4gICAgICAgIHN1cGVyKCR2aWV3KTtcblxuICAgICAgICBpZiAoJC5zZWxlY3QyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgdXNlIEFzeW5jU2VsZWN0Miwgc2VsZWN0MiBwbHVnaW4gbm90IGxvYWRlZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGNvbmZpZ3VyZU9wdGlvbnMoKSB7XG4gICAgICAgIGxldCBkYXRhX29wdGlvbnMgPSB0aGlzLiR2aWV3LmRhdGEoJ29wdGlvbnMnKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBkYXRhX29wdGlvbnMgPyBKU09OLnBhcnNlKFV0aWxzLmRlY29kZV9odG1sKGRhdGFfb3B0aW9ucykpIDoge307XG4gICAgICAgIHRoaXMuczJfb3B0aW9ucyA9IHRoaXMub3B0aW9uc1snc2VsZWN0MiddID8gdGhpcy5vcHRpb25zWydzZWxlY3QyJ10gOiB7fTtcblxuICAgICAgICBsZXQgcmVxdWVzdDtcbiAgICAgICAgbGV0IHNjcm9sbCA9IHRoaXMub3B0aW9uc1snc2Nyb2xsJ10gfHwgZmFsc2U7XG4gICAgICAgIGxldCBwcmVmaXggPSBEYXRlLm5vdygpO1xuICAgICAgICBsZXQgY2FjaGUgPSBbXTtcblxuICAgICAgICB0aGlzLnMyX29wdGlvbnNbJ2FqYXgnXSA9IHtcbiAgICAgICAgICAgIHVybDogdGhpcy5vcHRpb25zWydhamF4X3VybCddIHx8IG51bGwsXG4gICAgICAgICAgICBkZWxheTogdGhpcy5vcHRpb25zWydhamF4X2RlbGF5J10gfHwgMjUwLFxuICAgICAgICAgICAgdHJhbnNwb3J0OiAocGFyYW1zLCBzdWNjZXNzLCBmYWlsdXJlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gaXMgY2FjaGluZyBlbmFibGVkP1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ2FqYXhfY2FjaGUnXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0cnkgdG8gbWFrZSB0aGUga2V5IHVuaXF1ZSB0byBtYWtlIGl0IGxlc3MgbGlrZWx5IGZvciBhIHBhZ2UrcSB0byBtYXRjaCBhIHJlYWwgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IHByZWZpeCArICcgcGFnZTonICsgKHBhcmFtcy5kYXRhLnBhZ2UgfHwgMSkgKyAnICcgKyBwYXJhbXMuZGF0YS5xO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FjaGVUaW1lb3V0ID0gdGhpcy5vcHRpb25zWydhamF4X2NhY2hlX3RpbWVvdXQnXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gY2FjaGUgZW50cnkgZm9yICd0ZXJtJyBvciB0aGUgY2FjaGUgaGFzIHRpbWVkIG91dD9cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWNoZVtrZXldID09PSAndW5kZWZpbmVkJyB8fCAoY2FjaGVUaW1lb3V0ICYmIERhdGUubm93KCkgPj0gY2FjaGVba2V5XS50aW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQuYWpheChwYXJhbXMpLmZhaWwoZmFpbHVyZSkuZG9uZSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IGNhY2hlVGltZW91dCA/IERhdGUubm93KCkgKyBjYWNoZVRpbWVvdXQgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gY2FjaGVkIGRhdGEgd2l0aCBubyBhamF4IHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoY2FjaGVba2V5XS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIGNhY2hpbmcgZW5hYmxlZC4ganVzdCBkbyB0aGUgYWpheCByZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCA9ICQuYWpheChwYXJhbXMpLmZhaWwoZmFpbHVyZSkuZG9uZShzdWNjZXNzKS5hbHdheXMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcmV0ID0ge1xuICAgICAgICAgICAgICAgICAgICAncSc6IHBhcmFtcy50ZXJtLFxuICAgICAgICAgICAgICAgICAgICAnZmllbGRfbmFtZSc6IHRoaXMub3B0aW9uc1snbmFtZSddXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIG9ubHkgc2VuZCB0aGUgJ3BhZ2UnIHBhcmFtZXRlciBpZiBzY3JvbGxpbmcgaXMgZW5hYmxlZFxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0WydwYWdlJ10gPSBwYXJhbXMucGFnZSB8fCAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvY2Vzc1Jlc3VsdHM6IChkYXRhLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0cywgbW9yZSA9IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHt9O1xuICAgICAgICAgICAgICAgIHBhcmFtcy5wYWdlID0gcGFyYW1zLnBhZ2UgfHwgMTtcblxuICAgICAgICAgICAgICAgIGlmICgkLmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYXNzdW1lIHJlbW90ZSByZXN1bHQgd2FzIHByb3BlciBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgICAgICAgICAgICAgICAgbW9yZSA9IGRhdGEubW9yZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWlsc2FmZVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5wYWdpbmF0aW9uID0ge21vcmU6IG1vcmV9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNwb25zZS5yZXN1bHRzID0gcmVzdWx0cztcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ3JlbmRlcl9odG1sJ10pIHtcbiAgICAgICAgICAgIHRoaXMuczJfb3B0aW9uc1snZXNjYXBlTWFya3VwJ10gPSAodGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuczJfb3B0aW9uc1sndGVtcGxhdGVSZXN1bHQnXSA9IChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmh0bWwgPyBvcHRpb24uaHRtbCA6IG9wdGlvbi50ZXh0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuczJfb3B0aW9uc1sndGVtcGxhdGVTZWxlY3Rpb24nXSA9IChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLnRleHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdGVtcGxhdGluZyA/XG4gICAgICAgICAgICBsZXQgbXVzdGFjaGVUZW1wbGF0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ3RlbXBsYXRlX3NlbGVjdG9yJ10pIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGVtcGxhdGUgPSAkKHRoaXMub3B0aW9uc1sndGVtcGxhdGVfc2VsZWN0b3InXSk7XG4gICAgICAgICAgICAgICAgaWYgKCR0ZW1wbGF0ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIHRlbXBsYXRlIGZvdW5kIHdpdGggc2VsZWN0b3IgXCIgKyB0aGlzLm9wdGlvbnNbJ3RlbXBsYXRlX3NlbGVjdG9yJ10pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG11c3RhY2hlVGVtcGxhdGUgPSAkdGVtcGxhdGUuaHRtbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uc1sndGVtcGxhdGVfaHRtbCddKSB7XG4gICAgICAgICAgICAgICAgbXVzdGFjaGVUZW1wbGF0ZSA9IHRoaXMub3B0aW9uc1sndGVtcGxhdGVfaHRtbCddO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobXVzdGFjaGVUZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuczJfb3B0aW9uc1sndGVtcGxhdGVSZXN1bHQnXSA9IChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXRlLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUudGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKCc8c3Bhbj4nICsgbXVzdGFjaGUucmVuZGVyKG11c3RhY2hlVGVtcGxhdGUsIHN0YXRlKSArICc8L3NwYW4+Jyk7XG5cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmVPcHRpb25zKCk7XG4gICAgICAgIHRoaXMuJHZpZXcuc2VsZWN0Mih0aGlzLnMyX29wdGlvbnMpO1xuICAgICAgICB0aGlzLiR2aWV3LnNob3coKTtcbiAgICB9XG59IiwiaW1wb3J0IGRyYWd1bGEgZnJvbSAnZHJhZ3VsYSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCJ1bWJyZWxsYV9jb3JlL2NvcmUvQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoJHZpZXcpIHtcbiAgICAgICAgc3VwZXIoJHZpZXcpO1xuXG4gICAgICAgIHRoaXMucHJvdG90eXBlID0gdGhpcy4kdmlldy5kYXRhKCdwcm90b3R5cGUnKTtcbiAgICAgICAgdGhpcy5wcm90b3R5cGVfbmFtZSA9IHRoaXMuJHZpZXcuZGF0YSgncHJvdG90eXBlLW5hbWUnKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuJHZpZXcuZGF0YSgnaW5kZXgnKTtcbiAgICAgICAgdGhpcy5tYXhMZW5ndGggPSB0aGlzLiR2aWV3LmRhdGEoJ21heExlbmd0aCcpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlQWRkKCk7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgIH1cblxuICAgIGJpbmQoKSB7XG4gICAgICAgIC8vIGJpbmQgYWRkIHJvd1xuICAgICAgICB0aGlzLiR2aWV3Lm9uKCdjbGljaycsICcuanMtYWRkLXJvdycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IDE7XG4gICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHRoaXMucHJvdG90eXBlX25hbWUsIFwiZ1wiKTtcbiAgICAgICAgICAgIGNvbnN0ICRuZXdSb3cgPSAkKHRoaXMucHJvdG90eXBlLnJlcGxhY2UocmVnZXhwLCB0aGlzLmluZGV4KSk7XG5cbiAgICAgICAgICAgIHRoaXMuJHZpZXcuZGF0YSgnaW5kZXgnLCB0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuJHZpZXcuZmluZCgndGJvZHknKS5maXJzdCgpLmFwcGVuZCgkbmV3Um93KTtcblxuICAgICAgICAgICAgLy8gYmluZCByb3dcbiAgICAgICAgICAgIGFwcC5tb3VudCgkbmV3Um93KTtcblxuICAgICAgICAgICAgdGhpcy50b2dnbGVBZGQoKTtcbiAgICAgICAgICAgIHRoaXMuJHZpZXcudHJpZ2dlcignZm9ybTpyb3c6YWRkJywgWyRuZXdSb3ddKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYmluZCBkZWxldGUgcm93XG4gICAgICAgIHRoaXMuJHZpZXcub24oJ2NsaWNrJywgJy5qcy1kZWwtcm93JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJChlLmN1cnJlbnRUYXJnZXQpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUFkZCgpO1xuXG4gICAgICAgICAgICB0aGlzLiR2aWV3LnRyaWdnZXIoJ2Zvcm06cm93OmRlbCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBiZWZvcmUgc3VibWl0ID0+IHJlZnJlc2ggaW5wdXQgcm93IG9yZGVyXG4gICAgICAgIHRoaXMuJHZpZXcuY2xvc2VzdCgnZm9ybVtkYXRhLW1vdW50PVwiRm9ybVwiXScpLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgb3JkZXIgPSAwO1xuICAgICAgICAgICAgdGhpcy4kdmlldy5maW5kKCcuanMtb3JkZXInKS5lYWNoKChpLCBlKSA9PiB7XG4gICAgICAgICAgICAgICAgJChlKS52YWwob3JkZXIpO1xuICAgICAgICAgICAgICAgIG9yZGVyKys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc29ydGluZ1xuICAgICAgICBpZiAodGhpcy4kdmlldy5kYXRhKCdzb3J0YWJsZScpKSB7XG4gICAgICAgICAgICBkcmFndWxhKHtcbiAgICAgICAgICAgICAgICBjb250YWluZXJzOiBbdGhpcy4kdmlldy5maW5kKCd0Ym9keScpWzBdXSxcbiAgICAgICAgICAgICAgICBtb3ZlczogZnVuY3Rpb24gKGVsLCBzb3VyY2UsIGhhbmRsZSwgc2libGluZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucygnanMtc29ydC1oYW5kbGUnKSB8fCBoYW5kbGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLXNvcnQtaGFuZGxlJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtaXJyb3JDb250YWluZXI6IHRoaXMuJHZpZXcuZmluZCgndGJvZHknKVswXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZpZXcuZmluZCgndGJvZHkgdHInKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgdG9nZ2xlQWRkKCkge1xuICAgICAgICBpZiAodGhpcy5tYXhMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLiR2aWV3LmZpbmQoJy5qcy1hZGQtcm93JykudG9nZ2xlQ2xhc3MoJ2Qtbm9uZScsIHRoaXMuY291bnQoKSA+PSB0aGlzLm1heExlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgVG9vbGJhciBmcm9tIFwiLi9Ub29sYmFyXCI7XG5pbXBvcnQgQWpheFV0aWxzIGZyb20gXCJ1bWJyZWxsYV9jb3JlL3V0aWxzL0FqYXhVdGlsc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwidW1icmVsbGFfY29yZS9jb3JlL0NvbXBvbmVudFwiO1xuXG4vKipcbiAqIEN1c3RvbSBldmVudCA6XG4gKiBkcmF3OmJlZm9yZVxuICogZHJhdzpkb25lXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcigkdmlldykge1xuICAgICAgICBzdXBlcigkdmlldyk7XG5cbiAgICAgICAgdGhpcy4kdGFibGUgPSB0aGlzLiR2aWV3LmZpbmQoJ3RhYmxlJyk7XG4gICAgICAgIHRoaXMudGFibGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuJHRvb2xiYXIgPSB0aGlzLiR2aWV3LmZpbmQoJ3Rvb2xiYXInKTtcbiAgICAgICAgdGhpcy50b29sYmFyID0gbnVsbDtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkdmlldy5kYXRhKCdvcHRpb25zJykgfHwge307XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuXG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXJ0QXV0b1JlbG9hZCh0aGlzLm9wdGlvbnNbJ3BvbGxfaW50ZXJ2YWwnXSk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmVPcHRpb25zKCk7XG4gICAgICAgIHRoaXMudG9vbGJhciA9IG5ldyBUb29sYmFyKHRoaXMuJHRvb2xiYXIsIHtcbiAgICAgICAgICAgICdzdWJtaXRPbkNoYW5nZSc6IHRydWUsXG4gICAgICAgICAgICAnb25TdWJtaXQnOiAoZSwgdG9vbGJhcikgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YWJsZSA9IHRoaXMuJHRhYmxlLkRhdGFUYWJsZSh0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIGJpbmQoKSB7XG4gICAgICAgIC8vIHRvb2xiYXIgPT4gaGFuZGxlIHNvbWUgdG9vbGJhciBhY3Rpb25cbiAgICAgICAgdGhpcy4kdG9vbGJhci5vbignY2xpY2snLCAnW2RhdGEtZXh0cmEtZGF0YV0nLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0ICRlID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgZXh0cmFEYXRhVGFnID0gJGUuZGF0YSgnZXh0cmEtZGF0YScpO1xuXG4gICAgICAgICAgICAvLyBhdm9pZCBkZWZhdWx0IGFjdGlvblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IFtdO1xuICAgICAgICAgICAgaWYgKGV4dHJhRGF0YVRhZyA9PT0gJ2R0X2ZpbHRlcicpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5nZXRUYWJsZURhdGEoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihleHRyYURhdGFUYWcgPT09ICdkdF9zZWxlY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMuZ2V0U2VsZWN0ZWREYXRhKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGRvIGFqYXggY2FsbCBhbmQgc2VuZCBleHRyYSBwYXJhbXNcbiAgICAgICAgICAgIGlmICgkZS5kYXRhKCd4aHInKSkge1xuICAgICAgICAgICAgICAgIEFqYXhVdGlscy5oYW5kbGVMaW5rKCRlLCB7ZGF0YTogZGF0YX0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgkZS5hdHRyKCdocmVmJykpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICRlLmF0dHIoJ2hyZWYnKSArICc/JyArICQucGFyYW0oZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJvdyB0b2dnbGVcbiAgICAgICAgdGhpcy4kdGFibGUub24oJ2NoYW5nZScsICcuanMtdG9nZ2xlLXdpZGdldCBpbnB1dFt0eXBlPWNoZWNrYm94XScsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZSA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGlmICgkZS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgIEFqYXhVdGlscy5nZXQoe3VybDogJGUuZGF0YSgneWVzLXVybCcpfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEFqYXhVdGlscy5nZXQoe3VybDogJGUuZGF0YSgnbm8tdXJsJyl9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcm93IHJlLW9yZGVyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ3Jvd1Jlb3JkZXInXSkge1xuICAgICAgICAgICAgdGhpcy50YWJsZS5vbigncm93LXJlb3JkZXInLCAoZSwgZGlmZiwgZWRpdCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjaGFuZ2VTZXQgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaWVuID0gZGlmZi5sZW5ndGg7IGkgPCBpZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSB0aGlzLnRhYmxlLnJvdyhkaWZmW2ldLm5vZGUpLmlkKCk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVNldC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ29sZF9zZXF1ZW5jZSc6ICQoZGlmZltpXS5vbGREYXRhKS5kYXRhKCdzZXF1ZW5jZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ25ld19zZXF1ZW5jZSc6ICQoZGlmZltpXS5uZXdEYXRhKS5kYXRhKCdzZXF1ZW5jZScpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBhamF4X3VybCA9IHRoaXMub3B0aW9uc1sncm93UmVvcmRlciddWyd1cmwnXTtcbiAgICAgICAgICAgICAgICBpZiAoYWpheF91cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgQWpheFV0aWxzLmdldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGFqYXhfdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGFuZ2Vfc2V0JzogY2hhbmdlU2V0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcm93IHNlbGVjdFxuICAgICAgICB0aGlzLnRhYmxlLm9uKCdjbGljaycsICd0aGVhZCAuanMtYWN0aW9uLXNlbGVjdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGxldCAkY2hlY2tib3hlcyA9IHRoaXMuJHRhYmxlLmZpbmQoJ3Rib2R5IHRyIHRkLmpzLXNlbGVjdCBpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuICAgICAgICAgICAgJGNoZWNrYm94ZXMucHJvcCgnY2hlY2tlZCcsICR0YXJnZXQuZGF0YSgnZmlsdGVyJykgPT09ICdhbGwnKTtcbiAgICAgICAgICAgICRjaGVja2JveGVzLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRhYmxlLm9uKCdjaGFuZ2UnLCAndGJvZHkgdHIgdGQuanMtc2VsZWN0IGlucHV0W3R5cGU9Y2hlY2tib3hdJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgbGV0ICR0ciA9ICR0YXJnZXQuY2xvc2VzdCgndHInKTtcbiAgICAgICAgICAgIGlmICgkdGFyZ2V0LnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICR0ci5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHRyLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBkZWZhdWx0IGVycm9yIGhhbmRsZXJcbiAgICAgICAgdGhpcy50YWJsZS5vbignZXJyb3IuZHQnLCAoZSwgc2V0dGluZ3MsIHRlY2hOb3RlLCBtZXNzYWdlKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBodG1sID0gJzx0cj4nO1xuICAgICAgICAgICAgaHRtbCArPSAnPHRkIGNsYXNzPVwidGV4dC1kYW5nZXIgdGV4dC1jZW50ZXJcIiBjb2xzcGFuPVwiMTAwJVwiPic7XG4gICAgICAgICAgICBodG1sICs9ICc8aSBjbGFzcz1cIm1kaSBtZGktYWxlcnQtY2lyY2xlLW91dGxpbmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IEltcG9zc2libGUgZGUgY2hhcmdlciBsZXMgZG9ubsOpZXMnO1xuICAgICAgICAgICAgaHRtbCArPSAnPC90ZD4nO1xuICAgICAgICAgICAgaHRtbCArPSAnPC90cj4nO1xuXG4gICAgICAgICAgICB0aGlzLiR2aWV3LmZpbmQoJ3Rib2R5JykuaHRtbChodG1sKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcEF1dG9SZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uZmlndXJlT3B0aW9ucygpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zWydhamF4J11bJ2RhdGEnXSA9IChkKSA9PiB7XG4gICAgICAgICAgICAvLyBhdm9pZCBzZW5kaW5nIHVudXNlZCBwYXJhbXNcbiAgICAgICAgICAgIGRlbGV0ZSBkWydjb2x1bW5zJ107XG4gICAgICAgICAgICBkZWxldGUgZFsnc2VhcmNoJ107XG4gICAgICAgICAgICByZXR1cm4gey4uLmQsIC4uLnRoaXMub3B0aW9uc1snYWpheF9kYXRhJ10sIC4uLnRoaXMudG9vbGJhci5nZXREYXRhKCl9O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9wdGlvbnNbJ3ByZURyYXdDYWxsYmFjayddID0gKHNldHRpbmdzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiR2aWV3LnRyaWdnZXIoJ2RyYXc6YmVmb3JlJyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub3B0aW9uc1snZHJhd0NhbGxiYWNrJ10gPSAoc2V0dGluZ3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHZpZXcudHJpZ2dlcignZHJhdzpkb25lJyk7XG5cbiAgICAgICAgICAgIC8vIHRvb2x0aXBcbiAgICAgICAgICAgIHRoaXMuJHZpZXcuZmluZCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcblxuICAgICAgICAgICAgLy8gdHJlZWdyaWRcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ3RyZWUnXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHRhYmxlLnRyZWVncmlkKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyZWVDb2x1bW4nOiB0aGlzLm9wdGlvbnNbJ3RyZWVfY29sdW1uJ10sXG4gICAgICAgICAgICAgICAgICAgICdpbml0aWFsU3RhdGUnOiB0aGlzLm9wdGlvbnNbJ3RyZWVfc3RhdGUnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBwb3BvdmVyXG4gICAgICAgICAgICB0aGlzLiR0YWJsZS5maW5kKCdbZGF0YS10b2dnbGU9cG9wb3Zlcl0nKS5wb3BvdmVyKHtcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuJHRhYmxlLFxuICAgICAgICAgICAgICAgIGh0bWw6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbG9hZChwYWdpbmcgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuJHRhYmxlLkRhdGFUYWJsZSgpLmRyYXcocGFnaW5nKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5U3Bpbm5lcigpIHtcbiAgICAgICAgdGhpcy4kdGFibGUuZmluZCgndGJvZHknKS5odG1sKHRoaXMuJHRhYmxlLmZpbmQoJ3Rib2R5JykuZGF0YSgnc3Bpbm5lcicpKTtcbiAgICB9XG5cbiAgICBnZXRTZWxlY3RlZERhdGEoKSB7XG4gICAgICAgIGxldCBpZHMgPSBbXTtcbiAgICAgICAgdGhpcy4kdGFibGUuZmluZCgndGJvZHkgdHIuc2VsZWN0ZWRbZGF0YS1pZF0nKS5lYWNoKChlLCBlbHQpID0+IHtcbiAgICAgICAgICAgIGlkcy5wdXNoKCQoZWx0KS5kYXRhKCdpZCcpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7J2lkcyc6IGlkc307XG4gICAgfVxuXG4gICAgZ2V0VGFibGVEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YWJsZS5hamF4LnBhcmFtcygpO1xuICAgIH1cblxuICAgIHN0YXJ0QXV0b1JlbG9hZChwb2xsSW50ZXJ2YWwpIHtcbiAgICAgICAgdGhpcy5wb2xsSW50ZXJ2YWwgPSBwb2xsSW50ZXJ2YWw7XG4gICAgICAgIGlmICh0aGlzLnBvbGxJbnRlcnZhbCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX19hdXRvUmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wQXV0b1JlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5wb2xsSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX19hdXRvUmVsb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5wb2xsSW50ZXJ2YWwgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxvYWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuX19hdXRvUmVsb2FkKCk7XG4gICAgICAgICAgICB9LCB0aGlzLnBvbGxJbnRlcnZhbCAqIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwidW1icmVsbGFfY29yZS9jb3JlL0NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlUGlja2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCR2aWV3KSB7XG4gICAgICAgIHN1cGVyKCR2aWV3KTtcblxuICAgICAgICBpZiAoJC5kYXRlcGlja2VyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgdXNlIEFzeW5jU2VsZWN0MiwgZGF0ZXBpY2tlciBwbHVnaW4gbm90IGxvYWRlZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGZvcm1hdDogdGhpcy4kdmlldy5kYXRhKCdmb3JtYXQnKSA/IHRoaXMuJHZpZXcuZGF0YSgnZm9ybWF0JykgOiBudWxsLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6ICdmcicsXG4gICAgICAgICAgICBhdXRvY2xvc2U6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy4kdmlldy5kYXRlcGlja2VyKHRoaXMub3B0aW9ucyk7XG4gICAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29yZS9Db21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVRpbWVQaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoJHZpZXcpIHtcbiAgICAgICAgc3VwZXIoJHZpZXcpO1xuXG4gICAgICAgIGlmICgkLmRhdGV0aW1lcGlja2VyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgdXNlIEFzeW5jU2VsZWN0MiwgZGF0ZXRpbWVwaWNrZXIgcGx1Z2luIG5vdCBsb2FkZWRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBmb3JtYXQ6IHRoaXMuJHZpZXcuZGF0YSgnZm9ybWF0JykgPyB0aGlzLiR2aWV3LmRhdGEoJ2Zvcm1hdCcpIDogbnVsbCxcbiAgICAgICAgICAgIGxvY2FsZTogJ2ZyJyxcbiAgICAgICAgICAgIHNpZGVCeVNpZGU6IHRydWUsXG4gICAgICAgICAgICBrZWVwT3BlbjogdHJ1ZSxcbiAgICAgICAgICAgIC8vIGlubGluZTogdHJ1ZSxcbiAgICAgICAgICAgIC8vIGRlYnVnOiB0cnVlLFxuICAgICAgICAgICAgdG9vbGJhclBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgICBzaG93Q2xlYXI6IHRoaXMuJHZpZXcuZGF0YSgnc2hvdy1jbGVhcicpID8gdGhpcy4kdmlldy5kYXRhKCdzaG93LWNsZWFyJykgOiBmYWxzZSxcbiAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgICAgdGltZTogJ21kaSBtZGktY2xvY2stb3V0bGluZScsXG4gICAgICAgICAgICAgICAgZGF0ZTogJ21kaSBtZGktY2FsZW5kYXInLFxuICAgICAgICAgICAgICAgIHVwOiAnIG1kaSBtZGktY2hldnJvbi11cCcsXG4gICAgICAgICAgICAgICAgZG93bjogJyBtZGkgbWRpLWNoZXZyb24tZG93bicsXG4gICAgICAgICAgICAgICAgcHJldmlvdXM6ICdjb250ZW50LXByZXYnLFxuICAgICAgICAgICAgICAgIG5leHQ6ICdjb250ZW50LW5leHQnLFxuICAgICAgICAgICAgICAgIHRvZGF5OiAnbWRpIG1kaS1jaGVjaycsXG4gICAgICAgICAgICAgICAgY2xlYXI6ICdtZGkgbWRpLWNsb3NlJyxcbiAgICAgICAgICAgICAgICBjbG9zZTogJ21kaSBtZGktY2xvc2UnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuJHZpZXcuZGF0YSgnbWluLWRhdGUnKSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1pbkRhdGUgPSB0aGlzLiR2aWV3LmRhdGEoJ21pbi1kYXRlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kdmlldy5kYXRhKCdtYXgtZGF0ZScpKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubWF4RGF0ZSA9IHRoaXMuJHZpZXcuZGF0YSgnbWF4LWRhdGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuJHZpZXcuZGF0ZXRpbWVwaWNrZXIodGhpcy5vcHRpb25zKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVXRpbHMgZnJvbSBcInVtYnJlbGxhX2NvcmUvdXRpbHMvVXRpbHNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29yZS9Db21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZVVwbG9hZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcigkdmlldykge1xuICAgICAgICBzdXBlcigkdmlldyk7XG5cbiAgICAgICAgdGhpcy4kaW5wdXRGaWxlID0gdGhpcy4kdmlldy5maW5kKCdpbnB1dC5qcy1maWxlJyk7XG4gICAgICAgIHRoaXMuJGlucHV0RW50aXR5ID0gdGhpcy4kdmlldy5maW5kKCdpbnB1dC5qcy1lbnRpdHknKTtcbiAgICAgICAgdGhpcy4kaW5wdXRUeHQgPSB0aGlzLiR2aWV3LmZpbmQoJ2lucHV0LmpzLXRleHQnKTtcbiAgICAgICAgdGhpcy4kaW5wdXREZWxldGUgPSB0aGlzLiR2aWV3LmZpbmQoJ2lucHV0LmpzLWRlbGV0ZScpO1xuXG4gICAgICAgIHRoaXMuJHJlbW92ZUJ0biA9IHRoaXMuJHZpZXcuZmluZCgnLmpzLXJlbW92ZScpO1xuICAgICAgICB0aGlzLiRkb3dubG9hZEJ0biA9IHRoaXMuJHZpZXcuZmluZCgnLmpzLWRvd25sb2FkJyk7XG4gICAgICAgIHRoaXMuJGJyb3dzZUJ0biA9IHRoaXMuJHZpZXcuZmluZCgnLmpzLWJyb3dzZScpO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmJpbmQoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuXG4gICAgICAgIGlmICh0aGlzLiR2aWV3LmRhdGEoJ2luaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlbW92ZUJ0bi5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRyZW1vdmVCdG4uYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZCgpIHtcbiAgICAgICAgdGhpcy4kYnJvd3NlQnRuLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgdGhpcy4kaW5wdXRGaWxlLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGlucHV0RmlsZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHJlbW92ZUJ0bi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuJGlucHV0RmlsZS5yZXBsYWNlV2l0aCh0aGlzLiRpbnB1dEZpbGUudmFsKCcnKS5jbG9uZSh0cnVlKSk7XG4gICAgICAgIHRoaXMuJGlucHV0RmlsZSA9IHRoaXMuJHZpZXcuZmluZCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKTtcbiAgICAgICAgdGhpcy4kaW5wdXREZWxldGUucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICB0aGlzLiRkb3dubG9hZEJ0bi5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIGxldCBmaWxlcyA9IHRoaXMuJGlucHV0RmlsZVswXS5maWxlcztcbiAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBmaWxlID0gZmlsZXNbMF07XG4gICAgICAgICAgICB0aGlzLiRpbnB1dFR4dC52YWwoZmlsZS5uYW1lICsgJyAtICcgKyBVdGlscy5ieXRlc190b19zaXplKGZpbGUuc2l6ZSkpO1xuICAgICAgICAgICAgdGhpcy4kcmVtb3ZlQnRuLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGlucHV0VHh0LnZhbCgnJyk7XG4gICAgICAgICAgICB0aGlzLiRyZW1vdmVCdG4uYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IFV0aWxzIGZyb20gXCJ1bWJyZWxsYV9jb3JlL3V0aWxzL1V0aWxzXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCJ1bWJyZWxsYV9jb3JlL2NvcmUvQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdDIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoJHZpZXcpIHtcbiAgICAgICAgc3VwZXIoJHZpZXcpO1xuXG4gICAgICAgIGlmICgkLnNlbGVjdDIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCB1c2UgU2VsZWN0Miwgc2VsZWN0MiBwbHVnaW4gbm90IGxvYWRlZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGNvbmZpZ3VyZU9wdGlvbnMoKSB7XG4gICAgICAgIGxldCBkYXRhX29wdGlvbnMgPSB0aGlzLiR2aWV3LmRhdGEoJ29wdGlvbnMnKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBkYXRhX29wdGlvbnMgPyBKU09OLnBhcnNlKFV0aWxzLmRlY29kZV9odG1sKGRhdGFfb3B0aW9ucykpIDoge307XG4gICAgICAgIHRoaXMuczJfb3B0aW9ucyA9IHRoaXMub3B0aW9uc1snc2VsZWN0MiddID8gdGhpcy5vcHRpb25zWydzZWxlY3QyJ10gOiB7fTtcblxuICAgICAgICAvLyB0ZW1wbGF0aW5nXG4gICAgICAgIGxldCBtdXN0YWNoZVRlbXBsYXRlID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zWyd0ZW1wbGF0ZV9zZWxlY3RvciddKSB7XG4gICAgICAgICAgICBjb25zdCAkdGVtcGxhdGUgPSAkKHRoaXMub3B0aW9uc1sndGVtcGxhdGVfc2VsZWN0b3InXSk7XG4gICAgICAgICAgICBpZiAoJHRlbXBsYXRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyB0ZW1wbGF0ZSBmb3VuZCB3aXRoIHNlbGVjdG9yIFwiICsgdGhpcy5vcHRpb25zWyd0ZW1wbGF0ZV9zZWxlY3RvciddKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbXVzdGFjaGVUZW1wbGF0ZSA9ICR0ZW1wbGF0ZS5odG1sKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zWyd0ZW1wbGF0ZV9odG1sJ10pIHtcbiAgICAgICAgICAgIG11c3RhY2hlVGVtcGxhdGUgPSB0aGlzLm9wdGlvbnNbJ3RlbXBsYXRlX2h0bWwnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtdXN0YWNoZVRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnMyX29wdGlvbnNbJ3RlbXBsYXRlUmVzdWx0J10gPSAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXRlLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS50ZXh0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gc3RhdGU7XG5cbiAgICAgICAgICAgICAgICAvLyBhZGQgZGF0YSByZXRyaWV2ZSBmcm9tIHZhbmlsbGEgb3B0aW9uIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBvc2VkRGF0YSA9ICQoc3RhdGUuZWxlbWVudCkuZGF0YSgnanNvbicpIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gey4uLmV4cG9zZWREYXRhLC4uLmRhdGF9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuICQoJzxzcGFuPicgKyBtdXN0YWNoZS5yZW5kZXIobXVzdGFjaGVUZW1wbGF0ZSwgZGF0YSkgKyAnPC9zcGFuPicpO1xuXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWpheCBsb2FkaW5nXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ2FqYXhfdXJsJ10pIHtcbiAgICAgICAgICAgIHRoaXMuczJfb3B0aW9uc1snYWpheCddID0ge1xuICAgICAgICAgICAgICAgIHVybDogdGhpcy5vcHRpb25zWydhamF4X3VybCddLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICAgICAgZGVsYXk6IDI1MCxcbiAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7cTogcGFyYW1zLnRlcm0sIHBhZ2U6IHBhcmFtcy5wYWdlfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1Jlc3VsdHM6IGZ1bmN0aW9uIChkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vcmUgPSBkYXRhLm1vcmUgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBkYXRhLml0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmU6IG1vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2FjaGU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuJHZpZXcuc2VsZWN0Mignb3BlbicpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJlT3B0aW9ucygpO1xuICAgICAgICB0aGlzLiR2aWV3LnNlbGVjdDIodGhpcy5zMl9vcHRpb25zKTtcbiAgICAgICAgdGhpcy4kdmlldy5zaG93KCk7XG4gICAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29yZS9Db21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFnc0lucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcigkdmlldykge1xuICAgICAgICBzdXBlcigkdmlldyk7XG5cbiAgICAgICAgaWYgKCQudGFnc2lucHV0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgdXNlIFRhZ3NJbnB1dCwgdGFnc2lucHV0IHBsdWdpbiBub3QgbG9hZGVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJHZpZXcudGFnc2lucHV0KCk7XG4gICAgfVxufVxuIiwiXG4vKipcbiAqIEN1c3RvbSBldmVudCA6XG4gKiB0YjpzdWJtaXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbGJhciB7XG5cbiAgICBjb25zdHJ1Y3Rvcigkdmlldywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLiR2aWV3ID0gJHZpZXc7XG4gICAgICAgIHRoaXMuJGZvcm0gPSB0aGlzLiR2aWV3LmZpbmQoJy5qcy10b29sYmFyLWZvcm0nKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgc3VibWl0T25DaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgb25TdWJtaXQ6IChlLCB0b29sYmFyKSA9PiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4udGhpcy5vcHRpb25zfTtcbiAgICB9XG5cbiAgICBiaW5kKCkge1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ3N1Ym1pdE9uQ2hhbmdlJ10gPT09IHRydWUpIHsgLy8gcmVsb2FkIG9uIGNoYW5nZVxuICAgICAgICAgICAgdGhpcy4kdmlldy5vbignY2hhbmdlJywgJ3NlbGVjdCwgaW5wdXRbdHlwZT1jaGVja2JveF0sIGlucHV0W3R5cGU9cmFkaW9dLCAuanMtZGF0ZXBpY2tlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiR2aWV3LnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCB0aW1lciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLiR2aWV3Lm9uKCdrZXl1cCcsICdpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXNlYXJjaF0nLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kdmlldy50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiR2aWV3Lm9uKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zWydvblN1Ym1pdCddKGUsIHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLiRmb3JtKSB7XG4gICAgICAgICAgICB0aGlzLiRmb3JtLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGZvcm0ubGVuZ3RoXG4gICAgICAgICAgICA/IHRoaXMuJGZvcm0uc2VyaWFsaXplRm9ybVRvSnNvbigpXG4gICAgICAgICAgICA6IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgQWpheEhhbmRsZXIgZnJvbSBcInVtYnJlbGxhX2NvcmUvY29yZS9BamF4SGFuZGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4Q2FsbGJhY2tIYW5kbGVyIGV4dGVuZHMgQWpheEhhbmRsZXJ7XG5cbiAgICBjb25zdHJ1Y3RvcihzdWNjZXNzLCBlcnJvciA9ICgpID0+IHt9LCBjb21wbGV0ZSA9ICgpID0+IHt9KSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fc3VjY2VzcyA9IHN1Y2Nlc3M7XG4gICAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlID0gY29tcGxldGU7XG4gICAgfVxuXG4gICAgc3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICB0aGlzLl9zdWNjZXNzKHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBlcnJvcihyZXF1ZXN0T2JqZWN0LCBlcnJvciwgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgdGhpcy5fZXJyb3IocmVxdWVzdE9iamVjdCwgZXJyb3IsIGVycm9yVGhyb3duKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4SGFuZGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBzdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgfVxuXG4gICAgZXJyb3IocmVxdWVzdE9iamVjdCwgZXJyb3IsIGVycm9yVGhyb3duKSB7XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgfVxuXG59IiwiaW1wb3J0IEFqYXhIYW5kbGVyIGZyb20gXCJ1bWJyZWxsYV9jb3JlL2NvcmUvQWpheEhhbmRsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheEpzUmVzcG9uc2VIYW5kbGVyIGV4dGVuZHMgQWpheEhhbmRsZXIge1xuXG4gICAgc3RhdGljIGFjdGlvbnMgPSB7XG5cbiAgICAgICAgZXhlY3V0ZV9qcyhwYXJhbXMpIHtcbiAgICAgICAgICAgIGV2YWwocGFyYW1zLnZhbHVlKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWxvYWQocGFyYW1zKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF07XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVkaXJlY3QocGFyYW1zKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBwYXJhbXMudmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9hc3QocGFyYW1zKSB7XG4gICAgICAgICAgICAkLnRvYXN0KHBhcmFtcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb3Blbl9tb2RhbChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxldCAkbW9kYWwgPSAkKHBhcmFtcy52YWx1ZSk7XG4gICAgICAgICAgICBsZXQgJG9wZW5lZF9tb2RhbCA9ICQoJy5qcy11bWJyZWxsYS1tb2RhbC5zaG93Jyk7XG5cbiAgICAgICAgICAgIGlmICgkb3BlbmVkX21vZGFsLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICRvcGVuZWRfbW9kYWwuaHRtbCgkbW9kYWwuZmluZCgnLm1vZGFsLWRpYWxvZycpKTtcbiAgICAgICAgICAgICAgICBhcHAubW91bnQoJG9wZW5lZF9tb2RhbCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvLyBIQUNLIDogYnMgNCBtb2RhbCBkb2Vzbid0IGV4ZWN1dGUgc2NyaXB0XG4gICAgICAgICAgICAgICAgJG1vZGFsLm9uKCdzaG93bi5icy5tb2RhbCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFwcC5tb3VudCgkKGUudGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRzY3JpcHRzID0gJChlLnRhcmdldCkuZmluZCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICAgICAgICAgICQuZWFjaCgkc2NyaXB0cywgKGksIHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgZXZhbCgkKHMpLmh0bWwoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICRtb2RhbC5vbignaGlkZGVuLmJzLm1vZGFsJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJChlLnRhcmdldCkuZGF0YSgnYnMubW9kYWwnLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgJChlLnRhcmdldCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkbW9kYWwubW9kYWwoJ3Nob3cnKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNsb3NlX21vZGFsKHBhcmFtcykge1xuICAgICAgICAgICAgbGV0ICRvcGVuZWRfbW9kYWwgPSAkKCcuanMtdW1icmVsbGEtbW9kYWwuc2hvdycpO1xuICAgICAgICAgICAgaWYgKCRvcGVuZWRfbW9kYWwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJG9wZW5lZF9tb2RhbC5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlbG9hZF90YWJsZShwYXJhbXMpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RvciA9ICcnO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5pZHMgJiYgcGFyYW1zLmlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBwYXJhbXMuaWRzLm1hcCgoaWQpID0+ICcjJyArIGlkKS5qb2luKCcsICcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvciA9ICdbZGF0YS1tb3VudD1EYXRhVGFibGVdJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEFqYXhKc1Jlc3BvbnNlSGFuZGxlci5hY3Rpb25zLmNvbXBvbmVudF9jYWxsKHNlbGVjdG9yLCAncmVsb2FkJyk7XG4gICAgICAgIH0sXG5cblxuICAgICAgICBjb21wb25lbnRfY2FsbChzZWxlY3RvciwgbWV0aG9kLCBhcmdzID0gW10pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbXBvbmVudCBvZiBhcHAuZ2V0Q29tcG9uZW50cyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRbbWV0aG9kXSguLi5hcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGUocGFyYW1zKSB7XG4gICAgICAgICAgICBjb25zdCAkdmlldyA9ICQocGFyYW1zLnNlbGVjdG9yKTtcbiAgICAgICAgICAgICR2aWV3Lmh0bWwocGFyYW1zLnZhbHVlKTtcbiAgICAgICAgICAgIGFwcC5tb3VudCgkdmlldyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlKHBhcmFtcykge1xuICAgICAgICAgICAgJChwYXJhbXMuc2VsZWN0b3IpLnJlbW92ZSgpO1xuICAgICAgICB9LFxuXG4gICAgfTtcblxuICAgIHN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzcG9uc2UpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1lc3NhZ2Ugb2YgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvQWN0aW9uKG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSnNSZXNwb25zZUhhbmRsZXIgOiBpbnZhbGlkIHJlc3BvbnNlLCBleHBlY3RlZCBqc29uIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3IocmVxdWVzdE9iamVjdCwgZXJyb3IsIGVycm9yVGhyb3duKVxuICAgIHtcbiAgICAgICAgaWYgKHJlcXVlc3RPYmplY3Quc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICQudG9hc3Qoe1xuICAgICAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlZvdXMgbidldGVzIHBsdXMgY29ubmVjdMOpLiBWZXVpbGxleiByYWZyYWljaGlyIGxhIHBhZ2UgcG91ciB2b3VzIGF1dGhlbnRpZmllclwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQudG9hc3Qoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGV4dDogXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvQWN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gQWpheEpzUmVzcG9uc2VIYW5kbGVyLmFjdGlvbnNbbWVzc2FnZS5hY3Rpb25dO1xuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQWpheEhhbmRsZXIgOiBpbnZhbGlkIGFjdGlvbiAnICsgbWVzc2FnZS5hY3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aW9uKG1lc3NhZ2UucGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBBamF4VXRpbHMgZnJvbSBcInVtYnJlbGxhX2NvcmUvdXRpbHMvQWpheFV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpbmQge1xuXG4gICAgY29uc3RydWN0b3IoJHZpZXcsIG5ld0RvbSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy4kdmlldyA9ICR2aWV3O1xuXG4gICAgICAgIHRoaXMuYmluZFRvb2x0aXAoKTtcbiAgICAgICAgdGhpcy5iaW5kVG9hc3QoKTtcbiAgICAgICAgdGhpcy5iaW5kUG9wb3ZlcigpO1xuXG4gICAgICAgIGlmICghbmV3RG9tKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmRGb3JtKCk7XG4gICAgICAgICAgICB0aGlzLmJpbmRMaW5rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kVG9vbHRpcCgpIHtcbiAgICAgICAgaWYgKCQudG9vbHRpcCkge1xuICAgICAgICAgICAgdGhpcy4kdmlldy5maW5kKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCh7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiR2aWV3XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRUb2FzdCgpIHtcbiAgICAgICAgaWYgKCQudG9hc3QpIHtcbiAgICAgICAgICAgIHRoaXMuJHZpZXcuZmluZCgnW2RhdGEtdG9nZ2xlPVwidG9hc3RcIl0nKS5lYWNoKChpLCBlKSA9PiB7XG4gICAgICAgICAgICAgICAgJC50b2FzdCgkKGUpLmRhdGEoJ29wdGlvbnMnKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZFBvcG92ZXIoKSB7XG4gICAgICAgIGlmICgkLnBvcG92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuJHZpZXcuZmluZCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoe1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kdmlld1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB5b3UgZG9uJ3Qgd2FudCB5b3VyIGZvcm0gd2FzIGJpbmQgOiB1c2UgY2xhc3Mgbm8tYmluZFxuICAgIGJpbmRGb3JtKCkge1xuICAgICAgICB0aGlzLiR2aWV3Lm9uKCdjbGljaycsICdbZGF0YS14aHJdOm5vdChmb3JtKTpub3QoLm5vLWJpbmQpJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIEFqYXhVdGlscy5oYW5kbGVMaW5rKCQoZS5jdXJyZW50VGFyZ2V0KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGlmIHlvdSBkb24ndCB3YW50IHlvdXIgbGluayB3YXMgYmluZCA6IHVzZSBjbGFzcyBuby1iaW5kXG4gICAgYmluZExpbmsoKSB7XG4gICAgICAgIHRoaXMuJHZpZXcub24oJ3N1Ym1pdCcsICdmb3JtW2RhdGEteGhyXTpub3QoLm5vLWJpbmQpJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIEFqYXhVdGlscy5oYW5kbGVGb3JtKCQoZS5jdXJyZW50VGFyZ2V0KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoJHZpZXcpIHtcbiAgICAgICAgdGhpcy4kdmlldyA9ICR2aWV3O1xuICAgIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJ1bWJyZWxsYV9jb3JlL2NvcmUvQ29tcG9uZW50XCI7XG5pbXBvcnQgQmluZCBmcm9tIFwidW1icmVsbGFfY29yZS9jb3JlL0JpbmRcIjtcbmltcG9ydCBBamF4SGFuZGxlciBmcm9tIFwidW1icmVsbGFfY29yZS9jb3JlL0FqYXhIYW5kbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVtYnJlbGxhQXBwIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5ID0ge307XG4gICAgICAgIHRoaXMuYWpheEhhbmRsZXJSZWdpc3RyeSA9IHt9O1xuICAgIH1cblxuICAgIC8vICoqKiBDb21wb25lbnRzICoqKiAvL1xuXG4gICAgbW91bnQoJGNvbnRhaW5lciA9IG51bGwpIHtcbiAgICAgICAgZm9yIChsZXQgc2VsZWN0b3IgaW4gdGhpcy5jb21wb25lbnRSZWdpc3RyeSkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q2xhc3MgPSB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5W3NlbGVjdG9yXTtcblxuICAgICAgICAgICAgY29uc3QgJGUgPSAkY29udGFpbmVyID8gJGNvbnRhaW5lci5maW5kKHNlbGVjdG9yKSA6ICQoc2VsZWN0b3IpO1xuICAgICAgICAgICAgJGUuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHZpZXcgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmICghJHZpZXcuZGF0YSgnY29tcG9uZW50JykpIHtcbiAgICAgICAgICAgICAgICAgICAgJHZpZXcuZGF0YSgnY29tcG9uZW50JywgbmV3IGNvbXBvbmVudENsYXNzKCR2aWV3KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2Uoc2VsZWN0b3IsIGNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgIGlmICghKGNvbXBvbmVudENsYXNzLnByb3RvdHlwZSBpbnN0YW5jZW9mIENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYENhbid0IHVzZSBjb21wb25lbnQgJHtjb21wb25lbnRDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZX0sIGhlIG11c3QgZXh0ZW5kcyBDb21wb25lbnQgY2xhc3NgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnlbc2VsZWN0b3JdID0gY29tcG9uZW50Q2xhc3M7XG4gICAgfVxuXG4gICAgZ2V0Q29tcG9uZW50cyhzZWxlY3Rvcikge1xuICAgICAgICBsZXQgY29tcG9uZW50cyA9IFtdO1xuXG4gICAgICAgICQoc2VsZWN0b3IpLmVhY2goKGksIGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlID0gJChlKTtcblxuICAgICAgICAgICAgLy8gY29tcG9uZW50c1xuICAgICAgICAgICAgaWYgKCRlLmRhdGEoJ2NvbXBvbmVudCcpKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKCRlLmRhdGEoJ2NvbXBvbmVudCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cblxuICAgIC8vICoqKiBBamF4IGhhbmRsZXJzICoqKiAvL1xuXG4gICAgdXNlQWpheEhhbmRsZXIoaGFuZGxlck5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKCEoaGFuZGxlciBpbnN0YW5jZW9mIEFqYXhIYW5kbGVyKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQ2FuJ3QgdXNlIGhhbmRsZXIgJHtoYW5kbGVyLmNvbnN0cnVjdG9yLm5hbWV9LCBoZSBtdXN0IGV4dGVuZHMgQWpheEhhbmRsZXIgY2xhc3NgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWpheEhhbmRsZXJSZWdpc3RyeVtoYW5kbGVyTmFtZV0gPSBoYW5kbGVyO1xuICAgIH1cblxuICAgIGdldEFqYXhIYW5kbGVyKGhhbmRsZXJOYW1lID0gbnVsbCkge1xuICAgICAgICBpZiAoIWhhbmRsZXJOYW1lKSB7XG4gICAgICAgICAgICBoYW5kbGVyTmFtZSA9ICdkZWZhdWx0JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKGhhbmRsZXJOYW1lIGluIHRoaXMuYWpheEhhbmRsZXJSZWdpc3RyeSkpIHtcbiAgICAgICAgICAgIHRocm93IGBObyBhamF4IGhhbmRsZXIgcmVnaXN0ZXJlZCB3aXRoIG5hbWUgJHtoYW5kbGVyTmFtZX1gO1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIHJldHVybiB0aGlzLmFqYXhIYW5kbGVyUmVnaXN0cnlbaGFuZGxlck5hbWVdO1xuICAgIH1cblxuICAgIC8vICoqKiBCaW5kICoqKiAvL1xuXG4gICAgYmluZCgpIHtcbiAgICAgICAgbmV3IEJpbmQoJCgnYm9keScpLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgYmluZE5ld0RvbSgkZSkge1xuICAgICAgICBuZXcgQmluZCgkZSwgdHJ1ZSk7XG4gICAgfVxufSIsIi8qKlxuICogQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MzkyMzQ0L3NlbmRpbmctbXVsdGlwYXJ0LWZvcm1kYXRhLXdpdGgtanF1ZXJ5LWFqYXhcbiAqL1xuKGZ1bmN0aW9uKCQpIHtcbiAgICAkLmZuLnNlcmlhbGl6ZUZvcm1Ub0Zvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciAkb2JqID0gJCh0aGlzKTtcbiAgICAgICAgLyogQUREIEZJTEUgVE8gUEFSQU0gQUpBWCAqL1xuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgJC5lYWNoKCRvYmouZmluZChcImlucHV0W3R5cGU9J2ZpbGUnXVwiKSwgZnVuY3Rpb24oaSwgdGFnKSB7XG4gICAgICAgICAgICAkLmVhY2goJCh0YWcpWzBdLmZpbGVzLCBmdW5jdGlvbihpLCBmaWxlKSB7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHRhZy5uYW1lLCBmaWxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHBhcmFtcyA9ICRvYmouc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgJC5lYWNoKHBhcmFtcywgZnVuY3Rpb24gKGksIHZhbCkge1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHZhbC5uYW1lLCB2YWwudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH07XG59KShqUXVlcnkpOyIsIi8qKlxuICogQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTg0NjI0L2NvbnZlcnQtZm9ybS1kYXRhLXRvLWphdmFzY3JpcHQtb2JqZWN0LXdpdGgtanF1ZXJ5XG4gKi9cbihmdW5jdGlvbigkKXtcbiAgICAkLmZuLnNlcmlhbGl6ZUZvcm1Ub0pzb24gPSBmdW5jdGlvbihvcHRpb25zKXtcblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBqc29uID0ge30sXG4gICAgICAgICAgICBwdXNoX2NvdW50ZXJzID0ge30sXG4gICAgICAgICAgICBwYXR0ZXJucyA9IHtcbiAgICAgICAgICAgICAgICBcInZhbGlkYXRlXCI6IC9eW2EtekEtWl1bYS16QS1aMC05X10qKD86XFxbKD86XFxkKnxbYS16QS1aMC05X10rKVxcXSkqJC8sXG4gICAgICAgICAgICAgICAgXCJrZXlcIjogICAgICAvW2EtekEtWjAtOV9dK3woPz1cXFtcXF0pL2csXG4gICAgICAgICAgICAgICAgXCJwdXNoXCI6ICAgICAvXiQvLFxuICAgICAgICAgICAgICAgIFwiZml4ZWRcIjogICAgL15cXGQrJC8sXG4gICAgICAgICAgICAgICAgXCJuYW1lZFwiOiAgICAvXlthLXpBLVowLTlfXSskL1xuICAgICAgICAgICAgfTtcblxuICAgICAgICB2YXIgb3B0cyA9ICQuZXh0ZW5kKCB7fSwgJC5mbi5zZXJpYWxpemVGb3JtVG9Kc29uLmRlZmF1bHRzLCBvcHRpb25zICk7XG5cblxuICAgICAgICB0aGlzLmJ1aWxkID0gZnVuY3Rpb24oYmFzZSwga2V5LCB2YWx1ZSl7XG4gICAgICAgICAgICBiYXNlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBiYXNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucHVzaF9jb3VudGVyID0gZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgICAgIGlmKHB1c2hfY291bnRlcnNba2V5XSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBwdXNoX2NvdW50ZXJzW2tleV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHB1c2hfY291bnRlcnNba2V5XSsrO1xuICAgICAgICB9O1xuXG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIC8vIHNraXAgaW52YWxpZCBrZXlzXG4gICAgICAgICAgICBpZighcGF0dGVybnMudmFsaWRhdGUudGVzdCh0aGlzLm5hbWUpKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghb3B0cy5lbXB0eSAmJiAkLnRyaW0odGhpcy52YWx1ZSkgPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBrLFxuICAgICAgICAgICAgICAgIGtleXMgPSB0aGlzLm5hbWUubWF0Y2gocGF0dGVybnMua2V5KSxcbiAgICAgICAgICAgICAgICBtZXJnZSA9IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgcmV2ZXJzZV9rZXkgPSB0aGlzLm5hbWU7XG5cbiAgICAgICAgICAgIHdoaWxlKChrID0ga2V5cy5wb3AoKSkgIT09IHVuZGVmaW5lZCl7XG5cbiAgICAgICAgICAgICAgICAvLyBhZGp1c3QgcmV2ZXJzZV9rZXlcbiAgICAgICAgICAgICAgICByZXZlcnNlX2tleSA9IHJldmVyc2Vfa2V5LnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxbXCIgKyBrICsgXCJcXFxcXSRcIiksICcnKTtcblxuICAgICAgICAgICAgICAgIC8vIHB1c2hcbiAgICAgICAgICAgICAgICBpZihrLm1hdGNoKHBhdHRlcm5zLnB1c2gpKXtcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2UgPSBzZWxmLmJ1aWxkKFtdLCBzZWxmLnB1c2hfY291bnRlcihyZXZlcnNlX2tleSksIG1lcmdlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBmaXhlZFxuICAgICAgICAgICAgICAgIGVsc2UgaWYoay5tYXRjaChwYXR0ZXJucy5maXhlZCkpe1xuICAgICAgICAgICAgICAgICAgICBtZXJnZSA9IHNlbGYuYnVpbGQoW10sIGssIG1lcmdlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBuYW1lZFxuICAgICAgICAgICAgICAgIGVsc2UgaWYoay5tYXRjaChwYXR0ZXJucy5uYW1lZCkpe1xuICAgICAgICAgICAgICAgICAgICBtZXJnZSA9IHNlbGYuYnVpbGQoe30sIGssIG1lcmdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGpzb24gPSAkLmV4dGVuZCh0cnVlLCBqc29uLCBtZXJnZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH07XG5cbiAgICAkLmZuLnNlcmlhbGl6ZUZvcm1Ub0pzb24uZGVmYXVsdHMgPSB7XG4gICAgICAgIGVtcHR5OiB0cnVlLFxuICAgIH07XG59KShqUXVlcnkpOyIsImltcG9ydCAnLi9TZXJpYWxpemVGb3JtVG9Gb3JtRGF0YSc7XG5pbXBvcnQgJy4vU2VyaWFsaXplRm9ybVRvSnNvbic7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlybU1vZGFsIHtcblxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9ICc8ZGl2IGNsYXNzPVwibW9kYWwgY29uZmlybS1tb2RhbCBmYWRlXCIgdGFiaW5kZXg9XCItMVwiIGlkPVwiY29uZmlybS1tb2RhbFwiPicgK1xuICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIiByb2xlPVwiZG9jdW1lbnRcIj4nICtcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+JyArXG4gICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPl9fdGV4dF9fPC9kaXY+JyArXG4gICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+JyArXG4gICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tY2FuY2VsXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5fX2NhbmNlbF9fPC9idXR0b24+JyArXG4gICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tY29uZmlybVwiPl9fY29uZmlybV9fPC9idXR0b24+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+JztcblxuICAgIHN0YXRpYyAkbW9kYWwgPSBudWxsO1xuXG4gICAgc3RhdGljIHNob3cob3B0aW9ucyA9IHt9KSB7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIGNhbmNlbF90ZXh0OiAnQW5udWxlcicsXG4gICAgICAgICAgICBjb25maXJtX3RleHQ6ICdDb25maXJtZXInLFxuICAgICAgICAgICAgY29uZmlybTogKCkgPT4ge31cbiAgICAgICAgfTtcblxuICAgICAgICBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zfTtcblxuICAgICAgICBDb25maXJtTW9kYWwuaGlkZSgpO1xuXG4gICAgICAgIGxldCBodG1sID0gQ29uZmlybU1vZGFsLnRlbXBsYXRlLnJlcGxhY2UoJ19fdGV4dF9fJywgb3B0aW9uc1sndGV4dCddKTtcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgnX19jYW5jZWxfXycsIG9wdGlvbnNbJ2NhbmNlbF90ZXh0J10pO1xuICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKCdfX2NvbmZpcm1fXycsIG9wdGlvbnNbJ2NvbmZpcm1fdGV4dCddKTtcblxuICAgICAgICBDb25maXJtTW9kYWwuJG1vZGFsID0gJChodG1sKTtcblxuICAgICAgICBDb25maXJtTW9kYWwuJG1vZGFsLm9uKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zWydjb25maXJtJ10oKTtcbiAgICAgICAgICAgICAgICBDb25maXJtTW9kYWwuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgQ29uZmlybU1vZGFsLiRtb2RhbC5vbignY2xpY2snLCAnLmJ0bi1jb25maXJtJywgKGUpID0+IHtcbiAgICAgICAgICAgIG9wdGlvbnNbJ2NvbmZpcm0nXSgpO1xuICAgICAgICAgICAgQ29uZmlybU1vZGFsLmhpZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgQ29uZmlybU1vZGFsLiRtb2RhbC5vbignaGlkZGVuLmJzLm1vZGFsJywgKCkgPT4gQ29uZmlybU1vZGFsLnJlbW92ZSgpKTtcblxuICAgICAgICBDb25maXJtTW9kYWwuJG1vZGFsLm1vZGFsKCdzaG93Jyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhpZGUoKSB7XG4gICAgICAgIGlmIChDb25maXJtTW9kYWwuJG1vZGFsKSB7XG4gICAgICAgICAgICBDb25maXJtTW9kYWwuJG1vZGFsLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlKCkge1xuICAgICAgICAkKCcjY29uZmlybS1tb2RhbCcpLnJlbW92ZSgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaW5uZXIge1xuXG4gICAgc3RhdGljIHRlbXBsYXRlID0gJzxkaXYgaWQ9XCJzcGlubmVyXCI+JyArXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiYm91bmNpbmctbG9hZGVyLXdyYXBwZXJcIj4nICtcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJib3VuY2luZy1sb2FkZXJcIj4nICtcbiAgICAgICAgJzxkaXY+PC9kaXY+JyArXG4gICAgICAgICc8ZGl2PjwvZGl2PicgK1xuICAgICAgICAnPGRpdj48L2Rpdj4nICtcbiAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICc8L2Rpdj4nO1xuXG5cbiAgICBzdGF0aWMgc2hvdygpIHtcbiAgICAgICAgU3Bpbm5lci5oaWRlKCk7XG4gICAgICAgICQoJ2JvZHknKS5hZnRlcihTcGlubmVyLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaGlkZSgpIHtcbiAgICAgICAgY29uc3QgJHNwaW5uZXIgPSAkKCcjc3Bpbm5lcicpO1xuICAgICAgICBpZiAoJHNwaW5uZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAkc3Bpbm5lci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb25maXJtTW9kYWwgZnJvbSBcInVtYnJlbGxhX2NvcmUvcGx1Z2lucy9Db25maXJtTW9kYWxcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCJ1bWJyZWxsYV9jb3JlL3BsdWdpbnMvU3Bpbm5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4VXRpbHMge1xuXG4gICAgc3RhdGljIHhoclBlbmRpbmdSZWdpc3RyeUlkcyA9IFtdO1xuXG4gICAgc3RhdGljIGhhbmRsZUxpbmsoJHZpZXcsIG9wdGlvbnMgPSBbXSkge1xuICAgICAgICBvcHRpb25zID0gey4uLntcbiAgICAgICAgICAgIHVybDogJHZpZXcuZGF0YSgneGhyJyksXG4gICAgICAgICAgICB4aHJfaWQ6ICR2aWV3LmRhdGEoJ3hoci1pZCcpIHx8IG51bGwsXG4gICAgICAgICAgICBjb25maXJtOiAkdmlldy5kYXRhKCdjb25maXJtJykgfHwgZmFsc2UsXG4gICAgICAgICAgICBzcGlubmVyOiAkdmlldy5kYXRhKCdzcGlubmVyJykgfHwgZmFsc2UsXG4gICAgICAgICAgICBtZXRob2Q6ICR2aWV3LmRhdGEoJ21ldGhvZCcpIHx8ICdnZXQnXG4gICAgICAgIH0sLi4ub3B0aW9uc307XG5cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGFwcC5nZXRBamF4SGFuZGxlcigkdmlldy5kYXRhKCdoYW5kbGVyJykgfHwgbnVsbCk7XG4gICAgICAgIHRoaXMucmVxdWVzdChvcHRpb25zLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaGFuZGxlRm9ybSgkdmlldywgb3B0aW9ucyA9IFtdKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7Li4ue1xuICAgICAgICAgICAgdXJsOiAkdmlldy5kYXRhKCd4aHInKSxcbiAgICAgICAgICAgIHhocl9pZDogJHZpZXcuZGF0YSgneGhyLWlkJykgfHwgbnVsbCxcbiAgICAgICAgICAgIGNvbmZpcm06ICR2aWV3LmRhdGEoJ2NvbmZpcm0nKSB8fCBmYWxzZSxcbiAgICAgICAgICAgIHNwaW5uZXI6ICR2aWV3LmRhdGEoJ3NwaW5uZXInKSB8fCBmYWxzZSxcbiAgICAgICAgICAgIG1ldGhvZDogJHZpZXcuYXR0cignbWV0aG9kJykgfHwgJ3Bvc3QnLFxuICAgICAgICAgICAgZGF0YTogJHZpZXcuc2VyaWFsaXplRm9ybVRvRm9ybURhdGEoKSxcbiAgICAgICAgfSwuLi5vcHRpb25zfTtcblxuICAgICAgICBjb25zdCBoYW5kbGVyID0gYXBwLmdldEFqYXhIYW5kbGVyKCR2aWV3LmRhdGEoJ2hhbmRsZXInKSB8fCBudWxsKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZXF1ZXN0KG9wdGlvbnMgPSB7fSwgaGFuZGxlciA9IG51bGwpIHtcbiAgICAgICAgaWYgKGhhbmRsZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGhhbmRsZXIgPSBhcHAuZ2V0QWpheEhhbmRsZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgneGhyX2lkJyBpbiBvcHRpb25zICYmIG9wdGlvbnNbJ3hocl9pZCddKSB7XG4gICAgICAgICAgICBpZiAoQWpheFV0aWxzLnhoclBlbmRpbmdSZWdpc3RyeUlkcy5pbmNsdWRlcyhvcHRpb25zWyd4aHJfaWQnXSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlcXVlc3QgcHJldmVudGVkIDogcmVxdWVzdCB3aXRoIGlkICR7b3B0aW9uc1sneGhyX2lkJ119IGlzIHBlbmRpbmcuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBBamF4VXRpbHMueGhyUGVuZGluZ1JlZ2lzdHJ5SWRzLnB1c2gob3B0aW9uc1sneGhyX2lkJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdkYXRhJyBpbiBvcHRpb25zICYmIG9wdGlvbnNbJ2RhdGEnXSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBvcHRpb25zWydjb250ZW50VHlwZSddID0gZmFsc2U7XG4gICAgICAgICAgICBvcHRpb25zWydwcm9jZXNzRGF0YSddID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ3NwaW5uZXInIGluIG9wdGlvbnMgJiYgZmFsc2UgIT09IG9wdGlvbnNbJ3NwaW5uZXInXSkge1xuICAgICAgICAgICAgU3Bpbm5lci5zaG93KHt0ZXh0OiBvcHRpb25zWydzcGlubmVyJ119KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnNbJ3N1Y2Nlc3MnXSA9IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlci5zdWNjZXNzKHJlc3BvbnNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgb3B0aW9uc1snZXJyb3InXSA9IChyZXF1ZXN0T2JqZWN0LCBlcnJvciwgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgIGhhbmRsZXIuZXJyb3IocmVxdWVzdE9iamVjdCwgZXJyb3IsIGVycm9yVGhyb3duKTtcbiAgICAgICAgfTtcbiAgICAgICAgb3B0aW9uc1snY29tcGxldGUnXSA9ICgpID0+IHtcblxuICAgICAgICAgICAgaWYgKCd4aHJfaWQnIGluIG9wdGlvbnMgJiYgb3B0aW9uc1sneGhyX2lkJ10pIHtcbiAgICAgICAgICAgICAgICBBamF4VXRpbHMueGhyUGVuZGluZ1JlZ2lzdHJ5SWRzID0gJC5ncmVwKEFqYXhVdGlscy54aHJQZW5kaW5nUmVnaXN0cnlJZHMsIChpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWQgIT09IG9wdGlvbnNbJ3hocl9pZCddO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBTcGlubmVyLmhpZGUoKTtcbiAgICAgICAgICAgIGhhbmRsZXIuY29tcGxldGUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoJ2NvbmZpcm0nIGluIG9wdGlvbnMgJiYgZmFsc2UgIT09IG9wdGlvbnNbJ2NvbmZpcm0nXSkge1xuICAgICAgICAgICAgQ29uZmlybU1vZGFsLnNob3coe1xuICAgICAgICAgICAgICAgICd0ZXh0Jzogb3B0aW9uc1snY29uZmlybSddLFxuICAgICAgICAgICAgICAgICdjb25maXJtJzogKCkgPT4gJC5hamF4KG9wdGlvbnMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAkLmFqYXgob3B0aW9ucyk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgc3RhdGljIGdldChvcHRpb25zID0ge30sIGhhbmRsZXIgPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnNbJ21ldGhvZCddID0gJ2dldCc7XG4gICAgICAgIHJldHVybiBBamF4VXRpbHMucmVxdWVzdChvcHRpb25zLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcG9zdChvcHRpb25zID0ge30sIGhhbmRsZXIgPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnNbJ21ldGhvZCddID0gJ3Bvc3QnO1xuICAgICAgICByZXR1cm4gQWpheFV0aWxzLnJlcXVlc3Qob3B0aW9ucywgaGFuZGxlcik7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcblxuICAgIHN0YXRpYyBieXRlc190b19zaXplKGJ5dGVzKSB7XG4gICAgICAgIGxldCBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInXTtcbiAgICAgICAgaWYgKGJ5dGVzID09IDApIHJldHVybiAnMCc7XG4gICAgICAgIGxldCBpID0gcGFyc2VJbnQoTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZygxMDI0KSkpO1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChieXRlcyAvIE1hdGgucG93KDEwMjQsIGkpLCAyKSArICcgJyArIHNpemVzW2ldO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWNvZGVfaHRtbChodG1sKSB7XG4gICAgICAgIGxldCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIHR4dC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gdHh0LnZhbHVlO1xuICAgIH1cbn0iLCIvLyBqcXVlcnlcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5J1xud2luZG93LmpRdWVyeSA9IGpRdWVyeTtcbndpbmRvdy4kID0galF1ZXJ5O1xuXG4vLyBtdXN0YWNoZVxuaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcbndpbmRvdy5tdXN0YWNoZSA9IG11c3RhY2hlO1xubXVzdGFjaGUudGFncyA9IFsgJ1tbJywgJ11dJyBdOyIsIi8vIGltcG9ydCBnbG9iYWxzIGluIHNlcGFyYXRlZCBmaWxlcyBlbHNlIGdsb2JhbCBzY29wZSB3aWxsIG5vdCB3b3Jrc1xuaW1wb3J0IFwiLi9fZ2xvYmFsXCI7XG5cbi8vIGJvb3RzdHJhcFxuaW1wb3J0ICdib290c3RyYXAnO1xuXG4vLyBkYXRhdGFibGVzXG5pbXBvcnQgJ2RhdGF0YWJsZXMubmV0JztcblxuaW1wb3J0ICdkYXRhdGFibGVzLm5ldC1iczQnO1xuaW1wb3J0ICdkYXRhdGFibGVzLm5ldC1yb3dyZW9yZGVyJztcbmltcG9ydCAnZGF0YXRhYmxlcy5uZXQtZml4ZWRoZWFkZXInO1xuXG4vLyBzZWxlY3QyXG5pbXBvcnQgJ3NlbGVjdDIvZGlzdC9qcy9zZWxlY3QyLmZ1bGwnO1xuaW1wb3J0ICdzZWxlY3QyL2Rpc3QvanMvaTE4bi9mcic7XG5cbi8vIHRhZ3MgaW5wdXRcbmltcG9ydCAnYm9vdHN0cmFwLXRhZ3NpbnB1dCc7XG5cbi8vIGRhdGUgcGlja2VyXG5pbXBvcnQgJ2Jvb3RzdHJhcC1kYXRlcGlja2VyJztcbmltcG9ydCAnYm9vdHN0cmFwLWRhdGVwaWNrZXIvanMvbG9jYWxlcy9ib290c3RyYXAtZGF0ZXBpY2tlci5mcic7XG5cbi8vIGRhdGV0aW1lIHBpY2tlclxuaW1wb3J0ICdlb25hc2Rhbi1ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXInO1xuXG4vLyBtZXRpc21lbnUgKHNpZGViYXJcbmltcG9ydCAnbWV0aXNtZW51JztcblxuLy8gc2Nyb2xsYmFyXG5pbXBvcnQgJ3NpbXBsZWJhcic7XG5cbi8vIHRvYXN0ciBqcXVlcnlcbmltcG9ydCAnanF1ZXJ5LXRvYXN0LXBsdWdpbic7XG5cbi8vIHRyZWUgZ3JpZCBqcXVlcnlcbmltcG9ydCAnanF1ZXJ5LXRyZWVncmlkL2pzL2pxdWVyeS50cmVlZ3JpZCc7XG4iXSwic291cmNlUm9vdCI6IiJ9