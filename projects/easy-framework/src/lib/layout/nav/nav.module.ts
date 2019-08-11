import { NgModule } from '@angular/core';

import { NavComponent } from './nav/nav.component';

@NgModule({
	declarations: [
		NavComponent
	],
	exports: [
		NavComponent
	]
})
export class NavModule { }
