import { Component, Input, HostBinding, OnInit } from '@angular/core';

@Component({
	selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
	templateUrl: './alert.component.html',
	styleUrls: [
		'./alert.component.scss'
	]
})
export class AlertComponent implements OnInit {
	@HostBinding('attr.aria-describedby') ariaDescribedby: string;
	@HostBinding('attr.aria-labelledby') ariaLabelledby: string;
	@HostBinding('attr.class') hostClass: string;
	@HostBinding('attr.role') role: string;
	@HostBinding('attr.tabindex') tabindex: string;
	@Input()
	public set class(childClass: string) {
		if (childClass.includes('close')) {
			this.childClass = childClass.replace(/ close/g, '');
			this.close = true;
			this.role = 'alertdialog';
		} else {
			this.childClass = childClass;
			this.role = 'alert';
		}
	}

	public get class(): string {
		return this.childClass;
	}

	public close: boolean;

	private childClass: string;

	public constructor() {

	}

	public ngOnInit(): void {
		this.hostClass = this.class;
		this.tabindex = '-1';
	}
}
