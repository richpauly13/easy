import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UtilitiesService {
	public get nav(): string {
		return this.currentNav || 'color';
	}

	public set nav(nav: string) {
		this.currentNav = nav;
	}

	private currentNav: string;

	public constructor() {
		this.currentNav = '';
	}
}
