import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentsModule, EasyModule, LayoutModule, UtilitiesModule } from 'easy-framework';

@NgModule({
	exports: [
		CommonModule,
		ComponentsModule,
		EasyModule,
		LayoutModule,
		RouterModule,
		UtilitiesModule
	]
})
export class SharedModule { }
