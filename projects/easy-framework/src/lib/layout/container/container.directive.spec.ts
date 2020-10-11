import { ContainerDirective } from './container.directive';

describe('ContainerDirective', (): void => {
	it('should create an instance', (): void => {
		const directive: ContainerDirective = new ContainerDirective();

		expect(directive).toBeTruthy();
	});
});
