import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlertComponent } from './alert.component';

describe('AlertComponent', (): void => {
	let component: AlertComponent;
	let fixture: ComponentFixture<AlertComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				AlertComponent
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(AlertComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have close as false', (): void => {
		component.ngOnInit();

		expect(component.hasClose).toBeFalse();
	});

	it('should not have a class of close', (): void => {
		component.class = 'alert-good close';

		component.ngOnInit();

		expect(component.class).toEqual('alert-good');
	});

	it('should have a class of hide after onClose()', (): void => {
		component.onClose();

		expect(component.class).toEqual('hide');
	});

	it('should have a hostAriaHidden of null initially', (): void => {
		expect(component.hostAriaHidden).toBeNull();
	});

	it('should have a hostAriaHidden of true after onClose()', (): void => {
		component.onClose();

		expect(component.hostAriaHidden).toEqual('true');
	});

	it('should have an alertId of alert-0', (): void => {
		component.alertId = 'alert-0';

		expect(component.alertId).toEqual('alert-0');
	});

	it('should have a hostAriaLabelledby of alert-0', (): void => {
		component.class = 'alert-good';

		expect(component.hostAriaLabelledby).toEqual('alert-0');
	});

	it('should have a hostClass of class', (): void => {
		component.class = 'alert-good';

		expect(component.hostClass).toEqual(component.class);
	});

	it('should have a hostRole of alertdialog', (): void => {
		component.hasClose = true;

		expect(component.hostRole).toEqual('alertdialog');
	});

	it('should have a hostRole of alert', (): void => {
		expect(component.hostRole).toEqual('alert');
	});

	it('should have a hostTabindex of -1', (): void => {
		expect(component.hostTabindex).toEqual('-1');
	});

	it('should have preventDefault() called on tab', (): void => {
		const event: KeyboardEvent = new KeyboardEvent('keypress', {
			key: 'Tab'
		});
		const spy: jasmine.Spy = spyOn(event, 'preventDefault');

		component.onTrap(event);

		expect(spy).toHaveBeenCalled();
	});

	it('should not have preventDefault() called on shift', (): void => {
		const event: KeyboardEvent = new KeyboardEvent('keypress', {
			shiftKey: true
		});
		const spy: jasmine.Spy = spyOn(event, 'preventDefault');

		component.onTrap(event);

		expect(spy).not.toHaveBeenCalled();
	});
});
