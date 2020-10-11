import { FormDirective } from './form.directive';

describe('FormDirective', (): void => {
	it('should create an instance', (): void => {
		const directive: FormDirective = new FormDirective();

		expect(directive).toBeTruthy();
	});
});
