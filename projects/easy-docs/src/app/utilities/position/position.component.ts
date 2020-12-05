import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-position',
	templateUrl: './position.component.html',
	styleUrls: [
		'./position.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PositionComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Utilities - Position - EASY');
	}
}
