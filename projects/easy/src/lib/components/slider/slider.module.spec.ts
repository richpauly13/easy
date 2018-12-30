import { SliderModule } from './slider.module';

describe('SliderModule', () => {
	let sliderModule: SliderModule;

	beforeEach(() => {
		sliderModule = new SliderModule();
	});

	it('should create an instance', () => {
		expect(sliderModule).toBeTruthy();
	});
});
