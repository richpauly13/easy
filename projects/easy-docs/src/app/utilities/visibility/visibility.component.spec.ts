import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VisibilityComponent } from './visibility.component';

describe('VisibilityComponent', (): void => {
	let component: VisibilityComponent;
	let fixture: ComponentFixture<VisibilityComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [VisibilityComponent]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(VisibilityComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});
});
