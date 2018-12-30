import { NgModule } from '@angular/core';

import { AlertModule } from './alert/alert.module';
import { BadgeModule } from './badge/badge.module';
import { ButtonModule } from './button/button.module';
import { CardModule } from './card/card.module';
import { CollapsibleModule } from './collapsible/collapsible.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { FormModule } from './form/form.module';
import { GridModule } from './grid/grid.module';
import { ModalModule } from './modal/modal.module';
import { NavModule } from './nav/nav.module';
import { SliderModule } from './slider/slider.module';
import { SlideshowModule } from './slideshow/slideshow.module';
import { SpinnerModule } from './spinner/spinner.module';

@NgModule({
	exports: [
		// prettier-ignore
		AlertModule,
		BadgeModule,
		ButtonModule,
		CardModule,
		CollapsibleModule,
		DropdownModule,
		FormModule,
		GridModule,
		ModalModule,
		NavModule,
		SliderModule,
		SlideshowModule,
		SpinnerModule
	]
})
export class ComponentsModule {}
