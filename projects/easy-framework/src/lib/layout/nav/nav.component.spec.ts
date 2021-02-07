import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavComponent } from './nav.component';

@Component({
	selector: 'ez-nav, .nav-h, .nav-v',
	template: '<button class="nav-toggle" type="button">Toggle</button>',
	changeDetection: ChangeDetectionStrategy.OnPush
})
class MockComponent { }

describe('NavComponent', (): void => {
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

		component = fixture1.componentInstance;
		fixture1.detectChanges();

		fixture2 = TestBed.createComponent(MockComponent);
		fixture2.detectChanges();
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});
});
