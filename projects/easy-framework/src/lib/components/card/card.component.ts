import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-card, ez-cards, .card, .cards',
	templateUrl: './card.component.html',
	styleUrls: [
		'./card.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

}
