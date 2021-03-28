import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: '.card, .cards',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
	@HostBinding('attr.role')
	public get hostRole(): string | null {
		return this.class.includes('cards') ? 'group' : null;
	}

	@HostBinding('attr.tabindex')
	public get hostTabindex(): string | null {
		return this.class.includes('card-focus') ? '0' : null;
	}

	@Input() public class: string;

	public constructor() {
		this.class = '';
	}
}
