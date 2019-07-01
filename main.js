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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/components/home/home.component */ "./src/app/components/home/home.component.ts");




var routes = [
    {
        path: 'home',
        component: _app_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div>\n        <div app-home>\n        </div>\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0; }\n\n#container {\n  width: 100vw;\n  height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSDpcXENTR09cXEdsb3JpYSBWaWN0aXNcXFN0cm9uYSBJbnRlcm5ldG93YVxcc3Ryb25hL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdkO0VBQ0ksWUFBWTtFQUNaLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59Il19 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Gloria Victis';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_home_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/nav/nav.component */ "./src/app/components/home/nav/nav.component.ts");
/* harmony import */ var _components_home_clock_clock_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/clock/clock.component */ "./src/app/components/home/clock/clock.component.ts");
/* harmony import */ var _components_home_news_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/news/news.component */ "./src/app/components/home/news/news.component.ts");
/* harmony import */ var _components_home_counter_counter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/counter/counter.component */ "./src/app/components/home/counter/counter.component.ts");
/* harmony import */ var _components_home_welcome_animation_welcome_animation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/welcome-animation/welcome-animation.component */ "./src/app/components/home/welcome-animation/welcome-animation.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_home_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _components_home_clock_clock_component__WEBPACK_IMPORTED_MODULE_7__["ClockComponent"],
                _components_home_news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"],
                _components_home_counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"],
                _components_home_welcome_animation_welcome_animation_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeAnimationComponent"],
                _components_team_team_component__WEBPACK_IMPORTED_MODULE_12__["TeamComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [
                _components_home_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/clock/clock.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/home/clock/clock.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clock\">\n    <a id=\"date\">{{day}} {{month}} {{year}}</a>\n    <a id=\"time\">{{hour}}:{{minute}}:{{second}}</a>\n</div>"

/***/ }),

/***/ "./src/app/components/home/clock/clock.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/home/clock/clock.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: 'Noto Sans', sans-serif;\n  color: #c6dceb;\n  padding: 0;\n  margin: 0; }\n  *:hover {\n    cursor: default; }\n  .clock {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  letter-spacing: 0.5vh;\n  display: flex;\n  justify-content: center;\n  flex-direction: column; }\n  @media screen and (min-width: 1050px) {\n    .clock {\n      opacity: 1;\n      width: auto;\n      height: auto;\n      letter-spacing: 0.5vh;\n      float: left;\n      width: 10vw;\n      margin-right: 20px;\n      margin-top: 2%; } }\n  #date {\n  width: 0;\n  height: 0;\n  display: flex;\n  justify-content: center;\n  flex-direction: column; }\n  @media screen and (min-width: 1050px) {\n    #date {\n      width: auto;\n      height: auto;\n      text-orientation: upright;\n      -webkit-writing-mode: vertical-rl;\n          -ms-writing-mode: tb-rl;\n              writing-mode: vertical-rl;\n      font-size: -webkit-calc(3vh); } }\n  #time {\n  width: 0;\n  height: 0;\n  display: flex;\n  justify-content: center; }\n  @media screen and (min-width: 1050px) {\n    #time {\n      width: auto;\n      height: auto;\n      margin-top: 4vh;\n      font-size: -webkit-calc(2vh); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2Nsb2NrL0g6XFxDU0dPXFxHbG9yaWEgVmljdGlzXFxTdHJvbmEgSW50ZXJuZXRvd2FcXHN0cm9uYS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcY2xvY2tcXGNsb2NrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvY2xvY2svSDpcXENTR09cXEdsb3JpYSBWaWN0aXNcXFN0cm9uYSBJbnRlcm5ldG93YVxcc3Ryb25hL3NyY1xcYXBwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9jbG9jay9IOlxcQ1NHT1xcR2xvcmlhIFZpY3Rpc1xcU3Ryb25hIEludGVybmV0b3dhXFxzdHJvbmEvc3JjXFxhcHBcXHNjc3NcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG9DQUFvQztFQUNwQyxjQ0hlO0VESWYsVUFBVTtFQUNWLFNBQVMsRUFBQTtFQUpiO0lBTVEsZUFBZSxFQUFBO0VBSXZCO0VBQ0ksVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7RUVqQnRCO0lGVUo7TUFTUSxVQUFVO01BQ1YsV0FBVztNQUNYLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsV0FBVztNQUNYLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsY0FBYyxFQUFBLEVBRXJCO0VBRUQ7RUFDSSxRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7RUVuQ3RCO0lGOEJKO01BT1EsV0FBVztNQUNYLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsaUNBQXlCO1VBQXpCLHVCQUF5QjtjQUF6Qix5QkFBeUI7TUFDekIsNEJBQTRCLEVBQUEsRUFFbkM7RUFFRDtFQUNJLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLHVCQUF1QixFQUFBO0VFakR2QjtJRjZDSjtNQU1RLFdBQVc7TUFDWCxZQUFZO01BQ1osZUFBZTtNQUNmLDRCQUE0QixFQUFBLEVBRW5DIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2Nsb2NrL2Nsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL21peGluc1wiO1xyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxufVxyXG5cclxuLmNsb2NrIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjV2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBAaW5jbHVkZSB3cmFwcGVyKDEwNTBweCkge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjV2aDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMTB2dztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNkYXRlIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIEBpbmNsdWRlIHdyYXBwZXIoMTA1MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHRleHQtb3JpZW50YXRpb246IHVwcmlnaHQ7XHJcbiAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcclxuICAgICAgICBmb250LXNpemU6IC13ZWJraXQtY2FsYygzdmgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4jdGltZSB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIEBpbmNsdWRlIHdyYXBwZXIoMTA1MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDR2aDtcclxuICAgICAgICBmb250LXNpemU6IC13ZWJraXQtY2FsYygydmgpO1xyXG4gICAgfVxyXG59IiwiJHJlZENvbG9yOiAjZmYxZjM2O1xyXG4kdGV4dENvbG9yOiAjYzZkY2ViOyIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlc1wiO1xyXG5AbWl4aW4gd3JhcHBlcigkYXJnLi4uKSB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBudGgoJGxpc3Q6ICRhcmcsICRuOiAxKSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gY29tbW9uRGl2U3R5bGl6ZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuQG1peGluIGhvdmVyQW5pbWF0aW9uKCRhcmcuLi4pIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogLjZzO1xyXG4gICAgQGVhY2ggJGl0ZW0gaW4gJGFyZyB7XHJcbiAgICAgICAgQGlmICRpdGVtPT0nYm9yZGVyLXRvcCcge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgY29tcGxlbWVudCgkY29sb3I6ICRyZWRDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpZiAkaXRlbT09J2JvcmRlci1ib3R0b20nIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGNvbXBsZW1lbnQoJGNvbG9yOiAkcmVkQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaWYgJGl0ZW09PSdib3JkZXItbGVmdCcge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGNvbXBsZW1lbnQoJGNvbG9yOiAkcmVkQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaWYgJGl0ZW09PSdib3JkZXItcmlnaHQnIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgY29tcGxlbWVudCgkY29sb3I6ICRyZWRDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGV4dERlY29yYXRpb24ge1xyXG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/clock/clock.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/home/clock/clock.component.ts ***!
  \**********************************************************/
