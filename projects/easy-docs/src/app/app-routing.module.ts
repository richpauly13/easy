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
		redirectTo: '/components/alert'
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: '/components/alert'
	}
];

@NgModule({
	exports: [
		RouterModule
	],
	imports: [
		RouterModule.forRoot(routes, {
			useHash: true
		})
	]
})
export class AppRoutingModule { }
