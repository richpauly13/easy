import { CollapseModule } from './collapse.module';

describe('CollapseModule', () => {
	let collapseModule: CollapseModule;

	beforeEach(() => {
		collapseModule = new CollapseModule();
	});

	it('should create an instance', () => {
		expect(collapseModule).toBeTruthy();
	});
});
