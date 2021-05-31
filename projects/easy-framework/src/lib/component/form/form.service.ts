import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FormService {
	public uniqueFormFieldId: number;
	public uniqueFormFieldLabelId: number;

	public constructor() {
		this.uniqueFormFieldId = 0;
		this.uniqueFormFieldLabelId = 0;
	}
}
