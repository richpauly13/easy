import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: '.switch',
	templateUrl: './switch.component.html',
	styleUrls: [
		'./switch.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchComponent {

}
