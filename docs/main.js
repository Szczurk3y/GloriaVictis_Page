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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div app-home></div>\n    <div app-team></div>\n    <div app-shop></div>\n    <div app-contact></div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; }\n\ndiv {\n  width: 100vw; }\n\n#container {\n  scroll-behavior: smooth;\n  overflow-y: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSDpcXENTR09cXEdsb3JpYSBWaWN0aXNcXEdsb3JpYVZpY3Rpc19QYWdlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx1QkFBdUI7RUFDdkIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmRpdiB7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG4jY29udGFpbmVyIHtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59Il19 */"

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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_home_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/schedule/schedule.component */ "./src/app/components/home/schedule/schedule.component.ts");
/* harmony import */ var _components_home_results_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/results/results.component */ "./src/app/components/home/results/results.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_home_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/nav/nav.component */ "./src/app/components/home/nav/nav.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");
/* harmony import */ var _components_home_news_news_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/news/news.component */ "./src/app/components/home/news/news.component.ts");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/shop/shop.component */ "./src/app/components/shop/shop.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_home_home_middle_buttons_home_middle_buttons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/home-middle-buttons/home-middle-buttons.component */ "./src/app/components/home/home-middle-buttons/home-middle-buttons.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_home_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
                _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"],
                _components_home_news_news_component__WEBPACK_IMPORTED_MODULE_12__["NewsComponent"],
                _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_13__["ShopComponent"],
                _components_home_results_results_component__WEBPACK_IMPORTED_MODULE_7__["ResultsComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
                _components_home_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_6__["ScheduleComponent"],
                _components_home_home_middle_buttons_home_middle_buttons_component__WEBPACK_IMPORTED_MODULE_15__["HomeMiddleButtonsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            ],
            providers: [
                _components_home_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contact\">\n    <div class=\"content\">\n        <div class=\"contact_inside\">\n            <span> Contact </span><br/>\n            <a>E-mail:</a> gloriavictis.contact@gmail.com <br/>\n            <a>Phone:</a> +48 511 783 296 <br/>\n        </div>\n    </div>\n    <div class=\"content\">\n        <div class=\"icons\">\n            <a class=\"fab fa-facebook icon\" href=\"https://www.facebook.com/GloriaVictisTeam/\" target=\"_blank\"></a>\n            <a class=\"fab fa-instagram icon\" href=\"https://www.instagram.com/gloriavictis_esport/\" target=\"_blank\"></a>\n            <a class=\"fab fa-twitter icon\" href=\"https://twitter.com/EsportsGloria\" target=\"_blank\"></a>\n        </div>\n        <div class=\"logo\"><img src=\"../../../assets/home/logo_gora.png\" alt=\"logo\"></div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contact {\n  width: 100vw;\n  height: 15vh;\n  position: relative;\n  display: flex;\n  background-color: #060b15; }\n\n.content {\n  width: 65%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-left: 5%; }\n\n.content:last-child {\n    margin: 0;\n    width: 35%;\n    flex-direction: row; }\n\n@media screen and (min-width: 1050px) {\n      .content:last-child {\n        justify-content: flex-end;\n        margin-right: 5%; } }\n\n@media screen and (min-width: 1050px) {\n    .content {\n      margin-left: 10%; } }\n\n.contact_inside {\n  width: 100%;\n  color: #c6dceb;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: bold;\n  align-self: flex-start;\n  font-size: 75%;\n  font-family: 'Darker Grotesque', sans-serif;\n  line-height: 1rem; }\n\n.contact_inside span {\n    font-size: 200%;\n    letter-spacing: 5px; }\n\n@media screen and (min-width: 1050px) {\n      .contact_inside span {\n        font-size: 200%;\n        letter-spacing: 10px;\n        margin-top: 5%;\n        letter-spacing: 1px; } }\n\n.contact_inside a {\n    color: red;\n    margin-right: 1%; }\n\n@media screen and (min-width: 1050px) {\n      .contact_inside a {\n        font-size: 100%; } }\n\n@media screen and (min-width: 750px) {\n    .contact_inside {\n      font-size: 125%;\n      line-height: 1.5rem; } }\n\n@media screen and (min-width: 1000px) {\n    .contact_inside {\n      margin-top: 1%;\n      line-height: 2.5rem;\n      font-size: 150%; } }\n\n.logo {\n  display: none; }\n\n@media screen and (min-width: 1050px) {\n    .logo {\n      width: 7vw;\n      height: 7vw;\n      display: flex;\n      justify-content: center; }\n      .logo img {\n        width: 100%;\n        height: 100%; } }\n\n.icons {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%; }\n\n.icons a:not(:first-child) {\n    margin-left: 10%; }\n\n@media screen and (min-width: 1050px) {\n    .icons {\n      width: 50%; } }\n\n.icon {\n  width: 25px;\n  height: 25px;\n  display: flex;\n  text-decoration: none;\n  justify-content: center;\n  align-items: center;\n  transition: all .2s ease-in;\n  cursor: pointer;\n  border-radius: 50%;\n  background-color: #e5002a;\n  color: white;\n  font-size: 15px; }\n\n.icon:hover:first-child {\n    background-color: #3c5a99; }\n\n.icon:hover:nth-child(2) {\n    background-color: #833ab4; }\n\n.icon:hover:last-child {\n    background-color: #00acee; }\n\n@media screen and (min-width: 500px) {\n    .icon {\n      width: 40px;\n      height: 40px;\n      font-size: 125%; } }\n\n@media screen and (min-width: 1000px) {\n    .icon {\n      font-size: 150%;\n      width: 50px;\n      height: 50px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0g6XFxDU0dPXFxHbG9yaWEgVmljdGlzXFxHbG9yaWFWaWN0aXNfUGFnZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0g6XFxDU0dPXFxHbG9yaWEgVmljdGlzXFxHbG9yaWFWaWN0aXNfUGFnZS9zcmNcXGFwcFxcc2Nzc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvSDpcXENTR09cXEdsb3JpYSBWaWN0aXNcXEdsb3JpYVZpY3Rpc19QYWdlL3NyY1xcYXBwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZSxFQUFBOztBQVBuQjtJQVNRLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CLEVBQUE7O0FDYnZCO01ERUo7UUFhWSx5QkFBeUI7UUFDekIsZ0JBQWdCLEVBQUEsRUFFdkI7O0FDbEJEO0lERUo7TUFrQlEsZ0JBQWdCLEVBQUEsRUFFdkI7O0FBRUQ7RUFDSSxXQUFXO0VDUFgsY0N6QmU7RUQwQmYsb0NBQW9DO0VBQ3BDLGlCQUFpQjtFRE9qQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLDJDQUEyQztFQUMzQyxpQkFBaUIsRUFBQTs7QUFOckI7SUFRUSxlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7O0FDakN2QjtNRHdCSjtRQVdZLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLG1CQUFtQixFQUFBLEVBRTFCOztBQWhCTDtJQWtCUSxVQUFVO0lBQ1YsZ0JBQWdCLEVBQUE7O0FDM0NwQjtNRHdCSjtRQXFCWSxlQUFlLEVBQUEsRUFFdEI7O0FDL0NEO0lEd0JKO01BeUJRLGVBQWU7TUFDZixtQkFBbUIsRUFBQSxFQU8xQjs7QUN6REc7SUR3Qko7TUE2QlEsY0FBYztNQUNkLG1CQUFtQjtNQUNuQixlQUFlLEVBQUEsRUFFdEI7O0FBRUQ7RUFDSSxhQUFhLEVBQUE7O0FDNURiO0lEMkRKO01BR1EsVUFBVTtNQUNWLFdBQVc7TUFDWCxhQUFhO01BQ2IsdUJBQXVCLEVBQUE7TUFOL0I7UUFRWSxXQUFXO1FBQ1gsWUFBWSxFQUFBLEVBQ2Y7O0FBSVQ7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXLEVBQUE7O0FBSmY7SUFPWSxnQkFBZ0IsRUFBQTs7QUNoRnhCO0lEeUVKO01BV1EsVUFBVSxFQUFBLEVBRWpCOztBQUVEO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBWm5CO0lBZVkseUJBQWtDLEVBQUE7O0FBZjlDO0lBa0JZLHlCQUFtQyxFQUFBOztBQWxCL0M7SUFxQlkseUJBQXlCLEVBQUE7O0FDN0dqQztJRHdGSjtNQXlCUSxXQUFXO01BQ1gsWUFBWTtNQUNaLGVBQWUsRUFBQSxFQU90Qjs7QUMxSEc7SUR3Rko7TUE4QlEsZUFBZTtNQUNmLFdBQVc7TUFDWCxZQUFZLEVBQUEsRUFFbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIi4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XG4jY29udGFjdCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTV2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwYjE1O1xufVxuXG4uY29udGVudCB7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgQGluY2x1ZGUgd3JhcHBlclcoMTA1MHB4KSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAaW5jbHVkZSB3cmFwcGVyVygxMDUwcHgpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICB9XG59XG5cbi5jb250YWN0X2luc2lkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgQGluY2x1ZGUgdGV4dERlY29yYXRpb247XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBmb250LXNpemU6IDc1JTtcbiAgICBmb250LWZhbWlseTogJ0RhcmtlciBHcm90ZXNxdWUnLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDIwMCU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgICAgIEBpbmNsdWRlIHdyYXBwZXJXICgxMDUwcHgpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGEge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgICAgICBAaW5jbHVkZSB3cmFwcGVyVygxMDUwcHgpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAaW5jbHVkZSB3cmFwcGVyVyg3NTBweCkge1xuICAgICAgICBmb250LXNpemU6IDEyNSU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgfVxuICAgIEBpbmNsdWRlIHdyYXBwZXJXKDEwMDBweCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxNTAlO1xuICAgIH1cbn1cblxuLmxvZ28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgQGluY2x1ZGUgd3JhcHBlclcoMTA1MHB4KSB7XG4gICAgICAgIHdpZHRoOiA3dnc7XG4gICAgICAgIGhlaWdodDogN3Z3O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhIHtcbiAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBpbmNsdWRlIHdyYXBwZXJXKDEwNTBweCkge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbn1cblxuLmljb24ge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTAwMmE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDkwLCAxNTMpO1xuICAgICAgICB9XG4gICAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzEsIDU4LCAxODApO1xuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhY2VlO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBpbmNsdWRlIHdyYXBwZXJXKDUwMHB4KSB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTI1JTtcbiAgICB9XG4gICAgQGluY2x1ZGUgd3JhcHBlclcoMTAwMHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG59IiwiQGltcG9ydCBcIi4vdmFyaWFibGVzXCI7XG5AbWl4aW4gd3JhcHBlcldIKCRhcmcuLi4pIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBudGgoJGxpc3Q6ICRhcmcsICRuOiAxKSkgYW5kIChtaW4taGVpZ2h0OiBudGgoJGxpc3Q6ICRhcmcsICRuOiAyKSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB3cmFwcGVyVygkYXJnLi4uKSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbnRoKCRsaXN0OiAkYXJnLCAkbjogMSkpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gY29tbW9uUGFnZVN0eWxpemVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICY6OmFmdGVyLFxuICAgICA6OmJlZm9yZSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG59XG5cbkBtaXhpbiB0ZXh0RGVjb3JhdGlvbiB7XG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIiRyZWRDb2xvcjogI2JiMWIzNjtcbiR0ZXh0Q29sb3I6ICNjNmRjZWI7XG4kZ3JleUNvbG9yOiAjOWQ5ZDlkO1xuJGNvbXBsZW1lbnRDb2xvcjogIzAzYmRhNzsiXX0= */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-contact]',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home-middle-buttons/home-middle-buttons.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/home/home-middle-buttons/home-middle-buttons.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <ul>\n        <li>\n            <a mat-button (click)=\"buttonEvent.emit(0); onClick(0,1,2)\" [class.active]=\"buttons[0]\" class=\"button\">\n                <mat-icon>new_releases</mat-icon>\n                news\n            </a>\n        </li>\n        <li>\n            <a mat-button (click)=\"buttonEvent.emit(1); onClick(1,0,2)\" [class.active]=\"buttons[1]\" class=\"button\">\n                <mat-icon>event</mat-icon>\n                schedule\n            </a>\n        </li>\n\n        <li>\n            <a mat-button (click)=\"buttonEvent.emit(2); onClick(2,0,1)\" [class.active]=\"buttons[2]\" class=\"button\">\n                <mat-icon>poll</mat-icon>\n                results\n            </a>\n        </li>\n        <li>\n            <a class=\"social-media\">\n                <a class=\"fab fa-facebook icon\" href=\"https://www.facebook.com/GloriaVictisTeam/\" target=\"_blank\"></a>\n                <a class=\"fab fa-instagram icon\" href=\"https://www.instagram.com/gloriavictis_esport/\" target=\"_blank\"></a>\n                <a class=\"fab fa-twitter icon\" href=\"https://twitter.com/EsportsGloria\" target=\"_blank\"></a>\n            </a>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home-middle-buttons/home-middle-buttons.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/home/home-middle-buttons/home-middle-buttons.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  /* Media screen */ }\n  .container ul {\n    margin-top: 2vh;\n    list-style-type: none;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 15px;\n    grid-row-gap: 15px; }\n  .container li {\n    width: 150px;\n    height: 30px; }\n  .container li:last-child {\n      width: 148px;\n      height: 28px; }\n  .container .button {\n    font-size: 50%;\n    text-transform: uppercase;\n    background-color: #6300e5;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border-radius: 4px;\n    letter-spacing: 5px;\n    color: white;\n    cursor: pointer;\n    transition: background-color .3s linear;\n    text-decoration: none; }\n  .container .button mat-icon {\n      color: white;\n      font-size: 1.5rem; }\n  .container .button:hover {\n      background-color: rgba(99, 0, 229, 0.8); }\n  .container .social-media {\n    background: transparent;\n    display: flex;\n    justify-content: space-evenly;\n    border: 1px solid #e5002a;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border-radius: 3px;\n    color: white;\n    transition: all .3s linear; }\n  .container .active {\n    background-color: #33c26c; }\n  .container .active:hover {\n      background-color: #33c26c; }\n  .container .icon {\n    cursor: pointer;\n    color: white;\n    transition: all .1s linear; }\n  .container .icon:hover:first-child {\n      color: #4f77ce; }\n  .container .icon:hover:nth-child(2) {\n      color: #e5002a; }\n  .container .icon:hover:last-child {\n      color: #00acee; }\n  @media screen and (min-width: 700px) {\n    .container .social-media {\n      border: 1px solid #6300e5; }\n    .container li {\n      width: 300px;\n      height: 50px; }\n      .container li:last-child {\n        width: 298px;\n        height: 48px; }\n    .container .icon {\n      font-size: 1.5rem;\n      color: white;\n      text-decoration: none; }\n    .container .button {\n      font-size: 75%;\n      justify-content: center; } }\n  @media screen and (min-width: 950px) {\n    .container .button {\n      font-size: 100%; } }\n  @media screen and (min-width: 1200px) {\n    .container ul {\n      grid-template-columns: repeat(4, 1fr);\n      grid-column-gap: 25px;\n      grid-row-gap: 0; }\n    .container .icon {\n      font-size: 1.5rem; }\n    .container li {\n      width: 250px;\n      height: 45px; }\n      .container li:last-child {\n        width: 248px;\n        height: 43px; }\n    .container .button {\n      font-size: 1rem; } }\n  @media screen and (min-width: 1500px) {\n    .container ul {\n      grid-column-gap: 70px; }\n    .container li {\n      width: 275px;\n      height: 50px; }\n      .container li:last-child {\n        width: 273px;\n        height: 48px; } }\n  @media screen and (min-width: 1800px) {\n    .container .button {\n      font-size: 0.8rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUtbWlkZGxlLWJ1dHRvbnMvSDpcXENTR09cXEdsb3JpYSBWaWN0aXNcXEdsb3JpYVZpY3Rpc19QYWdlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLW1pZGRsZS1idXR0b25zXFxob21lLW1pZGRsZS1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS1taWRkbGUtYnV0dG9ucy9IOlxcQ1NHT1xcR2xvcmlhIFZpY3Rpc1xcR2xvcmlhVmljdGlzX1BhZ2Uvc3JjXFxhcHBcXHNjc3NcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBMEV2QixpQkFBQSxFQUFrQjtFQTdFdEI7SUFLUSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFBO0VBVjFCO0lBYVEsWUFBWTtJQUNaLFlBQVksRUFBQTtFQWRwQjtNQWdCWSxZQUFZO01BQ1osWUFBWSxFQUFBO0VBakJ4QjtJQXFCUSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHlCQXhCUztJQXlCVCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZix1Q0FBdUM7SUFDdkMscUJBQXFCLEVBQUE7RUFsQzdCO01Bb0NZLFlBQVk7TUFDWixpQkFBaUIsRUFBQTtFQXJDN0I7TUF3Q1ksdUNBekNLLEVBQUE7RUFDakI7SUE0Q1EsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osMEJBQTBCLEVBQUE7RUFyRGxDO0lBd0RRLHlCQUF5QixFQUFBO0VBeERqQztNQTBEWSx5QkFBeUIsRUFBQTtFQTFEckM7SUE4RFEsZUFBZTtJQUNmLFlBQVk7SUFDWiwwQkFBMEIsRUFBQTtFQWhFbEM7TUFtRWdCLGNBQXdCLEVBQUE7RUFuRXhDO01Bc0VnQixjQUFjLEVBQUE7RUF0RTlCO01BeUVnQixjQUFjLEVBQUE7RUNwRTFCO0lETEo7TUFnRlkseUJBakZLLEVBQUE7SUFDakI7TUFtRlksWUFBWTtNQUNaLFlBQVksRUFBQTtNQXBGeEI7UUFzRmdCLFlBQVk7UUFDWixZQUFZLEVBQUE7SUF2RjVCO01BMkZZLGlCQUFpQjtNQUNqQixZQUFZO01BQ1oscUJBQXFCLEVBQUE7SUE3RmpDO01BZ0dZLGNBQWM7TUFDZCx1QkFBdUIsRUFBQSxFQUMxQjtFQzdGTDtJRExKO01Bc0dZLGVBQWUsRUFBQSxFQUNsQjtFQ2xHTDtJRExKO01BMkdZLHFDQUFxQztNQUNyQyxxQkFBcUI7TUFDckIsZUFBZSxFQUFBO0lBN0czQjtNQWdIWSxpQkFBaUIsRUFBQTtJQWhIN0I7TUFtSFksWUFBWTtNQUNaLFlBQVksRUFBQTtNQXBIeEI7UUFzSGdCLFlBQVk7UUFDWixZQUFZLEVBQUE7SUF2SDVCO01BMkhZLGVBQWUsRUFBQSxFQUNsQjtFQ3ZITDtJRExKO01BZ0lZLHFCQUFxQixFQUFBO0lBaElqQztNQW1JWSxZQUFZO01BQ1osWUFBWSxFQUFBO01BcEl4QjtRQXNJZ0IsWUFBWTtRQUNaLFlBQVksRUFBQSxFQUNmO0VDbklUO0lETEo7TUE2SVksaUJBQWlCLEVBQUEsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS1taWRkbGUtYnV0dG9ucy9ob21lLW1pZGRsZS1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcbiRiZ0NvbG9yOiAjNjMwMGU1O1xuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdWwge1xuICAgICAgICBtYXJnaW4tdG9wOiAydmg7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxNXB4O1xuICAgICAgICBncmlkLXJvdy1nYXA6IDE1cHg7XG4gICAgfVxuICAgIGxpIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICB3aWR0aDogMTQ4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTAlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdDb2xvcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBsaW5lYXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRiZ0NvbG9yLCAwLjgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zb2NpYWwtbWVkaWEge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNTAwMmE7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzM2MyNmM7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzYzI2YztcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaWNvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGxpbmVhcjtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDc5LCAxMTksIDIwNik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNlNTAwMmE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBhY2VlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qIE1lZGlhIHNjcmVlbiAqL1xuICAgIEBpbmNsdWRlIHdyYXBwZXJXKDcwMHB4KSB7XG4gICAgICAgIC5zb2NpYWwtbWVkaWEge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJnQ29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjk4cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiA3NSU7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAaW5jbHVkZSB3cmFwcGVyVyg5NTBweCkge1xuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAaW5jbHVkZSB3cmFwcGVyVygxMjAwcHgpIHtcbiAgICAgICAgdWwge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMjVweDtcbiAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMDtcbiAgICAgICAgfVxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBsaSB7XG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNDhweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGluY2x1ZGUgd3JhcHBlclcoMTUwMHB4KSB7XG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogNzBweDtcbiAgICAgICAgfVxuICAgICAgICBsaSB7XG4gICAgICAgICAgICB3aWR0aDogMjc1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNzNweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGluY2x1ZGUgd3JhcHBlclcoMTgwMHB4KSB7XG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cbiAgICB9XG59IiwiQGltcG9ydCBcIi4vdmFyaWFibGVzXCI7XG5AbWl4aW4gd3JhcHBlcldIKCRhcmcuLi4pIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBudGgoJGxpc3Q6ICRhcmcsICRuOiAxKSkgYW5kIChtaW4taGVpZ2h0OiBudGgoJGxpc3Q6ICRhcmcsICRuOiAyKSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB3cmFwcGVyVygkYXJnLi4uKSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbnRoKCRsaXN0OiAkYXJnLCAkbjogMSkpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gY29tbW9uUGFnZVN0eWxpemVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICY6OmFmdGVyLFxuICAgICA6OmJlZm9yZSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG59XG5cbkBtaXhpbiB0ZXh0RGVjb3JhdGlvbiB7XG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home-middle-buttons/home-middle-buttons.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/home/home-middle-buttons/home-middle-buttons.component.ts ***!
  \**************************************************************************************/
/*! exports provided: HomeMiddleButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMiddleButtonsComponent", function() { return HomeMiddleButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var HomeMiddleButtonsComponent = /** @class */ (function () {
    function HomeMiddleButtonsComponent() {
        this.buttonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.buttons = [true, false, false];
    }
    HomeMiddleButtonsComponent.prototype.ngOnInit = function () {
    };
    HomeMiddleButtonsComponent.prototype.onClick = function (index1, index2, index3) {
        this.buttons[index1] = true;
        this.buttons[index2] = false;
        this.buttons[index3] = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("buttonEvent"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomeMiddleButtonsComponent.prototype, "buttonEvent", void 0);
    HomeMiddleButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-home-middle-buttons]',
            template: __webpack_require__(/*! ./home-middle-buttons.component.html */ "./src/app/components/home/home-middle-buttons/home-middle-buttons.component.html"),
            styles: [__webpack_require__(/*! ./home-middle-buttons.component.scss */ "./src/app/components/home/home-middle-buttons/home-middle-buttons.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeMiddleButtonsComponent);
    return HomeMiddleButtonsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\n    <div class=\"logo\"><img src=\"../../../assets/home/logo_gora.png\" alt=\"logo_gora\"></div>\n    <div app-nav> </div>\n    <div class=\"content\">\n        <div app-home-middle-buttons (buttonEvent)=\"cardChange($event)\"></div>\n        <div *ngIf=\"cardNumber == 0\" app-news></div>\n        <div *ngIf=\"cardNumber == 1\" app-schedule></div>\n        <div *ngIf=\"cardNumber == 2\" app-results></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home {\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background: url('background.png') no-repeat center center fixed;\n  background-size: cover; }\n\n.content {\n  display: flex;\n  align-items: center;\n  flex-flow: row column;\n  flex-direction: column; }\n\n.logo {\n  width: 100vw;\n  display: flex;\n  justify-content: center; }\n\n.logo img {\n    width: 100px;\n    height: 100px; }\n\n.logo img:hover {\n      cursor: pointer; }\n\n/* Media screen */\n\n@media screen and (min-width: 700px) {\n  .content {\n    height: 80vh;\n    justify-content: left; }\n  .logo img {\n    width: 150px;\n    height: 150px; } }\n\n@media screen and (min-width: 1200px) {\n  .content {\n    height: 80vh;\n    justify-content: left; }\n  .logo {\n    justify-content: flex-start;\n    margin-left: 2%; }\n    .logo img {\n      width: 200px;\n      height: 200px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0g6XFxDU0dPXFxHbG9yaWEgVmljdGlzXFxHbG9yaWFWaWN0aXNfUGFnZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0g6XFxDU0dPXFxHbG9yaWEgVmljdGlzXFxHbG9yaWFWaWN0aXNfUGFnZS9zcmNcXGFwcFxcc2Nzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwrREFBK0Y7RUFJL0Ysc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFIM0I7SUFLUSxZQUFZO0lBQ1osYUFBYSxFQUFBOztBQU5yQjtNQVFZLGVBQWUsRUFBQTs7QUFNM0IsaUJBQUE7O0FDNUJJO0VEK0JBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQixFQUFBO0VBRXpCO0lBQ0ksWUFBWTtJQUNaLGFBQWEsRUFBQSxFQUNoQjs7QUN0Q0Q7RUQwQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCLEVBQUE7RUFFekI7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZSxFQUFBO0lBRm5CO01BSVEsWUFBWTtNQUNaLGFBQWEsRUFBQSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwiLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcbiNob21lIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3RlYW0vYmFja2dyb3VuZC9iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZmxvdzogcm93IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubG9nbyB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKiBNZWRpYSBzY3JlZW4gKi9cblxuQGluY2x1ZGUgd3JhcHBlclcoNzAwcHgpIHtcbiAgICAuY29udGVudCB7XG4gICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIH1cbiAgICAubG9nbyBpbWcge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgfVxufVxuXG5AaW5jbHVkZSB3cmFwcGVyVygxMjAwcHgpIHtcbiAgICAuY29udGVudCB7XG4gICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIH1cbiAgICAubG9nbyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJAaW1wb3J0IFwiLi92YXJpYWJsZXNcIjtcbkBtaXhpbiB3cmFwcGVyV0goJGFyZy4uLikge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG50aCgkbGlzdDogJGFyZywgJG46IDEpKSBhbmQgKG1pbi1oZWlnaHQ6IG50aCgkbGlzdDogJGFyZywgJG46IDIpKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHdyYXBwZXJXKCRhcmcuLi4pIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBudGgoJGxpc3Q6ICRhcmcsICRuOiAxKSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb21tb25QYWdlU3R5bGl6ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgJjo6YWZ0ZXIsXG4gICAgIDo6YmVmb3JlIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbn1cblxuQG1peGluIHRleHREZWNvcmF0aW9uIHtcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

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
        this.cardNumber = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.cardChange = function (n) {
        this.cardNumber = n;
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

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n<div class=\"container\">\n    <div class=\"menu\" (click)=\"expandList()\">\n        <div class=\"hamburger\" [class.hamburgerAnimation]=\"isMenuClicked\"></div>\n        menu\n    </div>\n    <nav class=\"navigation\" [class.activated]=\"isMenuClicked\" [class.disactivated]=\"!isMenuClicked\">\n        <ul>\n            <li>\n                <a mat-flat-button href=\"#home\">\n                    <mat-icon>home</mat-icon>\n                    home\n                </a>\n            </li>\n            <li>\n                <a mat-flat-button href=\"#team\">\n                    <mat-icon>supervisor_account</mat-icon>\n                    team\n                </a>\n            </li>\n            <li>\n                <a mat-flat-button href=\"#shop\">\n                    <mat-icon>shopping_cart</mat-icon>\n                    shop\n                </a>\n            </li>\n            <li>\n                <a mat-flat-button href=\"#contact\">\n                    <mat-icon>forum</mat-icon>\n                    contact\n                </a>\n            </li>\n        </ul>\n    </nav>\n</div>"

/***/ }),

/***/ "./src/app/components/home/nav/nav.component.scss":
/*!********************************************************!*\
  !*** ./src/app/components/home/nav/nav.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  color: #c6dceb;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: bold; }\n  *::after,\n  * ::before {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box; }\n  .navigation {\n  margin-left: 3vw; }\n  .menu {\n  display: flex;\n  width: 100vw;\n  font-family: 'Catamaran', sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 1vw;\n  color: white;\n  cursor: pointer;\n  font-size: 35px;\n  border-top: 0.3vw solid white;\n  justify-content: center;\n  border-radius: 2px; }\n  .hamburger {\n  width: 35px;\n  border: 0;\n  border-top: 3px solid #e5002a;\n  background: transparent;\n  position: relative;\n  top: 10px;\n  right: 20px;\n  transition: .3s transform linear; }\n  .hamburger::before, .hamburger::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    border-top: 3px solid #e5002a;\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n  .hamburger::after {\n    -webkit-transform: translateY(23px);\n            transform: translateY(23px);\n    transition: .3s transform linear; }\n  .hamburgerAnimation {\n  -webkit-transform: rotate(45deg) translateY(-3px);\n          transform: rotate(45deg) translateY(-3px);\n  border: none; }\n  .hamburgerAnimation::after {\n    -webkit-transform: rotate(-90deg) translateX(-10px);\n            transform: rotate(-90deg) translateX(-10px);\n    border-top: 5px solid #41d341; }\n  .hamburgerAnimation::before {\n    border-top: 5px solid #41d341; }\n  .activated {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n  .disactivated {\n  display: none; }\n  @media screen and (min-width: 700px) {\n    .disactivated {\n      display: block; } }\n  ul {\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  width: 100vw; }\n  li {\n  width: 35%;\n  min-width: 140px; }\n  li:not(:last-child) {\n    margin-bottom: 1%; }\n  a {\n  text-transform: uppercase;\n  background-color: #e5002a;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  letter-spacing: 5px;\n  font-weight: bold;\n  width: 100%;\n  height: 100%;\n  border-radius: 3px;\n  color: white;\n  cursor: pointer;\n  text-align: left;\n  -webkit-animation: onLoadAnimation .3s ease-in-out;\n          animation: onLoadAnimation .3s ease-in-out;\n  text-decoration: none;\n  transition: all .3s linear;\n  font-size: 70%; }\n  a mat-icon {\n    color: white;\n    font-size: 1.5rem;\n    margin-bottom: 1%; }\n  a:hover {\n    background-color: rgba(229, 0, 42, 0.8); }\n  /* Keyframes */\n  @-webkit-keyframes onLoadAnimation {\n  0% {\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1; } }\n  @keyframes onLoadAnimation {\n  0% {\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1; } }\n  /* Media screen */\n  @media screen and (min-width: 700px) {\n  .navigation {\n    margin: 0;\n    display: block; }\n  .menu {\n    display: none; }\n  ul {\n    flex-direction: row; }\n  li {\n    width: 25%;\n    height: 40px; }\n    li:not(:last-child) {\n      margin-bottom: 0; }\n  a {\n    font-size: 75%;\n    justify-content: center;\n    -webkit-animation: none;\n            animation: none;\n    border-radius: 0; } }\n  @media screen and (min-width: 1200px) {\n  .navigation {\n    z-index: 1;\n    position: fixed;\n    top: 50px;\n    right: 100px; }\n  ul {\n    width: 700px; }\n  a {\n    font-size: 0.8rem; }\n  li {\n    height: 40px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL25hdi9IOlxcQ1NHT1xcR2xvcmlhIFZpY3Rpc1xcR2xvcmlhVmljdGlzX1BhZ2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvbmF2L0g6XFxDU0dPXFxHbG9yaWEgVmljdGlzXFxHbG9yaWFWaWN0aXNfUGFnZS9zcmNcXGFwcFxcc2Nzc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvbmF2L0g6XFxDU0dPXFxHbG9yaWEgVmljdGlzXFxHbG9yaWFWaWN0aXNfUGFnZS9zcmNcXGFwcFxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDWUksVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFVdEIsY0N6QmU7RUQwQmYsb0NBQW9DO0VBQ3BDLGlCQUFpQixFQUFBO0VEMUJyQjs7SUNpQlEsVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0IsRUFBQTtFRGQ5QjtFQUNJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksV0FBVztFQUNYLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGdDQUFnQyxFQUFBO0VBUnBDO0lBV1EsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBO0VBakJuQztJQW9CUSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGdDQUFnQyxFQUFBO0VBSXhDO0VBQ0ksaURBQXlDO1VBQXpDLHlDQUF5QztFQUN6QyxZQUFZLEVBQUE7RUFGaEI7SUFJUSxtREFBMkM7WUFBM0MsMkNBQTJDO0lBQzNDLDZCQUFzQyxFQUFBO0VBTDlDO0lBUVEsNkJBQXNDLEVBQUE7RUFJOUM7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFBO0VBRzNCO0VBQ0ksYUFBYSxFQUFBO0VDN0RiO0lENERKO01BR1EsY0FBYyxFQUFBLEVBRXJCO0VBRUQ7RUFDSSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7RUFHaEI7RUFDSSxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7RUFGcEI7SUFJUSxpQkFBaUIsRUFBQTtFQUl6QjtFQUNJLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrREFBMEM7VUFBMUMsMENBQTBDO0VBQzFDLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsY0FBYyxFQUFBO0VBakJsQjtJQW1CUSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBO0VBckJ6QjtJQXdCUSx1Q0FBOEIsRUFBQTtFQUt0QyxjQUFBO0VBRUE7RUFDSTtJQUNJLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsVUFBVSxFQUFBO0VBRWQ7SUFDSSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLFVBQVUsRUFBQSxFQUFBO0VBUGxCO0VBQ0k7SUFDSSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLFVBQVUsRUFBQTtFQUVkO0lBQ0ksZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixVQUFVLEVBQUEsRUFBQTtFQUtsQixpQkFBQTtFQzdISTtFRGdJQTtJQUNJLFNBQVM7SUFDVCxjQUFjLEVBQUE7RUFFbEI7SUFDSSxhQUFhLEVBQUE7RUFFakI7SUFDSSxtQkFBbUIsRUFBQTtFQUV2QjtJQUNJLFVBQVU7SUFDVixZQUFZLEVBQUE7SUFGaEI7TUFJUSxnQkFBZ0IsRUFBQTtFQUd4QjtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsdUJBQWU7WUFBZixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUEsRUFDbkI7RUN0SkQ7RUQwSkE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFNBQVM7SUFDVCxZQUFZLEVBQUE7RUFFaEI7SUFDSSxZQUFZLEVBQUE7RUFFaEI7SUFDSSxpQkFBaUIsRUFBQTtFQUVyQjtJQUNJLFlBQVksRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuKiB7XG4gICAgQGluY2x1ZGUgY29tbW9uUGFnZVN0eWxpemVyO1xuICAgIEBpbmNsdWRlIHRleHREZWNvcmF0aW9uO1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDN2dztcbn1cblxuLm1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F0YW1hcmFuJywgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxdnc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgYm9yZGVyLXRvcDogMC4zdncgc29saWQgd2hpdGU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uaGFtYnVyZ2VyIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNlNTAwMmE7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMjBweDtcbiAgICB0cmFuc2l0aW9uOiAuM3MgdHJhbnNmb3JtIGxpbmVhcjtcbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2U1MDAyYTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIH1cbiAgICAmOjphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyM3B4KTtcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzIHRyYW5zZm9ybSBsaW5lYXI7XG4gICAgfVxufVxuXG4uaGFtYnVyZ2VyQW5pbWF0aW9uIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWSgtM3B4KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVgoLTEwcHgpO1xuICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQgcmdiKDY1LCAyMTEsIDY1KTtcbiAgICB9XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYig2NSwgMjExLCA2NSk7XG4gICAgfVxufVxuXG4uYWN0aXZhdGVkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaXNhY3RpdmF0ZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgQGluY2x1ZGUgd3JhcHBlclcoNzAwcHgpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG51bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG5saSB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBtaW4td2lkdGg6IDE0MHB4O1xuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDElO1xuICAgIH1cbn1cblxuYSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUwMDJhO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBhbmltYXRpb246IG9uTG9hZEFuaW1hdGlvbiAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xuICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgIG1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMSU7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNlNTAwMmEsIDAuOCk7XG4gICAgfVxufVxuXG5cbi8qIEtleWZyYW1lcyAqL1xuXG5Aa2V5ZnJhbWVzIG9uTG9hZEFuaW1hdGlvbiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuXG4vKiBNZWRpYSBzY3JlZW4gKi9cblxuQGluY2x1ZGUgd3JhcHBlclcoNzAwcHgpIHtcbiAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5tZW51IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgdWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbiAgICBsaSB7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNzUlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYW5pbWF0aW9uOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbn1cblxuQGluY2x1ZGUgd3JhcHBlclcoMTIwMHB4KSB7XG4gICAgLm5hdmlnYXRpb24ge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgcmlnaHQ6IDEwMHB4O1xuICAgIH1cbiAgICB1bCB7XG4gICAgICAgIHdpZHRoOiA3MDBweDtcbiAgICB9XG4gICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cbiAgICBsaSB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG59IiwiQGltcG9ydCBcIi4vdmFyaWFibGVzXCI7XG5AbWl4aW4gd3JhcHBlcldIKCRhcmcuLi4pIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBudGgoJGxpc3Q6ICRhcmcsICRuOiAxKSkgYW5kIChtaW4taGVpZ2h0OiBudGgoJGxpc3Q6ICRhcmcsICRuOiAyKSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB3cmFwcGVyVygkYXJnLi4uKSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbnRoKCRsaXN0OiAkYXJnLCAkbjogMSkpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gY29tbW9uUGFnZVN0eWxpemVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICY6OmFmdGVyLFxuICAgICA6OmJlZm9yZSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG59XG5cbkBtaXhpbiB0ZXh0RGVjb3JhdGlvbiB7XG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIiRyZWRDb2xvcjogI2JiMWIzNjtcbiR0ZXh0Q29sb3I6ICNjNmRjZWI7XG4kZ3JleUNvbG9yOiAjOWQ5ZDlkO1xuJGNvbXBsZW1lbnRDb2xvcjogIzAzYmRhNzsiXX0= */"

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
        this.is_a_clicked = false;
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

module.exports = "<ul class=\"container\" @listAnimation>\n    <li *ngFor=\"let tempNews of news\" [ngStyle]=\"{'background-image': 'url('+ tempNews.path +')'}\" [ngClass]=\"'square'+ tempNews.id\" class=\"news\">\n        <a href={{tempNews.href}} target=\"_blank\" rel=\"nofollow\n        noreferrer\n        noopener\">\n        {{tempNews.desc}}\n        </a>\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/home/news/news.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/home/news/news.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box; }\n  *::after,\n  * ::before {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box; }\n  .container {\n  margin-top: 20px;\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n  max-width: none; }\n  li {\n  box-shadow: 5px 5px 30px 0 rgba(255, 255, 255, 0.1);\n  align-self: center;\n  width: 275px;\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  cursor: pointer;\n  transition: all .2s ease-in; }\n  li:hover a {\n    height: 100%;\n    border: solid 1px red; }\n  .news {\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  display: none; }\n  a {\n  background-color: rgba(0, 0, 0, 0.6);\n  width: 100%;\n  height: 30%;\n  border-bottom: solid 1px red;\n  font-size: 15px;\n  transition: all .2s ease-in;\n  color: white;\n  letter-spacing: 2px;\n  display: flex;\n  text-decoration: none;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-family: 'Catamaran', sans-serif; }\n  /* Media screen */\n  /* phones */\n  @media screen and (min-width: 0px) {\n  .square1 {\n    display: flex; }\n  .square2 {\n    display: flex; } }\n  @media screen and (min-width: 0px) and (min-height: 770px) and (max-width: 700px) {\n  .square3 {\n    display: flex; } }\n  /* tablets */\n  @media screen and (min-width: 700px) {\n  .container {\n    margin: 0;\n    grid-template-columns: repeat(2, 1fr); }\n  a {\n    font-size: 20px; } }\n  @media screen and (min-width: 700px) and (min-height: 750px) {\n  .square3 {\n    display: flex; }\n  .square4 {\n    display: flex; } }\n  @media screen and (min-width: 700px) and (min-height: 1050px) {\n  .container {\n    grid-column-gap: 50px;\n    grid-row-gap: 50px; }\n  .square5,\n  .square6 {\n    display: flex; } }\n  @media screen and (min-width: 700px) and (max-width: 1300px) {\n  li {\n    max-width: none;\n    max-height: none;\n    width: 350px;\n    height: 200px; } }\n  /* PC */\n  @media screen and (min-width: 1200px) {\n  .container {\n    grid-column-gap: 40px;\n    grid-row-gap: 40px;\n    grid-template-columns: repeat(3, 1fr);\n    margin-top: 50px; }\n  li {\n    max-width: none;\n    max-height: none;\n    width: 350px;\n    height: 200px; }\n  .square3 {\n    display: flex;\n    grid-column: 3;\n    grid-row: 1; }\n  .square4 {\n    grid-column: 1; }\n  .square6 {\n    display: none; } }\n  @media screen and (min-width: 1200px) and (min-height: 750px) {\n  .square3 {\n    display: flex;\n    grid-column: 2;\n    grid-row: 2; }\n  .square5 {\n    display: flex;\n    grid-row-start: 1;\n    grid-row-end: 3;\n    grid-column: 3;\n    width: 350px;\n    height: 440px;\n    background-size: cover; }\n    .square5 a {\n      height: calc(15%); } }\n  @media screen and (min-width: 1200px) and (min-height: 1400px) {\n  li {\n    max-width: none;\n    max-height: none;\n    width: 420px;\n    height: 220px; }\n  .square5 {\n    width: 420px;\n    height: 480px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL25ld3MvSDpcXENTR09cXEdsb3JpYSBWaWN0aXNcXEdsb3JpYVZpY3Rpc19QYWdlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxuZXdzXFxuZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvbmV3cy9IOlxcQ1NHT1xcR2xvcmlhIFZpY3Rpc1xcR2xvcmlhVmljdGlzX1BhZ2Uvc3JjXFxhcHBcXHNjc3NcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQ1lJLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCLEVBQUE7RURkMUI7O0lDaUJRLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCLEVBQUE7RURmOUI7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7RUFHbkI7RUFDSSxtREFBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDJCQUEyQixFQUFBO0VBVC9CO0lBWVksWUFBWTtJQUNaLHFCQUFxQixFQUFBO0VBS2pDO0VBQ0ksMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixhQUFhLEVBQUE7RUFHakI7RUFDSSxvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0NBQW9DLEVBQUE7RUFJeEMsaUJBQUE7RUFHQSxXQUFBO0VBRUE7RUFDSTtJQUNJLGFBQWEsRUFBQTtFQUVqQjtJQUNJLGFBQWEsRUFBQSxFQUNoQjtFQUNEO0VBQ0k7SUFDSSxhQUFhLEVBQUEsRUFDaEI7RUFLVCxZQUFBO0VBRUE7RUFDSTtJQUNJLFNBQVM7SUFDVCxxQ0FBcUMsRUFBQTtFQUV6QztJQUNJLGVBQWUsRUFBQSxFQUNsQjtFQUNEO0VBQ0k7SUFDSSxhQUFhLEVBQUE7RUFFakI7SUFDSSxhQUFhLEVBQUEsRUFDaEI7RUFFTDtFQUNJO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFBO0VBRXRCOztJQUVJLGFBQWEsRUFBQSxFQUNoQjtFQUVMO0VBQ0k7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhLEVBQUEsRUFDaEI7RUFLVCxPQUFBO0VBRUE7RUFDSTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLGdCQUFnQixFQUFBO0VBRXBCO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYSxFQUFBO0VBRWpCO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxXQUFXLEVBQUE7RUFFZjtJQUNJLGNBQWMsRUFBQTtFQUVsQjtJQUNJLGFBQWEsRUFBQSxFQUNoQjtFQUNEO0VBQ0k7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLFdBQVcsRUFBQTtFQUVmO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWixhQUF3QjtJQUN4QixzQkFBc0IsRUFBQTtJQVAxQjtNQVNRLGlCQUFpQixFQUFBLEVBQ3BCO0VBR1Q7RUFDSTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQUVqQjtJQUNJLFlBQVk7SUFDWixhQUF3QixFQUFBLEVBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XG4qIHtcbiAgICBAaW5jbHVkZSBjb21tb25QYWdlU3R5bGl6ZXI7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xuICAgIGdyaWQtcm93LWdhcDogMjBweDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG59XG5cbmxpIHtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDMwcHggMCByZ2JhKHdoaXRlLCAwLjEpO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogMjc1cHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluO1xuICAgICY6aG92ZXIge1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJlZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm5ld3Mge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuNik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJlZDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F0YW1hcmFuJywgc2Fucy1zZXJpZjtcbn1cblxuXG4vKiBNZWRpYSBzY3JlZW4gKi9cblxuXG4vKiBwaG9uZXMgKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSB7XG4gICAgLnNxdWFyZTEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuc3F1YXJlMiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA3NzBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIC5zcXVhcmUzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyogdGFibGV0cyAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgfVxuICAgIGEge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA3NTBweCkge1xuICAgICAgICAuc3F1YXJlMyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5zcXVhcmU0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDEwNTBweCkge1xuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogNTBweDtcbiAgICAgICAgICAgIGdyaWQtcm93LWdhcDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuc3F1YXJlNSxcbiAgICAgICAgLnNxdWFyZTYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyogUEMgKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogNDBweDtcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiA0MHB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cbiAgICBsaSB7XG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgbWF4LWhlaWdodDogbm9uZTtcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgICAuc3F1YXJlMyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdyaWQtY29sdW1uOiAzO1xuICAgICAgICBncmlkLXJvdzogMTtcbiAgICB9XG4gICAgLnNxdWFyZTQge1xuICAgICAgICBncmlkLWNvbHVtbjogMTtcbiAgICB9XG4gICAgLnNxdWFyZTYge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNzUwcHgpIHtcbiAgICAgICAgLnNxdWFyZTMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XG4gICAgICAgIH1cbiAgICAgICAgLnNxdWFyZTUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDM7XG4gICAgICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4ICogMiArIDQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDE1JSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMTQwMHB4KSB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogNDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zcXVhcmU1IHtcbiAgICAgICAgICAgIHdpZHRoOiA0MjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjIwcHggKiAyICsgNDBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJAaW1wb3J0IFwiLi92YXJpYWJsZXNcIjtcbkBtaXhpbiB3cmFwcGVyV0goJGFyZy4uLikge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG50aCgkbGlzdDogJGFyZywgJG46IDEpKSBhbmQgKG1pbi1oZWlnaHQ6IG50aCgkbGlzdDogJGFyZywgJG46IDIpKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHdyYXBwZXJXKCRhcmcuLi4pIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBudGgoJGxpc3Q6ICRhcmcsICRuOiAxKSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb21tb25QYWdlU3R5bGl6ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgJjo6YWZ0ZXIsXG4gICAgIDo6YmVmb3JlIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbn1cblxuQG1peGluIHRleHREZWNvcmF0aW9uIHtcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
        this.news = [
            {
                desc: "A little break in our organization",
                path: "../../../../assets/home/news/news1.jpg",
                href: "https://www.facebook.com/pg/GloriaVictisTeam/posts/?ref=page_internal",
                id: "1"
            },
            {
                desc: "We achieve 3rd place on LAN",
                path: "../../../../assets/home/news/news2.jpg",
                href: "https://www.facebook.com/GloriaVictisTeam/photos/pcb.1237525636412705/1237517649746837/?type=3&theater",
                id: "2"
            },
            {
                desc: "1000 fanpage likes!",
                path: "../../../../assets/home/news/news3.jpg",
                href: "https://www.facebook.com/GloriaVictisTeam/photos/a.505958669569409/1225431974288738/?type=3&theater",
                id: "3"
            },
            {
                desc: "Our coach graphic",
                path: "../../../../assets/home/news/news4.jpg",
                href: "https://www.facebook.com/GloriaVictisTeam/photos/a.505958669569409/1221536838011585/?type=3&theater",
                id: "4"
            },
            {
                desc: "We participate in II season EzLeague.pl",
                path: "../../../../assets/home/news/news5.jpg",
                href: "https://www.facebook.com/ezleaguepl/photos/a.289815221708868/319044945452562/?type=3&theater",
                id: "5"
            },
            {
                desc: "We won the Clutch It League tournament",
                path: "../../../../assets/home/news/news6.jpg",
                href: "https://www.facebook.com/GloriaVictisTeam/photos/a.505958669569409/1208358295996106/?type=3&theater",
                id: "6"
            },
        ];
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-news]',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/components/home/news/news.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('75ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.75s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(-75px)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'scale3d(1.10, 1.10, 1.10)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale3d(0.95, 0.95, 0.95)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'scale3d(1, 1, 1' }),
                            ]))
                        ]))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/components/home/news/news.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/results/results.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/home/results/results.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"container\" @listAnimation>\n    <li *ngFor=\"let result of results; let i = index\" [ngStyle]=\"{'background-image': 'url('+ result.path +')'}\" [ngClass]=\"'square'+ result.id\" class=\"news\">\n        <a mat-button class=\"button\" (click)=\"onClick(i)\">\n            <a *ngIf=\"result.isClicked; else elseBlock\">less info</a>\n            <ng-template #elseBlock>more info</ng-template>\n        </a>\n        <span class=\"content\" [class.activated]=\"result.isClicked\" [class.disactivated]=\"!result.isClicked\"><a *ngIf=\"result.isClicked\">{{result.info}}</a></span>\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/home/results/results.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/home/results/results.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 20px;\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n  max-width: none; }\n\nli {\n  box-shadow: 5px 5px 30px 0 rgba(255, 255, 255, 0.1);\n  align-self: center;\n  width: 275px;\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  transition: all .2s ease-in; }\n\n.button {\n  outline: none;\n  font-size: 50%;\n  width: 30%;\n  height: 15%;\n  background-color: #e5002a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 25px;\n  letter-spacing: 3px;\n  color: white;\n  margin: 0 !important;\n  font-family: 'Catamaran', sans-serif;\n  cursor: pointer;\n  transition: background-color .3s linear;\n  text-decoration: none; }\n\n.button:hover {\n    background-color: rgba(229, 0, 42, 0.8); }\n\n.news {\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  justify-content: flex-end;\n  align-items: center;\n  flex-direction: column;\n  display: none; }\n\n.activated {\n  width: 100%;\n  height: 100%;\n  border: solid 1px red;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.9);\n  transition: all .4s;\n  color: white; }\n\n.disactivated {\n  width: 100%;\n  height: 10%;\n  border-bottom: solid 1px red;\n  transition: all .4s; }\n\n/* Media screen */\n\n/* phones */\n\n@media screen and (min-width: 0px) {\n  .square1 {\n    display: flex; }\n  .square2 {\n    display: flex; } }\n\n@media screen and (min-width: 0px) and (min-height: 770px) and (max-width: 700px) {\n  .square3 {\n    display: flex; } }\n\n/* tablets */\n\n@media screen and (min-width: 700px) {\n  .button {\n    margin-bottom: 5%;\n    font-size: 75%;\n    height: 15%; }\n  .container {\n    margin: 0;\n    grid-template-columns: repeat(2, 1fr); } }\n\n@media screen and (min-width: 700px) and (min-height: 818px) {\n  .square3,\n  .square4 {\n    display: flex; } }\n\n@media screen and (min-width: 700px) and (min-height: 1050px) {\n  .container {\n    grid-column-gap: 50px;\n    grid-row-gap: 50px; }\n  .square5,\n  .square6 {\n    display: flex; } }\n\n@media screen and (min-width: 700px) and (max-width: 1300px) {\n  .container {\n    margin-top: 50px; }\n  li {\n    max-width: none;\n    max-height: none;\n    width: 350px;\n    height: 200px; } }\n\n/* PC */\n\n@media screen and (min-width: 1200px) {\n  .container {\n    grid-column-gap: 40px;\n    grid-row-gap: 40px;\n    grid-template-columns: repeat(3, 1fr);\n    margin-top: 50px; }\n  li {\n    max-width: none;\n    max-height: none;\n    width: 375px;\n    height: 200px; }\n  .square5 {\n    display: flex; } }\n\n@media screen and (min-width: 1200px) and (min-height: 750px) {\n  .square6 {\n    display: flex; } }\n\n@media screen and (min-width: 1200px) and (min-height: 1400px) {\n  li {\n    max-width: none;\n    max-height: none;\n    width: 420px;\n    height: 220px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3Jlc3VsdHMvSDpcXENTR09cXEdsb3JpYSBWaWN0aXNcXEdsb3JpYVZpY3Rpc19QYWdlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxyZXN1bHRzXFxyZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLG1EQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxhQUFhO0VBQ2IsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLHVDQUF1QztFQUN2QyxxQkFBcUIsRUFBQTs7QUFoQnpCO0lBa0JRLHVDQUE4QixFQUFBOztBQUl0QztFQUNJLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixtQkFBbUIsRUFBQTs7QUFJdkIsaUJBQUE7O0FBR0EsV0FBQTs7QUFFQTtFQUNJO0lBQ0ksYUFBYSxFQUFBO0VBRWpCO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCOztBQUNEO0VBQ0k7SUFDSSxhQUFhLEVBQUEsRUFDaEI7O0FBS1QsWUFBQTs7QUFFQTtFQUNJO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXLEVBQUE7RUFFZjtJQUNJLFNBQVM7SUFDVCxxQ0FBcUMsRUFBQSxFQUN4Qzs7QUFDRDtFQUNJOztJQUVJLGFBQWEsRUFBQSxFQUNoQjs7QUFFTDtFQUNJO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFBO0VBRXRCOztJQUVJLGFBQWEsRUFBQSxFQUNoQjs7QUFFTDtFQUNJO0lBQ0ksZ0JBQWdCLEVBQUE7RUFFcEI7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhLEVBQUEsRUFDaEI7O0FBS1QsT0FBQTs7QUFFQTtFQUNJO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsZ0JBQWdCLEVBQUE7RUFFcEI7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhLEVBQUE7RUFFakI7SUFDSSxhQUFhLEVBQUEsRUFDaEI7O0FBQ0Q7RUFDSTtJQUNJLGFBQWEsRUFBQSxFQUNoQjs7QUFFTDtFQUNJO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYSxFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XG4uY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMjBweDtcbiAgICBncmlkLXJvdy1nYXA6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiBub25lO1xufVxuXG5saSB7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAzMHB4IDAgcmdiYSh3aGl0ZSwgMC4xKTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDI3NXB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluO1xufVxuXG4uYnV0dG9uIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtc2l6ZTogNTAlO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiAxNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MDAyYTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ0NhdGFtYXJhbicsIHNhbnMtc2VyaWY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzIGxpbmVhcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2U1MDAyYSwgMC44KTtcbiAgICB9XG59XG5cbi5uZXdzIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hY3RpdmF0ZWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogYmxhY2ssICRhbHBoYTogMC45KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRpc2FjdGl2YXRlZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJlZDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xufVxuXG5cbi8qIE1lZGlhIHNjcmVlbiAqL1xuXG5cbi8qIHBob25lcyAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIHtcbiAgICAuc3F1YXJlMSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5zcXVhcmUyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDc3MHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgLnNxdWFyZTMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKiB0YWJsZXRzICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgLmJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgICAgICBmb250LXNpemU6IDc1JTtcbiAgICAgICAgaGVpZ2h0OiAxNSU7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA4MThweCkge1xuICAgICAgICAuc3F1YXJlMyxcbiAgICAgICAgLnNxdWFyZTQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMTA1MHB4KSB7XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiA1MHB4O1xuICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zcXVhcmU1LFxuICAgICAgICAuc3F1YXJlNiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyogUEMgKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogNDBweDtcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiA0MHB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cbiAgICBsaSB7XG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgbWF4LWhlaWdodDogbm9uZTtcbiAgICAgICAgd2lkdGg6IDM3NXB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgICAuc3F1YXJlNSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA3NTBweCkge1xuICAgICAgICAuc3F1YXJlNiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAxNDAwcHgpIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiA0MjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/results/results.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/home/results/results.component.ts ***!
  \**************************************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var ResultsComponent = /** @class */ (function () {
    function ResultsComponent() {
        this.results = [
            {
                id: '1',
                info: "We lost a first map against ex-superious gamig in the Elovego Esports Cup tournament",
                path: "../../../../assets/home/results/result1.png",
                isClicked: false
            },
            {
                id: '2',
                info: "Now we won the second map against ex-superious gamig and we have 1:1 map-score during the Elovego Esports Cup tournament",
                path: "../../../../assets/home/results/result2.png",
                isClicked: false
            },
            {
                id: "3",
                info: "The second win in EzLeague tournament, opponent time ended. ^^",
                path: "../../../../assets/home/results/result3.png",
                isClicked: false
            },
            {
                id: '4',
                info: "Close to lose, but fortunelly we'd won. Now it's time for the next stage in Elovego Esports Cup!",
                path: "../../../../assets/home/results/result4.png",
                isClicked: false
            },
            {
                id: '5',
                info: "We weren't scared about strong opponent, so we got the certain win against Pompa Team!",
                path: "../../../../assets/home/results/result5.png",
                isClicked: false
            },
            {
                id: '6',
                info: "The Night Clan did play good, but not enough to win with our strong team. Isn't it a good start in EzLeague tournament season II? :)",
                path: "../../../../assets/home/results/result6.png",
                isClicked: false
            }
        ];
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent.prototype.onClick = function (index) {
        var _this = this;
        this.results.forEach(function (element) {
            if (element == _this.results[index]) {
                element.isClicked = !element.isClicked;
            }
            else {
                element.isClicked = false;
            }
        });
    };
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-results]',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/components/home/results/results.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('75ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.75s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-75px)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'scale3d(1.05, 1.05, 1.05)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale3d(0.95, 0.95, 0.95)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'scale3d(1, 1, 1' }),
                            ]))
                        ]))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./results.component.scss */ "./src/app/components/home/results/results.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/schedule/schedule.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/home/schedule/schedule.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"container\" @listAnimation>\n    <li *ngFor=\"let schedule of schedules\" [ngStyle]=\"{'background-image': 'url('+ schedule.path +')'}\" [ngClass]=\"'square'+ schedule.id\">\n        <div class=\"date\">{{schedule.date}}</div>\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/home/schedule/schedule.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/home/schedule/schedule.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 20px;\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-row-gap: 20px;\n  grid-column-gap: 20px;\n  max-width: none;\n  margin-top: 50px; }\n\nli {\n  border-bottom: solid 1px red;\n  box-shadow: 5px 5px 30px 0 rgba(255, 255, 255, 0.1);\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: none;\n  justify-content: center;\n  align-items: flex-end;\n  height: 100px; }\n\n.date {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #c6dceb;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: bold;\n  color: #33c26c; }\n\n/* Media screen */\n\n/* phones */\n\n@media screen and (min-width: 0px) {\n  .square1,\n  .square2 {\n    display: flex; } }\n\n@media screen and (min-width: 0px) and (max-width: 700px) {\n  li {\n    width: 300px;\n    background-position-x: -138px; } }\n\n@media screen and (min-width: 0px) and (max-width: 700px) and (min-height: 675px) {\n  .square3 {\n    display: flex; } }\n\n@media screen and (min-width: 0px) and (max-width: 700px) and (min-height: 800px) {\n  .square4 {\n    display: flex; } }\n\n/* tablets */\n\n@media screen and (min-width: 700px) {\n  .container {\n    grid-column-gap: 40px;\n    grid-row-gap: 40px; }\n  li {\n    background-position-x: -125px;\n    width: 750px; }\n  .date {\n    display: none; } }\n\n@media screen and (min-width: 700px) and (max-width: 1200px) and (min-height: 800px) {\n  .square3 {\n    display: flex; } }\n\n@media screen and (min-width: 700px) and (max-width: 1200px) and (min-height: 950px) {\n  .square4 {\n    display: flex; } }\n\n/* PC */\n\n@media screen and (min-width: 1200px) {\n  li {\n    width: 1000px;\n    background-position-x: 0px; } }\n\n@media screen and (min-width: 1200px) and (min-height: 730px) {\n  .square3 {\n    display: flex; } }\n\n@media screen and (min-width: 1200px) and (min-height: 880px) {\n  .square4 {\n    display: flex; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3NjaGVkdWxlL0g6XFxDU0dPXFxHbG9yaWEgVmljdGlzXFxHbG9yaWFWaWN0aXNfUGFnZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcc2NoZWR1bGVcXHNjaGVkdWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvc2NoZWR1bGUvSDpcXENTR09cXEdsb3JpYSBWaWN0aXNcXEdsb3JpYVZpY3Rpc19QYWdlL3NyY1xcYXBwXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9zY2hlZHVsZS9IOlxcQ1NHT1xcR2xvcmlhIFZpY3Rpc1xcR2xvcmlhVmljdGlzX1BhZ2Uvc3JjXFxhcHBcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSw0QkFBNEI7RUFDNUIsbURBQXFDO0VBQ3JDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VDRG5CLGNDekJlO0VEMEJmLG9DQUFvQztFQUNwQyxpQkFBaUI7RURDakIsY0FBYyxFQUFBOztBQUlsQixpQkFBQTs7QUFHQSxXQUFBOztBQUVBO0VBQ0k7O0lBRUksYUFBYSxFQUFBLEVBQ2hCOztBQUNEO0VBQ0k7SUFDSSxZQUFZO0lBQ1osNkJBQTZCLEVBQUEsRUFDaEM7O0FBQ0Q7RUFDSTtJQUNJLGFBQWEsRUFBQSxFQUNoQjs7QUFFTDtFQUNJO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCOztBQU1iLFlBQUE7O0FBRUE7RUFDSTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBQTtFQUV0QjtJQUNJLDZCQUE2QjtJQUM3QixZQUFZLEVBQUE7RUFFaEI7SUFDSSxhQUFhLEVBQUEsRUFDaEI7O0FBRUc7RUFDSTtJQUNJLGFBQWEsRUFBQSxFQUNoQjs7QUFFTDtFQUNJO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCOztBQU1iLE9BQUE7O0FBRUE7RUFDSTtJQUNJLGFBQWE7SUFDYiwwQkFBMEIsRUFBQSxFQUM3Qjs7QUFDRDtFQUNJO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCOztBQUVMO0VBQ0k7SUFDSSxhQUFhLEVBQUEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgICBncmlkLXJvdy1nYXA6IDIwcHg7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG5saSB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJlZDtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDMwcHggMCByZ2JhKHdoaXRlLCAwLjEpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uZGF0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIEBpbmNsdWRlIHRleHREZWNvcmF0aW9uO1xuICAgIGNvbG9yOiAjMzNjMjZjO1xufVxuXG5cbi8qIE1lZGlhIHNjcmVlbiAqL1xuXG5cbi8qIHBob25lcyAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIHtcbiAgICAuc3F1YXJlMSxcbiAgICAuc3F1YXJlMiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTEzOHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA2NzVweCkge1xuICAgICAgICAgICAgLnNxdWFyZTMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDgwMHB4KSB7XG4gICAgICAgICAgICAuc3F1YXJlNCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKiB0YWJsZXRzICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogNDBweDtcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiA0MHB4O1xuICAgIH1cbiAgICBsaSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTEyNXB4O1xuICAgICAgICB3aWR0aDogNzUwcHg7XG4gICAgfVxuICAgIC5kYXRlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA4MDBweCkge1xuICAgICAgICAgICAgLnNxdWFyZTMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gICAgICAgICAgICAuc3F1YXJlNCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKiBQQyAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICBsaSB7XG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMHB4O1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNzMwcHgpIHtcbiAgICAgICAgLnNxdWFyZTMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogODgwcHgpIHtcbiAgICAgICAgLnNxdWFyZTQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJAaW1wb3J0IFwiLi92YXJpYWJsZXNcIjtcbkBtaXhpbiB3cmFwcGVyV0goJGFyZy4uLikge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG50aCgkbGlzdDogJGFyZywgJG46IDEpKSBhbmQgKG1pbi1oZWlnaHQ6IG50aCgkbGlzdDogJGFyZywgJG46IDIpKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHdyYXBwZXJXKCRhcmcuLi4pIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBudGgoJGxpc3Q6ICRhcmcsICRuOiAxKSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb21tb25QYWdlU3R5bGl6ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgJjo6YWZ0ZXIsXG4gICAgIDo6YmVmb3JlIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbn1cblxuQG1peGluIHRleHREZWNvcmF0aW9uIHtcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiJHJlZENvbG9yOiAjYmIxYjM2O1xuJHRleHRDb2xvcjogI2M2ZGNlYjtcbiRncmV5Q29sb3I6ICM5ZDlkOWQ7XG4kY29tcGxlbWVudENvbG9yOiAjMDNiZGE3OyJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/schedule/schedule.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/home/schedule/schedule.component.ts ***!
  \****************************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent() {
        this.schedules = [
            {
                name: "schedule1",
                path: "../../../../assets/home/schedule/schedule1.png",
                id: '1',
                date: "10.10.2019"
            },
            {
                name: "schedule2",
                path: "../../../../assets/home/schedule/schedule1.png",
                id: '2',
                date: "10.10.2019"
            },
            {
                name: "schedule3",
                path: "../../../../assets/home/schedule/schedule1.png",
                id: '3',
                date: "10.10.2019"
            },
            {
                name: "schedule4",
                path: "../../../../assets/home/schedule/schedule1.png",
                id: '4',
                date: "10.10.2019"
            }
        ];
    }
    ScheduleComponent.prototype.ngOnInit = function () {
    };
    ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-schedule]',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/components/home/schedule/schedule.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('100ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.7s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(75px)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'scale3d(1.10, 1.10, 1.10)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale3d(0.95, 0.95, 0.95)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'scale3d(1, 1, 1' }),
                            ]))
                        ]))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./schedule.component.scss */ "./src/app/components/home/schedule/schedule.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/shop.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/shop/shop.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"shop\">\n    <div class=\"content\">\n        <img src=\"../../../assets/shop/background/ramka.png\" alt=\"koszulki\">\n    </div>\n    <div class=\"content\">\n        <div class=\"description_frame\"><span>jersey gloria victis</span>\n            <div class=\"description\">Gloria Victis outfit provide you the highest standard, nice to touch materials. You can order it with your willing nickname which will be placed on the rear site of jersey. We also mark, by buying our shirts you contribute to our development\n                spread. Thank you!\n            </div>\n            <div class=\"buttonsContainer\">\n                <button mat-flat-button class=\"button\"><div id=\"text\">&nbsp;buy</div></button>\n            </div>\n        </div>\n    </div>\n    <div class=\"content\">\n        <img src=\"../../../assets/shop/background/ramka.png\" alt=\"koszulki\">\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/shop/shop.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/shop/shop.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box; }\n  *::after,\n  * ::before {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box; }\n  #shop {\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  display: flex;\n  background-color: #04070d;\n  flex-direction: column;\n  overflow: hidden;\n  font-family: 'Open Sans', sans-serif;\n  text-transform: uppercase; }\n  @media screen and (min-width: 1200px) {\n    #shop {\n      flex-direction: row;\n      justify-content: center;\n      align-items: center; } }\n  .content {\n  height: 40%;\n  width: 100%;\n  display: flex;\n  flex-direction: column; }\n  @media screen and (min-width: 1200px) {\n    .content {\n      justify-content: center;\n      align-items: center;\n      width: 50%;\n      height: 100%; } }\n  .content img {\n    width: 100%;\n    height: 100%; }\n  @media screen and (min-width: 1200px) {\n      .content img {\n        width: 700px;\n        height: 700px; } }\n  @media screen and (min-width: 1500px) {\n      .content img {\n        width: 1000px;\n        height: 1000px; } }\n  .content:first-child {\n    display: none; }\n  @media screen and (min-width: 1200px) {\n      .content:first-child {\n        display: flex;\n        width: 50%;\n        justify-content: center;\n        align-items: center; } }\n  .content:nth-child(2) {\n    width: 100%; }\n  @media screen and (min-width: 1200px) {\n      .content:nth-child(2) {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 50%; } }\n  .content:last-child {\n    width: 100%;\n    height: 60%;\n    display: flex;\n    align-items: center; }\n  .content:last-child img {\n      width: 350px;\n      height: 350px; }\n  @media screen and (min-width: 700px) {\n      .content:last-child img {\n        width: 520px;\n        height: 520px; } }\n  @media screen and (min-width: 900px) {\n      .content:last-child img {\n        width: 700px;\n        height: 700px; } }\n  @media screen and (min-width: 1200px) {\n      .content:last-child {\n        display: none; } }\n  .description_frame {\n  color: #c6dceb;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: bold;\n  width: 100%;\n  height: 100%;\n  color: #c6dceb;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10%;\n  font-family: 'Source Sans Pro', sans-serif; }\n  @media screen and (min-width: 1200px) {\n    .description_frame {\n      width: auto;\n      justify-content: center;\n      align-items: center;\n      text-align: right;\n      margin: 0; } }\n  .description_frame span {\n    margin: 0;\n    padding: 0;\n    font-family: 'Open Sans', sans-serif;\n    text-align: center;\n    width: 100%;\n    color: #bb1b36;\n    font-size: 115%;\n    letter-spacing: 0.9vw;\n    padding-bottom: 3vw; }\n  @media screen and (min-width: 900px) {\n      .description_frame span {\n        font-size: 25px; } }\n  @media screen and (min-width: 1200px) {\n      .description_frame span {\n        font-size: -webkit-calc(2.1vw);\n        text-align: right;\n        margin-right: 5%; } }\n  .description_frame .description {\n    width: 100%;\n    font-size: 8px;\n    line-height: 20px;\n    text-align: center;\n    letter-spacing: 1px; }\n  @media screen and (min-width: 700px) {\n      .description_frame .description {\n        font-size: 10px;\n        letter-spacing: 2px;\n        line-height: 30px; } }\n  @media screen and (min-width: 1200px) {\n      .description_frame .description {\n        font-size: 15px;\n        line-height: 50px;\n        margin-right: 10%;\n        text-align: right;\n        padding-left: 10%;\n        padding-bottom: 10%; } }\n  .buttonsContainer {\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n  align-items: center;\n  margin-top: 5%; }\n  @media screen and (min-width: 1200px) {\n    .buttonsContainer {\n      justify-content: center;\n      margin: 0; } }\n  .button {\n  color: #c6dceb;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: bold;\n  width: 30vw;\n  background-color: #e5002a;\n  color: white;\n  letter-spacing: 3px;\n  border-radius: 25px;\n  text-transform: uppercase;\n  font-family: 'Darker Grotesque', sans-serif;\n  max-width: 300px;\n  font-size: 75%;\n  outline: none;\n  border: 0; }\n  @media screen and (min-width: 700px) {\n    .button {\n      letter-spacing: 4px;\n      font-size: 100%;\n      height: 50px; } }\n  @media screen and (min-width: 1200px) {\n    .button {\n      letter-spacing: 7px;\n      margin: 0;\n      font-size: 20px;\n      height: 50px;\n      width: 300px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL0g6XFxDU0dPXFxHbG9yaWEgVmljdGlzXFxHbG9yaWFWaWN0aXNfUGFnZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hvcFxcc2hvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL0g6XFxDU0dPXFxHbG9yaWEgVmljdGlzXFxHbG9yaWFWaWN0aXNfUGFnZS9zcmNcXGFwcFxcc2Nzc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Nob3AvSDpcXENTR09cXEdsb3JpYSBWaWN0aXNcXEdsb3JpYVZpY3Rpc19QYWdlL3NyY1xcYXBwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUNZSSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQixFQUFBO0VEZDFCOztJQ2lCUSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQixFQUFBO0VEZjlCO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyx5QkFBeUIsRUFBQTtFQ1B6QjtJREZKO01BV1EsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixtQkFBbUIsRUFBQSxFQUUxQjtFQUVEO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7RUNuQnRCO0lEZUo7TUFNUSx1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLFVBQVU7TUFDVixZQUFZLEVBQUEsRUF5RG5CO0VBbEVEO0lBWVEsV0FBVztJQUNYLFlBQVksRUFBQTtFQzVCaEI7TURlSjtRQWVZLFlBQVk7UUFDWixhQUFhLEVBQUEsRUFNcEI7RUNyQ0Q7TURlSjtRQW1CWSxhQUFhO1FBQ2IsY0FBYyxFQUFBLEVBRXJCO0VBdEJMO0lBd0JRLGFBQWEsRUFBQTtFQ3ZDakI7TURlSjtRQTBCWSxhQUFhO1FBQ2IsVUFBVTtRQUNWLHVCQUF1QjtRQUN2QixtQkFBbUIsRUFBQSxFQUUxQjtFQS9CTDtJQWlDUSxXQUFXLEVBQUE7RUNoRGY7TURlSjtRQW1DWSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixVQUFVLEVBQUEsRUFFakI7RUF4Q0w7SUEwQ1EsV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7RUE3QzNCO01BK0NZLFlBQVk7TUFDWixhQUFhLEVBQUE7RUMvRHJCO01EZUo7UUFvRGdCLFlBQVk7UUFDWixhQUFhLEVBQUEsRUFDaEI7RUNyRVQ7TURlSjtRQTBEZ0IsWUFBWTtRQUNaLGFBQWEsRUFBQSxFQUNoQjtFQzNFVDtNRGVKO1FBK0RZLGFBQWEsRUFBQSxFQUVwQjtFQUdMO0VDakVJLGNDekJlO0VEMEJmLG9DQUFvQztFQUNwQyxpQkFBaUI7RURpRWpCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0U5RmU7RUYrRmYsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDBDQUEwQyxFQUFBO0VDNUYxQztJRG1GSjtNQVdRLFdBQVc7TUFDWCx1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixTQUFTLEVBQUEsRUF5Q2hCO0VBeEREO0lBa0JRLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0VsSFU7SUZtSFYsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixtQkFBbUIsRUFBQTtFQzdHdkI7TURtRko7UUE0QlksZUFBZSxFQUFBLEVBT3RCO0VDdEhEO01EbUZKO1FBK0JZLDhCQUE4QjtRQUM5QixpQkFBaUI7UUFDakIsZ0JBQWdCLEVBQUEsRUFFdkI7RUFuQ0w7SUFxQ1EsV0FBVztJQUNYLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBO0VDNUh2QjtNRG1GSjtRQTJDWSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGlCQUFpQixFQUFBLEVBVXhCO0VDMUlEO01EbUZKO1FBZ0RZLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsbUJBQW1CLEVBQUEsRUFFMUI7RUFHTDtFQUNJLGFBQWE7RUFDYixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7RUNsSmQ7SUQ2SUo7TUFPUSx1QkFBdUI7TUFDdkIsU0FBUyxFQUFBLEVBRWhCO0VBRUQ7RUN2SUksY0N6QmU7RUQwQmYsb0NBQW9DO0VBQ3BDLGlCQUFpQjtFRHVJakIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMkNBQTJDO0VBQzNDLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtFQUNiLFNBQVMsRUFBQTtFQ3JLVDtJRHlKSjtNQWNRLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsWUFBWSxFQUFBLEVBU25CO0VDbExHO0lEeUpKO01BbUJRLG1CQUFtQjtNQUNuQixTQUFTO01BQ1QsZUFBZTtNQUNmLFlBQVk7TUFDWixZQUFZLEVBQUEsRUFFbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Nob3Avc2hvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIi4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XG4qIHtcbiAgICBAaW5jbHVkZSBjb21tb25QYWdlU3R5bGl6ZXI7XG59XG5cbiNzaG9wIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwNzBkO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBAaW5jbHVkZSB3cmFwcGVyVygxMjAwcHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uY29udGVudCB7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIEBpbmNsdWRlIHdyYXBwZXJXKDEyMDBweCkge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBAaW5jbHVkZSB3cmFwcGVyVygxMjAwcHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNzAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgd3JhcHBlclcoMTUwMHB4KSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIEBpbmNsdWRlIHdyYXBwZXJXKDEyMDBweCkge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgQGluY2x1ZGUgd3JhcHBlclcoMTIwMHB4KSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHdyYXBwZXJXKDcwMHB4KSB7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHdyYXBwZXJXKDkwMHB4KSB7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHdyYXBwZXJXKDEyMDBweCkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRlc2NyaXB0aW9uX2ZyYW1lIHtcbiAgICBAaW5jbHVkZSB0ZXh0RGVjb3JhdGlvbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTAlO1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgICBAaW5jbHVkZSB3cmFwcGVyVygxMjAwcHgpIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAkcmVkQ29sb3I7XG4gICAgICAgIGZvbnQtc2l6ZTogMTE1JTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuOXZ3O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3Z3O1xuICAgICAgICBAaW5jbHVkZSB3cmFwcGVyVyg5MDBweCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHdyYXBwZXJXKDEyMDBweCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAtd2Via2l0LWNhbGMoMi4xdncpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgQGluY2x1ZGUgd3JhcHBlclcoNzAwcHgpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSB3cmFwcGVyVygxMjAwcHgpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJ1dHRvbnNDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIEBpbmNsdWRlIHdyYXBwZXJXKDEyMDBweCkge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cblxuLmJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgdGV4dERlY29yYXRpb247XG4gICAgd2lkdGg6IDMwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MDAyYTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6ICdEYXJrZXIgR3JvdGVzcXVlJywgc2Fucy1zZXJpZjtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIGZvbnQtc2l6ZTogNzUlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAwO1xuICAgIEBpbmNsdWRlIHdyYXBwZXJXKDcwMHB4KSB7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICBAaW5jbHVkZSB3cmFwcGVyVygxMjAwcHgpIHtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDdweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cbn0iLCJAaW1wb3J0IFwiLi92YXJpYWJsZXNcIjtcbkBtaXhpbiB3cmFwcGVyV0goJGFyZy4uLikge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG50aCgkbGlzdDogJGFyZywgJG46IDEpKSBhbmQgKG1pbi1oZWlnaHQ6IG50aCgkbGlzdDogJGFyZywgJG46IDIpKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHdyYXBwZXJXKCRhcmcuLi4pIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBudGgoJGxpc3Q6ICRhcmcsICRuOiAxKSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb21tb25QYWdlU3R5bGl6ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgJjo6YWZ0ZXIsXG4gICAgIDo6YmVmb3JlIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbn1cblxuQG1peGluIHRleHREZWNvcmF0aW9uIHtcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiJHJlZENvbG9yOiAjYmIxYjM2O1xuJHRleHRDb2xvcjogI2M2ZGNlYjtcbiRncmV5Q29sb3I6ICM5ZDlkOWQ7XG4kY29tcGxlbWVudENvbG9yOiAjMDNiZGE3OyJdfQ== */"

