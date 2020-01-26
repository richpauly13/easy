import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from './container/container.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { GridComponent } from './grid/grid.component';
import { LayoutComponent } from './layout.component';
import { MultiColumnComponent } from './multi-column/multi-column.component';
import { NavComponent } from './nav/nav.component';
import { StickyFooterComponent } from './sticky-footer/sticky-footer.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				component: ContainerComponent,
				path: 'container'
			},
			{
				component: FlexboxComponent,
				path: 'flexbox'
			},
			{
				component: GridComponent,
				path: 'grid'
			},
			{
				component: MultiColumnComponent,
				path: 'multi-column'
			},
			{
				component: NavComponent,
				path: 'nav'
			},
			{
				component: StickyFooterComponent,
				path: 'sticky-footer'
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'container'
			}
		]
	}
];

@NgModule({
	exports: [
		RouterModule
	],
	imports: [
		RouterModule.forChild(routes)
	]
})
export class LayoutRoutingModule { }
