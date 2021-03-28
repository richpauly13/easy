import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: '.animated, .progress, .striped',
	templateUrl: './progress.component.html',
	styleUrls: ['./progress.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressComponent {
	@HostBinding('attr.max')
	public get hostMax(): string {
		return this.max;
	}

	@HostBinding('attr.position')
	public get hostPosition(): string {
		return String(Number(this.value) / Number(this.max));
	}

	@HostBinding('attr.value')
	public get hostValue(): null | string {
		return this.value;
	}

	@Input() public max: string;
	@Input() public value: null | string;

	public constructor() {
		this.max = '100';
		this.value = null;
	}
}
