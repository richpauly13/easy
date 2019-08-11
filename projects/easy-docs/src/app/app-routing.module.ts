import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: 'components',
		loadChildren: (): Promise<any> => import('projects/easy-docs/src/app/components/components.module').then((mod) => mod.ComponentsModule),
	},
	{
		path: 'layout',
		loadChildren: (): Promise<any> => import('projects/easy-docs/src/app/layout/layout.module').then((mod) => mod.LayoutModule),
	},
	{
		path: 'utilities',
		loadChildren: (): Promise<any> => import('projects/easy-docs/src/app/utilities/utilities.module').then((mod) => mod.UtilitiesModule),
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
