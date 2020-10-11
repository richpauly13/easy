import { TestBed } from '@angular/core/testing';

import { LayoutService } from './layout.service';

describe('LayoutService', (): void => {
	let service: LayoutService;

	beforeEach((): void => {
		TestBed.configureTestingModule({
			providers: [
				LayoutService
			]
		});

		service = TestBed.inject(LayoutService);
	});

	it('should be created', (): void => {
		expect(service).toBeTruthy();
	});

	it('should have container as the nav when the nav is not not set', (): void => {
		expect(service.nav).toEqual('container');
	});

	it('should set the nav to grid', (): void => {
		service.nav = 'grid';

		expect(service.nav).toEqual('grid');
	});
});
