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
		fixture.detectChanges();
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a type of button', (): void => {
		component.type = 'button';

		fixture.detectChanges();

		expect(component.hostType).toEqual('button');
	});

	it('should be disabled', (): void => {
		component.disabled = '';

		fixture.detectChanges();

		expect(component.hostDisabled).toEqual('true');
	});

	it('should not be disabled', (): void => {
		component.disabled = null;

		fixture.detectChanges();

		expect(component.hostDisabled).toBeNull();
	});

	it('should have a class of group', (): void => {
		component.class = 'group';

		fixture.detectChanges();

		expect(component.class).toEqual('group');
	});

	it('should not have a class of group', (): void => {
		component.class = '';

		fixture.detectChanges();

		expect(component.class).not.toContain('group');
	});

	it('should have a role of group', (): void => {
		component.class = 'group';

		fixture.detectChanges();

		expect(component.hostRole).toEqual('group');
	});

	it('should not have a role', (): void => {
		component.class = '';

		fixture.detectChanges();

		expect(component.hostRole).toBeNull();
	});
});
