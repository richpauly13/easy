import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SliderComponent } from './slider.component';

@Component({
	selector: '.mock-slider',
	template: `<input class="slider-circle" type="range">`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
class MockSliderComponent { }

describe('SliderComponent', (): void => {
	let component: SliderComponent;
	let fixture: ComponentFixture<SliderComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				MockSliderComponent,
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

	it('should have a value of 20', (): void => {
		const event: InputEvent = new InputEvent('input', {});
		const mockSliderComponent: ComponentFixture<MockSliderComponent> = TestBed.createComponent(MockSliderComponent);
		const mockSliderInput: DebugElement = mockSliderComponent.debugElement.query(By.css('input'));

		mockSliderInput.nativeElement.value = '20';
		mockSliderInput.nativeElement.dispatchEvent(event);

		expect(mockSliderInput.nativeElement.value).toEqual('20');
	});
});
