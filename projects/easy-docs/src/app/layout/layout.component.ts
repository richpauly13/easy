import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'docs-layout',
	templateUrl: './layout.component.html',
	styleUrls: [
		'./layout.component.scss'
	]
})
export class LayoutComponent implements OnInit {
	public navs: string[];

	public constructor() { }

	public ngOnInit(): void {
		this.navs = [
			'flexbox',
			'grid',
			'position'
		];
	}
}
