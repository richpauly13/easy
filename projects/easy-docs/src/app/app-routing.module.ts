import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ComponentModule } from './component/component.module';
import { LayoutModule } from './layout/layout.module';
import { UtilitiesModule } from './utilities/utilities.module';

const routes: Routes = [
	{
		path: 'component',
		loadChildren: async(): Promise<ComponentModule> => {
			return await import('projects/easy-docs/src/app/component/component.module').then((module: typeof import('projects/easy-docs/src/app/component/component.module')): ComponentModule => {
				return module.ComponentModule;
			});
		}
	},
	{
		path: 'layout',
		loadChildren: async(): Promise<LayoutModule> => {
			return await import('projects/easy-docs/src/app/layout/layout.module').then((module: typeof import('projects/easy-docs/src/app/layout/layout.module')): LayoutModule => {
				return module.LayoutModule;
			});
		}
	},
	{
		path: 'utilities',
		loadChildren: async(): Promise<UtilitiesModule> => {
			return await import('projects/easy-docs/src/app/utilities/utilities.module').then((module: typeof import('projects/easy-docs/src/app/utilities/utilities.module')): UtilitiesModule => {
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
