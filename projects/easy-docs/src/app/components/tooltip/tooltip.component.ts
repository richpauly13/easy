import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-tooltip',
	templateUrl: './tooltip.component.html',
	styleUrls: [
		'./tooltip.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Components - Tooltip - EASY');
	}
}
