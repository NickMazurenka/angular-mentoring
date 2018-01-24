webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-course/add-course.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"heading\">Add new course</div>\n<div class=\"fieldset\">\n  <input class=\"field input\" type=\"text\" placeholder=\"Title\">\n  <textarea class=\"field input input_textarea\" placeholder=\"Description\"></textarea>\n  <input class=\"field input\" type=\"text\" placeholder=\"Date\">\n  <input class=\"field input\" type=\"text\" placeholder=\"Duration\">\n  <input class=\"field input\" type=\"text\" placeholder=\"Authors\">\n</div>\n<div class=\"controls\">\n  <button class=\"button button_large button_optional button_wide\" (click)=\"onCancelClick()\">Cancel</button>\n  <button type=\"submit\" class=\"button button_large button_wide\">Add New Course</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/add-course/add-course.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".heading {\n  font: bold 36px/36px Lato;\n  margin: 1rem 0;\n  text-align: center; }\n\n.fieldset {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  margin: 0 1rem; }\n\n.field {\n  margin: 1rem 0; }\n\n.controls {\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 0 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-course/add-course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCourseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddCourseComponent = /** @class */ (function () {
    function AddCourseComponent(router) {
        this.router = router;
    }
    AddCourseComponent.prototype.ngOnInit = function () {
    };
    AddCourseComponent.prototype.onCancelClick = function () {
        this.router.navigate(['courses']);
    };
    AddCourseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-course',
            template: __webpack_require__("../../../../../src/app/add-course/add-course.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-course/add-course.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AddCourseComponent);
    return AddCourseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__courses_courses_component__ = __webpack_require__("../../../../../src/app/courses/courses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_course_add_course_component__ = __webpack_require__("../../../../../src/app/add-course/add-course.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'courses', component: __WEBPACK_IMPORTED_MODULE_2__courses_courses_component__["a" /* CoursesComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'addCourse', component: __WEBPACK_IMPORTED_MODULE_4__add_course_add_course_component__["a" /* AddCourseComponent */] },
    { path: '', redirectTo: '/courses', pathMatch: 'full' },
    { path: '**', redirectTo: '/courses' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<body class=\"body\">\n  <app-header></app-header>\n  <main class='content'>\n    <router-outlet></router-outlet>\n  </main>\n  <app-footer></app-footer>\n</body>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\nhtml, body {\n  font: 16px/16px Lato;\n  height: 100%;\n  margin: 0; }\n.button {\n  font: 12px/12px Lato;\n  width: 5rem;\n  outline: none;\n  color: #FFFFFF;\n  background-color: #FF6008;\n  border: 1px solid #FF6008;\n  border-radius: 2rem;\n  padding: 0 1rem;\n  line-height: 2rem;\n  height: 2rem;\n  text-align: center;\n  cursor: pointer;\n  text-transform: uppercase; }\n.button_wide {\n    width: 16rem; }\n.button_large {\n    height: 3rem; }\n.button:hover {\n    color: #FF6008;\n    background-color: #FFFFFF;\n    border: 1px solid #FF6008; }\n.button_optional {\n    color: #000000;\n    background-color: #FFFFFF;\n    border: 1px solid #DFDFDF; }\n.button_optional:hover {\n      color: #000000;\n      background-color: #FFFFFF;\n      border: 1px solid #000000; }\n.input {\n  font: 18px/18px Lato;\n  padding: 0 1rem;\n  color: #000000;\n  background-color: #EEEEEE;\n  line-height: 1em;\n  height: 3rem;\n  border: none; }\n.input_textarea {\n    line-height: 1.3em;\n    padding-top: 0.5em;\n    padding-bottom: 0.5em;\n    min-height: 3rem;\n    resize: vertical; }\n.input:focus {\n  outline: #B6B6B6 solid 1px; }\n.input::-webkit-input-placeholder {\n  color: #B6B6B6; }\n.input:-ms-input-placeholder {\n  color: #B6B6B6; }\n.input::-ms-input-placeholder {\n  color: #B6B6B6; }\n.input::placeholder {\n  color: #B6B6B6; }\n.search-field {\n  height: 2rem;\n  border-radius: 2rem;\n  border: 1px solid #DEDEDE;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  font: 16px/16px Lato;\n  padding: 0 1rem;\n  outline: none; }\n.search-button {\n  font-size: 1rem;\n  line-height: 2rem;\n  margin-left: -2rem;\n  margin-right: 1rem;\n  color: #515356;\n  cursor: pointer; }\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 1000; }\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n.content {\n  width: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto; }\n@media (min-width: 900px) {\n    .content {\n      width: 900px;\n      margin: auto; } }\n.body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_logo_logo_component__ = __webpack_require__("../../../../../src/app/header/logo/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__courses_courses_component__ = __webpack_require__("../../../../../src/app/courses/courses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__courses_course_details_course_details_component__ = __webpack_require__("../../../../../src/app/courses/course-details/course-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__header_user_login_user_login_component__ = __webpack_require__("../../../../../src/app/header/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__courses_course_details_confirmation_dialog_confirmation_dialog_component__ = __webpack_require__("../../../../../src/app/courses/course-details/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__courses_course_details_confirmation_dialog_service__ = __webpack_require__("../../../../../src/app/courses/course-details/confirmation-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__courses_courses_service__ = __webpack_require__("../../../../../src/app/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__courses_course_details_course_plate_color_directive__ = __webpack_require__("../../../../../src/app/courses/course-details/course-plate-color.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__courses_course_details_course_duration_pipe__ = __webpack_require__("../../../../../src/app/courses/course-details/course-duration.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__courses_courses_filter_pipe__ = __webpack_require__("../../../../../src/app/courses/courses-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__courses_courses_order_pipe__ = __webpack_require__("../../../../../src/app/courses/courses-order.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__add_course_add_course_component__ = __webpack_require__("../../../../../src/app/add-course/add-course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared-services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_services_local_storage_service__ = __webpack_require__("../../../../../src/app/shared-services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_services_token_interceptor__ = __webpack_require__("../../../../../src/app/shared-services/token-interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__header_logo_logo_component__["a" /* LogoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__courses_courses_component__["a" /* CoursesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__courses_course_details_course_details_component__["a" /* CourseDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__header_user_login_user_login_component__["a" /* UserLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__courses_course_details_confirmation_dialog_confirmation_dialog_component__["a" /* ConfirmationDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_19__courses_course_details_course_plate_color_directive__["a" /* CoursePlateColorDirective */],
                __WEBPACK_IMPORTED_MODULE_20__courses_course_details_course_duration_pipe__["a" /* CourseDurationPipe */],
                __WEBPACK_IMPORTED_MODULE_21__courses_courses_filter_pipe__["a" /* CoursesFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_22__courses_courses_order_pipe__["a" /* CoursesOrderPipe */],
                __WEBPACK_IMPORTED_MODULE_23__add_course_add_course_component__["a" /* AddCourseComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_cdk_overlay__["c" /* OverlayModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__courses_course_details_confirmation_dialog_service__["a" /* ConfirmationDialogService */],
                __WEBPACK_IMPORTED_MODULE_18__courses_courses_service__["a" /* CoursesService */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* UpperCasePipe */],
                __WEBPACK_IMPORTED_MODULE_24__shared_services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_25__shared_services_local_storage_service__["a" /* LocalStorageService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_26__shared_services_token_interceptor__["a" /* TokenInterceptor */],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_16__courses_course_details_confirmation_dialog_confirmation_dialog_component__["a" /* ConfirmationDialogComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/courses/course-details/confirmation-dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationDialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_portal__ = __webpack_require__("../../../cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirmation_dialog_confirmation_dialog_component__ = __webpack_require__("../../../../../src/app/courses/course-details/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirmation_dialog_confirmation_dialog_ref__ = __webpack_require__("../../../../../src/app/courses/course-details/confirmation-dialog/confirmation-dialog-ref.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmationDialogService = /** @class */ (function () {
    function ConfirmationDialogService(injector, overlay) {
        this.overlay = overlay;
    }
    ConfirmationDialogService.prototype.open = function () {
        var overlayConfig = this.getOverlayConfig();
        var overlayRef = this.overlay.create(overlayConfig);
        var dialogRef = new __WEBPACK_IMPORTED_MODULE_4__confirmation_dialog_confirmation_dialog_ref__["a" /* ConfirmationDialogRef */](overlayRef);
        var injectionTokens = new WeakMap();
        injectionTokens.set(__WEBPACK_IMPORTED_MODULE_4__confirmation_dialog_confirmation_dialog_ref__["a" /* ConfirmationDialogRef */], dialogRef);
        var injector = new __WEBPACK_IMPORTED_MODULE_2__angular_cdk_portal__["c" /* PortalInjector */](this.injector, injectionTokens);
        var containerPortal = new __WEBPACK_IMPORTED_MODULE_2__angular_cdk_portal__["a" /* ComponentPortal */](__WEBPACK_IMPORTED_MODULE_3__confirmation_dialog_confirmation_dialog_component__["a" /* ConfirmationDialogComponent */], null, injector);
        overlayRef.attach(containerPortal);
        overlayRef.backdropClick().subscribe(function (_) { return dialogRef.close(); });
        return dialogRef;
    };
    ConfirmationDialogService.prototype.getOverlayConfig = function () {
        var positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically();
        var overlayConfig = new __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__["b" /* OverlayConfig */]({
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: positionStrategy
        });
        return overlayConfig;
    };
    ConfirmationDialogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */], __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__["a" /* Overlay */]])
    ], ConfirmationDialogService);
    return ConfirmationDialogService;
}());



/***/ }),

/***/ "../../../../../src/app/courses/course-details/confirmation-dialog/confirmation-dialog-ref.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationDialogRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmationDialogRef = /** @class */ (function () {
    function ConfirmationDialogRef(overlayRef) {
        this.overlayRef = overlayRef;
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ConfirmationDialogRef.prototype.close = function () {
        this.overlayRef.dispose();
    };
    ConfirmationDialogRef.prototype.delete = function () {
        this.overlayRef.dispose();
        this.onDelete.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ConfirmationDialogRef.prototype, "onDelete", void 0);
    return ConfirmationDialogRef;
}());



/***/ }),

/***/ "../../../../../src/app/courses/course-details/confirmation-dialog/confirmation-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-container\">\n    <div class=\"dialog-text\">You sure want to delete the course?</div>\n    <div class=\"controls-container\">\n        <button class=\"button button_optional\" (click)=\"cancelClick()\">Cancel</button>\n        <button class=\"button\" (click)=\"yesClick()\">Yes</button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/courses/course-details/confirmation-dialog/confirmation-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.dialog-container {\n  padding: 2rem;\n  background-color: #FFFFFF; }\n\n.controls-container {\n  margin-top: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.dialog-text {\n  font: 18px/18px Lato; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/courses/course-details/confirmation-dialog/confirmation-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confirmation_dialog_ref__ = __webpack_require__("../../../../../src/app/courses/course-details/confirmation-dialog/confirmation-dialog-ref.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmationDialogComponent.prototype.yesClick = function () {
        this.dialogRef.delete();
    };
    ConfirmationDialogComponent.prototype.cancelClick = function () {
        this.dialogRef.close();
    };
    ConfirmationDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirmation-dialog',
            template: __webpack_require__("../../../../../src/app/courses/course-details/confirmation-dialog/confirmation-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/courses/course-details/confirmation-dialog/confirmation-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__confirmation_dialog_ref__["a" /* ConfirmationDialogRef */]])
    ], ConfirmationDialogComponent);
    return ConfirmationDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/courses/course-details/course-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"course\" [appCoursePlateColor]=\"course.date\">\n  <div class=\"course-details\">\n    <div class=\"course-properties\">\n      <div class=\"course-text\">Video course {{course.id}}</div>\n      <div class=\"course-text\">{{course.duration | courseDuration}}</div>\n      <fa [ngClass]=\"{'star_hidden': !course.starred }\" class=\"star\" name=\"star\"></fa>\n      <div class=\"course-text\">{{course.date | date}}</div>\n    </div>\n    <div class=\"course-text\">{{course.name | uppercase}}</div>\n    <div class=\"course-text\">{{course.description}}</div>\n  </div>\n  <div class=\"course-controls\">\n    <div class=\"button control-button\">Edit</div>\n    <div class=\"button control-button\" (click)=\"delete()\">Delete</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/courses/course-details/course-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".course {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.12);\n  margin: 1rem;\n  padding: 1rem;\n  background: #FFFFFF;\n  position: relative; }\n\n.course-plate_upcoming::before {\n  content: \"\";\n  left: -0.1rem;\n  width: 0.25rem;\n  height: 2.25rem;\n  position: absolute; }\n\n.course-plate_upcoming::before {\n  background: #E3E3E3; }\n\n.course-plate_fresh::before {\n  content: \"\";\n  left: -0.1rem;\n  width: 0.25rem;\n  height: 2.25rem;\n  position: absolute; }\n\n.course-plate_fresh::before {\n  background: #FF6008; }\n\n.course-text {\n  font: 18px/18px Lato;\n  padding-right: 1rem; }\n\n.course-details {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column; }\n\n.course-controls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column; }\n\n@media (max-width: 530px) {\n    .course-controls {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap; } }\n\n.course-properties {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  margin-bottom: 1rem; }\n\n.control-button {\n  margin: 0.25rem; }\n\n.star {\n  line-height: 18px;\n  color: #FF6008;\n  margin-right: 1rem; }\n\n.star_hidden {\n    color: transparent; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/courses/course-details/course-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confirmation_dialog_service__ = __webpack_require__("../../../../../src/app/courses/course-details/confirmation-dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseDetailsComponent = /** @class */ (function () {
    function CourseDetailsComponent(dialogService) {
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.dialogService = dialogService;
    }
    CourseDetailsComponent.prototype.edit = function () {
    };
    CourseDetailsComponent.prototype.delete = function () {
        var _this = this;
        var dialogRef = this.dialogService.open();
        dialogRef.onDelete.subscribe(function () { return _this.onDelete.emit(_this.course); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CourseDetailsComponent.prototype, "course", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CourseDetailsComponent.prototype, "onDelete", void 0);
    CourseDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-course-details',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            template: __webpack_require__("../../../../../src/app/courses/course-details/course-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/courses/course-details/course-details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__confirmation_dialog_service__["a" /* ConfirmationDialogService */]])
    ], CourseDetailsComponent);
    return CourseDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/courses/course-details/course-duration.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseDurationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CourseDurationPipe = /** @class */ (function () {
    function CourseDurationPipe() {
    }
    CourseDurationPipe.prototype.transform = function (minutes) {
        if (minutes < 60) {
            return minutes + " m";
        }
        var hours = 0;
        while (minutes >= 60) {
            minutes -= 60;
            hours++;
        }
        var result = hours + " h ";
        if (minutes > 0) {
            result += minutes + " m";
        }
        return result;
    };
    CourseDurationPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'courseDuration'
        })
    ], CourseDurationPipe);
    return CourseDurationPipe;
}());



