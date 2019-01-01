import { Component, Input, HostBinding, OnInit } from '@angular/core';

@Component({
	selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
	@HostBinding('attr.aria-labelledby') public ariaLabelledby: string;
	@HostBinding('attr.class') public hostClass: string;
	@HostBinding('attr.role') public role: string;
	@HostBinding('attr.tabindex') public tabindex: string;
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

	public close: boolean;
	public id: string;

	private classList: string;

	public constructor() {}

	public ngOnInit(): void {
		this.hostClass = this.class;
		this.tabindex = '-1';
	}
}
