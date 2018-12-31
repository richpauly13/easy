import { TabModule } from './tab.module';

describe('TabModule', () => {
	let tabModule: TabModule;

	beforeEach(() => {
		tabModule = new TabModule();
	});

	it('should create an instance', () => {
		expect(tabModule).toBeTruthy();
	});
});
