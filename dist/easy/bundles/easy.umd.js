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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Vhc3kvbGliL2NvcmUvY29yZS5tb2R1bGUudHMiLCJuZzovL2Vhc3kvbGliL2Vhc3kuY29tcG9uZW50LnRzIiwibmc6Ly9lYXN5L2xpYi9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvZWFzeS5tb2R1bGUudHMiLCJuZzovL2Vhc3kvbGliL2Vhc3kuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cblx0XSxcblx0ZXhwb3J0czogW1xuXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2V6LXJvb3QnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9lYXN5LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFtcclxuXHRcdCcuL2Vhc3kuY29tcG9uZW50LnNjc3MnXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWFzeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXG5cdF0sXG5cdGV4cG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuL2NvcmUvY29yZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBFYXN5Q29tcG9uZW50IH0gZnJvbSAnLi9lYXN5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdFx0U2hhcmVkTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEVhc3lDb21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XHRFYXN5Q29tcG9uZW50LFxyXG5cdFx0U2hhcmVkTW9kdWxlXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWFzeU1vZHVsZSB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVhc3lTZXJ2aWNlIHtcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblxyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmdNb2R1bGUiLCJDb21wb25lbnQiLCJDb21tb25Nb2R1bGUiLCJJbmplY3RhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7b0JBRUNBLFdBQVEsU0FBQzt3QkFDVCxPQUFPLEVBQUUsRUFFUjt3QkFDRCxTQUFTLEVBQUUsRUFFVjt3QkFDRCxPQUFPLEVBQUUsRUFFUjtxQkFDRDs7eUJBWkQ7Ozs7Ozs7QUNBQTs7Ozs7O1FBY1EsZ0NBQVE7Ozs7OztvQkFaZkMsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixnQkFBb0M7O3FCQUlwQzs7Ozs0QkFSRDs7Ozs7OztBQ0FBOzs7O29CQUdDRCxXQUFRLFNBQUM7d0JBQ1QsT0FBTyxFQUFFOzRCQUNSRSxtQkFBWTt5QkFDWjt3QkFDRCxZQUFZLEVBQUUsRUFFYjt3QkFDRCxPQUFPLEVBQUU7NEJBQ0ZBLG1CQUFZO3lCQUNsQjtxQkFDRDs7MkJBYkQ7Ozs7Ozs7QUNBQTs7OztvQkFNQ0YsV0FBUSxTQUFDO3dCQUNULE9BQU8sRUFBRTs0QkFDUixVQUFVOzRCQUNWLFlBQVk7eUJBQ1o7d0JBQ0QsWUFBWSxFQUFFOzRCQUNiLGFBQWE7eUJBQ2I7d0JBQ0QsT0FBTyxFQUFFOzRCQUNSLFVBQVU7NEJBQ1YsYUFBYTs0QkFDYixZQUFZO3lCQUNaO3FCQUNEOzt5QkFuQkQ7Ozs7Ozs7QUNBQTs7OztvQkFFQ0csYUFBVSxTQUFDO3dCQUNYLFVBQVUsRUFBRSxNQUFNO3FCQUNsQjs7Ozs7MEJBSkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==