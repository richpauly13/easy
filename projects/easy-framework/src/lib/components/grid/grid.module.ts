import { NgModule } from '@angular/core';

import { GridComponent } from './grid.component';
import { GridDirective } from './grid.directive';

@NgModule({
	declarations: [
		// prettier-ignore
		GridComponent,
		GridDirective
	],
	exports: [
		// prettier-ignore
		GridComponent,
		GridDirective
	]
})
export class GridModule {}
