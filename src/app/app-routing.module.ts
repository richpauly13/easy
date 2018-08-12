import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
    {
        path: 'components',
        component: ComponentsComponent
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
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
