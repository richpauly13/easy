/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    AlertComponent.prototype.onClose = /**
     * @return {?}
     */
    function () {
        this.hostClass = 'hide';
    };
    AlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
                    template: "<p [attr.id]=\"id\"><ng-content></ng-content></p>\r\n\r\n<button\r\n\t*ngIf=\"close\"\r\n\t(click)=\"onClose()\"\r\n\tclass=\"close\"\r\n\ttype=\"button\"\r\n\taria-label=\"close-alert\"\r\n\tautofocus\r\n>\r\n\tX\r\n</button>\r\n",
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
    AlertComponent.prototype.close;
    /** @type {?} */
    AlertComponent.prototype.id;
    /**
     * @type {?}
     * @private
     */
    AlertComponent.prototype.classList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWFzeS1mcmFtZXdvcmsvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUV0RTtJQWtDQztJQUFzQixDQUFDO0lBeEJ2QixzQkFDVyxpQ0FBSzs7OztRQWNoQjtZQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN2QixDQUFDOzs7OztRQWpCRCxVQUNpQixTQUFpQjtZQUNqQyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO2FBQzFCO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO2dCQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7YUFDcEI7WUFFRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckUsQ0FBQzs7O09BQUE7Ozs7SUFhTSxpQ0FBUTs7O0lBQWY7UUFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVNLGdDQUFPOzs7SUFBZDtRQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7O2dCQTNDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDZEQUE2RDtvQkFDdkUsa1BBQXFDOztpQkFFckM7Ozs7O2lDQUVDLFdBQVcsU0FBQyxzQkFBc0I7NEJBQ2xDLFdBQVcsU0FBQyxZQUFZO3VCQUN4QixXQUFXLFNBQUMsV0FBVzsyQkFDdkIsV0FBVyxTQUFDLGVBQWU7d0JBQzNCLEtBQUs7O0lBa0NQLHFCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0F2Q1ksY0FBYzs7O0lBQzFCLHdDQUFtRTs7SUFDbkUsbUNBQW9EOztJQUNwRCw4QkFBOEM7O0lBQzlDLGtDQUFzRDs7SUFvQnRELCtCQUFzQjs7SUFDdEIsNEJBQWtCOzs7OztJQUVsQixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2V6LWFsZXJ0LCAuYWxlcnQtYmFkLCAuYWxlcnQtZ29vZCwgLmFsZXJ0LWluZm8sIC5hbGVydC13YXJuJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2FsZXJ0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbGxlZGJ5JykgcHVibGljIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XHJcblx0QEhvc3RCaW5kaW5nKCdhdHRyLmNsYXNzJykgcHVibGljIGhvc3RDbGFzczogc3RyaW5nO1xyXG5cdEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcHVibGljIHJvbGU6IHN0cmluZztcclxuXHRASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKSBwdWJsaWMgdGFiaW5kZXg6IHN0cmluZztcclxuXHRASW5wdXQoKVxyXG5cdHB1YmxpYyBzZXQgY2xhc3MoY2xhc3NMaXN0OiBzdHJpbmcpIHtcclxuXHRcdGlmIChjbGFzc0xpc3QuaW5jbHVkZXMoJ2Nsb3NlJykpIHtcclxuXHRcdFx0dGhpcy5jbGFzc0xpc3QgPSBjbGFzc0xpc3QucmVwbGFjZSgvIGNsb3NlfGNsb3NlIC9nLCAnJyk7XHJcblx0XHRcdHRoaXMuY2xvc2UgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnJvbGUgPSAnYWxlcnRkaWFsb2cnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5jbGFzc0xpc3QgPSBjbGFzc0xpc3Q7XHJcblx0XHRcdHRoaXMuY2xvc2UgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5yb2xlID0gJ2FsZXJ0JztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmFyaWFMYWJlbGxlZGJ5ID0gdGhpcy5pZCA9IHRoaXMuY2xhc3MubWF0Y2goL1xcYmFsZXJ0XFxTK1xcYi8pWzBdO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBjbGFzcygpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuY2xhc3NMaXN0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNsb3NlOiBib29sZWFuO1xyXG5cdHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuXHRwcml2YXRlIGNsYXNzTGlzdDogc3RyaW5nO1xyXG5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmhvc3RDbGFzcyA9IHRoaXMuY2xhc3M7XHJcblx0XHR0aGlzLnRhYmluZGV4ID0gJy0xJztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvbkNsb3NlKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5ob3N0Q2xhc3MgPSAnaGlkZSc7XHJcblx0fVxyXG59XHJcbiJdfQ==