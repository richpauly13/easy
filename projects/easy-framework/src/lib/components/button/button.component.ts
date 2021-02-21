import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-button, .btn, .btn-full, .btn-lg, .btn-md, .btn-sm, .btn-xl, .btn-xs',
	templateUrl: './button.component.html',
	styleUrls: [
		'./button.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
	@HostBinding('attr.disabled') public isHostDisabled: string | null;
	@HostBinding('attr.type')
	public get type(): string {
		return this.hostType;
	}

	public set type(type: string) {
		this.hostType = type || 'button';
	}

	@Input()
	public get disabled(): string | null {
		return this.isDisabled;
	}

	public set disabled(disabled: string | null) {
		this.isDisabled = disabled === '' ? 'true' : null;
	}

	private hostType: string;
	private isDisabled: string | null;

	public constructor() {
		this.hostType = '';
		this.isDisabled = null;
		this.isHostDisabled = null;
	}

	public ngOnInit(): void {
		this.isHostDisabled = this.isDisabled;
		this.type = this.hostType;
	}
}
