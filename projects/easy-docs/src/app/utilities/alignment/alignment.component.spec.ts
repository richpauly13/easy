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
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should have a title of Utilities - Alignment - EASY', (): void => {
		component.ngOnInit();

		expect(component['title'].getTitle()).toEqual('Utilities - Alignment - EASY');
	});
});
