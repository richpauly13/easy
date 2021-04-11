import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SliderService {
	public uniqueSliderInputId: number;
	public uniqueSliderLabelId: number;

	public constructor() {
		this.uniqueSliderInputId = 0;
		this.uniqueSliderLabelId = 0;
	}
}
