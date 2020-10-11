import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TooltipComponent } from './tooltip.component';

describe('TooltipComponent', (): void => {
	let component: TooltipComponent;
	let fixture: ComponentFixture<TooltipComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [TooltipComponent]
		}).compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(TooltipComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', (): void => {
		expect(component).toBeTruthy();
	});
});