/***/ }),

/***/ "../../../../../src/app/courses/course-details/course-plate-color.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursePlateColorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoursePlateColorDirective = /** @class */ (function () {
    function CoursePlateColorDirective(el, renderer) {
        this.element = el;
        this.renderer = renderer;
    }
    CoursePlateColorDirective_1 = CoursePlateColorDirective;
    CoursePlateColorDirective.prototype.ngOnInit = function () {
        var colorClass = 'course-plate';
        var dateLimit = new Date();
        dateLimit.setDate(dateLimit.getDate() - CoursePlateColorDirective_1.daysFresh);
        if (this.date > new Date()) {
            colorClass = 'course-plate_upcoming';
        }
        else if (this.date >= dateLimit) {
            colorClass = 'course-plate_fresh';
        }
        this.renderer.setElementClass(this.element.nativeElement, colorClass, true);
    };
    CoursePlateColorDirective.daysFresh = 14;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('appCoursePlateColor'),
        __metadata("design:type", Date)
    ], CoursePlateColorDirective.prototype, "date", void 0);
    CoursePlateColorDirective = CoursePlateColorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appCoursePlateColor]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], CoursePlateColorDirective);
    return CoursePlateColorDirective;
    var CoursePlateColorDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/courses/courses-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CoursesFilterPipe = /** @class */ (function () {
    function CoursesFilterPipe() {
    }
    CoursesFilterPipe.prototype.transform = function (courses, descriptionFilter) {
        descriptionFilter = descriptionFilter.toLowerCase();
        return courses.filter(function (course) { return course.description.toLowerCase().indexOf(descriptionFilter) !== -1; });
    };
    CoursesFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'coursesFilter'
        })
    ], CoursesFilterPipe);
    return CoursesFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/courses/courses-order.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesOrderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CoursesOrderPipe = /** @class */ (function () {
    function CoursesOrderPipe() {
    }
    CoursesOrderPipe.prototype.transform = function (courses) {
        return courses.sort(function (a, b) { return b.date.getTime() - a.date.getTime(); });
    };
    CoursesOrderPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'coursesOrder'
        })
    ], CoursesOrderPipe);
    return CoursesOrderPipe;
}());



