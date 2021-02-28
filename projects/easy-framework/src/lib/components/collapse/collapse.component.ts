import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: '.collapse',
	templateUrl: './collapse.component.html',
	styleUrls: [
		'./collapse.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollapseComponent {

}
