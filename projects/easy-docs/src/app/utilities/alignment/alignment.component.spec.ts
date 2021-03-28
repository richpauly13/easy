import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignmentComponent } from './alignment.component';

describe('AlignmentComponent', () => {
	let component: AlignmentComponent;
	let fixture: ComponentFixture<AlignmentComponent>;

	beforeEach(async() => {
		await TestBed.configureTestingModule({
			declarations: [AlignmentComponent]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AlignmentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
