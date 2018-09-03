import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
import { CoreModule } from './core/core.module';
import { EasyComponent } from './easy.component';

@NgModule({
	imports: [
		ComponentsModule
	],
	declarations: [
		EasyComponent
	],
	exports: [
		ComponentsModule,
		CoreModule,
		EasyComponent
	]
})
export class EasyModule {

}
