import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from './components/components.module';
import { LayoutModule } from './layout/layout.module';
import { UtilitiesModule } from './utilities/utilities.module';

const routes: Routes = [
	{
		path: 'components',
		loadChildren: (): Promise<ComponentsModule> => import('projects/easy-docs/src/app/components/components.module').then((module: typeof import('projects/easy-docs/src/app/components/components.module')): ComponentsModule => module.ComponentsModule)
	},
	{
		path: 'layout',
		loadChildren: (): Promise<LayoutModule> => import('projects/easy-docs/src/app/layout/layout.module').then((module: typeof import('projects/easy-docs/src/app/layout/layout.module')): LayoutModule => module.LayoutModule)
	},
	{
		path: 'utilities',
		loadChildren: (): Promise<UtilitiesModule> => import('projects/easy-docs/src/app/utilities/utilities.module').then((module: typeof import('projects/easy-docs/src/app/utilities/utilities.module')): UtilitiesModule => module.UtilitiesModule)
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
	exports: [
		RouterModule
	],
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: PreloadAllModules,
			useHash: true
		})
	]
})
export class AppRoutingModule { }