/***/ }),

/***/ "./src/app/components/shop/shop.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/shop/shop.component.ts ***!
  \***************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShopComponent = /** @class */ (function () {
    function ShopComponent() {
    }
    ShopComponent.prototype.ngOnInit = function () {
    };
    ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-shop]',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/components/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.scss */ "./src/app/components/shop/shop.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/components/team/team.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/team/team.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"team\">\n    <div class=\"description_frame\">\n        <div class=\"description\"><span>„{{currentNickname}}”</span><br/>{{currentDescription}}</div>\n    </div>\n    <div class=\"content\">\n        <ul class=\"players\" (mouseleave)=\"setDefault()\">\n            <li class=\"player_frame\" *ngFor=\"let tempPlayer of currentPlayers\" (mouseenter)=\"div(tempPlayer.nickname, tempPlayer.description)\">\n                <div class=\"player\" [ngStyle]=\"{'background-image': 'url('+ tempPlayer.picture +')'}\">\n                    <div class=\"social-media\">\n                        <a class=\"fab fa-facebook icon\" href=\"https://www.facebook.com/GloriaVictisTeam/\" target=\"_blank\"></a>\n                        <a class=\"fab fa-instagram icon\" href=\"https://www.instagram.com/gloriavictis_esport/\" target=\"_blank\"></a>\n                        <a class=\"fab fa-twitter icon\" href=\"https://twitter.com/EsportsGloria\" target=\"_blank\"></a>\n                    </div>\n                </div>\n            </li>\n        </ul>\n        <div class=\"buttonsContainer\">\n            <button mat-flat-button (click)=\"onCsgoButtonClick()\" class=\"button\"><div id=\"text\">&nbsp;&nbsp;&nbsp;Counter Strike&nbsp;&nbsp;&nbsp;</div></button>\n            <button mat-flat-button class=\"button\" style=\"background-color: transparent; border: 1px red solid; \n            color: grey; cursor: default;\"><div id=\"text\">&nbsp;League of Legends</div></button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/team/team.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/team/team.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box; }\n  *::after,\n  * ::before {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box; }\n  #team {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  background: url('background.png') no-repeat center center fixed;\n  background-size: cover; }\n  @media screen and (min-width: 1200px) {\n    #team {\n      flex-direction: row; } }\n  .content {\n  width: 100%;\n  height: 85%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly; }\n  @media screen and (min-width: 1200px) {\n    .content {\n      height: 100%;\n      width: 55%; } }\n  .description_frame {\n  text-transform: uppercase;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  line-height: 30px;\n  font-size: 15px;\n  color: #c6dceb;\n  letter-spacing: 0.2rem; }\n  .description_frame span {\n    font-size: 25px;\n    letter-spacing: 7px;\n    color: #bb1b36;\n    font-weight: bold;\n    font-family: 'Catamaran', sans-serif; }\n  @media screen and (min-width: 1000px) {\n      .description_frame span {\n        font-size: 35px; } }\n  @media screen and (min-width: 1200px) {\n      .description_frame span {\n        font-size: 50px;\n        letter-spacing: 10px; } }\n  @media screen and (min-width: 1200px) {\n    .description_frame {\n      width: 45%; } }\n  .players {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  width: 300px;\n  height: 400px; }\n  @media screen and (min-width: 700px) {\n    .players {\n      grid-template-columns: repeat(3, 1fr);\n      width: 450px;\n      height: 300px;\n      grid-column-gap: 30px;\n      grid-row-gap: 30px; } }\n  @media screen and (min-width: 1000px) {\n    .players {\n      width: 600px;\n      height: 400px; } }\n  .player_frame {\n  overflow: hidden;\n  width: 100%;\n  cursor: pointer;\n  width: 100%;\n  height: 100%; }\n  .player_frame:hover {\n    transition: .5s; }\n  .player {\n  background-position: center center;\n  background-size: 100% 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  transition: all .5s;\n  width: 100%;\n  height: 100%; }\n  .player:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  .player:hover .social-media {\n      opacity: 1; }\n  .player:hover .social-media .icon {\n        display: flex; }\n  .player:nth-child(5) {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row: 3; }\n  .social-media {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 75%;\n  height: 25px;\n  transition: all .5s;\n  opacity: 0;\n  margin-bottom: 10%; }\n  .icon {\n  font-size: 15px;\n  min-height: 25px;\n  min-width: 25px;\n  display: none;\n  text-decoration: none;\n  justify-content: center;\n  align-items: center;\n  transition: all .2s ease-in;\n  cursor: pointer;\n  border-radius: 25px;\n  background-color: #e5002a;\n  color: white; }\n  .icon:hover:first-child {\n    background-color: #3c5a99; }\n  .icon:hover:nth-child(2) {\n    background-color: #833ab4; }\n  .icon:hover:last-child {\n    background-color: #00acee; }\n  .icon:not(:first-child) {\n    margin-left: 7%; }\n  @media screen and (min-width: 1000px) {\n    .icon {\n      font-size: 20px;\n      width: 35px;\n      height: 35px; } }\n  .buttonsContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 180px;\n  height: 100px; }\n  @media screen and (min-width: 700px) {\n    .buttonsContainer {\n      width: 550px;\n      height: 50px;\n      flex-direction: row; } }\n  @media screen and (min-width: 1200px) {\n    .buttonsContainer {\n      width: 700px; } }\n  .button {\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  background-color: #e5002a;\n  color: white;\n  cursor: pointer;\n  border-radius: 30px;\n  font-size: 50%;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-family: 'Open Sans', sans-serif;\n  outline: none;\n  border: 0; }\n  @media screen and (min-width: 450px) {\n    .button {\n      font-size: 75%; } }\n  @media screen and (min-width: 800px) {\n    .button {\n      letter-spacing: 3px;\n      font-size: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFtL0g6XFxDU0dPXFxHbG9yaWEgVmljdGlzXFxHbG9yaWFWaWN0aXNfUGFnZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcdGVhbVxcdGVhbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90ZWFtL0g6XFxDU0dPXFxHbG9yaWEgVmljdGlzXFxHbG9yaWFWaWN0aXNfUGFnZS9zcmNcXGFwcFxcc2Nzc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RlYW0vSDpcXENTR09cXEdsb3JpYSBWaWN0aXNcXEdsb3JpYVZpY3Rpc19QYWdlL3NyY1xcYXBwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUNZSSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQixFQUFBO0VEZDFCOztJQ2lCUSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQixFQUFBO0VEZjlCO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUU3QiwrREFBK0Y7RUFJL0Ysc0JBQXNCLEVBQUE7RUNUdEI7SURGSjtNQWNRLG1CQUFtQixFQUFBLEVBRTFCO0VBRUQ7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QixFQUFBO0VDdEI3QjtJRGdCSjtNQVFRLFlBQVk7TUFDWixVQUFVLEVBQUEsRUFFakI7RUFFRDtFQUNJLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0U3Q2U7RUY4Q2Ysc0JBQXNCLEVBQUE7RUFWMUI7SUFZUSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGNFbkRVO0lGb0RWLGlCQUFpQjtJQUNqQixvQ0FBb0MsRUFBQTtFQzdDeEM7TUQ2Qko7UUFrQlksZUFBZSxFQUFBLEVBTXRCO0VDckREO01ENkJKO1FBcUJZLGVBQWU7UUFDZixvQkFBb0IsRUFBQSxFQUUzQjtFQ3JERDtJRDZCSjtNQTBCUSxVQUFVLEVBQUEsRUFFakI7RUFFRDtFQUNJLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLGFBQWEsRUFBQTtFQy9EYjtJRDJESjtNQU1RLHFDQUFxQztNQUNyQyxZQUFZO01BQ1osYUFBYTtNQUNiLHFCQUFxQjtNQUNyQixrQkFBa0IsRUFBQSxFQU16QjtFQzNFRztJRDJESjtNQWFRLFlBQVk7TUFDWixhQUFhLEVBQUEsRUFFcEI7RUFFRDtFQUNJLGdCQUFnQjtFQUVoQixXQUFXO0VBQ1gsZUFBZTtFQUtmLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFWaEI7SUFNUSxlQUFlLEVBQUE7RUFPdkI7RUFDSSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQVVuQixXQUFXO0VBQ1gsWUFBWSxFQUFBO0VBakJoQjtJQVFRLDZCQUFxQjtZQUFyQixxQkFBcUIsRUFBQTtFQVI3QjtNQVVZLFVBQVUsRUFBQTtFQVZ0QjtRQVlnQixhQUFhLEVBQUE7RUFaN0I7SUFtQlEsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7RUFJbkI7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTtFQVpoQjtJQWVZLHlCQUFrQyxFQUFBO0VBZjlDO0lBa0JZLHlCQUFtQyxFQUFBO0VBbEIvQztJQXFCWSx5QkFBeUIsRUFBQTtFQXJCckM7SUF5QlEsZUFBZSxFQUFBO0VDdkpuQjtJRDhISjtNQTRCUSxlQUFlO01BQ2YsV0FBVztNQUNYLFlBQVksRUFBQSxFQUVuQjtFQUVEO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGFBQWEsRUFBQTtFQ3JLYjtJRGdLSjtNQU9RLFlBQVk7TUFDWixZQUFZO01BQ1osbUJBQW1CLEVBQUEsRUFLMUI7RUM5S0c7SURnS0o7TUFZUSxZQUFZLEVBQUEsRUFFbkI7RUFFRDtFQUNJLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsU0FBUyxFQUFBO0VDNUxUO0lEZ0xKO01BY1EsY0FBYyxFQUFBLEVBTXJCO0VDcE1HO0lEZ0xKO01BaUJRLG1CQUFtQjtNQUNuQixlQUFlLEVBQUEsRUFFdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlYW0vdGVhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIi4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XG4qIHtcbiAgICBAaW5jbHVkZSBjb21tb25QYWdlU3R5bGl6ZXI7XG59XG5cbiN0ZWFtIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzA0MDcwZDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvdGVhbS9iYWNrZ3JvdW5kL2JhY2tncm91bmQucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIEBpbmNsdWRlIHdyYXBwZXJXKDEyMDBweCkge1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG59XG5cbi5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDg1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBAaW5jbHVkZSB3cmFwcGVyVygxMjAwcHgpIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogNTUlO1xuICAgIH1cbn1cblxuLmRlc2NyaXB0aW9uX2ZyYW1lIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDdweDtcbiAgICAgICAgY29sb3I6ICRyZWRDb2xvcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ2F0YW1hcmFuJywgc2Fucy1zZXJpZjtcbiAgICAgICAgQGluY2x1ZGUgd3JhcHBlclcoMTAwMHB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgd3JhcHBlclcoMTIwMHB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAaW5jbHVkZSB3cmFwcGVyVygxMjAwcHgpIHtcbiAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICB9XG59XG5cbi5wbGF5ZXJzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgQGluY2x1ZGUgd3JhcHBlclcoNzAwcHgpIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDMwcHg7XG4gICAgICAgIGdyaWQtcm93LWdhcDogMzBweDtcbiAgICB9XG4gICAgQGluY2x1ZGUgd3JhcHBlclcoMTAwMHB4KSB7XG4gICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICB9XG59XG5cbi5wbGF5ZXJfZnJhbWUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLy8gYm94LXNoYWRvdzogMCAwIDQwcHggMHB4IGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgICAgICAvLyBib3gtc2hhZG93OiAwIDAgNzVweCAxcHggJHJlZENvbG9yO1xuICAgIH1cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wbGF5ZXIge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICAuc29jaWFsLW1lZGlhIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgJjpudGgtY2hpbGQoNSkge1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICAgICAgICBncmlkLXJvdzogMztcbiAgICB9XG59XG5cbi5zb2NpYWwtbWVkaWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNzUlO1xuICAgIGhlaWdodDogMjVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuXG4uaWNvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XG4gICAgbWluLXdpZHRoOiAyNXB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTAwMmE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgICY6aG92ZXIge1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgOTAsIDE1Myk7XG4gICAgICAgIH1cbiAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMSwgNTgsIDE4MCk7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFjZWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3JTtcbiAgICB9XG4gICAgQGluY2x1ZGUgd3JhcHBlclcoMTAwMHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICB9XG59XG5cbi5idXR0b25zQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgQGluY2x1ZGUgd3JhcHBlclcoNzAwcHgpIHtcbiAgICAgICAgd2lkdGg6IDU1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuICAgIEBpbmNsdWRlIHdyYXBwZXJXKDEyMDBweCkge1xuICAgICAgICB3aWR0aDogNzAwcHg7XG4gICAgfVxufVxuXG4uYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MDAyYTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgZm9udC1zaXplOiA1MCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gICAgQGluY2x1ZGUgd3JhcHBlclcoNDUwcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiA3NSU7XG4gICAgfVxuICAgIEBpbmNsdWRlIHdyYXBwZXJXKDgwMHB4KSB7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB9XG59IiwiQGltcG9ydCBcIi4vdmFyaWFibGVzXCI7XG5AbWl4aW4gd3JhcHBlcldIKCRhcmcuLi4pIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBudGgoJGxpc3Q6ICRhcmcsICRuOiAxKSkgYW5kIChtaW4taGVpZ2h0OiBudGgoJGxpc3Q6ICRhcmcsICRuOiAyKSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB3cmFwcGVyVygkYXJnLi4uKSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbnRoKCRsaXN0OiAkYXJnLCAkbjogMSkpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gY29tbW9uUGFnZVN0eWxpemVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICY6OmFmdGVyLFxuICAgICA6OmJlZm9yZSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG59XG5cbkBtaXhpbiB0ZXh0RGVjb3JhdGlvbiB7XG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIiRyZWRDb2xvcjogI2JiMWIzNjtcbiR0ZXh0Q29sb3I6ICNjNmRjZWI7XG4kZ3JleUNvbG9yOiAjOWQ5ZDlkO1xuJGNvbXBsZW1lbnRDb2xvcjogIzAzYmRhNzsiXX0= */"

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
/* harmony import */ var _services_players_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/players-service.service */ "./src/app/services/players-service.service.ts");



