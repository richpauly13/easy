import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'docs-nav',
	templateUrl: './nav.component.html',
	styleUrls: [
		'./nav.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {

}
