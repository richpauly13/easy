import { NgModule } from '@angular/core';

import { FormComponent } from './form.component';
import { FormDirective } from './form.directive';

@NgModule({
	declarations: [
		// prettier-ignore
		FormComponent,
		FormDirective
	],
	exports: [
		// prettier-ignore
		FormComponent,
		FormDirective
	]
})
export class FormModule {}
