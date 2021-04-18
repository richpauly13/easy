import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VisibilityComponent } from './visibility.component';

describe('VisibilityComponent', (): void => {
	let component: VisibilityComponent;
	let fixture: ComponentFixture<VisibilityComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				VisibilityComponent
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(VisibilityComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a title of Utilities - Visibility - EASY', (): void => {
		component.ngOnInit();

		expect(component['title'].getTitle()).toEqual('Utilities - Visibility - EASY');
	});
});
