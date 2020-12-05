import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-container',
	templateUrl: './container.component.html',
	styleUrls: [
		'./container.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Layout - Container - EASY');
	}
}
