import { NgModule } from '@angular/core';

import { CollapsibleComponent } from './collapsible.component';
import { CollapsibleDirective } from './collapsible.directive';

@NgModule({
	declarations: [
		// prettier-ignore
		CollapsibleComponent,
		CollapsibleDirective
	],
	exports: [
		// prettier-ignore
		CollapsibleComponent,
		CollapsibleDirective
	]
})
export class CollapsibleModule {}
