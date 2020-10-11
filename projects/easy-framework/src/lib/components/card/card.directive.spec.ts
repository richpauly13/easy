import { CardDirective } from './card.directive';

describe('CardDirective', (): void => {
	it('should create an instance', (): void => {
		const directive: CardDirective = new CardDirective();

		expect(directive).toBeTruthy();
	});
});
