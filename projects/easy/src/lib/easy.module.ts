import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { EasyComponent } from './easy.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
	imports: [
		CoreModule,
		SharedModule
	],
	declarations: [
		EasyComponent
	],
	exports: [
		CoreModule,
		EasyComponent,
		SharedModule
	]
})
export class EasyModule {

}
