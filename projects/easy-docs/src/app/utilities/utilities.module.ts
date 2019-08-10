import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SpaceComponent } from './space/space.component';
import { TypographyComponent } from './typography/typography.component';
import { UtilitiesRoutingModule } from './utilities-routing.module';
import { VisibilityComponent } from './visibility/visibility.component';
import { UtilitiesComponent } from './utilities.component';
import { ColorComponent } from './color/color.component';
import { WidthComponent } from './width/width.component';

@NgModule({
	declarations: [
		SpaceComponent,
		TypographyComponent,
		UtilitiesComponent,
		VisibilityComponent,
		ColorComponent,
		WidthComponent
	],
	exports: [
		SpaceComponent,
		TypographyComponent,
		UtilitiesComponent,
		UtilitiesRoutingModule,
		VisibilityComponent,
		ColorComponent,
		WidthComponent
	],
	imports: [
		SharedModule
	]
})
export class UtilitiesModule { }