/***/ }),

/***/ "../../../../../src/app/courses/courses.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"controls-container\">\n  <div class=\"search-container\">\n    <input #searchInput [(ngModel)]=\"pattern\" type=\"text\" class=\"search-field flex-item\">\n    <fa name=\"search\" class=\"search-button flex-item\" (click)=\"search(searchInput.value)\"></fa>\n  </div>\n  <button class=\"button add-button flex-item\" (click)=\"onAddCourseClicked()\">Add course</button>\n</div>\n<div class=\"courses-container\">\n  <div *ngIf=\"courses.length === 0\" class=\"courses-empty-message\">No data. Feel free to add new course.</div>\n  <app-course-details *ngFor=\"let course of courses | coursesOrder\" [course]=\"course\" (onDelete)=\"deleteCourse($event)\"></app-course-details>\n</div>\n<div class=\"paging-controls\">\n  <button class=\"button\" (click)=\"onPrevPageClick()\" [disabled]=\"pageNumber === 0\">&lt;</button>\n  <button class=\"button\" (click)=\"onNextPageClick()\">&gt;</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/courses/courses.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-button {\n  width: 7rem;\n  margin-left: 0.5rem; }\n\n.flex-item {\n  margin-top: 0.25rem; }\n\n.search-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto; }\n\n.controls-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  background-color: #FFFFFF;\n  padding: 0.5rem 1rem; }\n\n.paging-controls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1rem 2rem; }\n\n@media (min-width: 400px) {\n  .controls-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row;\n            flex-flow: row; } }\n\n.courses-container {\n  padding: 0.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column; }\n\n.courses-empty-message {\n  font: bold 16px/16px Lato;\n  background: #E3E3E3;\n  color: #515356;\n  text-align: center;\n  padding: 1rem;\n  margin: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/courses/courses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__courses_service__ = __webpack_require__("../../../../../src/app/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(router, coursesService) {
        this.coursesPerPage = 5;
        this.pageNumber = 0;
        this.router = router;
        this.courses = [];
        this.coursesService = coursesService;
    }
    CoursesComponent.prototype.getCourseList = function () {
        return this.coursesService.getCourseList(this.pageNumber * this.coursesPerPage, this.coursesPerPage, this.pattern);
    };
    CoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._getCourseListSubscriptionOnInit =
            this.getCourseList().subscribe(function (courses) {
                _this.courses = courses;
            });
    };
    CoursesComponent.prototype.search = function (pattern) {
        var _this = this;
        this.pattern = pattern;
        this._getCourseListSubscriptionSearch = this.getCourseList().subscribe(function (courses) {
            _this.courses = courses;
        });
    };
    CoursesComponent.prototype.onNextPageClick = function () {
        var _this = this;
        this.pageNumber++;
        this._getCourseListSubscriptionOnInit =
            this.getCourseList().subscribe(function (courses) {
                _this.courses = courses;
            });
    };
    CoursesComponent.prototype.onPrevPageClick = function () {
        var _this = this;
        this.pageNumber--;
        this._getCourseListSubscriptionOnInit =
            this.getCourseList().subscribe(function (courses) {
                _this.courses = courses;
            });
    };
    CoursesComponent.prototype.onAddCourseClicked = function () {
        this.router.navigate(['addCourse']);
    };
    CoursesComponent.prototype.deleteCourse = function (course) {
        var _this = this;
        this._deleteCourseSubscription =
            this.coursesService.deleteCouse(course.id, this.pageNumber * this.coursesPerPage, this.coursesPerPage)
                .subscribe(function () { return _this.search(_this.pattern); });
    };
    CoursesComponent.prototype.ngOnDestroy = function () {
        if (this._getCourseListSubscriptionOnInit) {
            this._getCourseListSubscriptionOnInit.unsubscribe();
        }
        if (this._getCourseListSubscriptionSearch) {
            this._getCourseListSubscriptionSearch.unsubscribe();
        }
        if (this._deleteCourseSubscription) {
            this._deleteCourseSubscription.unsubscribe();
        }
    };
    CoursesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-courses',
            template: __webpack_require__("../../../../../src/app/courses/courses.component.html"),
            styles: [__webpack_require__("../../../../../src/app/courses/courses.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__courses_service__["a" /* CoursesService */]])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/courses/courses.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CoursesService = /** @class */ (function () {
    function CoursesService(http) {
        this.http = http;
        this.outdatedRange = 14;
        this.courses = [];
    }
    Object.defineProperty(CoursesService.prototype, "coursesUrl", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiEndpoint + "/courses";
        },
        enumerable: true,
        configurable: true
    });
    CoursesService.prototype.getCourseList = function (start, count, filter) {
        var url = start == null ? this.coursesUrl :
            filter == null ? this.coursesUrl + "?start=" + start + "&count=" + count :
                this.coursesUrl + "?start=" + start + "&count=" + count + "&filter=" + filter;
        return this.mapCourseDto(this.http.get(url));
    };
    CoursesService.prototype.deleteCouse = function (courseId, start, count, filter) {
        var url = this.coursesUrl + "/" + courseId;
        return this.http.delete(url);
    };
    CoursesService.prototype.createCourse = function (course) {
        this.courses.push(course);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(course);
    };
    CoursesService.prototype.updateCourse = function (data) {
        var course = this.courses.filter(function (c) { return c.id === data.id; })[0];
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            if (course == null) {
                observer.error();
            }
            else {
                course = data;
                observer.next(course);
            }
        });
    };
    CoursesService.prototype.mapCourseDto = function (coursesDtoObs) {
        return coursesDtoObs.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (coursesDto) { return coursesDto.map(function (courseDto) {
            return {
                id: courseDto.id,
                name: courseDto.name,
                description: courseDto.description,
                date: new Date(courseDto.date),
                duration: courseDto.length,
                starred: courseDto.isTopRated
            };
        }); }));
    };
    CoursesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]])
    ], CoursesService);
    return CoursesService;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"footer\">\n    <div class=\"text\">EPAM&copy; 2017</div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\nhtml, body {\n  font: 16px/16px Lato;\n  height: 100%;\n  margin: 0; }\n.button {\n  font: 12px/12px Lato;\n  width: 5rem;\n  outline: none;\n  color: #FFFFFF;\n  background-color: #FF6008;\n  border: 1px solid #FF6008;\n  border-radius: 2rem;\n  padding: 0 1rem;\n  line-height: 2rem;\n  height: 2rem;\n  text-align: center;\n  cursor: pointer;\n  text-transform: uppercase; }\n.button_wide {\n    width: 16rem; }\n.button_large {\n    height: 3rem; }\n.button:hover {\n    color: #FF6008;\n    background-color: #FFFFFF;\n    border: 1px solid #FF6008; }\n.button_optional {\n    color: #000000;\n    background-color: #FFFFFF;\n    border: 1px solid #DFDFDF; }\n.button_optional:hover {\n      color: #000000;\n      background-color: #FFFFFF;\n      border: 1px solid #000000; }\n.input {\n  font: 18px/18px Lato;\n  padding: 0 1rem;\n  color: #000000;\n  background-color: #EEEEEE;\n  line-height: 1em;\n  height: 3rem;\n  border: none; }\n.input_textarea {\n    line-height: 1.3em;\n    padding-top: 0.5em;\n    padding-bottom: 0.5em;\n    min-height: 3rem;\n    resize: vertical; }\n.input:focus {\n  outline: #B6B6B6 solid 1px; }\n.input::-webkit-input-placeholder {\n  color: #B6B6B6; }\n.input:-ms-input-placeholder {\n  color: #B6B6B6; }\n.input::-ms-input-placeholder {\n  color: #B6B6B6; }\n.input::placeholder {\n  color: #B6B6B6; }\n.search-field {\n  height: 2rem;\n  border-radius: 2rem;\n  border: 1px solid #DEDEDE;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  font: 16px/16px Lato;\n  padding: 0 1rem;\n  outline: none; }\n.search-button {\n  font-size: 1rem;\n  line-height: 2rem;\n  margin-left: -2rem;\n  margin-right: 1rem;\n  color: #515356;\n  cursor: pointer; }\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 1000; }\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n:host {\n  background: #E3E3E3; }\n.footer {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  padding: 1.5rem 0; }\n@media (min-width: 900px) {\n    .footer {\n      width: 900px;\n      margin: auto; } }\n.text {\n  padding-left: 1rem;\n  font: 14px/14px Lato;\n  color: #747578; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"header\">\n      <app-logo></app-logo>\n      <app-user-login></app-user-login>\n  </div>\n</header>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\nhtml, body {\n  font: 16px/16px Lato;\n  height: 100%;\n  margin: 0; }\n.button {\n  font: 12px/12px Lato;\n  width: 5rem;\n  outline: none;\n  color: #FFFFFF;\n  background-color: #FF6008;\n  border: 1px solid #FF6008;\n  border-radius: 2rem;\n  padding: 0 1rem;\n  line-height: 2rem;\n  height: 2rem;\n  text-align: center;\n  cursor: pointer;\n  text-transform: uppercase; }\n.button_wide {\n    width: 16rem; }\n.button_large {\n    height: 3rem; }\n.button:hover {\n    color: #FF6008;\n    background-color: #FFFFFF;\n    border: 1px solid #FF6008; }\n.button_optional {\n    color: #000000;\n    background-color: #FFFFFF;\n    border: 1px solid #DFDFDF; }\n.button_optional:hover {\n      color: #000000;\n      background-color: #FFFFFF;\n      border: 1px solid #000000; }\n.input {\n  font: 18px/18px Lato;\n  padding: 0 1rem;\n  color: #000000;\n  background-color: #EEEEEE;\n  line-height: 1em;\n  height: 3rem;\n  border: none; }\n.input_textarea {\n    line-height: 1.3em;\n    padding-top: 0.5em;\n    padding-bottom: 0.5em;\n    min-height: 3rem;\n    resize: vertical; }\n.input:focus {\n  outline: #B6B6B6 solid 1px; }\n.input::-webkit-input-placeholder {\n  color: #B6B6B6; }\n.input:-ms-input-placeholder {\n  color: #B6B6B6; }\n.input::-ms-input-placeholder {\n  color: #B6B6B6; }\n.input::placeholder {\n  color: #B6B6B6; }\n.search-field {\n  height: 2rem;\n  border-radius: 2rem;\n  border: 1px solid #DEDEDE;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  font: 16px/16px Lato;\n  padding: 0 1rem;\n  outline: none; }\n.search-button {\n  font-size: 1rem;\n  line-height: 2rem;\n  margin-left: -2rem;\n  margin-right: 1rem;\n  color: #515356;\n  cursor: pointer; }\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 1000; }\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n:host {\n  background: #FFFFFF;\n  border-bottom: 1px solid #EEEEEE; }\n.header {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.5rem 0; }\n@media (min-width: 900px) {\n    .header {\n      width: 900px;\n      margin: auto; } }\n@media (min-width: 900px) {\n    .header {\n      padding: 1.5rem 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/logo/logo.component.html":
