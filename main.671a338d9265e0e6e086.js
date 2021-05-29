(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!**********************************************!*\
  !*** multi ./projects/easy-docs/src/main.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Paul\Documents\GitHub\easy\projects\easy-docs\src\main.ts */"cNt2");


/***/ }),

/***/ "3TxP":
/*!**********************************************************!*\
  !*** ./projects/easy-docs/src/app/app-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var C_Users_Paul_Documents_GitHub_easy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "20ZU");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [{
  path: 'components',
  loadChildren: function () {
    var _ref = Object(C_Users_Paul_Documents_GitHub_easy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield __webpack_require__.e(/*! import() | projects-easy-docs-src-app-components-components-module */ "projects-easy-docs-src-app-components-components-module").then(__webpack_require__.bind(null, /*! projects/easy-docs/src/app/components/components.module */ "vGaj")).then(module => {
        return module.ComponentsModule;
      });
    });

    return function loadChildren() {
      return _ref.apply(this, arguments);
    };
  }()
}, {
  path: 'layout',
  loadChildren: function () {
    var _ref2 = Object(C_Users_Paul_Documents_GitHub_easy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield __webpack_require__.e(/*! import() | projects-easy-docs-src-app-layout-layout-module */ "projects-easy-docs-src-app-layout-layout-module").then(__webpack_require__.bind(null, /*! projects/easy-docs/src/app/layout/layout.module */ "K4rp")).then(module => {
        return module.LayoutModule;
      });
    });

    return function loadChildren() {
      return _ref2.apply(this, arguments);
    };
  }()
}, {
  path: 'utilities',
  loadChildren: function () {
    var _ref3 = Object(C_Users_Paul_Documents_GitHub_easy_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield __webpack_require__.e(/*! import() | projects-easy-docs-src-app-utilities-utilities-module */ "projects-easy-docs-src-app-utilities-utilities-module").then(__webpack_require__.bind(null, /*! projects/easy-docs/src/app/utilities/utilities.module */ "T+I9")).then(module => {
        return module.UtilitiesModule;
      });
    });

    return function loadChildren() {
      return _ref3.apply(this, arguments);
    };
  }()
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'components'
}, {
  path: '**',
  pathMatch: 'full',
  redirectTo: 'components'
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__["PreloadAllModules"],
    relativeLinkResolution: 'corrected',
    scrollPositionRestoration: 'top'
  })]
})], AppRoutingModule);


/***/ }),

/***/ "62Ph":
/*!************************************************************!*\
  !*** ./projects/easy-docs/src/environments/environment.ts ***!
  \************************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true
};


/***/ }),

/***/ "6n7z":
/*!*********************************************************************!*\
  !*** ./dist/easy-framework/__ivy_ngcc__/fesm2015/easy-framework.js ***!
  \*********************************************************************/
