import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'docs-utilities',
	styleUrls: [
		'./utilities.component.scss'
	],
	templateUrl: './utilities.component.html'
})
export class UtilitiesComponent implements OnInit {
	public navs: string[];

	public ngOnInit(): void {
		this.navs = [
			'color',
			'space',
			'typography',
			'visibility',
			'width'
		];
	}
}
