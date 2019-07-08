import { NgModule } from '@angular/core';

import { BadgeComponent } from './badge.component';
import { BadgeDirective } from './badge.directive';

@NgModule({
	declarations: [
		BadgeComponent,
		BadgeDirective
	],
	exports: [
		BadgeComponent,
		BadgeDirective
	]
})
export class BadgeModule { }
