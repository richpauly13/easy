import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SwitchComponent } from './switch.component';

describe('SwitchComponent', () => {
	let component: SwitchComponent;
	let fixture: ComponentFixture<SwitchComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [
				SwitchComponent
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SwitchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the switch page', () => {
		expect(component).toBeTruthy();
	});
});
