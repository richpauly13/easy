import { NgModule } from '@angular/core';

import { ColorComponent } from './color/color.component';
import { DimensionComponent } from './dimension/dimension.component';
import { DisplayComponent } from './display/display.component';
import { PositionComponent } from './position/position.component';
import { SharedModule } from '../shared/shared.module';
import { SpaceComponent } from './space/space.component';
import { TypographyComponent } from './typography/typography.component';
import { UtilitiesComponent } from './utilities.component';
import { UtilitiesRoutingModule } from './utilities-routing.module';
import { VisibilityComponent } from './visibility/visibility.component';
import { TextComponent } from './text/text.component';

@NgModule({
	declarations: [
		ColorComponent,
		DisplayComponent,
		PositionComponent,
		SpaceComponent,
		TypographyComponent,
		UtilitiesComponent,
		VisibilityComponent,
		DimensionComponent,
		TextComponent
	],
	exports: [
		ColorComponent,
		DisplayComponent,
		PositionComponent,
		SpaceComponent,
		TypographyComponent,
		UtilitiesComponent,
		UtilitiesRoutingModule,
		VisibilityComponent,
		DimensionComponent,
		TextComponent
	],
	imports: [
		SharedModule
	]
})
export class UtilitiesModule { }
