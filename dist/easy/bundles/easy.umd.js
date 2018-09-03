(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('easy', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.easy = {}),global.ng.core,global.ng.common));
}(this, (function (exports,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                    this.role = 'alert';
                }
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
                        template: "<p [id]=\"\">\n    <ng-content></ng-content>\n</p>\n\n<button *ngIf=\"close\" class=\"close\" type=\"button\" aria-label=\"close alert\" [id]=\"\"  autofocus>X</button>\n",
                        styles: [":host.alert-bad,:host.alert-good,:host.alert-info,:host.alert-warn{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;color:#fff;-webkit-box-pack:justify;justify-content:space-between;padding:.5rem 1rem}:host.alert-bad{background-color:#ba000d}:host.alert-good{background-color:#087f23}:host.alert-info{background-color:#0069c0}:host.alert-warn{background-color:#ffeb3b;color:#191919}"]
                    }] }
        ];
        /** @nocollapse */
        AlertComponent.ctorParameters = function () { return []; };
        AlertComponent.propDecorators = {
            ariaDescribedby: [{ type: i0.HostBinding, args: ['attr.aria-describedby',] }],
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                            AlertComponent
                        ],
                        exports: [
                            AlertComponent
                        ]
                    },] }
        ];
        return AlertModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ComponentsModule = /** @class */ (function () {
        function ComponentsModule() {
        }
        ComponentsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [],
                        exports: [
                            AlertModule,
                        ]
                    },] }
        ];
        return ComponentsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.ComponentsModule = ComponentsModule;
    exports.CoreModule = CoreModule;
    exports.EasyComponent = EasyComponent;
    exports.EasyModule = EasyModule;
    exports.EasyService = EasyService;
    exports.SharedModule = SharedModule;
    exports.ɵb = AlertComponent;
    exports.ɵa = AlertModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Vhc3kvbGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9lYXN5L2xpYi9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvY29tcG9uZW50cy9hbGVydC9hbGVydC5tb2R1bGUudHMiLCJuZzovL2Vhc3kvbGliL2NvbXBvbmVudHMvY29tcG9uZW50cy5tb2R1bGUudHMiLCJuZzovL2Vhc3kvbGliL2NvcmUvY29yZS5tb2R1bGUudHMiLCJuZzovL2Vhc3kvbGliL2Vhc3kuY29tcG9uZW50LnRzIiwibmc6Ly9lYXN5L2xpYi9lYXN5Lm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvZWFzeS5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZXotYWxlcnQsIC5hbGVydC1iYWQsIC5hbGVydC1nb29kLCAuYWxlcnQtaW5mbywgLmFsZXJ0LXdhcm4nLFxuXHR0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9hbGVydC5jb21wb25lbnQuc2Nzcydcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRlc2NyaWJlZGJ5JykgYXJpYURlc2NyaWJlZGJ5OiBzdHJpbmc7XG5cdEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWxhYmVsbGVkYnknKSBhcmlhTGFiZWxsZWRieTogc3RyaW5nO1xuXHRASG9zdEJpbmRpbmcoJ2F0dHIuY2xhc3MnKSBob3N0Q2xhc3M6IHN0cmluZztcblx0QEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlOiBzdHJpbmc7XG5cdEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpIHRhYmluZGV4OiBzdHJpbmc7XG5cdEBJbnB1dCgpXG5cdHB1YmxpYyBzZXQgY2xhc3MoY2hpbGRDbGFzczogc3RyaW5nKSB7XG5cdFx0aWYgKGNoaWxkQ2xhc3MuaW5jbHVkZXMoJ2Nsb3NlJykpIHtcblx0XHRcdHRoaXMuY2hpbGRDbGFzcyA9IGNoaWxkQ2xhc3MucmVwbGFjZSgvIGNsb3NlL2csICcnKTtcblx0XHRcdHRoaXMuY2xvc2UgPSB0cnVlO1xuXHRcdFx0dGhpcy5yb2xlID0gJ2FsZXJ0ZGlhbG9nJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jaGlsZENsYXNzID0gY2hpbGRDbGFzcztcblx0XHRcdHRoaXMucm9sZSA9ICdhbGVydCc7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldCBjbGFzcygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmNoaWxkQ2xhc3M7XG5cdH1cblxuXHRwdWJsaWMgY2xvc2U6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSBjaGlsZENsYXNzOiBzdHJpbmc7XG5cblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXG5cdH1cblxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5ob3N0Q2xhc3MgPSB0aGlzLmNsYXNzO1xuXHRcdHRoaXMudGFiaW5kZXggPSAnLTEnO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWxlcnRDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRTaGFyZWRNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0QWxlcnRDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEFsZXJ0Q29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRNb2R1bGUge1xuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbGVydE1vZHVsZSB9IGZyb20gJy4vYWxlcnQvYWxlcnQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRBbGVydE1vZHVsZSxcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRzTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2V6LXJvb3QnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9lYXN5LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFtcclxuXHRcdCcuL2Vhc3kuY29tcG9uZW50LnNjc3MnXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWFzeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnRzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudHMubW9kdWxlJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vY29yZS9jb3JlLm1vZHVsZSc7XHJcbmltcG9ydCB7IEVhc3lDb21wb25lbnQgfSBmcm9tICcuL2Vhc3kuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tcG9uZW50c01vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRFYXN5Q29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRDb21wb25lbnRzTW9kdWxlLFxyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRcdEVhc3lDb21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXN5TW9kdWxlIHtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRWFzeVNlcnZpY2Uge1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJIb3N0QmluZGluZyIsIklucHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJJbmplY3RhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztRQWVDLHNCQUNXLGlDQUFLOzs7O2dCQVlmLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Ozs7Z0JBYnhCLFVBQ2lCLFVBQWtCO2dCQUNsQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztpQkFDMUI7cUJBQU07b0JBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7b0JBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO2lCQUNwQjthQUNEOzs7V0FBQTs7OztRQWNNLGlDQUFROzs7O2dCQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7OztvQkF2Q3RCQSxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLDZEQUE2RDt3QkFDdkUsc0xBQXFDOztxQkFJckM7Ozs7O3NDQUVDQyxjQUFXLFNBQUMsdUJBQXVCO3FDQUNuQ0EsY0FBVyxTQUFDLHNCQUFzQjtnQ0FDbENBLGNBQVcsU0FBQyxZQUFZOzJCQUN4QkEsY0FBVyxTQUFDLFdBQVc7K0JBQ3ZCQSxjQUFXLFNBQUMsZUFBZTs0QkFDM0JDLFFBQUs7OzZCQWZQOzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLFdBQVEsU0FBQzt3QkFDVCxPQUFPLEVBQUUsRUFFUjt3QkFDRCxZQUFZLEVBQUUsRUFFYjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1JDLG1CQUFZO3lCQUNaO3FCQUNEOzsyQkFiRDs7Ozs7OztBQ0FBOzs7O29CQUtDRCxXQUFRLFNBQUM7d0JBQ1QsT0FBTyxFQUFFOzRCQUNSLFlBQVk7eUJBQ1o7d0JBQ0QsWUFBWSxFQUFFOzRCQUNiLGNBQWM7eUJBQ2Q7d0JBQ0QsT0FBTyxFQUFFOzRCQUNSLGNBQWM7eUJBQ2Q7cUJBQ0Q7OzBCQWZEOzs7Ozs7O0FDQUE7Ozs7b0JBSUNBLFdBQVEsU0FBQzt3QkFDVCxPQUFPLEVBQUUsRUFFUjt3QkFDRCxZQUFZLEVBQUUsRUFFYjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1IsV0FBVzt5QkFDWDtxQkFDRDs7K0JBZEQ7Ozs7Ozs7QUNBQTs7OztvQkFFQ0EsV0FBUSxTQUFDO3dCQUNULE9BQU8sRUFBRSxFQUVSO3dCQUNELFNBQVMsRUFBRSxFQUVWO3dCQUNELE9BQU8sRUFBRSxFQUVSO3FCQUNEOzt5QkFaRDs7Ozs7OztBQ0FBOzs7Ozs7UUFjUSxnQ0FBUTs7Ozs7O29CQVpmSCxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLGdCQUFvQzs7cUJBSXBDOzs7OzRCQVJEOzs7Ozs7O0FDQUE7Ozs7b0JBTUNHLFdBQVEsU0FBQzt3QkFDVCxPQUFPLEVBQUU7NEJBQ1IsZ0JBQWdCO3lCQUNoQjt3QkFDRCxZQUFZLEVBQUU7NEJBQ2IsYUFBYTt5QkFDYjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1IsZ0JBQWdCOzRCQUNoQixVQUFVOzRCQUNWLGFBQWE7eUJBQ2I7cUJBQ0Q7O3lCQWxCRDs7Ozs7OztBQ0FBOzs7O29CQUVDRSxhQUFVLFNBQUM7d0JBQ1gsVUFBVSxFQUFFLE1BQU07cUJBQ2xCOzs7OzswQkFKRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9