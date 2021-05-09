import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SlideshowComponent } from './slideshow.component';

describe('SlideshowComponent', (): void => {
	let component: SlideshowComponent;
	let fixture: ComponentFixture<SlideshowComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				SlideshowComponent
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(SlideshowComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});
});
