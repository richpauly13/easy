import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'docs-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
	public navs: string[];

	public ngOnInit(): void {
		this.navs = [
			'container',
			'flexbox',
			'grid',
			'multi-column',
			'nav',
			'sticky-footer'
		];
	}
}
