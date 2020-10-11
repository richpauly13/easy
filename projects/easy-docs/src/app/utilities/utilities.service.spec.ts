import { TestBed } from '@angular/core/testing';

import { UtilitiesService } from './utilities.service';

describe('UtilitiesService', (): void => {
	let service: UtilitiesService;

	beforeEach((): void => {
		TestBed.configureTestingModule({
			providers: [
				UtilitiesService
			]
		});

		service = TestBed.inject(UtilitiesService);
	});

	it('should be created', (): void => {
		expect(service).toBeTruthy();
	});

	it('should have color as the nav when the nav is not not set', (): void => {
		expect(service.nav).toEqual('color');
	});

	it('should set the nav to display', (): void => {
		service.nav = 'display';

		expect(service.nav).toEqual('display');
	});
});
