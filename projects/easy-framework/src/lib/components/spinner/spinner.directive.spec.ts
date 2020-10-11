import { SpinnerDirective } from './spinner.directive';

describe('SpinnerDirective', (): void => {
	it('should create an instance', (): void => {
		const directive: SpinnerDirective = new SpinnerDirective();

		expect(directive).toBeTruthy();
	});
});
