import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
	templateUrl: './alert.component.html',
	styleUrls: [
		'./alert.component.scss'
	],
	encapsulation: ViewEncapsulation.None
})
export class AlertComponent implements OnInit {
	@HostBinding('attr.aria-labelledby') public ariaLabelledBy: string;
	@HostBinding('attr.class') public hostClass: string;

	@HostBinding('attr.tabindex') public tabindex: string;

	@Input()
	public set class(classList: string) {
		if (classList.includes('close')) {
			this.classList = classList.replace(/ close|close /g, '');
			this.close = true;
			this.renderer2.setAttribute(this.elementRef.nativeElement, 'role', 'alertdialog');
		} else {
			this.classList = classList;
			this.close = false;
			this.renderer2.setAttribute(this.elementRef.nativeElement, 'role', 'alert');
		}

		this.ariaLabelledBy = this.id = this.class.match(/\balert\S+\b/)[0];
	}

	public get class(): string {
		return this.classList;
	}

	public close: boolean;
	public id: string;

	private classList: string;

	public constructor(private readonly elementRef: ElementRef, private readonly renderer2: Renderer2) { }

	public closeAlert(): void {
		this.hostClass = 'hide';
	}

	public ngOnInit(): void {
		this.hostClass = this.class;
		this.tabindex = '-1';
	}

	public trap(): void {
		this.elementRef.nativeElement.focus();
	}
}
