import { NgModule } from '@angular/core';

import { SliderComponent } from './slider.component';
import { SliderDirective } from './slider.directive';

@NgModule({
	declarations: [
		SliderComponent,
		SliderDirective
	],
	exports: [
		SliderComponent,
		SliderDirective
	]
})
export class SliderModule { }
