import { Component } from '@angular/core';

@Component({
    selector: 'docs-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private selectedSection: string;

    public get section(): string {
		return this.selectedSection;
	}

	public set section(section: string) {
		this.selectedSection = section;
	}

	public constructor() {
		this.section = 'Alert';
	}
}
