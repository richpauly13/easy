import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LayoutService {
	public get nav(): string {
		return this.currentNav || 'container';
	}

	public set nav(nav: string) {
		this.currentNav = nav;
	}

	private currentNav: string;
}
