import { FlexboxDirective } from './flexbox.directive';

describe('FlexboxDirective', (): void => {
	it('should create an instance', (): void => {
		const directive: FlexboxDirective = new FlexboxDirective();

		expect(directive).toBeTruthy();
	});
});
