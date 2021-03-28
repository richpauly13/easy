import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
	public constructor(private title: Title) { }

	public ngOnInit(): void {
		this.title.setTitle('Components - Card - EASY');
	}
}
