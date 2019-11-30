import { NgModule } from '@angular/core';

import { ColorComponent } from './color/color.component';
import { MiscComponent } from './misc/misc.component';
import { SharedModule } from '../shared/shared.module';
import { SpaceComponent } from './space/space.component';
import { TypographyComponent } from './typography/typography.component';
import { UtilitiesComponent } from './utilities.component';
import { UtilitiesRoutingModule } from './utilities-routing.module';
import { VisibilityComponent } from './visibility/visibility.component';
import { WidthComponent } from './width/width.component';
import { TextComponent } from './text/text.component';

@NgModule({
	declarations: [
		ColorComponent,
		MiscComponent,
		SpaceComponent,
		TypographyComponent,
		UtilitiesComponent,
		VisibilityComponent,
		WidthComponent,
		TextComponent
	],
	exports: [
		ColorComponent,
		MiscComponent,
		SpaceComponent,
		TypographyComponent,
		UtilitiesComponent,
		UtilitiesRoutingModule,
		VisibilityComponent,
		WidthComponent,
		TextComponent
	],
	imports: [
		SharedModule
	]
})
export class UtilitiesModule { }
