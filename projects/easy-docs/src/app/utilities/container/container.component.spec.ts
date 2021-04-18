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
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a title of Utilities - Container - EASY', (): void => {
		component.ngOnInit();

		expect(component['title'].getTitle()).toEqual('Utilities - Container - EASY');
	});
});
