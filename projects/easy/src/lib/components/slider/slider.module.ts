import { NgModule } from '@angular/core';
import { SliderComponent } from './slider.component';
import { SliderDirective } from './slider.directive';

@NgModule({
	declarations: [
		// prettier-ignore
		SliderComponent,
		SliderDirective
	],
	exports: [
		// prettier-ignore
		SliderComponent,
		SliderDirective
	]
})
export class SliderModule {}
