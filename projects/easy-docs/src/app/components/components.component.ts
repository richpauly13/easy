import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ComponentsService } from './components.service';

@Component({
	selector: 'docs-components',
	templateUrl: './components.component.html',
	styleUrls: ['./components.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsComponent implements OnInit {
	public navs: string[];

	public constructor(private componentsService: ComponentsService, private router: Router) { }

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

		if (this.router.url.includes('/components/')) {
			this.onSetNav(this.router.url.split('/')[2]);
			this.router.navigate([this.router.url]);
		} else {
			this.router.navigate(['/components/', this.componentsService.nav]);
		}
	}

	public onSetNav(nav: string): void {
		this.componentsService.nav = nav;
	}
}
