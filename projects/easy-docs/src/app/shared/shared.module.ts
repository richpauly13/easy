import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentsModule, EasyModule } from 'easy-framework';

@NgModule({
	exports: [
		CommonModule,
		ComponentsModule,
		EasyModule,
		RouterModule
	]
})
export class SharedModule { }
