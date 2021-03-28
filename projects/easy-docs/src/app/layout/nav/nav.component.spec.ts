import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', (): void => {
	let component: NavComponent;
	let fixture: ComponentFixture<NavComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [NavComponent]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(NavComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});
});
