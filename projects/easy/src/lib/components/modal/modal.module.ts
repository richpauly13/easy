import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalDirective } from './modal.directive';

@NgModule({
	declarations: [ModalComponent, ModalDirective],
	exports: [ModalComponent, ModalDirective]
})
export class ModalModule {}
