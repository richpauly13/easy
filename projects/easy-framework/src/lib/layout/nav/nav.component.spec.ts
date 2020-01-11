import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

import { NavComponent } from './nav.component';

@Component({
	template: '<button class="nav-toggle" type="button"></button>'
})
class MockComponent { }

describe('NavComponent', () => {
    let buttonToggle: DebugElement;
	let component: NavComponent;
	let fixture1: ComponentFixture<NavComponent>;
	let fixture2: ComponentFixture<MockComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockComponent,
				NavComponent
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture1 = TestBed.createComponent(NavComponent);
		component = fixture1.componentInstance;
		fixture1.detectChanges();

		fixture2 = TestBed.createComponent(MockComponent);
		fixture2.detectChanges();

        buttonToggle = fixture2.debugElement.query(By.css('.nav-toggle'));
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should have isActive be true after .nav-toggle click', () => {
		component['isActive'] = false;
		component.ngOnInit();

		buttonToggle.triggerEventHandler('click', {});

		expect(component['isActive']).toBe(true);
	});

	it('should have isActive be false after .nav-toggle click', () => {
		component['isActive'] = true;
		component.ngOnInit();

		buttonToggle.triggerEventHandler('click', {});

		expect(component['isActive']).toBe(false);
	});

	it('should add the active class to the MockComponent after OnToggle()', () => {
		component['isActive'] = false;
		component['onToggle'](fixture2.nativeElement);

		expect(fixture2.nativeElement).toHaveClass('active');
	});

	it('should remove the active class from the MockComponent after OnToggle()', () => {
		component['isActive'] = true;
		component['onToggle'](fixture2.nativeElement);

		expect(fixture2.nativeElement).not.toHaveClass('active');
	});
});
