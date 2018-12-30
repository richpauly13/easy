import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalDirective } from './modal.directive';

@NgModule({
	declarations: [
		// prettier-ignore
		ModalComponent,
		ModalDirective
	],
	exports: [
		// prettier-ignore
		ModalComponent,
		ModalDirective
	]
})
export class ModalModule {}
