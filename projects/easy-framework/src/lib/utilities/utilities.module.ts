import { NgModule } from '@angular/core';

import { ColorModule } from './color/color.module';
import { SpaceModule } from './space/space.module';
import { TextModule } from './text/text.module';
import { TypographyModule } from './typography';
import { VisibilityModule } from './visibility/visibility.module';
import { WidthModule } from './width/width.module';

@NgModule({
	exports: [
		ColorModule,
		SpaceModule,
		TextModule,
		TypographyModule,
		VisibilityModule,
		WidthModule
	]
})
export class UtilitiesModule { }
