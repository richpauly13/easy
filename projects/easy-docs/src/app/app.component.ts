import { Component } from '@angular/core';

@Component({
	selector: 'docs-root',
	styleUrls: [
		'./app.component.scss'
	],
	templateUrl: './app.component.html'
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
}
