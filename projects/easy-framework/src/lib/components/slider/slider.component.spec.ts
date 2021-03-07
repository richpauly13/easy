import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SliderComponent } from './slider.component';

describe('SliderComponent', (): void => {
	let component: SliderComponent;
	let fixture: ComponentFixture<SliderComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				SliderComponent
			]
		}).compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(SliderComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a hostMax of 5', (): void => {
		component.max = '5';

		expect(component.hostMax).toEqual('5');
	});

	it('should have a hostMin of 1', (): void => {
		component.min = '1';

		expect(component.hostMin).toEqual('1');
	});

	it('should have a hostStep of 2', (): void => {
		component.step = '2';

		expect(component.hostStep).toEqual('2');
	});

	it('should have a hostValue of 20', (): void => {
		component.value = '20';

		expect(component.hostValue).toEqual('20');
	});
});
