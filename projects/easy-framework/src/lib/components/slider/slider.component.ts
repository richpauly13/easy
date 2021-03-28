import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: '.slider-circle, .slider-square',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent {
	@HostBinding('attr.max')
	public get hostMax(): string {
		return this.max;
	}

	@HostBinding('attr.min')
	public get hostMin(): string {
		return this.min;
	}

	@HostBinding('attr.step')
	public get hostStep(): string {
		return this.step;
	}

	@HostBinding('attr.value')
	public get hostValue(): string {
		return this.value;
	}

	@HostListener('input', ['$event'])
	public onInputChange(event: InputEvent): void {
		this.value = (event.target as HTMLInputElement).value;
	}

	@Input() public max: string;
	@Input() public min: string;
	@Input() public step: string;
	@Input() public value: string;

	public constructor() {
		this.max = '100';
		this.min = '0';
		this.step = '1';
		this.value = '0';
	}
}
