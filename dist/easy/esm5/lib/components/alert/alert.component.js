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
            }
            else {
                this.childClass = childClass;
            }
            this.hostClass = this.class;
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
    };
    AlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
                    template: "<p>\n    <ng-content></ng-content>\n</p>\n\n<button *ngIf=\"close\" class=\"close\" type=\"button\">X</button>\n",
                    styles: [":host.alert-bad,:host.alert-good,:host.alert-info,:host.alert-warn{align-content:center;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;color:#fff;-webkit-box-pack:justify;justify-content:space-between;padding:.5rem 1rem}:host.alert-bad{background-color:#ba000d}:host.alert-good{background-color:#087f23}:host.alert-info{background-color:#0069c0}:host.alert-warn{background-color:#ffeb3b;color:#191919}"]
                }] }
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return []; };
    AlertComponent.propDecorators = {
        hostClass: [{ type: HostBinding, args: ['attr.class',] }],
        class: [{ type: Input }]
    };
    return AlertComponent;
}());
export { AlertComponent };
if (false) {
    /** @type {?} */
    AlertComponent.prototype.hostClass;
    /** @type {?} */
    AlertComponent.prototype.close;
    /** @type {?} */
    AlertComponent.prototype.childClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWFzeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lBV3JFLHNCQUNXLGlDQUFLOzs7OztZQVlmLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Ozs7O1FBYnhCLFVBQ2lCLFVBQWtCO1lBQ2xDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDbEI7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7YUFDN0I7WUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDNUI7OztPQUFBOzs7O0lBY00saUNBQVE7Ozs7OztnQkFqQ2YsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw2REFBNkQ7b0JBQ3ZFLDRIQUFxQzs7aUJBSXJDOzs7Ozs0QkFFQyxXQUFXLFNBQUMsWUFBWTt3QkFDeEIsS0FBSzs7eUJBWFA7O1NBU2EsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZXotYWxlcnQsIC5hbGVydC1iYWQsIC5hbGVydC1nb29kLCAuYWxlcnQtaW5mbywgLmFsZXJ0LXdhcm4nLFxuXHR0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9hbGVydC5jb21wb25lbnQuc2Nzcydcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBIb3N0QmluZGluZygnYXR0ci5jbGFzcycpIGhvc3RDbGFzczogc3RyaW5nO1xuXHRASW5wdXQoKVxuXHRwdWJsaWMgc2V0IGNsYXNzKGNoaWxkQ2xhc3M6IHN0cmluZykge1xuXHRcdGlmIChjaGlsZENsYXNzLmluY2x1ZGVzKCdjbG9zZScpKSB7XG5cdFx0XHR0aGlzLmNoaWxkQ2xhc3MgPSBjaGlsZENsYXNzLnJlcGxhY2UoLyBjbG9zZS9nLCAnJyk7XG5cdFx0XHR0aGlzLmNsb3NlID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jaGlsZENsYXNzID0gY2hpbGRDbGFzcztcblx0XHR9XG5cblx0XHR0aGlzLmhvc3RDbGFzcyA9IHRoaXMuY2xhc3M7XG5cdH1cblxuXHRwdWJsaWMgZ2V0IGNsYXNzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuY2hpbGRDbGFzcztcblx0fVxuXG5cdHB1YmxpYyBjbG9zZTogYm9vbGVhbjtcblxuXHRwcml2YXRlIGNoaWxkQ2xhc3M6IHN0cmluZztcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cblx0fVxuXG5cdHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcblxuXHR9XG59XG4iXX0=