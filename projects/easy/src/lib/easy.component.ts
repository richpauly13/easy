import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-root',
	templateUrl: './easy.component.html',
	styleUrls: ['./easy.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class EasyComponent implements OnInit {
	public constructor() {}

	public ngOnInit(): void {}
}
