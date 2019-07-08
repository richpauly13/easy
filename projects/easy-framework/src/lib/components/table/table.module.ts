import { NgModule } from '@angular/core';

import { TableComponent } from './table.component';
import { TableDirective } from './table.directive';

@NgModule({
	declarations: [
		TableComponent,
		TableDirective
	],
	exports: [
		TableComponent,
		TableDirective
	]
})
export class TableModule { }
