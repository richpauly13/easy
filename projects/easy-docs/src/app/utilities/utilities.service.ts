import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UtilitiesService {
	public get nav(): string {
		return this.currentNav || 'display';
	}

	public set nav(nav: string) {
		this.currentNav = nav;
	}

	private currentNav: string;
}
