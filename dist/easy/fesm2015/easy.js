import { Component, NgModule, Injectable, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AlertComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'ez-alert',
                template: "\n",
                styles: [""]
            }] }
];
/** @nocollapse */
AlertComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AlertModule {
}
AlertModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [
                    AlertComponent
                ],
                exports: [
                    AlertComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ComponentsModule {
}
ComponentsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    AlertModule
                ],
                declarations: [],
                exports: [
                    AlertModule
                ]
            },] }
];

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

export { ComponentsModule, CoreModule, EasyComponent, EasyModule, EasyService, SharedModule, AlertComponent as ɵb, AlertModule as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZWFzeS9saWIvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCJuZzovL2Vhc3kvbGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQubW9kdWxlLnRzIiwibmc6Ly9lYXN5L2xpYi9jb21wb25lbnRzL2NvbXBvbmVudHMubW9kdWxlLnRzIiwibmc6Ly9lYXN5L2xpYi9jb3JlL2NvcmUubW9kdWxlLnRzIiwibmc6Ly9lYXN5L2xpYi9lYXN5LmNvbXBvbmVudC50cyIsIm5nOi8vZWFzeS9saWIvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiLCJuZzovL2Vhc3kvbGliL2Vhc3kubW9kdWxlLnRzIiwibmc6Ly9lYXN5L2xpYi9lYXN5LnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZXotYWxlcnQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9hbGVydC5jb21wb25lbnQuc2Nzcydcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcblxuXHR9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEFsZXJ0Q29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRBbGVydENvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0TW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWxlcnRNb2R1bGUgfSBmcm9tICcuL2FsZXJ0L2FsZXJ0Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRBbGVydE1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0QWxlcnRNb2R1bGVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRzTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2V6LXJvb3QnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9lYXN5LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFtcclxuXHRcdCcuL2Vhc3kuY29tcG9uZW50LnNjc3MnXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWFzeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudHNNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50cy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9jb3JlL2NvcmUubW9kdWxlJztcclxuaW1wb3J0IHsgRWFzeUNvbXBvbmVudCB9IGZyb20gJy4vZWFzeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tcG9uZW50c01vZHVsZSxcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XHRTaGFyZWRNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0RWFzeUNvbXBvbmVudFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0Q29tcG9uZW50c01vZHVsZSxcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XHRFYXN5Q29tcG9uZW50LFxyXG5cdFx0U2hhcmVkTW9kdWxlXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWFzeU1vZHVsZSB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVhc3lTZXJ2aWNlIHtcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblxyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BU2EsY0FBYzs7Ozs7SUFHbkIsUUFBUTs7OztZQVZmLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsY0FBcUM7O2FBSXJDOzs7Ozs7Ozs7QUNSRCxNQWVhLFdBQVc7OztZQVh2QixRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFLEVBRVI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLGNBQWM7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLGNBQWM7aUJBQ2Q7YUFDRDs7Ozs7OztBQ2RELE1BZWEsZ0JBQWdCOzs7WUFYNUIsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixXQUFXO2lCQUNYO2dCQUNELFlBQVksRUFBRSxFQUViO2dCQUNELE9BQU8sRUFBRTtvQkFDUixXQUFXO2lCQUNYO2FBQ0Q7Ozs7Ozs7QUNkRCxNQWFhLFVBQVU7OztZQVh0QixRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFLEVBRVI7Z0JBQ0QsU0FBUyxFQUFFLEVBRVY7Z0JBQ0QsT0FBTyxFQUFFLEVBRVI7YUFDRDs7Ozs7OztBQ1pELE1BU2EsYUFBYTs7Ozs7O0lBS2xCLFFBQVE7Ozs7WUFaZixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLGdCQUFvQzs7YUFJcEM7Ozs7Ozs7OztBQ1JELE1BY2EsWUFBWTs7O1lBWHhCLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtpQkFDWjtnQkFDRCxZQUFZLEVBQUUsRUFFYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtpQkFDWjthQUNEOzs7Ozs7O0FDYkQsTUF1QmEsVUFBVTs7O1lBaEJ0QixRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLGdCQUFnQjtvQkFDaEIsVUFBVTtvQkFDVixZQUFZO2lCQUNaO2dCQUNELFlBQVksRUFBRTtvQkFDYixhQUFhO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUixnQkFBZ0I7b0JBQ2hCLFVBQVU7b0JBQ1YsYUFBYTtvQkFDYixZQUFZO2lCQUNaO2FBQ0Q7Ozs7Ozs7QUN0QkQsTUFLYSxXQUFXOzs7OztZQUh2QixVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==