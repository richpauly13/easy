import { Component, Input, HostBinding, NgModule, Injectable, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AlertComponent {
    constructor() {
    }
    /**
     * @param {?} childClass
     * @return {?}
     */
    set class(childClass) {
        if (childClass.includes('close')) {
            this.childClass = childClass.replace(/ close/g, '');
            this.close = true;
        }
        else {
            this.childClass = childClass;
        }
        this.hostClass = this.class;
    }
    /**
     * @return {?}
     */
    get class() {
        return this.childClass;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
                template: "<p>\n    <ng-content></ng-content>\n</p>\n\n<button *ngIf=\"close\" class=\"close\" type=\"button\">X</button>\n",
                styles: [":host.alert-bad,:host.alert-good,:host.alert-info,:host.alert-warn{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;color:#fff;-webkit-box-pack:justify;justify-content:space-between;padding:.5rem 1rem}:host.alert-bad{background-color:#ba000d}:host.alert-good{background-color:#087f23}:host.alert-info{background-color:#0069c0}:host.alert-warn{background-color:#ffeb3b;color:#191919}"]
            }] }
];
/** @nocollapse */
AlertComponent.ctorParameters = () => [];
AlertComponent.propDecorators = {
    hostClass: [{ type: HostBinding, args: ['attr.class',] }],
    class: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SharedModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AlertModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ComponentsModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CoreModule {
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                providers: [],
                exports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EasyComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
EasyComponent.decorators = [
    { type: Component, args: [{
                selector: 'ez-root',
                template: "\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
EasyComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EasyModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EasyService {
    constructor() {
    }
}
EasyService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EasyService.ctorParameters = () => [];
/** @nocollapse */ EasyService.ngInjectableDef = defineInjectable({ factory: function EasyService_Factory() { return new EasyService(); }, token: EasyService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ComponentsModule, CoreModule, EasyComponent, EasyModule, EasyService, SharedModule, AlertComponent as ɵb, AlertModule as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZWFzeS9saWIvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCJuZzovL2Vhc3kvbGliL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwibmc6Ly9lYXN5L2xpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0Lm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvY29yZS9jb3JlLm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvZWFzeS5jb21wb25lbnQudHMiLCJuZzovL2Vhc3kvbGliL2Vhc3kubW9kdWxlLnRzIiwibmc6Ly9lYXN5L2xpYi9lYXN5LnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdlei1hbGVydCwgLmFsZXJ0LWJhZCwgLmFsZXJ0LWdvb2QsIC5hbGVydC1pbmZvLCAuYWxlcnQtd2FybicsXG5cdHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2FsZXJ0LmNvbXBvbmVudC5zY3NzJ1xuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QEhvc3RCaW5kaW5nKCdhdHRyLmNsYXNzJykgaG9zdENsYXNzOiBzdHJpbmc7XG5cdEBJbnB1dCgpXG5cdHB1YmxpYyBzZXQgY2xhc3MoY2hpbGRDbGFzczogc3RyaW5nKSB7XG5cdFx0aWYgKGNoaWxkQ2xhc3MuaW5jbHVkZXMoJ2Nsb3NlJykpIHtcblx0XHRcdHRoaXMuY2hpbGRDbGFzcyA9IGNoaWxkQ2xhc3MucmVwbGFjZSgvIGNsb3NlL2csICcnKTtcblx0XHRcdHRoaXMuY2xvc2UgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNoaWxkQ2xhc3MgPSBjaGlsZENsYXNzO1xuXHRcdH1cblxuXHRcdHRoaXMuaG9zdENsYXNzID0gdGhpcy5jbGFzcztcblx0fVxuXG5cdHB1YmxpYyBnZXQgY2xhc3MoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5jaGlsZENsYXNzO1xuXHR9XG5cblx0cHVibGljIGNsb3NlOiBib29sZWFuO1xuXG5cdHByaXZhdGUgY2hpbGRDbGFzczogc3RyaW5nO1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblxuXHR9XG5cblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuXG5cdH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGVcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdFNoYXJlZE1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRBbGVydENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0QWxlcnRDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydE1vZHVsZSB7XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFsZXJ0TW9kdWxlIH0gZnJvbSAnLi9hbGVydC9hbGVydC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEFsZXJ0TW9kdWxlLFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNNb2R1bGUge1xuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnZXotcm9vdCcsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2Vhc3kuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogW1xyXG5cdFx0Jy4vZWFzeS5jb21wb25lbnQuc2NzcydcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXN5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudHNNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50cy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9jb3JlL2NvcmUubW9kdWxlJztcclxuaW1wb3J0IHsgRWFzeUNvbXBvbmVudCB9IGZyb20gJy4vZWFzeS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21wb25lbnRzTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEVhc3lDb21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdENvbXBvbmVudHNNb2R1bGUsXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdFx0RWFzeUNvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVhc3lNb2R1bGUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXN5U2VydmljZSB7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQVNhLGNBQWM7Ozs7Ozs7SUFFMUIsSUFDVyxLQUFLLENBQUMsVUFBa0I7UUFDbEMsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbEI7YUFBTTtZQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQzVCOzs7O1FBRVUsS0FBSztRQUNmLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Ozs7SUFXakIsUUFBUTs7OztZQWpDZixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDZEQUE2RDtnQkFDdkUsNEhBQXFDOzthQUlyQzs7Ozs7d0JBRUMsV0FBVyxTQUFDLFlBQVk7b0JBQ3hCLEtBQUs7Ozs7Ozs7QUNYUCxNQWNhLFlBQVk7OztZQVh4QixRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFLEVBRVI7Z0JBQ0QsWUFBWSxFQUFFLEVBRWI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7YUFDRDs7Ozs7OztBQ2JELE1BZ0JhLFdBQVc7OztZQVh2QixRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLGNBQWM7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLGNBQWM7aUJBQ2Q7YUFDRDs7Ozs7OztBQ2ZELE1BZWEsZ0JBQWdCOzs7WUFYNUIsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRSxFQUVSO2dCQUNELFlBQVksRUFBRSxFQUViO2dCQUNELE9BQU8sRUFBRTtvQkFDUixXQUFXO2lCQUNYO2FBQ0Q7Ozs7Ozs7QUNkRCxNQWFhLFVBQVU7OztZQVh0QixRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFLEVBRVI7Z0JBQ0QsU0FBUyxFQUFFLEVBRVY7Z0JBQ0QsT0FBTyxFQUFFLEVBRVI7YUFDRDs7Ozs7OztBQ1pELE1BU2EsYUFBYTs7Ozs7O0lBS2xCLFFBQVE7Ozs7WUFaZixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLGdCQUFvQzs7YUFJcEM7Ozs7Ozs7OztBQ1JELE1BbUJhLFVBQVU7OztZQWJ0QixRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLGdCQUFnQjtpQkFDaEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLGFBQWE7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLGdCQUFnQjtvQkFDaEIsVUFBVTtvQkFDVixhQUFhO2lCQUNiO2FBQ0Q7Ozs7Ozs7QUNsQkQsTUFLYSxXQUFXOzs7OztZQUh2QixVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==