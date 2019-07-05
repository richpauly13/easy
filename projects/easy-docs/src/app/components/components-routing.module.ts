import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertComponent } from './alert/alert.component';
import { ComponentsComponent } from './components.component';

const routes: Routes = [
	{
		path: 'alert',
		component: AlertComponent
	},
	{
		path: 'components',
		component: ComponentsComponent
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
