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
		fixture.detectChanges();
	});

	it('should create', (): void => {
		expect(component).toBeTruthy();
	});
});
