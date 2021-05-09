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
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a hostRole of group', (): void => {
		component.class = 'cards';

		expect(component.hostRole).toEqual('group');
	});

	it('should have a hostRole of null', (): void => {
		expect(component.hostRole).toBeNull();
	});

	it('should have a hostTabindex of 0', (): void => {
		component.class = 'card-focus';

		expect(component.hostTabindex).toEqual('0');
	});

	it('should have a hostTabindex of null', (): void => {
		expect(component.hostTabindex).toBeNull();
	});
});
