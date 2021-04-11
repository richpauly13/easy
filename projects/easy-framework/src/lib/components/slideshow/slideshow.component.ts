import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: '.slide, .slideshow',
	templateUrl: './slideshow.component.html',
	styleUrls: ['./slideshow.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideshowComponent {

}
