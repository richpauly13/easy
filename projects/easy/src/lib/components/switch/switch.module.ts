import { NgModule } from '@angular/core';

import { SwitchComponent } from './switch.component';
import { SwitchDirective } from './switch.directive';

@NgModule({
	declarations: [
		// prettier-ignore
		SwitchComponent,
		SwitchDirective
	],
	exports: [
		// prettier-ignore
		SwitchComponent,
		SwitchDirective
	]
})
export class SwitchModule {}
