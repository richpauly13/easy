import { NgModule } from '@angular/core';

import { TabComponent } from './tab.component';
import { TabDirective } from './tab.directive';

@NgModule({
	declarations: [
		// prettier-ignore
		TabComponent,
		TabDirective
	],
	exports: [
		// prettier-ignore
		TabComponent,
		TabDirective
	]
})
export class TabModule {}
