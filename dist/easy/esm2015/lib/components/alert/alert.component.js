/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
if (false) {
    /** @type {?} */
    AlertComponent.prototype.hostClass;
    /** @type {?} */
    AlertComponent.prototype.close;
    /** @type {?} */
    AlertComponent.prototype.childClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWFzeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3RFLE1BQU0sT0FBTyxjQUFjOzs7Ozs7O0lBRTFCLElBQ1csS0FBSyxDQUFDLFVBQWtCO1FBQ2xDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO2FBQU07WUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUM3QjtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1Qjs7OztRQUVVLEtBQUs7UUFDZixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7Ozs7O0lBV2pCLFFBQVE7Ozs7WUFqQ2YsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw2REFBNkQ7Z0JBQ3ZFLDRIQUFxQzs7YUFJckM7Ozs7O3dCQUVDLFdBQVcsU0FBQyxZQUFZO29CQUN4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdlei1hbGVydCwgLmFsZXJ0LWJhZCwgLmFsZXJ0LWdvb2QsIC5hbGVydC1pbmZvLCAuYWxlcnQtd2FybicsXG5cdHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2FsZXJ0LmNvbXBvbmVudC5zY3NzJ1xuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QEhvc3RCaW5kaW5nKCdhdHRyLmNsYXNzJykgaG9zdENsYXNzOiBzdHJpbmc7XG5cdEBJbnB1dCgpXG5cdHB1YmxpYyBzZXQgY2xhc3MoY2hpbGRDbGFzczogc3RyaW5nKSB7XG5cdFx0aWYgKGNoaWxkQ2xhc3MuaW5jbHVkZXMoJ2Nsb3NlJykpIHtcblx0XHRcdHRoaXMuY2hpbGRDbGFzcyA9IGNoaWxkQ2xhc3MucmVwbGFjZSgvIGNsb3NlL2csICcnKTtcblx0XHRcdHRoaXMuY2xvc2UgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNoaWxkQ2xhc3MgPSBjaGlsZENsYXNzO1xuXHRcdH1cblxuXHRcdHRoaXMuaG9zdENsYXNzID0gdGhpcy5jbGFzcztcblx0fVxuXG5cdHB1YmxpYyBnZXQgY2xhc3MoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5jaGlsZENsYXNzO1xuXHR9XG5cblx0cHVibGljIGNsb3NlOiBib29sZWFuO1xuXG5cdHByaXZhdGUgY2hpbGRDbGFzczogc3RyaW5nO1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblxuXHR9XG5cblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuXG5cdH1cbn1cbiJdfQ==