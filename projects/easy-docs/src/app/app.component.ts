import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'docs-root',
	templateUrl: './app.component.html',
	styleUrls: [
		'./app.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	public navs: string[];

	public constructor() {
		this.navs = [
			'components',
			'layout',
			'utilities'
		];
	}

	public trackById(navIndex: number, nav: string): string {
		return `${nav}${navIndex}`;
	}
}
