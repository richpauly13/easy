import { NgModule } from '@angular/core';

import { ButtonComponent } from './button.component';
import { ButtonDirective } from './button.directive';

@NgModule({
	declarations: [ButtonComponent, ButtonDirective],
	exports: [ButtonComponent, ButtonDirective]
})
export class ButtonModule {}
