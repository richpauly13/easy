import { NgModule } from '@angular/core';

import { CardComponent } from './card.component';
import { CardDirective } from './card.directive';

@NgModule({
	declarations: [CardComponent, CardDirective],
	exports: [CardComponent, CardDirective]
})
export class CardModule {}
