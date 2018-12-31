import { SwitchModule } from './switch.module';

describe('SwitchModule', () => {
	let switchModule: SwitchModule;

	beforeEach(() => {
		switchModule = new SwitchModule();
	});

	it('should create an instance', () => {
		expect(switchModule).toBeTruthy();
	});
});
