import { NgModule, Component, Injectable, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.decorators = [
        { type: NgModule, args: [{
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [],
                    exports: [
                        CommonModule
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
        { type: NgModule, args: [{
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EasyService.ctorParameters = function () { return []; };
    /** @nocollapse */ EasyService.ngInjectableDef = defineInjectable({ factory: function EasyService_Factory() { return new EasyService(); }, token: EasyService, providedIn: "root" });
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

export { CoreModule, EasyComponent, EasyModule, EasyService, SharedModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZWFzeS9saWIvY29yZS9jb3JlLm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvZWFzeS5jb21wb25lbnQudHMiLCJuZzovL2Vhc3kvbGliL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwibmc6Ly9lYXN5L2xpYi9lYXN5Lm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvZWFzeS5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdlei1yb290JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vZWFzeS5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnLi9lYXN5LmNvbXBvbmVudC5zY3NzJ1xyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVhc3lDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9jb3JlL2NvcmUubW9kdWxlJztcclxuaW1wb3J0IHsgRWFzeUNvbXBvbmVudCB9IGZyb20gJy4vZWFzeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRcdFNoYXJlZE1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRFYXN5Q29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdFx0RWFzeUNvbXBvbmVudCxcclxuXHRcdFNoYXJlZE1vZHVsZVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVhc3lNb2R1bGUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXN5U2VydmljZSB7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztnQkFFQyxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFLEVBRVI7b0JBQ0QsU0FBUyxFQUFFLEVBRVY7b0JBQ0QsT0FBTyxFQUFFLEVBRVI7aUJBQ0Q7O3FCQVpEOzs7Ozs7O0FDQUE7Ozs7OztJQWNRLGdDQUFROzs7Ozs7Z0JBWmYsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxTQUFTO29CQUNuQixnQkFBb0M7O2lCQUlwQzs7Ozt3QkFSRDs7Ozs7OztBQ0FBOzs7O2dCQUdDLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtvQkFDRCxZQUFZLEVBQUUsRUFFYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtpQkFDRDs7dUJBYkQ7Ozs7Ozs7QUNBQTs7OztnQkFNQyxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFVBQVU7d0JBQ1YsWUFBWTtxQkFDWjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsYUFBYTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsVUFBVTt3QkFDVixhQUFhO3dCQUNiLFlBQVk7cUJBQ1o7aUJBQ0Q7O3FCQW5CRDs7Ozs7OztBQ0FBOzs7O2dCQUVDLFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7O3NCQUpEOzs7Ozs7Ozs7Ozs7Ozs7In0=