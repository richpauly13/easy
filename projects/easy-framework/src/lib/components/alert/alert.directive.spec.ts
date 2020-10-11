import { AlertDirective } from './alert.directive';

describe('AlertDirective', (): void => {
	it('should create an instance', (): void => {
		const directive: AlertDirective = new AlertDirective();

		expect(directive).toBeTruthy();
	});
});
