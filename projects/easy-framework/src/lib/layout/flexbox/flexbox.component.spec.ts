import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FlexboxComponent } from './flexbox.component';

describe('FlexboxComponent', () => {
	let component: FlexboxComponent;
	let fixture: ComponentFixture<FlexboxComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [
				FlexboxComponent
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FlexboxComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
