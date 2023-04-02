import { NgModule } from '@angular/core';

import { AlertComponent } from './alert.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	declarations: [AlertComponent],
	exports: [AlertComponent],
	imports: [SharedModule]
})
export class AlertModule { }
