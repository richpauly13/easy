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
	public get hostAriaOrientation(): null | string {
		return this.class.includes('slider-label') ? null : 'horizontal';
	}

	@HostBinding('attr.for')
	public get hostFor(): null | string {
		return this.class.includes('slider-label') ? this.for || `slider-${this.uniqueSliderLabelId}` : null;
	}

	@HostBinding('attr.id')
	public get hostId(): null | string {
		return this.class.includes('slider-label') ? null : this.id || `slider-${this.uniqueSliderInputId}`;
	}

	@HostBinding('attr.max')
	public get hostMax(): null | string {
		return this.class.includes('slider-label') ? null : this.max || '100';
	}

	@HostBinding('attr.min')
	public get hostMin(): null | string {
		return this.class.includes('slider-label') ? null : this.min || '0';
	}

	@HostBinding('attr.step')
	public get hostStep(): null | string {
		return this.class.includes('slider-label') ? null : this.step || '1';
	}

	@HostBinding('attr.value')
	public get hostValue(): null | string {
		return this.class.includes('slider-label') ? null : this.value || '0';
	}

	@HostListener('input', ['$event'])
	public onInputChange(event: InputEvent): void {
		this.value = (event.target as HTMLInputElement).value;
	}

	@Input() public class: string;
	@Input() public for: null | string;
	@Input() public id: null | string;
	@Input() public max: null | string;
	@Input() public min: null | string;
	@Input() public step: null | string;
	@Input() public value: null | string;

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
