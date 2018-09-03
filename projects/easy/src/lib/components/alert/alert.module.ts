import { NgModule } from '@angular/core';

import { AlertComponent } from './alert.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		AlertComponent
	],
	exports: [
		AlertComponent
	]
})
export class AlertModule {

}
