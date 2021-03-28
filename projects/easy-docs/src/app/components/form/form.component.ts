import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Components - Form - EASY');
	}
}
