import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NonNullableFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'docs-form',
	templateUrl: './form.component.html',
	styleUrls: [
		'./form.component.scss'
	],
	encapsulation: ViewEncapsulation.Emulated,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
	public checkboxRadioGroupForm: UntypedFormGroup;
	public fieldGroupForm: UntypedFormGroup;
	public fieldsetForm: UntypedFormGroup;
	public formFieldForm: UntypedFormGroup;
	public formFieldStateForm: UntypedFormGroup;
	public formForm: UntypedFormGroup;
	public formGroupForm: UntypedFormGroup;
	public formLabelForm: UntypedFormGroup;

	public constructor(private formBuilder: NonNullableFormBuilder, private title: Title) {
		this.checkboxRadioGroupForm = this.formBuilder.group({});
		this.fieldGroupForm = this.formBuilder.group({});
		this.fieldsetForm = this.formBuilder.group({});
		this.formFieldForm = this.formBuilder.group({});
		this.formFieldStateForm = this.formBuilder.group({});
		this.formForm = this.formBuilder.group({});
		this.formGroupForm = this.formBuilder.group({});
		this.formLabelForm = this.formBuilder.group({});
	}

	public ngOnInit(): void {
		this.checkboxRadioGroupForm = this.formBuilder.group({
			color: null,
			like: null,
			name: ''
		});

		this.fieldGroupForm = this.formBuilder.group({
			name: ''
		});

		this.fieldsetForm = this.formBuilder.group({
			name: '',
			email: ''
		});
		this
		.formFieldForm = this.formBuilder.group({
			gender: 1,
			languages: '',
			name: '',
			note: ''
		});

		this.formFieldStateForm = this.formBuilder.group({
			disabled: {
				disabled: true,
				value: 'disabled'
			},
			readonly: 'readonly'
		});

		this.formFieldStateForm.updateValueAndValidity();
		this.formForm = this.formBuilder.group({
			name: ''
		});

		this.formGroupForm = this.formBuilder.group({
			email1: '',
			email2: '',
			name1: '',
			name2: ''
		});

		this.formLabelForm = this.formBuilder.group({
			name: ''
		});

		this.title.setTitle('Components - Form - EASY');
	}
}
