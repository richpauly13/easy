import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'docs-components',
	templateUrl: './components.component.html',
	styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
	private selectedSection: string;

	public get section(): string {
		return this.selectedSection;
	}

	public set section(section: string) {
		this.selectedSection = section;
	}

	public constructor() {

	}

	public ngOnInit() {
		this.section = 'Alert';
	}
}
