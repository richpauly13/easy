import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: '.btn, .btn-full, .btn-lg, .btn-md, .btn-sm, .btn-xl, .btn-xs, .btn-group-col, .btn-group-full, .btn-group-row',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
	@HostBinding('attr.aria-label')
	public get hostAriaLabel(): string | null {
		if (this.ariaLabel) {
			return this.ariaLabel;
		} else if (this.class.includes('btn-group')) {
			return (/\bbtn-group\S+\b/u).exec(this.class)![0];
		} else {
			return null;
		}
	}

	@HostBinding('attr.role')
	public get hostRole(): string | null {
		return this.class.includes('btn-group') ? 'group' : null;
	}

	@HostBinding('attr.type')
	public get hostType(): string | null {
		return this.elementRef.nativeElement.tagName === 'BUTTON' ? this.type && 'button' : null;
	}

	@Input('aria-label') public ariaLabel: string | null;
	@Input() public class: string;
	@Input() public type: string | null;

	public constructor(private elementRef: ElementRef) {
		this.ariaLabel = null;
		this.class = '';
		this.type = '';
	}
}
