import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import { SpinnerDirective } from './spinner.directive';

@NgModule({
	declarations: [
		// prettier-ignore
		SpinnerComponent,
		SpinnerDirective
	],
	exports: [
		// prettier-ignore
		SpinnerComponent,
		SpinnerDirective
	]
})
export class SpinnerModule {}
