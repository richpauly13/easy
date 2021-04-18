import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LayoutComponent } from './layout.component';

describe('LayoutComponent', (): void => {
	let component: LayoutComponent;
	let fixture: ComponentFixture<LayoutComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				LayoutComponent
			],
			imports: [
				RouterTestingModule
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(LayoutComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have called trackById', (): void => {
		const trackByIdSpy: jasmine.Spy = spyOn(component, 'trackById').and.callThrough();

		component.trackById(0, 'flexbox');

		expect(trackByIdSpy).toHaveBeenCalledWith(0, 'flexbox');
	});
});
