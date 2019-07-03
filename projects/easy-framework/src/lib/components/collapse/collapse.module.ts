import { NgModule } from '@angular/core';

import { CollapseComponent } from './collapse.component';
import { CollapseDirective } from './collapse.directive';

@NgModule({
	declarations: [CollapseComponent, CollapseDirective],
	exports: [CollapseComponent, CollapseDirective]
})
export class CollapseModule {}
