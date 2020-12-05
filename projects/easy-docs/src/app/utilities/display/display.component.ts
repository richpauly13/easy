import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-display',
	templateUrl: './display.component.html',
	styleUrls: [
		'./display.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Utilities - Display - EASY');
	}
}
