import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from './components/components.module';
import { LayoutModule } from './layout/layout.module';
import { UtilitiesModule } from './utilities/utilities.module';

const routes: Routes = [
	{
		path: 'components',
		loadChildren: async(): Promise<ComponentsModule> => {
			return await import('projects/easy-docs/src/app/components/components.module').then((module: typeof import('projects/easy-docs/src/app/components/components.module')): ComponentsModule => {
				return module.ComponentsModule;
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
		redirectTo: 'components'
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: 'components'
	}
];

@NgModule({
	exports: [RouterModule],
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: PreloadAllModules,
			relativeLinkResolution: 'legacy',
			scrollPositionRestoration: 'top',
			useHash: true
		})
	]
})
export class AppRoutingModule { }
