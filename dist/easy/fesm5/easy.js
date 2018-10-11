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
        { type: Component, args: [{
                    selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
                    template: "<p [id]=\"\">\r\n    <ng-content></ng-content>\r\n</p>\r\n\r\n<button *ngIf=\"close\" class=\"close\" type=\"button\" aria-label=\"close alert\" [id]=\"\"  autofocus>X</button>\r\n",
                    styles: [":host.alert-bad,:host.alert-good,:host.alert-info,:host.alert-warn{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;color:#fff;-webkit-box-pack:justify;justify-content:space-between;padding:.5rem 1rem}:host.alert-bad{background-color:#ba000d}:host.alert-good{background-color:#087f23}:host.alert-info{background-color:#0069c0}:host.alert-warn{background-color:#ffeb3b;color:#191919}"]
                }] }
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return []; };
    AlertComponent.propDecorators = {
        ariaDescribedby: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZWFzeS9saWIvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCJuZzovL2Vhc3kvbGliL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwibmc6Ly9lYXN5L2xpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0Lm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvY29yZS9jb3JlLm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvZWFzeS5jb21wb25lbnQudHMiLCJuZzovL2Vhc3kvbGliL2Vhc3kubW9kdWxlLnRzIiwibmc6Ly9lYXN5L2xpYi9lYXN5LnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdlei1hbGVydCwgLmFsZXJ0LWJhZCwgLmFsZXJ0LWdvb2QsIC5hbGVydC1pbmZvLCAuYWxlcnQtd2FybicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2FsZXJ0LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFtcclxuXHRcdCcuL2FsZXJ0LmNvbXBvbmVudC5zY3NzJ1xyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpIGFyaWFEZXNjcmliZWRieTogc3RyaW5nO1xyXG5cdEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWxhYmVsbGVkYnknKSBhcmlhTGFiZWxsZWRieTogc3RyaW5nO1xyXG5cdEBIb3N0QmluZGluZygnYXR0ci5jbGFzcycpIGhvc3RDbGFzczogc3RyaW5nO1xyXG5cdEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZTogc3RyaW5nO1xyXG5cdEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpIHRhYmluZGV4OiBzdHJpbmc7XHJcblx0QElucHV0KClcclxuXHRwdWJsaWMgc2V0IGNsYXNzKGNoaWxkQ2xhc3M6IHN0cmluZykge1xyXG5cdFx0aWYgKGNoaWxkQ2xhc3MuaW5jbHVkZXMoJ2Nsb3NlJykpIHtcclxuXHRcdFx0dGhpcy5jaGlsZENsYXNzID0gY2hpbGRDbGFzcy5yZXBsYWNlKC8gY2xvc2UvZywgJycpO1xyXG5cdFx0XHR0aGlzLmNsb3NlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5yb2xlID0gJ2FsZXJ0ZGlhbG9nJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY2hpbGRDbGFzcyA9IGNoaWxkQ2xhc3M7XHJcblx0XHRcdHRoaXMucm9sZSA9ICdhbGVydCc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGNsYXNzKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5jaGlsZENsYXNzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNsb3NlOiBib29sZWFuO1xyXG5cclxuXHRwcml2YXRlIGNoaWxkQ2xhc3M6IHN0cmluZztcclxuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuaG9zdENsYXNzID0gdGhpcy5jbGFzcztcclxuXHRcdHRoaXMudGFiaW5kZXggPSAnLTEnO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9hbGVydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdFNoYXJlZE1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRBbGVydENvbXBvbmVudFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0QWxlcnRDb21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydE1vZHVsZSB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBbGVydE1vZHVsZSB9IGZyb20gJy4vYWxlcnQvYWxlcnQubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdEFsZXJ0TW9kdWxlLFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNNb2R1bGUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnZXotcm9vdCcsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2Vhc3kuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogW1xyXG5cdFx0Jy4vZWFzeS5jb21wb25lbnQuc2NzcydcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXN5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudHNNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50cy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9jb3JlL2NvcmUubW9kdWxlJztcclxuaW1wb3J0IHsgRWFzeUNvbXBvbmVudCB9IGZyb20gJy4vZWFzeS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21wb25lbnRzTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEVhc3lDb21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdENvbXBvbmVudHNNb2R1bGUsXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdFx0RWFzeUNvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVhc3lNb2R1bGUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXN5U2VydmljZSB7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQW1DQztLQUVDO0lBdEJELHNCQUNXLGlDQUFLOzs7O1FBV2hCO1lBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3ZCOzs7OztRQWRELFVBQ2lCLFVBQWtCO1lBQ2xDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO2FBQzFCO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQzthQUNwQjtTQUNEOzs7T0FBQTs7OztJQWNNLGlDQUFROzs7SUFBZjtRQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztLQUNyQjs7Z0JBeENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsNkRBQTZEO29CQUN2RSxnTUFBcUM7O2lCQUlyQzs7Ozs7a0NBRUMsV0FBVyxTQUFDLHVCQUF1QjtpQ0FDbkMsV0FBVyxTQUFDLHNCQUFzQjs0QkFDbEMsV0FBVyxTQUFDLFlBQVk7dUJBQ3hCLFdBQVcsU0FBQyxXQUFXOzJCQUN2QixXQUFXLFNBQUMsZUFBZTt3QkFDM0IsS0FBSzs7SUE0QlAscUJBQUM7Q0F6Q0Q7Ozs7OztBQ0ZBO0lBR0E7S0FhQzs7Z0JBYkEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRSxFQUVSO29CQUNELFlBQVksRUFBRSxFQUViO29CQUNELE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO2lCQUNEOztJQUdELG1CQUFDO0NBYkQ7Ozs7OztBQ0hBO0lBS0E7S0FhQzs7Z0JBYkEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO29CQUNELFlBQVksRUFBRTt3QkFDYixjQUFjO3FCQUNkO29CQUNELE9BQU8sRUFBRTt3QkFDUixjQUFjO3FCQUNkO2lCQUNEOztJQUdELGtCQUFDO0NBYkQ7Ozs7OztBQ0xBO0lBSUE7S0FhQzs7Z0JBYkEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRSxFQUVSO29CQUNELFlBQVksRUFBRSxFQUViO29CQUNELE9BQU8sRUFBRTt3QkFDUixXQUFXO3FCQUNYO2lCQUNEOztJQUdELHVCQUFDO0NBYkQ7Ozs7OztBQ0pBO0lBRUE7S0FhQzs7Z0JBYkEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRSxFQUVSO29CQUNELFNBQVMsRUFBRSxFQUVWO29CQUNELE9BQU8sRUFBRSxFQUVSO2lCQUNEOztJQUdELGlCQUFDO0NBYkQ7Ozs7OztBQ0ZBO0lBVUM7S0FFQzs7OztJQUVNLGdDQUFROzs7SUFBZjtLQUVDOztnQkFkRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLGdCQUFvQzs7aUJBSXBDOzs7O0lBU0Qsb0JBQUM7Q0FmRDs7Ozs7O0FDRkE7SUFNQTtLQWVDOztnQkFmQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLGdCQUFnQjtxQkFDaEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLGFBQWE7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLGdCQUFnQjt3QkFDaEIsVUFBVTt3QkFDVixhQUFhO3FCQUNiO2lCQUNEOztJQUdELGlCQUFDO0NBZkQ7Ozs7OztBQ05BO0lBTUM7S0FFQzs7Z0JBTkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7Ozs7c0JBSkQ7Q0FFQTs7Ozs7Ozs7Ozs7Ozs7In0=