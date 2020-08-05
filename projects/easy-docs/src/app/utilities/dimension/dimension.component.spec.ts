import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DimensionComponent } from './dimension.component';

describe('DimensionComponent', () => {
	let component: DimensionComponent;
	let fixture: ComponentFixture<DimensionComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [
				DimensionComponent
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DimensionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
