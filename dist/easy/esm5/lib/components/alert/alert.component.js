/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
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
export { AlertComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWFzeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXRFO0lBaUNDO0lBRUEsQ0FBQztJQXRCRCxzQkFDVyxpQ0FBSzs7OztRQVdoQjtZQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN4QixDQUFDOzs7OztRQWRELFVBQ2lCLFVBQWtCO1lBQ2xDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO2FBQzFCO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQzthQUNwQjtRQUNGLENBQUM7OztPQUFBOzs7O0lBY00saUNBQVE7OztJQUFmO1FBQ0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7O2dCQXhDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDZEQUE2RDtvQkFDdkUsZ01BQXFDOztpQkFJckM7Ozs7O2tDQUVDLFdBQVcsU0FBQyx1QkFBdUI7aUNBQ25DLFdBQVcsU0FBQyxzQkFBc0I7NEJBQ2xDLFdBQVcsU0FBQyxZQUFZO3VCQUN4QixXQUFXLFNBQUMsV0FBVzsyQkFDdkIsV0FBVyxTQUFDLGVBQWU7d0JBQzNCLEtBQUs7O0lBNEJQLHFCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0FsQ1ksY0FBYzs7O0lBQzFCLHlDQUE4RDs7SUFDOUQsd0NBQTREOztJQUM1RCxtQ0FBNkM7O0lBQzdDLDhCQUF1Qzs7SUFDdkMsa0NBQStDOztJQWlCL0MsK0JBQXNCOztJQUV0QixvQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2V6LWFsZXJ0LCAuYWxlcnQtYmFkLCAuYWxlcnQtZ29vZCwgLmFsZXJ0LWluZm8sIC5hbGVydC13YXJuJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogW1xyXG5cdFx0Jy4vYWxlcnQuY29tcG9uZW50LnNjc3MnXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRlc2NyaWJlZGJ5JykgYXJpYURlc2NyaWJlZGJ5OiBzdHJpbmc7XHJcblx0QEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWxsZWRieScpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XHJcblx0QEhvc3RCaW5kaW5nKCdhdHRyLmNsYXNzJykgaG9zdENsYXNzOiBzdHJpbmc7XHJcblx0QEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlOiBzdHJpbmc7XHJcblx0QEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JykgdGFiaW5kZXg6IHN0cmluZztcclxuXHRASW5wdXQoKVxyXG5cdHB1YmxpYyBzZXQgY2xhc3MoY2hpbGRDbGFzczogc3RyaW5nKSB7XHJcblx0XHRpZiAoY2hpbGRDbGFzcy5pbmNsdWRlcygnY2xvc2UnKSkge1xyXG5cdFx0XHR0aGlzLmNoaWxkQ2xhc3MgPSBjaGlsZENsYXNzLnJlcGxhY2UoLyBjbG9zZS9nLCAnJyk7XHJcblx0XHRcdHRoaXMuY2xvc2UgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnJvbGUgPSAnYWxlcnRkaWFsb2cnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5jaGlsZENsYXNzID0gY2hpbGRDbGFzcztcclxuXHRcdFx0dGhpcy5yb2xlID0gJ2FsZXJ0JztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgY2xhc3MoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLmNoaWxkQ2xhc3M7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2xvc2U6IGJvb2xlYW47XHJcblxyXG5cdHByaXZhdGUgY2hpbGRDbGFzczogc3RyaW5nO1xyXG5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5ob3N0Q2xhc3MgPSB0aGlzLmNsYXNzO1xyXG5cdFx0dGhpcy50YWJpbmRleCA9ICctMSc7XHJcblx0fVxyXG59XHJcbiJdfQ==