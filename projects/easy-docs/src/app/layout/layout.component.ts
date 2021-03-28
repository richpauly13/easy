import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'docs-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
	public navs: string[];

	public constructor() {
		this.navs = [
			'container',
			'flexbox',
			'grid',
			'nav'
		];
	}

	public trackById(navIndex: number, nav: string): string {
		return `${nav}${navIndex}`;
	}
}
