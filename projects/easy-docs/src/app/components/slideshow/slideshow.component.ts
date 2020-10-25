import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'docs-slideshow',
	templateUrl: './slideshow.component.html',
	styleUrls: [
		'./slideshow.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideshowComponent {

}
