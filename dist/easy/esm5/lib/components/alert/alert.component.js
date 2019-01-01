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
                this.close = true;
                this.role = 'alertdialog';
            }
            else {
                this.close = false;
                this.role = 'alert';
            }
            this.classList = classList.replace(/ close|close /g, '');
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
        this.ariaLabelledby = this.id = this.class.match(/\balert\S+\b/)[0];
        this.hostClass = this.class;
        this.tabindex = '-1';
    };
    AlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
                    template: "<p [attr.id]=\"id\"><ng-content></ng-content></p>\r\n\r\n<button *ngIf=\"close\" class=\"close\" type=\"button\" aria-label=\"close-alert\" autofocus>X</button>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWFzeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXRFO0lBZ0NDO0lBQXNCLENBQUM7SUF0QnZCLHNCQUNXLGlDQUFLOzs7O1FBWWhCO1lBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3ZCLENBQUM7Ozs7O1FBZkQsVUFDaUIsU0FBaUI7WUFDakMsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7YUFDMUI7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO2FBQ3BCO1lBRUssSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7OztPQUFBOzs7O0lBYU0saUNBQVE7OztJQUFmO1FBQ08sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDOztnQkF0Q0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw2REFBNkQ7b0JBQ3ZFLGdMQUFxQzs7aUJBRXJDOzs7OztpQ0FFQyxXQUFXLFNBQUMsc0JBQXNCOzRCQUNsQyxXQUFXLFNBQUMsWUFBWTt1QkFDeEIsV0FBVyxTQUFDLFdBQVc7MkJBQ3ZCLFdBQVcsU0FBQyxlQUFlO3dCQUMzQixLQUFLOztJQTZCUCxxQkFBQztDQUFBLEFBdkNELElBdUNDO1NBbENZLGNBQWM7OztJQUMxQix3Q0FBbUU7O0lBQ25FLG1DQUFvRDs7SUFDcEQsOEJBQThDOztJQUM5QyxrQ0FBc0Q7O0lBa0J0RCwrQkFBc0I7O0lBQ3RCLDRCQUFrQjs7Ozs7SUFFbEIsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdlei1hbGVydCwgLmFsZXJ0LWJhZCwgLmFsZXJ0LWdvb2QsIC5hbGVydC1pbmZvLCAuYWxlcnQtd2FybicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2FsZXJ0LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9hbGVydC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWxsZWRieScpIHB1YmxpYyBhcmlhTGFiZWxsZWRieTogc3RyaW5nO1xyXG5cdEBIb3N0QmluZGluZygnYXR0ci5jbGFzcycpIHB1YmxpYyBob3N0Q2xhc3M6IHN0cmluZztcclxuXHRASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHB1YmxpYyByb2xlOiBzdHJpbmc7XHJcblx0QEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JykgcHVibGljIHRhYmluZGV4OiBzdHJpbmc7XHJcblx0QElucHV0KClcclxuXHRwdWJsaWMgc2V0IGNsYXNzKGNsYXNzTGlzdDogc3RyaW5nKSB7XHJcblx0XHRpZiAoY2xhc3NMaXN0LmluY2x1ZGVzKCdjbG9zZScpKSB7XHRcdFx0XHJcblx0XHRcdHRoaXMuY2xvc2UgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnJvbGUgPSAnYWxlcnRkaWFsb2cnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5jbG9zZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnJvbGUgPSAnYWxlcnQnO1xyXG5cdFx0fVxyXG5cclxuICAgICAgICB0aGlzLmNsYXNzTGlzdCA9IGNsYXNzTGlzdC5yZXBsYWNlKC8gY2xvc2V8Y2xvc2UgL2csICcnKTtcdFxyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBjbGFzcygpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuY2xhc3NMaXN0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNsb3NlOiBib29sZWFuO1xyXG5cdHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuXHRwcml2YXRlIGNsYXNzTGlzdDogc3RyaW5nO1xyXG5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hcmlhTGFiZWxsZWRieSA9IHRoaXMuaWQgPSB0aGlzLmNsYXNzLm1hdGNoKC9cXGJhbGVydFxcUytcXGIvKVswXTtcclxuXHRcdHRoaXMuaG9zdENsYXNzID0gdGhpcy5jbGFzcztcclxuXHRcdHRoaXMudGFiaW5kZXggPSAnLTEnO1xyXG5cdH1cclxufVxyXG4iXX0=