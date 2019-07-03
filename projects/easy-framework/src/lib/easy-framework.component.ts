import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-root',
	templateUrl: './easy-framework.component.html',
	styleUrls: ['./easy-framework.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class EasyComponent implements OnInit {
	@ViewChild('content', { static: false }) public content: ElementRef;

	public constructor(private elementRef: ElementRef) {}

	public ngOnInit(): void {}

	public skip(): void {
		this.content.nativeElement.focus();
	}
}
