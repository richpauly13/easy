import { TableDirective } from './table.directive';

describe('TableDirective', (): void => {
	it('should create an instance', (): void => {
		const directive: TableDirective = new TableDirective();

		expect(directive).toBeTruthy();
	});
});
