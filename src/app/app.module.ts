import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EasyModule } from 'easy-framework';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
	imports: [BrowserModule, EasyModule, AppRoutingModule, ComponentsModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
