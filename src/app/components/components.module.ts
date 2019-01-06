import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
	AlertModule,
	BadgeModule,
	ButtonModule,
	CardModule,
	CollapseModule,
	DropdownModule,
	FormModule,
	GridModule,
	ModalModule,
	NavModule,
	SliderModule,
	SlideshowModule,
	SpinnerModule,
	SwitchModule,
	TabModule,
	TableModule,
	TooltipModule
} from 'easy-framework';

import { CssComponent } from './css.component';

@NgModule({
	declarations: [CssComponent],
	imports: [
		AlertModule,
		BadgeModule,
		ButtonModule,
		CommonModule,
		CardModule,
		CollapseModule,
		DropdownModule,
		FormModule,
		GridModule,
		ModalModule,
		NavModule,
		SliderModule,
		SlideshowModule,
		SpinnerModule,
		SwitchModule,
		TabModule,
		TableModule,
		TooltipModule
	]
})
export class ComponentsModule {}
