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

	it('should have a hostFor of progress-0 when for is null and class is progress-label', (): void => {
		component.class = 'progress-label';

		expect(component.hostFor).toEqual('progress-0');
	});

	it('should have a hostFor of progress-2 when for is progress-2 and class is progress-label', (): void => {
		component.class = 'progress-label';
		component.for = 'progress-2';

		expect(component.hostFor).toEqual('progress-2');
	});

	it('should not have a hostFor when class is progress', (): void => {
		component.class = 'progress';

		expect(component.hostFor).toBeNull();
	});

	it('should have a hostId of progress-0 when id is null and class is progress', (): void => {
		component.class = 'progress';

		expect(component.hostId).toEqual('progress-0');
	});

	it('should have a hostId of progress-2 when id is progress 2 and class is progress', (): void => {
		component.class = 'progress';
		component.id = 'progress-2';

		expect(component.hostId).toEqual('progress-2');
	});

	it('should not have a hostId when class is progress label', (): void => {
		component.class = 'progress-label';

		expect(component.hostId).toBeNull();
	});

	it('should have a hostMax of 5', (): void => {
		component.max = '5';

		expect(component.hostMax).toEqual('5');
	});

	it('should have a hostMax of 100', (): void => {
		component.class = 'progress';
		component.max = null;

		expect(component.hostMax).toEqual('100');
	});

	it('should have a hostMax of null', (): void => {
		component.class = 'progress-label';

		expect(component.hostMax).toBeNull();
	});

	it('should have a hostPosition of 1', (): void => {
		component.max = '5';
		component.value = '5';

		expect(component.hostPosition).toEqual('1');
	});

	it('should have a hostPosition of -1', (): void => {
		component.value = null;

		expect(component.hostPosition).toEqual('-1');
	});

	it('should have a hostPosition of null', (): void => {
		component.class = 'progress-label';

		expect(component.hostPosition).toBeNull();
	});

	it('should have a hostValue of 20', (): void => {
		component.value = '20';

		expect(component.hostValue).toEqual('20');
	});

	it('should have a hostValue of 0', (): void => {
		component.value = '-1';

		expect(component.hostValue).toEqual('0');
	});

	it('should have a uniqueProgressInputId of 0 after ngOnInit() is called', (): void => {
		component.class = 'progress';

		component.ngOnInit();

		expect(component['uniqueProgressInputId']).toEqual(0);
	});

	it('should have a uniqueProgressLabelId of 0 after ngOnInit() is called', (): void => {
		component.class = 'progress-label';

		component.ngOnInit();

		expect(component['uniqueProgressLabelId']).toEqual(0);
	});
});
