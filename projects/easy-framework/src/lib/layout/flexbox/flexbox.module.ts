import { NgModule } from '@angular/core';

import { FlexboxComponent } from './flexbox.component';
import { FlexboxDirective } from './flexbox.directive';

@NgModule({
    declarations: [
        FlexboxComponent,
        FlexboxDirective
    ],
    exports: [
        FlexboxComponent,
        FlexboxDirective
    ]
})
export class FlexboxModule { }
