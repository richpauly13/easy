import { CommonModule } from '@angular/common';
import { Component, Input, HostBinding, Directive, NgModule, Injectable, defineInjectable } from '@angular/core';

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
         */
        function () {
            return this.childClass;
        },
        set: /**
         * @param {?} childClass
         * @return {?}
         */
        function (childClass) {
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
        { type: Component, args: [{
                    selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
                    template: "<p [attr.id]=\"id\"><ng-content></ng-content></p>\r\n\r\n<button *ngIf=\"close\" class=\"close\" type=\"button\" aria-label=\"close alert\" autofocus>X</button>\r\n",
                    styles: [":host.alert-bad,:host.alert-good,:host.alert-info,:host.alert-warn{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;color:#fff;-webkit-box-pack:justify;justify-content:space-between;padding:.5rem 1rem}:host.alert-bad{background-color:#ba000d}:host.alert-good{background-color:#087f23}:host.alert-info{background-color:#0069c0}:host.alert-warn{background-color:#ffeb3b;color:#191919}"]
                }] }
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return []; };
    AlertComponent.propDecorators = {
        ariaLabelledby: [{ type: HostBinding, args: ['attr.aria-labelledby',] }],
        hostClass: [{ type: HostBinding, args: ['attr.class',] }],
        role: [{ type: HostBinding, args: ['attr.role',] }],
        tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
        class: [{ type: Input }]
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
        { type: Directive, args: [{
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
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [],
                    exports: [CommonModule]
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
        { type: NgModule, args: [{
                    imports: [
                        // prettier-ignore
                        SharedModule
                    ],
                    declarations: [
                        // prettier-ignore
                        AlertComponent,
                        AlertDirective
                    ],
                    exports: [
                        // prettier-ignore
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
        { type: Component, args: [{
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
        { type: Directive, args: [{
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
        { type: NgModule, args: [{
                    declarations: [
                        // prettier-ignore
                        BadgeComponent,
                        BadgeDirective
                    ],
                    exports: [
                        // prettier-ignore
                        BadgeComponent,
                        BadgeDirective
                    ]
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
        { type: Component, args: [{
                    selector: 'ez-button, .btn-xs, .btn-sm, .btn-md, .btn-lg, .btn-xl, .btn-full, .btn-group-col, .btn-group-full, .btn-group-row',
                    template: "<ng-content></ng-content>\n",
                    styles: [":host.btn-full,:host.btn-lg,:host.btn-md,:host.btn-sm,:host.btn-xl,:host.btn-xs{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;display:-webkit-inline-box;display:inline-flex;-webkit-box-pack:center;justify-content:center;margin-bottom:1rem;margin-right:1rem}:host.btn-full.rounded,:host.btn-lg.rounded,:host.btn-md.rounded,:host.btn-sm.rounded,:host.btn-xl.rounded,:host.btn-xs.rounded{border-radius:1.5rem}:host.btn-xs{padding:.5rem .625rem}:host.btn-sm{padding:.625rem 1.25rem}:host.btn-full,:host.btn-md{padding:.75rem 1.875rem}:host.btn-lg{padding:.875rem 2.5rem}:host.btn-xl{padding:1rem 3.125rem}:host.btn-full{width:100%}:host.btn-group-col,:host.btn-group-full,:host.btn-group-row{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;padding-bottom:1rem;padding-top:1rem}:host.btn-group-col{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;align-content:flex-start;-webkit-box-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}:host.btn-group-full{width:100%}:host-context(.btn-group-col).btn-lg,:host-context(.btn-group-col).btn-md,:host-context(.btn-group-col).btn-sm,:host-context(.btn-group-col).btn-xl,:host-context(.btn-group-col).btn-xs{border-bottom:.0625rem solid #fff;border-left:.0625rem solid #fff;margin:0}:host-context(.btn-group-full).btn-lg,:host-context(.btn-group-full).btn-md,:host-context(.btn-group-full).btn-sm,:host-context(.btn-group-full).btn-xl,:host-context(.btn-group-full).btn-xs{flex-basis:auto;-webkit-box-flex:1;flex-grow:1;flex-shrink:0;border-bottom:.0625rem solid #fff;border-left:.0625rem solid #fff;margin:0}:host-context(.btn-group-row).btn-lg,:host-context(.btn-group-row).btn-md,:host-context(.btn-group-row).btn-sm,:host-context(.btn-group-row).btn-xl,:host-context(.btn-group-row).btn-xs{border-bottom:.0625rem solid #fff;border-left:.0625rem solid #fff;margin:0}"]
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
        { type: Directive, args: [{
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
        { type: NgModule, args: [{
                    declarations: [
                        // prettier-ignore
                        ButtonComponent,
                        ButtonDirective
                    ],
                    exports: [
                        // prettier-ignore
                        ButtonComponent,
                        ButtonDirective
                    ]
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
        { type: Component, args: [{
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
        { type: Directive, args: [{
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
        { type: NgModule, args: [{
                    declarations: [
                        // prettier-ignore
                        CardComponent,
                        CardDirective
                    ],
                    exports: [
                        // prettier-ignore
                        CardComponent,
                        CardDirective
                    ]
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
        { type: Component, args: [{
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
        { type: Directive, args: [{
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
        { type: NgModule, args: [{
                    declarations: [
                        // prettier-ignore
                        CollapsibleComponent,
                        CollapsibleDirective
                    ],
                    exports: [
                        // prettier-ignore
                        CollapsibleComponent,
                        CollapsibleDirective
                    ]
                },] }
    ];
    return CollapsibleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
    }
    /**
     * @return {?}
     */
    DropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    DropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ez-dropdown, .dropdown-menu, .dropdown-toggle, .dropdown-header, .dropdown-item, .dropdown-divider',
                    template: "<ng-content></ng-content>\n",
                    styles: [":host .dropdown-menu{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:visibility,opacity;transition-property:visibility,opacity;-webkit-transition-timing-function:linear;transition-timing-function:linear;background-color:#fff;border:.0625rem solid #000;opacity:0;pointer-events:none;position:absolute;visibility:hidden}:host .dropdown-toggle::after{content:'\\25BC'}:host .dropdown-menu.active,:host .dropdown-toggle:focus~.dropdown-menu{opacity:1;pointer-events:auto;visibility:visible;z-index:20}:host .dropdown-header,:host .dropdown-item{padding:.5rem}:host .dropdown-header{color:#bdbdbd;font-size:1.125rem}:host .dropdown-item:hover{background-color:#fafafa}:host .dropdown-divider{border:.0625rem solid #bdbdbd}"]
                }] }
    ];
    /** @nocollapse */
    DropdownComponent.ctorParameters = function () { return []; };
    return DropdownComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
    }
    DropdownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ezDropdown]'
                },] }
    ];
    /** @nocollapse */
    DropdownDirective.ctorParameters = function () { return []; };
    return DropdownDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    DropdownModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        // prettier-ignore
                        DropdownComponent,
                        DropdownDirective
                    ],
                    exports: [
                        // prettier-ignore
                        DropdownComponent,
                        DropdownDirective
                    ]
                },] }
    ];
    return DropdownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    /**
     * @return {?}
     */
    FormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    FormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ez-form',
                    template: "<ng-content></ng-content>\n",
                    styles: [".fieldset{border:.0625rem solid #2196f3;padding:.375rem .625rem .75rem}.field-group,.form-group{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;align-items:center}.form-group{margin:-.5rem}.field-group{flex-basis:0;-webkit-box-flex:1;flex-grow:1;flex-shrink:0;padding:.5rem}.form-label{flex-basis:0;-webkit-box-flex:1;flex-grow:1;flex-shrink:0;flex-basis:5.625rem;font-size:1.125rem;max-width:8.75rem}.form-field{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:-webkit-box-shadow;transition-property:box-shadow,-webkit-box-shadow;-webkit-transition-timing-function:linear;transition-timing-function:linear;flex-basis:0;-webkit-box-flex:1;flex-grow:1;flex-shrink:0;background-color:#fafafa;flex-basis:14.375rem;padding:2.5rem}.form-field:not([multiple]):not(textarea){height:2.5rem}.form-field:focus{-webkit-box-shadow:0 .09375rem .25rem rgba(33,150,243,.24),0 .09375rem .375rem rgba(33,150,243,.12);box-shadow:0 .09375rem .25rem rgba(33,150,243,.24),0 .09375rem .375rem rgba(33,150,243,.12);border:.0625rem solid #2196f3;padding:.4375rem}.form-field.disabled,.form-field[disabled]{background-color:#2196f3}select:not([multiple]).form-field{padding-left:.375rem}select:not([multiple]).form-field:focus{padding-left:.4375rem}select::-ms-value{background-color:#fafafa;color:#191919}option{color:#bdbdbd}input[type=checkbox],input[type=radio]{margin-right:1rem;vertical-align:middle}.checkbox,.radio{display:none}.checkbox-group .checkbox,.radio-group .radio{flex-basis:0;-webkit-box-flex:1;flex-grow:1;flex-shrink:0;flex-basis:50%}.checkbox-label::before,.radio-label::before{content:'\\00a0';background-color:#efefef;display:inline-block;height:1rem;margin-right:.375rem;vertical-align:middle;width:1rem}.radio-label::before{border-radius:50%}.checkbox:checked+.checkbox-label::before,.radio:checked+.radio-label::before{background-color:#2196f3;border:.125rem solid #efefef}::-webkit-input-placeholder{color:#bdbdbd;opacity:.54}:-ms-input-placeholder{color:#bdbdbd}::-moz-placeholder{color:#bdbdbd;opacity:1}:-moz-placeholder{color:#bdbdbd;opacity:1}.form-label.required::after{content:'\\2217';color:#ba000d}"]
                }] }
    ];
    /** @nocollapse */
    FormComponent.ctorParameters = function () { return []; };
    return FormComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormDirective = /** @class */ (function () {
    function FormDirective() {
    }
    FormDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ezForm]'
                },] }
    ];
    /** @nocollapse */
    FormDirective.ctorParameters = function () { return []; };
    return FormDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        // prettier-ignore
                        FormComponent,
                        FormDirective
                    ],
                    exports: [
                        // prettier-ignore
                        FormComponent,
                        FormDirective
                    ]
                },] }
    ];
    return FormModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    /**
     * @return {?}
     */
    GridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    GridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ez-grid',
                    template: "<ng-content></ng-content>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    GridComponent.ctorParameters = function () { return []; };
    return GridComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridDirective = /** @class */ (function () {
    function GridDirective() {
    }
    GridDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ezGrid]'
                },] }
    ];
    /** @nocollapse */
    GridDirective.ctorParameters = function () { return []; };
    return GridDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridModule = /** @class */ (function () {
    function GridModule() {
    }
    GridModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        // prettier-ignore
                        GridComponent,
                        GridDirective
                    ],
                    exports: [
                        // prettier-ignore
                        GridComponent,
                        GridDirective
                    ]
                },] }
    ];
    return GridModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    ModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ez-modal',
                    template: "<ng-content></ng-content>\n",
                    styles: [".backdrop,.modal-lg,.modal-md,.modal-sm{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:visibility,opacity;transition-property:visibility,opacity;-webkit-transition-timing-function:linear;transition-timing-function:linear;opacity:0;pointer-events:none;position:fixed;visibility:hidden}.backdrop{background-color:#bdbdbd;bottom:0;left:0;opacity:.6;right:0;top:0;z-index:2}.modal-sm{bottom:20%;left:36%;right:36%;top:26%;z-index:3}.modal-sm.active,.modal-sm.active~.backdrop,.modal-sm:target,.modal-sm:target~.backdrop{opacity:1;pointer-events:auto;visibility:visible}.modal-md{bottom:10%;left:30%;right:30%;top:20%}.modal-lg{bottom:2%;left:24%;right:24%;top:14%}.modal-body{background-color:#fff;height:75%;overflow-y:auto;padding:1rem;width:100%}.modal-footer,.modal-header{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;align-items:center;padding:.5rem;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    ModalComponent.ctorParameters = function () { return []; };
    return ModalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalDirective = /** @class */ (function () {
    function ModalDirective() {
    }
    ModalDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ezModal]'
                },] }
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = function () { return []; };
    return ModalDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        // prettier-ignore
                        ModalComponent,
                        ModalDirective
                    ],
                    exports: [
                        // prettier-ignore
                        ModalComponent,
                        ModalDirective
                    ]
                },] }
    ];
    return ModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    /**
     * @return {?}
     */
    NavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    NavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ez-nav',
                    template: "<ng-content></ng-content>\n",
                    styles: [".nav-left,.nav-right{overflow-y:auto;width:auto}.nav-bottom .nav-row,.nav-item,.nav-link,.nav-top .nav-row{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start}.nav-bottom .nav-row,.nav-item,.nav-top .nav-row{display:block}.nav-item,.nav-link{color:inherit;-webkit-box-pack:center;justify-content:center;text-align:center;text-decoration:none}.nav-item:hover,.nav-link:hover{cursor:pointer;text-decoration:underline}@media screen and (min-width:48em){.nav-bottom .nav-row,.nav-item,.nav-top .nav-row{display:-webkit-box;display:flex}.nav-item,.nav-link{flex-basis:auto;-webkit-box-flex:1;flex-grow:1;flex-shrink:0}}.nav-left .nav-item,.nav-left .nav-link,.nav-right .nav-item,.nav-right .nav-link{-webkit-box-pack:start;justify-content:flex-start}.nav-link{padding:1rem}.nav-toggle{height:2.5rem;position:relative;width:2.5rem}.nav-toggle::after{content:'';background-color:#fff;-webkit-box-shadow:0 6px 0 #fff,0 12px 0 #fff;box-shadow:0 6px 0 #fff,0 12px 0 #fff;height:.125rem;position:absolute;width:1.5rem}@media screen and (min-width:64em){.nav-toggle{display:none}}"]
                }] }
    ];
    /** @nocollapse */
    NavComponent.ctorParameters = function () { return []; };
    return NavComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavDirective = /** @class */ (function () {
    function NavDirective() {
    }
    NavDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ezNav]'
                },] }
    ];
    /** @nocollapse */
    NavDirective.ctorParameters = function () { return []; };
    return NavDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavModule = /** @class */ (function () {
    function NavModule() {
    }
    NavModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        // prettier-ignore
                        NavComponent,
                        NavDirective
                    ],
                    exports: [
                        // prettier-ignore
                        NavComponent,
                        NavDirective
                    ]
                },] }
    ];
    return NavModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    /**
     * @return {?}
     */
    SliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ez-slider',
                    template: "<ng-content></ng-content>\n",
                    styles: ["input[type=range]::-webkit-slider-thumb{-webkit-box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12);box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12);background:#fff;border:.0625rem solid #000;border-radius:.1875rem}input[type=range]::-moz-range-thumb{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12);background:#fff;border:.0625rem solid #000;border-radius:.1875rem}input[type=range]::-ms-thumb{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12);background:#fff;border:.0625rem solid #000;border-radius:.1875rem}input[type=range].slider-v::-webkit-slider-thumb{height:2.5rem;width:1rem}input[type=range].slider-v::-moz-range-thumb{height:2.5rem;width:1rem}input[type=range].slider-v::-ms-thumb{height:2.5rem;width:1rem}input[type=range].slider-h::-webkit-slider-thumb{height:1.5rem;width:2.5rem}input[type=range].slider-h::-moz-range-thumb{height:1.5rem;width:2.5rem}input[type=range].slider-h::-ms-thumb{height:1.5rem;width:2.5rem}input[type=range].slider-circle::-webkit-slider-thumb{border-radius:50%;height:2.5rem;width:2.5rem}input[type=range].slider-circle::-moz-range-thumb{border-radius:50%;height:2.5rem;width:2.5rem}input[type=range].slider-circle::-ms-thumb{border-radius:50%;height:2.5rem;width:2.5rem}input[type=range]::-webkit-slider-runnable-track{cursor:pointer;height:1rem;width:100%;-webkit-box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12);box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12);background:#2196f3;border:.0625rem solid #000;border-radius:.1875rem}input[type=range]:focus::-webkit-slider-runnable-track{background:#2196f3}input[type=range]::-moz-range-track{cursor:pointer;height:1rem;width:100%;box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12);background:#2196f3;border:.0625rem solid #000;border-radius:.1875rem}input[type=range]::-ms-track{cursor:pointer;height:1rem;width:100%;border-width:1rem 0}input[type=range]::-ms-fill-lower{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12);background:#2196f3;border:.0625rem solid #000;border-radius:.1875rem}input[type=range]:focus::-ms-fill-lower{background:#2196f3}input[type=range]::-ms-fill-upper{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12);background:#2196f3;border:.0625rem solid #000;border-radius:.1875rem}input[type=range]:focus::-ms-fill-upper{background:#2196f3}"]
                }] }
    ];
    /** @nocollapse */
    SliderComponent.ctorParameters = function () { return []; };
    return SliderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SliderDirective = /** @class */ (function () {
    function SliderDirective() {
    }
    SliderDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ezSlider]'
                },] }
    ];
    /** @nocollapse */
    SliderDirective.ctorParameters = function () { return []; };
    return SliderDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SliderModule = /** @class */ (function () {
    function SliderModule() {
    }
    SliderModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        // prettier-ignore
                        SliderComponent,
                        SliderDirective
                    ],
                    exports: [
                        // prettier-ignore
                        SliderComponent,
                        SliderDirective
                    ]
                },] }
    ];
    return SliderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SlideshowComponent = /** @class */ (function () {
    function SlideshowComponent() {
    }
    /**
     * @return {?}
     */
    SlideshowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SlideshowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ez-slideshow',
                    template: "<ng-content></ng-content>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SlideshowComponent.ctorParameters = function () { return []; };
    return SlideshowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SlideshowDirective = /** @class */ (function () {
    function SlideshowDirective() {
    }
    SlideshowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ezSlideshow]'
                },] }
    ];
    /** @nocollapse */
    SlideshowDirective.ctorParameters = function () { return []; };
    return SlideshowDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SlideshowModule = /** @class */ (function () {
    function SlideshowModule() {
    }
    SlideshowModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        // prettier-ignore
                        SlideshowComponent,
                        SlideshowDirective
                    ],
                    exports: [
                        // prettier-ignore
                        SlideshowComponent,
                        SlideshowDirective
                    ]
                },] }
    ];
    return SlideshowModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    /**
     * @return {?}
     */
    SpinnerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ez-spinner, .spinner, .spinner-dotted',
                    template: "<ng-content></ng-content>\n",
                    styles: [":host.spinner,:host.spinner-dotted{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;display:-webkit-inline-box;display:inline-flex;-webkit-animation:2s linear infinite spinner;animation:2s linear infinite spinner;border-radius:50%;height:7.5rem;width:7.5rem}:host.spinner{border-color:#efefef #efefef #efefef #2196f3;border-style:solid;border-width:1rem}:host.spinner-dotted{border-style:dotted;border-color:#0069c0 #2196f3 #6ec6ff #39f;border-width:1.125rem .875rem .75rem .5rem}@-webkit-keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
                }] }
    ];
    /** @nocollapse */
    SpinnerComponent.ctorParameters = function () { return []; };
    return SpinnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SpinnerDirective = /** @class */ (function () {
    function SpinnerDirective() {
    }
    SpinnerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ezSpinner]'
                },] }
    ];
    /** @nocollapse */
    SpinnerDirective.ctorParameters = function () { return []; };
    return SpinnerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SpinnerModule = /** @class */ (function () {
    function SpinnerModule() {
    }
    SpinnerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        // prettier-ignore
                        SpinnerComponent,
                        SpinnerDirective
                    ],
                    exports: [
                        // prettier-ignore
                        SpinnerComponent,
                        SpinnerDirective
                    ]
                },] }
    ];
    return SpinnerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        // prettier-ignore
                        AlertModule,
                        BadgeModule,
                        ButtonModule,
                        CardModule,
                        CollapsibleModule,
                        DropdownModule,
                        FormModule,
                        GridModule,
                        ModalModule,
                        NavModule,
                        SliderModule,
                        SlideshowModule,
                        SpinnerModule
                    ]
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
        { type: NgModule, args: [{
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
    function () { };
    EasyComponent.decorators = [
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    imports: [ComponentsModule],
                    declarations: [EasyComponent],
                    exports: [ComponentsModule, CoreModule, EasyComponent]
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EasyService.ctorParameters = function () { return []; };
    /** @nocollapse */ EasyService.ngInjectableDef = defineInjectable({ factory: function EasyService_Factory() { return new EasyService(); }, token: EasyService, providedIn: "root" });
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

export { ComponentsModule, CoreModule, EasyComponent, EasyModule, EasyService, SharedModule, AlertComponent as ɵb, AlertDirective as ɵc, AlertModule as ɵa, BadgeComponent as ɵe, BadgeDirective as ɵf, BadgeModule as ɵd, ButtonComponent as ɵh, ButtonDirective as ɵi, ButtonModule as ɵg, CardComponent as ɵk, CardDirective as ɵl, CardModule as ɵj, CollapsibleComponent as ɵn, CollapsibleDirective as ɵo, CollapsibleModule as ɵm, DropdownComponent as ɵq, DropdownDirective as ɵr, DropdownModule as ɵp, FormComponent as ɵt, FormDirective as ɵu, FormModule as ɵs, GridComponent as ɵw, GridDirective as ɵx, GridModule as ɵv, ModalComponent as ɵz, ModalDirective as ɵba, ModalModule as ɵy, NavComponent as ɵbc, NavDirective as ɵbd, NavModule as ɵbb, SliderComponent as ɵbf, SliderDirective as ɵbg, SliderModule as ɵbe, SlideshowComponent as ɵbi, SlideshowDirective as ɵbj, SlideshowModule as ɵbh, SpinnerComponent as ɵbl, SpinnerDirective as ɵbm, SpinnerModule as ɵbk };

//# sourceMappingURL=easy.js.map