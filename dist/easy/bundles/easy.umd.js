(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('easy', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global.easy = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlertComponent = /** @class */ (function () {
        function AlertComponent() {
        }
        Object.defineProperty(AlertComponent.prototype, "class", {
            get: /**
             * @return {?}
             */ function () {
                return this.childClass;
            },
            set: /**
             * @param {?} childClass
             * @return {?}
             */ function (childClass) {
                if (childClass.includes('close')) {
                    this.childClass = childClass.replace(/ close/g, '');
                    this.close = true;
                    this.role = 'alertdialog';
                }
                else {
                    this.childClass = childClass;
                    this.close = false;
                    this.role = 'alert';
                }
                this.ariaLabelledby = this.id = this.class.match(/\balert\S+\b/)[0].replace(/-/g, ' ');
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AlertComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.hostClass = this.class;
                this.tabindex = '-1';
            };
        AlertComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
                        template: "<p [attr.id]=\"id\"><ng-content></ng-content></p>\r\n\r\n<button *ngIf=\"close\" class=\"close\" type=\"button\" aria-label=\"close alert\" autofocus>X</button>\r\n",
                        styles: [":host.alert-bad,:host.alert-good,:host.alert-info,:host.alert-warn{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;color:#fff;-webkit-box-pack:justify;justify-content:space-between;padding:.5rem 1rem}:host.alert-bad{background-color:#ba000d}:host.alert-good{background-color:#087f23}:host.alert-info{background-color:#0069c0}:host.alert-warn{background-color:#ffeb3b;color:#191919}"]
                    }] }
        ];
        /** @nocollapse */
        AlertComponent.ctorParameters = function () { return []; };
        AlertComponent.propDecorators = {
            ariaLabelledby: [{ type: i0.HostBinding, args: ['attr.aria-labelledby',] }],
            hostClass: [{ type: i0.HostBinding, args: ['attr.class',] }],
            role: [{ type: i0.HostBinding, args: ['attr.role',] }],
            tabindex: [{ type: i0.HostBinding, args: ['attr.tabindex',] }],
            class: [{ type: i0.Input }]
        };
        return AlertComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlertDirective = /** @class */ (function () {
        function AlertDirective() {
        }
        AlertDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ezAlert]'
                    },] }
        ];
        /** @nocollapse */
        AlertDirective.ctorParameters = function () { return []; };
        return AlertDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        SharedModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [],
                        exports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return SharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        AlertModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            SharedModule
                        ],
                        declarations: [
                            AlertComponent,
                            AlertDirective
                        ],
                        exports: [
                            AlertComponent,
                            AlertDirective
                        ]
                    },] }
        ];
        return AlertModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BadgeComponent = /** @class */ (function () {
        function BadgeComponent() {
        }
        /**
         * @return {?}
         */
        BadgeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        BadgeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ez-badge, .badge-sm, .badge-md, .badge-lg',
                        template: "<ng-content></ng-content>\n",
                        styles: [":host.badge-lg,:host.badge-md,:host.badge-sm{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;display:-webkit-inline-box;display:inline-flex;border-radius:1rem;-webkit-box-pack:center;justify-content:center}:host.badge-lg:empty,:host.badge-md:empty,:host.badge-sm:empty{display:none}:host.badge-sm{line-height:.5rem;padding:.5rem}:host.badge-md{line-height:.625rem;padding:.625rem}:host.badge-lg{line-height:.75rem;padding:.75rem}"]
                    }] }
        ];
        /** @nocollapse */
        BadgeComponent.ctorParameters = function () { return []; };
        return BadgeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BadgeDirective = /** @class */ (function () {
        function BadgeDirective() {
        }
        BadgeDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ezBadge]'
                    },] }
        ];
        /** @nocollapse */
        BadgeDirective.ctorParameters = function () { return []; };
        return BadgeDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BadgeModule = /** @class */ (function () {
        function BadgeModule() {
        }
        BadgeModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [BadgeComponent, BadgeDirective],
                        exports: [BadgeComponent, BadgeDirective]
                    },] }
        ];
        return BadgeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
        }
        /**
         * @return {?}
         */
        ButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        ButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ez-button, .btn-xs, .btn-sm, .btn-md, .btn-lg, .btn-xl, .btn-full, .btn-group-col, .btn-group-full, .btn-group-row',
                        template: "<ng-content></ng-content>\n",
                        styles: [":host.btn-full,:host.btn-lg,:host.btn-md,:host.btn-sm,:host.btn-xl,:host.btn-xs{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;display:-webkit-inline-box;display:inline-flex;-webkit-box-pack:center;justify-content:center;margin-bottom:1rem;margin-right:1rem}:host.btn-full.rounded,:host.btn-lg.rounded,:host.btn-md.rounded,:host.btn-sm.rounded,:host.btn-xl.rounded,:host.btn-xs.rounded{border-radius:1.5rem}:host.btn-xs{padding:.5rem .625rem}:host.btn-sm{padding:.625rem 1.25rem}:host.btn-full,:host.btn-md{padding:.75rem 1.875rem}:host.btn-lg{padding:.875rem 2.5rem}:host.btn-xl{padding:1rem 3.125rem}:host.btn-full{width:100%}:host.btn-group-col,:host.btn-group-full,:host.btn-group-row{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;padding-bottom:1rem;padding-top:1rem}:host.btn-group-col .btn-lg,:host.btn-group-col .btn-md,:host.btn-group-col .btn-sm,:host.btn-group-col .btn-xl,:host.btn-group-col .btn-xs,:host.btn-group-full .btn-lg,:host.btn-group-full .btn-md,:host.btn-group-full .btn-sm,:host.btn-group-full .btn-xl,:host.btn-group-full .btn-xs,:host.btn-group-row .btn-lg,:host.btn-group-row .btn-md,:host.btn-group-row .btn-sm,:host.btn-group-row .btn-xl,:host.btn-group-row .btn-xs{border-bottom:.0625rem solid #fff;border-left:.0625rem solid #fff;margin:0}:host.btn-group-col{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}:host.btn-group-full{width:100%}:host.btn-group-full .btn-lg,:host.btn-group-full .btn-md,:host.btn-group-full .btn-sm,:host.btn-group-full .btn-xl,:host.btn-group-full .btn-xs{flex-basis:auto;-webkit-box-flex:1;flex-grow:1;flex-shrink:0}"]
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return []; };
        return ButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonDirective = /** @class */ (function () {
        function ButtonDirective() {
        }
        ButtonDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ezButton]'
                    },] }
        ];
        /** @nocollapse */
        ButtonDirective.ctorParameters = function () { return []; };
        return ButtonDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        ButtonModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ButtonComponent, ButtonDirective],
                        exports: [ButtonComponent, ButtonDirective]
                    },] }
        ];
        return ButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardComponent = /** @class */ (function () {
        function CardComponent() {
        }
        /**
         * @return {?}
         */
        CardComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        CardComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ez-card, .card',
                        template: "<ng-content></ng-content>\n",
                        styles: [":host.card{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;display:-webkit-inline-box;display:inline-flex;-webkit-box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12);box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12);border:.0625rem solid #bdbdbd;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:.5rem;min-width:25rem;padding:1rem}"]
                    }] }
        ];
        /** @nocollapse */
        CardComponent.ctorParameters = function () { return []; };
        return CardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardDirective = /** @class */ (function () {
        function CardDirective() {
        }
        CardDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ezCard]'
                    },] }
        ];
        /** @nocollapse */
        CardDirective.ctorParameters = function () { return []; };
        return CardDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardModule = /** @class */ (function () {
        function CardModule() {
        }
        CardModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [CardComponent, CardDirective],
                        exports: [CardComponent, CardDirective]
                    },] }
        ];
        return CardModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CollapsibleComponent = /** @class */ (function () {
        function CollapsibleComponent() {
        }
        /**
         * @return {?}
         */
        CollapsibleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        CollapsibleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ez-collapsible, .collapse, .expand',
                        template: "<ng-content></ng-content>\n",
                        styles: [":host.collapse{display:none}:host.collapse:checked+.collapse-content{padding:.5rem}:host.collapse-label{background-color:#fafafa;padding:.5rem;width:100%}:host.collapse-content{margin:0;max-height:0;padding:0 .5rem}:host.expand{max-height:1.625rem}:host.collapse-content,:host.expand{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:max-height;transition-property:max-height;-webkit-transition-timing-function:linear;transition-timing-function:linear;overflow:hidden}:host.collapse:checked+.collapse-content,:host.expand:focus{max-height:67.5rem;overflow:auto}"]
                    }] }
        ];
        /** @nocollapse */
        CollapsibleComponent.ctorParameters = function () { return []; };
        return CollapsibleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CollapsibleDirective = /** @class */ (function () {
        function CollapsibleDirective() {
        }
        CollapsibleDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ezCollapsible]'
                    },] }
        ];
        /** @nocollapse */
        CollapsibleDirective.ctorParameters = function () { return []; };
        return CollapsibleDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CollapsibleModule = /** @class */ (function () {
        function CollapsibleModule() {
        }
        CollapsibleModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [CollapsibleComponent, CollapsibleDirective],
                        exports: [CollapsibleComponent, CollapsibleDirective]
                    },] }
        ];
        return CollapsibleModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsModule = /** @class */ (function () {
        function ComponentsModule() {
        }
        ComponentsModule.decorators = [
            { type: i0.NgModule, args: [{
                        exports: [AlertModule, BadgeModule, ButtonModule, CardModule, CollapsibleModule]
                    },] }
        ];
        return ComponentsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CoreModule = /** @class */ (function () {
        function CoreModule() {
        }
        CoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        providers: [],
                        exports: []
                    },] }
        ];
        return CoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EasyComponent = /** @class */ (function () {
        function EasyComponent() {
        }
        /**
         * @return {?}
         */
        EasyComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        EasyComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ez-root',
                        template: "\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        EasyComponent.ctorParameters = function () { return []; };
        return EasyComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EasyModule = /** @class */ (function () {
        function EasyModule() {
        }
        EasyModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            ComponentsModule
                        ],
                        declarations: [
                            EasyComponent
                        ],
                        exports: [
                            ComponentsModule,
                            CoreModule,
                            EasyComponent
                        ]
                    },] }
        ];
        return EasyModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EasyService = /** @class */ (function () {
        function EasyService() {
        }
        EasyService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EasyService.ctorParameters = function () { return []; };
        /** @nocollapse */ EasyService.ngInjectableDef = i0.defineInjectable({ factory: function EasyService_Factory() { return new EasyService(); }, token: EasyService, providedIn: "root" });
        return EasyService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ComponentsModule = ComponentsModule;
    exports.CoreModule = CoreModule;
    exports.EasyComponent = EasyComponent;
    exports.EasyModule = EasyModule;
    exports.EasyService = EasyService;
    exports.SharedModule = SharedModule;
    exports.ɵb = AlertComponent;
    exports.ɵc = AlertDirective;
    exports.ɵa = AlertModule;
    exports.ɵe = BadgeComponent;
    exports.ɵf = BadgeDirective;
    exports.ɵd = BadgeModule;
    exports.ɵh = ButtonComponent;
    exports.ɵi = ButtonDirective;
    exports.ɵg = ButtonModule;
    exports.ɵk = CardComponent;
    exports.ɵl = CardDirective;
    exports.ɵj = CardModule;
    exports.ɵn = CollapsibleComponent;
    exports.ɵo = CollapsibleDirective;
    exports.ɵm = CollapsibleModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=easy.umd.js.map