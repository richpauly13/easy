import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComponentsModule, EasyModule, LayoutModule } from 'easy-framework';

@NgModule({
	exports: [
		CommonModule,
		ComponentsModule,
		EasyModule,
		LayoutModule,
		ReactiveFormsModule,
		RouterModule
	]
})
export class SharedModule { }