/*! exports provided: AlertComponent, AlertModule, BadgeComponent, BadgeModule, ButtonComponent, ButtonModule, CardComponent, CardModule, ComponentsModule, EasyComponent, EasyModule, FlexboxComponent, FlexboxModule, FormComponent, FormModule, GridComponent, GridModule, LayoutModule, NavComponent, NavModule, ProgressComponent, ProgressModule, SliderComponent, SliderModule, SpinnerComponent, SpinnerModule, SwitchComponent, SwitchModule, TabComponent, TabModule, TableComponent, TableModule, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeComponent", function() { return BadgeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeModule", function() { return BadgeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasyComponent", function() { return EasyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasyModule", function() { return EasyModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexboxComponent", function() { return FlexboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexboxModule", function() { return FlexboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return GridModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavModule", function() { return NavModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressModule", function() { return ProgressModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderModule", function() { return SliderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerModule", function() { return SpinnerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchModule", function() { return SwitchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabModule", function() { return TabModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return AlertService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return SharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return FormService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ProgressService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return SliderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return SwitchService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return TabService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["class", "alert-bad"];
function AlertComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onClose(); })("keydown", function AlertComponent_button_2_Template_button_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onTrap($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = ["*"];
const _c2 = ["class", "badge-sm"];
const _c3 = ["class", "btn"];
const _c4 = ["class", "card"];
const _c5 = ["class", "checkbox-label"];
const _c6 = ["class", "progress"];
const _c7 = ["class", "slider-circle"];
const _c8 = ["class", "spinner"];
const _c9 = ["class", "switch-circle"];
const _c10 = ["class", "tab-btn"];
const _c11 = ["class", "table"];
const _c12 = ["class", "col"];
const _c13 = ["class", "grid"];
const _c14 = ["class", "nav-h"];
class AlertService {
    constructor() {
        this.uniqueAlertId = 0;
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AlertService_Factory() { return new AlertService(); }, token: AlertService, providedIn: "root" });
AlertService.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.class = '';
        this.currentAlertId = '';
        this.currentHasClose = false;
        this.uniqueAlertId = this.alertService.uniqueAlertId;
    }
    get hostAriaHidden() {
        return this.class.includes('hide') ? 'true' : null;
    }
    get hostAriaLabelledby() {
        const alertId = `alert-${this.uniqueAlertId}`;
        this.alertId = alertId;
        return alertId;
    }
    get hostClass() {
        return this.class;
    }
    get hostRole() {
        return this.hasClose ? 'alertdialog' : 'alert';
    }
    get hostTabindex() {
        return '-1';
    }
    get alertId() {
        return this.currentAlertId;
    }
    set alertId(alertId) {
        this.currentAlertId = alertId;
    }
    get hasClose() {
        return this.currentHasClose;
    }
    set hasClose(hasClose) {
        this.currentHasClose = hasClose;
    }
    ngOnInit() {
        this.uniqueAlertId = this.alertService.uniqueAlertId++;
        if (this.class.includes('close')) {
            this.class = this.class.replace(/ close|close /gu, '');
            this.hasClose = true;
        }
        else {
            this.hasClose = false;
        }
    }
    onClose() {
        this.class = 'hide';
    }
    onTrap(event) {
        if (event.key === 'Tab' || (event.shiftKey && event.key === 'Tab')) {
            event.preventDefault();
        }
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AlertService)); };
AlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["", 8, "alert-bad"], ["", 8, "alert-good"], ["", 8, "alert-info"], ["", 8, "alert-warn"]], hostVars: 5, hostBindings: function AlertComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", ctx.hostAriaHidden)("aria-labelledby", ctx.hostAriaLabelledby)("class", ctx.hostClass)("role", ctx.hostRole)("tabindex", ctx.hostTabindex);
    } }, inputs: { class: "class" }, attrs: _c0, ngContentSelectors: _c1, decls: 3, vars: 2, consts: [[3, "id"], ["class", "close", "type", "button", "aria-label", "close alert", 3, "click", "keydown", 4, "ngIf"], ["type", "button", "aria-label", "close alert", 1, "close", 3, "click", "keydown"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlertComponent_button_2_Template, 2, 0, "button", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.alertId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasClose);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[class^=alert]{align-items:center;color:#fff;display:flex;justify-content:space-between;padding:.5rem 1rem}[class^=alert].hide{display:none}.alert-bad{background-color:#ba000d}.alert-good{background-color:#4caf50}.alert-info{background-color:#0069c0}.alert-warn{background-color:#ffeb3b;color:#191919}.close{color:inherit}"], encapsulation: 2, changeDetection: 0 });
AlertComponent.ctorParameters = () => [
    { type: AlertService }
];
AlertComponent.propDecorators = {
    hostAriaHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-hidden',] }],
    hostAriaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-labelledby',] }],
    hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.class',] }],
    hostRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.role',] }],
    hostTabindex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.tabindex',] }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '.alert-bad, .alert-good, .alert-info, .alert-warn',
                template: "<p [id]=\"alertId\">\r\n    <ng-content></ng-content>\r\n</p>\r\n\r\n<button *ngIf=\"hasClose\" (click)=\"onClose()\" (keydown)=\"onTrap($event)\" class=\"close\" type=\"button\" aria-label=\"close alert\">X</button>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: ["[class^=alert]{align-items:center;color:#fff;display:flex;justify-content:space-between;padding:.5rem 1rem}[class^=alert].hide{display:none}.alert-bad{background-color:#ba000d}.alert-good{background-color:#4caf50}.alert-info{background-color:#0069c0}.alert-warn{background-color:#ffeb3b;color:#191919}.close{color:inherit}"]
            }]
    }], function () { return [{ type: AlertService }]; }, { class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hostAriaHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-hidden']
        }], hostAriaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-labelledby']
        }], hostClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.class']
        }], hostRole: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.role']
        }], hostTabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.tabindex']
        }] }); })();

class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { exports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; } }); })();

class AlertModule {
}
AlertModule.ɵfac = function AlertModule_Factory(t) { return new (t || AlertModule)(); };
AlertModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AlertModule });
AlertModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            SharedModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    AlertComponent
                ],
                exports: [
                    AlertComponent
                ],
                imports: [
                    SharedModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlertModule, { declarations: [AlertComponent], imports: [SharedModule], exports: [AlertComponent] }); })();

class BadgeComponent {
}
BadgeComponent.ɵfac = function BadgeComponent_Factory(t) { return new (t || BadgeComponent)(); };
BadgeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BadgeComponent, selectors: [["", 8, "badge-sm"], ["", 8, "badge-md"], ["", 8, "badge-lg"]], attrs: _c2, ngContentSelectors: _c1, decls: 1, vars: 0, template: function BadgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[class^=badge]{border-radius:1rem;display:inline-block}[class^=badge]:empty{display:none}.badge-sm{line-height:.5rem;padding:.5rem}.badge-md{line-height:.625rem;padding:.625rem}.badge-lg{line-height:.75rem;padding:.75rem}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BadgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '.badge-sm, .badge-md, .badge-lg',
                template: "<ng-content></ng-content>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: ["[class^=badge]{border-radius:1rem;display:inline-block}[class^=badge]:empty{display:none}.badge-sm{line-height:.5rem;padding:.5rem}.badge-md{line-height:.625rem;padding:.625rem}.badge-lg{line-height:.75rem;padding:.75rem}"]
            }]
    }], null, null); })();

class BadgeModule {
}
BadgeModule.ɵfac = function BadgeModule_Factory(t) { return new (t || BadgeModule)(); };
BadgeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BadgeModule });
BadgeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BadgeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    BadgeComponent
                ],
                exports: [
                    BadgeComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BadgeModule, { declarations: [BadgeComponent], exports: [BadgeComponent] }); })();

class ButtonComponent {
    constructor() {
        this.ariaLabel = null;
        this.class = '';
        this.type = '';
    }
    get hostAriaLabel() {
        if (this.ariaLabel) {
            return this.ariaLabel;
        }
        else if (this.class.includes('btn-group')) {
            return (/\bbtn-group\S+\b/u).exec(this.class)[0];
        }
        else {
            return null;
        }
    }
    get hostRole() {
        return this.class.includes('btn-group') ? 'group' : null;
    }
    get hostType() {
        var _a;
        return this.class.includes('btn-group') ? null : (_a = this.type) !== null && _a !== void 0 ? _a : 'button';
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["", 8, "btn"], ["", 8, "btn-full"], ["", 8, "btn-lg"], ["", 8, "btn-md"], ["", 8, "btn-sm"], ["", 8, "btn-xl"], ["", 8, "btn-xs"], ["", 8, "btn-group-col"], ["", 8, "btn-group-full"], ["", 8, "btn-group-row"]], hostVars: 3, hostBindings: function ButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.hostAriaLabel)("role", ctx.hostRole)("type", ctx.hostType);
    } }, inputs: { ariaLabel: ["aria-label", "ariaLabel"], class: "class", type: "type" }, attrs: _c3, ngContentSelectors: _c1, decls: 1, vars: 0, template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: [".btn,.btn-full,.btn-lg,.btn-md,.btn-sm,.btn-xl,.btn-xs{border:none}.btn-full:not(:last-of-type),.btn-lg:not(:last-of-type),.btn-md:not(:last-of-type),.btn-sm:not(:last-of-type),.btn-xl:not(:last-of-type),.btn-xs:not(:last-of-type),.btn:not(:last-of-type){margin-bottom:1rem;margin-right:1rem}.btn-full.rounded,.btn-lg.rounded,.btn-md.rounded,.btn-sm.rounded,.btn-xl.rounded,.btn-xs.rounded,.btn.rounded{border-radius:1.5rem}.btn-full,.btn-md{padding:.75rem 1.875rem}.btn-full{width:100%}.btn-lg{padding:.875rem 2.5rem}.btn-sm{padding:.625rem 1.25rem}.btn-xl{padding:1rem 3.125rem}.btn-xs{padding:.5rem .625rem}[class*=btn-group]{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:flex-start;padding-bottom:1rem;padding-top:1rem}[class*=btn-group] [class*=btn]{border-bottom:.0625rem solid #fff;border-right:.0625rem solid #fff;margin:0}.btn-group-col{flex-direction:column}.btn-group-full [class*=btn]{flex:1 0 auto}"], encapsulation: 2, changeDetection: 0 });
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    hostAriaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-label',] }],
    hostRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.role',] }],
    hostType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.type',] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-label',] }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '.btn, .btn-full, .btn-lg, .btn-md, .btn-sm, .btn-xl, .btn-xs, .btn-group-col, .btn-group-full, .btn-group-row',
                template: "<ng-content></ng-content>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [".btn,.btn-full,.btn-lg,.btn-md,.btn-sm,.btn-xl,.btn-xs{border:none}.btn-full:not(:last-of-type),.btn-lg:not(:last-of-type),.btn-md:not(:last-of-type),.btn-sm:not(:last-of-type),.btn-xl:not(:last-of-type),.btn-xs:not(:last-of-type),.btn:not(:last-of-type){margin-bottom:1rem;margin-right:1rem}.btn-full.rounded,.btn-lg.rounded,.btn-md.rounded,.btn-sm.rounded,.btn-xl.rounded,.btn-xs.rounded,.btn.rounded{border-radius:1.5rem}.btn-full,.btn-md{padding:.75rem 1.875rem}.btn-full{width:100%}.btn-lg{padding:.875rem 2.5rem}.btn-sm{padding:.625rem 1.25rem}.btn-xl{padding:1rem 3.125rem}.btn-xs{padding:.5rem .625rem}[class*=btn-group]{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:flex-start;padding-bottom:1rem;padding-top:1rem}[class*=btn-group] [class*=btn]{border-bottom:.0625rem solid #fff;border-right:.0625rem solid #fff;margin:0}.btn-group-col{flex-direction:column}.btn-group-full [class*=btn]{flex:1 0 auto}"]
            }]
    }], function () { return []; }, { ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-label']
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hostAriaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-label']
        }], hostRole: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.role']
        }], hostType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.type']
        }] }); })();

class ButtonModule {
}
ButtonModule.ɵfac = function ButtonModule_Factory(t) { return new (t || ButtonModule)(); };
ButtonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ButtonModule });
ButtonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    ButtonComponent
                ],
                exports: [
                    ButtonComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ButtonModule, { declarations: [ButtonComponent], exports: [ButtonComponent] }); })();

class CardComponent {
    constructor() {
        this.class = '';
    }
    get hostRole() {
        return this.class.includes('cards') ? 'group' : null;
    }
    get hostTabindex() {
        return this.class.includes('card-focus') ? '0' : null;
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["", 8, "card"], ["", 8, "cards"]], hostVars: 2, hostBindings: function CardComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.hostRole)("tabindex", ctx.hostTabindex);
    } }, inputs: { class: "class" }, attrs: _c4, ngContentSelectors: _c1, decls: 1, vars: 0, template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[class^=card]{max-width:100%}.card{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12);background-color:#fff;border:.0625rem solid #bdbdbd;border-radius:.5rem;flex:1 0 31.25rem;margin:.5rem;padding:1rem}@media (min-width:30em){.card{max-width:calc(50% - 1.1rem)}}@media (min-width:48em){.card{max-width:calc(33% - 1.1rem)}}@media (min-width:64em){.card{max-width:calc(25% - 1.1rem)}}@media (min-width:85.375em){.card{max-width:calc(20% - 1.1rem)}}.card.card-focus:active,.card.card-focus:focus,.card.card-focus:hover{box-shadow:0 .1875rem .75rem rgba(0,0,0,.23),0 .1875rem .75rem rgba(0,0,0,.16)}.cards{justify-content:center;display:flex;flex-wrap:wrap}"], encapsulation: 2, changeDetection: 0 });
CardComponent.ctorParameters = () => [];
CardComponent.propDecorators = {
    hostRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.role',] }],
    hostTabindex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.tabindex',] }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '.card, .cards',
                template: "<ng-content></ng-content>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: ["[class^=card]{max-width:100%}.card{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12);background-color:#fff;border:.0625rem solid #bdbdbd;border-radius:.5rem;flex:1 0 31.25rem;margin:.5rem;padding:1rem}@media (min-width:30em){.card{max-width:calc(50% - 1.1rem)}}@media (min-width:48em){.card{max-width:calc(33% - 1.1rem)}}@media (min-width:64em){.card{max-width:calc(25% - 1.1rem)}}@media (min-width:85.375em){.card{max-width:calc(20% - 1.1rem)}}.card.card-focus:active,.card.card-focus:focus,.card.card-focus:hover{box-shadow:0 .1875rem .75rem rgba(0,0,0,.23),0 .1875rem .75rem rgba(0,0,0,.16)}.cards{justify-content:center;display:flex;flex-wrap:wrap}"]
            }]
    }], function () { return []; }, { class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hostRole: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.role']
        }], hostTabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.tabindex']
        }] }); })();

class CardModule {
}
CardModule.ɵfac = function CardModule_Factory(t) { return new (t || CardModule)(); };
CardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CardModule });
CardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    CardComponent
                ],
                exports: [
                    CardComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CardModule, { declarations: [CardComponent], exports: [CardComponent] }); })();

class FormService {
    constructor() {
        this.uniqueFormFieldId = 0;
        this.uniqueFormFieldLabelId = 0;
    }
}
FormService.ɵfac = function FormService_Factory(t) { return new (t || FormService)(); };
FormService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function FormService_Factory() { return new FormService(); }, token: FormService, providedIn: "root" });
FormService.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class FormComponent {
    constructor(formService) {
        this.formService = formService;
        this.class = '';
        this.for = null;
        this.id = null;
        this.uniqueFormFieldId = this.formService.uniqueFormFieldId;
        this.uniqueFormFieldLabelId = this.formService.uniqueFormFieldLabelId;
    }
    get hostClass() {
        if (this.class.includes('form-label') && !this.class.includes('pad-')) {
            return `${this.class} pad-b-xs`;
        }
        else if ((this.class.includes('checkbox-label') || this.class.includes('radio-label')) && !this.class.includes('pad-')) {
            return `${this.class} pad-lr-sm`;
        }
        else if (this.class.includes('field-group') && !this.class.includes('pad-')) {
            return `${this.class} pad-tb-sm`;
        }
        else if (this.class.includes('form-field') && !this.class.includes('pad-')) {
            return `${this.class} pad-a-xs`;
        }
        else {
            return this.class;
        }
    }
    get hostFor() {
        var _a;
        return this.class.includes('form-label') || this.class.includes('checkbox-label') || this.class.includes('radio-label') ? (_a = this.for) !== null && _a !== void 0 ? _a : `form-field-${this.uniqueFormFieldLabelId}` : null;
    }
    get hostId() {
        var _a;
        return this.class.includes('form-field') ? (_a = this.id) !== null && _a !== void 0 ? _a : `form-field-${this.uniqueFormFieldId}` : null;
    }
    get hostRole() {
        return this.class.includes('radio-group') ? 'radiogroup' : null;
    }
    ngOnInit() {
        this.uniqueFormFieldId = this.class.includes('form-field') ? this.formService.uniqueFormFieldId++ : 0;
        this.uniqueFormFieldLabelId = this.class.includes('-label') ? this.formService.uniqueFormFieldLabelId++ : 0;
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FormService)); };
FormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["", 8, "checkbox-label"], ["", 8, "checkbox-group"], ["", 8, "field-group"], ["", 8, "fieldset"], ["", 8, "form-field"], ["", 8, "form-group"], ["", 8, "form-group-inline"], ["", 8, "form-label"], ["", 8, "radio-label"], ["", 8, "radio-group"]], hostVars: 4, hostBindings: function FormComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx.hostClass)("for", ctx.hostFor)("id", ctx.hostId)("role", ctx.hostRole);
    } }, inputs: { class: "class", for: "for", id: "id" }, attrs: _c5, ngContentSelectors: _c1, decls: 1, vars: 0, template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["select.form-field[multiple],textarea.form-field{height:6.25rem}select.form-field:not([multiple]){padding-bottom:0;padding-top:0}.checkbox-group,.radio-group{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.checkbox-group:not(:last-child),.radio-group:not(:last-child){margin-bottom:1rem}.checkbox-group .field-group,.radio-group .field-group{flex-wrap:nowrap;justify-content:center;padding-bottom:0}.checkbox-group .field-group .checkbox-label,.checkbox-group .field-group .radio-label,.radio-group .field-group .checkbox-label,.radio-group .field-group .radio-label{width:5rem}.checkbox-group .field-group .checkbox-label:hover,.checkbox-group .field-group .radio-label:hover,.radio-group .field-group .checkbox-label:hover,.radio-group .field-group .radio-label:hover{cursor:pointer}.checkbox-group .field-group .form-field,.radio-group .field-group .form-field{height:1.25rem;width:1.25rem}.checkbox-group .field-group .form-field[type=radio],.radio-group .field-group .form-field[type=radio]{border:.1rem solid #bdbdbd;outline:none}.checkbox-group .field-group .form-field[type=radio]:checked:before,.radio-group .field-group .form-field[type=radio]:checked:before{transform:translate(-.5rem,-.5rem);-moz-transform:translate(-.453125rem,-.46875rem)}.checkbox-group .field-group .form-field:checked:before,.radio-group .field-group .form-field:checked:before{background-color:#2196f3;height:1rem;transform:translate(-.375rem,-.375rem);width:1rem}.checkbox-group .field-group .form-field:disabled+.checkbox-label,.checkbox-group .field-group .form-field:disabled+.radio-label,.radio-group .field-group .form-field:disabled+.checkbox-label,.radio-group .field-group .form-field:disabled+.radio-label{color:#8d8d8d}.checkbox-group .field-group .form-field:disabled+.checkbox-label:hover,.checkbox-group .field-group .form-field:disabled+.radio-label:hover,.radio-group .field-group .form-field:disabled+.checkbox-label:hover,.radio-group .field-group .form-field:disabled+.radio-label:hover{cursor:not-allowed}.field-group{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.fieldset{border:.1rem solid #2196f3;padding:.375rem .75rem .75rem}.form-field{outline:.1rem solid #bdbdbd;height:2.5rem}.form-field:active:not([disabled]):not([readonly]),.form-field:focus:not([disabled]):not([readonly]),.form-field:hover:not([disabled]):not([readonly]){outline:.1rem solid #2196f3}.form-field:-moz-placeholder{color:#8d8d8d;opacity:1}.form-field:-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field:not([type=checkbox]):not([type=radio]){flex:1 0 13.75rem}.form-field::-moz-placeholder{color:#8d8d8d;opacity:1}.form-field:-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field::placeholder{color:#8d8d8d;opacity:1}.form-field::-webkit-input-placeholder{color:#8d8d8d;opacity:.54}.form-group-inline{align-items:flex-start;display:block;flex-wrap:wrap;justify-content:flex-start}@media (min-width:48em){.form-group-inline{display:flex}}.form-group-inline .field-group{flex:1 1 13.75rem}@media (min-width:48em){.form-group-inline .field-group:not(:first-of-type){padding-left:1.5rem}}.form-group-inline .field-group .form-label{flex:1 0 7.5rem;max-width:13.75rem;padding-bottom:.5rem}@media (min-width:48em){.form-group-inline .field-group .form-label{padding-bottom:0}}.form-label{display:block;width:100%}"], encapsulation: 2, changeDetection: 0 });
FormComponent.ctorParameters = () => [
    { type: FormService }
];
FormComponent.propDecorators = {
    hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.class',] }],
    hostFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.for',] }],
    hostId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.id',] }],
    hostRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.role',] }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    for: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '.checkbox-label, .checkbox-group, .field-group, .fieldset, .form-field, .form-group, .form-group-inline, .form-label, .radio-label, .radio-group',
                template: "<ng-content></ng-content>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: ["select.form-field[multiple],textarea.form-field{height:6.25rem}select.form-field:not([multiple]){padding-bottom:0;padding-top:0}.checkbox-group,.radio-group{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.checkbox-group:not(:last-child),.radio-group:not(:last-child){margin-bottom:1rem}.checkbox-group .field-group,.radio-group .field-group{flex-wrap:nowrap;justify-content:center;padding-bottom:0}.checkbox-group .field-group .checkbox-label,.checkbox-group .field-group .radio-label,.radio-group .field-group .checkbox-label,.radio-group .field-group .radio-label{width:5rem}.checkbox-group .field-group .checkbox-label:hover,.checkbox-group .field-group .radio-label:hover,.radio-group .field-group .checkbox-label:hover,.radio-group .field-group .radio-label:hover{cursor:pointer}.checkbox-group .field-group .form-field,.radio-group .field-group .form-field{height:1.25rem;width:1.25rem}.checkbox-group .field-group .form-field[type=radio],.radio-group .field-group .form-field[type=radio]{border:.1rem solid #bdbdbd;outline:none}.checkbox-group .field-group .form-field[type=radio]:checked:before,.radio-group .field-group .form-field[type=radio]:checked:before{transform:translate(-.5rem,-.5rem);-moz-transform:translate(-.453125rem,-.46875rem)}.checkbox-group .field-group .form-field:checked:before,.radio-group .field-group .form-field:checked:before{background-color:#2196f3;height:1rem;transform:translate(-.375rem,-.375rem);width:1rem}.checkbox-group .field-group .form-field:disabled+.checkbox-label,.checkbox-group .field-group .form-field:disabled+.radio-label,.radio-group .field-group .form-field:disabled+.checkbox-label,.radio-group .field-group .form-field:disabled+.radio-label{color:#8d8d8d}.checkbox-group .field-group .form-field:disabled+.checkbox-label:hover,.checkbox-group .field-group .form-field:disabled+.radio-label:hover,.radio-group .field-group .form-field:disabled+.checkbox-label:hover,.radio-group .field-group .form-field:disabled+.radio-label:hover{cursor:not-allowed}.field-group{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.fieldset{border:.1rem solid #2196f3;padding:.375rem .75rem .75rem}.form-field{outline:.1rem solid #bdbdbd;height:2.5rem}.form-field:active:not([disabled]):not([readonly]),.form-field:focus:not([disabled]):not([readonly]),.form-field:hover:not([disabled]):not([readonly]){outline:.1rem solid #2196f3}.form-field:-moz-placeholder{color:#8d8d8d;opacity:1}.form-field:-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field:not([type=checkbox]):not([type=radio]){flex:1 0 13.75rem}.form-field::-moz-placeholder{color:#8d8d8d;opacity:1}.form-field:-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field::placeholder{color:#8d8d8d;opacity:1}.form-field::-webkit-input-placeholder{color:#8d8d8d;opacity:.54}.form-group-inline{align-items:flex-start;display:block;flex-wrap:wrap;justify-content:flex-start}@media (min-width:48em){.form-group-inline{display:flex}}.form-group-inline .field-group{flex:1 1 13.75rem}@media (min-width:48em){.form-group-inline .field-group:not(:first-of-type){padding-left:1.5rem}}.form-group-inline .field-group .form-label{flex:1 0 7.5rem;max-width:13.75rem;padding-bottom:.5rem}@media (min-width:48em){.form-group-inline .field-group .form-label{padding-bottom:0}}.form-label{display:block;width:100%}"]
            }]
    }], function () { return [{ type: FormService }]; }, { class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], for: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hostClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.class']
        }], hostFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.for']
        }], hostId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.id']
        }], hostRole: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.role']
        }] }); })();

class FormModule {
}
FormModule.ɵfac = function FormModule_Factory(t) { return new (t || FormModule)(); };
FormModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormModule });
FormModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    FormComponent
                ],
                exports: [
                    FormComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormModule, { declarations: [FormComponent], exports: [FormComponent] }); })();

class ProgressService {
    constructor() {
        this.uniqueProgressInputId = 0;
        this.uniqueProgressLabelId = 0;
    }
}
ProgressService.ɵfac = function ProgressService_Factory(t) { return new (t || ProgressService)(); };
ProgressService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ProgressService_Factory() { return new ProgressService(); }, token: ProgressService, providedIn: "root" });
ProgressService.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class ProgressComponent {
    constructor(progressService) {
        this.progressService = progressService;
        this.class = '';
        this.for = null;
        this.id = null;
        this.max = '100';
        this.value = null;
        this.uniqueProgressInputId = this.progressService.uniqueProgressInputId;
        this.uniqueProgressLabelId = this.progressService.uniqueProgressLabelId;
    }
    get hostFor() {
        var _a;
        return this.class.includes('progress-label') ? (_a = this.for) !== null && _a !== void 0 ? _a : `progress-${this.uniqueProgressLabelId}` : null;
    }
    get hostId() {
        var _a;
        return this.class.includes('progress-label') ? null : (_a = this.id) !== null && _a !== void 0 ? _a : `progress-${this.uniqueProgressInputId}`;
    }
    get hostMax() {
        if (this.class.includes('progress-label')) {
            return null;
        }
        else if (Number(this.max) > 0) {
            return this.max;
        }
        else {
            return '100';
        }
    }
    get hostPosition() {
        if (this.class.includes('progress-label')) {
            return null;
        }
        else if (this.hostValue) {
            return String(Number(this.hostValue) / Number(this.hostMax));
        }
        else {
            return '-1';
        }
    }
    get hostValue() {
        if (this.class.includes('progress-label') || !this.value) {
            return null;
        }
        else if (Number(this.value) >= 0 && Number(this.value) <= Number(this.max)) {
            return this.value;
        }
        else {
            return '0';
        }
    }
    ngOnInit() {
        this.uniqueProgressInputId = this.class.includes('progress-label') ? 0 : this.progressService.uniqueProgressInputId++;
        this.uniqueProgressLabelId = this.class.includes('progress-label') ? this.progressService.uniqueProgressLabelId++ : 0;
    }
}
ProgressComponent.ɵfac = function ProgressComponent_Factory(t) { return new (t || ProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ProgressService)); };
ProgressComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressComponent, selectors: [["", 8, "progress"], ["", 8, "progress-label"], ["", 8, "progress-striped"]], hostVars: 5, hostBindings: function ProgressComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.hostFor)("id", ctx.hostId)("max", ctx.hostMax)("position", ctx.hostPosition)("value", ctx.hostValue);
    } }, inputs: { class: "class", for: "for", id: "id", max: "max", value: "value" }, attrs: _c6, ngContentSelectors: _c1, decls: 1, vars: 0, template: function ProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[class*=progress]:not(.progress-label):indeterminate{-webkit-animation:animate-progress .5s linear infinite;animation:animate-progress .5s linear infinite;background-color:#2196f3;background-image:repeating-linear-gradient(45deg,hsla(0,0%,100%,.5) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 75%,transparent 0,transparent);background-size:2.5rem}[class*=progress]:not(.progress-label):indeterminate::-moz-progress-bar{animation:animate-progress .5s linear infinite;background-image:repeating-linear-gradient(45deg,hsla(0,0%,100%,.5) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 75%,transparent 0,transparent);background-size:2.5rem}[class*=progress]:not(.progress-label):indeterminate::-webkit-progress-bar{background:repeating-linear-gradient(45deg,hsla(0,0%,100%,.5) 25%,transparent 0,transparent 50%,transparent 75%,transparent)}[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#2196f3}[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#2196f3}[class*=progress]:not(.progress-label).rounded{border-radius:.9375rem}[class*=progress]:not(.progress-label).rounded::-moz-progress-bar{border-bottom-left-radius:.9375rem;border-top-left-radius:.9375rem}[class*=progress]:not(.progress-label).rounded::-webkit-progress-bar{border-radius:.9375rem}[class*=progress]:not(.progress-label).rounded::-webkit-progress-value{border-bottom-left-radius:.9375rem;border-top-left-radius:.9375rem}[class*=progress]:not(.progress-label).rounded[position=\"0\"]::-moz-progress-bar,[class*=progress]:not(.progress-label).rounded[position=\"1\"]::-moz-progress-bar{border-radius:.9375rem}[class*=progress]:not(.progress-label).rounded[position=\"1\"]::-webkit-progress-value{border-radius:.9375rem}@-webkit-keyframes animate-progress{to{background-position:2.5rem 0}}@keyframes animate-progress{to{background-position:2.5rem 0}}.progress-label{display:block}.progress-striped::-moz-progress-bar{background-image:repeating-linear-gradient(45deg,hsla(0,0%,100%,.5) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 75%,transparent 0,transparent);background-color:#2196f3;background-size:2.5rem}.progress-striped::-webkit-progress-value{background-image:repeating-linear-gradient(45deg,hsla(0,0%,100%,.5) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 75%,transparent 0,transparent);background-color:#2196f3;background-size:2.5rem}"], encapsulation: 2, changeDetection: 0 });
ProgressComponent.ctorParameters = () => [
    { type: ProgressService }
];
ProgressComponent.propDecorators = {
    hostFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.for',] }],
    hostId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.id',] }],
    hostMax: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.max',] }],
    hostPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.position',] }],
    hostValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.value',] }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    for: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '..progress, .progress-label, .progress-striped',
                template: "<ng-content></ng-content>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: ["[class*=progress]:not(.progress-label):indeterminate{-webkit-animation:animate-progress .5s linear infinite;animation:animate-progress .5s linear infinite;background-color:#2196f3;background-image:repeating-linear-gradient(45deg,hsla(0,0%,100%,.5) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 75%,transparent 0,transparent);background-size:2.5rem}[class*=progress]:not(.progress-label):indeterminate::-moz-progress-bar{animation:animate-progress .5s linear infinite;background-image:repeating-linear-gradient(45deg,hsla(0,0%,100%,.5) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 75%,transparent 0,transparent);background-size:2.5rem}[class*=progress]:not(.progress-label):indeterminate::-webkit-progress-bar{background:repeating-linear-gradient(45deg,hsla(0,0%,100%,.5) 25%,transparent 0,transparent 50%,transparent 75%,transparent)}[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#2196f3}[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#2196f3}[class*=progress]:not(.progress-label).rounded{border-radius:.9375rem}[class*=progress]:not(.progress-label).rounded::-moz-progress-bar{border-bottom-left-radius:.9375rem;border-top-left-radius:.9375rem}[class*=progress]:not(.progress-label).rounded::-webkit-progress-bar{border-radius:.9375rem}[class*=progress]:not(.progress-label).rounded::-webkit-progress-value{border-bottom-left-radius:.9375rem;border-top-left-radius:.9375rem}[class*=progress]:not(.progress-label).rounded[position=\"0\"]::-moz-progress-bar,[class*=progress]:not(.progress-label).rounded[position=\"1\"]::-moz-progress-bar{border-radius:.9375rem}[class*=progress]:not(.progress-label).rounded[position=\"1\"]::-webkit-progress-value{border-radius:.9375rem}@-webkit-keyframes animate-progress{to{background-position:2.5rem 0}}@keyframes animate-progress{to{background-position:2.5rem 0}}.progress-label{display:block}.progress-striped::-moz-progress-bar{background-image:repeating-linear-gradient(45deg,hsla(0,0%,100%,.5) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 75%,transparent 0,transparent);background-color:#2196f3;background-size:2.5rem}.progress-striped::-webkit-progress-value{background-image:repeating-linear-gradient(45deg,hsla(0,0%,100%,.5) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 75%,transparent 0,transparent);background-color:#2196f3;background-size:2.5rem}"]
            }]
    }], function () { return [{ type: ProgressService }]; }, { class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], for: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hostFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.for']
        }], hostId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.id']
        }], hostMax: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.max']
        }], hostPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.position']
        }], hostValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.value']
        }] }); })();

class ProgressModule {
}
ProgressModule.ɵfac = function ProgressModule_Factory(t) { return new (t || ProgressModule)(); };
ProgressModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProgressModule });
ProgressModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            SharedModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    ProgressComponent
                ],
                exports: [
                    ProgressComponent
                ],
                imports: [
                    SharedModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProgressModule, { declarations: [ProgressComponent], imports: [SharedModule], exports: [ProgressComponent] }); })();

class SliderService {
    constructor() {
        this.uniqueSliderInputId = 0;
        this.uniqueSliderLabelId = 0;
    }
}
SliderService.ɵfac = function SliderService_Factory(t) { return new (t || SliderService)(); };
SliderService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function SliderService_Factory() { return new SliderService(); }, token: SliderService, providedIn: "root" });
SliderService.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class SliderComponent {
    constructor(sliderService) {
        this.sliderService = sliderService;
        this.class = '';
        this.for = null;
        this.id = null;
        this.max = '100';
        this.min = '0';
        this.step = '1';
        this.uniqueSliderInputId = this.sliderService.uniqueSliderInputId;
        this.uniqueSliderLabelId = this.sliderService.uniqueSliderLabelId;
        this.value = '0';
    }
    get hostAriaOrientation() {
        return this.class.includes('slider-label') ? null : 'horizontal';
    }
    get hostFor() {
        var _a;
        return this.class.includes('slider-label') ? (_a = this.for) !== null && _a !== void 0 ? _a : `slider-${this.uniqueSliderLabelId}` : null;
    }
    get hostId() {
        var _a;
        return this.class.includes('slider-label') ? null : (_a = this.id) !== null && _a !== void 0 ? _a : `slider-${this.uniqueSliderInputId}`;
    }
    get hostMax() {
        var _a;
        return this.class.includes('slider-label') ? null : (_a = this.max) !== null && _a !== void 0 ? _a : '100';
    }
    get hostMin() {
        var _a;
        return this.class.includes('slider-label') ? null : (_a = this.min) !== null && _a !== void 0 ? _a : '0';
    }
    get hostStep() {
        var _a;
        return this.class.includes('slider-label') ? null : (_a = this.step) !== null && _a !== void 0 ? _a : '1';
    }
    get hostValue() {
        var _a;
        return this.class.includes('slider-label') ? null : (_a = this.value) !== null && _a !== void 0 ? _a : '0';
    }
    onInputChange(event) {
        this.value = event.target.value;
    }
    ngOnInit() {
        this.uniqueSliderInputId = this.class.includes('slider-label') ? 0 : this.sliderService.uniqueSliderInputId++;
        this.uniqueSliderLabelId = this.class.includes('slider-label') ? this.sliderService.uniqueSliderLabelId++ : 0;
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SliderService)); };
SliderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["", 8, "slider-circle"], ["", 8, "slider-label"], ["", 8, "slider-square"]], hostVars: 7, hostBindings: function SliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SliderComponent_input_HostBindingHandler($event) { return ctx.onInputChange($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx.hostAriaOrientation)("for", ctx.hostFor)("id", ctx.hostId)("max", ctx.hostMax)("min", ctx.hostMin)("step", ctx.hostStep)("value", ctx.hostValue);
    } }, inputs: { class: "class", for: "for", id: "id", max: "max", min: "min", step: "step", value: "value" }, attrs: _c7, ngContentSelectors: _c1, decls: 1, vars: 0, template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[type=range][class*=slider]{height:1rem}[type=range][class*=slider]:active,[type=range][class*=slider]:focus,[type=range][class*=slider]:hover{border:.1rem solid #2196f3}[type=range][class*=slider]::-moz-range-thumb{background:#8d8d8d;border:.0625rem solid #000;box-sizing:border-box;height:1rem;width:1rem}[type=range][class*=slider]::-moz-range-track{background:#efefef;border:none;box-sizing:border-box;height:.5rem}[type=range][class*=slider]::-ms-thumb{background:#8d8d8d;border:.0625rem solid #000;box-sizing:border-box;height:1rem;width:1rem;margin-top:0}[type=range][class*=slider]::-ms-track{background:#efefef;border:none;box-sizing:border-box;height:.5rem}[type=range][class*=slider]::-webkit-slider-runnable-track{background:#efefef;border:none;box-sizing:border-box;height:.5rem}[type=range][class*=slider]::-webkit-slider-thumb{background:#8d8d8d;border:.0625rem solid #000;box-sizing:border-box;height:1rem;width:1rem;margin-top:-.25rem}.slider-circle::-webkit-slider-thumb{border-radius:50%}.slider-label{display:block}.slider-square::-moz-range-thumb{border-radius:0}"], encapsulation: 2, changeDetection: 0 });
SliderComponent.ctorParameters = () => [
    { type: SliderService }
];
SliderComponent.propDecorators = {
    hostAriaOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-orientation',] }],
    hostFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.for',] }],
    hostId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.id',] }],
    hostMax: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.max',] }],
    hostMin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.min',] }],
    hostStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.step',] }],
    hostValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.value',] }],
    onInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input', [
                    '$event'
                ],] }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    for: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '.slider-circle, .slider-label, .slider-square',
                template: "<ng-content></ng-content>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: ["[type=range][class*=slider]{height:1rem}[type=range][class*=slider]:active,[type=range][class*=slider]:focus,[type=range][class*=slider]:hover{border:.1rem solid #2196f3}[type=range][class*=slider]::-moz-range-thumb{background:#8d8d8d;border:.0625rem solid #000;box-sizing:border-box;height:1rem;width:1rem}[type=range][class*=slider]::-moz-range-track{background:#efefef;border:none;box-sizing:border-box;height:.5rem}[type=range][class*=slider]::-ms-thumb{background:#8d8d8d;border:.0625rem solid #000;box-sizing:border-box;height:1rem;width:1rem;margin-top:0}[type=range][class*=slider]::-ms-track{background:#efefef;border:none;box-sizing:border-box;height:.5rem}[type=range][class*=slider]::-webkit-slider-runnable-track{background:#efefef;border:none;box-sizing:border-box;height:.5rem}[type=range][class*=slider]::-webkit-slider-thumb{background:#8d8d8d;border:.0625rem solid #000;box-sizing:border-box;height:1rem;width:1rem;margin-top:-.25rem}.slider-circle::-webkit-slider-thumb{border-radius:50%}.slider-label{display:block}.slider-square::-moz-range-thumb{border-radius:0}"]
            }]
    }], function () { return [{ type: SliderService }]; }, { class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], for: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hostAriaOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-orientation']
        }], hostFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.for']
        }], hostId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.id']
        }], hostMax: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.max']
        }], hostMin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.min']
        }], hostStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.step']
        }], hostValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.value']
        }], onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', [
                    '$event'
                ]]
        }] }); })();

class SliderModule {
}
SliderModule.ɵfac = function SliderModule_Factory(t) { return new (t || SliderModule)(); };
SliderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SliderModule });
SliderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    SliderComponent
                ],
                exports: [
                    SliderComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SliderModule, { declarations: [SliderComponent], exports: [SliderComponent] }); })();

class SpinnerComponent {
    constructor() {
        this.ariaLabel = null;
    }
    get hostAriaLabel() {
        var _a;
        return (_a = this.ariaLabel) !== null && _a !== void 0 ? _a : 'please wait';
    }
    get hostRole() {
        return 'progressbar';
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["", 8, "spinner"], ["", 8, "spinner-2"], ["", 8, "spinner-multi"]], hostVars: 2, hostBindings: function SpinnerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.hostAriaLabel)("role", ctx.hostRole);
    } }, inputs: { ariaLabel: ["aria-label", "ariaLabel"] }, attrs: _c8, ngContentSelectors: _c1, decls: 1, vars: 0, template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[class^=spinner]{-webkit-animation:spinner 1.5s linear infinite;animation:spinner 1.5s linear infinite;border:.5rem solid #efefef;border-radius:50%;height:2.5rem;width:2.5rem}.spinner{border-left-color:#2196f3}.spinner-2{border-color:#0069c0 #2196f3}.spinner-multi{border-color:#ff9800 #ffeb3b #4caf50 #9c27b0}@-webkit-keyframes spinner{to{transform:rotate(1turn)}}@keyframes spinner{to{transform:rotate(1turn)}}"], encapsulation: 2, changeDetection: 0 });
SpinnerComponent.ctorParameters = () => [];
SpinnerComponent.propDecorators = {
    hostAriaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-label',] }],
    hostRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.role',] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-label',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '.spinner, .spinner-2, .spinner-multi',
                template: "<ng-content></ng-content>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: ["[class^=spinner]{-webkit-animation:spinner 1.5s linear infinite;animation:spinner 1.5s linear infinite;border:.5rem solid #efefef;border-radius:50%;height:2.5rem;width:2.5rem}.spinner{border-left-color:#2196f3}.spinner-2{border-color:#0069c0 #2196f3}.spinner-multi{border-color:#ff9800 #ffeb3b #4caf50 #9c27b0}@-webkit-keyframes spinner{to{transform:rotate(1turn)}}@keyframes spinner{to{transform:rotate(1turn)}}"]
            }]
    }], function () { return []; }, { ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-label']
        }], hostAriaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-label']
        }], hostRole: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.role']
        }] }); })();

class SpinnerModule {
}
SpinnerModule.ɵfac = function SpinnerModule_Factory(t) { return new (t || SpinnerModule)(); };
SpinnerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SpinnerModule });
SpinnerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    SpinnerComponent
                ],
                exports: [
                    SpinnerComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SpinnerModule, { declarations: [SpinnerComponent], exports: [SpinnerComponent] }); })();

class SwitchService {
    constructor() {
        this.uniqueSwitchInputId = 0;
        this.uniqueSwitchLabelId = 0;
    }
}
SwitchService.ɵfac = function SwitchService_Factory(t) { return new (t || SwitchService)(); };
SwitchService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function SwitchService_Factory() { return new SwitchService(); }, token: SwitchService, providedIn: "root" });
SwitchService.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwitchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class SwitchComponent {
    constructor(switchService) {
        this.switchService = switchService;
        this.class = '';
        this.currentIsChecked = false;
        this.for = null;
        this.id = null;
        this.uniqueSwitchInputId = this.switchService.uniqueSwitchInputId;
        this.uniqueSwitchLabelId = this.switchService.uniqueSwitchLabelId;
    }
    get hostAriaLabel() {
        if (this.class.includes('switch-label') && this.isChecked) {
            return 'on';
        }
        else if (this.class.includes('switch-label') && !this.isChecked) {
            return 'off';
        }
        else {
            return null;
        }
    }
    get hostChecked() {
        return this.class.includes('switch-label') ? null : String(this.isChecked);
    }
    get hostClass() {
        return this.class.includes('switch-label') || this.class.includes('show-sr') ? this.class : `${this.class} show-sr`;
    }
    get hostFor() {
        var _a;
        return this.class.includes('switch-label') ? (_a = this.for) !== null && _a !== void 0 ? _a : `switch-${this.uniqueSwitchLabelId}` : null;
    }
    get hostId() {
        var _a;
        return this.class.includes('switch-label') ? null : (_a = this.id) !== null && _a !== void 0 ? _a : `switch-${this.uniqueSwitchInputId}`;
    }
    get hostRole() {
        return this.class.includes('switch-label') ? null : 'switch';
    }
    onClick() {
        this.isChecked = !this.isChecked;
    }
    get isChecked() {
        return this.currentIsChecked;
    }
    set isChecked(isChecked) {
        this.currentIsChecked = isChecked;
    }
    ngOnInit() {
        this.uniqueSwitchInputId = this.class.includes('switch-label') ? 0 : this.switchService.uniqueSwitchInputId++;
        this.uniqueSwitchLabelId = this.class.includes('switch-label') ? this.switchService.uniqueSwitchLabelId++ : 0;
    }
}
SwitchComponent.ɵfac = function SwitchComponent_Factory(t) { return new (t || SwitchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SwitchService)); };
SwitchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SwitchComponent, selectors: [["", 8, "switch-circle"], ["", 8, "switch-square"], ["", 8, "switch-label"]], hostVars: 6, hostBindings: function SwitchComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitchComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.hostAriaLabel)("checked", ctx.hostChecked)("class", ctx.hostClass)("for", ctx.hostFor)("id", ctx.hostId)("role", ctx.hostRole);
    } }, inputs: { class: "class", for: "for", id: "id" }, attrs: _c9, ngContentSelectors: _c1, decls: 1, vars: 0, template: function SwitchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[class*=switch]:not(.switch-label){border:.0625rem solid}[class*=switch]:not(.switch-label)[checked=true]+.switch-label:after,[class*=switch]:not(.switch-label)[checked=true]+.switch-label:before{transition-duration:.3s;transition-property:all;transition-timing-function:linear}[class*=switch]:not(.switch-label)[checked=true]+.switch-label:before{background-color:#4caf50;transform:translateX(4.5625rem)}[class*=switch]:not(.switch-label):active+.switch-label,[class*=switch]:not(.switch-label):focus+.switch-label,[class*=switch]:not(.switch-label):hover+.switch-label{border:.0625rem solid #000}[class*=switch]:not(.switch-label)[checked=false]+.switch-label:before{background-color:#ba000d;transform:translateX(0)}[class*=switch]:not(.switch-label)+.switch-label{background-color:#efefef;cursor:pointer;display:inline-block;height:2.5rem;width:6.25rem}[class*=switch]:not(.switch-label)+.switch-label:after,[class*=switch]:not(.switch-label)+.switch-label:before{transition-duration:.3s;transition-property:all;transition-timing-function:linear;content:\"\";display:inline-block}[class*=switch]:not(.switch-label)+.switch-label:before{height:1.625rem;margin-top:.4375rem;width:1.625rem}[class*=switch]:not(.switch-label).switch-circle+.switch-label{border-radius:1.5625rem}[class*=switch]:not(.switch-label).switch-circle+.switch-label:before{border-radius:50%}[class*=switch]:not(.switch-label).switch-square+.switch-label,[class*=switch]:not(.switch-label).switch-square+.switch-label:before{border-radius:.1875rem}"], encapsulation: 2, changeDetection: 0 });
SwitchComponent.ctorParameters = () => [
    { type: SwitchService }
];
SwitchComponent.propDecorators = {
    hostAriaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-label',] }],
    hostChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.checked',] }],
    hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.class',] }],
    hostFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.for',] }],
    hostId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.id',] }],
    hostRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.role',] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', [
                    '$event'
                ],] }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    for: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwitchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '.switch-circle, .switch-square, .switch-label',
                template: "<ng-content></ng-content>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: ["[class*=switch]:not(.switch-label){border:.0625rem solid}[class*=switch]:not(.switch-label)[checked=true]+.switch-label:after,[class*=switch]:not(.switch-label)[checked=true]+.switch-label:before{transition-duration:.3s;transition-property:all;transition-timing-function:linear}[class*=switch]:not(.switch-label)[checked=true]+.switch-label:before{background-color:#4caf50;transform:translateX(4.5625rem)}[class*=switch]:not(.switch-label):active+.switch-label,[class*=switch]:not(.switch-label):focus+.switch-label,[class*=switch]:not(.switch-label):hover+.switch-label{border:.0625rem solid #000}[class*=switch]:not(.switch-label)[checked=false]+.switch-label:before{background-color:#ba000d;transform:translateX(0)}[class*=switch]:not(.switch-label)+.switch-label{background-color:#efefef;cursor:pointer;display:inline-block;height:2.5rem;width:6.25rem}[class*=switch]:not(.switch-label)+.switch-label:after,[class*=switch]:not(.switch-label)+.switch-label:before{transition-duration:.3s;transition-property:all;transition-timing-function:linear;content:\"\";display:inline-block}[class*=switch]:not(.switch-label)+.switch-label:before{height:1.625rem;margin-top:.4375rem;width:1.625rem}[class*=switch]:not(.switch-label).switch-circle+.switch-label{border-radius:1.5625rem}[class*=switch]:not(.switch-label).switch-circle+.switch-label:before{border-radius:50%}[class*=switch]:not(.switch-label).switch-square+.switch-label,[class*=switch]:not(.switch-label).switch-square+.switch-label:before{border-radius:.1875rem}"]
            }]
    }], function () { return [{ type: SwitchService }]; }, { class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], for: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hostAriaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-label']
        }], hostChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.checked']
        }], hostClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.class']
        }], hostFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.for']
        }], hostId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.id']
        }], hostRole: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.role']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', [
                    '$event'
                ]]
        }] }); })();

class SwitchModule {
}
SwitchModule.ɵfac = function SwitchModule_Factory(t) { return new (t || SwitchModule)(); };
SwitchModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SwitchModule });
SwitchModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwitchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    SwitchComponent
                ],
                exports: [
                    SwitchComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SwitchModule, { declarations: [SwitchComponent], exports: [SwitchComponent] }); })();

class TabService {
    constructor() {
        this.currentTabButtons = [];
        this.currentTabContents = [];
        this.uniqueContentId = 0;
        this.uniqueTabId = 0;
    }
    get tabButtons() {
        return this.currentTabButtons;
    }
    get tabContents() {
        return this.currentTabContents;
    }
}
TabService.ɵfac = function TabService_Factory(t) { return new (t || TabService)(); };
TabService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TabService_Factory() { return new TabService(); }, token: TabService, providedIn: "root" });
TabService.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class TabComponent {
    constructor(elementRef, renderer2, tabService) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.tabService = tabService;
        this.class = '';
        this.type = '';
        this.uniqueContentId = this.tabService.uniqueContentId;
        this.uniqueTabId = this.tabService.uniqueTabId;
    }
    get hostAriaControls() {
        return this.class.includes('tab-btn') ? `tab-content-${this.uniqueTabId}` : null;
    }
    get hostAriaLabelledby() {
        return this.class.includes('tab-content') ? `tab-btn-${this.uniqueContentId}` : null;
    }
    get hostAriaPosinset() {
        return this.class.includes('tab-btn') ? String(this.uniqueTabId + 1) : null;
    }
    get hostAriaSelected() {
        return this.class.includes('tab-btn') ? 'false' : null;
    }
    get hostAriaSetsize() {
        return this.class.includes('tab-btn') ? String(this.tabButtons.length) : null;
    }
    get hostId() {
        if (this.class.includes('tab-btn')) {
            return `tab-btn-${this.uniqueTabId}`;
        }
        else if (this.class.includes('tab-content')) {
            return `tab-content-${this.uniqueContentId}`;
        }
        else {
            return null;
        }
    }
    get hostRole() {
        if (this.class.includes('tab-btn')) {
            return 'tab';
        }
        else if (this.class.includes('tab-content')) {
            return 'tabpanel';
        }
        else {
            return 'tablist';
        }
    }
    get hostType() {
        var _a;
        return this.class.includes('tab-btn') ? (_a = this.type) !== null && _a !== void 0 ? _a : 'button' : null;
    }
    onClick(event) {
        this.tabButtons.forEach((tabButton) => {
            if (tabButton === event) {
                this.renderer2.addClass(event, 'active');
                this.renderer2.setAttribute(event, 'aria-selected', 'true');
            }
            else {
                this.renderer2.removeClass(tabButton, 'active');
                this.renderer2.setAttribute(tabButton, 'aria-selected', 'false');
            }
        });
        this.tabContents.forEach((tabContent) => {
            if (tabContent.getAttribute('id') === event.getAttribute('aria-controls')) {
                this.renderer2.removeAttribute(tabContent, 'aria-hidden');
                this.renderer2.removeClass(tabContent, 'hide');
            }
            else {
                this.renderer2.setAttribute(tabContent, 'aria-hidden', 'true');
                this.renderer2.addClass(tabContent, 'hide');
            }
        });
    }
    get tabButtons() {
        return this.tabService.tabButtons;
    }
    get tabContents() {
        return this.tabService.tabContents;
    }
    ngOnInit() {
        if (this.class.includes('tab-btn')) {
            this.tabButtons.push(this.elementRef.nativeElement);
            this.uniqueTabId = this.tabService.uniqueTabId++;
        }
        else if (this.class.includes('tab-content')) {
            this.renderer2.setAttribute(this.elementRef.nativeElement, 'aria-hidden', 'true');
            this.renderer2.addClass(this.elementRef.nativeElement, 'hide');
            this.tabContents.push(this.elementRef.nativeElement);
            this.uniqueContentId = this.tabService.uniqueContentId++;
        }
        else {
            this.uniqueContentId = null;
            this.uniqueTabId = 0;
        }
    }
}
TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TabService)); };
TabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabComponent, selectors: [["button", 8, "tab-btn"], ["", 8, "tab-content"], ["", 8, "tabs"]], hostVars: 8, hostBindings: function TabComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-controls", ctx.hostAriaControls)("aria-labelledby", ctx.hostAriaLabelledby)("aria-posinset", ctx.hostAriaPosinset)("aria-selected", ctx.hostAriaSelected)("aria-setsize", ctx.hostAriaSetsize)("id", ctx.hostId)("role", ctx.hostRole)("type", ctx.hostType);
    } }, inputs: { class: "class", type: "type" }, attrs: _c10, ngContentSelectors: _c1, decls: 1, vars: 0, template: function TabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: [""], encapsulation: 2, changeDetection: 0 });
TabComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: TabService }
];
TabComponent.propDecorators = {
    hostAriaControls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-controls',] }],
    hostAriaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-labelledby',] }],
    hostAriaPosinset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-posinset',] }],
    hostAriaSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-selected',] }],
    hostAriaSetsize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-setsize',] }],
    hostId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.id',] }],
    hostRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.role',] }],
    hostType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.type',] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', [
                    '$event.target'
                ],] }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'button.tab-btn, .tab-content, .tabs',
                template: "<ng-content></ng-content>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: TabService }]; }, { class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hostAriaControls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-controls']
        }], hostAriaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-labelledby']
        }], hostAriaPosinset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-posinset']
        }], hostAriaSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-selected']
        }], hostAriaSetsize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-setsize']
        }], hostId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.id']
        }], hostRole: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.role']
        }], hostType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.type']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', [
                    '$event.target'
                ]]
        }] }); })();

class TabModule {
}
TabModule.ɵfac = function TabModule_Factory(t) { return new (t || TabModule)(); };
TabModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TabModule });
TabModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    TabComponent
                ],
                exports: [
                    TabComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TabModule, { declarations: [TabComponent], exports: [TabComponent] }); })();

class TableComponent {
    constructor() {
        this.class = '';
    }
    get hostRole() {
        if (this.class.includes('table-cell')) {
            return 'gridcell';
        }
        else if ((this.class.includes('table-header') && !this.class.includes('table-header-cell')) || this.class.includes('table-row')) {
            return 'row';
        }
        else if (this.class.includes('table-header-cell')) {
            return 'columnheader';
        }
        else {
            return 'grid';
        }
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["", 8, "table"], ["", 8, "table-bordered"], ["", 8, "table-cell"], ["", 8, "table-header"], ["", 8, "table-header-cell"], ["", 8, "table-hover"], ["", 8, "table-row"], ["", 8, "table-striped"], ["", 8, "table-wrapper"]], hostVars: 1, hostBindings: function TableComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.hostRole);
    } }, inputs: { class: "class" }, attrs: _c11, ngContentSelectors: _c1, decls: 1, vars: 0, template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: [".table,.table-bordered,.table-hover,.table-striped{display:block}.table-bordered{border:.0625rem solid #bdbdbd}.table-bordered .table-cell:not(:last-of-type),.table-bordered .table-header-cell:not(:last-of-type){border-right:.0625rem solid #bdbdbd}.table-bordered .table-header,.table-bordered .table-row:not(:last-of-type){border-bottom:.0625rem solid #bdbdbd}.table-cell,.table-header,.table-header-cell,.table-row{align-items:center;display:flex}.table-cell,.table-header-cell{flex:1;min-height:3.125rem;min-width:5rem;padding-bottom:.5rem;padding-left:1rem;padding-top:.5rem}.table-cell:last-of-type,.table-header-cell:last-of-type{padding-right:1rem}@media (min-width:48em){.table-cell,.table-header-cell{padding-left:1.5rem}.table-cell:last-of-type,.table-header-cell:last-of-type{padding-right:1.5rem}}.table-header{background-color:#efefef}.table-header-cell{min-height:2.8125rem}.table-hover .table-row:hover,.table-striped .table-row:nth-child(2n){background-color:#fafafa}.table-wrapper{max-width:100%;overflow:auto;width:34.375rem}@media (min-width:48em){.table-wrapper{width:auto}}.table-wrapper .table,.table-wrapper .table-bordered,.table-wrapper .table-hover,.table-wrapper .table-striped{width:50rem}@media (min-width:48em){.table-wrapper .table,.table-wrapper .table-bordered,.table-wrapper .table-hover,.table-wrapper .table-striped{width:auto}}"], encapsulation: 2, changeDetection: 0 });
TableComponent.ctorParameters = () => [];
TableComponent.propDecorators = {
    hostRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.role',] }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '.table, .table-bordered, .table-cell, .table-header, .table-header-cell, .table-hover, .table-row, .table-striped, .table-wrapper',
                template: "<ng-content></ng-content>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [".table,.table-bordered,.table-hover,.table-striped{display:block}.table-bordered{border:.0625rem solid #bdbdbd}.table-bordered .table-cell:not(:last-of-type),.table-bordered .table-header-cell:not(:last-of-type){border-right:.0625rem solid #bdbdbd}.table-bordered .table-header,.table-bordered .table-row:not(:last-of-type){border-bottom:.0625rem solid #bdbdbd}.table-cell,.table-header,.table-header-cell,.table-row{align-items:center;display:flex}.table-cell,.table-header-cell{flex:1;min-height:3.125rem;min-width:5rem;padding-bottom:.5rem;padding-left:1rem;padding-top:.5rem}.table-cell:last-of-type,.table-header-cell:last-of-type{padding-right:1rem}@media (min-width:48em){.table-cell,.table-header-cell{padding-left:1.5rem}.table-cell:last-of-type,.table-header-cell:last-of-type{padding-right:1.5rem}}.table-header{background-color:#efefef}.table-header-cell{min-height:2.8125rem}.table-hover .table-row:hover,.table-striped .table-row:nth-child(2n){background-color:#fafafa}.table-wrapper{max-width:100%;overflow:auto;width:34.375rem}@media (min-width:48em){.table-wrapper{width:auto}}.table-wrapper .table,.table-wrapper .table-bordered,.table-wrapper .table-hover,.table-wrapper .table-striped{width:50rem}@media (min-width:48em){.table-wrapper .table,.table-wrapper .table-bordered,.table-wrapper .table-hover,.table-wrapper .table-striped{width:auto}}"]
            }]
    }], function () { return []; }, { class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hostRole: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.role']
        }] }); })();

class TableModule {
}
TableModule.ɵfac = function TableModule_Factory(t) { return new (t || TableModule)(); };
TableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TableModule });
TableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    TableComponent
                ],
                exports: [
                    TableComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TableModule, { declarations: [TableComponent], exports: [TableComponent] }); })();

class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [AlertModule, BadgeModule, ButtonModule, CardModule, FormModule, ProgressModule, SliderModule, SpinnerModule, SwitchModule, TableModule, TabModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    AlertModule,
                    BadgeModule,
                    ButtonModule,
                    CardModule,
                    FormModule,
                    ProgressModule,
                    SliderModule,
                    SpinnerModule,
                    SwitchModule,
                    TableModule,
                    TabModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { exports: [AlertModule, BadgeModule, ButtonModule, CardModule, FormModule, ProgressModule, SliderModule, SpinnerModule, SwitchModule, TableModule, TabModule] }); })();

class EasyComponent {
}
EasyComponent.ɵfac = function EasyComponent_Factory(t) { return new (t || EasyComponent)(); };
EasyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EasyComponent, selectors: [["ez-root"]], ngContentSelectors: _c1, decls: 1, vars: 0, template: function EasyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["@charset \"UTF-8\";a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font-size:100%;font:inherit;margin:0;padding:0;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:\"\";content:none}table{border-collapse:collapse;border-spacing:0}\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}html{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0,0,0,0);box-sizing:border-box;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%}@media (min-width:64em){html{font-size:15px}}@media (min-width:48em){html{font-size:14px}}@media (min-width:30em){html{font-size:13px}}@media (min-width:85.375em){html{font-size:16px}}*,:after,:before{box-sizing:inherit}body{background-color:#fafafa;color:#191919;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:1rem;line-height:1;overflow-x:hidden;text-rendering:optimizeLegibility}body input,body select,body textarea{font-size:1.3333rem}@media (min-width:64em){body input,body select,body textarea{font-size:1.0667rem}}@media (min-width:48em){body input,body select,body textarea{font-size:1.1429rem}}@media (min-width:30em){body input,body select,body textarea{font-size:1.2308rem}}@media (min-width:85.375em){body input,body select,body textarea{font-size:1rem}}body,html{height:100%;width:100%}a,area,button,input,label,select,summary,textarea{touch-action:manipulation}button,canvas,embed,figure,img,input,label,object,progress,select,textarea,video{max-width:100%}canvas,figure,img,video{height:auto}address,dd,dl,dt,figure,li,ol,pre,ul{margin:0}caption{caption-side:bottom}caption,img,label,td,th{vertical-align:middle}[type=button],[type=reset],[type=submit],a,a[role=button],button,html input[type=button],input,input[type=reset],input[type=submit],optgroup,select,textarea{border:0;border-radius:0;font-family:inherit;text-decoration:none}[type=button]:active:not([disabled]),[type=button]:focus:not([disabled]),[type=button]:hover:not([disabled]),[type=reset]:active:not([disabled]),[type=reset]:focus:not([disabled]),[type=reset]:hover:not([disabled]),[type=submit]:active:not([disabled]),[type=submit]:focus:not([disabled]),[type=submit]:hover:not([disabled]),a:active:not([disabled]),a:focus:not([disabled]),a:hover:not([disabled]),a[role=button]:active:not([disabled]),a[role=button]:focus:not([disabled]),a[role=button]:hover:not([disabled]),button:active:not([disabled]),button:focus:not([disabled]),button:hover:not([disabled]),html input[type=button]:active:not([disabled]),html input[type=button]:focus:not([disabled]),html input[type=button]:hover:not([disabled]),input:active:not([disabled]),input:focus:not([disabled]),input:hover:not([disabled]),input[type=reset]:active:not([disabled]),input[type=reset]:focus:not([disabled]),input[type=reset]:hover:not([disabled]),input[type=submit]:active:not([disabled]),input[type=submit]:focus:not([disabled]),input[type=submit]:hover:not([disabled]),optgroup:active:not([disabled]),optgroup:focus:not([disabled]),optgroup:hover:not([disabled]),select:active:not([disabled]),select:focus:not([disabled]),select:hover:not([disabled]),textarea:active:not([disabled]),textarea:focus:not([disabled]),textarea:hover:not([disabled]){outline:none;outline-offset:0}[type=button]:-moz-focus-inner:not([disabled]),[type=reset]:-moz-focus-inner:not([disabled]),[type=submit]:-moz-focus-inner:not([disabled]),a:-moz-focus-inner:not([disabled]),a[role=button]:-moz-focus-inner:not([disabled]),button:-moz-focus-inner:not([disabled]),html input[type=button]:-moz-focus-inner:not([disabled]),input:-moz-focus-inner:not([disabled]),input[type=reset]:-moz-focus-inner:not([disabled]),input[type=submit]:-moz-focus-inner:not([disabled]),optgroup:-moz-focus-inner:not([disabled]),select:-moz-focus-inner:not([disabled]),textarea:-moz-focus-inner:not([disabled]){outline:none;outline-offset:0}[type=button],[type=reset],[type=submit],a,a[role=button],button,html input[type=button],input[type=reset],input[type=submit]{background-color:transparent}[type=button].active:not([disabled]),[type=button]:active:not([disabled]),[type=button]:focus:not([disabled]),[type=button]:hover:not([disabled]),[type=reset].active:not([disabled]),[type=reset]:active:not([disabled]),[type=reset]:focus:not([disabled]),[type=reset]:hover:not([disabled]),[type=submit].active:not([disabled]),[type=submit]:active:not([disabled]),[type=submit]:focus:not([disabled]),[type=submit]:hover:not([disabled]),a.active:not([disabled]),a:active:not([disabled]),a:focus:not([disabled]),a:hover:not([disabled]),a[role=button].active:not([disabled]),a[role=button]:active:not([disabled]),a[role=button]:focus:not([disabled]),a[role=button]:hover:not([disabled]),button.active:not([disabled]),button:active:not([disabled]),button:focus:not([disabled]),button:hover:not([disabled]),html input[type=button].active:not([disabled]),html input[type=button]:active:not([disabled]),html input[type=button]:focus:not([disabled]),html input[type=button]:hover:not([disabled]),input[type=reset].active:not([disabled]),input[type=reset]:active:not([disabled]),input[type=reset]:focus:not([disabled]),input[type=reset]:hover:not([disabled]),input[type=submit].active:not([disabled]),input[type=submit]:active:not([disabled]),input[type=submit]:focus:not([disabled]),input[type=submit]:hover:not([disabled]){text-decoration:underline}[type=button]:-moz-focus-inner:not([disabled]),[type=reset]:-moz-focus-inner:not([disabled]),[type=submit]:-moz-focus-inner:not([disabled]),a:-moz-focus-inner:not([disabled]),a[role=button]:-moz-focus-inner:not([disabled]),button:-moz-focus-inner:not([disabled]),html input[type=button]:-moz-focus-inner:not([disabled]),input[type=reset]:-moz-focus-inner:not([disabled]),input[type=submit]:-moz-focus-inner:not([disabled]){text-decoration:underline}a:hover,a[role=button]:hover,button:hover,html input[type=button]:hover,input[type=checkbox]:hover,input[type=radio]:hover,input[type=range]:hover,input[type=reset]:hover,input[type=submit]:hover,select:hover{cursor:pointer}fieldset{margin-inline:0;min-inline-size:0;min-width:0;padding:0;padding-block:0;padding-inline:0}input,select,textarea{font:inherit;outline:.0625rem solid #000}input:active:not([disabled]),input:focus:not([disabled]),input:hover:not([disabled]),select:active:not([disabled]),select:focus:not([disabled]),select:hover:not([disabled]),textarea:active:not([disabled]),textarea:focus:not([disabled]),textarea:hover:not([disabled]){outline:.0625rem solid #2196f3}input[type=checkbox],input[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:1rem;margin-block:0;margin-inline:0;width:1rem;vertical-align:middle}input[type=checkbox]:checked:before,input[type=radio]:checked:before{background-color:#000;content:\"\";display:block;height:.75rem;transform:translate(.125rem,.125rem);width:.75rem}input[type=radio]{border:.0625rem solid #000;border-radius:50%;outline:none}input[type=radio]:checked:before{border-radius:50%;transform:translate(.078125rem,.046875rem);-moz-transform:translate(.078125rem,.078125rem)}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}input[type=file]{height:auto;padding:0}input[type=number]{-moz-appearance:textfield}input[type=range]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;font:inherit;margin:0;padding:0;width:100%}input[type=range]:active,input[type=range]:focus,input[type=range]:hover{border:.1rem solid #000;outline:none}input[type=range]::-ms-tooltip{display:none}input[type=range],input[type=range]::-webkit-slider-thumb{-webkit-appearance:none}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}legend{font-size:1.125rem;padding-inline:0}optgroup{font-weight:bolder}option{color:#191919;min-block-size:0;min-height:0;padding:0;padding-block:0;padding-inline:0}progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#efefef;border:none;border-radius:0;display:block;height:.9375rem;width:100%}progress::-webkit-progress-bar{background-color:#efefef}select{overflow-y:auto;padding-block:0;text-rendering:optimizeLegibility}select:-moz-focusring{color:transparent;text-shadow:0 0 0 #191919}textarea{resize:vertical}[disabled] :disabled,button:disabled,button[disabled],input:disabled,input[disabled]{background-color:#efefef;color:#8d8d8d;text-decoration:none}[disabled] :disabled:hover,button:disabled:hover,button[disabled]:hover,input:disabled:hover,input[disabled]:hover{cursor:not-allowed}[tabindex=\"0\"]:focus,[tabindex=\"-1\"]:focus{outline:none}.center,.left,.right{display:block}.center{margin-left:auto}.center,.left{margin-right:auto}.right{margin-left:auto}.bg-black,.bg-hover-black:hover{background-color:#000}.bg-black[type=range][class*=slider]::-moz-range-track,.bg-hover-black:hover[type=range][class*=slider]::-moz-range-track{background:#000}.bg-black[type=range][class*=slider]::-ms-thumb,.bg-hover-black:hover[type=range][class*=slider]::-ms-thumb{background:#000}.bg-black[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-hover-black:hover[type=range][class*=slider]::-webkit-slider-runnable-track{background:#000}.bg-black[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-hover-black:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#000}.text-black,.text-hover-black:hover{color:#000}.text-black[type=range][class*=slider]::-moz-range-thumb,.text-hover-black:hover[type=range][class*=slider]::-moz-range-thumb{background:#000}.text-black[type=range][class*=slider]::-ms-track,.text-hover-black:hover[type=range][class*=slider]::-ms-track{background:#000}.text-black[type=range][class*=slider]::-webkit-slider-thumb,.text-hover-black:hover[type=range][class*=slider]::-webkit-slider-thumb{background:#000}.text-black[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-hover-black:hover[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#000}.text-black[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-hover-black:hover[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#000}.text-black[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-hover-black:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#000}.text-black[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-hover-black:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#000}.border-t-black{border-top:.0625rem solid #000}.border-r-black{border-right:.0625rem solid #000}.border-b-black{border-bottom:.0625rem solid #000}.border-l-black{border-left:.0625rem solid #000}.border-a-black{border:.0625rem solid #000}.border-lr-black{border-left:.0625rem solid #000;border-right:.0625rem solid #000}.border-tb-black{border-top:.0625rem solid #000;border-bottom:.0625rem solid #000}.box-shadow-1-black{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12)}.box-shadow-2-black{box-shadow:0 .1875rem .75rem rgba(0,0,0,.23),0 .1875rem .75rem rgba(0,0,0,.16)}.box-shadow-3-black{box-shadow:0 .375rem .75rem rgba(0,0,0,.23),0 .625rem 2.5rem rgba(0,0,0,.19)}.box-shadow-4-black{box-shadow:0 .625rem 1.25rem rgba(0,0,0,.22),0 .875rem 3.5rem rgba(0,0,0,.25)}.box-shadow-5-black{box-shadow:0 .9375rem 1.5rem rgba(0,0,0,.22),0 1.1875rem 4.75rem rgba(0,0,0,.3)}.bg-blue,.bg-hover-blue:hover{background-color:#2196f3}.bg-blue[type=range][class*=slider]::-moz-range-track,.bg-hover-blue:hover[type=range][class*=slider]::-moz-range-track{background:#2196f3}.bg-blue[type=range][class*=slider]::-ms-thumb,.bg-hover-blue:hover[type=range][class*=slider]::-ms-thumb{background:#2196f3}.bg-blue[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-hover-blue:hover[type=range][class*=slider]::-webkit-slider-runnable-track{background:#2196f3}.bg-blue[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-hover-blue:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#2196f3}.text-blue,.text-hover-blue:hover{color:#2196f3}.text-blue[type=range][class*=slider]::-moz-range-thumb,.text-hover-blue:hover[type=range][class*=slider]::-moz-range-thumb{background:#2196f3}.text-blue[type=range][class*=slider]::-ms-track,.text-hover-blue:hover[type=range][class*=slider]::-ms-track{background:#2196f3}.text-blue[type=range][class*=slider]::-webkit-slider-thumb,.text-hover-blue:hover[type=range][class*=slider]::-webkit-slider-thumb{background:#2196f3}.text-blue[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-hover-blue:hover[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#2196f3}.text-blue[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-hover-blue:hover[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#2196f3}.text-blue[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-hover-blue:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#2196f3}.text-blue[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-hover-blue:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#2196f3}.border-t-blue{border-top:.0625rem solid #2196f3}.border-r-blue{border-right:.0625rem solid #2196f3}.border-b-blue{border-bottom:.0625rem solid #2196f3}.border-l-blue{border-left:.0625rem solid #2196f3}.border-a-blue{border:.0625rem solid #2196f3}.border-lr-blue{border-left:.0625rem solid #2196f3;border-right:.0625rem solid #2196f3}.border-tb-blue{border-top:.0625rem solid #2196f3;border-bottom:.0625rem solid #2196f3}.box-shadow-1-blue{box-shadow:0 .09375rem .25rem rgba(33,150,243,.24),0 .09375rem .375rem rgba(33,150,243,.12)}.box-shadow-2-blue{box-shadow:0 .1875rem .75rem rgba(33,150,243,.23),0 .1875rem .75rem rgba(33,150,243,.16)}.box-shadow-3-blue{box-shadow:0 .375rem .75rem rgba(33,150,243,.23),0 .625rem 2.5rem rgba(33,150,243,.19)}.box-shadow-4-blue{box-shadow:0 .625rem 1.25rem rgba(33,150,243,.22),0 .875rem 3.5rem rgba(33,150,243,.25)}.box-shadow-5-blue{box-shadow:0 .9375rem 1.5rem rgba(33,150,243,.22),0 1.1875rem 4.75rem rgba(33,150,243,.3)}.bg-dk-blue,.bg-hover-dk-blue:hover{background-color:#0069c0}.bg-dk-blue[type=range][class*=slider]::-moz-range-track,.bg-hover-dk-blue:hover[type=range][class*=slider]::-moz-range-track{background:#0069c0}.bg-dk-blue[type=range][class*=slider]::-ms-thumb,.bg-hover-dk-blue:hover[type=range][class*=slider]::-ms-thumb{background:#0069c0}.bg-dk-blue[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-hover-dk-blue:hover[type=range][class*=slider]::-webkit-slider-runnable-track{background:#0069c0}.bg-dk-blue[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-hover-dk-blue:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#0069c0}.text-dk-blue,.text-hover-dk-blue:hover{color:#0069c0}.text-dk-blue[type=range][class*=slider]::-moz-range-thumb,.text-hover-dk-blue:hover[type=range][class*=slider]::-moz-range-thumb{background:#0069c0}.text-dk-blue[type=range][class*=slider]::-ms-track,.text-hover-dk-blue:hover[type=range][class*=slider]::-ms-track{background:#0069c0}.text-dk-blue[type=range][class*=slider]::-webkit-slider-thumb,.text-hover-dk-blue:hover[type=range][class*=slider]::-webkit-slider-thumb{background:#0069c0}.text-dk-blue[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-hover-dk-blue:hover[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#0069c0}.text-dk-blue[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-hover-dk-blue:hover[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#0069c0}.text-dk-blue[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-hover-dk-blue:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#0069c0}.text-dk-blue[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-hover-dk-blue:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#0069c0}.border-t-dk-blue{border-top:.0625rem solid #0069c0}.border-r-dk-blue{border-right:.0625rem solid #0069c0}.border-b-dk-blue{border-bottom:.0625rem solid #0069c0}.border-l-dk-blue{border-left:.0625rem solid #0069c0}.border-a-dk-blue{border:.0625rem solid #0069c0}.border-lr-dk-blue{border-left:.0625rem solid #0069c0;border-right:.0625rem solid #0069c0}.border-tb-dk-blue{border-top:.0625rem solid #0069c0;border-bottom:.0625rem solid #0069c0}.box-shadow-1-dk-blue{box-shadow:0 .09375rem .25rem rgba(0,105,192,.24),0 .09375rem .375rem rgba(0,105,192,.12)}.box-shadow-2-dk-blue{box-shadow:0 .1875rem .75rem rgba(0,105,192,.23),0 .1875rem .75rem rgba(0,105,192,.16)}.box-shadow-3-dk-blue{box-shadow:0 .375rem .75rem rgba(0,105,192,.23),0 .625rem 2.5rem rgba(0,105,192,.19)}.box-shadow-4-dk-blue{box-shadow:0 .625rem 1.25rem rgba(0,105,192,.22),0 .875rem 3.5rem rgba(0,105,192,.25)}.box-shadow-5-dk-blue{box-shadow:0 .9375rem 1.5rem rgba(0,105,192,.22),0 1.1875rem 4.75rem rgba(0,105,192,.3)}.bg-dk-gray,.bg-hover-dk-gray:hover{background-color:#8d8d8d}.bg-dk-gray[type=range][class*=slider]::-moz-range-track,.bg-hover-dk-gray:hover[type=range][class*=slider]::-moz-range-track{background:#8d8d8d}.bg-dk-gray[type=range][class*=slider]::-ms-thumb,.bg-hover-dk-gray:hover[type=range][class*=slider]::-ms-thumb{background:#8d8d8d}.bg-dk-gray[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-hover-dk-gray:hover[type=range][class*=slider]::-webkit-slider-runnable-track{background:#8d8d8d}.bg-dk-gray[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-hover-dk-gray:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#8d8d8d}.text-dk-gray,.text-hover-dk-gray:hover{color:#8d8d8d}.text-dk-gray[type=range][class*=slider]::-moz-range-thumb,.text-hover-dk-gray:hover[type=range][class*=slider]::-moz-range-thumb{background:#8d8d8d}.text-dk-gray[type=range][class*=slider]::-ms-track,.text-hover-dk-gray:hover[type=range][class*=slider]::-ms-track{background:#8d8d8d}.text-dk-gray[type=range][class*=slider]::-webkit-slider-thumb,.text-hover-dk-gray:hover[type=range][class*=slider]::-webkit-slider-thumb{background:#8d8d8d}.text-dk-gray[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-hover-dk-gray:hover[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#8d8d8d}.text-dk-gray[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-hover-dk-gray:hover[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#8d8d8d}.text-dk-gray[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-hover-dk-gray:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#8d8d8d}.text-dk-gray[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-hover-dk-gray:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#8d8d8d}.border-t-dk-gray{border-top:.0625rem solid #8d8d8d}.border-r-dk-gray{border-right:.0625rem solid #8d8d8d}.border-b-dk-gray{border-bottom:.0625rem solid #8d8d8d}.border-l-dk-gray{border-left:.0625rem solid #8d8d8d}.border-a-dk-gray{border:.0625rem solid #8d8d8d}.border-lr-dk-gray{border-left:.0625rem solid #8d8d8d;border-right:.0625rem solid #8d8d8d}.border-tb-dk-gray{border-top:.0625rem solid #8d8d8d;border-bottom:.0625rem solid #8d8d8d}.box-shadow-1-dk-gray{box-shadow:0 .09375rem .25rem hsla(0,0%,55.3%,.24),0 .09375rem .375rem hsla(0,0%,55.3%,.12)}.box-shadow-2-dk-gray{box-shadow:0 .1875rem .75rem hsla(0,0%,55.3%,.23),0 .1875rem .75rem hsla(0,0%,55.3%,.16)}.box-shadow-3-dk-gray{box-shadow:0 .375rem .75rem hsla(0,0%,55.3%,.23),0 .625rem 2.5rem hsla(0,0%,55.3%,.19)}.box-shadow-4-dk-gray{box-shadow:0 .625rem 1.25rem hsla(0,0%,55.3%,.22),0 .875rem 3.5rem hsla(0,0%,55.3%,.25)}.box-shadow-5-dk-gray{box-shadow:0 .9375rem 1.5rem hsla(0,0%,55.3%,.22),0 1.1875rem 4.75rem hsla(0,0%,55.3%,.3)}.bg-gray,.bg-hover-gray:hover{background-color:#bdbdbd}.bg-gray[type=range][class*=slider]::-moz-range-track,.bg-hover-gray:hover[type=range][class*=slider]::-moz-range-track{background:#bdbdbd}.bg-gray[type=range][class*=slider]::-ms-thumb,.bg-hover-gray:hover[type=range][class*=slider]::-ms-thumb{background:#bdbdbd}.bg-gray[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-hover-gray:hover[type=range][class*=slider]::-webkit-slider-runnable-track{background:#bdbdbd}.bg-gray[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-hover-gray:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#bdbdbd}.text-gray,.text-hover-gray:hover{color:#bdbdbd}.text-gray[type=range][class*=slider]::-moz-range-thumb,.text-hover-gray:hover[type=range][class*=slider]::-moz-range-thumb{background:#bdbdbd}.text-gray[type=range][class*=slider]::-ms-track,.text-hover-gray:hover[type=range][class*=slider]::-ms-track{background:#bdbdbd}.text-gray[type=range][class*=slider]::-webkit-slider-thumb,.text-hover-gray:hover[type=range][class*=slider]::-webkit-slider-thumb{background:#bdbdbd}.text-gray[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-hover-gray:hover[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#bdbdbd}.text-gray[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-hover-gray:hover[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#bdbdbd}.text-gray[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-hover-gray:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#bdbdbd}.text-gray[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-hover-gray:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#bdbdbd}.border-t-gray{border-top:.0625rem solid #bdbdbd}.border-r-gray{border-right:.0625rem solid #bdbdbd}.border-b-gray{border-bottom:.0625rem solid #bdbdbd}.border-l-gray{border-left:.0625rem solid #bdbdbd}.border-a-gray{border:.0625rem solid #bdbdbd}.border-lr-gray{border-left:.0625rem solid #bdbdbd;border-right:.0625rem solid #bdbdbd}.border-tb-gray{border-top:.0625rem solid #bdbdbd;border-bottom:.0625rem solid #bdbdbd}.box-shadow-1-gray{box-shadow:0 .09375rem .25rem hsla(0,0%,74.1%,.24),0 .09375rem .375rem hsla(0,0%,74.1%,.12)}.box-shadow-2-gray{box-shadow:0 .1875rem .75rem hsla(0,0%,74.1%,.23),0 .1875rem .75rem hsla(0,0%,74.1%,.16)}.box-shadow-3-gray{box-shadow:0 .375rem .75rem hsla(0,0%,74.1%,.23),0 .625rem 2.5rem hsla(0,0%,74.1%,.19)}.box-shadow-4-gray{box-shadow:0 .625rem 1.25rem hsla(0,0%,74.1%,.22),0 .875rem 3.5rem hsla(0,0%,74.1%,.25)}.box-shadow-5-gray{box-shadow:0 .9375rem 1.5rem hsla(0,0%,74.1%,.22),0 1.1875rem 4.75rem hsla(0,0%,74.1%,.3)}.bg-green,.bg-hover-green:hover{background-color:#4caf50}.bg-green[type=range][class*=slider]::-moz-range-track,.bg-hover-green:hover[type=range][class*=slider]::-moz-range-track{background:#4caf50}.bg-green[type=range][class*=slider]::-ms-thumb,.bg-hover-green:hover[type=range][class*=slider]::-ms-thumb{background:#4caf50}.bg-green[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-hover-green:hover[type=range][class*=slider]::-webkit-slider-runnable-track{background:#4caf50}.bg-green[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-hover-green:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#4caf50}.text-green,.text-hover-green:hover{color:#4caf50}.text-green[type=range][class*=slider]::-moz-range-thumb,.text-hover-green:hover[type=range][class*=slider]::-moz-range-thumb{background:#4caf50}.text-green[type=range][class*=slider]::-ms-track,.text-hover-green:hover[type=range][class*=slider]::-ms-track{background:#4caf50}.text-green[type=range][class*=slider]::-webkit-slider-thumb,.text-hover-green:hover[type=range][class*=slider]::-webkit-slider-thumb{background:#4caf50}.text-green[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-hover-green:hover[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#4caf50}.text-green[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-hover-green:hover[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#4caf50}.text-green[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-hover-green:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#4caf50}.text-green[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-hover-green:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#4caf50}.border-t-green{border-top:.0625rem solid #4caf50}.border-r-green{border-right:.0625rem solid #4caf50}.border-b-green{border-bottom:.0625rem solid #4caf50}.border-l-green{border-left:.0625rem solid #4caf50}.border-a-green{border:.0625rem solid #4caf50}.border-lr-green{border-left:.0625rem solid #4caf50;border-right:.0625rem solid #4caf50}.border-tb-green{border-top:.0625rem solid #4caf50;border-bottom:.0625rem solid #4caf50}.box-shadow-1-green{box-shadow:0 .09375rem .25rem rgba(76,175,80,.24),0 .09375rem .375rem rgba(76,175,80,.12)}.box-shadow-2-green{box-shadow:0 .1875rem .75rem rgba(76,175,80,.23),0 .1875rem .75rem rgba(76,175,80,.16)}.box-shadow-3-green{box-shadow:0 .375rem .75rem rgba(76,175,80,.23),0 .625rem 2.5rem rgba(76,175,80,.19)}.box-shadow-4-green{box-shadow:0 .625rem 1.25rem rgba(76,175,80,.22),0 .875rem 3.5rem rgba(76,175,80,.25)}.box-shadow-5-green{box-shadow:0 .9375rem 1.5rem rgba(76,175,80,.22),0 1.1875rem 4.75rem rgba(76,175,80,.3)}.text-hover-lt-black:hover,.text-lt-black{color:#191919}.text-hover-lt-black:hover[type=range][class*=slider]::-moz-range-thumb,.text-lt-black[type=range][class*=slider]::-moz-range-thumb{background:#191919}.text-hover-lt-black:hover[type=range][class*=slider]::-ms-track,.text-lt-black[type=range][class*=slider]::-ms-track{background:#191919}.text-hover-lt-black:hover[type=range][class*=slider]::-webkit-slider-thumb,.text-lt-black[type=range][class*=slider]::-webkit-slider-thumb{background:#191919}.text-hover-lt-black:hover[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-lt-black[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#191919}.text-hover-lt-black:hover[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-lt-black[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#191919}.text-hover-lt-black:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-lt-black[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#191919}.text-hover-lt-black:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-lt-black[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#191919}.bg-hover-lt-gray:hover,.bg-lt-gray{background-color:#efefef}.bg-hover-lt-gray:hover[type=range][class*=slider]::-moz-range-track,.bg-lt-gray[type=range][class*=slider]::-moz-range-track{background:#efefef}.bg-hover-lt-gray:hover[type=range][class*=slider]::-ms-thumb,.bg-lt-gray[type=range][class*=slider]::-ms-thumb{background:#efefef}.bg-hover-lt-gray:hover[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-lt-gray[type=range][class*=slider]::-webkit-slider-runnable-track{background:#efefef}.bg-hover-lt-gray:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-lt-gray[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#efefef}.text-hover-lt-gray:hover,.text-lt-gray{color:#efefef}.text-hover-lt-gray:hover[type=range][class*=slider]::-moz-range-thumb,.text-lt-gray[type=range][class*=slider]::-moz-range-thumb{background:#efefef}.text-hover-lt-gray:hover[type=range][class*=slider]::-ms-track,.text-lt-gray[type=range][class*=slider]::-ms-track{background:#efefef}.text-hover-lt-gray:hover[type=range][class*=slider]::-webkit-slider-thumb,.text-lt-gray[type=range][class*=slider]::-webkit-slider-thumb{background:#efefef}.text-hover-lt-gray:hover[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-lt-gray[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#efefef}.text-hover-lt-gray:hover[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-lt-gray[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#efefef}.text-hover-lt-gray:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-lt-gray[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#efefef}.text-hover-lt-gray:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-lt-gray[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#efefef}.border-t-lt-gray{border-top:.0625rem solid #efefef}.border-r-lt-gray{border-right:.0625rem solid #efefef}.border-b-lt-gray{border-bottom:.0625rem solid #efefef}.border-l-lt-gray{border-left:.0625rem solid #efefef}.border-a-lt-gray{border:.0625rem solid #efefef}.border-lr-lt-gray{border-left:.0625rem solid #efefef;border-right:.0625rem solid #efefef}.border-tb-lt-gray{border-top:.0625rem solid #efefef;border-bottom:.0625rem solid #efefef}.box-shadow-1-lt-gray{box-shadow:0 .09375rem .25rem hsla(0,0%,93.7%,.24),0 .09375rem .375rem hsla(0,0%,93.7%,.12)}.box-shadow-2-lt-gray{box-shadow:0 .1875rem .75rem hsla(0,0%,93.7%,.23),0 .1875rem .75rem hsla(0,0%,93.7%,.16)}.box-shadow-3-lt-gray{box-shadow:0 .375rem .75rem hsla(0,0%,93.7%,.23),0 .625rem 2.5rem hsla(0,0%,93.7%,.19)}.box-shadow-4-lt-gray{box-shadow:0 .625rem 1.25rem hsla(0,0%,93.7%,.22),0 .875rem 3.5rem hsla(0,0%,93.7%,.25)}.box-shadow-5-lt-gray{box-shadow:0 .9375rem 1.5rem hsla(0,0%,93.7%,.22),0 1.1875rem 4.75rem hsla(0,0%,93.7%,.3)}.bg-hover-lt-white:hover,.bg-lt-white{background-color:#fafafa}.bg-hover-lt-white:hover[type=range][class*=slider]::-moz-range-track,.bg-lt-white[type=range][class*=slider]::-moz-range-track{background:#fafafa}.bg-hover-lt-white:hover[type=range][class*=slider]::-ms-thumb,.bg-lt-white[type=range][class*=slider]::-ms-thumb{background:#fafafa}.bg-hover-lt-white:hover[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-lt-white[type=range][class*=slider]::-webkit-slider-runnable-track{background:#fafafa}.bg-hover-lt-white:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-lt-white[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#fafafa}.bg-hover-orange:hover,.bg-orange{background-color:#ff9800}.bg-hover-orange:hover[type=range][class*=slider]::-moz-range-track,.bg-orange[type=range][class*=slider]::-moz-range-track{background:#ff9800}.bg-hover-orange:hover[type=range][class*=slider]::-ms-thumb,.bg-orange[type=range][class*=slider]::-ms-thumb{background:#ff9800}.bg-hover-orange:hover[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-orange[type=range][class*=slider]::-webkit-slider-runnable-track{background:#ff9800}.bg-hover-orange:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-orange[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#ff9800}.text-hover-orange:hover,.text-orange{color:#ff9800}.text-hover-orange:hover[type=range][class*=slider]::-moz-range-thumb,.text-orange[type=range][class*=slider]::-moz-range-thumb{background:#ff9800}.text-hover-orange:hover[type=range][class*=slider]::-ms-track,.text-orange[type=range][class*=slider]::-ms-track{background:#ff9800}.text-hover-orange:hover[type=range][class*=slider]::-webkit-slider-thumb,.text-orange[type=range][class*=slider]::-webkit-slider-thumb{background:#ff9800}.text-hover-orange:hover[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-orange[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#ff9800}.text-hover-orange:hover[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-orange[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#ff9800}.text-hover-orange:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-orange[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#ff9800}.text-hover-orange:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-orange[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#ff9800}.border-t-orange{border-top:.0625rem solid #ff9800}.border-r-orange{border-right:.0625rem solid #ff9800}.border-b-orange{border-bottom:.0625rem solid #ff9800}.border-l-orange{border-left:.0625rem solid #ff9800}.border-a-orange{border:.0625rem solid #ff9800}.border-lr-orange{border-left:.0625rem solid #ff9800;border-right:.0625rem solid #ff9800}.border-tb-orange{border-top:.0625rem solid #ff9800;border-bottom:.0625rem solid #ff9800}.box-shadow-1-orange{box-shadow:0 .09375rem .25rem rgba(255,152,0,.24),0 .09375rem .375rem rgba(255,152,0,.12)}.box-shadow-2-orange{box-shadow:0 .1875rem .75rem rgba(255,152,0,.23),0 .1875rem .75rem rgba(255,152,0,.16)}.box-shadow-3-orange{box-shadow:0 .375rem .75rem rgba(255,152,0,.23),0 .625rem 2.5rem rgba(255,152,0,.19)}.box-shadow-4-orange{box-shadow:0 .625rem 1.25rem rgba(255,152,0,.22),0 .875rem 3.5rem rgba(255,152,0,.25)}.box-shadow-5-orange{box-shadow:0 .9375rem 1.5rem rgba(255,152,0,.22),0 1.1875rem 4.75rem rgba(255,152,0,.3)}.bg-hover-purple:hover,.bg-purple{background-color:#9c27b0}.bg-hover-purple:hover[type=range][class*=slider]::-moz-range-track,.bg-purple[type=range][class*=slider]::-moz-range-track{background:#9c27b0}.bg-hover-purple:hover[type=range][class*=slider]::-ms-thumb,.bg-purple[type=range][class*=slider]::-ms-thumb{background:#9c27b0}.bg-hover-purple:hover[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-purple[type=range][class*=slider]::-webkit-slider-runnable-track{background:#9c27b0}.bg-hover-purple:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-purple[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#9c27b0}.text-hover-purple:hover,.text-purple{color:#9c27b0}.text-hover-purple:hover[type=range][class*=slider]::-moz-range-thumb,.text-purple[type=range][class*=slider]::-moz-range-thumb{background:#9c27b0}.text-hover-purple:hover[type=range][class*=slider]::-ms-track,.text-purple[type=range][class*=slider]::-ms-track{background:#9c27b0}.text-hover-purple:hover[type=range][class*=slider]::-webkit-slider-thumb,.text-purple[type=range][class*=slider]::-webkit-slider-thumb{background:#9c27b0}.text-hover-purple:hover[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-purple[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#9c27b0}.text-hover-purple:hover[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-purple[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#9c27b0}.text-hover-purple:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-purple[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#9c27b0}.text-hover-purple:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-purple[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#9c27b0}.border-t-purple{border-top:.0625rem solid #9c27b0}.border-r-purple{border-right:.0625rem solid #9c27b0}.border-b-purple{border-bottom:.0625rem solid #9c27b0}.border-l-purple{border-left:.0625rem solid #9c27b0}.border-a-purple{border:.0625rem solid #9c27b0}.border-lr-purple{border-left:.0625rem solid #9c27b0;border-right:.0625rem solid #9c27b0}.border-tb-purple{border-top:.0625rem solid #9c27b0;border-bottom:.0625rem solid #9c27b0}.box-shadow-1-purple{box-shadow:0 .09375rem .25rem rgba(156,39,176,.24),0 .09375rem .375rem rgba(156,39,176,.12)}.box-shadow-2-purple{box-shadow:0 .1875rem .75rem rgba(156,39,176,.23),0 .1875rem .75rem rgba(156,39,176,.16)}.box-shadow-3-purple{box-shadow:0 .375rem .75rem rgba(156,39,176,.23),0 .625rem 2.5rem rgba(156,39,176,.19)}.box-shadow-4-purple{box-shadow:0 .625rem 1.25rem rgba(156,39,176,.22),0 .875rem 3.5rem rgba(156,39,176,.25)}.box-shadow-5-purple{box-shadow:0 .9375rem 1.5rem rgba(156,39,176,.22),0 1.1875rem 4.75rem rgba(156,39,176,.3)}.bg-hover-red:hover,.bg-red{background-color:#ba000d}.bg-hover-red:hover[type=range][class*=slider]::-moz-range-track,.bg-red[type=range][class*=slider]::-moz-range-track{background:#ba000d}.bg-hover-red:hover[type=range][class*=slider]::-ms-thumb,.bg-red[type=range][class*=slider]::-ms-thumb{background:#ba000d}.bg-hover-red:hover[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-red[type=range][class*=slider]::-webkit-slider-runnable-track{background:#ba000d}.bg-hover-red:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-red[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#ba000d}.text-hover-red:hover,.text-red{color:#ba000d}.text-hover-red:hover[type=range][class*=slider]::-moz-range-thumb,.text-red[type=range][class*=slider]::-moz-range-thumb{background:#ba000d}.text-hover-red:hover[type=range][class*=slider]::-ms-track,.text-red[type=range][class*=slider]::-ms-track{background:#ba000d}.text-hover-red:hover[type=range][class*=slider]::-webkit-slider-thumb,.text-red[type=range][class*=slider]::-webkit-slider-thumb{background:#ba000d}.text-hover-red:hover[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-red[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#ba000d}.text-hover-red:hover[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-red[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#ba000d}.text-hover-red:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-red[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#ba000d}.text-hover-red:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-red[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#ba000d}.border-t-red{border-top:.0625rem solid #ba000d}.border-r-red{border-right:.0625rem solid #ba000d}.border-b-red{border-bottom:.0625rem solid #ba000d}.border-l-red{border-left:.0625rem solid #ba000d}.border-a-red{border:.0625rem solid #ba000d}.border-lr-red{border-left:.0625rem solid #ba000d;border-right:.0625rem solid #ba000d}.border-tb-red{border-top:.0625rem solid #ba000d;border-bottom:.0625rem solid #ba000d}.box-shadow-1-red{box-shadow:0 .09375rem .25rem rgba(186,0,13,.24),0 .09375rem .375rem rgba(186,0,13,.12)}.box-shadow-2-red{box-shadow:0 .1875rem .75rem rgba(186,0,13,.23),0 .1875rem .75rem rgba(186,0,13,.16)}.box-shadow-3-red{box-shadow:0 .375rem .75rem rgba(186,0,13,.23),0 .625rem 2.5rem rgba(186,0,13,.19)}.box-shadow-4-red{box-shadow:0 .625rem 1.25rem rgba(186,0,13,.22),0 .875rem 3.5rem rgba(186,0,13,.25)}.box-shadow-5-red{box-shadow:0 .9375rem 1.5rem rgba(186,0,13,.22),0 1.1875rem 4.75rem rgba(186,0,13,.3)}.bg-hover-white:hover,.bg-white{background-color:#fff}.bg-hover-white:hover[type=range][class*=slider]::-moz-range-track,.bg-white[type=range][class*=slider]::-moz-range-track{background:#fff}.bg-hover-white:hover[type=range][class*=slider]::-ms-thumb,.bg-white[type=range][class*=slider]::-ms-thumb{background:#fff}.bg-hover-white:hover[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-white[type=range][class*=slider]::-webkit-slider-runnable-track{background:#fff}.bg-hover-white:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-white[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#fff}.text-hover-white:hover,.text-white{color:#fff}.text-hover-white:hover[type=range][class*=slider]::-moz-range-thumb,.text-white[type=range][class*=slider]::-moz-range-thumb{background:#fff}.text-hover-white:hover[type=range][class*=slider]::-ms-track,.text-white[type=range][class*=slider]::-ms-track{background:#fff}.text-hover-white:hover[type=range][class*=slider]::-webkit-slider-thumb,.text-white[type=range][class*=slider]::-webkit-slider-thumb{background:#fff}.text-hover-white:hover[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-white[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#fff}.text-hover-white:hover[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-white[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#fff}.text-hover-white:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-white[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#fff}.text-hover-white:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-white[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#fff}.border-t-white{border-top:.0625rem solid #fff}.border-r-white{border-right:.0625rem solid #fff}.border-b-white{border-bottom:.0625rem solid #fff}.border-l-white{border-left:.0625rem solid #fff}.border-a-white{border:.0625rem solid #fff}.border-lr-white{border-left:.0625rem solid #fff;border-right:.0625rem solid #fff}.border-tb-white{border-top:.0625rem solid #fff;border-bottom:.0625rem solid #fff}.box-shadow-1-white{box-shadow:0 .09375rem .25rem hsla(0,0%,100%,.24),0 .09375rem .375rem hsla(0,0%,100%,.12)}.box-shadow-2-white{box-shadow:0 .1875rem .75rem hsla(0,0%,100%,.23),0 .1875rem .75rem hsla(0,0%,100%,.16)}.box-shadow-3-white{box-shadow:0 .375rem .75rem hsla(0,0%,100%,.23),0 .625rem 2.5rem hsla(0,0%,100%,.19)}.box-shadow-4-white{box-shadow:0 .625rem 1.25rem hsla(0,0%,100%,.22),0 .875rem 3.5rem hsla(0,0%,100%,.25)}.box-shadow-5-white{box-shadow:0 .9375rem 1.5rem hsla(0,0%,100%,.22),0 1.1875rem 4.75rem hsla(0,0%,100%,.3)}.bg-hover-yellow:hover,.bg-yellow{background-color:#ffeb3b}.bg-hover-yellow:hover[type=range][class*=slider]::-moz-range-track,.bg-yellow[type=range][class*=slider]::-moz-range-track{background:#ffeb3b}.bg-hover-yellow:hover[type=range][class*=slider]::-ms-thumb,.bg-yellow[type=range][class*=slider]::-ms-thumb{background:#ffeb3b}.bg-hover-yellow:hover[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-yellow[type=range][class*=slider]::-webkit-slider-runnable-track{background:#ffeb3b}.bg-hover-yellow:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-yellow[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#ffeb3b}.text-hover-yellow:hover,.text-yellow{color:#ffeb3b}.text-hover-yellow:hover[type=range][class*=slider]::-moz-range-thumb,.text-yellow[type=range][class*=slider]::-moz-range-thumb{background:#ffeb3b}.text-hover-yellow:hover[type=range][class*=slider]::-ms-track,.text-yellow[type=range][class*=slider]::-ms-track{background:#ffeb3b}.text-hover-yellow:hover[type=range][class*=slider]::-webkit-slider-thumb,.text-yellow[type=range][class*=slider]::-webkit-slider-thumb{background:#ffeb3b}.text-hover-yellow:hover[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-yellow[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#ffeb3b}.text-hover-yellow:hover[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-yellow[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#ffeb3b}.text-hover-yellow:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-yellow[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#ffeb3b}.text-hover-yellow:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-yellow[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#ffeb3b}.border-t-yellow{border-top:.0625rem solid #ffeb3b}.border-r-yellow{border-right:.0625rem solid #ffeb3b}.border-b-yellow{border-bottom:.0625rem solid #ffeb3b}.border-l-yellow{border-left:.0625rem solid #ffeb3b}.border-a-yellow{border:.0625rem solid #ffeb3b}.border-lr-yellow{border-left:.0625rem solid #ffeb3b;border-right:.0625rem solid #ffeb3b}.border-tb-yellow{border-top:.0625rem solid #ffeb3b;border-bottom:.0625rem solid #ffeb3b}.box-shadow-1-yellow{box-shadow:0 .09375rem .25rem rgba(255,235,59,.24),0 .09375rem .375rem rgba(255,235,59,.12)}.box-shadow-2-yellow{box-shadow:0 .1875rem .75rem rgba(255,235,59,.23),0 .1875rem .75rem rgba(255,235,59,.16)}.box-shadow-3-yellow{box-shadow:0 .375rem .75rem rgba(255,235,59,.23),0 .625rem 2.5rem rgba(255,235,59,.19)}.box-shadow-4-yellow{box-shadow:0 .625rem 1.25rem rgba(255,235,59,.22),0 .875rem 3.5rem rgba(255,235,59,.25)}.box-shadow-5-yellow{box-shadow:0 .9375rem 1.5rem rgba(255,235,59,.22),0 1.1875rem 4.75rem rgba(255,235,59,.3)}.box-shadow-1{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12)}.box-shadow-2{box-shadow:0 .1875rem .75rem rgba(0,0,0,.23),0 .1875rem .75rem rgba(0,0,0,.16)}.box-shadow-3{box-shadow:0 .375rem .75rem rgba(0,0,0,.23),0 .625rem 2.5rem rgba(0,0,0,.19)}.box-shadow-4{box-shadow:0 .625rem 1.25rem rgba(0,0,0,.22),0 .875rem 3.5rem rgba(0,0,0,.25)}.box-shadow-5{box-shadow:0 .9375rem 1.5rem rgba(0,0,0,.22),0 1.1875rem 4.75rem rgba(0,0,0,.3)}[class^=container]{margin-left:auto;margin-right:auto;max-width:100%;width:100%}@media (min-width:48em){.container{width:80%}}.container-fluid{max-width:85.375rem}.rounded{border-radius:.5rem}.h-a{height:auto}.h-0{height:0%}.h-25{height:25%}.h-33{height:33%}.h-50{height:50%}.h-66{height:66%}.h-75{height:75%}.h-100{height:100%}.w-a{width:auto}.w-0{width:0}.w-25{width:25%}.w-33{width:33%}.w-50{width:50%}.w-66{width:66%}.w-75{width:75%}.w-100{width:100%}.dis-b{display:block}.dis-i{display:inline}.dis-i-b{display:inline-block}.pos-a{position:absolute}.pos-f-b,.pos-f-l,.pos-f-r,.pos-f-t{position:fixed;z-index:100}.pos-f-b,.pos-f-t{width:100%}.pos-f-l,.pos-f-r{overflow-y:auto}.pos-f-b{bottom:0}.pos-f-l{left:0}.pos-f-r{right:0}.pos-f-t{top:0}.pos-r{position:relative}.pos-s{position:sticky}.mar-t-a{margin-top:auto}.pad-t-a{padding-top:auto}.mar-r-a{margin-right:auto}.pad-r-a{padding-right:auto}.mar-b-a{margin-bottom:auto}.pad-b-a{padding-bottom:auto}.mar-l-a{margin-left:auto}.pad-l-a{padding-left:auto}.mar-a-a{margin:auto}.mar-lr-a{margin-left:auto;margin-right:auto}.mar-tb-a{margin-top:auto;margin-bottom:auto}.pad-a-a{padding:auto}.pad-lr-a{padding-left:auto;padding-right:auto}.pad-tb-a{padding-top:auto;padding-bottom:auto}.mar-t-lg{margin-top:2rem}.pad-t-lg{padding-top:2rem}.mar-r-lg{margin-right:2rem}.pad-r-lg{padding-right:2rem}.mar-b-lg{margin-bottom:2rem}.pad-b-lg{padding-bottom:2rem}.mar-l-lg{margin-left:2rem}.pad-l-lg{padding-left:2rem}.mar-a-lg{margin:2rem}.mar-lr-lg{margin-left:2rem;margin-right:2rem}.mar-tb-lg{margin-top:2rem;margin-bottom:2rem}.pad-a-lg{padding:2rem}.pad-lr-lg{padding-left:2rem;padding-right:2rem}.pad-tb-lg{padding-top:2rem;padding-bottom:2rem}.mar-t-md{margin-top:1.5rem}.pad-t-md{padding-top:1.5rem}.mar-r-md{margin-right:1.5rem}.pad-r-md{padding-right:1.5rem}.mar-b-md{margin-bottom:1.5rem}.pad-b-md{padding-bottom:1.5rem}.mar-l-md{margin-left:1.5rem}.pad-l-md{padding-left:1.5rem}.mar-a-md{margin:1.5rem}.mar-lr-md{margin-left:1.5rem;margin-right:1.5rem}.mar-tb-md{margin-top:1.5rem;margin-bottom:1.5rem}.pad-a-md{padding:1.5rem}.pad-lr-md{padding-left:1.5rem;padding-right:1.5rem}.pad-tb-md{padding-top:1.5rem;padding-bottom:1.5rem}.mar-t-n{margin-top:0}.pad-t-n{padding-top:0}.mar-r-n{margin-right:0}.pad-r-n{padding-right:0}.mar-b-n{margin-bottom:0}.pad-b-n{padding-bottom:0}.mar-l-n{margin-left:0}.pad-l-n{padding-left:0}.mar-a-n{margin:0}.mar-lr-n{margin-left:0;margin-right:0}.mar-tb-n{margin-top:0;margin-bottom:0}.pad-a-n{padding:0}.pad-lr-n{padding-left:0;padding-right:0}.pad-tb-n{padding-top:0;padding-bottom:0}.mar-t-sm{margin-top:1rem}.pad-t-sm{padding-top:1rem}.mar-r-sm{margin-right:1rem}.pad-r-sm{padding-right:1rem}.mar-b-sm{margin-bottom:1rem}.pad-b-sm{padding-bottom:1rem}.mar-l-sm{margin-left:1rem}.pad-l-sm{padding-left:1rem}.mar-a-sm{margin:1rem}.mar-lr-sm{margin-left:1rem;margin-right:1rem}.mar-tb-sm{margin-top:1rem;margin-bottom:1rem}.pad-a-sm{padding:1rem}.pad-lr-sm{padding-left:1rem;padding-right:1rem}.pad-tb-sm{padding-top:1rem;padding-bottom:1rem}.mar-t-xl{margin-top:2.5rem}.pad-t-xl{padding-top:2.5rem}.mar-r-xl{margin-right:2.5rem}.pad-r-xl{padding-right:2.5rem}.mar-b-xl{margin-bottom:2.5rem}.pad-b-xl{padding-bottom:2.5rem}.mar-l-xl{margin-left:2.5rem}.pad-l-xl{padding-left:2.5rem}.mar-a-xl{margin:2.5rem}.mar-lr-xl{margin-left:2.5rem;margin-right:2.5rem}.mar-tb-xl{margin-top:2.5rem;margin-bottom:2.5rem}.pad-a-xl{padding:2.5rem}.pad-lr-xl{padding-left:2.5rem;padding-right:2.5rem}.pad-tb-xl{padding-top:2.5rem;padding-bottom:2.5rem}.mar-t-xs{margin-top:.5rem}.pad-t-xs{padding-top:.5rem}.mar-r-xs{margin-right:.5rem}.pad-r-xs{padding-right:.5rem}.mar-b-xs{margin-bottom:.5rem}.pad-b-xs{padding-bottom:.5rem}.mar-l-xs{margin-left:.5rem}.pad-l-xs{padding-left:.5rem}.mar-a-xs{margin:.5rem}.mar-lr-xs{margin-left:.5rem;margin-right:.5rem}.mar-tb-xs{margin-top:.5rem;margin-bottom:.5rem}.pad-a-xs{padding:.5rem}.pad-lr-xs{padding-left:.5rem;padding-right:.5rem}.pad-tb-xs{padding-top:.5rem;padding-bottom:.5rem}.mar-t-xxl{margin-top:4.375rem}.pad-t-xxl{padding-top:4.375rem}.mar-r-xxl{margin-right:4.375rem}.pad-r-xxl{padding-right:4.375rem}.mar-b-xxl{margin-bottom:4.375rem}.pad-b-xxl{padding-bottom:4.375rem}.mar-l-xxl{margin-left:4.375rem}.pad-l-xxl{padding-left:4.375rem}.mar-a-xxl{margin:4.375rem}.mar-lr-xxl{margin-left:4.375rem;margin-right:4.375rem}.mar-tb-xxl{margin-top:4.375rem;margin-bottom:4.375rem}.pad-a-xxl{padding:4.375rem}.pad-lr-xxl{padding-left:4.375rem;padding-right:4.375rem}.pad-tb-xxl{padding-top:4.375rem;padding-bottom:4.375rem}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-md{font-size:1.125rem}.text-ml{font-size:1.375rem}.text-lg{font-size:1.5rem}.text-xl{font-size:2.25rem}.text-c{text-align:center}.text-l{text-align:left}.text-r{text-align:right}.text-j{text-align:justify}.text-caps{text-transform:capitalize}.text-upper{text-transform:uppercase}.text-lower{text-transform:lowercase}.text-sm-caps{font-variant:small-caps}.text-hyphens{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.text-lh-sm{line-height:1.3}.text-lh-md{line-height:1.6}.text-lh-lg{line-height:2}.h1,h1{font-size:2rem;margin:0}.h2,h2{font-size:1.5rem;margin:0}.h3,h3{font-size:1.17rem;margin:0}.h4,h4{font-size:1rem;margin:0}.h5,h5{font-size:.83rem;margin:0}.h6,h6{font-size:.75rem;margin:0}abbr[title]{border-bottom:.0625rem dotted #191919;cursor:help;font-family:inherit;text-decoration:none}address{line-height:inherit}blockquote{border-left:.125rem solid #8d8d8d;margin-left:1rem;padding:1rem}blockquote .author{color:#8d8d8d;padding-left:1rem;padding-top:1rem}blockquote .author:before{color:#8d8d8d;content:\"\u2012\";padding-right:.5rem}hr{border:0;border-bottom:.0625rem solid #8d8d8d}mark{background-color:#ffeb3b;color:#191919}dd{padding-left:1.5rem}address,cite,dfn,em,i{font-style:italic}code,kbd,samp{font-size:1rem}code,pre{-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;-moz-tab-size:4;-o-tab-size:4;tab-size:4}pre{font-size:.875rem;white-space:pre-line;word-spacing:normal}.list{padding-left:2.5rem}.list:not(:last-child){padding-bottom:1rem}.list .list{padding-bottom:0;padding-left:1.5rem}ol.list{list-style:decimal}ol.list .list{list-style:lower-alpha}ul.list{list-style:disc}ul.list .list{list-style:circle}.hide,.hide-xs,.show-lg,.show-md,.show-print,.show-sm,.show-xl{display:none}.hidden,.hidden-xs,.shown-lg,.shown-md,.shown-sm,.shown-xl{visibility:hidden}@media (min-width:30em){.hide-xs{display:inherit}}@media (min-width:30em) and (max-width:47em){.hide-sm{display:none}}@media (min-width:48em) and (max-width:63em){.hide-md{display:none}}@media (min-width:64em) and (max-width:84.375em){.hide-lg{display:none}}@media (min-width:85.375em){.hide-xl{display:none}}@media print{.hide-print{display:none}}@media (min-width:30em){.hidden-xs{visibility:visible}}@media (min-width:30em) and (max-width:47em){.hidden-sm{visibility:hidden}}@media (min-width:48em) and (max-width:63em){.hidden-md{visibility:hidden}}@media (min-width:64em) and (max-width:84.375em){.hidden-lg{visibility:hidden}}@media (min-width:85.375em){.hidden-xl{visibility:hidden}}.show{display:inherit}@media (min-width:30em){.show-xs{display:none}}@media (min-width:30em) and (max-width:47em){.show-sm{display:inherit}}@media (min-width:48em) and (max-width:63em){.show-md{display:inherit}}@media (min-width:64em) and (max-width:84.375em){.show-lg{display:inherit}}@media (min-width:85.375em){.show-xl{display:inherit}}@media print{.show-print{display:inherit}}@media (min-width:30em){.shown-xs{visibility:hidden}}@media (min-width:30em) and (max-width:47em){.shown-sm{visibility:visible}}@media (min-width:48em) and (max-width:63em){.shown-md{visibility:visible}}@media (min-width:64em) and (max-width:84.375em){.shown-lg{visibility:visible}}@media (min-width:85.375em){.shown-xl{visibility:visible}}.show-focus,.show-sr{border:0;clip:rect(0,0,0,0);display:inline-block;height:.0625rem;margin:-.0625rem;overflow:hidden;padding:0;position:absolute;width:.0625rem}.show-focus:focus{clip:auto;height:auto;margin:1rem;overflow:visible;padding:1rem;position:static;width:auto;z-index:100}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EasyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ez-root',
                template: "<ng-content></ng-content>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: ["@charset \"UTF-8\";a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font-size:100%;font:inherit;margin:0;padding:0;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:\"\";content:none}table{border-collapse:collapse;border-spacing:0}\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}html{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0,0,0,0);box-sizing:border-box;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%}@media (min-width:64em){html{font-size:15px}}@media (min-width:48em){html{font-size:14px}}@media (min-width:30em){html{font-size:13px}}@media (min-width:85.375em){html{font-size:16px}}*,:after,:before{box-sizing:inherit}body{background-color:#fafafa;color:#191919;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:1rem;line-height:1;overflow-x:hidden;text-rendering:optimizeLegibility}body input,body select,body textarea{font-size:1.3333rem}@media (min-width:64em){body input,body select,body textarea{font-size:1.0667rem}}@media (min-width:48em){body input,body select,body textarea{font-size:1.1429rem}}@media (min-width:30em){body input,body select,body textarea{font-size:1.2308rem}}@media (min-width:85.375em){body input,body select,body textarea{font-size:1rem}}body,html{height:100%;width:100%}a,area,button,input,label,select,summary,textarea{touch-action:manipulation}button,canvas,embed,figure,img,input,label,object,progress,select,textarea,video{max-width:100%}canvas,figure,img,video{height:auto}address,dd,dl,dt,figure,li,ol,pre,ul{margin:0}caption{caption-side:bottom}caption,img,label,td,th{vertical-align:middle}[type=button],[type=reset],[type=submit],a,a[role=button],button,html input[type=button],input,input[type=reset],input[type=submit],optgroup,select,textarea{border:0;border-radius:0;font-family:inherit;text-decoration:none}[type=button]:active:not([disabled]),[type=button]:focus:not([disabled]),[type=button]:hover:not([disabled]),[type=reset]:active:not([disabled]),[type=reset]:focus:not([disabled]),[type=reset]:hover:not([disabled]),[type=submit]:active:not([disabled]),[type=submit]:focus:not([disabled]),[type=submit]:hover:not([disabled]),a:active:not([disabled]),a:focus:not([disabled]),a:hover:not([disabled]),a[role=button]:active:not([disabled]),a[role=button]:focus:not([disabled]),a[role=button]:hover:not([disabled]),button:active:not([disabled]),button:focus:not([disabled]),button:hover:not([disabled]),html input[type=button]:active:not([disabled]),html input[type=button]:focus:not([disabled]),html input[type=button]:hover:not([disabled]),input:active:not([disabled]),input:focus:not([disabled]),input:hover:not([disabled]),input[type=reset]:active:not([disabled]),input[type=reset]:focus:not([disabled]),input[type=reset]:hover:not([disabled]),input[type=submit]:active:not([disabled]),input[type=submit]:focus:not([disabled]),input[type=submit]:hover:not([disabled]),optgroup:active:not([disabled]),optgroup:focus:not([disabled]),optgroup:hover:not([disabled]),select:active:not([disabled]),select:focus:not([disabled]),select:hover:not([disabled]),textarea:active:not([disabled]),textarea:focus:not([disabled]),textarea:hover:not([disabled]){outline:none;outline-offset:0}[type=button]:-moz-focus-inner:not([disabled]),[type=reset]:-moz-focus-inner:not([disabled]),[type=submit]:-moz-focus-inner:not([disabled]),a:-moz-focus-inner:not([disabled]),a[role=button]:-moz-focus-inner:not([disabled]),button:-moz-focus-inner:not([disabled]),html input[type=button]:-moz-focus-inner:not([disabled]),input:-moz-focus-inner:not([disabled]),input[type=reset]:-moz-focus-inner:not([disabled]),input[type=submit]:-moz-focus-inner:not([disabled]),optgroup:-moz-focus-inner:not([disabled]),select:-moz-focus-inner:not([disabled]),textarea:-moz-focus-inner:not([disabled]){outline:none;outline-offset:0}[type=button],[type=reset],[type=submit],a,a[role=button],button,html input[type=button],input[type=reset],input[type=submit]{background-color:transparent}[type=button].active:not([disabled]),[type=button]:active:not([disabled]),[type=button]:focus:not([disabled]),[type=button]:hover:not([disabled]),[type=reset].active:not([disabled]),[type=reset]:active:not([disabled]),[type=reset]:focus:not([disabled]),[type=reset]:hover:not([disabled]),[type=submit].active:not([disabled]),[type=submit]:active:not([disabled]),[type=submit]:focus:not([disabled]),[type=submit]:hover:not([disabled]),a.active:not([disabled]),a:active:not([disabled]),a:focus:not([disabled]),a:hover:not([disabled]),a[role=button].active:not([disabled]),a[role=button]:active:not([disabled]),a[role=button]:focus:not([disabled]),a[role=button]:hover:not([disabled]),button.active:not([disabled]),button:active:not([disabled]),button:focus:not([disabled]),button:hover:not([disabled]),html input[type=button].active:not([disabled]),html input[type=button]:active:not([disabled]),html input[type=button]:focus:not([disabled]),html input[type=button]:hover:not([disabled]),input[type=reset].active:not([disabled]),input[type=reset]:active:not([disabled]),input[type=reset]:focus:not([disabled]),input[type=reset]:hover:not([disabled]),input[type=submit].active:not([disabled]),input[type=submit]:active:not([disabled]),input[type=submit]:focus:not([disabled]),input[type=submit]:hover:not([disabled]){text-decoration:underline}[type=button]:-moz-focus-inner:not([disabled]),[type=reset]:-moz-focus-inner:not([disabled]),[type=submit]:-moz-focus-inner:not([disabled]),a:-moz-focus-inner:not([disabled]),a[role=button]:-moz-focus-inner:not([disabled]),button:-moz-focus-inner:not([disabled]),html input[type=button]:-moz-focus-inner:not([disabled]),input[type=reset]:-moz-focus-inner:not([disabled]),input[type=submit]:-moz-focus-inner:not([disabled]){text-decoration:underline}a:hover,a[role=button]:hover,button:hover,html input[type=button]:hover,input[type=checkbox]:hover,input[type=radio]:hover,input[type=range]:hover,input[type=reset]:hover,input[type=submit]:hover,select:hover{cursor:pointer}fieldset{margin-inline:0;min-inline-size:0;min-width:0;padding:0;padding-block:0;padding-inline:0}input,select,textarea{font:inherit;outline:.0625rem solid #000}input:active:not([disabled]),input:focus:not([disabled]),input:hover:not([disabled]),select:active:not([disabled]),select:focus:not([disabled]),select:hover:not([disabled]),textarea:active:not([disabled]),textarea:focus:not([disabled]),textarea:hover:not([disabled]){outline:.0625rem solid #2196f3}input[type=checkbox],input[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:1rem;margin-block:0;margin-inline:0;width:1rem;vertical-align:middle}input[type=checkbox]:checked:before,input[type=radio]:checked:before{background-color:#000;content:\"\";display:block;height:.75rem;transform:translate(.125rem,.125rem);width:.75rem}input[type=radio]{border:.0625rem solid #000;border-radius:50%;outline:none}input[type=radio]:checked:before{border-radius:50%;transform:translate(.078125rem,.046875rem);-moz-transform:translate(.078125rem,.078125rem)}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}input[type=file]{height:auto;padding:0}input[type=number]{-moz-appearance:textfield}input[type=range]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;font:inherit;margin:0;padding:0;width:100%}input[type=range]:active,input[type=range]:focus,input[type=range]:hover{border:.1rem solid #000;outline:none}input[type=range]::-ms-tooltip{display:none}input[type=range],input[type=range]::-webkit-slider-thumb{-webkit-appearance:none}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}legend{font-size:1.125rem;padding-inline:0}optgroup{font-weight:bolder}option{color:#191919;min-block-size:0;min-height:0;padding:0;padding-block:0;padding-inline:0}progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#efefef;border:none;border-radius:0;display:block;height:.9375rem;width:100%}progress::-webkit-progress-bar{background-color:#efefef}select{overflow-y:auto;padding-block:0;text-rendering:optimizeLegibility}select:-moz-focusring{color:transparent;text-shadow:0 0 0 #191919}textarea{resize:vertical}[disabled] :disabled,button:disabled,button[disabled],input:disabled,input[disabled]{background-color:#efefef;color:#8d8d8d;text-decoration:none}[disabled] :disabled:hover,button:disabled:hover,button[disabled]:hover,input:disabled:hover,input[disabled]:hover{cursor:not-allowed}[tabindex=\"0\"]:focus,[tabindex=\"-1\"]:focus{outline:none}.center,.left,.right{display:block}.center{margin-left:auto}.center,.left{margin-right:auto}.right{margin-left:auto}.bg-black,.bg-hover-black:hover{background-color:#000}.bg-black[type=range][class*=slider]::-moz-range-track,.bg-hover-black:hover[type=range][class*=slider]::-moz-range-track{background:#000}.bg-black[type=range][class*=slider]::-ms-thumb,.bg-hover-black:hover[type=range][class*=slider]::-ms-thumb{background:#000}.bg-black[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-hover-black:hover[type=range][class*=slider]::-webkit-slider-runnable-track{background:#000}.bg-black[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-hover-black:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#000}.text-black,.text-hover-black:hover{color:#000}.text-black[type=range][class*=slider]::-moz-range-thumb,.text-hover-black:hover[type=range][class*=slider]::-moz-range-thumb{background:#000}.text-black[type=range][class*=slider]::-ms-track,.text-hover-black:hover[type=range][class*=slider]::-ms-track{background:#000}.text-black[type=range][class*=slider]::-webkit-slider-thumb,.text-hover-black:hover[type=range][class*=slider]::-webkit-slider-thumb{background:#000}.text-black[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-hover-black:hover[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#000}.text-black[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-hover-black:hover[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#000}.text-black[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-hover-black:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#000}.text-black[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-hover-black:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#000}.border-t-black{border-top:.0625rem solid #000}.border-r-black{border-right:.0625rem solid #000}.border-b-black{border-bottom:.0625rem solid #000}.border-l-black{border-left:.0625rem solid #000}.border-a-black{border:.0625rem solid #000}.border-lr-black{border-left:.0625rem solid #000;border-right:.0625rem solid #000}.border-tb-black{border-top:.0625rem solid #000;border-bottom:.0625rem solid #000}.box-shadow-1-black{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12)}.box-shadow-2-black{box-shadow:0 .1875rem .75rem rgba(0,0,0,.23),0 .1875rem .75rem rgba(0,0,0,.16)}.box-shadow-3-black{box-shadow:0 .375rem .75rem rgba(0,0,0,.23),0 .625rem 2.5rem rgba(0,0,0,.19)}.box-shadow-4-black{box-shadow:0 .625rem 1.25rem rgba(0,0,0,.22),0 .875rem 3.5rem rgba(0,0,0,.25)}.box-shadow-5-black{box-shadow:0 .9375rem 1.5rem rgba(0,0,0,.22),0 1.1875rem 4.75rem rgba(0,0,0,.3)}.bg-blue,.bg-hover-blue:hover{background-color:#2196f3}.bg-blue[type=range][class*=slider]::-moz-range-track,.bg-hover-blue:hover[type=range][class*=slider]::-moz-range-track{background:#2196f3}.bg-blue[type=range][class*=slider]::-ms-thumb,.bg-hover-blue:hover[type=range][class*=slider]::-ms-thumb{background:#2196f3}.bg-blue[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-hover-blue:hover[type=range][class*=slider]::-webkit-slider-runnable-track{background:#2196f3}.bg-blue[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-hover-blue:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#2196f3}.text-blue,.text-hover-blue:hover{color:#2196f3}.text-blue[type=range][class*=slider]::-moz-range-thumb,.text-hover-blue:hover[type=range][class*=slider]::-moz-range-thumb{background:#2196f3}.text-blue[type=range][class*=slider]::-ms-track,.text-hover-blue:hover[type=range][class*=slider]::-ms-track{background:#2196f3}.text-blue[type=range][class*=slider]::-webkit-slider-thumb,.text-hover-blue:hover[type=range][class*=slider]::-webkit-slider-thumb{background:#2196f3}.text-blue[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-hover-blue:hover[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#2196f3}.text-blue[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-hover-blue:hover[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#2196f3}.text-blue[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-hover-blue:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#2196f3}.text-blue[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-hover-blue:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#2196f3}.border-t-blue{border-top:.0625rem solid #2196f3}.border-r-blue{border-right:.0625rem solid #2196f3}.border-b-blue{border-bottom:.0625rem solid #2196f3}.border-l-blue{border-left:.0625rem solid #2196f3}.border-a-blue{border:.0625rem solid #2196f3}.border-lr-blue{border-left:.0625rem solid #2196f3;border-right:.0625rem solid #2196f3}.border-tb-blue{border-top:.0625rem solid #2196f3;border-bottom:.0625rem solid #2196f3}.box-shadow-1-blue{box-shadow:0 .09375rem .25rem rgba(33,150,243,.24),0 .09375rem .375rem rgba(33,150,243,.12)}.box-shadow-2-blue{box-shadow:0 .1875rem .75rem rgba(33,150,243,.23),0 .1875rem .75rem rgba(33,150,243,.16)}.box-shadow-3-blue{box-shadow:0 .375rem .75rem rgba(33,150,243,.23),0 .625rem 2.5rem rgba(33,150,243,.19)}.box-shadow-4-blue{box-shadow:0 .625rem 1.25rem rgba(33,150,243,.22),0 .875rem 3.5rem rgba(33,150,243,.25)}.box-shadow-5-blue{box-shadow:0 .9375rem 1.5rem rgba(33,150,243,.22),0 1.1875rem 4.75rem rgba(33,150,243,.3)}.bg-dk-blue,.bg-hover-dk-blue:hover{background-color:#0069c0}.bg-dk-blue[type=range][class*=slider]::-moz-range-track,.bg-hover-dk-blue:hover[type=range][class*=slider]::-moz-range-track{background:#0069c0}.bg-dk-blue[type=range][class*=slider]::-ms-thumb,.bg-hover-dk-blue:hover[type=range][class*=slider]::-ms-thumb{background:#0069c0}.bg-dk-blue[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-hover-dk-blue:hover[type=range][class*=slider]::-webkit-slider-runnable-track{background:#0069c0}.bg-dk-blue[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-hover-dk-blue:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#0069c0}.text-dk-blue,.text-hover-dk-blue:hover{color:#0069c0}.text-dk-blue[type=range][class*=slider]::-moz-range-thumb,.text-hover-dk-blue:hover[type=range][class*=slider]::-moz-range-thumb{background:#0069c0}.text-dk-blue[type=range][class*=slider]::-ms-track,.text-hover-dk-blue:hover[type=range][class*=slider]::-ms-track{background:#0069c0}.text-dk-blue[type=range][class*=slider]::-webkit-slider-thumb,.text-hover-dk-blue:hover[type=range][class*=slider]::-webkit-slider-thumb{background:#0069c0}.text-dk-blue[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-hover-dk-blue:hover[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#0069c0}.text-dk-blue[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-hover-dk-blue:hover[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#0069c0}.text-dk-blue[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-hover-dk-blue:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#0069c0}.text-dk-blue[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-hover-dk-blue:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#0069c0}.border-t-dk-blue{border-top:.0625rem solid #0069c0}.border-r-dk-blue{border-right:.0625rem solid #0069c0}.border-b-dk-blue{border-bottom:.0625rem solid #0069c0}.border-l-dk-blue{border-left:.0625rem solid #0069c0}.border-a-dk-blue{border:.0625rem solid #0069c0}.border-lr-dk-blue{border-left:.0625rem solid #0069c0;border-right:.0625rem solid #0069c0}.border-tb-dk-blue{border-top:.0625rem solid #0069c0;border-bottom:.0625rem solid #0069c0}.box-shadow-1-dk-blue{box-shadow:0 .09375rem .25rem rgba(0,105,192,.24),0 .09375rem .375rem rgba(0,105,192,.12)}.box-shadow-2-dk-blue{box-shadow:0 .1875rem .75rem rgba(0,105,192,.23),0 .1875rem .75rem rgba(0,105,192,.16)}.box-shadow-3-dk-blue{box-shadow:0 .375rem .75rem rgba(0,105,192,.23),0 .625rem 2.5rem rgba(0,105,192,.19)}.box-shadow-4-dk-blue{box-shadow:0 .625rem 1.25rem rgba(0,105,192,.22),0 .875rem 3.5rem rgba(0,105,192,.25)}.box-shadow-5-dk-blue{box-shadow:0 .9375rem 1.5rem rgba(0,105,192,.22),0 1.1875rem 4.75rem rgba(0,105,192,.3)}.bg-dk-gray,.bg-hover-dk-gray:hover{background-color:#8d8d8d}.bg-dk-gray[type=range][class*=slider]::-moz-range-track,.bg-hover-dk-gray:hover[type=range][class*=slider]::-moz-range-track{background:#8d8d8d}.bg-dk-gray[type=range][class*=slider]::-ms-thumb,.bg-hover-dk-gray:hover[type=range][class*=slider]::-ms-thumb{background:#8d8d8d}.bg-dk-gray[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-hover-dk-gray:hover[type=range][class*=slider]::-webkit-slider-runnable-track{background:#8d8d8d}.bg-dk-gray[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-hover-dk-gray:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#8d8d8d}.text-dk-gray,.text-hover-dk-gray:hover{color:#8d8d8d}.text-dk-gray[type=range][class*=slider]::-moz-range-thumb,.text-hover-dk-gray:hover[type=range][class*=slider]::-moz-range-thumb{background:#8d8d8d}.text-dk-gray[type=range][class*=slider]::-ms-track,.text-hover-dk-gray:hover[type=range][class*=slider]::-ms-track{background:#8d8d8d}.text-dk-gray[type=range][class*=slider]::-webkit-slider-thumb,.text-hover-dk-gray:hover[type=range][class*=slider]::-webkit-slider-thumb{background:#8d8d8d}.text-dk-gray[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-hover-dk-gray:hover[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#8d8d8d}.text-dk-gray[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-hover-dk-gray:hover[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#8d8d8d}.text-dk-gray[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-hover-dk-gray:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#8d8d8d}.text-dk-gray[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-hover-dk-gray:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#8d8d8d}.border-t-dk-gray{border-top:.0625rem solid #8d8d8d}.border-r-dk-gray{border-right:.0625rem solid #8d8d8d}.border-b-dk-gray{border-bottom:.0625rem solid #8d8d8d}.border-l-dk-gray{border-left:.0625rem solid #8d8d8d}.border-a-dk-gray{border:.0625rem solid #8d8d8d}.border-lr-dk-gray{border-left:.0625rem solid #8d8d8d;border-right:.0625rem solid #8d8d8d}.border-tb-dk-gray{border-top:.0625rem solid #8d8d8d;border-bottom:.0625rem solid #8d8d8d}.box-shadow-1-dk-gray{box-shadow:0 .09375rem .25rem hsla(0,0%,55.3%,.24),0 .09375rem .375rem hsla(0,0%,55.3%,.12)}.box-shadow-2-dk-gray{box-shadow:0 .1875rem .75rem hsla(0,0%,55.3%,.23),0 .1875rem .75rem hsla(0,0%,55.3%,.16)}.box-shadow-3-dk-gray{box-shadow:0 .375rem .75rem hsla(0,0%,55.3%,.23),0 .625rem 2.5rem hsla(0,0%,55.3%,.19)}.box-shadow-4-dk-gray{box-shadow:0 .625rem 1.25rem hsla(0,0%,55.3%,.22),0 .875rem 3.5rem hsla(0,0%,55.3%,.25)}.box-shadow-5-dk-gray{box-shadow:0 .9375rem 1.5rem hsla(0,0%,55.3%,.22),0 1.1875rem 4.75rem hsla(0,0%,55.3%,.3)}.bg-gray,.bg-hover-gray:hover{background-color:#bdbdbd}.bg-gray[type=range][class*=slider]::-moz-range-track,.bg-hover-gray:hover[type=range][class*=slider]::-moz-range-track{background:#bdbdbd}.bg-gray[type=range][class*=slider]::-ms-thumb,.bg-hover-gray:hover[type=range][class*=slider]::-ms-thumb{background:#bdbdbd}.bg-gray[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-hover-gray:hover[type=range][class*=slider]::-webkit-slider-runnable-track{background:#bdbdbd}.bg-gray[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-hover-gray:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#bdbdbd}.text-gray,.text-hover-gray:hover{color:#bdbdbd}.text-gray[type=range][class*=slider]::-moz-range-thumb,.text-hover-gray:hover[type=range][class*=slider]::-moz-range-thumb{background:#bdbdbd}.text-gray[type=range][class*=slider]::-ms-track,.text-hover-gray:hover[type=range][class*=slider]::-ms-track{background:#bdbdbd}.text-gray[type=range][class*=slider]::-webkit-slider-thumb,.text-hover-gray:hover[type=range][class*=slider]::-webkit-slider-thumb{background:#bdbdbd}.text-gray[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-hover-gray:hover[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#bdbdbd}.text-gray[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-hover-gray:hover[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#bdbdbd}.text-gray[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-hover-gray:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#bdbdbd}.text-gray[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-hover-gray:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#bdbdbd}.border-t-gray{border-top:.0625rem solid #bdbdbd}.border-r-gray{border-right:.0625rem solid #bdbdbd}.border-b-gray{border-bottom:.0625rem solid #bdbdbd}.border-l-gray{border-left:.0625rem solid #bdbdbd}.border-a-gray{border:.0625rem solid #bdbdbd}.border-lr-gray{border-left:.0625rem solid #bdbdbd;border-right:.0625rem solid #bdbdbd}.border-tb-gray{border-top:.0625rem solid #bdbdbd;border-bottom:.0625rem solid #bdbdbd}.box-shadow-1-gray{box-shadow:0 .09375rem .25rem hsla(0,0%,74.1%,.24),0 .09375rem .375rem hsla(0,0%,74.1%,.12)}.box-shadow-2-gray{box-shadow:0 .1875rem .75rem hsla(0,0%,74.1%,.23),0 .1875rem .75rem hsla(0,0%,74.1%,.16)}.box-shadow-3-gray{box-shadow:0 .375rem .75rem hsla(0,0%,74.1%,.23),0 .625rem 2.5rem hsla(0,0%,74.1%,.19)}.box-shadow-4-gray{box-shadow:0 .625rem 1.25rem hsla(0,0%,74.1%,.22),0 .875rem 3.5rem hsla(0,0%,74.1%,.25)}.box-shadow-5-gray{box-shadow:0 .9375rem 1.5rem hsla(0,0%,74.1%,.22),0 1.1875rem 4.75rem hsla(0,0%,74.1%,.3)}.bg-green,.bg-hover-green:hover{background-color:#4caf50}.bg-green[type=range][class*=slider]::-moz-range-track,.bg-hover-green:hover[type=range][class*=slider]::-moz-range-track{background:#4caf50}.bg-green[type=range][class*=slider]::-ms-thumb,.bg-hover-green:hover[type=range][class*=slider]::-ms-thumb{background:#4caf50}.bg-green[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-hover-green:hover[type=range][class*=slider]::-webkit-slider-runnable-track{background:#4caf50}.bg-green[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-hover-green:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#4caf50}.text-green,.text-hover-green:hover{color:#4caf50}.text-green[type=range][class*=slider]::-moz-range-thumb,.text-hover-green:hover[type=range][class*=slider]::-moz-range-thumb{background:#4caf50}.text-green[type=range][class*=slider]::-ms-track,.text-hover-green:hover[type=range][class*=slider]::-ms-track{background:#4caf50}.text-green[type=range][class*=slider]::-webkit-slider-thumb,.text-hover-green:hover[type=range][class*=slider]::-webkit-slider-thumb{background:#4caf50}.text-green[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-hover-green:hover[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#4caf50}.text-green[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-hover-green:hover[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#4caf50}.text-green[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-hover-green:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#4caf50}.text-green[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-hover-green:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#4caf50}.border-t-green{border-top:.0625rem solid #4caf50}.border-r-green{border-right:.0625rem solid #4caf50}.border-b-green{border-bottom:.0625rem solid #4caf50}.border-l-green{border-left:.0625rem solid #4caf50}.border-a-green{border:.0625rem solid #4caf50}.border-lr-green{border-left:.0625rem solid #4caf50;border-right:.0625rem solid #4caf50}.border-tb-green{border-top:.0625rem solid #4caf50;border-bottom:.0625rem solid #4caf50}.box-shadow-1-green{box-shadow:0 .09375rem .25rem rgba(76,175,80,.24),0 .09375rem .375rem rgba(76,175,80,.12)}.box-shadow-2-green{box-shadow:0 .1875rem .75rem rgba(76,175,80,.23),0 .1875rem .75rem rgba(76,175,80,.16)}.box-shadow-3-green{box-shadow:0 .375rem .75rem rgba(76,175,80,.23),0 .625rem 2.5rem rgba(76,175,80,.19)}.box-shadow-4-green{box-shadow:0 .625rem 1.25rem rgba(76,175,80,.22),0 .875rem 3.5rem rgba(76,175,80,.25)}.box-shadow-5-green{box-shadow:0 .9375rem 1.5rem rgba(76,175,80,.22),0 1.1875rem 4.75rem rgba(76,175,80,.3)}.text-hover-lt-black:hover,.text-lt-black{color:#191919}.text-hover-lt-black:hover[type=range][class*=slider]::-moz-range-thumb,.text-lt-black[type=range][class*=slider]::-moz-range-thumb{background:#191919}.text-hover-lt-black:hover[type=range][class*=slider]::-ms-track,.text-lt-black[type=range][class*=slider]::-ms-track{background:#191919}.text-hover-lt-black:hover[type=range][class*=slider]::-webkit-slider-thumb,.text-lt-black[type=range][class*=slider]::-webkit-slider-thumb{background:#191919}.text-hover-lt-black:hover[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-lt-black[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#191919}.text-hover-lt-black:hover[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-lt-black[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#191919}.text-hover-lt-black:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-lt-black[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#191919}.text-hover-lt-black:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-lt-black[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#191919}.bg-hover-lt-gray:hover,.bg-lt-gray{background-color:#efefef}.bg-hover-lt-gray:hover[type=range][class*=slider]::-moz-range-track,.bg-lt-gray[type=range][class*=slider]::-moz-range-track{background:#efefef}.bg-hover-lt-gray:hover[type=range][class*=slider]::-ms-thumb,.bg-lt-gray[type=range][class*=slider]::-ms-thumb{background:#efefef}.bg-hover-lt-gray:hover[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-lt-gray[type=range][class*=slider]::-webkit-slider-runnable-track{background:#efefef}.bg-hover-lt-gray:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-lt-gray[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#efefef}.text-hover-lt-gray:hover,.text-lt-gray{color:#efefef}.text-hover-lt-gray:hover[type=range][class*=slider]::-moz-range-thumb,.text-lt-gray[type=range][class*=slider]::-moz-range-thumb{background:#efefef}.text-hover-lt-gray:hover[type=range][class*=slider]::-ms-track,.text-lt-gray[type=range][class*=slider]::-ms-track{background:#efefef}.text-hover-lt-gray:hover[type=range][class*=slider]::-webkit-slider-thumb,.text-lt-gray[type=range][class*=slider]::-webkit-slider-thumb{background:#efefef}.text-hover-lt-gray:hover[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-lt-gray[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#efefef}.text-hover-lt-gray:hover[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-lt-gray[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#efefef}.text-hover-lt-gray:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-lt-gray[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#efefef}.text-hover-lt-gray:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-lt-gray[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#efefef}.border-t-lt-gray{border-top:.0625rem solid #efefef}.border-r-lt-gray{border-right:.0625rem solid #efefef}.border-b-lt-gray{border-bottom:.0625rem solid #efefef}.border-l-lt-gray{border-left:.0625rem solid #efefef}.border-a-lt-gray{border:.0625rem solid #efefef}.border-lr-lt-gray{border-left:.0625rem solid #efefef;border-right:.0625rem solid #efefef}.border-tb-lt-gray{border-top:.0625rem solid #efefef;border-bottom:.0625rem solid #efefef}.box-shadow-1-lt-gray{box-shadow:0 .09375rem .25rem hsla(0,0%,93.7%,.24),0 .09375rem .375rem hsla(0,0%,93.7%,.12)}.box-shadow-2-lt-gray{box-shadow:0 .1875rem .75rem hsla(0,0%,93.7%,.23),0 .1875rem .75rem hsla(0,0%,93.7%,.16)}.box-shadow-3-lt-gray{box-shadow:0 .375rem .75rem hsla(0,0%,93.7%,.23),0 .625rem 2.5rem hsla(0,0%,93.7%,.19)}.box-shadow-4-lt-gray{box-shadow:0 .625rem 1.25rem hsla(0,0%,93.7%,.22),0 .875rem 3.5rem hsla(0,0%,93.7%,.25)}.box-shadow-5-lt-gray{box-shadow:0 .9375rem 1.5rem hsla(0,0%,93.7%,.22),0 1.1875rem 4.75rem hsla(0,0%,93.7%,.3)}.bg-hover-lt-white:hover,.bg-lt-white{background-color:#fafafa}.bg-hover-lt-white:hover[type=range][class*=slider]::-moz-range-track,.bg-lt-white[type=range][class*=slider]::-moz-range-track{background:#fafafa}.bg-hover-lt-white:hover[type=range][class*=slider]::-ms-thumb,.bg-lt-white[type=range][class*=slider]::-ms-thumb{background:#fafafa}.bg-hover-lt-white:hover[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-lt-white[type=range][class*=slider]::-webkit-slider-runnable-track{background:#fafafa}.bg-hover-lt-white:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-lt-white[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#fafafa}.bg-hover-orange:hover,.bg-orange{background-color:#ff9800}.bg-hover-orange:hover[type=range][class*=slider]::-moz-range-track,.bg-orange[type=range][class*=slider]::-moz-range-track{background:#ff9800}.bg-hover-orange:hover[type=range][class*=slider]::-ms-thumb,.bg-orange[type=range][class*=slider]::-ms-thumb{background:#ff9800}.bg-hover-orange:hover[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-orange[type=range][class*=slider]::-webkit-slider-runnable-track{background:#ff9800}.bg-hover-orange:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-orange[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#ff9800}.text-hover-orange:hover,.text-orange{color:#ff9800}.text-hover-orange:hover[type=range][class*=slider]::-moz-range-thumb,.text-orange[type=range][class*=slider]::-moz-range-thumb{background:#ff9800}.text-hover-orange:hover[type=range][class*=slider]::-ms-track,.text-orange[type=range][class*=slider]::-ms-track{background:#ff9800}.text-hover-orange:hover[type=range][class*=slider]::-webkit-slider-thumb,.text-orange[type=range][class*=slider]::-webkit-slider-thumb{background:#ff9800}.text-hover-orange:hover[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-orange[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#ff9800}.text-hover-orange:hover[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-orange[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#ff9800}.text-hover-orange:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-orange[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#ff9800}.text-hover-orange:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-orange[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#ff9800}.border-t-orange{border-top:.0625rem solid #ff9800}.border-r-orange{border-right:.0625rem solid #ff9800}.border-b-orange{border-bottom:.0625rem solid #ff9800}.border-l-orange{border-left:.0625rem solid #ff9800}.border-a-orange{border:.0625rem solid #ff9800}.border-lr-orange{border-left:.0625rem solid #ff9800;border-right:.0625rem solid #ff9800}.border-tb-orange{border-top:.0625rem solid #ff9800;border-bottom:.0625rem solid #ff9800}.box-shadow-1-orange{box-shadow:0 .09375rem .25rem rgba(255,152,0,.24),0 .09375rem .375rem rgba(255,152,0,.12)}.box-shadow-2-orange{box-shadow:0 .1875rem .75rem rgba(255,152,0,.23),0 .1875rem .75rem rgba(255,152,0,.16)}.box-shadow-3-orange{box-shadow:0 .375rem .75rem rgba(255,152,0,.23),0 .625rem 2.5rem rgba(255,152,0,.19)}.box-shadow-4-orange{box-shadow:0 .625rem 1.25rem rgba(255,152,0,.22),0 .875rem 3.5rem rgba(255,152,0,.25)}.box-shadow-5-orange{box-shadow:0 .9375rem 1.5rem rgba(255,152,0,.22),0 1.1875rem 4.75rem rgba(255,152,0,.3)}.bg-hover-purple:hover,.bg-purple{background-color:#9c27b0}.bg-hover-purple:hover[type=range][class*=slider]::-moz-range-track,.bg-purple[type=range][class*=slider]::-moz-range-track{background:#9c27b0}.bg-hover-purple:hover[type=range][class*=slider]::-ms-thumb,.bg-purple[type=range][class*=slider]::-ms-thumb{background:#9c27b0}.bg-hover-purple:hover[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-purple[type=range][class*=slider]::-webkit-slider-runnable-track{background:#9c27b0}.bg-hover-purple:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-purple[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#9c27b0}.text-hover-purple:hover,.text-purple{color:#9c27b0}.text-hover-purple:hover[type=range][class*=slider]::-moz-range-thumb,.text-purple[type=range][class*=slider]::-moz-range-thumb{background:#9c27b0}.text-hover-purple:hover[type=range][class*=slider]::-ms-track,.text-purple[type=range][class*=slider]::-ms-track{background:#9c27b0}.text-hover-purple:hover[type=range][class*=slider]::-webkit-slider-thumb,.text-purple[type=range][class*=slider]::-webkit-slider-thumb{background:#9c27b0}.text-hover-purple:hover[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-purple[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#9c27b0}.text-hover-purple:hover[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-purple[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#9c27b0}.text-hover-purple:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-purple[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#9c27b0}.text-hover-purple:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-purple[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#9c27b0}.border-t-purple{border-top:.0625rem solid #9c27b0}.border-r-purple{border-right:.0625rem solid #9c27b0}.border-b-purple{border-bottom:.0625rem solid #9c27b0}.border-l-purple{border-left:.0625rem solid #9c27b0}.border-a-purple{border:.0625rem solid #9c27b0}.border-lr-purple{border-left:.0625rem solid #9c27b0;border-right:.0625rem solid #9c27b0}.border-tb-purple{border-top:.0625rem solid #9c27b0;border-bottom:.0625rem solid #9c27b0}.box-shadow-1-purple{box-shadow:0 .09375rem .25rem rgba(156,39,176,.24),0 .09375rem .375rem rgba(156,39,176,.12)}.box-shadow-2-purple{box-shadow:0 .1875rem .75rem rgba(156,39,176,.23),0 .1875rem .75rem rgba(156,39,176,.16)}.box-shadow-3-purple{box-shadow:0 .375rem .75rem rgba(156,39,176,.23),0 .625rem 2.5rem rgba(156,39,176,.19)}.box-shadow-4-purple{box-shadow:0 .625rem 1.25rem rgba(156,39,176,.22),0 .875rem 3.5rem rgba(156,39,176,.25)}.box-shadow-5-purple{box-shadow:0 .9375rem 1.5rem rgba(156,39,176,.22),0 1.1875rem 4.75rem rgba(156,39,176,.3)}.bg-hover-red:hover,.bg-red{background-color:#ba000d}.bg-hover-red:hover[type=range][class*=slider]::-moz-range-track,.bg-red[type=range][class*=slider]::-moz-range-track{background:#ba000d}.bg-hover-red:hover[type=range][class*=slider]::-ms-thumb,.bg-red[type=range][class*=slider]::-ms-thumb{background:#ba000d}.bg-hover-red:hover[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-red[type=range][class*=slider]::-webkit-slider-runnable-track{background:#ba000d}.bg-hover-red:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-red[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#ba000d}.text-hover-red:hover,.text-red{color:#ba000d}.text-hover-red:hover[type=range][class*=slider]::-moz-range-thumb,.text-red[type=range][class*=slider]::-moz-range-thumb{background:#ba000d}.text-hover-red:hover[type=range][class*=slider]::-ms-track,.text-red[type=range][class*=slider]::-ms-track{background:#ba000d}.text-hover-red:hover[type=range][class*=slider]::-webkit-slider-thumb,.text-red[type=range][class*=slider]::-webkit-slider-thumb{background:#ba000d}.text-hover-red:hover[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-red[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#ba000d}.text-hover-red:hover[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-red[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#ba000d}.text-hover-red:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-red[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#ba000d}.text-hover-red:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-red[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#ba000d}.border-t-red{border-top:.0625rem solid #ba000d}.border-r-red{border-right:.0625rem solid #ba000d}.border-b-red{border-bottom:.0625rem solid #ba000d}.border-l-red{border-left:.0625rem solid #ba000d}.border-a-red{border:.0625rem solid #ba000d}.border-lr-red{border-left:.0625rem solid #ba000d;border-right:.0625rem solid #ba000d}.border-tb-red{border-top:.0625rem solid #ba000d;border-bottom:.0625rem solid #ba000d}.box-shadow-1-red{box-shadow:0 .09375rem .25rem rgba(186,0,13,.24),0 .09375rem .375rem rgba(186,0,13,.12)}.box-shadow-2-red{box-shadow:0 .1875rem .75rem rgba(186,0,13,.23),0 .1875rem .75rem rgba(186,0,13,.16)}.box-shadow-3-red{box-shadow:0 .375rem .75rem rgba(186,0,13,.23),0 .625rem 2.5rem rgba(186,0,13,.19)}.box-shadow-4-red{box-shadow:0 .625rem 1.25rem rgba(186,0,13,.22),0 .875rem 3.5rem rgba(186,0,13,.25)}.box-shadow-5-red{box-shadow:0 .9375rem 1.5rem rgba(186,0,13,.22),0 1.1875rem 4.75rem rgba(186,0,13,.3)}.bg-hover-white:hover,.bg-white{background-color:#fff}.bg-hover-white:hover[type=range][class*=slider]::-moz-range-track,.bg-white[type=range][class*=slider]::-moz-range-track{background:#fff}.bg-hover-white:hover[type=range][class*=slider]::-ms-thumb,.bg-white[type=range][class*=slider]::-ms-thumb{background:#fff}.bg-hover-white:hover[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-white[type=range][class*=slider]::-webkit-slider-runnable-track{background:#fff}.bg-hover-white:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-white[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#fff}.text-hover-white:hover,.text-white{color:#fff}.text-hover-white:hover[type=range][class*=slider]::-moz-range-thumb,.text-white[type=range][class*=slider]::-moz-range-thumb{background:#fff}.text-hover-white:hover[type=range][class*=slider]::-ms-track,.text-white[type=range][class*=slider]::-ms-track{background:#fff}.text-hover-white:hover[type=range][class*=slider]::-webkit-slider-thumb,.text-white[type=range][class*=slider]::-webkit-slider-thumb{background:#fff}.text-hover-white:hover[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-white[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#fff}.text-hover-white:hover[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-white[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#fff}.text-hover-white:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-white[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#fff}.text-hover-white:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-white[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#fff}.border-t-white{border-top:.0625rem solid #fff}.border-r-white{border-right:.0625rem solid #fff}.border-b-white{border-bottom:.0625rem solid #fff}.border-l-white{border-left:.0625rem solid #fff}.border-a-white{border:.0625rem solid #fff}.border-lr-white{border-left:.0625rem solid #fff;border-right:.0625rem solid #fff}.border-tb-white{border-top:.0625rem solid #fff;border-bottom:.0625rem solid #fff}.box-shadow-1-white{box-shadow:0 .09375rem .25rem hsla(0,0%,100%,.24),0 .09375rem .375rem hsla(0,0%,100%,.12)}.box-shadow-2-white{box-shadow:0 .1875rem .75rem hsla(0,0%,100%,.23),0 .1875rem .75rem hsla(0,0%,100%,.16)}.box-shadow-3-white{box-shadow:0 .375rem .75rem hsla(0,0%,100%,.23),0 .625rem 2.5rem hsla(0,0%,100%,.19)}.box-shadow-4-white{box-shadow:0 .625rem 1.25rem hsla(0,0%,100%,.22),0 .875rem 3.5rem hsla(0,0%,100%,.25)}.box-shadow-5-white{box-shadow:0 .9375rem 1.5rem hsla(0,0%,100%,.22),0 1.1875rem 4.75rem hsla(0,0%,100%,.3)}.bg-hover-yellow:hover,.bg-yellow{background-color:#ffeb3b}.bg-hover-yellow:hover[type=range][class*=slider]::-moz-range-track,.bg-yellow[type=range][class*=slider]::-moz-range-track{background:#ffeb3b}.bg-hover-yellow:hover[type=range][class*=slider]::-ms-thumb,.bg-yellow[type=range][class*=slider]::-ms-thumb{background:#ffeb3b}.bg-hover-yellow:hover[type=range][class*=slider]::-webkit-slider-runnable-track,.bg-yellow[type=range][class*=slider]::-webkit-slider-runnable-track{background:#ffeb3b}.bg-hover-yellow:hover[class*=progress]:not(.progress-label)::-webkit-progress-bar,.bg-yellow[class*=progress]:not(.progress-label)::-webkit-progress-bar{background-color:#ffeb3b}.text-hover-yellow:hover,.text-yellow{color:#ffeb3b}.text-hover-yellow:hover[type=range][class*=slider]::-moz-range-thumb,.text-yellow[type=range][class*=slider]::-moz-range-thumb{background:#ffeb3b}.text-hover-yellow:hover[type=range][class*=slider]::-ms-track,.text-yellow[type=range][class*=slider]::-ms-track{background:#ffeb3b}.text-hover-yellow:hover[type=range][class*=slider]::-webkit-slider-thumb,.text-yellow[type=range][class*=slider]::-webkit-slider-thumb{background:#ffeb3b}.text-hover-yellow:hover[class*=progress]:not(.progress-label)::-moz-progress-bar,.text-yellow[class*=progress]:not(.progress-label)::-moz-progress-bar{background-color:#ffeb3b}.text-hover-yellow:hover[class*=progress]:not(.progress-label)::-webkit-progress-value,.text-yellow[class*=progress]:not(.progress-label)::-webkit-progress-value{background-color:#ffeb3b}.text-hover-yellow:hover[class*=progress]:not(.progress-label).striped::-moz-progress-bar,.text-yellow[class*=progress]:not(.progress-label).striped::-moz-progress-bar{background-color:#ffeb3b}.text-hover-yellow:hover[class*=progress]:not(.progress-label).striped::-webkit-progress-value,.text-yellow[class*=progress]:not(.progress-label).striped::-webkit-progress-value{background-color:#ffeb3b}.border-t-yellow{border-top:.0625rem solid #ffeb3b}.border-r-yellow{border-right:.0625rem solid #ffeb3b}.border-b-yellow{border-bottom:.0625rem solid #ffeb3b}.border-l-yellow{border-left:.0625rem solid #ffeb3b}.border-a-yellow{border:.0625rem solid #ffeb3b}.border-lr-yellow{border-left:.0625rem solid #ffeb3b;border-right:.0625rem solid #ffeb3b}.border-tb-yellow{border-top:.0625rem solid #ffeb3b;border-bottom:.0625rem solid #ffeb3b}.box-shadow-1-yellow{box-shadow:0 .09375rem .25rem rgba(255,235,59,.24),0 .09375rem .375rem rgba(255,235,59,.12)}.box-shadow-2-yellow{box-shadow:0 .1875rem .75rem rgba(255,235,59,.23),0 .1875rem .75rem rgba(255,235,59,.16)}.box-shadow-3-yellow{box-shadow:0 .375rem .75rem rgba(255,235,59,.23),0 .625rem 2.5rem rgba(255,235,59,.19)}.box-shadow-4-yellow{box-shadow:0 .625rem 1.25rem rgba(255,235,59,.22),0 .875rem 3.5rem rgba(255,235,59,.25)}.box-shadow-5-yellow{box-shadow:0 .9375rem 1.5rem rgba(255,235,59,.22),0 1.1875rem 4.75rem rgba(255,235,59,.3)}.box-shadow-1{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12)}.box-shadow-2{box-shadow:0 .1875rem .75rem rgba(0,0,0,.23),0 .1875rem .75rem rgba(0,0,0,.16)}.box-shadow-3{box-shadow:0 .375rem .75rem rgba(0,0,0,.23),0 .625rem 2.5rem rgba(0,0,0,.19)}.box-shadow-4{box-shadow:0 .625rem 1.25rem rgba(0,0,0,.22),0 .875rem 3.5rem rgba(0,0,0,.25)}.box-shadow-5{box-shadow:0 .9375rem 1.5rem rgba(0,0,0,.22),0 1.1875rem 4.75rem rgba(0,0,0,.3)}[class^=container]{margin-left:auto;margin-right:auto;max-width:100%;width:100%}@media (min-width:48em){.container{width:80%}}.container-fluid{max-width:85.375rem}.rounded{border-radius:.5rem}.h-a{height:auto}.h-0{height:0%}.h-25{height:25%}.h-33{height:33%}.h-50{height:50%}.h-66{height:66%}.h-75{height:75%}.h-100{height:100%}.w-a{width:auto}.w-0{width:0}.w-25{width:25%}.w-33{width:33%}.w-50{width:50%}.w-66{width:66%}.w-75{width:75%}.w-100{width:100%}.dis-b{display:block}.dis-i{display:inline}.dis-i-b{display:inline-block}.pos-a{position:absolute}.pos-f-b,.pos-f-l,.pos-f-r,.pos-f-t{position:fixed;z-index:100}.pos-f-b,.pos-f-t{width:100%}.pos-f-l,.pos-f-r{overflow-y:auto}.pos-f-b{bottom:0}.pos-f-l{left:0}.pos-f-r{right:0}.pos-f-t{top:0}.pos-r{position:relative}.pos-s{position:sticky}.mar-t-a{margin-top:auto}.pad-t-a{padding-top:auto}.mar-r-a{margin-right:auto}.pad-r-a{padding-right:auto}.mar-b-a{margin-bottom:auto}.pad-b-a{padding-bottom:auto}.mar-l-a{margin-left:auto}.pad-l-a{padding-left:auto}.mar-a-a{margin:auto}.mar-lr-a{margin-left:auto;margin-right:auto}.mar-tb-a{margin-top:auto;margin-bottom:auto}.pad-a-a{padding:auto}.pad-lr-a{padding-left:auto;padding-right:auto}.pad-tb-a{padding-top:auto;padding-bottom:auto}.mar-t-lg{margin-top:2rem}.pad-t-lg{padding-top:2rem}.mar-r-lg{margin-right:2rem}.pad-r-lg{padding-right:2rem}.mar-b-lg{margin-bottom:2rem}.pad-b-lg{padding-bottom:2rem}.mar-l-lg{margin-left:2rem}.pad-l-lg{padding-left:2rem}.mar-a-lg{margin:2rem}.mar-lr-lg{margin-left:2rem;margin-right:2rem}.mar-tb-lg{margin-top:2rem;margin-bottom:2rem}.pad-a-lg{padding:2rem}.pad-lr-lg{padding-left:2rem;padding-right:2rem}.pad-tb-lg{padding-top:2rem;padding-bottom:2rem}.mar-t-md{margin-top:1.5rem}.pad-t-md{padding-top:1.5rem}.mar-r-md{margin-right:1.5rem}.pad-r-md{padding-right:1.5rem}.mar-b-md{margin-bottom:1.5rem}.pad-b-md{padding-bottom:1.5rem}.mar-l-md{margin-left:1.5rem}.pad-l-md{padding-left:1.5rem}.mar-a-md{margin:1.5rem}.mar-lr-md{margin-left:1.5rem;margin-right:1.5rem}.mar-tb-md{margin-top:1.5rem;margin-bottom:1.5rem}.pad-a-md{padding:1.5rem}.pad-lr-md{padding-left:1.5rem;padding-right:1.5rem}.pad-tb-md{padding-top:1.5rem;padding-bottom:1.5rem}.mar-t-n{margin-top:0}.pad-t-n{padding-top:0}.mar-r-n{margin-right:0}.pad-r-n{padding-right:0}.mar-b-n{margin-bottom:0}.pad-b-n{padding-bottom:0}.mar-l-n{margin-left:0}.pad-l-n{padding-left:0}.mar-a-n{margin:0}.mar-lr-n{margin-left:0;margin-right:0}.mar-tb-n{margin-top:0;margin-bottom:0}.pad-a-n{padding:0}.pad-lr-n{padding-left:0;padding-right:0}.pad-tb-n{padding-top:0;padding-bottom:0}.mar-t-sm{margin-top:1rem}.pad-t-sm{padding-top:1rem}.mar-r-sm{margin-right:1rem}.pad-r-sm{padding-right:1rem}.mar-b-sm{margin-bottom:1rem}.pad-b-sm{padding-bottom:1rem}.mar-l-sm{margin-left:1rem}.pad-l-sm{padding-left:1rem}.mar-a-sm{margin:1rem}.mar-lr-sm{margin-left:1rem;margin-right:1rem}.mar-tb-sm{margin-top:1rem;margin-bottom:1rem}.pad-a-sm{padding:1rem}.pad-lr-sm{padding-left:1rem;padding-right:1rem}.pad-tb-sm{padding-top:1rem;padding-bottom:1rem}.mar-t-xl{margin-top:2.5rem}.pad-t-xl{padding-top:2.5rem}.mar-r-xl{margin-right:2.5rem}.pad-r-xl{padding-right:2.5rem}.mar-b-xl{margin-bottom:2.5rem}.pad-b-xl{padding-bottom:2.5rem}.mar-l-xl{margin-left:2.5rem}.pad-l-xl{padding-left:2.5rem}.mar-a-xl{margin:2.5rem}.mar-lr-xl{margin-left:2.5rem;margin-right:2.5rem}.mar-tb-xl{margin-top:2.5rem;margin-bottom:2.5rem}.pad-a-xl{padding:2.5rem}.pad-lr-xl{padding-left:2.5rem;padding-right:2.5rem}.pad-tb-xl{padding-top:2.5rem;padding-bottom:2.5rem}.mar-t-xs{margin-top:.5rem}.pad-t-xs{padding-top:.5rem}.mar-r-xs{margin-right:.5rem}.pad-r-xs{padding-right:.5rem}.mar-b-xs{margin-bottom:.5rem}.pad-b-xs{padding-bottom:.5rem}.mar-l-xs{margin-left:.5rem}.pad-l-xs{padding-left:.5rem}.mar-a-xs{margin:.5rem}.mar-lr-xs{margin-left:.5rem;margin-right:.5rem}.mar-tb-xs{margin-top:.5rem;margin-bottom:.5rem}.pad-a-xs{padding:.5rem}.pad-lr-xs{padding-left:.5rem;padding-right:.5rem}.pad-tb-xs{padding-top:.5rem;padding-bottom:.5rem}.mar-t-xxl{margin-top:4.375rem}.pad-t-xxl{padding-top:4.375rem}.mar-r-xxl{margin-right:4.375rem}.pad-r-xxl{padding-right:4.375rem}.mar-b-xxl{margin-bottom:4.375rem}.pad-b-xxl{padding-bottom:4.375rem}.mar-l-xxl{margin-left:4.375rem}.pad-l-xxl{padding-left:4.375rem}.mar-a-xxl{margin:4.375rem}.mar-lr-xxl{margin-left:4.375rem;margin-right:4.375rem}.mar-tb-xxl{margin-top:4.375rem;margin-bottom:4.375rem}.pad-a-xxl{padding:4.375rem}.pad-lr-xxl{padding-left:4.375rem;padding-right:4.375rem}.pad-tb-xxl{padding-top:4.375rem;padding-bottom:4.375rem}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-md{font-size:1.125rem}.text-ml{font-size:1.375rem}.text-lg{font-size:1.5rem}.text-xl{font-size:2.25rem}.text-c{text-align:center}.text-l{text-align:left}.text-r{text-align:right}.text-j{text-align:justify}.text-caps{text-transform:capitalize}.text-upper{text-transform:uppercase}.text-lower{text-transform:lowercase}.text-sm-caps{font-variant:small-caps}.text-hyphens{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.text-lh-sm{line-height:1.3}.text-lh-md{line-height:1.6}.text-lh-lg{line-height:2}.h1,h1{font-size:2rem;margin:0}.h2,h2{font-size:1.5rem;margin:0}.h3,h3{font-size:1.17rem;margin:0}.h4,h4{font-size:1rem;margin:0}.h5,h5{font-size:.83rem;margin:0}.h6,h6{font-size:.75rem;margin:0}abbr[title]{border-bottom:.0625rem dotted #191919;cursor:help;font-family:inherit;text-decoration:none}address{line-height:inherit}blockquote{border-left:.125rem solid #8d8d8d;margin-left:1rem;padding:1rem}blockquote .author{color:#8d8d8d;padding-left:1rem;padding-top:1rem}blockquote .author:before{color:#8d8d8d;content:\"\u2012\";padding-right:.5rem}hr{border:0;border-bottom:.0625rem solid #8d8d8d}mark{background-color:#ffeb3b;color:#191919}dd{padding-left:1.5rem}address,cite,dfn,em,i{font-style:italic}code,kbd,samp{font-size:1rem}code,pre{-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;-moz-tab-size:4;-o-tab-size:4;tab-size:4}pre{font-size:.875rem;white-space:pre-line;word-spacing:normal}.list{padding-left:2.5rem}.list:not(:last-child){padding-bottom:1rem}.list .list{padding-bottom:0;padding-left:1.5rem}ol.list{list-style:decimal}ol.list .list{list-style:lower-alpha}ul.list{list-style:disc}ul.list .list{list-style:circle}.hide,.hide-xs,.show-lg,.show-md,.show-print,.show-sm,.show-xl{display:none}.hidden,.hidden-xs,.shown-lg,.shown-md,.shown-sm,.shown-xl{visibility:hidden}@media (min-width:30em){.hide-xs{display:inherit}}@media (min-width:30em) and (max-width:47em){.hide-sm{display:none}}@media (min-width:48em) and (max-width:63em){.hide-md{display:none}}@media (min-width:64em) and (max-width:84.375em){.hide-lg{display:none}}@media (min-width:85.375em){.hide-xl{display:none}}@media print{.hide-print{display:none}}@media (min-width:30em){.hidden-xs{visibility:visible}}@media (min-width:30em) and (max-width:47em){.hidden-sm{visibility:hidden}}@media (min-width:48em) and (max-width:63em){.hidden-md{visibility:hidden}}@media (min-width:64em) and (max-width:84.375em){.hidden-lg{visibility:hidden}}@media (min-width:85.375em){.hidden-xl{visibility:hidden}}.show{display:inherit}@media (min-width:30em){.show-xs{display:none}}@media (min-width:30em) and (max-width:47em){.show-sm{display:inherit}}@media (min-width:48em) and (max-width:63em){.show-md{display:inherit}}@media (min-width:64em) and (max-width:84.375em){.show-lg{display:inherit}}@media (min-width:85.375em){.show-xl{display:inherit}}@media print{.show-print{display:inherit}}@media (min-width:30em){.shown-xs{visibility:hidden}}@media (min-width:30em) and (max-width:47em){.shown-sm{visibility:visible}}@media (min-width:48em) and (max-width:63em){.shown-md{visibility:visible}}@media (min-width:64em) and (max-width:84.375em){.shown-lg{visibility:visible}}@media (min-width:85.375em){.shown-xl{visibility:visible}}.show-focus,.show-sr{border:0;clip:rect(0,0,0,0);display:inline-block;height:.0625rem;margin:-.0625rem;overflow:hidden;padding:0;position:absolute;width:.0625rem}.show-focus:focus{clip:auto;height:auto;margin:1rem;overflow:visible;padding:1rem;position:static;width:auto;z-index:100}"]
            }]
    }], null, null); })();

class EasyModule {
}
EasyModule.ɵfac = function EasyModule_Factory(t) { return new (t || EasyModule)(); };
EasyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EasyModule });
EasyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EasyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    EasyComponent
                ],
                exports: [
                    EasyComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EasyModule, { declarations: [EasyComponent], exports: [EasyComponent] }); })();

class FlexboxComponent {
}
FlexboxComponent.ɵfac = function FlexboxComponent_Factory(t) { return new (t || FlexboxComponent)(); };
FlexboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlexboxComponent, selectors: [["", 8, "col"], ["", 8, "col-full"], ["", 8, "row"], ["", 8, "row-full"]], attrs: _c12, ngContentSelectors: _c1, decls: 1, vars: 0, template: function FlexboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: [".col,.col-full,.row,.row-full{align-content:flex-start;align-items:flex-start;display:flex;justify-content:flex-start}.col,.col-full{flex-direction:column}.col-full{height:100%}.row-full{width:100%}.align-b:not(.grid):not(.col),.col.align-r{align-items:flex-end}.align-c:not(.grid):not(.col),.align-cm:not(.grid),.col.align-m{justify-content:center}.align-cm:not(.grid){align-items:center}.align-l:not(.grid):not(.col),.col.align-t{justify-content:flex-start}.align-m:not(.grid):not(.col),.col.align-c{align-items:center}.align-r:not(.grid):not(.col),.col.align-b{justify-content:flex-end}.align-sa:not(.grid){justify-content:space-around}.align-sb:not(.grid){justify-content:space-between}.align-se:not(.grid){justify-content:space-evenly}.align-st:not(.grid){align-items:stretch}.align-t:not(.grid):not(.col),.col.align-l{align-items:flex-start}[class*=wrap]:not(.wrap-n){flex-wrap:wrap}.col.wrap-c,.wrap-m:not(.col){align-content:center}.col.wrap-l,.wrap-t:not(.col){align-content:flex-start}.col.wrap-r,.wrap-b:not(.col){align-content:flex-end}.wrap-n{flex-wrap:nowrap}.wrap-sa{align-content:space-around}.wrap-sb{align-content:space-between}.wrap-st{align-content:stretch;align-items:stretch}.col .item-b{margin-top:auto}.col .item-c,.col .item-cm,.item-m:not(.grid .item-m):not(.col .item-m){align-self:center}.col .item-cm{margin-bottom:auto;margin-top:auto}.col .item-l,.item-t:not(.grid .item-t):not(.col .item-t){align-self:flex-start}.col .item-m{margin-bottom:auto;margin-top:auto}.col .item-r,.item-b:not(.grid .item-b):not(.col .item-b){align-self:flex-end}.col .item-t{margin-bottom:auto}.item-c:not(.grid .item-c):not(.col .item-c){margin-left:auto;margin-right:auto}.item-cm:not(.grid .item-cm):not(.col .item-cm){align-self:center;margin-left:auto;margin-right:auto}.item-l:not(.grid .item-l):not(.col .item-l){margin-right:auto}.item-r:not(.grid .item-r):not(.col .item-r){margin-left:auto}.item-st{align-self:stretch}.item-order-0{order:0}.item-order-1{order:1}.item-order-2{order:2}.item-order-3{order:3}.item-order-4{order:4}.item-order-5{order:5}.item-order-6{order:6}.item-order-7{order:7}.item-order-8{order:8}.item-order-9{order:9}.item-order-10{order:10}.item-order-11{order:11}.item-order-12{order:12}.item-order-13{order:13}.item-g-0,.item-gs-0,.item-s-0{flex:0 0 auto}.item-g-1{flex:1 0 auto}.item-gs-1{flex:1 1 auto}.item-s-1{flex:0 1 auto}.item-g-2{flex:2 0 auto}.item-gs-2{flex:2 2 auto}.item-s-2{flex:0 2 auto}.item-g-3{flex:3 0 auto}.item-gs-3{flex:3 3 auto}.item-s-3{flex:0 3 auto}.item-g-4{flex:4 0 auto}.item-gs-4{flex:4 4 auto}.item-s-4{flex:0 4 auto}.item-g-5{flex:5 0 auto}.item-gs-5{flex:5 5 auto}.item-s-5{flex:0 5 auto}.item-g-6{flex:6 0 auto}.item-gs-6{flex:6 6 auto}.item-s-6{flex:0 6 auto}.item-g-7{flex:7 0 auto}.item-gs-7{flex:7 7 auto}.item-s-7{flex:0 7 auto}.item-g-8{flex:8 0 auto}.item-gs-8{flex:8 8 auto}.item-s-8{flex:0 8 auto}.item-g-9{flex:9 0 auto}.item-gs-9{flex:9 9 auto}.item-s-9{flex:0 9 auto}.item-g-10{flex:10 0 auto}.item-gs-10{flex:10 10 auto}.item-s-10{flex:0 10 auto}.item-g-11{flex:11 0 auto}.item-gs-11{flex:11 11 auto}.item-s-11{flex:0 11 auto}.item-g-12{flex:12 0 auto}.item-gs-12{flex:12 12 auto}.item-s-12{flex:0 12 auto}.item-g-13{flex:13 0 auto}.item-gs-13{flex:13 13 auto}.item-s-13{flex:0 13 auto}.flex-sticky-footer{display:flex;flex-direction:column;min-height:100%}.flex-sticky-footer>*{flex-shrink:0}.flex-sticky-footer .main,.flex-sticky-footer main{flex:1 0 auto}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '.col, .col-full, .row, .row-full',
                template: "<ng-content></ng-content>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [".col,.col-full,.row,.row-full{align-content:flex-start;align-items:flex-start;display:flex;justify-content:flex-start}.col,.col-full{flex-direction:column}.col-full{height:100%}.row-full{width:100%}.align-b:not(.grid):not(.col),.col.align-r{align-items:flex-end}.align-c:not(.grid):not(.col),.align-cm:not(.grid),.col.align-m{justify-content:center}.align-cm:not(.grid){align-items:center}.align-l:not(.grid):not(.col),.col.align-t{justify-content:flex-start}.align-m:not(.grid):not(.col),.col.align-c{align-items:center}.align-r:not(.grid):not(.col),.col.align-b{justify-content:flex-end}.align-sa:not(.grid){justify-content:space-around}.align-sb:not(.grid){justify-content:space-between}.align-se:not(.grid){justify-content:space-evenly}.align-st:not(.grid){align-items:stretch}.align-t:not(.grid):not(.col),.col.align-l{align-items:flex-start}[class*=wrap]:not(.wrap-n){flex-wrap:wrap}.col.wrap-c,.wrap-m:not(.col){align-content:center}.col.wrap-l,.wrap-t:not(.col){align-content:flex-start}.col.wrap-r,.wrap-b:not(.col){align-content:flex-end}.wrap-n{flex-wrap:nowrap}.wrap-sa{align-content:space-around}.wrap-sb{align-content:space-between}.wrap-st{align-content:stretch;align-items:stretch}.col .item-b{margin-top:auto}.col .item-c,.col .item-cm,.item-m:not(.grid .item-m):not(.col .item-m){align-self:center}.col .item-cm{margin-bottom:auto;margin-top:auto}.col .item-l,.item-t:not(.grid .item-t):not(.col .item-t){align-self:flex-start}.col .item-m{margin-bottom:auto;margin-top:auto}.col .item-r,.item-b:not(.grid .item-b):not(.col .item-b){align-self:flex-end}.col .item-t{margin-bottom:auto}.item-c:not(.grid .item-c):not(.col .item-c){margin-left:auto;margin-right:auto}.item-cm:not(.grid .item-cm):not(.col .item-cm){align-self:center;margin-left:auto;margin-right:auto}.item-l:not(.grid .item-l):not(.col .item-l){margin-right:auto}.item-r:not(.grid .item-r):not(.col .item-r){margin-left:auto}.item-st{align-self:stretch}.item-order-0{order:0}.item-order-1{order:1}.item-order-2{order:2}.item-order-3{order:3}.item-order-4{order:4}.item-order-5{order:5}.item-order-6{order:6}.item-order-7{order:7}.item-order-8{order:8}.item-order-9{order:9}.item-order-10{order:10}.item-order-11{order:11}.item-order-12{order:12}.item-order-13{order:13}.item-g-0,.item-gs-0,.item-s-0{flex:0 0 auto}.item-g-1{flex:1 0 auto}.item-gs-1{flex:1 1 auto}.item-s-1{flex:0 1 auto}.item-g-2{flex:2 0 auto}.item-gs-2{flex:2 2 auto}.item-s-2{flex:0 2 auto}.item-g-3{flex:3 0 auto}.item-gs-3{flex:3 3 auto}.item-s-3{flex:0 3 auto}.item-g-4{flex:4 0 auto}.item-gs-4{flex:4 4 auto}.item-s-4{flex:0 4 auto}.item-g-5{flex:5 0 auto}.item-gs-5{flex:5 5 auto}.item-s-5{flex:0 5 auto}.item-g-6{flex:6 0 auto}.item-gs-6{flex:6 6 auto}.item-s-6{flex:0 6 auto}.item-g-7{flex:7 0 auto}.item-gs-7{flex:7 7 auto}.item-s-7{flex:0 7 auto}.item-g-8{flex:8 0 auto}.item-gs-8{flex:8 8 auto}.item-s-8{flex:0 8 auto}.item-g-9{flex:9 0 auto}.item-gs-9{flex:9 9 auto}.item-s-9{flex:0 9 auto}.item-g-10{flex:10 0 auto}.item-gs-10{flex:10 10 auto}.item-s-10{flex:0 10 auto}.item-g-11{flex:11 0 auto}.item-gs-11{flex:11 11 auto}.item-s-11{flex:0 11 auto}.item-g-12{flex:12 0 auto}.item-gs-12{flex:12 12 auto}.item-s-12{flex:0 12 auto}.item-g-13{flex:13 0 auto}.item-gs-13{flex:13 13 auto}.item-s-13{flex:0 13 auto}.flex-sticky-footer{display:flex;flex-direction:column;min-height:100%}.flex-sticky-footer>*{flex-shrink:0}.flex-sticky-footer .main,.flex-sticky-footer main{flex:1 0 auto}"]
            }]
    }], null, null); })();

class FlexboxModule {
}
FlexboxModule.ɵfac = function FlexboxModule_Factory(t) { return new (t || FlexboxModule)(); };
FlexboxModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FlexboxModule });
FlexboxModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    FlexboxComponent
                ],
                exports: [
                    FlexboxComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlexboxModule, { declarations: [FlexboxComponent], exports: [FlexboxComponent] }); })();

class GridComponent {
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(); };
GridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["", 8, "grid"]], attrs: _c13, ngContentSelectors: _c1, decls: 1, vars: 0, template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["@supports (grid-area:auto){.grid{display:grid}}.cols-1{grid-template-columns:repeat(1,1fr)}.rows-1{grid-template-rows:repeat(1,1fr)}.cols-2{grid-template-columns:repeat(2,1fr)}.rows-2{grid-template-rows:repeat(2,1fr)}.cols-3{grid-template-columns:repeat(3,1fr)}.rows-3{grid-template-rows:repeat(3,1fr)}.cols-4{grid-template-columns:repeat(4,1fr)}.rows-4{grid-template-rows:repeat(4,1fr)}.cols-5{grid-template-columns:repeat(5,1fr)}.rows-5{grid-template-rows:repeat(5,1fr)}.cols-6{grid-template-columns:repeat(6,1fr)}.rows-6{grid-template-rows:repeat(6,1fr)}.cols-7{grid-template-columns:repeat(7,1fr)}.rows-7{grid-template-rows:repeat(7,1fr)}.cols-8{grid-template-columns:repeat(8,1fr)}.rows-8{grid-template-rows:repeat(8,1fr)}.cols-9{grid-template-columns:repeat(9,1fr)}.rows-9{grid-template-rows:repeat(9,1fr)}.cols-10{grid-template-columns:repeat(10,1fr)}.rows-10{grid-template-rows:repeat(10,1fr)}.cols-11{grid-template-columns:repeat(11,1fr)}.rows-11{grid-template-rows:repeat(11,1fr)}.cols-12{grid-template-columns:repeat(12,1fr)}.rows-12{grid-template-rows:repeat(12,1fr)}.col-gap-a{-moz-column-gap:auto;column-gap:auto}.gap-a{gap:auto auto}.row-gap-a{row-gap:auto}.col-gap-lg{-moz-column-gap:2rem;column-gap:2rem}.gap-lg{gap:2rem 2rem}.row-gap-lg{row-gap:2rem}.col-gap-md{-moz-column-gap:1.5rem;column-gap:1.5rem}.gap-md{gap:1.5rem 1.5rem}.row-gap-md{row-gap:1.5rem}.col-gap-sm{-moz-column-gap:1rem;column-gap:1rem}.gap-sm{gap:1rem 1rem}.row-gap-sm{row-gap:1rem}.col-gap-xl{-moz-column-gap:2.5rem;column-gap:2.5rem}.gap-xl{gap:2.5rem 2.5rem}.row-gap-xl{row-gap:2.5rem}.col-gap-xs{-moz-column-gap:.5rem;column-gap:.5rem}.gap-xs{gap:.5rem .5rem}.row-gap-xs{row-gap:.5rem}.col-gap-xxl{-moz-column-gap:4.375rem;column-gap:4.375rem}.gap-xxl{gap:4.375rem 4.375rem}.row-gap-xxl{row-gap:4.375rem}.grid.align-b{align-items:end}.grid.align-c,.grid.align-cm{justify-items:center}.grid.align-cm{align-items:center}.grid.align-l{justify-items:start}.grid.align-m{align-items:center}.grid.align-r{justify-items:end}.grid.align-t{align-items:start}.col-1{grid-column:1}.row-1{grid-row:1}.col-2{grid-column:2}.row-2{grid-row:2}.col-3{grid-column:3}.row-3{grid-row:3}.col-4{grid-column:4}.row-4{grid-row:4}.col-5{grid-column:5}.row-5{grid-row:5}.col-6{grid-column:6}.row-6{grid-row:6}.col-7{grid-column:7}.row-7{grid-row:7}.col-8{grid-column:8}.row-8{grid-row:8}.col-9{grid-column:9}.row-9{grid-row:9}.col-10{grid-column:10}.row-10{grid-row:10}.col-11{grid-column:11}.row-11{grid-row:11}.col-12{grid-column:12}.row-12{grid-row:12}.col-1-span-2{grid-column:1/span 2}.row-1-span-2{grid-row:1/span 2}.col-1-span-3{grid-column:1/span 3}.row-1-span-3{grid-row:1/span 3}.col-1-span-4{grid-column:1/span 4}.row-1-span-4{grid-row:1/span 4}.col-1-span-5{grid-column:1/span 5}.row-1-span-5{grid-row:1/span 5}.col-1-span-6{grid-column:1/span 6}.row-1-span-6{grid-row:1/span 6}.col-1-span-7{grid-column:1/span 7}.row-1-span-7{grid-row:1/span 7}.col-1-span-8{grid-column:1/span 8}.row-1-span-8{grid-row:1/span 8}.col-1-span-9{grid-column:1/span 9}.row-1-span-9{grid-row:1/span 9}.col-1-span-10{grid-column:1/span 10}.row-1-span-10{grid-row:1/span 10}.col-1-span-11{grid-column:1/span 11}.row-1-span-11{grid-row:1/span 11}.col-1-span-12{grid-column:1/span 12}.row-1-span-12{grid-row:1/span 12}.col-2-span-2{grid-column:2/span 2}.row-2-span-2{grid-row:2/span 2}.col-2-span-3{grid-column:2/span 3}.row-2-span-3{grid-row:2/span 3}.col-2-span-4{grid-column:2/span 4}.row-2-span-4{grid-row:2/span 4}.col-2-span-5{grid-column:2/span 5}.row-2-span-5{grid-row:2/span 5}.col-2-span-6{grid-column:2/span 6}.row-2-span-6{grid-row:2/span 6}.col-2-span-7{grid-column:2/span 7}.row-2-span-7{grid-row:2/span 7}.col-2-span-8{grid-column:2/span 8}.row-2-span-8{grid-row:2/span 8}.col-2-span-9{grid-column:2/span 9}.row-2-span-9{grid-row:2/span 9}.col-2-span-10{grid-column:2/span 10}.row-2-span-10{grid-row:2/span 10}.col-2-span-11{grid-column:2/span 11}.row-2-span-11{grid-row:2/span 11}.col-2-span-12{grid-column:2/span 12}.row-2-span-12{grid-row:2/span 12}.col-3-span-2{grid-column:3/span 2}.row-3-span-2{grid-row:3/span 2}.col-3-span-3{grid-column:3/span 3}.row-3-span-3{grid-row:3/span 3}.col-3-span-4{grid-column:3/span 4}.row-3-span-4{grid-row:3/span 4}.col-3-span-5{grid-column:3/span 5}.row-3-span-5{grid-row:3/span 5}.col-3-span-6{grid-column:3/span 6}.row-3-span-6{grid-row:3/span 6}.col-3-span-7{grid-column:3/span 7}.row-3-span-7{grid-row:3/span 7}.col-3-span-8{grid-column:3/span 8}.row-3-span-8{grid-row:3/span 8}.col-3-span-9{grid-column:3/span 9}.row-3-span-9{grid-row:3/span 9}.col-3-span-10{grid-column:3/span 10}.row-3-span-10{grid-row:3/span 10}.col-3-span-11{grid-column:3/span 11}.row-3-span-11{grid-row:3/span 11}.col-3-span-12{grid-column:3/span 12}.row-3-span-12{grid-row:3/span 12}.col-4-span-2{grid-column:4/span 2}.row-4-span-2{grid-row:4/span 2}.col-4-span-3{grid-column:4/span 3}.row-4-span-3{grid-row:4/span 3}.col-4-span-4{grid-column:4/span 4}.row-4-span-4{grid-row:4/span 4}.col-4-span-5{grid-column:4/span 5}.row-4-span-5{grid-row:4/span 5}.col-4-span-6{grid-column:4/span 6}.row-4-span-6{grid-row:4/span 6}.col-4-span-7{grid-column:4/span 7}.row-4-span-7{grid-row:4/span 7}.col-4-span-8{grid-column:4/span 8}.row-4-span-8{grid-row:4/span 8}.col-4-span-9{grid-column:4/span 9}.row-4-span-9{grid-row:4/span 9}.col-4-span-10{grid-column:4/span 10}.row-4-span-10{grid-row:4/span 10}.col-4-span-11{grid-column:4/span 11}.row-4-span-11{grid-row:4/span 11}.col-4-span-12{grid-column:4/span 12}.row-4-span-12{grid-row:4/span 12}.col-5-span-2{grid-column:5/span 2}.row-5-span-2{grid-row:5/span 2}.col-5-span-3{grid-column:5/span 3}.row-5-span-3{grid-row:5/span 3}.col-5-span-4{grid-column:5/span 4}.row-5-span-4{grid-row:5/span 4}.col-5-span-5{grid-column:5/span 5}.row-5-span-5{grid-row:5/span 5}.col-5-span-6{grid-column:5/span 6}.row-5-span-6{grid-row:5/span 6}.col-5-span-7{grid-column:5/span 7}.row-5-span-7{grid-row:5/span 7}.col-5-span-8{grid-column:5/span 8}.row-5-span-8{grid-row:5/span 8}.col-5-span-9{grid-column:5/span 9}.row-5-span-9{grid-row:5/span 9}.col-5-span-10{grid-column:5/span 10}.row-5-span-10{grid-row:5/span 10}.col-5-span-11{grid-column:5/span 11}.row-5-span-11{grid-row:5/span 11}.col-5-span-12{grid-column:5/span 12}.row-5-span-12{grid-row:5/span 12}.col-6-span-2{grid-column:6/span 2}.row-6-span-2{grid-row:6/span 2}.col-6-span-3{grid-column:6/span 3}.row-6-span-3{grid-row:6/span 3}.col-6-span-4{grid-column:6/span 4}.row-6-span-4{grid-row:6/span 4}.col-6-span-5{grid-column:6/span 5}.row-6-span-5{grid-row:6/span 5}.col-6-span-6{grid-column:6/span 6}.row-6-span-6{grid-row:6/span 6}.col-6-span-7{grid-column:6/span 7}.row-6-span-7{grid-row:6/span 7}.col-6-span-8{grid-column:6/span 8}.row-6-span-8{grid-row:6/span 8}.col-6-span-9{grid-column:6/span 9}.row-6-span-9{grid-row:6/span 9}.col-6-span-10{grid-column:6/span 10}.row-6-span-10{grid-row:6/span 10}.col-6-span-11{grid-column:6/span 11}.row-6-span-11{grid-row:6/span 11}.col-6-span-12{grid-column:6/span 12}.row-6-span-12{grid-row:6/span 12}.col-7-span-2{grid-column:7/span 2}.row-7-span-2{grid-row:7/span 2}.col-7-span-3{grid-column:7/span 3}.row-7-span-3{grid-row:7/span 3}.col-7-span-4{grid-column:7/span 4}.row-7-span-4{grid-row:7/span 4}.col-7-span-5{grid-column:7/span 5}.row-7-span-5{grid-row:7/span 5}.col-7-span-6{grid-column:7/span 6}.row-7-span-6{grid-row:7/span 6}.col-7-span-7{grid-column:7/span 7}.row-7-span-7{grid-row:7/span 7}.col-7-span-8{grid-column:7/span 8}.row-7-span-8{grid-row:7/span 8}.col-7-span-9{grid-column:7/span 9}.row-7-span-9{grid-row:7/span 9}.col-7-span-10{grid-column:7/span 10}.row-7-span-10{grid-row:7/span 10}.col-7-span-11{grid-column:7/span 11}.row-7-span-11{grid-row:7/span 11}.col-7-span-12{grid-column:7/span 12}.row-7-span-12{grid-row:7/span 12}.col-8-span-2{grid-column:8/span 2}.row-8-span-2{grid-row:8/span 2}.col-8-span-3{grid-column:8/span 3}.row-8-span-3{grid-row:8/span 3}.col-8-span-4{grid-column:8/span 4}.row-8-span-4{grid-row:8/span 4}.col-8-span-5{grid-column:8/span 5}.row-8-span-5{grid-row:8/span 5}.col-8-span-6{grid-column:8/span 6}.row-8-span-6{grid-row:8/span 6}.col-8-span-7{grid-column:8/span 7}.row-8-span-7{grid-row:8/span 7}.col-8-span-8{grid-column:8/span 8}.row-8-span-8{grid-row:8/span 8}.col-8-span-9{grid-column:8/span 9}.row-8-span-9{grid-row:8/span 9}.col-8-span-10{grid-column:8/span 10}.row-8-span-10{grid-row:8/span 10}.col-8-span-11{grid-column:8/span 11}.row-8-span-11{grid-row:8/span 11}.col-8-span-12{grid-column:8/span 12}.row-8-span-12{grid-row:8/span 12}.col-9-span-2{grid-column:9/span 2}.row-9-span-2{grid-row:9/span 2}.col-9-span-3{grid-column:9/span 3}.row-9-span-3{grid-row:9/span 3}.col-9-span-4{grid-column:9/span 4}.row-9-span-4{grid-row:9/span 4}.col-9-span-5{grid-column:9/span 5}.row-9-span-5{grid-row:9/span 5}.col-9-span-6{grid-column:9/span 6}.row-9-span-6{grid-row:9/span 6}.col-9-span-7{grid-column:9/span 7}.row-9-span-7{grid-row:9/span 7}.col-9-span-8{grid-column:9/span 8}.row-9-span-8{grid-row:9/span 8}.col-9-span-9{grid-column:9/span 9}.row-9-span-9{grid-row:9/span 9}.col-9-span-10{grid-column:9/span 10}.row-9-span-10{grid-row:9/span 10}.col-9-span-11{grid-column:9/span 11}.row-9-span-11{grid-row:9/span 11}.col-9-span-12{grid-column:9/span 12}.row-9-span-12{grid-row:9/span 12}.col-10-span-2{grid-column:10/span 2}.row-10-span-2{grid-row:10/span 2}.col-10-span-3{grid-column:10/span 3}.row-10-span-3{grid-row:10/span 3}.col-10-span-4{grid-column:10/span 4}.row-10-span-4{grid-row:10/span 4}.col-10-span-5{grid-column:10/span 5}.row-10-span-5{grid-row:10/span 5}.col-10-span-6{grid-column:10/span 6}.row-10-span-6{grid-row:10/span 6}.col-10-span-7{grid-column:10/span 7}.row-10-span-7{grid-row:10/span 7}.col-10-span-8{grid-column:10/span 8}.row-10-span-8{grid-row:10/span 8}.col-10-span-9{grid-column:10/span 9}.row-10-span-9{grid-row:10/span 9}.col-10-span-10{grid-column:10/span 10}.row-10-span-10{grid-row:10/span 10}.col-10-span-11{grid-column:10/span 11}.row-10-span-11{grid-row:10/span 11}.col-10-span-12{grid-column:10/span 12}.row-10-span-12{grid-row:10/span 12}.col-11-span-2{grid-column:11/span 2}.row-11-span-2{grid-row:11/span 2}.col-11-span-3{grid-column:11/span 3}.row-11-span-3{grid-row:11/span 3}.col-11-span-4{grid-column:11/span 4}.row-11-span-4{grid-row:11/span 4}.col-11-span-5{grid-column:11/span 5}.row-11-span-5{grid-row:11/span 5}.col-11-span-6{grid-column:11/span 6}.row-11-span-6{grid-row:11/span 6}.col-11-span-7{grid-column:11/span 7}.row-11-span-7{grid-row:11/span 7}.col-11-span-8{grid-column:11/span 8}.row-11-span-8{grid-row:11/span 8}.col-11-span-9{grid-column:11/span 9}.row-11-span-9{grid-row:11/span 9}.col-11-span-10{grid-column:11/span 10}.row-11-span-10{grid-row:11/span 10}.col-11-span-11{grid-column:11/span 11}.row-11-span-11{grid-row:11/span 11}.col-11-span-12{grid-column:11/span 12}.row-11-span-12{grid-row:11/span 12}.col-12-span-2{grid-column:12/span 2}.row-12-span-2{grid-row:12/span 2}.col-12-span-3{grid-column:12/span 3}.row-12-span-3{grid-row:12/span 3}.col-12-span-4{grid-column:12/span 4}.row-12-span-4{grid-row:12/span 4}.col-12-span-5{grid-column:12/span 5}.row-12-span-5{grid-row:12/span 5}.col-12-span-6{grid-column:12/span 6}.row-12-span-6{grid-row:12/span 6}.col-12-span-7{grid-column:12/span 7}.row-12-span-7{grid-row:12/span 7}.col-12-span-8{grid-column:12/span 8}.row-12-span-8{grid-row:12/span 8}.col-12-span-9{grid-column:12/span 9}.row-12-span-9{grid-row:12/span 9}.col-12-span-10{grid-column:12/span 10}.row-12-span-10{grid-row:12/span 10}.col-12-span-11{grid-column:12/span 11}.row-12-span-11{grid-row:12/span 11}.col-12-span-12{grid-column:12/span 12}.row-12-span-12{grid-row:12/span 12}.grid .item-b{align-self:end}.grid .item-c,.grid .item-cm{justify-self:center}.grid .item-cm{align-self:center}.grid .item-l{justify-self:start}.grid .item-m{align-self:center}.grid .item-r{justify-self:end}.grid .item-t{align-self:start}.grid-sticky-footer{display:grid;min-height:100%}.grid-sticky-footer.rows-1{grid-template-rows:repeat(0,1fr) auto}.grid-sticky-footer.rows-1~footer{grid-row:1/span 2}.grid-sticky-footer.rows-2{grid-template-rows:repeat(1,1fr) auto}.grid-sticky-footer.rows-2~footer{grid-row:2/span 3}.grid-sticky-footer.rows-3{grid-template-rows:repeat(2,1fr) auto}.grid-sticky-footer.rows-3~footer{grid-row:3/span 4}.grid-sticky-footer.rows-4{grid-template-rows:repeat(3,1fr) auto}.grid-sticky-footer.rows-4~footer{grid-row:4/span 5}.grid-sticky-footer.rows-5{grid-template-rows:repeat(4,1fr) auto}.grid-sticky-footer.rows-5~footer{grid-row:5/span 6}.grid-sticky-footer.rows-6{grid-template-rows:repeat(5,1fr) auto}.grid-sticky-footer.rows-6~footer{grid-row:6/span 7}.grid-sticky-footer.rows-7{grid-template-rows:repeat(6,1fr) auto}.grid-sticky-footer.rows-7~footer{grid-row:7/span 8}.grid-sticky-footer.rows-8{grid-template-rows:repeat(7,1fr) auto}.grid-sticky-footer.rows-8~footer{grid-row:8/span 9}.grid-sticky-footer.rows-9{grid-template-rows:repeat(8,1fr) auto}.grid-sticky-footer.rows-9~footer{grid-row:9/span 10}.grid-sticky-footer.rows-10{grid-template-rows:repeat(9,1fr) auto}.grid-sticky-footer.rows-10~footer{grid-row:10/span 11}.grid-sticky-footer.rows-11{grid-template-rows:repeat(10,1fr) auto}.grid-sticky-footer.rows-11~footer{grid-row:11/span 12}.grid-sticky-footer.rows-12{grid-template-rows:repeat(11,1fr) auto}.grid-sticky-footer.rows-12~footer{grid-row:12/span 13}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '.grid',
                template: "<ng-content></ng-content>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: ["@supports (grid-area:auto){.grid{display:grid}}.cols-1{grid-template-columns:repeat(1,1fr)}.rows-1{grid-template-rows:repeat(1,1fr)}.cols-2{grid-template-columns:repeat(2,1fr)}.rows-2{grid-template-rows:repeat(2,1fr)}.cols-3{grid-template-columns:repeat(3,1fr)}.rows-3{grid-template-rows:repeat(3,1fr)}.cols-4{grid-template-columns:repeat(4,1fr)}.rows-4{grid-template-rows:repeat(4,1fr)}.cols-5{grid-template-columns:repeat(5,1fr)}.rows-5{grid-template-rows:repeat(5,1fr)}.cols-6{grid-template-columns:repeat(6,1fr)}.rows-6{grid-template-rows:repeat(6,1fr)}.cols-7{grid-template-columns:repeat(7,1fr)}.rows-7{grid-template-rows:repeat(7,1fr)}.cols-8{grid-template-columns:repeat(8,1fr)}.rows-8{grid-template-rows:repeat(8,1fr)}.cols-9{grid-template-columns:repeat(9,1fr)}.rows-9{grid-template-rows:repeat(9,1fr)}.cols-10{grid-template-columns:repeat(10,1fr)}.rows-10{grid-template-rows:repeat(10,1fr)}.cols-11{grid-template-columns:repeat(11,1fr)}.rows-11{grid-template-rows:repeat(11,1fr)}.cols-12{grid-template-columns:repeat(12,1fr)}.rows-12{grid-template-rows:repeat(12,1fr)}.col-gap-a{-moz-column-gap:auto;column-gap:auto}.gap-a{gap:auto auto}.row-gap-a{row-gap:auto}.col-gap-lg{-moz-column-gap:2rem;column-gap:2rem}.gap-lg{gap:2rem 2rem}.row-gap-lg{row-gap:2rem}.col-gap-md{-moz-column-gap:1.5rem;column-gap:1.5rem}.gap-md{gap:1.5rem 1.5rem}.row-gap-md{row-gap:1.5rem}.col-gap-sm{-moz-column-gap:1rem;column-gap:1rem}.gap-sm{gap:1rem 1rem}.row-gap-sm{row-gap:1rem}.col-gap-xl{-moz-column-gap:2.5rem;column-gap:2.5rem}.gap-xl{gap:2.5rem 2.5rem}.row-gap-xl{row-gap:2.5rem}.col-gap-xs{-moz-column-gap:.5rem;column-gap:.5rem}.gap-xs{gap:.5rem .5rem}.row-gap-xs{row-gap:.5rem}.col-gap-xxl{-moz-column-gap:4.375rem;column-gap:4.375rem}.gap-xxl{gap:4.375rem 4.375rem}.row-gap-xxl{row-gap:4.375rem}.grid.align-b{align-items:end}.grid.align-c,.grid.align-cm{justify-items:center}.grid.align-cm{align-items:center}.grid.align-l{justify-items:start}.grid.align-m{align-items:center}.grid.align-r{justify-items:end}.grid.align-t{align-items:start}.col-1{grid-column:1}.row-1{grid-row:1}.col-2{grid-column:2}.row-2{grid-row:2}.col-3{grid-column:3}.row-3{grid-row:3}.col-4{grid-column:4}.row-4{grid-row:4}.col-5{grid-column:5}.row-5{grid-row:5}.col-6{grid-column:6}.row-6{grid-row:6}.col-7{grid-column:7}.row-7{grid-row:7}.col-8{grid-column:8}.row-8{grid-row:8}.col-9{grid-column:9}.row-9{grid-row:9}.col-10{grid-column:10}.row-10{grid-row:10}.col-11{grid-column:11}.row-11{grid-row:11}.col-12{grid-column:12}.row-12{grid-row:12}.col-1-span-2{grid-column:1/span 2}.row-1-span-2{grid-row:1/span 2}.col-1-span-3{grid-column:1/span 3}.row-1-span-3{grid-row:1/span 3}.col-1-span-4{grid-column:1/span 4}.row-1-span-4{grid-row:1/span 4}.col-1-span-5{grid-column:1/span 5}.row-1-span-5{grid-row:1/span 5}.col-1-span-6{grid-column:1/span 6}.row-1-span-6{grid-row:1/span 6}.col-1-span-7{grid-column:1/span 7}.row-1-span-7{grid-row:1/span 7}.col-1-span-8{grid-column:1/span 8}.row-1-span-8{grid-row:1/span 8}.col-1-span-9{grid-column:1/span 9}.row-1-span-9{grid-row:1/span 9}.col-1-span-10{grid-column:1/span 10}.row-1-span-10{grid-row:1/span 10}.col-1-span-11{grid-column:1/span 11}.row-1-span-11{grid-row:1/span 11}.col-1-span-12{grid-column:1/span 12}.row-1-span-12{grid-row:1/span 12}.col-2-span-2{grid-column:2/span 2}.row-2-span-2{grid-row:2/span 2}.col-2-span-3{grid-column:2/span 3}.row-2-span-3{grid-row:2/span 3}.col-2-span-4{grid-column:2/span 4}.row-2-span-4{grid-row:2/span 4}.col-2-span-5{grid-column:2/span 5}.row-2-span-5{grid-row:2/span 5}.col-2-span-6{grid-column:2/span 6}.row-2-span-6{grid-row:2/span 6}.col-2-span-7{grid-column:2/span 7}.row-2-span-7{grid-row:2/span 7}.col-2-span-8{grid-column:2/span 8}.row-2-span-8{grid-row:2/span 8}.col-2-span-9{grid-column:2/span 9}.row-2-span-9{grid-row:2/span 9}.col-2-span-10{grid-column:2/span 10}.row-2-span-10{grid-row:2/span 10}.col-2-span-11{grid-column:2/span 11}.row-2-span-11{grid-row:2/span 11}.col-2-span-12{grid-column:2/span 12}.row-2-span-12{grid-row:2/span 12}.col-3-span-2{grid-column:3/span 2}.row-3-span-2{grid-row:3/span 2}.col-3-span-3{grid-column:3/span 3}.row-3-span-3{grid-row:3/span 3}.col-3-span-4{grid-column:3/span 4}.row-3-span-4{grid-row:3/span 4}.col-3-span-5{grid-column:3/span 5}.row-3-span-5{grid-row:3/span 5}.col-3-span-6{grid-column:3/span 6}.row-3-span-6{grid-row:3/span 6}.col-3-span-7{grid-column:3/span 7}.row-3-span-7{grid-row:3/span 7}.col-3-span-8{grid-column:3/span 8}.row-3-span-8{grid-row:3/span 8}.col-3-span-9{grid-column:3/span 9}.row-3-span-9{grid-row:3/span 9}.col-3-span-10{grid-column:3/span 10}.row-3-span-10{grid-row:3/span 10}.col-3-span-11{grid-column:3/span 11}.row-3-span-11{grid-row:3/span 11}.col-3-span-12{grid-column:3/span 12}.row-3-span-12{grid-row:3/span 12}.col-4-span-2{grid-column:4/span 2}.row-4-span-2{grid-row:4/span 2}.col-4-span-3{grid-column:4/span 3}.row-4-span-3{grid-row:4/span 3}.col-4-span-4{grid-column:4/span 4}.row-4-span-4{grid-row:4/span 4}.col-4-span-5{grid-column:4/span 5}.row-4-span-5{grid-row:4/span 5}.col-4-span-6{grid-column:4/span 6}.row-4-span-6{grid-row:4/span 6}.col-4-span-7{grid-column:4/span 7}.row-4-span-7{grid-row:4/span 7}.col-4-span-8{grid-column:4/span 8}.row-4-span-8{grid-row:4/span 8}.col-4-span-9{grid-column:4/span 9}.row-4-span-9{grid-row:4/span 9}.col-4-span-10{grid-column:4/span 10}.row-4-span-10{grid-row:4/span 10}.col-4-span-11{grid-column:4/span 11}.row-4-span-11{grid-row:4/span 11}.col-4-span-12{grid-column:4/span 12}.row-4-span-12{grid-row:4/span 12}.col-5-span-2{grid-column:5/span 2}.row-5-span-2{grid-row:5/span 2}.col-5-span-3{grid-column:5/span 3}.row-5-span-3{grid-row:5/span 3}.col-5-span-4{grid-column:5/span 4}.row-5-span-4{grid-row:5/span 4}.col-5-span-5{grid-column:5/span 5}.row-5-span-5{grid-row:5/span 5}.col-5-span-6{grid-column:5/span 6}.row-5-span-6{grid-row:5/span 6}.col-5-span-7{grid-column:5/span 7}.row-5-span-7{grid-row:5/span 7}.col-5-span-8{grid-column:5/span 8}.row-5-span-8{grid-row:5/span 8}.col-5-span-9{grid-column:5/span 9}.row-5-span-9{grid-row:5/span 9}.col-5-span-10{grid-column:5/span 10}.row-5-span-10{grid-row:5/span 10}.col-5-span-11{grid-column:5/span 11}.row-5-span-11{grid-row:5/span 11}.col-5-span-12{grid-column:5/span 12}.row-5-span-12{grid-row:5/span 12}.col-6-span-2{grid-column:6/span 2}.row-6-span-2{grid-row:6/span 2}.col-6-span-3{grid-column:6/span 3}.row-6-span-3{grid-row:6/span 3}.col-6-span-4{grid-column:6/span 4}.row-6-span-4{grid-row:6/span 4}.col-6-span-5{grid-column:6/span 5}.row-6-span-5{grid-row:6/span 5}.col-6-span-6{grid-column:6/span 6}.row-6-span-6{grid-row:6/span 6}.col-6-span-7{grid-column:6/span 7}.row-6-span-7{grid-row:6/span 7}.col-6-span-8{grid-column:6/span 8}.row-6-span-8{grid-row:6/span 8}.col-6-span-9{grid-column:6/span 9}.row-6-span-9{grid-row:6/span 9}.col-6-span-10{grid-column:6/span 10}.row-6-span-10{grid-row:6/span 10}.col-6-span-11{grid-column:6/span 11}.row-6-span-11{grid-row:6/span 11}.col-6-span-12{grid-column:6/span 12}.row-6-span-12{grid-row:6/span 12}.col-7-span-2{grid-column:7/span 2}.row-7-span-2{grid-row:7/span 2}.col-7-span-3{grid-column:7/span 3}.row-7-span-3{grid-row:7/span 3}.col-7-span-4{grid-column:7/span 4}.row-7-span-4{grid-row:7/span 4}.col-7-span-5{grid-column:7/span 5}.row-7-span-5{grid-row:7/span 5}.col-7-span-6{grid-column:7/span 6}.row-7-span-6{grid-row:7/span 6}.col-7-span-7{grid-column:7/span 7}.row-7-span-7{grid-row:7/span 7}.col-7-span-8{grid-column:7/span 8}.row-7-span-8{grid-row:7/span 8}.col-7-span-9{grid-column:7/span 9}.row-7-span-9{grid-row:7/span 9}.col-7-span-10{grid-column:7/span 10}.row-7-span-10{grid-row:7/span 10}.col-7-span-11{grid-column:7/span 11}.row-7-span-11{grid-row:7/span 11}.col-7-span-12{grid-column:7/span 12}.row-7-span-12{grid-row:7/span 12}.col-8-span-2{grid-column:8/span 2}.row-8-span-2{grid-row:8/span 2}.col-8-span-3{grid-column:8/span 3}.row-8-span-3{grid-row:8/span 3}.col-8-span-4{grid-column:8/span 4}.row-8-span-4{grid-row:8/span 4}.col-8-span-5{grid-column:8/span 5}.row-8-span-5{grid-row:8/span 5}.col-8-span-6{grid-column:8/span 6}.row-8-span-6{grid-row:8/span 6}.col-8-span-7{grid-column:8/span 7}.row-8-span-7{grid-row:8/span 7}.col-8-span-8{grid-column:8/span 8}.row-8-span-8{grid-row:8/span 8}.col-8-span-9{grid-column:8/span 9}.row-8-span-9{grid-row:8/span 9}.col-8-span-10{grid-column:8/span 10}.row-8-span-10{grid-row:8/span 10}.col-8-span-11{grid-column:8/span 11}.row-8-span-11{grid-row:8/span 11}.col-8-span-12{grid-column:8/span 12}.row-8-span-12{grid-row:8/span 12}.col-9-span-2{grid-column:9/span 2}.row-9-span-2{grid-row:9/span 2}.col-9-span-3{grid-column:9/span 3}.row-9-span-3{grid-row:9/span 3}.col-9-span-4{grid-column:9/span 4}.row-9-span-4{grid-row:9/span 4}.col-9-span-5{grid-column:9/span 5}.row-9-span-5{grid-row:9/span 5}.col-9-span-6{grid-column:9/span 6}.row-9-span-6{grid-row:9/span 6}.col-9-span-7{grid-column:9/span 7}.row-9-span-7{grid-row:9/span 7}.col-9-span-8{grid-column:9/span 8}.row-9-span-8{grid-row:9/span 8}.col-9-span-9{grid-column:9/span 9}.row-9-span-9{grid-row:9/span 9}.col-9-span-10{grid-column:9/span 10}.row-9-span-10{grid-row:9/span 10}.col-9-span-11{grid-column:9/span 11}.row-9-span-11{grid-row:9/span 11}.col-9-span-12{grid-column:9/span 12}.row-9-span-12{grid-row:9/span 12}.col-10-span-2{grid-column:10/span 2}.row-10-span-2{grid-row:10/span 2}.col-10-span-3{grid-column:10/span 3}.row-10-span-3{grid-row:10/span 3}.col-10-span-4{grid-column:10/span 4}.row-10-span-4{grid-row:10/span 4}.col-10-span-5{grid-column:10/span 5}.row-10-span-5{grid-row:10/span 5}.col-10-span-6{grid-column:10/span 6}.row-10-span-6{grid-row:10/span 6}.col-10-span-7{grid-column:10/span 7}.row-10-span-7{grid-row:10/span 7}.col-10-span-8{grid-column:10/span 8}.row-10-span-8{grid-row:10/span 8}.col-10-span-9{grid-column:10/span 9}.row-10-span-9{grid-row:10/span 9}.col-10-span-10{grid-column:10/span 10}.row-10-span-10{grid-row:10/span 10}.col-10-span-11{grid-column:10/span 11}.row-10-span-11{grid-row:10/span 11}.col-10-span-12{grid-column:10/span 12}.row-10-span-12{grid-row:10/span 12}.col-11-span-2{grid-column:11/span 2}.row-11-span-2{grid-row:11/span 2}.col-11-span-3{grid-column:11/span 3}.row-11-span-3{grid-row:11/span 3}.col-11-span-4{grid-column:11/span 4}.row-11-span-4{grid-row:11/span 4}.col-11-span-5{grid-column:11/span 5}.row-11-span-5{grid-row:11/span 5}.col-11-span-6{grid-column:11/span 6}.row-11-span-6{grid-row:11/span 6}.col-11-span-7{grid-column:11/span 7}.row-11-span-7{grid-row:11/span 7}.col-11-span-8{grid-column:11/span 8}.row-11-span-8{grid-row:11/span 8}.col-11-span-9{grid-column:11/span 9}.row-11-span-9{grid-row:11/span 9}.col-11-span-10{grid-column:11/span 10}.row-11-span-10{grid-row:11/span 10}.col-11-span-11{grid-column:11/span 11}.row-11-span-11{grid-row:11/span 11}.col-11-span-12{grid-column:11/span 12}.row-11-span-12{grid-row:11/span 12}.col-12-span-2{grid-column:12/span 2}.row-12-span-2{grid-row:12/span 2}.col-12-span-3{grid-column:12/span 3}.row-12-span-3{grid-row:12/span 3}.col-12-span-4{grid-column:12/span 4}.row-12-span-4{grid-row:12/span 4}.col-12-span-5{grid-column:12/span 5}.row-12-span-5{grid-row:12/span 5}.col-12-span-6{grid-column:12/span 6}.row-12-span-6{grid-row:12/span 6}.col-12-span-7{grid-column:12/span 7}.row-12-span-7{grid-row:12/span 7}.col-12-span-8{grid-column:12/span 8}.row-12-span-8{grid-row:12/span 8}.col-12-span-9{grid-column:12/span 9}.row-12-span-9{grid-row:12/span 9}.col-12-span-10{grid-column:12/span 10}.row-12-span-10{grid-row:12/span 10}.col-12-span-11{grid-column:12/span 11}.row-12-span-11{grid-row:12/span 11}.col-12-span-12{grid-column:12/span 12}.row-12-span-12{grid-row:12/span 12}.grid .item-b{align-self:end}.grid .item-c,.grid .item-cm{justify-self:center}.grid .item-cm{align-self:center}.grid .item-l{justify-self:start}.grid .item-m{align-self:center}.grid .item-r{justify-self:end}.grid .item-t{align-self:start}.grid-sticky-footer{display:grid;min-height:100%}.grid-sticky-footer.rows-1{grid-template-rows:repeat(0,1fr) auto}.grid-sticky-footer.rows-1~footer{grid-row:1/span 2}.grid-sticky-footer.rows-2{grid-template-rows:repeat(1,1fr) auto}.grid-sticky-footer.rows-2~footer{grid-row:2/span 3}.grid-sticky-footer.rows-3{grid-template-rows:repeat(2,1fr) auto}.grid-sticky-footer.rows-3~footer{grid-row:3/span 4}.grid-sticky-footer.rows-4{grid-template-rows:repeat(3,1fr) auto}.grid-sticky-footer.rows-4~footer{grid-row:4/span 5}.grid-sticky-footer.rows-5{grid-template-rows:repeat(4,1fr) auto}.grid-sticky-footer.rows-5~footer{grid-row:5/span 6}.grid-sticky-footer.rows-6{grid-template-rows:repeat(5,1fr) auto}.grid-sticky-footer.rows-6~footer{grid-row:6/span 7}.grid-sticky-footer.rows-7{grid-template-rows:repeat(6,1fr) auto}.grid-sticky-footer.rows-7~footer{grid-row:7/span 8}.grid-sticky-footer.rows-8{grid-template-rows:repeat(7,1fr) auto}.grid-sticky-footer.rows-8~footer{grid-row:8/span 9}.grid-sticky-footer.rows-9{grid-template-rows:repeat(8,1fr) auto}.grid-sticky-footer.rows-9~footer{grid-row:9/span 10}.grid-sticky-footer.rows-10{grid-template-rows:repeat(9,1fr) auto}.grid-sticky-footer.rows-10~footer{grid-row:10/span 11}.grid-sticky-footer.rows-11{grid-template-rows:repeat(10,1fr) auto}.grid-sticky-footer.rows-11~footer{grid-row:11/span 12}.grid-sticky-footer.rows-12{grid-template-rows:repeat(11,1fr) auto}.grid-sticky-footer.rows-12~footer{grid-row:12/span 13}"]
            }]
    }], null, null); })();

class GridModule {
}
GridModule.ɵfac = function GridModule_Factory(t) { return new (t || GridModule)(); };
GridModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GridModule });
GridModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    GridComponent
                ],
                exports: [
                    GridComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GridModule, { declarations: [GridComponent], exports: [GridComponent] }); })();

class NavComponent {
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["", 8, "nav-h"], ["", 8, "nav-toggle"], ["", 8, "nav-v"]], attrs: _c14, ngContentSelectors: _c1, decls: 1, vars: 0, template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: [".nav-h .nav-row{align-items:center;display:flex}.nav-item{flex:1 0 auto}.nav-link{color:inherit;display:block;text-align:center}.nav-v{overflow-y:auto}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '.nav-h, .nav-toggle, .nav-v',
                template: "<ng-content></ng-content>\r\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [".nav-h .nav-row{align-items:center;display:flex}.nav-item{flex:1 0 auto}.nav-link{color:inherit;display:block;text-align:center}.nav-v{overflow-y:auto}"]
            }]
    }], null, null); })();

class NavModule {
}
NavModule.ɵfac = function NavModule_Factory(t) { return new (t || NavModule)(); };
NavModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NavModule });
NavModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    NavComponent
                ],
                exports: [
                    NavComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavModule, { declarations: [NavComponent], exports: [NavComponent] }); })();

class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [FlexboxModule, GridModule, NavModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    FlexboxModule,
                    GridModule,
                    NavModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, { exports: [FlexboxModule, GridModule, NavModule] }); })();

/* Public API Surface of easy-framework */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ "H88W":
/*!*****************************************************!*\
  !*** ./projects/easy-docs/src/app/app.component.ts ***!
  \*****************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "qynL");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "U1UY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.navs = [
            'components',
            'layout',
            'utilities'
        ];
    }
    trackById(navIndex, nav) {
        return `${nav}${navIndex}`;
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'docs-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "U1UY":
/*!*******************************************************!*\
  !*** ./projects/easy-docs/src/app/app.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0FBQ0QiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "cNt2":
/*!****************************************!*\
  !*** ./projects/easy-docs/src/main.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "nMFe");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "62Ph");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
    defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
})
    .catch((error) => {
    throw new Error(error);
});


/***/ }),

