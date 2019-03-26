(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icons_block {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n\n}\n.blue > * {\n  fill: blue;\n}\n.red > * {\n  fill: red;\n}\n.orange > * {\n  fill: orange;\n}\n.black > * {\n  fill: black;\n}\n.green > * {\n  fill: green;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsNERBQTREOztBQUU5RDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uc19ibG9jayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI0MHB4LCAxZnIpKTtcblxufVxuLmJsdWUgPiAqIHtcbiAgZmlsbDogYmx1ZTtcbn1cbi5yZWQgPiAqIHtcbiAgZmlsbDogcmVkO1xufVxuLm9yYW5nZSA+ICoge1xuICBmaWxsOiBvcmFuZ2U7XG59XG4uYmxhY2sgPiAqIHtcbiAgZmlsbDogYmxhY2s7XG59XG4uZ3JlZW4gPiAqIHtcbiAgZmlsbDogZ3JlZW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search (search)=\"text = $event\"></app-search>\n\n<div appColoring #coloring=coloring>\n  <div *ngFor=\"let size of uniqSizes\">\n    <h3 *ngIf=\"size===0; else elseBlock\">Size is not specified</h3>\n    <ng-template #elseBlock><h3>Size {{size}}</h3></ng-template>\n\n    <div class=\"icons_block\">\n      <ng-container *ngFor=\"let icon of icons | keyvalue | sizeFilter:size | nameFilter:text\">\n        <app-list [icon]=\"icon\"></app-list>\n      </ng-container>\n    </div>\n\n  </div>\n</div>\n\n<app-buttons (click)=\"coloring.setColor($event.target.value)\"></app-buttons>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_mock_basic_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/mock/basic_icons */ "./src/app/common/mock/basic_icons.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.icons = _common_mock_basic_icons__WEBPACK_IMPORTED_MODULE_2__["BASIC_ICONS"];
        this.text = '';
        this.uniqSizes = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getUniqSizes(this.icons);
    };
    AppComponent.prototype.getUniqSizes = function (icons) {
        for (var item in icons) {
            if (icons.hasOwnProperty(item)) {
                var width = icons[item].split('width="')[1];
                if (width) {
                    this.uniqSizes.push(parseInt(width.split(' ')[0], 10));
                }
                else {
                    this.uniqSizes.push(0);
                }
            }
        }
        return this.uniqSizes = Array.from(new Set(this.uniqSizes)).sort(function (a, b) { return a - b; });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _common_pipe_size_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/pipe/size-filter.pipe */ "./src/app/common/pipe/size-filter.pipe.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _common_pipe_name_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/pipe/name-filter.pipe */ "./src/app/common/pipe/name-filter.pipe.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/buttons/buttons.component.ts");
/* harmony import */ var _common_directive_coloring_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/directive/coloring.directive */ "./src/app/common/directive/coloring.directive.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _common_pipe_size_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["SizeFilterPipe"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                _common_pipe_name_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["NameFilterPipe"],
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_9__["ButtonsComponent"],
                _common_directive_coloring_directive__WEBPACK_IMPORTED_MODULE_10__["ColoringDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buttons/buttons.component.css":
/*!***********************************************!*\
  !*** ./src/app/buttons/buttons.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttons {\n  display: flex;\n}\n\nbutton {\n  padding: 10px;\n  margin: 10px;\n  border: none;\n}\n\n.default { background-color: darkgrey; }\n\n.blue { background-color: blue; }\n\n.green { background-color: green; }\n\n.red { background-color: red; }\n\n.orange { background-color: orange; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV0dG9ucy9idXR0b25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQSxXQUFXLDBCQUEwQixFQUFFOztBQUN2QyxRQUFRLHNCQUFzQixFQUFFOztBQUNoQyxTQUFTLHVCQUF1QixFQUFFOztBQUNsQyxPQUFPLHFCQUFxQixFQUFFOztBQUM5QixVQUFVLHdCQUF3QixFQUFFIiwiZmlsZSI6InNyYy9hcHAvYnV0dG9ucy9idXR0b25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZGVmYXVsdCB7IGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5OyB9XG4uYmx1ZSB7IGJhY2tncm91bmQtY29sb3I6IGJsdWU7IH1cbi5ncmVlbiB7IGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyB9XG4ucmVkIHsgYmFja2dyb3VuZC1jb2xvcjogcmVkOyB9XG4ub3JhbmdlIHsgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/buttons/buttons.component.html":
/*!************************************************!*\
  !*** ./src/app/buttons/buttons.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"buttons\">\n  <button class=\"default\" value=\"black\">Default</button>\n  <button class=\"blue\" value=\"blue\">Blue</button>\n  <button class=\"green\" value=\"green\">Green</button>\n  <button class=\"red\" value=\"red\">Red</button>\n  <button class=\"orange\" value=\"orange\">Orange</button>\n</div>\n"

/***/ }),

/***/ "./src/app/buttons/buttons.component.ts":
/*!**********************************************!*\
  !*** ./src/app/buttons/buttons.component.ts ***!
  \**********************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.css */ "./src/app/buttons/buttons.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/common/directive/coloring.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/common/directive/coloring.directive.ts ***!
  \********************************************************/
/*! exports provided: ColoringDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColoringDirective", function() { return ColoringDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColoringDirective = /** @class */ (function () {
    function ColoringDirective() {
    }
    ColoringDirective.prototype.changeColor = function (event) {
        this.setColor(event);
    };
    ColoringDirective.prototype.setColor = function (value) {
        this.myClass = value;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ColoringDirective.prototype, "myClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ColoringDirective.prototype, "changeColor", null);
    ColoringDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appColoring]',
            exportAs: 'coloring'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColoringDirective);
    return ColoringDirective;
}());



