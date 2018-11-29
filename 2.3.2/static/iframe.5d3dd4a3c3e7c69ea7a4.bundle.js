(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["iframe"],{

/***/ "./.storybook/bootstrap.module.ts":
/*!****************************************!*\
  !*** ./.storybook/bootstrap.module.ts ***!
  \****************************************/
/*! exports provided: BootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapModule", function() { return BootstrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BootstrapModule = /** @class */ (function () {
    function BootstrapModule() {
    }
    BootstrapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({})
    ], BootstrapModule);
    return BootstrapModule;
}());



/***/ }),

/***/ "./.storybook/config.js":
/*!******************************!*\
  !*** ./.storybook/config.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es6/symbol */ "./node_modules/core-js/es6/symbol.js");
/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es6/object */ "./node_modules/core-js/es6/object.js");
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es6/function */ "./node_modules/core-js/es6/function.js");
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/es6/parse-int */ "./node_modules/core-js/es6/parse-int.js");
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/es6/parse-float */ "./node_modules/core-js/es6/parse-float.js");
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/es6/number */ "./node_modules/core-js/es6/number.js");
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/es6/math */ "./node_modules/core-js/es6/math.js");
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/es6/string */ "./node_modules/core-js/es6/string.js");
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/es6/date */ "./node_modules/core-js/es6/date.js");
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/es6/array */ "./node_modules/core-js/es6/array.js");
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/es6/regexp */ "./node_modules/core-js/es6/regexp.js");
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/es6/map */ "./node_modules/core-js/es6/map.js");
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/es6/set */ "./node_modules/core-js/es6/set.js");
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/es6/reflect */ "./node_modules/core-js/es6/reflect.js");
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_16__);
// load global styles
__webpack_require__(/*! style-loader!css-loader!sass-loader!./preview.scss */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./.storybook/preview.scss"),__webpack_require__(/*! ../src/index.stories */ "./src/index.stories.ts");// automatically import all files ending in *.stories.ts
var req=__webpack_require__("./src sync recursive .stories.ts$");function loadStories(){req.keys().sort(function(path1,path2){return path1.split("/").slice(-1)[0]>path2.split("/").slice(-1)[0]?1:-1}).forEach(function(filename){filename.includes("index")||req(filename)})}Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_16__["configure"])(loadStories,module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@storybook/angular/dist lazy recursive":
/*!********************************************************************!*\
  !*** ./node_modules/@storybook/angular/dist lazy namespace object ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/@storybook/angular/dist lazy recursive";

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./.storybook/preview.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./.storybook/preview.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../node_modules/css-loader!carbon-components/css/carbon-components.min.css */ "./node_modules/css-loader/index.js!./node_modules/carbon-components/css/carbon-components.min.css"), "");

// module
exports.push([module.i, "body {\n  padding: 20px;\n  position: relative; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./.storybook/preview.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./.storybook/preview.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/sass-loader/lib/loader.js!./preview.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./.storybook/preview.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src sync recursive .stories.ts$":
/*!*******************************!*\
  !*** ./src sync .stories.ts$ ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./accordion/accordion.stories.ts": "./src/accordion/accordion.stories.ts",
	"./button/button.stories.ts": "./src/button/button.stories.ts",
	"./checkbox/checkbox.stories.ts": "./src/checkbox/checkbox.stories.ts",
	"./code-snippet/code-snippet.stories.ts": "./src/code-snippet/code-snippet.stories.ts",
	"./combobox/combobox.stories.ts": "./src/combobox/combobox.stories.ts",
	"./content-switcher/content-switcher.stories.ts": "./src/content-switcher/content-switcher.stories.ts",
	"./dialog/overflow-menu/overflow-menu.stories.ts": "./src/dialog/overflow-menu/overflow-menu.stories.ts",
	"./dialog/tooltip/tooltip.stories.ts": "./src/dialog/tooltip/tooltip.stories.ts",
	"./dropdown/dropdown.stories.ts": "./src/dropdown/dropdown.stories.ts",
	"./index.stories.ts": "./src/index.stories.ts",
	"./inline-loading/inline-loading.stories.ts": "./src/inline-loading/inline-loading.stories.ts",
	"./input/input.stories.ts": "./src/input/input.stories.ts",
	"./link/link.stories.ts": "./src/link/link.stories.ts",
	"./loading/loading.stories.ts": "./src/loading/loading.stories.ts",
	"./modal/modal.stories.ts": "./src/modal/modal.stories.ts",
	"./notification/notification.stories.ts": "./src/notification/notification.stories.ts",
	"./number-input/number.stories.ts": "./src/number-input/number.stories.ts",
	"./pagination/pagination.stories.ts": "./src/pagination/pagination.stories.ts",
	"./progress-indicator/progrss-indicator.stories.ts": "./src/progress-indicator/progrss-indicator.stories.ts",
	"./radio/radio.stories.ts": "./src/radio/radio.stories.ts",
	"./search/search.stories.ts": "./src/search/search.stories.ts",
	"./select/select.stories.ts": "./src/select/select.stories.ts",
	"./table/table.stories.ts": "./src/table/table.stories.ts",
	"./tabs/tabs.stories.ts": "./src/tabs/tabs.stories.ts",
	"./tiles/tiles.stories.ts": "./src/tiles/tiles.stories.ts",
	"./toggle/toggle.stories.ts": "./src/toggle/toggle.stories.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive .stories.ts$";

/***/ }),

/***/ "./src/accordion/accordion-item.component.ts":
/*!***************************************************!*\
  !*** ./src/accordion/accordion-item.component.ts ***!
  \***************************************************/
/*! exports provided: AccordionItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccordionItem = /** @class */ (function () {
    function AccordionItem() {
        this.title = "Title " + AccordionItem_1.accordionItemCount;
        this.id = "accordion-item-" + AccordionItem_1.accordionItemCount;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemClass = true;
        this.expanded = false;
        this.itemType = "list-item";
        this.role = "heading";
        this.ariaLevel = 3;
        AccordionItem_1.accordionItemCount++;
    }
    AccordionItem_1 = AccordionItem;
    AccordionItem.prototype.toggleExpanded = function () {
        this.expanded = !this.expanded;
        this.selected.emit({ id: this.id, expanded: this.expanded });
    };
    var AccordionItem_1;
    AccordionItem.accordionItemCount = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionItem.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionItem.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AccordionItem.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--accordion__item"),
        __metadata("design:type", Object)
    ], AccordionItem.prototype, "itemClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--accordion__item--active"), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionItem.prototype, "expanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("style.display"),
        __metadata("design:type", Object)
    ], AccordionItem.prototype, "itemType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.role"),
        __metadata("design:type", Object)
    ], AccordionItem.prototype, "role", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.aria-level"), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionItem.prototype, "ariaLevel", void 0);
    AccordionItem = AccordionItem_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-accordion-item",
            template: "\n\t\t<button\n\t\t\t[attr.aria-expanded]=\"expanded\"\n\t\t\t[attr.aria-controls]=\"id\"\n\t\t\t(click)=\"toggleExpanded()\"\n\t\t\tclass=\"bx--accordion__heading\">\n\t\t\t<svg\n\t\t\t\tclass=\"bx--accordion__arrow\"\n\t\t\t\twidth=\"7\"\n\t\t\t\theight=\"12\"\n\t\t\t\tviewBox=\"0 0 7 12\">\n          \t\t<path fill-rule=\"nonzero\" d=\"M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z\"/>\n\t\t\t</svg>\n\t\t\t <p class=\"bx--accordion__title\">{{title}}</p>\n\t\t</button>\n\t\t<div [id]=\"id\" class=\"bx--accordion__content\">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [])
    ], AccordionItem);
    return AccordionItem;
}());



/***/ }),

/***/ "./src/accordion/accordion.component.ts":
/*!**********************************************!*\
  !*** ./src/accordion/accordion.component.ts ***!
  \**********************************************/
/*! exports provided: Accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Accordion = /** @class */ (function () {
    function Accordion() {
    }
    Accordion = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-accordion",
            template: "\n\t\t<ul class=\"bx--accordion\">\n\t\t\t<ng-content></ng-content>\n\t\t</ul>\n\t"
        })
    ], Accordion);
    return Accordion;
}());



/***/ }),

/***/ "./src/accordion/accordion.module.ts":
/*!*******************************************!*\
  !*** ./src/accordion/accordion.module.ts ***!
  \*******************************************/
/*! exports provided: Accordion, AccordionItem, AccordionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return AccordionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _accordion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.component */ "./src/accordion/accordion.component.ts");
/* harmony import */ var _accordion_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion-item.component */ "./src/accordion/accordion-item.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return _accordion_component__WEBPACK_IMPORTED_MODULE_2__["Accordion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return _accordion_item_component__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    AccordionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _accordion_component__WEBPACK_IMPORTED_MODULE_2__["Accordion"],
                _accordion_item_component__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"]
            ],
            exports: [
                _accordion_component__WEBPACK_IMPORTED_MODULE_2__["Accordion"],
                _accordion_item_component__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        })
    ], AccordionModule);
    return AccordionModule;
}());



/***/ }),

/***/ "./src/accordion/accordion.stories.ts":
/*!********************************************!*\
  !*** ./src/accordion/accordion.stories.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-actions */ "./node_modules/@storybook/addon-actions/dist/index.js");
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./src/index.ts");




Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Accordion", module)
    .addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [
        ___WEBPACK_IMPORTED_MODULE_3__["AccordionModule"]
    ]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t\t<ibm-accordion>\n\t\t\t\t<ibm-accordion-item title=\"Section 1 title\" (selected)=\"selected($event)\">Lorem ipsum dolor sit amet, \t\t\t\tconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \t\t\t\tet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \t\t\t\tullamco laboris nisi ut aliquip ex ea commodo consequat.</ibm-accordion-item>\n\t\t\t\t<ibm-accordion-item title=\"Section 2 title\" (selected)=\"selected($event)\">Lorem ipsum dolor sit amet, \t\t\t\tconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \t\t\t\tet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \t\t\t\tullamco laboris nisi ut aliquip ex ea commodo consequat.</ibm-accordion-item>\n\t\t\t\t<ibm-accordion-item title=\"Section 3 title\" (selected)=\"selected($event)\">Lorem ipsum dolor sit amet, \t\t\t\tconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \t\t\t\tet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \t\t\t\tullamco laboris nisi ut aliquip ex ea commodo consequat.</ibm-accordion-item>\n\t\t\t\t<ibm-accordion-item title=\"Section 4 title\" (selected)=\"selected($event)\">Lorem ipsum dolor sit amet, \t\t\t\tconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \t\t\t\tet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \t\t\t\tullamco laboris nisi ut aliquip ex ea commodo consequat.</ibm-accordion-item>\n\t\t\t</ibm-accordion>\n\t\t",
    props: {
        items: [
            {
                content: "one"
            },
            {
                content: "two"
            },
            {
                content: "three"
            },
            {
                content: "four"
            }
        ],
        selected: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__["action"])("item expanded")
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/banner/banner-content.interface.ts":
/*!************************************************!*\
  !*** ./src/banner/banner-content.interface.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/banner/banner.component.ts":
/*!****************************************!*\
  !*** ./src/banner/banner.component.ts ***!
  \****************************************/
/*! exports provided: Banner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _banner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner.service */ "./src/banner/banner.service.ts");
/* harmony import */ var _banner_content_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner-content.interface */ "./src/banner/banner-content.interface.ts");
/* harmony import */ var _banner_content_interface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_banner_content_interface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Deprecated in favour of `InlineNotification` (to be removed in v3.0).
 * Banner messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * @export
 * @class Banner
 * @deprecated
 */
var Banner = /** @class */ (function () {
    function Banner(bannerService, i18n) {
        this.bannerService = bannerService;
        this.i18n = i18n;
        /**
         * Emits on close.
         *
         * @type {EventEmitter<any>}
         * @memberof Banner
         */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        console.warn("`ibm-banner` has been deprecated in favour of `ibm-inline-notification`");
    }
    Banner.prototype.ngOnInit = function () {
        if (!this.bannerObj.closeLabel) {
            this.bannerObj.closeLabel = this.i18n.get().BANNER.CLOSE_BUTTON;
        }
    };
    /**
     * Emits close event.
     *
     * @memberof Banner
     */
    Banner.prototype.onClose = function () {
        this.close.emit();
    };
    Banner.prototype.destroy = function () {
        this.bannerService.close(this);
    };
    var _a, _b, _c, _d;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof _banner_content_interface__WEBPACK_IMPORTED_MODULE_2__["NotificationContent"] !== "undefined" && _banner_content_interface__WEBPACK_IMPORTED_MODULE_2__["NotificationContent"]) === "function" && _a || Object)
    ], Banner.prototype, "bannerObj", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) === "function" && _b || Object)
    ], Banner.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("banner"),
        __metadata("design:type", Object)
    ], Banner.prototype, "banner", void 0);
    Banner = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-banner",
            template: "\n\t<div\n\t\t#banner\n\t\tclass=\"bx--inline-notification bx--inline-notification--{{bannerObj.type}}\"\n\t\trole=\"alert\">\n\t\t<div class=\"bx--inline-notification__details\">\n\t\t\t<svg class=\"bx--inline-notification__icon\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t<path d=\"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM3.293 4.707l8 8 1.414-1.414-8-8-1.414 1.414z\" fill-rule=\"evenodd\"/>\n\t\t\t</svg>\n\t\t\t<div class=\"bx--inline-notification__text-wrapper\">\n\t\t\t\t<p [innerHTML]=\"bannerObj.title\" class=\"bx--inline-notification__title\"></p>\n\t\t\t\t<p [innerHTML]=\"bannerObj.message\" class=\"bx--inline-notification__subtitle\"></p>\n\t\t\t</div>\n\t\t</div>\n\t\t<button\n\t\t\t(click)=\"onClose()\"\n\t\t\tclass=\"bx--inline-notification__close-button\"\n\t\t\t[attr.aria-label]=\"bannerObj.closeLabel\"\n\t\t\ttype=\"button\">\n\t\t\t<svg\n\t\t\t\tclass=\"bx--inline-notification__close-icon\"\n\t\t\t\twidth=\"10\"\n\t\t\t\theight=\"10\"\n\t\t\t\tviewBox=\"0 0 10 10\"\n\t\t\t\txmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t<path d=\"M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z\" fill-rule=\"nonzero\"/>\n\t\t\t</svg>\n\t\t</button>\n\t</div>\n\t",
            providers: [_banner_service__WEBPACK_IMPORTED_MODULE_1__["BannerService"]]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof _banner_service__WEBPACK_IMPORTED_MODULE_1__["BannerService"] !== "undefined" && _banner_service__WEBPACK_IMPORTED_MODULE_1__["BannerService"]) === "function" && _c || Object, typeof (_d = typeof _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__["I18n"] !== "undefined" && _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__["I18n"]) === "function" && _d || Object])
    ], Banner);
    return Banner;
}());



/***/ }),

/***/ "./src/banner/banner.module.ts":
/*!*************************************!*\
  !*** ./src/banner/banner.module.ts ***!
  \*************************************/
/*! exports provided: BannerService, Banner, BannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerModule", function() { return BannerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icon_static_icon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../icon/static-icon.module */ "./src/icon/static-icon.module.ts");
/* harmony import */ var _toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast.component */ "./src/banner/toast.component.ts");
/* harmony import */ var _banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner.component */ "./src/banner/banner.component.ts");
/* harmony import */ var _banner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./banner.service */ "./src/banner/banner.service.ts");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return _banner_service__WEBPACK_IMPORTED_MODULE_5__["BannerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return _banner_component__WEBPACK_IMPORTED_MODULE_4__["Banner"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/**
 * Deprecated in favour of `NotificationModule` (to be removed in v3.0).
 *
 * @deprecated
 */
var BannerModule = /** @class */ (function () {
    function BannerModule() {
    }
    BannerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _toast_component__WEBPACK_IMPORTED_MODULE_3__["Toast"],
                _banner_component__WEBPACK_IMPORTED_MODULE_4__["Banner"]
            ],
            exports: [
                _banner_component__WEBPACK_IMPORTED_MODULE_4__["Banner"],
                _toast_component__WEBPACK_IMPORTED_MODULE_3__["Toast"]
            ],
            entryComponents: [_banner_component__WEBPACK_IMPORTED_MODULE_4__["Banner"], _toast_component__WEBPACK_IMPORTED_MODULE_3__["Toast"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _icon_static_icon_module__WEBPACK_IMPORTED_MODULE_2__["StaticIconModule"], _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_6__["I18nModule"]],
            providers: [_banner_service__WEBPACK_IMPORTED_MODULE_5__["BannerService"]]
        })
    ], BannerModule);
    return BannerModule;
}());



/***/ }),

/***/ "./src/banner/banner.service.ts":
/*!**************************************!*\
  !*** ./src/banner/banner.service.ts ***!
  \**************************************/
/*! exports provided: BannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return BannerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _banner_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner.module */ "./src/banner/banner.module.ts");
/* harmony import */ var _toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast.component */ "./src/banner/toast.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Deprecated in favour of `NotificationService` (to be removed in v3.0).
 * Provides a way to use the banner component.
 *
 * Banners are displayed toward the top of the UI and do not interrupt the user’s work.
 *
 * @export
 * @class BannerService
 * @deprecated
 */
var BannerService = /** @class */ (function () {
    /**
     * Constructs BannerService.
     *
     * @param {Injector} injector
     * @param {ComponentFactoryResolver} componentFactoryResolver
     * @param {ApplicationRef} applicationRef
     * @memberof BannerService
     */
    function BannerService(injector, componentFactoryResolver, applicationRef) {
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        /**
         * An array containing `ComponentRef`s to all the banners this service instance
         * is responsible for.
         *
         * @memberof BannerService
         */
        this.bannerRefs = new Array();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        console.warn("`BannerService` has been deprecated in favour of `NotificationService`");
    }
    /**
     * Shows the banner based on the `bannerObj`.
     *
     * @param {any} bannerObj Can have `type`, `message`, `target`, `duration` and `smart` members.
     *
     * **Members:**
     *
     * * `type` can be one of `"info"`, `"warning"`, `"danger"`, `"success"`
     * * `message` is message for banner to display
     * * `target` is css selector defining an element to append banner to. If not provided,
     * `showBanner()` creates a place for the banner in `body`
     * * `duration` is number of ms to close the banner after. If used in combination with `smart`,
     * it's added to the calculated timeout
     * * `smart`, set to `true` if you want to use smart banner.
     *
     * **Example:**
     * ```typescript
     * // Info banner, saying "Sample message." added to the element with id banner-container
     * // uses smart timeout with added duration of 1 second.
     * {
     *	type: "info",
     *	message: "Sample message.",
     *	target: "#banner-container",
     *	duration: 1000,
     *	smart: true
     * }
     * ```
     *
     * @param {any} [bannerComp=Banner] If provided, used to resolve component factory
     * @memberof BannerService
     */
    BannerService.prototype.showBanner = function (bannerObj, bannerComp) {
        var _this = this;
        if (bannerComp === void 0) { bannerComp = _banner_module__WEBPACK_IMPORTED_MODULE_1__["Banner"]; }
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(bannerComp);
        var bannerRef = componentFactory.create(this.injector);
        bannerRef.instance.bannerObj = bannerObj; // typescript isn't being very smart here, so we type to any
        this.bannerRefs.push(bannerRef);
        this.onClose = bannerRef.instance.close;
        this.applicationRef.attachView(bannerRef.hostView);
        if (bannerObj.target) {
            document.querySelector(bannerObj.target).appendChild(bannerRef.location.nativeElement);
        }
        else {
            var body = document.querySelector("body");
            // get or create a container for alert list
            var bannerClassName = "banner-overlay";
            var bannerList = body.querySelector("." + bannerClassName);
            if (!bannerList) {
                bannerList = document.createElement("div");
                bannerList.className = bannerClassName;
                body.appendChild(bannerList);
            }
            // add the banner to the top of the list
            if (bannerList.firstChild) {
                bannerList.insertBefore(bannerRef.location.nativeElement, bannerList.firstChild);
            }
            else {
                bannerList.appendChild(bannerRef.location.nativeElement);
            }
        }
        if (bannerObj.duration && bannerObj.duration > 0) {
            setTimeout(function () {
                _this.close(bannerRef);
            }, bannerObj.duration);
        }
        if (bannerObj.smart) {
            // let it disappear after calculated timeout
            setTimeout(function () {
                _this.close(bannerRef);
            }, this.getSmartTimeout(bannerObj));
        }
        this.onClose.subscribe(function () {
            _this.close(bannerRef);
        });
        bannerRef.instance.componentRef = bannerRef;
        return bannerRef.instance;
    };
    BannerService.prototype.showToast = function (bannerObj, bannerComp) {
        if (bannerComp === void 0) { bannerComp = _toast_component__WEBPACK_IMPORTED_MODULE_2__["Toast"]; }
        return this.showBanner(bannerObj, bannerComp);
    };
    /**
     * Programatically closes banner based on `bannerRef`.
     *
     * @param bannerRef `ComponentRef` of a banner or `Banner` component you wish to close
     * @memberof BannerService
     */
    BannerService.prototype.close = function (bannerRef) {
        var _this = this;
        if (bannerRef) {
            if (bannerRef instanceof _banner_module__WEBPACK_IMPORTED_MODULE_1__["Banner"]) {
                this.close(bannerRef.componentRef);
            }
            else {
                setTimeout(function () {
                    _this.applicationRef.detachView(bannerRef.hostView);
                    bannerRef.destroy();
                }, 200);
            }
        }
    };
    /**
     * Calculates the amount of time user needs to read the message in the banner.
     *
     * @param {any} bannerObj Same object used to instantiate banner.
     *
     * In addition to `type` and `message` members, use `duration` member to add
     * some extra time (in ms) to timeout if you need to.
     * @returns {number} calculated timeout (in ms) for smart banner
     * @memberof BannerService
     */
    BannerService.prototype.getSmartTimeout = function (bannerObj) {
        // calculate timeout
        var timeout = 600; // start with reaction time
        // custom duration
        timeout += bannerObj.duration || 0;
        // message type
        switch (bannerObj.type) {
            case "info":
            case "success":
            default: {
                break;
            }
            case "danger": {
                timeout += 3000;
                break;
            }
            case "warning": {
                timeout += 1500;
                break;
            }
        }
        // message length
        // average reader reads around 200 words per minute, or it takes them ~0.3s per word
        // let's use 1.5 factor for below average speed readers and have 0.45s per word
        var wordCount = bannerObj.message.trim().split(/\s+/).length;
        timeout += wordCount * 450;
        return timeout;
    };
    /**
     * OnDestroy hook.
     *
     * Destroys all living banners it is responsible for.
     *
     * @memberof BannerService
     */
    BannerService.prototype.ngOnDestroy = function () {
        if (this.bannerRefs.length > 0) {
            for (var i = 0; i < this.bannerRefs.length; i++) {
                var bannerRef = this.bannerRefs[i];
                this.applicationRef.detachView(bannerRef.hostView);
                bannerRef.destroy();
            }
            this.bannerRefs.length = 0;
        }
    };
    var _a, _b, _c;
    BannerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]) === "function" && _a || Object, typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]) === "function" && _b || Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]) === "function" && _c || Object])
    ], BannerService);
    return BannerService;
}());



/***/ }),

/***/ "./src/banner/toast.component.ts":
/*!***************************************!*\
  !*** ./src/banner/toast.component.ts ***!
  \***************************************/
/*! exports provided: Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _banner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner.service */ "./src/banner/banner.service.ts");
/* harmony import */ var _banner_content_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner-content.interface */ "./src/banner/banner-content.interface.ts");
/* harmony import */ var _banner_content_interface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_banner_content_interface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner.component */ "./src/banner/banner.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Deprecated in favour of `ToastNotification` (to be removed in v3.0).
 * Banner messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * @export
 * @class Banner
 * @deprecated
 */
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toast.prototype.ngOnInit = function () {
        console.warn("`ibm-toast` has been deprecated in favour of `ibm-toast-notification`");
        if (!this.bannerObj.closeLabel) {
            this.bannerObj.closeLabel = this.i18n.get().BANNER.CLOSE_BUTTON;
        }
    };
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof _banner_content_interface__WEBPACK_IMPORTED_MODULE_2__["ToastContent"] !== "undefined" && _banner_content_interface__WEBPACK_IMPORTED_MODULE_2__["ToastContent"]) === "function" && _a || Object)
    ], Toast.prototype, "bannerObj", void 0);
    Toast = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-toast",
            template: "\n\t<div\n\t\t#banner\n\t\tclass=\"bx--toast-notification bx--toast-notification--{{bannerObj['type']}}\"\n\t\trole=\"alert\">\n\t\t<div class=\"bx--toast-notification__details\">\n\t\t\t<h3 class=\"bx--toast-notification__title\" [innerHTML]=\"bannerObj.title\"></h3>\n\t\t\t<p class=\"bx--toast-notification__subtitle\" [innerHTML]=\"bannerObj.subtitle\"></p>\n\t\t\t<p class=\"bx--toast-notification__caption\" [innerHTML]=\"bannerObj.caption\"></p>\n\t\t</div>\n\t\t<button\n\t\t\tclass=\"bx--toast-notification__close-button\"\n\t\t\ttype=\"button\"\n\t\t\t[attr.aria-label]=\"bannerObj.closeLabel\"\n\t\t\t(click)=\"onClose()\">\n\t\t\t<svg\n\t\t\t\tclass=\"bx--toast-notification-icon\"\n\t\t\t\twidth=\"10\"\n\t\t\t\theight=\"10\"\n\t\t\t\tviewBox=\"0 0 10 10\"\n\t\t\t\txmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t<path d=\"M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z\" fill-rule=\"nonzero\"/>\n\t\t\t</svg>\n\t\t</button>\n\t</div>\n\t",
            providers: [_banner_service__WEBPACK_IMPORTED_MODULE_1__["BannerService"]]
        })
    ], Toast);
    return Toast;
}(_banner_component__WEBPACK_IMPORTED_MODULE_3__["Banner"]));



/***/ }),

/***/ "./src/button/button.directive.ts":
/*!****************************************!*\
  !*** ./src/button/button.directive.ts ***!
  \****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * A convinence directive for applying styling to a button.
 *
 * Example:
 *
 * ```hmtl
 * <button ibmButton>A button</button>
 * <button ibmButton="secondary">A secondary button</button>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/button/code) for more detail.
 */
var Button = /** @class */ (function () {
    function Button() {
        /**
         * sets the button type
         */
        this.ibmButton = "primary";
        /**
         * Specify the size of the button
         */
        this.size = "normal";
        // a whole lot of HostBindings ... this way we don't have to touch the elementRef directly
        this.baseClass = true;
        this.primary = true;
        this.secondary = false;
        this.tertiary = false;
        this.ghost = false;
        this.danger = false;
        this.dangerPrimary = false;
        this.smallSize = false;
    }
    Button.prototype.ngOnInit = function () {
        if (this.size === "sm") {
            this.smallSize = true;
        }
        this.primary = false;
        switch (this.ibmButton) {
            case "primary":
                this.primary = true;
                break;
            case "secondary":
                this.secondary = true;
                break;
            case "tertiary":
                this.tertiary = true;
                break;
            case "ghost":
                this.ghost = true;
                break;
            case "danger":
                this.danger = true;
                break;
            case "danger--primary":
                this.dangerPrimary = true;
                break;
            default:
                this.primary = true;
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Button.prototype, "ibmButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Button.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--btn"),
        __metadata("design:type", Object)
    ], Button.prototype, "baseClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--btn--primary"),
        __metadata("design:type", Object)
    ], Button.prototype, "primary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--btn--secondary"),
        __metadata("design:type", Object)
    ], Button.prototype, "secondary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--btn--tertiary"),
        __metadata("design:type", Object)
    ], Button.prototype, "tertiary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--btn--ghost"),
        __metadata("design:type", Object)
    ], Button.prototype, "ghost", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--btn--danger"),
        __metadata("design:type", Object)
    ], Button.prototype, "danger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--btn--danger--primary"),
        __metadata("design:type", Object)
    ], Button.prototype, "dangerPrimary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--btn--sm"),
        __metadata("design:type", Object)
    ], Button.prototype, "smallSize", void 0);
    Button = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[ibmButton]"
        })
    ], Button);
    return Button;
}());



/***/ }),

/***/ "./src/button/button.module.ts":
/*!*************************************!*\
  !*** ./src/button/button.module.ts ***!
  \*************************************/
/*! exports provided: Button, ButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.directive */ "./src/button/button.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button_directive__WEBPACK_IMPORTED_MODULE_2__["Button"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_button_directive__WEBPACK_IMPORTED_MODULE_2__["Button"]],
            exports: [_button_directive__WEBPACK_IMPORTED_MODULE_2__["Button"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        })
    ], ButtonModule);
    return ButtonModule;
}());



/***/ }),

/***/ "./src/button/button.stories.ts":
/*!**************************************!*\
  !*** ./src/button/button.stories.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./src/index.ts");



Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Button", module)
    .addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [___WEBPACK_IMPORTED_MODULE_2__["ButtonModule"]]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t\t<button ibmButton>A button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"secondary\">A secondary button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"tertiary\">A tertiary button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"ghost\">A ghost button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"danger\">A danger button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"danger--primary\">A primary danger button</button>\n\t\t"
}); })
    .add("Small", function () { return ({
    template: "\n\t\t\t<button ibmButton size=\"sm\">A button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"secondary\" size=\"sm\">A secondary button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"tertiary\" size=\"sm\">A tertiary button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"ghost\" size=\"sm\">A ghost button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"danger\" size=\"sm\">A danger button</button>\n\t\t\t<br><br>\n\t\t\t<button ibmButton=\"danger--primary\" size=\"sm\">A primary danger button</button>\n\t\t"
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/calendar/calendar-header.component.ts":
/*!***************************************************!*\
  !*** ./src/calendar/calendar-header.component.ts ***!
  \***************************************************/
/*! exports provided: CalendarHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarHeader", function() { return CalendarHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-time-model.class */ "./src/calendar/date-time-model.class.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarHeader = /** @class */ (function () {
    function CalendarHeader() {
        this.currentView = new Date();
        this.monthCount = 1;
    }
    CalendarHeader.prototype.range = function (stop, start, step) {
        if (start === void 0) { start = 0; }
        if (step === void 0) { step = 1; }
        return Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["range"])(stop, start, step);
    };
    CalendarHeader.prototype.nextYear = function () {
        this.currentView.setFullYear(this.currentView.getFullYear() + 1);
    };
    CalendarHeader.prototype.nextMonth = function () {
        this.currentView.setMonth(this.currentView.getMonth() + 1);
    };
    CalendarHeader.prototype.previousYear = function () {
        this.currentView.setFullYear(this.currentView.getFullYear() - 1);
    };
    CalendarHeader.prototype.previousMonth = function () {
        this.currentView.setMonth(this.currentView.getMonth() - 1);
    };
    CalendarHeader.prototype.getYear = function () {
        return this.currentView.getFullYear();
    };
    CalendarHeader.prototype.getMonth = function (position) {
        if (position === void 0) { position = 0; }
        var currentMonthInView = (this.currentView.getMonth() + position) % 12;
        return _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeModel"].monthsTranslateKeys[currentMonthInView];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarHeader.prototype, "currentView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarHeader.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarHeader.prototype, "monthCount", void 0);
    CalendarHeader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-calendar-header",
            template: "\n\t\t\t<nav class=\"pagination\" aria-label=\"year-pagination\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li class=\"pagination_chevron\">\n\t\t\t\t\t\t<a (click)=\"previousYear()\" title=\"Previous page\" aria-label=\"Previous page\">\n\t\t\t\t\t\t\t<!-- <peretz-icon set=\"arrows_chevrons\" icon=\"chevron_left\" size=\"xs\"></peretz-icon> -->\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li *ngIf=\"header === 'yearOnlyRange'\">{{getYear() - 5}} - {{getYear()}}</li>\n\t\t\t\t\t<li *ngIf=\"header !== 'yearOnlyRange'\">{{getYear()}}</li>\n\t\t\t\t\t<li class=\"pagination_chevron\">\n\t\t\t\t\t\t<a (click)=\"nextYear()\" title=\"Next page\" aria-label=\"Next page\">\n\t\t\t\t\t\t\t<!-- <peretz-icon set=\"arrows_chevrons\" icon=\"chevron_right\" size=\"xs\"></peretz-icon> -->\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\n\t\t\t<nav\n\t\t\t*ngIf=\"header !== 'yearOnly' && header !== 'yearOnlyRange'\"\n\t\t\tclass=\"pagination month\"\n\t\t\taria-label=\"month-pagination\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li class=\"pagination_chevron\">\n\t\t\t\t\t\t<a (click)=\"previousMonth()\" title=\"Previous page\" aria-label=\"Previous page\">\n\t\t\t\t\t\t\t<!-- <peretz-icon set=\"arrows_chevrons\" icon=\"chevron_left\" size=\"xs\"></peretz-icon> -->\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li\n\t\t\t\t\tclass=\"month_view-month\"\n\t\t\t\t\t*ngFor=\"let month of range(monthCount)\">\n\t\t\t\t\t\t{{getMonth(month)}}\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"pagination_chevron\">\n\t\t\t\t\t\t<a (click)=\"nextMonth()\" title=\"Next page\" aria-label=\"Next page\">\n\t\t\t\t\t\t\t<!-- <peretz-icon set=\"arrows_chevrons\" icon=\"chevron_right\" size=\"xs\"></peretz-icon> -->\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t"
        })
    ], CalendarHeader);
    return CalendarHeader;
}());



/***/ }),

/***/ "./src/calendar/calendar.component.ts":
/*!********************************************!*\
  !*** ./src/calendar/calendar.component.ts ***!
  \********************************************/
/*! exports provided: Calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return Calendar; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-time-model.class */ "./src/calendar/date-time-model.class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Calendar = /** @class */ (function () {
    function Calendar() {
        this.monthCount = 1;
        // onKeyDown(evt, idx) {
        // 	console.log(evt, idx);
        // 	if (evt.key === "ArrowRight" && this.allButtons[idx + 1]) {
        // 		evt.preventDefault();
        // 		this.allButtons[idx + 1].focus();
        // 	} else if (evt.key === "ArrowLeft" && idx > 0) {
        // 		evt.preventDefault();
        // 		this.allButtons[idx - 1].focus();
        // 	} else if (evt.key === "ArrowUp" && idx - 7 >= 0) {
        // 		evt.preventDefault();
        // 		this.allButtons[idx - 7].focus();
        // 	} else if (evt.key === "ArrowDown" && this.allButtons[idx + 7]) {
        // 		evt.preventDefault();
        // 		this.allButtons[idx + 7].focus();
        // 	}
        // }
    }
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Calendar.prototype, "view", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeModel"] !== "undefined" && _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeModel"]) === "function" && _a || Object)
    ], Calendar.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Calendar.prototype, "monthCount", void 0);
    Calendar = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-calendar",
            template: "\n\t\t<div class=\"calendar-view\">\n\t\t\t<ibm-calendar-month-view [model]=\"model\" [monthCount]=\"monthCount\" *ngIf=\"view == 'month'\"></ibm-calendar-month-view>\n\t\t\t<ibm-calendar-months-view [model]=\"model\" *ngIf=\"view == 'months'\"></ibm-calendar-months-view>\n\t\t\t<ibm-calendar-quarter-view [model]=\"model\" *ngIf=\"view == 'quarter'\"></ibm-calendar-quarter-view>\n\t\t\t<ibm-calendar-year-view [model]=\"model\" *ngIf=\"view == 'year'\"></ibm-calendar-year-view>\n\t\t</div>\n\t"
        })
    ], Calendar);
    return Calendar;
}());



/***/ }),

/***/ "./src/calendar/calendar.module.ts":
/*!*****************************************!*\
  !*** ./src/calendar/calendar.module.ts ***!
  \*****************************************/
/*! exports provided: DateTimeModel, CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.component */ "./src/calendar/calendar.component.ts");
/* harmony import */ var _icon_icon_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../icon/icon.module */ "./src/icon/icon.module.ts");
/* harmony import */ var _month_view_calendar_month_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./month-view/calendar-month.component */ "./src/calendar/month-view/calendar-month.component.ts");
/* harmony import */ var _months_view_calendar_months_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./months-view/calendar-months.component */ "./src/calendar/months-view/calendar-months.component.ts");
/* harmony import */ var _quarter_view_calendar_quarter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quarter-view/calendar-quarter.component */ "./src/calendar/quarter-view/calendar-quarter.component.ts");
/* harmony import */ var _year_view_calendar_year_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./year-view/calendar-year.component */ "./src/calendar/year-view/calendar-year.component.ts");
/* harmony import */ var _calendar_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar-header.component */ "./src/calendar/calendar-header.component.ts");
/* harmony import */ var _date_time_model_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./date-time-model.class */ "./src/calendar/date-time-model.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimeModel", function() { return _date_time_model_class__WEBPACK_IMPORTED_MODULE_9__["DateTimeModel"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _calendar_component__WEBPACK_IMPORTED_MODULE_2__["Calendar"],
                _month_view_calendar_month_component__WEBPACK_IMPORTED_MODULE_4__["CalendarMonth"],
                _months_view_calendar_months_component__WEBPACK_IMPORTED_MODULE_5__["CalendarMonths"],
                _quarter_view_calendar_quarter_component__WEBPACK_IMPORTED_MODULE_6__["CalendarQuarter"],
                _year_view_calendar_year_component__WEBPACK_IMPORTED_MODULE_7__["CalendarYear"],
                _calendar_header_component__WEBPACK_IMPORTED_MODULE_8__["CalendarHeader"]
            ],
            exports: [
                _calendar_component__WEBPACK_IMPORTED_MODULE_2__["Calendar"],
                _month_view_calendar_month_component__WEBPACK_IMPORTED_MODULE_4__["CalendarMonth"],
                _months_view_calendar_months_component__WEBPACK_IMPORTED_MODULE_5__["CalendarMonths"],
                _quarter_view_calendar_quarter_component__WEBPACK_IMPORTED_MODULE_6__["CalendarQuarter"],
                _year_view_calendar_year_component__WEBPACK_IMPORTED_MODULE_7__["CalendarYear"],
                _calendar_header_component__WEBPACK_IMPORTED_MODULE_8__["CalendarHeader"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _icon_icon_module__WEBPACK_IMPORTED_MODULE_3__["IconModule"],
                _icon_icon_module__WEBPACK_IMPORTED_MODULE_3__["StaticIconModule"]
            ]
        })
    ], CalendarModule);
    return CalendarModule;
}());



/***/ }),

/***/ "./src/calendar/date-time-model.class.ts":
/*!***********************************************!*\
  !*** ./src/calendar/date-time-model.class.ts ***!
  \***********************************************/
/*! exports provided: DateTimeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeModel", function() { return DateTimeModel; });
var DateTimeModel = /** @class */ (function () {
    function DateTimeModel(startDate, endDate) {
        /**
         * 0 = Sunday
         * 1 = Monday
         * 2 = Tuesday
         * 3 = Wednesday
         * 4 = Thursday
         * 5 = Friday
         * 6 = Saturday
         *
         * Defaults to 0 (Sunday)
         *
         * @memberof DateTimeModel
         */
        this.weekStart = 0;
        /**
         * An array of disabled dates and/or date ranges.
         *
         * Date is a Javascript `Date`. Range is an array with a start and end `Date`.
         * If any of those is `null`, it represents an open range.
         *
         * ```typescript
         * // dates (July 10th, 2018 and August 10th, 2018)
         * [new Date(2018, 6, 10), new Date(2018, 7, 10)]
         *
         * // date (July 10th, 2018) and a range (from August 10th, 2018 to forever)
         * [new Date(2018, 6, 10), [new Date(2018, 7, 10), null]]
         * ```
         *
         * @memberof DateTimeModel
         */
        this.disabledDates = [];
        this.startDate = startDate;
        this.endDate = endDate;
    }
    DateTimeModel.dayStart = function (day) {
        return new Date(day.getFullYear(), day.getMonth(), day.getDate());
    };
    DateTimeModel.dayEnd = function (day) {
        return new Date(day.getFullYear(), day.getMonth(), day.getDate(), 23, 59, 59);
    };
    Object.defineProperty(DateTimeModel.prototype, "daysOfWeek", {
        /**
         * An array of short week names, starting from `weekStart`.
         *
         * @readonly
         * @memberof DateTimeModel
         */
        get: function () {
            var sunday = new Date(2018, 5, 10);
            var result = [];
            for (var i = this.weekStart; i < this.weekStart + 7; i++) {
                var day = new Date(sunday);
                day.setDate(day.getDate() + i);
                result.push(DateTimeModel.shortWeekdaysTranslateKeys[day.getDay()]);
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects the full day that `day` is part of.
     *
     * Adjusts `startDate` and `endDate`
     *
     * @param {Date} [day=new Date()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectDay = function (day) {
        if (day === void 0) { day = new Date(); }
        this.startDate = DateTimeModel.dayStart(day);
        this.endDate = DateTimeModel.dayEnd(day);
    };
    /**
     * Selects the week that `day` is part of.
     *
     * Adjusts `startDate` and `endDate`
     *
     * @param {Date} [day=new Date()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectWeek = function (day) {
        if (day === void 0) { day = new Date(); }
        this.startDate = this.weekStartDate(day);
        this.endDate = this.weekStartDate(day);
        this.endDate.setDate(this.endDate.getDate() + 6);
        this.endDate.setHours(23);
        this.endDate.setMinutes(59);
        this.endDate.setSeconds(59);
    };
    /**
     * Convenience function that selects today.
     *
     * Adjusts `startDate` and `endDate`
     *
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectToday = function () {
        this.selectDay(new Date());
    };
    /**
     * Selects yesterday.
     *
     * Adjusts `startDate` and `endDate`
     *
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectYesterday = function () {
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        this.selectDay(yesterday);
    };
    /**
     * Selects a week that `targetDate` belongs to from the beginning
     * (as set with `weekStart`) until the `targetDate`, included.
     *
     * @param {*} [targetDate=new Date()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectWeekToDate = function (targetDate) {
        if (targetDate === void 0) { targetDate = new Date(); }
        this.startDate = this.weekStartDate(targetDate);
        this.endDate = targetDate;
    };
    /**
     * Selects a `monthCount` of months ending with the one that `targetDate` belongs to
     * from the beginning of the first until the `targetDate`, included.
     *
     * @param {*} [targetDate=new Date()]
     * @param {number} [monthCount=1]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectMonthsToDate = function (targetDate, monthCount) {
        if (targetDate === void 0) { targetDate = new Date(); }
        if (monthCount === void 0) { monthCount = 1; }
        this.startDate = new Date(targetDate.getFullYear(), targetDate.getMonth() - monthCount + 1, 1);
        this.endDate = targetDate;
    };
    /**
     * Selects month that `day` belongs to.
     *
     * @param {*} [day=new Date()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectMonth = function (day) {
        if (day === void 0) { day = new Date(); }
        this.startDate = new Date(day.getFullYear(), day.getMonth(), 1);
        this.selectMonthEnd(day);
    };
    /**
     * Selects end of month that `day` belongs to.
     *
     * @param {*} [day=new Date()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectMonthEnd = function (day) {
        if (day === void 0) { day = new Date(); }
        this.endDate = new Date(day.getFullYear(), day.getMonth() + 1, 0, 23, 59, 59); // 0 selects last day of previous month
    };
    /**
     * Selects previous month.
     *
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectLastMonth = function () {
        var now = new Date();
        this.selectMonth(new Date(now.getFullYear(), now.getMonth() - 1, 1));
    };
    /**
     * Selects a quarter that `targetDate` belongs to from the first day of the
     * quarter to `targetDate`.
     *
     * @param {*} [targetDate=new Date()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectQuarterToDate = function (targetDate) {
        if (targetDate === void 0) { targetDate = new Date(); }
        var year = targetDate.getFullYear();
        var time = targetDate.getTime();
        var quarters = [new Date(year, 0, 1), new Date(year, 3, 1), new Date(year, 6, 1), new Date(year, 9, 1)];
        var quarterTimes = quarters.map(function (q) { return q.getTime(); });
        if (quarterTimes[0] < time && time < quarterTimes[1]) {
            // Q1
            this.startDate = quarters[0];
        }
        else if (quarterTimes[1] < time && time < quarterTimes[2]) {
            // Q2
            this.startDate = quarters[1];
        }
        else if (quarterTimes[2] < time && time < quarterTimes[3]) {
            // Q3
            this.startDate = quarters[2];
        }
        else {
            // Q4
            this.startDate = quarters[3];
        }
        this.endDate = targetDate;
    };
    /**
     * Select a `quarter` of the `year`.
     *
     * `quarter` ranges from `0` to `3`, Q1 being `0`
     *
     * @param {number} quarter
     * @param {*} [year=new Date().getFullYear()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectQuarter = function (quarter, year) {
        if (year === void 0) { year = new Date().getFullYear(); }
        this.selectQuarterStart(quarter, year);
        this.selectQuarterEnd(quarter, year);
    };
    /**
     * Sets a `startDate` to start of `quarter` of the `year`.
     *
     * `quarter` ranges from `0` to `3`, Q1 being `0`
     *
     * @param {number} quarter
     * @param {*} [year=new Date().getFullYear()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectQuarterStart = function (quarter, year) {
        if (year === void 0) { year = new Date().getFullYear(); }
        this.startDate = new Date(year, quarter * 3, 1);
    };
    /**
     * Sets an `endDate` to end of `quarter` of the `year`.
     *
     * `quarter` ranges from `0` to `3`, Q1 being `0`
     *
     * @param {number} quarter
     * @param {*} [year=new Date().getFullYear()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectQuarterEnd = function (quarter, year) {
        if (year === void 0) { year = new Date().getFullYear(); }
        this.endDate = new Date(year, (quarter + 1) * 3, 0, 23, 59, 59);
    };
    DateTimeModel.prototype.selectLastQuarter = function (date) {
        if (date === void 0) { date = new Date(); }
        this.selectQuarter(date.getMonth() / 3, date.getFullYear());
    };
    /**
     * Selects year that `day` belongs to.
     *
     * @param {*} [day=new Date()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectYear = function (day) {
        if (day === void 0) { day = new Date(); }
        this.selectYearStart(day);
        this.selectYearEnd(day);
    };
    /**
     * Selects end of year that `day` belongs to.
     *
     * @param {*} [day=new Date()]
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectYearEnd = function (day) {
        if (day === void 0) { day = new Date(); }
        this.endDate = new Date(day.getFullYear(), 11, 31, 23, 59, 59); // 31st of December of given year
    };
    /**
     * Selects start of year that `day` belongs to.
     *
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.selectYearStart = function (day) {
        if (day === void 0) { day = new Date(); }
        this.startDate = new Date(day.getFullYear(), 0, 1); // 1st of January
    };
    /**
     * Returns a week start date for a week that `day` is in.
     *
     * @param {Date} [day=new Date()]
     * @returns {Date}
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.weekStartDate = function (day) {
        if (day === void 0) { day = new Date(); }
        return new Date(day.getFullYear(), day.getMonth(), day.getDate() - day.getDay() + this.weekStart);
    };
    /**
     * Returns a 2D array representing days of month the way they would be displayed
     * in the calendar. With `null` representing empty days.
     *
     * Month of June, 2018, with week starting on Sunday, will return
     *
     * ```typescript
     * [
     * 	[ null, null, null, null, null, 1, 2 ],
     * 	[ 3, 4, 5, 6, 7, 8, 9 ],
     * 	[ 10, 11, 12, 13, 14, 15, 16 ],
     * 	[ 17, 18, 19, 20, 21, 22, 23 ],
     * 	[ 24, 25, 26, 27, 28, 29, 30 ],
     * 	[ null, null, null, null, null, null, null ]
     * ]
     * ```
     *
     * @param {Date} [day=new Date()]
     * @returns {Array<Array<number>>}
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.daysOfMonth = function (day) {
        if (day === void 0) { day = new Date(); }
        var weeks = [];
        var firstOfTheMonth = new Date(day.getFullYear(), day.getMonth(), 1);
        var lastOfTheMonth = new Date(day.getFullYear(), day.getMonth() + 1, 0);
        var dayIndex = 1;
        for (var w = 1; w < 7; w++) {
            var week = [];
            for (var d = 0; d < 7; d++) {
                if (w === 1) {
                    // first week is special, we have to determine when to start
                    if (d >= firstOfTheMonth.getDay() + this.weekStart) {
                        week.push(dayIndex++);
                    }
                    else {
                        week.push(null);
                    }
                }
                else if (dayIndex <= lastOfTheMonth.getDate()) {
                    // every other day of the month
                    week.push(dayIndex++);
                }
                else {
                    // except for when month ends
                    week.push(null);
                }
            }
            weeks.push(week);
        }
        return weeks;
    };
    /**
     * Tells you if `day` is disabled in `disabledDates` property.
     *
     * @param {Date} day
     * @returns
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.isDateDisabled = function (day) {
        for (var i = 0; i < this.disabledDates.length; i++) {
            var dd = this.disabledDates[i];
            if (Array.isArray(dd)) {
                if (dd.length !== 2) {
                    console.warn(dd, "should have length of 2, range start and range end. They can be set to `null` for open range.");
                }
                else if (!dd[0] && dd[1] && day.getTime() <= dd[1].getTime() ||
                    dd[0] && !dd[1] && day.getTime() >= dd[0].getTime() ||
                    !dd[0] && !dd[1] ||
                    dd[0] && dd[1] && day.getTime() <= dd[1].getTime() && day.getTime() >= dd[0].getTime()) {
                    return true;
                }
            }
            else if (day.getFullYear() === dd.getFullYear() &&
                day.getMonth() === dd.getMonth() &&
                day.getDate() === dd.getDate()) {
                return true;
            }
        }
        return false;
    };
    /**
     * Tells you if `day` is inside of selected range.
     *
     * @param {Date} day
     * @returns
     * @memberof DateTimeModel
     */
    DateTimeModel.prototype.isDateInRange = function (day) {
        var time = day.getTime();
        return this.startDate && this.endDate && this.startDate.getTime() <= time && time <= this.endDate.getTime();
    };
    DateTimeModel.monthsTranslateKeys = [
        "CALENDAR.MONTHS.JANUARY",
        "CALENDAR.MONTHS.FEBRUARY",
        "CALENDAR.MONTHS.MARCH",
        "CALENDAR.MONTHS.APRIL",
        "CALENDAR.MONTHS.MAY",
        "CALENDAR.MONTHS.JUNE",
        "CALENDAR.MONTHS.JULY",
        "CALENDAR.MONTHS.AUGUST",
        "CALENDAR.MONTHS.SEPTEMBER",
        "CALENDAR.MONTHS.OCTOBER",
        "CALENDAR.MONTHS.NOVEMBER",
        "CALENDAR.MONTHS.DECEMBER"
    ];
    DateTimeModel.shortWeekdaysTranslateKeys = [
        "CALENDAR.SHORTWEEKDAYS.SUNDAY",
        "CALENDAR.SHORTWEEKDAYS.MONDAY",
        "CALENDAR.SHORTWEEKDAYS.TUESDAY",
        "CALENDAR.SHORTWEEKDAYS.WEDNESDAY",
        "CALENDAR.SHORTWEEKDAYS.THURSDAY",
        "CALENDAR.SHORTWEEKDAYS.FRIDAY",
        "CALENDAR.SHORTWEEKDAYS.SATURDAY"
    ];
    return DateTimeModel;
}());



/***/ }),

/***/ "./src/calendar/month-view/calendar-month.component.ts":
/*!*************************************************************!*\
  !*** ./src/calendar/month-view/calendar-month.component.ts ***!
  \*************************************************************/
/*! exports provided: CalendarMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMonth", function() { return CalendarMonth; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../date-time-model.class */ "./src/calendar/date-time-model.class.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarMonth = /** @class */ (function () {
    function CalendarMonth() {
        /**
         * Number of months to display in this view.
         *
         * @memberof CalendarMonth
         */
        this.monthCount = 1;
        /**
         * `Date` being used in this view.
         *
         * @type {Date}
         * @memberof CalendarMonth
         */
        this.currentView = new Date();
        /**
         * State to determine whether you are selecting `startDate` or `endDate`
         *
         * @memberof CalendarMonth
         */
        this.rangeSelectionInProgress = false;
    }
    CalendarMonth.prototype.ngOnInit = function () {
        this.currentView = new Date(this.model.startDate);
        if (!this.currentView || isNaN(this.currentView.getTime())) {
            this.currentView = new Date();
        }
    };
    /**
     * Wrapper for `range` function in utils because it cannot
     * be directly used in template
     *
     * @param {number} stop
     * @param {number} [start=0]
     * @param {number} [step=1]
     * @returns Array<any>
     * @memberof CalendarMonth
     */
    CalendarMonth.prototype.range = function (stop, start, step) {
        if (start === void 0) { start = 0; }
        if (step === void 0) { step = 1; }
        return Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["range"])(stop, start, step);
    };
    /**
     * Returns value indicating whether `day` is current day
     *
     * @param {number} day day of month
     * @param {number} [position=0] index of month in view
     * @returns boolean
     * @memberof CalendarMonth
     */
    CalendarMonth.prototype.isCurrentDay = function (day, position) {
        if (position === void 0) { position = 0; }
        var now = new Date();
        return (this.currentView.getFullYear() === now.getFullYear() &&
            this.currentView.getMonth() + position === now.getMonth() &&
            day === now.getDate());
    };
    /**
     * Convenience method to figure out if `day` is disabled
     *
     * @param {number} day day of month
     * @param {number} [position=0] index of month in view
     * @returns boolean
     * @memberof CalendarMonth
     */
    CalendarMonth.prototype.isDisabled = function (day, position) {
        if (position === void 0) { position = 0; }
        return this.model.isDateDisabled(new Date(this.currentView.getFullYear(), this.currentView.getMonth() + position, day));
    };
    /**
     * Convenience method to figure out if days of the month in view
     *
     * @param {number} [position=0] index of month in view
     * @returns boolean
     * @memberof CalendarMonth
     */
    CalendarMonth.prototype.daysOfMonth = function (position) {
        if (position === void 0) { position = 0; }
        return this.model.daysOfMonth(new Date(this.currentView.getFullYear(), this.currentView.getMonth() + position, 1));
    };
    /**
     * Convenience method to figure out if `day` is part of a range selection
     *
     * @param {number} day day of month
     * @param {number} [position=0] index of month in view
     * @returns boolean
     * @memberof CalendarMonth
     */
    CalendarMonth.prototype.inRange = function (day, position) {
        if (position === void 0) { position = 0; }
        if (!day) {
            return false;
        }
        return this.model.isDateInRange(new Date(this.currentView.getFullYear(), this.currentView.getMonth() + position, day));
    };
    /**
     * Returns value indicating whether `day` is selected
     *
     * @param {number} day day of month
     * @param {number} [position=0] index of month in view
     * @returns boolean
     * @memberof CalendarMonth
     */
    CalendarMonth.prototype.isSelected = function (date, position) {
        if (position === void 0) { position = 0; }
        if (!date) {
            return false;
        }
        var currentMonthInView = (this.currentView.getMonth() + position) % 12;
        var currentYearInView = this.currentView.getFullYear();
        if (this.currentView.getMonth() + position === 12) {
            currentYearInView += 1;
        }
        return currentMonthInView === date.getMonth() &&
            currentYearInView === date.getFullYear();
    };
    /**
     *	Sets model's `startDate` and `endDate`
     *
     * @param {number} day day of month
     * @param {number} [position=0] index of month in view
     * @memberof CalendarMonth
     */
    CalendarMonth.prototype.selectDay = function (day, position) {
        if (position === void 0) { position = 0; }
        if (this.isDisabled(day, position)) {
            return;
        }
        var currentMonthInView = (this.currentView.getMonth() + position) % 12;
        var currentYearInView = this.currentView.getFullYear();
        if (this.currentView.getMonth() + position === 12) {
            currentYearInView += 1;
        }
        if (this.rangeSelectionInProgress) {
            this.rangeSelectionInProgress = false;
            this.model.endDate = _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeModel"].dayEnd(new Date(currentYearInView, currentMonthInView, day));
            if (this.model.startDate.getTime() > this.model.endDate.getTime()) {
                var tmp = this.model.startDate;
                this.model.startDate = this.model.endDate;
                this.model.endDate = tmp;
            }
        }
        else {
            this.rangeSelectionInProgress = true;
            this.model.selectDay(new Date(currentYearInView, currentMonthInView, day));
        }
    };
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeModel"] !== "undefined" && _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeModel"]) === "function" && _a || Object)
    ], CalendarMonth.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarMonth.prototype, "monthCount", void 0);
    CalendarMonth = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-calendar-month-view",
            template: "\n\t<div class=\"calendar-view\">\n\t\t<ibm-calendar-header [currentView]=\"currentView\" [monthCount]=\"monthCount\"></ibm-calendar-header>\n\t\t<div class=\"calendar_month-container\"\n\t\t*ngFor=\"let month of range(monthCount)\">\n\t\t\t<table class=\"calendar_grid calendar_month\">\n\t\t\t\t<tr class=\"grid_row_header--month\">\n\t\t\t\t\t<th *ngFor=\"let day of model.daysOfWeek\"><div>{{day}}</div></th>\n\t\t\t\t</tr>\n\t\t\t\t<tr\n\t\t\t\tclass=\"grid_row--month\"\n\t\t\t\t*ngFor=\"let week of daysOfMonth(month)\">\n\t\t\t\t<td\n\t\t\t\t\t*ngFor=\"let day of week\"\n\t\t\t\t\t(click)=\"selectDay(day, month)\"\n\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t'today': isCurrentDay(day, month),\n\t\t\t\t\t\t'empty': !day,\n\t\t\t\t\t\t'selected': isSelected(model.startDate, month) && day == model.startDate.getDate()\n\t\t\t\t\t\t\t|| isSelected(model.endDate, month) && day == model.endDate.getDate(),\n\t\t\t\t\t\t'range': inRange(day, month),\n\t\t\t\t\t\t'disabled': isDisabled(day, month)\n\t\t\t\t\t}\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t{{day}}\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n\t"
        })
    ], CalendarMonth);
    return CalendarMonth;
}());



/***/ }),

/***/ "./src/calendar/months-view/calendar-months.component.ts":
/*!***************************************************************!*\
  !*** ./src/calendar/months-view/calendar-months.component.ts ***!
  \***************************************************************/
/*! exports provided: CalendarMonths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMonths", function() { return CalendarMonths; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../date-time-model.class */ "./src/calendar/date-time-model.class.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarMonths = /** @class */ (function () {
    function CalendarMonths() {
        /**
         * `Date` being used in this view.
         *
         * @type {Date}
         * @memberof CalendarMonths
         */
        this.currentView = new Date();
        /**
         * State to determine whether you are selecting `startDate` or `endDate`
         *
         * @memberof CalendarMonths
         */
        this.rangeSelectionInProgress = false;
        /**
         * Reference to month translation keys in `DateTimeModel`
         *
         * @memberof CalendarMonths
         */
        this.months = _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeModel"].monthsTranslateKeys;
    }
    CalendarMonths.prototype.ngOnInit = function () {
        this.currentView = new Date(this.model.startDate);
        if (!this.currentView || isNaN(this.currentView.getTime())) {
            this.currentView = new Date();
        }
    };
    /**
     * Wrapper for `range` function in utils because it cannot
     * be directly used in template
     *
     * @param {number} stop
     * @param {number} [start=0]
     * @param {number} [step=1]
     * @returns Array<any>
     * @memberof CalendarMonths
     */
    CalendarMonths.prototype.range = function (stop, start, step) {
        if (start === void 0) { start = 0; }
        if (step === void 0) { step = 1; }
        return Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["range"])(stop, start, step);
    };
    /**
     * Returns value indicating whether `month` is current month
     *
     * @param {number} month in year
     * @returns boolean
     * @memberof CalendarMonths
     */
    CalendarMonths.prototype.isCurrentMonth = function (month) {
        var now = new Date();
        return (this.currentView.getFullYear() === now.getFullYear() &&
            month === now.getMonth());
    };
    /**
     * Returns value indicating whether `month` is disabled
     *
     * @param {number} month in year
     * @returns boolean
     * @memberof CalendarMonths
     */
    CalendarMonths.prototype.isDisabled = function (month) {
        return this.model.isDateDisabled(new Date(this.currentView.getFullYear(), month, 1));
    };
    /**
     * Returns value indicating whether `month` is part of a range selection
     *
     * @param {number} month in year
     * @returns boolean
     * @memberof CalendarMonths
     */
    CalendarMonths.prototype.inRange = function (month) {
        return this.model.isDateInRange(new Date(this.currentView.getFullYear(), month, 1));
    };
    /**
     * Returns value indicating whether `month` is selected
     *
     * @param {number} month in year
     * @memberof CalendarMonths
     */
    CalendarMonths.prototype.isSelected = function (month) {
        return this.currentView.getFullYear() === this.model.startDate.getFullYear() && month === this.model.startDate.getMonth()
            || this.currentView.getFullYear() === this.model.endDate.getFullYear() && month === this.model.endDate.getMonth();
    };
    /**
     * Sets model's `startDate` and `endDate`
     *
     * @param {number} month in year
     * @memberof CalendarMonths
     */
    CalendarMonths.prototype.selectMonth = function (month) {
        if (this.isDisabled(month)) {
            return;
        }
        if (this.rangeSelectionInProgress) {
            this.rangeSelectionInProgress = false;
            this.model.selectMonthEnd(new Date(this.currentView.getFullYear(), month));
            if (this.model.startDate.getTime() > this.model.endDate.getTime()) {
                var tmp = this.model.startDate;
                this.model.startDate = this.model.endDate;
                this.model.endDate = tmp;
            }
        }
        else {
            this.rangeSelectionInProgress = true;
            this.model.selectMonth(new Date(this.currentView.getFullYear(), month, 1));
        }
    };
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeModel"] !== "undefined" && _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeModel"]) === "function" && _a || Object)
    ], CalendarMonths.prototype, "model", void 0);
    CalendarMonths = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-calendar-months-view",
            template: "\n\t<div class=\"calendar-view\">\n\t\t<ibm-calendar-header [currentView]=\"currentView\" header=\"yearOnly\"></ibm-calendar-header>\n\t\t<table class=\"calendar_grid\">\n\t\t\t<tr\n\t\t\tclass=\"grid_row--months\"\n\t\t\t*ngFor=\"let i of range(3)\">\n\t\t\t\t<td\n\t\t\t\t*ngFor=\"let j of range(4)\"\n\t\t\t\t(click)=\"selectMonth(i * 4 + j)\"\n\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t'today': isCurrentMonth(i * 4 + j),\n\t\t\t\t\t'selected': isSelected(i * 4 + j),\n\t\t\t\t\t'range': inRange(i * 4 + j),\n\t\t\t\t\t'disabled': isDisabled(i * 4 + j)\n\t\t\t\t}\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t{{months[i * 4 + j]}}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n\t"
        })
    ], CalendarMonths);
    return CalendarMonths;
}());



/***/ }),

/***/ "./src/calendar/quarter-view/calendar-quarter.component.ts":
/*!*****************************************************************!*\
  !*** ./src/calendar/quarter-view/calendar-quarter.component.ts ***!
  \*****************************************************************/
/*! exports provided: CalendarQuarter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarQuarter", function() { return CalendarQuarter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../date-time-model.class */ "./src/calendar/date-time-model.class.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarQuarter = /** @class */ (function () {
    /**
     * Creates an instance of CalendarQuarter.
     * Translates quarters.
     * @param {TranslateService} translate
     * @memberof CalendarQuarter
     */
    function CalendarQuarter() {
        /**
         * `Date` being used in this view.
         *
         * @type {Date}
         * @memberof CalendarMonths
         */
        this.currentView = new Date();
        /**
         * State to determine whether you are selecting `startDate` or `endDate`
         *
         * @memberof CalendarMonths
         */
        this.rangeSelectionInProgress = false;
        // this.translate.get("CALENDAR.QUARTERS").subscribe((res: Array<any>) => {
        // 	this.quarters = res;
        // });
    }
    CalendarQuarter.prototype.ngOnInit = function () {
        this.currentView = new Date(this.model.startDate);
        if (!this.currentView || isNaN(this.currentView.getTime())) {
            this.currentView = new Date();
        }
    };
    /**
     * Wrapper for `range` function in utils because it cannot
     * be directly used in template
     *
     * @param {number} stop
     * @param {number} [start=0]
     * @param {number} [step=1]
     * @returns Array<any>
     * @memberof CalendarMonths
     */
    CalendarQuarter.prototype.range = function (stop, start, step) {
        if (start === void 0) { start = 0; }
        if (step === void 0) { step = 1; }
        return Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["range"])(stop, start, step);
    };
    /**
     * Returns value indicating whether `quarter` is current quarter
     *
     * @param {number} quarter of year
     * @returns boolean
     * @memberof CalendarQuarter
     */
    CalendarQuarter.prototype.isCurrentQuarter = function (quarter) {
        var now = new Date();
        return (this.currentView.getFullYear() === now.getFullYear() &&
            quarter === Math.floor(now.getMonth() / 3));
    };
    /**
     * Returns value indicating whether `quarter` is disabled
     *
     * @param {number} quarter of year
     * @returns boolean
     * @memberof CalendarQuarter
     */
    CalendarQuarter.prototype.isDisabled = function (quarter) {
        return this.model.isDateDisabled(new Date(this.currentView.getFullYear(), quarter * 4, 1));
    };
    /**
     * Returns value indicating whether `quarter` is part of a range selection
     *
     * @param {number} quarter of year
     * @returns boolean
     * @memberof CalendarQuarter
     */
    CalendarQuarter.prototype.inRange = function (quarter) {
        return this.model.isDateInRange(new Date(this.currentView.getFullYear(), quarter * 4, 1));
    };
    /**
     * Returns value indicating whether `quarter` is selected
     *
     * @param {number} quarter
     * @returns
     * @memberof CalendarQuarter
     */
    CalendarQuarter.prototype.isSelected = function (quarter) {
        return (this.currentView.getFullYear() === this.model.startDate.getFullYear() && quarter === Math.floor(this.model.startDate.getMonth() / 3)
            || this.currentView.getFullYear() === this.model.endDate.getFullYear() && quarter === Math.floor(this.model.endDate.getMonth() / 3));
    };
    /**
     * Sets model's `startDate` and `endDate`
     *
     * @param {number} quarter
     * @memberof CalendarQuarter
     */
    CalendarQuarter.prototype.selectQuarter = function (quarter) {
        if (this.isDisabled(quarter)) {
            return;
        }
        if (this.rangeSelectionInProgress) {
            this.rangeSelectionInProgress = false;
            this.model.selectQuarterEnd(quarter, this.currentView.getFullYear());
            if (this.model.startDate.getTime() > this.model.endDate.getTime()) {
                var tmp = this.model.startDate;
                this.model.startDate = this.model.endDate;
                this.model.endDate = tmp;
            }
        }
        else {
            this.rangeSelectionInProgress = true;
            this.model.selectQuarter(quarter, this.currentView.getFullYear());
        }
    };
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeModel"] !== "undefined" && _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeModel"]) === "function" && _a || Object)
    ], CalendarQuarter.prototype, "model", void 0);
    CalendarQuarter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-calendar-quarter-view",
            template: "\n\t<div class=\"calendar-view\">\n\t\t<ibm-calendar-header [currentView]=\"currentView\" header=\"yearOnly\"></ibm-calendar-header>\n\t\t<table class=\"calendar_grid\">\n\t\t\t<tr\n\t\t\tclass=\"grid_row--quarters\"\n\t\t\t*ngFor=\"let i of range(2)\">\n\t\t\t\t<td\n\t\t\t\t*ngFor=\"let j of range(2)\"\n\t\t\t\t(click)=\"selectQuarter(i * 2 + j)\"\n\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t'today': isCurrentQuarter(i * 2 + j),\n\t\t\t\t\t'selected': isSelected(i * 2 + j),\n\t\t\t\t\t'range': inRange(i * 2 + j),\n\t\t\t\t\t'disabled': isDisabled(i * 2 + j)\n\t\t\t\t}\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p class=\"top\">\n\t\t\t\t\t\t\t{{quarters[i * 2 + j].name}}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class=\"bottom\">\n\t\t\t\t\t\t\t{{quarters[i * 2 + j].months}}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [])
    ], CalendarQuarter);
    return CalendarQuarter;
}());



/***/ }),

/***/ "./src/calendar/year-view/calendar-year.component.ts":
/*!***********************************************************!*\
  !*** ./src/calendar/year-view/calendar-year.component.ts ***!
  \***********************************************************/
/*! exports provided: CalendarYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarYear", function() { return CalendarYear; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../date-time-model.class */ "./src/calendar/date-time-model.class.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarYear = /** @class */ (function () {
    function CalendarYear() {
        /**
         * `Date` being used in this view.
         *
         * @type {Date}
         * @memberof CalendarMonths
         */
        this.currentView = new Date();
        /**
         * State to determine whether you are selecting `startDate` or `endDate`
         *
         * @memberof CalendarMonths
         */
        this.rangeSelectionInProgress = false;
    }
    CalendarYear.prototype.ngOnInit = function () {
        this.currentView = new Date(this.model.startDate);
        if (!this.currentView || isNaN(this.currentView.getTime())) {
            this.currentView = new Date();
        }
    };
    /**
     * Wrapper for `range` function in utils because it cannot
     * be directly used in template
     *
     * @param {number} stop
     * @param {number} [start=0]
     * @param {number} [step=1]
     * @returns Array<any>
     * @memberof CalendarMonths
     */
    CalendarYear.prototype.range = function (stop, start, step) {
        if (start === void 0) { start = 0; }
        if (step === void 0) { step = 1; }
        return Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["range"])(stop, start, step);
    };
    /**
     * Returns value indicating whether `year` is current year
     *
     * @param {number} yearIndex index of year in view
     * @returns boolean
     * @memberof CalendarYear
     */
    CalendarYear.prototype.isCurrentYear = function (yearIndex) {
        var now = new Date();
        var currentYear = this.currentView.getFullYear() - yearIndex; // Last year in the calendar view
        return currentYear === now.getFullYear();
    };
    /**
     * Returns value indicating whether `year` is disabled
     *
     * @param {number} yearIndex index of year in view
     * @returns boolean
     * @memberof CalendarYear
     */
    CalendarYear.prototype.isDisabled = function (yearIndex) {
        var year = this.currentView.getFullYear() - yearIndex;
        return this.model.isDateDisabled(new Date(year, 1, 1));
    };
    /**
     * Returns value indicating whether `year` is part of a range selection
     *
     * @param {number} yearIndex index of year in view
     * @returns boolean
     * @memberof CalendarYear
     */
    CalendarYear.prototype.inRange = function (yearIndex) {
        var year = this.currentView.getFullYear() - yearIndex;
        return this.model.isDateInRange(new Date(year, 1, 1));
    };
    /**
     * Returns value indicating whether `year` is selected
     *
     * @param {number} yearIndex index of year in view
     * @returns boolean
     * @memberof CalendarYear
     */
    CalendarYear.prototype.isSelected = function (yearIndex) {
        var currentYearProvided = this.currentView.getFullYear() - yearIndex;
        for (var i = 0; i < 6; i++) {
            var currentYearInView = this.currentView.getFullYear() - i;
            var isCurrentYearStart = currentYearInView === this.model.startDate.getFullYear() &&
                currentYearProvided === this.model.startDate.getFullYear();
            var isCurrentYearEnd = currentYearInView === this.model.endDate.getFullYear() &&
                currentYearProvided === this.model.endDate.getFullYear();
            if (isCurrentYearStart || isCurrentYearEnd) {
                return true;
            }
        }
        return false;
    };
    /**
     * Sets model's `startDate` and `endDate`
     *
     * @param {number} yearIndex index of year in view
     * @memberof CalendarYear
     */
    CalendarYear.prototype.selectYear = function (yearIndex) {
        var selectedYear = this.currentView.getFullYear() - yearIndex;
        if (this.isDisabled(yearIndex)) {
            return;
        }
        if (this.rangeSelectionInProgress) {
            this.rangeSelectionInProgress = false;
            this.model.selectYearEnd(new Date(selectedYear));
            this.model.endDate = new Date(selectedYear, 11, 31);
            if (this.model.startDate.getTime() > this.model.endDate.getTime()) {
                var tmp = this.model.startDate;
                this.model.startDate = this.model.endDate;
                this.model.endDate = tmp;
            }
        }
        else {
            this.rangeSelectionInProgress = true;
            this.model.selectYear(new Date(selectedYear, 1, 1));
        }
    };
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeModel"] !== "undefined" && _date_time_model_class__WEBPACK_IMPORTED_MODULE_1__["DateTimeModel"]) === "function" && _a || Object)
    ], CalendarYear.prototype, "model", void 0);
    CalendarYear = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-calendar-year-view",
            template: "\n\t<div class=\"calendar-view\">\n\t\t<ibm-calendar-header [currentView]=\"currentView\" header=\"yearOnlyRange\"></ibm-calendar-header>\n\t\t<table class=\"calendar_grid\">\n\t\t\t<tr\n\t\t\tclass=\"grid_row--months\"\n\t\t\t*ngFor=\"let i of range(-1, 2, -1)\">\n\t\t\t\t<td\n\t\t\t\t*ngFor=\"let j of range(-1, 1, -1)\"\n\t\t\t\t(click)=\"selectYear(i * 2 + j)\"\n\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t'today': isCurrentYear(i * 2 + j),\n\t\t\t\t\t'selected': isSelected(i * 2 + j),\n\t\t\t\t\t'range': inRange(i * 2 + j),\n\t\t\t\t\t'disabled': isDisabled(i * 2 + j)\n\t\t\t\t}\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t{{currentView.getFullYear() - (i * 2 + j)}}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n\t"
        })
    ], CalendarYear);
    return CalendarYear;
}());



/***/ }),

/***/ "./src/checkbox/checkbox.component.ts":
/*!********************************************!*\
  !*** ./src/checkbox/checkbox.component.ts ***!
  \********************************************/
/*! exports provided: CheckboxState, CheckboxChange, Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxState", function() { return CheckboxState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxChange", function() { return CheckboxChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Defines the set of states for a checkbox component.
 * @export
 * @enum {number}
 */
var CheckboxState;
(function (CheckboxState) {
    CheckboxState[CheckboxState["Init"] = 0] = "Init";
    CheckboxState[CheckboxState["Indeterminate"] = 1] = "Indeterminate";
    CheckboxState[CheckboxState["Checked"] = 2] = "Checked";
    CheckboxState[CheckboxState["Unchecked"] = 3] = "Unchecked";
})(CheckboxState || (CheckboxState = {}));
/**
 * Used to emit changes performed on checkbox components.
 * @export
 * @class CheckboxChange
 */
var CheckboxChange = /** @class */ (function () {
    function CheckboxChange() {
    }
    return CheckboxChange;
}());

/**
 * @export
 * @class Checkbox
 * @implements {ControlValueAccessor}
 * @implements {AfterViewInit}
 */
var Checkbox = /** @class */ (function () {
    /**
     * Creates an instance of `Checkbox`.
     * @param {ChangeDetectorRef} changeDetectorRef
     * @memberof Checkbox
     */
    function Checkbox(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.class = "bx--checkbox-wrapper";
        /**
         * Size of the checkbox.
         */
        this.size = "md";
        /**
         * Set to `true` for a disabled checkbox.
         */
        this.disabled = false;
        /**
         * The unique id for the checkbox component.
         */
        this.id = "checkbox-" + Checkbox_1.checkboxCount;
        /**
         * Used to set the `aria-label` attribute on the input element.
         */
        // tslint:disable-next-line:no-input-rename
        this.ariaLabel = "";
        /**
         * Emits event notifying other classes when a change in state occurs on a checkbox after a
         * click.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits event notifying other classes when a change in state occurs specifically
         * on an indeterminate checkbox.
         */
        this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Set to `true` if the input checkbox is selected (or checked).
         */
        this._checked = false;
        /**
         * Set to `true` if the input checkbox is in state indeterminate.
         */
        this._indeterminate = false;
        this.currentCheckboxState = CheckboxState.Init;
        /**
         * Called when checkbox is blurred. Needed to properly implement `ControlValueAccessor`.
         * @memberof Checkbox
         */
        this.onTouched = function () { };
        /**
         * Method set in `registerOnChange` to propagate changes back to the form.
         * @memberof Checkbox
         */
        this.propagateChange = function (_) { };
        Checkbox_1.checkboxCount++;
    }
    Checkbox_1 = Checkbox;
    Object.defineProperty(Checkbox.prototype, "indeterminate", {
        /**
         * Reflects whether the checkbox state is indeterminate.
         * @readonly
         */
        get: function () {
            return this._indeterminate;
        },
        /**
         * Set the checkbox's indeterminate state to match the parameter and transition the view to reflect the change.
         */
        set: function (indeterminate) {
            var changed = this._indeterminate !== indeterminate;
            this._indeterminate = indeterminate;
            if (changed) {
                this.transitionCheckboxState(CheckboxState.Indeterminate);
            }
            else {
                this.transitionCheckboxState(this.checked ? CheckboxState.Checked : CheckboxState.Unchecked);
            }
            this.indeterminateChange.emit(this._indeterminate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox.prototype, "checked", {
        /**
         * Returns value `true` if state is selected for the checkbox.
         * @readonly
         */
        get: function () {
            return this._checked;
        },
        /**
         * Updating the state of a checkbox to match the state of the parameter passed in.
         */
        set: function (checked) {
            var _this = this;
            if (checked !== this.checked) {
                if (this._indeterminate) {
                    Promise.resolve().then(function () {
                        _this._indeterminate = false;
                        _this.indeterminateChange.emit(_this._indeterminate);
                    });
                }
                this._checked = checked;
                this.changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a class name based on `@Input() size`, `@Input() inline`, and `@Input() nested`.
     * @return {string}
     */
    Checkbox.prototype.getVariantClass = function () {
        if (this.inline || this.nested) {
            return "checkbox" + (this.inline ? "--inline" : "") + (this.nested ? "--nested" : "") + (this.size !== "md" ? "-" + this.size : "");
        }
        else {
            return "checkbox" + (this.size !== "md" ? "--" + this.size : "");
        }
    };
    /**
     * Toggle the selected state of the checkbox.
     * @memberof Checkbox
     */
    Checkbox.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    // this is the initial value set to the component
    Checkbox.prototype.writeValue = function (value) {
        this.checked = !!value;
    };
    /**
     * Sets a method in order to propagate changes back to the form.
     * @param {any} fn
     * @memberof Checkbox
     */
    Checkbox.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * Registers a callback to be triggered when the control has been touched.
     * @param fn Callback to be triggered when the checkbox is touched.
     */
    Checkbox.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Executes on the event of a change within `Checkbox` to block propagation.
     * @param {any} event
     * @memberof Checkbox
     */
    Checkbox.prototype.onChange = function (event) {
        event.stopPropagation();
    };
    /**
     * Handles click events on the `Checkbox` and emits changes to other classes.
     * @param {any} event
     * @memberof Checkbox
     */
    Checkbox.prototype.onClick = function (event) {
        if (!this.disabled) {
            this.toggle();
            this.transitionCheckboxState(this._checked ? CheckboxState.Checked : CheckboxState.Unchecked);
            this.emitChangeEvent();
        }
    };
    /**
     * Handles changes between checkbox states.
     * @param {CheckboxState} newState
     * @returns {null}
     * @memberof Checkbox
     */
    Checkbox.prototype.transitionCheckboxState = function (newState) {
        var oldState = this.currentCheckboxState;
        // Indeterminate has to be set always if it's transitioned to
        // checked has to be set before indeterminate or it overrides
        // indeterminate's dash
        if (newState === CheckboxState.Indeterminate) {
            this.checked = false;
            this.inputCheckbox.nativeElement.indeterminate = true;
        }
        if (oldState === newState) {
            return;
        }
        this.currentCheckboxState = newState;
    };
    /**
     * Creates instance of `CheckboxChange` used to propagate the change event.
     * @memberof Checkbox
     */
    Checkbox.prototype.emitChangeEvent = function () {
        var event = new CheckboxChange();
        event.source = this;
        event.checked = this.checked;
        this.propagateChange(this.checked);
        this.change.emit(event);
    };
    /**
     * Updates the checkbox if it is in the indeterminate state.
     * @memberof Checkbox
     */
    Checkbox.prototype.ngAfterViewInit = function () {
        if (this.indeterminate) {
            this.inputCheckbox.nativeElement.indeterminate = true;
            this.checked = false;
        }
    };
    var Checkbox_1, _a, _b;
    /**
     * Variable used for creating unique ids for checkbox components.
     */
    Checkbox.checkboxCount = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.class"),
        __metadata("design:type", Object)
    ], Checkbox.prototype, "class", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Checkbox.prototype, "inline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Checkbox.prototype, "nested", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Checkbox.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Checkbox.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Checkbox.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("aria-label"),
        __metadata("design:type", Object)
    ], Checkbox.prototype, "ariaLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("aria-labelledby"),
        __metadata("design:type", String)
    ], Checkbox.prototype, "ariaLabelledby", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], Checkbox.prototype, "indeterminate", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], Checkbox.prototype, "checked", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Checkbox.prototype, "change", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Checkbox.prototype, "indeterminateChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("inputCheckbox"),
        __metadata("design:type", typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _a || Object)
    ], Checkbox.prototype, "inputCheckbox", void 0);
    Checkbox = Checkbox_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-checkbox",
            template: "\n\t\t<input\n\t\t\t#inputCheckbox\n\t\t\tclass=\"bx--checkbox\"\n\t\t\ttype=\"checkbox\"\n\t\t\t[id]=\"id\"\n\t\t\t[value]=\"value\"\n\t\t\t[name]=\"name\"\n\t\t\t[required]=\"required\"\n\t\t\t[checked]=\"checked\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[indeterminate]=\"indeterminate\"\n\t\t\t[attr.aria-label]=\"ariaLabel\"\n\t\t\t[attr.aria-labelledby]=\"ariaLabelledby\"\n\t\t\t[attr.aria-checked]=\"(indeterminate ? 'mixed' : checked)\"\n\t\t\t(change)=\"onChange($event)\"\n\t\t\t(click)=\"onClick($event)\">\n\t\t<label [for]=\"id\" class=\"bx--checkbox-label\">\n\t\t\t<ng-content></ng-content>\n\t\t</label>\n\t",
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Checkbox_1,
                    multi: true
                }
            ],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]) === "function" && _b || Object])
    ], Checkbox);
    return Checkbox;
}());



/***/ }),

/***/ "./src/checkbox/checkbox.module.ts":
/*!*****************************************!*\
  !*** ./src/checkbox/checkbox.module.ts ***!
  \*****************************************/
/*! exports provided: Checkbox, CheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return CheckboxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox.component */ "./src/checkbox/checkbox.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _checkbox_component__WEBPACK_IMPORTED_MODULE_3__["Checkbox"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// modules



// imports

// exports

var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    CheckboxModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _checkbox_component__WEBPACK_IMPORTED_MODULE_3__["Checkbox"]
            ],
            exports: [
                _checkbox_component__WEBPACK_IMPORTED_MODULE_3__["Checkbox"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ]
        })
    ], CheckboxModule);
    return CheckboxModule;
}());



/***/ }),

/***/ "./src/checkbox/checkbox.stories.ts":
/*!******************************************!*\
  !*** ./src/checkbox/checkbox.stories.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-actions */ "./node_modules/@storybook/addon-actions/dist/index.js");
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./src/index.ts");




Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Checkbox", module).addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [___WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"]]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t<ibm-checkbox\n\t\t\t[checked]=\"checked\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[indeterminate]=\"indeterminate\"\n\t\t\t(change)=\"onChange($event)\"\n\t\t\t(indeterminateChange)=\"onIndeterminateChange($event)\">\n\t\t\tCheckbox\n\t\t</ibm-checkbox>\n\t",
    props: {
        checked: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__["boolean"])("checked", false),
        disabled: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__["boolean"])("disabled", false),
        indeterminate: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__["boolean"])("indeterminate", false),
        onChange: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__["action"])("Change fired!"),
        onIndeterminateChange: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__["action"])("Indeterminate change fired!")
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/code-snippet/code-snippet.component.ts":
/*!****************************************************!*\
  !*** ./src/code-snippet/code-snippet.component.ts ***!
  \****************************************************/
/*! exports provided: SnippetType, CodeSnippet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnippetType", function() { return SnippetType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSnippet", function() { return CodeSnippet; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnippetType;
(function (SnippetType) {
    SnippetType["single"] = "single";
    SnippetType["multi"] = "multi";
    SnippetType["inline"] = "inline";
})(SnippetType || (SnippetType = {}));
/**
 * ```html
 * <ibm-code-snippet>Code</ibm-code-snippet>
 * ```
 * @export
 * @class CodeSnippet
 */
var CodeSnippet = /** @class */ (function () {
    /**
     * Creates an instance of CodeSnippet.
     * @param {ChangeDetectorRef} changeDetectorRef
     * @param {ElementRef} elementRef
     * @param {Renderer2} renderer
     * @memberof CodeSnippet
     */
    function CodeSnippet(i18n) {
        this.i18n = i18n;
        /**
         * It can be `"single"`, `"multi"` or `"inline"`
         *
         * @type {SnippetType}
         * @memberof CodeSnippet
         */
        this.display = SnippetType.single;
        this.translations = this.i18n.get().CODE_SNIPPET;
        /**
         * Set to `"light"` to apply the light style on the code snippet.
         * @type {"light" | "dark"}
         * @memberof CodeSnippet
         */
        this.theme = "dark";
        /**
         * Text displayed in the tooltip when user clicks button to copy code.
         *
         * @memberof CodeSnippet
         */
        this.feedbackText = this.translations.COPIED;
        /**
         * Time in miliseconds to keep the feedback tooltip displayed.
         *
         * @memberof CodeSnippet
         */
        this.feedbackTimeout = 2000;
        this.expanded = false;
        this.snippetClass = true;
        this.showFeedback = false;
        CodeSnippet_1.codeSnippetCount++;
    }
    CodeSnippet_1 = CodeSnippet;
    Object.defineProperty(CodeSnippet.prototype, "snippetSingleClass", {
        get: function () {
            return this.display === SnippetType.single;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CodeSnippet.prototype, "snippetMultiClass", {
        get: function () {
            return this.display === SnippetType.multi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CodeSnippet.prototype, "snippetInlineClass", {
        get: function () {
            return this.display === SnippetType.inline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CodeSnippet.prototype, "snippetInlineLightClass", {
        get: function () {
            return this.display === SnippetType.inline && this.theme === "light";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CodeSnippet.prototype, "btnCopyClass", {
        get: function () {
            return this.display === SnippetType.inline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CodeSnippet.prototype, "displayStyle", {
        get: function () {
            return this.display !== SnippetType.inline ? "block" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CodeSnippet.prototype, "attrType", {
        get: function () {
            return this.display === SnippetType.inline ? "button" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CodeSnippet.prototype, "shouldShowExpandButton", {
        get: function () {
            return this.code ? this.code.nativeElement.getBoundingClientRect().height > 255 : false;
        },
        enumerable: true,
        configurable: true
    });
    CodeSnippet.prototype.toggleSnippetExpansion = function () {
        this.expanded = !this.expanded;
    };
    /**
     * Copies the code from the `<code>` block to clipboard.
     *
     * @memberof CodeSnippet
     */
    CodeSnippet.prototype.copyCode = function () {
        // create invisible, uneditable textarea with our code in it
        var textarea = document.createElement("textarea");
        textarea.value = this.code.nativeElement.innerText || this.code.nativeElement.textContent;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.right = "-99999px";
        document.body.appendChild(textarea);
        // save user selection
        var selected = document.getSelection().rangeCount ? document.getSelection().getRangeAt(0) : null;
        // copy to clipboard
        textarea.select();
        document.execCommand("copy");
        // remove textarea
        document.body.removeChild(textarea);
        // restore user selection
        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
    };
    CodeSnippet.prototype.onCopyButtonClicked = function () {
        var _this = this;
        this.copyCode();
        this.showFeedback = true;
        setTimeout(function () {
            _this.showFeedback = false;
        }, this.feedbackTimeout);
    };
    /**
     * Inline code snippet acts as button and makes the whole component clickable.
     *
     * This handles clicks in that case.
     *
     * @returns
     * @memberof CodeSnippet
     */
    CodeSnippet.prototype.hostClick = function () {
        if (this.display !== SnippetType.inline) {
            return;
        }
        this.onCopyButtonClicked();
    };
    var CodeSnippet_1, _a;
    /**
     * Variable used for creating unique ids for code-snippet components.
     * @type {number}
     * @static
     * @memberof CodeSnippet
     */
    CodeSnippet.codeSnippetCount = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CodeSnippet.prototype, "display", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodeSnippet.prototype, "translations", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CodeSnippet.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodeSnippet.prototype, "feedbackText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodeSnippet.prototype, "feedbackTimeout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--snippet--expand"), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodeSnippet.prototype, "expanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--snippet"),
        __metadata("design:type", Object)
    ], CodeSnippet.prototype, "snippetClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--snippet--single"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], CodeSnippet.prototype, "snippetSingleClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--snippet--multi"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], CodeSnippet.prototype, "snippetMultiClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--snippet--inline"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], CodeSnippet.prototype, "snippetInlineClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--snippet--light"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], CodeSnippet.prototype, "snippetInlineLightClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--btn--copy"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], CodeSnippet.prototype, "btnCopyClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("style.display"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], CodeSnippet.prototype, "displayStyle", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.type"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], CodeSnippet.prototype, "attrType", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("code"),
        __metadata("design:type", Object)
    ], CodeSnippet.prototype, "code", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("click"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CodeSnippet.prototype, "hostClick", null);
    CodeSnippet = CodeSnippet_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-code-snippet",
            template: "\n\t\t<ng-container *ngIf=\"display === 'inline'; else notInline\">\n\t\t\t<ng-container *ngTemplateOutlet=\"codeTemplate\"></ng-container>\n\t\t\t<ng-container *ngTemplateOutlet=\"feedbackTemplate\"></ng-container>\n\t\t</ng-container>\n\n\t\t<ng-template #notInline>\n\t\t\t<div class=\"bx--snippet-container\" [attr.aria-label]=\"translations.CODE_SNIPPET_TEXT\">\n\t\t\t\t<pre><ng-container *ngTemplateOutlet=\"codeTemplate\"></ng-container></pre>\n\t\t\t</div>\n\t\t\t<button\n\t\t\t\tclass=\"bx--snippet-button\"\n\t\t\t\t[attr.aria-label]=\"translations.COPY_CODE\"\n\t\t\t\t(click)=\"onCopyButtonClicked()\"\n\t\t\t\ttabindex=\"0\">\n\t\t\t\t<svg class=\"bx--snippet__icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n\t\t\t\t\t<path d=\"M1 10H0V2C0 .9.9 0 2 0h8v1H2c-.6 0-1 .5-1 1v8z\" />\n\t\t\t\t\t<path d=\"M11 4.2V8h3.8L11 4.2zM15 9h-4c-.6 0-1-.4-1-1V4H4.5c-.3 0-.5.2-.5.5v10c0 .3.2.5.5.5h10c.3 0\n\t\t\t\t\t\t.5-.2.5-.5V9zm-4-6c.1 0 .3.1.4.1l4.5 4.5c0 .1.1.3.1.4v6.5c0 .8-.7 1.5-1.5 1.5h-10c-.8\n\t\t\t\t\t\t0-1.5-.7-1.5-1.5v-10C3 3.7 3.7 3 4.5 3H11z\"/>\n\t\t\t\t</svg>\n\t\t\t\t<ng-container *ngTemplateOutlet=\"feedbackTemplate\"></ng-container>\n\t\t\t</button>\n\t\t\t<button\n\t\t\t\t*ngIf=\"display === 'multi' && shouldShowExpandButton\"\n\t\t\t\tclass=\"bx--btn bx--btn--ghost bx--btn--sm bx--snippet-btn--expand\"\n\t\t\t\t(click)=\"toggleSnippetExpansion()\"\n\t\t\t\ttype=\"button\">\n\t\t\t\t<span class=\"bx--snippet-btn--text\">{{expanded ? translations.SHOW_LESS : translations.SHOW_MORE}}</span>\n\t\t\t\t<svg\n\t\t\t\t\tclass=\"bx--icon-chevron--down\"\n\t\t\t\t\twidth=\"12\" height=\"7\"\n\t\t\t\t\tviewBox=\"0 0 12 7\"\n\t\t\t\t\t[attr.aria-label]=\"translations.SHOW_MORE_ICON\">\n\t\t\t\t\t<title>{{translations.SHOW_MORE_ICON}}</title>\n\t\t\t\t\t<path fill-rule=\"nonzero\" d=\"M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z\" />\n\t\t\t\t</svg>\n\t\t\t</button>\n\t\t</ng-template>\n\n\t\t<ng-template #codeTemplate>\n\t\t\t<code #code><ng-content></ng-content></code>\n\t\t</ng-template>\n\n\t\t<ng-template #feedbackTemplate>\n\t\t\t<div\n\t\t\tclass=\"bx--btn--copy__feedback\"\n\t\t\t[ngClass]=\"{\n\t\t\t\t'bx--btn--copy__feedback--displayed': showFeedback\n\t\t\t}\"\n\t\t\t[attr.data-feedback]=\"feedbackText\">\n\t\t\t</div>\n\t\t</ng-template>\n\t"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__["I18n"] !== "undefined" && _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__["I18n"]) === "function" && _a || Object])
    ], CodeSnippet);
    return CodeSnippet;
}());



/***/ }),

/***/ "./src/code-snippet/code-snippet.module.ts":
/*!*************************************************!*\
  !*** ./src/code-snippet/code-snippet.module.ts ***!
  \*************************************************/
/*! exports provided: CodeSnippet, CodeSnippetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSnippetModule", function() { return CodeSnippetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
/* harmony import */ var _code_snippet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code-snippet.component */ "./src/code-snippet/code-snippet.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeSnippet", function() { return _code_snippet_component__WEBPACK_IMPORTED_MODULE_4__["CodeSnippet"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// modules




// imports

// exports

var CodeSnippetModule = /** @class */ (function () {
    function CodeSnippetModule() {
    }
    CodeSnippetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _code_snippet_component__WEBPACK_IMPORTED_MODULE_4__["CodeSnippet"]
            ],
            exports: [
                _code_snippet_component__WEBPACK_IMPORTED_MODULE_4__["CodeSnippet"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__["I18nModule"]
            ]
        })
    ], CodeSnippetModule);
    return CodeSnippetModule;
}());



/***/ }),

/***/ "./src/code-snippet/code-snippet.stories.ts":
/*!**************************************************!*\
  !*** ./src/code-snippet/code-snippet.stories.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./src/index.ts");



var code = "import { storiesOf, moduleMetadata } from \"@storybook/angular\";\nimport { withKnobs, boolean } from \"@storybook/addon-knobs/angular\";\n\nimport { CodeSnippetModule } from \"..\";\n\nstoriesOf(\"CodeSnippet\", module).addDecorator(\n\tmoduleMetadata({\n\t\timports: [CodeSnippetModule]\n\t})\n)\n\t.addDecorator(withKnobs)\n\t.add(\"Basic\", () => ({\n\t\ttemplate: `<ibm-code-snippet>code</ibm-code-snippet>`,\n\t\tprops: { // there's more\n\t\t\t// disabled: boolean(\"disabled\", false)\n\t\t}\n\t}));";
var lessCode = "import { storiesOf, moduleMetadata } from \"@storybook/angular\";\nimport { withKnobs, boolean } from \"@storybook/addon-knobs/angular\";\n\nimport { CodeSnippetModule } from \"..\";\n\nstoriesOf(\"Code Snippet\", module).addDecorator(\n\tmoduleMetadata({\n\t\timports: [CodeSnippetModule]\n\t})\n) // that's it, no more after this line\n";
var inlineCode = "<inline code>";
Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("CodeSnippet", module).addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [___WEBPACK_IMPORTED_MODULE_2__["CodeSnippetModule"]]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["withKnobs"])
    .add("Basic", function () { return ({
    template: "<ibm-code-snippet display=\"single\">{{code}}</ibm-code-snippet>",
    props: {
        code: code
    }
}); })
    .add("Multi", function () { return ({
    template: "\n\t\t\t<h2>With a lot of code</h2>\n\t\t\t<ibm-code-snippet display=\"multi\">{{code}}</ibm-code-snippet>\n\n\t\t\t<h2 style=\"margin-top: 60px\">With less code</h2>\n\t\t\t<ibm-code-snippet display=\"multi\">{{lessCode}}</ibm-code-snippet>\n\t\t",
    props: {
        code: code,
        lessCode: lessCode
    }
}); })
    .add("Inline", function () { return ({
    template: "Here is some <ibm-code-snippet display=\"inline\">{{inlineCode}}</ibm-code-snippet> for you.",
    props: {
        inlineCode: inlineCode
    }
}); })
    .add("Inline Light", function () { return ({
    template: "Here is some <ibm-code-snippet display=\"inline\" theme=\"light\">{{inlineCode}}</ibm-code-snippet> for you.",
    props: {
        inlineCode: inlineCode
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/combobox/combobox.component.ts":
/*!********************************************!*\
  !*** ./src/combobox/combobox.component.ts ***!
  \********************************************/
/*! exports provided: ComboBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBox", function() { return ComboBox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_abstract_dropdown_view_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dropdown/abstract-dropdown-view.class */ "./src/dropdown/abstract-dropdown-view.class.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * ComboBoxes are similar to dropdowns, except a combobox provides an input field for users to search items and (optionally) add their own.
 * Multi-select comboboxes also provide "pills" of selected items.
 *
 * @export
 * @class ComboBox
 * @implements {OnChanges}
 * @implements {AfterViewInit}
 * @implements {AfterContentInit}
 */
var ComboBox = /** @class */ (function () {
    /**
     * Creates an instance of ComboBox.
     * @param {ElementRef} elementRef
     * @memberof ComboBox
     */
    function ComboBox(elementRef) {
        this.elementRef = elementRef;
        /**
         * List of items to fill the content with.
         *
         * **Example:**
         * ```javascript
         * items = [
         *		{
         *			content: "Abacus",
         *			selected: false
         *		},
         *		{
         *			content: "Byte",
         *			selected: false,
         *		},
         *		{
         *			content: "Computer",
         *			selected: false
         *		},
         *		{
         *			content: "Digital",
         *			selected: false
         *		}
         * ];
         * ```
         *
         * @type {Array<ListItem>}
         * @memberof ComboBox
         */
        this.items = [];
        /**
         * Text to show when nothing is selected.
         */
        this.placeholder = "Filter...";
        /**
         * Combo box type (supporting single or multi selection of items).
         */
        this.type = "single";
        /**
         * Combo box render size.
         */
        this.size = "md";
        /**
         * Set to `true` to disable combobox.
         */
        this.disabled = false;
        /**
         * Emits a ListItem
         *
         * Example:
         * ```javascript
         * {
         * 		content: "one",
         * 		selected: true
         * }
         * ```
         */
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Bubbles from `n-pill-input` when the user types a value and presses enter. Intended to be used to add items to the list.
         *
         * Emits an event that includes the current item list, the suggested index for the new item, and a simple ListItem
         *
         * Example:
         * ```javascript
         *	{
         *		items: [{content: "one", selected: true}, {content: "two", selected: true}],
         *		index: 1,
         *		value: {
         *			content: "some user string",
         *			selected: false
         *		}
         *	}
         * ```
         *
         * @param ev event from `n-pill-input`, includes the typed value and the index of the pill the user typed after
         *
         * Example:
         * ```javascript
         * {
         *	after: 1,
         *	value: "some user string"
         * }
         * ```
         */
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** emits an empty event when the menu is closed */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.class = "bx--combo-box bx--list-box";
        this.role = "combobox";
        this.display = "block";
        this.open = false;
        /** Selected items for multi-select combo-boxes. */
        this.pills = [];
        /** used to update the displayValue of `n-pill-input` */
        this.selectedValue = "";
        this.noop = this._noop.bind(this);
        this.onTouchedCallback = this._noop;
        this.propagateChangeCallback = this._noop;
    }
    ComboBox_1 = ComboBox;
    /**
     * Lifecycle hook.
     * Updates pills if necessary.
     *
     * @param {any} changes
     * @memberof ComboBox
     */
    ComboBox.prototype.ngOnChanges = function (changes) {
        if (changes.items) {
            this.view["updateList"](changes.items.currentValue);
            this.updateSelected();
        }
    };
    ComboBox.prototype.ngOnInit = function () {
        if (this.type === "multi") {
            this.class = "bx--multi-select bx--combo-box bx--list-box";
        }
    };
    /**
     * Sets initial state that depends on child components
     * Subscribes to select events and handles focus/filtering/initial list updates
     */
    ComboBox.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.view) {
            this.view.type = this.type;
            this.view.select.subscribe(function (event) {
                if (_this.type === "multi") {
                    _this.updatePills();
                    _this.propagateChangeCallback(_this.view.getSelected());
                }
                else {
                    if (event.item && event.item.selected) {
                        _this.selectedValue = event.item.content;
                        _this.propagateChangeCallback(event.item);
                    }
                    else {
                        _this.selectedValue = "";
                        _this.propagateChangeCallback(null);
                    }
                    // not gaurding these since the nativeElement has to be loaded
                    // for select to even fire
                    _this.elementRef.nativeElement.querySelector("input").focus();
                    _this.closeDropdown();
                }
                _this.selected.emit(event);
                _this.view["filterBy"]("");
            });
            this.view["updateList"](this.items);
            // update the rest of combobox with any pre-selected items
            // setTimeout just defers the call to the next check cycle
            setTimeout(function () {
                _this.updateSelected();
            });
        }
    };
    /**
     * Binds event handlers against the rendered view
     */
    ComboBox.prototype.ngAfterViewInit = function () {
        var _this = this;
        document.addEventListener("click", function (ev) {
            if (!_this.elementRef.nativeElement.contains(ev.target)) {
                if (_this.open) {
                    _this.closeDropdown();
                }
            }
        });
    };
    /**
     * Handles `Escape` key closing the dropdown, and arrow up/down focus to/from the dropdown list.
     * @param {KeyboardEvent} ev
     */
    ComboBox.prototype.hostkeys = function (ev) {
        var _this = this;
        if (ev.key === "Escape") {
            this.closeDropdown();
        }
        else if (ev.key === "ArrowDown" && !this.dropdownMenu.nativeElement.contains(ev.target)) {
            ev.stopPropagation();
            this.openDropdown();
            setTimeout(function () { return _this.view.getCurrentElement().focus(); }, 0);
        }
        else if (ev.key === "ArrowUp" && this.dropdownMenu.nativeElement.contains(ev.target) && !this.view["hasPrevElement"]()) {
            this.elementRef.nativeElement.querySelector(".combobox_input").focus();
        }
    };
    /*
     * no-op method for null event listeners, and other no op calls
     */
    ComboBox.prototype._noop = function () { };
    /*
     * propagates the value provided from ngModel
     */
    ComboBox.prototype.writeValue = function (value) {
        if (value) {
            if (this.type === "single") {
                this.view.propagateSelected([value]);
            }
            else {
                this.view.propagateSelected(value);
            }
        }
    };
    ComboBox.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    ComboBox.prototype.registerOnChange = function (fn) {
        this.propagateChangeCallback = fn;
    };
    ComboBox.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * Called by `n-pill-input` when the selected pills have changed.
     */
    ComboBox.prototype.updatePills = function () {
        this.pills = this.view.getSelected() || [];
        this.propagateChangeCallback(this.view.getSelected());
    };
    ComboBox.prototype.clearSelected = function () {
        this.items = this.items.map(function (item) {
            if (!item.disabled) {
                item.selected = false;
            }
            return item;
        });
        this.view["updateList"](this.items);
        this.updatePills();
        // clearSelected can only fire on type=multi
        // so we just emit getSelected() (just in case there's any disabled but selected items)
        this.selected.emit(this.view.getSelected());
    };
    /**
     * Closes the dropdown and emits the close event.
     * @memberof ComboBox
     */
    ComboBox.prototype.closeDropdown = function () {
        this.open = false;
        this.close.emit();
    };
    /**
     * Opens the dropdown.
     * @memberof ComboBox
     */
    ComboBox.prototype.openDropdown = function () {
        this.open = true;
    };
    /**
     * Toggles the dropdown.
     * @memberof ComboBox
     */
    ComboBox.prototype.toggleDropdown = function () {
        if (this.open) {
            this.closeDropdown();
        }
        else {
            this.openDropdown();
        }
    };
    /**
     * Sets the list group filter, and manages single select item selection.
     * @param {string} searchString
     */
    ComboBox.prototype.onSearch = function (searchString) {
        this.view["filterBy"](searchString);
        if (searchString !== "") {
            this.openDropdown();
        }
        else {
            this.selectedValue = "";
        }
        if (this.type === "single") {
            // deselect if the input doesn't match the content
            // of any given item
            var matches = this.view.items.some(function (item) { return item.content.toLowerCase().includes(searchString.toLowerCase()); });
            if (!matches) {
                var selected = this.view.getSelected();
                if (selected) {
                    selected[0].selected = false;
                    // notify that the selection has changed
                    this.view.select.emit({ item: selected[0] });
                    this.propagateChangeCallback(null);
                }
                else {
                    this.view["filterBy"]("");
                }
            }
        }
    };
    /**
     * Bubbles from `n-pill-input` when the user types a value and presses enter. Intended to be used to add items to the list.
     *
     * @param {any} ev event from `n-pill-input`, includes the typed value and the index of the pill the user typed after
     *
     * Example:
     * ```javascript
     *	{
     *	after: 1,
     *	value: "some user string"
     *	}
     * ```
     */
    ComboBox.prototype.onSubmit = function (ev) {
        var index = 0;
        if (ev.after) {
            index = this.view.items.indexOf(ev.after) + 1;
        }
        this.submit.emit({
            items: this.view.items,
            index: index,
            value: {
                content: ev.value,
                selected: false
            }
        });
    };
    ComboBox.prototype.updateSelected = function () {
        var selected = this.view.getSelected();
        if (selected) {
            if (this.type === "multi") {
                this.updatePills();
            }
            else {
                this.selectedValue = selected[0].content;
                this.propagateChangeCallback(selected[0]);
            }
        }
    };
    var ComboBox_1, _a, _b, _c, _d, _e, _f, _g;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" && _a || Object)
    ], ComboBox.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboBox.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComboBox.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComboBox.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.aria-disabled"), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboBox.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) === "function" && _b || Object)
    ], ComboBox.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) === "function" && _c || Object)
    ], ComboBox.prototype, "submit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", typeof (_d = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) === "function" && _d || Object)
    ], ComboBox.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_dropdown_abstract_dropdown_view_class__WEBPACK_IMPORTED_MODULE_1__["AbstractDropdownView"]),
        __metadata("design:type", typeof (_e = typeof _dropdown_abstract_dropdown_view_class__WEBPACK_IMPORTED_MODULE_1__["AbstractDropdownView"] !== "undefined" && _dropdown_abstract_dropdown_view_class__WEBPACK_IMPORTED_MODULE_1__["AbstractDropdownView"]) === "function" && _e || Object)
    ], ComboBox.prototype, "view", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("dropdownMenu"),
        __metadata("design:type", Object)
    ], ComboBox.prototype, "dropdownMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class"),
        __metadata("design:type", Object)
    ], ComboBox.prototype, "class", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.role"),
        __metadata("design:type", Object)
    ], ComboBox.prototype, "role", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("style.display"),
        __metadata("design:type", Object)
    ], ComboBox.prototype, "display", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_f = typeof KeyboardEvent !== "undefined" && KeyboardEvent) === "function" && _f || Object]),
        __metadata("design:returntype", void 0)
    ], ComboBox.prototype, "hostkeys", null);
    ComboBox = ComboBox_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-combo-box",
            template: "\n\t\t<div\n\t\t\t[attr.aria-expanded]=\"open\"\n\t\t\trole=\"button\"\n\t\t\tclass=\"bx--list-box__field\"\n\t\t\ttabindex=\"0\"\n\t\t\ttype=\"button\"\n\t\t\taria-label=\"close menu\"\n\t\t\taria-haspopup=\"true\">\n\t\t\t<div\n\t\t\t\t*ngIf=\"type === 'multi' && pills.length > 0\"\n\t\t\t\t(click)=\"clearSelected()\"\n\t\t\t\trole=\"button\"\n\t\t\t\tclass=\"bx--list-box__selection bx--list-box__selection--multi\"\n\t\t\t\ttabindex=\"0\"\n\t\t\t\ttitle=\"Clear all selected items\">\n\t\t\t\t{{ pills.length }}\n\t\t\t\t<svg\n\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\theight=\"10\"\n\t\t\t\t\trole=\"img\"\n\t\t\t\t\tviewBox=\"0 0 10 10\"\n\t\t\t\t\twidth=\"10\"\n\t\t\t\t\tfocusable=\"false\"\n\t\t\t\t\taria-label=\"Clear all selected items\"\n\t\t\t\t\talt=\"Clear all selected items\">\n\t\t\t\t\t<title>Clear all selected items</title>\n\t\t\t\t\t<path d=\"M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z\"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t\t<input\n\t\t\t\t[disabled]=\"disabled\"\n\t\t\t\t(click)=\"toggleDropdown()\"\n\t\t\t\t(keyup)=\"onSearch($event.target.value)\"\n\t\t\t\t[value]=\"selectedValue\"\n\t\t\t\tclass=\"bx--text-input\"\n\t\t\t\taria-label=\"ListBox input field\"\n\t\t\t\tautocomplete=\"off\"\n\t\t\t\t[placeholder]=\"placeholder\"/>\n\t\t\t<div\n\t\t\t\t[ngClass]=\"{'bx--list-box__menu-icon--open': open}\"\n\t\t\t\tclass=\"bx--list-box__menu-icon\">\n\t\t\t\t<svg\n\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\theight=\"5\"\n\t\t\t\t\trole=\"img\"\n\t\t\t\t\tviewBox=\"0 0 10 5\"\n\t\t\t\t\twidth=\"10\"\n\t\t\t\t\talt=\"Close menu\"\n\t\t\t\t\taria-label=\"Close menu\">\n\t\t\t\t\t<title>Close menu</title>\n\t\t\t\t\t<path d=\"M0 0l5 4.998L10 0z\"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t</div>\n\t\t<div\n\t\t\t#dropdownMenu\n\t\t\t*ngIf=\"open\">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t",
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: ComboBox_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [typeof (_g = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _g || Object])
    ], ComboBox);
    return ComboBox;
}());



/***/ }),

/***/ "./src/combobox/combobox.module.ts":
/*!*****************************************!*\
  !*** ./src/combobox/combobox.module.ts ***!
  \*****************************************/
/*! exports provided: ComboBox, ComboBoxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxModule", function() { return ComboBoxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icon_static_icon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../icon/static-icon.module */ "./src/icon/static-icon.module.ts");
/* harmony import */ var _pill_input_pill_input_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../pill-input/pill-input.module */ "./src/pill-input/pill-input.module.ts");
/* harmony import */ var _combobox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./combobox.component */ "./src/combobox/combobox.component.ts");
/* harmony import */ var _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dropdown/dropdown.module */ "./src/dropdown/dropdown.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComboBox", function() { return _combobox_component__WEBPACK_IMPORTED_MODULE_4__["ComboBox"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComboBoxModule = /** @class */ (function () {
    function ComboBoxModule() {
    }
    ComboBoxModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _combobox_component__WEBPACK_IMPORTED_MODULE_4__["ComboBox"]
            ],
            exports: [
                _combobox_component__WEBPACK_IMPORTED_MODULE_4__["ComboBox"],
                _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pill_input_pill_input_module__WEBPACK_IMPORTED_MODULE_3__["PillInputModule"],
                _icon_static_icon_module__WEBPACK_IMPORTED_MODULE_2__["StaticIconModule"],
                _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"]
            ]
        })
    ], ComboBoxModule);
    return ComboBoxModule;
}());



/***/ }),

/***/ "./src/combobox/combobox.stories.ts":
/*!******************************************!*\
  !*** ./src/combobox/combobox.stories.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-actions */ "./node_modules/@storybook/addon-actions/dist/index.js");
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./src/index.ts");




Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Combobox", module)
    .addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [
        ___WEBPACK_IMPORTED_MODULE_3__["ComboBoxModule"]
    ]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t\t<ibm-combo-box [items]=\"items\" (selected)=\"selected($event)\">\n\t\t\t\t<ibm-dropdown-list></ibm-dropdown-list>\n\t\t\t</ibm-combo-box>\n\t\t",
    props: {
        items: [
            {
                content: "one"
            },
            {
                content: "two"
            },
            {
                content: "three"
            },
            {
                content: "four"
            }
        ],
        selected: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__["action"])("selection changed")
    }
}); })
    .add("Multi-select", function () { return ({
    template: "\n\t\t\t<ibm-combo-box [items]=\"items\" type=\"multi\" (selected)=\"selected($event)\">\n\t\t\t\t<ibm-dropdown-list></ibm-dropdown-list>\n\t\t\t</ibm-combo-box>\n\t\t",
    props: {
        items: [
            {
                content: "one"
            },
            {
                content: "two"
            },
            {
                content: "three"
            },
            {
                content: "four"
            }
        ],
        selected: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__["action"])("selection changed")
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/common/tab.service.ts":
/*!***********************************!*\
  !*** ./src/common/tab.service.ts ***!
  \***********************************/
/*! exports provided: tabbableSelector, getFocusElementList, isFocusInFirstItem, isFocusInLastItem, isElementFocused, focusFirstFocusableElement, focusLastFocusableElement, isVisible, cycleTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabbableSelector", function() { return tabbableSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusElementList", function() { return getFocusElementList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFocusInFirstItem", function() { return isFocusInFirstItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFocusInLastItem", function() { return isFocusInLastItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementFocused", function() { return isElementFocused; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusFirstFocusableElement", function() { return focusFirstFocusableElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusLastFocusableElement", function() { return focusLastFocusableElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cycleTabs", function() { return cycleTabs; });
var tabbableSelector = "a[href], area[href], input:not([disabled]):not([tabindex=\'-1\']), " +
    "button:not([disabled]):not([tabindex=\'-1\']),select:not([disabled]):not([tabindex=\'-1\']), " +
    "textarea:not([disabled]):not([tabindex=\'-1\']), " +
    "iframe, object, embed, *[tabindex]:not([tabindex=\'-1\']), *[contenteditable=true]";
function getFocusElementList(element) {
    var elements = element.querySelectorAll(tabbableSelector);
    return elements ? Array.prototype.filter.call(elements, function (el) { return isVisible(el); }) : elements;
}
function isFocusInFirstItem(event, list) {
    if (list.length > 0) {
        return (event.target || event.srcElement) === list[0];
    }
    return false;
}
function isFocusInLastItem(event, list) {
    if (list.length > 0) {
        return (event.target || event.srcElement) === list[list.length - 1];
    }
    return false;
}
function isElementFocused(event, element) {
    return (event.target || event.srcElement) === element;
}
function focusFirstFocusableElement(list) {
    if (list.length > 0) {
        list[0].focus();
        return true;
    }
    return false;
}
function focusLastFocusableElement(list) {
    if (list.length > 0) {
        list[list.length - 1].focus();
        return true;
    }
    return false;
}
function isVisible(element) {
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
}
function cycleTabs(event, element) {
    if (event.key === "Tab") {
        var list = getFocusElementList(element);
        var focusChanged = false;
        if (event.shiftKey) {
            if (isFocusInFirstItem(event, list) || isElementFocused(event, element)) {
                focusChanged = focusLastFocusableElement(list);
            }
        }
        else {
            if (isFocusInLastItem(event, list)) {
                focusChanged = focusFirstFocusableElement(list);
            }
        }
        if (focusChanged) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
}


/***/ }),

/***/ "./src/common/utils.ts":
/*!*****************************!*\
  !*** ./src/common/utils.ts ***!
  \*****************************/
/*! exports provided: range, getScrollbarWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony import */ var _utils_window_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/window-tools */ "./src/utils/window-tools.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return _utils_window_tools__WEBPACK_IMPORTED_MODULE_0__["getScrollbarWidth"]; });


/**
 * Does what python's `range` function does, with a slightly different
 * signature because of Typescript limitations.
 *
 * Useful for numbered loops in angular templates, since we can do
 * a normal for loop.
 *
 * @export
 * @param {number} stop Generate numbers up to, but not including this number
 * @param {number} [start=0] Starting number of the sequence
 * @param {number} [step=1] Difference between each number in the sequence
 * @returns and array with resulting numbers
 */
function range(stop, start, step) {
    if (start === void 0) { start = 0; }
    if (step === void 0) { step = 1; }
    return Array(Math.ceil((stop - start) / step)).fill(0).map(function (x, i) { return i * step + start; });
}


/***/ }),

/***/ "./src/content-switcher/content-switcher-option.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/content-switcher/content-switcher-option.directive.ts ***!
  \*******************************************************************/
/*! exports provided: ContentSwitcherOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSwitcherOption", function() { return ContentSwitcherOption; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentSwitcherOption = /** @class */ (function () {
    function ContentSwitcherOption() {
        this.name = "option";
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.switcherClass = "bx--content-switcher-btn";
        this.selectedClass = false;
        this.role = "tab";
        this.ariaSelected = false;
        this.tabindex = "-1";
        this._active = false;
    }
    Object.defineProperty(ContentSwitcherOption.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (value) {
            this._active = value;
            this.selectedClass = value;
            this.ariaSelected = value;
            this.tabindex = value ? "0" : "-1";
        },
        enumerable: true,
        configurable: true
    });
    ContentSwitcherOption.prototype.hostClick = function () {
        this.active = true;
        this.selected.emit(true);
    };
    ContentSwitcherOption.prototype.onFocus = function () {
        this.active = true;
    };
    ContentSwitcherOption.prototype.onBlur = function (event) {
        if (event.relatedTarget) {
            this.active = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ContentSwitcherOption.prototype, "active", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContentSwitcherOption.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContentSwitcherOption.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class"),
        __metadata("design:type", Object)
    ], ContentSwitcherOption.prototype, "switcherClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--content-switcher--selected"),
        __metadata("design:type", Object)
    ], ContentSwitcherOption.prototype, "selectedClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.role"),
        __metadata("design:type", Object)
    ], ContentSwitcherOption.prototype, "role", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.aria-selected"),
        __metadata("design:type", Object)
    ], ContentSwitcherOption.prototype, "ariaSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.tabIndex"),
        __metadata("design:type", Object)
    ], ContentSwitcherOption.prototype, "tabindex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("click"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ContentSwitcherOption.prototype, "hostClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("focus"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ContentSwitcherOption.prototype, "onFocus", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("blur", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ContentSwitcherOption.prototype, "onBlur", null);
    ContentSwitcherOption = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[ibmContentOption]"
        })
    ], ContentSwitcherOption);
    return ContentSwitcherOption;
}());



/***/ }),

/***/ "./src/content-switcher/content-switcher.component.ts":
/*!************************************************************!*\
  !*** ./src/content-switcher/content-switcher.component.ts ***!
  \************************************************************/
/*! exports provided: ContentSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSwitcher", function() { return ContentSwitcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _content_switcher_option_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-switcher-option.directive */ "./src/content-switcher/content-switcher-option.directive.ts");
/* harmony import */ var _common_tab_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../common/tab.service */ "./src/common/tab.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 *
 *
 */
var ContentSwitcher = /** @class */ (function () {
    function ContentSwitcher(elementRef) {
        this.elementRef = elementRef;
        this.label = "content switcher";
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ContentSwitcher.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.options.first.active = true;
        this.options.forEach(function (option) {
            option.selected.subscribe(function (_) {
                var active = option;
                _this.options.forEach(function (option) {
                    if (option !== active) {
                        option.active = false;
                    }
                });
                _this.selected.emit(active);
            });
        });
    };
    ContentSwitcher.prototype.hostkeys = function (event) {
        var buttonList = Array.from(this.elementRef.nativeElement.querySelectorAll(".bx--content-switcher-btn"));
        switch (event.key) {
            case "Right": // IE specific value
            case "ArrowRight":
                event.preventDefault();
                if (!Object(_common_tab_service__WEBPACK_IMPORTED_MODULE_2__["isFocusInLastItem"])(event, buttonList)) {
                    var index = buttonList.findIndex(function (item) { return item === event.target; });
                    buttonList[index + 1].focus();
                }
                else {
                    buttonList[0].focus();
                }
                break;
            case "Left": // IE specific value
            case "ArrowLeft":
                event.preventDefault();
                if (!Object(_common_tab_service__WEBPACK_IMPORTED_MODULE_2__["isFocusInFirstItem"])(event, buttonList)) {
                    var index = buttonList.findIndex(function (item) { return item === event.target; });
                    buttonList[index - 1].focus();
                }
                else {
                    buttonList[buttonList.length - 1].focus();
                }
                break;
            case "Home":
                event.preventDefault();
                buttonList[0].focus();
                break;
            case "End":
                event.preventDefault();
                buttonList[buttonList.length - 1].focus();
                break;
        }
    };
    var _a, _b, _c;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContentSwitcher.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContentSwitcher.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_content_switcher_option_directive__WEBPACK_IMPORTED_MODULE_1__["ContentSwitcherOption"]),
        __metadata("design:type", typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]) === "function" && _a || Object)
    ], ContentSwitcher.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_b = typeof KeyboardEvent !== "undefined" && KeyboardEvent) === "function" && _b || Object]),
        __metadata("design:returntype", void 0)
    ], ContentSwitcher.prototype, "hostkeys", null);
    ContentSwitcher = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-content-switcher",
            template: "\n\t\t<div\n\t\t\t[attr.aria-label]=\"label\"\n\t\t\tclass=\"bx--content-switcher\"\n\t\t\trole=\"tablist\">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _c || Object])
    ], ContentSwitcher);
    return ContentSwitcher;
}());



/***/ }),

/***/ "./src/content-switcher/content-switcher.module.ts":
/*!*********************************************************!*\
  !*** ./src/content-switcher/content-switcher.module.ts ***!
  \*********************************************************/
/*! exports provided: ContentSwitcher, ContentSwitcherOption, ContentSwitcherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSwitcherModule", function() { return ContentSwitcherModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _content_switcher_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-switcher.component */ "./src/content-switcher/content-switcher.component.ts");
/* harmony import */ var _content_switcher_option_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-switcher-option.directive */ "./src/content-switcher/content-switcher-option.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentSwitcher", function() { return _content_switcher_component__WEBPACK_IMPORTED_MODULE_2__["ContentSwitcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentSwitcherOption", function() { return _content_switcher_option_directive__WEBPACK_IMPORTED_MODULE_3__["ContentSwitcherOption"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ContentSwitcherModule = /** @class */ (function () {
    function ContentSwitcherModule() {
    }
    ContentSwitcherModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _content_switcher_component__WEBPACK_IMPORTED_MODULE_2__["ContentSwitcher"],
                _content_switcher_option_directive__WEBPACK_IMPORTED_MODULE_3__["ContentSwitcherOption"]
            ],
            exports: [
                _content_switcher_component__WEBPACK_IMPORTED_MODULE_2__["ContentSwitcher"],
                _content_switcher_option_directive__WEBPACK_IMPORTED_MODULE_3__["ContentSwitcherOption"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        })
    ], ContentSwitcherModule);
    return ContentSwitcherModule;
}());



/***/ }),

/***/ "./src/content-switcher/content-switcher.stories.ts":
/*!**********************************************************!*\
  !*** ./src/content-switcher/content-switcher.stories.ts ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-actions */ "./node_modules/@storybook/addon-actions/dist/index.js");
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./src/index.ts");




Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Content Switcher", module)
    .addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [
        ___WEBPACK_IMPORTED_MODULE_3__["ContentSwitcherModule"]
    ]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t\t<ibm-content-switcher (selected)=\"selected($event)\">\n\t\t\t\t<button ibmContentOption>First section</button>\n\t\t\t\t<button ibmContentOption>Second section</button>\n\t\t\t\t<button ibmContentOption>Third section</button>\n\t\t\t</ibm-content-switcher>\n\t\t",
    props: {
        selected: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__["action"])("selection changed")
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/dialog/dialog-config.interface.ts":
/*!***********************************************!*\
  !*** ./src/dialog/dialog-config.interface.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/dialog/dialog-placeholder.component.ts":
/*!****************************************************!*\
  !*** ./src/dialog/dialog-placeholder.component.ts ***!
  \****************************************************/
/*! exports provided: DialogPlaceholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPlaceholder", function() { return DialogPlaceholder; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../placeholder/placeholder.module */ "./src/placeholder/placeholder.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Deprecated as of v2.0, will be removed with v3.0
 * Using a dialog (popover, tooltip, etc) with appendToBody="true" in your application
 * requires *this* component (`n-dialog-placeholder`).
 * It would generally be placed near the end of your app component template
 * (app.component.ts or app.component.html) as:
 *
 * ```html
 * ...
 * <ibm-dialog-placeholder></ibm-dialog-placeholder>
 * ```
 *
 * A more complete example for `Popover` is given as follows:
 *
 * ```html
 * <button [ibmPopover]="Hello" appendToBody="true"></button>
 * ...
 * <ibm-dialog-placeholder></ibm-dialog-placeholder>
 * ```
 *
 * @deprecated
 */
var DialogPlaceholder = /** @class */ (function () {
    /**
     * Creates an instance of `DialogPlaceholder`.
     */
    function DialogPlaceholder(placeholderService) {
        this.placeholderService = placeholderService;
    }
    /**
     * Initializes the component using `PlaceholderService`.
     */
    DialogPlaceholder.prototype.ngOnInit = function () {
        console.warn("`ibm-dialog-placeholder` has been deprecated in favour of `ibm-placeholder`");
        this.placeholderService.registerViewContainerRef(this.viewContainerRef);
    };
    var _a, _b;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("dialogPlaceholder", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]) === "function" && _a || Object)
    ], DialogPlaceholder.prototype, "viewContainerRef", void 0);
    DialogPlaceholder = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-dialog-placeholder",
            template: "<div #dialogPlaceholder></div>"
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_1__["PlaceholderService"] !== "undefined" && _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_1__["PlaceholderService"]) === "function" && _b || Object])
    ], DialogPlaceholder);
    return DialogPlaceholder;
}());



/***/ }),

/***/ "./src/dialog/dialog.component.ts":
/*!****************************************!*\
  !*** ./src/dialog/dialog.component.ts ***!
  \****************************************/
/*! exports provided: Dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils_position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/position */ "./src/utils/position.ts");
/* harmony import */ var _common_tab_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../common/tab.service */ "./src/common/tab.service.ts");
/* harmony import */ var _dialog_config_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-config.interface */ "./src/dialog/dialog-config.interface.ts");
/* harmony import */ var _dialog_config_interface__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dialog_config_interface__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// the AbsolutePosition is required to import the declaration correctly



/**
 * Implements a `Dialog` that can be positioned anywhere on the page.
 * Used to implement a popover or tooltip.
 *
 * @export
 * @class Dialog
 * @implements {OnInit}
 * @implements {AfterViewInit}
 * @implements {OnDestroy}
 */
var Dialog = /** @class */ (function () {
    /**
     * Creates an instance of `Dialog`.
     * @param {ElementRef} elementRef
     * @memberof Dialog
     */
    function Dialog(elementRef) {
        var _this = this;
        this.elementRef = elementRef;
        /**
         * Emits event that handles the closing of a `Dialog` object.
         * @type {EventEmitter<any>}
         * @memberof Dialog
         */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Stores the data received from `dialogConfig`.
         * @memberof Dialog
         */
        this.data = {};
        /**
         * Subscription to all the scrollable parents `scroll` event
         */
        // add a new subscription temprarily so that contexts (such as tests)
        // that don't run ngAfterViewInit have something to unsubscribe in ngOnDestroy
        this.scrollSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        /**
         * Handles offsetting the `Dialog` item based on the defined position
         * to not obscure the content beneath.
         * @protected
         * @memberof Dialog
         */
        this.addGap = {
            "left": function (pos) { return _utils_position__WEBPACK_IMPORTED_MODULE_3__["default"].addOffset(pos, 0, -_this.dialogConfig.gap); },
            "right": function (pos) { return _utils_position__WEBPACK_IMPORTED_MODULE_3__["default"].addOffset(pos, 0, _this.dialogConfig.gap); },
            "top": function (pos) { return _utils_position__WEBPACK_IMPORTED_MODULE_3__["default"].addOffset(pos, -_this.dialogConfig.gap); },
            "bottom": function (pos) { return _utils_position__WEBPACK_IMPORTED_MODULE_3__["default"].addOffset(pos, _this.dialogConfig.gap); },
            "left-bottom": function (pos) { return _utils_position__WEBPACK_IMPORTED_MODULE_3__["default"].addOffset(pos, 0, -_this.dialogConfig.gap); },
            "right-bottom": function (pos) { return _utils_position__WEBPACK_IMPORTED_MODULE_3__["default"].addOffset(pos, 0, _this.dialogConfig.gap); }
        };
    }
    Dialog_1 = Dialog;
    /**
     * Initilize the `Dialog`, set the placement and gap, and add a `Subscription` to resize events.
     * @memberof Dialog
     */
    Dialog.prototype.ngOnInit = function () {
        var _this = this;
        this.placement = this.dialogConfig.placement.split(",")[0];
        this.data = this.dialogConfig.data;
        this.resizeSubscription = Dialog_1.resizeObservable.subscribe(function () {
            _this.placeDialog();
        });
        // run any additional initlization code that consuming classes may have
        this.onDialogInit();
    };
    /**
     * After the DOM is ready, focus is set and dialog is placed
     * in respect to the parent element.
     * @memberof Dialog
     */
    Dialog.prototype.ngAfterViewInit = function () {
        var _this = this;
        var dialogElement = this.dialog.nativeElement;
        // split the wrapper class list and apply separately to avoid IE from
        // 1. throwing an error due to assigning a readonly property (classList)
        // 2. throwing a SyntaxError due to passing an empty string to `add`
        if (this.dialogConfig.wrapperClass) {
            for (var _i = 0, _a = this.dialogConfig.wrapperClass.split(" "); _i < _a.length; _i++) {
                var extraClass = _a[_i];
                dialogElement.classList.add(extraClass);
            }
        }
        this.placeDialog();
        dialogElement.focus();
        var parentEl = this.dialogConfig.parentRef.nativeElement;
        var node = parentEl;
        var observables = [];
        // if the element has an overflow set as part of
        // its computed style it can scroll
        var isScrollableElement = function (element) {
            var computedStyle = getComputedStyle(element);
            return (computedStyle.overflow === "auto" ||
                computedStyle.overflow === "scroll" ||
                computedStyle["overflow-y"] === "auto" ||
                computedStyle["overflow-y"] === "scroll" ||
                computedStyle["overflow-x"] === "auto" ||
                computedStyle["overflow-x"] === "scroll");
        };
        var isVisibleInContainer = function (element, container) {
            var elementRect = element.getBoundingClientRect();
            var containerRect = container.getBoundingClientRect();
            return elementRect.bottom <= containerRect.bottom && elementRect.top >= containerRect.top;
        };
        var placeDialogInContainer = function () {
            // only do the work to find the scroll containers if we're appended to body
            // or skip this work if we're inline
            if (!_this.dialogConfig.appendInline) {
                // walk the parents and subscribe to all the scroll events we can
                while (node.parentElement && node !== document.body) {
                    if (isScrollableElement(node)) {
                        observables.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(node, "scroll"));
                    }
                    node = node.parentElement;
                }
                // subscribe to the observable, and update the position and visibility
                var scrollObservable = rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"].apply(void 0, observables);
                _this.scrollSubscription = scrollObservable.subscribe(function (event) {
                    _this.placeDialog();
                    if (!isVisibleInContainer(_this.dialogConfig.parentRef.nativeElement, event.target)) {
                        _this.doClose();
                    }
                });
            }
        };
        // settimeout to let the DOM settle before attempting to place the dialog
        setTimeout(placeDialogInContainer);
    };
    /**
     * Empty method to be overridden by consuming classes to run any additional initialization code.
     * @memberof Dialog
     */
    Dialog.prototype.onDialogInit = function () { };
    /**
     * Uses the position service to position the `Dialog` in screen space
     * @memberof Dialog
     */
    Dialog.prototype.placeDialog = function () {
        var _this = this;
        // helper to find the position based on the current/given environment
        var findPosition = function (reference, target, placement) {
            var pos;
            if (_this.dialogConfig.appendInline) {
                pos = _this.addGap[placement](_utils_position__WEBPACK_IMPORTED_MODULE_3__["default"].findRelative(reference, target, placement));
            }
            else {
                pos = _this.addGap[placement](_utils_position__WEBPACK_IMPORTED_MODULE_3__["default"].findAbsolute(reference, target, placement));
                pos = _utils_position__WEBPACK_IMPORTED_MODULE_3__["default"].addOffset(pos, window.scrollY, window.scrollX);
            }
            return pos;
        };
        var parentEl = this.dialogConfig.parentRef.nativeElement;
        var el = this.dialog.nativeElement;
        var dialogPlacement = this.placement;
        // split always retuns an array, so we can just use the auto position logic
        // for single positions too
        var placements = this.dialogConfig.placement.split(",");
        var weightedPlacements = placements.map(function (placement) {
            var pos = findPosition(parentEl, el, placement);
            var box = _utils_position__WEBPACK_IMPORTED_MODULE_3__["default"].getPlacementBox(el, pos);
            var hiddenHeight = box.bottom - window.innerHeight - window.scrollY;
            var hiddenWidth = box.right - window.innerWidth - window.scrollX;
            // if the hiddenHeight or hiddenWidth is negative, reset to offsetHeight or offsetWidth
            hiddenHeight = hiddenHeight < 0 ? el.offsetHeight : hiddenHeight;
            hiddenWidth = hiddenWidth < 0 ? el.offsetWidth : hiddenWidth;
            var area = el.offsetHeight * el.offsetWidth;
            var hiddenArea = hiddenHeight * hiddenWidth;
            var visibleArea = area - hiddenArea;
            // if the visibleArea is 0 set it back to area (to calculate the percentage in a useful way)
            visibleArea = visibleArea === 0 ? area : visibleArea;
            var visiblePercent = visibleArea / area;
            return {
                placement: placement,
                weight: visiblePercent
            };
        });
        // sort the placments from best to worst
        weightedPlacements.sort(function (a, b) { return b.weight - a.weight; });
        // pick the best!
        dialogPlacement = weightedPlacements[0].placement;
        // calculate the final position
        var pos = findPosition(parentEl, el, dialogPlacement);
        // update the element
        _utils_position__WEBPACK_IMPORTED_MODULE_3__["default"].setElement(el, pos);
        setTimeout(function () { _this.placement = dialogPlacement; });
    };
    /**
     * Sets up a KeyboardEvent to close `Dialog` with Escape key.
     * @param {KeyboardEvent} event
     * @memberof Dialog
     */
    Dialog.prototype.escapeClose = function (event) {
        switch (event.key) {
            case "Esc": // IE specific value
            case "Escape": {
                event.stopImmediatePropagation();
                this.doClose();
                break;
            }
            case "Tab": {
                Object(_common_tab_service__WEBPACK_IMPORTED_MODULE_4__["cycleTabs"])(event, this.elementRef.nativeElement);
                break;
            }
        }
    };
    /**
     * Sets up a event Listener to close `Dialog` if click event occurs outside
     * `Dialog` object.
     * @param {any} event
     * @memberof Dialog
     */
    Dialog.prototype.clickClose = function (event) {
        if (!this.elementRef.nativeElement.contains(event.target)
            && !this.dialogConfig.parentRef.nativeElement.contains(event.target)) {
            this.doClose();
        }
    };
    /**
     * Closes `Dialog` object by emitting the close event upwards to parents.
     * @memberof Dialog
     */
    Dialog.prototype.doClose = function () {
        this.close.emit();
    };
    /**
     * At destruction of component, `Dialog` unsubscribes from handling window resizing changes.
     * @memberof Dialog
     */
    Dialog.prototype.ngOnDestroy = function () {
        this.resizeSubscription.unsubscribe();
        this.scrollSubscription.unsubscribe();
    };
    var Dialog_1, _a, _b, _c, _d, _e;
    /**
     * One static event observable to handle window resizing.
     * @protected
     * @static
     * @type {Observable<any>}
     * @memberof Dialog
     */
    Dialog.resizeObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, "resize").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(100));
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) === "function" && _a || Object)
    ], Dialog.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_b = typeof _dialog_config_interface__WEBPACK_IMPORTED_MODULE_5__["DialogConfig"] !== "undefined" && _dialog_config_interface__WEBPACK_IMPORTED_MODULE_5__["DialogConfig"]) === "function" && _b || Object)
    ], Dialog.prototype, "dialogConfig", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("dialog"),
        __metadata("design:type", typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _c || Object)
    ], Dialog.prototype, "dialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_d = typeof KeyboardEvent !== "undefined" && KeyboardEvent) === "function" && _d || Object]),
        __metadata("design:returntype", void 0)
    ], Dialog.prototype, "escapeClose", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("document:click", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Dialog.prototype, "clickClose", null);
    Dialog = Dialog_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-dialog",
            template: ""
        }),
        __metadata("design:paramtypes", [typeof (_e = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _e || Object])
    ], Dialog);
    return Dialog;
}());



/***/ }),

/***/ "./src/dialog/dialog.directive.ts":
/*!****************************************!*\
  !*** ./src/dialog/dialog.directive.ts ***!
  \****************************************/
/*! exports provided: DialogDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDirective", function() { return DialogDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.service */ "./src/dialog/dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * A generic directive that can be inherited from to create dialogs (for example, a tooltip or popover)
 *
 * This class contains the relevant intilization code, specific templates, options, and additional inputs
 * should be specified in the derived class.
 *
 * NOTE: All child classes should add `DialogService` as a provider, otherwise they will lose context that
 * the service relies on.
 */
var DialogDirective = /** @class */ (function () {
    /**
     * Creates an instance of DialogDirective.
     * @param {ElementRef} elementRef
     * @param {ViewContainerRef} viewContainerRef
     * @param {DialogService} dialogService
     */
    function DialogDirective(elementRef, viewContainerRef, dialogService) {
        this.elementRef = elementRef;
        this.viewContainerRef = viewContainerRef;
        this.dialogService = dialogService;
        /**
         * Title for the dialog
         * @type {string}
         */
        this.title = "";
        /**
         * Defines how the Dialog is triggered.(Hover and click behave the same on mobile - both respond to a single tap)
         * @type {("click" | "hover" | "mouseenter")}
         */
        this.trigger = "click";
        /**
         * Placement of the dialog, usually relative to the element the directive is on.
         */
        this.placement = "left";
        /**
         * Spacing between the dialog and it's triggering element
         * @type {number}
         */
        this.gap = 0;
        /**
         * Set to `true` to open the dialog next to the triggering component
         */
        this.appendInline = false;
        /**
         * Optional data for templates
         */
        this.data = {};
        /**
         * Config object passed to the rendered component
         */
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.role = "button";
        this.expanded = false;
    }
    Object.defineProperty(DialogDirective.prototype, "appendToBody", {
        get: function () {
            return !this.appendInline;
        },
        /**
         * Deprecated. Defaults to true. Use appendInline to keep dialogs within page flow
         * Value `true` sets Dialog be appened to the body (to break out of containers)
         */
        set: function (v) {
            console.log("`appendToBody` has been deprecated. Dialogs now append to the body by default.");
            console.log("Ensure you have an `ibm-placeholder` in your app.");
            console.log("Use `appendInline` if you need to position your dialogs within the normal page flow.");
            this.appendInline = !v;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Overrides 'touchstart' event to trigger a toggle on the Dialog.
     * @param {any} evt
     */
    DialogDirective.prototype.onTouchStart = function (evt) {
        evt.stopImmediatePropagation();
        evt.preventDefault();
        this.toggle();
    };
    DialogDirective.prototype.ngOnChanges = function () {
        // set the config object (this can [and should!] be added to in child classes depending on what they need)
        this.dialogConfig = {
            title: this.title,
            content: this.ibmDialog,
            placement: this.placement,
            parentRef: this.elementRef,
            gap: this.gap,
            trigger: this.trigger,
            appendInline: this.appendInline,
            wrapperClass: this.wrapperClass,
            data: this.data
        };
    };
    /**
     * Sets the config object and binds events for hovering or clicking before
     * running code from child class.
     */
    DialogDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix for safari hijacking clicks
        this.dialogService.singletonClickListen();
        // bind events for hovering or clicking the host
        if (this.trigger === "hover" || this.trigger === "mouseenter") {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.elementRef.nativeElement, "mouseenter").subscribe(function () { return _this.toggle(); });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.elementRef.nativeElement, "mouseout").subscribe(function () { return _this.close(); });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.elementRef.nativeElement, "focus").subscribe(function () { return _this.open(); });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.elementRef.nativeElement, "blur").subscribe(function () { return _this.close(); });
        }
        else {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.elementRef.nativeElement, "click").subscribe(function () { return _this.toggle(); });
        }
        // call onClose when the dialog is closed
        // - Enforce accessibility by updating an aria attr for nativeElement.
        this.dialogService.isClosed.subscribe(function (value) {
            if (value) {
                _this.onClose.emit();
                _this.expanded = false;
            }
        });
        // run any code a child class may need
        this.onDialogInit();
    };
    /**
     * When the host dies, kill the popover.
     * - Useful for use in a modal or similar.
     */
    DialogDirective.prototype.ngOnDestroy = function () {
        this.close();
    };
    /**
     * Helper method to call dialogService 'open'.
     * - Enforce accessibility by updating an aria attr for nativeElement.
     */
    DialogDirective.prototype.open = function () {
        this.dialogService.open(this.viewContainerRef, this.dialogConfig);
        this.expanded = true;
    };
    /**
     * Helper method to call dialogService 'toggle'.
     * - Enforce accessibility by updating an aria attr for nativeElement.
     */
    DialogDirective.prototype.toggle = function () {
        this.dialogService.toggle(this.viewContainerRef, this.dialogConfig);
        this.expanded = this.dialogService.isOpen;
    };
    /**
     * Helper method to call dialogService 'close'.
     * - Enforce accessibility by updating an aria attr for nativeElement.
     */
    DialogDirective.prototype.close = function () {
        this.dialogService.close(this.viewContainerRef);
        this.expanded = false;
    };
    /**
     * Empty method for child classes to override and specify additional init steps.
     * Run after DialogDirective completes it's ngOnInit.
     * @protected
     */
    DialogDirective.prototype.onDialogInit = function () { };
    var _a, _b, _c, _d, _e;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogDirective.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogDirective.prototype, "ibmDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DialogDirective.prototype, "trigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogDirective.prototype, "placement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DialogDirective.prototype, "wrapperClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogDirective.prototype, "gap", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DialogDirective.prototype, "appendToBody", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogDirective.prototype, "appendInline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogDirective.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) === "function" && _b || Object)
    ], DialogDirective.prototype, "onClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.role"),
        __metadata("design:type", Object)
    ], DialogDirective.prototype, "role", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.aria-expanded"),
        __metadata("design:type", Object)
    ], DialogDirective.prototype, "expanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("touchstart", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DialogDirective.prototype, "onTouchStart", null);
    DialogDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[ibmDialog]",
            exportAs: "ibmDialog",
            providers: [
                _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]
            ]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] !== "undefined" && _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]) === "function" && _e || Object])
    ], DialogDirective);
    return DialogDirective;
}());



/***/ }),

/***/ "./src/dialog/dialog.module.ts":
/*!*************************************!*\
  !*** ./src/dialog/dialog.module.ts ***!
  \*************************************/
/*! exports provided: DialogService, Dialog, DialogDirective, DialogPlaceholder, Tooltip, TooltipDirective, EllipsisTooltip, OverflowMenu, OverflowMenuPane, OverflowMenuDirective, OverflowMenuOption, DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icon_static_icon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../icon/static-icon.module */ "./src/icon/static-icon.module.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog.service */ "./src/dialog/dialog.service.ts");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog.component */ "./src/dialog/dialog.component.ts");
/* harmony import */ var _dialog_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog.directive */ "./src/dialog/dialog.directive.ts");
/* harmony import */ var _dialog_placeholder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-placeholder.component */ "./src/dialog/dialog-placeholder.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/dialog/tooltip/tooltip.component.ts");
/* harmony import */ var _tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tooltip/tooltip.directive */ "./src/dialog/tooltip/tooltip.directive.ts");
/* harmony import */ var _tooltip_ellipsis_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tooltip/ellipsis-tooltip.directive */ "./src/dialog/tooltip/ellipsis-tooltip.directive.ts");
/* harmony import */ var _overflow_menu_overflow_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./overflow-menu/overflow-menu.component */ "./src/dialog/overflow-menu/overflow-menu.component.ts");
/* harmony import */ var _overflow_menu_overflow_menu_pane_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./overflow-menu/overflow-menu-pane.component */ "./src/dialog/overflow-menu/overflow-menu-pane.component.ts");
/* harmony import */ var _overflow_menu_overflow_menu_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./overflow-menu/overflow-menu.directive */ "./src/dialog/overflow-menu/overflow-menu.directive.ts");
/* harmony import */ var _overflow_menu_overflow_menu_option_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./overflow-menu/overflow-menu-option.component */ "./src/dialog/overflow-menu/overflow-menu-option.component.ts");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
/* harmony import */ var _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../placeholder/placeholder.module */ "./src/placeholder/placeholder.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return _dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return _dialog_component__WEBPACK_IMPORTED_MODULE_4__["Dialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogDirective", function() { return _dialog_directive__WEBPACK_IMPORTED_MODULE_5__["DialogDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogPlaceholder", function() { return _dialog_placeholder_component__WEBPACK_IMPORTED_MODULE_6__["DialogPlaceholder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_7__["Tooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return _tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EllipsisTooltip", function() { return _tooltip_ellipsis_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__["EllipsisTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverflowMenu", function() { return _overflow_menu_overflow_menu_component__WEBPACK_IMPORTED_MODULE_10__["OverflowMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverflowMenuPane", function() { return _overflow_menu_overflow_menu_pane_component__WEBPACK_IMPORTED_MODULE_11__["OverflowMenuPane"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverflowMenuDirective", function() { return _overflow_menu_overflow_menu_directive__WEBPACK_IMPORTED_MODULE_12__["OverflowMenuDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverflowMenuOption", function() { return _overflow_menu_overflow_menu_option_component__WEBPACK_IMPORTED_MODULE_13__["OverflowMenuOption"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// modules



// imports













// exports











var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    DialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _dialog_component__WEBPACK_IMPORTED_MODULE_4__["Dialog"],
                _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_7__["Tooltip"],
                _overflow_menu_overflow_menu_component__WEBPACK_IMPORTED_MODULE_10__["OverflowMenu"],
                _overflow_menu_overflow_menu_pane_component__WEBPACK_IMPORTED_MODULE_11__["OverflowMenuPane"],
                _dialog_directive__WEBPACK_IMPORTED_MODULE_5__["DialogDirective"],
                _tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"],
                _tooltip_ellipsis_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__["EllipsisTooltip"],
                _overflow_menu_overflow_menu_directive__WEBPACK_IMPORTED_MODULE_12__["OverflowMenuDirective"],
                _overflow_menu_overflow_menu_option_component__WEBPACK_IMPORTED_MODULE_13__["OverflowMenuOption"],
                _dialog_placeholder_component__WEBPACK_IMPORTED_MODULE_6__["DialogPlaceholder"]
            ],
            exports: [
                _dialog_component__WEBPACK_IMPORTED_MODULE_4__["Dialog"],
                _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_7__["Tooltip"],
                _overflow_menu_overflow_menu_component__WEBPACK_IMPORTED_MODULE_10__["OverflowMenu"],
                _overflow_menu_overflow_menu_pane_component__WEBPACK_IMPORTED_MODULE_11__["OverflowMenuPane"],
                _dialog_directive__WEBPACK_IMPORTED_MODULE_5__["DialogDirective"],
                _tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"],
                _tooltip_ellipsis_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__["EllipsisTooltip"],
                _overflow_menu_overflow_menu_directive__WEBPACK_IMPORTED_MODULE_12__["OverflowMenuDirective"],
                _overflow_menu_overflow_menu_option_component__WEBPACK_IMPORTED_MODULE_13__["OverflowMenuOption"],
                _dialog_placeholder_component__WEBPACK_IMPORTED_MODULE_6__["DialogPlaceholder"]
            ],
            providers: [_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]],
            entryComponents: [
                _dialog_component__WEBPACK_IMPORTED_MODULE_4__["Dialog"],
                _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_7__["Tooltip"],
                _overflow_menu_overflow_menu_pane_component__WEBPACK_IMPORTED_MODULE_11__["OverflowMenuPane"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _icon_static_icon_module__WEBPACK_IMPORTED_MODULE_2__["StaticIconModule"],
                _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_14__["I18nModule"],
                _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_15__["PlaceholderModule"]
            ]
        })
    ], DialogModule);
    return DialogModule;
}());



/***/ }),

/***/ "./src/dialog/dialog.service.ts":
/*!**************************************!*\
  !*** ./src/dialog/dialog.service.ts ***!
  \**************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../placeholder/placeholder.module */ "./src/placeholder/placeholder.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * `Dialog` object to be injected into other components.
 * @export
 * @class DialogService
 */
var DialogService = /** @class */ (function () {
    /**
     * Creates an instance of `DialogService`.
     * @param {ComponentFactoryResolver} componentFactoryResolver
     * @param {Injector} injector
     * @memberof DialogService
     */
    function DialogService(componentFactoryResolver, injector, placeholderService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.placeholderService = placeholderService;
        /**
         * Reflects the open or closed state of the `Dialog`.
         * @memberof DialogService
         */
        this.isOpen = false;
        /**
         * To emit the `Dialog` closing event.
         * @type {EventEmitter<any>}
         * @memberof DialogService
         */
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits the state `true` if the Dialog is closed, false if `Dialog`
         * is opened/viewable.
         * @type {EventEmitter<any>}
         * @memberof DialogService
         */
        this.isClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DialogService_1 = DialogService;
    /**
     * Uses module `componentFactory` to create the `Dialog` component.
     * @param {any} component
     * @memberof DialogService
     */
    DialogService.prototype.create = function (component) {
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    };
    /**
     * Toggles between `Dialog` open/close states.
     * @param {ViewContainerRef} viewContainer
     * @param {DialogConfig} dialogConfig
     * @memberof DialogService
     */
    DialogService.prototype.toggle = function (viewContainer, dialogConfig) {
        if (this.isOpen) {
            this.close(viewContainer);
        }
        else {
            this.open(viewContainer, dialogConfig);
        }
    };
    /**
     * If `dialogRef` is defined, the Dialog is already open. If
     * `dialogRef` is undefined, we create the `Dialog` component and reference to it.
     * A subscription is created to track if the `Dialog` should close.
     * @param {ViewContainerRef} viewContainer
     * @param {DialogConfig} dialogConfig
     * @memberof DialogService
     */
    DialogService.prototype.open = function (viewContainer, dialogConfig) {
        var _this = this;
        if (!this.dialogRef) {
            if (dialogConfig.appendInline) {
                // add our component to the view
                this.dialogRef = viewContainer.createComponent(this.componentFactory, 0, this.injector);
            }
            else if (!this.placeholderService.hasPlaceholderRef()) {
                this.dialogRef = viewContainer.createComponent(this.componentFactory, 0, this.injector);
                setTimeout(function () {
                    window.document.querySelector("body").appendChild(_this.dialogRef.location.nativeElement);
                });
            }
            else {
                this.dialogRef = this.placeholderService.createComponent(this.componentFactory, this.injector);
            }
            // initialize some extra options
            var focusedElement = document.activeElement;
            dialogConfig["previouslyFocusedElement"] = focusedElement;
            this.dialogRef.instance.dialogConfig = dialogConfig;
            this.onClose = this.dialogRef.instance.close;
            this.isOpen = true;
            this.dialogSubscription = this.onClose.subscribe(function () {
                _this.close(viewContainer);
            });
            this.dialogRef.instance.elementRef.nativeElement.focus();
        }
        return this;
    };
    /**
     * On close of `Dialog` item, sets focus back to previous item, unsets
     * the current `dialogRef` item. Unsubscribes to the event of `Dialog` close.
     * @param {ViewContainerRef} viewContainer
     * @param {any} [evt]
     * @memberof DialogService
     */
    DialogService.prototype.close = function (viewContainer) {
        this.isClosed.emit(true);
        if (this.dialogRef) {
            var elementToFocus = this.dialogRef.instance.dialogConfig["previouslyFocusedElement"];
            if (this.placeholderService.hasPlaceholderRef() && !this.dialogRef.instance.dialogConfig.appendInline) {
                this.placeholderService.destroyComponent(this.dialogRef);
            }
            else {
                viewContainer.remove(viewContainer.indexOf(this.dialogRef.hostView));
            }
            this.dialogRef = null;
            this.isOpen = false;
            elementToFocus.focus();
            if (this.dialogSubscription) {
                this.dialogSubscription.unsubscribe();
            }
        }
    };
    /**
     * Fix for safari hijacking clicks.
     *
     * Runs on `ngOnInit` of every dialog. Ensures we don't have multiple listeners
     * because having many of them could degrade performance in certain cases (and is
     * not necessary for our use case)
     *
     * This is an internally used function, can change at any point (even get removed)
     * and changes to it won't be considered a breaking change. Use at your own risk.
     */
    DialogService.prototype.singletonClickListen = function () {
        if (!DialogService_1.listeningForBodyClicks) {
            document.body.firstElementChild.addEventListener("click", function () { return null; }, true);
            DialogService_1.listeningForBodyClicks = true;
        }
    };
    var DialogService_1, _a, _b, _c;
    /**
     * Used in `singletonClickListen`, don't count on its existence and values.
     */
    DialogService.listeningForBodyClicks = false;
    DialogService = DialogService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]) === "function" && _a || Object, typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]) === "function" && _b || Object, typeof (_c = typeof _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_1__["PlaceholderService"] !== "undefined" && _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_1__["PlaceholderService"]) === "function" && _c || Object])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/dialog/overflow-menu/overflow-menu-option.component.ts":
/*!********************************************************************!*\
  !*** ./src/dialog/overflow-menu/overflow-menu-option.component.ts ***!
  \********************************************************************/
/*! exports provided: OverflowMenuOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverflowMenuOption", function() { return OverflowMenuOption; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * `OverflowMenuOption` represents a single option in an overflow menu
 *
 * Presently it has three possible states - normal, disabled, and danger:
 * ```
 * <ibm-overflow-menu-option>Simple option</ibm-overflow-menu-option>
 * <ibm-overflow-menu-option disabled="true">Disabled</ibm-overflow-menu-option>
 * <ibm-overflow-menu-option type="danger">Danger option</ibm-overflow-menu-option>
 * ```
 *
 * For content that expands beyod the overflow menu `OverflowMenuOption` automatically adds a title attribute.
 */
var OverflowMenuOption = /** @class */ (function () {
    function OverflowMenuOption(elementRef) {
        this.elementRef = elementRef;
        this.optionClass = "bx--overflow-menu-options__option";
        this.role = "presentation";
        /**
         * toggles between `normal` and `danger` states
         */
        this.type = "normal";
        /**
         * disable/enable interactions
         */
        this.disabled = false;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabIndex = -1;
    }
    Object.defineProperty(OverflowMenuOption.prototype, "isDanger", {
        get: function () {
            return this.type === "danger";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverflowMenuOption.prototype, "isDisabled", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    OverflowMenuOption.prototype.onClick = function (event) {
        this.selected.emit();
    };
    Object.defineProperty(OverflowMenuOption.prototype, "titleEnabled", {
        /**
         * Returns true if the content string is longer than the width of the containing button
         *
         * note: getter ties into the view check cycle so we always get an accurate value
         */
        get: function () {
            var button = this.elementRef.nativeElement.querySelector("button");
            if (button.scrollWidth > button.offsetWidth) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverflowMenuOption.prototype, "content", {
        /**
         * Returns the text content projected into the component
         */
        get: function () {
            return this.elementRef.nativeElement.querySelector("button").textContent;
        },
        enumerable: true,
        configurable: true
    });
    var _a, _b, _c, _d;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class"),
        __metadata("design:type", Object)
    ], OverflowMenuOption.prototype, "optionClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.role"),
        __metadata("design:type", Object)
    ], OverflowMenuOption.prototype, "role", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--overflow-menu-options__option--danger"),
        __metadata("design:type", typeof (_a = typeof Boolean !== "undefined" && Boolean) === "function" && _a || Object),
        __metadata("design:paramtypes", [])
    ], OverflowMenuOption.prototype, "isDanger", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--overflow-menu-options__option--disabled"),
        __metadata("design:type", typeof (_b = typeof Boolean !== "undefined" && Boolean) === "function" && _b || Object),
        __metadata("design:paramtypes", [])
    ], OverflowMenuOption.prototype, "isDisabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OverflowMenuOption.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OverflowMenuOption.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) === "function" && _c || Object)
    ], OverflowMenuOption.prototype, "selected", void 0);
    OverflowMenuOption = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-overflow-menu-option",
            template: "\n\t\t<button\n\t\t\tclass=\"bx--overflow-menu-options__btn\"\n\t\t\trole=\"menuitem\"\n\t\t\t[tabindex]=\"tabIndex\"\n\t\t\t(focus)=\"tabIndex = 0\"\n\t\t\t(blur)=\"tabIndex = -1\"\n\t\t\t(click)=\"onClick($event)\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[title]=\"(titleEnabled ? content : '')\">\n\t\t\t<ng-content></ng-content>\n\t\t</button>\n\t"
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _d || Object])
    ], OverflowMenuOption);
    return OverflowMenuOption;
}());



/***/ }),

/***/ "./src/dialog/overflow-menu/overflow-menu-pane.component.ts":
/*!******************************************************************!*\
  !*** ./src/dialog/overflow-menu/overflow-menu-pane.component.ts ***!
  \******************************************************************/
/*! exports provided: OverflowMenuPane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverflowMenuPane", function() { return OverflowMenuPane; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog.component */ "./src/dialog/dialog.component.ts");
/* harmony import */ var _utils_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/position */ "./src/utils/position.ts");
/* harmony import */ var _common_tab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../common/tab.service */ "./src/common/tab.service.ts");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Extend the `Dialog` component to create an overflow menu.
 *
 * Not used directly. See overflow-menu.component and overflow-menu.directive for more
 */
var OverflowMenuPane = /** @class */ (function (_super) {
    __extends(OverflowMenuPane, _super);
    function OverflowMenuPane(elementRef, i18n) {
        var _this = _super.call(this, elementRef) || this;
        _this.elementRef = elementRef;
        _this.i18n = i18n;
        return _this;
    }
    OverflowMenuPane.prototype.onDialogInit = function () {
        var _this = this;
        /**
         *  -20 shifts the menu up to compensate for the
         *  extra offset generated by the wrapper component.
         *
         *  60 shifts the menu right to align the arrow.
         * (position service trys it's best to center everything,
         * so we need to add some compensation)
         */
        this.addGap["bottom"] = function (pos) {
            if (_this.dialogConfig.flip) {
                return _utils_position__WEBPACK_IMPORTED_MODULE_2__["position"].addOffset(pos, -20, -60);
            }
            return _utils_position__WEBPACK_IMPORTED_MODULE_2__["position"].addOffset(pos, -20, 60);
        };
        if (!this.dialogConfig.menuLabel) {
            this.dialogConfig.menuLabel = this.i18n.get().OVERFLOW_MENU.OVERFLOW;
        }
    };
    OverflowMenuPane.prototype.hostkeys = function (event) {
        var listItems = this.listItems();
        switch (event.key) {
            case "Down": // IE specific value
            case "ArrowDown":
                event.preventDefault();
                if (!Object(_common_tab_service__WEBPACK_IMPORTED_MODULE_3__["isFocusInLastItem"])(event, listItems)) {
                    var index = listItems.findIndex(function (item) { return item === event.target; });
                    listItems[index + 1].focus();
                }
                else {
                    listItems[0].focus();
                }
                break;
            case "Up": // IE specific value
            case "ArrowUp":
                event.preventDefault();
                if (!Object(_common_tab_service__WEBPACK_IMPORTED_MODULE_3__["isFocusInFirstItem"])(event, listItems)) {
                    var index = listItems.findIndex(function (item) { return item === event.target; });
                    listItems[index - 1].focus();
                }
                else {
                    listItems[listItems.length - 1].focus();
                }
                break;
            case "Home":
                event.preventDefault();
                listItems[0].focus();
                break;
            case "End":
                event.preventDefault();
                listItems[listItems.length - 1].focus();
                break;
            case "Esc": // IE specific value
            case "Escape":
            case "Tab":
                event.stopImmediatePropagation();
                this.doClose();
                break;
            default: break;
        }
    };
    OverflowMenuPane.prototype.ngAfterViewInit = function () {
        var focusElementList = this.listItems();
        focusElementList.forEach(function (button) {
            // Allows user to set tabindex to 0.
            if (button.getAttribute("tabindex") === null) {
                button.tabIndex = -1;
            }
        });
        focusElementList[0].tabIndex = 0;
        focusElementList[0].focus();
        _super.prototype.ngAfterViewInit.call(this);
    };
    OverflowMenuPane.prototype.listItems = function () {
        return Array.from(this.elementRef.nativeElement.querySelectorAll(".bx--overflow-menu-options__btn:not([disabled])"));
    };
    var _a, _b, _c;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof KeyboardEvent !== "undefined" && KeyboardEvent) === "function" && _a || Object]),
        __metadata("design:returntype", void 0)
    ], OverflowMenuPane.prototype, "hostkeys", null);
    OverflowMenuPane = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-overflow-menu-pane",
            template: "\n\t\t<ul\n\t\t\t[attr.aria-label]=\"dialogConfig.menuLabel\"\n\t\t\t[ngClass]=\"{'bx--overflow-menu--flip': dialogConfig.flip}\"\n\t\t\trole=\"menu\"\n\t\t\t#dialog\n\t\t\tclass=\"bx--overflow-menu-options bx--overflow-menu-options--open\"\n\t\t\trole=\"menu\"\n\t\t\t(click)=\"doClose()\"\n\t\t\t[attr.aria-label]=\"dialogConfig.menuLabel\">\n\t\t\t<ng-template\n\t\t\t\t[ngTemplateOutlet]=\"dialogConfig.content\"\n\t\t\t\t[ngTemplateOutletContext]=\"{overflowMenu: this}\">\n\t\t\t</ng-template>\n\t\t</ul>\n\t"
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_4__["I18n"] !== "undefined" && _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_4__["I18n"]) === "function" && _c || Object])
    ], OverflowMenuPane);
    return OverflowMenuPane;
}(_dialog_component__WEBPACK_IMPORTED_MODULE_1__["Dialog"]));



/***/ }),

/***/ "./src/dialog/overflow-menu/overflow-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/dialog/overflow-menu/overflow-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: OverflowMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverflowMenu", function() { return OverflowMenu; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * The OverFlow menu component encapsulates the OverFlowMenu directive, and the menu iconography into one convienent component
 *
 * html:
 * ```
 * <ibm-overflow-menu>
 *	<ibm-overflow-menu-option>Option 1</ibm-overflow-menu-option>
 *	<ibm-overflow-menu-option>Option 2</ibm-overflow-menu-option>
 * </ibm-overflow-menu>
 * ```
 */
var OverflowMenu = /** @class */ (function () {
    function OverflowMenu(elementRef, i18n) {
        this.elementRef = elementRef;
        this.i18n = i18n;
        this.buttonLabel = this.i18n.get().OVERFLOW_MENU.OVERFLOW;
        this.flip = false;
    }
    Object.defineProperty(OverflowMenu.prototype, "open", {
        get: function () {
            if (this.elementRef.nativeElement.children[0].getAttribute("aria-expanded") === "true") {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    var _a, _b;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OverflowMenu.prototype, "buttonLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OverflowMenu.prototype, "flip", void 0);
    OverflowMenu = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-overflow-menu",
            template: "\n\t\t<div\n\t\t\t[ibmOverflowMenu]=\"options\"\n\t\t\t[ngClass]=\"{'bx--overflow-menu--open': open === true}\"\n\t\t\t[attr.aria-label]=\"buttonLabel\"\n\t\t\t[flip]=\"flip\"\n\t\t\tclass=\"bx--overflow-menu\"\n\t\t\tplacement=\"bottom\"\n\t\t\tstyle=\"display: block;\"\n\t\t\ttabindex=\"0\">\n\t\t\t<svg focusable=\"false\" class=\"bx--overflow-menu__icon\" width=\"3\" height=\"15\" viewBox=\"0 0 3 15\">\n\t\t\t\t<g fill-rule=\"evenodd\">\n\t\t\t\t\t<circle cx=\"1.5\" cy=\"1.5\" r=\"1.5\" />\n\t\t\t\t\t<circle cx=\"1.5\" cy=\"7.5\" r=\"1.5\" />\n\t\t\t\t\t<circle cx=\"1.5\" cy=\"13.5\" r=\"1.5\" />\n\t\t\t\t</g>\n\t\t\t</svg>\n\t\t</div>\n\t\t<ng-template #options>\n\t\t\t<ng-content></ng-content>\n\t\t</ng-template>\n\t",
            styles: ["\n\t\t.bx--overflow-menu--open {\n\t\t\topacity: 1\n\t\t}\n\t"]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__["I18n"] !== "undefined" && _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__["I18n"]) === "function" && _b || Object])
    ], OverflowMenu);
    return OverflowMenu;
}());



/***/ }),

/***/ "./src/dialog/overflow-menu/overflow-menu.directive.ts":
/*!*************************************************************!*\
  !*** ./src/dialog/overflow-menu/overflow-menu.directive.ts ***!
  \*************************************************************/
/*! exports provided: OverflowMenuDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverflowMenuDirective", function() { return OverflowMenuDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dialog.directive */ "./src/dialog/dialog.directive.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../dialog.service */ "./src/dialog/dialog.service.ts");
/* harmony import */ var _overflow_menu_pane_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overflow-menu-pane.component */ "./src/dialog/overflow-menu/overflow-menu-pane.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Directive for extending `Dialog` to create overflow menus.
 *
 * class: OverflowMenuDirective (extends DialogDirective)
 *
 *
 * selector: `ibmOverflowMenu`
 *
 *
 * ```html
 * <div [ibmOverflowMenu]="templateRef"></div>
 * <ng-template #templateRef>
 * 	<!-- overflow menu options here -->
 * </ng-template>
 * ```
 */
var OverflowMenuDirective = /** @class */ (function (_super) {
    __extends(OverflowMenuDirective, _super);
    /**
     * Creates an instance of `OverflowMenuDirective`.
     */
    function OverflowMenuDirective(elementRef, viewContainerRef, dialogService) {
        var _this = _super.call(this, elementRef, viewContainerRef, dialogService) || this;
        _this.elementRef = elementRef;
        _this.viewContainerRef = viewContainerRef;
        _this.dialogService = dialogService;
        /**
         * Controls wether the overflow menu is flipped
         */
        _this.flip = false;
        dialogService.create(_overflow_menu_pane_component__WEBPACK_IMPORTED_MODULE_3__["OverflowMenuPane"]);
        return _this;
    }
    OverflowMenuDirective.prototype.onDialogInit = function () {
        this.dialogConfig.content = this.ibmOverflowMenu;
        this.dialogConfig.flip = this.flip;
    };
    OverflowMenuDirective.prototype.hostkeys = function (event) {
        switch (event.key) {
            case "Enter":
            case " ":
                event.preventDefault();
                this.toggle();
                break;
        }
    };
    var _a, _b, _c, _d, _e;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) === "function" && _a || Object)
    ], OverflowMenuDirective.prototype, "ibmOverflowMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OverflowMenuDirective.prototype, "flip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_b = typeof KeyboardEvent !== "undefined" && KeyboardEvent) === "function" && _b || Object]),
        __metadata("design:returntype", void 0)
    ], OverflowMenuDirective.prototype, "hostkeys", null);
    OverflowMenuDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[ibmOverflowMenu]",
            exportAs: "ibmOverflowMenu",
            providers: [
                _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]
            ]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] !== "undefined" && _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]) === "function" && _e || Object])
    ], OverflowMenuDirective);
    return OverflowMenuDirective;
}(_dialog_directive__WEBPACK_IMPORTED_MODULE_1__["DialogDirective"]));



/***/ }),

/***/ "./src/dialog/overflow-menu/overflow-menu.stories.ts":
/*!***********************************************************!*\
  !*** ./src/dialog/overflow-menu/overflow-menu.stories.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ */ "./src/index.ts");



var options;
function createOptions(count) {
    if (options && count === options.length) {
        return options;
    }
    options = Array(count).fill(0).map(function (x, i) { return "Option " + (i + 1); });
    return options;
}
Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Overflow Menu", module)
    .addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [
        ___WEBPACK_IMPORTED_MODULE_2__["DialogModule"]
    ]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t\t<ibm-overflow-menu>\n\t\t\t\t<ibm-overflow-menu-option (selected)=\"selected($event)\" (click)=\"click($event)\">\n\t\t\t\t\tAn example option that is really long to show what should be done to handle long text\n\t\t\t\t</ibm-overflow-menu-option>\n\t\t\t\t<ibm-overflow-menu-option (selected)=\"selected($event)\">Option 2</ibm-overflow-menu-option>\n\t\t\t\t<li class=\"bx--overflow-menu-options__option\">\n\t\t\t\t\t<button class=\"bx--overflow-menu-options__btn\">A fully custom option</button>\n\t\t\t\t</li>\n\t\t\t\t<ibm-overflow-menu-option (selected)=\"selected($event)\">Option 4</ibm-overflow-menu-option>\n\t\t\t\t<ibm-overflow-menu-option disabled=\"true\" (selected)=\"selected($event)\">Disabled</ibm-overflow-menu-option>\n\t\t\t\t<ibm-overflow-menu-option type=\"danger\" (selected)=\"selected($event)\">Danger option</ibm-overflow-menu-option>\n\t\t\t</ibm-overflow-menu>\n\n\t\t\t<span>Flipped OverflowMenu</span>\n\t\t\t<ibm-overflow-menu flip=\"true\" style=\"display: inline-block;\">\n\t\t\t\t<ibm-overflow-menu-option>\n\t\t\t\t\tAn example option that is really long to show what should be done to handle long text\n\t\t\t\t</ibm-overflow-menu-option>\n\t\t\t\t<ibm-overflow-menu-option>Option 2</ibm-overflow-menu-option>\n\t\t\t\t<li class=\"bx--overflow-menu-options__option\">\n\t\t\t\t\t<button class=\"bx--overflow-menu-options__btn\">A fully custom option</button>\n\t\t\t\t</li>\n\t\t\t\t<ibm-overflow-menu-option>Option 4</ibm-overflow-menu-option>\n\t\t\t\t<ibm-overflow-menu-option disabled=\"true\">Disabled</ibm-overflow-menu-option>\n\t\t\t\t<ibm-overflow-menu-option type=\"danger\">Danger option</ibm-overflow-menu-option>\n\t\t\t</ibm-overflow-menu>\n\t\t\t<ibm-dialog-placeholder></ibm-dialog-placeholder>\n\t\t",
    props: {
        click: function () { return console.log("click"); },
        selected: function () { return console.log("selected"); }
    }
}); })
    .add("Dynamic", function () { return ({
    template: "\n\t\t\t<span>\n\t\t\t\tDynamic <code style=\"font-family: monospace;\">OverflowMenu</code>, using the <code style=\"font-family: monospace;\">optionCount</code> knob <br/>\n\t\t\t\tto change the number of menu options\n\t\t\t</span>\n\t\t\t<ibm-overflow-menu>\n\t\t\t\t<ibm-overflow-menu-option *ngFor=\"let option of options(optionCount)\">\n\t\t\t\t\t{{option}}\n\t\t\t\t</ibm-overflow-menu-option>\n\t\t\t</ibm-overflow-menu>\n\t\t",
    props: {
        optionCount: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["number"])("optionCount", 10),
        options: createOptions
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/dialog/tooltip/ellipsis-tooltip.directive.ts":
/*!**********************************************************!*\
  !*** ./src/dialog/tooltip/ellipsis-tooltip.directive.ts ***!
  \**********************************************************/
/*! exports provided: EllipsisTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisTooltip", function() { return EllipsisTooltip; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.directive */ "./src/dialog/tooltip/tooltip.directive.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../dialog.service */ "./src/dialog/dialog.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * A directive that creates a tooltip `Dialog` for exposing truncated text.
 *
 * class: EllipsisTooltip (extends PopoverDirective)
 *
 * selector: `nEllipsisTooltip`
 *
 * ```html
 * <div class="ellipsis" nEllipsisTooltip>Tooltip for ellipsis because I can and I am really really long</div>
 * ```
 *
 * @export
 * @class EllipsisTooltip
 * @extends {TooltipDirective}
 */
var EllipsisTooltip = /** @class */ (function (_super) {
    __extends(EllipsisTooltip, _super);
    function EllipsisTooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Toggles tooltip in view if text is truncated.
     * @returns null
     * @memberof EllipsisTooltip
     */
    EllipsisTooltip.prototype.toggle = function () {
        if (this.elementRef.nativeElement.scrollWidth <= this.elementRef.nativeElement.offsetWidth) {
            return;
        }
        this.dialogConfig.content = this.elementRef.nativeElement.innerText;
        _super.prototype.toggle.call(this);
    };
    EllipsisTooltip = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[ibmEllipsisTooltip]",
            providers: [
                _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]
            ]
        })
    ], EllipsisTooltip);
    return EllipsisTooltip;
}(_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__["TooltipDirective"]));



/***/ }),

/***/ "./src/dialog/tooltip/tooltip.component.ts":
/*!*************************************************!*\
  !*** ./src/dialog/tooltip/tooltip.component.ts ***!
  \*************************************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dialog.component */ "./src/dialog/dialog.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Extend the `Dialog` component to create a tooltip for exposing content.
 */
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = "inline-block";
        /**
         * Value is set to `true` if the `Tooltip` is to display a `TemplateRef` instead of a string.
         */
        _this.hasContentTemplate = false;
        return _this;
    }
    /**
     * Check whether there is a template for the `Tooltip` content.
     */
    Tooltip.prototype.onDialogInit = function () {
        this.hasContentTemplate = this.dialogConfig.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("style.display"),
        __metadata("design:type", Object)
    ], Tooltip.prototype, "style", void 0);
    Tooltip = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-tooltip",
            template: "\n\t\t<div\n\t\t\t#dialog\n\t\t\t[id]=\"dialogConfig.compID\"\n\t\t\trole=\"tooltip\"\n\t\t\ttabindex=\"0\"\n\t\t\tclass=\"bx--tooltip bx--tooltip--shown\">\n\t\t\t<span class=\"bx--tooltip__caret\" aria-hidden=\"true\"></span>\n\t\t\t<ng-template\n\t\t\t\t\t*ngIf=\"hasContentTemplate\"\n\t\t\t\t\t[ngTemplateOutlet]=\"dialogConfig.content\"\n\t\t\t\t\t[ngTemplateOutletContext]=\"{tooltip: this}\">\n\t\t\t</ng-template>\n\t\t\t<p\n\t\t\t\t*ngIf=\"!hasContentTemplate\">\n\t\t\t\t{{dialogConfig.content}}\n\t\t\t</p>\n\t\t</div>\n\t\t"
        })
    ], Tooltip);
    return Tooltip;
}(_dialog_component__WEBPACK_IMPORTED_MODULE_1__["Dialog"]));



/***/ }),

/***/ "./src/dialog/tooltip/tooltip.directive.ts":
/*!*************************************************!*\
  !*** ./src/dialog/tooltip/tooltip.directive.ts ***!
  \*************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dialog.directive */ "./src/dialog/dialog.directive.ts");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.component */ "./src/dialog/tooltip/tooltip.component.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../dialog.service */ "./src/dialog/dialog.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Directive for extending `Dialog` to create tooltips.
 *
 * class: TooltipDirective (extends PopoverDirective)
 *
 *
 * selector: `nTooltip`
 *
 *
 * ```html
 * <button nTooltip="I am a tooltip" placement="right" trigger="mouseenter" type="danger">Tooltip Right</button>
 * <button nTooltip="I am a tooltip" type="warning">Tooltip Top warning on click</button>
 * ```
 *
 * @export
 * @class TooltipDirective
 * @extends {DialogDirective}
 */
var TooltipDirective = /** @class */ (function (_super) {
    __extends(TooltipDirective, _super);
    /**
     * Creates an instance of `TooltipDirective`.
     */
    function TooltipDirective(elementRef, viewContainerRef, dialogService) {
        var _this = _super.call(this, elementRef, viewContainerRef, dialogService) || this;
        _this.elementRef = elementRef;
        _this.viewContainerRef = viewContainerRef;
        _this.dialogService = dialogService;
        /**
         * Set tooltip type to reflect 'warning' or 'error' styles.
         */
        // tslint:disable-next-line:no-input-rename
        _this.tooltipType = "";
        dialogService.create(_tooltip_component__WEBPACK_IMPORTED_MODULE_2__["Tooltip"]);
        return _this;
    }
    TooltipDirective_1 = TooltipDirective;
    /**
     * Extends the `Dialog` component's data structure with tooltip properties.
     */
    TooltipDirective.prototype.onDialogInit = function () {
        TooltipDirective_1.tooltipCounter++;
        this.dialogConfig.compID = "tooltip-" + TooltipDirective_1.tooltipCounter;
        this.dialogConfig.content = this.ibmTooltip;
        this.dialogConfig.type = this.tooltipType;
        this.descriptorId = this.dialogConfig.compID;
    };
    var TooltipDirective_1, _a, _b, _c, _d;
    TooltipDirective.tooltipCounter = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "ibmTooltip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("tooltip-type"),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "tooltipType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.aria-describedby"),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "descriptorId", void 0);
    TooltipDirective = TooltipDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[ibmTooltip]",
            exportAs: "ibmTooltip",
            providers: [
                _dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
            ]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]) === "function" && _c || Object, typeof (_d = typeof _dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] !== "undefined" && _dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]) === "function" && _d || Object])
    ], TooltipDirective);
    return TooltipDirective;
}(_dialog_directive__WEBPACK_IMPORTED_MODULE_1__["DialogDirective"]));



/***/ }),

/***/ "./src/dialog/tooltip/tooltip.stories.ts":
/*!***********************************************!*\
  !*** ./src/dialog/tooltip/tooltip.stories.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ */ "./src/index.ts");



Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Tooltip", module)
    .addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [
        ___WEBPACK_IMPORTED_MODULE_2__["DialogModule"], ___WEBPACK_IMPORTED_MODULE_2__["PlaceholderModule"]
    ]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t\t<span\n\t\t\t\tibmTooltip=\"tooltip text\"\n\t\t\t\ttrigger=\"hover\"\n\t\t\t\tplacement=\"bottom\"\n\t\t\t\tstyle=\"cursor: pointer;\">\n\t\t\t\tHover for tooltip\n\t\t\t</span>\n\t\t"
}); })
    .add("With Template", function () { return ({
    template: "\n\t\t\t<ng-template #template let-tooltip=\"tooltip\">\n\t\t\t\t<p>hello</p>\n\t\t\t\t<div>\n\t\t\t\t\t<button class=\"bx--btn bx--btn--primary\" (click)=\"tooltip.doClose()\">Close</button>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t\t<span\n\t\t\t\t[ibmTooltip]=\"template\"\n\t\t\t\ttrigger=\"click\"\n\t\t\t\tplacement=\"bottom\"\n\t\t\t\tstyle=\"cursor: pointer;\">\n\t\t\t\tClick for tooltip\n\t\t\t</span>\n\t\t\t<ibm-placeholder></ibm-placeholder>\n\t\t"
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/dropdown/abstract-dropdown-view.class.ts":
/*!******************************************************!*\
  !*** ./src/dropdown/abstract-dropdown-view.class.ts ***!
  \******************************************************/
/*! exports provided: AbstractDropdownView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractDropdownView", function() { return AbstractDropdownView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * A component that intends to be used within `Dropdown` must provide an implementation that extends this base class.
 * It also must provide the base class in the `@Component` meta-data.
 * ex: `providers: [{provide: AbstractDropdownView, useExisting: forwardRef(() => MyDropdownView)}]`
 *
 * @export
 * @class AbstractDropdownView
 */
var AbstractDropdownView = /** @class */ (function () {
    function AbstractDropdownView() {
        /**
         * Specifies whether or not the `DropdownList` supports selecting multiple items as opposed to single
         * item selection.
         */
        this.type = "single";
        /**
         * Specifies the render size of the items within the `AbstractDropdownView`.
         */
        this.size = "md";
    }
    /**
     * Returns the `ListItem` that is subsequent to the selected item in the `DropdownList`.
     */
    AbstractDropdownView.prototype.getNextItem = function () { return; };
    /**
     * Returns the `HTMLElement` for the item that is subsequent to the selected item.
     */
    AbstractDropdownView.prototype.getNextElement = function () { return; };
    /**
     * Returns the `ListItem` that precedes the selected item within `DropdownList`.
     */
    AbstractDropdownView.prototype.getPrevItem = function () { return; };
    /**
     * Returns the `HTMLElement` for the item that precedes the selected item.
     */
    AbstractDropdownView.prototype.getPrevElement = function () { return; };
    /**
     * Returns the selected leaf level item(s) within the `DropdownList`.
     */
    AbstractDropdownView.prototype.getSelected = function () { return; };
    /**
     * Returns the `ListItem` that is selected within `DropdownList`.
     */
    AbstractDropdownView.prototype.getCurrentItem = function () { return; };
    /**
     * Returns the `HTMLElement` for the item that is selected within the `DropdownList`.
     */
    AbstractDropdownView.prototype.getCurrentElement = function () { return; };
    /**
     * Transforms array input list of items to the correct state by updating the selected item(s).
     */
    AbstractDropdownView.prototype.propagateSelected = function (value) { };
    /**
     * Initalizes focus in the list
     * In most cases this just calls `getCurrentElement().focus()`
     */
    AbstractDropdownView.prototype.initFocus = function () { };
    var _a, _b;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" && _a || Object)
    ], AbstractDropdownView.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) === "function" && _b || Object)
    ], AbstractDropdownView.prototype, "select", void 0);
    return AbstractDropdownView;
}());



/***/ }),

/***/ "./src/dropdown/dropdown.component.ts":
/*!********************************************!*\
  !*** ./src/dropdown/dropdown.component.ts ***!
  \********************************************/
/*! exports provided: Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _abstract_dropdown_view_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abstract-dropdown-view.class */ "./src/dropdown/abstract-dropdown-view.class.ts");
/* harmony import */ var _utils_position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/position */ "./src/utils/position.ts");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Observable import is required here so typescript can compile correctly





/**
 * Drop-down lists enable users to select one or more items from a list.
 *
 */
var Dropdown = /** @class */ (function () {
    /**
     * Creates an instance of Dropdown.
     */
    function Dropdown(elementRef, i18n) {
        this.elementRef = elementRef;
        this.i18n = i18n;
        /**
         * Value displayed if no item is selected.
         */
        this.placeholder = "";
        /**
         * The selected value from the `Dropdown`.
         */
        this.displayValue = "";
        /**
         * Size to render the dropdown field.
         */
        this.size = "md";
        /**
         * Defines whether or not the `Dropdown` supports selecting multiple items as opposed to single
         * item selection.
         */
        this.type = "single";
        /**
         * `light` or `dark` dropdown theme
         * @memberof Dropdown
         */
        this.theme = "dark";
        /**
         * Set to `true` to disable the dropdown.
         */
        this.disabled = false;
        /**
         * set to `true` to place the dropdown view inline with the component
         */
        this.appendInline = false;
        /**
         * Accessible label for the button that opens the dropdown list.
         * Defaults to the `DROPDOWN.OPEN` value from the i18n service.
         */
        this.menuButtonLabel = this.i18n.get().DROPDOWN.OPEN;
        /**
         * Provides the label for the "# selected" text.
         * Defaults to the `DROPDOWN.SELECTED` value from the i18n service.
         */
        this.selectedLabel = this.i18n.get().DROPDOWN.SELECTED;
        /**
         * Emits selection events.
         */
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits event notifying to other classes that the `Dropdown` has been closed (collapsed).
         */
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits event notifying to other classes that the `Dropdown` has been closed (collapsed).
         */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Set to `true` if the dropdown is closed (not expanded).
         */
        this.menuIsClosed = true;
        /**
         * controls wether the `drop-up` class is applied
         */
        this.dropUp = false;
        // .bind creates a new function, so we declare the methods below
        // but .bind them up here
        this.noop = this._noop.bind(this);
        this.outsideClick = this._outsideClick.bind(this);
        this.outsideKey = this._outsideKey.bind(this);
        this.keyboardNav = this._keyboardNav.bind(this);
        this.onTouchedCallback = this._noop;
        this.propagateChange = function (_) { };
    }
    Dropdown_1 = Dropdown;
    Object.defineProperty(Dropdown.prototype, "appendToBody", {
        get: function () {
            return !this.appendInline;
        },
        /**
         * Deprecated. Dropdown now defaults to appending inline
         * Set to `true` if the `Dropdown` is to be appended to the DOM body.
         */
        set: function (v) {
            console.log("`appendToBody` has been deprecated. Dropdowns now append to the body by default.");
            console.log("Ensure you have an `ibm-placeholder` in your app.");
            console.log("Use `appendInline` if you need to position your dropdowns within the normal page flow.");
            this.appendInline = !v;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the `type` property in the `@ContentChild`.
     * The `type` property specifies whether the `Dropdown` allows single selection or multi selection.
     */
    Dropdown.prototype.ngOnInit = function () {
        this.view.type = this.type;
    };
    /**
     * Initializes classes and subscribes to events for single or multi selection.
     */
    Dropdown.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.view.type = this.type;
        this.view.size = this.size;
        this.view.select.subscribe(function (event) {
            if (_this.type === "multi") {
                _this.propagateChange(_this.view.getSelected());
            }
            else {
                _this.closeMenu();
                _this.dropdownButton.nativeElement.focus();
                if (event.item && event.item.selected) {
                    if (_this.value) {
                        _this.propagateChange(event.item[_this.value]);
                    }
                    else {
                        _this.propagateChange(event.item);
                    }
                }
                else {
                    _this.propagateChange(null);
                }
            }
            _this.selected.emit(event);
        });
    };
    /**
     * Removing the `Dropdown` from the body if it is appended to the body.
     */
    Dropdown.prototype.ngOnDestroy = function () {
        if (this.appendToBody) {
            this._appendToDropdown();
        }
    };
    /**
     * Propagates the injected `value`.
     */
    Dropdown.prototype.writeValue = function (value) {
        var _this = this;
        if (this.type === "single") {
            if (this.value) {
                var newValue = Object.assign({}, this.view.items.find(function (item) { return item[_this.value] === value; }));
                newValue.selected = true;
                this.view.propagateSelected([newValue]);
            }
            else {
                this.view.propagateSelected([value]);
            }
        }
        else {
            this.view.propagateSelected(value);
        }
    };
    Dropdown.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    Dropdown.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * Registering the function injected to control the touch use of the `Dropdown`.
     */
    Dropdown.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * Adds keyboard functionality for navigation, selection and closing of the `Dropdown`.
     */
    Dropdown.prototype.onKeyDown = function (event) {
        if (event.key === "Escape" && !this.menuIsClosed) {
            event.stopImmediatePropagation(); // don't unintentionally close other widgets that listen for Escape
        }
        if (event.key === "Escape" || (event.key === "ArrowUp" && event.altKey)) {
            event.preventDefault();
            this.closeMenu();
            this.dropdownButton.nativeElement.focus();
        }
        else if (event.key === "ArrowDown" && event.altKey) {
            event.preventDefault();
            this.openMenu();
        }
        if (!this.menuIsClosed && event.key === "Tab" && this.dropdownMenu.nativeElement.contains(event.target)) {
            this.closeMenu();
        }
        if (!this.menuIsClosed && event.key === "Tab" && event.shiftKey) {
            this.closeMenu();
        }
        if (this.type === "multi") {
            return;
        }
        if (this.menuIsClosed) {
            this.closedDropdownNavigation(event);
        }
    };
    Dropdown.prototype.closedDropdownNavigation = function (event) {
        if (event.key === "ArrowDown") {
            event.preventDefault();
            this.view.getCurrentItem().selected = false;
            var item = this.view.getNextItem();
            if (item) {
                item.selected = true;
            }
        }
        else if (event.key === "ArrowUp") {
            event.preventDefault();
            this.view.getCurrentItem().selected = false;
            var item = this.view.getPrevItem();
            if (item) {
                item.selected = true;
            }
        }
    };
    /**
     * Returns the display value if there is no selection, otherwise the selection will be returned.
     */
    Dropdown.prototype.getDisplayValue = function () {
        var selected = this.view.getSelected();
        if (selected && !this.displayValue) {
            if (this.type === "multi") {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(selected.length + " " + this.selectedLabel);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(selected[0].content);
            }
        }
        else if (selected) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.displayValue);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.placeholder);
    };
    /**
     * Returns `true` if there is a value selected.
     */
    Dropdown.prototype.valueSelected = function () {
        if (this.view.getSelected()) {
            return true;
        }
        return false;
    };
    Dropdown.prototype._noop = function () { };
    /**
     * Handles clicks outside of the `Dropdown`.
     */
    Dropdown.prototype._outsideClick = function (event) {
        if (!this.elementRef.nativeElement.contains(event.target) &&
            // if we're appendToBody the list isn't within the _elementRef,
            // so we've got to check if our target is possibly in there too.
            !this.dropdownMenu.nativeElement.contains(event.target)) {
            this.closeMenu();
        }
    };
    Dropdown.prototype._outsideKey = function (event) {
        if (!this.menuIsClosed && event.key === "Tab" && this.dropdownMenu.nativeElement.contains(event.target)) {
            this.closeMenu();
        }
    };
    /**
     * Handles keyboard events so users are controlling the `Dropdown` instead of unintentionally controlling outside elements.
     */
    Dropdown.prototype._keyboardNav = function (event) {
        if (event.key === "Escape" && !this.menuIsClosed) {
            event.stopImmediatePropagation(); // don't unintentionally close modal if inside of it
        }
        if (event.key === "Escape" || (event.key === "ArrowUp" && event.altKey)) {
            event.preventDefault();
            this.closeMenu();
            this.dropdownButton.nativeElement.focus();
        }
        else if (!this.menuIsClosed && event.key === "Tab") {
            // this way focus will start on the next focusable item from the dropdown
            // not the top of the body!
            this.dropdownButton.nativeElement.focus();
            this.dropdownButton.nativeElement.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, cancelable: true, key: "Tab" }));
            this.closeMenu();
        }
    };
    /**
     * Creates the `Dropdown` list appending it to the dropdown parent object instead of the body.
     */
    Dropdown.prototype._appendToDropdown = function () {
        if (document.body.contains(this.dropdownWrapper)) {
            this.dropdownMenu.nativeElement.style.display = "none";
            this.elementRef.nativeElement.appendChild(this.dropdownMenu.nativeElement);
            document.body.removeChild(this.dropdownWrapper);
            this.resize.unsubscribe();
            this.dropdownWrapper.removeEventListener("keydown", this.keyboardNav, true);
        }
    };
    /**
     * Creates the `Dropdown` list as an element that is appended to the DOM body.
     */
    Dropdown.prototype._appendToBody = function () {
        var _this = this;
        var positionDropdown = function () {
            var pos = _utils_position__WEBPACK_IMPORTED_MODULE_5__["position"].findAbsolute(_this.dropdownButton.nativeElement, _this.dropdownWrapper, "bottom");
            // add -40 to the top position to account for carbon styles
            pos = _utils_position__WEBPACK_IMPORTED_MODULE_5__["position"].addOffset(pos, -40, 0);
            pos = _utils_position__WEBPACK_IMPORTED_MODULE_5__["position"].addOffset(pos, window.scrollY, window.scrollX);
            _utils_position__WEBPACK_IMPORTED_MODULE_5__["position"].setElement(_this.dropdownWrapper, pos);
        };
        this.dropdownMenu.nativeElement.style.display = "block";
        this.dropdownWrapper = document.createElement("div");
        this.dropdownWrapper.className = "dropdown " + this.elementRef.nativeElement.className;
        this.dropdownWrapper.style.width = this.dropdownButton.nativeElement.offsetWidth + "px";
        this.dropdownWrapper.style.position = "absolute";
        this.dropdownWrapper.appendChild(this.dropdownMenu.nativeElement);
        document.body.appendChild(this.dropdownWrapper);
        positionDropdown();
        this.dropdownWrapper.addEventListener("keydown", this.keyboardNav, true);
        this.resize = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, "resize")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(100))
            .subscribe(function () { return positionDropdown(); });
    };
    /**
     * Expands the dropdown menu in the view.
     */
    Dropdown.prototype.openMenu = function () {
        var _this = this;
        this.menuIsClosed = false;
        // move the dropdown list to the body if we're not appending inline
        // and position it relative to the dropdown wrapper
        if (!this.appendInline) {
            this.addScrollEventListener();
            this._appendToBody();
        }
        // set the dropdown menu to drop up if it's near the bottom of the screen
        // setTimeout lets us measure after it's visible in the DOM
        setTimeout(function () {
            var menu = _this.dropdownMenu.nativeElement;
            var boundingClientRect = menu.getBoundingClientRect();
            if (boundingClientRect.bottom > window.innerHeight) {
                // min height of 100px
                if (window.innerHeight - boundingClientRect.top > 100) {
                    // remove the conditional once this api is settled and part of abstract-dropdown-view.class
                    if (_this.view["enableScroll"]) {
                        _this.view["enableScroll"]();
                    }
                }
                else {
                    _this.dropUp = true;
                }
            }
            else {
                _this.dropUp = false;
            }
        }, 0);
        // we bind noop to document.body.firstElementChild to allow safari to fire events
        // from document. Then we unbind everything later to keep things light.
        document.body.firstElementChild.addEventListener("click", this.noop, true);
        document.body.firstElementChild.addEventListener("keydown", this.noop, true);
        document.addEventListener("click", this.outsideClick, true);
        document.addEventListener("keydown", this.outsideKey, true);
        // setTimeout(() => this.view.initFocus(), 0);
    };
    /**
     * Collapsing the dropdown menu and removing unnecessary `EventListeners`.
     */
    Dropdown.prototype.closeMenu = function () {
        this.menuIsClosed = true;
        this.onClose.emit();
        this.close.emit();
        // remove the conditional once this api is settled and part of abstract-dropdown-view.class
        if (this.view["disableScroll"]) {
            this.view["disableScroll"]();
        }
        // move the list back in the component on close
        if (!this.appendInline) {
            this.removeScrollEventListener();
            this._appendToDropdown();
        }
        document.body.firstElementChild.removeEventListener("click", this.noop, true);
        document.body.firstElementChild.removeEventListener("keydown", this.noop, true);
        document.removeEventListener("click", this.outsideClick, true);
        document.removeEventListener("keydown", this.outsideKey, true);
    };
    /**
     * Add scroll event listenter if scrollableContainer is provided
     */
    Dropdown.prototype.addScrollEventListener = function () {
        var _this = this;
        if (this.scrollableContainer) {
            var container_1 = document.querySelector(this.scrollableContainer);
            if (container_1) {
                this.scroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(container_1, "scroll")
                    .subscribe(function () {
                    if (_this.isVisibleInContainer(_this.elementRef.nativeElement, container_1)) {
                        _utils_position__WEBPACK_IMPORTED_MODULE_5__["position"].setElement(_this.dropdownWrapper, _utils_position__WEBPACK_IMPORTED_MODULE_5__["position"].addOffset(_utils_position__WEBPACK_IMPORTED_MODULE_5__["position"].findAbsolute(_this.elementRef.nativeElement, _this.dropdownWrapper, "bottom")));
                    }
                    else {
                        _this.closeMenu();
                    }
                });
            }
        }
    };
    /**
     * Removes any `EventListeners` responsible for scroll functionality.
     */
    Dropdown.prototype.removeScrollEventListener = function () {
        if (this.scroll) {
            this.scroll.unsubscribe();
        }
    };
    /**
     * Controls toggling menu states between open/expanded and closed/collapsed.
     */
    Dropdown.prototype.toggleMenu = function () {
        if (this.menuIsClosed) {
            this.openMenu();
        }
        else {
            this.closeMenu();
        }
    };
    /**
     * Returns `true` if the `elem` is visible within the `container`.
     */
    Dropdown.prototype.isVisibleInContainer = function (elem, container) {
        var containerTop = container.scrollTop;
        var containerBottom = containerTop + container.offsetHeight;
        var elemTop = elem.offsetTop + elem.offsetHeight;
        var elemBottom = elemTop;
        if ((elemBottom <= containerBottom) && (elemTop >= containerTop)) {
            return true;
        }
        return false;
    };
    var Dropdown_1, _a, _b, _c, _d, _e, _f, _g;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Dropdown.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Dropdown.prototype, "displayValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Dropdown.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Dropdown.prototype, "appendToBody", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Dropdown.prototype, "appendInline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "scrollableContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Dropdown.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Dropdown.prototype, "menuButtonLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Dropdown.prototype, "selectedLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) === "function" && _a || Object)
    ], Dropdown.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) === "function" && _b || Object)
    ], Dropdown.prototype, "onClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) === "function" && _c || Object)
    ], Dropdown.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_abstract_dropdown_view_class__WEBPACK_IMPORTED_MODULE_4__["AbstractDropdownView"]),
        __metadata("design:type", typeof (_d = typeof _abstract_dropdown_view_class__WEBPACK_IMPORTED_MODULE_4__["AbstractDropdownView"] !== "undefined" && _abstract_dropdown_view_class__WEBPACK_IMPORTED_MODULE_4__["AbstractDropdownView"]) === "function" && _d || Object)
    ], Dropdown.prototype, "view", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("dropdownButton"),
        __metadata("design:type", Object)
    ], Dropdown.prototype, "dropdownButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("dropdownMenu"),
        __metadata("design:type", Object)
    ], Dropdown.prototype, "dropdownMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_e = typeof KeyboardEvent !== "undefined" && KeyboardEvent) === "function" && _e || Object]),
        __metadata("design:returntype", void 0)
    ], Dropdown.prototype, "onKeyDown", null);
    Dropdown = Dropdown_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-dropdown",
            template: "\n\t<div\n\t\tclass=\"bx--list-box\"\n\t\t[ngClass]=\"{'bx--dropdown--light': theme === 'light'}\">\n\t\t<button\n\t\t\ttype=\"button\"\n\t\t\t#dropdownButton\n\t\t\tclass=\"bx--list-box__field\"\n\t\t\t[ngClass]=\"{'a': !menuIsClosed}\"\n\t\t\t[attr.aria-expanded]=\"!menuIsClosed\"\n\t\t\t[attr.aria-disabled]=\"disabled\"\n\t\t\t(click)=\"toggleMenu()\"\n\t\t\t(blur)=\"onBlur()\"\n\t\t\t[disabled]=\"disabled\">\n\t\t\t<span class=\"bx--list-box__label\">{{getDisplayValue() | async}}</span>\n\t\t\t<div class=\"bx--list-box__menu-icon\" [ngClass]=\"{'bx--list-box__menu-icon--open': !menuIsClosed }\">\n\t\t\t\t<svg fill-rule=\"evenodd\" height=\"5\" role=\"img\" viewBox=\"0 0 10 5\" width=\"10\" alt=\"Open menu\" [attr.aria-label]=\"menuButtonLabel\">\n\t\t\t\t\t<title>{{menuButtonLabel}}</title>\n\t\t\t\t\t<path d=\"M0 0l5 4.998L10 0z\"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t</button>\n\t\t<div\n\t\t\t#dropdownMenu\n\t\t\t[ngClass]=\"{\n\t\t\t\t'drop-up': dropUp\n\t\t\t}\">\n\t\t\t<ng-content *ngIf=\"!menuIsClosed\"></ng-content>\n\t\t</div>\n\t</div>\n\t",
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Dropdown_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [typeof (_f = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _f || Object, typeof (_g = typeof _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_6__["I18n"] !== "undefined" && _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_6__["I18n"]) === "function" && _g || Object])
    ], Dropdown);
    return Dropdown;
}());



/***/ }),

/***/ "./src/dropdown/dropdown.module.ts":
/*!*****************************************!*\
  !*** ./src/dropdown/dropdown.module.ts ***!
  \*****************************************/
/*! exports provided: Dropdown, DropdownList, ScrollableList, AbstractDropdownView, ListItem, DropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownModule", function() { return DropdownModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _icon_static_icon_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../icon/static-icon.module */ "./src/icon/static-icon.module.ts");
/* harmony import */ var _dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown.component */ "./src/dropdown/dropdown.component.ts");
/* harmony import */ var _list_dropdown_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/dropdown-list.component */ "./src/dropdown/list/dropdown-list.component.ts");
/* harmony import */ var _scrollable_list_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scrollable-list.directive */ "./src/dropdown/scrollable-list.directive.ts");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _dropdown_component__WEBPACK_IMPORTED_MODULE_4__["Dropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownList", function() { return _list_dropdown_list_component__WEBPACK_IMPORTED_MODULE_5__["DropdownList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollableList", function() { return _scrollable_list_directive__WEBPACK_IMPORTED_MODULE_6__["ScrollableList"]; });

/* harmony import */ var _abstract_dropdown_view_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./abstract-dropdown-view.class */ "./src/dropdown/abstract-dropdown-view.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractDropdownView", function() { return _abstract_dropdown_view_class__WEBPACK_IMPORTED_MODULE_8__["AbstractDropdownView"]; });

/* harmony import */ var _list_item_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-item.interface */ "./src/dropdown/list-item.interface.ts");
/* harmony import */ var _list_item_interface__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_list_item_interface__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return _list_item_interface__WEBPACK_IMPORTED_MODULE_9__["ListItem"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    DropdownModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _dropdown_component__WEBPACK_IMPORTED_MODULE_4__["Dropdown"],
                _list_dropdown_list_component__WEBPACK_IMPORTED_MODULE_5__["DropdownList"],
                _scrollable_list_directive__WEBPACK_IMPORTED_MODULE_6__["ScrollableList"]
            ],
            exports: [
                _dropdown_component__WEBPACK_IMPORTED_MODULE_4__["Dropdown"],
                _list_dropdown_list_component__WEBPACK_IMPORTED_MODULE_5__["DropdownList"],
                _scrollable_list_directive__WEBPACK_IMPORTED_MODULE_6__["ScrollableList"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _icon_static_icon_module__WEBPACK_IMPORTED_MODULE_3__["StaticIconModule"],
                _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_7__["I18nModule"]
            ]
        })
    ], DropdownModule);
    return DropdownModule;
}());



/***/ }),

/***/ "./src/dropdown/dropdown.stories.ts":
/*!******************************************!*\
  !*** ./src/dropdown/dropdown.stories.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-notes */ "./node_modules/@storybook/addon-notes/dist/index.js");
/* harmony import */ var _storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-actions */ "./node_modules/@storybook/addon-actions/dist/index.js");
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ */ "./src/index.ts");
/* harmony import */ var _storybook_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../.storybook/bootstrap.module */ "./.storybook/bootstrap.module.ts");





// needed to init ngx translate and load the translations

Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Dropdown", module)
    .addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [
        ___WEBPACK_IMPORTED_MODULE_4__["DropdownModule"],
        _storybook_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__["BootstrapModule"]
    ]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t<ibm-dropdown\n\t\t\tplaceholder=\"Select\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t(selected)=\"selected($event)\"\n\t\t\t(onClose)=\"onClose($event)\">\n\t\t\t<ibm-dropdown-list [items]=\"items\"></ibm-dropdown-list>\n\t\t</ibm-dropdown>\n\t",
    props: {
        disabled: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["boolean"])("disabled", false),
        items: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["object"])("items", [
            { content: "one" },
            { content: "two" },
            { content: "three" },
            { content: "four" }
        ]),
        selected: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__["action"])("Selected fired for dropdown"),
        onClose: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__["action"])("Dropdown closed")
    }
}); })
    .add("Light", function () { return ({
    template: "\n\t\t<ibm-dropdown\n\t\t\ttheme=\"light\"\n\t\t\tplaceholder=\"Select\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t(selected)=\"selected($event)\"\n\t\t\t(onClose)=\"onClose($event)\">\n\t\t\t<ibm-dropdown-list [items]=\"items\"></ibm-dropdown-list>\n\t\t</ibm-dropdown>\n\t",
    props: {
        disabled: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["boolean"])("disabled", false),
        items: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["object"])("items", [
            { content: "one" },
            { content: "two" },
            { content: "three" },
            { content: "four" }
        ]),
        selected: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__["action"])("Selected fired for dropdown"),
        onClose: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__["action"])("Dropdown closed")
    }
}); })
    .add("Multi-select", Object(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__["withNotes"])({ text: "Notes on multi select" })(function () { return ({
    template: "\n\t\t<ibm-dropdown\n\t\t\ttype=\"multi\"\n\t\t\tplaceholder=\"Multi-select\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t(selected)=\"selected($event)\"\n\t\t\t(onClose)=\"onClose($event)\">\n\t\t\t<ibm-dropdown-list [items]=\"items\"></ibm-dropdown-list>\n\t\t</ibm-dropdown>\n\t",
    props: {
        disabled: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["boolean"])("disabled", false),
        items: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["object"])("items", [
            { content: "one" },
            { content: "two" },
            { content: "three" },
            { content: "four" }
        ]),
        selected: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__["action"])("Selected fired for multi-select dropdown"),
        onClose: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__["action"])("Multi-select dropdown closed")
    }
}); }))
    .add("With ngModel", function () { return ({
    template: "\n\t\t<ibm-dropdown\n\t\t\tplaceholder=\"Select\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[(ngModel)]=\"model\"\n\t\t\tvalue=\"content\">\n\t\t\t<ibm-dropdown-list [items]=\"items\"></ibm-dropdown-list>\n\t\t</ibm-dropdown>\n\t\t<span>{{model | json}}</span>\n\t\t",
    props: {
        disabled: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["boolean"])("disabled", false),
        items: [
            { content: "one" },
            { content: "two" },
            { content: "three" },
            { content: "four" }
        ],
        model: null
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/dropdown/dropdowntools.ts":
/*!***************************************!*\
  !*** ./src/dropdown/dropdowntools.ts ***!
  \***************************************/
/*! exports provided: watchFocusJump, treetools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchFocusJump", function() { return watchFocusJump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treetools", function() { return treetools; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


/**
 * returns an observable bound to keydown events that
 * filters to a single element where the first letter of
 * it's textContent matches the key pressed
 *
 * @param {HTMLElement} target element to watch
 * @param {Array<HTMLElement>} elements elements to search
 */
function watchFocusJump(target, elements) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, "keydown")
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (ev) {
        var el = elements.find(function (itemEl) {
            return itemEl.textContent.trim().toLowerCase().startsWith(ev.key);
        });
        if (el) {
            return el;
        }
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (el) { return !!el; }));
}
/** bundle of functions to aid in manipulating tree structures */
var treetools = {
    /** finds an item in a set of items and returns the item and path to the item as an array */
    find: function (items, itemToFind, path) {
        if (path === void 0) { path = []; }
        var found;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var i = items_1[_i];
            if (i === itemToFind) {
                path.push(i);
                found = i;
            }
            if (i.items && !found) {
                path.push(i);
                found = this.find(i.items, itemToFind, path).found;
                if (!found) {
                    path = [];
                }
            }
        }
        return { found: found, path: path };
    }
};


/***/ }),

/***/ "./src/dropdown/list-item.interface.ts":
/*!*********************************************!*\
  !*** ./src/dropdown/list-item.interface.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/dropdown/list/dropdown-list.component.ts":
/*!******************************************************!*\
  !*** ./src/dropdown/list/dropdown-list.component.ts ***!
  \******************************************************/
/*! exports provided: DropdownList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownList", function() { return DropdownList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_dropdown_view_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../abstract-dropdown-view.class */ "./src/dropdown/abstract-dropdown-view.class.ts");
/* harmony import */ var _dropdowntools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../dropdowntools */ "./src/dropdown/dropdowntools.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * ```html
 * <ibm-dropdown-list [items]="listItems"></ibm-dropdown-list>
 * ```
 * ```typescript
 * listItems = [
 * 	{
 * 		content: "item one",
 * 		selected: false
 * 	},
 * 	{
 * 		content: "item two",
 * 		selected: false,
 * 	},
 * 	{
 * 		content: "item three",
 * 		selected: false
 * 	},
 * 	{
 * 		content: "item four",
 * 		selected: false
 * 	}
 * ];
 * ```
 */
var DropdownList = /** @class */ (function () {
    /**
     * Creates an instance of `DropdownList`.
     */
    function DropdownList(elementRef) {
        this.elementRef = elementRef;
        /**
         * The list items belonging to the `DropdownList`.
         */
        this.items = [];
        /**
         * Template to bind to items in the `DropdownList` (optional).
         */
        this.listTpl = null;
        /**
         * Event to emit selection of a list item within the `DropdownList`.
         */
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Defines whether or not the `DropdownList` supports selecting multiple items as opposed to single
         * item selection.
         */
        this.type = "single";
        /**
         * Defines the rendering size of the `DropdownList` input component.
         */
        this.size = "md";
        /**
         * Holds the list of items that will be displayed in the `DropdownList`.
         * It differs from the the complete set of items when filtering is used (but
         * it is always a subset of the total items in `DropdownList`).
         */
        this.displayItems = [];
        /**
         * Maintains the index for the selected item within the `DropdownList`.
         */
        this.index = -1;
    }
    DropdownList_1 = DropdownList;
    /**
     * Updates list when changes occur within the items belonging to the `DropdownList`.
     */
    DropdownList.prototype.ngOnChanges = function (changes) {
        if (changes.items) {
            this.updateList(changes.items.currentValue);
        }
    };
    /**
     * Retrieves array of list items and index of the selected item after view has rendered.
     * Additionally, any Observables for the `DropdownList` are initialized.
     */
    DropdownList.prototype.ngAfterViewInit = function () {
        this.listElementList = Array.from(this.list.nativeElement.querySelectorAll("li"));
        this.index = this.items.findIndex(function (item) { return item.selected; });
        this.setupFocusObservable();
    };
    /**
     * Removes any Observables on destruction of the component.
     */
    DropdownList.prototype.ngOnDestroy = function () {
        if (this.focusJump) {
            this.focusJump.unsubscribe();
        }
    };
    /**
     * Updates the displayed list of items and then retrieves the most current properties for the `DropdownList` from the DOM.
     */
    DropdownList.prototype.updateList = function (items) {
        var _this = this;
        this.items = items.map(function (item) { return Object.assign({}, item); });
        this.displayItems = this.items;
        setTimeout(function () {
            _this.listElementList = Array.from(_this.list.nativeElement.querySelectorAll("li"));
        }, 0);
        this.index = this.items.findIndex(function (item) { return item.selected; });
        this.setupFocusObservable();
        setTimeout(function () {
            if (_this.type === "single") {
                _this.select.emit({ item: _this.items.find(function (item) { return item.selected; }) });
            }
            else {
                _this.select.emit(_this.getSelected() || []);
            }
        });
    };
    /**
     * Filters the items being displayed in the DOM list.
     */
    DropdownList.prototype.filterBy = function (query) {
        if (query === void 0) { query = ""; }
        if (query) {
            this.displayItems = this.items.filter(function (item) { return item.content.toLowerCase().includes(query.toLowerCase()); });
        }
        else {
            this.displayItems = this.items;
        }
    };
    /**
     * Initializes (or re-initializes) the Observable that handles switching focus to an element based on
     * key input matching the first letter of the item in the list.
     */
    DropdownList.prototype.setupFocusObservable = function () {
        if (this.focusJump) {
            this.focusJump.unsubscribe();
        }
        var elList = Array.from(this.list.nativeElement.querySelectorAll("li"));
        this.focusJump = Object(_dropdowntools__WEBPACK_IMPORTED_MODULE_2__["watchFocusJump"])(this.list.nativeElement, elList)
            .subscribe(function (el) {
            el.focus();
        });
    };
    /**
     * Returns the `ListItem` that is subsequent to the selected item in the `DropdownList`.
     */
    DropdownList.prototype.getNextItem = function () {
        if (this.index < this.items.length - 1) {
            this.index++;
        }
        return this.items[this.index];
    };
    /**
     * Returns `true` if the selected item is not the last item in the `DropdownList`.
     */
    DropdownList.prototype.hasNextElement = function () {
        if (this.index < this.items.length - 1) {
            return true;
        }
        return false;
    };
    /**
     * Returns the `HTMLElement` for the item that is subsequent to the selected item.
     */
    DropdownList.prototype.getNextElement = function () {
        if (this.index < this.items.length - 1) {
            this.index++;
        }
        var elem = this.listElementList[this.index];
        var item = this.items[this.index];
        if (item.disabled) {
            return this.getNextElement();
        }
        return elem;
    };
    /**
     * Returns the `ListItem` that precedes the selected item within `DropdownList`.
     */
    DropdownList.prototype.getPrevItem = function () {
        if (this.index > 0) {
            this.index--;
        }
        return this.items[this.index];
    };
    /**
     * Returns `true` if the selected item is not the first in the list.
     */
    DropdownList.prototype.hasPrevElement = function () {
        if (this.index > 0) {
            return true;
        }
        return false;
    };
    /**
     * Returns the `HTMLElement` for the item that precedes the selected item.
     */
    DropdownList.prototype.getPrevElement = function () {
        if (this.index > 0) {
            this.index--;
        }
        var elem = this.listElementList[this.index];
        var item = this.items[this.index];
        if (item.disabled) {
            return this.getPrevElement();
        }
        return elem;
    };
    /**
     * Returns the `ListItem` that is selected within `DropdownList`.
     */
    DropdownList.prototype.getCurrentItem = function () {
        if (this.index < 0) {
            return this.items[0];
        }
        return this.items[this.index];
    };
    /**
     * Returns the `HTMLElement` for the item that is selected within the `DropdownList`.
     */
    DropdownList.prototype.getCurrentElement = function () {
        if (this.index < 0) {
            return this.listElementList[0];
        }
        return this.listElementList[this.index];
    };
    /**
     * Returns a list containing the selected item(s) in the `DropdownList`.
     */
    DropdownList.prototype.getSelected = function () {
        var selected = this.items.filter(function (item) { return item.selected; });
        if (selected.length === 0) {
            return null;
        }
        return selected;
    };
    /**
     * Transforms array input list of items to the correct state by updating the selected item(s).
     */
    DropdownList.prototype.propagateSelected = function (value) {
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var newItem = value_1[_i];
            // copy the item
            var tempNewItem = Object.assign({}, newItem);
            // deleted selected because it's what we _want_ to change
            delete tempNewItem.selected;
            // stringify for compare
            tempNewItem = JSON.stringify(tempNewItem);
            for (var _a = 0, _b = this.items; _a < _b.length; _a++) {
                var oldItem = _b[_a];
                var tempOldItem = Object.assign({}, oldItem);
                delete tempOldItem.selected;
                tempOldItem = JSON.stringify(tempOldItem);
                // do the compare
                if (tempOldItem.includes(tempNewItem)) {
                    // oldItem = Object.assign(oldItem, newItem);
                    oldItem.selected = newItem.selected;
                }
                else {
                    oldItem.selected = false;
                }
            }
        }
    };
    /**
     * Initalizes focus in the list, effectivly a wrapper for `getCurrentElement().focus()`
     */
    DropdownList.prototype.initFocus = function () {
        this.getCurrentElement().focus();
    };
    /**
     * Manages the keyboard accessiblity for navigation and selection within a `DropdownList`.
     */
    DropdownList.prototype.doKeyDown = function (event, item) {
        if (event.key && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            this.doClick(event, item);
        }
        else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            // this.checkScrollArrows();
            if (event.key === "ArrowDown" && this.hasNextElement()) {
                this.getNextElement().focus();
            }
            else if (event.key === "ArrowUp") {
                if (this.hasPrevElement()) {
                    this.getPrevElement().focus();
                }
                else if (this.getSelected()) {
                    this.clearSelected.nativeElement.focus();
                }
            }
            if (event.shiftKey) {
                event.target.click();
            }
        }
    };
    /**
     * Emits the selected item or items after a mouse click event has occurred.
     */
    DropdownList.prototype.doClick = function (event, item) {
        if (!item.disabled) {
            item.selected = !item.selected;
            if (this.type === "single") {
                // reset the selection
                for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                    var otherItem = _a[_i];
                    if (item !== otherItem) {
                        otherItem.selected = false;
                    }
                }
                this.select.emit({ item: item });
            }
            else {
                // emit an array of selected items
                this.select.emit(this.getSelected());
            }
            this.index = this.items.indexOf(item);
        }
    };
    var DropdownList_1, _a, _b, _c, _d, _e, _f;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" && _a || Object)
    ], DropdownList.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownList.prototype, "listTpl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) === "function" && _c || Object)
    ], DropdownList.prototype, "select", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("list"),
        __metadata("design:type", typeof (_d = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _d || Object)
    ], DropdownList.prototype, "list", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("clearSelected"),
        __metadata("design:type", typeof (_e = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _e || Object)
    ], DropdownList.prototype, "clearSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DropdownList.prototype, "type", void 0);
    DropdownList = DropdownList_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-dropdown-list",
            template: "\n\t\t<ul\n\t\t\t#list\n\t\t\trole=\"listbox\"\n\t\t\tclass=\"bx--list-box__menu\">\n\t\t\t<li tabindex=\"{{item.disabled? -1 : 0}}\"\n\t\t\t\trole=\"option\"\n\t\t\t\t*ngFor=\"let item of displayItems\"\n\t\t\t\t(click)=\"doClick($event, item)\"\n\t\t\t\t(keydown)=\"doKeyDown($event, item)\"\n\t\t\t\tclass=\"bx--list-box__menu-item\"\n\t\t\t\t[ngClass]=\"{\n\t\t\t\t\tselected: item.selected,\n\t\t\t\t\tdisabled: item.disabled\n\t\t\t\t}\">\n\t\t\t\t<div\n\t\t\t\t\t*ngIf=\"!listTpl && type === 'multi'\"\n\t\t\t\t\tclass=\"bx--form-item bx--checkbox-wrapper\">\n\t\t\t\t\t<input\n\t\t\t\t\t\tclass=\"bx--checkbox\"\n\t\t\t\t\t\ttype=\"checkbox\"\n\t\t\t\t\t\t[checked]=\"item.selected\"\n\t\t\t\t\t\t[disabled]=\"item.disabled\"\n\t\t\t\t\t\t(click)=\"doClick($event, item)\"\n\t\t\t\t\t\ttabindex=\"-1\">\n\t\t\t\t\t<label class=\"bx--checkbox-label\">{{item.content}}</label>\n\t\t\t\t</div>\n\t\t\t\t<ng-container *ngIf=\"!listTpl && type === 'single'\">{{item.content}}</ng-container>\n\t\t\t\t<ng-template\n\t\t\t\t\t*ngIf=\"listTpl\"\n\t\t\t\t\t[ngTemplateOutletContext]=\"{item: item}\"\n\t\t\t\t\t[ngTemplateOutlet]=\"listTpl\">\n\t\t\t\t</ng-template>\n\t\t\t</li>\n\t\t</ul>",
            providers: [
                {
                    provide: _abstract_dropdown_view_class__WEBPACK_IMPORTED_MODULE_1__["AbstractDropdownView"],
                    useExisting: DropdownList_1
                }
            ]
        }) // conceptually this extends list-group, but we dont have to
        ,
        __metadata("design:paramtypes", [typeof (_f = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _f || Object])
    ], DropdownList);
    return DropdownList;
}());



/***/ }),

/***/ "./src/dropdown/scrollable-list.directive.ts":
/*!***************************************************!*\
  !*** ./src/dropdown/scrollable-list.directive.ts ***!
  \***************************************************/
/*! exports provided: ScrollableList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollableList", function() { return ScrollableList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollableList = /** @class */ (function () {
    function ScrollableList(elementRef) {
        this.elementRef = elementRef;
        /**
         * Optional target list to scroll
         */
        this.nScrollableList = null;
        /**
         * Enables or disables scrolling for the whole directive
         */
        this.scrollEnabled = true;
        /**
         * How many lines to scroll by each time `wheel` fires
         * Defaults to 10 - based on testing this isn't too fast or slow on any platform
         */
        this.scrollBy = 10;
        this.canScrollUp = false;
        this.canScrollDown = false;
        this.list = this.elementRef.nativeElement;
    }
    ScrollableList.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.scrollEnabled) {
            if (changes.scrollEnabled.currentValue) {
                this.list.style.overflow = "hidden";
                this.scrollUpTarget.style.display = "flex";
                this.scrollDownTarget.style.display = "flex";
                this.canScrollUp = true;
                this.canScrollDown = true;
                this.updateScrollHeight();
                this.checkScrollArrows();
                setTimeout(function () {
                    _this.checkScrollArrows();
                });
            }
            else {
                this.scrollUpTarget.style.display = "none";
                this.scrollDownTarget.style.display = "none";
                this.canScrollUp = false;
                this.canScrollDown = false;
                this.list.style.height = null;
                this.list.style.overflow = null;
                clearInterval(this.hoverScrollInterval);
            }
        }
    };
    ScrollableList.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.nScrollableList) {
            this.list = this.elementRef.nativeElement.querySelector(this.nScrollableList);
        }
        this.scrollUpTarget.addEventListener("mouseover", function () { return _this.onHoverUp(true); });
        this.scrollUpTarget.addEventListener("mouseout", function () { return _this.onHoverUp(false); });
        this.scrollDownTarget.addEventListener("mouseover", function () { return _this.onHoverDown(true); });
        this.scrollDownTarget.addEventListener("mouseout", function () { return _this.onHoverDown(false); });
    };
    ScrollableList.prototype.updateScrollHeight = function () {
        if (this.scrollEnabled) {
            var container = this.elementRef.nativeElement.parentElement;
            var containerRect = container.getBoundingClientRect();
            var innerHeightDiff = this.list.getBoundingClientRect().top - containerRect.top;
            var outerHeightDiff = containerRect.height - (containerRect.bottom - window.innerHeight);
            // 40 gives us some padding between the bottom of the list,
            // the bottom of the window, and the scroll down button
            var height = outerHeightDiff - innerHeightDiff - 40;
            this.list.style.height = height + "px";
        }
    };
    ScrollableList.prototype.checkScrollArrows = function () {
        var scrollUpHeight = this.scrollUpTarget.offsetHeight;
        var scrollDownHeight = this.scrollDownTarget.offsetHeight;
        if (this.list.scrollTop === 0) {
            if (this.canScrollUp) {
                this.list.style.height = parseInt(this.list.style.height, 10) + scrollUpHeight + "px";
            }
            this.scrollUpTarget.style.display = "none";
            this.canScrollUp = false;
        }
        else if (this.list.scrollTop === this.list.scrollTopMax) {
            if (this.canScrollDown) {
                this.list.style.height = parseInt(this.list.style.height, 10) + scrollDownHeight + "px";
            }
            this.scrollDownTarget.style.display = "none";
            this.canScrollDown = false;
        }
        else {
            if (!this.canScrollUp) {
                this.list.style.height = parseInt(this.list.style.height, 10) - scrollUpHeight + "px";
            }
            if (!this.canScrollDown) {
                this.list.style.height = parseInt(this.list.style.height, 10) - scrollDownHeight + "px";
            }
            this.scrollUpTarget.style.display = "flex";
            this.scrollDownTarget.style.display = "flex";
            this.canScrollUp = true;
            this.canScrollDown = true;
        }
    };
    ScrollableList.prototype.onWheel = function (event) {
        if (event.deltaY < 0) {
            this.list.scrollTop -= this.scrollBy;
        }
        else {
            this.list.scrollTop += this.scrollBy;
        }
        // only prevent the parent/window from scrolling if we can scroll
        if (!(this.list.scrollTop === this.list.scrollTopMax || this.list.scrollTop === 0)) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.checkScrollArrows();
    };
    ScrollableList.prototype.onTouchStart = function (event) {
        if (event.touches[0]) {
            this.lastTouch = event.touches[0].clientY;
        }
    };
    ScrollableList.prototype.onTouchMove = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.touches[0]) {
            var touch = event.touches[0];
            this.list.scrollTop += this.lastTouch - touch.clientY;
            this.lastTouch = touch.clientY;
            this.checkScrollArrows();
        }
    };
    ScrollableList.prototype.hoverScrollBy = function (hovering, amount) {
        var _this = this;
        if (hovering) {
            this.hoverScrollInterval = setInterval(function () {
                _this.list.scrollTop += amount;
                _this.checkScrollArrows();
            }, 1);
        }
        else {
            clearInterval(this.hoverScrollInterval);
        }
    };
    ScrollableList.prototype.onHoverUp = function (hovering) {
        // how many px/lines to scroll by on hover
        // 3 is just a random number that felt good
        // 1 and 2 are too slow, 4 works but it might be a tad fast
        this.hoverScrollBy(hovering, -3);
    };
    ScrollableList.prototype.onHoverDown = function (hovering) {
        this.hoverScrollBy(hovering, 3);
    };
    ScrollableList.prototype.onKeyDown = function (event) {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            this.checkScrollArrows();
        }
    };
    var _a, _b, _c;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ScrollableList.prototype, "nScrollableList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScrollableList.prototype, "scrollEnabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof HTMLElement !== "undefined" && HTMLElement) === "function" && _a || Object)
    ], ScrollableList.prototype, "scrollUpTarget", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_b = typeof HTMLElement !== "undefined" && HTMLElement) === "function" && _b || Object)
    ], ScrollableList.prototype, "scrollDownTarget", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScrollableList.prototype, "scrollBy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("wheel", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollableList.prototype, "onWheel", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("touchstart", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollableList.prototype, "onTouchStart", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("touchmove", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollableList.prototype, "onTouchMove", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollableList.prototype, "onKeyDown", null);
    ScrollableList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[ibmScrollableList]",
            exportAs: "scrollable-list"
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _c || Object])
    ], ScrollableList);
    return ScrollableList;
}());



/***/ }),

/***/ "./src/forms/forms.module.ts":
/*!***********************************!*\
  !*** ./src/forms/forms.module.ts ***!
  \***********************************/
/*! exports provided: CheckboxModule, ToggleModule, RadioModule, InputModule, ButtonModule, NFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NFormsModule", function() { return NFormsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../checkbox/checkbox.module */ "./src/checkbox/checkbox.module.ts");
/* harmony import */ var _toggle_toggle_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toggle/toggle.module */ "./src/toggle/toggle.module.ts");
/* harmony import */ var _radio_radio_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../radio/radio.module */ "./src/radio/radio.module.ts");
/* harmony import */ var _input_input_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../input/input.module */ "./src/input/input.module.ts");
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../button/button.module */ "./src/button/button.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleModule", function() { return _toggle_toggle_module__WEBPACK_IMPORTED_MODULE_4__["ToggleModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioModule", function() { return _radio_radio_module__WEBPACK_IMPORTED_MODULE_5__["RadioModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputModule", function() { return _input_input_module__WEBPACK_IMPORTED_MODULE_6__["InputModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return _button_button_module__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// modules



// imports





// exports





var NFormsModule = /** @class */ (function () {
    function NFormsModule() {
    }
    NFormsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"],
                _toggle_toggle_module__WEBPACK_IMPORTED_MODULE_4__["ToggleModule"],
                _radio_radio_module__WEBPACK_IMPORTED_MODULE_5__["RadioModule"],
                _input_input_module__WEBPACK_IMPORTED_MODULE_6__["InputModule"],
                _button_button_module__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"],
                _toggle_toggle_module__WEBPACK_IMPORTED_MODULE_4__["ToggleModule"],
                _radio_radio_module__WEBPACK_IMPORTED_MODULE_5__["RadioModule"],
                _input_input_module__WEBPACK_IMPORTED_MODULE_6__["InputModule"],
                _button_button_module__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"]
            ]
        })
    ], NFormsModule);
    return NFormsModule;
}());



/***/ }),

/***/ "./src/i18n/en.json":
/*!**************************!*\
  !*** ./src/i18n/en.json ***!
  \**************************/
/*! exports provided: BANNER, CALENDAR, CODE_SNIPPET, DIALOG, DROPDOWN, LOADING, MODAL, NOTIFICATION, OVERFLOW_MENU, SEARCH, SIDENAV, PAGINATION, TABLE, TABS, TOPNAV, default */
/***/ (function(module) {

module.exports = {"BANNER":{"CLOSE_BUTTON":"Close alert banner"},"CALENDAR":{"MONTHS":{"JANUARY":"January","FEBRUARY":"February","MARCH":"March","APRIL":"April","MAY":"May","JUNE":"June","JULY":"July","AUGUST":"August","SEPTEMBER":"September","OCTOBER":"October","NOVEMBER":"November","DECEMBER":"December"},"SHORTWEEKDAYS":{"SUNDAY":"Sun","MONDAY":"Mon","TUESDAY":"Tue","WEDNESDAY":"Wed","THURSDAY":"Thu","FRIDAY":"Fri","SATURDAY":"Sat"},"QUARTERS":[{"name":"Q1","months":"January-March"},{"name":"Q2","months":"April-June"},{"name":"Q3","months":"July-September"},{"name":"Q4","months":"October-December"}]},"CODE_SNIPPET":{"CODE_SNIPPET_TEXT":"Code Snippet Text","SHOW_MORE":"Show more","SHOW_LESS":"Show less","SHOW_MORE_ICON":"Show more icon","COPY_CODE":"Copy code","COPIED":"Copied!"},"DIALOG":{"POPOVER":{"CLOSE":"Close popover"}},"DROPDOWN":{"OPEN":"Open menu","SELECTED":"selected","CLEAR":"Clear selection","FILTER":{"SELECTED_ONLY":"Show selected only","SEARCH":"Search","NO_RESULTS":"No search results","RESET_SEARCH":"Reset search"}},"LOADING":{"TITLE":"Loading"},"MODAL":{"CLOSE":"Close modal"},"NOTIFICATION":{"CLOSE_BUTTON":"Close alert notification"},"OVERFLOW_MENU":{"OVERFLOW":"Overflow"},"SEARCH":{"LABEL":"Search","PLACEHOLDER":"Search","CLEAR_BUTTON":"Clear search input"},"SIDENAV":{"NAV_LABEL":"Side navigation"},"PAGINATION":{"ITEMS_PER_PAGE":"Items per page:","OPEN_LIST_OF_OPTIONS":"Open list of options","BACKWARD":"Backward","FORWARD":"Forward"},"TABLE":{"GO_TO_PAGE":"Go to page","PREVIOUS_PAGE":"Previous page","NEXT_PAGE":"Next page","PREVIOUS_3":"Scroll to previous 3 pages","NEXT_3":"Scroll to next 3 pages","FILTER":"Filter","END_OF_DATA":"You've reached the end of your content","SCROLL_TOP":"Scroll to top"},"TABS":{"BUTTON_ARIA_LEFT":"Go to the previous tab","BUTTON_ARIA_RIGHT":"Go to the next tab"},"TOPNAV":{"SKIP_TO_MAIN":"Skip to main content","HAMBURGER":{"TOGGLE":"Toggle primary navigation menu","TITLE":"Primary navigation menu"}}};

/***/ }),

/***/ "./src/i18n/i18n.module.ts":
/*!*********************************!*\
  !*** ./src/i18n/i18n.module.ts ***!
  \*********************************/
/*! exports provided: I18n, I18N_SERVICE_PROVIDER_FACTORY, I18N_SERVICE_PROVIDER, I18nModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_SERVICE_PROVIDER_FACTORY", function() { return I18N_SERVICE_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_SERVICE_PROVIDER", function() { return I18N_SERVICE_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nModule", function() { return I18nModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n.service */ "./src/i18n/i18n.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18n", function() { return _i18n_service__WEBPACK_IMPORTED_MODULE_1__["I18n"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// either provides a new instance of ModalPlaceholderService, or returns the parent
function I18N_SERVICE_PROVIDER_FACTORY(parentService) {
    return parentService || new _i18n_service__WEBPACK_IMPORTED_MODULE_1__["I18n"]();
}
// placholder service *must* be a singleton to ensure the placeholder viewref is accessible globally
var I18N_SERVICE_PROVIDER = {
    provide: _i18n_service__WEBPACK_IMPORTED_MODULE_1__["I18n"],
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _i18n_service__WEBPACK_IMPORTED_MODULE_1__["I18n"]]],
    useFactory: I18N_SERVICE_PROVIDER_FACTORY
};
var I18nModule = /** @class */ (function () {
    function I18nModule() {
    }
    I18nModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                _i18n_service__WEBPACK_IMPORTED_MODULE_1__["I18n"],
                I18N_SERVICE_PROVIDER
            ]
        })
    ], I18nModule);
    return I18nModule;
}());



/***/ }),

/***/ "./src/i18n/i18n.service.ts":
/*!**********************************!*\
  !*** ./src/i18n/i18n.service.ts ***!
  \**********************************/
/*! exports provided: I18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18n", function() { return I18n; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EN = __webpack_require__(/*! ./en.json */ "./src/i18n/en.json");
var I18n = /** @class */ (function () {
    function I18n() {
        this.translationStrings = EN;
    }
    I18n.prototype.set = function (strings) {
        this.translationStrings = Object.assign({}, EN, strings);
    };
    I18n.prototype.get = function () {
        return this.translationStrings;
    };
    I18n = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], I18n);
    return I18n;
}());



/***/ }),

/***/ "./src/icon/icon.component.ts":
/*!************************************!*\
  !*** ./src/icon/icon.component.ts ***!
  \************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _icon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.service */ "./src/icon/icon.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * `n-icon` pulls the icon from the loaded sprite, and renders it at the specified size.
 * Under the hood, `n-icon` generates code similar to the following:
 * ```
 * <svg class="icon" width="30" height="30"><use href="#alert_30"></use></svg>
 * ```
 */
var Icon = /** @class */ (function () {
    /**
     * Initialize the component
     *
     * @param {ElementRef} elementRef
     */
    function Icon(elementRef, iconService) {
        this.elementRef = elementRef;
        this.iconService = iconService;
        /** accepts color strings */
        this.color = "dark";
        /** accepts abbreviated size strings */
        this.size = "md";
        /** map size strings to numeric values */
        this.sizeMap = {
            "xs": 14,
            "sm": 16,
            "md": 20,
            "lg": 30
        };
        this.spriteLoadingSubscription = null;
    }
    Object.defineProperty(Icon.prototype, "classList", {
        /**
         * Pass down `classList` from host element.
         */
        get: function () {
            return this.elementRef.nativeElement.classList;
        },
        enumerable: true,
        configurable: true
    });
    Icon.prototype.ngAfterViewInit = function () {
        var _this = this;
        var root = this.elementRef.nativeElement;
        var iconPromise = this.iconService.getIcon(this.icon, this.sizeMap[this.size]);
        iconPromise.then(function (icon) {
            root.innerHTML = "";
            icon.classList.add(_this.buildMatterClass());
            if (_this.classList.toString() !== "") {
                for (var _i = 0, _a = _this.classList; _i < _a.length; _i++) {
                    var className = _a[_i];
                    icon.classList.add(className);
                }
            }
            root.appendChild(icon);
        });
    };
    /**
     * Create a class name based on @Input() `color` and `size`.
     */
    Icon.prototype.buildMatterClass = function () {
        if (this.color === "dark" && this.size !== "md") {
            return "icon--" + this.size;
        }
        else {
            return "icon" + (this.color !== "dark" ? "--" + this.color : "") + (this.color !== "dark" && this.size !== "md" ? "-" + this.size : "");
        }
    };
    var _a, _b;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Icon.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Icon.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Icon.prototype, "size", void 0);
    Icon = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-icon",
            template: "",
            providers: [_icon_service__WEBPACK_IMPORTED_MODULE_1__["IconService"]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof _icon_service__WEBPACK_IMPORTED_MODULE_1__["IconService"] !== "undefined" && _icon_service__WEBPACK_IMPORTED_MODULE_1__["IconService"]) === "function" && _b || Object])
    ], Icon);
    return Icon;
}());



/***/ }),

/***/ "./src/icon/icon.module.ts":
/*!*********************************!*\
  !*** ./src/icon/icon.module.ts ***!
  \*********************************/
/*! exports provided: StaticIconModule, Icon, IconService, Sprite, IconModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconModule", function() { return IconModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _static_icon_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static-icon.module */ "./src/icon/static-icon.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticIconModule", function() { return _static_icon_module__WEBPACK_IMPORTED_MODULE_3__["StaticIconModule"]; });

/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon.component */ "./src/icon/icon.component.ts");
/* harmony import */ var _sprite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sprite.component */ "./src/icon/sprite.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icon_component__WEBPACK_IMPORTED_MODULE_4__["Icon"]; });

/* harmony import */ var _icon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.service */ "./src/icon/icon.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconService", function() { return _icon_service__WEBPACK_IMPORTED_MODULE_6__["IconService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return _sprite_component__WEBPACK_IMPORTED_MODULE_5__["Sprite"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var IconModule = /** @class */ (function () {
    function IconModule() {
    }
    IconModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _icon_component__WEBPACK_IMPORTED_MODULE_4__["Icon"],
                _sprite_component__WEBPACK_IMPORTED_MODULE_5__["Sprite"]
            ],
            exports: [
                _icon_component__WEBPACK_IMPORTED_MODULE_4__["Icon"],
                _sprite_component__WEBPACK_IMPORTED_MODULE_5__["Sprite"]
            ],
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _static_icon_module__WEBPACK_IMPORTED_MODULE_3__["StaticIconModule"]]
        })
    ], IconModule);
    return IconModule;
}());



/***/ }),

/***/ "./src/icon/icon.service.ts":
/*!**********************************!*\
  !*** ./src/icon/icon.service.ts ***!
  \**********************************/
/*! exports provided: IconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconService", function() { return IconService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Service that provides static methods for globally configuring icon requests,
 * and instance methods for requesting sprites and converting sizes to pixel values
 */
var IconService = /** @class */ (function () {
    /** get an instance of the Http service */
    function IconService(http) {
        this.http = http;
    }
    IconService_1 = IconService;
    /**
     * Sets the baseURL
     *
     * By default we use http://peretz-icons.mybluemix.net/ for sprites - this is sufficient for prototyping,
     * but for development and production it is recommended to build streamlined sprites and host them statically.
     *
     * @param {string} url
     */
    IconService.setBaseURL = function (url) {
        IconService_1.baseURL = url;
        return IconService_1;
    };
    /**
     * sets the caching level for sprites.
     * "none" disables caching (sprites will always be requested again)
     * "simple" uses a static Map as a naive cache
     *
     * @param {"none" | "simple"} level
     */
    IconService.setCacheLevel = function (level) {
        IconService_1.cacheLevel = level;
        return IconService_1;
    };
    /**
     * Responsible for fetching sprites from the `baseURL`
     *
     * @param {string} name name of the sprite to request
     */
    IconService.prototype.doSpriteRequest = function (name) {
        IconService_1.runningRequests++;
        return this.http.get("" + IconService_1.baseURL + name + ".svg", { responseType: "text" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return IconService_1.runningRequests--; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
            var error = "failed to load sprite " + name + ", check that the server is available and baseURL is correct";
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    /**
     * Returns a promise that will resolve to a clone of the requested icon
     *
     * @param name name of the icon
     * @param size size of the icon as an IconSize
     */
    IconService.prototype.getIcon = function (name, size) {
        // resolver either calls the provided Promise resolution function with the loaded icon
        // or returns false to indicate the sprite with the required icon has yet to load
        var resolver = function (resolve) {
            var icon = document.querySelector("symbol#" + name + "_" + size);
            if (icon) {
                var clone = icon.firstElementChild.cloneNode(true);
                return resolve(clone);
            }
            return false;
        };
        var loadedIcon = new Promise(function (resolve, reject) {
            if (!resolver(resolve)) {
                IconService_1.spriteLoaded.subscribe(function () {
                    resolver(resolve);
                });
            }
        });
        return loadedIcon;
    };
    /**
     * Requests and caches the specified sprite
     *
     * @param {string} name name of the sprite to request
     */
    IconService.prototype.getSprite = function (name) {
        if (IconService_1.cacheLevel === "none") {
            return this.doSpriteRequest(name);
        }
        else {
            if (IconService_1.spriteCache.has(name)) {
                return IconService_1.spriteCache.get(name);
            }
            var spriteRequest = this.doSpriteRequest(name);
            IconService_1.spriteCache.set(name, spriteRequest);
            return spriteRequest;
        }
    };
    var IconService_1, _a;
    IconService.spriteLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    /**
     * Internal variable to track running requests.
     * Used to call spriteLoaded when new sprites are available
     */
    IconService.runningRequests = 0;
    /**
     * map to use for sprite requests
     *
     * we just cache the whole promise since we can always `.then` out the result
     * */
    IconService.spriteCache = new Map();
    /** how aggressively to cache sprites. defaults to simple */
    IconService.cacheLevel = "simple";
    /** URL to request sprites from */
    IconService.baseURL = "https://peretz-icons.mybluemix.net/";
    IconService = IconService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]) === "function" && _a || Object])
    ], IconService);
    return IconService;
}());



/***/ }),

/***/ "./src/icon/sprite.component.ts":
/*!**************************************!*\
  !*** ./src/icon/sprite.component.ts ***!
  \**************************************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _icon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.service */ "./src/icon/icon.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Used to load sprites and is generally used at the root of the application.
 * Page specific sprites may be loaded on that page, but do note that may result in unintened network requets.
 */
var Sprite = /** @class */ (function () {
    /**
     * instantiate the component and instances of http and iconService
     *
     * @param {Http} http
     * @param {ElementRef} _elementRef
     * @param {IconService} icons
     */
    function Sprite(http, _elementRef, icons) {
        this.http = http;
        this._elementRef = _elementRef;
        this.icons = icons;
        /** name used to request sprite from the baseURL */
        this.sprite = "";
    }
    /** load the sprite and inject it into the rendered DOM */
    Sprite.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.icons.getSprite(this.sprite).subscribe(function (rawSVG) {
            _this._elementRef.nativeElement.innerHTML = rawSVG;
            // insure the DOM has settled before we tell everyone they can request icons
            // TODO: move all the sprites into in memory data structures
            setTimeout(function () {
                _icon_service__WEBPACK_IMPORTED_MODULE_2__["IconService"].spriteLoaded.emit();
            });
        });
    };
    var _a, _b, _c;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Sprite.prototype, "sprite", void 0);
    Sprite = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-sprite",
            template: "",
            styles: ["\n\t\t:host {\n\t\t\tdisplay: none;\n\t\t\theight: 0;\n\t\t\twidth: 0;\n\t\t}\n\t"],
            providers: [_icon_service__WEBPACK_IMPORTED_MODULE_2__["IconService"]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] !== "undefined" && _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]) === "function" && _a || Object, typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof _icon_service__WEBPACK_IMPORTED_MODULE_2__["IconService"] !== "undefined" && _icon_service__WEBPACK_IMPORTED_MODULE_2__["IconService"]) === "function" && _c || Object])
    ], Sprite);
    return Sprite;
}());



/***/ }),

/***/ "./src/icon/static-icon.component.ts":
/*!*******************************************!*\
  !*** ./src/icon/static-icon.component.ts ***!
  \*******************************************/
/*! exports provided: StaticIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticIcon", function() { return StaticIcon; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * `n-icon` pulls the icon from the loaded sprite, and renders it at the specified size.
 * Under the hood, `n-icon` generates code similar to the following:
 * ```
 * <svg class="icon" width="30" height="30"><use href="#alert_30"></use></svg>
 * ```
 */
var StaticIcon = /** @class */ (function () {
    /**
     * Initialize the component
     *
     * @param {ElementRef} elementRef
     */
    function StaticIcon(elementRef) {
        this.elementRef = elementRef;
        /** accepts color strings */
        this.color = "dark";
        /** accepts abbreviated size strings */
        this.size = "md";
        /** classlist for the SVG */
        this.classList = "";
        /** map size strings to numeric values */
        this.sizeMap = {
            "xs": 14,
            "sm": 16,
            "md": 20,
            "lg": 30
        };
        this.iconMap = {
            "addnew_circle_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth = \"16\"\n\t\t\theight = \"16\"\n\t\t\tviewBox = \"0 0 16 16\">\n\t\t\t<path d=\"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.8c-3.7 0-6.8-3.1-6.8-6.8 0-3.7\n\t\t\t3.1-6.8 6.8-6.8s6.8 3.1 6.8 6.8c0 3.7-3.1 6.8-6.8 6.8z\"/>\n\t\t\t<path d=\"M9 4H7v3H4v2h3v3h2V9h3V7H9z\"/>\n\t\t</svg>"; },
            "chevron_down_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth = \"16\"\n\t\t\theight = \"16\"\n\t\t\tviewBox = \"0 0 16 16\">\n\t\t\t<path d=\"M14.6 4L8 10.6 1.4 4l-.8.8L8 12.3l7.4-7.5z\"/>\n\t\t</svg>"; },
            "chevron_down_20": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"20px\"\n\t\t\theight=\"20px\"\n\t\t\tviewBox=\"0 0 20 20\">\n\t\t\t<g>\n\t\t\t\t<polygon points=\"18.6,4.2 10,12.7 1.4,4.2 0.6,5 10,14.4 19.4,5\"/>\n\t\t\t</g>\n\t\t</svg>"; },
            "chevron_down_30": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"30px\"\n\t\t\theight=\"30px\"\n\t\t\tviewBox=\"0 0 30 30\">\n\t\t\t<polygon points=\"27.3,7 15,19.3 2.7,7 1.3,8.4 15,22.1 28.7,8.4 \"/>\n\t\t</svg>"; },
            "chevron_up_circle_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\txmlns=\"http://www.w3.org/2000/svg\"\n\t\t\theight=\"16\" viewBox=\"0 0 16 16\">\n\t\t\t<path d=\"M4.5 10L8 6.4l3.5 3.6 1-1L8 4.6 3.5 9z\"></path>\n\t\t\t<path d=\"M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8zm14.8 0c0 3.7-3.1 6.8-6.8 6.8-3.7\n\t\t\t0-6.8-3.1-6.8-6.8S4.3 1.2 8 1.2c3.7 0 6.8 3.1 6.8 6.8z\"></path>\n\t\t</svg>"; },
            "chevron_up_circle_disabled_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\txmlns=\"http://www.w3.org/2000/svg\"\n\t\t\theight=\"16\"\n\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t<path d=\"M9 .1v1c1.2.2 2.3.6 3.2 1.3l.7-.7C11.8.8 10.5.3 9 .1zM7 .1C5.5.3 4.2.8 3.1 1.7l.7.7c.9-.7 2-1.2 3.2-1.3v-1zM14.9\n\t\t\t7h1c-.2-1.5-.8-2.8-1.6-3.9l-.7.7c.7.9 1.1 2 1.3 3.2zM14.9 9c-.2 1.2-.6 2.3-1.3 3.2l.7.7c.9-1.1 1.4-2.4\n\t\t\t1.6-3.9h-1zM3.8 13.6l-.7.7c1.1.9 2.4 1.4 3.9 1.6v-1c-1.2-.2-2.3-.6-3.2-1.3zM9 15.9c1.5-.2 2.8-.8\n\t\t\t3.9-1.6l-.7-.7c-.9.7-2 1.2-3.2 1.3v1zM1.1 9h-1c.2 1.5.8 2.8 1.6 3.9l.7-.7c-.7-.9-1.1-2-1.3-3.2zM1.7\n\t\t\t3.1C.8 4.2.3 5.5.1 7h1c.2-1.2.6-2.3 1.3-3.2l-.7-.7zM8.9 5.5L8 4.6l-.9.9.9.9zM8.9 7.3l.9.9.9-1-.9-.8zM11.5\n\t\t\t10l1-1-.9-.9-1 1zM4.5 10l.9-.9-1-1-.9.9zM7.1 7.3l-.9-.9-.9.8.9 1z\"/>\n\t\t</svg>"; },
            "chevron_down_circle_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\txmlns=\"http://www.w3.org/2000/svg\"\n\t\t\theight=\"16\" viewBox=\"0 0 16 16\">\n\t\t\t<path d=\"M11.5 6L8 9.6 4.5 6l-1 1L8 11.4 12.5 7z\"/>\n\t\t\t<path d=\"M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8s3.6 8 8 8 8-3.6 8-8zM1.2 8c0-3.7 3.1-6.8 6.8-6.8 3.7 0\n\t\t\t6.8 3.1 6.8 6.8s-3.1 6.8-6.8 6.8c-3.7 0-6.8-3.1-6.8-6.8z\"/>\n\t\t</svg>"; },
            "chevron_down_circle_disabled_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\txmlns=\"http://www.w3.org/2000/svg\"\n\t\t\theight=\"16\"\n\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t<path d=\"M7 15.9v-1c-1.2-.2-2.3-.6-3.2-1.3l-.7.7c1.1.9 2.4 1.4 3.9 1.6zM9 15.9c1.5-.2 2.8-.8 3.9-1.6l-.7-.7c-.9.7-2\n\t\t\t1.2-3.2 1.3v1zM1.1 9h-1c.2 1.5.8 2.8 1.6 3.9l.7-.7c-.7-.9-1.1-2-1.3-3.2zM1.1 7c.2-1.2.6-2.3 1.3-3.2l-.7-.7C.8 4.2.3\n\t\t\t5.5.1 7h1zM12.2 2.4l.7-.7C11.8.8 10.5.3 9 .1v1c1.2.2 2.3.6 3.2 1.3zM7 .1C5.5.3 4.2.8 3.1 1.7l.7.7c.9-.7 2-1.2\n\t\t\t3.2-1.3v-1zM14.9 7h1c-.2-1.5-.8-2.8-1.6-3.9l-.7.7c.7.9 1.1 2 1.3 3.2zM14.3 12.9c.9-1.1 1.4-2.4 1.6-3.9h-1c-.2 1.2-.6\n\t\t\t2.3-1.3 3.2l.7.7zM7.1 10.5l.9.9.9-.9-.9-.9zM7.1 8.7l-.9-.9-.9 1 .9.8zM4.5 6l-1 1 .9.9 1-1zM11.5 6l-.9.9 1 1\n\t\t\t.9-.9zM8.9 8.7l.9.9.9-.8-.9-1z\"/>\n\t\t</svg>"; },
            "chevron_right_circle_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"16\"\n\t\t\theight=\"16\"\n\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t<path d=\"M6 4.5L9.6 8 6 11.5l1 1L11.4 8 7 3.5z\"/>\n\t\t\t<path d=\"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.8c-3.7 0-6.8-3.1-6.8-6.8 0-3.7\n\t\t\t3.1-6.8 6.8-6.8s6.8 3.1 6.8 6.8c0 3.7-3.1 6.8-6.8 6.8z\"/>\n\t\t</svg>"; },
            "chevron_right_circle_disabled_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"16px\"\n\t\t\theight=\"16px\"\n\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t<path d=\"M15.9,9h-1c-0.2,1.2-0.6,2.3-1.3,3.2l0.7,0.7C15.2,11.8,15.7,10.5,15.9,9z\"/>\n\t\t\t<path d=\"M15.9,7c-0.2-1.5-0.8-2.8-1.6-3.9l-0.7,0.7c0.7,0.9,1.2,2,1.3,3.2H15.9z\"/>\n\t\t\t<path d=\"M9,14.9v1c1.5-0.2,2.8-0.8,3.9-1.6l-0.7-0.7C11.3,14.3,10.2,14.7,9,14.9z\"/>\n\t\t\t<path d=\"M7,14.9c-1.2-0.2-2.3-0.6-3.2-1.3l-0.7,0.7c1.1,0.9,2.4,1.4,3.9,1.6V14.9z\"/>\n\t\t\t<path d=\"M2.4,3.8L1.7,3.1C0.8,4.2,0.3,5.5,0.1,7h1C1.3,5.8,1.7,4.7,2.4,3.8z\"/>\n\t\t\t<path d=\"M0.1,9c0.2,1.5,0.8,2.8,1.6,3.9l0.7-0.7c-0.7-0.9-1.2-2-1.3-3.2H0.1z\"/>\n\t\t\t<path d=\"M7,1.1v-1C5.5,0.3,4.2,0.8,3.1,1.7l0.7,0.7C4.7,1.7,5.8,1.3,7,1.1z\"/>\n\t\t\t<path d=\"M12.9,1.7C11.8,0.8,10.5,0.3,9,0.1v1c1.2,0.2,2.3,0.6,3.2,1.3L12.9,1.7z\"/>\n\t\t\t<polygon points=\"10.5,8.9 11.4,8 10.5,7.1 9.6,8 9.6,8 9.6,8 \"/>\n\t\t\t<polygon points=\"8.7,8.9 7.8,9.8 8.8,10.7 9.6,9.8 \"/>\n\t\t\t<polygon points=\"6,11.5 7,12.5 7.9,11.6 6.9,10.6 \"/>\n\t\t\t<polygon points=\"6,4.5 6.9,5.4 7.9,4.4 7,3.5 \"/>\n\t\t\t<polygon points=\"8.7,7.1 9.6,6.2 8.8,5.3 7.8,6.2 \"/>\n\t\t</svg>"; },
            "chevron_right_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"16\"\n\t\t\theight=\"16\"\n\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t\t<g>\n\t\t\t\t<polygon points=\"4,14.7 10.6,8.1 4,1.6 4.8,0.7 12.3,8.1 4.8,15.6\">\n\t\t\t\t</polygon>\n\t\t\t\t</g>\n\t\t</svg>"; },
            "chevron_right_14": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"14\"\n\t\t\theight=\"14\"\n\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t\t<g>\n\t\t\t\t<polygon points=\"4,14.7 10.6,8.1 4,1.6 4.8,0.7 12.3,8.1 4.8,15.6\">\n\t\t\t\t</polygon>\n\t\t\t\t</g>\n\t\t</svg>"; },
            "chevron_left_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\theight=\"16\"\n\t\t\twidth=\"16\"\n\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t<g>\n\t\t\t<polygon points=\"12.3,14.7 5.7,8.1 12.3,1.6 11.4,0.7 4,8.1 11.4,15.6\">\n\t\t\t</polygon>\n\t\t\t</g>\n\t\t</svg>\n\t\t"; },
            "chevron_left_14": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\theight=\"14\"\n\t\t\twidth=\"14\"\n\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t<g>\n\t\t\t<polygon points=\"12.3,14.7 5.7,8.1 12.3,1.6 11.4,0.7 4,8.1 11.4,15.6\">\n\t\t\t</polygon>\n\t\t\t</g>\n\t\t</svg>\n\t\t"; },
            "chevron_left_circle_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"16\"\n\t\t\theight=\"16\"\n\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t<path d=\"M10 11.5L6.4 8 10 4.5l-1-1L4.6 8 9 12.5z\"/>\n\t\t\t<path d=\"M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8\n\t\t\t1.2c3.7 0 6.8 3.1 6.8 6.8 0 3.7-3.1 6.8-6.8 6.8S1.2 11.7 1.2 8c0-3.7 3.1-6.8 6.8-6.8z\"/>\n\t\t</svg>"; },
            "chevron_left_circle_disabled_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"16px\"\n\t\t\theight=\"16px\"\n\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t<path d=\"M0.1,7h1c0.2-1.2,0.6-2.3,1.3-3.2L1.7,3.1C0.8,4.2,0.3,5.5,0.1,7z\"/>\n\t\t\t<path d=\"M0.1,9c0.2,1.5,0.8,2.8,1.6,3.9l0.7-0.7c-0.7-0.9-1.2-2-1.3-3.2H0.1z\"/>\n\t\t\t<path d=\"M7,1.1v-1C5.5,0.3,4.2,0.8,3.1,1.7l0.7,0.7C4.7,1.7,5.8,1.3,7,1.1z\"/>\n\t\t\t<path d=\"M9,1.1c1.2,0.2,2.3,0.6,3.2,1.3l0.7-0.7C11.8,0.8,10.5,0.3,9,0.1V1.1z\"/>\n\t\t\t<path d=\"M13.6,12.2l0.7,0.7c0.9-1.1,1.4-2.4,1.6-3.9h-1C14.7,10.2,14.3,11.3,13.6,12.2z\"/>\n\t\t\t<path d=\"M15.9,7c-0.2-1.5-0.8-2.8-1.6-3.9l-0.7,0.7c0.7,0.9,1.2,2,1.3,3.2H15.9z\"/>\n\t\t\t<path d=\"M9,14.9v1c1.5-0.2,2.8-0.8,3.9-1.6l-0.7-0.7C11.3,14.3,10.2,14.7,9,14.9z\"/>\n\t\t\t<path d=\"M3.1,14.3c1.1,0.9,2.4,1.4,3.9,1.6v-1c-1.2-0.2-2.3-0.6-3.2-1.3L3.1,14.3z\"/>\n\t\t\t<polygon points=\"5.5,7.1 4.6,8 5.5,8.9 6.4,8 6.4,8 6.4,8 \"/>\n\t\t\t<polygon points=\"7.3,7.1 8.2,6.2 7.2,5.3 6.4,6.2 \"/>\n\t\t\t<polygon points=\"10,4.5 9,3.5 8.1,4.4 9.1,5.4 \"/>\n\t\t\t<polygon points=\"10,11.5 9.1,10.6 8.1,11.6 9,12.5 \"/>\n\t\t\t<polygon points=\"7.3,8.9 6.4,9.8 7.2,10.7 8.2,9.8 \"/>\n\t\t</svg>"; },
            "x_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"16\"\n\t\t\theight=\"16\"\n\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t<polygon\n\t\t\t\tpoints=\"14.5,2.6 13.4,1.5 8,6.9 2.6,1.5\n\t\t\t\t1.5,2.6 6.9,8 1.5,13.4 2.6,14.5\n\t\t\t\t8,9.1 13.4,14.5 14.5,13.4 9.1,8\"/>\n\t\t</svg>"; },
            "info_20": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"20px\"\n\t\t\theight=\"20px\"\n\t\t\tviewBox=\"0 0 30 30\">\n\t\t\t<polygon points=\"17,13 12,13 12,15 14,15 14,21 12,21 12,23 19,23 19,21 17,21 \"/>\n\t\t\t<circle cx=\"15\" cy=\"9\" r=\"2\"/>\n\t\t\t<path d=\"M15,1C7.3,1,1,7.3,1,15s6.3,14,14,14s14-6.3,14-14S22.7,1,15,1z M15,27C8.4,27,3,21.6,3,15S8.4,3,15,3\n\t\t\ts12,5.4,12,12S21.6,27,15,27z\"/>\n\t\t</svg>"; },
            "info_fill_20": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"20px\"\n\t\t\theight=\"20px\"\n\t\t\tviewBox=\"0 0 20 20\">\n\t\t\t<g>\n\t\t\t\t<path d=\"M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z M8.5,14.1l-3.6-3.6l1.1-1.1L8.5,12l5.6-5.6\n\t\t\t\t\tl1.1,1.1L8.5,14.1z\"/>\n\t\t\t</g>\n\t\t\t</svg>\n\t\t</svg>"; },
            "warning_20": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"20\"\n\t\t\theight=\"20\"\n\t\t\tviewBox=\"0 0 30 30\">\n\t\t\t<path d=\"M15.9 18l.8-7.8V7h-3.4v3.2l.8 7.8z\"/>\n\t\t\t<circle cx=\"15\" cy=\"21.7\" r=\"1.8\"/>\n\t\t\t<path d=\"M15 1C7.3 1 1 7.3 1 15s6.3 14 14 14 14-6.3 14-14S22.7 1 15 1zm0\n\t\t\t26C8.4 27 3 21.6 3 15S8.4 3 15 3s12 5.4 12 12-5.4 12-12 12z\"/>\n\t\t</svg>"; },
            "warning_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\theight=\"16\"\n\t\t\twidth=\"16\"\n\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t<g>\n\t\t\t\t<path d=\"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0\n\t\t\t\t14.8c-3.7 0-6.8-3.1-6.8-6.8S4.3 1.2 8 1.2s6.8 3.1 6.8 6.8-3.1 6.8-6.8 6.8z\"></path>\n\t\t\t\t<path d=\"M6.9 5.5l.6 4.5h1l.6-4.5V3H6.9z\"></path>\n\t\t\t\t<circle cx=\"8\" cy=\"12\" r=\"1\"></circle>\n\t\t\t</g>\n\t\t</svg>"; },
            "warning_fill_20": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\">\n\t\t\t<g>\n\t\t\t\t<path d=\"M10,19.4c-5.2,0-9.4-4.2-9.4-9.4c0-5.2,4.2-9.4,9.4-9.4c5.2,0,9.4,4.2,9.4,9.4C19.4,15.2,15.2,19.4,10,19.4z\n\t\t\t\t\t M10,13.4c-1.2,0-2.1,0.9-2.1,2.1c0,1.2,0.9,2.1,2.1,2.1c1.2,0,2.1-0.9,2.1-2.1C12.1,14.3,11.2,13.4,10,13.4z M7.9,7l0.9,6.1h2.5\n\t\t\t\t\tl0.9-6l0-3.7H7.9V7z\"/>\n\t\t\t\t<path d=\"M10,1.2c4.9,0,8.8,3.9,8.8,8.8s-3.9,8.8-8.8,8.8S1.2,14.9,1.2,10S5.1,1.2,10,1.2 M8.2,13.5\n\t\t\t\t\tc-0.6,0.5-0.9,1.2-0.9,2c0,1.5,1.2,2.7,2.7,2.7c1.5,0,2.7-1.2,2.7-2.7c0-0.8-0.4-1.5-0.9-2l0.1-0.8l0.8-5.5l0-0.1V7V4V2.8h-1.2H8.4\n\t\t\t\t\tH7.2V4v3v0.1l0,0.1l0.8,5.5L8.2,13.5 M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0L10,0z M9.3,12.5L8.4,7V4h3.1v3\n\t\t\t\t\tl-0.8,5.5H9.3L9.3,12.5z M10,17c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5C11.5,16.3,10.8,17,10,17\n\t\t\t\t\tL10,17z\"/>\n\t\t\t</g>\n\t\t\t</svg>"; },
            "danger_20": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"20\"\n\t\t\theight=\"20\"\n\t\t\tviewBox=\"0 0 30 30\">\n\t\t\t<path d=\"M13.3 13.2l.8 7.8h1.8l.8-7.8V10h-3.4z\"/>\n\t\t\t<circle cx=\"15\" cy=\"24.2\" r=\"1.8\"/>\n\t\t\t<path d=\"M29.9 27.5l-14-25.9c-.2-.4-.5-.6-.9-.6s-.7.2-.9.5L.1 27.4c-.3.8.2\n\t\t\t1.6.9 1.6h28c.7 0 1.2-.8.9-1.5zM2.6 27L15 4.1 27.4 27H2.6z\"/>\n\t\t</svg>"; },
            "failure_fill_20": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\">\n\t\t\t<g>\n\t\t\t\t<path d=\"M19.9,19L10.6,1.4c-0.3-0.5-1-0.5-1.2,0L0.1,19c-0.2,0.5,0.1,1,0.6,1h18.6C19.8,20,20.2,19.4,19.9,19z M10,18\n\t\t\t\t\tc-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5C11.5,17.3,10.8,18,10,18z M11.5,9l-0.8,5H9.3L8.4,9V6h3.1V9z\n\t\t\t\t\t\"/>\n\t\t\t</g>\n\t\t\t</svg>"; },
            "success_20": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"20\"\n\t\t\theight=\"20\"\n\t\t\tviewBox=\"0 0 30 30\">\n\t\t\t<path d=\"M13 17.6l-3.3-3.3-1.4 1.4 4.7 4.7 8.7-8.7-1.4-1.4z\"/>\n\t\t\t<path d=\"M15 3c6.6 0 12 5.4 12 12s-5.4 12-12 12S3 21.6 3 15 8.4 3 15\n\t\t\t3m0-2C7.3 1 1 7.3 1 15s6.3 14 14 14 14-6.3 14-14S22.7 1 15 1z\"/>\n\t\t</svg>"; },
            "success_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\theight=\"16\"\n\t\t\twidth=\"16\"\n\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t<path d=\"M8 1.2c3.7 0 6.8 3.1 6.8 6.8s-3.1 6.8-6.8\n\t\t\t\t6.8S1.2 11.7 1.2 8 4.3 1.2 8 1.2M8\n\t\t\t\t0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z\"/>\n\t\t\t\t<path d=\"M6.7 9.6L4.6 7.5l-.9.9 3 3 5.6-5.5-.9-.9z\"/>\n\t\t</svg>"; },
            "success_fill_20": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"20px\"\n\t\t\theight=\"20px\"\n\t\t\tviewBox=\"0 0 20 20\">\n\t\t\t<g>\n\t\t\t\t<path  d=\"M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z M8.5,14.1l-3.6-3.6l1.1-1.1L8.5,12l5.6-5.6\n\t\t\t\t\tl1.1,1.1L8.5,14.1z\"/>\n\t\t\t</g>\n\t\t</svg>"; },
            "error_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\theight=\"16\"\n\t\t\twidth=\"16\"\n\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t<path d=\"M6.9 7.5l.6 3.5h1l.6-3.5V5H6.9z\"/>\n\t\t\t<circle cx=\"8\" cy=\"13\" r=\"1\"/>\n\t\t\t<path d=\"M15.9 15.2L8.5 1.3C8.4 1.1 8.2 1 8\n\t\t\t\t1s-.4.1-.5.3L.1 15.2c-.2.4 0 .8.5.8h14.9c.4 0 .6-.4.4-.8zm-14.3-.4L8\n\t\t\t\t2.9l6.4 11.9H1.6z\"/>\n\t\t</svg>"; },
            "search_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\theight=\"16\"\n\t\t\twidth=\"16\"\n\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t<g>\n\t\t\t\t<path\n\t\t\t\t\td=\"M6,0C2.7,0,0,2.7,0,6s2.7,6,6,6s6-2.7,6-6S9.3,0,6,0z\n\t\t\t\t\tM6,11c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5\n\t\t\t\t\tS8.8,11,6,11z\"/>\n\t\t\t\t<rect\n\t\t\t\t\tx=\"12\"\n\t\t\t\t\ty=\"10.2\"\n\t\t\t\t\ttransform=\"matrix(-0.7071 0.7071 -0.7071 -0.7071 31.4698 13.0355)\"\n\t\t\t\t\twidth=\"2\"\n\t\t\t\t\theight=\"5.7\"/>\n\t\t\t</g>\n\t\t</svg>"; },
            "loading_rows_30": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\theight=\"30\"\n\t\t\twidth=\"30\"\n\t\t\tviewBox=\"0 0 32 30\">\n            <circle cx=\"4\" cy=\"16\" r=\"4\"  fill=\"#eee\">\n            \t<animate id=\"one\" attributeName=\"fill\"\n            \tdur=\"1s\"\n            \tvalues=\"#eee;#999;#eee\"\n            \tbegin=\"0;two.end\"/>\n            </circle>\n            <circle cx=\"16\" cy=\"16\" r=\"4\" fill=\"#eee\">\n            \t<animate  id=\"two\" attributeName=\"fill\"\n            \tbegin=\"one.end-0.5s\"\n            \tdur=\"1s\"\n            \tvalues=\"#eee;#999;#eee\"/>\n            </circle>\n            <circle  cx=\"28\" cy=\"16\" r=\"4\" fill=\"#eee\">\n            \t<animate attributeName=\"fill\"\n            \tbegin=\"two.end-0.5s\"\n           \t\tdur=\"1s\"\n            \tvalues=\"#eee;#999;#eee\"/>\n            </circle>\n\t\t</svg>\n\t\t"; },
            "help_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\theight=\"16\"\n\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0\n\t\t\t\t\t14.8c-3.7 0-6.8-3.1-6.8-6.8 0-3.7 3.1-6.8 6.8-6.8s6.8 3.1 6.8 6.8c0 3.7-3 6.8-6.8 6.8z\" />\n\t\t\t\t<path\n\t\t\t\t\td=\"M8 2.9c-.9 0-1.7.2-2.3.7-.6.5-.9\n\t\t\t\t\t1.2-1.1 2.1v.2l1.6.1v-.1c.1-.6.3-1.1.6-1.4.4-.3.7-.4 1.2-.4s.9.2 1.3.5c.3.3.5.7.5 1.1 0\n\t\t\t\t\t.2-.1.4-.2.6-.1.2-.4.4-.8.8-.4.3-.7.6-.9.8-.2.3-.4.5-.5.8v.2c-.1.2-.2.3-.2.6v.6h1.5V10c0-.4\n\t\t\t\t\t0-.5.1-.6v-.1c.1-.2.1-.3.2-.5.1-.1.3-.3.8-.7.6-.5 1-.9 1.2-1.3.2-.4.3-.8.3-1.2\n\t\t\t\t\t0-.8-.3-1.4-.9-1.9-.6-.6-1.4-.8-2.4-.8zM7.3 11.5h1.5V13H7.3z\" />\n\t\t</svg>"; },
            "carat_up_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"16\"\n\t\t\theight=\"16\"\n\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t<polygon points=\"15,12 1,12 8,5 \"/>\n\t\t</svg>\n\t\t"; },
            "grip_vertical_16": function (classList) { return "<svg\n\t\t\tclass=\"" + classList + "\"\n\t\t\twidth=\"16\"\n\t\t\theight=\"16\"\n\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t<circle cx=\"6.5\" cy=\"14.5\" r=\"1.5\"/>\n\t\t\t<circle cx=\"6.5\" cy=\"10.5\" r=\"1.5\"/>\n\t\t\t<circle cx=\"6.5\" cy=\"6.5\" r=\"1.5\"/>\n\t\t\t<circle cx=\"10.5\" cy=\"14.5\" r=\"1.5\"/>\n\t\t\t<circle cx=\"10.5\" cy=\"10.5\" r=\"1.5\"/>\n\t\t\t<circle cx=\"10.5\" cy=\"6.5\" r=\"1.5\"/>\n\t\t\t<circle cx=\"6.5\" cy=\"2.5\" r=\"1.5\"/>\n\t\t\t<circle cx=\"10.5\" cy=\"2.5\" r=\"1.5\"/>\n\t\t</svg>\n\t\t"; }
        };
    }
    StaticIcon.prototype.ngAfterViewInit = function () {
        var el = this.elementRef.nativeElement;
        el.style.display = el.style.display || "flex";
        var icon = this.iconMap[this.icon + "_" + this.sizeMap[this.size]];
        if (icon) {
            el.innerHTML = icon(this.buildMatterClass() + " " + this.classList);
        }
        else {
            console.error(this.icon + " at size " + this.size + "(" + this.sizeMap[this.size] + ") needs to be added to StaticIcon's iconMap");
        }
    };
    /**
     * Create a class name based on @Input() `color` and `size`.
     * @return {string}
     */
    StaticIcon.prototype.buildMatterClass = function () {
        if (this.color === "dark" && this.size !== "md") {
            return "icon--" + this.size;
        }
        else {
            return "icon" + (this.color !== "dark" ? "--" + this.color : "") + (this.color !== "dark" && this.size !== "md" ? "-" + this.size : "");
        }
    };
    var _a, _b;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StaticIcon.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StaticIcon.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StaticIcon.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof String !== "undefined" && String) === "function" && _a || Object)
    ], StaticIcon.prototype, "classList", void 0);
    StaticIcon = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-static-icon",
            template: ""
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _b || Object])
    ], StaticIcon);
    return StaticIcon;
}());



/***/ }),

/***/ "./src/icon/static-icon.module.ts":
/*!****************************************!*\
  !*** ./src/icon/static-icon.module.ts ***!
  \****************************************/
/*! exports provided: StaticIcon, StaticIconModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticIconModule", function() { return StaticIconModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _static_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static-icon.component */ "./src/icon/static-icon.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticIcon", function() { return _static_icon_component__WEBPACK_IMPORTED_MODULE_2__["StaticIcon"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StaticIconModule = /** @class */ (function () {
    function StaticIconModule() {
    }
    StaticIconModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_static_icon_component__WEBPACK_IMPORTED_MODULE_2__["StaticIcon"]],
            exports: [_static_icon_component__WEBPACK_IMPORTED_MODULE_2__["StaticIcon"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        })
    ], StaticIconModule);
    return StaticIconModule;
}());



/***/ }),

/***/ "./src/index.stories.ts":
/*!******************************!*\
  !*** ./src/index.stories.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);

// import "carbon-components/scss/globals/scss/styles.scss";
Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Welcome", module).add("to Carbon Angular", function () { return ({
    template: "\n\t\t<h1>Carbon Components Angular</h1>\n\t\t<h2>An Angular implementation of the Carbon Design System</h2>\n\t\t<a href=\"https://angular.carbondesignsystem.com/documentation\">Documentation</a>\n\t",
    props: {}
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: PaginationModel, Pagination, PaginationModule, Accordion, AccordionItem, AccordionModule, BannerService, Banner, BannerModule, Button, ButtonModule, DateTimeModel, CalendarModule, Checkbox, CheckboxModule, CodeSnippet, CodeSnippetModule, ComboBox, ComboBoxModule, ContentSwitcher, ContentSwitcherOption, ContentSwitcherModule, DialogService, Dialog, DialogDirective, DialogPlaceholder, Tooltip, TooltipDirective, EllipsisTooltip, OverflowMenu, OverflowMenuPane, OverflowMenuDirective, OverflowMenuOption, DialogModule, Dropdown, DropdownList, ScrollableList, AbstractDropdownView, ListItem, DropdownModule, ToggleModule, RadioModule, InputModule, NFormsModule, I18n, I18N_SERVICE_PROVIDER_FACTORY, I18N_SERVICE_PROVIDER, I18nModule, StaticIconModule, Icon, IconService, Sprite, IconModule, InlineLoading, InlineLoadingModule, TextInput, Label, Link, LinkModule, ListGroup, ListGroupModule, Loading, LoadingModule, Modal, ModalService, AlertModalType, ModalButtonType, BaseModal, ModalModule, NotificationService, NotificationDisplayService, Notification, Toast, NotificationModule, NumberModule, Number, PillInput, Pill, PillInputModule, Placeholder, PlaceholderService, PLACEHOLDER_SERVICE_PROVIDER_FACTORY, PLACEHOLDER_SERVICE_PROVIDER, PlaceholderModule, ProgressIndicatorModule, Radio, RadioGroup, SearchModule, Search, Select, Option, OptGroup, SelectModule, Switch, SwitchModule, Table, TableModel, TableItem, TableHeaderItem, TableModule, Tabs, Tab, TabHeaders, TabsModule, Tile, ClickableTile, TilesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion/accordion.module */ "./src/accordion/accordion.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_0__["Accordion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_0__["AccordionItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_0__["AccordionModule"]; });

/* harmony import */ var _banner_banner_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner/banner.module */ "./src/banner/banner.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return _banner_banner_module__WEBPACK_IMPORTED_MODULE_1__["BannerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return _banner_banner_module__WEBPACK_IMPORTED_MODULE_1__["Banner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BannerModule", function() { return _banner_banner_module__WEBPACK_IMPORTED_MODULE_1__["BannerModule"]; });

/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button/button.module */ "./src/button/button.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button_button_module__WEBPACK_IMPORTED_MODULE_2__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return _button_button_module__WEBPACK_IMPORTED_MODULE_2__["ButtonModule"]; });

/* harmony import */ var _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar/calendar.module */ "./src/calendar/calendar.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimeModel", function() { return _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_3__["DateTimeModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"]; });

/* harmony import */ var _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkbox/checkbox.module */ "./src/checkbox/checkbox.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_4__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"]; });

/* harmony import */ var _code_snippet_code_snippet_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-snippet/code-snippet.module */ "./src/code-snippet/code-snippet.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeSnippet", function() { return _code_snippet_code_snippet_module__WEBPACK_IMPORTED_MODULE_5__["CodeSnippet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeSnippetModule", function() { return _code_snippet_code_snippet_module__WEBPACK_IMPORTED_MODULE_5__["CodeSnippetModule"]; });

/* harmony import */ var _combobox_combobox_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combobox/combobox.module */ "./src/combobox/combobox.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComboBox", function() { return _combobox_combobox_module__WEBPACK_IMPORTED_MODULE_6__["ComboBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComboBoxModule", function() { return _combobox_combobox_module__WEBPACK_IMPORTED_MODULE_6__["ComboBoxModule"]; });

/* harmony import */ var _content_switcher_content_switcher_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-switcher/content-switcher.module */ "./src/content-switcher/content-switcher.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentSwitcher", function() { return _content_switcher_content_switcher_module__WEBPACK_IMPORTED_MODULE_7__["ContentSwitcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentSwitcherOption", function() { return _content_switcher_content_switcher_module__WEBPACK_IMPORTED_MODULE_7__["ContentSwitcherOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentSwitcherModule", function() { return _content_switcher_content_switcher_module__WEBPACK_IMPORTED_MODULE_7__["ContentSwitcherModule"]; });

/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog/dialog.module */ "./src/dialog/dialog.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__["DialogService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__["Dialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogDirective", function() { return _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__["DialogDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogPlaceholder", function() { return _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__["DialogPlaceholder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__["Tooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EllipsisTooltip", function() { return _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__["EllipsisTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverflowMenu", function() { return _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__["OverflowMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverflowMenuPane", function() { return _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__["OverflowMenuPane"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverflowMenuDirective", function() { return _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__["OverflowMenuDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverflowMenuOption", function() { return _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__["OverflowMenuOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__["DialogModule"]; });

/* harmony import */ var _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dropdown/dropdown.module */ "./src/dropdown/dropdown.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_9__["Dropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownList", function() { return _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_9__["DropdownList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollableList", function() { return _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_9__["ScrollableList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractDropdownView", function() { return _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_9__["AbstractDropdownView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_9__["ListItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownModule", function() { return _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_9__["DropdownModule"]; });

/* harmony import */ var _forms_forms_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forms/forms.module */ "./src/forms/forms.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleModule", function() { return _forms_forms_module__WEBPACK_IMPORTED_MODULE_10__["ToggleModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioModule", function() { return _forms_forms_module__WEBPACK_IMPORTED_MODULE_10__["RadioModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputModule", function() { return _forms_forms_module__WEBPACK_IMPORTED_MODULE_10__["InputModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NFormsModule", function() { return _forms_forms_module__WEBPACK_IMPORTED_MODULE_10__["NFormsModule"]; });

/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./i18n/i18n.module */ "./src/i18n/i18n.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18n", function() { return _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_11__["I18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_SERVICE_PROVIDER_FACTORY", function() { return _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_11__["I18N_SERVICE_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_SERVICE_PROVIDER", function() { return _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_11__["I18N_SERVICE_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nModule", function() { return _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_11__["I18nModule"]; });

/* harmony import */ var _icon_icon_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icon/icon.module */ "./src/icon/icon.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticIconModule", function() { return _icon_icon_module__WEBPACK_IMPORTED_MODULE_12__["StaticIconModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icon_icon_module__WEBPACK_IMPORTED_MODULE_12__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconService", function() { return _icon_icon_module__WEBPACK_IMPORTED_MODULE_12__["IconService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return _icon_icon_module__WEBPACK_IMPORTED_MODULE_12__["Sprite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconModule", function() { return _icon_icon_module__WEBPACK_IMPORTED_MODULE_12__["IconModule"]; });

/* harmony import */ var _inline_loading_inline_loading_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inline-loading/inline-loading.module */ "./src/inline-loading/inline-loading.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineLoading", function() { return _inline_loading_inline_loading_module__WEBPACK_IMPORTED_MODULE_13__["InlineLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineLoadingModule", function() { return _inline_loading_inline_loading_module__WEBPACK_IMPORTED_MODULE_13__["InlineLoadingModule"]; });

/* harmony import */ var _input_input_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./input/input.module */ "./src/input/input.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return _input_input_module__WEBPACK_IMPORTED_MODULE_14__["TextInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _input_input_module__WEBPACK_IMPORTED_MODULE_14__["Label"]; });

/* harmony import */ var _link_link_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./link/link.module */ "./src/link/link.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _link_link_module__WEBPACK_IMPORTED_MODULE_15__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkModule", function() { return _link_link_module__WEBPACK_IMPORTED_MODULE_15__["LinkModule"]; });

/* harmony import */ var _list_group_list_group_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./list-group/list-group.module */ "./src/list-group/list-group.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListGroup", function() { return _list_group_list_group_module__WEBPACK_IMPORTED_MODULE_16__["ListGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListGroupModule", function() { return _list_group_list_group_module__WEBPACK_IMPORTED_MODULE_16__["ListGroupModule"]; });

/* harmony import */ var _loading_loading_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./loading/loading.module */ "./src/loading/loading.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return _loading_loading_module__WEBPACK_IMPORTED_MODULE_17__["Loading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingModule", function() { return _loading_loading_module__WEBPACK_IMPORTED_MODULE_17__["LoadingModule"]; });

/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/modal.module */ "./src/modal/modal.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_18__["Modal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_18__["ModalService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModalType", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_18__["AlertModalType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalButtonType", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_18__["ModalButtonType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseModal", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_18__["BaseModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_18__["ModalModule"]; });

/* harmony import */ var _notification_notification_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./notification/notification.module */ "./src/notification/notification.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return _notification_notification_module__WEBPACK_IMPORTED_MODULE_19__["NotificationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationDisplayService", function() { return _notification_notification_module__WEBPACK_IMPORTED_MODULE_19__["NotificationDisplayService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _notification_notification_module__WEBPACK_IMPORTED_MODULE_19__["Notification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _notification_notification_module__WEBPACK_IMPORTED_MODULE_19__["Toast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return _notification_notification_module__WEBPACK_IMPORTED_MODULE_19__["NotificationModule"]; });

/* harmony import */ var _number_input_number_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./number-input/number.module */ "./src/number-input/number.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberModule", function() { return _number_input_number_module__WEBPACK_IMPORTED_MODULE_20__["NumberModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Number", function() { return _number_input_number_module__WEBPACK_IMPORTED_MODULE_20__["Number"]; });

/* harmony import */ var _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pagination/pagination.module */ "./src/pagination/pagination.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationModel", function() { return _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_21__["PaginationModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_21__["Pagination"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_21__["PaginationModule"]; });

/* harmony import */ var _pill_input_pill_input_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pill-input/pill-input.module */ "./src/pill-input/pill-input.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PillInput", function() { return _pill_input_pill_input_module__WEBPACK_IMPORTED_MODULE_22__["PillInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pill", function() { return _pill_input_pill_input_module__WEBPACK_IMPORTED_MODULE_22__["Pill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PillInputModule", function() { return _pill_input_pill_input_module__WEBPACK_IMPORTED_MODULE_22__["PillInputModule"]; });

/* harmony import */ var _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./placeholder/placeholder.module */ "./src/placeholder/placeholder.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Placeholder", function() { return _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_23__["Placeholder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaceholderService", function() { return _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_23__["PlaceholderService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLACEHOLDER_SERVICE_PROVIDER_FACTORY", function() { return _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_23__["PLACEHOLDER_SERVICE_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLACEHOLDER_SERVICE_PROVIDER", function() { return _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_23__["PLACEHOLDER_SERVICE_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaceholderModule", function() { return _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_23__["PlaceholderModule"]; });

/* harmony import */ var _progress_indicator_progress_indicator_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./progress-indicator/progress-indicator.module */ "./src/progress-indicator/progress-indicator.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicatorModule", function() { return _progress_indicator_progress_indicator_module__WEBPACK_IMPORTED_MODULE_24__["ProgressIndicatorModule"]; });

/* harmony import */ var _radio_radio_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./radio/radio.module */ "./src/radio/radio.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _radio_radio_module__WEBPACK_IMPORTED_MODULE_25__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _radio_radio_module__WEBPACK_IMPORTED_MODULE_25__["RadioGroup"]; });

/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./search/search.module */ "./src/search/search.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return _search_search_module__WEBPACK_IMPORTED_MODULE_26__["SearchModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _search_search_module__WEBPACK_IMPORTED_MODULE_26__["Search"]; });

/* harmony import */ var _select_select_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./select/select.module */ "./src/select/select.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _select_select_module__WEBPACK_IMPORTED_MODULE_27__["Select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _select_select_module__WEBPACK_IMPORTED_MODULE_27__["Option"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptGroup", function() { return _select_select_module__WEBPACK_IMPORTED_MODULE_27__["OptGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectModule", function() { return _select_select_module__WEBPACK_IMPORTED_MODULE_27__["SelectModule"]; });

/* harmony import */ var _switch_switch_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./switch/switch.module */ "./src/switch/switch.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _switch_switch_module__WEBPACK_IMPORTED_MODULE_28__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchModule", function() { return _switch_switch_module__WEBPACK_IMPORTED_MODULE_28__["SwitchModule"]; });

/* harmony import */ var _table_table_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./table/table.module */ "./src/table/table.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _table_table_module__WEBPACK_IMPORTED_MODULE_29__["Table"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableModel", function() { return _table_table_module__WEBPACK_IMPORTED_MODULE_29__["TableModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableItem", function() { return _table_table_module__WEBPACK_IMPORTED_MODULE_29__["TableItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableHeaderItem", function() { return _table_table_module__WEBPACK_IMPORTED_MODULE_29__["TableHeaderItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return _table_table_module__WEBPACK_IMPORTED_MODULE_29__["TableModule"]; });

/* harmony import */ var _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./tabs/tabs.module */ "./src/tabs/tabs.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_30__["Tabs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_30__["Tab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabHeaders", function() { return _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_30__["TabHeaders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_30__["TabsModule"]; });

/* harmony import */ var _tiles_tiles_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./tiles/tiles.module */ "./src/tiles/tiles.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return _tiles_tiles_module__WEBPACK_IMPORTED_MODULE_31__["Tile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClickableTile", function() { return _tiles_tiles_module__WEBPACK_IMPORTED_MODULE_31__["ClickableTile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TilesModule", function() { return _tiles_tiles_module__WEBPACK_IMPORTED_MODULE_31__["TilesModule"]; });



































/***/ }),

/***/ "./src/inline-loading/inline-loading.component.ts":
/*!********************************************************!*\
  !*** ./src/inline-loading/inline-loading.component.ts ***!
  \********************************************************/
/*! exports provided: InlineLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineLoading", function() { return InlineLoading; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InlineLoading = /** @class */ (function () {
    function InlineLoading() {
        /**
         * Provide a delay for the `setTimeout` for success.
         *
         * @memberof InlineLoading
         */
        this.successDelay = 1500;
        /**
         * Emits event after the success state is active
         *
         * @type {EventEmitter<any>}
         * @memberof InlineLoading
         */
        this.onSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadingClass = true;
        /**
         * Set to `true` if the action is completed successfully.
         *
         * @memberof InlineLoading
         */
        this._success = false;
    }
    Object.defineProperty(InlineLoading.prototype, "success", {
        /**
         * Returns value `true` if the component is in the success state.
         */
        get: function () {
            return this._success;
        },
        /**
         * Set the component's state to match the parameter and emits onSuccess if it exits.
         */
        set: function (success) {
            var _this = this;
            this._success = success;
            if (this._success) {
                setTimeout(function () {
                    _this.onSuccess.emit();
                }, this.successDelay);
            }
        },
        enumerable: true,
        configurable: true
    });
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InlineLoading.prototype, "loadingText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InlineLoading.prototype, "successText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InlineLoading.prototype, "successDelay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Boolean])
    ], InlineLoading.prototype, "success", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) === "function" && _a || Object)
    ], InlineLoading.prototype, "onSuccess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--inline-loading"),
        __metadata("design:type", Object)
    ], InlineLoading.prototype, "loadingClass", void 0);
    InlineLoading = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-inline-loading",
            template: "\n\t\t<div class=\"bx--inline-loading__animation\">\n\t\t\t<div\n\t\t\t\t*ngIf=\"success === false\"\n\t\t\t\tclass=\"bx--loading bx--loading--small\">\n\t\t\t\t<svg class=\"bx--loading__svg\" viewBox=\"-75 -75 150 150\">\n\t\t\t\t\t<circle cx=\"0\" cy=\"0\" r=\"37.5\"></circle>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t\t<svg\n\t\t\t\t*ngIf=\"success === true\"\n\t\t\t\tclass=\"bx--inline-loading__checkmark-container bx--inline-loading__svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10 10\">\n\t\t\t\t<polyline class=\"bx--inline-loading__checkmark\" points=\"0.74 3.4 3.67 6.34 9.24 0.74\"></polyline>\n\t\t\t</svg>\n\t\t</div>\n\t\t<p *ngIf=\"success === false\" class=\"bx--inline-loading__text\">{{loadingText}}</p>\n\t\t<p *ngIf=\"success === true\" class=\"bx--inline-loading__text\">{{successText}}</p>\n\t"
        })
    ], InlineLoading);
    return InlineLoading;
}());



/***/ }),

/***/ "./src/inline-loading/inline-loading.module.ts":
/*!*****************************************************!*\
  !*** ./src/inline-loading/inline-loading.module.ts ***!
  \*****************************************************/
/*! exports provided: InlineLoading, InlineLoadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineLoadingModule", function() { return InlineLoadingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _inline_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline-loading.component */ "./src/inline-loading/inline-loading.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineLoading", function() { return _inline_loading_component__WEBPACK_IMPORTED_MODULE_2__["InlineLoading"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InlineLoadingModule = /** @class */ (function () {
    function InlineLoadingModule() {
    }
    InlineLoadingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_inline_loading_component__WEBPACK_IMPORTED_MODULE_2__["InlineLoading"]],
            exports: [_inline_loading_component__WEBPACK_IMPORTED_MODULE_2__["InlineLoading"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        })
    ], InlineLoadingModule);
    return InlineLoadingModule;
}());



/***/ }),

/***/ "./src/inline-loading/inline-loading.stories.ts":
/*!******************************************************!*\
  !*** ./src/inline-loading/inline-loading.stories.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-actions */ "./node_modules/@storybook/addon-actions/dist/index.js");
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./src/index.ts");




Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Inline Loading", module)
    .addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [___WEBPACK_IMPORTED_MODULE_3__["InlineLoadingModule"], ___WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t\t<ibm-inline-loading #loading (onSuccess)=\"onSuccess()\" [loadingText]=\"loadingText\" [successText]=\"successText\"></ibm-inline-loading>\n\t\t\t<button ibmButton (click)=\"loading.success = !loading.success\">Toggle state</button>\n\t\t",
    props: {
        onSuccess: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__["action"])("onSuccess"),
        loadingText: "Loading data...",
        successText: "Data loaded."
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/input/input.directive.ts":
/*!**************************************!*\
  !*** ./src/input/input.directive.ts ***!
  \**************************************/
/*! exports provided: TextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * A directive for applying styling to an input element.
 *
 * Example:
 *
 * ```html
 * <input ibmText/>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/text-input/code) for more detail.
 */
var TextInput = /** @class */ (function () {
    function TextInput() {
        /**
         * `light` or `dark` input theme
         */
        this.theme = "dark";
        this.inputClass = true;
    }
    Object.defineProperty(TextInput.prototype, "isLightTheme", {
        get: function () {
            return this.theme === "light";
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextInput.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--text-input"),
        __metadata("design:type", Object)
    ], TextInput.prototype, "inputClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--text-input--light"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TextInput.prototype, "isLightTheme", null);
    TextInput = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[ibmText]"
        })
    ], TextInput);
    return TextInput;
}());



/***/ }),

/***/ "./src/input/input.module.ts":
/*!***********************************!*\
  !*** ./src/input/input.module.ts ***!
  \***********************************/
/*! exports provided: TextInput, Label, InputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputModule", function() { return InputModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./label.component */ "./src/input/label.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _label_component__WEBPACK_IMPORTED_MODULE_3__["Label"]; });

/* harmony import */ var _input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input.directive */ "./src/input/input.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return _input_directive__WEBPACK_IMPORTED_MODULE_4__["TextInput"]; });

/* harmony import */ var _text_area_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text-area.directive */ "./src/input/text-area.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// modules



// imports



var InputModule = /** @class */ (function () {
    function InputModule() {
    }
    InputModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _label_component__WEBPACK_IMPORTED_MODULE_3__["Label"],
                _input_directive__WEBPACK_IMPORTED_MODULE_4__["TextInput"],
                _text_area_directive__WEBPACK_IMPORTED_MODULE_5__["TextArea"]
            ],
            exports: [
                _label_component__WEBPACK_IMPORTED_MODULE_3__["Label"],
                _input_directive__WEBPACK_IMPORTED_MODULE_4__["TextInput"],
                _text_area_directive__WEBPACK_IMPORTED_MODULE_5__["TextArea"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ]
        })
    ], InputModule);
    return InputModule;
}());



/***/ }),

/***/ "./src/input/input.stories.ts":
/*!************************************!*\
  !*** ./src/input/input.stories.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./src/index.ts");



Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Input", module).addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [___WEBPACK_IMPORTED_MODULE_2__["InputModule"]]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["withKnobs"])
    .add("Label", function () { return ({
    template: "\n\t\t<ibm-label>\n\t\t\tSome Title\n\t\t\t<input ibmText placeholder=\"Optional placeholder text\">\n\t\t</ibm-label>\n\t"
}); })
    .add("Input", function () { return ({
    template: "\n\t\t\t<input ibmText aria-label=\"input\" placeholder=\"Optional placeholder text\"/>\n\t\t"
}); })
    .add("Light Input", function () { return ({
    template: "\n\t\t\t<input ibmText theme=\"light\" aria-label=\"input\" placeholder=\"Optional placeholder text\"/>\n\t\t"
}); })
    .add("TextArea", function () { return ({
    template: "\n\t\t<textarea ibmTextArea aria-label=\"textarea\" placeholder=\"Optional placeholder text\" rows=\"4\" cols=\"50\"></textarea>\n\t\t"
}); })
    .add("Light TextArea", function () { return ({
    template: "\n\t\t<textarea ibmTextArea theme=\"light\" aria-label=\"textarea\" placeholder=\"Optional placeholder text\" rows=\"4\" cols=\"50\"></textarea>\n\t\t"
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/input/label.component.ts":
/*!**************************************!*\
  !*** ./src/input/label.component.ts ***!
  \**************************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * ```html
 * <ibm-label labelState="success">
 * 	<label label>Field with success</label>
 * 	<input type="text" class="input-field">
 * </ibm-label>
 *
 * <ibm-label labelState="warning">
 * 	<label label>Field with warning</label>
 * 	<input type="text" class="input-field">
 * </ibm-label>
 *
 * <ibm-label labelState="error">
 * 	<label label>Field with error</label>
 * 	<input type="text" class="input-field">
 * </ibm-label>
 * ```
 *
 * @export
 * @class Label
 * @implements {AfterContentInit}
 */
var Label = /** @class */ (function () {
    /**
     * Creates an instance of Label.
     * @param {ElementRef} elementRef
     * @memberof Label
     */
    function Label(elementRef) {
        this.elementRef = elementRef;
        /**
         * The id of the input item associated with the `Label`. This value is also used to associate the `Label` with
         * its input counterpart through the 'for' attribute.
         * @memberof Label
         */
        this.labelInputID = "ibm-label-" + Label_1.labelCounter;
        /**
         * State of the `Label` will determine the styles applied.
         * @type {("success" | "warning" | "error" | "")}
         * @memberof Label
         */
        this.labelState = "";
        this.labelClass = true;
        Label_1.labelCounter++;
    }
    Label_1 = Label;
    /**
     * Sets the id on the input item associated with the `Label`.
     * @memberof Label
     */
    Label.prototype.ngAfterContentInit = function () {
        this.elementRef.nativeElement.querySelector("input,textarea,div").setAttribute("id", this.labelInputID);
    };
    var Label_1, _a;
    /**
     * Used to build the id of the input item associated with the `Label`.
     * @static
     * @memberof Label
     */
    Label.labelCounter = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Label.prototype, "labelState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--form-item"),
        __metadata("design:type", Object)
    ], Label.prototype, "labelClass", void 0);
    Label = Label_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-label",
            template: "\n\t\t<label [for]=\"labelInputID\" class=\"bx--label\"><ng-content></ng-content></label>\n\t\t<ng-content select=\"input,textarea,div\"></ng-content>\n\t"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _a || Object])
    ], Label);
    return Label;
}());



/***/ }),

/***/ "./src/input/text-area.directive.ts":
/*!******************************************!*\
  !*** ./src/input/text-area.directive.ts ***!
  \******************************************/
/*! exports provided: TextArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * A directive for applying styling to a textarea element.
 *
 * Example:
 *
 * ```html
 * <textarea ibmTextArea></textarea>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/text-input/code) for more detail.
 */
var TextArea = /** @class */ (function () {
    function TextArea() {
        /**
         * `light` or `dark` input theme
         */
        this.theme = "dark";
        this.baseClass = true;
    }
    Object.defineProperty(TextArea.prototype, "isLightTheme", {
        get: function () {
            return this.theme === "light";
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextArea.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--text-area"),
        __metadata("design:type", Object)
    ], TextArea.prototype, "baseClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--text-area--light"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TextArea.prototype, "isLightTheme", null);
    TextArea = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[ibmTextArea]"
        })
    ], TextArea);
    return TextArea;
}());



/***/ }),

/***/ "./src/link/link.directive.ts":
/*!************************************!*\
  !*** ./src/link/link.directive.ts ***!
  \************************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * A convinence directive for applying styling to a link.
 *
 * Example:
 *
 * ```hmtl
 * <a href="#" ibmLink>A link</a>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/link/code) for more detail.
 */
var Link = /** @class */ (function () {
    function Link() {
        this.baseClass = true;
    }
    Object.defineProperty(Link.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        /**
         * Set to true to disable link.
         * @memberof Link
         */
        set: function (disabled) {
            this._disabled = disabled;
            this.tabindex = this.disabled ? -1 : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--link"),
        __metadata("design:type", Object)
    ], Link.prototype, "baseClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.tabindex"),
        __metadata("design:type", Object)
    ], Link.prototype, "tabindex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.aria-disabled"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], Link.prototype, "disabled", null);
    Link = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[ibmLink]"
        })
    ], Link);
    return Link;
}());



/***/ }),

/***/ "./src/link/link.module.ts":
/*!*********************************!*\
  !*** ./src/link/link.module.ts ***!
  \*********************************/
/*! exports provided: Link, LinkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkModule", function() { return LinkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _link_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link.directive */ "./src/link/link.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _link_directive__WEBPACK_IMPORTED_MODULE_2__["Link"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LinkModule = /** @class */ (function () {
    function LinkModule() {
    }
    LinkModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _link_directive__WEBPACK_IMPORTED_MODULE_2__["Link"]
            ],
            exports: [
                _link_directive__WEBPACK_IMPORTED_MODULE_2__["Link"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], LinkModule);
    return LinkModule;
}());



/***/ }),

/***/ "./src/link/link.stories.ts":
/*!**********************************!*\
  !*** ./src/link/link.stories.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./src/index.ts");



Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Link", module)
    .addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [
        ___WEBPACK_IMPORTED_MODULE_2__["LinkModule"]
    ]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t\t<a href=\"#\" ibmLink [disabled]=\"disabled\">link</a>\n\t\t",
    props: {
        disabled: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["boolean"])("disabled", false)
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/list-group/list-group.component.ts":
/*!************************************************!*\
  !*** ./src/list-group/list-group.component.ts ***!
  \************************************************/
/*! exports provided: ListGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroup", function() { return ListGroup; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/a11y */ "./src/utils/a11y.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * `listTpl` binds `item` to the template context
 *
 * `items` expects an array of objects where the objects follow the format:
 * ```javascript
 * {
 * 	content: "string",
 * 	selected: false,
 * 	disabled: false //optional
 * }
 * ```
 *
 * @export
 * @class ListGroup
 */
var ListGroup = /** @class */ (function () {
    function ListGroup() {
        /**
         * The list items belonging to the `ListGroup`.
         * @type {Array<Object>}
         * @memberof ListGroup
         */
        this.items = [];
        /**
         * Template to bind to items in the `ListGroup` (optional).
         * @type {(string | TemplateRef<any>)}
         * @memberof ListGroup
         */
        this.listTpl = null;
        /**
         * Set to `true` for the `ListGroup` to have checkmark selection.
         * @type {boolean}
         * @memberof ListGroup
         */
        this.checkMark = true;
        /**
         * Event to emit selection of a list item within the `ListGroup`.
         * @type {EventEmitter<Object>}
         * @memberof ListGroup
         */
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Controls keyboard navigation and selection within the `ListGroup`.
     * @param {any} ev
     * @param {any} item
     * @memberof ListGroup
     */
    ListGroup.prototype.doKeyDown = function (ev, item) {
        if (ev.key && (ev.key === "Enter" || ev.key === " ")) {
            ev.preventDefault();
            this.doClick(ev, item);
        }
        else if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
            if (ev.key === "ArrowDown" && Object(_utils_a11y__WEBPACK_IMPORTED_MODULE_1__["findNextElem"])(ev.target)) {
                ev.preventDefault();
                Object(_utils_a11y__WEBPACK_IMPORTED_MODULE_1__["findNextElem"])(ev.target).focus();
            }
            else if (ev.key === "ArrowUp" && Object(_utils_a11y__WEBPACK_IMPORTED_MODULE_1__["findPrevElem"])(ev.target)) {
                ev.preventDefault();
                Object(_utils_a11y__WEBPACK_IMPORTED_MODULE_1__["findPrevElem"])(ev.target).focus();
            }
            if (ev.shiftKey) {
                ev.target.click();
            }
        }
    };
    /**
     * Selects the `item` parameter from the `ListGroup` if it is not disabled and emits the selection event.
     * @param {any} ev
     * @param {any} item
     * @memberof ListGroup
     */
    ListGroup.prototype.doClick = function (ev, item) {
        if (!item.disabled) {
            this.selected.emit({
                item: item
            });
        }
    };
    var _a, _b, _c, _d;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" && _a || Object)
    ], ListGroup.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListGroup.prototype, "listTpl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_c = typeof Boolean !== "undefined" && Boolean) === "function" && _c || Object)
    ], ListGroup.prototype, "checkMark", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", typeof (_d = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) === "function" && _d || Object)
    ], ListGroup.prototype, "selected", void 0);
    ListGroup = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-list-group",
            template: "\n\t\t<ul\n\t\t#listGroup\n\t\tclass=\"list-group\"\n\t\trole=\"listbox\"\n\t\t[attr.aria-multiselectable]=\"checkMark ? true : false\">\n\t\t\t<li\n\t\t\t*ngFor=\"let item of items\"\n\t\t\t(click)=\"doClick($event, item)\"\n\t\t\t(keydown)=\"doKeyDown($event, item)\"\n\t\t\t[tabindex]=\"item.disabled ? -1 : 0\"\n\t\t\trole=\"option\"\n\t\t\t[attr.aria-selected]=\"item.selected ? true : false\"\n\t\t\t[attr.aria-disabled]=\"item.disabled ? 'true' : null\">\n\t\t\t\t<ng-container *ngIf=\"!listTpl\">{{item.content}}</ng-container>\n\t\t\t\t<ng-template\n\t\t\t\t\t*ngIf=\"listTpl\"\n\t\t\t\t\t[ngTemplateOutletContext]=\"{item: item}\"\n\t\t\t\t\t[ngTemplateOutlet]=\"listTpl\">\n\t\t\t\t</ng-template>\n\t\t\t\t</li>\n\t\t</ul>\n\t\t"
        })
    ], ListGroup);
    return ListGroup;
}());



/***/ }),

/***/ "./src/list-group/list-group.module.ts":
/*!*********************************************!*\
  !*** ./src/list-group/list-group.module.ts ***!
  \*********************************************/
/*! exports provided: ListGroup, ListGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroupModule", function() { return ListGroupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-group.component */ "./src/list-group/list-group.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListGroup", function() { return _list_group_component__WEBPACK_IMPORTED_MODULE_2__["ListGroup"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListGroupModule = /** @class */ (function () {
    function ListGroupModule() {
    }
    ListGroupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _list_group_component__WEBPACK_IMPORTED_MODULE_2__["ListGroup"]
            ],
            exports: [
                _list_group_component__WEBPACK_IMPORTED_MODULE_2__["ListGroup"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        })
    ], ListGroupModule);
    return ListGroupModule;
}());



/***/ }),

/***/ "./src/loading/loading.component.ts":
/*!******************************************!*\
  !*** ./src/loading/loading.component.ts ***!
  \******************************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Loading = /** @class */ (function () {
    function Loading(i18n) {
        this.i18n = i18n;
        /**
         * Accessible title for the loading circle.
         * Defaults to the `LOADING.TITLE` value from the i18n service.
         */
        this.title = this.i18n.get().LOADING.TITLE;
        /**
         * Specify the size of the button
         * @type {("normal" | "sm")}
         * @memberof Loading
         */
        this.size = "normal";
        /**
         * Set to `true` to make loader with an overlay.
         * @type {boolean}
         * @memberof Loading
         */
        this.overlay = false;
    }
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Loading.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Loading.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--loading-overlay"),
        __metadata("design:type", Object)
    ], Loading.prototype, "overlay", void 0);
    Loading = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-loading",
            template: "\n\t\t<div\n\t\t\t[ngClass]=\"{'bx--loading--small': size === 'sm'}\"\n\t\t\tclass=\"bx--loading\">\n\t\t\t<svg class=\"bx--loading__svg\" viewBox=\"-75 -75 150 150\">\n\t\t\t\t<title>{{title}}</title>\n\t\t\t\t<circle cx=\"0\" cy=\"0\" r=\"37.5\" />\n\t\t\t</svg>\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__["I18n"] !== "undefined" && _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__["I18n"]) === "function" && _a || Object])
    ], Loading);
    return Loading;
}());



/***/ }),

/***/ "./src/loading/loading.module.ts":
/*!***************************************!*\
  !*** ./src/loading/loading.module.ts ***!
  \***************************************/
/*! exports provided: Loading, LoadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingModule", function() { return LoadingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.component */ "./src/loading/loading.component.ts");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return _loading_component__WEBPACK_IMPORTED_MODULE_2__["Loading"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoadingModule = /** @class */ (function () {
    function LoadingModule() {
    }
    LoadingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_loading_component__WEBPACK_IMPORTED_MODULE_2__["Loading"]],
            exports: [_loading_component__WEBPACK_IMPORTED_MODULE_2__["Loading"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__["I18nModule"]]
        })
    ], LoadingModule);
    return LoadingModule;
}());



/***/ }),

/***/ "./src/loading/loading.stories.ts":
/*!****************************************!*\
  !*** ./src/loading/loading.stories.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./src/index.ts");



Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Loading", module).addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [___WEBPACK_IMPORTED_MODULE_2__["LoadingModule"]]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t<ibm-loading [overlay]=\"true\"></ibm-loading>\n\t\t"
}); })
    .add("Small", function () { return ({
    template: "\n\t\t<ibm-loading size=\"sm\"></ibm-loading>\n\t\t"
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modal/alert-modal.component.ts":
/*!********************************************!*\
  !*** ./src/modal/alert-modal.component.ts ***!
  \********************************************/
/*! exports provided: AlertModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModal", function() { return AlertModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_modal_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-modal.class */ "./src/modal/base-modal.class.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


/**
 * Component to create standard modals for presenting content or asking for user's input.
 * It can show as a passive modal showing only text or show as a transactional modal with
 * multiple buttons for different actions for the user to choose from.
 *
 * Using a modal in your application requires `ibm-modal-placeholder` which would generally be
 * placed near the end of your app component template (app.component.ts or app.component.html) as:
 *
 * ```html
 * <ibm-modal-placeholder></ibm-modal-placeholder>
 * ```
 *
 * Example of opening the modal:
 *
 * ```typescript
 * \@Component({
 *  selector: "app-modal-demo",
 *  template: `
 *   <button class="btn--primary" (click)="openModal()">Open modal</button>
 *   <ibm-modal-placeholder></ibm-modal-placeholder>`
 * })
 * export class ModalDemo {
 * 	openModal() {
 * 		this.modalService.show({
 *			modalType: "default",
 *			modalLabel: "optional header text",
 *			modalTitle: "Modal modalTitle",
 *			text: "Modal text",
 *			buttons: [{
 *				text: "Button text",
 *				type: "primary",
 *				click: clickFunction
 *			}]
 *		});
 * 	}
 * }
 * ```
 *
 * @export
 * @class AlertModal
 */
var AlertModal = /** @class */ (function (_super) {
    __extends(AlertModal, _super);
    /**
     * Creates an instance of `AlertModal`.
     * @param {ModalService} modalService
     * @memberof AlertModal
     */
    function AlertModal(modalType, modalLabel, modalTitle, modalContent, buttons) {
        if (modalType === void 0) { modalType = "default"; }
        if (buttons === void 0) { buttons = []; }
        var _this = _super.call(this) || this;
        _this.modalType = modalType;
        _this.modalLabel = modalLabel;
        _this.modalTitle = modalTitle;
        _this.modalContent = modalContent;
        _this.buttons = buttons;
        for (var i = 0; i < _this.buttons.length; i++) {
            var button = _this.buttons[i];
            if (!button.id) {
                button.id = "alert-modal-button-" + i;
            }
            if (!button.type) {
                button.type = "secondary";
            }
        }
        return _this;
    }
    AlertModal.prototype.buttonClicked = function (buttonIndex) {
        var button = this.buttons[buttonIndex];
        if (button.click) {
            button.click();
        }
        this.closeModal();
    };
    AlertModal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-alert-modal",
            template: "\n\t\t<ibm-modal [theme]=\"modalType\" [modalLabel]=\"modalTitle\">\n\t\t\t<ibm-modal-header (closeSelect)=\"closeModal()\">\n\t\t\t\t<p class=\"bx--modal-header__label bx--type-delta\">{{modalLabel}}</p>\n      \t\t\t<p class=\"bx--modal-header__heading bx--type-beta\">{{modalTitle}}</p>\n\t\t\t</ibm-modal-header>\n\t\t\t<div class=\"bx--modal-content\">\n\t\t\t\t<p [innerHTML]=\"modalContent\"></p>\n\t\t\t</div>\n\t\t\t<ibm-modal-footer *ngIf=\"buttons.length > 0\">\n\t\t\t\t<ng-container *ngFor=\"let button of buttons; let i = index\">\n\t\t\t\t\t<button\n\t\t\t\t\t\tibmButton=\"{{button.type}}\"\n\t\t\t\t\t\t(click)=\"buttonClicked(i)\"\n\t\t\t\t\t\t[id]=\"button.id\"\n\t\t\t\t\t\t[attr.modal-primary-focus]=\"(button.type.indexOf('primary') !== -1 ? '' : null)\">\n\t\t\t\t\t\t{{button.text}}\n\t\t\t\t\t</button>\n\t\t\t\t</ng-container>\n\t\t\t</ibm-modal-footer>\n\t\t</ibm-modal>\n\t"
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("modalType")),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("modalLabel")),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("modalTitle")),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("modalContent")),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("buttons")),
        __metadata("design:paramtypes", [Object, String, String, String, Object])
    ], AlertModal);
    return AlertModal;
}(_base_modal_class__WEBPACK_IMPORTED_MODULE_1__["BaseModal"]));



/***/ }),

/***/ "./src/modal/alert-modal.interface.ts":
/*!********************************************!*\
  !*** ./src/modal/alert-modal.interface.ts ***!
  \********************************************/
/*! exports provided: AlertModalType, ModalButtonType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModalType", function() { return AlertModalType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalButtonType", function() { return ModalButtonType; });
var AlertModalType;
(function (AlertModalType) {
    AlertModalType["default"] = "default";
    AlertModalType["danger"] = "danger";
})(AlertModalType || (AlertModalType = {}));
var ModalButtonType;
(function (ModalButtonType) {
    ModalButtonType["primary"] = "primary";
    ModalButtonType["secondary"] = "secondary";
    ModalButtonType["tertiary"] = "tertiary";
    ModalButtonType["ghost"] = "ghost";
    ModalButtonType["danger"] = "danger";
    ModalButtonType["danger_primary"] = "danger--primary";
})(ModalButtonType || (ModalButtonType = {}));


/***/ }),

/***/ "./src/modal/base-modal.class.ts":
/*!***************************************!*\
  !*** ./src/modal/base-modal.class.ts ***!
  \***************************************/
/*! exports provided: BaseModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModal", function() { return BaseModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Extend `BaseModal` in your custom modal implementations to ensure consistent close behaviour.
 *
 * `ModalService` depends on the `close` event to correctly clean up the component.
 */
var BaseModal = /** @class */ (function () {
    function BaseModal() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BaseModal.prototype.closeModal = function () {
        this.close.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BaseModal.prototype, "close", void 0);
    return BaseModal;
}());



/***/ }),

/***/ "./src/modal/modal-footer.component.ts":
/*!*********************************************!*\
  !*** ./src/modal/modal-footer.component.ts ***!
  \*********************************************/
/*! exports provided: ModalFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFooter", function() { return ModalFooter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @export
 * @class ModalFooter
 */
var ModalFooter = /** @class */ (function () {
    function ModalFooter() {
    }
    ModalFooter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-modal-footer",
            template: "\n\t\t<footer class=\"bx--modal-footer\">\n\t\t\t<ng-content></ng-content>\n\t\t</footer>\n\t"
        })
    ], ModalFooter);
    return ModalFooter;
}());



/***/ }),

/***/ "./src/modal/modal-header.component.ts":
/*!*********************************************!*\
  !*** ./src/modal/modal-header.component.ts ***!
  \*********************************************/
/*! exports provided: ModalHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHeader", function() { return ModalHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * ***Inputs***
 * ```html
 * <ibm-modal-header>Header text</ibm-modal-header>
 * ```
 *
 * ***Outputs***
 * ```html
 * <ibm-modal-header (closeSelect)="closeModal()">Header text</ibm-modal-header>
 * ```
 *
 * @export
 * @class ModalHeader
 */
var ModalHeader = /** @class */ (function () {
    function ModalHeader(i18n) {
        this.i18n = i18n;
        /**
         * Sets the style on the modal heading based on its category.
         * @type {"default" | "warning" | "error"}
         * @memberof ModalHeader
         */
        this.theme = "default";
        /**
         * Accessible label for the header close button.
         * Defaults to the `MODAL.CLOSE` value from the i18n service.
         */
        this.closeLabel = this.i18n.get().MODAL.CLOSE;
        /**
         * To emit the event of clicking on the close icon within the modal.
         * @memberof ModalHeader
         */
        this.closeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Handles click for the close icon button within the `Modal`.
     * @memberof ModalHeader
     */
    ModalHeader.prototype.onClose = function () {
        this.closeSelect.emit();
    };
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalHeader.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalHeader.prototype, "closeLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalHeader.prototype, "closeSelect", void 0);
    ModalHeader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-modal-header",
            template: "\n\t\t<header class=\"{{theme}} bx--modal-header\">\n\t\t\t<div class=\"bx--modal-header\">\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t\t<button\n\t\t\t\tclass=\"bx--modal-close\"\n\t\t\t\t[attr.aria-label]=\"closeLabel\"\n\t\t\t\t(click)=\"onClose()\">\n\t\t\t\t<svg\n\t\t\t\t\tclass=\"bx--modal-close__icon\"\n\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\theight=\"10\"\n\t\t\t\t\trole=\"img\"\n\t\t\t\t\tviewBox=\"0 0 10 10\"\n\t\t\t\t\twidth=\"10\"\n\t\t\t\t\t[attr.aria-label]=\"closeLabel\"\n\t\t\t\t\t[attr.alt]=\"closeLabel\">\n\t\t\t\t\t<title>{{closeLabel}}</title>\n\t\t\t\t\t<path d=\"M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z\"></path>\n\t\t\t\t</svg>\n\t\t\t</button>\n\t\t</header>\n\n\t"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__["I18n"] !== "undefined" && _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__["I18n"]) === "function" && _a || Object])
    ], ModalHeader);
    return ModalHeader;
}());



/***/ }),

/***/ "./src/modal/modal-placeholder.component.ts":
/*!**************************************************!*\
  !*** ./src/modal/modal-placeholder.component.ts ***!
  \**************************************************/
/*! exports provided: ModalPlaceholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPlaceholder", function() { return ModalPlaceholder; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _placeholder_placeholder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../placeholder/placeholder.service */ "./src/placeholder/placeholder.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Deprecated with v2.0, will be removed in v3.0
 * Using a modal in your application requires *this* component (`n-modal-placeholder`).
 * It would generally be placed near the end of your app component template
 * (app.component.ts or app.component.html) as:
 *
 * ```html
 * ...
 * <ibm-modal-placeholder></ibm-modal-placeholder>
 * ```
 *
 * A more complete example for `Modal` is given as follows:
 *
 * ```html
 * <ibm-modal size="xl" (overlaySelected)="closeModal()">
 * 	<ibm-modal-header (closeSelect)="closeModal()">Header text</ibm-modal-header>
 * 	<section class="modal-body">
 * 		<h1>It Works!</h1>
 * 		{{modalText}}
 * 	</section>
 * 	<ibm-modal-footer><button class="btn cancel-button" (click)="closeModal()">Cancel</button></ibm-modal-footer>
 * </ibm-modal>
 * ...
 * <ibm-modal-placeholder></ibm-modal-placeholder>
 * ```
 *
 * @deprecated
 */
var ModalPlaceholder = /** @class */ (function () {
    /**
     * Creates an instance of `ModalPlaceholder`.
     */
    function ModalPlaceholder(placeholderService) {
        this.placeholderService = placeholderService;
    }
    /**
     * Initializes the component using `ModalService`.
     */
    ModalPlaceholder.prototype.ngOnInit = function () {
        console.warn("`ibm-dialog-placeholder` has been deprecated in favour of `ibm-placeholder`");
        this.placeholderService.registerViewContainerRef(this.viewContainerRef);
    };
    var _a, _b;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("modalplaceholder", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]) === "function" && _a || Object)
    ], ModalPlaceholder.prototype, "viewContainerRef", void 0);
    ModalPlaceholder = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-modal-placeholder",
            template: "<div #modalplaceholder></div>"
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof _placeholder_placeholder_service__WEBPACK_IMPORTED_MODULE_1__["PlaceholderService"] !== "undefined" && _placeholder_placeholder_service__WEBPACK_IMPORTED_MODULE_1__["PlaceholderService"]) === "function" && _b || Object])
    ], ModalPlaceholder);
    return ModalPlaceholder;
}());



/***/ }),

/***/ "./src/modal/modal.component.ts":
/*!**************************************!*\
  !*** ./src/modal/modal.component.ts ***!
  \**************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.service */ "./src/modal/modal.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _common_tab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../common/tab.service */ "./src/common/tab.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Component to create modals for presenting content.
 *
 * Using a modal in your application requires `ibm-modal-placeholder` which would generally be
 * placed near the end of your app component template (app.component.ts or app.component.html) as:
 *
 * ```html
 * <ibm-modal-placeholder></ibm-modal-placeholder>
 * ```
 *
 * A more complete example for `Modal` is given as follows:
 *
 * Example modal definition:
 *
 * ```typescript
 * \@Modal()
 * \@Component({
 * 	selector: "app-sample-modal",
 * 	template: `
 *		<ibm-modal size="xl">
 * 			<ibm-modal-header (closeSelect)="closeModal()">Header text</ibm-modal-header>
 * 			<section class="modal-body">
 * 			<h1>Sample modal works.</h1>
 * 			<button class="btn--icon-link" nPopover="Hello there" title="Popover title" placement="right" appendInline="true">
 * 				<ibm-icon icon="info" size="sm"></ibm-icon>
 * 			</button>
 * 			{{modalText}}
 * 			</section>
 * 			<ibm-modal-footer><button ibmButton="primary" (click)="closeModal()">Close</button></ibm-modal-footer>
 * 		</ibm-modal>`,
 * 	styles: [require('./sample-modal.component.scss')]
 * })
 * export class SampleModal {
 * 	closeModal: any; // placeholder for the closeModal method provided by the Modal decorator
 * 	modalText: string;
 * 	constructor(protected injector: Injector) {
 * 		this.modalText = this.injector.get("modalText");
 * 	}
 * }
 * ```
 *
 * Example of opening the modal:
 *
 * ```typescript
 * \@Component({
 *  selector: "app-modal-demo",
 *  template: `
 *   <button ibmButton="primary" (click)="openModal('drill')">Drill-down modal</button>
 *   <ibm-modal-placeholder></ibm-modal-placeholder>`
 * })
 * export class ModalDemo {
 * 	openModal() {
 * 		this.modalService.create({component: SampleModal, inputs: {modalText: "Hello universe."}});
 * 	}
 * }
 * ```
 *
 */
var Modal = /** @class */ (function () {
    /**
     * Creates an instance of `Modal`.
     */
    function Modal(modalService) {
        this.modalService = modalService;
        /**
         * Size of the modal to display.
         */
        this.size = "md";
        /**
         * Classification of the modal.
         */
        this.theme = "default";
        /**
         * Label for the modal.
         */
        this.modalLabel = "default";
        /**
         * Emits event when click occurs within `n-overlay` element. This is to track click events occuring outside bounds of the `Modal` object.
         */
        this.overlaySelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * To emit the closing event of the modal window.
         */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Controls the transitions of the `Modal` component.
         */
        this.modalState = "out";
        /**
         * An element should have 'data-modal-primary-focus' as an attribute to receive initial focus within the `Modal` component.
         */
        this.selectorPrimaryFocus = "[modal-primary-focus]";
    }
    /**
     * Set modalState on the modal component when it is initialized.
     */
    Modal.prototype.ngOnInit = function () {
        this.modalState = "in";
    };
    /**
     * Set document focus to be on the modal component after it is initialized.
     */
    Modal.prototype.ngAfterViewInit = function () {
        var primaryFocusElement = this.modal.nativeElement.querySelector(this.selectorPrimaryFocus);
        if (primaryFocusElement && primaryFocusElement.focus) {
            primaryFocusElement.focus();
            return;
        }
        if (Object(_common_tab_service__WEBPACK_IMPORTED_MODULE_3__["getFocusElementList"])(this.modal.nativeElement).length > 0) {
            Object(_common_tab_service__WEBPACK_IMPORTED_MODULE_3__["getFocusElementList"])(this.modal.nativeElement)[0].focus();
        }
        else {
            this.modal.nativeElement.focus();
        }
    };
    /**
     * Emit the close event when the modal component is destroyed.
     */
    Modal.prototype.ngOnDestroy = function () {
        this.modalState = "out";
    };
    /**
     * Handle keyboard events to close modal and tab through the content within the modal.
     */
    Modal.prototype.handleKeyboardEvent = function (event) {
        switch (event.key) {
            case "Escape": {
                event.stopImmediatePropagation(); // prevents events being fired for multiple modals if more than 2 open
                this.modalService.destroy(); // destroy top (latest) modal
                break;
            }
            case "Tab": {
                Object(_common_tab_service__WEBPACK_IMPORTED_MODULE_3__["cycleTabs"])(event, this.modal.nativeElement);
                break;
            }
        }
    };
    var _a, _b, _c;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], Modal.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], Modal.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], Modal.prototype, "modalLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], Modal.prototype, "overlaySelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], Modal.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modal"),
        __metadata("design:type", typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]) === "function" && _a || Object)
    ], Modal.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_b = typeof KeyboardEvent !== "undefined" && KeyboardEvent) === "function" && _b || Object]),
        __metadata("design:returntype", void 0)
    ], Modal.prototype, "handleKeyboardEvent", null);
    Modal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ibm-modal",
            template: "\n\t\t<ibm-overlay [theme]=\"theme\" (overlaySelect)=\"overlaySelected.emit()\">\n\t\t\t<div\n\t\t\t\tclass=\"bx--modal-container\"\n\t\t\t\t[@modalState]=\"modalState\"\n\t\t\t\trole=\"dialog\"\n\t\t\t\taria-modal=\"true\"\n\t\t\t\ttabindex=\"0\"\n\t\t\t\tstyle=\"z-index:1;\"\n\t\t\t\t[attr.aria-label]=\"modalLabel\"\n\t\t\t\t#modal>\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t</ibm-overlay>\n\t",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("modalState", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translate(0, 5%)", opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("200ms ease-in")
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translate(0, 5%)", opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof _modal_service__WEBPACK_IMPORTED_MODULE_0__["ModalService"] !== "undefined" && _modal_service__WEBPACK_IMPORTED_MODULE_0__["ModalService"]) === "function" && _c || Object])
    ], Modal);
    return Modal;
}());



/***/ }),

/***/ "./src/modal/modal.decorator.ts":
/*!**************************************!*\
  !*** ./src/modal/modal.decorator.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * # Deprecated - extend `BaseModal` instead
 *
 * Decorator used to apply metadata on `Modal` class.
 *
 * class: ModalContainer
 *
 * decorator: @Modal
 * @deprecated
 */
var ModalContainer = /** @class */ (function () {
    function ModalContainer() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalContainer.prototype.closeModal = function () {
        this.close.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalContainer.prototype, "close", void 0);
    return ModalContainer;
}());
/**
 * Applying the decorator metadata to the target class (`Modal`).
 * @export
 * @returns {Object}
 */
function Modal() {
    return function (target) {
        Object.assign(target.prototype, ModalContainer.prototype);
    };
}


/***/ }),

/***/ "./src/modal/modal.module.ts":
/*!***********************************!*\
  !*** ./src/modal/modal.module.ts ***!
  \***********************************/
/*! exports provided: Modal, ModalService, AlertModalType, ModalButtonType, BaseModal, ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icon_static_icon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../icon/static-icon.module */ "./src/icon/static-icon.module.ts");
/* harmony import */ var _modal_placeholder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-placeholder.component */ "./src/modal/modal-placeholder.component.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "./src/modal/modal.service.ts");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.component */ "./src/modal/modal.component.ts");
/* harmony import */ var _modal_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-footer.component */ "./src/modal/modal-footer.component.ts");
/* harmony import */ var _overlay_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overlay.component */ "./src/modal/overlay.component.ts");
/* harmony import */ var _modal_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal-header.component */ "./src/modal/modal-header.component.ts");
/* harmony import */ var _alert_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alert-modal.component */ "./src/modal/alert-modal.component.ts");
/* harmony import */ var _forms_forms_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../forms/forms.module */ "./src/forms/forms.module.ts");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
/* harmony import */ var _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../placeholder/placeholder.module */ "./src/placeholder/placeholder.module.ts");
/* harmony import */ var _modal_decorator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal.decorator */ "./src/modal/modal.decorator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _modal_decorator__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]; });

/* harmony import */ var _alert_modal_interface__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./alert-modal.interface */ "./src/modal/alert-modal.interface.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModalType", function() { return _alert_modal_interface__WEBPACK_IMPORTED_MODULE_14__["AlertModalType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalButtonType", function() { return _alert_modal_interface__WEBPACK_IMPORTED_MODULE_14__["ModalButtonType"]; });

/* harmony import */ var _base_modal_class__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./base-modal.class */ "./src/modal/base-modal.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseModal", function() { return _base_modal_class__WEBPACK_IMPORTED_MODULE_15__["BaseModal"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// modules



// imports










// exports




var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _alert_modal_component__WEBPACK_IMPORTED_MODULE_9__["AlertModal"],
                _modal_placeholder_component__WEBPACK_IMPORTED_MODULE_3__["ModalPlaceholder"],
                _modal_component__WEBPACK_IMPORTED_MODULE_5__["Modal"],
                _modal_header_component__WEBPACK_IMPORTED_MODULE_8__["ModalHeader"],
                _modal_footer_component__WEBPACK_IMPORTED_MODULE_6__["ModalFooter"],
                _overlay_component__WEBPACK_IMPORTED_MODULE_7__["Overlay"]
            ],
            exports: [
                _alert_modal_component__WEBPACK_IMPORTED_MODULE_9__["AlertModal"],
                _modal_placeholder_component__WEBPACK_IMPORTED_MODULE_3__["ModalPlaceholder"],
                _modal_component__WEBPACK_IMPORTED_MODULE_5__["Modal"],
                _modal_header_component__WEBPACK_IMPORTED_MODULE_8__["ModalHeader"],
                _modal_footer_component__WEBPACK_IMPORTED_MODULE_6__["ModalFooter"]
            ],
            entryComponents: [
                _alert_modal_component__WEBPACK_IMPORTED_MODULE_9__["AlertModal"],
                _modal_component__WEBPACK_IMPORTED_MODULE_5__["Modal"],
                _modal_footer_component__WEBPACK_IMPORTED_MODULE_6__["ModalFooter"],
                _modal_header_component__WEBPACK_IMPORTED_MODULE_8__["ModalHeader"]
            ],
            providers: [_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _forms_forms_module__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
                _icon_static_icon_module__WEBPACK_IMPORTED_MODULE_2__["StaticIconModule"],
                _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_11__["I18nModule"],
                _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_12__["PlaceholderModule"]
            ]
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ }),

/***/ "./src/modal/modal.service.ts":
/*!************************************!*\
  !*** ./src/modal/modal.service.ts ***!
  \************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-modal.component */ "./src/modal/alert-modal.component.ts");
/* harmony import */ var _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../placeholder/placeholder.module */ "./src/placeholder/placeholder.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Modal service handles instantiating and destroying modal instances.
 * Uses ModalPlaceholderService to track open instances, and for it's placeholder view reference.
 *
 * ```typescript
 * export class ModalService {
 * 	registerViewContainerRef(vcRef: ViewContainerRef): void {}
 * 	create<T>(data: {component: any, inputs?: any}): void {}
 * 	destroy(index: number = -1): void {}
 * }
 * ```
 * @export
 * @class ModalService
 */
var ModalService = /** @class */ (function () {
    /**
     * Creates an instance of `ModalService`.
     * @param {ComponentFactoryResolver} resolver
     * @memberof ModalService
     */
    function ModalService(resolver, placeholderService) {
        this.resolver = resolver;
        this.placeholderService = placeholderService;
    }
    ModalService_1 = ModalService;
    /**
     * Creates and renders the modal component that is passed in.
     * `inputs` is an optional parameter of `data` that can be passed to the `Modal` component.
     * @template T
     * @param {{component: any, inputs?: any}} data
     * @returns {ComponentRef<any>}
     * @memberof ModalService
     */
    ModalService.prototype.create = function (data) {
        var _this = this;
        var defaults = { inputs: {} };
        data = Object.assign({}, defaults, data);
        var inputProviders = Object.keys(data.inputs).map(function (inputName) { return ({ provide: inputName, useValue: data.inputs[inputName] }); });
        var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create(inputProviders);
        var factory = this.resolver.resolveComponentFactory(data.component);
        var focusedElement = document.activeElement;
        var component = this.placeholderService.createComponent(factory, injector);
        component["previouslyFocusedElement"] = focusedElement; // used to return focus to previously focused element
        component.instance.close.subscribe(function (_) {
            _this.placeholderService.destroyComponent(component);
            // filter out our component
            ModalService_1.modalList = ModalService_1.modalList.filter(function (c) { return c === component; });
        });
        component.onDestroy(function () {
            focusedElement.focus();
        });
        ModalService_1.modalList.push(component);
        return component;
    };
    /**
     * Creates and renders a new alert modal component.
     * @param data You can pass in:
     * `modalType` - "default" | "danger" = "default",
     * `modalLabel` - a label shown over the title,
     * `modalTitle` - modal's title,
     * `modalContent` - modal's content, could include HTML tags.
     * `buttons` is an array of objects
     * ```
     * {
     * 		text: "Button text",
     * 		type: "primary" | "secondary" | "tertiary" | "ghost" | "danger" | "danger--primary" = "primary",
     * 		click: clickFunction,
     * }
     * ```
     * @returns {ComponentRef<any>}
     * @memberof ModalService
     */
    ModalService.prototype.show = function (data) {
        for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
            var key = _a[_i];
            if (["modalType", "modalLabel", "modalTitle", "modalContent"].includes(key)) {
                try {
                    throw new Error(key + " is deprecated, use " + key.replace("modal", "").toLowerCase() + " instead");
                }
                catch (error) {
                    console.warn(error);
                }
            }
        }
        return this.create({
            component: _alert_modal_component__WEBPACK_IMPORTED_MODULE_1__["AlertModal"],
            inputs: {
                modalType: data.type || data.modalType,
                modalLabel: data.label || data.modalLabel,
                modalTitle: data.title || data.modalTitle,
                modalContent: data.content || data.modalContent,
                buttons: data.buttons || []
            }
        });
    };
    /**
     * Destroys the modal on the supplied index.
     * When called without parameters it destroys the most recently created/top most modal.
     *
     * @param {any} [index=-1]
     * @returns
     * @memberof ModalService
     */
    ModalService.prototype.destroy = function (index) {
        if (index === void 0) { index = -1; }
        // return if nothing to destroy because it's already destroyed
        if (index >= ModalService_1.modalList.length || ModalService_1.modalList.length === 0) {
            return;
        }
        // on negative index destroy the last on the list (top modal)
        if (index < 0) {
            index = ModalService_1.modalList.length - 1;
        }
        this.placeholderService.destroyComponent(ModalService_1.modalList[index]);
        ModalService_1.modalList.splice(index, 1);
    };
    var ModalService_1, _a, _b;
    // track all our open modals
    ModalService.modalList = [];
    ModalService = ModalService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]) === "function" && _a || Object, typeof (_b = typeof _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_2__["PlaceholderService"] !== "undefined" && _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_2__["PlaceholderService"]) === "function" && _b || Object])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/modal/modal.stories.ts":
/*!************************************!*\
  !*** ./src/modal/modal.stories.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _alert_modal_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert-modal.interface */ "./src/modal/alert-modal.interface.ts");
/* harmony import */ var _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../placeholder/placeholder.module */ "./src/placeholder/placeholder.module.ts");
/* harmony import */ var _base_modal_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base-modal.class */ "./src/modal/base-modal.class.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var SampleModal = /** @class */ (function (_super) {
    __extends(SampleModal, _super);
    function SampleModal(modalText) {
        var _this = _super.call(this) || this;
        _this.modalText = modalText;
        return _this;
    }
    SampleModal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-sample-modal",
            template: "\n\t\t<ibm-modal>\n\t\t\t<ibm-modal-header (closeSelect)=\"closeModal()\">Header label</ibm-modal-header>\n\t\t\t<section class=\"bx--modal-content\">\n\t\t\t\t<h1>Sample modal works.</h1>\n\t\t\t\t<p class=\"bx--modal-content__text\">{{modalText}}</p>\n\t\t\t</section>\n\t\t\t<ibm-modal-footer>\n\t\t\t\t<button class=\"bx--btn bx--btn--primary\" modal-primary-focus (click)=\"closeModal()\">Close</button>\n\t\t\t</ibm-modal-footer>\n\t\t</ibm-modal>\n\t"
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])("modalText")),
        __metadata("design:paramtypes", [Object])
    ], SampleModal);
    return SampleModal;
}(_base_modal_class__WEBPACK_IMPORTED_MODULE_7__["BaseModal"]));
var ModalStory = /** @class */ (function () {
    function ModalStory(modalService) {
        this.modalService = modalService;
        this.modalText = "Hello, World";
    }
    ModalStory.prototype.openModal = function () {
        this.modalService.create({
            component: SampleModal,
            inputs: {
                modalText: this.modalText
            }
        });
    };
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Object)
    ], ModalStory.prototype, "modalText", void 0);
    ModalStory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-modal-story",
            template: "\n\t\t<button class=\"bx--btn bx--btn--primary\" (click)=\"openModal()\">Open Modal</button>\n\t"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof ___WEBPACK_IMPORTED_MODULE_2__["ModalService"] !== "undefined" && ___WEBPACK_IMPORTED_MODULE_2__["ModalService"]) === "function" && _a || Object])
    ], ModalStory);
    return ModalStory;
}());
var AlertModalStory = /** @class */ (function () {
    function AlertModalStory(modalService) {
        this.modalService = modalService;
    }
    AlertModalStory.prototype.openModal = function () {
        this.modalService.show({
            modalType: this.modalType,
            label: this.modalLabel,
            title: this.modalTitle,
            content: this.modalContent,
            buttons: this.buttons
        });
    };
    var _b, _c, _d;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", typeof (_b = typeof _alert_modal_interface__WEBPACK_IMPORTED_MODULE_5__["AlertModalType"] !== "undefined" && _alert_modal_interface__WEBPACK_IMPORTED_MODULE_5__["AlertModalType"]) === "function" && _b || Object)
    ], AlertModalStory.prototype, "modalType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", String)
    ], AlertModalStory.prototype, "modalLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", String)
    ], AlertModalStory.prototype, "modalTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", String)
    ], AlertModalStory.prototype, "modalContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" && _c || Object)
    ], AlertModalStory.prototype, "buttons", void 0);
    AlertModalStory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-alert-modal-story",
            template: "\n\t\t<button class=\"bx--btn bx--btn--primary\" (click)=\"openModal()\">Open Modal</button>\n\t"
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof ___WEBPACK_IMPORTED_MODULE_2__["ModalService"] !== "undefined" && ___WEBPACK_IMPORTED_MODULE_2__["ModalService"]) === "function" && _d || Object])
    ], AlertModalStory);
    return AlertModalStory;
}());
Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Modal", module)
    .addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    declarations: [
        ModalStory,
        SampleModal,
        AlertModalStory
    ],
    imports: [
        ___WEBPACK_IMPORTED_MODULE_2__["ModalModule"],
        _placeholder_placeholder_module__WEBPACK_IMPORTED_MODULE_6__["PlaceholderModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
    ],
    entryComponents: [
        SampleModal
    ]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t<app-modal-story [modalText]=\"modalText\"></app-modal-story>\n\t\t<ibm-placeholder></ibm-placeholder>\n\t\t",
    props: {
        modalText: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["text"])("modalText", "Hello, World!")
    }
}); })
    .add("Transactional", function () { return ({
    template: "\n\t\t<app-alert-modal-story\n\t\t\t[modalType]=\"modalType\"\n\t\t\t[modalLabel]=\"modalLabel\"\n\t\t\t[modalTitle]=\"modalTitle\"\n\t\t\t[modalContent]=\"modalContent\"\n\t\t\t[buttons]=\"buttons\">\n\t\t</app-alert-modal-story>\n\t\t<ibm-placeholder></ibm-placeholder>\n\t\t",
    props: {
        modalType: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["select"])("modalType", ["default", "danger"], "default"),
        modalLabel: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["text"])("modalLabel", "optional label"),
        modalTitle: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["text"])("modalTitle", "Delete service from application"),
        modalContent: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["text"])("modalContent", "Are you sure you want to remove the Speech to Text service from the node-test app?"),
        buttons: [{
                text: "Cancel",
                type: "secondary"
            }, {
                text: "Delete",
                type: "primary",
                click: function () { return alert("Delete button clicked"); }
            }]
    }
}); })
    .add("Passive", function () { return ({
    template: "\n\t\t<app-alert-modal-story\n\t\t\t[modalType]=\"modalType\"\n\t\t\t[modalLabel]=\"modalLabel\"\n\t\t\t[modalTitle]=\"modalTitle\"\n\t\t\t[modalContent]=\"modalContent\">\n\t\t</app-alert-modal-story>\n\t\t<ibm-placeholder></ibm-placeholder>\n\t\t",
    props: {
        modalType: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["select"])("modalType", ["default", "danger"], "default"),
        modalLabel: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["text"])("modalLabel", "optional label"),
        modalTitle: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["text"])("modalTitle", "Passive modal title"),
        modalContent: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["text"])("modalContent", "Passive modal notifications should only appear if there is an action " +
            "the user needs to address immediately. Passive modal notifications are persistent on screen")
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modal/overlay.component.ts":
/*!****************************************!*\
  !*** ./src/modal/overlay.component.ts ***!
  \****************************************/
/*! exports provided: Overlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Component for the overlay object that acts as a backdrop to the `Modal` component.
 *
 * The main purpose for this component is to be able to handle click events that fall outside
 * the bounds of the `Modal` component.
 */
var Overlay = /** @class */ (function () {
    function Overlay() {
        /**
         * Classification of the modal.
         */
        this.theme = "default";
        /**
         * To emit the event where the user selects the overlay behind the `Modal`.
         */
        this.overlaySelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Handles the user clicking on the `Overlay` which resides outside the `Modal` object.
     */
    Overlay.prototype.overlayClick = function (event) {
        if (event.target !== this.overlay.nativeElement) {
            return;
        }
        event.stopPropagation();
        this.overlaySelect.emit(event);
    };
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Overlay.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Overlay.prototype, "overlaySelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("overlay"),
        __metadata("design:type", typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _a || Object)
    ], Overlay.prototype, "overlay", void 0);
    Overlay = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-overlay",
            template: "\n\t\t<section\n\t\t\tclass=\"bx--modal bx--modal-tall is-visible\"\n\t\t\t[ngClass]=\"{'bx--modal--danger': theme === 'danger'}\"\n\t\t\t(click)=\"overlayClick($event)\"\n\t\t\t#overlay>\n\t\t\t<ng-content></ng-content>\n\t\t</section>\n\t"
        })
    ], Overlay);
    return Overlay;
}());



/***/ }),

/***/ "./src/notification/notification-content.interface.ts":
/*!************************************************************!*\
  !*** ./src/notification/notification-content.interface.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/notification/notification-display.service.ts":
/*!**********************************************************!*\
  !*** ./src/notification/notification-display.service.ts ***!
  \**********************************************************/
/*! exports provided: NotificationDisplayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDisplayService", function() { return NotificationDisplayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationDisplayService = /** @class */ (function () {
    function NotificationDisplayService(applicationRef) {
        this.applicationRef = applicationRef;
    }
    /**
     * Programatically closes notification based on `notificationRef`.	 *
     */
    NotificationDisplayService.prototype.close = function (notificationRef) {
        var _this = this;
        if (notificationRef.hostView) {
            setTimeout(function () {
                _this.applicationRef.detachView(notificationRef.hostView);
                notificationRef.destroy();
            }, 200);
        }
    };
    var _a;
    NotificationDisplayService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]) === "function" && _a || Object])
    ], NotificationDisplayService);
    return NotificationDisplayService;
}());



/***/ }),

/***/ "./src/notification/notification.component.ts":
/*!****************************************************!*\
  !*** ./src/notification/notification.component.ts ***!
  \****************************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_content_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-content.interface */ "./src/notification/notification-content.interface.ts");
/* harmony import */ var _notification_content_interface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_notification_content_interface__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
/* harmony import */ var _notification_display_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-display.service */ "./src/notification/notification-display.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Notification messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * @export
 * @class Notification
 */
var Notification = /** @class */ (function () {
    function Notification(notificationDisplayService, i18n) {
        this.notificationDisplayService = notificationDisplayService;
        this.i18n = i18n;
        /**
         * Emits on close.
         *
         * @type {EventEmitter<any>}
         * @memberof Notification
         */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notificationID = "notification";
        this.notificationClass = true;
        this.role = "alert";
        this.defaultNotificationObj = {
            title: "",
            message: "",
            type: "info",
            closeLabel: this.i18n.get().NOTIFICATION.CLOSE_BUTTON
        };
        this._notificationObj = Object.assign({}, this.defaultNotificationObj);
    }
    Object.defineProperty(Notification.prototype, "notificationObj", {
        /**
         * Can have `type`, `title`, and `message` members.
         *
         * `type` can be one of `"info"`, `"warning"`, `"danger"`, `"success"`
         *
         * `message` is message for notification to display
         *
         */
        get: function () {
            return this._notificationObj;
        },
        set: function (obj) {
            this._notificationObj = Object.assign({}, this.defaultNotificationObj, obj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "isError", {
        get: function () { return this.notificationObj.type === "error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "isInfo", {
        get: function () { return this.notificationObj.type === "info"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "isSuccess", {
        get: function () { return this.notificationObj.type === "success"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "isWarning", {
        get: function () { return this.notificationObj.type === "warning"; },
        enumerable: true,
        configurable: true
    });
    /**
     * Emits close event.
     *
     * @memberof Notification
     */
    Notification.prototype.onClose = function () {
        this.close.emit();
    };
    Notification.prototype.destroy = function () {
        this.notificationDisplayService.close(this);
    };
    var _a, _b, _c, _d, _e;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof _notification_content_interface__WEBPACK_IMPORTED_MODULE_1__["NotificationContent"] !== "undefined" && _notification_content_interface__WEBPACK_IMPORTED_MODULE_1__["NotificationContent"]) === "function" && _a || Object),
        __metadata("design:paramtypes", [typeof (_b = typeof _notification_content_interface__WEBPACK_IMPORTED_MODULE_1__["NotificationContent"] !== "undefined" && _notification_content_interface__WEBPACK_IMPORTED_MODULE_1__["NotificationContent"]) === "function" && _b || Object])
    ], Notification.prototype, "notificationObj", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) === "function" && _c || Object)
    ], Notification.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("notification"),
        __metadata("design:type", Object)
    ], Notification.prototype, "notification", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.id"),
        __metadata("design:type", Object)
    ], Notification.prototype, "notificationID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--inline-notification"),
        __metadata("design:type", Object)
    ], Notification.prototype, "notificationClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.role"),
        __metadata("design:type", Object)
    ], Notification.prototype, "role", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--inline-notification--error"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Notification.prototype, "isError", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--inline-notification--info"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Notification.prototype, "isInfo", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--inline-notification--success"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Notification.prototype, "isSuccess", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--inline-notification--warning"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Notification.prototype, "isWarning", null);
    Notification = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-notification",
            template: "\n\t\t<div class=\"bx--inline-notification__details\">\n\t\t\t<svg class=\"bx--inline-notification__icon\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t<path d=\"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM3.293 4.707l8 8 1.414-1.414-8-8-1.414 1.414z\" fill-rule=\"evenodd\"/>\n\t\t\t</svg>\n\t\t\t<div class=\"bx--inline-notification__text-wrapper\">\n\t\t\t\t<p [innerHTML]=\"notificationObj.title\" class=\"bx--inline-notification__title\"></p>\n\t\t\t\t<p [innerHTML]=\"notificationObj.message\" class=\"bx--inline-notification__subtitle\"></p>\n\t\t\t</div>\n\t\t</div>\n\t\t<button\n\t\t\t(click)=\"onClose()\"\n\t\t\tclass=\"bx--inline-notification__close-button\"\n\t\t\t[attr.aria-label]=\"notificationObj.closeLabel\"\n\t\t\ttype=\"button\">\n\t\t\t<svg\n\t\t\t\tclass=\"bx--inline-notification__close-icon\"\n\t\t\t\twidth=\"10\"\n\t\t\t\theight=\"10\"\n\t\t\t\tviewBox=\"0 0 10 10\"\n\t\t\t\txmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t<path d=\"M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z\" fill-rule=\"nonzero\"/>\n\t\t\t</svg>\n\t\t</button>\n\t"
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof _notification_display_service__WEBPACK_IMPORTED_MODULE_3__["NotificationDisplayService"] !== "undefined" && _notification_display_service__WEBPACK_IMPORTED_MODULE_3__["NotificationDisplayService"]) === "function" && _d || Object, typeof (_e = typeof _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_2__["I18n"] !== "undefined" && _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_2__["I18n"]) === "function" && _e || Object])
    ], Notification);
    return Notification;
}());



/***/ }),

/***/ "./src/notification/notification.module.ts":
/*!*************************************************!*\
  !*** ./src/notification/notification.module.ts ***!
  \*************************************************/
/*! exports provided: NotificationService, NotificationDisplayService, Notification, Toast, NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icon_static_icon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../icon/static-icon.module */ "./src/icon/static-icon.module.ts");
/* harmony import */ var _toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast.component */ "./src/notification/toast.component.ts");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification.component */ "./src/notification/notification.component.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification.service */ "./src/notification/notification.service.ts");
/* harmony import */ var _notification_display_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification-display.service */ "./src/notification/notification-display.service.ts");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return _notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationDisplayService", function() { return _notification_display_service__WEBPACK_IMPORTED_MODULE_6__["NotificationDisplayService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _notification_component__WEBPACK_IMPORTED_MODULE_4__["Notification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _toast_component__WEBPACK_IMPORTED_MODULE_3__["Toast"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var NotificationModule = /** @class */ (function () {
    function NotificationModule() {
    }
    NotificationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _notification_component__WEBPACK_IMPORTED_MODULE_4__["Notification"],
                _toast_component__WEBPACK_IMPORTED_MODULE_3__["Toast"]
            ],
            exports: [
                _notification_component__WEBPACK_IMPORTED_MODULE_4__["Notification"],
                _toast_component__WEBPACK_IMPORTED_MODULE_3__["Toast"]
            ],
            entryComponents: [_notification_component__WEBPACK_IMPORTED_MODULE_4__["Notification"], _toast_component__WEBPACK_IMPORTED_MODULE_3__["Toast"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _icon_static_icon_module__WEBPACK_IMPORTED_MODULE_2__["StaticIconModule"], _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_7__["I18nModule"]],
            providers: [_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"], _notification_display_service__WEBPACK_IMPORTED_MODULE_6__["NotificationDisplayService"]]
        })
    ], NotificationModule);
    return NotificationModule;
}());



/***/ }),

/***/ "./src/notification/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/notification/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component */ "./src/notification/notification.component.ts");
/* harmony import */ var _toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast.component */ "./src/notification/toast.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Provides a way to use the notification component.
 *
 * Notifications are displayed toward the top of the UI and do not interrupt the user’s work.
 *
 * @export
 * @class NotificationService
 */
var NotificationService = /** @class */ (function () {
    /**
     * Constructs NotificationService.
     *
     * @param {Injector} injector
     * @param {ComponentFactoryResolver} componentFactoryResolver
     * @param {ApplicationRef} applicationRef
     * @memberof NotificationService
     */
    function NotificationService(injector, componentFactoryResolver, applicationRef) {
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        /**
         * An array containing `ComponentRef`s to all the notifications this service instance
         * is responsible for.
         *
         * @memberof NotificationService
         */
        this.notificationRefs = new Array();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Shows the notification based on the `notificationObj`.
     *
     * @param {any} notificationObj Can have `type`, `message`, `target`, `duration` and `smart` members.
     *
     * **Members:**
     *
     * * `type` can be one of `"info"`, `"warning"`, `"danger"`, `"success"`
     * * `message` is message for notification to display
     * * `target` is css selector defining an element to append notification to. If not provided,
     * `showNotification()` creates a place for the notification in `body`
     * * `duration` is number of ms to close the notification after. If used in combination with `smart`,
     * it's added to the calculated timeout
     * * `smart`, set to `true` if you want to use smart notification.
     *
     * **Example:**
     * ```typescript
     * // Info notification, saying "Sample message." added to the element with id notification-container
     * // uses smart timeout with added duration of 1 second.
     * {
     *	type: "info",
     *	message: "Sample message.",
     *	target: "#notification-container",
     *	duration: 1000,
     *	smart: true
     * }
     * ```
     *
     * @param {any} [notificationComp=Notification] If provided, used to resolve component factory
     * @memberof NotificationService
     */
    NotificationService.prototype.showNotification = function (notificationObj, notificationComp) {
        var _this = this;
        if (notificationComp === void 0) { notificationComp = _notification_component__WEBPACK_IMPORTED_MODULE_1__["Notification"]; }
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(notificationComp);
        var notificationRef = componentFactory.create(this.injector);
        notificationRef.instance.notificationObj = notificationObj; // typescript isn't being very smart here, so we type to any
        this.notificationRefs.push(notificationRef);
        this.onClose = notificationRef.instance.close;
        this.applicationRef.attachView(notificationRef.hostView);
        if (notificationObj.target) {
            document.querySelector(notificationObj.target).appendChild(notificationRef.location.nativeElement);
        }
        else {
            var body = document.querySelector("body");
            // get or create a container for alert list
            var notificationClassName = "notification-overlay";
            var notificationList = body.querySelector("." + notificationClassName);
            if (!notificationList) {
                notificationList = document.createElement("div");
                notificationList.className = notificationClassName;
                body.appendChild(notificationList);
            }
            // add the notification to the top of the list
            if (notificationList.firstChild) {
                notificationList.insertBefore(notificationRef.location.nativeElement, notificationList.firstChild);
            }
            else {
                notificationList.appendChild(notificationRef.location.nativeElement);
            }
        }
        if (notificationObj.duration && notificationObj.duration > 0) {
            setTimeout(function () {
                _this.close(notificationRef);
            }, notificationObj.duration);
        }
        if (notificationObj.smart) {
            // let it disappear after calculated timeout
            setTimeout(function () {
                _this.close(notificationRef);
            }, this.getSmartTimeout(notificationObj));
        }
        this.onClose.subscribe(function () {
            _this.close(notificationRef);
        });
        notificationRef.instance.componentRef = notificationRef;
        return notificationRef.instance;
    };
    NotificationService.prototype.showToast = function (notificationObj, notificationComp) {
        if (notificationComp === void 0) { notificationComp = _toast_component__WEBPACK_IMPORTED_MODULE_2__["Toast"]; }
        return this.showNotification(notificationObj, notificationComp);
    };
    /**
     * Programatically closes notification based on `notificationRef`.
     *
     * @param notificationRef `ComponentRef` of a notification or `Notification` component you wish to close
     * @memberof NotificationService
     */
    NotificationService.prototype.close = function (notificationRef) {
        var _this = this;
        if (notificationRef) {
            if (notificationRef instanceof _notification_component__WEBPACK_IMPORTED_MODULE_1__["Notification"]) {
                this.close(notificationRef.componentRef);
            }
            else {
                setTimeout(function () {
                    _this.applicationRef.detachView(notificationRef.hostView);
                    notificationRef.destroy();
                }, 200);
            }
        }
    };
    /**
     * Calculates the amount of time user needs to read the message in the notification.
     *
     * @param {any} notificationObj Same object used to instantiate notification.
     *
     * In addition to `type` and `message` members, use `duration` member to add
     * some extra time (in ms) to timeout if you need to.
     * @returns {number} calculated timeout (in ms) for smart notification
     * @memberof NotificationService
     */
    NotificationService.prototype.getSmartTimeout = function (notificationObj) {
        // calculate timeout
        var timeout = 600; // start with reaction time
        // custom duration
        timeout += notificationObj.duration || 0;
        // message type
        switch (notificationObj.type) {
            case "info":
            case "success":
            default: {
                break;
            }
            case "danger": {
                timeout += 3000;
                break;
            }
            case "warning": {
                timeout += 1500;
                break;
            }
        }
        // message length
        // average reader reads around 200 words per minute, or it takes them ~0.3s per word
        // let's use 1.5 factor for below average speed readers and have 0.45s per word
        var wordCount = notificationObj.message.trim().split(/\s+/).length;
        timeout += wordCount * 450;
        return timeout;
    };
    /**
     * OnDestroy hook.
     *
     * Destroys all living notifications it is responsible for.
     *
     * @memberof NotificationService
     */
    NotificationService.prototype.ngOnDestroy = function () {
        if (this.notificationRefs.length > 0) {
            for (var i = 0; i < this.notificationRefs.length; i++) {
                var notificationRef = this.notificationRefs[i];
                this.applicationRef.detachView(notificationRef.hostView);
                notificationRef.destroy();
            }
            this.notificationRefs.length = 0;
        }
    };
    var _a, _b, _c;
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]) === "function" && _a || Object, typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]) === "function" && _b || Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]) === "function" && _c || Object])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/notification/notification.stories.ts":
/*!**************************************************!*\
  !*** ./src/notification/notification.stories.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.module */ "./src/notification/notification.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationStory = /** @class */ (function () {
    function NotificationStory(notificationService) {
        this.notificationService = notificationService;
    }
    NotificationStory.prototype.showNotification = function () {
        this.notificationService.showNotification({
            type: "info",
            title: "Sample notification",
            message: "Sample info message",
            target: ".notification-container"
        });
    };
    var _a;
    NotificationStory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-notification-story",
            template: "\n\t\t<button class=\"bx--btn bx--btn--primary\" (click)=\"showNotification()\">Show info notification</button>\n\t\t<div class=\"notification-container\"></div>\n\t",
            providers: [_notification_module__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof _notification_module__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] !== "undefined" && _notification_module__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]) === "function" && _a || Object])
    ], NotificationStory);
    return NotificationStory;
}());
var ToastStory = /** @class */ (function () {
    function ToastStory(notificationService) {
        this.notificationService = notificationService;
    }
    ToastStory.prototype.showToast = function () {
        this.notificationService.showToast({
            type: "info",
            title: "Sample toast",
            subtitle: "Sample subtitle message",
            caption: "Sample caption",
            target: ".notification-container",
            message: "message"
        });
    };
    var _b;
    ToastStory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-toast-story",
            template: "\n\t\t<button class=\"bx--btn bx--btn--primary\" (click)=\"showToast()\">Show info toast</button>\n\t\t<div class=\"notification-container\"></div>\n\t",
            providers: [_notification_module__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof _notification_module__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] !== "undefined" && _notification_module__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]) === "function" && _b || Object])
    ], ToastStory);
    return ToastStory;
}());
Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Notification", module)
    .addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    declarations: [
        NotificationStory,
        ToastStory
    ],
    imports: [
        _notification_module__WEBPACK_IMPORTED_MODULE_3__["NotificationModule"]
    ]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t\t<ibm-notification [notificationObj]=\"{type: 'error', title: 'Sample notification', message: 'Sample error message'}\">\n\t\t\t</ibm-notification>\n\t\t\t<ibm-notification [notificationObj]=\"{type: 'info', title: 'Sample notification', message: 'Sample info message'}\">\n\t\t\t</ibm-notification>\n\t\t\t<ibm-notification [notificationObj]=\"{type: 'success', title: 'Sample notification', message: 'Sample success message'}\">\n\t\t\t</ibm-notification>\n\t\t\t<ibm-notification [notificationObj]=\"{type: 'warning', title: 'Sample notification', message: 'Sample warning message'}\">\n\t\t\t</ibm-notification>\n\t\t"
}); })
    .add("Dynamic", function () { return ({
    template: "\n\t\t\t<app-notification-story></app-notification-story>\n\t\t"
}); })
    .add("Toast", function () { return ({
    template: "\n\t\t\t<ibm-toast [notificationObj]=\"{\n\t\t\t\ttype: 'error',\n\t\t\t\ttitle: 'Sample toast',\n\t\t\t\tsubtitle: 'Sample subtitle message',\n\t\t\t\tcaption: 'Sample caption'\n\t\t\t}\"></ibm-toast>\n\t\t"
}); })
    .add("Dynamic toast", function () { return ({
    template: "\n\t\t\t<app-toast-story></app-toast-story>\n\t\t"
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/notification/toast.component.ts":
/*!*********************************************!*\
  !*** ./src/notification/toast.component.ts ***!
  \*********************************************/
/*! exports provided: Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_content_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-content.interface */ "./src/notification/notification-content.interface.ts");
/* harmony import */ var _notification_content_interface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_notification_content_interface__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.component */ "./src/notification/notification.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Notification messages are displayed toward the top of the UI and do not interrupt user’s work.
 *
 * @export
 * @class Notification
 */
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toastID = "notification";
        _this.toastClass = true;
        _this.role = "alert";
        return _this;
    }
    Object.defineProperty(Toast.prototype, "isError", {
        get: function () { return this.notificationObj["type"] === "error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toast.prototype, "isInfo", {
        get: function () { return this.notificationObj["type"] === "info"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toast.prototype, "isSuccess", {
        get: function () { return this.notificationObj["type"] === "success"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toast.prototype, "isWarning", {
        get: function () { return this.notificationObj["type"] === "warning"; },
        enumerable: true,
        configurable: true
    });
    Toast.prototype.ngOnInit = function () {
        if (!this.notificationObj.closeLabel) {
            this.notificationObj.closeLabel = this.i18n.get().NOTIFICATION.CLOSE_BUTTON;
        }
    };
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof _notification_content_interface__WEBPACK_IMPORTED_MODULE_1__["ToastContent"] !== "undefined" && _notification_content_interface__WEBPACK_IMPORTED_MODULE_1__["ToastContent"]) === "function" && _a || Object)
    ], Toast.prototype, "notificationObj", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.id"),
        __metadata("design:type", Object)
    ], Toast.prototype, "toastID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--toast-notification"),
        __metadata("design:type", Object)
    ], Toast.prototype, "toastClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.role"),
        __metadata("design:type", Object)
    ], Toast.prototype, "role", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--toast-notification--error"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Toast.prototype, "isError", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--toast-notification--info"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Toast.prototype, "isInfo", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--toast-notification--success"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Toast.prototype, "isSuccess", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--toast-notification--warning"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Toast.prototype, "isWarning", null);
    Toast = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-toast",
            template: "\n\t\t<div class=\"bx--toast-notification__details\">\n\t\t\t<h3 class=\"bx--toast-notification__title\" [innerHTML]=\"notificationObj.title\"></h3>\n\t\t\t<p class=\"bx--toast-notification__subtitle\" [innerHTML]=\"notificationObj.subtitle\"></p>\n\t\t\t<p class=\"bx--toast-notification__caption\" [innerHTML]=\"notificationObj.caption\"></p>\n\t\t</div>\n\t\t<button\n\t\t\tclass=\"bx--toast-notification__close-button\"\n\t\t\ttype=\"button\"\n\t\t\t[attr.aria-label]=\"notificationObj.closeLabel\"\n\t\t\t(click)=\"onClose()\">\n\t\t\t<svg\n\t\t\t\tclass=\"bx--toast-notification-icon\"\n\t\t\t\twidth=\"10\"\n\t\t\t\theight=\"10\"\n\t\t\t\tviewBox=\"0 0 10 10\"\n\t\t\t\txmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t<path d=\"M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z\" fill-rule=\"nonzero\"/>\n\t\t\t</svg>\n\t\t</button>\n\t"
        })
    ], Toast);
    return Toast;
}(_notification_component__WEBPACK_IMPORTED_MODULE_2__["Notification"]));



/***/ }),

/***/ "./src/number-input/number.component.ts":
/*!**********************************************!*\
  !*** ./src/number-input/number.component.ts ***!
  \**********************************************/
/*! exports provided: NumberChange, Number */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberChange", function() { return NumberChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Number", function() { return Number; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Used to emit changes performed on number input components.
 * @export
 * @class NumberChange
 */
var NumberChange = /** @class */ (function () {
    function NumberChange() {
    }
    return NumberChange;
}());

/**
 * @export
 * @class Number
 * @implements {ControlValueAccessor}
 */
var Number = /** @class */ (function () {
    /**
     * Creates an instance of `Number`.
     * @memberof Number
     */
    function Number() {
        this.containerClass = true;
        /**
         * `light` or `dark` number input theme.
         */
        this.theme = "dark";
        /**
         * Set to `true` for a disabled number input.
         */
        this.disabled = false;
        /**
         * The unique id for the number component.
         */
        this.id = "number-" + Number_1.numberCount;
        /**
         * Sets the value attribute on the `input` element.
         */
        this.value = 0;
        /**
         * Emits event notifying other classes when a change in state occurs in the input.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when number input is blurred. Needed to properly implement `ControlValueAccessor`.
         * @memberof Number
         */
        this.onTouched = function () { };
        /**
         * Method set in `registerOnChange` to propagate changes back to the form.
         * @memberof Number
         */
        this.propagateChange = function (_) { };
        Number_1.numberCount++;
    }
    Number_1 = Number;
    /**
     * This is the initial value set to the component
     * @param value The input value.
     */
    Number.prototype.writeValue = function (value) {
        this.value = value;
    };
    /**
     * Sets a method in order to propagate changes back to the form.
     * @param {any} fn
     * @memberof Number
     */
    Number.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * Registers a callback to be triggered when the control has been touched.
     * @param fn Callback to be triggered when the number input is touched.
     */
    Number.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Adds 1 to the current `value`.
     */
    Number.prototype.onIncrement = function () {
        if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.max) || this.value < this.max) {
            this.value++;
            this.emitChangeEvent();
        }
    };
    /**
     * Subtracts 1 to the current `value`.
     */
    Number.prototype.onDecrement = function () {
        if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.min) || this.value > this.min) {
            this.value--;
            this.emitChangeEvent();
        }
    };
    /**
     * Creates a class of `NumberChange` to emit the change in the `Number`.
     */
    Number.prototype.emitChangeEvent = function () {
        var event = new NumberChange();
        event.source = this;
        event.value = this.value;
        this.change.emit(event);
        this.propagateChange(this.value);
    };
    var Number_1;
    /**
     * Variable used for creating unique ids for number input components.
     */
    Number.numberCount = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--form-item"),
        __metadata("design:type", Object)
    ], Number.prototype, "containerClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Number.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Number.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Number.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Number.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Number.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Number.prototype, "min", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Number.prototype, "max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Number.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Number.prototype, "helperText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Number.prototype, "change", void 0);
    Number = Number_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-number",
            template: "\n\t\t<div\n\t\t\tdata-numberinput\n\t\t\tclass=\"bx--number\"\n\t\t\t[ngClass]=\"{\n\t\t\t\t'bx--number--light': theme === 'light',\n\t\t\t\t'bx--number--nolabel': !label,\n\t\t\t\t'bx--number--helpertext': helperText\n\t\t\t}\">\n\t\t\t<label *ngIf=\"label\" [for]=\"id\" class=\"bx--label\">{{label}}</label>\n\t\t\t<input\n\t\t\t\ttype=\"number\"\n\t\t\t\t[id]=\"id\"\n\t\t\t\t[value]=\"value\"\n\t\t\t\t[min]=\"min\"\n\t\t\t\t[max]=\"max\"\n\t\t\t\t[disabled]=\"disabled\"\n\t\t\t\t[required]=\"required\"/>\n\t\t\t<div class=\"bx--number__controls\">\n\t\t\t\t<button\n\t\t\t\t\tclass=\"bx--number__control-btn up-icon\"\n\t\t\t\t\t(click)=\"onIncrement()\">\n\t\t\t\t\t<svg width=\"10\" height=\"5\" viewBox=\"0 0 10 5\">\n\t\t\t\t\t\t<path d=\"M0 5L5 .002 10 5z\" fill-rule=\"evenodd\" />\n\t\t\t\t\t</svg>\n\t\t\t\t</button>\n\t\t\t\t<button\n\t\t\t\t\tclass=\"bx--number__control-btn down-icon\"\n\t\t\t\t\t(click)=\"onDecrement()\">\n\t\t\t\t\t<svg width=\"10\" height=\"5\" viewBox=\"0 0 10 5\">\n\t\t\t\t\t\t<path d=\"M0 0l5 4.998L10 0z\" fill-rule=\"evenodd\" />\n\t\t\t\t\t</svg>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"helperText\" class=\"bx--form__helper-text\">{{helperText}}</div>\n\t\t</div>\n\t",
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Number_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], Number);
    return Number;
}());



/***/ }),

/***/ "./src/number-input/number.module.ts":
/*!*******************************************!*\
  !*** ./src/number-input/number.module.ts ***!
  \*******************************************/
/*! exports provided: NumberModule, Number */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberModule", function() { return NumberModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number.component */ "./src/number-input/number.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Number", function() { return _number_component__WEBPACK_IMPORTED_MODULE_3__["Number"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// modules



// imports

var NumberModule = /** @class */ (function () {
    function NumberModule() {
    }
    NumberModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _number_component__WEBPACK_IMPORTED_MODULE_3__["Number"]
            ],
            exports: [
                _number_component__WEBPACK_IMPORTED_MODULE_3__["Number"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], NumberModule);
    return NumberModule;
}());




/***/ }),

/***/ "./src/number-input/number.stories.ts":
/*!********************************************!*\
  !*** ./src/number-input/number.stories.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./src/index.ts");



Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Number", module).addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [___WEBPACK_IMPORTED_MODULE_2__["NumberModule"]]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t\t<div style=\"width: 250px;\">\n\t\t\t\t<ibm-number\n\t\t\t\t\tlabel=\"Number Input label\"\n\t\t\t\t\t[theme]=\"theme\"\n\t\t\t\t\t[min]=\"min\"\n\t\t\t\t\t[max]=\"max\"\n\t\t\t\t\t[disabled]=\"disabled\"></ibm-number>\n\t\t\t</div>\n\t\t",
    props: {
        theme: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["select"])("theme", ["dark", "light"], "dark"),
        min: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["number"])("min", 0),
        max: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["number"])("max", 100),
        disabled: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["boolean"])("disabled", false)
    }
}); })
    .add("With no label", function () { return ({
    template: "\n\t\t\t<div style=\"width: 250px;\">\n\t\t\t\t<ibm-number\n\t\t\t\t\t[theme]=\"theme\"\n\t\t\t\t\t[min]=\"min\"\n\t\t\t\t\t[max]=\"max\"\n\t\t\t\t\t[disabled]=\"disabled\"></ibm-number>\n\t\t\t</div>\n\t\t",
    props: {
        theme: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["select"])("theme", ["dark", "light"], "dark"),
        min: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["number"])("min", 0),
        max: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["number"])("max", 100),
        disabled: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["boolean"])("disabled", false)
    }
}); })
    .add("With helper text", function () { return ({
    template: "\n\t\t\t<div style=\"width: 250px;\">\n\t\t\t\t<ibm-number\n\t\t\t\t\tlabel=\"Number Input label\"\n\t\t\t\t\thelperText=\"Optional helper text here\"\n\t\t\t\t\t[theme]=\"theme\"\n\t\t\t\t\t[min]=\"min\"\n\t\t\t\t\t[max]=\"max\"\n\t\t\t\t\t[disabled]=\"disabled\"></ibm-number>\n\t\t\t</div>\n\t\t",
    props: {
        theme: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["select"])("theme", ["dark", "light"], "dark"),
        min: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["number"])("min", 0),
        max: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["number"])("max", 100),
        disabled: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["boolean"])("disabled", false)
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pagination/pagination-model.class.ts":
/*!**************************************************!*\
  !*** ./src/pagination/pagination-model.class.ts ***!
  \**************************************************/
/*! exports provided: PaginationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModel", function() { return PaginationModel; });
var PaginationModel = /** @class */ (function () {
    function PaginationModel() {
    }
    return PaginationModel;
}());



/***/ }),

/***/ "./src/pagination/pagination.component.ts":
/*!************************************************!*\
  !*** ./src/pagination/pagination.component.ts ***!
  \************************************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony import */ var _pagination_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.module */ "./src/pagination/pagination.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.ts");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Use pagination when you have multiple pages of data to handle.
 *
 * ```html
 * <ibm-pagination [model]="model" (selectPage)="selectPage($event)"></ibm-pagination>
 * ```
 *
 * In your `selectPage()` method set the `model.currentPage` to selected page, _after_
 * you load the page.
 *
 * ```typescript
 * selectPage(page) {
 * 	// ... your code to laod the page goes here
 *
 * 	this.model.currentPage = page;
 *
 * 	// ... anything you want to do after page selection changes goes here
 * }
 * ```
 *
 * @export
 * @class Pagination
 */
var Pagination = /** @class */ (function () {
    function Pagination(i18n) {
        this.i18n = i18n;
        this.translations = this.i18n.get().PAGINATION;
        /**
         * Emits the new page number.
         *
         * You should tie into this and update `model.currentPage` once the fresh
         * data is finally loaded.
         *
         * @memberof Pagination
         */
        this.selectPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemsPerPageSelectId = "pagination-select-items-per-page-" + Pagination_1.paginationCounter;
        this.currentPageSelectId = "pagination-select-current-page-" + Pagination_1.paginationCounter;
        Pagination_1.paginationCounter++;
    }
    Pagination_1 = Pagination;
    Object.defineProperty(Pagination.prototype, "itemsPerPage", {
        get: function () {
            return this.model.pageLength;
        },
        set: function (value) {
            this.model.pageLength = value;
            this.currentPage = 1; // reset page
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "currentPage", {
        get: function () {
            return this.model.currentPage;
        },
        set: function (value) {
            // emits the value to allow the user to update current page
            // in the model once the page is loaded
            this.selectPage.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "lastPage", {
        /**
         * The last page number to display in the pagination view.
         *
         * @returns {number}
         * @memberof Pagination
         */
        get: function () {
            return Math.ceil(this.model.totalDataLength / this.model.pageLength);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "startItemIndex", {
        get: function () {
            return (this.currentPage - 1) * this.model.pageLength + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "endItemIndex", {
        get: function () {
            var projectedEndItemIndex = this.currentPage * this.model.pageLength;
            return projectedEndItemIndex < this.model.totalDataLength ? projectedEndItemIndex : this.model.totalDataLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "previousPage", {
        /**
         * The previous page number to navigate to, from the current page.
         *
         * @returns {number}
         * @memberof Pagination
         */
        get: function () {
            return this.currentPage <= 1 ? 1 : this.currentPage - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "nextPage", {
        /**
         * The next page number to navigate to, from the current page.
         *
         * @returns {number}
         * @memberof Pagination
         */
        get: function () {
            var lastPage = this.lastPage;
            return this.currentPage >= lastPage ? lastPage : this.currentPage + 1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Generates a list of numbers. (Python function)
     * Used to display the correct pagination controls.
     *
     * @param {number} stop
     * @param {number} [start=0]
     * @param {number} [step=1]
     * @returns {array}
     * @memberof Pagination
     */
    Pagination.prototype.range = function (stop, start, step) {
        if (start === void 0) { start = 0; }
        if (step === void 0) { step = 1; }
        return Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["range"])(stop, start, step);
    };
    var Pagination_1, _a, _b;
    Pagination.paginationCounter = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", typeof (_a = typeof _pagination_module__WEBPACK_IMPORTED_MODULE_0__["PaginationModel"] !== "undefined" && _pagination_module__WEBPACK_IMPORTED_MODULE_0__["PaginationModel"]) === "function" && _a || Object)
    ], Pagination.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], Pagination.prototype, "translations", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], Pagination.prototype, "selectPage", void 0);
    Pagination = Pagination_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ibm-pagination",
            template: "\n\t<div class=\"bx--pagination\">\n\t\t<div class=\"bx--pagination__left\">\n\t\t\t<span class=\"bx--pagination__text\">{{translations.ITEMS_PER_PAGE}}</span>\n\t\t\t<div class=\"bx--form-item\">\n\t\t\t\t<div class=\"bx--select bx--select--inline\">\n\t\t\t\t\t<label\n\t\t\t\t\t\t[for]=\"itemsPerPageSelectId\"\n\t\t\t\t\t\tclass=\"bx--label bx--visually-hidden\">\n\t\t\t\t\t\t{{translations.ITEMS_PER_PAGE}}\n\t\t\t\t\t</label>\n\t\t\t\t\t<select\n\t\t\t\t\t\t[id]=\"itemsPerPageSelectId\"\n\t\t\t\t\t\t[(ngModel)]=\"itemsPerPage\"\n\t\t\t\t\t\tclass=\"bx--select-input\"\n\t\t\t\t\t\taria-describedby=\"false\">\n\t\t\t\t\t\t<option class=\"bx--select-option\" value=\"10\">10</option>\n\t\t\t\t\t\t<option class=\"bx--select-option\" value=\"20\">20</option>\n\t\t\t\t\t\t<option class=\"bx--select-option\" value=\"30\">30</option>\n\t\t\t\t\t\t<option class=\"bx--select-option\" value=\"40\">40</option>\n\t\t\t\t\t\t<option class=\"bx--select-option\" value=\"50\">50</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<svg\n\t\t\t\t\t\tclass=\"bx--select__arrow\"\n\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\theight=\"5\"\n\t\t\t\t\t\trole=\"img\"\n\t\t\t\t\t\tviewBox=\"0 0 10 5\"\n\t\t\t\t\t\twidth=\"10\"\n\t\t\t\t\t\t[attr.aria-label]=\"translations.OPEN_LIST_OF_OPTIONS\"\n\t\t\t\t\t\t[attr.alt]=\"translations.OPEN_LIST_OF_OPTIONS\">\n\t\t\t\t\t\t<title>{{translations.OPEN_LIST_OF_OPTIONS}}</title>\n\t\t\t\t\t\t<path d=\"M0 0l5 4.998L10 0z\"></path>\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<span class=\"bx--pagination__text\">\n\t\t\t\t<span>|&nbsp;</span>\n\t\t\t\t{{startItemIndex}}-{{endItemIndex}} of {{model.totalDataLength}} items\n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"bx--pagination__right bx--pagination--inline\">\n\t\t\t<span class=\"bx--pagination__text\">{{currentPage}} of {{lastPage}} pages</span>\n\t\t\t<button\n\t\t\t\tclass=\"bx--pagination__button bx--pagination__button--backward\"\n\t\t\t\t(click)=\"selectPage.emit(previousPage)\"\n\t\t\t\t[disabled]=\"(currentPage <= 1 ? true : null)\">\n\t\t\t\t<svg\n\t\t\t\t\tclass=\"bx--pagination__button-icon\"\n\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\theight=\"12\"\n\t\t\t\t\trole=\"img\"\n\t\t\t\t\tviewBox=\"0 0 7 12\"\n\t\t\t\t\twidth=\"7\"\n\t\t\t\t\t[attr.aria-label]=\"translations.BACKWARD\"\n\t\t\t\t\t[attr.alt]=\"translations.BACKWARD\">\n\t\t\t\t\t<title>{{translations.BACKWARD}}</title>\n\t\t\t\t\t<path d=\"M1.45 6.002L7 11.27l-.685.726L0 6.003 6.315 0 7 .726z\"></path>\n\t\t\t\t</svg>\n\t\t\t</button>\n\t\t\t<div class=\"bx--form-item\">\n\t\t\t\t<div class=\"bx--select bx--select--inline\">\n\t\t\t\t<label [for]=\"currentPageSelectId\" class=\"bx--label bx--visually-hidden\">{{translations.ITEMS_PER_PAGE}}</label>\n\t\t\t\t<select [id]=\"currentPageSelectId\" class=\"bx--select-input\" aria-describedby=\"false\" [(ngModel)]=\"currentPage\">\n\t\t\t\t\t<option *ngFor=\"let i of range(lastPage + 1, 1)\" class=\"bx--select-option\" [value]=\"i\">{{i}}</option>\n\t\t\t\t</select>\n\t\t\t\t<svg\n\t\t\t\t\tclass=\"bx--select__arrow\"\n\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\theight=\"5\"\n\t\t\t\t\trole=\"img\"\n\t\t\t\t\tviewBox=\"0 0 10 5\"\n\t\t\t\t\twidth=\"10\"\n\t\t\t\t\t[attr.aria-label]=\"translations.OPEN_LIST_OF_OPTIONS\"\n\t\t\t\t\t[attr.alt]=\"translations.OPEN_LIST_OF_OPTIONS\">\n\t\t\t\t\t<title>{{translations.OPEN_LIST_OF_OPTIONS}}</title>\n\t\t\t\t\t<path d=\"M0 0l5 4.998L10 0z\"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t</div>\n\t\t<button\n\t\t\tclass=\"bx--pagination__button bx--pagination__button--forward\"\n\t\t\t(click)=\"selectPage.emit(nextPage)\"\n\t\t\t[disabled]=\"(currentPage >= lastPage ? true : null)\">\n\t\t\t<svg\n\t\t\t\tclass=\"bx--pagination__button-icon\"\n\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\theight=\"12\"\n\t\t\t\trole=\"img\"\n\t\t\t\tviewBox=\"0 0 7 12\"\n\t\t\t\twidth=\"7\"\n\t\t\t\t[attr.aria-label]=\"translations.FORWARD\"\n\t\t\t\t[attr.alt]=\"translations.FORWARD\">\n\t\t\t\t<title>{{translations.FORWARD}}</title>\n\t\t\t\t<path d=\"M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z\"></path>\n\t\t\t</svg>\n\t\t</button>\n\t\t</div>\n\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__["I18n"] !== "undefined" && _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__["I18n"]) === "function" && _b || Object])
    ], Pagination);
    return Pagination;
}());



/***/ }),

/***/ "./src/pagination/pagination.module.ts":
/*!*********************************************!*\
  !*** ./src/pagination/pagination.module.ts ***!
  \*********************************************/
/*! exports provided: PaginationModel, Pagination, PaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination.component */ "./src/pagination/pagination.component.ts");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
/* harmony import */ var _pagination_model_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagination-model.class */ "./src/pagination/pagination-model.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationModel", function() { return _pagination_model_class__WEBPACK_IMPORTED_MODULE_5__["PaginationModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _pagination_component__WEBPACK_IMPORTED_MODULE_3__["Pagination"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    PaginationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _pagination_component__WEBPACK_IMPORTED_MODULE_3__["Pagination"]
            ],
            exports: [
                _pagination_component__WEBPACK_IMPORTED_MODULE_3__["Pagination"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_4__["I18nModule"]
            ]
        })
    ], PaginationModule);
    return PaginationModule;
}());



/***/ }),

/***/ "./src/pagination/pagination.stories.ts":
/*!**********************************************!*\
  !*** ./src/pagination/pagination.stories.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _pagination_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination.module */ "./src/pagination/pagination.module.ts");
/* harmony import */ var _pagination_model_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagination-model.class */ "./src/pagination/pagination-model.class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaginationStory = /** @class */ (function () {
    function PaginationStory() {
        this.model = new _pagination_model_class__WEBPACK_IMPORTED_MODULE_5__["PaginationModel"]();
    }
    Object.defineProperty(PaginationStory.prototype, "totalDataLength", {
        get: function () {
            return this.model.totalDataLength;
        },
        set: function (value) {
            this.model.totalDataLength = value;
        },
        enumerable: true,
        configurable: true
    });
    PaginationStory.prototype.ngOnInit = function () {
        this.model.pageLength = 10;
        this.model.currentPage = 1;
    };
    PaginationStory.prototype.selectPage = function (page) {
        console.log("Loading page", page, "from pagination model");
        this.model.currentPage = page;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationStory.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PaginationStory.prototype, "totalDataLength", null);
    PaginationStory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-pagination",
            template: "\n\t\t<ibm-pagination\n\t\t\t[model]=\"model\"\n\t\t\t(selectPage)=\"selectPage($event)\">\n\t\t</ibm-pagination>\n\t"
        })
    ], PaginationStory);
    return PaginationStory;
}());
Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_1__["storiesOf"])("Pagination", module).addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_1__["moduleMetadata"])({
    imports: [
        ___WEBPACK_IMPORTED_MODULE_3__["NFormsModule"],
        _pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"]
    ],
    declarations: [
        PaginationStory
    ]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__["withKnobs"])
    .add("default", function () { return ({
    template: "\n\t\t\t<app-pagination [totalDataLength]=\"totalDataLength\"></app-pagination>\n\t\t",
    props: {
        totalDataLength: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__["number"])("totalDataLength", 105)
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pill-input/pill-input.component.ts":
/*!************************************************!*\
  !*** ./src/pill-input/pill-input.component.ts ***!
  \************************************************/
/*! exports provided: PillInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PillInput", function() { return PillInput; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pill_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pill.component */ "./src/pill-input/pill.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Internal component used to render pills and the pill text input.
 * There is a sizeable chunk of logic here handling focus and keyboard state around pills.
 *
 * @export
 * @class PillInput
 * @implements {OnChanges}
 * @implements {AfterViewInit}
 */
var PillInput = /** @class */ (function () {
    /** instaniates a pill-input */
    function PillInput(elementRef) {
        this.elementRef = elementRef;
        /** are we focused? needed because we have a lot of inputs that could steal focus and we need to set visual focus on the wrapper */
        this.focusActive = false;
        /** height of the expanded input */
        this.expandedHeight = 0;
        /** number of pills hidden by overflow */
        this.numberMore = 0;
        /** should we show the placeholder value? */
        this.showPlaceholder = true;
        /** sets the expanded state (hide/show all selected pills) */
        this.expanded = false;
        /** array of selected items */
        this.pills = [];
        /** value to display when nothing is selected */
        this.placeholder = "";
        /** value to display when something is selected */
        this.displayValue = "";
        /** "single" or "multi" for single or multi select lists */
        this.type = "single";
        this.size = "md";
        /** is the input disabled. true/false */
        this.disabled = false;
        /** the direction of the pills */
        this.pillDirection = "row";
        /** empty event to trigger an update of the selected items */
        this.updatePills = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** emitted when the user types into an input */
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** emitted when the user presses enter and a value is present */
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** emitted when the component is focused */
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** emitted when the component looses focus */
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // needed since matter doesn't/can't account for the host element
        this.width = "100";
    }
    /**
     * Updates the pills, and subscribes to their `remove` events.
     * Updates the displayValue and checks if it should be displayed.
     * @param changes
     */
    PillInput.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.pills) {
            this.pills = changes.pills.currentValue;
            if (this.pillDirection === "column") {
                this.numberMore = this.pills.length - 1;
            }
            setTimeout(function () {
                if (_this.pillInstances) {
                    _this.numberMore = 0;
                    var pills = _this.elementRef.nativeElement.querySelectorAll(".pill");
                    if (pills.length > 1) {
                        for (var _i = 0, pills_1 = pills; _i < pills_1.length; _i++) {
                            var pill = pills_1[_i];
                            if (pill.offsetTop > 30) {
                                _this.numberMore++;
                            }
                        }
                    }
                    _this.pillInstances.forEach(function (item) {
                        item.remove.subscribe(function () {
                            _this.updatePills.emit();
                            _this.doResize();
                            if (_this.numberMore === 0) {
                                _this.expanded = false;
                            }
                        });
                    });
                    _this.doResize();
                }
            });
        }
        if (changes.displayValue) {
            if (this.type === "single" && this.singleInput) {
                this.singleInput.nativeElement.value = changes.displayValue.currentValue;
            }
            this.checkPlaceholderVisibility();
        }
    };
    /**
     * Binds events on the view.
     * @returns null
     * @memberof PillInput
     */
    PillInput.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.inputWrapper) {
            this.inputWrapper.nativeElement.scrollTop = 0;
        }
        // TODO: move these to methods and late bind/eager unbind
        if (this.disabled) {
            return;
        }
        // collapse input on outside click
        document.addEventListener("click", function (ev) {
            if (_this.elementRef.nativeElement.contains(ev.target)) {
                _this.setFocus(true);
            }
            else {
                _this.setFocus(false);
            }
            _this.checkPlaceholderVisibility();
        });
        // keyup here because we want to get the element the event ends on
        // **not** the element the event starts from (that would be keydown)
        document.addEventListener("keyup", function (ev) {
            if (!_this.elementRef.nativeElement.contains(ev.target)) {
                _this.setFocus(false);
            }
            else {
                _this.setFocus(true);
            }
            _this.checkPlaceholderVisibility();
        });
        this.clearInputText();
    };
    /**
     * Helper method to check if an array is empty
     * @param {Array<any>} array
     */
    PillInput.prototype.empty = function (array) {
        if (!array) {
            return true;
        }
        if (array.length === 0) {
            return true;
        }
        return false;
    };
    /**
     * sets focus to state
     *
     * @param {boolean} state
     */
    PillInput.prototype.setFocus = function (state) {
        this.focusActive = state;
        if (this.focusActive) {
            this.focus.emit();
        }
        else {
            this.blur.emit();
        }
    };
    /**
     * focuses the correct input and handles clearing any unnecessary values from any other input
     *
     * @param ev
     */
    PillInput.prototype.focusInput = function (ev) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        this.setFocus(true);
        if (this.numberMore > 0 || this.pillDirection === "column") {
            this.expandedHeight = this.pillWrapper.nativeElement.offsetHeight;
            this.expanded = true;
        }
        if (this.pillInputs.find(function (input) { return input.nativeElement === ev.target; })) {
            if (ev.target.textContent === "") {
                ev.target.textContent = "";
            }
            this.clearInputText(ev.target);
            this.setSelection(ev.target);
        }
        else if (this.getInputText()) {
            this.pillInputs.forEach(function (input) {
                if (input.nativeElement.textContent.trim() !== "") {
                    _this.setSelection(input.nativeElement);
                }
            });
        }
        else {
            if (this.pillInputs.last.nativeElement.textContent === "") {
                this.pillInputs.last.nativeElement.textContent = "";
            }
            this.setSelection(this.pillInputs.last.nativeElement);
        }
        this.inputWrapper.nativeElement.scrollTop = 0;
    };
    /**
     * toggles the expanded state of the input wrapper to show all pills
     *
     * @param ev
     */
    PillInput.prototype.showMore = function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.expanded = !this.expanded;
        this.doResize();
    };
    /**
     * sets the height of the input wrapper to the correct height for all selected pills
     */
    PillInput.prototype.doResize = function () {
        if (this.expanded) {
            this.expandedHeight = this.pillWrapper.nativeElement.offsetHeight;
        }
    };
    /**
     * clears the content of inputs
     *
     * @param toSkip input element to skip clearing
     */
    PillInput.prototype.clearInputText = function (toSkip) {
        if (toSkip === void 0) { toSkip = null; }
        if (this.pillInputs) {
            this.pillInputs.forEach(function (input) {
                if (!toSkip || input.nativeElement !== toSkip) {
                    input.nativeElement.textContent = "";
                }
            });
        }
    };
    /**
     * returns the text from an event, the textContent of the first filled pillInput, or an empty string
     *
     * @param ev optional event to pull text from
     */
    PillInput.prototype.getInputText = function (ev) {
        if (ev === void 0) { ev = null; }
        if (this.type === "multi") {
            if (ev) {
                return ev.target.textContent.trim();
            }
            if (this.pillInputs) {
                var text = this.pillInputs.find(function (input) { return input.nativeElement.textContent.trim() !== ""; });
                return text ? text.nativeElement.textContent.trim() : "";
            }
        }
        if (this.type === "single" && ev) {
            return ev.target.value.trim();
        }
        return "";
    };
    /**
     * handles deleting pills on backspace, submitting user input on enter, and navigating the pill list with arrow left/right
     *
     * @param ev
     */
    PillInput.prototype.onKeydown = function (ev) {
        if (ev.key === "Escape") {
            this.expanded = false;
        }
        else if (ev.key === "Backspace" && ev.target["textContent"] === "" && !this.empty(this.pills)) {
            // stop the window from navigating backwards
            ev.preventDefault();
            var inputIndex = this.pillInputs.toArray().findIndex(function (input) { return input.nativeElement === ev.target; });
            if (inputIndex > -1) {
                this.pills[inputIndex].selected = false;
                // - 1 because the last one doesn't get removed, so the focus doesn't leave
                if (inputIndex < this.pillInputs.length - 1) {
                    this.pillInputs.toArray()[inputIndex + 1].nativeElement.focus();
                }
            }
            this.updatePills.emit();
        }
        else if (ev.key === "Enter") {
            ev.preventDefault();
            if (this.getInputText()) {
                var inputIndex = this.pillInputs.toArray().findIndex(function (input) { return input.nativeElement.textContent.trim() !== ""; });
                this.submit.emit({
                    after: this.pills[inputIndex],
                    value: this.getInputText()
                });
                this.clearInputText();
            }
        }
        else if (ev.key === "ArrowLeft") {
            var index = this.pillInputs.toArray().findIndex(function (input) { return input.nativeElement === ev.target; });
            var prevInput = this.pillInputs.toArray()[index - 1];
            if (prevInput) {
                prevInput.nativeElement.focus();
            }
        }
        else if (ev.key === "ArrowRight") {
            var index = this.pillInputs.toArray().findIndex(function (input) { return input.nativeElement === ev.target; });
            var nextInput = this.pillInputs.toArray()[index + 1];
            if (nextInput) {
                nextInput.nativeElement.focus();
            }
        }
    };
    /** handles emmiting the search event */
    PillInput.prototype.onKeyup = function (ev) {
        this.doResize();
        this.clearInputText(ev.target);
        this.search.emit(this.getInputText(ev));
    };
    /**
     * checks weather the placeholder should be displayed or not.
     */
    PillInput.prototype.checkPlaceholderVisibility = function () {
        var _this = this;
        if (this.type === "single") {
            setTimeout(function () { return _this.showPlaceholder = !_this.displayValue && !_this.focusActive && !_this.getInputText(); });
        }
        else {
            setTimeout(function () { return _this.showPlaceholder = _this.empty(_this.pills) && !_this.focusActive && !_this.getInputText(); });
        }
    };
    /**
     * selects all the text in a given node
     *
     * @param target node to set the selection on
     */
    PillInput.prototype.setSelection = function (target) {
        var selectionRange = document.createRange();
        var selection = window.getSelection();
        selectionRange.selectNodeContents(target);
        selection.removeAllRanges();
        selection.addRange(selectionRange);
        target.focus();
    };
    var _a, _b, _c, _d;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" && _a || Object)
    ], PillInput.prototype, "pills", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PillInput.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PillInput.prototype, "displayValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PillInput.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PillInput.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PillInput.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PillInput.prototype, "pillDirection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PillInput.prototype, "updatePills", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PillInput.prototype, "search", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PillInput.prototype, "submit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PillInput.prototype, "focus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PillInput.prototype, "blur", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("pillWrapper"),
        __metadata("design:type", Object)
    ], PillInput.prototype, "pillWrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("inputWrapper"),
        __metadata("design:type", Object)
    ], PillInput.prototype, "inputWrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("singleInput"),
        __metadata("design:type", Object)
    ], PillInput.prototype, "singleInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])("pillInput"),
        __metadata("design:type", typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]) === "function" && _b || Object)
    ], PillInput.prototype, "pillInputs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_pill_component__WEBPACK_IMPORTED_MODULE_1__["Pill"]),
        __metadata("design:type", typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]) === "function" && _c || Object)
    ], PillInput.prototype, "pillInstances", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("style.width.%"),
        __metadata("design:type", Object)
    ], PillInput.prototype, "width", void 0);
    PillInput = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-pill-input",
            template: "\n\t\t<div\n\t\t\t#inputWrapper\n\t\t\t*ngIf=\"type === 'multi'\"\n\t\t\trole=\"textbox\"\n\t\t\tclass=\"pill_input_wrapper\"\n\t\t\t[ngClass]=\"{\n\t\t\t\t'expand-overflow': expanded,\n\t\t\t\tfocus: focusActive,\n\t\t\t\tdisabled: disabled\n\t\t\t}\"\n\t\t\tstyle=\"overflow: hidden;\"\n\t\t\t(click)=\"focusInput($event)\">\n\t\t\t<span\n\t\t\t\t*ngIf=\"showPlaceholder\"\n\t\t\t\tclass=\"input_placeholder\">\n\t\t\t\t{{ placeholder }}\n\t\t\t</span>\n\t\t\t<div\n\t\t\t\t#pillWrapper\n\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t'input_pills--column': pillDirection === 'column',\n\t\t\t\t\t'input_pills': pillDirection === 'row'\n\t\t\t\t}\">\n\t\t\t\t<div style=\"display: flex\" *ngFor=\"let pill of pills; let last = last\">\n\t\t\t\t\t<ibm-pill\n\t\t\t\t\t\t[item]=\"pill\">\n\t\t\t\t\t\t{{ pill.content }}\n\t\t\t\t\t</ibm-pill>\n\t\t\t\t\t<div\n\t\t\t\t\t\t#pillInput\n\t\t\t\t\t\t*ngIf=\"!last\"\n\t\t\t\t\t\tclass=\"input\"\n\t\t\t\t\t\tcontenteditable\n\t\t\t\t\t\t(keydown)=\"onKeydown($event)\"\n\t\t\t\t\t\t(keyup)=\"onKeyup($event)\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div\n\t\t\t\t\t#pillInput\n\t\t\t\t\tclass=\"input\"\n\t\t\t\t\tcontenteditable\n\t\t\t\t\t(keydown)=\"onKeydown($event)\"\n\t\t\t\t\t(keyup)=\"onKeyup($event)\"></div>\n\t\t\t</div>\n\t\t\t<button\n\t\t\t\t*ngIf=\"!expanded && numberMore > 0\"\n\t\t\t\tclass=\"btn--link\"\n\t\t\t\thref=\"\"\n\t\t\t\t(click)=\"showMore($event)\">{{ numberMore }} more</button>\n\t\t\t<button\n\t\t\t\t*ngIf=\"expanded && numberMore > 0\"\n\t\t\t\tclass=\"btn--link\"\n\t\t\t\thref=\"\"\n\t\t\t\t(click)=\"showMore($event)\">Hide</button>\n\t\t</div>\n\t\t<input\n\t\t\t#singleInput\n\t\t\t*ngIf=\"type === 'single'\"\n\t\t\ttype=\"text\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[placeholder]=\"placeholder\"\n\t\t\t(keydown)=\"onKeydown($event)\"\n\t\t\t(keyup)=\"onKeyup($event)\"/>"
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _d || Object])
    ], PillInput);
    return PillInput;
}());



/***/ }),

/***/ "./src/pill-input/pill-input.module.ts":
/*!*********************************************!*\
  !*** ./src/pill-input/pill-input.module.ts ***!
  \*********************************************/
/*! exports provided: PillInput, Pill, PillInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PillInputModule", function() { return PillInputModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icon_static_icon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../icon/static-icon.module */ "./src/icon/static-icon.module.ts");
/* harmony import */ var _pill_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pill-input.component */ "./src/pill-input/pill-input.component.ts");
/* harmony import */ var _pill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pill.component */ "./src/pill-input/pill.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PillInput", function() { return _pill_input_component__WEBPACK_IMPORTED_MODULE_3__["PillInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pill", function() { return _pill_component__WEBPACK_IMPORTED_MODULE_4__["Pill"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PillInputModule = /** @class */ (function () {
    function PillInputModule() {
    }
    PillInputModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _pill_component__WEBPACK_IMPORTED_MODULE_4__["Pill"],
                _pill_input_component__WEBPACK_IMPORTED_MODULE_3__["PillInput"]
            ],
            exports: [
                _pill_component__WEBPACK_IMPORTED_MODULE_4__["Pill"],
                _pill_input_component__WEBPACK_IMPORTED_MODULE_3__["PillInput"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _icon_static_icon_module__WEBPACK_IMPORTED_MODULE_2__["StaticIconModule"]]
        })
    ], PillInputModule);
    return PillInputModule;
}());



/***/ }),

/***/ "./src/pill-input/pill.component.ts":
/*!******************************************!*\
  !*** ./src/pill-input/pill.component.ts ***!
  \******************************************/
/*! exports provided: Pill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pill", function() { return Pill; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Internal component that represents a single pill/selected item
 * @export
 * @class Pill
 */
var Pill = /** @class */ (function () {
    function Pill() {
        /** emits an empty event when the close button is clicked */
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.attrClass = "pill";
    }
    /** close button handler */
    Pill.prototype.doRemove = function (ev) {
        this.item.selected = false;
        ev.stopPropagation();
        this.remove.emit(this.item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Pill.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Pill.prototype, "remove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.class"),
        __metadata("design:type", Object)
    ], Pill.prototype, "attrClass", void 0);
    Pill = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-pill",
            template: "\n\t\t<span><ng-content></ng-content></span>\n\t\t<button class=\"pill_close\" (click)=\"doRemove($event)\" type=\"button\">\n\t\t\t<ibm-static-icon icon=\"x\" size=\"sm\" classList=\"close_icon\"></ibm-static-icon>\n\t\t</button>"
        })
    ], Pill);
    return Pill;
}());



/***/ }),

/***/ "./src/placeholder/placeholder.component.ts":
/*!**************************************************!*\
  !*** ./src/placeholder/placeholder.component.ts ***!
  \**************************************************/
/*! exports provided: Placeholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Placeholder", function() { return Placeholder; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _placeholder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeholder.service */ "./src/placeholder/placeholder.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Using a modal, dialog (Tooltip, OverflowMenu), or any other component that draws out of the normal page flow
 * in your application *requires* this component (`ibm-placeholder`).
 * It would generally be placed near the end of your root app component template
 * (app.component.ts or app.component.html) as:
 *
 * ```
 * <ibm-placeholder></ibm-placeholder>
 * ```
 */
var Placeholder = /** @class */ (function () {
    /**
     * Creates an instance of `Placeholder`.
     */
    function Placeholder(placeholderService) {
        this.placeholderService = placeholderService;
    }
    /**
     * Registers the components view with `PlaceholderService`
     */
    Placeholder.prototype.ngOnInit = function () {
        this.placeholderService.registerViewContainerRef(this.viewContainerRef);
    };
    var _a, _b;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("placeholder", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]) === "function" && _a || Object)
    ], Placeholder.prototype, "viewContainerRef", void 0);
    Placeholder = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-placeholder",
            template: "<div #placeholder></div>"
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof _placeholder_service__WEBPACK_IMPORTED_MODULE_1__["PlaceholderService"] !== "undefined" && _placeholder_service__WEBPACK_IMPORTED_MODULE_1__["PlaceholderService"]) === "function" && _b || Object])
    ], Placeholder);
    return Placeholder;
}());



/***/ }),

/***/ "./src/placeholder/placeholder.module.ts":
/*!***********************************************!*\
  !*** ./src/placeholder/placeholder.module.ts ***!
  \***********************************************/
/*! exports provided: Placeholder, PlaceholderService, PLACEHOLDER_SERVICE_PROVIDER_FACTORY, PLACEHOLDER_SERVICE_PROVIDER, PlaceholderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLACEHOLDER_SERVICE_PROVIDER_FACTORY", function() { return PLACEHOLDER_SERVICE_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLACEHOLDER_SERVICE_PROVIDER", function() { return PLACEHOLDER_SERVICE_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderModule", function() { return PlaceholderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _placeholder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeholder.component */ "./src/placeholder/placeholder.component.ts");
/* harmony import */ var _placeholder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeholder.service */ "./src/placeholder/placeholder.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Placeholder", function() { return _placeholder_component__WEBPACK_IMPORTED_MODULE_2__["Placeholder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaceholderService", function() { return _placeholder_service__WEBPACK_IMPORTED_MODULE_3__["PlaceholderService"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// modules


// imports


// exports


// either provides a new instance of ModalPlaceholderService, or returns the parent
function PLACEHOLDER_SERVICE_PROVIDER_FACTORY(parentService) {
    return parentService || new _placeholder_service__WEBPACK_IMPORTED_MODULE_3__["PlaceholderService"]();
}
// placholder service *must* be a singleton to ensure the placeholder viewref is accessible globally
var PLACEHOLDER_SERVICE_PROVIDER = {
    provide: _placeholder_service__WEBPACK_IMPORTED_MODULE_3__["PlaceholderService"],
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _placeholder_service__WEBPACK_IMPORTED_MODULE_3__["PlaceholderService"]]],
    useFactory: PLACEHOLDER_SERVICE_PROVIDER_FACTORY
};
var PlaceholderModule = /** @class */ (function () {
    function PlaceholderModule() {
    }
    PlaceholderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_placeholder_component__WEBPACK_IMPORTED_MODULE_2__["Placeholder"]],
            exports: [_placeholder_component__WEBPACK_IMPORTED_MODULE_2__["Placeholder"]],
            providers: [PLACEHOLDER_SERVICE_PROVIDER],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        })
    ], PlaceholderModule);
    return PlaceholderModule;
}());



/***/ }),

/***/ "./src/placeholder/placeholder.service.ts":
/*!************************************************!*\
  !*** ./src/placeholder/placeholder.service.ts ***!
  \************************************************/
/*! exports provided: PlaceholderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderService", function() { return PlaceholderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Singleton service used to register the container for out-of-flow components to insert into.
 * Also used to insert/remove components from that view.
 */
var PlaceholderService = /** @class */ (function () {
    function PlaceholderService() {
        /**
         * Maintain a `ViewContainerRef` to an instance of the component.
         */
        this.viewContainerRef = null;
    }
    /**
     * Used by `Placeholder` to register view-container reference.
     */
    PlaceholderService.prototype.registerViewContainerRef = function (vcRef) {
        this.viewContainerRef = vcRef;
    };
    /**
     * Creates and returns component in the view.
     */
    PlaceholderService.prototype.createComponent = function (componentFactory, injector) {
        if (!this.viewContainerRef) {
            console.error("No view container defined! Likely due to a missing `ibm-placeholder`");
        }
        return this.viewContainerRef.createComponent(componentFactory, 0, injector);
    };
    PlaceholderService.prototype.destroyComponent = function (component) {
        var index = this.viewContainerRef.indexOf(component.hostView);
        if (index < 0) {
            return;
        }
        // destroy the view
        this.viewContainerRef.remove(index);
    };
    PlaceholderService.prototype.hasComponentRef = function (component) {
        if (this.viewContainerRef.indexOf(component.hostView) < 0) {
            return false;
        }
        return true;
    };
    PlaceholderService.prototype.hasPlaceholderRef = function () {
        return !!this.viewContainerRef;
    };
    PlaceholderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PlaceholderService);
    return PlaceholderService;
}());



/***/ }),

/***/ "./src/progress-indicator/progress-indicator.component.ts":
/*!****************************************************************!*\
  !*** ./src/progress-indicator/progress-indicator.component.ts ***!
  \****************************************************************/
/*! exports provided: ProgressIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicator", function() { return ProgressIndicator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressIndicator = /** @class */ (function () {
    function ProgressIndicator() {
        this.steps = [];
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgressIndicator.prototype, "steps", void 0);
    ProgressIndicator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-progress-indicator",
            template: "\n\t<ul data-progress data-progress-current class=\"bx--progress\">\n\t\t<li\n\t\tclass=\"bx--progress-step bx--progress-step--{{step.state}}\"\n\t\t*ngFor=\"let step of steps; let i = index\">\n\t\t\t<svg *ngIf=\"step.state == 'complete'\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n\t\t\t\t<g fill-rule=\"nonzero\">\n\t\t\t\t\t<path d=\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z\"/>\n\t\t\t\t\t<path d=\"M11.646 5.146l.708.708-5.604 5.603-3.104-3.103.708-.708 2.396 2.397z\"/>\n\t\t\t\t</g>\n\t\t\t</svg>\n\t\t\t<svg *ngIf=\"step.state == 'current'\">\n\t\t\t\t<circle cx=\"12\" cy=\"12\" r=\"12\"></circle>\n\t\t\t\t<circle cx=\"12\" cy=\"12\" r=\"6\"></circle>\n\t\t\t</svg>\n\t\t\t<svg *ngIf=\"step.state == 'incomplete'\">\n\t\t\t\t<circle cx=\"12\" cy=\"12\" r=\"12\"></circle>\n\t\t\t</svg>\n\t\t\t<p class=\"bx--progress-label\">{{step.text}}</p>\n\t\t\t<span class=\"bx--progress-line\"></span>\n\t\t</li>\n\t</ul>\n\t"
        })
    ], ProgressIndicator);
    return ProgressIndicator;
}());



/***/ }),

/***/ "./src/progress-indicator/progress-indicator.module.ts":
/*!*************************************************************!*\
  !*** ./src/progress-indicator/progress-indicator.module.ts ***!
  \*************************************************************/
/*! exports provided: ProgressIndicatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicatorModule", function() { return ProgressIndicatorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _progress_indicator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress-indicator.component */ "./src/progress-indicator/progress-indicator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProgressIndicatorModule = /** @class */ (function () {
    function ProgressIndicatorModule() {
    }
    ProgressIndicatorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _progress_indicator_component__WEBPACK_IMPORTED_MODULE_2__["ProgressIndicator"]
            ],
            exports: [
                _progress_indicator_component__WEBPACK_IMPORTED_MODULE_2__["ProgressIndicator"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        })
    ], ProgressIndicatorModule);
    return ProgressIndicatorModule;
}());



/***/ }),

/***/ "./src/progress-indicator/progrss-indicator.stories.ts":
/*!*************************************************************!*\
  !*** ./src/progress-indicator/progrss-indicator.stories.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./src/index.ts");



Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("ProgressIndicator", module)
    .addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [
        ___WEBPACK_IMPORTED_MODULE_2__["ProgressIndicatorModule"]
    ]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t<ibm-progress-indicator [steps]=\"steps\">\n\t\t</ibm-progress-indicator>\n\t\t",
    props: {
        steps: [
            {
                text: "1. ONE",
                state: ["complete"]
            },
            {
                text: "2. TWO",
                state: ["complete"]
            },
            {
                text: "3. THREE",
                state: ["current"]
            },
            {
                text: "4. FOUR",
                state: ["incomplete"]
            },
            {
                text: "5. FIVE",
                state: ["incomplete"]
            },
            {
                text: "6. SIX",
                state: ["incomplete"]
            }
        ]
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/radio/radio-group.component.ts":
/*!********************************************!*\
  !*** ./src/radio/radio-group.component.ts ***!
  \********************************************/
/*! exports provided: RadioChange, RadioGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioChange", function() { return RadioChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return RadioGroup; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _radio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio.component */ "./src/radio/radio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Used to emit changes performed on a `Radio`.
 * @export
 * @class RadioChange
 */
var RadioChange = /** @class */ (function () {
    function RadioChange() {
    }
    return RadioChange;
}());

/**
 * class: RadioGroup
 *
 * selector: `ibm-radio-group`
 *
 * source: `src/forms/radio.component.ts`
 *
 *
 * Ex:
 * ```html
 * <ibm-radio-group [(ngModel)]="radio">
 * 	<ibm-radio *ngFor="let one of manyRadios" [value]="one">
 *		Radio {{one}}
 * 	</ibm-radio>
 * </ibm-radio-group>
 *
 * Radio selected: {{radio}}
 * ```
 *
 * ```typescript
 * manyRadios = ["one", "two", "three", "four", "five", "six"];
 * ```
 *
 * Also see: [`Radio`](#ibm-radio)
 *
 */
var RadioGroup = /** @class */ (function () {
    /**
     * Creates an instance of RadioGroup.
     */
    function RadioGroup(changeDetectorRef, elementRef, renderer) {
        this.changeDetectorRef = changeDetectorRef;
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * Emits event notifying other classes of a change using a `RadioChange` class.
         * @type {EventEmitter<RadioChange>}
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Determines the render size of the `Radio` inputs within the group.
         */
        this.size = "md";
        /**
         * Binds 'radiogroup' value to the role attribute for `RadioGroup`.
         */
        this.role = "radiogroup";
        /**
         * Binds 'bx--radio-button-group' value to the class for `RadioGroup`.
         */
        this.radioButtonGroupClass = true;
        /**
         * To track whether the `RadioGroup` has been initialized.
         */
        this.isInitialized = false;
        /**
         * Reflects whether or not the input is disabled and cannot be selected.
         */
        this._disabled = false;
        /**
         * The value of the selected option within the `RadioGroup`.
         */
        this._value = null;
        /**
         * The `Radio` within the `RadioGroup` that is selected.
         */
        this._selected = null;
        /**
         * The name attribute associated with the `RadioGroup`.
         */
        this._name = "radio-group-" + RadioGroup_1.radioGroupCount;
        /**
         * Needed to properly implement ControlValueAccessor.
         */
        this.onTouched = function () { };
        /**
         * Method set in registerOnChange to propagate changes back to the form.
         */
        this.propagateChange = function (_) { };
        RadioGroup_1.radioGroupCount++;
    }
    RadioGroup_1 = RadioGroup;
    Object.defineProperty(RadioGroup.prototype, "selected", {
        /**
         * Returns the `Radio` that is selected within the `RadioGroup`.
         * @readonly
         */
        get: function () {
            return this._selected;
        },
        /**
         * Sets the passed in `Radio` item as the selected input within the `RadioGroup`.
         */
        set: function (selected) {
            this._selected = selected;
            this.value = selected ? selected.value : null;
            this.checkSelectedRadio();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroup.prototype, "value", {
        /**
         * Returns the value/state of the selected `Radio` within the `RadioGroup`.
         */
        get: function () {
            return this._value;
        },
        /**
         * Sets the value/state of the selected `Radio` within the `RadioGroup` to the passed in value.
         */
        set: function (newValue) {
            if (this._value !== newValue) {
                this._value = newValue;
                this.updateSelectedRadioFromValue();
                this.checkSelectedRadio();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroup.prototype, "name", {
        /**
         * Returns the associated name of the `RadioGroup`.
         */
        get: function () {
            return this._name;
        },
        /**
         * Replaces the name associated with the `RadioGroup` with the provided parameter.
         */
        set: function (name) {
            this._name = name;
            this.updateRadioNames();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroup.prototype, "disabled", {
        /**
         * Returns the disabled value in the `RadioGroup` if there is one.
         */
        get: function () {
            return this._disabled;
        },
        /**
         * Updates the disabled value using the provided parameter and marks the radios to be checked for
         * changes.
         */
        set: function (value) {
            this._disabled = value;
            this.markRadiosForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the selected `Radio` to be checked (selected).
     */
    RadioGroup.prototype.checkSelectedRadio = function () {
        if (this._selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    };
    /**
     * Use the value of the `RadioGroup` to update the selected radio to the right state (selected state).
     */
    RadioGroup.prototype.updateSelectedRadioFromValue = function () {
        var _this = this;
        var alreadySelected = this._selected != null && this._selected.value === this._value;
        if (this.radios != null && !alreadySelected) {
            this._selected = null;
            this.radios.forEach(function (radio) {
                radio.checked = _this.value === radio.value;
                if (radio.checked) {
                    _this._selected = radio;
                }
            });
        }
    };
    /**
     * Creates a class of `RadioChange` to emit the change in the `RadioGroup`.
     */
    RadioGroup.prototype.emitChangeEvent = function () {
        if (this.isInitialized) {
            var event = new RadioChange();
            event.source = this._selected;
            event.value = this._value;
            this.change.emit(event);
        }
    };
    /**
     * Calls the `markForCheck()` function within the `changeDetectorRef` class
     * to trigger Angular's change detection on each radio item.
     */
    RadioGroup.prototype.markRadiosForCheck = function () {
        if (this.radios) {
            this.radios.forEach(function (radio) { return radio.markForCheck(); });
        }
    };
    /**
     * Synchronizes the names of the radio items with the name of the `RadioGroup`.
     */
    RadioGroup.prototype.updateRadioNames = function () {
        var _this = this;
        if (this.radios) {
            this.radios.forEach(function (radio) { return radio.name = _this.name; });
        }
    };
    /**
     * Updates the value of the `RadioGroup` using the provided parameter.
     */
    RadioGroup.prototype.writeValue = function (value) {
        this.value = value;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * Callback triggered when a `Radio` within the `RadioGroup` is changed.
     */
    RadioGroup.prototype.touch = function () {
        if (this.onTouched) {
            this.onTouched();
        }
    };
    /**
     * Builds variant class on the radio items within the `RadioGroup`.
     */
    RadioGroup.prototype.ngOnInit = function () {
        // Build variant class
        var className = "radio" + (this.size !== "md" ? "--" + this.size : "");
        // Add class to host element
        this.renderer.addClass(this.elementRef.nativeElement, className);
    };
    /**
     * Marks this component as initialized to avoid the initial value getting set by `NgModel` on `RadioGroup`.
     * This avoids `NgModel` setting the initial value before the OnInit of the `RadioGroup`.
     */
    RadioGroup.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Mark this component as initialized in AfterContentInit because the initial value can
        // possibly be set by NgModel on RadioGroup, and it is possible that the OnInit of the
        // NgModel occurs *after* the OnInit of the RadioGroup.
        this.isInitialized = true;
        this.updateFocusableRadio();
        this.radios.changes.subscribe(function (updatedRadios) {
            _this.radios = updatedRadios;
            _this.updateFocusableRadio();
        });
    };
    RadioGroup.prototype.updateFocusableRadio = function () {
        if (this.radios && !this.radios.some(function (radio) { return radio.checked; })) {
            this.radios.forEach(function (radio) { return radio.needsToBeFocusable = false; });
            this.radios.first.needsToBeFocusable = true;
            this.radios.forEach(function (radio) { return radio.changeDetectorRef.detectChanges(); });
        }
    };
    /**
     * Used to set method to propagate changes back to the form.
     */
    RadioGroup.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.propagateChange = function (value) {
            _this.value = value;
            fn(value);
        };
    };
    /**
     * Registers a callback to be triggered when the control has been touched.
     * @param fn Callback to be triggered when the checkbox is touched.
     */
    RadioGroup.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    var RadioGroup_1, _a, _b, _c, _d, _e, _f;
    /**
     * Used for creating the `RadioGroup` 'name' property dynamically.
     */
    RadioGroup.radioGroupCount = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) === "function" && _a || Object)
    ], RadioGroup.prototype, "change", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _radio_component__WEBPACK_IMPORTED_MODULE_2__["Radio"]; })),
        __metadata("design:type", typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]) === "function" && _b || Object)
    ], RadioGroup.prototype, "radios", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RadioGroup.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [typeof (_c = typeof _radio_component__WEBPACK_IMPORTED_MODULE_2__["Radio"] !== "undefined" && _radio_component__WEBPACK_IMPORTED_MODULE_2__["Radio"]) === "function" && _c || Object])
    ], RadioGroup.prototype, "selected", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RadioGroup.prototype, "value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [String])
    ], RadioGroup.prototype, "name", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RadioGroup.prototype, "disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.role"),
        __metadata("design:type", Object)
    ], RadioGroup.prototype, "role", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--radio-button-group"),
        __metadata("design:type", Object)
    ], RadioGroup.prototype, "radioButtonGroupClass", void 0);
    RadioGroup = RadioGroup_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-radio-group",
            template: "<ng-content></ng-content>",
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: RadioGroup_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]) === "function" && _d || Object, typeof (_e = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _e || Object, typeof (_f = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]) === "function" && _f || Object])
    ], RadioGroup);
    return RadioGroup;
}());



/***/ }),

/***/ "./src/radio/radio.component.ts":
/*!**************************************!*\
  !*** ./src/radio/radio.component.ts ***!
  \**************************************/
/*! exports provided: Radio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../checkbox/checkbox.component */ "./src/checkbox/checkbox.component.ts");
/* harmony import */ var _radio_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-group.component */ "./src/radio/radio-group.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




/**
 * class: Radio (extends Checkbox)
 *
 * selector: `n-radio`
 *
 * source: `src/forms/radio.component.ts`
 *
 * ```html
 * <ibm-radio [(ngModel)]="radioState">Radio</ibm-radio>
 * ```
 *
 * Also see: [`RadioGroup`](#ibm-radio-group)
 *
 * @export
 * @class Radio
 * @extends {Checkbox}
 * @implements {OnInit}
 */
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    /**
     * Creates an instance of Radio.
     * @param {RadioGroup} radioGroup
     * @param {ChangeDetectorRef} changeDetectorRef
     * @param {ElementRef} elementRef
     * @param {Renderer2} renderer
     * @memberof Radio
     */
    function Radio(radioGroup, changeDetectorRef, elementRef, renderer) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        /**
         * Binds 'radio' value to the role attribute for `Radio`.
         * @memberof Radio
         */
        _this.role = "radio";
        /**
         * The id for the `Radio`.
         * @type {string}
         * @memberof Radio
         */
        _this.id = "radio-" + Radio_1.radioCount;
        /**
         * The value of the `Radio`.
         * @type {any}
         * @memberof Radio
         */
        _this._value = null;
        Radio_1.radioCount++;
        _this.radioGroup = radioGroup;
        return _this;
    }
    Radio_1 = Radio;
    Object.defineProperty(Radio.prototype, "value", {
        /**
         * Returns the value/state of the `Radio`.
         * @readonly
         * @type {any}
         * @returns {any}
         * @memberof Radio
         */
        get: function () {
            return this._value;
        },
        /**
         * Replaces `@Input value` with the provided parameter supplied from the parent.
         * @param {any} value
         * @memberof Radio
         */
        set: function (value) {
            if (this._value !== value) {
                this._value = value;
                if (this.radioGroup != null) {
                    if (!this.checked) {
                        this.checked = this.radioGroup.value === value;
                    }
                    if (this.checked) {
                        this.radioGroup.selected = this;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * If the component has an encompassing `RadioGroup` it synchronizes the name with that
     * of the group.
     * @memberof Radio
     */
    Radio.prototype.ngOnInit = function () {
        if (this.radioGroup) {
            // if in group check if it needs checked and use group name
            this.checked = this.radioGroup.value === this._value;
            this.name = this.radioGroup.name;
        }
    };
    /**
     * Handles the event of a mouse click on the `Radio`.
     * @param {Event} event
     * @memberof Radio
     */
    Radio.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    /**
     * Synchronizes with the `RadioGroup` in the event of a changed `Radio`.
     * Emits the changes of both the `RadioGroup` and `Radio`.
     * @param {Event} event
     * @memberof Radio
     */
    Radio.prototype.onChange = function (event) {
        event.stopPropagation();
        var groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
        this.checked = true;
        this.emitChangeEvent();
        if (this.radioGroup) {
            this.radioGroup.propagateChange(this.value);
            this.radioGroup.touch();
            if (groupValueChanged) {
                this.radioGroup.emitChangeEvent();
            }
        }
    };
    /**
     * Calls the `markForCheck()` function within the `changeDetectorRef` class
     * to make sure that Angular's change detection is triggered for the input.
     * @memberof Radio
     */
    Radio.prototype.markForCheck = function () {
        this.changeDetectorRef.markForCheck();
    };
    var Radio_1, _a, _b, _c, _d;
    /**
     * Used to dynamically create unique ids for the `Radio`.
     * @static
     * @memberof Radio
     */
    Radio.radioCount = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Radio.prototype, "value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.role"),
        __metadata("design:type", Object)
    ], Radio.prototype, "role", void 0);
    Radio = Radio_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-radio",
            template: "\n\t\t<input\n\t\t\tclass=\"bx--radio-button\"\n\t\t\ttype=\"radio\"\n\t\t\t#inputCheckbox\n\t\t\t[checked]=\"checked\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[name]=\"name\"\n\t\t\t[id]=\"id\"\n\t\t\t[required]=\"required\"\n\t\t\t[value]=\"value\"\n\t\t\t[attr.aria-label]=\"ariaLabel\"\n\t\t\t[attr.aria-labelledby]=\"ariaLabelledby\"\n\t\t\t(change)=\"onChange($event)\"\n\t\t\t(click)=\"onClick($event)\"\n\t\t\t[tabindex]=\"(checked || needsToBeFocusable ? 0 : -1)\">\n\t\t<label\n\t\t\tclass=\"bx--radio-button__label\"\n\t\t\t[for]=\"id\">\n\t\t\t<span class=\"bx--radio-button__appearance\"></span>\n\t\t\t<ng-content></ng-content>\n\t\t</label>\n\t",
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Radio_1,
                    multi: true
                }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [typeof (_a = typeof _radio_group_component__WEBPACK_IMPORTED_MODULE_3__["RadioGroup"] !== "undefined" && _radio_group_component__WEBPACK_IMPORTED_MODULE_3__["RadioGroup"]) === "function" && _a || Object, typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]) === "function" && _b || Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]) === "function" && _d || Object])
    ], Radio);
    return Radio;
}(_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["Checkbox"]));



/***/ }),

/***/ "./src/radio/radio.module.ts":
/*!***********************************!*\
  !*** ./src/radio/radio.module.ts ***!
  \***********************************/
/*! exports provided: Radio, RadioGroup, RadioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioModule", function() { return RadioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../radio/radio.component */ "./src/radio/radio.component.ts");
/* harmony import */ var _radio_radio_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../radio/radio-group.component */ "./src/radio/radio-group.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _radio_radio_component__WEBPACK_IMPORTED_MODULE_3__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _radio_radio_group_component__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// modules



// imports


// exports


var RadioModule = /** @class */ (function () {
    function RadioModule() {
    }
    RadioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _radio_radio_component__WEBPACK_IMPORTED_MODULE_3__["Radio"],
                _radio_radio_group_component__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"]
            ],
            exports: [
                _radio_radio_component__WEBPACK_IMPORTED_MODULE_3__["Radio"],
                _radio_radio_group_component__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ]
        })
    ], RadioModule);
    return RadioModule;
}());



/***/ }),

/***/ "./src/radio/radio.stories.ts":
/*!************************************!*\
  !*** ./src/radio/radio.stories.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-actions */ "./node_modules/@storybook/addon-actions/dist/index.js");
/* harmony import */ var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./src/index.ts");




Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Radio", module).addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [___WEBPACK_IMPORTED_MODULE_3__["RadioModule"]]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_2__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t<ibm-radio-group aria-label=\"radiogroup\" [(ngModel)]=\"radio\" (change)=\"onChange($event)\">\n\t\t\t<ibm-radio *ngFor=\"let radio of manyRadios\"\n\t\t\t\t[value]=\"radio.num\"\n\t\t\t\t[disabled]=\"radio.disabled\">{{radio.num}}\n\t\t\t</ibm-radio>\n\t\t</ibm-radio-group>\n\t\t",
    props: {
        onChange: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__["action"])("Radio change"),
        manyRadios: [
            { num: "one", disabled: false },
            { num: "two" },
            { num: "three" },
            { num: "four" }
        ]
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/search/search.component.ts":
/*!****************************************!*\
  !*** ./src/search/search.component.ts ***!
  \****************************************/
/*! exports provided: SearchChange, Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchChange", function() { return SearchChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Used to emit changes performed on search components.
 * @export
 * @class SearchChange
 */
var SearchChange = /** @class */ (function () {
    function SearchChange() {
    }
    return SearchChange;
}());

/**
 * @export
 * @class Search
 * @implements {ControlValueAccessor}
 */
var Search = /** @class */ (function () {
    /**
     * Creates an instance of `Search`.
     * @param i18n The i18n translations.
     * @memberof Search
     */
    function Search(i18n) {
        this.i18n = i18n;
        this.containerClass = true;
        /**
         * `light` or `dark` search theme.
         */
        this.theme = "dark";
        /**
         * Size of the search field.
         */
        this.size = "lg";
        /**
         * Set to `true` for a disabled search input.
         */
        this.disabled = false;
        /**
         * The unique id for the search component.
         */
        this.id = "search-" + Search_1.searchCount;
        /**
         * Sets the value attribute on the `input` element.
         */
        this.value = "";
        /**
         * Sets the text inside the `label` tag.
         */
        this.label = this.i18n.get().SEARCH.LABEL;
        /**
         * Sets the placeholder attribute on the `input` element.
         */
        this.placeholder = this.i18n.get().SEARCH.PLACEHOLDER;
        /**
         * Used to set the `title` attribute of the clear button.
         */
        this.clearButtonTitle = this.i18n.get().SEARCH.CLEAR_BUTTON;
        /**
         * Emits event notifying other classes when a change in state occurs in the input.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when search input is blurred. Needed to properly implement `ControlValueAccessor`.
         * @memberof Search
         */
        this.onTouched = function () { };
        /**
         * Method set in `registerOnChange` to propagate changes back to the form.
         * @memberof Search
         */
        this.propagateChange = function (_) { };
        Search_1.searchCount++;
    }
    Search_1 = Search;
    /**
     * This is the initial value set to the component
     * @param value The input value.
     */
    Search.prototype.writeValue = function (value) {
        this.value = value;
    };
    /**
     * Sets a method in order to propagate changes back to the form.
     * @param {any} fn
     * @memberof Search
     */
    Search.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * Registers a callback to be triggered when the control has been touched.
     * @param fn Callback to be triggered when the search input is touched.
     */
    Search.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Called when text is written in the input.
     * @param {string} search The input text.
     */
    Search.prototype.onSearch = function (search) {
        this.value = search;
        this.emitChangeEvent();
    };
    /**
     * Called when clear button is clicked.
     * @memberof Search
     */
    Search.prototype.clearSearch = function () {
        this.value = "";
        this.propagateChange(this.value);
    };
    /**
     * Creates a class of `RadioChange` to emit the change in the `RadioGroup`.
     */
    Search.prototype.emitChangeEvent = function () {
        var event = new SearchChange();
        event.source = this;
        event.value = this.value;
        this.change.emit(event);
        this.propagateChange(this.value);
    };
    var Search_1, _a;
    /**
     * Variable used for creating unique ids for search components.
     */
    Search.searchCount = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.bx--form-item"),
        __metadata("design:type", Object)
    ], Search.prototype, "containerClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Search.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Search.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Search.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Search.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Search.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Search.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Search.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Search.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Search.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Search.prototype, "clearButtonTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Search.prototype, "change", void 0);
    Search = Search_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-search",
            template: "\n\t\t<div\n\t\t\tclass=\"bx--search\"\n\t\t\t[ngClass]=\"{\n\t\t\t\t'bx--search--sm': size === 'sm',\n\t\t\t\t'bx--search--lg': size === 'lg',\n\t\t\t\t'bx--search--light': theme === 'light'\n\t\t\t}\"\n\t\t\trole=\"search\">\n\t\t\t<label class=\"bx--label\" [for]=\"id\">{{label}}</label>\n\t\t\t<input\n\t\t\t\tclass=\"bx--search-input\"\n\t\t\t\ttype=\"text\"\n\t\t\t\trole=\"search\"\n\t\t\t\t[id]=\"id\"\n\t\t\t\t[value]=\"value\"\n\t\t\t\t[placeholder]=\"placeholder\"\n\t\t\t\t[disabled]=\"disabled\"\n\t\t\t\t[required]=\"required\"\n\t\t\t\t(input)=\"onSearch($event.target.value)\"/>\n\t\t\t<svg\n\t\t\t\tclass=\"bx--search-magnifier\"\n\t\t\t\twidth=\"16\"\n\t\t\t\theight=\"16\"\n\t\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm4.936-1.27l4.563 4.557-.707.708-4.563-4.558a6.5 6.5 0 1 1 .707-.707z\"\n\t\t\t\t\tfill-rule=\"nonzero\"/>\n\t\t\t</svg>\n\t\t\t<button\n\t\t\t\tclass=\"bx--search-close\"\n\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t'bx--search-close--hidden': !value || value.length === 0\n\t\t\t\t}\"\n\t\t\t\t[title]=\"clearButtonTitle\"\n\t\t\t\t[attr.aria-label]=\"clearButtonTitle\"\n\t\t\t\t(click)=\"clearSearch()\">\n\t\t\t\t<svg\n\t\t\t\t\twidth=\"16\"\n\t\t\t\t\theight=\"16\"\n\t\t\t\t\tviewBox=\"0 0 16 16\"\n\t\t\t\t\txmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M8 6.586L5.879 4.464 4.464 5.88 6.586 8l-2.122 2.121 1.415 1.415L8 9.414l2.121 2.122 1.415-1.415L9.414\n\t\t\t\t\t\t\t8l2.122-2.121-1.415-1.415L8 6.586zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z\"\n\t\t\t\t\t\tfill-rule=\"evenodd\"/>\n\t\t\t\t</svg>\n\t\t\t</button>\n\t\t</div>\n\t",
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Search_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_2__["I18n"] !== "undefined" && _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_2__["I18n"]) === "function" && _a || Object])
    ], Search);
    return Search;
}());



/***/ }),

/***/ "./src/search/search.module.ts":
/*!*************************************!*\
  !*** ./src/search/search.module.ts ***!
  \*************************************/
/*! exports provided: SearchModule, Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.component */ "./src/search/search.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _search_component__WEBPACK_IMPORTED_MODULE_4__["Search"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// modules



// imports


var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _search_component__WEBPACK_IMPORTED_MODULE_4__["Search"]
            ],
            exports: [
                _search_component__WEBPACK_IMPORTED_MODULE_4__["Search"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_3__["I18nModule"]
            ]
        })
    ], SearchModule);
    return SearchModule;
}());




/***/ }),

/***/ "./src/search/search.stories.ts":
/*!**************************************!*\
  !*** ./src/search/search.stories.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./src/index.ts");



Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Search", module).addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [___WEBPACK_IMPORTED_MODULE_2__["SearchModule"]]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t<div style=\"width: 250px;\">\n\t\t\t<ibm-search [theme]=\"theme\" [placeholder]=\"placeholder\" [disabled]=\"disabled\" size=\"lg\"></ibm-search>\n\t\t</div>\n\t\t",
    props: {
        theme: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["select"])("theme", ["dark", "light"], "dark"),
        disabled: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["boolean"])("disabled", false),
        placeholder: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["text"])("placeholder", "Search")
    }
}); })
    .add("Small", function () { return ({
    template: "\n\t\t<div style=\"width: 250px;\">\n\t\t\t<ibm-search [theme]=\"theme\" [placeholder]=\"placeholder\" [disabled]=\"disabled\" size=\"sm\"></ibm-search>\n\t\t</div>\n\t\t",
    props: {
        theme: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["select"])("theme", ["dark", "light"], "dark"),
        disabled: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["boolean"])("disabled", false),
        placeholder: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["text"])("placeholder", "Search")
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/select/optgroup.directive.ts":
/*!******************************************!*\
  !*** ./src/select/optgroup.directive.ts ***!
  \******************************************/
/*! exports provided: OptGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptGroup", function() { return OptGroup; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OptGroup = /** @class */ (function () {
    function OptGroup() {
        this.inputClass = "bx--select-option";
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class"),
        __metadata("design:type", Object)
    ], OptGroup.prototype, "inputClass", void 0);
    OptGroup = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            // tslint:disable-next-line
            selector: "optgroup"
        })
    ], OptGroup);
    return OptGroup;
}());



/***/ }),

/***/ "./src/select/option.directive.ts":
/*!****************************************!*\
  !*** ./src/select/option.directive.ts ***!
  \****************************************/
/*! exports provided: Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Option = /** @class */ (function () {
    function Option() {
        this.inputClass = "bx--select-option";
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class"),
        __metadata("design:type", Object)
    ], Option.prototype, "inputClass", void 0);
    Option = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            // tslint:disable-next-line
            selector: "option"
        })
    ], Option);
    return Option;
}());



/***/ }),

/***/ "./src/select/select.component.ts":
/*!****************************************!*\
  !*** ./src/select/select.component.ts ***!
  \****************************************/
/*! exports provided: Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * `ibm-select` provides a styled `select` component.
 *
 * Example:
 *
 * ```
 * <ibm-select [(ngModel)]="model">
 * 	<option value="default" disabled selected hidden>Choose an option</option>
 * 	<option value="option1">Option 1</option>
 *	<option value="option2">Option 2</option>
 * 	<option value="option3">Option 3</option>
 * </ibm-select>
 *	```

 */
var Select = /** @class */ (function () {
    function Select() {
        /**
         * `inline` or `default` select displays
         */
        this.display = "default";
        /**
         * Label for the select. Appears above the input.
         */
        this.label = "Select label";
        /**
         * Sets the unique ID. Defaults to `select-${total count of selects instantiated}`
         */
        this.id = "select-" + Select_1.selectCount++;
        /**
         * Set to true to disable component.
         */
        this.disabled = false;
        /**
         * `light` or `dark` select theme
         */
        this.theme = "dark";
        /**
         * emits the selected options `value`
         */
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * placeholder declarations. Replaced by the functions provided to `registerOnChange` and `registerOnTouched`
         */
        this.onChangeHandler = function (_) { };
        this.onTouchedHandler = function () { };
    }
    Select_1 = Select;
    Object.defineProperty(Select.prototype, "value", {
        get: function () {
            return this.select.nativeElement.value;
        },
        set: function (v) {
            this.select.nativeElement.value = v;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Receives a value from the model.
     */
    Select.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    /**
     * Registers a listener that notifies the model when the control updates
     */
    Select.prototype.registerOnChange = function (fn) {
        this.onChangeHandler = fn;
    };
    /**
     * Registers a listener that notifies the model when the control is blurred
     */
    Select.prototype.registerOnTouched = function (fn) {
        this.onTouchedHandler = fn;
    };
    /**
     * Sets the disabled state through the model
     */
    Select.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * Handles the change event from the `select`.
     * Sends events to the change handler and emits a `selected` event.
     */
    Select.prototype.onChange = function (event) {
        this.onChangeHandler(event.target.value);
        this.selected.emit(event.target.value);
    };
    /**
     * Listens for the host blurring, and notifies the model
     */
    Select.prototype.blur = function () {
        this.onTouchedHandler();
    };
    var Select_1, _a;
    /**
     * Tracks the total number of selects instantiated. Used to generate unique IDs
     */
    Select.selectCount = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Select.prototype, "display", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Select.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Select.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Select.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Select.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Select.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("select"),
        __metadata("design:type", typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) === "function" && _a || Object)
    ], Select.prototype, "select", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("blur"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Select.prototype, "blur", null);
    Select = Select_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-select",
            template: "\n\t\t<div class=\"bx--form-item\">\n\t\t\t<div\n\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t'bx--select--inline': display === 'inline',\n\t\t\t\t\t'bx--select--light': theme === 'light'\n\t\t\t\t}\"\n\t\t\t\tclass=\"bx--select\">\n\t\t\t\t<label [attr.for]=\"id\" class=\"bx--label\">{{label}}</label>\n\t\t\t\t<select\n\t\t\t\t\t#select\n\t\t\t\t\t[attr.id]=\"id\"\n\t\t\t\t\t[disabled]=\"disabled\"\n\t\t\t\t\t(change)=\"onChange($event)\"\n\t\t\t\t\tclass=\"bx--select-input\">\n\t\t\t\t\t<ng-content></ng-content>\n\t\t\t\t</select>\n\t\t\t\t<svg class=\"bx--select__arrow\" width=\"10\" height=\"5\" viewBox=\"0 0 10 5\">\n\t\t\t\t<path d=\"M0 0l5 4.998L10 0z\" fill-rule=\"evenodd\" />\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t</div>\n\t",
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Select_1,
                    multi: true
                }
            ]
        })
    ], Select);
    return Select;
}());



/***/ }),

/***/ "./src/select/select.module.ts":
/*!*************************************!*\
  !*** ./src/select/select.module.ts ***!
  \*************************************/
/*! exports provided: Select, Option, OptGroup, SelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectModule", function() { return SelectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select.component */ "./src/select/select.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _select_component__WEBPACK_IMPORTED_MODULE_3__["Select"]; });

/* harmony import */ var _option_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./option.directive */ "./src/select/option.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _option_directive__WEBPACK_IMPORTED_MODULE_4__["Option"]; });

/* harmony import */ var _optgroup_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./optgroup.directive */ "./src/select/optgroup.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptGroup", function() { return _optgroup_directive__WEBPACK_IMPORTED_MODULE_5__["OptGroup"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// modules



// imports



var SelectModule = /** @class */ (function () {
    function SelectModule() {
    }
    SelectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _select_component__WEBPACK_IMPORTED_MODULE_3__["Select"],
                _option_directive__WEBPACK_IMPORTED_MODULE_4__["Option"],
                _optgroup_directive__WEBPACK_IMPORTED_MODULE_5__["OptGroup"]
            ],
            exports: [
                _select_component__WEBPACK_IMPORTED_MODULE_3__["Select"],
                _option_directive__WEBPACK_IMPORTED_MODULE_4__["Option"],
                _optgroup_directive__WEBPACK_IMPORTED_MODULE_5__["OptGroup"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ]
        })
    ], SelectModule);
    return SelectModule;
}());



/***/ }),

/***/ "./src/select/select.stories.ts":
/*!**************************************!*\
  !*** ./src/select/select.stories.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./src/index.ts");



Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Select", module).addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [___WEBPACK_IMPORTED_MODULE_2__["SelectModule"]]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t<ibm-select>\n\t\t\t<option value=\"\" disabled selected hidden>Choose an option</option>\n\t\t\t<option value=\"solong\">A much longer option that is worth having around to check how text flows</option>\n\t\t\t<optgroup label=\"Category 1\">\n\t\t\t\t<option value=\"option1\">Option 1</option>\n\t\t\t\t<option value=\"option2\">Option 2</option>\n\t\t\t</optgroup>\n\t\t\t<optgroup label=\"Category 2\">\n\t\t\t\t<option value=\"option1\">Option 1</option>\n\t\t\t\t<option value=\"option2\">Option 2</option>\n\t\t  \t</optgroup>\n\t\t</ibm-select>\n\t"
}); })
    .add("Inline", function () { return ({
    template: "\n\t\t<ibm-select display=\"inline\">\n\t\t\t<option value=\"\" disabled selected hidden>Choose an option</option>\n          <option value=\"solong\">A much longer option that is worth having around to check how text flows</option>\n          <optgroup label=\"Category 1\">\n              <option value=\"option1\">Option 1</option>\n              <option value=\"option2\">Option 2</option>\n          </optgroup>\n          <optgroup label=\"Category 2\">\n              <option value=\"option1\">Option 1</option>\n              <option value=\"option2\">Option 2</option>\n          </optgroup>\n\t\t</ibm-select>\n\t"
}); })
    .add("Light", function () { return ({
    template: "\n\t\t<ibm-select theme=\"light\">\n\t\t\t<option value=\"\" disabled selected hidden>Choose an option</option>\n          <option value=\"solong\">A much longer option that is worth having around to check how text flows</option>\n          <optgroup label=\"Category 1\">\n              <option value=\"option1\">Option 1</option>\n              <option value=\"option2\">Option 2</option>\n          </optgroup>\n          <optgroup label=\"Category 2\">\n              <option value=\"option1\">Option 1</option>\n              <option value=\"option2\">Option 2</option>\n          </optgroup>\n\t\t</ibm-select>\n\t"
}); })
    .add("With ngModel", function () { return ({
    template: "\n\t\t\t<ibm-select [(ngModel)]=\"model\">\n\t\t\t\t<option value=\"default\" disabled selected hidden>Choose an option</option>\n\t\t\t\t<option value=\"option1\">Option 1</option>\n\t\t\t\t<option value=\"option2\">Option 2</option>\n\t\t\t\t<option value=\"option3\">Option 3</option>\n\t\t\t</ibm-select>\n\t\t\t<br>\n\t\t\t<span>Selected: {{ model }}</span>\n\t\t",
    props: {
        model: "default"
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/switch/switch.component.ts":
/*!****************************************!*\
  !*** ./src/switch/switch.component.ts ***!
  \****************************************/
/*! exports provided: SwitchState, SwitchChange, Switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchState", function() { return SwitchState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchChange", function() { return SwitchChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../checkbox/checkbox.component */ "./src/checkbox/checkbox.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Deprecated in favour of `ToggleState` (to be removed in v3.0).
 * Defines the set of states for a switch component.
 * @deprecated
 */
var SwitchState;
(function (SwitchState) {
    SwitchState[SwitchState["Init"] = 0] = "Init";
    SwitchState[SwitchState["Indeterminate"] = 1] = "Indeterminate";
    SwitchState[SwitchState["Checked"] = 2] = "Checked";
    SwitchState[SwitchState["Unchecked"] = 3] = "Unchecked";
})(SwitchState || (SwitchState = {}));
/**
 * Deprecated in favour of `ToggleChange` (to be removed in v3.0).
 * Used to emit changes performed on switch components.
 * @deprecated
 */
var SwitchChange = /** @class */ (function () {
    function SwitchChange() {
    }
    return SwitchChange;
}());

/**
 * Deprecated in favour of `Toggle` (to be removed in v3.0).
 * ```html
 * <ibm-switch [(ngModel)]="switchState">Switch</ibm-switch>
 * ```
 * @deprecated
 */
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    /**
     * Creates an instance of Switch.
     */
    function Switch(changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        /**
         * Size of the switch component.
         */
        _this.size = "md";
        /**
         * The unique id allocated to the `Switch`.
         */
        _this.id = "switch-" + Switch_1.switchCount;
        /**
         * Emits event notifying other classes when a change in state occurs on a switch after a
         * click.
         */
        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        Switch_1.switchCount++;
        console.warn("`ibm-switch` has been deprecated in favour of `ibm-toggle`");
        return _this;
    }
    Switch_1 = Switch;
    /**
     * Creates instance of `SwitchChange` used to propagate the change event.
     * @memberof To
     */
    Switch.prototype.emitChangeEvent = function () {
        var event = new SwitchChange();
        event.source = this;
        event.checked = this.checked;
        this.propagateChange(this.checked);
        this.change.emit(event);
    };
    var Switch_1, _a;
    /**
     * Variable used for creating unique ids for switch components.
     */
    Switch.switchCount = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], Switch.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], Switch.prototype, "change", void 0);
    Switch = Switch_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ibm-switch",
            template: "\n\t\t<input\n\t\t\tclass=\"bx--toggle\"\n\t\t\ttype=\"checkbox\"\n\t\t\t[ngClass]=\"{\n\t\t\t\t'bx--toggle--small': size === 'sm'\n\t\t\t}\"\n\t\t\t[id]=\"id\"\n\t\t\t[value]=\"value\"\n\t\t\t[name]=\"name\"\n\t\t\t[required]=\"required\"\n\t\t\t[checked]=\"checked\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[attr.aria-checked]=\"checked\"\n\t\t\t(change)=\"onChange($event)\"\n\t\t\t(click)=\"onClick($event)\">\n\t\t<label *ngIf=\"size === 'md'\" class=\"bx--toggle__label\" [for]=\"id\">\n\t\t\t<span class=\"bx--toggle__text--left\">Off</span>\n\t\t\t<span class=\"bx--toggle__appearance\"></span>\n\t\t\t<span class=\"bx--toggle__text--right\">On</span>\n\t\t</label>\n\t\t<label *ngIf=\"size === 'sm'\" class=\"bx--toggle__label\" [for]=\"id\">\n\t\t\t<span class=\"bx--toggle__appearance\">\n\t\t\t\t<svg class=\"bx--toggle__check\" width=\"6px\" height=\"5px\" viewBox=\"0 0 6 5\">\n\t\t\t\t\t<path d=\"M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z\"/>\n\t\t\t\t</svg>\n\t\t\t</span>\n\t\t</label>\n\t",
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Switch_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]) === "function" && _a || Object])
    ], Switch);
    return Switch;
}(_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]));



/***/ }),

/***/ "./src/switch/switch.module.ts":
/*!*************************************!*\
  !*** ./src/switch/switch.module.ts ***!
  \*************************************/
/*! exports provided: Switch, SwitchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchModule", function() { return SwitchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _switch_switch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../switch/switch.component */ "./src/switch/switch.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _switch_switch_component__WEBPACK_IMPORTED_MODULE_3__["Switch"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// modules



// imports

// exports

/**
 * Deprecated in favour of `ToggleModule` (to be removed in v3.0).
 *
 * @deprecated
 */
var SwitchModule = /** @class */ (function () {
    function SwitchModule() {
    }
    SwitchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _switch_switch_component__WEBPACK_IMPORTED_MODULE_3__["Switch"]
            ],
            exports: [
                _switch_switch_component__WEBPACK_IMPORTED_MODULE_3__["Switch"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ]
        })
    ], SwitchModule);
    return SwitchModule;
}());



/***/ }),

/***/ "./src/table/table-header-item.class.ts":
/*!**********************************************!*\
  !*** ./src/table/table-header-item.class.ts ***!
  \**********************************************/
/*! exports provided: TableHeaderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeaderItem", function() { return TableHeaderItem; });
var TableHeaderItem = /** @class */ (function () {
    /**
     * Creates an instance of TableHeaderItem.
     * @param {*} [rawData]
     * @memberof TableHeaderItem
     */
    function TableHeaderItem(rawData) {
        /**
         * Defines if column under this TableHeaderItem should be displayed.
         *
         * @memberof TableHeaderItem
         */
        this.visible = true;
        /**
         * Disables sorting by default.
         *
         * @memberof TableHeaderItem
         */
        this.sorted = false;
        /**
         * Enables sorting on click by default.
         * If false then this column won't show a sorting arrow at all.
         *
         * @memberof TableHeaderItem
         */
        this.sortable = true;
        /**
         * Number of applied filters.
         *
         * `filter()` should set it to appropriate number.
         *
         * @memberof TableHeaderItem
         */
        this.filterCount = 0;
        /**
         * Style for the column, applied to every element in the column.
         *
         * ngStyle-like format
         *
         * @memberof TableHeaderItem
         */
        this.style = { "width": "150px" };
        /**
         * used in `ascending`
         *
         * @protected
         * @memberof TableHeaderItem
         */
        this._ascending = true;
        // defaults so we dont leave things empty
        var defaults = {
            data: "",
            visible: this.visible,
            style: this.style,
            filterCount: this.filterCount,
            filterData: { data: "" }
        };
        // fill our object with provided props, and fallback to defaults
        var data = Object.assign({}, defaults, rawData);
        for (var _i = 0, _a = Object.getOwnPropertyNames(data); _i < _a.length; _i++) {
            var property = _a[_i];
            if (data.hasOwnProperty(property)) {
                this[property] = data[property];
            }
        }
    }
    Object.defineProperty(TableHeaderItem.prototype, "ascending", {
        get: function () {
            return this._ascending;
        },
        /**
         * If true, sort is set to ascending, if false descending will be true.
         *
         * @memberof TableHeaderItem
         */
        set: function (asc) {
            this._ascending = asc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableHeaderItem.prototype, "descending", {
        get: function () {
            return !this._ascending;
        },
        /**
         * If true, sort is set to descending, if false ascending will be true.
         *
         * @memberof TableHeaderItem
         */
        set: function (desc) {
            this._ascending = !desc;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Used for sorting rows of the table.
     *
     * Override to enable different sorting.
     *
     * @param {TableItem} one
     * @param {TableItem} two
     * @returns {number}
     * < 0 if `one` should go before `two`
     * > 0 if `one` shoulg go after `two`
     * 0 if it doesn't matter (they are the same)
     * @memberof TableHeaderItem
     */
    TableHeaderItem.prototype.compare = function (one, two) {
        if (one.data < two.data) {
            return -1;
        }
        else if (one.data > two.data) {
            return 1;
        }
        else {
            return 0;
        }
    };
    /**
     * Used to filter rows in the table.
     *
     * Override to make a custom filter.
     *
     * Even though there is just one filter function, there can be multiple filters.
     * When implementing filter, set `filterCount` before returning.
     *
     * @param {TableItem} item
     * @returns {boolean}
     * `true` to hide the row
     * `false` to show the row
     * @memberof TableHeaderItem
     */
    TableHeaderItem.prototype.filter = function (item) {
        this.filterCount = 0;
        return false;
    };
    return TableHeaderItem;
}());



/***/ }),

/***/ "./src/table/table-item.class.ts":
/*!***************************************!*\
  !*** ./src/table/table-item.class.ts ***!
  \***************************************/
/*! exports provided: TableItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableItem", function() { return TableItem; });
var TableItem = /** @class */ (function () {
    /**
     * Creates an instance of TableItem.
     * @param {*} [rawData]
     * @memberof TableItem
     */
    function TableItem(rawData) {
        // defaults so we dont leave things empty
        var defaults = {
            data: ""
        };
        // fill our object with provided props, and fallback to defaults
        var data = Object.assign({}, defaults, rawData);
        this.data = data.data;
        this.expandedData = data.expandedData;
        this.template = data.template;
        this.expandedTemplate = data.expandedTemplate;
    }
    return TableItem;
}());



/***/ }),

/***/ "./src/table/table-model.class.ts":
/*!****************************************!*\
  !*** ./src/table/table-model.class.ts ***!
  \****************************************/
/*! exports provided: TableModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModel", function() { return TableModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _table_header_item_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-header-item.class */ "./src/table/table-header-item.class.ts");
/* harmony import */ var _table_item_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-item.class */ "./src/table/table-item.class.ts");



var TableModel = /** @class */ (function () {
    function TableModel() {
        this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowsSelectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowsExpandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Set to true when there is no more data to load in the table
         *
         * @type {boolean}
         * @memberof TableModel
         */
        this.isEnd = false;
        /**
         * Set to true when lazy loading to show loading indicator
         *
         * @type {boolean}
         * @memberof TableModel
         */
        this.isLoading = false;
        /**
         * Used in `data`
         *
         * @protected
         * @type {Array<Array<TableItem>>}
         * @memberof TableModel
         */
        this._data = [[]];
    }
    Object.defineProperty(TableModel.prototype, "data", {
        /**
         * Gets the full data.
         *
         * You can use it to alter individual `TableItem`s but if you need to change
         * table structure, use `addRow()` and/or `addColumn()`
         *
         * @readonly
         * @memberof TableModel
         */
        get: function () {
            return this._data;
        },
        /**
         * Sets data of the table.
         *
         * Make sure all rows are the same length to keep the column count accurate.
         *
         * @memberof TableModel
         */
        set: function (newData) {
            if (!newData || (Array.isArray(newData) && newData.length === 0)) {
                newData = [[]];
            }
            this._data = newData;
            // init rowsSelected
            this.rowsSelected = new Array(this._data.length);
            this.rowsExpanded = new Array(this._data.length);
            // init rowsContext
            this.rowsContext = new Array(this._data.length);
            // only create a fresh header if necessary (header doesn't exist or differs in length)
            if (this.header == null || (this.header.length !== this._data[0].length && this._data[0].length > 0)) {
                var header = new Array();
                for (var i = 0; i < this._data[0].length; i++) {
                    header.push(new _table_header_item_class__WEBPACK_IMPORTED_MODULE_1__["TableHeaderItem"]());
                }
                this.header = header;
            }
            this.dataChange.emit();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableModel.prototype, "totalDataLength", {
        /**
         * Total length of data that table has access to, or the amount manually set
         *
         * @memberof TableModel
         */
        get: function () {
            // if manually set data length
            if (this._totalDataLength && this._totalDataLength >= 0) {
                return this._totalDataLength;
            }
            // if empty dataset
            if (this.data && this.data.length === 1 && this.data[0].length === 0) {
                return 0;
            }
            return this.data.length;
        },
        /**
         * Manually set data length in case the data in the table doesn't
         * correctly reflect all the data that table is to disply.
         *
         * Example: if you have multiple pages of data that table will display
         * but you're loading one at a time.
         *
         * Set to `null` to reset to default behaviour.
         *
         * @memberof TableModel
         */
        set: function (length) {
            this._totalDataLength = length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns how many rows is currently selected
     *
     * @returns {number}
     * @memberof TableModel
     */
    TableModel.prototype.selectedRowsCount = function () {
        var count = 0;
        if (this.rowsSelected) {
            this.rowsSelected.forEach(function (rowSelected) {
                if (rowSelected) {
                    count++;
                }
            });
        }
        return count;
    };
    /**
     * Returns how many rows is currently expanded
     *
     * @returns {number}
     * @memberof TableModel
     */
    TableModel.prototype.expandedRowsCount = function () {
        var count = 0;
        if (this.rowsExpanded) {
            this.rowsExpanded.forEach(function (rowExpanded) {
                if (rowExpanded) {
                    count++;
                }
            });
        }
        return count;
    };
    /**
     * Returns `index`th row of the table.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * @param {number} index
     * @returns {Array<TableItem>}
     * @memberof TableModel
     */
    TableModel.prototype.row = function (index) {
        return this.data[this.realRowIndex(index)];
    };
    /**
     * Adds a row to the `index`th row or appends to table if index not provided.
     *
     * If row is shorter than other rows or not provided, it will be padded with
     * empty `TableItem` elements.
     *
     * If row is longer than other rows, others will be extended to match so no data is lost.
     *
     * If called on an empty table with no parameters, it creates a 1x1 table.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * @param {Array<TableItem>} row
     * @param {number} [index]
     * @memberof TableModel
     */
    TableModel.prototype.addRow = function (row, index) {
        // if table empty create table with row
        if (!this.data || this.data.length === 0 || this.data[0].length === 0) {
            var newData = new Array();
            newData.push(row ? row : [new _table_item_class__WEBPACK_IMPORTED_MODULE_2__["TableItem"]()]); // row or one empty one column row
            this.data = newData;
            return;
        }
        var realRow = row;
        var columnCount = this.data[0].length;
        if (row == null) {
            realRow = new Array();
            for (var i = 0; i < columnCount; i++) {
                realRow.push(new _table_item_class__WEBPACK_IMPORTED_MODULE_2__["TableItem"]());
            }
        }
        if (realRow.length < columnCount) {
            // extend the length of realRow
            var difference = columnCount - realRow.length;
            for (var i = 0; i < difference; i++) {
                realRow.push(new _table_item_class__WEBPACK_IMPORTED_MODULE_2__["TableItem"]());
            }
        }
        else if (realRow.length > columnCount) {
            // extend the length of header
            var difference = realRow.length - this.header.length;
            for (var j = 0; j < difference; j++) {
                this.header.push(new _table_header_item_class__WEBPACK_IMPORTED_MODULE_1__["TableHeaderItem"]());
            }
            // extend the length of every other row
            for (var i = 0; i < this.data.length; i++) {
                var currentRow = this.data[i];
                difference = realRow.length - currentRow.length;
                for (var j = 0; j < difference; j++) {
                    currentRow.push(new _table_item_class__WEBPACK_IMPORTED_MODULE_2__["TableItem"]());
                }
            }
        }
        if (index == null) {
            this.data.push(realRow);
            // update rowsSelected property for length
            this.rowsSelected.push(false);
            // update rowsExpanded property for length
            this.rowsExpanded.push(false);
            // update rowsContext property for length
            this.rowsContext.push(undefined);
        }
        else {
            var ri = this.realRowIndex(index);
            this.data.splice(ri, 0, realRow);
            // update rowsSelected property for length
            this.rowsSelected.splice(ri, 0, false);
            // update rowsExpanded property for length
            this.rowsExpanded.splice(ri, 0, false);
            // update rowsContext property for length
            this.rowsContext.splice(ri, 0, undefined);
        }
        this.dataChange.emit();
    };
    /**
     * Deletes `index`th row.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * @param {number} index
     * @memberof TableModel
     */
    TableModel.prototype.deleteRow = function (index) {
        var rri = this.realRowIndex(index);
        this.data.splice(rri, 1);
        this.rowsSelected.splice(rri, 1);
        this.rowsExpanded.splice(rri, 1);
        this.rowsContext.splice(rri, 1);
        this.dataChange.emit();
    };
    TableModel.prototype.hasExpandableRows = function () {
        return this.data.some(function (data) { return data.some(function (d) { return d.expandedData; }); }); // checking for some in 2D array
    };
    TableModel.prototype.isRowExpandable = function (index) {
        return this.data[index].some(function (d) { return d.expandedData; });
    };
    /**
     * Returns `index`th column of the table.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * @param {number} index
     * @returns {Array<TableItem>}
     * @memberof TableModel
     */
    TableModel.prototype.column = function (index) {
        var column = new Array();
        var ri = this.realColumnIndex(index);
        var rc = this.data.length;
        for (var i = 0; i < rc; i++) {
            var row = this.data[i];
            column.push(row[ri]);
        }
        return column;
    };
    /**
     * Adds a column to the `index`th column or appends to table if index not provided.
     *
     * If column is shorter than other columns or not provided, it will be padded with
     * empty `TableItem` elements.
     *
     * If column is longer than other columns, others will be extended to match so no data is lost.
     *
     * If called on an empty table with no parameters, it creates a 1x1 table.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * @param {Array<TableItem>} column
     * @param {number} [index]
     * @memberof TableModel
     */
    TableModel.prototype.addColumn = function (column, index) {
        // if table empty create table with row
        if (!this.data || this.data.length === 0 || this.data[0].length === 0) {
            var newData = new Array();
            if (column == null) {
                newData.push([new _table_item_class__WEBPACK_IMPORTED_MODULE_2__["TableItem"]()]);
            }
            else {
                for (var i = 0; i < column.length; i++) {
                    var item = column[i];
                    newData.push([item]);
                }
            }
            this.data = newData;
            return;
        }
        var rc = this.data.length; // row count
        var ci = this.realColumnIndex(index);
        // append missing rows
        for (var i = 0; column != null && i < column.length - rc; i++) {
            this.addRow();
        }
        rc = this.data.length;
        if (index == null) {
            // append to end
            for (var i = 0; i < rc; i++) {
                var row = this.data[i];
                row.push(column == null || column[i] == null ? new _table_item_class__WEBPACK_IMPORTED_MODULE_2__["TableItem"]() : column[i]);
            }
            // update header if not already set by user
            if (this.header.length < this.data[0].length) {
                this.header.push(new _table_header_item_class__WEBPACK_IMPORTED_MODULE_1__["TableHeaderItem"]());
            }
        }
        else {
            if (index >= this.data[0].length) {
                // if trying to append
                ci++;
            }
            // insert
            for (var i = 0; i < rc; i++) {
                var row = this.data[i];
                row.splice(ci, 0, column == null || column[i] == null ? new _table_item_class__WEBPACK_IMPORTED_MODULE_2__["TableItem"]() : column[i]);
            }
            // update header if not already set by user
            if (this.header.length < this.data[0].length) {
                this.header.splice(ci, 0, new _table_header_item_class__WEBPACK_IMPORTED_MODULE_1__["TableHeaderItem"]());
            }
        }
        this.dataChange.emit();
    };
    /**
     * Deletes `index`th column.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * @param {number} index
     * @memberof TableModel
     */
    TableModel.prototype.deleteColumn = function (index) {
        var rci = this.realColumnIndex(index);
        var rowCount = this.data.length;
        for (var i = 0; i < rowCount; i++) {
            this.data[i].splice(rci, 1);
        }
        // update header if not already set by user
        if (this.header.length > this.data[0].length) {
            this.header.splice(rci, 1);
        }
        this.dataChange.emit();
    };
    TableModel.prototype.moveColumn = function (indexFrom, indexTo) {
        var headerFrom = this.header[indexFrom];
        this.addColumn(this.column(indexFrom), indexTo);
        this.deleteColumn(indexFrom + (indexTo < indexFrom ? 1 : 0));
        this.header[indexTo + (indexTo > indexFrom ? -1 : 0)] = headerFrom;
    };
    /**
     * Sorts the data currently present in the model based on `compare()`
     *
     * Direction is set by `ascending` and `descending` properties of `TableHeaderItem`
     * in `index`th column.
     *
     * @param {number} index The column based on which it's sorting
     * @memberof TableModel
     */
    TableModel.prototype.sort = function (index) {
        var _this = this;
        this.pushRowStateToModelData();
        this.data.sort(function (a, b) { return (_this.header[index].descending ? -1 : 1) * _this.header[index].compare(a[index], b[index]); });
        this.popRowStateFromModelData();
        this.header.forEach(function (column) { return column.sorted = false; });
        this.header[index].sorted = true;
    };
    /**
     * Appends `rowsSelected` and `rowsExpanded` info to model data.
     *
     * When sorting rows, do this first so information about row selection
     * gets sorted with the other row info.
     *
     * Call `popRowSelectionFromModelData()` after sorting to make everything
     * right with the world again.
     *
     * @memberof TableModel
     */
    TableModel.prototype.pushRowStateToModelData = function () {
        for (var i = 0; i < this.data.length; i++) {
            var rowSelectedMark = new _table_item_class__WEBPACK_IMPORTED_MODULE_2__["TableItem"]();
            rowSelectedMark.data = this.rowsSelected[i];
            this.data[i].push(rowSelectedMark);
            var rowExpandedMark = new _table_item_class__WEBPACK_IMPORTED_MODULE_2__["TableItem"]();
            rowExpandedMark.data = this.rowsExpanded[i];
            this.data[i].push(rowExpandedMark);
            var rowContext = new _table_item_class__WEBPACK_IMPORTED_MODULE_2__["TableItem"]();
            rowContext.data = this.rowsContext[i];
            this.data[i].push(rowContext);
        }
    };
    /**
     * Restores `rowsSelected` from data pushed by `pushRowSelectionToModelData()`
     *
     * Call after sorting data (if you previously pushed to maintain selection order)
     * to make everything right with the world again.
     *
     * @memberof TableModel
     */
    TableModel.prototype.popRowStateFromModelData = function () {
        for (var i = 0; i < this.data.length; i++) {
            this.rowsContext[i] = this.data[i].pop().data;
            this.rowsExpanded[i] = !!this.data[i].pop().data;
            this.rowsSelected[i] = !!this.data[i].pop().data;
        }
    };
    /**
     * Checks if row is filtered out.
     *
     * @param {number} index
     * @returns {boolean} true if any of the filters in header filters out the `index`th row
     * @memberof TableModel
     */
    TableModel.prototype.isRowFiltered = function (index) {
        var _this = this;
        var ind = this.realRowIndex(index);
        return this.header.some(function (item, i) { return item.filter(_this.row(ind)[i]); });
    };
    /**
     * Select/deselect `index`th row based on value
     *
     * @param index
     * @param value
     */
    TableModel.prototype.selectRow = function (index, value) {
        if (value === void 0) { value = true; }
        this.rowsSelected[index] = value;
        this.rowsSelectedChange.emit(index);
    };
    /**
     * Expands/Collapses `index`th row based on value
     *
     * @param index
     * @param value
     */
    TableModel.prototype.expandRow = function (index, value) {
        if (value === void 0) { value = true; }
        this.rowsExpanded[index] = value;
        this.rowsExpandedChange.emit(index);
    };
    /**
     * Gets the true index of a row based on it's relative position.
     * Like in Python, positive numbers start from the top and
     * negative numbers start from the bottom.
     *
     * @protected
     * @param {number} index
     * @returns {number}
     * @memberof TableModel
     */
    TableModel.prototype.realRowIndex = function (index) {
        return this.realIndex(index, this.data.length);
    };
    /**
     * Gets the true index of a column based on it's relative position.
     * Like in Python, positive numbers start from the top and
     * negative numbers start from the bottom.
     *
     * @protected
     * @param {number} index
     * @returns {number}
     * @memberof TableModel
     */
    TableModel.prototype.realColumnIndex = function (index) {
        return this.realIndex(index, this.data[0].length);
    };
    /**
     * Generic function to calculate the real index of something.
     * Used by `realRowIndex()` and `realColumnIndex()`
     *
     * @protected
     * @param {number} index
     * @param {number} length
     * @returns {number}
     * @memberof TableModel
     */
    TableModel.prototype.realIndex = function (index, length) {
        if (index == null) {
            return length - 1;
        }
        else if (index >= 0) {
            return index >= length ? length - 1 : index;
        }
        else {
            return -index >= length ? 0 : length + index;
        }
    };
    return TableModel;
}());



/***/ }),

/***/ "./src/table/table.component.ts":
/*!**************************************!*\
  !*** ./src/table/table.component.ts ***!
  \**************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.module */ "./src/table/table.module.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.ts");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Build your table with this component by extending things that differ from default.
 *
 * demo: [https://angular.carbondesignsystem.com/?selectedKind=Table](https://angular.carbondesignsystem.com/?selectedKind=Table)
 *
 * Instead of the usual write-your-own-html approach you had with `<table>`,
 * carbon table uses model-view-controller approach.
 *
 * Here, you create a view (with built-in controller) and provide it a model.
 * Changes you make to the model are reflected in the view. Provide same model you use
 * in the table to the `<ibm-pagination>` components.
 * They provide a different view over the same data.
 *
 * ## Basic usage
 *
 * ```html
 * <ibm-table [model]="model"></ibm-table>
 * ```
 *
 * ```typescript
 * public model = new TableModel();
 *
 * this.model.data = [
 * 	[new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
 * 	[new TableItem({data: "csdf"}), new TableItem({data: "zwer"})],
 * 	[new TableItem({data: "bsdf"}), new TableItem({data: "swer"})],
 * 	[new TableItem({data: "csdf"}), new TableItem({data: "twer"})]
 * ];
 * ```
 *
 * ## Customization
 *
 * If you have custom data in your table, you need a way to display it. You can do that
 * by providing a template to `TableItem`.
 *
 * ```html
 * <ng-template #customTableItemTemplate let-data="data">
 * 	<a [routerLink]="data.link">{{data.name}} {{data.surname}}</a>
 * </ng-template>
 * ```
 *
 * ```typescript
 * customTableItemTemplate: TemplateRef<any>;
 *
 * this.customModel.data = [
 * 	[new TableItem({data: "asdf"}), new TableItem({data: {name: "Lessy", link: "/table"}, template: this.customTableItemTemplate})],
 * 	[new TableItem({data: "csdf"}), new TableItem({data: "swer"})],
 * 	[new TableItem({data: "bsdf"}), new TableItem({data: {name: "Alice", surname: "Bob"}, template: this.customTableItemTemplate})],
 * 	[new TableItem({data: "csdf"}), new TableItem({data: "twer"})],
 * ];
 * ```
 *
 * ### Sorting and filtering
 *
 * In case you need custom sorting and/or filtering you should subclass `TableHeaderItem`
 * and override needed functions.
 *
 * ```typescript
 * class FilterableHeaderItem extends TableHeaderItem {
 * 	// custom filter function
 * 	filter(item: TableItem): boolean {
 * 		if (typeof item.data === "string" && item.data.toLowerCase().indexOf(this.filterData.data.toLowerCase()) >= 0 ||
 * 		item.data.name && item.data.name.toLowerCase().indexOf(this.filterData.data.toLowerCase()) >= 0 ||
 * 		item.data.surname && item.data.surname.toLowerCase().indexOf(this.filterData.data.toLowerCase()) >= 0) {
 * 			return false;
 * 		}
 * 		return true;
 * 	}
 *
 * 	set filterCount(n) {}
 * 	get filterCount() {
 * 		return (this.filterData && this.filterData.data && this.filterData.data.length > 0) ? 1 : 0;
 * 	}
 *
 * 	// used for custom sorting
 * 	compare(one: TableItem, two: TableItem) {
 * 		const stringOne = (one.data.name || one.data.surname || one.data).toLowerCase();
 * 		const stringTwo = (two.data.name || two.data.surname || two.data).toLowerCase();
 *
 * 		if (stringOne > stringTwo) {
 * 			return 1;
 * 		} else if (stringOne < stringTwo) {
 * 			return -1;
 * 		} else {
 * 			return 0;
 * 		}
 * 	}
 * }
 * ```
 *
 * See `TableHeaderItem` class for more information.
 *
 * ## No data template
 *
 * When table has no data to show, it can show a message you provide it instead.
 *
 * ```html
 * <ibm-table [model]="model">No data.</ibm-table>
 * ```
 *
 * ... will show `No data.` message, but you can get creative and provide any template you want
 * to replace table's default `tbody`.
 *
 * ## Use pagination as table footer
 *
 * ```html
 * <ibm-pagination [model]="model" (selectPage)="selectPage($event)"></ibm-pagination>
 * ```
 *
 * `selectPage()` function should fetch the data from backend, create new `data`, apply it to `model.data`,
 * and update `model.currentPage`.
 *
 * If the data your server returns is a two dimensional array of objects, it would look something like this:
 *
 * ```typescript
 * selectPage(page) {
 * 	this.getPage(page).then((data: Array<Array<any>>) => {
 * 		// set the data and update page
 * 		this.model.data = this.prepareData(data);
 * 		this.model.currentPage = page;
 * 	});
 * }
 *
 * protected prepareData(data: Array<Array<any>>) {
 * 	// create new data from the service data
 * 	let newData = [];
 * 	data.forEach(dataRow => {
 * 		let row = [];
 * 		dataRow.forEach(dataElement => {
 * 			row.push(new TableItem({
 * 				data: dataElement,
 * 				template: typeof dataElement === "string" ? undefined : this.paginationTableItemTemplate
 * 				// your template can handle all the data types so you don't have to conditionally set it
 * 				// you can also set different templates for different columns based on index
 * 			}));
 * 		});
 * 		newData.push(row);
 * 	});
 * 	return newData;
 * }
 * ```
 *
 * @export
 * @class Table
 * @implements {AfterContentChecked}
 */
var Table = /** @class */ (function () {
    /**
     * Creates an instance of Table.
     *
     * @param {ApplicationRef} applicationRef
     * @memberof Table
     */
    function Table(applicationRef, i18n) {
        this.applicationRef = applicationRef;
        this.i18n = i18n;
        /**
         * Size of the table rows.
         *
         * @type {("sm" | "md" | "lg")}
         * @memberof Table
         */
        this.size = "md";
        /**
         * Object of all the strings table needs.
         * Defaults to the `TABLE` value from the i18n service.
         */
        this.translations = this.i18n.get().TABLE;
        /**
         * Controls whether to show the selection checkboxes column or not.
         *
         * @type {boolean}
         * @memberof Table
         */
        this.showSelectionColumn = true;
        /**
         * Controls whether to enable multiple or single row selection.
         *
         * @type {boolean}
         * @memberof Table
         */
        this.enableSingleSelect = false;
        /**
         * Distance (in px) from the bottom that view has to reach before
         * `scrollLoad` event is emitted.
         *
         * @type {number}
         * @memberof Table
         */
        this.scrollLoadDistance = 0;
        /**
         * Set to `true` to enable users to resize columns.
         *
         * Works for columns with width set in pixels.
         *
         * @memberof Table
         */
        this.columnsResizable = false;
        /**
         * Set to `true` to enable users to drag and drop columns.
         *
         * Changing the column order in table changes table model. Be aware of it when you add additional data
         * to the model.
         *
         * @memberof Table
         */
        this.columnsDraggable = false;
        this.expandButtonAriaLabel = "Expand row";
        this.sortDescendingLabel = "Sort rows by this header in descending order";
        this.sortAscendingLabel = "Sort rows by this header in ascending order";
        /**
         * Controls if all checkboxes are viewed as selected.
         *
         * @type {boolean}
         * @memberof Table
         */
        this.selectAllCheckbox = false;
        /**
         * Controls the indeterminate state of the header checkbox.
         *
         * @type {boolean}
         * @memberof Table
         */
        this.selectAllCheckboxSomeSelected = false;
        /**
         * Set to `false` to remove table rows (zebra) stripes.
         *
         * @type {boolean}
         * @memberof Table
         */
        this.striped = true;
        /**
         * Emits an index of the column that wants to be sorted.
         *
         * @memberof Table
         */
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits if all rows are selected.
         *
         * @param {TableModel} model
         * @memberof Table
         */
        this.selectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits if all rows are deselected.
         *
         * @param {TableModel} model
         * @memberof Table
         */
        this.deselectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits if a single row is selected.
         *
         * @param {Object} ({model: this.model, selectedRowIndex: index})
         * @memberof Table
         */
        this.selectRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits if a single row is deselected.
         *
         * @param {Object} ({model: this.model, deselectedRowIndex: index})
         * @memberof Table
         */
        this.deselectRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when table requires more data to be loaded.
         *
         * @param {TableModel} model
         * @memberof Table
         */
        this.scrollLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isColumnDragging = false;
        this.columnDraggedHoverIndex = -1;
        this.columnDraggedPosition = "";
    }
    Object.defineProperty(Table.prototype, "model", {
        get: function () {
            return this._model;
        },
        /**
         * `TableModel` with data the table is to display.
         *
         * @type {TableModel}
         * @memberof Table
         */
        set: function (m) {
            var _this = this;
            if (this._model) {
                this._model.dataChange.unsubscribe();
                this._model.rowsSelectedChange.unsubscribe();
            }
            this._model = m;
            this._model.rowsSelectedChange.subscribe(function () { return _this.updateSelectAllCheckbox(); });
            this._model.dataChange.subscribe(function () { return _this.updateSelectAllCheckbox(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "enableRowSelect", {
        get: function () {
            return this.showSelectionColumn;
        },
        /**
         * Controls whether to show the selection checkboxes column or not.
         *
         * @deprecated in the next major carbon-components-angular version in favour of
         * `showSelectionColumn` because of new attribute `enableSingleSelect`
         *  please use `showSelectionColumn` instead
         */
        set: function (value) {
            this.showSelectionColumn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "noData", {
        get: function () {
            return !this.model.data ||
                this.model.data.length === 0 ||
                this.model.data.length === 1 && this.model.data[0].length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Table.prototype.columnResizeStart = function (event, column) {
        var _this = this;
        this.columnResizeWidth = parseInt(column.style.width, 10);
        this.columnResizeMouseX = event.clientX;
        event.preventDefault();
        this.mouseMoveSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document.body, "mousemove").subscribe(function (event) {
            _this.columnResizeProgress(event, column);
        });
        this.mouseUpSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document.body, "mouseup").subscribe(function (event) {
            _this.columnResizeEnd(event, column);
        });
    };
    Table.prototype.columnResizeProgress = function (event, column) {
        var move = event.clientX - this.columnResizeMouseX;
        column.style.width = this.columnResizeWidth + move + "px";
    };
    Table.prototype.columnResizeEnd = function (event, column) {
        this.mouseMoveSubscription.unsubscribe();
        this.mouseUpSubscription.unsubscribe();
    };
    Table.prototype.onRowSelect = function (index) {
        var _this = this;
        if (!this.showSelectionColumn && this.enableSingleSelect) {
            this.model.rowsSelected.forEach(function (element, index) {
                _this.model.selectRow(index, false);
            });
            this.model.selectRow(index, !this.model.rowsSelected[index]);
        }
    };
    Table.prototype.updateSelectAllCheckbox = function () {
        var selectedRowsCount = this.model.selectedRowsCount();
        if (selectedRowsCount <= 0) {
            // reset select all checkbox if nothing selected
            this.selectAllCheckbox = false;
            this.selectAllCheckboxSomeSelected = false;
        }
        else if (selectedRowsCount < this.model.data.length) {
            this.selectAllCheckboxSomeSelected = true;
        }
    };
    /**
     * Triggered whenever the header checkbox is clicked.
     * Updates all the checkboxes in the table view.
     * Emits the `selectAll` or `deselectAll` event.
     *
     * @memberof Table
     */
    Table.prototype.onSelectAllCheckboxChange = function () {
        this.applicationRef.tick(); // give app time to process the click if needed
        if (this.selectAllCheckboxSomeSelected) {
            this.selectAllCheckbox = false; // clear all boxes
            this.deselectAll.emit(this.model);
        }
        else if (this.selectAllCheckbox) {
            this.selectAll.emit(this.model);
        }
        else {
            this.deselectAll.emit(this.model);
        }
        this.selectAllCheckboxSomeSelected = false;
        for (var i = 0; i < this.model.rowsSelected.length; i++) {
            this.model.rowsSelected[i] = this.selectAllCheckbox;
        }
    };
    /**
     * Triggered when a single row is clicked.
     * Updates the header checkbox state.
     * Emits the `selectRow` or `deselectRow` event.
     *
     * @param {number} index
     * @returns
     * @memberof Table
     */
    Table.prototype.onRowCheckboxChange = function (index) {
        var startValue = this.model.rowsSelected[0];
        if (this.model.rowsSelected[index]) {
            this.selectRow.emit({ model: this.model, selectedRowIndex: index });
        }
        else {
            this.deselectRow.emit({ model: this.model, deselectedRowIndex: index });
        }
        for (var i = 1; i < this.model.rowsSelected.length; i++) {
            var one = this.model.rowsSelected[i];
            if (!!one !== !!startValue) { // !! essentially converts to boolean and we want undefined to be false
                // set indeterminate
                this.selectAllCheckbox = false;
                this.selectAllCheckboxSomeSelected = true;
                return;
            }
        }
        this.selectAllCheckboxSomeSelected = false;
        this.selectAllCheckbox = startValue;
    };
    /**
     * Triggered when the user scrolls on the `<tbody>` element.
     * Emits the `scrollLoad` event.
     *
     * @param {any} event
     * @memberof Table
     */
    Table.prototype.onScroll = function (event) {
        var distanceFromBottom = event.target.scrollHeight - event.target.clientHeight - event.target.scrollTop;
        if (distanceFromBottom <= this.scrollLoadDistance) {
            this.scrollLoad.emit(this.model);
        }
        else {
            this.model.isEnd = false;
        }
    };
    Table.prototype.columnDragStart = function (event, columnIndex) {
        this.isColumnDragging = true;
        this.columnDraggedHoverIndex = columnIndex;
        event.dataTransfer.setData("columnIndex", JSON.stringify(columnIndex));
    };
    Table.prototype.columnDragEnd = function (event, columnIndex) {
        this.isColumnDragging = false;
        this.columnDraggedHoverIndex = -1;
    };
    Table.prototype.columnDragEnter = function (event, position, columnIndex) {
        this.columnDraggedPosition = position;
        this.columnDraggedHoverIndex = columnIndex;
    };
    Table.prototype.columnDragLeave = function (event, position, columnIndex) {
        this.columnDraggedPosition = "";
    };
    Table.prototype.columnDragover = function (event, position, columnIndex) {
        this.columnDraggedHoverIndex = columnIndex;
        this.columnDraggedPosition = position;
        // needed to tell browser to allow dropping
        event.preventDefault();
    };
    Table.prototype.columnDrop = function (event, position, columnIndex) {
        this.isColumnDragging = false;
        this.columnDraggedHoverIndex = -1;
        this.columnDraggedPosition = "";
        this.model.moveColumn(parseInt(event.dataTransfer.getData("columnIndex"), 10), columnIndex + (position === "right" ? 1 : 0));
    };
    Object.defineProperty(Table.prototype, "scrollbarWidth", {
        get: function () {
            return Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["getScrollbarWidth"])();
        },
        enumerable: true,
        configurable: true
    });
    Table.prototype.firstExpandedDataInRow = function (row) {
        var found = row.find(function (d) { return d.expandedData; });
        if (found) {
            return found.expandedData;
        }
        return found;
    };
    Table.prototype.firstExpandedTemplateInRow = function (row) {
        var found = row.find(function (d) { return d.expandedTemplate; });
        if (found) {
            return found.expandedTemplate;
        }
        return found;
    };
    /**
     * Triggered when the user scrolls on the `<tbody>` element.
     * Emits the `scrollLoad` event.
     *
     * @param {any} event
     * @memberof Table
     */
    Table.prototype.scrollToTop = function (event) {
        event.target.parentElement.parentElement.parentElement.parentElement.children[1].scrollTop = 0;
        this.model.isEnd = false;
    };
    var _a, _b, _c, _d;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Table.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Table.prototype, "translations", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof _table_module__WEBPACK_IMPORTED_MODULE_2__["TableModel"] !== "undefined" && _table_module__WEBPACK_IMPORTED_MODULE_2__["TableModel"]) === "function" && _a || Object),
        __metadata("design:paramtypes", [typeof (_b = typeof _table_module__WEBPACK_IMPORTED_MODULE_2__["TableModel"] !== "undefined" && _table_module__WEBPACK_IMPORTED_MODULE_2__["TableModel"]) === "function" && _b || Object])
    ], Table.prototype, "model", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], Table.prototype, "enableRowSelect", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Table.prototype, "showSelectionColumn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Table.prototype, "enableSingleSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Table.prototype, "scrollLoadDistance", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Table.prototype, "columnsResizable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Table.prototype, "columnsDraggable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Table.prototype, "expandButtonAriaLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Table.prototype, "sortDescendingLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Table.prototype, "sortAscendingLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Table.prototype, "striped", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Table.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Table.prototype, "selectAll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Table.prototype, "deselectAll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Table.prototype, "selectRow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Table.prototype, "deselectRow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Table.prototype, "scrollLoad", void 0);
    Table = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-table",
            template: "\n\t<table\n\tclass=\"bx--data-table-v2\"\n\t[ngClass]=\"{\n\t\t'bx--data-table-v2--compact': size === 'sm',\n\t\t'bx--data-table-v2--tall': size === 'lg',\n\t\t'bx--data-table-v2--zebra': striped\n\t}\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th *ngIf=\"model.hasExpandableRows()\"></th>\n\t\t\t\t<th *ngIf=\"showSelectionColumn\">\n\t\t\t\t\t<ibm-checkbox\n\t\t\t\t\t\t[size]=\"size !== ('lg' ? 'sm' : 'md')\"\n\t\t\t\t\t\t[(ngModel)]=\"selectAllCheckbox\"\n\t\t\t\t\t\t[indeterminate]=\"selectAllCheckboxSomeSelected\"\n\t\t\t\t\t\taria-label=\"Select all rows\"\n\t\t\t\t\t\t(change)=\"onSelectAllCheckboxChange()\">\n\t\t\t\t\t</ibm-checkbox>\n\t\t\t\t</th>\n\t\t\t\t<ng-container *ngFor=\"let column of model.header; let i = index\">\n\t\t\t\t\t<th [ngClass]='{\"thead_action\": column.filterTemplate || this.sort.observers.length > 0}'\n\t\t\t\t\t*ngIf=\"column.visible\"\n\t\t\t\t\t[class]=\"column.className\"\n\t\t\t\t\t[ngStyle]=\"column.style\"\n\t\t\t\t\t[draggable]=\"columnsDraggable\"\n\t\t\t\t\t(dragstart)=\"columnDragStart($event, i)\"\n\t\t\t\t\t(dragend)=\"columnDragEnd($event, i)\">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t*ngIf=\"columnsResizable\"\n\t\t\t\t\t\tclass=\"column-resize-handle\"\n\t\t\t\t\t\t(mousedown)=\"columnResizeStart($event, column)\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\tclass=\"bx--table-sort-v2\"\n\t\t\t\t\t\t\t*ngIf=\"this.sort.observers.length > 0 && column.sortable\"\n\t\t\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t\t\t'bx--table-sort-v2--active': column.sorted,\n\t\t\t\t\t\t\t\t'bx--table-sort-v2--ascending': column.ascending\n\t\t\t\t\t\t\t}\"\n\t\t\t\t\t\t\t(click)=\"sort.emit(i)\">\n\t\t\t\t\t\t\t<span *ngIf=\"!column.template\" [title]=\"column.data\">{{column.data}}</span>\n\t\t\t\t\t\t\t<ng-template\n\t\t\t\t\t\t\t\t[ngTemplateOutlet]=\"column.template\" [ngTemplateOutletContext]=\"{data: column.data}\">\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t<svg\n\t\t\t\t\t\t\tclass=\"bx--table-sort-v2__icon\"\n\t\t\t\t\t\t\twidth=\"10\" height=\"5\" viewBox=\"0 0 10 5\"\n\t\t\t\t\t\t\t[attr.aria-label]=\"(column.sorted && column.ascending ? sortDescendingLabel : sortAscendingLabel)\"\n\t\t\t\t\t\t\t[attr.alt]=\"(column.sorted && column.ascending ? sortDescendingLabel : sortAscendingLabel)\">\n\t\t\t\t\t\t\t\t<title>{{(column.sorted && column.ascending ? sortDescendingLabel : sortAscendingLabel)}}</title>\n\t\t\t\t\t\t\t\t<path d=\"M0 0l5 4.998L10 0z\" fill-rule=\"evenodd\" />\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<span\n\t\t\t\t\t\t\tclass=\"bx--table-header-label\"\n\t\t\t\t\t\t\t*ngIf=\"this.sort.observers.length === 0 || (this.sort.observers.length > 0 && !column.sortable)\">\n\t\t\t\t\t\t\t<span *ngIf=\"!column.template\" [title]=\"column.data\">{{column.data}}</span>\n\t\t\t\t\t\t\t<ng-template\n\t\t\t\t\t\t\t\t[ngTemplateOutlet]=\"column.template\" [ngTemplateOutletContext]=\"{data: column.data}\">\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t[ngClass]=\"{'active': column.filterCount > 0}\"\n\t\t\t\t\t\t\t*ngIf=\"column.filterTemplate\"\n\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\taria-expanded=\"false\"\n\t\t\t\t\t\t\taria-haspopup=\"true\"\n\t\t\t\t\t\t\t[ibmTooltip]=\"column.filterTemplate\"\n\t\t\t\t\t\t\ttrigger=\"click\"\n\t\t\t\t\t\t\t[title]=\"translations.FILTER\"\n\t\t\t\t\t\t\tplacement=\"bottom,top\"\n\t\t\t\t\t\t\t[data]=\"column.filterData\">\n\t\t\t\t\t\t\t<svg\n\t\t\t\t\t\t\t\txmlns=\"http://www.w3.org/2000/svg\"\n\t\t\t\t\t\t\t\tclass=\"icon--sm\"\n\t\t\t\t\t\t\t\twidth=\"16\"\n\t\t\t\t\t\t\t\theight=\"16\"\n\t\t\t\t\t\t\t\tviewBox=\"0 0 16 16\">\n\t\t\t\t\t\t\t\t<path d=\"M0 0v3l6 8v5h4v-5l6-8V0H0zm9 10.7V15H7v-4.3L1.3 3h13.5L9 10.7z\"/>\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t<span *ngIf=\"column.filterCount > 0\">\n\t\t\t\t\t\t\t\t{{column.filterCount}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t*ngIf=\"columnsDraggable && isColumnDragging\"\n\t\t\t\t\t\tclass=\"drop-area\">\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"columnDraggedHoverIndex == i && columnDraggedPosition == 'left'\"\n\t\t\t\t\t\t\tclass=\"drop-indicator-left\"></div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tclass=\"drop-area-left\"\n\t\t\t\t\t\t\t(dragenter)=\"columnDragEnter($event, 'left', i)\"\n\t\t\t\t\t\t\t(dragleave)=\"columnDragLeave($event, 'left', i)\"\n\t\t\t\t\t\t\t(dragover)=\"columnDragover($event, 'left', i)\"\n\t\t\t\t\t\t\t(drop)=\"columnDrop($event, 'left', i)\">\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tclass=\"drop-area-right\"\n\t\t\t\t\t\t\t(dragenter)=\"columnDragEnter($event, 'right', i)\"\n\t\t\t\t\t\t\t(dragleave)=\"columnDragLeave($event, 'right', i)\"\n\t\t\t\t\t\t\t(dragover)=\"columnDragover($event, 'right', i)\"\n\t\t\t\t\t\t\t(drop)=\"columnDrop($event, 'right', i)\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"columnDraggedHoverIndex == i && columnDraggedPosition == 'right'\"\n\t\t\t\t\t\t\tclass=\"drop-indicator-right\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</th>\n\t\t\t\t</ng-container>\n\t\t\t\t<th [ngStyle]=\"{'width': scrollbarWidth + 'px', 'padding': 0, 'border': 0}\">\n\t\t\t\t\t<!--\n\t\t\t\t\t\tScrollbar pushes body to the left so this header column is added to push\n\t\t\t\t\t\tthe title bar the same amount and keep the header and body columns aligned.\n\t\t\t\t\t-->\n\t\t\t\t</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody\n\t\t*ngIf=\"!noData; else noDataTemplate\"\n\t\t[ngStyle]=\"{'overflow-y': 'scroll'}\"\n\t\t(scroll)=\"onScroll($event)\">\n\t\t\t<ng-container *ngFor=\"let row of model.data; let i = index\">\n\t\t\t\t<tr *ngIf=\"!model.isRowFiltered(i)\"\n\t\t\t\t\t(click)=\"onRowSelect(i)\"\n\t\t\t\t\t[attr.data-parent-row]=\"(model.isRowExpandable(i) ? 'true' : null)\"\n\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t'bx--data-table-v2--selected': model.rowsSelected[i],\n\t\t\t\t\t\t'bx--parent-row-v2': model.isRowExpandable(i),\n\t\t\t\t\t\t'bx--expandable-row-v2': model.rowsExpanded[i],\n\t\t\t\t\t\t'tbody_row--selectable': enableSingleSelect,\n\t\t\t\t\t\t'tbody_row--success': !model.rowsSelected[i] && model.rowsContext[i] === 'success',\n\t\t\t\t\t\t'tbody_row--warning': !model.rowsSelected[i] && model.rowsContext[i] === 'warning',\n\t\t\t\t\t\t'tbody_row--info': !model.rowsSelected[i] && model.rowsContext[i] === 'info',\n\t\t\t\t\t\t'tbody_row--error': !model.rowsSelected[i] && model.rowsContext[i] === 'error'\n\t\t\t\t\t}\">\n\t\t\t\t\t<td\n\t\t\t\t\t*ngIf=\"model.hasExpandableRows()\"\n\t\t\t\t\tclass=\"bx--table-expand-v2\"\n\t\t\t\t\t[attr.data-previous-value]=\"(model.rowsExpanded[i] ? 'collapsed' : null)\">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t*ngIf=\"model.isRowExpandable(i)\"\n\t\t\t\t\t\t(click)=\"model.expandRow(i, !model.rowsExpanded[i])\"\n\t\t\t\t\t\t[attr.aria-label]=\"expandButtonAriaLabel\"\n\t\t\t\t\t\tclass=\"bx--table-expand-v2__button\">\n\t\t\t\t\t\t\t<svg class=\"bx--table-expand-v2__svg\" width=\"7\" height=\"12\" viewBox=\"0 0 7 12\">\n\t\t\t\t\t\t\t\t<path fill-rule=\"nonzero\" d=\"M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z\" />\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td *ngIf=\"showSelectionColumn\">\n\t\t\t\t\t\t<ibm-checkbox\n\t\t\t\t\t\t\taria-label=\"Select row\"\n\t\t\t\t\t\t\t[size]=\"size !== ('lg' ? 'sm' : 'md')\"\n\t\t\t\t\t\t\t[(ngModel)]=\"model.rowsSelected[i]\"\n\t\t\t\t\t\t\t(change)=\"onRowCheckboxChange(i)\">\n\t\t\t\t\t\t</ibm-checkbox>\n\t\t\t\t\t</td>\n\t\t\t\t\t<ng-container *ngFor=\"let item of row; let i = index\">\n\t\t\t\t\t\t<td *ngIf=\"model.header[i].visible\"\n\t\t\t\t\t\t\t[class]=\"model.header[i].className\"\n\t\t\t\t\t\t\t[ngStyle]=\"model.header[i].style\">\n\t\t\t\t\t\t\t<ng-container *ngIf=\"!item.template\">{{item.data}}</ng-container>\n\t\t\t\t\t\t\t<ng-template\n\t\t\t\t\t\t\t\t[ngTemplateOutlet]=\"item.template\" [ngTemplateOutletContext]=\"{data: item.data}\">\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</tr>\n\t\t\t\t<tr\n\t\t\t\t*ngIf=\"model.rowsExpanded[i]\"\n\t\t\t\tclass=\"bx--expandable-row-v2\"\n\t\t\t\t[attr.data-child-row]=\"(model.rowsExpanded[i] ? 'true' : null)\">\n\t\t\t\t\t<td [attr.colspan]=\"row.length + 2\">\n\t\t\t\t\t\t<ng-container *ngIf=\"!firstExpandedTemplateInRow(row)\">{{firstExpandedDataInRow(row)}}</ng-container>\n\t\t\t\t\t\t<ng-template\n\t\t\t\t\t\t\t[ngTemplateOutlet]=\"firstExpandedTemplateInRow(row)\"\n\t\t\t\t\t\t\t[ngTemplateOutletContext]=\"{data: firstExpandedDataInRow(row)}\">\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</ng-container>\n\t\t</tbody>\n\t\t<ng-template #noDataTemplate><ng-content></ng-content></ng-template>\n\t\t<tfoot>\n\t\t\t<tr *ngIf=\"this.model.isLoading\">\n\t\t\t\t<td class=\"table_loading-indicator\">\n\t\t\t\t\t<ibm-static-icon icon=\"loading_rows\" size=\"lg\"></ibm-static-icon>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr *ngIf=\"this.model.isEnd\">\n\t\t\t\t<td class=\"table_end-indicator\">\n\t\t\t\t\t<h5>{{translations.END_OF_DATA}}</h5>\n\t\t\t\t\t<button (click)=\"scrollToTop($event)\" class=\"btn--secondary-sm\">\n\t\t\t\t\t\t{{translations.SCROLL_TOP}}\n\t\t\t\t\t</button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tfoot>\n\t</table>\n\t"
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]) === "function" && _c || Object, typeof (_d = typeof _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_4__["I18n"] !== "undefined" && _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_4__["I18n"]) === "function" && _d || Object])
    ], Table);
    return Table;
}());



/***/ }),

/***/ "./src/table/table.module.ts":
/*!***********************************!*\
  !*** ./src/table/table.module.ts ***!
  \***********************************/
/*! exports provided: Table, TableModel, TableItem, TableHeaderItem, TableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../dialog/dialog.module */ "./src/dialog/dialog.module.ts");
/* harmony import */ var _forms_forms_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../forms/forms.module */ "./src/forms/forms.module.ts");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table.component */ "./src/table/table.component.ts");
/* harmony import */ var _icon_icon_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../icon/icon.module */ "./src/icon/icon.module.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../i18n/i18n.module */ "./src/i18n/i18n.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _table_component__WEBPACK_IMPORTED_MODULE_5__["Table"]; });

/* harmony import */ var _table_model_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table-model.class */ "./src/table/table-model.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableModel", function() { return _table_model_class__WEBPACK_IMPORTED_MODULE_9__["TableModel"]; });

/* harmony import */ var _table_item_class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table-item.class */ "./src/table/table-item.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableItem", function() { return _table_item_class__WEBPACK_IMPORTED_MODULE_10__["TableItem"]; });

/* harmony import */ var _table_header_item_class__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table-header-item.class */ "./src/table/table-header-item.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableHeaderItem", function() { return _table_header_item_class__WEBPACK_IMPORTED_MODULE_11__["TableHeaderItem"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _table_component__WEBPACK_IMPORTED_MODULE_5__["Table"]
            ],
            exports: [
                _table_component__WEBPACK_IMPORTED_MODULE_5__["Table"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _forms_forms_module__WEBPACK_IMPORTED_MODULE_4__["NFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _icon_icon_module__WEBPACK_IMPORTED_MODULE_6__["IconModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_3__["DialogModule"],
                ___WEBPACK_IMPORTED_MODULE_7__["StaticIconModule"],
                _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_8__["I18nModule"]
            ]
        })
    ], TableModule);
    return TableModule;
}());



/***/ }),

/***/ "./src/table/table.stories.ts":
/*!************************************!*\
  !*** ./src/table/table.stories.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pagination/pagination.module */ "./src/pagination/pagination.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ */ "./src/index.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TableStory = /** @class */ (function () {
    function TableStory() {
        this.model = new ___WEBPACK_IMPORTED_MODULE_4__["TableModel"]();
        this.size = "md";
        this.showSelectionColumn = true;
        this.striped = true;
        this.sortable = true;
    }
    TableStory.prototype.ngOnInit = function () {
        this.model.header = [
            new ___WEBPACK_IMPORTED_MODULE_4__["TableHeaderItem"]({
                data: "Name"
            }),
            new ___WEBPACK_IMPORTED_MODULE_4__["TableHeaderItem"]({
                data: "hwer",
                style: { "width": "auto" },
                className: "my-class"
            })
        ];
    };
    TableStory.prototype.ngOnChanges = function (changes) {
        if (changes.sortable) {
            for (var _i = 0, _a = this.model.header; _i < _a.length; _i++) {
                var column = _a[_i];
                column.sortable = changes.sortable.currentValue;
            }
        }
    };
    TableStory.prototype.simpleSort = function (index) {
        sort(simpleModel, index);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], TableStory.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], TableStory.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], TableStory.prototype, "showSelectionColumn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], TableStory.prototype, "striped", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], TableStory.prototype, "sortable", void 0);
    TableStory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-table",
            template: "\n\t\t<ibm-table\n\t\t\t[model]=\"model\"\n\t\t\t[size]=\"size\"\n\t\t\t[showSelectionColumn]=\"showSelectionColumn\"\n\t\t\t[striped]=\"striped\"\n\t\t\t(sort)=\"simpleSort($event)\">\n\t\t\t<ng-content></ng-content>\n\t\t</ibm-table>\n\t"
        })
    ], TableStory);
    return TableStory;
}());
var DynamicTableStory = /** @class */ (function () {
    function DynamicTableStory() {
        this.model = new ___WEBPACK_IMPORTED_MODULE_4__["TableModel"]();
        this.size = "md";
        this.showSelectionColumn = true;
        this.striped = true;
    }
    DynamicTableStory.prototype.ngOnInit = function () {
        this.model.data = [
            [new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "Name 1" }), new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: { name: "Lessy", link: "/table" }, template: this.customTableItemTemplate })],
            [new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "Name 3" }), new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "swer" })],
            [new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "Name 2" }), new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: { name: "Alice", surname: "Bob" }, template: this.customTableItemTemplate })],
            [new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "Name 4" }), new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "twer" })]
        ];
        this.model.header = [
            new ___WEBPACK_IMPORTED_MODULE_4__["TableHeaderItem"]({ data: "Very long title indeed" }),
            new CustomHeaderItem({
                data: { name: "Custom header", link: "/table" },
                template: this.customHeaderTemplate,
                style: { "width": "auto" }
            })
        ];
    };
    DynamicTableStory.prototype.customSort = function (index) {
        this.sort(this.model, index);
    };
    DynamicTableStory.prototype.sort = function (model, index) {
        if (model.header[index].sorted) {
            // if already sorted flip sorting direction
            model.header[index].ascending = model.header[index].descending;
        }
        model.sort(index);
    };
    DynamicTableStory.prototype.addRow = function () {
        var lastRowCopy = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["clone"])(this.model.row(this.model.data.length - 1));
        this.model.addRow(lastRowCopy);
    };
    DynamicTableStory.prototype.addColumn = function () {
        var column = Array(this.model.data.length).fill(new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "Column " + this.model.row(0).length }));
        this.model.addColumn(column);
    };
    var _a, _b;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicTableStory.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicTableStory.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicTableStory.prototype, "showSelectionColumn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicTableStory.prototype, "striped", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("customHeaderTemplate"),
        __metadata("design:type", typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) === "function" && _a || Object)
    ], DynamicTableStory.prototype, "customHeaderTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("customTableItemTemplate"),
        __metadata("design:type", typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) === "function" && _b || Object)
    ], DynamicTableStory.prototype, "customTableItemTemplate", void 0);
    DynamicTableStory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-custom-table",
            template: "\n\t\t<button class=\"bx--btn bx--btn--sm bx--btn--primary\" (click)=\"addRow()\">Add row</button>\n\t\t<button class=\"bx--btn bx--btn--sm bx--btn--primary\" (click)=\"addColumn()\">Add column</button>\n\n\t\t<ng-template #customTableItemTemplate let-data=\"data\">\n\t\t\t<a [attr.href]=\"data.link\">{{data.name}} {{data.surname}}</a>\n\t\t</ng-template>\n\t\t<ng-template #customHeaderTemplate let-data=\"data\">\n\t\t\t<i><a [attr.href]=\"data.link\">{{data.name}}</a></i>\n\t\t</ng-template>\n\n\t\t<ibm-table\n\t\t\t[model]=\"model\"\n\t\t\t[size]=\"size\"\n\t\t\t[showSelectionColumn]=\"showSelectionColumn\"\n\t\t\t[striped]=\"striped\"\n\t\t\t(sort)=\"customSort($event)\">\n\t\t</ibm-table>\n\t"
        })
    ], DynamicTableStory);
    return DynamicTableStory;
}());
var ExpansionTableStory = /** @class */ (function () {
    function ExpansionTableStory() {
        this.model = new ___WEBPACK_IMPORTED_MODULE_4__["TableModel"]();
        this.size = "md";
        this.showSelectionColumn = true;
        this.striped = true;
    }
    ExpansionTableStory.prototype.ngOnInit = function () {
        this.model.data = [
            [
                new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "Name 1", expandedData: "No template" }),
                new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: { name: "Lessy", link: "#" }, template: this.customTableItemTemplate })
            ],
            [
                new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({
                    data: "Name 3",
                    expandedData: { name: "In", surname: "Template" },
                    expandedTemplate: this.customTableItemTemplate
                }),
                new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "swer" })
            ],
            [new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "Name 2" }), new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: { name: "Alice", surname: "Bob" }, template: this.customTableItemTemplate })],
            [new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "Name 4" }), new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "twer" })]
        ];
        this.model.header = [
            new ___WEBPACK_IMPORTED_MODULE_4__["TableHeaderItem"]({ data: "Very long title indeed" }),
            new CustomHeaderItem({
                data: { name: "Custom header", link: "#" },
                template: this.customHeaderTemplate,
                style: { "width": "auto" }
            })
        ];
    };
    ExpansionTableStory.prototype.customSort = function (index) {
        this.sort(this.model, index);
    };
    ExpansionTableStory.prototype.sort = function (model, index) {
        if (model.header[index].sorted) {
            // if already sorted flip sorting direction
            model.header[index].ascending = model.header[index].descending;
        }
        model.sort(index);
    };
    var _c, _d;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ExpansionTableStory.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ExpansionTableStory.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ExpansionTableStory.prototype, "showSelectionColumn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ExpansionTableStory.prototype, "striped", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("customHeaderTemplate"),
        __metadata("design:type", typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) === "function" && _c || Object)
    ], ExpansionTableStory.prototype, "customHeaderTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("customTableItemTemplate"),
        __metadata("design:type", typeof (_d = typeof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) === "function" && _d || Object)
    ], ExpansionTableStory.prototype, "customTableItemTemplate", void 0);
    ExpansionTableStory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-expansion-table",
            template: "\n\t\t<ng-template #customTableItemTemplate let-data=\"data\">\n\t\t\t<a [attr.href]=\"data.link\">{{data.name}} {{data.surname}}</a>\n\t\t</ng-template>\n\t\t<ng-template #customHeaderTemplate let-data=\"data\">\n\t\t\t<i><a [attr.href]=\"data.link\">{{data.name}}</a></i>\n\t\t</ng-template>\n\n\t\t<ibm-table\n\t\t\t[model]=\"model\"\n\t\t\t[size]=\"size\"\n\t\t\t[showSelectionColumn]=\"showSelectionColumn\"\n\t\t\t[striped]=\"striped\"\n\t\t\t(sort)=\"customSort($event)\">\n\t\t</ibm-table>\n\t"
        })
    ], ExpansionTableStory);
    return ExpansionTableStory;
}());
var OverflowTableStory = /** @class */ (function () {
    function OverflowTableStory() {
        this.model = new ___WEBPACK_IMPORTED_MODULE_4__["TableModel"]();
        this.size = "md";
        this.showSelectionColumn = true;
        this.striped = true;
    }
    OverflowTableStory.prototype.ngOnInit = function () {
        this.model.data = [
            [new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "Name 1" }), new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: { id: "1" }, template: this.overflowMenuItemTemplate })],
            [new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "Name 2" }), new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: { id: "2" }, template: this.overflowMenuItemTemplate })],
            [new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "Name 3" }), new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: { id: "3" }, template: this.overflowMenuItemTemplate })],
            [new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "Name 4" }), new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: { id: "4" }, template: this.overflowMenuItemTemplate })]
        ];
        this.model.header = [
            new ___WEBPACK_IMPORTED_MODULE_4__["TableHeaderItem"]({ data: "Name" }),
            new ___WEBPACK_IMPORTED_MODULE_4__["TableHeaderItem"]({ data: "Actions" })
        ];
    };
    var _e;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], OverflowTableStory.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], OverflowTableStory.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], OverflowTableStory.prototype, "showSelectionColumn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], OverflowTableStory.prototype, "striped", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("overflowMenuItemTemplate"),
        __metadata("design:type", typeof (_e = typeof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) === "function" && _e || Object)
    ], OverflowTableStory.prototype, "overflowMenuItemTemplate", void 0);
    OverflowTableStory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-overflow-table",
            template: "\n\t\t<ng-template #overflowMenuItemTemplate let-data=\"data\">\n\t\t\t<ibm-overflow-menu>\n\t\t\t\t<ibm-overflow-menu-option>\n\t\t\t\t\tFirst Option\n\t\t\t\t</ibm-overflow-menu-option>\n\t\t\t\t<ibm-overflow-menu-option>\n\t\t\t\t\tSecond Option\n\t\t\t\t</ibm-overflow-menu-option>\n\t\t\t\t<ibm-overflow-menu-option>\n\t\t\t\t\tThird Option\n\t\t\t\t</ibm-overflow-menu-option>\n\t\t\t</ibm-overflow-menu>\n\t\t</ng-template>\n\n\t\t<ibm-table\n\t\t\t[model]=\"model\"\n\t\t\t[size]=\"size\"\n\t\t\t[showSelectionColumn]=\"showSelectionColumn\"\n\t\t\t[striped]=\"striped\">\n\t\t</ibm-table>\n\t"
        })
    ], OverflowTableStory);
    return OverflowTableStory;
}());
var PaginationTableStory = /** @class */ (function () {
    function PaginationTableStory() {
        this.model = new ___WEBPACK_IMPORTED_MODULE_4__["TableModel"]();
    }
    Object.defineProperty(PaginationTableStory.prototype, "totalDataLength", {
        get: function () {
            return this.model.totalDataLength;
        },
        set: function (value) {
            this.model.totalDataLength = value;
        },
        enumerable: true,
        configurable: true
    });
    PaginationTableStory.prototype.ngOnInit = function () {
        this.model.data = [[]];
        this.model.header = [
            new ___WEBPACK_IMPORTED_MODULE_4__["TableHeaderItem"]({ data: "Very long title indeed" }),
            new ___WEBPACK_IMPORTED_MODULE_4__["TableHeaderItem"]({
                data: "Very long title indeed",
                style: { "width": "auto" }
            })
        ];
        this.model.pageLength = 10;
        this.model.totalDataLength = 105;
        this.selectPage(1);
    };
    PaginationTableStory.prototype.customSort = function (index) {
        this.sort(this.model, index);
    };
    PaginationTableStory.prototype.sort = function (model, index) {
        if (model.header[index].sorted) {
            // if already sorted flip sorting direction
            model.header[index].ascending = model.header[index].descending;
        }
        model.sort(index);
    };
    PaginationTableStory.prototype.getPage = function (page) {
        var line = function (line) { return ["Item " + line + ":1!", { name: "Item", surname: line + ":2" }]; };
        var fullPage = [];
        for (var i = (page - 1) * this.model.pageLength; i < page * this.model.pageLength && i < this.model.totalDataLength; i++) {
            fullPage.push(line(i + 1));
        }
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(fullPage); }, 150);
        });
    };
    PaginationTableStory.prototype.selectPage = function (page) {
        var _this = this;
        this.getPage(page).then(function (data) {
            // set the data and update page
            _this.model.data = _this.prepareData(data);
            _this.model.currentPage = page;
        });
    };
    PaginationTableStory.prototype.prepareData = function (data) {
        var _this = this;
        // create new data from the service data
        var newData = [];
        data.forEach(function (dataRow) {
            var row = [];
            dataRow.forEach(function (dataElement) {
                row.push(new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({
                    data: dataElement,
                    template: typeof dataElement === "string" ? undefined : _this.paginationTableItemTemplate
                    // your template can handle all the data types so you don't have to conditionally set it
                    // you can also set different templates for different columns based on index
                }));
            });
            newData.push(row);
        });
        return newData;
    };
    var _f, _g, _h;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationTableStory.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PaginationTableStory.prototype, "totalDataLength", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("filter"),
        __metadata("design:type", typeof (_f = typeof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) === "function" && _f || Object)
    ], PaginationTableStory.prototype, "filter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("filterableHeaderTemplate"),
        __metadata("design:type", typeof (_g = typeof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) === "function" && _g || Object)
    ], PaginationTableStory.prototype, "filterableHeaderTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("paginationTableItemTemplate"),
        __metadata("design:type", typeof (_h = typeof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) === "function" && _h || Object)
    ], PaginationTableStory.prototype, "paginationTableItemTemplate", void 0);
    PaginationTableStory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-pagination-table",
            template: "\n\t\t<ng-template #paginationTableItemTemplate let-data=\"data\">\n\t\t\t<a [attr.href]=\"data.link\">{{data.name}} {{data.surname}}</a>\n\t\t</ng-template>\n\t\t<ng-template #filterableHeaderTemplate let-data=\"data\">\n\t\t\t<i><a [attr.href]=\"data.link\">{{data.name}}</a></i>\n\t\t</ng-template>\n\t\t<ng-template #filter let-popover=\"popover\" let-filter=\"data\">\n\t\t\t<ibm-label class=\"first-label\">\n\t\t\t\tValue\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"filter1\" class=\"input-field\">\n\t\t\t\t<button class=\"btn--primary\" (click)=\"filter.data = filter1; popover.doClose()\">Apply</button>\n\t\t\t\t<button class=\"btn--secondary\" (click)=\"popover.doClose()\">Cancel</button>\n\t\t\t</ibm-label>\n\t\t</ng-template>\n\n\t\t<ibm-table [model]=\"model\" (sort)=\"paginationSort($event)\"></ibm-table>\n\t\t<ibm-pagination [model]=\"model\" (selectPage)=\"selectPage($event)\"></ibm-pagination>\n\t"
        })
    ], PaginationTableStory);
    return PaginationTableStory;
}());
var CustomHeaderItem = /** @class */ (function (_super) {
    __extends(CustomHeaderItem, _super);
    function CustomHeaderItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // used for custom sorting
    CustomHeaderItem.prototype.compare = function (one, two) {
        var stringOne = (one.data.name || one.data.surname || one.data).toLowerCase();
        var stringTwo = (two.data.name || two.data.surname || two.data).toLowerCase();
        if (stringOne > stringTwo) {
            return 1;
        }
        else if (stringOne < stringTwo) {
            return -1;
        }
        else {
            return 0;
        }
    };
    return CustomHeaderItem;
}(___WEBPACK_IMPORTED_MODULE_4__["TableHeaderItem"]));
var simpleModel = new ___WEBPACK_IMPORTED_MODULE_4__["TableModel"]();
simpleModel.data = [
    [new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "Name 1" }), new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "qwer" })],
    [new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "Name 3" }), new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "zwer" })],
    [new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "Name 2" }), new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "swer" })],
    [new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "Name 4" }), new ___WEBPACK_IMPORTED_MODULE_4__["TableItem"]({ data: "twer" })]
];
simpleModel.header = [
    new ___WEBPACK_IMPORTED_MODULE_4__["TableHeaderItem"]({ data: "Name" }), new ___WEBPACK_IMPORTED_MODULE_4__["TableHeaderItem"]({ data: "hwer", style: { "width": "auto" } })
];
var emptyModel = new ___WEBPACK_IMPORTED_MODULE_4__["TableModel"]();
emptyModel.header = [
    new ___WEBPACK_IMPORTED_MODULE_4__["TableHeaderItem"]({ data: "Name" }), new ___WEBPACK_IMPORTED_MODULE_4__["TableHeaderItem"]({ data: "hwer", style: { "width": "auto" } })
];
function sort(model, index) {
    if (model.header[index].sorted) {
        // if already sorted flip sorting direction
        model.header[index].ascending = model.header[index].descending;
    }
    model.sort(index);
}
Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_2__["storiesOf"])("Table", module).addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_2__["moduleMetadata"])({
    imports: [
        ___WEBPACK_IMPORTED_MODULE_4__["NFormsModule"],
        ___WEBPACK_IMPORTED_MODULE_4__["TableModule"],
        ___WEBPACK_IMPORTED_MODULE_4__["DialogModule"],
        _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_0__["PaginationModule"]
    ],
    declarations: [
        TableStory,
        DynamicTableStory,
        ExpansionTableStory,
        OverflowTableStory,
        PaginationTableStory
    ]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["withKnobs"])
    .add("default", function () { return ({
    template: "\n\t\t<app-table\n\t\t\t[model]=\"model\"\n\t\t\t[size]=\"size\"\n\t\t\t[showSelectionColumn]=\"showSelectionColumn\"\n\t\t\t[striped]=\"striped\"\n\t\t\t[sortable]=\"sortable\">\n\t\t</app-table>\n\t",
    props: {
        model: simpleModel,
        size: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["selectV2"])("size", { Small: "sm", Normal: "md", Large: "lg" }, "md", "table-size-selection"),
        showSelectionColumn: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["boolean"])("showSelectionColumn", true),
        striped: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["boolean"])("striped", true),
        sortable: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["boolean"])("sortable", true)
    }
}); })
    .add("with no data", function () { return ({
    template: "\n\t\t\t<app-table\n\t\t\t\t[model]=\"model\"\n\t\t\t\t[size]=\"size\"\n\t\t\t\t[showSelectionColumn]=\"showSelectionColumn\"\n\t\t\t\t[striped]=\"striped\">\n\t\t\t\t<tbody><tr><td class=\"no-data\" colspan=\"3\"><div>No data.</div></td></tr></tbody>\n\t\t\t</app-table>\n\t\t",
    styles: ["\n\t\t\t.no-data {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 150px;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t"],
    props: {
        model: emptyModel,
        size: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["selectV2"])("size", { Small: "sm", Normal: "md", Large: "lg" }, "md", "table-size-selection"),
        showSelectionColumn: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["boolean"])("showSelectionColumn", true),
        striped: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["boolean"])("striped", true)
    }
}); })
    .add("with expansion", function () { return ({
    template: "\n\t\t\t<app-expansion-table\n\t\t\t\t[size]=\"size\"\n\t\t\t\t[showSelectionColumn]=\"showSelectionColumn\"\n\t\t\t\t[striped]=\"striped\">\n\t\t\t</app-expansion-table>\n\t\t",
    props: {
        size: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["selectV2"])("size", { Small: "sm", Normal: "md", Large: "lg" }, "md", "table-size-selection"),
        showSelectionColumn: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["boolean"])("showSelectionColumn", true),
        striped: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["boolean"])("striped", true)
    }
}); })
    .add("with dynamic content", function () { return ({
    template: "\n\t\t\t<app-custom-table\n\t\t\t\t[size]=\"size\"\n\t\t\t\t[showSelectionColumn]=\"showSelectionColumn\"\n\t\t\t\t[striped]=\"striped\">\n\t\t\t</app-custom-table>\n\t\t",
    props: {
        size: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["selectV2"])("size", { Small: "sm", Normal: "md", Large: "lg" }, "md", "table-size-selection"),
        showSelectionColumn: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["boolean"])("showSelectionColumn", true),
        striped: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["boolean"])("striped", true)
    }
}); })
    .add("with overflow menu", function () { return ({
    template: "\n\t\t\t<app-overflow-table\n\t\t\t\t[size]=\"size\"\n\t\t\t\t[showSelectionColumn]=\"showSelectionColumn\"\n\t\t\t\t[striped]=\"striped\">\n\t\t\t</app-overflow-table>\n\t\t",
    props: {
        size: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["selectV2"])("size", { Small: "sm", Normal: "md", Large: "lg" }, "md", "table-size-selection"),
        showSelectionColumn: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["boolean"])("showSelectionColumn", true),
        striped: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["boolean"])("striped", true)
    }
}); })
    .add("with pagination", function () { return ({
    template: "\n\t\t\t<app-pagination-table [totalDataLength]=\"totalDataLength\" [model]=\"model\"></app-pagination-table>\n\t\t",
    props: {
        model: simpleModel,
        totalDataLength: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_3__["number"])("totalDataLength", 105)
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/tabs/tab-headers.component.ts":
/*!*******************************************!*\
  !*** ./src/tabs/tab-headers.component.ts ***!
  \*******************************************/
/*! exports provided: TabHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeaders", function() { return TabHeaders; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.component */ "./src/tabs/tab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * The `TabHeaders` component contains the `Tab` items and controls scroll functionality
 * if content has overflow.
 * @export
 * @class TabHeaders
 * @implements {AfterViewInit}
 */
var TabHeaders = /** @class */ (function () {
    function TabHeaders() {
        /**
         * Set to 'true' to have `Tab` items cached and not reloaded on tab switching.
         * Duplicate from `n-tabs` to support standalone headers
         * @memberof Tabs
         */
        this.cacheActive = false;
        /**
         * The index of the first visible tab.
         * @memberof TabHeaders
         */
        this.firstVisibleTab = 0;
        this.tabListVisible = false;
    }
    // keyboard accessibility
    /**
     * Controls the keydown events used for tabbing through the headings.
     * @param {any} event
     * @memberof TabHeaders
     */
    TabHeaders.prototype.keyboardInput = function (event) {
        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            if (this.currentSelectedTab < this.allTabHeaders.length - 1) {
                event.preventDefault();
                this.allTabHeaders[this.currentSelectedTab + 1].focus();
            }
            else {
                event.preventDefault();
                this.allTabHeaders[0].focus();
            }
        }
        if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            if (this.currentSelectedTab > 0) {
                event.preventDefault();
                this.allTabHeaders[this.currentSelectedTab - 1].focus();
            }
            else {
                event.preventDefault();
                this.allTabHeaders[this.allTabHeaders.length - 1].focus();
            }
        }
    };
    TabHeaders.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (!this.tabInput) {
            this.tabs = this.tabQuery;
        }
        else {
            this.tabs = this.tabInput;
        }
        this.tabs.forEach(function (tab) { return tab.cacheActive = _this.cacheActive; });
        this.tabs.changes.subscribe(function () {
            _this.setFirstTab();
            // also update the tab headers list
            _this.allTabHeaders = _this.headerContainer.nativeElement.querySelectorAll("li a");
        });
        this.setFirstTab();
    };
    /**
     * Performs check to see if there is overflow and needs scrolling.
     * @memberof TabHeaders
     */
    TabHeaders.prototype.ngAfterViewInit = function () {
        this.allTabHeaders = this.headerContainer.nativeElement.querySelectorAll("li a");
    };
    /**
     * Controls manually focusing tabs.
     * @param {HTMLElement} ref
     * @param {number} index
     * @memberof TabHeaders
     */
    TabHeaders.prototype.onTabFocus = function (ref, index) {
        this.currentSelectedTab = index;
        // reset scroll left because we're already handling it
        this.headerContainer.nativeElement.parentElement.scrollLeft = 0;
    };
    TabHeaders.prototype.getSelectedTab = function () {
        var selected = this.tabs.find(function (tab) { return tab.active; });
        if (selected) {
            return selected;
        }
        return { headingIsTemplate: false, heading: "" };
    };
    TabHeaders.prototype.showTabList = function () {
        this.tabListVisible = true;
    };
    /**
     * Selects `Tab` 'tab' and moves it into view on the view DOM if it is not already.
     * @param ref
     * @param tab
     * @param tabIndex
     * @memberof TabHeaders
     */
    TabHeaders.prototype.selectTab = function (ref, tab, tabIndex) {
        if (tab.disabled) {
            return;
        }
        // hide the tablist on mobile
        this.tabListVisible = false;
        this.currentSelectedTab = tabIndex;
        this.tabs.forEach(function (_tab) { return _tab.active = false; });
        tab.active = true;
        tab.doSelect();
    };
    /**
     * Determines which `Tab` is initially selected.
     * @protected
     * @memberof Tabs
     */
    TabHeaders.prototype.setFirstTab = function () {
        var _this = this;
        setTimeout(function () {
            var firstTab = _this.tabs.find(function (tab) { return tab.active; });
            if (!firstTab && _this.tabs.first) {
                firstTab = _this.tabs.first;
                firstTab.active = true;
            }
            if (firstTab) {
                firstTab.doSelect();
            }
        });
    };
    var _a, _b;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("tabs"),
        __metadata("design:type", typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]) === "function" && _a || Object)
    ], TabHeaders.prototype, "tabInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabHeaders.prototype, "cacheActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("tabList"),
        __metadata("design:type", Object)
    ], TabHeaders.prototype, "headerContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_tab_component__WEBPACK_IMPORTED_MODULE_1__["Tab"]),
        __metadata("design:type", typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]) === "function" && _b || Object)
    ], TabHeaders.prototype, "tabQuery", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TabHeaders.prototype, "keyboardInput", null);
    TabHeaders = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-tab-headers",
            template: "\n\t\t<nav class=\"bx--tabs\" role=\"navigation\">\n\t\t\t<div class=\"bx--tabs-trigger\" tabindex=\"0\" (click)=\"showTabList()\">\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"bx--tabs-trigger-text\" tabindex=\"-1\">\n\t\t\t\t\t<ng-container *ngIf=\"!getSelectedTab().headingIsTemplate\">\n\t\t\t\t\t\t{{ getSelectedTab().heading }}\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t<ng-template\n\t\t\t\t\t\t*ngIf=\"getSelectedTab().headingIsTemplate\"\n\t\t\t\t\t\t[ngTemplateOutlet]=\"getSelectedTab().heading\">\n\t\t\t\t\t</ng-template>\n\t\t\t\t</a>\n\t\t\t\t<svg width=\"10\" height=\"5\" viewBox=\"0 0 10 5\">\n\t\t\t\t\t<path d=\"M0 0l5 4.998L10 0z\" fill-rule=\"evenodd\"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t\t<ul\n\t\t\t\t#tabList\n\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t'bx--tabs__nav--hidden': !tabListVisible\n\t\t\t\t}\"\n\t\t\t\tclass=\"bx--tabs__nav\"\n\t\t\t\trole=\"tablist\">\n\t\t\t\t<li\n\t\t\t\t\t*ngFor=\"let tab of tabs; let i = index;\"\n\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t'bx--tabs__nav-item--selected': tab.active\n\t\t\t\t\t}\"\n\t\t\t\t\tclass=\"bx--tabs__nav-item\"\n\t\t\t\t\trole=\"presentation\"\n\t\t\t\t\t(click)=\"selectTab(tabref, tab, i)\">\n\t\t\t\t\t<a\n\t\t\t\t\t\t[attr.aria-selected]=\"tab.active\"\n\t\t\t\t\t\t[attr.tabindex]=\"(tab.active?0:-1)\"\n\t\t\t\t\t\t[attr.aria-controls]=\"tab.id\"\n\t\t\t\t\t\t(focus)=\"onTabFocus(tabref, i)\"\n\t\t\t\t\t\tdraggable=\"false\"\n\t\t\t\t\t\tid=\"{{tab.id}}-header\"\n\t\t\t\t\t\tclass=\"bx--tabs__nav-link\"\n\t\t\t\t\t\thref=\"javascript:void(0)\"\n\t\t\t\t\t\trole=\"tab\">\n\t\t\t\t\t\t<ng-container *ngIf=\"!tab.headingIsTemplate\">\n\t\t\t\t\t\t\t{{ tab.heading }}\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t<ng-template\n\t\t\t\t\t\t\t*ngIf=\"tab.headingIsTemplate\"\n\t\t\t\t\t\t\t[ngTemplateOutlet]=\"tab.heading\">\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</nav>\n\t\t<div>\n\t\t\t<ng-content select=\"ibm-tab\"></ng-content>\n\t\t</div>\n\t "
        })
    ], TabHeaders);
    return TabHeaders;
}());



/***/ }),

/***/ "./src/tabs/tab.component.ts":
/*!***********************************!*\
  !*** ./src/tabs/tab.component.ts ***!
  \***********************************/
/*! exports provided: Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var nextId = 0;
/**
* The `Tab` component is a child of the `Tabs` component.
* It represents one `Tab` item and its content within a panel of other `Tab` items.
*
*
* `Tab` takes a string or `TemplateRef` for the header, and any content for the body of the tab.
* Disabled states should be handled by the application (ie. switch to the tab, but display some
* indication as to _why_ the tab is disabled).
*
* When the tab is selected the `select` output will be triggered.
* The `select` output will also be triggered for the active tab when the tabs are loaded or updated.
*
*
* Tab with string header:
*
* ```html
* <ibm-tab heading='tab1'>
* 	tab 1 content
* </ibm-tab>
* ```
*
* Tab with custom header:
*
* ```html
* <ng-template #tabHeading>
* 	<ibm-icon
* 		icon="facebook"
* 		size="sm"
* 		style="margin-right: 7px;">
* 	</ibm-icon>
* 	Hello Tab 1
* </ng-template>
* <ibm-tabs>
* 	<ibm-tab [heading]="tabHeading">
* 		Tab 1 content <ibm-icon icon="alert" size="lg"></ibm-icon>
* 	</ibm-tab>
* 	<ibm-tab heading='Tab2'>
* 		Tab 2 content
* 	</ibm-tab>
* 	<ibm-tab heading='Tab3'>
* 		Tab 3 content
* 	</ibm-tab>
* </ibm-tabs>
* ```
*
*
* @export
* @class Tab
* @implements {OnInit}
*/
var Tab = /** @class */ (function () {
    function Tab() {
        /**
         * Boolean value reflects if the `Tab` is using a custom template for the heading.
         * Default value is false.
         * @memberof Tab
         */
        this.headingIsTemplate = false;
        /**
         * Indicates whether the `Tab` is active/selected.
         * Determines whether it's `TabPanel` is rendered.
         * @memberof Tab
         */
        this.active = false;
        /**
         * Indicates whether or not the `Tab` item is disabled.
         * @memberof Tab
         */
        this.disabled = false;
        // do we need id's?
        /**
         * Sets the id of the `Tab`. Will be uniquely generated if not provided.
         * @memberof Tab
         */
        this.id = "n-tab-" + nextId++;
        /**
         * Set to true to have Tab items cached and not reloaded on tab switching.
         * @memberof Tab
         */
        this.cacheActive = false;
        /**
         * Value 'selected' to be emitted after a new `Tab` is selected.
         * @type {EventEmitter<void>}
         * @memberof Tab
         */
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Used to set the id property on the element.
         * @memberof Tab
         */
        this.attrClass = this.id;
    }
    /**
     * Checks for custom heading template on initialization and updates the value
     * of the boolean 'headingIsTemplate'.
     * @memberof Tab
     */
    Tab.prototype.ngOnInit = function () {
        if (this.heading instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            this.headingIsTemplate = true;
        }
    };
    /**
     * Emit the status of the `Tab`, specifically 'select' and 'selected' properties.
     * @memberof Tab
     */
    Tab.prototype.doSelect = function () {
        this.selected.emit();
    };
    /**
    * Returns value indicating whether this `Tab` should be rendered in a `TabPanel`.
    * @returns boolean
    * @memberof Tab
    */
    Tab.prototype.shouldRender = function () {
        return this.active || this.cacheActive;
    };
    var _a, _b;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Tab.prototype, "heading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Tab.prototype, "active", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Tab.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Tab.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Tab.prototype, "cacheActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", typeof (_b = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) === "function" && _b || Object)
    ], Tab.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("attr.id"),
        __metadata("design:type", Object)
    ], Tab.prototype, "attrClass", void 0);
    Tab = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-tab",
            template: "\n\t\t<div\n\t\t\trole=\"tabpanel\"\n\t\t\t*ngIf=\"shouldRender()\"\n\t\t\t[ngStyle]=\"{'display': active ? null : 'none'}\"\n\t\t\t[attr.aria-labelledby]=\"id + '-header'\">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t "
        })
    ], Tab);
    return Tab;
}());



/***/ }),

/***/ "./src/tabs/tabs.component.ts":
/*!************************************!*\
  !*** ./src/tabs/tabs.component.ts ***!
  \************************************/
/*! exports provided: Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.component */ "./src/tabs/tab.component.ts");
/* harmony import */ var _tab_headers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-headers.component */ "./src/tabs/tab-headers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Build out your application's tabs using this component.
 * This is the parent of the `Tab` and `TabHeader` components.
 *
 * `Tabs` expects a set of `n-tab` elements
 *
 * ```html
 * <ibm-tabs>
 * 	<ibm-tab heading='tab1'>
 * 		tab 1 content
 * 	</ibm-tab>
 * 	<ibm-tab heading='tab1'>
 * 		tab 2 content
 * 	</ibm-tab>
 * 	<!-- ... -->
 * 	<ibm-tab heading='tab1'>
 * 		tab n content
 * 	</ibm-tab>
 * </ibm-tabs>
 * ```
 *
 * @export
 * @class Tabs
 * @implements {AfterContentInit}
 */
var Tabs = /** @class */ (function () {
    function Tabs() {
        /**
         * Takes either the string value 'top' or 'bottom' to place TabHeader
         * relative to the `TabPanel`s.
         * @type string
         * @memberof Tabs
         */
        this.position = "top";
        /**
         * Set to 'true' to have `Tab` items cached and not reloaded on tab switching.
         * @memberof Tabs
         */
        this.cacheActive = false;
    }
    /**
     * After content is initialized update `Tab`s to cache (if turned on) and set the inital
     * selected Tab item.
     * @memberof Tabs
     */
    Tabs.prototype.ngAfterContentInit = function () {
        if (this.tabHeaders) {
            this.tabHeaders.cacheActive = this.cacheActive;
        }
    };
    /**
     * true if the n-tab's are passed directly to the component as children
     */
    Tabs.prototype.hasTabHeaders = function () {
        return this.tabs.length > 0;
    };
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Tabs.prototype, "position", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Tabs.prototype, "cacheActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_tab_component__WEBPACK_IMPORTED_MODULE_1__["Tab"], { descendants: false }),
        __metadata("design:type", typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]) === "function" && _a || Object)
    ], Tabs.prototype, "tabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_tab_headers_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaders"]),
        __metadata("design:type", Object)
    ], Tabs.prototype, "tabHeaders", void 0);
    Tabs = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-tabs",
            template: "\n\t\t\t<ibm-tab-headers\n\t\t\t\t*ngIf=\"hasTabHeaders() && position === 'top'\"\n\t\t\t\t[tabs]=\"tabs\"\n\t\t\t\t[cacheActive]=\"cacheActive\">\n\t\t\t</ibm-tab-headers>\n\t\t\t<ng-content></ng-content>\n\t\t\t<ibm-tab-headers\n\t\t\t\t*ngIf=\"hasTabHeaders() && position === 'bottom'\"\n\t\t\t\t[tabs]=\"tabs\"\n\t\t\t\t[cacheActive]=\"cacheActive\">\n\t\t\t</ibm-tab-headers>\n\t "
        })
    ], Tabs);
    return Tabs;
}());



/***/ }),

/***/ "./src/tabs/tabs.module.ts":
/*!*********************************!*\
  !*** ./src/tabs/tabs.module.ts ***!
  \*********************************/
/*! exports provided: Tabs, Tab, TabHeaders, TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icon_static_icon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../icon/static-icon.module */ "./src/icon/static-icon.module.ts");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.component */ "./src/tabs/tabs.component.ts");
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab.component */ "./src/tabs/tab.component.ts");
/* harmony import */ var _tab_headers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab-headers.component */ "./src/tabs/tab-headers.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _tabs_component__WEBPACK_IMPORTED_MODULE_3__["Tabs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _tab_component__WEBPACK_IMPORTED_MODULE_4__["Tab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabHeaders", function() { return _tab_headers_component__WEBPACK_IMPORTED_MODULE_5__["TabHeaders"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _tabs_component__WEBPACK_IMPORTED_MODULE_3__["Tabs"],
                _tab_component__WEBPACK_IMPORTED_MODULE_4__["Tab"],
                _tab_headers_component__WEBPACK_IMPORTED_MODULE_5__["TabHeaders"]
            ],
            exports: [
                _tabs_component__WEBPACK_IMPORTED_MODULE_3__["Tabs"],
                _tab_component__WEBPACK_IMPORTED_MODULE_4__["Tab"],
                _tab_headers_component__WEBPACK_IMPORTED_MODULE_5__["TabHeaders"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _icon_static_icon_module__WEBPACK_IMPORTED_MODULE_2__["StaticIconModule"]
            ]
        })
    ], TabsModule);
    return TabsModule;
}());



/***/ }),

/***/ "./src/tabs/tabs.stories.ts":
/*!**********************************!*\
  !*** ./src/tabs/tabs.stories.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./src/index.ts");



Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Tabs", module)
    .addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [
        ___WEBPACK_IMPORTED_MODULE_2__["TabsModule"]
    ]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t\t<ibm-tabs>\n\t\t\t\t<ibm-tab heading=\"one\">foo</ibm-tab>\n\t\t\t\t<ibm-tab heading=\"two\">bar</ibm-tab>\n\t\t\t</ibm-tabs>\n\t\t"
}); })
    .add("With template", function () { return ({
    template: "\n\t\t\t<ng-template #customTab>\n\t\t\t\tSomething custom\n\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" style=\"display: inline-block; height: 12px; width: 12px; fill: #3d70b2;\">\n\t\t\t\t\t<path d=\"M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z\"></path>\n\t\t\t\t\t<path d=\"M9 13H7V7h2z\"></path>\n\t\t\t\t\t<path d=\"M7 4a1 1 0 1 1 2 0 1 1 0 1 1-2 0\"></path>\n\t\t\t\t</svg>\n\t\t\t</ng-template>\n\t\t\t<ibm-tabs>\n\t\t\t\t<ibm-tab heading=\"one\">foo</ibm-tab>\n\t\t\t\t<ibm-tab heading=\"two\">bar</ibm-tab>\n\t\t\t\t<ibm-tab [heading]=\"customTab\">foo</ibm-tab>\n\t\t\t</ibm-tabs>\n\t\t"
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/tiles/clickable-tile.component.ts":
/*!***********************************************!*\
  !*** ./src/tiles/clickable-tile.component.ts ***!
  \***********************************************/
/*! exports provided: ClickableTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickableTile", function() { return ClickableTile; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Build application's clickable tiles using this component.
 *
 * ## Basic usage
 *
 * ```html
 * <ibm-clickable-tile>
 * 		tile content
 * </ibm-clickable-tile>
 * ```
 *
 * @export
 * @class ClickableTile
 * @implements {OnInit}
 */
var ClickableTile = /** @class */ (function () {
    function ClickableTile() {
        /**
         * Set to `true` to disable the clickable tile.
         * @type {boolean}
         * @memberof ClickableTile
         */
        this.disabled = false;
        this.clicked = false;
    }
    ClickableTile.prototype.onClick = function (event) {
        this.clicked = !this.clicked;
    };
    ClickableTile.prototype.onKeyDown = function (event) {
        if (event.key === "Enter" || event.key === " ") {
            this.clicked = !this.clicked;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ClickableTile.prototype, "href", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClickableTile.prototype, "disabled", void 0);
    ClickableTile = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-clickable-tile",
            template: "\n\t<a\n\t\tclass=\"bx--link bx--tile bx--tile--clickable\"\n\t\t[ngClass]=\"{\n\t\t\t'bx--tile--is-clicked': clicked\n\t\t}\"\n\t\ttabindex=\"0\"\n\t\t(click)=\"onClick($event)\"\n\t\t(keydown)=\"onKeyDown($event)\"\n\t\t[href]=\"href\"\n\t\t[attr.aria-disabled]=\"disabled\">\n\t\t<ng-content></ng-content>\n\t</a>"
        })
    ], ClickableTile);
    return ClickableTile;
}());



/***/ }),

/***/ "./src/tiles/tile.component.ts":
/*!*************************************!*\
  !*** ./src/tiles/tile.component.ts ***!
  \*************************************/
/*! exports provided: Tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Build application's tiles using this component.
 *
 * ## Basic usage
 *
 * ```html
 * <ibm-tile>
 * 		tile content
 * </ibm-tile>
 * ```
 *
 * @export
 * @class Tile
 * @implements {OnInit}
 */
var Tile = /** @class */ (function () {
    function Tile() {
        this.tileClass = "bx--tile";
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class"),
        __metadata("design:type", Object)
    ], Tile.prototype, "tileClass", void 0);
    Tile = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ibm-tile",
            template: "<ng-content></ng-content>"
        })
    ], Tile);
    return Tile;
}());



/***/ }),

/***/ "./src/tiles/tiles.module.ts":
/*!***********************************!*\
  !*** ./src/tiles/tiles.module.ts ***!
  \***********************************/
/*! exports provided: Tile, ClickableTile, TilesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilesModule", function() { return TilesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile.component */ "./src/tiles/tile.component.ts");
/* harmony import */ var _clickable_tile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clickable-tile.component */ "./src/tiles/clickable-tile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return _tile_component__WEBPACK_IMPORTED_MODULE_2__["Tile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClickableTile", function() { return _clickable_tile_component__WEBPACK_IMPORTED_MODULE_3__["ClickableTile"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TilesModule = /** @class */ (function () {
    function TilesModule() {
    }
    TilesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _tile_component__WEBPACK_IMPORTED_MODULE_2__["Tile"],
                _clickable_tile_component__WEBPACK_IMPORTED_MODULE_3__["ClickableTile"]
            ],
            exports: [
                _tile_component__WEBPACK_IMPORTED_MODULE_2__["Tile"],
                _clickable_tile_component__WEBPACK_IMPORTED_MODULE_3__["ClickableTile"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], TilesModule);
    return TilesModule;
}());



/***/ }),

/***/ "./src/tiles/tiles.stories.ts":
/*!************************************!*\
  !*** ./src/tiles/tiles.stories.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./src/index.ts");



Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Tiles", module)
    .addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [
        ___WEBPACK_IMPORTED_MODULE_2__["TilesModule"]
    ]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t<ibm-tile>\n\t\t\ttile content goes here...\n\t\t</ibm-tile>\n\t\t"
}); })
    .add("Multiple", function () { return ({
    template: "\n\t\t<div style=\"display: flex; flex-flow: row wrap; justify-content: space-around;\">\n\t\t\t<ibm-tile>\n\t\t\t\tTile 1\n\t\t\t</ibm-tile>\n\t\t\t<ibm-tile>\n\t\t\t\tTile 2\n\t\t\t</ibm-tile>\n\t\t\t<ibm-tile>\n\t\t\t\tTile 3\n\t\t\t</ibm-tile>\n\t\t</div>\n\t\t"
}); })
    .add("Clickable", function () { return ({
    template: "\n\t\t<p>Normal</p>\n\t\t<ibm-clickable-tile href=\"#\">\n\t\t\tclickable tile content goes here...\n\t\t</ibm-clickable-tile>\n\t\t<p>Disabled</p>\n\t\t<ibm-clickable-tile href=\"#\" [disabled]=\"true\">\n\t\t\tclickable tile content goes here...\n\t\t</ibm-clickable-tile>\n\t\t"
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/toggle/toggle.component.ts":
/*!****************************************!*\
  !*** ./src/toggle/toggle.component.ts ***!
  \****************************************/
/*! exports provided: ToggleState, ToggleChange, Toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleState", function() { return ToggleState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleChange", function() { return ToggleChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggle", function() { return Toggle; });
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../checkbox/checkbox.component */ "./src/checkbox/checkbox.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Defines the set of states for a toggle component.
 * @export
 * @enum {number}
 */
var ToggleState;
(function (ToggleState) {
    ToggleState[ToggleState["Init"] = 0] = "Init";
    ToggleState[ToggleState["Indeterminate"] = 1] = "Indeterminate";
    ToggleState[ToggleState["Checked"] = 2] = "Checked";
    ToggleState[ToggleState["Unchecked"] = 3] = "Unchecked";
})(ToggleState || (ToggleState = {}));
/**
 * Used to emit changes performed on toggle components.
 * @export
 * @class ToggleChange
 */
var ToggleChange = /** @class */ (function () {
    function ToggleChange() {
    }
    return ToggleChange;
}());

/**
 * ```html
 * <ibm-toggle [(ngModel)]="toggleState">Toggle</ibm-toggle>
 * ```
 * @export
 * @class Toggle
 * @extends {Checkbox}
 * @implements {OnInit}
 */
var Toggle = /** @class */ (function (_super) {
    __extends(Toggle, _super);
    /**
     * Creates an instance of Toggle.
     * @param {ChangeDetectorRef} changeDetectorRef
     * @memberof Toggle
     */
    function Toggle(changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        /**
         * Size of the toggle component.
         * @type {("sm" | "md" | "default")}
         * @memberof Toggle
         */
        _this.size = "md";
        /**
         * The unique id allocated to the `Toggle`.
         * @type {string}
         * @memberof Toggle
         */
        _this.id = "toggle-" + Toggle_1.toggleCount;
        /**
         * Emits event notifying other classes when a change in state occurs on a toggle after a
         * click.
         */
        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        Toggle_1.toggleCount++;
        return _this;
    }
    Toggle_1 = Toggle;
    /**
     * Creates instance of `ToggleChange` used to propagate the change event.
     * @memberof To
     */
    Toggle.prototype.emitChangeEvent = function () {
        var event = new ToggleChange();
        event.source = this;
        event.checked = this.checked;
        this.propagateChange(this.checked);
        this.change.emit(event);
    };
    var Toggle_1, _a;
    /**
     * Variable used for creating unique ids for toggle components.
     * @type {number}
     * @static
     * @memberof Toggle
     */
    Toggle.toggleCount = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], Toggle.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], Toggle.prototype, "change", void 0);
    Toggle = Toggle_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ibm-toggle",
            template: "\n\t\t<input\n\t\t\tclass=\"bx--toggle\"\n\t\t\ttype=\"checkbox\"\n\t\t\t[ngClass]=\"{\n\t\t\t\t'bx--toggle--small': size === 'sm'\n\t\t\t}\"\n\t\t\t[id]=\"id\"\n\t\t\t[value]=\"value\"\n\t\t\t[name]=\"name\"\n\t\t\t[required]=\"required\"\n\t\t\t[checked]=\"checked\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[attr.aria-checked]=\"checked\"\n\t\t\t(change)=\"onChange($event)\"\n\t\t\t(click)=\"onClick($event)\">\n\t\t<label *ngIf=\"size === 'md'\" class=\"bx--toggle__label\" [for]=\"id\">\n\t\t\t<span class=\"bx--toggle__text--left\">Off</span>\n\t\t\t<span class=\"bx--toggle__appearance\"></span>\n\t\t\t<span class=\"bx--toggle__text--right\">On</span>\n\t\t</label>\n\t\t<label *ngIf=\"size === 'sm'\" class=\"bx--toggle__label\" [for]=\"id\">\n\t\t\t<span class=\"bx--toggle__appearance\">\n\t\t\t\t<svg class=\"bx--toggle__check\" width=\"6px\" height=\"5px\" viewBox=\"0 0 6 5\">\n\t\t\t\t\t<path d=\"M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z\"/>\n\t\t\t\t</svg>\n\t\t\t</span>\n\t\t</label>\n\t",
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Toggle_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]) === "function" && _a || Object])
    ], Toggle);
    return Toggle;
}(_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]));



/***/ }),

/***/ "./src/toggle/toggle.module.ts":
/*!*************************************!*\
  !*** ./src/toggle/toggle.module.ts ***!
  \*************************************/
/*! exports provided: Toggle, ToggleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleModule", function() { return ToggleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toggle/toggle.component */ "./src/toggle/toggle.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toggle", function() { return _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_3__["Toggle"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// modules



// imports

// exports

var ToggleModule = /** @class */ (function () {
    function ToggleModule() {
    }
    ToggleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_3__["Toggle"]
            ],
            exports: [
                _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_3__["Toggle"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ]
        })
    ], ToggleModule);
    return ToggleModule;
}());



/***/ }),

/***/ "./src/toggle/toggle.stories.ts":
/*!**************************************!*\
  !*** ./src/toggle/toggle.stories.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/client/index.js");
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs/angular */ "./node_modules/@storybook/addon-knobs/angular.js");
/* harmony import */ var _storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./src/index.ts");



Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("Toggle", module).addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__["moduleMetadata"])({
    imports: [___WEBPACK_IMPORTED_MODULE_2__["ToggleModule"]]
}))
    .addDecorator(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["withKnobs"])
    .add("Basic", function () { return ({
    template: "\n\t\t\t<ibm-toggle [disabled]=\"disabled\" [checked]=\"checked\"></ibm-toggle>\n\t\t",
    props: {
        disabled: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["boolean"])("disabled", false),
        checked: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["boolean"])("checked", false)
    }
}); })
    .add("Small", function () { return ({
    template: "\n\t\t\t<ibm-toggle [disabled]=\"disabled\" [checked]=\"checked\" size=\"sm\"></ibm-toggle>\n\t\t",
    props: {
        disabled: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["boolean"])("disabled", false),
        checked: Object(_storybook_addon_knobs_angular__WEBPACK_IMPORTED_MODULE_1__["boolean"])("checked", false)
    }
}); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/a11y.ts":
/*!***************************!*\
  !*** ./src/utils/a11y.ts ***!
  \***************************/
/*! exports provided: findNextElem, findPrevElem, HcModeChecker, focusNextTree, focusNextElem, focusPrevElem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNextElem", function() { return findNextElem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPrevElem", function() { return findPrevElem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcModeChecker", function() { return HcModeChecker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusNextTree", function() { return focusNextTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusNextElem", function() { return focusNextElem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusPrevElem", function() { return focusPrevElem; });
function findSiblingElem(target, direction) {
    if (target[direction]) {
        if (target[direction].classList.contains("disabled")) {
            return findSiblingElem(target[direction], direction);
        }
        return target[direction];
    }
}
function findNextElem(target) {
    return findSiblingElem(target, "nextElementSibling");
}
function findPrevElem(target) {
    return findSiblingElem(target, "previousElementSibling");
}
// check for Hight contrast mode
function HcModeChecker() {
    var colorTest = "rgb(255, 0, 0)";
    var htmlChecker = document.createElement("div");
    htmlChecker.classList.add("hc-checker");
    document.body.appendChild(htmlChecker);
    if (window.getComputedStyle(htmlChecker).backgroundColor.toString() !== colorTest) {
        document.body.classList.add("a11y");
    }
    document.body.removeChild(htmlChecker);
}
function focusNextTree(elem, rootElem) {
    if (rootElem === void 0) { rootElem = null; }
    if (elem) {
        var focusable = elem.querySelector("[tabindex='0']");
        if (focusable) {
            focusable.focus();
        }
        else {
            focusNextElem(elem, rootElem);
        }
    }
}
function focusNextElem(elem, rootElem) {
    if (rootElem === void 0) { rootElem = null; }
    if (elem) {
        var nextElem = elem.nextElementSibling;
        if (nextElem) {
            var focusableElem = nextElem.querySelector("[tabindex='0']");
            if (focusableElem) {
                focusableElem.focus();
            }
            else {
                focusNextElem(nextElem, rootElem);
            }
        }
        else {
            if (rootElem) {
                var nextRootElem = rootElem.nextElementSibling;
                if (nextRootElem) {
                    focusNextTree(nextRootElem, rootElem);
                }
            }
        }
    }
}
function focusPrevElem(elem, parentRef) {
    if (parentRef === void 0) { parentRef = null; }
    if (elem) {
        var prevElem = elem.previousElementSibling;
        if (prevElem) {
            var focusableElem = prevElem.querySelector("[tabindex='0']");
            if (focusableElem) {
                if (focusableElem.getAttribute("aria-expanded") === "true") {
                    var lastFocElms = prevElem.querySelectorAll("[tabindex='0']");
                    var arrLen = lastFocElms.length - 1;
                    for (var i = arrLen; i >= 0; i--) {
                        if (!!(lastFocElms[i].offsetWidth || lastFocElms[i].offsetHeight ||
                            lastFocElms[i].getClientRects().length)) {
                            focusableElem = lastFocElms[i];
                            break;
                        }
                    }
                }
                focusableElem.focus();
            }
            else {
                focusPrevElem(prevElem, parentRef);
            }
        }
        else {
            if (parentRef) {
                parentRef.querySelector("[tabindex='0']").focus();
            }
        }
    }
}


/***/ }),

/***/ "./src/utils/position.ts":
/*!*******************************!*\
  !*** ./src/utils/position.ts ***!
  \*******************************/
/*! exports provided: position, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/**
 * Utilites to manipulate the position of elements relative to other elements
 *
 */
function calculatePosition(referenceOffset, reference, target, placement) {
    // calculate offsets for a given position
    var referenceRect = reference.getBoundingClientRect();
    switch (placement) {
        case "left":
            return {
                top: referenceOffset.top - Math.round(target.offsetHeight / 2) + Math.round(referenceRect.height / 2),
                left: Math.round(referenceOffset.left - target.offsetWidth)
            };
        case "right":
            return {
                top: referenceOffset.top - Math.round(target.offsetHeight / 2) + Math.round(referenceRect.height / 2),
                left: Math.round(referenceOffset.left + referenceRect.width)
            };
        case "top":
            return {
                top: Math.round(referenceOffset.top - target.offsetHeight),
                left: referenceOffset.left - Math.round(target.offsetWidth / 2) + Math.round(referenceRect.width / 2)
            };
        case "bottom":
            return {
                top: Math.round(referenceOffset.top + referenceRect.height),
                left: referenceOffset.left - Math.round(target.offsetWidth / 2) + Math.round(referenceRect.width / 2)
            };
        case "left-bottom":
            return {
                // 22 == half of popover header height
                top: referenceOffset.top - 22 + Math.round(referenceRect.height / 2),
                left: Math.round(referenceOffset.left - target.offsetWidth)
            };
        case "right-bottom":
            return {
                top: referenceOffset.top - 22 + Math.round(referenceRect.height / 2),
                left: Math.round(referenceOffset.left + referenceRect.width)
            };
        // matter currently doesn't support these, so the popover is broken anyway
        case "top-left":
            return {
                top: 0,
                left: 0
            };
        case "top-right":
            return {
                top: 0,
                left: 0
            };
        case "bottom-left":
            return {
                top: referenceOffset.top + referenceRect.height,
                left: referenceOffset.left + referenceRect.width - target.offsetWidth
            };
        case "bottom-right":
            return {
                top: referenceOffset.top + referenceRect.height,
                left: referenceOffset.left
            };
    }
}
var position;
(function (position_1) {
    function getRelativeOffset(target) {
        // start with the inital element offsets
        var offsets = {
            left: target.offsetLeft,
            top: target.offsetTop
        };
        // get each static (i.e. not absolute or relative) offsetParent and sum the left/right offsets
        while (target.offsetParent && getComputedStyle(target.offsetParent).position === "static") {
            offsets.left += target.offsetLeft;
            offsets.top += target.offsetTop;
            target = target.offsetParent;
        }
        return offsets;
    }
    position_1.getRelativeOffset = getRelativeOffset;
    function getAbsoluteOffset(target) {
        return {
            top: target.getBoundingClientRect().top,
            left: target.getBoundingClientRect().left - document.body.getBoundingClientRect().left
        };
    }
    position_1.getAbsoluteOffset = getAbsoluteOffset;
    // finds the position relative to the `reference` element
    function findRelative(reference, target, placement) {
        var referenceOffset = getRelativeOffset(reference);
        return calculatePosition(referenceOffset, reference, target, placement);
    }
    position_1.findRelative = findRelative;
    function findAbsolute(reference, target, placement) {
        var referenceOffset = getAbsoluteOffset(reference);
        return calculatePosition(referenceOffset, reference, target, placement);
    }
    position_1.findAbsolute = findAbsolute;
    function findPosition(reference, target, placement, offsetFunction) {
        if (offsetFunction === void 0) { offsetFunction = getRelativeOffset; }
        var referenceOffset = offsetFunction(reference);
        return calculatePosition(referenceOffset, reference, target, placement);
    }
    position_1.findPosition = findPosition;
    /**
     * Get the dimensions of the dialog from an AbsolutePosition and a reference element
     */
    function getPlacementBox(target, position) {
        var targetBottom = target.offsetHeight + position.top;
        var targetRight = target.offsetWidth + position.left;
        return {
            top: position.top,
            bottom: targetBottom,
            left: position.left,
            right: targetRight
        };
    }
    position_1.getPlacementBox = getPlacementBox;
    function addOffset(position, top, left) {
        if (top === void 0) { top = 0; }
        if (left === void 0) { left = 0; }
        return Object.assign({}, position, {
            top: position.top + top,
            left: position.left + left
        });
    }
    position_1.addOffset = addOffset;
    function setElement(element, position) {
        element.style.top = position.top + "px";
        element.style.left = position.left + "px";
    }
    position_1.setElement = setElement;
})(position || (position = {}));
/* harmony default export */ __webpack_exports__["default"] = (position);


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/*! exports provided: clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}


/***/ }),

/***/ "./src/utils/window-tools.ts":
/*!***********************************!*\
  !*** ./src/utils/window-tools.ts ***!
  \***********************************/
/*! exports provided: getScrollbarWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return getScrollbarWidth; });
var _scrollbarWidth = -1;
function getScrollbarWidth() {
    // lets not recreate this whole thing every time
    if (_scrollbarWidth >= 0) {
        return _scrollbarWidth;
    }
    // do the calculations the first time
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
    document.body.appendChild(outer);
    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";
    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);
    var widthWithScroll = inner.offsetWidth;
    // remove divs
    outer.parentNode.removeChild(outer);
    _scrollbarWidth = widthNoScroll - widthWithScroll;
    return _scrollbarWidth;
}


/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@storybook/core/dist/server/config/polyfills.js ./node_modules/@storybook/core/dist/server/config/globals.js ./.storybook/config.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/travis/build/IBM/carbon-components-angular/node_modules/@storybook/core/dist/server/config/polyfills.js */"./node_modules/@storybook/core/dist/server/config/polyfills.js");
__webpack_require__(/*! /home/travis/build/IBM/carbon-components-angular/node_modules/@storybook/core/dist/server/config/globals.js */"./node_modules/@storybook/core/dist/server/config/globals.js");
module.exports = __webpack_require__(/*! /home/travis/build/IBM/carbon-components-angular/.storybook/config.js */"./.storybook/config.js");


/***/ })

},[[0,"runtime~iframe","vendors~iframe"]]]);
//# sourceMappingURL=iframe.5d3dd4a3c3e7c69ea7a4.bundle.js.map