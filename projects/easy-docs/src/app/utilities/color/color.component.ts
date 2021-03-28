import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-color',
	templateUrl: './color.component.html',
	styleUrls: ['./color.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Utilities - Color - EASY');
	}
}
