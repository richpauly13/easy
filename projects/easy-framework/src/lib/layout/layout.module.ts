import { NgModule } from '@angular/core';

import { ContainerModule } from './container/container.module';
import { FlexboxModule } from './flexbox/flexbox.module';
import { GridModule } from './grid/grid.module';
import { NavModule } from './nav/nav.module';
import { PositionModule } from './position/position.module';

@NgModule({
	exports: [
		ContainerModule,
		FlexboxModule,
		GridModule,
		NavModule,
		PositionModule
	]
})
export class LayoutModule { }
