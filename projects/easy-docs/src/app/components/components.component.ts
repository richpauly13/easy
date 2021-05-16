import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'docs-components',
	templateUrl: './components.component.html',
	styleUrls: [
		'./components.component.scss'
	],
	encapsulation: ViewEncapsulation.Emulated,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsComponent {
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
