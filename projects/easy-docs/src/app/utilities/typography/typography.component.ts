import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-typography',
	templateUrl: './typography.component.html',
	styleUrls: [
		'./typography.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypographyComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Utilities - Typography - EASY');
	}
}
