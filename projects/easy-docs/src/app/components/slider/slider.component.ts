import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Components - Slider - EASY');
	}
}
