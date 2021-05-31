import { NgModule } from '@angular/core';

import { AlertComponent } from './alert/alert.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ComponentComponent } from './component.component';
import { ComponentRoutingModule } from './component-routing.module';
import { FormComponent } from './form/form.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from './../shared/shared.module';
import { SliderComponent } from './slider/slider.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SwitchComponent } from './switch/switch.component';
import { TabComponent } from './tab/tab.component';
import { TableComponent } from './table/table.component';

@NgModule({
	declarations: [
		AlertComponent,
		BadgeComponent,
		ButtonComponent,
		CardComponent,
		ComponentComponent,
		FormComponent,
		ProgressComponent,
		SliderComponent,
		SpinnerComponent,
		SwitchComponent,
		TabComponent,
		TableComponent
	],
	exports: [
		AlertComponent,
		BadgeComponent,
		ButtonComponent,
		CardComponent,
		ComponentComponent,
		ComponentRoutingModule,
		FormComponent,
		ProgressComponent,
		SliderComponent,
		SpinnerComponent,
		SwitchComponent,
		TabComponent,
		TableComponent
	],
	imports: [
		SharedModule
	]
})
export class ComponentModule { }
