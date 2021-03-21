import { NgModule } from '@angular/core';

import { FlexboxModule } from './flexbox/flexbox.module';
import { GridModule } from './grid/grid.module';
import { NavModule } from './nav/nav.module';

@NgModule({
	exports: [
		FlexboxModule,
		GridModule,
		NavModule
	]
})
export class LayoutModule { }
