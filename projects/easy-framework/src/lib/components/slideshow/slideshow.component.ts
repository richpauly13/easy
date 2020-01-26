import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-slideshow, .slideshow',
	templateUrl: './slideshow.component.html',
	styleUrls: ['./slideshow.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideshowComponent {

}
