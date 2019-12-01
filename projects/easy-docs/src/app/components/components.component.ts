import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'docs-components',
	styleUrls: [
		'./components.component.scss'
	],
	templateUrl: './components.component.html'
})
export class ComponentsComponent implements OnInit {
	public navs: string[];

	public ngOnInit(): void {
		this.navs = [
			'alert',
			'badge',
			'button',
			'card',
			'collapse',
			'form',
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
