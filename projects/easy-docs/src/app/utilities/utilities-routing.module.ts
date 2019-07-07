import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceComponent } from './space/space.component';
import { TypographyComponent } from './typography/typography.component';
import { UtilitiesComponent } from './utilities.component';
import { VisibilityComponent } from './visibility/visibility.component';

const routes: Routes = [
	{
		path: 'utilities',
		component: UtilitiesComponent,
		children: [
			{
				path: 'space',
				component: SpaceComponent
			},
			{
				path: 'typography',
				component: TypographyComponent
			},
			{
				path: 'visibility',
				component: VisibilityComponent
			},
			{
				path: '',
				redirectTo: 'space',
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
export class UtilitiesRoutingModule { }
