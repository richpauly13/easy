import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlertComponent } from './alert.component';

describe('AlertComponent', (): void => {
	let component: AlertComponent;
	let fixture: ComponentFixture<AlertComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				AlertComponent
			]
		}).compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(AlertComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have an alert-good class', (): void => {
		component.class = 'alert-good';

		expect(component.class).toEqual('alert-good');
	});

	it('should not have a close class', (): void => {
		component.class = 'alert-good close';

		expect(component.class).toEqual('alert-good');
	});

	it('should have a hide class after onClose()', (): void => {
		component.onClose();

		expect(component.hostClass).toEqual('hide');
	});

	it('should have close button remain focused after blur', (): void => {
		component.close = true;
		fixture.detectChanges();

		const button: DebugElement = fixture.debugElement.query(By.css('.close'));
		const focusedElement: DebugElement = fixture.debugElement.query(By.css('.close'));

		component.onTrap();

		expect(focusedElement).toBe(button);
	});
});
