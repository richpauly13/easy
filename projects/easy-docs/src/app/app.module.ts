import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { CssModule } from './components/css.module';

@NgModule({
	imports: [
		BrowserModule,
		ComponentsModule,
		CssModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
