import { NgModule } from '@angular/core';

import { TabComponent } from './tab.component';
import { TabDirective } from './tab.directive';

@NgModule({
	declarations: [
		TabComponent,
		TabDirective
	],
	exports: [
		TabComponent,
		TabDirective
	]
})
export class TabModule { }
