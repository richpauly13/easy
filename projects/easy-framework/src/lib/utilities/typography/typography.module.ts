import { NgModule } from '@angular/core';

import { TypographyComponent } from './typography.component';
import { TypographyDirective } from './typography.directive';

@NgModule({
	declarations: [
		TypographyComponent,
		TypographyDirective
	],
	exports: [
		TypographyComponent,
		TypographyDirective
	]
})
export class TypographyModule { }
