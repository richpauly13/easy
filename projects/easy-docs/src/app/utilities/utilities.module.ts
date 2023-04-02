import { NgModule } from '@angular/core';

import { AlignmentComponent } from './alignment/alignment.component';
import { ColorComponent } from './color/color.component';
import { ContainerComponent } from './container/container.component';
import { DimensionComponent } from './dimension/dimension.component';
import { DisplayComponent } from './display/display.component';
import { SharedModule } from '../shared/shared.module';
import { SpaceComponent } from './space/space.component';
import { TextComponent } from './text/text.component';
import { TypographyComponent } from './typography/typography.component';
import { UtilitiesComponent } from './utilities.component';
import { UtilitiesRoutingModule } from './utilities-routing.module';
import { VisibilityComponent } from './visibility/visibility.component';

@NgModule({
	declarations: [
		AlignmentComponent,
		ColorComponent,
		ContainerComponent,
		DimensionComponent,
		DisplayComponent,
		SpaceComponent,
		TextComponent,
		TypographyComponent,
		UtilitiesComponent,
		VisibilityComponent
	],
	exports: [
		AlignmentComponent,
		ColorComponent,
		ContainerComponent,
		DimensionComponent,
		DisplayComponent,
		SpaceComponent,
		TextComponent,
		TypographyComponent,
		UtilitiesComponent,
		UtilitiesRoutingModule,
		VisibilityComponent
	],
	imports: [SharedModule]
})
export class UtilitiesModule { }
