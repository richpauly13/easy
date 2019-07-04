import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertComponent } from './alert/alert.component';
import { CssComponent } from './components/css.component';

const routes: Routes = [
	{
		path: 'alert',
		component: AlertComponent
	},
	{
		path: 'components',
		component: CssComponent
	},
	{
		path: '',
		redirectTo: '/components',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: '/components',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			useHash: true,
			anchorScrolling: 'enabled'
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
