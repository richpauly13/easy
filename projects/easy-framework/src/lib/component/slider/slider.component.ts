import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { SliderService } from './slider.service';

@Component({
	selector: '.slider-circle, .slider-label, .slider-square',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit {
	@HostBinding('attr.aria-orientation')
	public get hostAriaOrientation(): string | null {
		return this.class.includes('slider-label') ? null : 'horizontal';
	}

	@HostBinding('attr.for')
	public get hostFor(): string | null {
		return this.class.includes('slider-label') ? this.for ?? `slider-${this.uniqueSliderLabelId}` : null;
	}

	@HostBinding('attr.id')
	public get hostId(): string | null {
		return this.class.includes('slider-label') ? null : this.id ?? `slider-${this.uniqueSliderInputId}`;
	}

	@HostBinding('attr.max')
	public get hostMax(): string | null {
		return this.class.includes('slider-label') ? null : this.max ?? '100';
	}

	@HostBinding('attr.min')
	public get hostMin(): string | null {
		return this.class.includes('slider-label') ? null : this.min ?? '0';
	}

	@HostBinding('attr.step')
	public get hostStep(): string | null {
		return this.class.includes('slider-label') ? null : this.step ?? '1';
	}

	@HostBinding('attr.value')
	public get hostValue(): string | null {
		return this.class.includes('slider-label') ? null : this.value ?? '0';
	}

	@HostListener('input', ['$event'])
	public onInputChange(event: InputEvent): void {
		this.value = (event.target as HTMLInputElement).value;
	}

	@Input() public class: string;
	@Input() public for: string | null;
	@Input() public id: string | null;
	@Input() public max: string | null;
	@Input() public min: string | null;
	@Input() public step: string | null;
	@Input() public value: string | null;

	private uniqueSliderInputId: number;
	private uniqueSliderLabelId: number;

	public constructor(private sliderService: SliderService) {
		this.class = '';
		this.for = null;
		this.id = null;
		this.max = '100';
		this.min = '0';
		this.step = '1';
		this.uniqueSliderInputId = this.sliderService.uniqueSliderInputId;
		this.uniqueSliderLabelId = this.sliderService.uniqueSliderLabelId;
		this.value = '0';
	}

	public ngOnInit(): void {
		this.uniqueSliderInputId = this.class.includes('slider-label') ? 0 : this.sliderService.uniqueSliderInputId++;
		this.uniqueSliderLabelId = this.class.includes('slider-label') ? this.sliderService.uniqueSliderLabelId++ : 0;
	}
}
