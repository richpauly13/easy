import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CollapseComponent } from './collapse.component';

describe('CollapseComponent', (): void => {
	let component: CollapseComponent;
	let fixture: ComponentFixture<CollapseComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				CollapseComponent
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(CollapseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the collapse page', (): void => {
		expect(component).toBeTruthy();
	});
});
