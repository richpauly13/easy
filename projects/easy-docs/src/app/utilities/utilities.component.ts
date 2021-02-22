import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'docs-utilities',
	templateUrl: './utilities.component.html',
	styleUrls: [
		'./utilities.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UtilitiesComponent {
	public navs: string[];

	public constructor() {
		this.navs = [
			'alignment',
			'color',
			'dimension',
			'display',
			'position',
			'space',
			'text',
			'typography',
			'visibility'
		];
	}

	public trackById(navIndex: number, nav: string): string {
		return `${nav}${navIndex}`;
	}
}
