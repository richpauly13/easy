import { NgModule } from '@angular/core';

import { AlertComponent } from './alert/alert.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { ModalComponent } from './modal/modal.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from './../shared/shared.module';
import { SliderComponent } from './slider/slider.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SwitchComponent } from './switch/switch.component';
import { TabComponent } from './tab/tab.component';
import { TableComponent } from './table/table.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
	declarations: [
		AlertComponent,
		BadgeComponent,
		ButtonComponent,
		CardComponent,
		CollapseComponent,
		ComponentsComponent,
		FormComponent,
		GridComponent,
		ModalComponent,
		NavComponent,
		SliderComponent,
		SlideshowComponent,
		SpinnerComponent,
		SwitchComponent,
		TabComponent,
		TableComponent,
		TooltipComponent
	],
	imports: [
		SharedModule
	],
	exports: [
		AlertComponent,
		BadgeComponent,
		ButtonComponent,
		CardComponent,
		CollapseComponent,
		ComponentsComponent,
		ComponentsRoutingModule,
		FormComponent,
		GridComponent,
		ModalComponent,
		NavComponent,
		SharedModule,
		SliderComponent,
		SlideshowComponent,
		SpinnerComponent,
		SwitchComponent,
		TabComponent,
		TableComponent,
		TooltipComponent
	]
})
export class ComponentsModule { }
