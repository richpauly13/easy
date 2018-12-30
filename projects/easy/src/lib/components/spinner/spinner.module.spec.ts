import { SpinnerModule } from './spinner.module';

describe('SpinnerModule', () => {
	let spinnerModule: SpinnerModule;

	beforeEach(() => {
		spinnerModule = new SpinnerModule();
	});

	it('should create an instance', () => {
		expect(spinnerModule).toBeTruthy();
	});
});
