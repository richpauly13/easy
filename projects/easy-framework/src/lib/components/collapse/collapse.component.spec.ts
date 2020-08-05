import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CollapseComponent } from './collapse.component';

describe('CollapseComponent', () => {
	let component: CollapseComponent;
	let fixture: ComponentFixture<CollapseComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [CollapseComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CollapseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
