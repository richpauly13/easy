import { NgModule } from '@angular/core';

import { WidthComponent } from './width.component';
import { WidthDirective } from './width.directive';

@NgModule({
    declarations: [
        WidthComponent,
        WidthDirective
    ],
    exports: [
        WidthComponent,
        WidthDirective
    ]
})
export class WidthModule { }
