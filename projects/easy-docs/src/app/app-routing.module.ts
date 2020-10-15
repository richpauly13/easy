import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './components/components.module';

import { HomeComponent } from './home/home.component';
import { LayoutModule } from './layout/layout.module';
import { UtilitiesModule } from './utilities/utilities.module';

const routes: Routes = [
	{
		path: 'components',
		loadChildren: (): Promise<ComponentsModule> => import('projects/easy-docs/src/app/components/components.module').then((mod): ComponentsModule => mod.ComponentsModule)
	},
	{
		path: 'layout',
		loadChildren: (): Promise<LayoutModule> => import('projects/easy-docs/src/app/layout/layout.module').then((mod): LayoutModule => mod.LayoutModule)
	},
	{
		path: 'utilities',
		loadChildren: (): Promise<UtilitiesModule> => import('projects/easy-docs/src/app/utilities/utilities.module').then((mod): UtilitiesModule => mod.UtilitiesModule)
	},
	{
		component: HomeComponent,
		path: 'home'
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
