import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpaceComponent } from './space.component';

describe('SpaceComponent', (): void => {
	let component: SpaceComponent;
	let fixture: ComponentFixture<SpaceComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				SpaceComponent
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(SpaceComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a title of Utilities - Space - EASY', (): void => {
		component.ngOnInit();

		expect(component['title'].getTitle()).toEqual('Utilities - Space - EASY');
	});
});
