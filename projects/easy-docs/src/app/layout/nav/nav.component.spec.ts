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
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a title of Layout - Nav - EASY', (): void => {
		component.ngOnInit();

		expect(component['title'].getTitle()).toEqual('Layout - Nav - EASY');
	});
});
