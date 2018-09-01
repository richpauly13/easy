import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
import { CoreModule } from './core/core.module';
import { EasyComponent } from './easy.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
	imports: [
		ComponentsModule,
		CoreModule,
		SharedModule
	],
	declarations: [
		EasyComponent
	],
	exports: [
		ComponentsModule,
		CoreModule,
		EasyComponent,
		SharedModule
	]
})
export class EasyModule {

}
