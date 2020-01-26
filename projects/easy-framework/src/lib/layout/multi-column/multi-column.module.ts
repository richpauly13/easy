import { NgModule } from '@angular/core';

import { MultiColumnComponent } from './multi-column.component';
import { MultiColumnDirective } from './multi-column.directive';

@NgModule({
	declarations: [
		MultiColumnComponent,
		MultiColumnDirective
	],
	exports: [
		MultiColumnComponent,
		MultiColumnDirective
	]
})
export class MultiColumnModule { }
