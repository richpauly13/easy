import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from './components/components.module';
import { EasyComponent } from './easy.component';

@NgModule({
	imports: [RouterModule],
	declarations: [EasyComponent],
	exports: [ComponentsModule, EasyComponent]
})
export class EasyModule {}
