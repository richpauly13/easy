import { TestBed } from '@angular/core/testing';

import { SlideshowService } from './slideshow.service';

describe('SlideshowService', () => {
	beforeEach(() => TestBed.configureTestingModule({ }));

	it('should be created', () => {
		const service: SlideshowService = TestBed.get(SlideshowService);
		expect(service).toBeTruthy();
	});
});
