import { Component, ElementRef, Input, HostBinding, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
	@Input()
	public set class(classList: string) {
		if (classList.includes('close')) {
			this.classList = classList.replace(/ close|close /g, '');
			this.close = true;
			this.role = 'alertdialog';
		} else {
			this.classList = classList;
			this.close = false;
			this.role = 'alert';
		}

		this.ariaLabelledby = this.id = this.class.match(/\balert\S+\b/)[0];
	}

	public get class(): string {
		return this.classList;
	}
	@HostBinding('attr.aria-labelledby') public ariaLabelledby: string;

	public close: boolean;
	@HostBinding('attr.class') public hostClass: string;
	public id: string;
	@ViewChild('message', { static: true }) public message: ElementRef;
	@HostBinding('attr.role') public role: string;
	@HostBinding('attr.tabindex') public tabindex: string;

	private classList: string;

	public constructor(private elementRef: ElementRef) {}

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
