import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-space',
	templateUrl: './space.component.html',
	styleUrls: [
		'./space.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpaceComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Utilities - Space - EASY');
	}
}
