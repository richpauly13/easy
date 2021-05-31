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
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a title of Components - Badge - EASY', (): void => {
		component.ngOnInit();

		expect(component['title'].getTitle()).toEqual('Components - Badge - EASY');
	});
});
