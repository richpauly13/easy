import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionComponent } from './dimension.component';

describe('WidthComponent', () => {
	let component: DimensionComponent;
	let fixture: ComponentFixture<DimensionComponent>;

	beforeEach(async(() => {
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
