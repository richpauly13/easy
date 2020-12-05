import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-slideshow',
	templateUrl: './slideshow.component.html',
	styleUrls: [
		'./slideshow.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideshowComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Components - Slideshow - EASY');
	}
}
