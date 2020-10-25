import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'docs-tab',
	templateUrl: './tab.component.html',
	styleUrls: [
		'./tab.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent {

}
