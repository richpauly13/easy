import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TabService {
	public get tabButtons(): HTMLButtonElement[] {
		return this.currentTabButtons;
	}

	public get tabContents(): HTMLElement[] {
		return this.currentTabContents;
	}

	public uniqueContentId: number;
	public uniqueTabId: number;

	private currentTabButtons: HTMLButtonElement[];
	private currentTabContents: HTMLElement[];

	public constructor() {
		this.currentTabButtons = [];
		this.currentTabContents = [];
		this.uniqueContentId = 0;
		this.uniqueTabId = 0;
	}
}
