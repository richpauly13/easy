import { NgModule } from '@angular/core';

import { AlertComponent } from './alert/alert.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { FormComponent } from './form/form.component';
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
		ComponentsComponent,
		FormComponent,
		SliderComponent,
		SlideshowComponent,
		SpinnerComponent,
		SwitchComponent,
		TabComponent,
		TableComponent,
		TooltipComponent
	],
	exports: [
		AlertComponent,
		BadgeComponent,
		ButtonComponent,
		CardComponent,
		ComponentsComponent,
		ComponentsRoutingModule,
		FormComponent,
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
	]
})
export class ComponentsModule { }
