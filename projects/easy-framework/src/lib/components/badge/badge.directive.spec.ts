import { BadgeDirective } from './badge.directive';

describe('BadgeDirective', (): void => {
	it('should create an instance', (): void => {
		const directive: BadgeDirective = new BadgeDirective();

		expect(directive).toBeTruthy();
	});
});