/*! exports provided: ClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockComponent", function() { return ClockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClockComponent = /** @class */ (function () {
    function ClockComponent() {
        this.day = null;
        this.month = null;
        this.year = null;
        this.hour = null;
        this.minute = null;
        this.second = null;
    }
    ClockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setDate();
        setInterval(function () {
            _this.setDate();
        }, 1000);
    };
    ClockComponent.prototype.setDate = function () {
        var date = new Date();
        this.day = date.getDate().toString();
        this.month = date.getMonth().toString();
        this.year = date.getFullYear().toString();
        this.hour = date.getHours().toString();
        this.minute = date.getMinutes().toString();
        this.second = date.getSeconds().toString();
        if (parseInt(this.day) < 10) {
            this.day = "0" + this.day;
        }
        if (parseInt(this.month) < 10) {
            this.month++;
            this.month = "0" + this.month;
        }
        if (parseInt(this.hour) < 10) {
            this.hour = "0" + this.hour;
        }
        if (parseInt(this.minute) < 10) {
            this.minute = "0" + this.minute;
        }
        if (parseInt(this.second) < 10) {
            this.second = "0" + this.second;
        }
    };
    ClockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-clock]',
            template: __webpack_require__(/*! ./clock.component.html */ "./src/app/components/home/clock/clock.component.html"),
            styles: [__webpack_require__(/*! ./clock.component.scss */ "./src/app/components/home/clock/clock.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClockComponent);
    return ClockComponent;
}());



/***/ }),

/***/ "./src/app/components/home/counter/counter.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/home/counter/counter.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"text\" style=\"font-size: -webkit-calc(1vh + 1vw); color: #c6dceb;\">people visited</div>\n    <ul>\n        <li>{{fifth}}</li>\n        <li>{{fourth}}</li>\n        <li>{{third}}</li>\n        <li>{{second}}</li>\n        <li>{{first}}</li>\n    </ul>\n    <div class=\"text\" style=\"font-size: -webkit-calc(0.5vh + 0.5vw);\">thank you!</div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/counter/counter.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/home/counter/counter.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0; }\n\n.container {\n  display: none; }\n\n@media screen and (min-width: 1050px) {\n    .container {\n      display: block;\n      opacity: 1;\n      width: 30vw;\n      height: 25vh;\n      display: flex;\n      flex-direction: column;\n      margin-left: 7vw;\n      margin-top: 7vw;\n      color: #c6dceb;\n      font-family: 'Poppins', sans-serif;\n      font-weight: bold;\n      justify-content: center;\n      text-transform: uppercase;\n      letter-spacing: 3px;\n      text-align: center; }\n      .container .text {\n        color: #ff1f36;\n        letter-spacing: 10px; }\n      .container ul {\n        list-style: none;\n        display: flex;\n        justify-content: center;\n        width: 100%; }\n      .container li {\n        justify-content: center;\n        display: flex;\n        font-size: -webkit-calc(4vh + 3vw);\n        margin: 2%;\n        margin-left: 0;\n        width: 100%;\n        background-color: #09101e;\n        box-shadow: 0px 1px 8px #1fffe8; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvdW50ZXIvSDpcXENTR09cXEdsb3JpYSBWaWN0aXNcXFN0cm9uYSBJbnRlcm5ldG93YVxcc3Ryb25hL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxjb3VudGVyXFxjb3VudGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvY291bnRlci9IOlxcQ1NHT1xcR2xvcmlhIFZpY3Rpc1xcU3Ryb25hIEludGVybmV0b3dhXFxzdHJvbmEvc3JjXFxhcHBcXHNjc3NcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvdW50ZXIvSDpcXENTR09cXEdsb3JpYSBWaWN0aXNcXFN0cm9uYSBJbnRlcm5ldG93YVxcc3Ryb25hL3NyY1xcYXBwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdkO0VBQ0ksYUFBYSxFQUFBOztBQ05iO0lES0o7TUFHUSxjQUFjO01BQ2QsVUFBVTtNQUNWLFdBQVc7TUFDWCxZQUFZO01BQ1osYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixnQkFBZ0I7TUFDaEIsZUFBZTtNQ29CbkIsY0NwQ2U7TURxQ2Ysa0NBQWtDO01BQ2xDLGlCQUFpQjtNQUNqQix1QkFBdUI7TUFDdkIseUJBQXlCO01BQ3pCLG1CQUFtQjtNQUNuQixrQkFBa0IsRUFBQTtNRHBDdEI7UUFhWSxjRXBCTTtRRnFCTixvQkFBb0IsRUFBQTtNQWRoQztRQWlCWSxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixXQUFXLEVBQUE7TUFwQnZCO1FBdUJZLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2Isa0NBQWtDO1FBQ2xDLFVBQVU7UUFDVixjQUFjO1FBQ2QsV0FBVztRQUNYLHlCQUF5QjtRQUN6QiwrQkFBcUQsRUFBQSxFQUN4RCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvbWl4aW5zXCI7XHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgQGluY2x1ZGUgd3JhcHBlcigxMDUwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgICAgIGhlaWdodDogMjV2aDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDd2dztcclxuICAgICAgICBtYXJnaW4tdG9wOiA3dnc7XHJcbiAgICAgICAgQGluY2x1ZGUgdGV4dERlY29yYXRpb247XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogJHJlZENvbG9yO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLXdlYmtpdC1jYWxjKDR2aCArIDN2dyk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMiU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA5MTAxZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA4cHggY29tcGxlbWVudCgkY29sb3I6ICRyZWRDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQGltcG9ydCBcIi4vdmFyaWFibGVzXCI7XHJcbkBtaXhpbiB3cmFwcGVyKCRhcmcuLi4pIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG50aCgkbGlzdDogJGFyZywgJG46IDEpKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjb21tb25EaXZTdHlsaXplciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJBbmltYXRpb24oJGFyZy4uLikge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAuNnM7XHJcbiAgICBAZWFjaCAkaXRlbSBpbiAkYXJnIHtcclxuICAgICAgICBAaWYgJGl0ZW09PSdib3JkZXItdG9wJyB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBjb21wbGVtZW50KCRjb2xvcjogJHJlZENvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGlmICRpdGVtPT0nYm9yZGVyLWJvdHRvbScge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgY29tcGxlbWVudCgkY29sb3I6ICRyZWRDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpZiAkaXRlbT09J2JvcmRlci1sZWZ0JyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgY29tcGxlbWVudCgkY29sb3I6ICRyZWRDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpZiAkaXRlbT09J2JvcmRlci1yaWdodCcge1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBjb21wbGVtZW50KCRjb2xvcjogJHJlZENvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0RGVjb3JhdGlvbiB7XHJcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIkcmVkQ29sb3I6ICNmZjFmMzY7XHJcbiR0ZXh0Q29sb3I6ICNjNmRjZWI7Il19 */"

