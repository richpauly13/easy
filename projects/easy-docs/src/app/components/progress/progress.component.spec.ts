import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressComponent } from './progress.component';

describe('ProgressComponent', () => {
	let component: ProgressComponent;
	let fixture: ComponentFixture<ProgressComponent>;

	beforeEach(async() => {
		await TestBed.configureTestingModule({
			declarations: [ProgressComponent]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ProgressComponent);
		component = fixture.componentInstance;
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should have a title of Components - Progress - EASY', (): void => {
		component.ngOnInit();

		expect(component['title'].getTitle()).toEqual('Components - Progress - EASY');
	});
});
