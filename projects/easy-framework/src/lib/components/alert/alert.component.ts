import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

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
export class AlertComponent implements OnInit {
	@HostBinding('attr.aria-hidden')
	public get hostAriaHidden(): string | null {
		return this.class.includes('hide') ? 'true' : null;
	}

	@HostBinding('attr.aria-labelledby')
	public get hostAriaLabelledby(): string {
		const alertId: string = `alert-${this.uniqueAlertId}`;

		this.alertId = alertId;

		return alertId;
	}

	@HostBinding('attr.class')
	public get hostClass(): string {
		return this.class;
	}

	@HostBinding('attr.role')
	public get hostRole(): string {
		return this.hasClose ? 'alertdialog' : 'alert';
	}

	@HostBinding('attr.tabindex')
	public get hostTabindex(): string {
		return '-1';
	}

	@Input() public class: string;

	public get alertId(): string {
		return this.currentAlertId;
	}

	public set alertId(alertId: string) {
		this.currentAlertId = alertId;
	}

	public get hasClose(): boolean {
		return this.currentHasClose;
	}

	public set hasClose(hasClose: boolean) {
		this.currentHasClose = hasClose;
	}

	private currentAlertId: string;
	private currentHasClose: boolean;
	private uniqueAlertId: number;

	public constructor(private alertService: AlertService) {
		this.class = '';
		this.currentAlertId = '';
		this.currentHasClose = false;
		this.uniqueAlertId = this.alertService.uniqueAlertId;
	}

	public ngOnInit(): void {
		this.uniqueAlertId = this.alertService.uniqueAlertId++;

		if (this.class.includes('close')) {
			this.class = this.class.replace(/ close|close /gu, '');
			this.hasClose = true;
		} else {
			this.hasClose = false;
		}
	}

	public onClose(): void {
		this.class = 'hide';
	}

	public onTrap(event: KeyboardEvent): void {
		if (event.key === 'Tab' || (event.shiftKey && event.key === 'Tab')) {
			event.preventDefault();
		}
	}
}