/***/ }),

/***/ "./src/app/components/home/counter/counter.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/home/counter/counter.component.ts ***!
  \**************************************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
    }
    CounterComponent.prototype.ngOnInit = function () {
        this.setCounter([7, 9, 9, 9, 0]);
    };
    CounterComponent.prototype.setCounter = function (arg) {
        var _this = this;
        this.fifth = arg[4];
        this.fourth = arg[3];
        this.third = arg[2];
        this.second = arg[1];
        this.first = arg[0];
        setInterval(function () {
            _this.runCounter();
        }, 1000);
    };
    CounterComponent.prototype.runCounter = function () {
        this.first++;
        if (this.first > 9) {
            this.first = 0;
            this.second++;
        }
        if (this.second > 9) {
            this.second = 0;
            this.third++;
        }
        if (this.third > 9) {
            this.third = 0;
            this.fourth++;
        }
        if (this.fourth > 9) {
            this.fourth = 0;
            this.fifth++;
        }
    };
    CounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-counter]',
            template: __webpack_require__(/*! ./counter.component.html */ "./src/app/components/home/counter/counter.component.html"),
            styles: [__webpack_require__(/*! ./counter.component.scss */ "./src/app/components/home/counter/counter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div #elo class=\"logo\" routerLink='home'>\n    </div>\n    <div app-nav (menuEvent)=\"isMenuClicked = $event\"> </div>\n    <div app-clock></div>\n    <div app-news [isMenuClicked]=\"!isMenuClicked\"></div>\n    <div app-welcome-animation style=\"float: left;\"></div>\n    <div app-counter style=\"float: left;\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 100vw;\n  height: 100vh;\n  background: url('background.png') no-repeat center center;\n  background-size: 250% 100%;\n  position: absolute;\n  background-position-x: -100vw; }\n  @media screen and (min-width: 1050px) {\n    #container {\n      background-position-x: 0;\n      background-size: 100% 100vh; } }\n  .logo {\n  width: 100vw;\n  height: 150px;\n  background: url('logo_gora.png') no-repeat center center;\n  background-size: 130px 130px; }\n  @media screen and (min-width: 400px) {\n    .logo {\n      background-size: 200px 200px;\n      height: 200px; } }\n  @media screen and (min-width: 1050px) {\n    .logo {\n      background-size: 85% 100%;\n      width: 15vw;\n      height: 13vw;\n      margin-left: 7%;\n      margin-top: 1%; } }\n  .logo:hover {\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0g6XFxDU0dPXFxHbG9yaWEgVmljdGlzXFxTdHJvbmEgSW50ZXJuZXRvd2FcXHN0cm9uYS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0g6XFxDU0dPXFxHbG9yaWEgVmljdGlzXFxTdHJvbmEgSW50ZXJuZXRvd2FcXHN0cm9uYS9zcmNcXGFwcFxcc2Nzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYix5REFBOEU7RUFDOUUsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQiw2QkFBNkIsRUFBQTtFQ043QjtJREFKO01BUVEsd0JBQXdCO01BQ3hCLDJCQUEyQixFQUFBLEVBRWxDO0VBRUQ7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLHdEQUE2RTtFQUM3RSw0QkFBNEIsRUFBQTtFQ2pCNUI7SURhSjtNQU1RLDRCQUE0QjtNQUM1QixhQUFhLEVBQUEsRUFZcEI7RUNoQ0c7SURhSjtNQVVRLHlCQUF5QjtNQUN6QixXQUFXO01BQ1gsWUFBWTtNQUNaLGVBQWU7TUFDZixjQUFjLEVBQUEsRUFLckI7RUFuQkQ7SUFpQlEsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc2Nzcy9taXhpbnNcIjtcclxuQGltcG9ydCBcIi4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XHJcbiNjb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ob21lL2JhY2tncm91bmQucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNTAlIDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC0xMDB2dztcclxuICAgIEBpbmNsdWRlIHdyYXBwZXIoMTA1MHB4KSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDB2aDtcclxuICAgIH1cclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ob21lL2xvZ29fZ29yYS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEzMHB4IDEzMHB4O1xyXG4gICAgQGluY2x1ZGUgd3JhcHBlcig0MDBweCkge1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwcHggMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHdyYXBwZXIoMTA1MHB4KSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA4NSUgMTAwJTtcclxuICAgICAgICB3aWR0aDogMTV2dztcclxuICAgICAgICBoZWlnaHQ6IDEzdnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59IiwiQGltcG9ydCBcIi4vdmFyaWFibGVzXCI7XHJcbkBtaXhpbiB3cmFwcGVyKCRhcmcuLi4pIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG50aCgkbGlzdDogJGFyZywgJG46IDEpKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjb21tb25EaXZTdHlsaXplciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJBbmltYXRpb24oJGFyZy4uLikge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAuNnM7XHJcbiAgICBAZWFjaCAkaXRlbSBpbiAkYXJnIHtcclxuICAgICAgICBAaWYgJGl0ZW09PSdib3JkZXItdG9wJyB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBjb21wbGVtZW50KCRjb2xvcjogJHJlZENvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGlmICRpdGVtPT0nYm9yZGVyLWJvdHRvbScge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgY29tcGxlbWVudCgkY29sb3I6ICRyZWRDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpZiAkaXRlbT09J2JvcmRlci1sZWZ0JyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgY29tcGxlbWVudCgkY29sb3I6ICRyZWRDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpZiAkaXRlbT09J2JvcmRlci1yaWdodCcge1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBjb21wbGVtZW50KCRjb2xvcjogJHJlZENvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0RGVjb3JhdGlvbiB7XHJcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.background = "";
        this.isMenuClicked = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.setBackground = function () {
        this.background = "../../../assets/home/bg1.jpg";
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-home]',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/nav/nav.component.html":
/*!********************************************************!*\
  !*** ./src/app/components/home/nav/nav.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Catamaran&display=swap\" rel=\"stylesheet\">\n<div class=\"container\">\n    <div class=\"menu\" (click)=\"expandList()\">menu</div>\n    <nav id=\"navigation\" [class.activated]=\"isMenuClicked\" [class.disactivated]=\"!isMenuClicked\">\n        <ul>\n            <li><a routerLink='home'>home</a>\n            </li>\n            <li><a routerLink=''>team</a>\n            </li>\n            <li><a routerLink=''>scores</a>\n            </li>\n            <li><a routerLink=''>shop</a>\n            </li>\n            <li><a routerLink=''>contact</a></li>\n        </ul>\n    </nav>\n</div>"

/***/ }),

