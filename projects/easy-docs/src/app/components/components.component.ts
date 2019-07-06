import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'docs-components',
	templateUrl: './components.component.html',
	styleUrls: [
		'./components.component.scss'
	]
})
export class ComponentsComponent implements OnInit {
	public navs: string[];

	public constructor() {}

	public ngOnInit(): void {
		this.navs = [
			'alert',
			'badge',
			'button',
			'card',
			'collapse',
			'form',
			'modal',
			'nav',
			'slider',
			'slideshow',
			'spinner',
			'switch',
			'tab',
			'table',
			'tooltip'
		];
	}
}
