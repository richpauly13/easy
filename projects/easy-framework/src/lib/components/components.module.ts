import { NgModule } from '@angular/core';

import { AlertModule } from './alert/alert.module';
import { BadgeModule } from './badge/badge.module';
import { ButtonModule } from './button/button.module';
import { CardModule } from './card/card.module';
import { FormModule } from './form/form.module';
import { ProgressModule } from './progress/progress.module';
import { SliderModule } from './slider/slider.module';
import { SlideshowModule } from './slideshow/slideshow.module';
import { SpinnerModule } from './spinner/spinner.module';
import { SwitchModule } from './switch/switch.module';
import { TabModule } from './tab/tab.module';
import { TableModule } from './table/table.module';
import { TooltipModule } from './tooltip/tooltip.module';

@NgModule({
	exports: [
		AlertModule,
		BadgeModule,
		ButtonModule,
		CardModule,
		FormModule,
		ProgressModule,
		SliderModule,
		SlideshowModule,
		SpinnerModule,
		SwitchModule,
		TableModule,
		TabModule,
		TooltipModule
	]
})
export class ComponentsModule { }
