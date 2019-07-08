import { inject, TestBed } from '@angular/core/testing';

import { EasyService } from './easy-framework.service';

describe('EasyService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [EasyService]
		});
	});

	it('should be created', inject([EasyService], (service: EasyService) => {
		expect(service).toBeTruthy();
	}));
});
