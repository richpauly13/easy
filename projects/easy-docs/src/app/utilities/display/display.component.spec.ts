import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DisplayComponent } from './display.component';

describe('DisplayComponent', (): void => {
	let component: DisplayComponent;
	let fixture: ComponentFixture<DisplayComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [DisplayComponent]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(DisplayComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});
});
