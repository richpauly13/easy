import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-tab',
	templateUrl: './tab.component.html',
	styleUrls: [
		'./tab.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Components - Tab - EASY');
	}
}
