import { NgModule } from '@angular/core';

import { AlertModule } from './alert/alert.module';
import { BadgeModule } from './badge/badge.module';
import { ButtonModule } from './button/button.module';
import { CardModule } from './card/card.module';
import { CollapsibleModule } from './collapsible/collapsible.module';

@NgModule({
	exports: [AlertModule, BadgeModule, ButtonModule, CardModule, CollapsibleModule]
})
export class ComponentsModule {}
