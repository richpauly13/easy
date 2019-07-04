import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from 'easy-framework';
import { EasyModule } from 'easy-framework';

import { AlertComponent } from './alert/alert.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CollapseComponent } from './collapse/collapse.component';
import { CssModule } from './components/css.module';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { ModalComponent } from './modal/modal.component';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SwitchComponent } from './switch/switch.component';
import { TabComponent } from './tab/tab.component';
import { TableComponent } from './table/table.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
	imports: [
		BrowserModule,
		EasyModule,
        ComponentsModule,
		CssModule,
		RouterModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		AlertComponent,
		BadgeComponent,
		ButtonComponent,
		CardComponent,
		CollapseComponent,
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
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
