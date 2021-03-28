import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-grid',
	templateUrl: './grid.component.html',
	styleUrls: ['./grid.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Layout - Grid - EASY');
	}
}
