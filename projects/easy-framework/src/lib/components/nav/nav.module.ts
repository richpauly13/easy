import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { NavDirective } from './nav.directive';

@NgModule({
	declarations: [
		// prettier-ignore
		NavComponent,
		NavDirective
	],
	exports: [
		// prettier-ignore
		NavComponent,
		NavDirective
	]
})
export class NavModule {}
