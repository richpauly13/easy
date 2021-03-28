import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule
	]
})
export class AppModule { }
