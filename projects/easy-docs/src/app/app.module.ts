import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { UtilitiesComponent } from './utilities/utilities.component';

@NgModule({
	imports: [
		BrowserModule,
		ComponentsModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		HomeComponent,
		LayoutComponent,
		UtilitiesComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
