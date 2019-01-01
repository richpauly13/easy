/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
export class AlertComponent {
    constructor() { }
    /**
     * @param {?} classList
     * @return {?}
     */
    set class(classList) {
        if (classList.includes('close')) {
            this.close = true;
            this.role = 'alertdialog';
        }
        else {
            this.close = false;
            this.role = 'alert';
        }
        this.classList = classList.replace(/ close|close /g, '');
    }
    /**
     * @return {?}
     */
    get class() {
        return this.classList;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ariaLabelledby = this.id = this.class.match(/\balert\S+\b/)[0];
        this.hostClass = this.class;
        this.tabindex = '-1';
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
                template: "<p [attr.id]=\"id\"><ng-content></ng-content></p>\r\n\r\n<button *ngIf=\"close\" class=\"close\" type=\"button\" aria-label=\"close-alert\" autofocus>X</button>\r\n",
                styles: [":host.alert-bad,:host.alert-good,:host.alert-info,:host.alert-warn{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;color:#fff;-webkit-box-pack:justify;justify-content:space-between;padding:.5rem 1rem}:host.alert-bad{background-color:#ba000d}:host.alert-good{background-color:#087f23}:host.alert-info{background-color:#0069c0}:host.alert-warn{background-color:#ffeb3b;color:#191919}"]
            }] }
];
/** @nocollapse */
AlertComponent.ctorParameters = () => [];
AlertComponent.propDecorators = {
    ariaLabelledby: [{ type: HostBinding, args: ['attr.aria-labelledby',] }],
    hostClass: [{ type: HostBinding, args: ['attr.class',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    class: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWFzeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBT3RFLE1BQU0sT0FBTyxjQUFjO0lBMkIxQixnQkFBc0IsQ0FBQzs7Ozs7SUF0QnZCLElBQ1csS0FBSyxDQUFDLFNBQWlCO1FBQ2pDLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztTQUMxQjthQUFNO1lBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7U0FDcEI7UUFFSyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELElBQVcsS0FBSztRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7O0lBU00sUUFBUTtRQUNSLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7O1lBdENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsNkRBQTZEO2dCQUN2RSxnTEFBcUM7O2FBRXJDOzs7Ozs2QkFFQyxXQUFXLFNBQUMsc0JBQXNCO3dCQUNsQyxXQUFXLFNBQUMsWUFBWTttQkFDeEIsV0FBVyxTQUFDLFdBQVc7dUJBQ3ZCLFdBQVcsU0FBQyxlQUFlO29CQUMzQixLQUFLOzs7O0lBSk4sd0NBQW1FOztJQUNuRSxtQ0FBb0Q7O0lBQ3BELDhCQUE4Qzs7SUFDOUMsa0NBQXNEOztJQWtCdEQsK0JBQXNCOztJQUN0Qiw0QkFBa0I7Ozs7O0lBRWxCLG1DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnZXotYWxlcnQsIC5hbGVydC1iYWQsIC5hbGVydC1nb29kLCAuYWxlcnQtaW5mbywgLmFsZXJ0LXdhcm4nLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vYWxlcnQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWxhYmVsbGVkYnknKSBwdWJsaWMgYXJpYUxhYmVsbGVkYnk6IHN0cmluZztcclxuXHRASG9zdEJpbmRpbmcoJ2F0dHIuY2xhc3MnKSBwdWJsaWMgaG9zdENsYXNzOiBzdHJpbmc7XHJcblx0QEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSBwdWJsaWMgcm9sZTogc3RyaW5nO1xyXG5cdEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpIHB1YmxpYyB0YWJpbmRleDogc3RyaW5nO1xyXG5cdEBJbnB1dCgpXHJcblx0cHVibGljIHNldCBjbGFzcyhjbGFzc0xpc3Q6IHN0cmluZykge1xyXG5cdFx0aWYgKGNsYXNzTGlzdC5pbmNsdWRlcygnY2xvc2UnKSkge1x0XHRcdFxyXG5cdFx0XHR0aGlzLmNsb3NlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5yb2xlID0gJ2FsZXJ0ZGlhbG9nJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY2xvc2UgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5yb2xlID0gJ2FsZXJ0JztcclxuXHRcdH1cclxuXHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QgPSBjbGFzc0xpc3QucmVwbGFjZSgvIGNsb3NlfGNsb3NlIC9nLCAnJyk7XHRcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgY2xhc3MoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLmNsYXNzTGlzdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjbG9zZTogYm9vbGVhbjtcclxuXHRwdWJsaWMgaWQ6IHN0cmluZztcclxuXHJcblx0cHJpdmF0ZSBjbGFzc0xpc3Q6IHN0cmluZztcclxuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYXJpYUxhYmVsbGVkYnkgPSB0aGlzLmlkID0gdGhpcy5jbGFzcy5tYXRjaCgvXFxiYWxlcnRcXFMrXFxiLylbMF07XHJcblx0XHR0aGlzLmhvc3RDbGFzcyA9IHRoaXMuY2xhc3M7XHJcblx0XHR0aGlzLnRhYmluZGV4ID0gJy0xJztcclxuXHR9XHJcbn1cclxuIl19