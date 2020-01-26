import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'docs-components',
	templateUrl: './components.component.html',
	styleUrls: ['./components.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsComponent implements OnInit {
	public navs: string[];

	public ngOnInit(): void {
		this.navs = [
			'alert',
			'badge',
			'button',
			'card',
			'collapse',
			'form',
			'slider',
			'slideshow',
			'spinner',
			'switch',
			'tab',
			'table',
			'tooltip'
		];
	}
}
