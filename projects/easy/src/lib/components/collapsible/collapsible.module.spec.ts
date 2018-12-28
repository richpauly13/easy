import { CollapsibleModule } from './collapsible.module';

describe('ButtonModule', () => {
	let collapsibleModule: CollapsibleModule;

	beforeEach(() => {
		collapsibleModule = new CollapsibleModule();
	});

	it('should create an instance', () => {
		expect(collapsibleModule).toBeTruthy();
	});
});
