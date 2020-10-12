import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpaceComponent } from './space.component';

describe('SpaceComponent', (): void => {
	let component: SpaceComponent;
	let fixture: ComponentFixture<SpaceComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [ SpaceComponent ]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(SpaceComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', (): void => {
		expect(component).toBeTruthy();
	});
});
