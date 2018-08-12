import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsComponent } from './components/components.component';

@NgModule({
    declarations: [
        AppComponent,
        ComponentsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
