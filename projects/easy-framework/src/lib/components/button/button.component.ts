import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-button, .btn, .btn-full, .btn-lg, .btn-md, .btn-sm, .btn-xl, .btn-xs, .btn-group-col, .btn-group-full, .btn-group-row',
	templateUrl: './button.component.html',
	styleUrls: [
		'./button.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
	@HostBinding('attr.disabled')
	public get hostDisabled(): string | null {
		return this.disabled === '' ? 'true' : null;
	}

	@HostBinding('attr.role')
	public get hostRole(): string | null {
		return this.class?.includes('group') ? 'group' : null;
	}

	@HostBinding('attr.type')
	public get hostType(): string | null {
		return this.class?.includes('group') ? null : this.type || 'button';
	}

	@Input() public class: string | null;
	@Input() public disabled: string | null;
	@Input() public role: string | null;
	@Input() public type: string | null;

	public constructor() {
		this.class = null;
		this.disabled = null;
		this.role = null;
		this.type = null;
	}
}
