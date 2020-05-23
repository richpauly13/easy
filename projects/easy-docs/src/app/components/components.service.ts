import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ComponentsService {
	public get nav(): string {
		return this.currentNav || 'alert';
	}

	public set nav(nav: string) {
		this.currentNav = nav;
	}

	private currentNav: string;
}
