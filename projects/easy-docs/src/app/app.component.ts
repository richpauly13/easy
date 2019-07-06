import { Component } from '@angular/core';

@Component({
	selector: 'docs-root',
	templateUrl: './app.component.html',
	styleUrls: [
		'./app.component.scss'
	]
})
export class AppComponent {
	public navs: string[];

	public constructor() {
		this.navs = [
			'components',
			'layout',
			'typography',
			'utilities'
		];
	}
}