/***/ "nMFe":
/*!**************************************************!*\
  !*** ./projects/easy-docs/src/app/app.module.ts ***!
  \**************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "H88W");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "3TxP");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "rtsS");






let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], AppModule);



/***/ }),

/***/ "qynL":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/easy-docs/src/app/app.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ez-root>\r\n    <nav class=\"nav-h bg-black text-white pos-f-t\">\r\n        <ul class=\"nav-row\">\r\n            <li *ngFor=\"let nav of navs; let navIndex = index; trackBy: trackById\" class=\"nav-item\">\r\n                <a [routerLink]=\"['/', nav]\" routerLinkActive=\"active bg-dk-gray\" class=\"nav-link bg-hover-dk-gray pad-tb-sm\">{{nav | titlecase}}</a>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n\r\n    <main class=\"main\">\r\n        <router-outlet></router-outlet>\r\n    </main>\r\n</ez-root>\r\n");

/***/ }),

/***/ "rtsS":
/*!************************************************************!*\
  !*** ./projects/easy-docs/src/app/shared/shared.module.ts ***!
  \************************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var easy_framework__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! easy-framework */ "6n7z");






let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            easy_framework__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            easy_framework__WEBPACK_IMPORTED_MODULE_5__["EasyModule"],
            easy_framework__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.671a338d9265e0e6e086.js.map