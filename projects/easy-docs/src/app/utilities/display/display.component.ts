import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'docs-display',
	templateUrl: './display.component.html',
	styleUrls: [
		'./display.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent {

}
