import { NgModule } from '@angular/core';

import { ContainerComponent } from './container/container.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { GridComponent } from './grid/grid.component';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		ContainerComponent,
		FlexboxComponent,
		GridComponent,
		LayoutComponent,
		NavComponent
	],
	exports: [
		ContainerComponent,
		FlexboxComponent,
		GridComponent,
		LayoutComponent,
		LayoutRoutingModule,
		NavComponent
	],
	imports: [
		SharedModule
	]
})
export class LayoutModule { }
