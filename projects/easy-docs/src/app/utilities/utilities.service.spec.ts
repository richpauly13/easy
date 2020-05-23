import { TestBed } from '@angular/core/testing';

import { UtilitiesService } from './utilities.service';

describe('UtilitiesService', () => {
	let service: UtilitiesService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				UtilitiesService
			]
		});

		service = TestBed.inject(UtilitiesService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should have display as the nav when the nav is not not set', () => {
		expect(service.nav).toEqual('display');
	});

	it('should set the nav to display', () => {
		service.nav = 'display';

		expect(service.nav).toEqual('display');
	});
});
