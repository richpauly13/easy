import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'ez-root',
	styleUrls: [
		'./easy-framework.component.scss'
	],
	templateUrl: './easy-framework.component.html'
})
export class EasyComponent {
	@ViewChild('content', { static: false }) public content: ElementRef;

	public skip(): void {
		this.content.nativeElement.focus();
	}
}
