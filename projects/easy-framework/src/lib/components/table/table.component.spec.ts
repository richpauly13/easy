import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
	let component: TableComponent;
	let fixture: ComponentFixture<TableComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [
				TableComponent
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should have a table class', () => {
		component.class = 'table';

		expect(component.class).toEqual('table');
	});

	it('should have a grid role when class is table', () => {
		component.class = 'table';

		expect(component.role).toEqual('grid');
	});

	it('should have a gridcell role when class is table-cell', () => {
		component.class = 'table-cell';

		expect(component.role).toEqual('gridcell');
	});

	it('should have a row role when class is table-row', () => {
		component.class = 'table-row';

		expect(component.role).toEqual('row');
	});

	it('should have a columnheader role when class is table-header-cell', () => {
		component.class = 'table-header-cell';

		expect(component.role).toEqual('columnheader');
	});
});
