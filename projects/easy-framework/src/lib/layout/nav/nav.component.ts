import { Component, ElementRef, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

import { noop } from 'rxjs';

@Component({
	selector: 'ez-nav, .nav-h, .nav-v',
	templateUrl: './nav.component.html',
	styleUrls: [
		'./nav.component.scss'
	],
	encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {
	public get active(): boolean {
		return this.isActive;
	}

	public set active(active: boolean) {
		this.isActive = active;
	}

	public set toggle(element: any) {
		this.onToggle(element);
	}

	private isActive: boolean;

	public constructor(private readonly renderer2: Renderer2) { }

	public ngOnInit(): void {
		try  {
			const element: ElementRef = this.renderer2.selectRootElement('.nav-toggle');

			this.renderer2.listen(element, 'click', (): void => {
				this.onToggle(element);
			});
		} catch (error) {
			noop();
		}
	}

	private onToggle(element: any): void {
		if (!this.active) {
			this.renderer2.addClass(element, 'active');
		} else {
			this.renderer2.removeClass(element, 'active');
		}

		this.active = !this.active;
	}
}
