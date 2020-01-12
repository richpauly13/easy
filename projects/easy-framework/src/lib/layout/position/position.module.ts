import { NgModule } from '@angular/core';

import { PositionComponent } from './position.component';
import { PositionDirective } from './position.directive';

@NgModule({
	declarations: [
		PositionComponent,
		PositionDirective
	],
	exports: [
		PositionComponent,
		PositionDirective
	]
})
export class PositionModule { }
