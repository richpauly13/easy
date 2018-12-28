import { NgModule } from '@angular/core';

import { AlertModule } from './alert/alert.module';
import { BadgeModule } from './badge/badge.module';

@NgModule({
	exports: [AlertModule, BadgeModule]
})
export class ComponentsModule {}
