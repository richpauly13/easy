import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProgressService {
	public uniqueProgressInputId: number;
	public uniqueProgressLabelId: number;

	public constructor() {
		this.uniqueProgressInputId = 0;
		this.uniqueProgressLabelId = 0;
	}
}
