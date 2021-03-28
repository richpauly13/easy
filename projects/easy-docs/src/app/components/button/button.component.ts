import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Components - Button - EASY');
	}
}
