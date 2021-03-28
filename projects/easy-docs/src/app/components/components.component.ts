import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'docs-components',
	templateUrl: './components.component.html',
	styleUrls: ['./components.component.scss'],
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
			'slideshow',
			'spinner',
			'switch',
			'tab',
			'table',
			'tooltip'
		];
	}

	public trackById(navIndex: number, nav: string): string {
		return `${nav}${navIndex}`;
	}
}
