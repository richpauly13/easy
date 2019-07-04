import { NgModule } from '@angular/core';

import { CssComponent } from './css.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		CssComponent
	],
	imports: [
		SharedModule
	],
	exports: [
		CssComponent,
		SharedModule
	]
})
export class CssModule {}