/***/ "./src/app/components/home/nav/nav.component.scss":
/*!********************************************************!*\
  !*** ./src/app/components/home/nav/nav.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  padding: 0;\n  margin: 0; }\n\n.container {\n  color: #c6dceb;\n  font-family: 'Poppins', sans-serif;\n  font-weight: bold;\n  justify-content: center;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  text-align: center; }\n\n@media screen and (min-width: 1050px) {\n    .container {\n      float: left; } }\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-family: 'Catamaran', sans-serif;\n  letter-spacing: 0.7vw;\n  color: #1fffe8;\n  cursor: pointer;\n  font-size: -webkit-calc(2.5vh + 1vw);\n  border-top: 5px solid white;\n  border-radius: 2px; }\n\n@media screen and (min-width: 1050px) {\n    .menu {\n      display: none; } }\n\n.activated {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.disactivated {\n  display: none; }\n\n@media screen and (min-width: 1050px) {\n    .disactivated {\n      display: block; } }\n\nnav {\n  margin-left: 3vw; }\n\n@media screen and (min-width: 1050px) {\n    nav {\n      display: block;\n      width: 40vw;\n      margin: 0;\n      position: absolute;\n      top: 10%;\n      left: 75%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); } }\n\nul {\n  display: flex;\n  list-style: none;\n  flex-direction: column; }\n\n@media screen and (min-width: 1050px) {\n    ul {\n      margin: 0;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      padding-left: 2px; } }\n\nli {\n  margin: 5px;\n  width: 20%; }\n\n@media screen and (min-width: 1050px) {\n    li {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      margin: 0;\n      text-align: center;\n      border: none;\n      border-radius: 0;\n      width: 100%; } }\n\na {\n  -webkit-transform: translate(5vw);\n          transform: translate(5vw);\n  font-family: 'Poppins', sans-serif;\n  font-size: -webkit-calc(2vh + 1vw);\n  text-decoration: none;\n  color: #c6dceb;\n  display: block;\n  padding: 1vh;\n  text-align: left;\n  -webkit-animation: loaderNav .8s ease-in-out;\n          animation: loaderNav .8s ease-in-out;\n  opacity: 1; }\n\n@media screen and (min-width: 1050px) {\n    a {\n      display: flex;\n      font-size: 0.8vw;\n      -webkit-animation: none;\n              animation: none;\n      -webkit-transform: none;\n              transform: none;\n      padding: 0;\n      opacity: 1; }\n      a:hover {\n        color: #1fffe8; } }\n\na:before {\n    -webkit-animation: loaderLine 1s ease-in-out;\n            animation: loaderLine 1s ease-in-out;\n    top: -0.20vh;\n    padding: 0;\n    content: '';\n    position: absolute;\n    display: block;\n    overflow: hidden;\n    width: 0.5vw;\n    height: 100%;\n    background-color: #ff1f36;\n    -webkit-transform: translate(-3vw);\n            transform: translate(-3vw); }\n\n@media screen and (min-width: 1050px) {\n      a:before {\n        display: none; } }\n\n@-webkit-keyframes loaderNav {\n  0% {\n    -webkit-transform: translate(-3vw);\n            transform: translate(-3vw);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translate(5vw);\n            transform: translate(5vw);\n    opacity: 1; } }\n\n@keyframes loaderNav {\n  0% {\n    -webkit-transform: translate(-3vw);\n            transform: translate(-3vw);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translate(5vw);\n            transform: translate(5vw);\n    opacity: 1; } }\n\n@-webkit-keyframes loaderLine {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(7vw);\n            transform: translate(7vw); }\n  80% {\n    opacity: 1;\n    -webkit-transform: translate(-3vw);\n            transform: translate(-3vw); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(-3vw);\n            transform: translate(-3vw); } }\n\n@keyframes loaderLine {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(7vw);\n            transform: translate(7vw); }\n  80% {\n    opacity: 1;\n    -webkit-transform: translate(-3vw);\n            transform: translate(-3vw); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(-3vw);\n            transform: translate(-3vw); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL25hdi9IOlxcQ1NHT1xcR2xvcmlhIFZpY3Rpc1xcU3Ryb25hIEludGVybmV0b3dhXFxzdHJvbmEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvbmF2L0g6XFxDU0dPXFxHbG9yaWEgVmljdGlzXFxTdHJvbmEgSW50ZXJuZXRvd2FcXHN0cm9uYS9zcmNcXGFwcFxcc2Nzc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvbmF2L0g6XFxDU0dPXFxHbG9yaWEgVmljdGlzXFxTdHJvbmEgSW50ZXJuZXRvd2FcXHN0cm9uYS9zcmNcXGFwcFxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFHYjtFQzBCSSxjQ3BDZTtFRHFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQXpDbEI7SURTSjtNQUdRLFdBQVcsRUFBQSxFQUVsQjs7QUFFRDtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsY0FBb0M7RUFDcEMsZUFBZTtFQUNmLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUE7O0FDMUJsQjtJRGdCSjtNQVlRLGFBQWEsRUFBQSxFQUVwQjs7QUFFRDtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksYUFBYSxFQUFBOztBQ3ZDYjtJRHNDSjtNQUdRLGNBQWMsRUFBQSxFQUVyQjs7QUFFRDtFQUNJLGdCQUFnQixFQUFBOztBQzlDaEI7SUQ2Q0o7TUFHUSxjQUFjO01BQ2QsV0FBVztNQUNYLFNBQVM7TUFDVCxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFNBQVM7TUFDVCx3Q0FBZ0M7Y0FBaEMsZ0NBQWdDLEVBQUEsRUFFdkM7O0FBRUQ7RUFDSSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBOztBQzdEdEI7SUQwREo7TUFLUSxTQUFTO01BQ1QsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsaUJBQWlCLEVBQUEsRUFFeEI7O0FBRUQ7RUFDSSxXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQ3pFVjtJRHVFSjtNQUlRLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLFNBQVM7TUFDVCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixXQUFXLEVBQUEsRUFFbEI7O0FBRUQ7RUFDSSxpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQyxrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLGNFNUZlO0VGNkZmLGNBQWM7RUFDZCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDRDQUFvQztVQUFwQyxvQ0FBb0M7RUFDcEMsVUFBVSxFQUFBOztBQ2hHVjtJRHNGSjtNQVlRLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIsdUJBQWU7Y0FBZixlQUFlO01BQ2YsdUJBQWU7Y0FBZixlQUFlO01BQ2YsVUFBVTtNQUNWLFVBQVUsRUFBQTtNQWpCbEI7UUFtQlksY0FBNEIsRUFBQSxFQUMvQjs7QUFwQlQ7SUF1QlEsNENBQW9DO1lBQXBDLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCRXhIVTtJRnlIVixrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUE7O0FDdkg5QjtNRHNGSjtRQW1DWSxhQUFhLEVBQUEsRUFFcEI7O0FBR0w7RUFDSTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsVUFBVSxFQUFBO0VBRWQ7SUFDSSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLFVBQVUsRUFBQSxFQUFBOztBQVBsQjtFQUNJO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixVQUFVLEVBQUE7RUFFZDtJQUNJLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsVUFBVSxFQUFBLEVBQUE7O0FBSWxCO0VBQ0k7SUFDSSxVQUFVO0lBQ1YsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBO0VBRTdCO0lBQ0ksVUFBVTtJQUNWLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtFQUU5QjtJQUNJLFVBQVU7SUFDVixrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUEsRUFBQTs7QUFYbEM7RUFDSTtJQUNJLFVBQVU7SUFDVixpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUE7RUFFN0I7SUFDSSxVQUFVO0lBQ1Ysa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0VBRTlCO0lBQ0ksVUFBVTtJQUNWLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9taXhpbnNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XHJcbiR0b3A6IC0xNSU7XHJcbiRib3R0b206IC0xNSU7XHJcbiRsZWZ0OiAtMyU7XHJcbiRyaWdodDogLTMlO1xyXG4qIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgQGluY2x1ZGUgdGV4dERlY29yYXRpb247XHJcbiAgICBAaW5jbHVkZSB3cmFwcGVyKDEwNTBweCkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYXRhbWFyYW4nLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuN3Z3O1xyXG4gICAgY29sb3I6IGNvbXBsZW1lbnQoJGNvbG9yOiAkcmVkQ29sb3IpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAtd2Via2l0LWNhbGMoMi41dmggKyAxdncpO1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgQGluY2x1ZGUgd3JhcHBlcigxMDUwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZhdGVkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXNhY3RpdmF0ZWQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIEBpbmNsdWRlIHdyYXBwZXIoMTA1MHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICBtYXJnaW4tbGVmdDogM3Z3O1xyXG4gICAgQGluY2x1ZGUgd3JhcHBlcigxMDUwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogNDB2dztcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIGxlZnQ6IDc1JTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIH1cclxufVxyXG5cclxudWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgQGluY2x1ZGUgd3JhcHBlcigxMDUwcHgpIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5saSB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBAaW5jbHVkZSB3cmFwcGVyKDEwNTBweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5hIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDV2dyk7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAtd2Via2l0LWNhbGMoMnZoICsgMXZ3KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkZXJOYXYgLjhzIGVhc2UtaW4tb3V0O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIEBpbmNsdWRlIHdyYXBwZXIoMTA1MHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmb250LXNpemU6IDAuOHZ3O1xyXG4gICAgICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogY29tcGxlbWVudCgkcmVkQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBhbmltYXRpb246IGxvYWRlckxpbmUgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgdG9wOiAtMC4yMHZoO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2lkdGg6IDAuNXZ3O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkQ29sb3I7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTN2dyk7XHJcbiAgICAgICAgQGluY2x1ZGUgd3JhcHBlcigxMDUwcHgpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGVyTmF2IHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3Z3KTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXZ3KTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWRlckxpbmUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoN3Z3KTtcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3Z3KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTN2dyk7XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IFwiLi92YXJpYWJsZXNcIjtcclxuQG1peGluIHdyYXBwZXIoJGFyZy4uLikge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbnRoKCRsaXN0OiAkYXJnLCAkbjogMSkpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGNvbW1vbkRpdlN0eWxpemVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlckFuaW1hdGlvbigkYXJnLi4uKSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IC42cztcclxuICAgIEBlYWNoICRpdGVtIGluICRhcmcge1xyXG4gICAgICAgIEBpZiAkaXRlbT09J2JvcmRlci10b3AnIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGNvbXBsZW1lbnQoJGNvbG9yOiAkcmVkQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaWYgJGl0ZW09PSdib3JkZXItYm90dG9tJyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBjb21wbGVtZW50KCRjb2xvcjogJHJlZENvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGlmICRpdGVtPT0nYm9yZGVyLWxlZnQnIHtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBjb21wbGVtZW50KCRjb2xvcjogJHJlZENvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGlmICRpdGVtPT0nYm9yZGVyLXJpZ2h0JyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGNvbXBsZW1lbnQoJGNvbG9yOiAkcmVkQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHRleHREZWNvcmF0aW9uIHtcclxuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIiRyZWRDb2xvcjogI2ZmMWYzNjtcclxuJHRleHRDb2xvcjogI2M2ZGNlYjsiXX0= */"

