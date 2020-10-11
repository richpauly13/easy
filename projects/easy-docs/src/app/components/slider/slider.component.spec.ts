import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SliderComponent } from './slider.component';

describe('SliderComponent', (): void => {
	let component: SliderComponent;
	let fixture: ComponentFixture<SliderComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				SliderComponent
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(SliderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the slider page', (): void => {
		expect(component).toBeTruthy();
	});
});
