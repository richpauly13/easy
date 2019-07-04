import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
