import { NgModule } from '@angular/core';

import { ButtonComponent } from './button.component';
import { ButtonDirective } from './button.directive';

@NgModule({
	declarations: [
		// prettier-ignore
		ButtonComponent,
		ButtonDirective
	],
	exports: [
		// prettier-ignore
		ButtonComponent,
		ButtonDirective
	]
})
export class ButtonModule {}
