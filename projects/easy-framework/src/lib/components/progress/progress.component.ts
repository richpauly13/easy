import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-progress',
	templateUrl: './progress.component.html',
	styleUrls: [
		'./progress.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressComponent {

}