var TeamComponent = /** @class */ (function () {
    function TeamComponent(_playerService) {
        this._playerService = _playerService;
        this.csgoPlayers = [
            {
                nickname: "Player1",
                description: "I am player 1",
                picture: "../../../assets/team/players/player1.png"
            },
            {
                nickname: "Player2",
                description: "I am player 2",
                picture: "../../../assets/team/players/player2.png"
            },
            {
                nickname: "Player3",
                description: "I am player 3",
                picture: "../../../assets/team/players/player3.png"
            },
            {
                nickname: "Player4",
                description: "I am player 4",
                picture: "../../../assets/team/players/player4.png"
            },
            {
                nickname: "Player 5",
                description: "I am player 5",
                picture: "../../../assets/team/players/player5.png"
            },
            {
                nickname: "Coach",
                description: "Hi i am their coach :-)",
                picture: "../../../assets/team/players/coach.png"
            }
        ];
        this.lolPlayers = [
            {
                nickname: "Szczurk3y2",
                description: "Siema jestem Szczurk3y2",
                picture: "../../../assets/team/players/stewie2k.png"
            },
            {
                nickname: "Głazu2",
                description: "Siema jestem Głazu2",
                picture: "../../../assets/team/players/stewie2k.png"
            },
            {
                nickname: "Kubuś2",
                description: "Siema jestem Kubuś2",
                picture: "../../../assets/team/players/stewie2k.png"
            },
            {
                nickname: "franeklubi2",
                description: "Siema jestem franeklubi2",
                picture: "../../../assets/team/players/stewie2k.png"
            },
            {
                nickname: "kowadło2",
                description: "Siema jestem kowadło2",
                picture: "../../../assets/team/players/stewie2k.png"
            },
            {
                nickname: "trener2",
                description: "Siema jestem trener2",
                picture: "../../../assets/team/players/stewie2k.png"
            }
        ];
        this.currentPlayers = [];
        this.csgoButtonClicked = true;
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.currentPlayers = this.csgoPlayers;
        this.setDefault();
    };
    TeamComponent.prototype.onCsgoButtonClick = function () {
        this.currentPlayers = this.csgoPlayers;
        this.csgoButtonClicked = true;
    };
    TeamComponent.prototype.onLolButtonClick = function () {
        this.currentPlayers = this.lolPlayers;
        this.csgoButtonClicked = false;
    };
    TeamComponent.prototype.div = function (nick, description) {
        this.currentNickname = nick;
        this.currentDescription = description;
    };
    TeamComponent.prototype.setDefault = function () {
        this.currentDescription = "to show his description";
        this.currentNickname = "click player";
    };
    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-team]',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/components/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./src/app/components/team/team.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_players_service_service__WEBPACK_IMPORTED_MODULE_2__["PlayersServiceService"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/services/players-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/players-service.service.ts ***!
  \*****************************************************/
/*! exports provided: PlayersServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersServiceService", function() { return PlayersServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var PlayersServiceService = /** @class */ (function () {
    function PlayersServiceService(http) {
        this.http = http;
        this.players = {
            playersList: [
                {
                    nickname: "Szczurk3y",
                    desc: "Eget mi proin sed libero enim sed. Ut morbi tincidunt augue interdum velit.",
                    picture: "../../assets/team/players/stewie2k.png"
                },
                {
                    nickname: "Glazu",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    picture: "../../assets/team/players/neo.png"
                },
                {
                    nickname: "FranekLubki",
                    desc: "Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Magna fermentum iaculis eu non diam phasellus vestibulum",
                    picture: "../../assets/team/players/simple.png"
                },
                {
                    nickname: "Kowadło",
                    desc: "uscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Vel quam elementum pulvinar etiam non quam. Dolor morbi non arcu risu",
                    picture: "../../assets/team/players/pashabiceps.png"
                },
                {
                    nickname: "GRABARZ",
                    desc: "Morbi tincidunt ornare massa eget egestas purus viverra accumsan",
                    picture: "../../assets/team/players/device.png"
                }
            ]
        };
    }
    PlayersServiceService.prototype.getPlayers = function () {
        var _this = this;
        var playersObservable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            setTimeout(function () {
                observer.next(_this.players);
            }, 1000);
        });
        return playersObservable;
    };
    PlayersServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlayersServiceService);
    return PlayersServiceService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });
2;


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\CSGO\Gloria Victis\GloriaVictis_Page\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map