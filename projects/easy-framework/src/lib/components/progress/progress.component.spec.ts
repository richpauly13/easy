import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressComponent } from './progress.component';

describe('ProgressComponent', () => {
	let component: ProgressComponent;
	let fixture: ComponentFixture<ProgressComponent>;

	beforeEach(async() => {
		await TestBed.configureTestingModule({
			declarations: [
				ProgressComponent
			]
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

	it('should have a hostMax of 5', (): void => {
		component.max = '5';

		expect(component.hostMax).toEqual('5');
	});

	it('should have a hostPosition of 1', (): void => {
		component.max = '5';
		component.value = '5';

		expect(component.hostPosition).toEqual('1');
	});

	it('should have a hostValue of 20', (): void => {
		component.value = '20';

		expect(component.hostValue).toEqual('20');
	});
});