/***/ (function(module, exports) {

module.exports = "<fa [ngClass]=\"{'fa-spin': logoSpin}\" class=\"logo\" name=\"grav\" (click)=\"logoSpin = !logoSpin\"></fa>\n<span class=\"title\" (click)=\"titleClicked()\">\n  Angular mentoring\n</span>"

/***/ }),

/***/ "../../../../../src/app/header/logo/logo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.logo {\n  font-size: 2rem;\n  line-height: 2rem;\n  margin: 0 0.5rem;\n  color: #FF6008; }\n\n.title {\n  font: bold 25px/2rem Lato;\n  padding: 0 0.5rem;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/logo/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoComponent = /** @class */ (function () {
    function LogoComponent(router) {
        this.logoSpin = false;
        this.router = router;
    }
    LogoComponent.prototype.titleClicked = function () {
        this.router.navigate(['']);
    };
    LogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logo',
            template: __webpack_require__("../../../../../src/app/header/logo/logo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/logo/logo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info\" *ngIf=\"userInfo != null\">\n  <span class=\"first-name\">{{userInfo.firstName}}</span>\n  <span class=\"last-name\">{{userInfo.lastName}}</span>\n</div>\n<fa *ngIf=\"!loggedIn\" name=\"user-circle-o\" (click)=\"loginClicked()\" class=\"control\"></fa>\n<fa *ngIf=\"loggedIn\" name=\"sign-out\" (click)=\"logoutClicked()\" class=\"control\"></fa>\n"

/***/ }),

