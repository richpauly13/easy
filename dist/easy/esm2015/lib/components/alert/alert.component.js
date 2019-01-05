/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, HostBinding, ViewChild } from '@angular/core';
export class AlertComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
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
    closeAlert() {
        this.hostClass = 'hide';
    }
    /**
     * @return {?}
     */
    trap() {
        this.elementRef.nativeElement.focus();
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
                template: "<p [attr.id]=\"id\" #message tabindex=\"-1\"><ng-content></ng-content></p>\r\n\r\n<button\r\n\t*ngIf=\"close\"\r\n\t(click)=\"closeAlert()\"\r\n\t(blur)=\"trap()\"\r\n\tclass=\"close\"\r\n\ttype=\"button\"\r\n\taria-label=\"close-alert\"\r\n>\r\n\tX\r\n</button>\r\n",
                styles: [":host.alert-bad,:host.alert-good,:host.alert-info,:host.alert-warn{align-content:center;align-items:center;display:flex;justify-content:flex-start;color:#fff;justify-content:space-between;padding:.5rem 1rem}:host.alert-bad{background-color:#ba000d}:host.alert-good{background-color:#087f23}:host.alert-info{background-color:#0069c0}:host.alert-warn{background-color:#ffeb3b;color:#191919}"]
            }] }
];
/** @nocollapse */
AlertComponent.ctorParameters = () => [
    { type: ElementRef }
];
AlertComponent.propDecorators = {
    ariaLabelledby: [{ type: HostBinding, args: ['attr.aria-labelledby',] }],
    hostClass: [{ type: HostBinding, args: ['attr.class',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    class: [{ type: Input }],
    message: [{ type: ViewChild, args: ['message',] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWFzeS1mcmFtZXdvcmsvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzdGLE1BQU0sT0FBTyxjQUFjOzs7O0lBK0IxQixZQUEyQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQzs7Ozs7SUExQnJELElBQ1csS0FBSyxDQUFDLFNBQWlCO1FBQ2pDLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7U0FDMUI7YUFBTTtZQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7SUFFRCxJQUFXLEtBQUs7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7OztJQVdNLFFBQVE7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVNLFVBQVU7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQzs7OztJQUVNLElBQUk7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7WUFqREQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw2REFBNkQ7Z0JBQ3ZFLHNSQUFxQzs7YUFFckM7Ozs7WUFObUIsVUFBVTs7OzZCQVE1QixXQUFXLFNBQUMsc0JBQXNCO3dCQUNsQyxXQUFXLFNBQUMsWUFBWTttQkFDeEIsV0FBVyxTQUFDLFdBQVc7dUJBQ3ZCLFdBQVcsU0FBQyxlQUFlO29CQUMzQixLQUFLO3NCQW1CTCxTQUFTLFNBQUMsU0FBUzs7OztJQXZCcEIsd0NBQW1FOztJQUNuRSxtQ0FBb0Q7O0lBQ3BELDhCQUE4Qzs7SUFDOUMsa0NBQXNEOztJQW9CdEQsaUNBQWlEOztJQUVqRCwrQkFBc0I7O0lBQ3RCLDRCQUFrQjs7Ozs7SUFFbEIsbUNBQTBCOzs7OztJQUVQLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIEhvc3RCaW5kaW5nLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdlei1hbGVydCwgLmFsZXJ0LWJhZCwgLmFsZXJ0LWdvb2QsIC5hbGVydC1pbmZvLCAuYWxlcnQtd2FybicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2FsZXJ0LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9hbGVydC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWxsZWRieScpIHB1YmxpYyBhcmlhTGFiZWxsZWRieTogc3RyaW5nO1xyXG5cdEBIb3N0QmluZGluZygnYXR0ci5jbGFzcycpIHB1YmxpYyBob3N0Q2xhc3M6IHN0cmluZztcclxuXHRASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHB1YmxpYyByb2xlOiBzdHJpbmc7XHJcblx0QEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JykgcHVibGljIHRhYmluZGV4OiBzdHJpbmc7XHJcblx0QElucHV0KClcclxuXHRwdWJsaWMgc2V0IGNsYXNzKGNsYXNzTGlzdDogc3RyaW5nKSB7XHJcblx0XHRpZiAoY2xhc3NMaXN0LmluY2x1ZGVzKCdjbG9zZScpKSB7XHJcblx0XHRcdHRoaXMuY2xhc3NMaXN0ID0gY2xhc3NMaXN0LnJlcGxhY2UoLyBjbG9zZXxjbG9zZSAvZywgJycpO1xyXG5cdFx0XHR0aGlzLmNsb3NlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5yb2xlID0gJ2FsZXJ0ZGlhbG9nJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY2xhc3NMaXN0ID0gY2xhc3NMaXN0O1xyXG5cdFx0XHR0aGlzLmNsb3NlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMucm9sZSA9ICdhbGVydCc7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5hcmlhTGFiZWxsZWRieSA9IHRoaXMuaWQgPSB0aGlzLmNsYXNzLm1hdGNoKC9cXGJhbGVydFxcUytcXGIvKVswXTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgY2xhc3MoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLmNsYXNzTGlzdDtcclxuXHR9XHJcblxyXG5cdEBWaWV3Q2hpbGQoJ21lc3NhZ2UnKSBwdWJsaWMgbWVzc2FnZTogRWxlbWVudFJlZjtcclxuXHJcblx0cHVibGljIGNsb3NlOiBib29sZWFuO1xyXG5cdHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuXHRwcml2YXRlIGNsYXNzTGlzdDogc3RyaW5nO1xyXG5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmhvc3RDbGFzcyA9IHRoaXMuY2xhc3M7XHJcblx0XHR0aGlzLnRhYmluZGV4ID0gJy0xJztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjbG9zZUFsZXJ0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5ob3N0Q2xhc3MgPSAnaGlkZSc7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdHJhcCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcblx0fVxyXG59XHJcbiJdfQ==