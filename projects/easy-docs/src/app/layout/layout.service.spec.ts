import { TestBed } from '@angular/core/testing';

import { LayoutService } from './layout.service';

describe('LayoutService', () => {
	let service: LayoutService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				LayoutService
			]
		});

		service = TestBed.inject(LayoutService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should have container as the nav when the nav is not not set', () => {
		expect(service.nav).toEqual('container');
	});

	it('should set the nav to grid', () => {
		service.nav = 'grid';

		expect(service.nav).toEqual('grid');
	});
});
