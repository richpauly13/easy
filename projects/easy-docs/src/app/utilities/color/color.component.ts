import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'docs-color',
	templateUrl: './color.component.html',
	styleUrls: [
		'./color.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorComponent {

}
