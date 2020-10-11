import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BadgeComponent } from './badge.component';

describe('BadgeComponent', (): void => {
	let component: BadgeComponent;
	let fixture: ComponentFixture<BadgeComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [BadgeComponent]
		}).compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(BadgeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', (): void => {
		expect(component).toBeTruthy();
	});
});
