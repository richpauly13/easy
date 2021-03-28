import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

@Component({
	selector: '.mock-btn',

	// eslint-disable-next-line @angular-eslint/component-max-inline-declarations
	template: `
		<button class="btn" type="button">test 1</button>
		<button class="btn">test 2</button>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
class MockButtonComponent { }

describe('ButtonComponent', (): void => {
	let component: ButtonComponent;
	let fixture: ComponentFixture<ButtonComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				ButtonComponent,
				MockButtonComponent
			]
		}).compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(ButtonComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a type of button when type is set to button', (): void => {
		const mockButtonComponent: ComponentFixture<MockButtonComponent> = TestBed.createComponent(MockButtonComponent);
		const mockButton1: DebugElement = mockButtonComponent.debugElement.queryAll(By.css('button'))[0];

		mockButtonComponent.detectChanges();

		expect(mockButton1.nativeElement.getAttribute('type')).toEqual('button');
	});

	it('should have a type of button when no type is set', (): void => {
		const mockButtonComponent: ComponentFixture<MockButtonComponent> = TestBed.createComponent(MockButtonComponent);
		const mockButton2: DebugElement = mockButtonComponent.debugElement.queryAll(By.css('button'))[1];

		mockButtonComponent.detectChanges();

		expect(mockButton2.nativeElement.getAttribute('type')).toEqual('button');
	});

	it('should have a hostType of null', (): void => {
		component.class = 'btn-group';

		expect(component.hostType).toBeNull();
	});

	it('should have a hostRole of group', (): void => {
		component.class = 'btn-group';

		expect(component.hostRole).toEqual('group');
	});

	it('should have a hostRole of null', (): void => {
		component.class = '';

		expect(component.hostRole).toBeNull();
	});

	it('should have a hostAriaLabel of close button', (): void => {
		component.ariaLabel = 'close button';

		expect(component.hostAriaLabel).toEqual('close button');
	});

	it('should have an hostAriaLabel of btn-group-row', (): void => {
		component.class = 'btn-group-row';

		expect(component.hostAriaLabel).toEqual('btn-group-row');
	});

	it('should have an hostAriaLabel of null', (): void => {
		expect(component.hostAriaLabel).toBeNull();
	});
});
