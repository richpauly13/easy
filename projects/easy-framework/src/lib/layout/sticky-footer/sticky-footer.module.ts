import { NgModule } from '@angular/core';

import { StickyFooterComponent } from './sticky-footer.component';
import { StickyFooterDirective } from './sticky-footer.directive';

@NgModule({
	declarations: [
		StickyFooterComponent,
		StickyFooterDirective
	],
	exports: [
		StickyFooterComponent,
		StickyFooterDirective
	]
})
export class StickyFooterModule { }
