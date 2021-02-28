import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

import { AlertService } from './alert.service';

@Component({
	selector: '.alert-bad, .alert-good, .alert-info, .alert-warn',
	templateUrl: './alert.component.html',
	styleUrls: [
		'./alert.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {
	@HostBinding('attr.aria-labelledby')
	public get hostAriaLabelledby(): string {
		const alertCounter: number = this.alertService.alertCounter;

		this.id = `${this.class.match(/\balert\S+\b/u)![0]}-${alertCounter}`;

		return `${this.class.match(/\balert\S+\b/u)![0]}-${alertCounter}`;
	}

	@HostBinding('attr.class')
	public get hostClass(): string {
		if (this.class.includes('close')) {
			this.class = this.class.replace(/ close|close /gu, '');
			this.close = true;
		}

		return this.class;
	}

	@HostBinding('attr.role')
	public get hostRole(): string {
		return this.close ? 'alertdialog' : 'alert';
	}

	@HostBinding('attr.tabindex')
	public get hostTabindex(): string {
		return '-1';
	}

	@Input() public class: string ;

	public close: boolean;
	public id: string;

	public constructor(private alertService: AlertService) {
		this.class = '';
		this.close = false;
		this.id = '';
	}

	public onClose(): void {
		this.class = this.class ? `${this.class} hide` : 'hide';
	}

	public onTrap(event: KeyboardEvent): void {
		if (event.key === 'Tab' || (event.shiftKey && event.key === 'Tab')) {
			event.preventDefault();
		}
	}
}
