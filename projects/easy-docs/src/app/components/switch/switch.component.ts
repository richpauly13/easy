import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-switch',
	templateUrl: './switch.component.html',
	styleUrls: [
		'./switch.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Components - Switch - EASY');
	}
}
