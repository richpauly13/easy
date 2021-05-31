import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: '.table, .table-bordered, .table-cell, .table-header, .table-header-cell, .table-hover, .table-row, .table-striped, .table-wrapper',
	templateUrl: './table.component.html',
	styleUrls: [
		'./table.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
	@HostBinding('attr.role')
	public get hostRole(): string {
		if (this.class.includes('table-cell')) {
			return 'gridcell';
		} else if ((this.class.includes('table-header') && !this.class.includes('table-header-cell')) || this.class.includes('table-row')) {
			return 'row';
		} else if (this.class.includes('table-header-cell')) {
			return 'columnheader';
		} else {
			return 'grid';
		}
	}

	@Input() public class: string;

	public constructor() {
		this.class = '';
	}
}
