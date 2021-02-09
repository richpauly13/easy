import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UtilitiesService } from './utilities.service';

@Component({
	selector: 'docs-utilities',
	templateUrl: './utilities.component.html',
	styleUrls: [
		'./utilities.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UtilitiesComponent implements OnInit {
	public navs: string[];

	public constructor(private utilitiesService: UtilitiesService, private router: Router) {
		this.navs = [
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

	public ngOnInit(): void {
		if (this.router.url.includes('/utilities/')) {
			this.onSetNav(this.router.url.split('/')[2]);
			this.router.navigate([
				this.router.url
			]);
		} else {
			this.router.navigate([
				'/utilities/',
				this.utilitiesService.nav
			]);
		}
	}

	public onSetNav(nav: string): void {
		this.utilitiesService.nav = nav;
	}

	public trackById(navIndex: number, nav: string): string {
		return `${nav}${navIndex}`;
	}
}
