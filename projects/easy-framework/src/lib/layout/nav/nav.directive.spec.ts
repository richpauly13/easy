import { NavDirective } from './nav.directive';

describe('NavDirective', (): void => {
	it('should create an instance', (): void => {
		const directive: NavDirective = new NavDirective();

		expect(directive).toBeTruthy();
	});
});
