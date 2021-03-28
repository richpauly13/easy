import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-flexbox',
	templateUrl: './flexbox.component.html',
	styleUrls: ['./flexbox.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlexboxComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Layout - Flexbox - EASY');
	}
}
