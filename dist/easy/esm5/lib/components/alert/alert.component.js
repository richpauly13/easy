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
                this.close = false;
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
    /**
     * @type {?}
     * @private
     */
    AlertComponent.prototype.childClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWFzeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXRFO0lBZ0NDO0lBQXNCLENBQUM7SUFyQnZCLHNCQUNXLGlDQUFLOzs7O1FBWWhCO1lBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBZkQsVUFDaUIsVUFBa0I7WUFDbEMsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7YUFDMUI7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQzthQUNwQjtRQUNGLENBQUM7OztPQUFBOzs7O0lBWU0saUNBQVE7OztJQUFmO1FBQ0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7O2dCQXJDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDZEQUE2RDtvQkFDdkUsZ01BQXFDOztpQkFFckM7Ozs7O2tDQUVDLFdBQVcsU0FBQyx1QkFBdUI7aUNBQ25DLFdBQVcsU0FBQyxzQkFBc0I7NEJBQ2xDLFdBQVcsU0FBQyxZQUFZO3VCQUN4QixXQUFXLFNBQUMsV0FBVzsyQkFDdkIsV0FBVyxTQUFDLGVBQWU7d0JBQzNCLEtBQUs7O0lBMkJQLHFCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FqQ1ksY0FBYzs7O0lBQzFCLHlDQUE4RDs7SUFDOUQsd0NBQTREOztJQUM1RCxtQ0FBNkM7O0lBQzdDLDhCQUF1Qzs7SUFDdkMsa0NBQStDOztJQWtCL0MsK0JBQXNCOzs7OztJQUV0QixvQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2V6LWFsZXJ0LCAuYWxlcnQtYmFkLCAuYWxlcnQtZ29vZCwgLmFsZXJ0LWluZm8sIC5hbGVydC13YXJuJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2FsZXJ0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpIGFyaWFEZXNjcmliZWRieTogc3RyaW5nO1xyXG5cdEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWxhYmVsbGVkYnknKSBhcmlhTGFiZWxsZWRieTogc3RyaW5nO1xyXG5cdEBIb3N0QmluZGluZygnYXR0ci5jbGFzcycpIGhvc3RDbGFzczogc3RyaW5nO1xyXG5cdEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZTogc3RyaW5nO1xyXG5cdEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpIHRhYmluZGV4OiBzdHJpbmc7XHJcblx0QElucHV0KClcclxuXHRwdWJsaWMgc2V0IGNsYXNzKGNoaWxkQ2xhc3M6IHN0cmluZykge1xyXG5cdFx0aWYgKGNoaWxkQ2xhc3MuaW5jbHVkZXMoJ2Nsb3NlJykpIHtcclxuXHRcdFx0dGhpcy5jaGlsZENsYXNzID0gY2hpbGRDbGFzcy5yZXBsYWNlKC8gY2xvc2UvZywgJycpO1xyXG5cdFx0XHR0aGlzLmNsb3NlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5yb2xlID0gJ2FsZXJ0ZGlhbG9nJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY2hpbGRDbGFzcyA9IGNoaWxkQ2xhc3M7XHJcblx0XHRcdHRoaXMuY2xvc2UgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5yb2xlID0gJ2FsZXJ0JztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgY2xhc3MoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLmNoaWxkQ2xhc3M7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2xvc2U6IGJvb2xlYW47XHJcblxyXG5cdHByaXZhdGUgY2hpbGRDbGFzczogc3RyaW5nO1xyXG5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmhvc3RDbGFzcyA9IHRoaXMuY2xhc3M7XHJcblx0XHR0aGlzLnRhYmluZGV4ID0gJy0xJztcclxuXHR9XHJcbn1cclxuIl19