import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpaceComponent } from './space/space.component';
import { TypographyComponent } from './typography/typography.component';
import { UtilitiesComponent } from './utilities.component';
import { VisibilityComponent } from './visibility/visibility.component';

const routes: Routes = [
	{
		children: [
			{
				component: SpaceComponent,
				path: 'space'
			},
			{
				component: TypographyComponent,
				path: 'typography'
			},
			{
				component: VisibilityComponent,
				path: 'visibility'
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'space'
			}
		],
		component: UtilitiesComponent,
		path: 'utilities'
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
export class UtilitiesRoutingModule { }
