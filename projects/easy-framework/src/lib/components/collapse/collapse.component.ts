import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-collapse, .collapse',
	templateUrl: './collapse.component.html',
	styleUrls: [
		'./collapse.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollapseComponent {

}
