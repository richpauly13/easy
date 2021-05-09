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
		})
.compileComponents();
	}));
	beforeEach((): void => {
		fixture = TestBed.createComponent(SliderComponent);
		component = fixture.componentInstance;
	});
	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});
	it('should have a hostAriaOrientation of horizontal', (): void => {
		component.class = 'slider-circle';
		expect(component.hostAriaOrientation).toEqual('horizontal');
	});
	it('should have a hostAriaOrientation of null', (): void => {
		component.class = 'slider-label';
		expect(component.hostAriaOrientation).toBeNull();
	});
	it('should have a hostFor of slider-0 when for is null and class is slider-label', (): void => {
		component.class = 'slider-label';
		expect(component.hostFor).toEqual('slider-0');
	});
	it('should have a hostFor of slider-2 when for is slider-2 and class is slider-label', (): void => {
		component.class = 'slider-label';
		component.for = 'slider-2';
		expect(component.hostFor).toEqual('slider-2');
	});
	it('should not have a hostFor when class is slider-circle', (): void => {
		component.class = 'slider-circle';
		expect(component.hostFor).toBeNull();
	});
	it('should have a hostId of slider-0 when id is null and class is slider-circle', (): void => {
		component.class = 'slider-circle';
		expect(component.hostId).toEqual('slider-0');
	});
	it('should have a hostId of slider-2 when id is slider 2 and class is slider-circle', (): void => {
		component.class = 'slider-circle';
		component.id = 'slider-2';
		expect(component.hostId).toEqual('slider-2');
	});
	it('should not have a hostId when class is slider label', (): void => {
		component.class = 'slider-label';
		expect(component.hostId).toBeNull();
	});
	it('should have a hostMax of 5', (): void => {
		component.max = '5';
		expect(component.hostMax).toEqual('5');
	});
	it('should have a hostMax of 100', (): void => {
		component.class = 'slider-circle';
		component.max = null;
		expect(component.hostMax).toEqual('100');
	});
	it('should have a hostMax of null', (): void => {
		component.class = 'slider-label';
		expect(component.hostMax).toBeNull();
	});
	it('should have a hostMin of 1', (): void => {
		component.min = '1';
		expect(component.hostMin).toEqual('1');
	});
	it('should have a hostMin of 0', (): void => {
		component.class = 'slider-circle';
		component.min = null;
		expect(component.hostMin).toEqual('0');
	});
	it('should have a hostMin of null', (): void => {
		component.class = 'slider-label';
		expect(component.hostMin).toBeNull();
	});
	it('should have a hostStep of 2', (): void => {
		component.step = '2';
		expect(component.hostStep).toEqual('2');
	});
	it('should have a hostStep of 1', (): void => {
		component.class = 'slider-circle';
		component.step = null;
		expect(component.hostStep).toEqual('1');
	});
	it('should have a hostStep of null', (): void => {
		component.class = 'slider-label';
		expect(component.hostStep).toBeNull();
	});
	it('should have a hostValue of 20', (): void => {
		component.value = '20';
		expect(component.hostValue).toEqual('20');
	});
	it('should have a hostValue of 0', (): void => {
		component.class = 'slider-circle';
		component.value = null;
		expect(component.hostValue).toEqual('0');
	});
	it('should have a hostValue of null', (): void => {
		component.class = 'slider-label';
		expect(component.hostValue).toBeNull();
	});
	it('should have a value of 20', (): void => {
		const event: InputEvent = new InputEvent('input', {});
		const mockSliderComponent: ComponentFixture<MockSliderComponent> = TestBed.createComponent(MockSliderComponent);
		const mockSliderInput: DebugElement = mockSliderComponent.debugElement.query(By.css('input'));

		(mockSliderInput.nativeElement as HTMLInputElement).value = '20';
		(mockSliderInput.nativeElement as HTMLInputElement).dispatchEvent(event);
		expect((mockSliderInput.nativeElement as HTMLInputElement).value).toEqual('20');
	});
	it('should have a uniqueSliderInputId of 0 after ngOnInit() is called', (): void => {
		component.class = 'slider-circle';
		component.ngOnInit();
		expect(component['uniqueSliderInputId']).toEqual(0);
	});
	it('should have a uniqueSliderLabelId of 0 after ngOnInit() is called', (): void => {
		component.class = 'slider-label';
		component.ngOnInit();
		expect(component['uniqueSliderLabelId']).toEqual(0);
	});
});