/***/ }),

/***/ "./src/app/components/home/nav/nav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/home/nav/nav.component.ts ***!
  \******************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.menuEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isMenuClicked = false;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.expandList = function () {
        this.isMenuClicked = !this.isMenuClicked;
        this.menuEvent.emit(this.isMenuClicked);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("menuEvent"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavComponent.prototype, "menuEvent", void 0);
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-nav]',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/home/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/components/home/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/home/news/news.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/home/news/news.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"frame\" [class.activated]=\"isMenuClicked\" [class.disactivated]=\"!isMenuClicked\">\n    <div class=\"content\" style=\"float: left;\">\n        <img src={{currentImage}} width=\"100%\" height=\"100%\">\n    </div>\n    <div class=\"line\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/news/news.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/home/news/news.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".frame {\n  width: 70vw;\n  height: 37vw;\n  margin-left: 17vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: url('ramka.png') no-repeat center center;\n  background-size: 100% 100%;\n  padding: 1vw;\n  margin-top: 5%; }\n  .frame .content {\n    height: 83%;\n    width: 88%;\n    margin-left: 6%;\n    margin-top: 2%;\n    box-shadow: 0px 1px 8px #1fffe8;\n    cursor: pointer; }\n  .frame .line {\n    width: 90%;\n    height: 2%;\n    background-color: #1fffe8;\n    margin-left: 5.5%;\n    -webkit-animation: pull 8s ease-out .1s infinite;\n            animation: pull 8s ease-out .1s infinite;\n    opacity: 0.8;\n    border-radius: 2px;\n    margin-top: 2%; }\n  @media screen and (min-width: 1050px) {\n    .frame {\n      display: flex;\n      float: left;\n      max-width: none;\n      max-height: none;\n      width: 40vw;\n      height: 20vw;\n      margin: 0;\n      margin-top: 3%; } }\n  .activated {\n  display: flex; }\n  .disactivated {\n  display: none; }\n  @-webkit-keyframes pull {\n  0% {\n    width: 88%; }\n  7% {\n    width: 1%;\n    opacity: 0.5; }\n  10% {\n    opacity: 1; }\n  100% {\n    width: 88%;\n    opacity: 1; } }\n  @keyframes pull {\n  0% {\n    width: 88%; }\n  7% {\n    width: 1%;\n    opacity: 0.5; }\n  10% {\n    opacity: 1; }\n  100% {\n    width: 88%;\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL25ld3MvSDpcXENTR09cXEdsb3JpYSBWaWN0aXNcXFN0cm9uYSBJbnRlcm5ldG93YVxcc3Ryb25hL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxuZXdzXFxuZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvbmV3cy9IOlxcQ1NHT1xcR2xvcmlhIFZpY3Rpc1xcU3Ryb25hIEludGVybmV0b3dhXFxzdHJvbmEvc3JjXFxhcHBcXHNjc3NcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG9EQUE0RTtFQUM1RSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGNBQWMsRUFBQTtFQVZsQjtJQVlRLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLGNBQWM7SUFDZCwrQkFBcUQ7SUFDckQsZUFBZSxFQUFBO0VBakJ2QjtJQW9CUSxVQUFVO0lBQ1YsVUFBVTtJQUNWLHlCQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsZ0RBQXdDO1lBQXhDLHdDQUF3QztJQUN4QyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWMsRUFBQTtFQzNCbEI7SURBSjtNQThCUSxhQUFhO01BQ2IsV0FBVztNQUNYLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLFlBQVk7TUFDWixTQUFTO01BQ1QsY0FBYyxFQUFBLEVBRXJCO0VBRUQ7RUFDSSxhQUFhLEVBQUE7RUFHakI7RUFDSSxhQUFhLEVBQUE7RUFHakI7RUFDSTtJQUNJLFVBQVUsRUFBQTtFQUVkO0lBQ0ksU0FBUztJQUNULFlBQVksRUFBQTtFQUVoQjtJQUNJLFVBQVUsRUFBQTtFQUVkO0lBQ0ksVUFBVTtJQUNWLFVBQVUsRUFBQSxFQUFBO0VBYmxCO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLFNBQVM7SUFDVCxZQUFZLEVBQUE7RUFFaEI7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLFVBQVU7SUFDVixVQUFVLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvbWl4aW5zXCI7XHJcbi5mcmFtZSB7XHJcbiAgICB3aWR0aDogNzB2dztcclxuICAgIGhlaWdodDogMzd2dztcclxuICAgIG1hcmdpbi1sZWZ0OiAxN3Z3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9ob21lL3JhbWthLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgcGFkZGluZzogMXZ3O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiA4MyU7XHJcbiAgICAgICAgd2lkdGg6IDg4JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNiU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA4cHggY29tcGxlbWVudCgkY29sb3I6ICRyZWRDb2xvcik7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLmxpbmUge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb21wbGVtZW50KCRyZWRDb2xvcik7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUuNSU7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBwdWxsIDhzIGVhc2Utb3V0IC4xcyBpbmZpbml0ZTtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgd3JhcHBlcigxMDUwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgICAgIGhlaWdodDogMjB2dztcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmF0ZWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmRpc2FjdGl2YXRlZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bGwge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHdpZHRoOiA4OCU7XHJcbiAgICB9XHJcbiAgICA3JSB7XHJcbiAgICAgICAgd2lkdGg6IDElO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxuICAgIDEwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHdpZHRoOiA4OCU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlc1wiO1xyXG5AbWl4aW4gd3JhcHBlcigkYXJnLi4uKSB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBudGgoJGxpc3Q6ICRhcmcsICRuOiAxKSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gY29tbW9uRGl2U3R5bGl6ZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuQG1peGluIGhvdmVyQW5pbWF0aW9uKCRhcmcuLi4pIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogLjZzO1xyXG4gICAgQGVhY2ggJGl0ZW0gaW4gJGFyZyB7XHJcbiAgICAgICAgQGlmICRpdGVtPT0nYm9yZGVyLXRvcCcge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgY29tcGxlbWVudCgkY29sb3I6ICRyZWRDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpZiAkaXRlbT09J2JvcmRlci1ib3R0b20nIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGNvbXBsZW1lbnQoJGNvbG9yOiAkcmVkQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaWYgJGl0ZW09PSdib3JkZXItbGVmdCcge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGNvbXBsZW1lbnQoJGNvbG9yOiAkcmVkQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaWYgJGl0ZW09PSdib3JkZXItcmlnaHQnIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgY29tcGxlbWVudCgkY29sb3I6ICRyZWRDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGV4dERlY29yYXRpb24ge1xyXG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/news/news.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/home/news/news.component.ts ***!
  \********************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
        this.isMenuClicked = false;
        this.images = [];
        this.i = 1;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.images[0] = "../../../../assets/home/bg1.jpg";
        this.images[1] = "../../../../assets/home/bg2.jpg";
        this.images[2] = "../../../../assets/home/team.png";
        this.changeImg();
        setInterval(function () {
            _this.changeImg();
        }, 8000);
    };
    NewsComponent.prototype.changeImg = function () {
        this.i++;
        if (this.i > this.images.length - 1) {
            this.i = 0;
        }
        this.currentImage = this.images[this.i];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NewsComponent.prototype, "isMenuClicked", void 0);
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-news]',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/components/home/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/components/home/news/news.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/welcome-animation/welcome-animation.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/home/welcome-animation/welcome-animation.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div id=\"upper\">Gloria <span>Victis</span></div>\n    <div id=\"below\">esports club</div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/welcome-animation/welcome-animation.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/home/welcome-animation/welcome-animation.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  padding: 0;\n  margin: 0;\n  padding: 0;\n  margin: 0; }\n\n.container {\n  color: #c6dceb;\n  font-family: 'Poppins', sans-serif;\n  font-weight: bold;\n  justify-content: center;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  text-align: center;\n  margin-top: 5%;\n  width: 100vw; }\n\n.container #upper {\n    letter-spacing: 1vw;\n    font-size: -webkit-calc(3vh + 1vw);\n    -webkit-animation: moveInRight 1s ease-out;\n            animation: moveInRight 1s ease-out; }\n\n.container #upper span {\n      color: #ff1f36; }\n\n.container #below {\n    letter-spacing: 0.75vw;\n    color: #1fffe8;\n    font-size: -webkit-calc(1vh + 1vw);\n    -webkit-animation: moveInLeft 1s ease-out;\n            animation: moveInLeft 1s ease-out; }\n\n@media screen and (min-width: 1050px) {\n    .container {\n      width: 35vw;\n      float: left;\n      margin-right: 0;\n      margin-top: 0;\n      margin-left: 5vw; }\n      .container #upper {\n        width: 100%;\n        letter-spacing: 1vw;\n        font-size: -webkit-calc(1.5vw + 1vw);\n        -webkit-animation: moveInRight 1s ease-out;\n                animation: moveInRight 1s ease-out; }\n        .container #upper span {\n          color: #ff1f36; }\n      .container #below {\n        width: 100%;\n        margin-top: 0.5vh;\n        letter-spacing: 0.75vw;\n        color: #1fffe8;\n        font-size: 115%;\n        -webkit-animation: moveInLeft 1s ease-out;\n                animation: moveInLeft 1s ease-out; } }\n\n@-webkit-keyframes moveInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-3vw);\n            transform: translateX(-3vw); }\n  100% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n    opacity: 1; } }\n\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-3vw);\n            transform: translateX(-3vw); }\n  100% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n    opacity: 1; } }\n\n@-webkit-keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(3vw);\n            transform: translate(3vw); }\n  100% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n    opacity: 1; } }\n\n@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(3vw);\n            transform: translate(3vw); }\n  100% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3dlbGNvbWUtYW5pbWF0aW9uL0g6XFxDU0dPXFxHbG9yaWEgVmljdGlzXFxTdHJvbmEgSW50ZXJuZXRvd2FcXHN0cm9uYS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcd2VsY29tZS1hbmltYXRpb25cXHdlbGNvbWUtYW5pbWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvd2VsY29tZS1hbmltYXRpb24vSDpcXENTR09cXEdsb3JpYSBWaWN0aXNcXFN0cm9uYSBJbnRlcm5ldG93YVxcc3Ryb25hL3NyY1xcYXBwXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS93ZWxjb21lLWFuaW1hdGlvbi9IOlxcQ1NHT1xcR2xvcmlhIFZpY3Rpc1xcU3Ryb25hIEludGVybmV0b3dhXFxzdHJvbmEvc3JjXFxhcHBcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQ01JLFVBQVU7RUFDVixTQUFTO0VETFQsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFHYjtFQzZCSSxjQ3BDZTtFRHFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFRGpDbEIsY0FBYztFQUNkLFlBQVksRUFBQTs7QUFIaEI7SUFLUSxtQkFBbUI7SUFDbkIsa0NBQWtDO0lBSWxDLDBDQUFrQztZQUFsQyxrQ0FBa0MsRUFBQTs7QUFWMUM7TUFRWSxjRWhCTSxFQUFBOztBRlFsQjtJQWFRLHNCQUFzQjtJQUN0QixjQUFvQztJQUNwQyxrQ0FBa0M7SUFDbEMseUNBQWlDO1lBQWpDLGlDQUFpQyxFQUFBOztBQ3RCckM7SURNSjtNQW1CUSxXQUFXO01BQ1gsV0FBVztNQUNYLGVBQWU7TUFDZixhQUFhO01BQ2IsZ0JBQWdCLEVBQUE7TUF2QnhCO1FBeUJZLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsb0NBQW9DO1FBSXBDLDBDQUFrQztnQkFBbEMsa0NBQWtDLEVBQUE7UUEvQjlDO1VBNkJnQixjRXJDRSxFQUFBO01GUWxCO1FBa0NZLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLGNBQW9DO1FBQ3BDLGVBQWU7UUFDZix5Q0FBaUM7Z0JBQWpDLGlDQUFpQyxFQUFBLEVBQ3BDOztBQUlUO0VBQ0k7SUFDSSxVQUFVO0lBQ1YsbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBO0VBRS9CO0lBQ0ksK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixVQUFVLEVBQUEsRUFBQTs7QUFQbEI7RUFDSTtJQUNJLFVBQVU7SUFDVixtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUE7RUFFL0I7SUFDSSwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFVBQVUsRUFBQSxFQUFBOztBQUlsQjtFQUNJO0lBQ0ksVUFBVTtJQUNWLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQTtFQUU3QjtJQUNJLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsVUFBVSxFQUFBLEVBQUE7O0FBUGxCO0VBQ0k7SUFDSSxVQUFVO0lBQ1YsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBO0VBRTdCO0lBQ0ksK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixVQUFVLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS93ZWxjb21lLWFuaW1hdGlvbi93ZWxjb21lLWFuaW1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL21peGluc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuKiB7XHJcbiAgICBAaW5jbHVkZSBjb21tb25EaXZTdHlsaXplcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgQGluY2x1ZGUgdGV4dERlY29yYXRpb247XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgICN1cHBlciB7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDF2dztcclxuICAgICAgICBmb250LXNpemU6IC13ZWJraXQtY2FsYygzdmggKyAxdncpO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogJHJlZENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbmltYXRpb246IG1vdmVJblJpZ2h0IDFzIGVhc2Utb3V0O1xyXG4gICAgfVxyXG4gICAgI2JlbG93IHtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC43NXZ3O1xyXG4gICAgICAgIGNvbG9yOiBjb21wbGVtZW50KCRjb2xvcjogJHJlZENvbG9yKTtcclxuICAgICAgICBmb250LXNpemU6IC13ZWJraXQtY2FsYygxdmggKyAxdncpO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbW92ZUluTGVmdCAxcyBlYXNlLW91dDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHdyYXBwZXIoMTA1MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDM1dnc7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcclxuICAgICAgICAjdXBwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDF2dztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAtd2Via2l0LWNhbGMoMS41dncgKyAxdncpO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQ29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBtb3ZlSW5SaWdodCAxcyBlYXNlLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2JlbG93IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXZoO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC43NXZ3O1xyXG4gICAgICAgICAgICBjb2xvcjogY29tcGxlbWVudCgkY29sb3I6ICRyZWRDb2xvcik7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTE1JTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBtb3ZlSW5MZWZ0IDFzIGVhc2Utb3V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtb3ZlSW5SaWdodCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTN2dyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmVJbkxlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3Z3KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IFwiLi92YXJpYWJsZXNcIjtcclxuQG1peGluIHdyYXBwZXIoJGFyZy4uLikge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbnRoKCRsaXN0OiAkYXJnLCAkbjogMSkpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGNvbW1vbkRpdlN0eWxpemVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlckFuaW1hdGlvbigkYXJnLi4uKSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IC42cztcclxuICAgIEBlYWNoICRpdGVtIGluICRhcmcge1xyXG4gICAgICAgIEBpZiAkaXRlbT09J2JvcmRlci10b3AnIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGNvbXBsZW1lbnQoJGNvbG9yOiAkcmVkQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaWYgJGl0ZW09PSdib3JkZXItYm90dG9tJyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBjb21wbGVtZW50KCRjb2xvcjogJHJlZENvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGlmICRpdGVtPT0nYm9yZGVyLWxlZnQnIHtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBjb21wbGVtZW50KCRjb2xvcjogJHJlZENvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGlmICRpdGVtPT0nYm9yZGVyLXJpZ2h0JyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGNvbXBsZW1lbnQoJGNvbG9yOiAkcmVkQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHRleHREZWNvcmF0aW9uIHtcclxuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIiRyZWRDb2xvcjogI2ZmMWYzNjtcclxuJHRleHRDb2xvcjogI2M2ZGNlYjsiXX0= */"

