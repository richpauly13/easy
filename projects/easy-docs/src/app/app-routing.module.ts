/* eslint-disable @typescript-eslint/promise-function-async */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'component',
		loadChildren: () => {
			return import('projects/easy-docs/src/app/component/component.module').then((module: typeof import('projects/easy-docs/src/app/component/component.module')) => {
				return module.ComponentModule;
			});
		}
	},
	{
		path: 'layout',
		loadChildren: () => {
			return import('projects/easy-docs/src/app/layout/layout.module').then((module: typeof import('projects/easy-docs/src/app/layout/layout.module')) => {
				return module.LayoutModule;
			});
		}
	},
	{
		path: 'utilities',
		loadChildren: () => {
			return import('projects/easy-docs/src/app/utilities/utilities.module').then((module: typeof import('projects/easy-docs/src/app/utilities/utilities.module')) => {
				return module.UtilitiesModule;
			});
		}
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'component'
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: 'component'
	}
];

@NgModule({
	exports: [
		RouterModule
	],
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: PreloadAllModules,
			scrollPositionRestoration: 'top'
		})
	]
})
export class AppRoutingModule { }
