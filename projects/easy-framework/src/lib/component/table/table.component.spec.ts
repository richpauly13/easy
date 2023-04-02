import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe('TableComponent', (): void => {
	let component: TableComponent;
	let fixture: ComponentFixture<TableComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [TableComponent]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(TableComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a hostRole of grid', (): void => {
		component.class = 'table';

		expect(component.hostRole).toEqual('grid');
	});

	it('should have a hostRole of gridcell', (): void => {
		component.class = 'table-cell';

		expect(component.hostRole).toEqual('gridcell');
	});

	it('should have a hostRole of row', (): void => {
		component.class = 'table-row';

		expect(component.hostRole).toEqual('row');
	});

	it('should have a hostRole of columnheader', (): void => {
		component.class = 'table-header-cell';

		expect(component.hostRole).toEqual('columnheader');
	});
});
