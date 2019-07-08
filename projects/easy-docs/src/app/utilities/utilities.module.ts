import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SpaceComponent } from './space/space.component';
import { TypographyComponent } from './typography/typography.component';
import { UtilitiesRoutingModule } from './utilities-routing.module';
import { VisibilityComponent } from './visibility/visibility.component';
import { UtilitiesComponent } from './utilities.component';

@NgModule({
	declarations: [
		SpaceComponent,
		TypographyComponent,
		UtilitiesComponent,
		VisibilityComponent
	],
	exports: [
		SharedModule,
		SpaceComponent,
		TypographyComponent,
		UtilitiesComponent,
		UtilitiesRoutingModule,
		VisibilityComponent
	],
	imports: [
		SharedModule
	]
})
export class UtilitiesModule { }
