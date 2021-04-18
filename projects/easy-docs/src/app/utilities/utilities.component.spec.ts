import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UtilitiesComponent } from './utilities.component';

describe('UtilitiesComponent', (): void => {
	let component: UtilitiesComponent;
	let fixture: ComponentFixture<UtilitiesComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				UtilitiesComponent
			],
			imports: [
				RouterTestingModule
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(UtilitiesComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have called trackById', (): void => {
		const trackByIdSpy: jasmine.Spy = spyOn(component, 'trackById').and.callThrough();

		component.trackById(0, 'alignment');

		expect(trackByIdSpy).toHaveBeenCalledWith(0, 'alignment');
	});
});
