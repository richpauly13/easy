import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EasyModule } from 'easy-framework';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CssComponent } from './components/css.component';

@NgModule({
	imports: [BrowserModule, EasyModule, AppRoutingModule],
	declarations: [AppComponent, CssComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
