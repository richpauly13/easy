import { EasyModule } from './easy.module';

describe('EasyModule', () => {
	let easyModule: EasyModule;

	beforeEach(() => {
		easyModule = new EasyModule();
	});

	it('should create an instance', () => {
		expect(easyModule).toBeTruthy();
	});
});
