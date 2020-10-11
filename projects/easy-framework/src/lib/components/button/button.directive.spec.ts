import { ButtonDirective } from './button.directive';

describe('ButtonDirective', (): void => {
	it('should create an instance', (): void => {
		const directive: ButtonDirective = new ButtonDirective();

		expect(directive).toBeTruthy();
	});
});
