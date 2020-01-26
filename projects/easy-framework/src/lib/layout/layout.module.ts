import { NgModule } from '@angular/core';

import { ContainerModule } from './container/container.module';
import { FlexboxModule } from './flexbox/flexbox.module';
import { GridModule } from './grid/grid.module';
import { NavModule } from './nav/nav.module';
import { StickyFooterModule } from './sticky-footer/sticky-footer.module';

@NgModule({
	exports: [
		ContainerModule,
		FlexboxModule,
		GridModule,
		NavModule,
		StickyFooterModule
	]
})
export class LayoutModule { }
