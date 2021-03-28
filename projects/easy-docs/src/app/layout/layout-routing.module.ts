import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from './container/container.component';
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
				component: NavComponent,
				path: 'nav'
			},
			{
				redirectTo: 'container',
				pathMatch: 'full',
				path: ''
			}
		]
	}
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(routes)]
})
export class LayoutRoutingModule { }
