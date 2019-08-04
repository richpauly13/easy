import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'docs-layout',
	styleUrls: [
		'./layout.component.scss'
	],
	templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
	public navs: string[];

	public ngOnInit(): void {
		this.navs = [
			'container',
			'flexbox',
			'grid',
			'position'
		];
	}
}
