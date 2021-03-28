import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', (): void => {
	let component: SpinnerComponent;
	let fixture: ComponentFixture<SpinnerComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [SpinnerComponent]
		}).compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(SpinnerComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a hostAriaLabel of please wait', (): void => {
		expect(component.hostAriaLabel).toEqual('please wait');
	});

	it('should have a hostAriaLabel of waiting for page', (): void => {
		component.ariaLabel = 'waiting for page';

		expect(component.hostAriaLabel).toEqual('waiting for page');
	});

	it('should have a hostRole of progressbar', (): void => {
		expect(component.hostRole).toEqual('progressbar');
	});
});
