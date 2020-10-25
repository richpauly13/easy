import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'docs-visibility',
	templateUrl: './visibility.component.html',
	styleUrls: [
		'./visibility.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisibilityComponent {

}