/***/ }),

/***/ "./src/app/common/mock/basic_icons.ts":
/*!********************************************!*\
  !*** ./src/app/common/mock/basic_icons.ts ***!
  \********************************************/
/*! exports provided: BASIC_ICONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASIC_ICONS", function() { return BASIC_ICONS; });
var BASIC_ICONS = {
    "accordion_down": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 8 8\" width=\"8\"><path d=\"M7 2H1l3 3z\"/></svg>\r",
    "accordion_up": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 8 8\" width=\"8\"><path d=\"M7 5H1l3-3z\"/></svg>\r",
    "add-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M16 6.9H9v-7H7v7H0v2h7v7h2v-7h7z\"/></svg>",
    "add-small-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M13 6.9H9v-4H7v4H3v2h4v4h2v-4h4z\"/></svg>",
    "arrow_down": "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 9.7H3l5-5.1z\"/></svg>",
    "arrow_left": "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.7 3v10L4.6 8z\"/></svg>",
    "arrow_right": "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 13V3l5.1 5z\"/></svg>",
    "arrow_up": "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3 6.3h10l-5 5.1z\"/></svg>",
    "arrow-down-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M14.3 9.7l-1.2-1.2L9 12.7V0H7v12.7L2.9 8.5 1.7 9.7 8 16z\"/></svg>",
    "bell-24": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M12 3c3.3 0 6 2.7 6 6v5l1.6 3.9H4.5L6 14.1V9c0-3.3 2.7-6 6-6zm0 18c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z\" class=\"st0\"/></svg>",
    "call_dialpad": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2M6 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2\"/></svg>",
    "call_end": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"-1 -7 24 24\"><path d=\"M21.368 4.081A15.152 15.152 0 0 0 11 0 15.115 15.115 0 0 0 .633 4.081L0 4.706 3.338 8 6.94 5.538 6.93 2.38A13.473 13.473 0 0 1 11 1.747c1.42 0 2.787.217 4.07.633l-.008 3.158L18.664 8 22 4.706c0-.01-.476-.47-.632-.625\"/></svg>",
    "call_flip": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path class=\"st0\" d=\"M4 8v8h5v2H3.4c-.8 0-1.4-.6-1.4-1.4V7.4C2 6.6 2.6 6 3.4 6H6V4l3 3-3 3V8H4zm11.1-2h5.4c.7 0 1.5.7 1.5 1.5v9c0 .8-.7 1.5-1.6 1.5H18v2l-2.9-3 2.9-3v2h2V8h-5l.1-2zM11 19V5h2v14h-2z\"/></svg>",
    "call_mute": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path class=\"st0\" d=\"M15 12c0 1.8-1.3 3-3 3s-3-1.2-3-3V5c0-1.8 1.3-3 3-3s3 1.2 3 3v7zm2 0h2c0 3.5-2.6 6.4-6 6.9V22h-2v-3.1c-3.4-.5-6-3.4-6-6.9h2c0 2.8 2.2 5 5 5s5-2.2 5-5z\"/></svg>",
    "call_park": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M17 9.2c0 1.5-.5 2.6-1.4 3.4-.9.8-2.3 1.2-4 1.2h-1.4V19H8V5h3.9c1.7 0 3 .4 3.8 1.1S17 7.8 17 9.2zm-6.8 2.6h1.2c1.1 0 2-.2 2.5-.6s.8-1 .8-1.9c0-.8-.2-1.4-.7-1.8-.5-.4-1.2-.6-2.2-.6h-1.5v4.9z\"/></svg>",
    "call_pause": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M7 4h3v16H7V4zm7 0h3v16h-3V4z\"/></svg>",
    "call_pause_tab_button": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M5 3h2v10H5zm4 0h2v10H9z\"/></svg>",
    "call_transfer": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path class=\"st0\" d=\"M5.9 4.7l.4-.4 2.4 2.4L7 9.1H4.7c-.3.9-.4 1.9-.4 2.9s.2 2 .5 2.9h2.3l1.8 2.5-2.4 2.4-.4-.4c-2-2-3.1-4.6-3.1-7.4 0-2.8 1.1-5.4 2.9-7.3zm4.1 10V9.6c.1 0 3 2.5 3 2.5l-3 2.6zm8.1-10l.4-.4 2.4 2.4-1.8 2.5h-2.3c-.2.8-.4 1.8-.4 2.8 0 1 .2 2 .5 2.9h2.3l1.8 2.5-2.4 2.4-.4-.4c-1.8-1.9-2.9-4.5-2.9-7.3-.1-2.9 1-5.5 2.8-7.4z\"/></svg>",
    "call_transfer_stop": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M11 11.3l1.8-1.9.7.7-1.8 1.9 1.8 1.9-.7.7-1.8-1.9-1.8 1.9-.7-.7 1.8-1.9-1.8-1.9.7-.7 1.8 1.9zM5.9 4.7l.4-.4 2.4 2.4L7 9.1H4.7c-.3.9-.4 1.9-.4 2.9s.2 2 .5 2.9h2.3l1.8 2.5-2.4 2.4-.4-.4c-2-2-3.1-4.6-3.1-7.4 0-2.8 1.1-5.4 2.9-7.3zm12.1 0l.4-.4 2.4 2.4L19 9.2h-2.3c-.2.8-.4 1.8-.4 2.8 0 1 .2 2 .5 2.9h2.3l1.8 2.5-2.4 2.4-.4-.4c-1.8-1.9-2.9-4.5-2.9-7.3-.1-2.9 1-5.5 2.8-7.4z\"/></svg>",
    "call_transfer_tab_button": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M3.3 2.3C1.5 4.2 1 6.2 1 8c0 1.8.5 3.8 2.2 5.7.1.1.2.2.3.2.2 0 1.4-.3 1.6-.4.2-.1.3-.3.2-.5l-1.2-2c-.1-.2-.3-.3-.5-.2H3c-.2-.1-.8-.8-.8-2.8 0-2 .7-2.7.8-2.8l.8.1c.2 0 .4-.1.5-.3l1.2-2c.1-.2 0-.4-.2-.5-.3-.1-1.5-.4-1.7-.4-.1 0-.2.1-.3.2zm9.4 0C11 4.2 10.5 6.2 10.5 8c0 1.8.5 3.8 2.2 5.7.1.1.2.2.3.2.2 0 1.4-.3 1.6-.4.2-.1.3-.3.2-.5l-1.2-2c-.1-.2-.3-.3-.5-.2l-.8.1c-.1-.1-.8-.8-.8-2.8 0-2 .7-2.7.8-2.8l.8.1c.2 0 .4-.1.5-.2l1.2-2c.1-.2 0-.4-.2-.5-.2-.1-1.5-.4-1.6-.4 0-.2-.2-.1-.3 0z\"/><path d=\"M5 7h3v1H5z\"/><path d=\"M7 6l2 1.5L7 9z\"/></svg>",
    "call_unhold": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M8 6l9 5.98L8 18z\"/></svg>",
    "call_unmute": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M15 5v6.7l-6-6V5c0-1.8 1.3-3 3-3s3 1.2 3 3zm4 7c0 1.1-.3 2.1-.7 3l-1.6-1.6c.1-.5.2-1 .2-1.5H19zm2.4 8.9L20 22.3 15.6 18c-.8.5-1.7.8-2.7 1v3h-2v-3.1c-3.4-.5-6-3.4-6-6.9h2c0 2.8 2.2 5 5 5 .8 0 1.5-.2 2.1-.5l-1.6-1.6c0 .1-.2.1-.4.1-1.7 0-3-1.2-3-3v-.6L2.2 4.5l1.4-1.4 17.8 17.8z\"/></svg>",
    "call_voicemail": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M16.9 8c-2.3 0-4.1 1.8-4.1 4 0 .7.2 1.4.6 2h-2.7c.4-.6.6-1.3.6-2 0-2.2-1.8-4-4.1-4C4.8 8 3 9.8 3 12s1.8 4 4.1 4h9.8c2.3 0 4.1-1.8 4.1-4s-1.8-4-4.1-4zM5 12c0-1.1.9-2 2.1-2 1.2 0 2.1.9 2.1 2s-.9 2-2.1 2C5.9 14 5 13.1 5 12zm11.9 2c-1.2 0-2.1-.9-2.1-2s.9-2 2.1-2c1.2 0 2.1.9 2.1 2s-.9 2-2.1 2z\"/></svg>",
    "cancel-24": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M13.4 6H9.9V4L5 7l4.9 3V8h3.5c2.5 0 4.6 2 4.6 4.5S15.8 17 13.4 17H5.9v2h7.4c3.6 0 6.5-2.9 6.5-6.5S16.9 6 13.4 6z\"/></svg>",
    "chat_add_users": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path class=\"st0\" d=\"M19 9V6h-2v3h-3v2h3v3h2v-3h3V9z\"/><circle class=\"st0\" cx=\"9\" cy=\"9\" r=\"3\"/><path class=\"st0\" d=\"M9.2 13c-3.2 0-5.9 2.1-6.8 5H16c-.8-2.9-3.6-5-6.8-5z\"/></svg>",
    "chat_download-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M9 .9v7.7l2.8-2.7 1.1 1.2L8 11.9 3.1 7.1l1.2-1.2L7 8.6V.9zm4 11v1H3v-1H1v3h14v-3z\"/></svg>",
    "chat_meetings": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M5 10.9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c.1 1.1.9 2 2 2M20 18h4c0-2.8-2.2-5-4.9-5h-1.2c1.3 1.3 2.1 3 2.1 5M6.1 13h-.9C2.3 13 0 15.2 0 18h3.9c0-2 .9-3.8 2.2-5M18 17.9c0-1.9-1.2-3.6-2.8-4.4-.7-.3-1.5-.6-2.3-.6h-1.7c-.7 0-1.4.2-2.1.4-1.8.9-3.1 2.6-3.1 4.6h12M12 11c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2M19 11c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2\"/></svg>\r",
    "chat_plus": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11 11V6h2v5h5v2h-5v5h-2v-5H6v-2h5z\"/></svg>\r",
    "chat-24": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M3 4h18v14H7l-4 4V4zm4 4v2h10V8H7zm0 4v2h10v-2H7z\"/></svg>\r",
    "checkmark-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M7.5 12L3 7.4l1.2-1.2 3.2 3.3L12.7 3 14 4.1z\"/></svg>",
    "checkmark-24": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M10.7 17.7L5 11.9l1.5-1.5 4.1 4.1 6.8-8.2L19 7.7z\"/></svg>",
    "check_mark_16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M6.5 13L1.2 7.5 3 5.7l3.4 3.6 6.5-7.5 1.9 1.6z\"/></svg>",
    "chevron-down-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M8 11l5-4.7L11.6 5 8 8.4 4.4 5 3 6.3z\"/></svg>",
    "chevron-up-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M8 5L3 9.7 4.4 11 8 7.6l3.6 3.4L13 9.7z\"/></svg>",
    "contact_description": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M0 15.25h10v-10H0z\"/><path d=\"M12 0L2.938 4.25H11v7.625l4.969-2.312z\"/></svg>\r",
    "contact_email": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M0 3v1l8 5 8-5V3z\"/><path d=\"M8 11L0 6v7h16V6z\"/></svg>",
    "contact_icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M2 12.967V15h12v-2.033C14 10.792 10.045 10 8 10s-6 .792-6 2.967zM11 5a3 3 0 1 0-6 0 3 3 0 0 0 6 0z\"/></svg>",
    "contact_job": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M11 4.5v-3H5v3H1v3h14v-3h-4zm-1 0H6v-2h4v2zm0 5H6v-1H1v6h14v-6h-5z\"/></svg>",
    "contact_link": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M5 8.963h6V7H5z\"/><path d=\"M7.001 6H4.5A1.5 1.5 0 0 0 3 7.5v1A1.5 1.5 0 0 0 4.5 10h2.501v2H4.5A3.5 3.5 0 0 1 1 8.5v-1A3.5 3.5 0 0 1 4.5 4h2.501v2zM9 6h2.478a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H9v2h2.478a3.5 3.5 0 0 0 3.5-3.5v-1a3.5 3.5 0 0 0-3.5-3.5H9v2z\"/></svg>",
    "contact_location": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M8 0c3.5 0 5 3 5 6s-3.5 8-5 10C6.5 14 3 9 3 6s2-6 5-6zm0 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z\"/></svg>\r",
    "device_android": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\"><path fill=\"#0098DB\" d=\"M5 9c-.6 0-1 .5-1 1.1v4.8c0 .6.4 1.1 1 1.1.5 0 1-.5 1-1.1v-4.8C6 9.5 5.6 9 5 9M7 16c0 .5.4 1 1 1h1v2.9c0 .6.4 1.1 1 1.1s.9-.5.9-1.1V17h2v2.9c0 .6.4 1.1 1 1.1s.9-.5.9-1.1V17h1c.5 0 1-.4 1-1V9H7v7zM14 6c0-.3.2-.5.5-.5s.5.2.5.5-.2.5-.5.5-.5-.2-.5-.5zM9 6c0-.3.2-.5.5-.5s.5.2.5.5-.2.5-.5.5S9 6.3 9 6zm6.3-3.3c.1-.1 0-.2-.1-.2-.1-.1-.2 0-.2.1l-.9 1.3c-.7-.3-1.4-.4-2.1-.4-.8 0-1.5.1-2.1.4L9 2.5c-.1-.1-.2-.1-.3-.1 0 .1-.1.2 0 .3L9.5 4C8 4.7 7 6.1 7 7.7V8h10v-.3c0-1.6-1-3-2.5-3.7l.8-1.3zM19 9c-.6 0-1 .5-1 1.1v4.8c0 .6.4 1.1 1 1.1.5 0 1-.5 1-1.1v-4.8c0-.6-.4-1.1-1-1.1\"/></svg>\r",
    "device_ios": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\"><path fill=\"#0098DB\" d=\"M14 4.8C14.6 4 15.1 3 15 2c-1 0-2.2.6-2.9 1.3C11.4 4 10.9 5 11 6c1.1.1 2.3-.5 3-1.2M16.5 12.3c0-2.3 1.9-3.5 2-3.5C17.4 7.3 15.7 7 15.1 7c-1.4-.1-2.8.8-3.5.8-.7 0-1.9-.8-3-.8-1.6.1-3 1-3.8 2.4-1.6 2.8-.4 7 1.2 9.3.7 1.1 1.6 2.3 2.8 2.3 1.2 0 1.6-.8 3-.8s1.8.8 3 .7c1.3 0 2.1-1.1 2.8-2.3.9-1.3 1.3-2.6 1.3-2.6.1.1-2.3-.9-2.4-3.7\"/></svg>\r",
    "device_windows": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\"><path fill=\"#0098DB\" d=\"M20 4l-8 1.2V11h8V4zM4 6.2V11h6V5.4l-6 .8zm8 6.8v5.9l8 1.1v-7h-8zm-8 0v4.9l6 .8V13H4z\"/></svg>\r",
    "edit-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M11.7 2L14 4.3 5.3 13 3 10.7 11.7 2zm-9.3 9.5l2.1 2.1L2 14l.4-2.5z\"/></svg>",
    "emoji": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M12 19c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7m0-16c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9\"/><path d=\"M12 17c2.1 0 3.8-1.3 4.5-3h-9c.7 1.7 2.4 3 4.5 3m-2.5-6c.8 0 1.5-.7 1.5-1.5S10.3 8 9.5 8 8 8.7 8 9.5 8.7 11 9.5 11m5 0c.8 0 1.5-.7 1.5-1.5S15.3 8 14.5 8 13 8.7 13 9.5s.7 1.5 1.5 1.5\"/></svg>",
    "export_logs_24": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M15.1 2H6c-1.1-.1-1.9.8-2 1.8v16.3c0 1.1.9 1.9 2 1.9h12c1.1.1 1.9-.8 2-1.8V6.5L15.1 2zm2.8 18h-12V3.9h8.3v4H18L17.9 20z\"/><path d=\"M13 8h-2v8h2V8z\"/><path d=\"M15.5 14h-7l3.5 3.5 3.5-3.5z\"/></svg>",
    "favorite": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\"><path d=\"M8 12.6l-3.2 1.7c-.5.3-1.1.1-1.4-.4-.1-.2-.1-.4-.1-.6l.6-3.6-2.6-2.6c-.4-.4-.4-1 0-1.4.2-.2.4-.3.6-.3l3.6-.5 1.6-3.3c.2-.5.8-.7 1.3-.5.2.1.4.3.5.5l1.6 3.3 3.6.5c.5.1.9.6.8 1.1 0 .2-.1.4-.3.6L12 9.7l.6 3.6c.1.5-.3 1.1-.8 1.2-.2 0-.4 0-.6-.1L8 12.6z\"/></svg>\r",
    "file-small": "<svg id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\"><path class=\"st0\" d=\"M11 3v8.5c0 1.4-1.1 2.5-2.5 2.5S6 12.9 6 11.5V2h3v8.4c0 .4-.2.6-.5.6-.4 0-.5-.2-.5-.6V3H7v7.4c0 .9.6 1.6 1.5 1.6s1.5-.7 1.5-1.5V1H5v10.5C5 13.4 6.5 15 8.5 15s3.5-1.6 3.5-3.5V3h-1z\"/></svg>\r",
    "fmfm_24": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M22.7 6.3C19.1 3 15.4 2 12.1 2c-3.4 0-7.2.9-10.8 4.1-.2.2-.3.4-.3.7 0 .3.5 2.6.7 3.1.2.4.6.5.9.3L6.4 8c.4-.2.6-.6.5-1l-.2-1.4c.2-.3 1.6-1.5 5.3-1.5 3.7 0 5 1.3 5.2 1.5L17 7.1c-.1.4.1.8.5 1l3.8 2.2c.3.2.8.1 1-.3.2-.4.7-2.7.7-3.1 0-.2-.1-.4-.3-.6zM9 11h10v2H9zm0 4h10v2H9zm0 4h10v2H9zm-4-8h2v2H5zm0 4h2v2H5zm0 4h2v2H5z\"/></svg>",
    "headset_24": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M20 15.1l-4.7-.5-2.2 2.2c-2.5-1.3-4.6-3.3-5.9-5.9l2.2-2.2L8.9 4H4c-.5 9 7 16.5 16 16v-4.9z\"/></svg>",
    "incoming-call-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M1.3 3.7v.2C1.8 6.6 3.5 9 3.9 9.7c0 0 2.1 2.8 4.6 4.2.1.1.1.1.2.1.4 0 1.7.1 3-.8.3-.2.3-.5.1-.8L10 9.8c-.1-.2-.4-.3-.7-.1-.2.1-.6.3-.9.6-.2.1-.5.1-.7 0-.3-.3-1.1-.9-2-2.1-.8-1.1-1.1-2-1.3-2.5 0-.3.1-.5.4-.7.3-.2.6-.3.8-.5.3-.1.3-.5.2-.7L4 1.3c-.1-.3-.5-.3-.7-.2-1.5.9-1.9 2.1-2 2.6zM16 5h-4V2L8 6l4 4V7h4z\"/></svg>",
    "info_16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm-.94-8.9c0-.297.08-.522.24-.674.158-.151.39-.227.693-.227.294 0 .52.077.681.233.16.155.241.378.241.667 0 .28-.081.5-.243.66-.163.16-.389.241-.679.241-.296 0-.526-.079-.688-.236-.163-.157-.244-.379-.244-.665zm.17 7.187V7h1.444v5.287H7.23z\"/></svg>\r",
    "key-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" baseProfile=\"tiny\" version=\"1.2\"><path d=\"M8.9 7c-.5-1.7-2-3-3.9-3-2.2 0-4 1.8-4 4s1.8 4 4 4c1.9 0 3.4-1.3 3.9-3H12v3h2V9h1V7H8.9zM5 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"/></svg>",
    "link-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\"><defs><path id=\"a\" d=\"M0 4h16v8H0z\"/></defs><clipPath id=\"b\"><use overflow=\"visible\" xlink:href=\"#a\"/></clipPath><g clip-path=\"url(#b)\"><defs><path id=\"c\" d=\"M-8-5h32v20H-8z\"/></defs><clipPath id=\"d\"><use overflow=\"visible\" xlink:href=\"#c\"/></clipPath><g clip-path=\"url(#d)\"><defs><path id=\"e\" d=\"M5 7h5.9v2H5z\"/></defs><clipPath id=\"f\"><use overflow=\"visible\" xlink:href=\"#e\"/></clipPath><g clip-path=\"url(#f)\"><defs><path id=\"g\" d=\"M0 4h16v9H0z\"/></defs><clipPath id=\"h\"><use overflow=\"visible\" xlink:href=\"#g\"/></clipPath><path d=\"M0 2h15.9v12H0z\" clip-path=\"url(#h)\"/></g></g></g><path d=\"M11 3H9v2h2c1.7 0 3 1.3 3 3s-1.3 3-3 3H9v2h2c2.8 0 5-2.2 5-5s-2.2-5-5-5zm-4 8H5c-1.7 0-3-1.3-3-3s1.3-3 3-3h2V3H5C2.2 3 0 5.2 0 8s2.2 5 5 5h2v-2z\" class=\"st4\"/></svg>",
    "logout_24": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M14.1 16v3.9c0 .1-.1.1-.1.1H4.1c-.1 0-.1-.1-.1-.1V4.1c-.1-.1 0-.2.1-.2H14c.1 0 .1.1.1.1v4H16V4.1c0-1.2-.9-2.1-2.1-2.1H4.1C2.9 2 2 2.9 2 4.1V20c0 1.1.9 2 2.1 2H14c1.1 0 2.1-.9 2.1-2.1V16h-2z\"/><path d=\"M18.6 8.1a1 1 0 0 0-1.6.8V11H8v2h9v2.1c0 .8.9 1.3 1.6.8L24 12l-5.4-3.9z\"/></svg>",
    "meeting_help": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M8 15c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm0-1c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6zm-1.1-2.9c0-.3.1-.5.2-.7.2-.2.4-.2.7-.2.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.7-.2.1-.4.2-.7.2-.3 0-.5-.1-.7-.2s-.2-.4-.2-.7zM7 9.3v-.4c0-.3.1-.6.2-.9l.8-.8c.4-.3.6-.5.7-.6.2-.2.3-.4.3-.6 0-.2-.1-.4-.3-.5-.2-.1-.4-.2-.7-.2-.5 0-1.1.2-1.8.5l-.6-1.1c.8-.5 1.6-.7 2.5-.7.7 0 1.3.2 1.7.5s.6.8.6 1.4c0 .4-.1.7-.3 1-.2.3-.5.6-1 1-.2.2-.4.4-.5.6-.1.1-.2.3-.2.5v.3H7z\"/></svg>",
    "meeting_link": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M5 9h6V7H5z\"/><path class=\"st0\" d=\"M7 6H4.5C3.7 6 3 6.7 3 7.5v1c0 .8.7 1.5 1.5 1.5H7v2H4.5C2.6 12 1 10.4 1 8.5v-1C1 5.6 2.6 4 4.5 4H7v2zM9 6h2.5c.8 0 1.5.7 1.5 1.5v1c0 .8-.7 1.5-1.5 1.5H9v2h2.5c1.9 0 3.5-1.6 3.5-3.5v-1C15 5.6 13.4 4 11.5 4H9v2z\"/></svg>",
    "meeting_phone": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M10.5 9.9l3.5.4V14C7.2 14.4 1.6 8.8 2 2h3.7l.4 3.5-1.7 1.7c1 1.9 2.5 3.4 4.4 4.4l1.7-1.7z\"/></svg>",
    "meeting_pin": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M12 9H8.9c-.4 1.7-2 3-3.9 3-2.2 0-4-1.8-4-4s1.8-4 4-4c1.9 0 3.4 1.3 3.9 3H15v2h-1v3h-2V9zm-7 1c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z\"/></svg>",
    "meeting_return": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M6 3h3c2.8 0 5 2.2 5 5s-2.2 5-5 5H4.1v-2H9c1.7 0 3-1.3 3-3s-1.3-3-3-3H6v2L2 4l4-3v2z\"/></svg>",
    "meeting_started": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\"><path d=\"M3.5 7C2.7 7 2 6.3 2 5.5S2.7 4 3.5 4 5 4.7 5 5.5 4.3 7 3.5 7zm9.9 5c0-1.6-.6-3-1.4-4h.8c1.8 0 3.3 1.8 3.3 4h-2.7zM4.1 8c-.9 1-1.4 2.4-1.4 4H0c0-2.2 1.5-4 3.4-4h.7zm7.9 4H4c0-1.6.8-3 2-3.6.5-.3.9-.4 1.4-.4h1.1c.6 0 1.1.2 1.5.4 1.2.7 2 2 2 3.6zM8 7c-.8 0-1.5-.7-1.5-1.5S7.2 4 8 4s1.5.7 1.5 1.5S8.8 7 8 7zm4.5 0c-.8 0-1.5-.7-1.5-1.5S11.7 4 12.5 4c.9 0 1.5.7 1.5 1.5S13.4 7 12.5 7z\"/></svg>\r",
    "nav_chats": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M3 4h18v14H7l-4 4V4zm4 4v2h10V8H7zm0 4v2h10v-2H7z\"/></svg>\r",
    "nav_dial": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2M6 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2\"/></svg>\r",
    "nav_files": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M3 3h6l3 3h9v2H3V3zm0 17V10h18v10H3z\"/></svg>",
    "nav_history": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M15.6 15.3L11 13V6h2v6l3.5 1.7-.9 1.6zM12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z\"/></svg>",
    "nav_meetings": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M5 10.9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c.1 1.1.9 2 2 2M20 18h4c0-2.8-2.2-5-4.9-5h-1.2c1.3 1.3 2.1 3 2.1 5M6.1 13h-.9C2.3 13 0 15.2 0 18h3.9c0-2 .9-3.8 2.2-5M18 17.9c0-1.9-1.2-3.6-2.8-4.4-.7-.3-1.5-.6-2.3-.6h-1.7c-.7 0-1.4.2-2.1.4-1.8.9-3.1 2.6-3.1 4.6h12M12 11c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2M19 11c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2\"/></svg>\r",
    "nav_receptionist": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M1 7l3-3 3.7 3.6-4 4 7.7 7.7 4-4L19 19l-3 3h-6l-9-9V7zm11-5h5v5l-1.6-1.7L11.6 9 10 7.4l3.7-3.7L12 2zm8 11h-5V8l1.6 1.7L20.4 6 22 7.6l-3.7 3.7L20 13z\" /></svg>\r",
    "outgoing-call-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M1.3 3.7v.2C1.8 6.6 3.5 9 3.9 9.7c0 0 2.1 2.8 4.6 4.2.1.1.1.1.2.1.4 0 1.7.1 3-.8.3-.2.3-.5.1-.8L10 9.8c-.1-.2-.4-.3-.7-.1-.2.1-.6.3-.9.6-.2.1-.5.1-.7 0-.3-.3-1.1-.9-2-2.1-.8-1.1-1.1-2-1.3-2.5 0-.3.1-.5.4-.7.3-.2.6-.3.8-.5.3-.1.3-.5.2-.7L4 1.3c-.1-.3-.5-.3-.7-.2-1.5.9-1.9 2.1-2 2.6z\"/><path d=\"M16 6.1L12 2v3H8v2h4v3z\"/></svg>",
    "people_24": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M13.591 12.88c.382-.12 1.14-.12 1.349-.12 1.685 0 5.06.874 5.06 2.614v1.866h-4.48v-1.866c0-1.105-.964-2.075-1.929-2.493zm-4.471-.12c1.704 0 5.12.874 5.12 2.614v1.866H4v-1.866c0-1.74 3.416-2.614 5.12-2.614zm.04-1.28a2.237 2.237 0 0 1-2.24-2.24C6.92 8 7.92 7 9.16 7c1.24 0 2.232 1 2.232 2.24a2.23 2.23 0 0 1-2.232 2.24zm7.953-2.24a2.237 2.237 0 0 1-4.472 0 2.237 2.237 0 1 1 4.472 0z\"/></svg>\r",
    "phone-small-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"-2 0 16 16\"><path d=\"M1 3.6v.2C1.4 6.6 3.2 9 3.6 9.7c0 0 2.1 2.8 4.6 4.3h.2c.4 0 1.7.1 3-.8.3-.2.3-.5.2-.8L9.8 9.8c-.2-.2-.5-.3-.8-.1-.2.1-.6.3-.9.6-.2.1-.5.1-.7 0-.3-.3-1.1-.9-2-2.1-.8-1.1-1.1-2-1.3-2.5 0-.3.1-.6.4-.7.3-.2.6-.3.8-.5.3-.1.3-.5.2-.8L3.7 1.2C3.6 1 3.2.9 3 1.1c-1.5.8-1.9 2.1-2 2.5z\"/></svg>",
    "primary_number": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M12.4 3.9l.6.5L6 13 2 7.3l.5-.6L6 10.1z\"/></svg>",
    "question-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" baseProfile=\"tiny\" version=\"1.2\"><path d=\"M8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6m0-2C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z\"/><path d=\"M7 9.3v-.4c0-.3.1-.6.2-.9.1-.2.4-.5.8-.8.4-.2.6-.4.7-.6.2-.2.2-.4.2-.6 0-.2-.1-.4-.3-.5s-.3-.2-.7-.2c-.5 0-1.1.2-1.8.5l-.6-1.1c.8-.5 1.7-.7 2.6-.7.7 0 1.3.2 1.8.5.4.4.7.8.7 1.4 0 .4-.1.7-.3 1-.2.3-.5.6-1 1-.5.3-.7.5-.8.6-.1.1-.1.3-.1.5v.3H7zm-.2 1.9c0-.3.1-.5.2-.7.2-.2.4-.2.7-.2.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.7-.1.1-.4.2-.7.2-.3 0-.5-.1-.7-.2-.1-.2-.2-.4-.2-.7z\"/></svg>",
    "read-legal": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path fill=\"#0098DB\" d=\"M5 5h14v14l-7-4.026L5 19z\" fill-rule=\"evenodd\"/></svg>",
    "remove-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M12.9 1.6L8 6.6l-4.9-5-1.5 1.5 5 4.9-5 4.9 1.5 1.5 4.9-5 4.9 5 1.5-1.5-5-4.9 5-4.9z\"/></svg>",
    "remove-8": "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"8\" height=\"8\"\r     viewBox=\"0 0 8 8\">\r\n    <path id=\"a\" d=\"M0 1l1-1 2 2 2-2 1 1-2 2 2 2-1 1-2-2-2 2-1-1 2-2z\" transform=\"translate(1 1)\"/>\r\n</svg>\r\n",
    "remove-small-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"7 2 16 16\"><path d=\"M19.7 6.5l-1.2-1.2L15 8.8l-3.5-3.5-1.2 1.2 3.5 3.5-3.5 3.5 1.2 1.2 3.5-3.5 3.5 3.5 1.2-1.2-3.5-3.5z\"/></svg>",
    "search-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M15.6 13.9l-3.7-3.7c.6-.9 1-2.1 1-3.3C12.9 3.6 10.2 1 7 1 3.7.9 1 3.5 1 6.8s2.7 5.9 5.9 5.9c1.2 0 2.2-.3 3.1-.9 0 0 0 .1.1.1l3.7 3.7c.2.2.6.4.9.4s.6-.1.9-.4c.5-.5.5-1.2 0-1.7zm-13-7.1c0-2.4 1.9-4.3 4.3-4.3s4.3 1.9 4.3 4.3-1.8 4.4-4.2 4.4-4.4-2-4.4-4.4z\"/></svg>",
    "send-feedback": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path fill=\"#0098DB\" d=\"M3.017 8L12 13l9.03-5v10H3.017V8zm0-2v-.977H21.03V6L12 11 3.017 6z\"/></svg>",
    "send_message_32": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><path d=\"M4 4l26 12L4 28l2-11 14-1-14-1z\"/></svg>",
    "settings_photo": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M7 6V4h10v2h5v13H2V6h5zm5 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z\"/></svg>\r",
    "star-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M8 1l2.2 4.6 4.8.7-3.5 3.6.8 5.1L8 12.6 3.7 15l.8-5.1L1 6.3l4.8-.7z\"/></svg>",
    "transfer_24": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M4.9 3.4C2.2 6.3 1.5 9.3 1.5 12c0 2.7.7 5.7 3.4 8.6.1.1.3.2.5.2.3 0 2.1-.4 2.5-.6.3-.1.4-.5.3-.8l-1.7-3.1c-.2-.3-.5-.4-.8-.4l-1.2.2c-.3 0-1.3-1.1-1.3-4.1 0-3 1-4.1 1.2-4.2l1.2.2c.3 0 .6-.2.8-.5l1.7-3.1c.2-.3 0-.6-.3-.8-.3-.1-2.1-.5-2.4-.5-.2 0-.4.1-.5.3zm14.3 0c-2.6 2.9-3.4 5.9-3.4 8.6 0 2.7.7 5.7 3.4 8.6.1.1.3.2.5.2.3 0 2.1-.4 2.5-.6.3-.1.4-.5.3-.8l-1.7-3.1c-.2-.3-.5-.4-.8-.4l-1.2.2c-.2-.2-1.2-1.2-1.2-4.2s1-4.1 1.2-4.2l1.2.2c.3.1.6-.1.8-.4l1.7-3.1c.2-.3 0-.6-.3-.8-.4-.2-2.2-.6-2.5-.6-.2.1-.4.2-.5.4z\"/><path d=\"M6 11h7.6v2H6z\"/><path d=\"M11.5 15.6l-1-1.1 2.4-2.5-2.4-2.5 1-1.1L15 12z\"/></svg>",
    "updates_24": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7.8 9.1L4.1 13 .3 9.1zm16 4.9l-3.7-4-3.7 4z\"/><path d=\"M12 4.6c2.5 0 4.8 1.3 6.1 3.3l.1.1h2.5l-.1-.1c-1.6-3.3-5-5.5-8.7-5.5-4.7 0-8.8 3.5-9.5 8.2l2.2.3c.7-3.6 3.8-6.3 7.4-6.3zm7.4 7.4c0 4.1-3.3 7.4-7.4 7.4-2.9 0-5.4-1.7-6.6-4.2v-.1H3v.2c1.3 3.8 4.9 6.4 9 6.4 5.3 0 9.6-4.3 9.6-9.6h-2.2z\"/></svg>\r",
    "upload_24": "<svg id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path class=\"st0\" d=\"M15 5v12.5c0 2.2-1.3 3.5-3.5 3.5S8 19.7 8 17.5V3h4v12.7c0 .6 0 .9-.5.9s-.5-.3-.5-.8V5H9v10.8c0 1.4 1.1 2.6 2.5 2.6s2.4-1.3 2.4-2.6L14 1H6v16.5c0 3 2.5 5.5 5.5 5.5s5.4-2.5 5.4-5.5V5H15z\"/></svg>\r",
    "vertical_dots_24": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><circle r=\"1\" cx=\"50%\" cy=\"35%\"/><circle r=\"1\" cx=\"50%\" cy=\"50%\"/><circle r=\"1\" cx=\"50%\" cy=\"65%\"/></svg>",
    "voicemail_24": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path d=\"M23.7 10.7c-.5-1.6-1.8-2.9-3.5-3.5-3.7-1.1-7.2 1.7-7.2 5.3 0 1.3.5 2.6 1.3 3.5H9.7c.8-.9 1.3-2.2 1.3-3.5C11 9.4 8.5 7 5.5 7S0 9.4 0 12.5 2.5 18 5.5 18h13c3.6 0 6.4-3.5 5.2-7.3zM5.5 16C3.6 16 2 14.4 2 12.5S3.6 9 5.5 9 9 10.6 9 12.5 7.4 16 5.5 16zm13 0c-1.9 0-3.5-1.6-3.5-3.5S16.6 9 18.5 9s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z\"/></svg>",
    "warning-16": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><path d=\"M13.84 11.937L9.02 3.59A1.166 1.166 0 0 0 8 3c-.426 0-.808.22-1.02.59l-4.82 8.347c-.213.37-.213.81 0 1.179s.594.589 1.02.589h9.64c.426 0 .807-.22 1.02-.59a1.166 1.166 0 0 0 0-1.178zm-5.84.41a.768.768 0 1 1 .002-1.536A.768.768 0 0 1 8 12.347zm.772-3.28a.773.773 0 0 1-1.544 0V5.524c0-.202.164-.365.366-.365h.813c.202 0 .365.163.365.365v3.545z\"/></svg>"
};


/***/ }),

