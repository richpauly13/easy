import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EasyModule } from 'easy-framework';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CssModule } from './components/css.module';

@NgModule({
	imports: [BrowserModule, EasyModule, AppRoutingModule, CssModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
