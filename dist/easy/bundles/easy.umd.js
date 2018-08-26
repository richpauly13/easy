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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Vhc3kvbGliL2Vhc3kuc2VydmljZS50cyIsIm5nOi8vZWFzeS9saWIvZWFzeS5jb21wb25lbnQudHMiLCJuZzovL2Vhc3kvbGliL2Vhc3kubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRWFzeVNlcnZpY2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdlei1yb290Jyxcblx0dGVtcGxhdGU6IGBgLFxuXHRzdHlsZXM6IFtcblxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEVhc3lDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cblx0fVxuXG5cdHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcblxuXHR9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFYXN5Q29tcG9uZW50IH0gZnJvbSAnLi9lYXN5LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRFYXN5Q29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRFYXN5Q29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRWFzeU1vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU1DO1NBRUM7O29CQU5EQSxhQUFVLFNBQUM7d0JBQ1gsVUFBVSxFQUFFLE1BQU07cUJBQ2xCOzs7OzswQkFKRDs7Ozs7OztBQ0FBOzs7Ozs7UUFjUSxnQ0FBUTs7Ozs7O29CQVpmQyxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSxFQUFFO3FCQUlaOzs7OzRCQVJEOzs7Ozs7O0FDQUE7Ozs7b0JBSUNDLFdBQVEsU0FBQzt3QkFDVCxPQUFPLEVBQUUsRUFFUjt3QkFDRCxZQUFZLEVBQUU7NEJBQ2IsYUFBYTt5QkFDYjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1IsYUFBYTt5QkFDYjtxQkFDRDs7eUJBZEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=