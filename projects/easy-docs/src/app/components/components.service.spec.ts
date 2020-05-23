import { TestBed } from '@angular/core/testing';

import { ComponentsService } from './components.service';

describe('ComponentsService', () => {
	let service: ComponentsService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ComponentsService
			]
		});

		service = TestBed.inject(ComponentsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should have alert as the nav when the nav is not not set', () => {
		expect(service.nav).toEqual('alert');
	});

	it('should set the nav to button', () => {
		service.nav = 'button';

		expect(service.nav).toEqual('button');
	});
});