/***/ }),

/***/ "./src/app/components/home/welcome-animation/welcome-animation.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/home/welcome-animation/welcome-animation.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WelcomeAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeAnimationComponent", function() { return WelcomeAnimationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeAnimationComponent = /** @class */ (function () {
    function WelcomeAnimationComponent() {
        this.isMenuClicked = true;
    }
    WelcomeAnimationComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WelcomeAnimationComponent.prototype, "isMenuClicked", void 0);
    WelcomeAnimationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-welcome-animation]',
            template: __webpack_require__(/*! ./welcome-animation.component.html */ "./src/app/components/home/welcome-animation/welcome-animation.component.html"),
            styles: [__webpack_require__(/*! ./welcome-animation.component.scss */ "./src/app/components/home/welcome-animation/welcome-animation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeAnimationComponent);
    return WelcomeAnimationComponent;
}());



/***/ }),

/***/ "./src/app/components/team/team.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/team/team.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <img src=\"../../../assets/team/background.png\" alt=\"background\">\n</div>"

/***/ }),

/***/ "./src/app/components/team/team.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/team/team.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100vw;\n  height: 40vh;\n  position: absolute;\n  top: 100vh;\n  background-color: #fff; }\n  .container img {\n    width: 100vw;\n    height: 40vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFtL0g6XFxDU0dPXFxHbG9yaWEgVmljdGlzXFxTdHJvbmEgSW50ZXJuZXRvd2FcXHN0cm9uYS9zcmNcXGFwcFxcY29tcG9uZW50c1xcdGVhbVxcdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixzQkFBc0IsRUFBQTtFQUwxQjtJQU9RLFlBQVk7SUFDWixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlYW0vdGVhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zY3NzL21peGluc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGhlaWdodDogNDB2aDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/team/team.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/team/team.component.ts ***!
  \***************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-team]',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/components/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./src/app/components/team/team.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
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

module.exports = __webpack_require__(/*! H:\CSGO\Gloria Victis\Strona Internetowa\strona\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map