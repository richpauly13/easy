import { NgModule } from '@angular/core';

import { NavComponent } from './nav.component';
import { NavDirective } from './nav.directive';

@NgModule({
	declarations: [
		NavComponent,
		NavDirective
	],
	exports: [
		NavComponent,
		NavDirective
	]
})
export class NavModule { }
