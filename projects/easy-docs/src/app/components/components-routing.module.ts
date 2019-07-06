import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertComponent } from './alert/alert.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ComponentsComponent } from './components.component';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SwitchComponent } from './switch/switch.component';
import { TabComponent } from './tab/tab.component';
import { TableComponent } from './table/table.component';
import { TooltipComponent } from './tooltip/tooltip.component';

const routes: Routes = [
	{
		path: 'components',
		component: ComponentsComponent,
		children: [
			{
				path: 'alert',
				component: AlertComponent
			},

			{
				path: 'badge',
				component: BadgeComponent
			},
			{
				path: 'button',
				component: ButtonComponent
			},
			{
				path: 'card',
				component: CardComponent
			},
			{
				path: 'collapse',
				component: CollapseComponent
			},
			{
				path: 'form',
				component: FormComponent
			},
			{
				path: 'modal',
				component: ModalComponent
			},
			{
				path: 'nav',
				component: NavComponent
			},
			{
				path: 'slider',
				component: SliderComponent
			},
			{
				path: 'slideshow',
				component: SlideshowComponent
			},
			{
				path: 'spinner',
				component: SpinnerComponent
			},
			{
				path: 'switch',
				component: SwitchComponent
			},
			{
				path: 'tab',
				component: TabComponent
			},
			{
				path: 'table',
				component: TableComponent
			},
			{
				path: 'tooltip',
				component: TooltipComponent
			},
			{
				path: '',
				redirectTo: 'alert',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class ComponentsRoutingModule { }
