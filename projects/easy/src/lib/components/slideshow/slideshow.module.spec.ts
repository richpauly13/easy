import { SlideshowModule } from './slideshow.module';

describe('SlideshowModule', () => {
	let slideshowModule: SlideshowModule;

	beforeEach(() => {
		slideshowModule = new SlideshowModule();
	});

	it('should create an instance', () => {
		expect(slideshowModule).toBeTruthy();
	});
});
