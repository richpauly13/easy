/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
export class AlertComponent {
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
                template: "<p [id]=\"\">\r\n    <ng-content></ng-content>\r\n</p>\r\n\r\n<button *ngIf=\"close\" class=\"close\" type=\"button\" aria-label=\"close alert\" [id]=\"\"  autofocus>X</button>\r\n",
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
if (false) {
    /** @type {?} */
    AlertComponent.prototype.ariaDescribedby;
    /** @type {?} */
    AlertComponent.prototype.ariaLabelledby;
    /** @type {?} */
    AlertComponent.prototype.hostClass;
    /** @type {?} */
    AlertComponent.prototype.role;
    /** @type {?} */
    AlertComponent.prototype.tabindex;
    /** @type {?} */
    AlertComponent.prototype.close;
    /** @type {?} */
    AlertComponent.prototype.childClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWFzeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBU3RFLE1BQU0sT0FBTyxjQUFjO0lBMEIxQjtJQUVBLENBQUM7Ozs7O0lBdEJELElBQ1csS0FBSyxDQUFDLFVBQWtCO1FBQ2xDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1NBQzFCO2FBQU07WUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUNwQjtJQUNGLENBQUM7Ozs7SUFFRCxJQUFXLEtBQUs7UUFDZixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7OztJQVVNLFFBQVE7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7O1lBeENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsNkRBQTZEO2dCQUN2RSxnTUFBcUM7O2FBSXJDOzs7Ozs4QkFFQyxXQUFXLFNBQUMsdUJBQXVCOzZCQUNuQyxXQUFXLFNBQUMsc0JBQXNCO3dCQUNsQyxXQUFXLFNBQUMsWUFBWTttQkFDeEIsV0FBVyxTQUFDLFdBQVc7dUJBQ3ZCLFdBQVcsU0FBQyxlQUFlO29CQUMzQixLQUFLOzs7O0lBTE4seUNBQThEOztJQUM5RCx3Q0FBNEQ7O0lBQzVELG1DQUE2Qzs7SUFDN0MsOEJBQXVDOztJQUN2QyxrQ0FBK0M7O0lBaUIvQywrQkFBc0I7O0lBRXRCLG9DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnZXotYWxlcnQsIC5hbGVydC1iYWQsIC5hbGVydC1nb29kLCAuYWxlcnQtaW5mbywgLmFsZXJ0LXdhcm4nLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnLi9hbGVydC5jb21wb25lbnQuc2NzcydcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKSBhcmlhRGVzY3JpYmVkYnk6IHN0cmluZztcclxuXHRASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbGxlZGJ5JykgYXJpYUxhYmVsbGVkYnk6IHN0cmluZztcclxuXHRASG9zdEJpbmRpbmcoJ2F0dHIuY2xhc3MnKSBob3N0Q2xhc3M6IHN0cmluZztcclxuXHRASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGU6IHN0cmluZztcclxuXHRASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKSB0YWJpbmRleDogc3RyaW5nO1xyXG5cdEBJbnB1dCgpXHJcblx0cHVibGljIHNldCBjbGFzcyhjaGlsZENsYXNzOiBzdHJpbmcpIHtcclxuXHRcdGlmIChjaGlsZENsYXNzLmluY2x1ZGVzKCdjbG9zZScpKSB7XHJcblx0XHRcdHRoaXMuY2hpbGRDbGFzcyA9IGNoaWxkQ2xhc3MucmVwbGFjZSgvIGNsb3NlL2csICcnKTtcclxuXHRcdFx0dGhpcy5jbG9zZSA9IHRydWU7XHJcblx0XHRcdHRoaXMucm9sZSA9ICdhbGVydGRpYWxvZyc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmNoaWxkQ2xhc3MgPSBjaGlsZENsYXNzO1xyXG5cdFx0XHR0aGlzLnJvbGUgPSAnYWxlcnQnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBjbGFzcygpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGRDbGFzcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjbG9zZTogYm9vbGVhbjtcclxuXHJcblx0cHJpdmF0ZSBjaGlsZENsYXNzOiBzdHJpbmc7XHJcblxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmhvc3RDbGFzcyA9IHRoaXMuY2xhc3M7XHJcblx0XHR0aGlzLnRhYmluZGV4ID0gJy0xJztcclxuXHR9XHJcbn1cclxuIl19