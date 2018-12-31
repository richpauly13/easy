import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { TableDirective } from './table.directive';

@NgModule({
	declarations: [
		// prettier-ignore
		TableComponent,
		TableDirective
	],
	exports: [
		// prettier-ignore
		TableComponent,
		TableDirective
	]
})
export class TableModule {}
