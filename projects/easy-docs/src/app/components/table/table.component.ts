import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-table',
	templateUrl: './table.component.html',
	styleUrls: [
		'./table.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Components - Table - EASY');
	}
}
