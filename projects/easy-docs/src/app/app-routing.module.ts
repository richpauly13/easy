import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		component: HomeComponent,
		path: 'home'
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/components'
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: '/components'
	}
];

@NgModule({
	exports: [
		RouterModule
	],
	imports: [
		RouterModule.forRoot(routes, {
			anchorScrolling: 'enabled',
			useHash: true
		})
	]
})
export class AppRoutingModule { }
