import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: '.spinner, .spinner-dotted',
	templateUrl: './spinner.component.html',
	styleUrls: [
		'./spinner.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {

}
