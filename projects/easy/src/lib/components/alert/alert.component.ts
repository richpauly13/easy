import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
	selector: 'ez-alert, .alert-bad, .alert-good, .alert-info, .alert-warn',
	templateUrl: './alert.component.html',
	styleUrls: [
		'./alert.component.scss'
	]
})
export class AlertComponent implements OnInit {
	@HostBinding('attr.class') hostClass: string;
	@Input()
	public set class(childClass: string) {
		if (childClass.includes('close')) {
			this.childClass = childClass.replace(/ close/g, '');
			this.close = true;
		} else {
			this.childClass = childClass;
		}

		this.hostClass = this.class;
	}

	public get class(): string {
		return this.childClass;
	}

	public close: boolean;

	private childClass: string;

	public constructor() {

	}

	public ngOnInit(): void {

	}
}
