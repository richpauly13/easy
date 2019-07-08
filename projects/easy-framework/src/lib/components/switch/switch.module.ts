import { NgModule } from '@angular/core';

import { SwitchComponent } from './switch.component';
import { SwitchDirective } from './switch.directive';

@NgModule({
	declarations: [
		SwitchComponent,
		SwitchDirective
	],
	exports: [
		SwitchComponent,
		SwitchDirective
	]
})
export class SwitchModule { }
