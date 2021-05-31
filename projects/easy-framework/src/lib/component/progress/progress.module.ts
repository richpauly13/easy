import { NgModule } from '@angular/core';

import { ProgressComponent } from './progress.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	declarations: [
		ProgressComponent
	],
	exports: [
		ProgressComponent
	],
	imports: [
		SharedModule
	]
})
export class ProgressModule { }
