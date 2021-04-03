import { TestBed } from '@angular/core/testing';

import { AlertService } from './alert.service';

describe('AlertService', () => {
	let service: AlertService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [AlertService]
		});

		service = TestBed.inject(AlertService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should have 0 for the uniqueAlertId', () => {
		service.uniqueAlertId = 0;

		expect(service.uniqueAlertId).toEqual(0);
	});
});
