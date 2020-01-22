import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-table, .table, .table-bordered, .table-cell, .table-header, .table-header-cell, .table-hover, .table-row, .table-striped',
	templateUrl: './table.component.html',
	styleUrls: [
		'./table.component.scss'
	],
	encapsulation: ViewEncapsulation.None
})
export class TableComponent {
	@HostBinding('attr.role') public role: string;

	private classList: string;

	@Input()
	public set class(classList: string) {
		if (classList.includes('table-cell')) {
			this.role = 'gridcell';
		} else if ((classList.includes('table-header') && !classList.includes('table-header-cell')) || classList.includes('table-row')) {
			this.role = 'row';
		} else if (classList.includes('table-header-cell')) {
			this.role = 'columnheader';
		} else {
			this.role = 'grid';
		}

		this.classList = classList;
	}

	public get class(): string {
		return this.classList;
	}
}
