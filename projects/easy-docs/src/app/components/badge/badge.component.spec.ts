import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BadgeModule } from 'easy-framework';

import { BadgeComponent } from './badge.component';

describe('BadgeComponent', (): void => {
	let component: BadgeComponent;
	let fixture: ComponentFixture<BadgeComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				BadgeComponent
			],
			imports: [
				BadgeModule
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(BadgeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the badge page', (): void => {
		expect(component).toBeTruthy();
	});
});
