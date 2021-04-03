import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AlertService {
	public uniqueAlertId: number;

	public constructor() {
		this.uniqueAlertId = 0;
	}
}
