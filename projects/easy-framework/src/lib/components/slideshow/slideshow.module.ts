import { NgModule } from '@angular/core';

import { SlideshowComponent } from './slideshow.component';
import { SlideshowDirective } from './slideshow.directive';

@NgModule({
	declarations: [
		SlideshowComponent,
		SlideshowDirective
	],
	exports: [
		SlideshowComponent,
		SlideshowDirective
	]
})
export class SlideshowModule { }
