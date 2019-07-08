import { NgModule } from '@angular/core';

import { AlertComponent } from './alert.component';
import { AlertDirective } from './alert.directive';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	declarations: [
		AlertComponent,
		AlertDirective
	],
	exports: [
		AlertComponent,
		AlertDirective
	],
	imports: [
		SharedModule
	]
})
export class AlertModule { }
