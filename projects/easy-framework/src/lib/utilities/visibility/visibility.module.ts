import { NgModule } from '@angular/core';

import { VisibilityComponent } from './visibility.component';
import { VisibilityDirective } from './visibility.directive';

@NgModule({
	declarations: [
		VisibilityComponent,
		VisibilityDirective
	],
	exports: [
		VisibilityComponent,
		VisibilityDirective
	]
})
export class VisibilityModule { }
