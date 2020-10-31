/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavComponent } from './nav.component';

@Component({
	selector: 'ez-nav, .nav-h, .nav-v',
	template: '<button class="nav-toggle" type="button"></button>',
	changeDetection: ChangeDetectionStrategy.OnPush
})
class MockComponent { }

describe('NavComponent', (): void => {
	let buttonToggle: DebugElement;
	let component: NavComponent;
	let fixture1: ComponentFixture<NavComponent>;
	let fixture2: ComponentFixture<MockComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				MockComponent,
				NavComponent
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture1 = TestBed.createComponent(NavComponent);

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		component = fixture1.componentInstance;
		fixture1.detectChanges();

		fixture2 = TestBed.createComponent(MockComponent);
		fixture2.detectChanges();

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		buttonToggle = fixture2.debugElement.query(By.css('.nav-toggle'));
	});

	/* it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have isActive be true after .nav-toggle click', (): void => {
		component['isActive'] = false;
		component.ngOnInit();

		buttonToggle.triggerEventHandler('click', {});

		expect(component['isActive']).toBe(true);
	});

	it('should have isActive be false after .nav-toggle click', (): void => {
		component['isActive'] = true;
		component.ngOnInit();

		buttonToggle.triggerEventHandler('click', {});

		expect(component['isActive']).toBe(false);
	});

	it('should add the active class to the MockComponent after OnToggle()', (): void => {
		component['isActive'] = false;
		component['onToggle'](fixture2.nativeElement);

		expect(fixture2.nativeElement).toHaveClass('active');
	});

	it('should remove the active class from the MockComponent after OnToggle()', (): void => {
		component['isActive'] = true;
		component['onToggle'](fixture2.nativeElement);

		expect(fixture2.nativeElement).not.toHaveClass('active');
	}); */
});
