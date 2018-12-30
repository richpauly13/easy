import { NgModule } from '@angular/core';
import { SlideshowComponent } from './slideshow.component';
import { SlideshowDirective } from './slideshow.directive';

@NgModule({
	declarations: [
		// prettier-ignore
		SlideshowComponent,
		SlideshowDirective
	],
	exports: [
		// prettier-ignore
		SlideshowComponent,
		SlideshowDirective
	]
})
export class SlideshowModule {}