/***/ "../../../../../src/app/header/user-login/user-login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".control {\n  font-size: 2rem;\n  line-height: 2rem;\n  margin-right: 1rem;\n  cursor: pointer;\n  color: #515356; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared-services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.loggedIn = false;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedIn = this.auth.loggedIn();
        if (this.loggedIn) {
            this.getUserInfo();
        }
        this._loginSubscription = this.auth.loginEvent.subscribe(function (value) {
            _this.loggedIn = value;
            if (value === true) {
                _this.getUserInfo();
            }
        });
    };
    UserLoginComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.auth.getUserInfo().subscribe(function (info) { return _this.userInfo = info; });
    };
    UserLoginComponent.prototype.loginClicked = function (name, password) {
        this.router.navigate(['/login']);
    };
    UserLoginComponent.prototype.logoutClicked = function () {
        this.router.navigate(['']);
        this.userInfo = null;
        this.auth.logOut();
    };
    UserLoginComponent.prototype.ngOnDestroy = function () {
        if (this._loginSubscription) {
            this._loginSubscription.unsubscribe();
        }
    };
    UserLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-login',
            template: __webpack_require__("../../../../../src/app/header/user-login/user-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/user-login/user-login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"header\">Log into your account</div>\n  <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\" class=\"login-form\">\n    <input [(ngModel)]=\"userName\" name=\"name\" type=\"text\" class=\"input form-group\" placeholder=\"Email Address\">\n    <input [(ngModel)]=\"userPassword\" name=\"password\" type=\"password\" class=\"input form-group\" placeholder=\"Password\">\n    <div class=\"controls\">\n      <button class=\"button button_large button_optional button_wide\" (click)=\"onCancelClick()\">Cancel</button>\n      <button type=\"submit\" class=\"button button_large button_wide\">Log in</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 1rem; }\n\n.login-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.controls {\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 0 1rem; }\n\n.form-group {\n  margin-bottom: 1rem; }\n\n.header {\n  margin: 1rem 0;\n  font: 20px/20px Lato; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared-services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, locationService) {
        this.auth = auth;
        this.router = router;
        this.locationService = locationService;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._loginSubscription = this.auth.logIn(this.userName, this.userPassword).subscribe(function () {
            _this.router.navigate(['']);
        });
    };
    LoginComponent.prototype.onCancelClick = function () {
        this.locationService.back();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this._loginSubscription) {
            this._loginSubscription.unsubscribe();
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared-services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_storage_service__ = __webpack_require__("../../../../../src/app/shared-services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http, localStorageService) {
        this.http = http;
        this.localStorageService = localStorageService;
        this.tokenKey = 'access_token';
        this.loginEvent = new __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
    }
    AuthService.prototype.getToken = function () {
        return this.localStorageService.getItem(this.tokenKey);
    };
    AuthService.prototype.storeToken = function (token) {
        this.localStorageService.setItem(this.tokenKey, token);
    };
    AuthService.prototype.removeToken = function () {
        this.localStorageService.removeItem(this.tokenKey);
    };
    AuthService.prototype.loggedIn = function () {
        var token = this.getToken();
        return token != null && token !== '';
    };
    AuthService.prototype.logIn = function (username, password) {
        var _this = this;
        var creds = {
            username: username,
            password: password
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiEndpoint + "/auth/login", creds).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (response) {
            _this.storeToken(response.token);
            _this.loginEvent.next(true);
            return true;
        }));
    };
    AuthService.prototype.logOut = function () {
        this.removeToken();
        this.loginEvent.next(false);
    };
    AuthService.prototype.getUserInfo = function () {
        var token = this.getToken();
        if (token == null || token === '') {
            return null;
        }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiEndpoint + "/auth/userinfo").pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (info) {
            return {
                firstName: info.first,
                lastName: info.last
            };
        }));
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__local_storage_service__["a" /* LocalStorageService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/shared-services/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageService.prototype.setItem = function (key, value) {
        localStorage.setItem(key, value);
    };
    LocalStorageService.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "../../../../../src/app/shared-services/token-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/shared-services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(inj) {
        this.inj = inj;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var auth = this.inj.get(__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]);
        var token = auth.getToken();
        if (token != null) {
            request = request.clone({
                setHeaders: {
                    Authorization: "" + token
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiEndpoint: 'http://localhost:3004'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map