import { SwitchDirective } from './switch.directive';

describe('SwitchDirective', (): void => {
	it('should create an instance', (): void => {
		const directive: SwitchDirective = new SwitchDirective();

		expect(directive).toBeTruthy();
	});
});
