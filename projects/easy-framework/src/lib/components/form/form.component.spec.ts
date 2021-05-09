import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormComponent } from './form.component';

describe('FormComponent', (): void => {
	let component: FormComponent;
	let fixture: ComponentFixture<FormComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				FormComponent
			]
		}).compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(FormComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a hostClass of form-label pad-b-xs when class is form-label without pad-*', (): void => {
		component.class = 'form-label';

		expect(component.hostClass).toEqual('form-label pad-b-xs');
	});

	it('should have a hostClass of form-label pad-b-sm when class is form-label with pad-b-sm', (): void => {
		component.class = 'form-label pad-b-sm';

		expect(component.hostClass).toEqual('form-label pad-b-sm');
	});

	it('should have a hostClass of radio-label pad-lr-sm when class is radio-label without pad-*', (): void => {
		component.class = 'radio-label';

		expect(component.hostClass).toEqual('radio-label pad-lr-sm');
	});

	it('should have a hostFor of form-field-0 when for is null and class is form-label', (): void => {
		component.class = 'form-label';

		expect(component.hostFor).toEqual('form-field-0');
	});

	it('should have a hostFor of form-field-2 when for is form-field-2 and class is form-label', (): void => {
		component.class = 'form-label';
		component.for = 'form-field-2';

		expect(component.hostFor).toEqual('form-field-2');
	});

	it('should not have a hostFor when class is form-field', (): void => {
		component.class = 'form-field';

		expect(component.hostFor).toBeNull();
	});

	it('should have a hostId of of form-field-0 when id is null and class is form-field', (): void => {
		component.class = 'form-field';

		expect(component.hostId).toEqual('form-field-0');
	});

	it('should have a hostId of form-field-2 when id is form-field 2 and class is form-field', (): void => {
		component.class = 'form-field';
		component.id = 'form-field-2';

		expect(component.hostId).toEqual('form-field-2');
	});

	it('should not have a hostId when class is form-label', (): void => {
		component.class = 'form-label';

		expect(component.hostId).toBeNull();
	});

	it('should have a uniqueFormFieldId of 0 after ngOnInit() is called', (): void => {
		component.class = 'form-field';

		component.ngOnInit();

		expect(component['uniqueFormFieldId']).toEqual(0);
	});

	it('should have a uniqueFormFieldLabelId of 0 after ngOnInit() is called', (): void => {
		component.class = 'form-label';

		component.ngOnInit();

		expect(component['uniqueFormFieldLabelId']).toEqual(0);
	});
});
