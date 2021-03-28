import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DimensionComponent } from './dimension.component';

describe('DimensionComponent', (): void => {
	let component: DimensionComponent;
	let fixture: ComponentFixture<DimensionComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [DimensionComponent]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(DimensionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});
});
