import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'docs-utilities',
	templateUrl: './utilities.component.html',
	styleUrls: ['./utilities.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UtilitiesComponent {
	public navs: string[];

	public constructor() {
		this.navs = [
			'alignment',
			'color',
			'container',
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
