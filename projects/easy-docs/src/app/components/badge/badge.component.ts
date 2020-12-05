import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-badge',
	templateUrl: './badge.component.html',
	styleUrls: [
		'./badge.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Components - Badge - EASY');
	}
}
