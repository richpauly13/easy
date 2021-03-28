import { ElementRef, Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TabService {
	public get tabButtons(): ElementRef<HTMLButtonElement>[] {
		return this.currentTabButtons;
	}

	public get tabContents(): ElementRef<HTMLElement>[] {
		return this.currentTabContents;
	}

	public uniqueContentId: number;
	public uniqueTabId: number;

	private currentTabButtons: ElementRef<HTMLButtonElement>[];
	private currentTabContents: ElementRef<HTMLElement>[];

	public constructor() {
		this.currentTabButtons = [];
		this.currentTabContents = [];
		this.uniqueContentId = 0;
		this.uniqueTabId = 0;
	}
}
