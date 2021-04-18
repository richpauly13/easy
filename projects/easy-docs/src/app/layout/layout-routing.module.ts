import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlexboxComponent } from './flexbox/flexbox.component';
import { GridComponent } from './grid/grid.component';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				component: FlexboxComponent,
				path: 'flexbox'
			},
			{
				component: GridComponent,
				path: 'grid'
			},
			{
				component: NavComponent,
				path: 'nav'
			},
			{
				redirectTo: 'flexbox',
				pathMatch: 'full',
				path: ''
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
