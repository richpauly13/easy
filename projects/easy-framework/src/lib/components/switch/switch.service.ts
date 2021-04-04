import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SwitchService {
	public uniqueSwitchInputId: number;
	public uniqueSwitchLabelId: number;

	public constructor() {
		this.uniqueSwitchInputId = 0;
		this.uniqueSwitchLabelId = 0;
	}
}
