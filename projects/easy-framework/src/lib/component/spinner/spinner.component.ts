import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: '.spinner, .spinner-2, .spinner-multi',
	templateUrl: './spinner.component.html',
	styleUrls: ['./spinner.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {
	@HostBinding('attr.aria-label')
	public get hostAriaLabel(): string | null {
		return this.ariaLabel ?? 'please wait';
	}

	@HostBinding('attr.role')
	public get hostRole(): string {
		return 'progressbar';
	}

	@Input('aria-label') public ariaLabel: string | null;

	public constructor() {
		this.ariaLabel = null;
	}
}
