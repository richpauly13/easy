import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssComponent } from './components/css.component';

const routes: Routes = [
	{
		path: 'components',
		component: CssComponent
	},
	{
		path: '',
		redirectTo: '/components',
		pathMatch: 'full'
	},
	{   path: '**',
		redirectTo: '/components',
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
