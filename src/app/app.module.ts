import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EasyModule } from 'easy';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CssComponent } from './css/css.component';

@NgModule({
	imports: [
		AppRoutingModule,
		BrowserModule,
		EasyModule
	],
	declarations: [
		AppComponent,
		CssComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {

}
