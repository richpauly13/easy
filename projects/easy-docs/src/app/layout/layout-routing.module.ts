import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlexboxComponent } from './flexbox/flexbox.component';
import { GridComponent } from './grid/grid.component';
import { LayoutComponent } from './layout.component';
import { PositionComponent } from './position/position.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
	{
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
				component: PositionComponent,
				path: 'position'
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'flexbox'
			}
		],
		component: LayoutComponent,
		path: 'layout'
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
