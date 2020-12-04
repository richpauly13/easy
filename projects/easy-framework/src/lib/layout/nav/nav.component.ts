import { ChangeDetectionStrategy, Component, ElementRef, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-nav, .nav-h, .nav-v',
	templateUrl: './nav.component.html',
	styleUrls: [
		'./nav.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
	private isActive: boolean;

	public constructor(private renderer2: Renderer2) {
		this.isActive = false;
	}

	public ngOnInit(): void {
		try {
			const element: ElementRef = this.renderer2.selectRootElement('.nav-toggle');

			this.renderer2.listen(element, 'click', (): void => {
				this.onToggle(element);
			});
		} catch (error: unknown) {
			throw new Error(`${error}`);
		}
	}

	private onToggle(element: ElementRef): void {
		this.isActive ? this.renderer2.removeClass(element, 'active') : this.renderer2.addClass(element, 'active');
		this.isActive = !this.isActive;
	}
}
