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
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a title of Utilities - Display - EASY', (): void => {
		component.ngOnInit();

		expect(component['title'].getTitle()).toEqual('Utilities - Display - EASY');
	});
});
