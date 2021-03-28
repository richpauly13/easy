import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Components - Alert - EASY');
	}
}
