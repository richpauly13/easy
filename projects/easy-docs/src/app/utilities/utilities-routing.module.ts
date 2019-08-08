import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpaceComponent } from './space/space.component';
import { TypographyComponent } from './typography/typography.component';
import { UtilitiesComponent } from './utilities.component';
import { VisibilityComponent } from './visibility/visibility.component';
import { ColorComponent } from './color/color.component';
import { WidthComponent } from './width/width.component';

const routes: Routes = [
	{
		children: [
			{
				component: ColorComponent,
				path: 'color'
			},
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
				component: WidthComponent,
				path: 'width'
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
