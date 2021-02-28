import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: '.btn, .btn-full, .btn-lg, .btn-md, .btn-sm, .btn-xl, .btn-xs, .btn-group-col, .btn-group-full, .btn-group-row',
	templateUrl: './button.component.html',
	styleUrls: [
		'./button.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
	@HostBinding('attr.aria-label')
	public get hostAriaLabel(): string | null {
		if (this.ariaLabel) {
			return this.ariaLabel;
		} else if (this.class.includes('group')) {
			return this.class.match(/\bbtn-group\S+\b/u)![0];
		} else {
			return null;
		}
	}

	@HostBinding('attr.disabled')
	public get hostDisabled(): string | null {
		return this.disabled === '' ? 'true' : null;
	}

	@HostBinding('attr.role')
	public get hostRole(): string | null {
		return this.class.includes('group') ? 'group' : null;
	}

	@HostBinding('attr.type')
	public get hostType(): string | null {
		return this.class.includes('group') ? null : this.type || 'button';
	}

	@Input('aria-label') public ariaLabel: string | null;
	@Input() public class: string;
	@Input() public disabled: string | null;
	@Input() public type: string | null;

	public constructor() {
		this.ariaLabel = null;
		this.class = '';
		this.disabled = null;
		this.type = null;
	}
}
