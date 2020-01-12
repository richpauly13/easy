import { NgModule } from '@angular/core';

import { TextComponent } from './text.component';
import { TextDirective } from './text.directive';

@NgModule({
	declarations: [
		TextComponent,
		TextDirective
	],
	exports: [
		TextComponent,
		TextDirective
	]
})
export class TextModule { }
