import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CssComponent } from './css/css.component';

@NgModule({
	declarations: [
		AppComponent,
		CssComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {

}
