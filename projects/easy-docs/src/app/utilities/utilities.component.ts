import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'docs-utilities',
	templateUrl: './utilities.component.html',
	styleUrls: [
		'./utilities.component.scss'
	]
})
export class UtilitiesComponent implements OnInit {
	public navs: string[];

	public constructor() { }

	public ngOnInit(): void {
		this.navs = [
			'space',
			'typography',
			'visibility'
		];
	}
}
