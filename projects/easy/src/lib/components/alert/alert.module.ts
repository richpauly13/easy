import { NgModule } from '@angular/core';

import { AlertComponent } from './alert.component';
import { AlertDirective } from './alert.directive';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	imports: [
		// prettier-ignore
		SharedModule
	],
	declarations: [
		// prettier-ignore
		AlertComponent,
		AlertDirective
	],
	exports: [
		// prettier-ignore
		AlertComponent,
		AlertDirective
	]
})
export class AlertModule {}
