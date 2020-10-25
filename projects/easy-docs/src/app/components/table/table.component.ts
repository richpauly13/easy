import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'docs-table',
	templateUrl: './table.component.html',
	styleUrls: [
		'./table.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {

}
