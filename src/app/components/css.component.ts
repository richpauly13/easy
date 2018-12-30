import { Component, OnInit } from '@angular/core';

@Component({
	templateUrl: './css.component.html',
	styleUrls: ['./css.component.scss']
})
export class CssComponent implements OnInit {
	private selectedSection: string;

	public get section(): string {
		return this.selectedSection;
	}

	public set section(section: string) {
		this.selectedSection = section;
	}

	public constructor() {}

	public ngOnInit() {
		this.section = 'Alert';
	}
}
