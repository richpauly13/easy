import { TestBed } from '@angular/core/testing';

import { CollapsibleService } from './collapsible.service';

describe('CollapsibleService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: CollapsibleService = TestBed.get(CollapsibleService);
		expect(service).toBeTruthy();
	});
});
