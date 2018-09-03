import { Component, Input, HostBinding, NgModule, Injectable, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

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
            }
            else {
                this.childClass = childClass;
            }
            this.hostClass = this.class;
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
    };
    AlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
                    template: "<p>\n    <ng-content></ng-content>\n</p>\n\n<button *ngIf=\"close\" class=\"close\" type=\"button\">X</button>\n",
                    styles: [":host.alert-bad,:host.alert-good,:host.alert-info,:host.alert-warn{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;color:#fff;-webkit-box-pack:justify;justify-content:space-between;padding:.5rem 1rem}:host.alert-bad{background-color:#ba000d}:host.alert-good{background-color:#087f23}:host.alert-info{background-color:#0069c0}:host.alert-warn{background-color:#ffeb3b;color:#191919}"]
                }] }
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return []; };
    AlertComponent.propDecorators = {
        hostClass: [{ type: HostBinding, args: ['attr.class',] }],
        class: [{ type: Input }]
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
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [],
                    exports: [
                        CommonModule
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
        { type: NgModule, args: [{
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
        { type: NgModule, args: [{
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EasyModule = /** @class */ (function () {
    function EasyModule() {
    }
    EasyModule.decorators = [
        { type: NgModule, args: [{
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ComponentsModule, CoreModule, EasyComponent, EasyModule, EasyService, SharedModule, AlertComponent as ɵb, AlertModule as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZWFzeS9saWIvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCJuZzovL2Vhc3kvbGliL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwibmc6Ly9lYXN5L2xpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0Lm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvY29yZS9jb3JlLm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvZWFzeS5jb21wb25lbnQudHMiLCJuZzovL2Vhc3kvbGliL2Vhc3kubW9kdWxlLnRzIiwibmc6Ly9lYXN5L2xpYi9lYXN5LnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdlei1hbGVydCwgLmFsZXJ0LWJhZCwgLmFsZXJ0LWdvb2QsIC5hbGVydC1pbmZvLCAuYWxlcnQtd2FybicsXG5cdHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2FsZXJ0LmNvbXBvbmVudC5zY3NzJ1xuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QEhvc3RCaW5kaW5nKCdhdHRyLmNsYXNzJykgaG9zdENsYXNzOiBzdHJpbmc7XG5cdEBJbnB1dCgpXG5cdHB1YmxpYyBzZXQgY2xhc3MoY2hpbGRDbGFzczogc3RyaW5nKSB7XG5cdFx0aWYgKGNoaWxkQ2xhc3MuaW5jbHVkZXMoJ2Nsb3NlJykpIHtcblx0XHRcdHRoaXMuY2hpbGRDbGFzcyA9IGNoaWxkQ2xhc3MucmVwbGFjZSgvIGNsb3NlL2csICcnKTtcblx0XHRcdHRoaXMuY2xvc2UgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNoaWxkQ2xhc3MgPSBjaGlsZENsYXNzO1xuXHRcdH1cblxuXHRcdHRoaXMuaG9zdENsYXNzID0gdGhpcy5jbGFzcztcblx0fVxuXG5cdHB1YmxpYyBnZXQgY2xhc3MoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5jaGlsZENsYXNzO1xuXHR9XG5cblx0cHVibGljIGNsb3NlOiBib29sZWFuO1xuXG5cdHByaXZhdGUgY2hpbGRDbGFzczogc3RyaW5nO1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblxuXHR9XG5cblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuXG5cdH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGVcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdFNoYXJlZE1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRBbGVydENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0QWxlcnRDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydE1vZHVsZSB7XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFsZXJ0TW9kdWxlIH0gZnJvbSAnLi9hbGVydC9hbGVydC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEFsZXJ0TW9kdWxlLFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNNb2R1bGUge1xuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnZXotcm9vdCcsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2Vhc3kuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogW1xyXG5cdFx0Jy4vZWFzeS5jb21wb25lbnQuc2NzcydcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXN5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudHNNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50cy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9jb3JlL2NvcmUubW9kdWxlJztcclxuaW1wb3J0IHsgRWFzeUNvbXBvbmVudCB9IGZyb20gJy4vZWFzeS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21wb25lbnRzTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEVhc3lDb21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdENvbXBvbmVudHNNb2R1bGUsXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdFx0RWFzeUNvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVhc3lNb2R1bGUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXN5U2VydmljZSB7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0lBV0Msc0JBQ1csaUNBQUs7Ozs7O1lBWWYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDOzs7Ozs7UUFieEIsVUFDaUIsVUFBa0I7WUFDbEMsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNsQjtpQkFBTTtnQkFDTixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQzthQUM3QjtZQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM1Qjs7O09BQUE7Ozs7SUFjTSxpQ0FBUTs7Ozs7O2dCQWpDZixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDZEQUE2RDtvQkFDdkUsNEhBQXFDOztpQkFJckM7Ozs7OzRCQUVDLFdBQVcsU0FBQyxZQUFZO3dCQUN4QixLQUFLOzt5QkFYUDs7Ozs7OztBQ0FBOzs7O2dCQUdDLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUUsRUFFUjtvQkFDRCxZQUFZLEVBQUUsRUFFYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtpQkFDRDs7dUJBYkQ7Ozs7Ozs7QUNBQTs7OztnQkFLQyxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLGNBQWM7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLGNBQWM7cUJBQ2Q7aUJBQ0Q7O3NCQWZEOzs7Ozs7O0FDQUE7Ozs7Z0JBSUMsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRSxFQUVSO29CQUNELFlBQVksRUFBRSxFQUViO29CQUNELE9BQU8sRUFBRTt3QkFDUixXQUFXO3FCQUNYO2lCQUNEOzsyQkFkRDs7Ozs7OztBQ0FBOzs7O2dCQUVDLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUUsRUFFUjtvQkFDRCxTQUFTLEVBQUUsRUFFVjtvQkFDRCxPQUFPLEVBQUUsRUFFUjtpQkFDRDs7cUJBWkQ7Ozs7Ozs7QUNBQTs7Ozs7O0lBY1EsZ0NBQVE7Ozs7OztnQkFaZixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLGdCQUFvQzs7aUJBSXBDOzs7O3dCQVJEOzs7Ozs7O0FDQUE7Ozs7Z0JBTUMsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixnQkFBZ0I7cUJBQ2hCO29CQUNELFlBQVksRUFBRTt3QkFDYixhQUFhO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUixnQkFBZ0I7d0JBQ2hCLFVBQVU7d0JBQ1YsYUFBYTtxQkFDYjtpQkFDRDs7cUJBbEJEOzs7Ozs7O0FDQUE7Ozs7Z0JBRUMsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7Ozs7c0JBSkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==