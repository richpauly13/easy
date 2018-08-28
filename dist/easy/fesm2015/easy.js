import { NgModule, Component, Injectable, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CoreModule {
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                providers: [],
                exports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EasyComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
EasyComponent.decorators = [
    { type: Component, args: [{
                selector: 'ez-root',
                template: ``
            }] }
];
/** @nocollapse */
EasyComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SharedModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EasyModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EasyService {
    constructor() {
    }
}
EasyService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EasyService.ctorParameters = () => [];
/** @nocollapse */ EasyService.ngInjectableDef = defineInjectable({ factory: function EasyService_Factory() { return new EasyService(); }, token: EasyService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { CoreModule, EasyComponent, EasyModule, EasyService, SharedModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZWFzeS9saWIvY29yZS9jb3JlLm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvZWFzeS5jb21wb25lbnQudHMiLCJuZzovL2Vhc3kvbGliL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwibmc6Ly9lYXN5L2xpYi9lYXN5Lm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvZWFzeS5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblxuXHRdLFxuXHRleHBvcnRzOiBbXG5cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnZXotcm9vdCcsXHJcblx0dGVtcGxhdGU6IGBgLFxyXG5cdHN0eWxlczogW1xyXG5cclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXN5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cblx0XSxcblx0ZXhwb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vY29yZS9jb3JlLm1vZHVsZSc7XHJcbmltcG9ydCB7IEVhc3lDb21wb25lbnQgfSBmcm9tICcuL2Vhc3kuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XHRTaGFyZWRNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0RWFzeUNvbXBvbmVudFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRcdEVhc3lDb21wb25lbnQsXHJcblx0XHRTaGFyZWRNb2R1bGVcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXN5TW9kdWxlIHtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRWFzeVNlcnZpY2Uge1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztZQUVDLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUUsRUFFUjtnQkFDRCxTQUFTLEVBQUUsRUFFVjtnQkFDRCxPQUFPLEVBQUUsRUFFUjthQUNEOzs7Ozs7O0FDWkQ7Ozs7OztJQWNRLFFBQVE7Ozs7WUFaZixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxFQUFFO2FBSVo7Ozs7Ozs7OztBQ1JEOzs7WUFHQyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFLEVBRWI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNGLFlBQVk7aUJBQ2xCO2FBQ0Q7Ozs7Ozs7QUNiRDs7O1lBTUMsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixVQUFVO29CQUNWLFlBQVk7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLGFBQWE7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLFVBQVU7b0JBQ1YsYUFBYTtvQkFDYixZQUFZO2lCQUNaO2FBQ0Q7Ozs7Ozs7QUNuQkQ7Ozs7O1lBRUMsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=