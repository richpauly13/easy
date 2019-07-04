import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssComponent } from './css.component';

const routes: Routes = [
	{
		path: 'components',
		component: CssComponent
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
