import { TestBed } from '@angular/core/testing';

import { CollapseService } from './collapse.service';

describe('CollapseService', () => {
	beforeEach(() => TestBed.configureTestingModule({ }));

	it('should be created', () => {
		const service: CollapseService = TestBed.get(CollapseService);
		expect(service).toBeTruthy();
	});
});
