import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ComponentsComponent } from './components.component';

describe('ComponentsComponent', (): void => {
	let component: ComponentsComponent;
	let fixture: ComponentFixture<ComponentsComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				ComponentsComponent
			],
			imports: [
				RouterTestingModule
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(ComponentsComponent);
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
