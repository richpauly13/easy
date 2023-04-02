import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ComponentComponent } from './component.component';

describe('ComponentComponent', (): void => {
	let component: ComponentComponent;
	let fixture: ComponentFixture<ComponentComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [ComponentComponent],
			imports: [RouterTestingModule]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(ComponentComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have called trackById', (): void => {
		const trackByIdSpy: jasmine.Spy = spyOn(component, 'trackById').and.callThrough();

		component.trackById(0, 'alert');

		expect(trackByIdSpy).toHaveBeenCalledWith(0, 'alert');
	});
});
