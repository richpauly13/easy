import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContainerComponent } from './container.component';

describe('ContainerComponent', (): void => {
	let component: ContainerComponent;
	let fixture: ComponentFixture<ContainerComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				ContainerComponent
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(ContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('be should created', (): void => {
		expect(component).toBeTruthy();
	});
});
