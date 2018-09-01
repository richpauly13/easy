(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('easy', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.easy = {}),global.ng.core,global.ng.common));
}(this, (function (exports,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AlertComponent = /** @class */ (function () {
        function AlertComponent() {
        }
        /**
         * @return {?}
         */
        AlertComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        AlertComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ez-alert',
                        template: "\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        AlertComponent.ctorParameters = function () { return []; };
        return AlertComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        AlertModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [
                            AlertComponent
                        ],
                        exports: [
                            AlertComponent
                        ]
                    },] }
        ];
        return AlertModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ComponentsModule = /** @class */ (function () {
        function ComponentsModule() {
        }
        ComponentsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            AlertModule
                        ],
                        declarations: [],
                        exports: [
                            AlertModule
                        ]
                    },] }
        ];
        return ComponentsModule;
    }());

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
                            ComponentsModule,
                            CoreModule,
                            SharedModule
                        ],
                        declarations: [
                            EasyComponent
                        ],
                        exports: [
                            ComponentsModule,
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

    exports.ComponentsModule = ComponentsModule;
    exports.CoreModule = CoreModule;
    exports.EasyComponent = EasyComponent;
    exports.EasyModule = EasyModule;
    exports.EasyService = EasyService;
    exports.SharedModule = SharedModule;
    exports.ɵb = AlertComponent;
    exports.ɵa = AlertModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Vhc3kvbGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9lYXN5L2xpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0Lm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvY29yZS9jb3JlLm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvZWFzeS5jb21wb25lbnQudHMiLCJuZzovL2Vhc3kvbGliL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwibmc6Ly9lYXN5L2xpYi9lYXN5Lm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvZWFzeS5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2V6LWFsZXJ0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL2FsZXJ0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vYWxlcnQuY29tcG9uZW50LnNjc3MnXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7IH1cblxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG5cblx0fVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWxlcnRDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRBbGVydENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0QWxlcnRDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydE1vZHVsZSB7XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFsZXJ0TW9kdWxlIH0gZnJvbSAnLi9hbGVydC9hbGVydC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0QWxlcnRNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEFsZXJ0TW9kdWxlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50c01vZHVsZSB7XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdlei1yb290JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vZWFzeS5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnLi9lYXN5LmNvbXBvbmVudC5zY3NzJ1xyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVhc3lDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnRzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudHMubW9kdWxlJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vY29yZS9jb3JlLm1vZHVsZSc7XHJcbmltcG9ydCB7IEVhc3lDb21wb25lbnQgfSBmcm9tICcuL2Vhc3kuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbXBvbmVudHNNb2R1bGUsXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdFx0U2hhcmVkTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEVhc3lDb21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdENvbXBvbmVudHNNb2R1bGUsXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdFx0RWFzeUNvbXBvbmVudCxcclxuXHRcdFNoYXJlZE1vZHVsZVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVhc3lNb2R1bGUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXN5U2VydmljZSB7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiSW5qZWN0YWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7UUFZUSxpQ0FBUTs7Ozs7O29CQVZmQSxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLGNBQXFDOztxQkFJckM7Ozs7NkJBUkQ7Ozs7Ozs7QUNBQTs7OztvQkFJQ0MsV0FBUSxTQUFDO3dCQUNULE9BQU8sRUFBRSxFQUVSO3dCQUNELFlBQVksRUFBRTs0QkFDYixjQUFjO3lCQUNkO3dCQUNELE9BQU8sRUFBRTs0QkFDUixjQUFjO3lCQUNkO3FCQUNEOzswQkFkRDs7Ozs7OztBQ0FBOzs7O29CQUlDQSxXQUFRLFNBQUM7d0JBQ1QsT0FBTyxFQUFFOzRCQUNSLFdBQVc7eUJBQ1g7d0JBQ0QsWUFBWSxFQUFFLEVBRWI7d0JBQ0QsT0FBTyxFQUFFOzRCQUNSLFdBQVc7eUJBQ1g7cUJBQ0Q7OytCQWREOzs7Ozs7O0FDQUE7Ozs7b0JBRUNBLFdBQVEsU0FBQzt3QkFDVCxPQUFPLEVBQUUsRUFFUjt3QkFDRCxTQUFTLEVBQUUsRUFFVjt3QkFDRCxPQUFPLEVBQUUsRUFFUjtxQkFDRDs7eUJBWkQ7Ozs7Ozs7QUNBQTs7Ozs7O1FBY1EsZ0NBQVE7Ozs7OztvQkFaZkQsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixnQkFBb0M7O3FCQUlwQzs7Ozs0QkFSRDs7Ozs7OztBQ0FBOzs7O29CQUdDQyxXQUFRLFNBQUM7d0JBQ1QsT0FBTyxFQUFFOzRCQUNSQyxtQkFBWTt5QkFDWjt3QkFDRCxZQUFZLEVBQUUsRUFFYjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1JBLG1CQUFZO3lCQUNaO3FCQUNEOzsyQkFiRDs7Ozs7OztBQ0FBOzs7O29CQU9DRCxXQUFRLFNBQUM7d0JBQ1QsT0FBTyxFQUFFOzRCQUNSLGdCQUFnQjs0QkFDaEIsVUFBVTs0QkFDVixZQUFZO3lCQUNaO3dCQUNELFlBQVksRUFBRTs0QkFDYixhQUFhO3lCQUNiO3dCQUNELE9BQU8sRUFBRTs0QkFDUixnQkFBZ0I7NEJBQ2hCLFVBQVU7NEJBQ1YsYUFBYTs0QkFDYixZQUFZO3lCQUNaO3FCQUNEOzt5QkF0QkQ7Ozs7Ozs7QUNBQTs7OztvQkFFQ0UsYUFBVSxTQUFDO3dCQUNYLFVBQVUsRUFBRSxNQUFNO3FCQUNsQjs7Ozs7MEJBSkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==