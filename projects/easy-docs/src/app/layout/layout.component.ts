import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LayoutService } from './layout.service';

@Component({
	selector: 'docs-layout',
	templateUrl: './layout.component.html',
	styleUrls: [
		'./layout.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
	public navs: string[];

	public constructor(private layoutService: LayoutService, private router: Router) {
		this.navs = [
			'container',
			'flexbox',
			'grid',
			'nav'
		];
	}

	public ngOnInit(): void {
		if (this.router.url.includes('/layout/')) {
			this.onSetNav(this.router.url.split('/')[2]);
			this.router.navigate([
				this.router.url
			]);
		} else {
			this.router.navigate([
				'/layout',
				this.layoutService.nav
			]);
		}
	}

	public onSetNav(nav: string): void {
		this.layoutService.nav = nav;
	}

	public trackById(navIndex: number, nav: string): string {
		return `${nav}${navIndex}`;
	}
}
