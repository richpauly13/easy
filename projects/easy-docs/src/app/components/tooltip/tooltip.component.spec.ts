import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TooltipComponent } from './tooltip.component';

describe('TooltipComponent', (): void => {
	let component: TooltipComponent;
	let fixture: ComponentFixture<TooltipComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				TooltipComponent
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(TooltipComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a title of Components - Tooltip - EASY', (): void => {
		component.ngOnInit();

		expect(component['title'].getTitle()).toEqual('Components - Tooltip - EASY');
	});
});
