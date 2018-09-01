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
                template: "\r\n",
                styles: [""]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZWFzeS9saWIvY29yZS9jb3JlLm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvZWFzeS5jb21wb25lbnQudHMiLCJuZzovL2Vhc3kvbGliL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwibmc6Ly9lYXN5L2xpYi9lYXN5Lm1vZHVsZS50cyIsIm5nOi8vZWFzeS9saWIvZWFzeS5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdlei1yb290JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vZWFzeS5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnLi9lYXN5LmNvbXBvbmVudC5zY3NzJ1xyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVhc3lDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9jb3JlL2NvcmUubW9kdWxlJztcclxuaW1wb3J0IHsgRWFzeUNvbXBvbmVudCB9IGZyb20gJy4vZWFzeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRcdFNoYXJlZE1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRFYXN5Q29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdFx0RWFzeUNvbXBvbmVudCxcclxuXHRcdFNoYXJlZE1vZHVsZVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVhc3lNb2R1bGUge1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXN5U2VydmljZSB7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQWFhLFVBQVU7OztZQVh0QixRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFLEVBRVI7Z0JBQ0QsU0FBUyxFQUFFLEVBRVY7Z0JBQ0QsT0FBTyxFQUFFLEVBRVI7YUFDRDs7Ozs7OztBQ1pELE1BU2EsYUFBYTs7Ozs7O0lBS2xCLFFBQVE7Ozs7WUFaZixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLGdCQUFvQzs7YUFJcEM7Ozs7Ozs7OztBQ1JELE1BY2EsWUFBWTs7O1lBWHhCLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtpQkFDWjtnQkFDRCxZQUFZLEVBQUUsRUFFYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtpQkFDWjthQUNEOzs7Ozs7O0FDYkQsTUFvQmEsVUFBVTs7O1lBZHRCLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsVUFBVTtvQkFDVixZQUFZO2lCQUNaO2dCQUNELFlBQVksRUFBRTtvQkFDYixhQUFhO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUixVQUFVO29CQUNWLGFBQWE7b0JBQ2IsWUFBWTtpQkFDWjthQUNEOzs7Ozs7O0FDbkJELE1BS2EsV0FBVzs7Ozs7WUFIdkIsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=