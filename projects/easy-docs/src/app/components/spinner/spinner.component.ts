import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-spinner',
	templateUrl: './spinner.component.html',
	styleUrls: [
		'./spinner.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Components - Spinner - EASY');
	}
}
