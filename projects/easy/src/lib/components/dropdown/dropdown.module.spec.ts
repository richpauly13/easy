import { DropdownModule } from './dropdown.module';

describe('DropdownModule', () => {
	let dropdownModule: DropdownModule;

	beforeEach(() => {
		dropdownModule = new DropdownModule();
	});

	it('should create an instance', () => {
		expect(dropdownModule).toBeTruthy();
	});
});
