import { TestBed } from '@angular/core/testing';

import { ComponentsService } from './components.service';

describe('ComponentsService', (): void => {
	let service: ComponentsService;

	beforeEach((): void => {
		TestBed.configureTestingModule({
			providers: [
				ComponentsService
			]
		});

		service = TestBed.inject(ComponentsService);
	});

	it('should be created', (): void => {
		expect(service).toBeTruthy();
	});

	it('should have alert as the nav when the nav is not not set', (): void => {
		expect(service.nav).toEqual('alert');
	});

	it('should set the nav to button', (): void => {
		service.nav = 'button';

		expect(service.nav).toEqual('button');
	});
});
