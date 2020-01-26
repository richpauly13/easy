import { NgModule } from '@angular/core';

import { ContainerComponent } from './container/container.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { GridComponent } from './grid/grid.component';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MultiColumnComponent } from './multi-column/multi-column.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from '../shared/shared.module';
import { StickyFooterComponent } from './sticky-footer/sticky-footer.component';

@NgModule({
	declarations: [
		ContainerComponent,
		FlexboxComponent,
		GridComponent,
		LayoutComponent,
		MultiColumnComponent,
		NavComponent,
		StickyFooterComponent
	],
	exports: [
		ContainerComponent,
		FlexboxComponent,
		GridComponent,
		LayoutComponent,
		LayoutRoutingModule,
		MultiColumnComponent,
		NavComponent,
		StickyFooterComponent
	],
	imports: [
		SharedModule
	]
})
export class LayoutModule { }
