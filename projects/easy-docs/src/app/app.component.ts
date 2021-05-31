import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'docs-root',
	templateUrl: './app.component.html',
	styleUrls: [
		'./app.component.scss'
	],
	encapsulation: ViewEncapsulation.Emulated,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	public navs: string[];

	public constructor() {
		this.navs = [
			'component',
			'layout',
			'utilities'
		];
	}

	public trackById(navIndex: number, nav: string): string {
		return `${nav}${navIndex}`;
	}
}
