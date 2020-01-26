import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiColumnComponent } from './multi-column.component';

describe('MultiColumnComponent', () => {
	let component: MultiColumnComponent;
	let fixture: ComponentFixture<MultiColumnComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MultiColumnComponent
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MultiColumnComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
