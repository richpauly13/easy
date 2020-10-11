import { SlideshowDirective } from './slideshow.directive';

describe('SlideshowDirective', (): void => {
	it('should create an instance', (): void => {
		const directive: SlideshowDirective = new SlideshowDirective();

		expect(directive).toBeTruthy();
	});
});
