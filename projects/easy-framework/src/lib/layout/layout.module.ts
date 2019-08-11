import { NgModule } from '@angular/core';

import { NavModule } from './nav/nav.module';

@NgModule({
	exports: [
		NavModule
	]
})
export class LayoutModule { }
