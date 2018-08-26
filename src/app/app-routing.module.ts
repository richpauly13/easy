import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssComponent } from './css/css.component';

const routes: Routes = [
	{
		path: 'css',
		component: CssComponent
	},
	{
		path: '',
		redirectTo: '/css',
		pathMatch: 'full'
	},
	{   path: '**',
		redirectTo: '/css',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {useHash: true})
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {

}
