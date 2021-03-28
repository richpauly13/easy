import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe('TableComponent', (): void => {
	let component: TableComponent;
	let fixture: ComponentFixture<TableComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [TableComponent]
		}).compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(TableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a table class', (): void => {
		component.class = 'table';

		expect(component.class).toEqual('table');
	});

	it('should have a grid role when class is table', (): void => {
		component.class = 'table';

		expect(component.role).toEqual('grid');
	});

	it('should have a gridcell role when class is table-cell', (): void => {
		component.class = 'table-cell';

		expect(component.role).toEqual('gridcell');
	});

	it('should have a row role when class is table-row', (): void => {
		component.class = 'table-row';

		expect(component.role).toEqual('row');
	});

	it('should have a columnheader role when class is table-header-cell', (): void => {
		component.class = 'table-header-cell';

		expect(component.role).toEqual('columnheader');
	});
});
