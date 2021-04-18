import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PositionComponent } from './position.component';

describe('PositionComponent', (): void => {
	let component: PositionComponent;
	let fixture: ComponentFixture<PositionComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				PositionComponent
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(PositionComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a title of Utilities - Position - EASY', (): void => {
		component.ngOnInit();

		expect(component['title'].getTitle()).toEqual('Utilities - Position - EASY');
	});
});
