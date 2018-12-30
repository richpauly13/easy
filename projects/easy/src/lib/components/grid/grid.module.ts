import { NgModule } from '@angular/core';

import { GridComponent } from './grid.component';
import { GridDirective } from './grid.directive';

@NgModule({
	declarations: [GridComponent, GridDirective],
	exports: [GridComponent, GridDirective]
})
export class GridModule {}
