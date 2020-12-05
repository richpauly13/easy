import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-nav',
	templateUrl: './nav.component.html',
	styleUrls: [
		'./nav.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Layout - Nav - EASY');
	}
}
