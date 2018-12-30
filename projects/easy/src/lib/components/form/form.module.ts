import { NgModule } from '@angular/core';

import { FormComponent } from './form.component';
import { FormDirective } from './form.directive';

@NgModule({
	declarations: [FormComponent, FormDirective],
	exports: [FormComponent, FormDirective]
})
export class FormModule {}
