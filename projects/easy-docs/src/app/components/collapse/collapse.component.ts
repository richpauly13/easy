import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-collapse',
	templateUrl: './collapse.component.html',
	styleUrls: [
		'./collapse.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollapseComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Components - Collapse - EASY');
	}
}
