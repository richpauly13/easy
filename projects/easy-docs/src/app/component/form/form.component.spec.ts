import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';

import { FormComponent } from './form.component';

describe('FormComponent', (): void => {
	let component: FormComponent;
	let fixture: ComponentFixture<FormComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				FormComponent
			],
			imports: [
				ReactiveFormsModule
			],
			providers: [
				UntypedFormBuilder
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(FormComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a title of Components - Form - EASY', (): void => {
		component.ngOnInit();

		expect(component['title'].getTitle()).toEqual('Components - Form - EASY');
	});
});
