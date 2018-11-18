(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('easy', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.easy = {}),global.ng.core,global.ng.common));
}(this, (function (exports,i0,common) { 'use strict';

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
                        template: "<p [id]=\"\">\r\n    <ng-content></ng-content>\r\n</p>\r\n\r\n<button *ngIf=\"close\" class=\"close\" type=\"button\" aria-label=\"close alert\" [id]=\"\"  autofocus>X</button>\r\n",
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    exports.ɵa = AlertModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Vhc3kvbGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9lYXN5L2xpYi9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvY29tcG9uZW50cy9hbGVydC9hbGVydC5tb2R1bGUudHMiLCJuZzovL2Vhc3kvbGliL2NvbXBvbmVudHMvY29tcG9uZW50cy5tb2R1bGUudHMiLCJuZzovL2Vhc3kvbGliL2NvcmUvY29yZS5tb2R1bGUudHMiLCJuZzovL2Vhc3kvbGliL2Vhc3kuY29tcG9uZW50LnRzIiwibmc6Ly9lYXN5L2xpYi9lYXN5Lm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvZWFzeS5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnZXotYWxlcnQsIC5hbGVydC1iYWQsIC5hbGVydC1nb29kLCAuYWxlcnQtaW5mbywgLmFsZXJ0LXdhcm4nLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnLi9hbGVydC5jb21wb25lbnQuc2NzcydcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKSBhcmlhRGVzY3JpYmVkYnk6IHN0cmluZztcclxuXHRASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbGxlZGJ5JykgYXJpYUxhYmVsbGVkYnk6IHN0cmluZztcclxuXHRASG9zdEJpbmRpbmcoJ2F0dHIuY2xhc3MnKSBob3N0Q2xhc3M6IHN0cmluZztcclxuXHRASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGU6IHN0cmluZztcclxuXHRASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKSB0YWJpbmRleDogc3RyaW5nO1xyXG5cdEBJbnB1dCgpXHJcblx0cHVibGljIHNldCBjbGFzcyhjaGlsZENsYXNzOiBzdHJpbmcpIHtcclxuXHRcdGlmIChjaGlsZENsYXNzLmluY2x1ZGVzKCdjbG9zZScpKSB7XHJcblx0XHRcdHRoaXMuY2hpbGRDbGFzcyA9IGNoaWxkQ2xhc3MucmVwbGFjZSgvIGNsb3NlL2csICcnKTtcclxuXHRcdFx0dGhpcy5jbG9zZSA9IHRydWU7XHJcblx0XHRcdHRoaXMucm9sZSA9ICdhbGVydGRpYWxvZyc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmNoaWxkQ2xhc3MgPSBjaGlsZENsYXNzO1xyXG5cdFx0XHR0aGlzLnJvbGUgPSAnYWxlcnQnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBjbGFzcygpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGRDbGFzcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjbG9zZTogYm9vbGVhbjtcclxuXHJcblx0cHJpdmF0ZSBjaGlsZENsYXNzOiBzdHJpbmc7XHJcblxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmhvc3RDbGFzcyA9IHRoaXMuY2xhc3M7XHJcblx0XHR0aGlzLnRhYmluZGV4ID0gJy0xJztcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRTaGFyZWRNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0QWxlcnRDb21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdEFsZXJ0Q29tcG9uZW50XHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRNb2R1bGUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQWxlcnRNb2R1bGUgfSBmcm9tICcuL2FsZXJ0L2FsZXJ0Lm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRBbGVydE1vZHVsZSxcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRzTW9kdWxlIHtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2V6LXJvb3QnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9lYXN5LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFtcclxuXHRcdCcuL2Vhc3kuY29tcG9uZW50LnNjc3MnXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWFzeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnRzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudHMubW9kdWxlJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vY29yZS9jb3JlLm1vZHVsZSc7XHJcbmltcG9ydCB7IEVhc3lDb21wb25lbnQgfSBmcm9tICcuL2Vhc3kuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tcG9uZW50c01vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRFYXN5Q29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRDb21wb25lbnRzTW9kdWxlLFxyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRcdEVhc3lDb21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXN5TW9kdWxlIHtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRWFzeVNlcnZpY2Uge1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJIb3N0QmluZGluZyIsIklucHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJJbmplY3RhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFtQ0M7U0FFQztRQXRCRCxzQkFDVyxpQ0FBSzs7O2dCQVdoQjtnQkFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDdkI7Ozs7Z0JBZEQsVUFDaUIsVUFBa0I7Z0JBQ2xDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO2lCQUMxQjtxQkFBTTtvQkFDTixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7aUJBQ3BCO2FBQ0Q7OztXQUFBOzs7O1FBY00saUNBQVE7OztZQUFmO2dCQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDckI7O29CQXhDREEsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSw2REFBNkQ7d0JBQ3ZFLGdNQUFxQzs7cUJBSXJDOzs7OztzQ0FFQ0MsY0FBVyxTQUFDLHVCQUF1QjtxQ0FDbkNBLGNBQVcsU0FBQyxzQkFBc0I7Z0NBQ2xDQSxjQUFXLFNBQUMsWUFBWTsyQkFDeEJBLGNBQVcsU0FBQyxXQUFXOytCQUN2QkEsY0FBVyxTQUFDLGVBQWU7NEJBQzNCQyxRQUFLOztRQTRCUCxxQkFBQztLQXpDRDs7Ozs7O0FDRkE7UUFHQTtTQWFDOztvQkFiQUMsV0FBUSxTQUFDO3dCQUNULE9BQU8sRUFBRSxFQUVSO3dCQUNELFlBQVksRUFBRSxFQUViO3dCQUNELE9BQU8sRUFBRTs0QkFDUkMsbUJBQVk7eUJBQ1o7cUJBQ0Q7O1FBR0QsbUJBQUM7S0FiRDs7Ozs7O0FDSEE7UUFLQTtTQWFDOztvQkFiQUQsV0FBUSxTQUFDO3dCQUNULE9BQU8sRUFBRTs0QkFDUixZQUFZO3lCQUNaO3dCQUNELFlBQVksRUFBRTs0QkFDYixjQUFjO3lCQUNkO3dCQUNELE9BQU8sRUFBRTs0QkFDUixjQUFjO3lCQUNkO3FCQUNEOztRQUdELGtCQUFDO0tBYkQ7Ozs7OztBQ0xBO1FBSUE7U0FhQzs7b0JBYkFBLFdBQVEsU0FBQzt3QkFDVCxPQUFPLEVBQUUsRUFFUjt3QkFDRCxZQUFZLEVBQUUsRUFFYjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1IsV0FBVzt5QkFDWDtxQkFDRDs7UUFHRCx1QkFBQztLQWJEOzs7Ozs7QUNKQTtRQUVBO1NBYUM7O29CQWJBQSxXQUFRLFNBQUM7d0JBQ1QsT0FBTyxFQUFFLEVBRVI7d0JBQ0QsU0FBUyxFQUFFLEVBRVY7d0JBQ0QsT0FBTyxFQUFFLEVBRVI7cUJBQ0Q7O1FBR0QsaUJBQUM7S0FiRDs7Ozs7O0FDRkE7UUFVQztTQUVDOzs7O1FBRU0sZ0NBQVE7OztZQUFmO2FBRUM7O29CQWRESCxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLGdCQUFvQzs7cUJBSXBDOzs7O1FBU0Qsb0JBQUM7S0FmRDs7Ozs7O0FDRkE7UUFNQTtTQWVDOztvQkFmQUcsV0FBUSxTQUFDO3dCQUNULE9BQU8sRUFBRTs0QkFDUixnQkFBZ0I7eUJBQ2hCO3dCQUNELFlBQVksRUFBRTs0QkFDYixhQUFhO3lCQUNiO3dCQUNELE9BQU8sRUFBRTs0QkFDUixnQkFBZ0I7NEJBQ2hCLFVBQVU7NEJBQ1YsYUFBYTt5QkFDYjtxQkFDRDs7UUFHRCxpQkFBQztLQWZEOzs7Ozs7QUNOQTtRQU1DO1NBRUM7O29CQU5ERSxhQUFVLFNBQUM7d0JBQ1gsVUFBVSxFQUFFLE1BQU07cUJBQ2xCOzs7OzswQkFKRDtLQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==