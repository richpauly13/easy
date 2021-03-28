import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FlexboxComponent } from './flexbox.component';

describe('FlexboxComponent', (): void => {
	let component: FlexboxComponent;
	let fixture: ComponentFixture<FlexboxComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [FlexboxComponent]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(FlexboxComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});
});
