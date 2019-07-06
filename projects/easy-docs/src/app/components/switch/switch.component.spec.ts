import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchComponent } from './switch.component';

describe('SwitchComponent', () => {
	let component: SwitchComponent;
	let fixture: ComponentFixture<SwitchComponent>;

	beforeEach(async(() => {
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
