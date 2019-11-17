import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
	let component: AlertComponent;
	let fixture: ComponentFixture<AlertComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AlertComponent
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AlertComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should have an alert-good class', () => {
		component.class = 'alert-good';

		expect(component.class).toEqual('alert-good');
	});

	it('should not have a close class', () => {
		component.class = 'alert-good close';

		expect(component.class).toEqual('alert-good');
	});

	it('should have a hide class after onClose()', () => {
		component.onClose();

		expect(component.hostClass).toEqual('hide');
	});

	it('should have close button remain focused after blur', () => {
		component.close = true;
		fixture.detectChanges();

		const button: DebugElement = fixture.debugElement.query(By.css('.close'));
		const focusedElement: DebugElement = fixture.debugElement.query(By.css('.close'));

		component.onTrap();

		expect(focusedElement).toBe(button);
	});
});
