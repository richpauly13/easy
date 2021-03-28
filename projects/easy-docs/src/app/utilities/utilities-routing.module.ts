import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlignmentComponent } from './alignment/alignment.component';
import { ColorComponent } from './color/color.component';
import { DimensionComponent } from './dimension/dimension.component';
import { DisplayComponent } from './display/display.component';
import { PositionComponent } from './position/position.component';
import { SpaceComponent } from './space/space.component';
import { TextComponent } from './text/text.component';
import { TypographyComponent } from './typography/typography.component';
import { UtilitiesComponent } from './utilities.component';
import { VisibilityComponent } from './visibility/visibility.component';

const routes: Routes = [
	{
		path: '',
		component: UtilitiesComponent,
		children: [
			{
				component: AlignmentComponent,
				path: 'alignment'
			},
			{
				component: ColorComponent,
				path: 'color'
			},
			{
				component: DimensionComponent,
				path: 'dimension'
			},
			{
				component: DisplayComponent,
				path: 'display'
			},
			{
				component: PositionComponent,
				path: 'position'
			},
			{
				component: SpaceComponent,
				path: 'space'
			},
			{
				component: TextComponent,
				path: 'text'
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
				redirectTo: 'alignment',
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
export class UtilitiesRoutingModule { }
