import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ColorComponent } from './color.component';

describe('ColorComponent', (): void => {
	let component: ColorComponent;
	let fixture: ComponentFixture<ColorComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [ColorComponent]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(ColorComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a title of Utilities - Color - EASY', (): void => {
		component.ngOnInit();

		expect(component['title'].getTitle()).toEqual('Utilities - Color - EASY');
	});
});
