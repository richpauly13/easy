import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-progress',
	templateUrl: './progress.component.html',
	styleUrls: ['./progress.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Components - Progress - EASY');
	}
}
