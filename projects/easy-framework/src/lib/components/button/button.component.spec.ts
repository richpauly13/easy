import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', (): void => {
	let component: ButtonComponent;
	let fixture: ComponentFixture<ButtonComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				ButtonComponent
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

	it('should have a hostType of button', (): void => {
		component.type = 'button';

		expect(component.hostType).toEqual('button');
	});

	it('should have a hostType of button', (): void => {
		component.type = null;

		expect(component.hostType).toEqual('button');
	});

	it('should have a hostType of null', (): void => {
		component.class = 'group';

		expect(component.hostType).toBeNull();
	});

	it('should have a hostDisabled of true', (): void => {
		component.disabled = '';

		expect(component.hostDisabled).toBeTruthy();
	});

	it('should have a hostDisabled of null', (): void => {
		expect(component.hostDisabled).toBeNull();
	});

	it('should have a hostRole of group', (): void => {
		component.class = 'group';

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
