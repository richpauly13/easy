import { NgModule } from '@angular/core';

import { DropdownComponent } from './dropdown.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
	declarations: [
		// prettier-ignore
		DropdownComponent,
		DropdownDirective
	],
	exports: [
		// prettier-ignore
		DropdownComponent,
		DropdownDirective
	]
})
export class DropdownModule {}