/***/ "./src/app/common/pipe/name-filter.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/common/pipe/name-filter.pipe.ts ***!
  \*************************************************/
/*! exports provided: NameFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameFilterPipe", function() { return NameFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NameFilterPipe = /** @class */ (function () {
    function NameFilterPipe() {
    }
    NameFilterPipe.prototype.transform = function (icons, searchText) {
        if (!searchText) {
            return icons;
        }
        return icons.filter(function (icon) {
            return icon.key.toLowerCase()
                .includes(searchText.toLowerCase());
        });
    };
    NameFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'nameFilter'
        })
    ], NameFilterPipe);
    return NameFilterPipe;
}());



/***/ }),

/***/ "./src/app/common/pipe/size-filter.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/common/pipe/size-filter.pipe.ts ***!
  \*************************************************/
/*! exports provided: SizeFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeFilterPipe", function() { return SizeFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SizeFilterPipe = /** @class */ (function () {
    function SizeFilterPipe() {
    }
    SizeFilterPipe.prototype.transform = function (icons, selectedSize) {
        if (selectedSize === 0) {
            return icons.filter(function (item) {
                return !item.value.includes("width=\"");
            });
        }
        return icons.filter(function (item) {
            return item.value.includes("width=\"" + selectedSize);
        });
    };
    SizeFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sizeFilter'
        })
    ], SizeFilterPipe);
    return SizeFilterPipe;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"icon_wrap\" #svg>\n</div>\n\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
        this.svg.nativeElement.innerHTML = " " + this.icon.value + " <span>" + this.icon.key + "</span>";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('svg'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ListComponent.prototype, "svg", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <input type=\"text\" placeholder=\"Search by icon name\" (input)=\"searchBy($event)\">\n</div>\n\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SearchComponent.prototype.searchBy = function (_a) {
        var target = _a.target;
        this.search.emit(target.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "search", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vajen/intermedia/Icons/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map