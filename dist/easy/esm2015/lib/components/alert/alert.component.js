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
        this.hostClass = this.class;
        this.tabindex = '-1';
    }
    /**
     * @return {?}
     */
    onClose() {
        this.hostClass = 'hide';
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
                template: "<p [attr.id]=\"id\"><ng-content></ng-content></p>\r\n\r\n<button\r\n\t*ngIf=\"close\"\r\n\t(click)=\"onClose()\"\r\n\tclass=\"close\"\r\n\ttype=\"button\"\r\n\taria-label=\"close-alert\"\r\n\tautofocus\r\n>\r\n\tX\r\n</button>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWFzeS1mcmFtZXdvcmsvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU90RSxNQUFNLE9BQU8sY0FBYztJQTZCMUIsZ0JBQXNCLENBQUM7Ozs7O0lBeEJ2QixJQUNXLEtBQUssQ0FBQyxTQUFpQjtRQUNqQyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1NBQzFCO2FBQU07WUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUNwQjtRQUVELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7O0lBRUQsSUFBVyxLQUFLO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFTTSxRQUFRO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFTSxPQUFPO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQzs7O1lBM0NELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsNkRBQTZEO2dCQUN2RSxrUEFBcUM7O2FBRXJDOzs7Ozs2QkFFQyxXQUFXLFNBQUMsc0JBQXNCO3dCQUNsQyxXQUFXLFNBQUMsWUFBWTttQkFDeEIsV0FBVyxTQUFDLFdBQVc7dUJBQ3ZCLFdBQVcsU0FBQyxlQUFlO29CQUMzQixLQUFLOzs7O0lBSk4sd0NBQW1FOztJQUNuRSxtQ0FBb0Q7O0lBQ3BELDhCQUE4Qzs7SUFDOUMsa0NBQXNEOztJQW9CdEQsK0JBQXNCOztJQUN0Qiw0QkFBa0I7Ozs7O0lBRWxCLG1DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnZXotYWxlcnQsIC5hbGVydC1iYWQsIC5hbGVydC1nb29kLCAuYWxlcnQtaW5mbywgLmFsZXJ0LXdhcm4nLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vYWxlcnQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWxhYmVsbGVkYnknKSBwdWJsaWMgYXJpYUxhYmVsbGVkYnk6IHN0cmluZztcclxuXHRASG9zdEJpbmRpbmcoJ2F0dHIuY2xhc3MnKSBwdWJsaWMgaG9zdENsYXNzOiBzdHJpbmc7XHJcblx0QEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSBwdWJsaWMgcm9sZTogc3RyaW5nO1xyXG5cdEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpIHB1YmxpYyB0YWJpbmRleDogc3RyaW5nO1xyXG5cdEBJbnB1dCgpXHJcblx0cHVibGljIHNldCBjbGFzcyhjbGFzc0xpc3Q6IHN0cmluZykge1xyXG5cdFx0aWYgKGNsYXNzTGlzdC5pbmNsdWRlcygnY2xvc2UnKSkge1xyXG5cdFx0XHR0aGlzLmNsYXNzTGlzdCA9IGNsYXNzTGlzdC5yZXBsYWNlKC8gY2xvc2V8Y2xvc2UgL2csICcnKTtcclxuXHRcdFx0dGhpcy5jbG9zZSA9IHRydWU7XHJcblx0XHRcdHRoaXMucm9sZSA9ICdhbGVydGRpYWxvZyc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmNsYXNzTGlzdCA9IGNsYXNzTGlzdDtcclxuXHRcdFx0dGhpcy5jbG9zZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnJvbGUgPSAnYWxlcnQnO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYXJpYUxhYmVsbGVkYnkgPSB0aGlzLmlkID0gdGhpcy5jbGFzcy5tYXRjaCgvXFxiYWxlcnRcXFMrXFxiLylbMF07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGNsYXNzKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5jbGFzc0xpc3Q7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2xvc2U6IGJvb2xlYW47XHJcblx0cHVibGljIGlkOiBzdHJpbmc7XHJcblxyXG5cdHByaXZhdGUgY2xhc3NMaXN0OiBzdHJpbmc7XHJcblxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuaG9zdENsYXNzID0gdGhpcy5jbGFzcztcclxuXHRcdHRoaXMudGFiaW5kZXggPSAnLTEnO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG9uQ2xvc2UoKTogdm9pZCB7XHJcblx0XHR0aGlzLmhvc3RDbGFzcyA9ICdoaWRlJztcclxuXHR9XHJcbn1cclxuIl19