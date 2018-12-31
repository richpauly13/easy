import { NgModule } from '@angular/core';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
	declarations: [
		// prettier-ignore
		TooltipComponent,
		TooltipDirective
	],
	exports: [
		// prettier-ignore
		TooltipComponent,
		TooltipDirective
	]
})
export class TooltipModule {}
