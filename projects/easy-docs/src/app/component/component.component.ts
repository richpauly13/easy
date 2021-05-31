import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'docs-component',
	templateUrl: './component.component.html',
	styleUrls: [
		'./component.component.scss'
	],
	encapsulation: ViewEncapsulation.Emulated,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentComponent {
	public navs: string[];

	public constructor() {
		this.navs = [
			'alert',
			'badge',
			'button',
			'card',
			'form',
			'progress',
			'slider',
			'spinner',
			'switch',
			'tab',
			'table'
		];
	}

	public trackById(navIndex: number, nav: string): string {
		return `${nav}${navIndex}`;
	}
}
