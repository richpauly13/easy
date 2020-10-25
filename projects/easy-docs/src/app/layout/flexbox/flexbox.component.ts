import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'docs-flexbox',
	templateUrl: './flexbox.component.html',
	styleUrls: [
		'./flexbox.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlexboxComponent {

}
