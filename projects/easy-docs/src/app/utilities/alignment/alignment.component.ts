import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-alignment',
	templateUrl: './alignment.component.html',
	styleUrls: ['./alignment.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlignmentComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Utilities - Alignment - EASY');
	}
}
