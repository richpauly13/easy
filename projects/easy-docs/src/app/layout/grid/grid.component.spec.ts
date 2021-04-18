import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GridComponent } from './grid.component';

describe('GridComponent', (): void => {
	let component: GridComponent;
	let fixture: ComponentFixture<GridComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				GridComponent
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(GridComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a title of Layout - Grid - EASY', (): void => {
		component.ngOnInit();

		expect(component['title'].getTitle()).toEqual('Layout - Grid - EASY');
	});
});
