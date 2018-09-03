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
            this.role = 'alertdialog';
        }
        else {
            this.childClass = childClass;
            this.role = 'alert';
        }
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
        this.hostClass = this.class;
        this.tabindex = '-1';
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
                template: "<p [id]=\"\">\n    <ng-content></ng-content>\n</p>\n\n<button *ngIf=\"close\" class=\"close\" type=\"button\" aria-label=\"close alert\" [id]=\"\"  autofocus>X</button>\n",
                styles: [":host.alert-bad,:host.alert-good,:host.alert-info,:host.alert-warn{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;color:#fff;-webkit-box-pack:justify;justify-content:space-between;padding:.5rem 1rem}:host.alert-bad{background-color:#ba000d}:host.alert-good{background-color:#087f23}:host.alert-info{background-color:#0069c0}:host.alert-warn{background-color:#ffeb3b;color:#191919}"]
            }] }
];
/** @nocollapse */
AlertComponent.ctorParameters = () => [];
AlertComponent.propDecorators = {
    ariaDescribedby: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
    ariaLabelledby: [{ type: HostBinding, args: ['attr.aria-labelledby',] }],
    hostClass: [{ type: HostBinding, args: ['attr.class',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZWFzeS9saWIvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCJuZzovL2Vhc3kvbGliL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwibmc6Ly9lYXN5L2xpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0Lm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvY29yZS9jb3JlLm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvZWFzeS5jb21wb25lbnQudHMiLCJuZzovL2Vhc3kvbGliL2Vhc3kubW9kdWxlLnRzIiwibmc6Ly9lYXN5L2xpYi9lYXN5LnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdlei1hbGVydCwgLmFsZXJ0LWJhZCwgLmFsZXJ0LWdvb2QsIC5hbGVydC1pbmZvLCAuYWxlcnQtd2FybicsXG5cdHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2FsZXJ0LmNvbXBvbmVudC5zY3NzJ1xuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKSBhcmlhRGVzY3JpYmVkYnk6IHN0cmluZztcblx0QEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWxsZWRieScpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XG5cdEBIb3N0QmluZGluZygnYXR0ci5jbGFzcycpIGhvc3RDbGFzczogc3RyaW5nO1xuXHRASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGU6IHN0cmluZztcblx0QEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JykgdGFiaW5kZXg6IHN0cmluZztcblx0QElucHV0KClcblx0cHVibGljIHNldCBjbGFzcyhjaGlsZENsYXNzOiBzdHJpbmcpIHtcblx0XHRpZiAoY2hpbGRDbGFzcy5pbmNsdWRlcygnY2xvc2UnKSkge1xuXHRcdFx0dGhpcy5jaGlsZENsYXNzID0gY2hpbGRDbGFzcy5yZXBsYWNlKC8gY2xvc2UvZywgJycpO1xuXHRcdFx0dGhpcy5jbG9zZSA9IHRydWU7XG5cdFx0XHR0aGlzLnJvbGUgPSAnYWxlcnRkaWFsb2cnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNoaWxkQ2xhc3MgPSBjaGlsZENsYXNzO1xuXHRcdFx0dGhpcy5yb2xlID0gJ2FsZXJ0Jztcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0IGNsYXNzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuY2hpbGRDbGFzcztcblx0fVxuXG5cdHB1YmxpYyBjbG9zZTogYm9vbGVhbjtcblxuXHRwcml2YXRlIGNoaWxkQ2xhc3M6IHN0cmluZztcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cblx0fVxuXG5cdHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmhvc3RDbGFzcyA9IHRoaXMuY2xhc3M7XG5cdFx0dGhpcy50YWJpbmRleCA9ICctMSc7XG5cdH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGVcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdFNoYXJlZE1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRBbGVydENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0QWxlcnRDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydE1vZHVsZSB7XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFsZXJ0TW9kdWxlIH0gZnJvbSAnLi9hbGVydC9hbGVydC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEFsZXJ0TW9kdWxlLFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNNb2R1bGUge1xuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnZXotcm9vdCcsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2Vhc3kuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogW1xyXG5cdFx0Jy4vZWFzeS5jb21wb25lbnQuc2NzcydcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXN5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudHNNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50cy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9jb3JlL2NvcmUubW9kdWxlJztcclxuaW1wb3J0IHsgRWFzeUNvbXBvbmVudCB9IGZyb20gJy4vZWFzeS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21wb25lbnRzTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEVhc3lDb21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdENvbXBvbmVudHNNb2R1bGUsXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdFx0RWFzeUNvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVhc3lNb2R1bGUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXN5U2VydmljZSB7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFw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