import { NgModule } from '@angular/core';

import { ContainerComponent } from './container.component';
import { ContainerDirective } from './container.directive';

@NgModule({
    declarations: [
        ContainerComponent,
        ContainerDirective
    ],
    exports: [
        ContainerComponent,
        ContainerDirective
    ]
})
export class ContainerModule { }
