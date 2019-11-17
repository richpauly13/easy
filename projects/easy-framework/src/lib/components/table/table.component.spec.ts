import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
	let component: TableComponent;
	let fixture: ComponentFixture<TableComponent>;

	beforeEach(async(() => {
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

	it('should have a grid role', () => {
		component.class = 'table';

		expect(component.role).toEqual('grid');
	});
});
