import { NgModule } from '@angular/core';

import { CollapsibleComponent } from './collapsible.component';
import { CollapsibleDirective } from './collapsible.directive';

@NgModule({
	declarations: [CollapsibleComponent, CollapsibleDirective],
	exports: [CollapsibleComponent, CollapsibleDirective]
})
export class CollapsibleModule {}
