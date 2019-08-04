import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { GridComponent } from './grid/grid.component';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { PositionComponent } from './position/position.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
	declarations: [
		FlexboxComponent,
		GridComponent,
		LayoutComponent,
		PositionComponent,
		ContainerComponent
	],
	exports: [
		FlexboxComponent,
		GridComponent,
		LayoutComponent,
		LayoutRoutingModule,
		PositionComponent,
		SharedModule,
		ContainerComponent
	],
	imports: [
		SharedModule
	]
})
export class LayoutModule { }
