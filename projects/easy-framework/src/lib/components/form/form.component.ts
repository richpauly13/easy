import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { FormService } from './form.service';

@Component({
	selector: '.checkbox-group, .field-group, .fieldset, .form-field, .form-group, .form-group-inline, .form-label, .radio-group',
	templateUrl: './form.component.html',
	styleUrls: [
		'./form.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
	@HostBinding('attr.class')
	public get hostClass(): string {
		return this.class.includes('form-label') && !this.class.includes('pad') ? `${this.class} pad-b-xs` : this.class;
	}

	@HostBinding('attr.for')
	public get hostFor(): string | null {
		return this.class.includes('form-label') ? this.for ?? `form-field-${this.uniqueFormFieldLabelId}` : null;
	}

	@HostBinding('attr.id')
	public get hostId(): string | null {
		return this.class.includes('form-field') ? this.id ?? `form-field-${this.uniqueFormFieldId}` : null;
	}

	@Input() public class: string;
	@Input() public for: string | null;
	@Input() public id: string | null;

	private uniqueFormFieldId: number;
	private uniqueFormFieldLabelId: number;

	public constructor(private formService: FormService) {
		this.class = '';
		this.for = null;
		this.id = null;
		this.uniqueFormFieldId = this.formService.uniqueFormFieldId;
		this.uniqueFormFieldLabelId = this.formService.uniqueFormFieldLabelId;
	}

	public ngOnInit(): void {
		this.uniqueFormFieldId = this.class.includes('form-field') ? this.formService.uniqueFormFieldId++ : 0;
		this.uniqueFormFieldLabelId = this.class.includes('form-label') ? this.formService.uniqueFormFieldLabelId++ : 0;
	}
}
