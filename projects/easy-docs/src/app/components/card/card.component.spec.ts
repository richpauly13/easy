import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', (): void => {
	let component: CardComponent;
	let fixture: ComponentFixture<CardComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				CardComponent
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(CardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the card page', (): void => {
		expect(component).toBeTruthy();
	});
});
