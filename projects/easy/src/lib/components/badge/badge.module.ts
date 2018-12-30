import { NgModule } from '@angular/core';

import { BadgeComponent } from './badge.component';
import { BadgeDirective } from './badge.directive';

@NgModule({
	declarations: [
		// prettier-ignore
		BadgeComponent,
		BadgeDirective
	],
	exports: [
		// prettier-ignore
		BadgeComponent,
		BadgeDirective
	]
})
export class BadgeModule {}
