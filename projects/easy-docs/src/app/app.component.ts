import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'docs-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
	public navs: string[];

	public ngOnInit(): void {
		this.navs = [
			'components',
			'layout',
			'utilities'
		];
	}
}
