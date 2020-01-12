import { NgModule } from '@angular/core';

import { ColorComponent } from './color.component';
import { ColorDirective } from './color.directive';

@NgModule({
	declarations: [
		ColorComponent,
		ColorDirective
	],
	exports: [
		ColorComponent,
		ColorDirective
	]
})
export class ColorModule { }
