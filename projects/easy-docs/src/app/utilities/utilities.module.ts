import { NgModule } from '@angular/core';

import { ColorComponent } from './color/color.component';
import { SharedModule } from '../shared/shared.module';
import { SpaceComponent } from './space/space.component';
import { TypographyComponent } from './typography/typography.component';
import { UtilitiesComponent } from './utilities.component';
import { UtilitiesRoutingModule } from './utilities-routing.module';
import { VisibilityComponent } from './visibility/visibility.component';
import { WidthComponent } from './width/width.component';

@NgModule({
	declarations: [
		ColorComponent,
		SpaceComponent,
		TypographyComponent,
		UtilitiesComponent,
		VisibilityComponent,
		WidthComponent
	],
	exports: [
		ColorComponent,
		SpaceComponent,
		TypographyComponent,
		UtilitiesComponent,
		UtilitiesRoutingModule,
		VisibilityComponent,
		WidthComponent
	],
	imports: [
		SharedModule
	]
})
export class UtilitiesModule { }
