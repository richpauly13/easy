import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from 'easy-framework';

import { CssComponent } from './css.component';

@NgModule({
	declarations: [CssComponent],
	imports: [CommonModule, ComponentsModule]
})
export class CssModule {}
