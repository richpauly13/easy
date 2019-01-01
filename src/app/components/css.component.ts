import { Component, OnInit } from '@angular/core';

@Component({
	templateUrl: './css.component.html',
	styleUrls: ['./css.component.scss']
})
export class CssComponent implements OnInit {
	public get section(): string {
		return this.selectedSection;
	}

	public set section(section: string) {
		this.selectedSection = section;
	}

	private selectedSection: string;

	public constructor() {}

	public ngOnInit() {
		this.section = 'Alert';
	}

	public checkSection(section: string) {
		return this.section === section;
	}

	public onClick(name: string) {
		this.section = name;
	}
}
