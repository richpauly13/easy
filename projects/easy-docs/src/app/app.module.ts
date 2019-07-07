import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from './layout/layout.module';
import { UtilitiesModule } from './utilities/utilities.module';

@NgModule({
	imports: [
		BrowserModule,
		ComponentsModule,
		LayoutModule,
		UtilitiesModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		HomeComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
