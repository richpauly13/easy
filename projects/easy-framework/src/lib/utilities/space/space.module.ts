import { NgModule } from '@angular/core';

import { SpaceComponent } from './space.component';
import { SpaceDirective } from './space.directive';

@NgModule({
	declarations: [
		SpaceComponent,
		SpaceDirective
	],
	exports: [
		SpaceComponent,
		SpaceDirective
	]
})
export class SpaceModule { }
