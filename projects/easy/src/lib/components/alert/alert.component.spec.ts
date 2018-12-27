import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
	let component: AlertComponent;
	let fixture: ComponentFixture<AlertComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AlertComponent]
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

	it('should have an alert class', () => {
		component.class = 'alert-good';
		expect(component.class).toEqual('alert-good');
	});

	it('should not have a close class', () => {
		component.class = 'alert-good close';
		expect(component.class).toEqual('alert-good');
	});
});
