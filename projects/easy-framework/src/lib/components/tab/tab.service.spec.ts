import { TestBed } from '@angular/core/testing';

import { TabService } from './tab.service';

describe('TabService', () => {
	let service: TabService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(TabService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should have 0 for the uniqueContentId', () => {
		service.uniqueContentId = 0;

		expect(service.uniqueContentId).toEqual(0);
	});

	it('should have 0 for the uniqueTabId', () => {
		service.uniqueTabId = 0;

		expect(service.uniqueTabId).toEqual(0);
	});
});
