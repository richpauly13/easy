import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'docs-alert',
	templateUrl: './alert.component.html',
	styleUrls: [
		'./alert.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {

}
