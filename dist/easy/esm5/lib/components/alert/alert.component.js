/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, HostBinding, ViewChild } from '@angular/core';
var AlertComponent = /** @class */ (function () {
    function AlertComponent(elementRef) {
        this.elementRef = elementRef;
    }
    Object.defineProperty(AlertComponent.prototype, "class", {
        get: /**
         * @return {?}
         */
        function () {
            return this.classList;
        },
        set: /**
         * @param {?} classList
         * @return {?}
         */
        function (classList) {
            if (classList.includes('close')) {
                this.classList = classList.replace(/ close|close /g, '');
                this.close = true;
                this.role = 'alertdialog';
            }
            else {
                this.classList = classList;
                this.close = false;
                this.role = 'alert';
            }
            this.ariaLabelledby = this.id = this.class.match(/\balert\S+\b/)[0];
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
    /**
     * @return {?}
     */
    AlertComponent.prototype.closeAlert = /**
     * @return {?}
     */
    function () {
        this.hostClass = 'hide';
    };
    /**
     * @return {?}
     */
    AlertComponent.prototype.trap = /**
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.focus();
    };
    AlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
                    template: "<p [attr.id]=\"id\" #message tabindex=\"-1\"><ng-content></ng-content></p>\r\n\r\n<button\t*ngIf=\"close\" (click)=\"closeAlert()\" (blur)=\"trap()\" class=\"close\"\ttype=\"button\" aria-label=\"close-alert\">X</button>\r\n",
                    styles: [":host.alert-bad,:host.alert-good,:host.alert-info,:host.alert-warn{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;color:#fff;-webkit-box-pack:justify;justify-content:space-between;padding:.5rem 1rem}:host.alert-bad{background-color:#ba000d}:host.alert-good{background-color:#087f23}:host.alert-info{background-color:#0069c0}:host.alert-warn{background-color:#ffeb3b;color:#191919}"]
                }] }
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AlertComponent.propDecorators = {
        ariaLabelledby: [{ type: HostBinding, args: ['attr.aria-labelledby',] }],
        hostClass: [{ type: HostBinding, args: ['attr.class',] }],
        role: [{ type: HostBinding, args: ['attr.role',] }],
        tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
        class: [{ type: Input }],
        message: [{ type: ViewChild, args: ['message',] }]
    };
    return AlertComponent;
}());
export { AlertComponent };
if (false) {
    /** @type {?} */
    AlertComponent.prototype.ariaLabelledby;
    /** @type {?} */
    AlertComponent.prototype.hostClass;
    /** @type {?} */
    AlertComponent.prototype.role;
    /** @type {?} */
    AlertComponent.prototype.tabindex;
    /** @type {?} */
    AlertComponent.prototype.message;
    /** @type {?} */
    AlertComponent.prototype.close;
    /** @type {?} */
    AlertComponent.prototype.id;
    /**
     * @type {?}
     * @private
     */
    AlertComponent.prototype.classList;
    /**
     * @type {?}
     * @private
     */
    AlertComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWFzeS1mcmFtZXdvcmsvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGO0lBb0NDLHdCQUEyQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztJQTFCckQsc0JBQ1csaUNBQUs7Ozs7UUFjaEI7WUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFqQkQsVUFDaUIsU0FBaUI7WUFDakMsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQzthQUMxQjtpQkFBTTtnQkFDTixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO2FBQ3BCO1lBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7OztPQUFBOzs7O0lBZU0saUNBQVE7OztJQUFmO1FBQ0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFTSxtQ0FBVTs7O0lBQWpCO1FBQ0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQzs7OztJQUVTLDZCQUFJOzs7SUFBWDtRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZDLENBQUM7O2dCQWpERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDZEQUE2RDtvQkFDdkUsNE9BQXFDOztpQkFFckM7Ozs7Z0JBTm1CLFVBQVU7OztpQ0FRNUIsV0FBVyxTQUFDLHNCQUFzQjs0QkFDbEMsV0FBVyxTQUFDLFlBQVk7dUJBQ3hCLFdBQVcsU0FBQyxXQUFXOzJCQUN2QixXQUFXLFNBQUMsZUFBZTt3QkFDM0IsS0FBSzswQkFtQkYsU0FBUyxTQUFDLFNBQVM7O0lBcUJ4QixxQkFBQztDQUFBLEFBbERELElBa0RDO1NBN0NZLGNBQWM7OztJQUMxQix3Q0FBbUU7O0lBQ25FLG1DQUFvRDs7SUFDcEQsOEJBQThDOztJQUM5QyxrQ0FBc0Q7O0lBb0JuRCxpQ0FBaUQ7O0lBRXBELCtCQUFzQjs7SUFDdEIsNEJBQWtCOzs7OztJQUVsQixtQ0FBMEI7Ozs7O0lBRVAsb0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgSG9zdEJpbmRpbmcsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2V6LWFsZXJ0LCAuYWxlcnQtYmFkLCAuYWxlcnQtZ29vZCwgLmFsZXJ0LWluZm8sIC5hbGVydC13YXJuJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2FsZXJ0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbGxlZGJ5JykgcHVibGljIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XHJcblx0QEhvc3RCaW5kaW5nKCdhdHRyLmNsYXNzJykgcHVibGljIGhvc3RDbGFzczogc3RyaW5nO1xyXG5cdEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcHVibGljIHJvbGU6IHN0cmluZztcclxuXHRASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKSBwdWJsaWMgdGFiaW5kZXg6IHN0cmluZztcclxuXHRASW5wdXQoKVxyXG5cdHB1YmxpYyBzZXQgY2xhc3MoY2xhc3NMaXN0OiBzdHJpbmcpIHtcclxuXHRcdGlmIChjbGFzc0xpc3QuaW5jbHVkZXMoJ2Nsb3NlJykpIHtcclxuXHRcdFx0dGhpcy5jbGFzc0xpc3QgPSBjbGFzc0xpc3QucmVwbGFjZSgvIGNsb3NlfGNsb3NlIC9nLCAnJyk7XHJcblx0XHRcdHRoaXMuY2xvc2UgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnJvbGUgPSAnYWxlcnRkaWFsb2cnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5jbGFzc0xpc3QgPSBjbGFzc0xpc3Q7XHJcblx0XHRcdHRoaXMuY2xvc2UgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5yb2xlID0gJ2FsZXJ0JztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmFyaWFMYWJlbGxlZGJ5ID0gdGhpcy5pZCA9IHRoaXMuY2xhc3MubWF0Y2goL1xcYmFsZXJ0XFxTK1xcYi8pWzBdO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBjbGFzcygpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuY2xhc3NMaXN0O1xyXG5cdH1cclxuXHJcbiAgICBAVmlld0NoaWxkKCdtZXNzYWdlJykgcHVibGljIG1lc3NhZ2U6IEVsZW1lbnRSZWY7XHJcblxyXG5cdHB1YmxpYyBjbG9zZTogYm9vbGVhbjtcclxuXHRwdWJsaWMgaWQ6IHN0cmluZztcclxuXHJcblx0cHJpdmF0ZSBjbGFzc0xpc3Q6IHN0cmluZztcclxuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxuXHJcblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5ob3N0Q2xhc3MgPSB0aGlzLmNsYXNzO1xyXG5cdFx0dGhpcy50YWJpbmRleCA9ICctMSc7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2xvc2VBbGVydCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuaG9zdENsYXNzID0gJ2hpZGUnO1xyXG5cdH1cclxuXHJcbiAgICBwdWJsaWMgdHJhcCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcblx0fVxyXG59XHJcbiJdfQ==