import { GridDirective } from './grid.directive';

describe('GridDirective', (): void => {
	it('should create an instance', (): void => {
		const directive: GridDirective = new GridDirective();

		expect(directive).toBeTruthy();
	});
});
