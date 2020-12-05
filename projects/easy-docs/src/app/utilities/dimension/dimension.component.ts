import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-dimension',
	templateUrl: './dimension.component.html',
	styleUrls: [
		'./dimension.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DimensionComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Utilities - Dimension - EASY');
	}
}
