(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('easy', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.easy = {}),global.ng.core,global.ng.common));
}(this, (function (exports,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CoreModule = /** @class */ (function () {
        function CoreModule() {
        }
        CoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        providers: [],
                        exports: []
                    },] }
        ];
        return CoreModule;
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
                        template: "\r\n",
                        styles: [""]
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
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        SharedModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [],
                        exports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return SharedModule;
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
                        imports: [
                            CoreModule,
                            SharedModule
                        ],
                        declarations: [
                            EasyComponent
                        ],
                        exports: [
                            CoreModule,
                            EasyComponent,
                            SharedModule
                        ]
                    },] }
        ];
        return EasyModule;
    }());

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.CoreModule = CoreModule;
    exports.EasyComponent = EasyComponent;
    exports.EasyModule = EasyModule;
    exports.EasyService = EasyService;
    exports.SharedModule = SharedModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Vhc3kvbGliL2NvcmUvY29yZS5tb2R1bGUudHMiLCJuZzovL2Vhc3kvbGliL2Vhc3kuY29tcG9uZW50LnRzIiwibmc6Ly9lYXN5L2xpYi9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvZWFzeS5tb2R1bGUudHMiLCJuZzovL2Vhc3kvbGliL2Vhc3kuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cblx0XSxcblx0ZXhwb3J0czogW1xuXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2V6LXJvb3QnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9lYXN5LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFtcclxuXHRcdCcuL2Vhc3kuY29tcG9uZW50LnNjc3MnXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWFzeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vY29yZS9jb3JlLm1vZHVsZSc7XHJcbmltcG9ydCB7IEVhc3lDb21wb25lbnQgfSBmcm9tICcuL2Vhc3kuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XHRTaGFyZWRNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0RWFzeUNvbXBvbmVudFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRcdEVhc3lDb21wb25lbnQsXHJcblx0XHRTaGFyZWRNb2R1bGVcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXN5TW9kdWxlIHtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRWFzeVNlcnZpY2Uge1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZ01vZHVsZSIsIkNvbXBvbmVudCIsIkNvbW1vbk1vZHVsZSIsIkluamVjdGFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztvQkFFQ0EsV0FBUSxTQUFDO3dCQUNULE9BQU8sRUFBRSxFQUVSO3dCQUNELFNBQVMsRUFBRSxFQUVWO3dCQUNELE9BQU8sRUFBRSxFQUVSO3FCQUNEOzt5QkFaRDs7Ozs7OztBQ0FBOzs7Ozs7UUFjUSxnQ0FBUTs7Ozs7O29CQVpmQyxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLGdCQUFvQzs7cUJBSXBDOzs7OzRCQVJEOzs7Ozs7O0FDQUE7Ozs7b0JBR0NELFdBQVEsU0FBQzt3QkFDVCxPQUFPLEVBQUU7NEJBQ1JFLG1CQUFZO3lCQUNaO3dCQUNELFlBQVksRUFBRSxFQUViO3dCQUNELE9BQU8sRUFBRTs0QkFDUkEsbUJBQVk7eUJBQ1o7cUJBQ0Q7OzJCQWJEOzs7Ozs7O0FDQUE7Ozs7b0JBTUNGLFdBQVEsU0FBQzt3QkFDVCxPQUFPLEVBQUU7NEJBQ1IsVUFBVTs0QkFDVixZQUFZO3lCQUNaO3dCQUNELFlBQVksRUFBRTs0QkFDYixhQUFhO3lCQUNiO3dCQUNELE9BQU8sRUFBRTs0QkFDUixVQUFVOzRCQUNWLGFBQWE7NEJBQ2IsWUFBWTt5QkFDWjtxQkFDRDs7eUJBbkJEOzs7Ozs7O0FDQUE7Ozs7b0JBRUNHLGFBQVUsU0FBQzt3QkFDWCxVQUFVLEVBQUUsTUFBTTtxQkFDbEI7Ozs7OzBCQUpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=