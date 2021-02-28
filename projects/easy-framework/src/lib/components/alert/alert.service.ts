import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AlertService {
	public get alertCounter(): number {
		return this.currentAlertCounter++;
	}

	public set alertCounter(alertCounter: number) {
		this.currentAlertCounter = alertCounter;
	}

	private currentAlertCounter: number;

	public constructor() {
		this.currentAlertCounter = 0;
	}
}
