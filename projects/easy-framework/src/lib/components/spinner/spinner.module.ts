import { NgModule } from '@angular/core';

import { SpinnerComponent } from './spinner.component';
import { SpinnerDirective } from './spinner.directive';

@NgModule({
	declarations: [
		SpinnerComponent,
		SpinnerDirective
	],
	exports: [
		SpinnerComponent,
		SpinnerDirective
	]
})
export class SpinnerModule { }
