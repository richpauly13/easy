import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlertComponent } from './alert/alert.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ComponentsComponent } from './components.component';
import { FormComponent } from './form/form.component';
import { ProgressComponent } from './progress/progress.component';
import { SliderComponent } from './slider/slider.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SwitchComponent } from './switch/switch.component';
import { TabComponent } from './tab/tab.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
	{
		path: '',
		component: ComponentsComponent,
		children: [
			{
				component: AlertComponent,
				path: 'alert'
			},
			{
				component: BadgeComponent,
				path: 'badge'
			},
			{
				component: ButtonComponent,
				path: 'button'
			},
			{
				component: CardComponent,
				path: 'card'
			},
			{
				component: FormComponent,
				path: 'form'
			},
			{
				component: ProgressComponent,
				path: 'progress'
			},
			{
				component: SliderComponent,
				path: 'slider'
			},
			{
				component: SlideshowComponent,
				path: 'slideshow'
			},
			{
				component: SpinnerComponent,
				path: 'spinner'
			},
			{
				component: SwitchComponent,
				path: 'switch'
			},
			{
				component: TabComponent,
				path: 'tab'
			},
			{
				component: TableComponent,
				path: 'table'
			},
			{
				redirectTo: 'alert',
				pathMatch: 'full',
				path: ''
			}
		]
	}
];

@NgModule({
	exports: [
		RouterModule
	],
	imports: [
		RouterModule.forChild(routes)
	]
})
export class ComponentsRoutingModule { }
