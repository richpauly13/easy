(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('easy', ['exports', '@angular/core'], factory) :
    (factory((global.easy = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EasyService = /** @class */ (function () {
        function EasyService() {
        }
        EasyService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EasyService.ctorParameters = function () { return []; };
        /** @nocollapse */ EasyService.ngInjectableDef = i0.defineInjectable({ factory: function EasyService_Factory() { return new EasyService(); }, token: EasyService, providedIn: "root" });
        return EasyService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EasyComponent = /** @class */ (function () {
        function EasyComponent() {
        }
        /**
         * @return {?}
         */
        EasyComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        EasyComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ez-root',
                        template: ""
                    }] }
        ];
        /** @nocollapse */
        EasyComponent.ctorParameters = function () { return []; };
        return EasyComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EasyModule = /** @class */ (function () {
        function EasyModule() {
        }
        EasyModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [
                            EasyComponent
                        ],
                        exports: [
                            EasyComponent
                        ]
                    },] }
        ];
        return EasyModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.EasyService = EasyService;
    exports.EasyComponent = EasyComponent;
    exports.EasyModule = EasyModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Vhc3kvbGliL2Vhc3kuc2VydmljZS50cyIsIm5nOi8vZWFzeS9saWIvZWFzeS5jb21wb25lbnQudHMiLCJuZzovL2Vhc3kvbGliL2Vhc3kubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVhc3lTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2V6LXJvb3QnLFxyXG5cdHRlbXBsYXRlOiBgYCxcclxuXHRzdHlsZXM6IFtcclxuXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWFzeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBFYXN5Q29tcG9uZW50IH0gZnJvbSAnLi9lYXN5LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEVhc3lDb21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdEVhc3lDb21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXN5TW9kdWxlIHtcclxuXHJcbn1cclxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBTUM7U0FFQzs7b0JBTkRBLGFBQVUsU0FBQzt3QkFDWCxVQUFVLEVBQUUsTUFBTTtxQkFDbEI7Ozs7OzBCQUpEOzs7Ozs7O0FDQUE7Ozs7OztRQWNRLGdDQUFROzs7Ozs7b0JBWmZDLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLEVBQUU7cUJBSVo7Ozs7NEJBUkQ7Ozs7Ozs7QUNBQTs7OztvQkFJQ0MsV0FBUSxTQUFDO3dCQUNULE9BQU8sRUFBRSxFQUVSO3dCQUNELFlBQVksRUFBRTs0QkFDYixhQUFhO3lCQUNiO3dCQUNELE9BQU8sRUFBRTs0QkFDUixhQUFhO3lCQUNiO3FCQUNEOzt5QkFkRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==