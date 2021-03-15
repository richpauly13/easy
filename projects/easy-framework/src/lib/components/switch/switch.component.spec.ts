import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SwitchComponent } from './switch.component';

@Component({
	selector: '.mock-switch',
	template: `<input class="switch-circle" type="checkbox">`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
class MockSwitchComponent {

}

describe('SwitchComponent', (): void => {
	let component: SwitchComponent;
	let fixture: ComponentFixture<SwitchComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				MockSwitchComponent,
				SwitchComponent
			]
		}).compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(SwitchComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a hostAriaChecked of false', (): void => {
		expect(component.hostAriaChecked).toEqual('false');
	});

	it('should have a hostAriaChecked of null', (): void => {
		component.class = 'switch-label';

		expect(component.hostAriaChecked).toBeNull();
	});

	it('should have a hostChecked of true', (): void => {
		component['isChecked'] = true;

		expect(component.hostChecked).toEqual('true');
	});

	it('should have a hostChecked of null', (): void => {
		expect(component.hostChecked).toBeNull();
	});

	it('should have a hostRole of switch', (): void => {
		component.class = 'switch-circle';

		expect(component.hostRole).toEqual('switch');
	});

	it('should have a hostRole of null', (): void => {
		component.class = 'switch-label';

		expect(component.hostRole).toBeNull();
	});

	it('should have checked as true after change event', (): void => {
		const event: InputEvent = new InputEvent('change', {});
		const mockComponent: ComponentFixture<MockSwitchComponent> = TestBed.createComponent(MockSwitchComponent);
		const mockInput: DebugElement = mockComponent.debugElement.query(By.css('input'));

		mockInput.nativeElement.checked = true;
		mockInput.nativeElement.dispatchEvent(event);

		expect(mockInput.nativeElement.checked).toBeTrue();
	});
});
