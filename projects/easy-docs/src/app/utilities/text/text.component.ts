import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-text',
	templateUrl: './text.component.html',
	styleUrls: ['./text.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Utilities - Text - EASY');
	}
}
