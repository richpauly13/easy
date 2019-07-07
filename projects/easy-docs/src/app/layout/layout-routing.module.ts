import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlexboxComponent } from './flexbox/flexbox.component';
import { GridComponent } from './grid/grid.component';
import { LayoutComponent } from './layout.component';
import { PositionComponent } from './position/position.component';

const routes: Routes = [
	{
		path: 'layout',
		component: LayoutComponent,
		children: [
			{
				path: 'flexbox',
				component: FlexboxComponent
			},
			{
				path: 'grid',
				component: GridComponent
			},
			{
				path: 'position',
				component: PositionComponent
			},
			{
				path: '',
				redirectTo: 'flexbox',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class LayoutRoutingModule { }
