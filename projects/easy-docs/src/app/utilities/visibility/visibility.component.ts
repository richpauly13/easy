import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-visibility',
	templateUrl: './visibility.component.html',
	styleUrls: [
		'./visibility.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisibilityComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Utilities - Visibility - EASY');
	}
}
